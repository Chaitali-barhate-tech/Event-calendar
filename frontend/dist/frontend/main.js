(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_loggedin_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/loggedin.guard */ "./src/app/guards/loggedin.guard.ts");
/* harmony import */ var _guards_checkAdmin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/checkAdmin.guard */ "./src/app/guards/checkAdmin.guard.ts");
/* harmony import */ var _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/create-user/create-user.component */ "./src/app/components/create-user/create-user.component.ts");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-detail/user-detail.component */ "./src/app/components/user-detail/user-detail.component.ts");
/* harmony import */ var _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/create-company/create-company.component */ "./src/app/components/create-company/create-company.component.ts");
/* harmony import */ var _components_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/company-list/company-list.component */ "./src/app/components/company-list/company-list.component.ts");
/* harmony import */ var _components_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/create-event/create-event.component */ "./src/app/components/create-event/create-event.component.ts");
/* harmony import */ var _components_all_events_page_all_events_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/all-events-page/all-events-page.component */ "./src/app/components/all-events-page/all-events-page.component.ts");
/* harmony import */ var _components_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/event-detail/event-detail.component */ "./src/app/components/event-detail/event-detail.component.ts");
/* harmony import */ var _components_company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/company-detail/company-detail.component */ "./src/app/components/company-detail/company-detail.component.ts");

















