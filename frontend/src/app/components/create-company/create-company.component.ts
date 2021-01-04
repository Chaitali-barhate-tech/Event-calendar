import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { patternValidator } from '../../form-validators/pattern-validator';
import { fileValidator } from '../../form-validators/file-validator';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.sass']
})
export class CreateCompanyComponent implements OnInit {

  public formStatus: string;
  public companyFormValues = new FormData();
  public id: string;
  public companyName: string;
  public companyTypeList;
  public createCompanyForm;
  public submitted = false;
  public uploadedFiles: Array<File>;
  public checkboxValues = [];

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title) {
    // Page Title
    this.titleService.setTitle('Create Company');

    this.getCompanyType();
   }

  // Function to create form elements
  public createForm(): void {
    this.createCompanyForm = new FormGroup({
      companyName: new FormControl('', Validators.required),
      companyEmail: new FormControl('', [
        Validators.required,
        // tslint:disable-next-line: max-line-length
        patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      logo: new FormControl(null, [Validators.required, fileValidator('.png')]),
      sector: new FormArray([])
    });
  }

  // Function to submit company info form
  public SubmitCompanyData(): void {
    this.submitted = true;
    this.companyFormValues.append('upload', this.uploadedFiles[0], this.uploadedFiles[0].name);
    this.companyFormValues.append('companyName', this.createCompanyForm.value.companyName);
    this.companyFormValues.append('companyEmail', this.createCompanyForm.value.companyEmail);
    this.companyFormValues.append('companyType', JSON.stringify(this.checkboxValues));

    this.companyService.addCompany(this.companyFormValues)
      .subscribe((response) => {
        console.log('response received is ', response);
        this.router.navigate(['/dashboard']);
      },
        (err) => {
          console.log(err);
        }
      );
  }

  // Function to get filename
  public fileChange(element): void {
    this.uploadedFiles = element.target.files;
  }

  // Function to get list of company types
  public getCompanyType() {
    this.companyService.getCompanyType().subscribe((res) => {
      this.companyTypeList = res;
      for (const company of this.companyTypeList)  {
        this.createCompanyForm.controls.sector.push(new FormControl(false));
      }
    });
  }

  // Function to get selected checkbox values
  public getCheckBoxvalue(value) {
    if (this.checkboxValues.includes(value)) {
      const index = this.checkboxValues.indexOf(value);
      if (index > -1) {
        this.checkboxValues.splice(index, 1);
      }
    } else {
      this.checkboxValues.push(value);
    }
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.createForm();

    // Check if updating company info or creating new company
    if (this.id) {
      this.formStatus = 'Update';
    } else {
      this.formStatus = 'Create New';
    }
  }
}
