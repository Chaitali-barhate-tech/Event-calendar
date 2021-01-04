import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../data/company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public companyList: Company[];

  constructor(private companyService: CompanyService, private titleService: Title) {
    // Page Title
    this.titleService.setTitle('All Companies');
   }

  // Function to get all companies data
  public getCompanyList() {
    this.companyService.companiesList().subscribe((data: Company[]) => {
      this.companyList = data;
    });
  }

  ngOnInit() {
    this.getCompanyList();
  }

}
