import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../data/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public url = 'http://localhost:3000';

  public userInfo;

  constructor(private http: HttpClient) { }

  addUser(userInfo) {
    return this.http.post(`${this.url}/users/add`, userInfo);
  }

  getAllUsers(page, size) {
    return this.http.get(`${this.url}/users?pageNo=${page}&size=${size}`);
  }

  getUserById(id) {
    return this.http.get(`${this.url}/users/${id}`);
  }

  updateUser(id, userInfo) {
    return this.http.post(`${this.url}/users/edit/${id}`, userInfo);
  }

  getAllUsersCount() {
    return this.http.get(`${this.url}/users-count`);
  }

}
