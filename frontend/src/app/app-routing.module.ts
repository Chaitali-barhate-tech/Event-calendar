import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/loggedin.guard';
import { CheckAdmin } from './guards/checkAdmin.guard';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { AllEventsPageComponent } from './components/all-events-page/all-events-page.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'create-user', component: CreateUserComponent, canActivate: [AuthGuard, CheckAdmin] },
  { path: 'users-list', redirectTo: 'users-list/1', pathMatch: 'full', canActivate: [AuthGuard, CheckAdmin] },
  { path: 'users-list/:page', component: UserListComponent, canActivate: [AuthGuard, CheckAdmin] },
  { path: 'users/:id', component: UserDetailComponent, canActivate: [AuthGuard, CheckAdmin] },
  { path: 'create-user/:id', component: CreateUserComponent, canActivate: [AuthGuard, CheckAdmin] },
  { path: 'create-company', component: CreateCompanyComponent, canActivate: [AuthGuard] },
  { path: 'company/:id', component: CompanyDetailComponent, canActivate: [AuthGuard] },
  { path: 'company-list', component: CompanyListComponent, canActivate: [AuthGuard] },
  // {
  //   path: 'event', component: AllEventsPageComponent, children: [
  //     { path: 'create', component: CreateEventComponent }
  //   ]
  // },
  { path: 'create-event', component: CreateEventComponent, canActivate: [AuthGuard] },
  { path: 'event-list', component: AllEventsPageComponent, canActivate: [AuthGuard] },
  { path: 'events/:id', component: EventDetailComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent, canActivate: [LoggedInGuard] },
  { path: '**', redirectTo: '/dashboard', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
