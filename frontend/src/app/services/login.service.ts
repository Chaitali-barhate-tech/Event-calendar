import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../data/user.model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  public url = 'http://localhost:3000';

  public userInfo;

  constructor(private http: HttpClient) { }

  public login(email: string, password: string) {
    return this.http.post(`${this.url}/auth`, { email, password });
  }

}
