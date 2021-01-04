import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { UserLogin } from './data/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  public userData: UserLogin;

  constructor(public loginService: LoginService, private router: Router) {
    this.userData = JSON.parse(localStorage.getItem('UserData'));
  }

  public getUser() {
    if (localStorage.getItem('UserData') != null) {
      return true;
    } else {
      return false;
    }
  }
}
