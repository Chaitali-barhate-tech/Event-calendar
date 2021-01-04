import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserLogin } from '../../data/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: UserLogin[];
  public page;
  public pageUrl: string;
  public currentPage: number;
  public totalRecords: number;
  public recordsPerPage: number;
  public usersCount;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title) {
    // Page Title
    this.titleService.setTitle('All Users');
  }

  // Function to get users data
  public fetchAllUsers(page, recordsPerPage): void {
    this.userService.getAllUsers(page, recordsPerPage).subscribe((data: UserLogin[]) => {
      this.users = data;
    });
  }

  // Function to get all users count
  public getAllUsersCount() {
    this.userService.getAllUsersCount().subscribe((value) => {
      this.usersCount = parseInt(JSON.stringify(value), 10);
      this.totalRecords = this.usersCount;
    });
  }

  ngOnInit() {
    this.pageUrl = '/users-list/';
    this.recordsPerPage = 6;

    this.getAllUsersCount();

    // To call service on every page change
    this.route.params.subscribe(routeParams => {
      this.fetchAllUsers(routeParams.page, this.recordsPerPage);
      this.currentPage = routeParams.page;
    });

  }

}
