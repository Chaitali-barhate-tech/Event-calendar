import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getCompanyType() {
    return this.http.get(`${this.url}/company/type`);
  }

  public addCompany(companyData) {
    return this.http.post(`${this.url}/company/add`, companyData);
  }

  public companiesList() {
    return this.http.get(`${this.url}/company`);
  }

  public companiesNames() {
    return this.http.get(`${this.url}/company/names`);
  }

  public getCompanyDetails(id) {
    return this.http.get(`${this.url}/company/${id}`);
  }
}
