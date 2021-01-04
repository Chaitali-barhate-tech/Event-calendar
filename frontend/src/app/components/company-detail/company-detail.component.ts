import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../data/company.model';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.sass']
})
export class CompanyDetailComponent implements OnInit {

  public id: string;
  public companyInfo: Company;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title) {
    // Page Title
    this.titleService.setTitle('Company Details');
     }

  public getCompanyDetails() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.companyService.getCompanyDetails(this.id).subscribe((res: Company) => {
      this.companyInfo = res;
      console.log(res);
    });
  }

  ngOnInit() {
    this.getCompanyDetails();
  }
}
