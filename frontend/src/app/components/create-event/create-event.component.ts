import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { patternValidator } from '../../form-validators/pattern-validator';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { EventService } from '../../services/event.service';
import { CompanyName } from '../../data/company.model';
import { fileValidator } from '../../form-validators/file-validator';
import { InputLimitDirective } from '../../directives/input-limit.directive';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  public userEmail: string;
  public eventFormValues = new FormData();
  public createEventForm: FormGroup;
  public submitted = false;
  public uploadedFiles: Array<File>;
  public companyNames: CompanyName[];
  public today = new Date();
  public maxStartDate: Date;
  public minEndDate = new Date();
  public eventType: Array<string>;

  constructor(
    private eventService: EventService,
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title) {
    // Page Title
    this.titleService.setTitle('Create Event');

    // Get email of current logged in user
    this.userEmail = JSON.parse(localStorage.getItem('UserData'))._id;

    // Event types List
    this.eventType = ['Conference', 'Technical', 'Workshop', 'Training', 'Internship',
      'Management', 'Cultural', 'Entrepreneurship', 'Other'];
  }

  // Function to create FormFroup
  public createEventFeilds() {
    this.createEventForm = new FormGroup({
      eventName: new FormControl('', Validators.required),
      eventEmail: new FormControl('', [
        Validators.required,
        // tslint:disable-next-line: max-line-length
        patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      companyName: new FormControl('', Validators.required),
      eventImage: new FormControl('', [Validators.required, fileValidator('.png', '.jpg')]),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      eventType: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      eventDesc: new FormControl('', Validators.required)
    });
  }

  // Get companies names list
  public getCompaniesNames() {
    this.companyService.companiesNames().subscribe((res: CompanyName[]) => {
      this.companyNames = res;
    });
  }

  // Function to check Start Date Change
  public startDateClick() {
    if (this.createEventForm.controls.endDate.value.getDate !== undefined) {
      this.maxStartDate = this.createEventForm.controls.endDate.value;
    }
  }

  // Function to check End Date Change
  public endDateClick() {
    if (this.createEventForm.controls.startDate.value.getDate !== undefined) {
      this.minEndDate = this.createEventForm.controls.startDate.value;
    }
  }

  // Function to get filename
  public fileChange(element): void {
    this.uploadedFiles = element.target.files;
  }

  // Submit Event
  public SubmitEvent() {
    this.submitted = true;
    if (this.createEventForm.status !== 'INVALID') {
      this.eventFormValues.append('eventImage', this.uploadedFiles[0], this.uploadedFiles[0].name);
      this.eventFormValues.append('eventName', this.createEventForm.value.eventName);
      this.eventFormValues.append('eventEmail', this.createEventForm.value.eventEmail);
      this.eventFormValues.append('companyName', this.createEventForm.value.companyName);
      this.eventFormValues.append('startDate', this.createEventForm.value.startDate);
      this.eventFormValues.append('endDate', this.createEventForm.value.endDate);
      this.eventFormValues.append('eventType', this.createEventForm.value.eventType);
      this.eventFormValues.append('address', this.createEventForm.value.address);
      this.eventFormValues.append('city', this.createEventForm.value.city);
      this.eventFormValues.append('eventDesc', this.createEventForm.value.eventDesc);
      this.eventFormValues.append('user', this.userEmail);

      this.eventService.createEvent(this.eventFormValues).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/event-list/']);
      });
    }
  }

  // Select company from URL params
  public selectCompany() {
    this.route.params.subscribe(params => {
      if (params.company) {
        this.createEventForm.get('companyName').setValue(params.company);
      }
    });
  }

  ngOnInit() {
    this.createEventFeilds();
    this.getCompaniesNames();
    this.selectCompany();
  }
}
