import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UserLogin } from '../../data/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userData: UserLogin;

  constructor(public loginService: LoginService, private router: Router) {
    this.userData = JSON.parse(localStorage.getItem('UserData'));
  }

  // Function to check if user id 'Admin'
  public checkAdminUser() {
    if (this.userData.usertype === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  // Function to logout
  public logout() {
    localStorage.removeItem('UserData');
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
