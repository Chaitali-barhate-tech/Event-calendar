import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AllEventsPageComponent } from './components/all-events-page/all-events-page.component';
import { InputLimitDirective } from './directives/input-limit.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    CreateUserComponent,
    CreateCompanyComponent,
    CreateEventComponent,
    UserListComponent,
    CompanyListComponent,
    EventsListComponent,
    CompanyDetailComponent,
    UserDetailComponent,
    EventDetailComponent,
    PaginationComponent,
    EllipsisPipe,
    AllEventsPageComponent,
    InputLimitDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AngularFontAwesomeModule
  ],
  providers: [DatePipe, Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
