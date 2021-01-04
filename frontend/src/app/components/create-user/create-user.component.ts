import { Title } from '@angular/platform-browser';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { patternValidator } from '../../form-validators/pattern-validator';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass']
})
export class CreateUserComponent implements OnInit, AfterViewInit, OnDestroy {

  public createUserForm: FormGroup;
  public submitted = false;
  public userData: object;
  public errMsg;
  public id: string;
  public user;
  public formStatus: string;
  public disableInput = false;
  public validationError = false;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private titleService: Title) {
    // Page Title
    this.titleService.setTitle('Create User');
  }

  ngAfterViewInit() {
    console.log('After view init');
  }

  ngOnDestroy() {
    console.log('Create User Destroy');
  }


  // Function to get single user info by ID
  public getUserById() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.userService.getUserById(this.id).subscribe(res => {
        this.user = res;
        this.createUserForm.get('firstname').setValue(this.user.firstname);
        this.createUserForm.get('lastname').setValue(this.user.lastname);
        this.createUserForm.get('email').setValue(this.user.email);
        this.createUserForm.get('password').setValue(this.user.password);
        this.createUserForm.get('usertype').setValue(this.user.usertype);
      }, error => console.log('SERVICE ERROR'));
    });
  }

  // Function to add new user
  public addNewUser(userData) {
    this.userService.addUser(userData)
      .subscribe((res) => {
        this.router.navigate(['/dashboard']);
      },
        (err) => {
          this.errMsg = err.error;
          if (this.errMsg.errors instanceof Array) {
            this.validationError = true;
            this.errMsg = err.error.errors;
          }
        }
      );
  }

  // Function to update user data
  public updateUserData(id, userData) {
    this.userService.updateUser(id, userData)
      .subscribe((res) => {
        this.router.navigate(['/users-list']);
      },
        (err) => {
          console.log(err.error);
        }
      );
  }

  // Create From Fields
  public UserForm() {
    this.createUserForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        // tslint:disable-next-line: max-line-length
        patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        patternValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]),
      usertype: new FormControl('', Validators.required)
    });
  }

  // Submit new user form data
  public onSubmit() {
    this.submitted = true;
    this.userData = this.createUserForm.value;
    if (!this.createUserForm.invalid) {
      if (this.id) {
        this.updateUserData(this.id, this.userData);
      } else {
        this.addNewUser(this.userData);
      }
    }
  }

  ngOnInit() {
    console.log('ngOnInit user form');
    this.id = this.route.snapshot.paramMap.get('id');

    this.UserForm();

    // Check if user is updating data or adding new user
    if (this.id) {
      this.formStatus = 'Update';
      this.getUserById();
      this.disableInput = true;
    } else {
      this.formStatus = 'Create New';
      this.disableInput = false;
    }
  }
}