var routes = [
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'create-user', component: _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_8__["CreateUserComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _guards_checkAdmin_guard__WEBPACK_IMPORTED_MODULE_7__["CheckAdmin"]] },
    { path: 'users-list', redirectTo: 'users-list/1', pathMatch: 'full', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _guards_checkAdmin_guard__WEBPACK_IMPORTED_MODULE_7__["CheckAdmin"]] },
    { path: 'users-list/:page', component: _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__["UserListComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _guards_checkAdmin_guard__WEBPACK_IMPORTED_MODULE_7__["CheckAdmin"]] },
    { path: 'users/:id', component: _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _guards_checkAdmin_guard__WEBPACK_IMPORTED_MODULE_7__["CheckAdmin"]] },
    { path: 'create-user/:id', component: _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_8__["CreateUserComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _guards_checkAdmin_guard__WEBPACK_IMPORTED_MODULE_7__["CheckAdmin"]] },
    { path: 'create-company', component: _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_11__["CreateCompanyComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'company/:id', component: _components_company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_16__["CompanyDetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'company-list', component: _components_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_12__["CompanyListComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    // {
    //   path: 'event', component: AllEventsPageComponent, children: [
    //     { path: 'create', component: CreateEventComponent }
    //   ]
    // },
    { path: 'create-event', component: _components_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_13__["CreateEventComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'event-list', component: _components_all_events_page_all_events_page_component__WEBPACK_IMPORTED_MODULE_14__["AllEventsPageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'events/:id', component: _components_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_15__["EventDetailComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], canActivate: [_guards_loggedin_guard__WEBPACK_IMPORTED_MODULE_6__["LoggedInGuard"]] },
    { path: '**', redirectTo: '/dashboard', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header *ngIf=\"getUser()\"></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<app-footer *ngIf=\"getUser()\"></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.title = 'frontend';
        this.userData = JSON.parse(localStorage.getItem('UserData'));
    }
    AppComponent.prototype.getUser = function () {
        if (localStorage.getItem('UserData') != null) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/ellipsis.pipe */ "./src/app/pipes/ellipsis.pipe.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/create-user/create-user.component */ "./src/app/components/create-user/create-user.component.ts");
/* harmony import */ var _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/create-company/create-company.component */ "./src/app/components/create-company/create-company.component.ts");
/* harmony import */ var _components_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/create-event/create-event.component */ "./src/app/components/create-event/create-event.component.ts");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/company-list/company-list.component */ "./src/app/components/company-list/company-list.component.ts");
/* harmony import */ var _components_events_list_events_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/events-list/events-list.component */ "./src/app/components/events-list/events-list.component.ts");
/* harmony import */ var _components_company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/company-detail/company-detail.component */ "./src/app/components/company-detail/company-detail.component.ts");
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/user-detail/user-detail.component */ "./src/app/components/user-detail/user-detail.component.ts");
/* harmony import */ var _components_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/event-detail/event-detail.component */ "./src/app/components/event-detail/event-detail.component.ts");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/app/components/pagination/pagination.component.ts");
/* harmony import */ var _components_all_events_page_all_events_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/all-events-page/all-events-page.component */ "./src/app/components/all-events-page/all-events-page.component.ts");
/* harmony import */ var _directives_input_limit_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./directives/input-limit.directive */ "./src/app/directives/input-limit.directive.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
                _components_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_17__["CreateUserComponent"],
                _components_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_18__["CreateCompanyComponent"],
                _components_create_event_create_event_component__WEBPACK_IMPORTED_MODULE_19__["CreateEventComponent"],
                _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_20__["UserListComponent"],
                _components_company_list_company_list_component__WEBPACK_IMPORTED_MODULE_21__["CompanyListComponent"],
                _components_events_list_events_list_component__WEBPACK_IMPORTED_MODULE_22__["EventsListComponent"],
                _components_company_detail_company_detail_component__WEBPACK_IMPORTED_MODULE_23__["CompanyDetailComponent"],
                _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_24__["UserDetailComponent"],
                _components_event_detail_event_detail_component__WEBPACK_IMPORTED_MODULE_25__["EventDetailComponent"],
                _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_26__["PaginationComponent"],
                _pipes_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_9__["EllipsisPipe"],
                _components_all_events_page_all_events_page_component__WEBPACK_IMPORTED_MODULE_27__["AllEventsPageComponent"],
                _directives_input_limit_directive__WEBPACK_IMPORTED_MODULE_28__["InputLimitDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["OwlNativeDateTimeModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/all-events-page/all-events-page.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/all-events-page/all-events-page.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"all-events\">\r\n  <div class=\"events-list-header\">\r\n    <div class=\"section-container\">\r\n      <div class=\"show-all-events\">\r\n        <button (click)=\"showAllEvents()\">Show All Events</button>\r\n      </div>\r\n      <div class=\"search-events\">\r\n        <form [formGroup]=\"searchEventForm\">\r\n          <input type=\"text\" class=\"search-input\" placeholder=\"search events\" formControlName=\"searchText\" #searchText\r\n            (input)=\"onSearchChange($event.target.value)\" />\r\n          <input type=\"submit\" class=\"submit\" value=\"Search\" (click)=\"search(searchEventForm.value.searchText)\" />\r\n        </form>\r\n        <div class=\"search-suggestions\" *ngIf=\"showSuggestions\">\r\n          <ul>\r\n            <li *ngFor=\"let eventName of eventSuggestions\">\r\n              <a [routerLink]=\"['/events', eventName._id]\" routerLinkActive=\"router-link-active\">{{eventName}}</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"filter-events\">\r\n        <form [formGroup]=\"eventfilterForm\">\r\n          <select formControlName=\"filterType\" placeholder=\"Filter Events by Type\" #filterType\r\n            (change)=\"filterEvent(eventfilterForm.value.filterType)\">\r\n            <option *ngFor=\"let eventtype of eventTypes\" [value]=\"eventtype._id\">{{eventtype._id}} [{{eventtype.count}}]\r\n            </option>\r\n          </select>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-events-list [eventsList]=\"allEvents\"></app-events-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/all-events-page/all-events-page.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/all-events-page/all-events-page.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-events form {\n  justify-content: flex-end; }\n  .search-events form .search-input {\n    width: 300px;\n    border-radius: 8px 0 0 8px;\n    box-shadow: none; }\n  .search-events form .submit {\n    width: 120px;\n    border-radius: 0 8px 8px 0;\n    box-shadow: none;\n    cursor: pointer;\n    background: #b57109;\n    border: none;\n    color: #fff;\n    letter-spacing: 0.5px;\n    text-transform: uppercase; }\n  .events-list-header .section-container {\n  padding: 35px 0 25px;\n  display: flex;\n  justify-content: space-between; }\n  .events-list-header .section-container form {\n    padding: 0;\n    display: flex; }\n  .events-list-header .section-container .filter-events {\n    width: 30%; }\n  .events-list-header .section-container .show-all-events button {\n    background: #1d989e;\n    border: none;\n    border-radius: 5px;\n    font-size: 14px;\n    color: #fff;\n    padding: 10px 20px;\n    letter-spacing: 0.7px;\n    cursor: pointer;\n    outline: none; }\n  .search-suggestions {\n  box-shadow: 0 0 5px #eee; }\n  .search-suggestions ul {\n    padding: 10px 0;\n    border: 1px solid #eee;\n    margin: 0; }\n  .search-suggestions ul li {\n      list-style-type: none;\n      padding: 5px 5px 5px 10px;\n      font-size: 14px; }\n  .search-suggestions ul li a {\n        color: #767676; }\n  .search-suggestions ul li a:hover {\n          color: #767676;\n          text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwtZXZlbnRzLXBhZ2UvRDpcXFByb2plY3RcXGV2ZW50LWNhbGVuZGFyXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWxsLWV2ZW50cy1wYWdlXFxhbGwtZXZlbnRzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx5QkFBeUIsRUFBQTtFQUY3QjtJQUlNLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZ0JBQWdCLEVBQUE7RUFOdEI7SUFTTSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHlCQUF5QixFQUFBO0VBSS9CO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTtFQUhoQztJQUtJLFVBQVU7SUFDVixhQUFhLEVBQUE7RUFOakI7SUFTSSxVQUFVLEVBQUE7RUFUZDtJQWFNLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsYUFBYSxFQUFBO0VBSW5CO0VBQ0Usd0JBQXdCLEVBQUE7RUFEMUI7SUFHSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFNBQVMsRUFBQTtFQUxiO01BT00scUJBQXFCO01BQ3JCLHlCQUF5QjtNQUN6QixlQUFlLEVBQUE7RUFUckI7UUFXUSxjQUFjLEVBQUE7RUFYdEI7VUFhVSxjQUFjO1VBQ2QsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsbC1ldmVudHMtcGFnZS9hbGwtZXZlbnRzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWV2ZW50cyB7XHJcbiAgZm9ybSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuc3VibWl0IHtcclxuICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDhweCA4cHggMDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYjU3MTA5O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5ldmVudHMtbGlzdC1oZWFkZXIgLnNlY3Rpb24tY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAzNXB4IDAgMjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmb3JtIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAuZmlsdGVyLWV2ZW50cyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxuICAuc2hvdy1hbGwtZXZlbnRzIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMxZDk4OWU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjdweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uc2VhcmNoLXN1Z2dlc3Rpb25zIHtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICNlZWU7XHJcbiAgdWwge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpIHtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICM3Njc2NzY7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/all-events-page/all-events-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/all-events-page/all-events-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: AllEventsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllEventsPageComponent", function() { return AllEventsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _events_list_events_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events-list/events-list.component */ "./src/app/components/events-list/events-list.component.ts");





var AllEventsPageComponent = /** @class */ (function () {
    function AllEventsPageComponent(eventService) {
        this.eventService = eventService;
        this.showSuggestions = false;
    }
    // viewchild
    AllEventsPageComponent.prototype.ngAfterViewInit = function () {
        console.log(this.eventList);
    };
    // Function to show search suggestions
    AllEventsPageComponent.prototype.onSearchChange = function (value) {
        var _this = this;
        if (value.length > 1) {
            this.eventService.eventSearchSuggestion(value).subscribe(function (res) {
                console.log(res);
                _this.eventSuggestions = res;
                if (_this.eventSuggestions.length > 0) {
                    _this.showSuggestions = true;
                }
                else {
                    _this.showSuggestions = false;
                }
            });
        }
        else {
            this.showSuggestions = false;
        }
    };
    // Funtion to create Filter form element
    AllEventsPageComponent.prototype.createEventFilterForm = function () {
        this.eventfilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            filterType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    // Function to get all event types
    AllEventsPageComponent.prototype.getEventTypes = function () {
        var _this = this;
        this.eventService.getEventTypes().subscribe(function (res) {
            _this.eventTypes = res;
        });
    };
    // Function to filter events by type
    AllEventsPageComponent.prototype.filterEvent = function (type) {
        var _this = this;
        this.eventService.filterEventsbyType(type).subscribe(function (res) {
            _this.allEvents = res;
        });
    };
    // Function to create event search form fields
    AllEventsPageComponent.prototype.eventSearchForm = function () {
        this.searchEventForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            searchText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    // Function to submit search form
    AllEventsPageComponent.prototype.search = function (text) {
        var _this = this;
        if (this.searchEventForm.status === 'VALID') {
            this.eventService.searchEvent(text).subscribe(function (res) {
                _this.allEvents = res;
            });
        }
    };
    // Function to get all Events List
    AllEventsPageComponent.prototype.showAllEvents = function () {
        var _this = this;
        this.eventService.getEventsList().subscribe(function (res) {
            _this.allEvents = res;
        });
        this.eventfilterForm.get('filterType').setValue('');
        this.searchEventForm.get('searchText').setValue('');
    };
    AllEventsPageComponent.prototype.ngOnInit = function () {
        this.createEventFilterForm();
        this.eventSearchForm();
        this.showAllEvents();
        this.getEventTypes();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_events_list_events_list_component__WEBPACK_IMPORTED_MODULE_4__["EventsListComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _events_list_events_list_component__WEBPACK_IMPORTED_MODULE_4__["EventsListComponent"])
    ], AllEventsPageComponent.prototype, "eventList", void 0);
    AllEventsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-events-page',
            template: __webpack_require__(/*! ./all-events-page.component.html */ "./src/app/components/all-events-page/all-events-page.component.html"),
            styles: [__webpack_require__(/*! ./all-events-page.component.scss */ "./src/app/components/all-events-page/all-events-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]])
    ], AllEventsPageComponent);
    return AllEventsPageComponent;
}());



/***/ }),

/***/ "./src/app/components/company-detail/company-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/company-detail/company-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  company-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/company-detail/company-detail.component.sass":
/*!*************************************************************************!*\
  !*** ./src/app/components/company-detail/company-detail.component.sass ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS1kZXRhaWwvY29tcGFueS1kZXRhaWwuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/company-detail/company-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/company-detail/company-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: CompanyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailComponent", function() { return CompanyDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/services/company.service.ts");




var CompanyDetailComponent = /** @class */ (function () {
    function CompanyDetailComponent(companyService, router, route) {
        this.companyService = companyService;
        this.router = router;
        this.route = route;
    }
    CompanyDetailComponent.prototype.getCompanyDetails = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.companyService.getCompanyDetails(this.id).subscribe(function (res) {
            _this.companyInfo = res;
            console.log(res);
        });
    };
    CompanyDetailComponent.prototype.ngOnInit = function () {
        this.getCompanyDetails();
    };
    CompanyDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-detail',
            template: __webpack_require__(/*! ./company-detail.component.html */ "./src/app/components/company-detail/company-detail.component.html"),
            styles: [__webpack_require__(/*! ./company-detail.component.sass */ "./src/app/components/company-detail/company-detail.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CompanyDetailComponent);
    return CompanyDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/company-list/company-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/company-list/company-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"company-list-container\">\r\n  <div class=\"section-heading\">\r\n    <span>All Companies</span>\r\n  </div>\r\n  <div class=\"company-list\">\r\n    <div class=\"company-info\" *ngFor=\"let company of companyList\">\r\n      <div class=\"company-logo\">\r\n        <img src=\"http://localhost:3000/file/{{company.companyLogo}}\" />\r\n      </div>\r\n      <div class=\"company-details\">\r\n        <div class=\"company-name\">\r\n          <h3>{{company.companyName}}</h3>\r\n        </div>\r\n        <div class=\"company-type\">\r\n          <label>Company Type: </label>\r\n          <ul>\r\n            <li *ngFor=\"let type of company.companyType\">\r\n              <span>{{type}}</span>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"company-email\">\r\n          <label>Email: </label>\r\n          <span>{{company.companyEmail}}</span>\r\n        </div>\r\n        <div class=\"create-event\">\r\n          <a [routerLink]=\"['/create-event/',{company: company.companyName}]\">Create Event</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/company-list/company-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/company-list/company-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".company-logo {\n  text-align: center; }\n  .company-logo img {\n    max-width: 150px;\n    max-height: 70px; }\n  .company-list-container {\n  width: 90%;\n  margin: 0 auto;\n  padding: 50px 0; }\n  .company-list {\n  padding-top: 20px;\n  display: flex;\n  flex-wrap: wrap; }\n  .company-list .company-info {\n    width: 22%;\n    padding: 35px 20px 80px;\n    border: 1px solid #ddd;\n    margin-bottom: 30px;\n    margin-right: 3%;\n    box-shadow: 0 0 10px #eee;\n    border-radius: 8px;\n    box-sizing: border-box;\n    position: relative; }\n  .company-list .company-info:nth-child(4n) {\n      margin-right: 0; }\n  .company-list .company-info label {\n      color: #222;\n      font-size: 14px;\n      line-height: 21px; }\n  .company-list .company-info .company-type ul {\n      padding: 6px 0 0 35px;\n      margin: 0; }\n  .company-list .company-info .company-type ul li {\n        color: #555; }\n  .company-list .company-info .company-type span {\n      font-size: 14px;\n      line-height: 21px;\n      color: #555; }\n  .company-list .company-info .company-name {\n      padding: 15px 0; }\n  .company-list .company-info .company-name h3 {\n        color: #109840;\n        margin: 0;\n        text-shadow: none; }\n  .company-list .company-info .company-email {\n      padding: 20px 0 0; }\n  .company-list .company-info .company-email span {\n        font-size: 14px;\n        line-height: 21px;\n        color: #044ed6; }\n  .create-event {\n  width: 90%;\n  position: absolute;\n  bottom: 30px;\n  left: 50%;\n  transform: translateX(-50%); }\n  .create-event a {\n    display: block;\n    min-width: 100%;\n    text-align: center;\n    font-size: 14px;\n    padding: 5px;\n    border-radius: 5px;\n    text-transform: capitalize;\n    box-sizing: border-box;\n    color: #ce4c00;\n    border: 1px solid #ce4c00; }\n  .create-event a:hover {\n      background: #ffeace;\n      text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LWxpc3QvRDpcXFByb2plY3RcXGV2ZW50LWNhbGVuZGFyXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29tcGFueS1saXN0XFxjb21wYW55LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUdJLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtFQUlwQjtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsZUFBZSxFQUFBO0VBR2pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixlQUFlLEVBQUE7RUFIakI7SUFNSSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQixFQUFBO0VBZHRCO01BaUJNLGVBQWUsRUFBQTtFQWpCckI7TUFxQk0sV0FBVztNQUNYLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtFQXZCdkI7TUE0QlEscUJBQXFCO01BQ3JCLFNBQVMsRUFBQTtFQTdCakI7UUErQlUsV0FBVyxFQUFBO0VBL0JyQjtNQW1DUSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFdBQVcsRUFBQTtFQXJDbkI7TUEwQ00sZUFBZSxFQUFBO0VBMUNyQjtRQTRDUSxjQUFjO1FBQ2QsU0FBUztRQUNULGlCQUFpQixFQUFBO0VBOUN6QjtNQWtETSxpQkFBaUIsRUFBQTtFQWxEdkI7UUFvRFEsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjLEVBQUE7RUFNdEI7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsMkJBQTJCLEVBQUE7RUFMN0I7SUFPSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCx5QkFBeUIsRUFBQTtFQWhCN0I7TUFrQk0sbUJBQW1CO01BQ25CLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LWxpc3QvY29tcGFueS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhbnktbG9nbyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jb21wYW55LWxpc3QtY29udGFpbmVyIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDUwcHggMDtcclxufVxyXG5cclxuLmNvbXBhbnktbGlzdCB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIC5jb21wYW55LWluZm8ge1xyXG4gICAgd2lkdGg6IDIyJTtcclxuICAgIHBhZGRpbmc6IDM1cHggMjBweCA4MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2VlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJjpudGgtY2hpbGQoNG4pIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbXBhbnktdHlwZSB7XHJcbiAgICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMCAwIDM1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29tcGFueS1uYW1lIHtcclxuICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgY29sb3I6ICMxMDk4NDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29tcGFueS1lbWFpbCB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMCAwO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgY29sb3I6ICMwNDRlZDY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jcmVhdGUtZXZlbnQge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMzBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogI2NlNGMwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZTRjMDA7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZWFjZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/company-list/company-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/company-list/company-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: CompanyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyListComponent", function() { return CompanyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/services/company.service.ts");



var CompanyListComponent = /** @class */ (function () {
    function CompanyListComponent(companyService) {
        this.companyService = companyService;
    }
    // Function to get all companies data
    CompanyListComponent.prototype.getCompanyList = function () {
        var _this = this;
        this.companyService.companiesList().subscribe(function (data) {
            _this.companyList = data;
        });
    };
    CompanyListComponent.prototype.ngOnInit = function () {
        this.getCompanyList();
    };
    CompanyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-list',
            template: __webpack_require__(/*! ./company-list.component.html */ "./src/app/components/company-list/company-list.component.html"),
            styles: [__webpack_require__(/*! ./company-list.component.scss */ "./src/app/components/company-list/company-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]])
    ], CompanyListComponent);
    return CompanyListComponent;
}());



/***/ }),

/***/ "./src/app/components/create-company/create-company.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-company/create-company.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\r\n  <div class=\"heading\">\r\n    <h2>{{formStatus}} Company</h2>\r\n  </div>\r\n  <form [formGroup]=\"createCompanyForm\" action=\"/create-company\" method=\"post\" enctype=\"multipart/form-data\"\r\n    class=\"create-form\">\r\n    <div class=\"form-input\">\r\n      <div class=\"input-field\">\r\n        <input type=\"text\" placeholder=\"Company Name\" formControlName=\"companyName\" #companyName />\r\n        <div *ngIf=\"createCompanyForm.controls['companyName'].errors && (submitted ||\r\n            !createCompanyForm.controls['companyName'].pristine)\" class=\"error-msg\">\r\n          <p [hidden]=\"!createCompanyForm.controls['companyName'].errors.required\">Company Name is Required.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <input type=\"text\" placeholder=\"Company Email\" formControlName=\"companyEmail\" #companyEmail />\r\n        <div *ngIf=\"createCompanyForm.controls['companyEmail'].errors && (submitted ||\r\n            !createCompanyForm.controls['companyEmail'].pristine)\" class=\"error-msg\">\r\n          <p [hidden]=\"!createCompanyForm.controls['companyEmail'].errors.required\">Email is Required.</p>\r\n          <p [hidden]=\"!createCompanyForm.controls['companyEmail'].errors.patternInvalid\">Email is invalid.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <label>Company Logo:</label>\r\n        <input (change)=\"fileChange($event)\" type=\"file\" id=\"inputGroupFile01\"\r\n          aria-describedby=\"inputGroupFileAddon01\" formControlName=\"logo\" #logo>\r\n          <div *ngIf=\"createCompanyForm.controls['logo'].errors && (submitted ||\r\n            !createCompanyForm.controls['logo'].pristine)\" class=\"error-msg\">\r\n            <p [hidden]=\"!createCompanyForm.controls['logo'].errors.required\">Please add event image.</p>\r\n            <p [hidden]=\"!createCompanyForm.controls['logo'].errors.requiredFileType\">Image type should be *.png only</p>\r\n          </div>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <label>Sector: </label>\r\n        <div class=\"checkbox\" formArrayName=\"sector\">\r\n          <div class=\"company-type-checkbox\" *ngFor=\"let companyType of companyTypeList; let idx=index\">\r\n            <label class=\"checkbox-container\"><span>{{companyType.type}}</span>\r\n              <input type=\"checkbox\" [value]=\"companyType.type\" (change)=\"getCheckBoxvalue(companyType.type)\"\r\n                [formControlName]=\"idx\" />\r\n              <span class=\"checkmark\"></span>\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button class=\"button\" type=\"submit\" (click)=\"SubmitCompanyData()\">Submit</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/create-company/create-company.component.sass":
/*!*************************************************************************!*\
  !*** ./src/app/components/create-company/create-company.component.sass ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLWNvbXBhbnkvY3JlYXRlLWNvbXBhbnkuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/create-company/create-company.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/create-company/create-company.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function() { return CreateCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _form_validators_pattern_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../form-validators/pattern-validator */ "./src/app/form-validators/pattern-validator.ts");
/* harmony import */ var _form_validators_file_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../form-validators/file-validator */ "./src/app/form-validators/file-validator.ts");







var CreateCompanyComponent = /** @class */ (function () {
    function CreateCompanyComponent(companyService, router, route) {
        this.companyService = companyService;
        this.router = router;
        this.route = route;
        this.companyFormValues = new FormData();
        this.submitted = false;
        this.checkboxValues = [];
        this.getCompanyType();
    }
    // Function to create form elements
    CreateCompanyComponent.prototype.createForm = function () {
        this.createCompanyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            companyEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                // tslint:disable-next-line: max-line-length
                Object(_form_validators_pattern_validator__WEBPACK_IMPORTED_MODULE_5__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ]),
            logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_form_validators_file_validator__WEBPACK_IMPORTED_MODULE_6__["fileValidator"])('.png')]),
            sector: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
    };
    // Function to submit company info form
    CreateCompanyComponent.prototype.SubmitCompanyData = function () {
        var _this = this;
        this.submitted = true;
        this.companyFormValues.append('upload', this.uploadedFiles[0], this.uploadedFiles[0].name);
        this.companyFormValues.append('companyName', this.createCompanyForm.value.companyName);
        this.companyFormValues.append('companyEmail', this.createCompanyForm.value.companyEmail);
        this.companyFormValues.append('companyType', JSON.stringify(this.checkboxValues));
        this.companyService.addCompany(this.companyFormValues)
            .subscribe(function (response) {
            console.log('response received is ', response);
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            console.log(err);
        });
    };
    // Function to get filename
    CreateCompanyComponent.prototype.fileChange = function (element) {
        this.uploadedFiles = element.target.files;
    };
    // Function to get list of company types
    CreateCompanyComponent.prototype.getCompanyType = function () {
        var _this = this;
        this.companyService.getCompanyType().subscribe(function (res) {
            _this.companyTypeList = res;
            for (var _i = 0, _a = _this.companyTypeList; _i < _a.length; _i++) {
                var company = _a[_i];
                _this.createCompanyForm.controls.sector.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false));
            }
        });
    };
    // Function to get selected checkbox values
    CreateCompanyComponent.prototype.getCheckBoxvalue = function (value) {
        if (this.checkboxValues.includes(value)) {
            var index = this.checkboxValues.indexOf(value);
            if (index > -1) {
                this.checkboxValues.splice(index, 1);
            }
        }
        else {
            this.checkboxValues.push(value);
        }
    };
    CreateCompanyComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.createForm();
        // Check if updating company info or creating new company
        if (this.id) {
            this.formStatus = 'Update';
        }
        else {
            this.formStatus = 'Create New';
        }
    };
    CreateCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-company',
            template: __webpack_require__(/*! ./create-company.component.html */ "./src/app/components/create-company/create-company.component.html"),
            styles: [__webpack_require__(/*! ./create-company.component.sass */ "./src/app/components/create-company/create-company.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/create-event/create-event.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-event/create-event.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"event-form\">\r\n  <div class=\"heading\">\r\n    <h2>Create Event Form</h2>\r\n  </div>\r\n  <form [formGroup]=\"createEventForm\" method=\"post\" enctype=\"multipart/form-data\" class=\"create-form\">\r\n    <div class=\"form-input\">\r\n      <div class=\"input-field\">\r\n        <label>Event Name: </label>\r\n        <input type=\"text\" formControlName=\"eventName\" #eventName [appInputLimit]=\"eventName\" />\r\n        <div *ngIf=\"createEventForm.controls['eventName'].errors && (submitted ||\r\n            !createEventForm.controls['eventName'].pristine)\" class=\"error-msg\">\r\n          <p [hidden]=\"!createEventForm.controls['eventName'].errors.required\">Event Name is Required.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <label>Contact Email: </label>\r\n        <input type=\"text\" formControlName=\"eventEmail\" #eventEmail />\r\n        <div *ngIf=\"createEventForm.controls['eventEmail'].errors && (submitted ||\r\n            !createEventForm.controls['eventEmail'].pristine)\" class=\"error-msg\">\r\n          <p [hidden]=\"!createEventForm.controls['eventEmail'].errors.required\">Email is Required.</p>\r\n          <p [hidden]=\"!createEventForm.controls['eventEmail'].errors.patternInvalid\">Email is invalid.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <label>Select Company: </label>\r\n        <select formControlName=\"companyName\" #companyName>\r\n          <option *ngFor=\"let company of companyNames\" [value]=\"company.companyName\" selected=\"\">{{company.companyName}}</option>\r\n        </select>\r\n        <div *ngIf=\"createEventForm.controls['companyName'].errors && (submitted ||\r\n            !createEventForm.controls['companyName'].pristine)\" class=\"error-msg\">\r\n          <p [hidden]=\"!createEventForm.controls['companyName'].errors.required\">Please select company.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <label>Event Image: </label>\r\n        <input (change)=\"fileChange($event)\" type=\"file\" id=\"inputGroupFile01\"\r\n          aria-describedby=\"inputGroupFileAddon01\" formControlName=\"eventImage\" #eventImage>\r\n        <div *ngIf=\"createEventForm.controls['eventImage'].errors && (submitted ||\r\n            !createEventForm.controls['eventImage'].pristine)\" class=\"error-msg\">\r\n          <p [hidden]=\"!createEventForm.controls['eventImage'].errors.required\">Please add event image.</p>\r\n          <p [hidden]=\"!createEventForm.controls['eventImage'].errors.requiredFileType\">Image type should be *.png or\r\n            *.jpg</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field textarea\">\r\n        <label>Event Description: </label>\r\n        <textarea type=\"text\" rows=\"4\" formControlName=\"eventDesc\" #eventDesc></textarea>\r\n        <div *ngIf=\"createEventForm.controls['eventDesc'].errors && (submitted ||\r\n            !createEventForm.controls['eventDesc'].pristine)\" class=\"error-msg\">\r\n          <p [hidden]=\"!createEventForm.controls['eventDesc'].errors.required\">Please add event description.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <label>Start Time: </label>\r\n        <input [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"startTime\" placeholder=\"Select Event Start Time\"\r\n          [min]=\"today\" [max]=\"maxStartDate\" formControlName=\"startDate\" (click)=\"startDateClick()\" #startDate\r\n          readonly=\"true\" />\r\n        <owl-date-time #startTime hour12Timer=\"true\"></owl-date-time>\r\n        <div *ngIf=\"createEventForm.controls['startDate'].errors && (submitted ||\r\n            !createEventForm.controls['startDate'].pristine)\" class=\"error-msg\">\r\n          <p [hidden]=\"!createEventForm.controls['startDate'].errors.required\">Please select event start date.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <label>End Time: </label>\r\n        <input [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"Select Event End Time\"\r\n          [min]=\"minEndDate\" readonly=\"true\" formControlName=\"endDate\" (click)=\"endDateClick()\" #endDate />\r\n        <owl-date-time #endTime hour12Timer=\"true\"></owl-date-time>\r\n        <div *ngIf=\"createEventForm.controls['endDate'].errors && (submitted ||\r\n            !createEventForm.controls['endDate'].pristine)\" class=\"error-msg\">\r\n          <p [hidden]=\"!createEventForm.controls['endDate'].errors.required\">Please select event end date.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <label>Address: </label>\r\n        <input type=\"text\" formControlName=\"address\" #address />\r\n        <div *ngIf=\"createEventForm.controls['address'].errors && (submitted ||\r\n            !createEventForm.controls['address'].pristine)\" class=\"error-msg\">\r\n          <p [hidden]=\"!createEventForm.controls['address'].errors.required\">Please add event Location.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <label>City: </label>\r\n        <input type=\"text\" formControlName=\"city\" #city />\r\n        <div *ngIf=\"createEventForm.controls['city'].errors && (submitted ||\r\n            !createEventForm.controls['city'].pristine)\" class=\"error-msg\">\r\n          <p [hidden]=\"!createEventForm.controls['city'].errors.required\">Please add City name.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field radio-field\">\r\n        <label>Event Type: </label>\r\n        <div class=\"radio\" *ngIf=\"eventType\">\r\n          <div class=\"radio-option\" *ngFor=\"let eventtype of eventType\">\r\n            <input type=\"radio\" placeholder=\"\" value=\"{{eventtype}}\" formControlName=\"eventType\" #eventType />\r\n            <span>{{eventtype}}</span>\r\n          </div>\r\n        </div>\r\n        <div\r\n          *ngIf=\"createEventForm.controls['eventType'].errors && (submitted || !createEventForm.controls['eventType'].pristine)\"\r\n          class=\"error-msg\">\r\n          <p [hidden]=\"!createEventForm.controls['eventType'].errors.required\">Please select Event Type.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button class=\"button\" type=\"submit\" (click)=\"SubmitEvent()\">Submit</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/create-event/create-event.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-event/create-event.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-form {\n  width: 70%;\n  margin: 40px auto 50px;\n  text-align: center; }\n  .event-form .form-input {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n  .event-form .form-input .input-field {\n      width: 48%; }\n  .event-form .form-input .input-field.radio-field {\n        width: 100%; }\n  .event-form .form-input .input-field.radio-field .radio-option {\n          width: 25%;\n          margin-right: 0;\n          padding: 4px;\n          box-sizing: border-box; }\n  .event-form .form-input .input-field.textarea {\n        width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtZXZlbnQvRDpcXFByb2plY3RcXGV2ZW50LWNhbGVuZGFyXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JlYXRlLWV2ZW50XFxjcmVhdGUtZXZlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBO0VBSHBCO0lBS0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw4QkFBOEIsRUFBQTtFQVBsQztNQVNNLFVBQVUsRUFBQTtFQVRoQjtRQVdRLFdBQVcsRUFBQTtFQVhuQjtVQWFVLFVBQVU7VUFDVixlQUFlO1VBQ2YsWUFBWTtVQUNaLHNCQUFzQixFQUFBO0VBaEJoQztRQW9CUSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS1ldmVudC9jcmVhdGUtZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnQtZm9ybSB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBtYXJnaW46IDQwcHggYXV0byA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAuZm9ybS1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgJi5yYWRpby1maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnJhZGlvLW9wdGlvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi50ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/create-event/create-event.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-event/create-event.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_validators_pattern_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form-validators/pattern-validator */ "./src/app/form-validators/pattern-validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/company.service */ "./src/app/services/company.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _form_validators_file_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../form-validators/file-validator */ "./src/app/form-validators/file-validator.ts");








var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(eventService, companyService, router, route) {
        this.eventService = eventService;
        this.companyService = companyService;
        this.router = router;
        this.route = route;
        this.eventFormValues = new FormData();
        this.submitted = false;
        this.today = new Date();
        this.minEndDate = new Date();
        // Get email of current logged in user
        this.userEmail = JSON.parse(localStorage.getItem('UserData'))._id;
        // Event types List
        this.eventType = ['Conference', 'Technical', 'Workshop', 'Training', 'Internship',
            'Management', 'Cultural', 'Entrepreneurship', 'Other'];
    }
    // Function to create FormFroup
    CreateEventComponent.prototype.createEventFeilds = function () {
        this.createEventForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            eventName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            eventEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                // tslint:disable-next-line: max-line-length
                Object(_form_validators_pattern_validator__WEBPACK_IMPORTED_MODULE_3__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ]),
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            eventImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_form_validators_file_validator__WEBPACK_IMPORTED_MODULE_7__["fileValidator"])('.png', '.jpg')]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            eventType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            eventDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    // Get companies names list
    CreateEventComponent.prototype.getCompaniesNames = function () {
        var _this = this;
        this.companyService.companiesNames().subscribe(function (res) {
            _this.companyNames = res;
        });
    };
    // Function to check Start Date Change
    CreateEventComponent.prototype.startDateClick = function () {
        if (this.createEventForm.controls.endDate.value.getDate !== undefined) {
            this.maxStartDate = this.createEventForm.controls.endDate.value;
        }
    };
    // Function to check End Date Change
    CreateEventComponent.prototype.endDateClick = function () {
        if (this.createEventForm.controls.startDate.value.getDate !== undefined) {
            this.minEndDate = this.createEventForm.controls.startDate.value;
        }
    };
    // Function to get filename
    CreateEventComponent.prototype.fileChange = function (element) {
        this.uploadedFiles = element.target.files;
    };
    // Submit Event
    CreateEventComponent.prototype.SubmitEvent = function () {
        var _this = this;
        this.submitted = true;
        if (this.createEventForm.status !== 'INVALID') {
            this.eventFormValues.append('eventImage', this.uploadedFiles[0], this.uploadedFiles[0].name);
            this.eventFormValues.append('eventName', this.createEventForm.value.eventName);
            this.eventFormValues.append('eventEmail', this.createEventForm.value.eventEmail);
            this.eventFormValues.append('companyName', this.createEventForm.value.companyName);
            this.eventFormValues.append('startDate', this.createEventForm.value.startDate);
            this.eventFormValues.append('endDate', this.createEventForm.value.endDate);
            this.eventFormValues.append('eventType', this.createEventForm.value.eventType);
            this.eventFormValues.append('address', this.createEventForm.value.address);
            this.eventFormValues.append('city', this.createEventForm.value.city);
            this.eventFormValues.append('eventDesc', this.createEventForm.value.eventDesc);
            this.eventFormValues.append('user', this.userEmail);
            this.eventService.createEvent(this.eventFormValues).subscribe(function (res) {
                console.log(res);
                _this.router.navigate(['/event-list/']);
            });
        }
    };
    // Select company from URL params
    CreateEventComponent.prototype.selectCompany = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.company) {
                _this.createEventForm.get('companyName').setValue(params.company);
            }
        });
    };
    CreateEventComponent.prototype.ngOnInit = function () {
        this.createEventFeilds();
        this.getCompaniesNames();
        this.selectCompany();
    };
    CreateEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-event',
            template: __webpack_require__(/*! ./create-event.component.html */ "./src/app/components/create-event/create-event.component.html"),
            styles: [__webpack_require__(/*! ./create-event.component.scss */ "./src/app/components/create-event/create-event.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"],
            _services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/components/create-user/create-user.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-user/create-user.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\r\n  <div class=\"heading\">\r\n    <h2>{{formStatus}} User Form</h2>\r\n  </div>\r\n  <form [formGroup]=\"createUserForm\" class=\"create-form\">\r\n    <div class=\"error-msg first\" *ngIf=\"errMsg && !validationError\">\r\n      <span>{{errMsg}}</span>\r\n    </div>\r\n    <div class=\"error-msg second\" *ngIf=\"validationError\">\r\n      <div *ngFor=\"let error of errMsg\">\r\n        <span>{{error.msg}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-input\">\r\n      <div class=\"input-field\">\r\n        <!-- <label>First Name: </label> -->\r\n        <input type=\"text\" placeholder=\"First Name\" formControlName=\"firstname\" #firstname />\r\n        <div\r\n          *ngIf=\"createUserForm.controls['firstname'].errors && (submitted || !createUserForm.controls['firstname'].pristine)\"\r\n          class=\"error-msg\">\r\n          <p [hidden]=\"!createUserForm.controls['firstname'].errors.required\">First Name is Required.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <!-- <label>Last Name: </label> -->\r\n        <input type=\"text\" placeholder=\"Last Name\" formControlName=\"lastname\" #lastname />\r\n        <div\r\n          *ngIf=\"createUserForm.controls['lastname'].errors && (submitted || !createUserForm.controls['lastname'].pristine)\"\r\n          class=\"error-msg\">\r\n          <p [hidden]=\"!createUserForm.controls['lastname'].errors.required\">Last Name is Required.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <!-- <label>Email: </label> [attr.disabled]=\"disableInput\"-->\r\n        <input type=\"email\" placeholder=\"Email Id\" formControlName=\"email\" #email />\r\n        <div\r\n          *ngIf=\"createUserForm.controls['email'].errors && (submitted || !createUserForm.controls['email'].pristine)\"\r\n          class=\"error-msg\">\r\n          <p [hidden]=\"!createUserForm.controls['email'].errors.required\">Email is required.</p>\r\n          <p [hidden]=\"!createUserForm.controls['email'].errors.patternInvalid\">Email is invalid.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <!-- <label>Password: </label> -->\r\n        <input type=\"password\" placeholder=\"Password\" formControlName=\"password\" #password />\r\n        <div\r\n          *ngIf=\"createUserForm.controls['password'].errors && (submitted || !createUserForm.controls['password'].pristine)\"\r\n          class=\"error-msg\">\r\n          <p [hidden]=\"!createUserForm.controls['password'].errors.required\">Password is required.</p>\r\n          <p [hidden]=\"!createUserForm.controls['password'].errors.patternInvalid\">Password is invalid.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"input-field radio-field\">\r\n        <label>User Type: </label>\r\n        <div class=\"radio\">\r\n          <div class=\"radio-option\">\r\n            <input type=\"radio\" placeholder=\"\" value=\"admin\" formControlName=\"usertype\" #usertype />\r\n            <span>Admin</span>\r\n          </div>\r\n          <div class=\"radio-option\">\r\n            <input type=\"radio\" placeholder=\"\" value=\"user\" formControlName=\"usertype\" #usertype />\r\n            <span>User</span>\r\n          </div>\r\n        </div>\r\n        <div\r\n          *ngIf=\"createUserForm.controls['usertype'].errors && (submitted || !createUserForm.controls['usertype'].pristine)\"\r\n          class=\"error-msg\">\r\n          <p [hidden]=\"!createUserForm.controls['usertype'].errors.required\">Please select User Type.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button class=\"button\" type=\"submit\" (click)=\"onSubmit()\">{{formStatus}} User</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/create-user/create-user.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-user/create-user.component.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/create-user/create-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/create-user/create-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_validators_pattern_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form-validators/pattern-validator */ "./src/app/form-validators/pattern-validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");






var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.disableInput = false;
        this.validationError = false;
    }
    // Function to get single user info by ID
    CreateUserComponent.prototype.getUserById = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.userService.getUserById(_this.id).subscribe(function (res) {
                _this.user = res;
                _this.createUserForm.get('firstname').setValue(_this.user.firstname);
                _this.createUserForm.get('lastname').setValue(_this.user.lastname);
                _this.createUserForm.get('email').setValue(_this.user.email);
                _this.createUserForm.get('password').setValue(_this.user.password);
                _this.createUserForm.get('usertype').setValue(_this.user.usertype);
            }, function (error) { return console.log('SERVICE ERROR'); });
        });
    };
    // Function to add new user
    CreateUserComponent.prototype.addNewUser = function (userData) {
        var _this = this;
        this.userService.addUser(userData)
            .subscribe(function (res) {
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            _this.errMsg = err.error;
            if (_this.errMsg.errors instanceof Array) {
                _this.validationError = true;
                _this.errMsg = err.error.errors;
            }
        });
    };
    // Function to update user data
    CreateUserComponent.prototype.updateUserData = function (id, userData) {
        var _this = this;
        this.userService.updateUser(id, userData)
            .subscribe(function (res) {
            _this.router.navigate(['/users-list']);
        }, function (err) {
            console.log(err.error);
        });
    };
    // Create From Fields
    CreateUserComponent.prototype.UserForm = function () {
        this.createUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                // tslint:disable-next-line: max-line-length
                Object(_form_validators_pattern_validator__WEBPACK_IMPORTED_MODULE_3__["patternValidator"])(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                Object(_form_validators_pattern_validator__WEBPACK_IMPORTED_MODULE_3__["patternValidator"])(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
            ]),
            usertype: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    // Submit new user form data
    CreateUserComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.userData = this.createUserForm.value;
        if (!this.createUserForm.invalid) {
            if (this.id) {
                this.updateUserData(this.id, this.userData);
            }
            else {
                this.addNewUser(this.userData);
            }
        }
    };
    CreateUserComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        this.UserForm();
        // Check if user is updating data or adding new user
        if (this.id) {
            this.formStatus = 'Update';
            this.getUserById();
            this.disableInput = true;
        }
        else {
            this.formStatus = 'Create New';
            this.disableInput = false;
        }
    };
    CreateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/components/create-user/create-user.component.html"),
            styles: [__webpack_require__(/*! ./create-user.component.sass */ "./src/app/components/create-user/create-user.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\r\n  <div class=\"section-container\">\r\n    <div class=\"section-heading\">\r\n      <span>All Company Events</span>\r\n    </div>\r\n    <div class=\"company-events\" *ngFor=\"let company of companyEvents\">\r\n      <div class=\"company-name\">\r\n        <h2>{{company._id}} <span> [ {{company.count}} ]</span></h2>\r\n      </div>\r\n      <div class=\"event heading\">\r\n        <div class=\"event-name\">\r\n          <span>Event Name</span>\r\n        </div>\r\n        <div class=\"event-type\">\r\n          <span>Event Type</span>\r\n        </div>\r\n        <div class=\"event-date\">\r\n          <span>Event Date</span>\r\n        </div>\r\n        <div class=\"event-time\">\r\n          <span>Event Time</span>\r\n        </div>\r\n        <div class=\"address\">\r\n          <span>Address</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"event\" *ngFor=\"let event of company.events\">\r\n        <div class=\"event-name\">\r\n          <a [routerLink]=\"['/events/', event._id]\" routerLinkActive=\"router-link-active\">{{event.eventName}}</a>\r\n        </div>\r\n        <div class=\"event-type\">\r\n          <span>{{event.eventType}}</span>\r\n        </div>\r\n        <div class=\"event-date\">\r\n          <span>{{event.startDate | date : 'MMM dd, yyyy'}}</span>\r\n        </div>\r\n        <div class=\"event-time\">\r\n          <span>{{event.startDate | date : 'shortTime'}} - {{event.endDate | date : 'shortTime'}}</span>\r\n        </div>\r\n        <div class=\"address\">\r\n          <span>{{event.address}}, {{event.city}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard {\n  padding: 30px 0 50px; }\n  .dashboard h2,\n  .dashboard h3 {\n    font-weight: 400; }\n  .dashboard .company-name {\n    padding: 8px 10px;\n    background: #078e6f; }\n  .dashboard .company-name h2 {\n      font-size: 16px;\n      color: #fff;\n      margin: 0; }\n  .dashboard .company-name h2 span {\n        font-size: 15px;\n        color: #eee; }\n  .dashboard .event {\n    padding: 5px;\n    margin: 5px 20px;\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid #eaeaea; }\n  .dashboard .event span {\n      font-size: 14px;\n      color: #777; }\n  .dashboard .event.heading {\n      border-bottom: 1px solid #aaa; }\n  .dashboard .event.heading span {\n        color: #333; }\n  .dashboard .event .event-name,\n    .dashboard .event .event-type,\n    .dashboard .event .event-date,\n    .dashboard .event .event-time,\n    .dashboard .event .address,\n    .dashboard .event .action {\n      padding: 5px;\n      text-align: left; }\n  .dashboard .event .event-name {\n      width: 30%; }\n  .dashboard .event .event-name a {\n        margin: 0;\n        font-size: 14px;\n        color: #777;\n        display: block; }\n  .dashboard .event .event-type,\n    .dashboard .event .event-date,\n    .dashboard .event .event-time {\n      width: 15%; }\n  .dashboard .event .address {\n      width: 25%; }\n  .company-events .event:last-child {\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvRDpcXFByb2plY3RcXGV2ZW50LWNhbGVuZGFyXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0IsRUFBQTtFQUR0Qjs7SUFJSSxnQkFBZ0IsRUFBQTtFQUpwQjtJQU9JLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTtFQVJ2QjtNQVVNLGVBQWU7TUFDZixXQUFXO01BQ1gsU0FBUyxFQUFBO0VBWmY7UUFjUSxlQUFlO1FBQ2YsV0FBVyxFQUFBO0VBZm5CO0lBb0JJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQ0FBZ0MsRUFBQTtFQXhCcEM7TUEwQk0sZUFBZTtNQUNmLFdBQVcsRUFBQTtFQTNCakI7TUE4Qk0sNkJBQTZCLEVBQUE7RUE5Qm5DO1FBZ0NRLFdBQVcsRUFBQTtFQWhDbkI7Ozs7OztNQXlDTSxZQUFZO01BQ1osZ0JBQWdCLEVBQUE7RUExQ3RCO01BNkNNLFVBQVUsRUFBQTtFQTdDaEI7UUErQ1EsU0FBUztRQUNULGVBQWU7UUFDZixXQUFXO1FBQ1gsY0FBYyxFQUFBO0VBbER0Qjs7O01Bd0RNLFVBQVUsRUFBQTtFQXhEaEI7TUEyRE0sVUFBVSxFQUFBO0VBSWhCO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZCB7XHJcbiAgcGFkZGluZzogMzBweCAwIDUwcHg7XHJcbiAgaDIsXHJcbiAgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLmNvbXBhbnktbmFtZSB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwNzhlNmY7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ldmVudCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweCAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICB9XHJcbiAgICAmLmhlYWRpbmcge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FhYTtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5ldmVudC1uYW1lLFxyXG4gICAgLmV2ZW50LXR5cGUsXHJcbiAgICAuZXZlbnQtZGF0ZSxcclxuICAgIC5ldmVudC10aW1lLFxyXG4gICAgLmFkZHJlc3MsXHJcbiAgICAuYWN0aW9uIHtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmV2ZW50LW5hbWUge1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZXZlbnQtdHlwZSxcclxuICAgIC5ldmVudC1kYXRlLFxyXG4gICAgLmV2ZW50LXRpbWUge1xyXG4gICAgICB3aWR0aDogMTUlO1xyXG4gICAgfVxyXG4gICAgLmFkZHJlc3Mge1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uY29tcGFueS1ldmVudHMgLmV2ZW50Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(eventService, datePipe) {
        this.eventService = eventService;
        this.datePipe = datePipe;
    }
    // Function to get events by company names
    DashboardComponent.prototype.getEventsByCompany = function () {
        var _this = this;
        this.eventService.getEventsByCompany().subscribe(function (res) {
            console.log(res);
            _this.companyEvents = res;
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getEventsByCompany();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/event-detail/event-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/event-detail/event-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"event-details\" *ngIf=\"eventInfo\">\r\n  <div class=\"event-type\">\r\n    <span>{{eventInfo.eventType}}</span>\r\n  </div>\r\n  <h3>{{eventInfo.eventName}}</h3>\r\n  <div class=\"event-image\">\r\n    <img src=\"http://localhost:3000/file/{{eventInfo.eventImage}}\" />\r\n  </div>\r\n  <div class=\"event-info\">\r\n    <div class=\"description\">\r\n      <p>{{eventInfo.eventDesc}}</p>\r\n    </div>\r\n\r\n    <div class=\"section venue\">\r\n      <div class=\"title\">\r\n        <span>Venue: </span>\r\n      </div>\r\n      <div class=\"address\">\r\n        <p>\r\n          <fa name=\"map-marker\" class=\"icon\"></fa> {{eventInfo.address}}, {{eventInfo.city}}\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class=\"flex\">\r\n      <div class=\"section date-info\">\r\n        <div class=\"title\">\r\n          <span>Date: </span>\r\n        </div>\r\n        <div class=\"date\">\r\n          <p>\r\n            <fa name=\"calendar\" class=\"icon\"></fa> {{eventInfo.startDate | date : 'MMM dd, yyyy'}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"section time-info\">\r\n        <div class=\"title\">\r\n          <span>Time: </span>\r\n        </div>\r\n        <div class=\"time\">\r\n          <p>\r\n            <fa name=\"clock-o\" class=\"icon\"></fa> {{eventInfo.startDate | date : 'shortTime'}} -\r\n            {{eventInfo.endDate | date : 'shortTime'}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"flex\">\r\n      <div class=\"section company-info\">\r\n        <div class=\"title\">\r\n          <span>Organized by: </span>\r\n        </div>\r\n        <div class=\"company\">\r\n          <p>\r\n            <fa name=\"briefcase\" class=\"icon\"></fa> {{eventInfo.companyName}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"section contact-info\">\r\n        <div class=\"title\">\r\n          <span>Contact Email: </span>\r\n        </div>\r\n        <div class=\"email\">\r\n          <p>\r\n            <fa name=\"envelope\" class=\"icon\"></fa> {{eventInfo.contactEmail}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/event-detail/event-detail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/event-detail/event-detail.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event-details {\n  width: 50%;\n  margin: 40px auto 50px;\n  padding: 30px 50px;\n  border: 1px solid #eee;\n  border-radius: 20px;\n  box-shadow: 0 0 10px #ccc; }\n  .event-details h3 {\n    font-weight: 400;\n    font-size: 24px;\n    color: #057788;\n    margin: 15px 0 20px; }\n  .event-details .event-image img {\n    width: 100%; }\n  .event-details .event-info {\n    padding-top: 20px; }\n  .event-details .event-info .description {\n      margin-bottom: 20px; }\n  .event-details .event-info .description p {\n        font-size: 14px;\n        color: #777;\n        text-align: justify;\n        word-spacing: 4px;\n        line-height: 21px; }\n  .event-details .event-type span {\n    font-size: 14px;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    padding: 3px 10px;\n    background: #eee;\n    color: #c33a05;\n    border-radius: 2px; }\n  .event-details .event-info .section {\n  width: calc(100% - 40px);\n  margin: 0 auto; }\n  .event-details .event-info .section.venue {\n    border-bottom: 1px solid #dfdfdf;\n    padding: 20px 0 15px; }\n  .event-details .event-info .section .title {\n    margin-bottom: 8px; }\n  .event-details .event-info .section .title span {\n      display: block;\n      color: #000;\n      font-size: 14px;\n      line-height: 21px;\n      text-transform: uppercase;\n      letter-spacing: 0.7px; }\n  .event-details .event-info .section p {\n    color: #777; }\n  .event-details .event-info .section p fa {\n      color: #057788;\n      font-size: 20px;\n      padding-right: 10px; }\n  .event-details .event-info .flex {\n  width: calc(100% - 40px);\n  padding: 20px 0 15px;\n  margin: 0 auto;\n  border-bottom: 1px solid #dfdfdf;\n  display: flex;\n  justify-content: space-between; }\n  .event-details .event-info .flex:last-child {\n    border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC1kZXRhaWwvRDpcXFByb2plY3RcXGV2ZW50LWNhbGVuZGFyXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXZlbnQtZGV0YWlsXFxldmVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBO0VBTjNCO0lBUUksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CLEVBQUE7RUFYdkI7SUFnQk0sV0FBVyxFQUFBO0VBaEJqQjtJQXFCSSxpQkFBaUIsRUFBQTtFQXJCckI7TUF3Qk0sbUJBQW1CLEVBQUE7RUF4QnpCO1FBMkJRLGVBQWU7UUFDZixXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGlCQUFpQjtRQUNqQixpQkFBaUIsRUFBQTtFQS9CekI7SUFzQ00sZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCLEVBQUE7RUFLeEI7RUFFSSx3QkFBd0I7RUFDeEIsY0FBYyxFQUFBO0VBSGxCO0lBTU0sZ0NBQWdDO0lBQ2hDLG9CQUFvQixFQUFBO0VBUDFCO0lBV00sa0JBQWtCLEVBQUE7RUFYeEI7TUFjUSxjQUFjO01BQ2QsV0FBVztNQUNYLGVBQWU7TUFDZixpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLHFCQUFxQixFQUFBO0VBbkI3QjtJQXdCTSxXQUFXLEVBQUE7RUF4QmpCO01BMkJRLGNBQWM7TUFDZCxlQUFlO01BQ2YsbUJBQW1CLEVBQUE7RUE3QjNCO0VBbUNJLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsOEJBQThCLEVBQUE7RUF4Q2xDO0lBMkNNLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQtZGV0YWlsL2V2ZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudC1kZXRhaWxzIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogNDBweCBhdXRvIDUwcHg7XHJcbiAgcGFkZGluZzogMzBweCA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xyXG4gIGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzA1Nzc4ODtcclxuICAgIG1hcmdpbjogMTVweCAwIDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZXZlbnQtaW1hZ2Uge1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZXZlbnQtaW5mbyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgd29yZC1zcGFjaW5nOiA0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ldmVudC10eXBlIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICAgIGNvbG9yOiAjYzMzYTA1O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZXZlbnQtZGV0YWlscyAuZXZlbnQtaW5mbyB7XHJcbiAgLnNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgJi52ZW51ZSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZkZmRmO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDAgMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC43cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICM3Nzc7XHJcblxyXG4gICAgICBmYSB7XHJcbiAgICAgICAgY29sb3I6ICMwNTc3ODg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mbGV4IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAxNXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZGZkZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/event-detail/event-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/event-detail/event-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: EventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailComponent", function() { return EventDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");




var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent(eventService, router, route) {
        this.eventService = eventService;
        this.router = router;
        this.route = route;
    }
    // Function to get Event Data
    EventDetailComponent.prototype.getEvent = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.eventService.getEventById(this.id).subscribe(function (res) {
            _this.eventInfo = res;
            console.log(res);
        });
    };
    EventDetailComponent.prototype.ngOnInit = function () {
        this.getEvent();
    };
    EventDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__(/*! ./event-detail.component.html */ "./src/app/components/event-detail/event-detail.component.html"),
            styles: [__webpack_require__(/*! ./event-detail.component.scss */ "./src/app/components/event-detail/event-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/events-list/events-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/events-list/events-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"events-list list-view\">\r\n  <div class=\"tabs-list\">\r\n    <div class=\"tab\" [ngClass]=\"{active: showUpcomingEvents}\" (click)=\"changeTabs('upcoming')\">\r\n      <span>Upcoming Events</span>\r\n    </div>\r\n    <div class=\"tab\" [ngClass]=\"{active: !showUpcomingEvents}\" (click)=\"changeTabs('previous')\">\r\n      <span>Previous Events</span>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"showUpcomingEvents\" class=\"upcoming-events\">\r\n    <div *ngIf=\"noUpcomingEvents\" class=\"no-results\">\r\n      <span>No results found...</span>\r\n    </div>\r\n    <ul *ngIf=\"!noUpcomingEvents\">\r\n      <li *ngFor=\"let event of upcomingEvents\">\r\n        <div class=\"event\">\r\n          <div class=\"image\">\r\n            <img src=\"http://localhost:3000/file/{{event.eventImage}}\" />\r\n          </div>\r\n          <div class=\"event-info\">\r\n            <div class=\"event-type\">\r\n              <span>{{event.eventType}}</span>\r\n            </div>\r\n            <h3>{{event.eventName}}</h3>\r\n            <div class=\"date-time\">\r\n              <p>{{event.startDate | date : 'MMM dd, yyyy'}} | {{event.startDate | date : 'shortTime'}} -\r\n                {{event.endDate | date : 'shortTime'}}</p>\r\n            </div>\r\n            <div class=\"description\">\r\n              <p>{{event.eventDesc | ellipsis:130}}</p>\r\n            </div>\r\n            <div class=\"know-more\">\r\n              <a [routerLink]=\"['/events', event._id]\"\r\n                routerLinkActive=\"router-link-active\">Know More\r\n                <span>&#10095;&#10095;</span></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div *ngIf=\"!showUpcomingEvents\" class=\"archived-events\">\r\n    <div *ngIf=\"noArchivedEvents\" class=\"no-results\">\r\n      <span>No results found...</span>\r\n    </div>\r\n    <ul *ngIf=\"!noArchivedEvents\">\r\n      <li *ngFor=\"let event of archivedEvents\">\r\n        <div class=\"event\">\r\n          <div class=\"image\">\r\n            <img src=\"http://localhost:3000/file/{{event.eventImage}}\" />\r\n          </div>\r\n          <div class=\"event-info\">\r\n            <div class=\"event-type\">\r\n              <span>{{event.eventType}}</span>\r\n            </div>\r\n            <h3>{{event.eventName}}</h3>\r\n            <div class=\"date-time\">\r\n              <p>{{event.startDate | date : 'MMM dd, yyyy'}} | {{event.startDate | date : 'shortTime'}} -\r\n                {{event.endDate | date : 'shortTime'}}</p>\r\n            </div>\r\n            <div class=\"description\">\r\n              <p>{{event.eventDesc | ellipsis:130}}</p>\r\n            </div>\r\n            <div class=\"know-more\">\r\n              <a [routerLink]=\"['/events', event._id]\" routerLinkActive=\"router-link-active\">Know More\r\n                <span>&#10095;&#10095;</span></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/events-list/events-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/events-list/events-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".events-list {\n  width: 90%;\n  margin: 30px auto 20px; }\n  .events-list ul {\n    margin: 0;\n    padding: 35px 0;\n    display: flex;\n    flex-wrap: wrap; }\n  .events-list ul li {\n      list-style-type: none;\n      width: 31%;\n      margin-bottom: 50px;\n      margin-right: 3.5%; }\n  .events-list ul li:nth-child(3n) {\n        margin-right: 0; }\n  .events-list li .image img {\n  width: 100%;\n  max-height: 200px; }\n  .event {\n  position: relative; }\n  .event .event-info {\n    padding: 8px; }\n  .event .event-type {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 5px;\n    background: #168456;\n    color: #fff;\n    letter-spacing: 0.5px;\n    font-size: 14px; }\n  .event h3 {\n    font-weight: 400;\n    color: #e08c0e;\n    margin: 0; }\n  .event .date-time {\n    font-size: 14px;\n    line-height: 20px;\n    color: #888;\n    padding: 5px 0 15px; }\n  .event .description {\n    font-size: 15px;\n    color: #333; }\n  .event .know-more {\n    margin-top: 20px;\n    text-align: right; }\n  .event .know-more a {\n      padding: 4px 10px;\n      color: #2b81b3;\n      font-size: 15px; }\n  .event .know-more a span {\n        font-size: 12px;\n        padding-left: 2px; }\n  .event .know-more a:hover {\n        text-decoration: none;\n        color: #115780; }\n  .tabs-list {\n  padding: 10px;\n  display: flex;\n  justify-content: center; }\n  .tabs-list .tab {\n    padding: 10px 30px;\n    cursor: pointer;\n    border: 1px solid #2b81b3;\n    color: #2b81b3;\n    border-radius: 0 25px 25px 0; }\n  .tabs-list .tab:first-child {\n      border-right: none;\n      border-radius: 25px 0 0 25px; }\n  .tabs-list .tab.active {\n      color: #fff;\n      background: #2b81b3; }\n  .events-list.list-view .event {\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n  box-shadow: 0 0 5px #ccc; }\n  .events-list.list-view ul {\n  width: 70%;\n  margin: 0 auto;\n  display: block; }\n  .events-list.list-view ul li {\n    width: 100%; }\n  .events-list.list-view ul li .event {\n      display: flex; }\n  .events-list.list-view ul li .event .image {\n        width: 36%; }\n  .events-list.list-view ul li .event .event-info {\n        width: 64%;\n        padding: 0 0 0 30px; }\n  .events-list.list-view ul li .event .event-type {\n        position: static;\n        display: inline-block;\n        background: #666;\n        padding: 2px 7px;\n        margin-bottom: 8px;\n        border-radius: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudHMtbGlzdC9EOlxcUHJvamVjdFxcZXZlbnQtY2FsZW5kYXJcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxldmVudHMtbGlzdFxcZXZlbnRzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCLEVBQUE7RUFGeEI7SUFLSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlLEVBQUE7RUFSbkI7TUFXTSxxQkFBcUI7TUFDckIsVUFBVTtNQUNWLG1CQUFtQjtNQUNuQixrQkFBa0IsRUFBQTtFQWR4QjtRQWlCUSxlQUFlLEVBQUE7RUFNdkI7RUFFSSxXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7RUFJckI7RUFDRSxrQkFBa0IsRUFBQTtFQURwQjtJQUlJLFlBQVksRUFBQTtFQUpoQjtJQVFJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlLEVBQUE7RUFmbkI7SUFvQkksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxTQUFTLEVBQUE7RUF0QmI7SUEwQkksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUE3QnZCO0lBaUNJLGVBQWU7SUFDZixXQUFXLEVBQUE7RUFsQ2Y7SUFzQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBdkNyQjtNQTBDTSxpQkFBaUI7TUFDakIsY0FBYztNQUNkLGVBQWUsRUFBQTtFQTVDckI7UUErQ1EsZUFBZTtRQUNmLGlCQUFpQixFQUFBO0VBaER6QjtRQW9EUSxxQkFBcUI7UUFDckIsY0FBYyxFQUFBO0VBTXRCO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUIsRUFBQTtFQUh6QjtJQU1JLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCw0QkFBNEIsRUFBQTtFQVZoQztNQWFNLGtCQUFrQjtNQUNsQiw0QkFBNEIsRUFBQTtFQWRsQztNQWtCTSxXQUFXO01BQ1gsbUJBQW1CLEVBQUE7RUFLekI7RUFFSyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix3QkFBd0IsRUFBQTtFQUw3QjtFQVFJLFVBQVU7RUFDVixjQUFjO0VBQ2QsY0FBYyxFQUFBO0VBVmxCO0lBYU0sV0FBVyxFQUFBO0VBYmpCO01BZ0JRLGFBQWEsRUFBQTtFQWhCckI7UUFtQlUsVUFBVSxFQUFBO0VBbkJwQjtRQXVCVSxVQUFVO1FBQ1YsbUJBQW1CLEVBQUE7RUF4QjdCO1FBNEJVLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V2ZW50cy1saXN0L2V2ZW50cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50cy1saXN0IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMzBweCBhdXRvIDIwcHg7XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDM1cHggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHdpZHRoOiAzMSU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMy41JTtcclxuXHJcbiAgICAgICY6bnRoLWNoaWxkKDNuKSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZXZlbnRzLWxpc3QgbGkge1xyXG4gIC5pbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5ldmVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuZXZlbnQtaW5mbyB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG5cclxuICAuZXZlbnQtdHlwZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICMxNjg0NTY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICNlMDhjMGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuZGF0ZS10aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuXHJcbiAgLmtub3ctbW9yZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICBjb2xvcjogIzJiODFiMztcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMxMTU3ODA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50YWJzLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgLnRhYiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmI4MWIzO1xyXG4gICAgY29sb3I6ICMyYjgxYjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDI1cHggMjVweCAwO1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMCAwIDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZDogIzJiODFiMztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ldmVudHMtbGlzdC5saXN0LXZpZXcge1xyXG4gIC5ldmVudCB7XHJcbiAgICAgcGFkZGluZzogMjBweDtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgYm94LXNoYWRvdzogMCAwIDVweCAjY2NjO1xyXG4gIH1cclxuICB1bCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgLmV2ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDM2JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ldmVudC1pbmZvIHtcclxuICAgICAgICAgIHdpZHRoOiA2NCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmV2ZW50LXR5cGUge1xyXG4gICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjY7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycHggN3B4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/events-list/events-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/events-list/events-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: EventsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsListComponent", function() { return EventsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var EventsListComponent = /** @class */ (function () {
    function EventsListComponent(datePipe) {
        this.datePipe = datePipe;
        this.today = new Date();
        this.showUpcomingEvents = true;
        this.noArchivedEvents = false;
        this.noUpcomingEvents = false;
        console.log('>> Constructor');
    }
    EventsListComponent.prototype.changeTabs = function (tab) {
        if (tab === 'upcoming') {
            this.showUpcomingEvents = true;
        }
        else if (tab === 'previous') {
            this.showUpcomingEvents = false;
        }
    };
    // Function to sort by Date
    EventsListComponent.prototype.eventsSorting = function () {
        var _this = this;
        this.archivedEvents = this.eventsList.filter(function (date) { return new Date(date.startDate) < _this.today; });
        this.upcomingEvents = this.eventsList.filter(function (date) { return new Date(date.startDate) >= _this.today; });
        if (this.upcomingEvents.length < 1) {
            this.noUpcomingEvents = true;
            this.showUpcomingEvents = false;
        }
        else {
            this.noUpcomingEvents = false;
        }
        if (this.archivedEvents.length < 1) {
            this.noArchivedEvents = true;
            this.showUpcomingEvents = true;
        }
        else {
            this.noArchivedEvents = false;
        }
    };
    EventsListComponent.prototype.ngOnChanges = function (changes) {
        var previousValue = changes['eventsList'].previousValue;
        var currentValue = changes['eventsList'].currentValue;
        // console.log('previousValue >> ', previousValue);
        // console.log('currentValue >> ', currentValue);
        if (this.eventsList) {
            this.eventsSorting();
        }
    };
    EventsListComponent.prototype.ngOnInit = function () {
        console.log('>> NgOnInit');
    };
    EventsListComponent.prototype.ngOnDestroy = function () {
        console.log('>> NgOnDestroy');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], EventsListComponent.prototype, "eventsList", void 0);
    EventsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events-list',
            template: __webpack_require__(/*! ./events-list.component.html */ "./src/app/components/events-list/events-list.component.html"),
            styles: [__webpack_require__(/*! ./events-list.component.scss */ "./src/app/components/events-list/events-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], EventsListComponent);
    return EventsListComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <span class=\"copyright-text\">This is copyright text.</span>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.sass ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.sass */ "./src/app/components/footer/footer.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"section-container\">\r\n    <div class=\"logo\">\r\n      <a [routerLink]=\"['/']\">\r\n        <img src=\"../../../assets/images/calendar-icon.png\" />\r\n        <span>Event Calendar</span>\r\n      </a>\r\n    </div>\r\n    <nav>\r\n      <ul>\r\n        <li *ngIf=\"checkAdminUser()\">\r\n          <span class=\"category\">Users</span>\r\n          <div class=\"sub-category-list\">\r\n            <div class=\"sub-category\">\r\n              <a [routerLink]=\"['/create-user']\">Create User</a>\r\n            </div>\r\n            <div class=\"sub-category\">\r\n              <a [routerLink]=\"['/users-list/1']\">Users List</a>\r\n            </div>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <span class=\"category\">Company</span>\r\n          <div class=\"sub-category-list\">\r\n            <div class=\"sub-category\">\r\n              <a [routerLink]=\"['/create-company']\">Create Company</a>\r\n            </div>\r\n            <div class=\"sub-category\">\r\n              <a [routerLink]=\"['/company-list']\">Companies List</a>\r\n            </div>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <span class=\"category\">Events</span>\r\n          <div class=\"sub-category-list\">\r\n            <div class=\"sub-category\">\r\n              <a [routerLink]=\"['/create-event']\">Create Event</a>\r\n            </div>\r\n            <div class=\"sub-category\">\r\n              <a [routerLink]=\"['/event-list']\">Events List</a>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n\r\n    <div class=\"user-info\">\r\n      <div class=\"user-name\">\r\n        <p><fa name=\"user-circle\" class=\"icon\"></fa> <span>{{userData.firstname}}</span></p>\r\n      </div>\r\n      <div class=\"logout\">\r\n        <button (click)=\"logout()\">Logout</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: linear-gradient(to right, #23a971, #1bb885, #2390a1); }\n  header .logo img {\n    width: 30px;\n    vertical-align: bottom; }\n  header .logo span {\n    width: 115px;\n    vertical-align: middle;\n    padding-left: 8px;\n    color: #fbfbfb;\n    text-shadow: 0 0 1px #ccc;\n    line-height: 17px;\n    display: inline-block;\n    font-family: \"Bree Serif\", sans-serif;\n    text-transform: uppercase;\n    letter-spacing: 1px; }\n  header .section-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  header nav ul {\n  display: flex;\n  justify-content: flex-end;\n  margin: 0; }\n  header nav ul li {\n    list-style-type: none;\n    position: relative; }\n  header nav ul li .category {\n      padding: 18px 25px;\n      color: #fff;\n      display: block;\n      position: relative;\n      cursor: pointer; }\n  header nav ul li .category:after {\n        content: \"\";\n        position: absolute;\n        right: 10px;\n        top: 26px;\n        display: block;\n        width: 8px;\n        height: 8px;\n        border: 2px solid #fff;\n        border-left: none;\n        border-top: none;\n        transform: rotate(45deg); }\n  header nav ul li .sub-category-list {\n      display: none;\n      position: absolute;\n      width: 195px;\n      top: 100%;\n      left: 50%;\n      transform: translateX(-50%);\n      box-shadow: 0 0 5px #ccc;\n      z-index: 100; }\n  header nav ul li .sub-category-list .sub-category {\n        text-align: center;\n        border-bottom: 1px solid #eee; }\n  header nav ul li .sub-category-list .sub-category a {\n          color: #636363;\n          display: block;\n          padding: 13px 10px 12px;\n          background: #fefefe; }\n  header nav ul li .sub-category-list .sub-category a:hover {\n            background: #efefef; }\n  header nav ul li .sub-category-list::before {\n        content: \"\";\n        position: absolute;\n        top: -16px;\n        left: calc(50% - 4px);\n        border: 8px solid transparent;\n        border-bottom: 8px solid #fefefe;\n        z-index: 10; }\n  header nav ul li:hover .sub-category-list {\n      display: block; }\n  header .user-info {\n  width: 16%;\n  display: flex;\n  justify-content: space-between; }\n  header .user-info .user-name {\n    color: #fff; }\n  header .user-info .user-name span {\n      text-transform: uppercase;\n      padding-left: 5px; }\n  header .user-info .logout button {\n    background: transparent;\n    border: none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 16px;\n    line-height: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXFByb2plY3RcXGV2ZW50LWNhbGVuZGFyXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnRUFBZ0UsRUFBQTtFQURsRTtJQUlJLFdBQVc7SUFDWCxzQkFBc0IsRUFBQTtFQUwxQjtJQVNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLG1CQUFtQixFQUFBO0VBSXZCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTtFQUdyQjtFQUVJLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsU0FBUyxFQUFBO0VBSmI7SUFNTSxxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7RUFQeEI7TUFTUSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsZUFBZSxFQUFBO0VBYnZCO1FBZVUsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsU0FBUztRQUNULGNBQWM7UUFDZCxVQUFVO1FBQ1YsV0FBVztRQUNYLHNCQUFzQjtRQUN0QixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLHdCQUF3QixFQUFBO0VBekJsQztNQTZCUSxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixTQUFTO01BQ1QsU0FBUztNQUNULDJCQUEyQjtNQUMzQix3QkFBd0I7TUFDeEIsWUFBWSxFQUFBO0VBcENwQjtRQXNDVSxrQkFBa0I7UUFDbEIsNkJBQTZCLEVBQUE7RUF2Q3ZDO1VBeUNZLGNBQWM7VUFDZCxjQUFjO1VBQ2QsdUJBQXVCO1VBQ3ZCLG1CQUFtQixFQUFBO0VBNUMvQjtZQThDYyxtQkFBbUIsRUFBQTtFQTlDakM7UUFtRFUsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YscUJBQXFCO1FBQ3JCLDZCQUE2QjtRQUM3QixnQ0FBZ0M7UUFDaEMsV0FBVyxFQUFBO0VBekRyQjtNQThEVSxjQUFjLEVBQUE7RUFPeEI7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLDhCQUE4QixFQUFBO0VBSGhDO0lBS0ksV0FBVyxFQUFBO0VBTGY7TUFPTSx5QkFBeUI7TUFDekIsaUJBQWlCLEVBQUE7RUFSdkI7SUFhTSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyM2E5NzEsICMxYmI4ODUsICMyMzkwYTEpO1xyXG5cclxuICAubG9nbyBpbWcge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28gc3BhbiB7XHJcbiAgICB3aWR0aDogMTE1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBjb2xvcjogI2ZiZmJmYjtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgMXB4ICNjY2M7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiBcIkJyZWUgU2VyaWZcIiwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxufVxyXG5cclxuaGVhZGVyIC5zZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaGVhZGVyIG5hdiB7XHJcbiAgdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaSB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAuY2F0ZWdvcnkge1xyXG4gICAgICAgIHBhZGRpbmc6IDE4cHggMjVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgdG9wOiAyNnB4O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc3ViLWNhdGVnb3J5LWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxOTVweDtcclxuICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2M7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIC5zdWItY2F0ZWdvcnkge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6ICM2MzYzNjM7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxM3B4IDEwcHggMTJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogLTE2cHg7XHJcbiAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDRweCk7XHJcbiAgICAgICAgICBib3JkZXI6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCAjZmVmZWZlO1xyXG4gICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5zdWItY2F0ZWdvcnktbGlzdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmhlYWRlciAudXNlci1pbmZvIHtcclxuICB3aWR0aDogMTYlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC51c2VyLW5hbWUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBzcGFuIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sb2dvdXQge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.userData = JSON.parse(localStorage.getItem('UserData'));
    }
    // Function to check if user id 'Admin'
    HeaderComponent.prototype.checkAdminUser = function () {
        if (this.userData.usertype === 'admin') {
            return true;
        }
        else {
            return false;
        }
    };
    // Function to logout
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('UserData');
        this.router.navigate(['/']);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-block\">\n  <div class=\"heading\">\n    <span>Log In</span>\n  </div>\n  <form [formGroup]=\"loginForm\" class=\"create-form\">\n    <div class=\"error-msg\" *ngIf=\"loginError\">\n      <span>Username or password is incorrect.</span>\n    </div>\n    <div class=\"form-input\">\n      <div class=\"input-field\">\n        <label>Username: </label>\n        <input type=\"text\" #loginEmail placeholder=\"Please enter your Email Id\" formControlName=\"email\" #email />\n      </div>\n      <div class=\"input-field\">\n        <label>Password: </label>\n        <input type=\"password\" placeholder=\"Please enter your password\" formControlName=\"password\" #password />\n      </div>\n    </div>\n    <button type=\"submit\" class=\"button\" (click)=\"login(email.value, password.value)\">Login</button>\n  </form>\n  <div class=\"forgot-password\">\n    <a routerLink=\"/\">Forgot Username / Password</a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-block {\n  width: 400px;\n  margin: 70px auto 30px;\n  text-align: center;\n  border: 1px solid #198e89;\n  border-radius: 5px;\n  overflow: hidden; }\n  .login-block .heading {\n    background: linear-gradient(to right, #24ba7b, #1cad92, #33779f);\n    color: #fff;\n    padding: 15px;\n    font-size: 24px; }\n  .login-block .heading span {\n      display: inline-block;\n      line-height: 28px; }\n  .login-block .forgot-password {\n    margin-bottom: 50px; }\n  .login-block .forgot-password a {\n      color: #078e7b;\n      font-size: 14px;\n      text-decoration: underline;\n      letter-spacing: 0.3px; }\n  .login-block .create-form .error-msg {\n    position: static;\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9EOlxcUHJvamVjdFxcZXZlbnQtY2FsZW5kYXJcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0VBTmxCO0lBU0ksZ0VBQWdFO0lBQ2hFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZSxFQUFBO0VBWm5CO01BZU0scUJBQXFCO01BQ3JCLGlCQUFpQixFQUFBO0VBaEJ2QjtJQW9CSSxtQkFBbUIsRUFBQTtFQXBCdkI7TUFzQk0sY0FBYztNQUNkLGVBQWU7TUFDZiwwQkFBMEI7TUFDMUIscUJBQXFCLEVBQUE7RUF6QjNCO0lBNkJJLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYmxvY2sge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IDcwcHggYXV0byAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMTk4ZTg5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAuaGVhZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyNGJhN2IsICMxY2FkOTIsICMzMzc3OWYpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZm9yZ290LXBhc3N3b3JkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICMwNzhlN2I7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNyZWF0ZS1mb3JtIC5lcnJvci1tc2cge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, fb, router) {
        this.loginService = loginService;
        this.fb = fb;
        this.router = router;
        this.loginError = false;
        // Create form elements
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.loginEmailAddress.nativeElement.focus();
    };
    // Function to authenticate user info
    LoginComponent.prototype.login = function (email, password) {
        var _this = this;
        this.loginService.login(email, password).subscribe(function (res) {
            if (res) {
                _this.loginError = false;
                _this.router.navigate(['/dashboard']);
                _this.loginService.userInfo = res;
                localStorage.setItem('UserData', JSON.stringify(_this.loginService.userInfo));
            }
            else {
                _this.loginError = true;
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginEmail'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoginComponent.prototype, "loginEmailAddress", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/pagination/pagination.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pageUrl\" class=\"pagination\">\r\n  <div *ngIf=\"current > 1\" class=\"page previous\">\r\n    <a [routerLink]=\"[pageUrl, prev]\" (click)=\"changePageNumber(prev)\"><span\r\n        class=\"arrow\">&laquo;</span><span\r\n        class=\"text\">Prev</span></a>\r\n  </div>\r\n  <div class=\"page\" *ngFor=\"let page of PageArr\"\r\n    [ngClass]=\"{'active': page == current, 'first': page == 1, 'last': page == PageArr[PageArr.length-1]}\">\r\n    <a [routerLink]=\"[pageUrl, page]\" *ngIf=\"!checkNumber(page)\"\r\n      (click)=\"changePageNumber(page)\">{{page}}</a>\r\n      <span *ngIf=\"checkNumber(page)\">{{page}}</span>\r\n  </div>\r\n  <div *ngIf=\"current < pageCount\" class=\"page next\">\r\n    <a [routerLink]=\"[pageUrl, next]\" (click)=\"changePageNumber(next)\"><span class=\"text\">Next</span>\r\n      <span class=\"arrow\">&raquo;</span></a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination {\n  padding: 30px 0 20px;\n  display: flex;\n  justify-content: center; }\n  .pagination .page {\n    padding: 0 5px; }\n  .pagination .page a {\n      font-size: 18px;\n      line-height: 24px;\n      padding: 5px 12px;\n      text-decoration: none;\n      color: #555;\n      border-radius: 2px; }\n  .pagination .page a:hover {\n        background: #ddd; }\n  .pagination .page a .arrow {\n        font-size: 24px; }\n  .pagination .page span {\n      font-size: 18px;\n      line-height: 24px;\n      padding: 5px 12px;\n      text-decoration: none;\n      color: #555; }\n  .pagination .page.active a {\n      color: #fff;\n      background: #0d9a75; }\n  .pagination .page.previous .arrow {\n    padding-right: 5px; }\n  .pagination .page.next .arrow {\n    padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdpbmF0aW9uL0Q6XFxQcm9qZWN0XFxldmVudC1jYWxlbmRhclxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2luYXRpb25cXHBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHVCQUF1QixFQUFBO0VBSHpCO0lBS0ksY0FBYyxFQUFBO0VBTGxCO01BT00sZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIscUJBQXFCO01BQ3JCLFdBQVc7TUFDWCxrQkFBa0IsRUFBQTtFQVp4QjtRQWNRLGdCQUFnQixFQUFBO0VBZHhCO1FBaUJRLGVBQWUsRUFBQTtFQWpCdkI7TUFxQk0sZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIscUJBQXFCO01BQ3JCLFdBQVcsRUFBQTtFQXpCakI7TUE0Qk0sV0FBVztNQUNYLG1CQUFtQixFQUFBO0VBN0J6QjtJQWtDTSxrQkFBa0IsRUFBQTtFQWxDeEI7SUF1Q00saUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF0aW9uIHtcclxuICBwYWRkaW5nOiAzMHB4IDAgMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC5wYWdlIHtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICAgIH1cclxuICAgICAgLmFycm93IHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogIzU1NTtcclxuICAgIH1cclxuICAgICYuYWN0aXZlIGEge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZDogIzBkOWE3NTtcclxuICAgIH1cclxuICB9XHJcbiAgLnBhZ2UucHJldmlvdXMge1xyXG4gICAgLmFycm93IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucGFnZS5uZXh0IHtcclxuICAgIC5hcnJvdyB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pagination/pagination.component.ts ***!
  \***************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(router) {
        this.router = router;
        this.PageArr = [];
    }
    // Function on click of page number
    PaginationComponent.prototype.changePageNumber = function (pageNumber) {
        this.nextPageNumber(pageNumber);
        this.prevPageNumber(pageNumber);
        this.current = pageNumber;
        if (this.pageCount > 5) {
            this.paginationCount(this.pageCount, this.current);
        }
    };
    // Function to change previous page number
    PaginationComponent.prototype.prevPageNumber = function (currentPage) {
        if (currentPage > 1) {
            this.prev = parseInt(currentPage, 10) - 1;
        }
    };
    // Function to change next page number
    PaginationComponent.prototype.nextPageNumber = function (currentPage) {
        if (currentPage < this.pageCount) {
            this.next = parseInt(currentPage, 10) + 1;
        }
    };
    // Function to generate page number array
    PaginationComponent.prototype.paginationCount = function (totalPages, currentPage) {
        this.PageArr.length = 0;
        this.PageArr.push(1);
        if (parseInt(currentPage, 10) > 2) {
            if (parseInt(currentPage, 10) !== 3) {
                this.PageArr.push('...');
            }
            this.PageArr.push(parseInt(currentPage, 10) - 1);
        }
        if (parseInt(currentPage, 10) !== 1) {
            this.PageArr.push(parseInt(currentPage, 10));
        }
        if (parseInt(currentPage, 10) < (totalPages - 1)) {
            this.PageArr.push(parseInt(currentPage, 10) + 1);
            if (parseInt(currentPage, 10) !== (totalPages - 2)) {
                this.PageArr.push('...');
            }
        }
        if (parseInt(currentPage, 10) !== totalPages) {
            this.PageArr.push(totalPages);
        }
    };
    // Function to check if value is number
    PaginationComponent.prototype.checkNumber = function (page) {
        if (isNaN(page)) {
            return true;
        }
    };
    PaginationComponent.prototype.ngOnInit = function () {
        this.current = this.currentPage;
        this.pageCount = Math.ceil(this.totalRecords / this.recordsPerPage);
        // If page number in url doesn't exist
        if (this.current > this.pageCount) {
            this.router.navigate([this.pageUrl, this.pageCount]);
            this.current = this.pageCount;
        }
        this.prevPageNumber(this.currentPage);
        this.nextPageNumber(this.currentPage);
        // To show all pages link if page count is less than 6
        if (this.pageCount < 6) {
            for (var i = 0; i < this.pageCount; i++) {
                this.PageArr.push(i + 1);
            }
        }
        else {
            this.paginationCount(this.pageCount, this.current);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PaginationComponent.prototype, "pageUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginationComponent.prototype, "currentPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginationComponent.prototype, "totalRecords", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PaginationComponent.prototype, "recordsPerPage", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/components/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/app/components/pagination/pagination.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/user-detail/user-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-detail/user-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <p>{{user.email}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-detail/user-detail.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-detail/user-detail.component.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user-detail/user-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-detail/user-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");




var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.userService.getUserById(this.id).subscribe(function (res) {
            _this.user = res;
        });
    };
    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/components/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.sass */ "./src/app/components/user-detail/user-detail.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/user-list/user-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"users-list\">\r\n  <div class=\"section-heading\">\r\n    <span>All Users List</span>\r\n  </div>\r\n  <div class=\"user-list-table\">\r\n    <div class=\"list-heading\">\r\n      <div class=\"heading-text\">\r\n        <h3>First Name</h3>\r\n      </div>\r\n      <div class=\"heading-text\">\r\n        <h3>Last Name</h3>\r\n      </div>\r\n      <div class=\"heading-text\">\r\n        <h3>Email Id</h3>\r\n      </div>\r\n      <div class=\"heading-text\">\r\n        <h3>User Type</h3>\r\n      </div>\r\n      <div class=\"heading-text\">\r\n        <h3>Actions</h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"user-list-data\">\r\n      <div class=\"users-info\" *ngFor=\"let user of users\">\r\n        <div class=\"info-field\">\r\n          <span>{{user.firstname}}</span>\r\n        </div>\r\n        <div class=\"info-field\">\r\n          <span>{{user.lastname}}</span>\r\n        </div>\r\n        <div class=\"info-field\">\r\n          <span>{{user.email}}</span>\r\n        </div>\r\n        <div class=\"info-field\">\r\n          <span>{{user.usertype}}</span>\r\n        </div>\r\n        <div class=\"info-field\">\r\n          <div class=\"action-buttons\">\r\n            <a class=\"view\" [routerLink]=\"['/users', user._id]\">View</a>\r\n            <a class=\"edit\" [routerLink]=\"['/create-user', user._id]\">Edit</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls> -->\r\n  </div>\r\n  <div *ngIf=\"totalRecords\">\r\n    <app-pagination\r\n      [pageUrl]=\"pageUrl\"\r\n      [currentPage]=\"currentPage\"\r\n      [totalRecords]=\"totalRecords\"\r\n      [recordsPerPage]=\"recordsPerPage\">\r\n    </app-pagination>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".users-list {\n  width: 95%;\n  margin: 50px auto; }\n  .users-list .list-heading,\n  .users-list .user-list-data .users-info {\n    display: flex; }\n  .list-heading {\n  border-bottom: 2px solid #dedede; }\n  .list-heading .heading-text {\n    width: 22%;\n    padding: 15px 8px; }\n  .list-heading .heading-text h3 {\n      font-weight: 400;\n      margin: 0;\n      color: #555;\n      font-size: 14px; }\n  .users-info .info-field {\n  width: 22%; }\n  .list-heading .heading-text:last-child, .users-info .info-field:last-child {\n  width: 12%; }\n  .user-list-table {\n  background: #fff;\n  padding: 10px 20px;\n  border-radius: 3px; }\n  .user-list-data {\n  padding-top: 10px; }\n  .user-list-data .users-info {\n    border-bottom: 1px solid #f1f1f1; }\n  .user-list-data .users-info:last-child {\n      border: none; }\n  .user-list-data .info-field {\n    padding: 15px 8px; }\n  .user-list-data .info-field span {\n      font-size: 14px;\n      color: #787878; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWxpc3QvRDpcXFByb2plY3RcXGV2ZW50LWNhbGVuZGFyXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdXNlci1saXN0XFx1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7RUFGbkI7O0lBS0ksYUFBYSxFQUFBO0VBR2pCO0VBQ0UsZ0NBQWdDLEVBQUE7RUFEbEM7SUFHSSxVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7RUFKckI7TUFNTSxnQkFBZ0I7TUFDaEIsU0FBUztNQUNULFdBQVc7TUFDWCxlQUFlLEVBQUE7RUFJckI7RUFDRSxVQUFVLEVBQUE7RUFHWjtFQUNFLFVBQVUsRUFBQTtFQUVaO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtFQUdwQjtFQUNFLGlCQUFpQixFQUFBO0VBRG5CO0lBR0ksZ0NBQWdDLEVBQUE7RUFIcEM7TUFLTSxZQUFZLEVBQUE7RUFMbEI7SUFTSSxpQkFBaUIsRUFBQTtFQVRyQjtNQVdNLGVBQWU7TUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcnMtbGlzdCB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBtYXJnaW46IDUwcHggYXV0bztcclxuICAubGlzdC1oZWFkaW5nLFxyXG4gIC51c2VyLWxpc3QtZGF0YSAudXNlcnMtaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG4ubGlzdC1oZWFkaW5nIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZGVkZTtcclxuICAuaGVhZGluZy10ZXh0IHtcclxuICAgIHdpZHRoOiAyMiU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDhweDtcclxuICAgIGgzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4udXNlcnMtaW5mbyAuaW5mby1maWVsZCB7XHJcbiAgd2lkdGg6IDIyJTtcclxufVxyXG5cclxuLmxpc3QtaGVhZGluZyAuaGVhZGluZy10ZXh0Omxhc3QtY2hpbGQsIC51c2Vycy1pbmZvIC5pbmZvLWZpZWxkOmxhc3QtY2hpbGQge1xyXG4gIHdpZHRoOiAxMiU7XHJcbn1cclxuLnVzZXItbGlzdC10YWJsZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4udXNlci1saXN0LWRhdGEge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIC51c2Vycy1pbmZvIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW5mby1maWVsZCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDhweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiAjNzg3ODc4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");




var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    // Function to get users data
    UserListComponent.prototype.fetchAllUsers = function (page, recordsPerPage) {
        var _this = this;
        this.userService.getAllUsers(page, recordsPerPage).subscribe(function (data) {
            _this.users = data;
        });
    };
    // Function to get all users count
    UserListComponent.prototype.getAllUsersCount = function () {
        var _this = this;
        this.userService.getAllUsersCount().subscribe(function (value) {
            _this.usersCount = parseInt(JSON.stringify(value), 10);
            _this.totalRecords = _this.usersCount;
        });
    };
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageUrl = '/users-list/';
        this.recordsPerPage = 6;
        this.getAllUsersCount();
        // To call service on every page change
        this.route.params.subscribe(function (routeParams) {
            _this.fetchAllUsers(routeParams.page, _this.recordsPerPage);
            _this.currentPage = routeParams.page;
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/components/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/components/user-list/user-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/directives/input-limit.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/input-limit.directive.ts ***!
  \*****************************************************/
/*! exports provided: InputLimitDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputLimitDirective", function() { return InputLimitDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputLimitDirective = /** @class */ (function () {
    function InputLimitDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.inputLimit = 10;
    }
    InputLimitDirective.prototype.ngDoCheck = function () {
        this.valLength = this.el.nativeElement.value.length;
        console.log('valLength ' + this.valLength);
        if (this.valLength > this.inputLimit) {
            this.el.nativeElement.value = this.el.nativeElement.value.substr(0, this.inputLimit);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputLimitDirective.prototype, "appInputLimit", void 0);
    InputLimitDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appInputLimit]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], InputLimitDirective);
    return InputLimitDirective;
}());



/***/ }),

/***/ "./src/app/form-validators/file-validator.ts":
/*!***************************************************!*\
  !*** ./src/app/form-validators/file-validator.ts ***!
  \***************************************************/
/*! exports provided: fileValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileValidator", function() { return fileValidator; });
function fileValidator() {
    var type = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        type[_i] = arguments[_i];
    }
    return (function (control) {
        var file = control.value;
        if (file) {
            var extension = file.match(/\.[0-9a-z]+$/i).toString();
            if (type.indexOf(extension) === -1) {
                return {
                    requiredFileType: true
                };
            }
            return null;
        }
        return null;
    });
}


/***/ }),

/***/ "./src/app/form-validators/pattern-validator.ts":
/*!******************************************************!*\
  !*** ./src/app/form-validators/pattern-validator.ts ***!
  \******************************************************/
/*! exports provided: patternValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patternValidator", function() { return patternValidator; });
function patternValidator(regexp) {
    return function (control) {
        var value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { patternInvalid: { regexp: regexp } } : null;
    };
}


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('UserData') != null) {
            return true;
        }
        return this.router.parseUrl('');
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/checkAdmin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guards/checkAdmin.guard.ts ***!
  \********************************************/
/*! exports provided: CheckAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckAdmin", function() { return CheckAdmin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CheckAdmin = /** @class */ (function () {
    function CheckAdmin(router) {
        this.router = router;
        this.userData = JSON.parse(localStorage.getItem('UserData'));
    }
    CheckAdmin.prototype.canActivate = function (next, state) {
        if (this.userData.usertype === 'admin') {
            return true;
        }
        return this.router.parseUrl('');
    };
    CheckAdmin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CheckAdmin);
    return CheckAdmin;
}());



/***/ }),

/***/ "./src/app/guards/loggedin.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/loggedin.guard.ts ***!
  \******************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(router) {
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('UserData') == null) {
            return true;
        }
        return this.router.parseUrl('dashboard');
    };
    LoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "./src/app/pipes/ellipsis.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/ellipsis.pipe.ts ***!
  \****************************************/
/*! exports provided: EllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EllipsisPipe = /** @class */ (function () {
    function EllipsisPipe() {
    }
    EllipsisPipe.prototype.transform = function (val, args) {
        if (args === undefined) {
            return val;
        }
        if (val.length > args) {
            return val.substring(0, args) + '...';
        }
        else {
            return val;
        }
    };
    EllipsisPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ellipsis'
        })
    ], EllipsisPipe);
    return EllipsisPipe;
}());



