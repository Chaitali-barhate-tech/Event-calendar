import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { UserLogin } from '../../data/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  public loginForm: FormGroup;
  public user;
  public loginError = false;
  @ViewChild('loginEmail') loginEmailAddress: ElementRef;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private titleService: Title) {

    // Page Title
    this.titleService.setTitle('Event Calendar | Login');

    // Create form elements
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.loginEmailAddress.nativeElement.focus();
  }

  // Function to authenticate user info
  public login(email, password) {
    this.loginService.login(email, password).subscribe((res) => {
      if (res) {
        this.loginError = false;
        this.router.navigate(['/dashboard']);
        this.loginService.userInfo = res;
        localStorage.setItem('UserData', JSON.stringify(this.loginService.userInfo));
      } else {
        this.loginError = true;
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit() {
  }
}