/***/ }),

/***/ "./src/app/services/company.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    CompanyService.prototype.getCompanyType = function () {
        return this.http.get(this.url + "/company/type");
    };
    CompanyService.prototype.addCompany = function (companyData) {
        return this.http.post(this.url + "/company/add", companyData);
    };
    CompanyService.prototype.companiesList = function () {
        return this.http.get(this.url + "/company");
    };
    CompanyService.prototype.companiesNames = function () {
        return this.http.get(this.url + "/company/names");
    };
    CompanyService.prototype.getCompanyDetails = function (id) {
        return this.http.get(this.url + "/company/" + id);
    };
    CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EventService = /** @class */ (function () {
    function EventService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    // Add new Event
    EventService.prototype.createEvent = function (eventInfo) {
        return this.http.post(this.url + "/event/add", eventInfo);
    };
    // Get all Events
    EventService.prototype.getEventsList = function () {
        return this.http.get(this.url + "/event");
    };
    // Search Event
    EventService.prototype.searchEvent = function (searchText) {
        return this.http.get(this.url + "/event?search=" + searchText);
    };
    // Search Suggestions
    EventService.prototype.eventSearchSuggestion = function (searchText) {
        return this.http.get(this.url + "/event/suggestion?search=" + searchText);
    };
    // Get events types
    EventService.prototype.getEventTypes = function () {
        return this.http.get(this.url + "/event/types");
    };
    // Get events types
    EventService.prototype.filterEventsbyType = function (type) {
        return this.http.get(this.url + "/event?type=" + type);
    };
    // Get Events by company name
    EventService.prototype.getEventsByCompany = function () {
        return this.http.get(this.url + "/company/events");
    };
    // Get single Event by ID
    EventService.prototype.getEventById = function (id) {
        return this.http.get(this.url + "/event/" + id);
    };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    LoginService.prototype.login = function (email, password) {
        return this.http.post(this.url + "/auth", { email: email, password: password });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    UserService.prototype.addUser = function (userInfo) {
        return this.http.post(this.url + "/users/add", userInfo);
    };
    UserService.prototype.getAllUsers = function (page, size) {
        return this.http.get(this.url + "/users?pageNo=" + page + "&size=" + size);
    };
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this.url + "/users/" + id);
    };
    UserService.prototype.updateUser = function (id, userInfo) {
        return this.http.post(this.url + "/users/edit/" + id, userInfo);
    };
    UserService.prototype.getAllUsersCount = function () {
        return this.http.get(this.url + "/users-count");
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\event-calendar\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map