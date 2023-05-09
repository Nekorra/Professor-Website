"use strict";
(self["webpackChunkmy_portfolio"] = self["webpackChunkmy_portfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awards/awards.component */ 9171);
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publications/publications.component */ 4809);
/* harmony import */ var _research_research_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./research/research.component */ 4818);
/* harmony import */ var _students_students_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./students/students.component */ 3157);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cv/cv.component */ 4725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);













const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'awards', component: _awards_awards_component__WEBPACK_IMPORTED_MODULE_1__.AwardsComponent },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'publications', component: _publications_publications_component__WEBPACK_IMPORTED_MODULE_2__.PublicationsComponent },
    { path: 'research', component: _research_research_component__WEBPACK_IMPORTED_MODULE_3__.ResearchComponent },
    { path: 'students', component: _students_students_component__WEBPACK_IMPORTED_MODULE_4__.StudentsComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent },
    { path: 'cv', component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_7__.CvComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forRoot(),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.hidden = false;
    }
    ngOnInit() {
    }
    getScrollHeight(event) {
        if (window.pageYOffset <= 100)
            this.hidden = false;
        else
            this.hidden = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.getScrollHeight($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".footer[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: #01557a;\n    color: rgb(255, 255, 255);\n    text-align: center;\n    vertical-align: middle;\n  }\n  .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n      margin: 10px 0px ;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4QjtFQUNBO01BQ0ksaUJBQWlCO0VBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTU1N2E7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuZm9vdGVyIHB7XG4gICAgICBtYXJnaW46IDEwcHggMHB4IDtcbiAgfVxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./awards/awards.component */ 9171);
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./publications/publications.component */ 4809);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _research_research_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./research/research.component */ 4818);
/* harmony import */ var _students_students_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./students/students.component */ 3157);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ 9019);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _modals_award_modal_award_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/award-modal/award-modal.component */ 7093);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _modals_research_modal_research_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/research-modal/research-modal.component */ 7861);
/* harmony import */ var _modals_publications_modal_publications_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/publications-modal/publications-modal.component */ 9671);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search.pipe */ 9175);
/* harmony import */ var _modals_journals_modal_journals_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/journals-modal/journals-modal.component */ 7585);
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cv/cv.component */ 4725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);



























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_19__.AngularFireModule.initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.firebase),
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_20__.AngularFireAuthModule,
            _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_21__.AngularFireDatabaseModule,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_22__.AngularFireStorageModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _awards_awards_component__WEBPACK_IMPORTED_MODULE_3__.AwardsComponent,
        _publications_publications_component__WEBPACK_IMPORTED_MODULE_4__.PublicationsComponent,
        _research_research_component__WEBPACK_IMPORTED_MODULE_5__.ResearchComponent,
        _students_students_component__WEBPACK_IMPORTED_MODULE_6__.StudentsComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_8__.LoginComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__.DashboardComponent,
        _modals_award_modal_award_modal_component__WEBPACK_IMPORTED_MODULE_10__.AwardModalComponent,
        _modals_research_modal_research_modal_component__WEBPACK_IMPORTED_MODULE_11__.ResearchModalComponent,
        _modals_publications_modal_publications_modal_component__WEBPACK_IMPORTED_MODULE_12__.PublicationsModalComponent,
        _search_pipe__WEBPACK_IMPORTED_MODULE_13__.SearchPipe,
        _modals_journals_modal_journals_modal_component__WEBPACK_IMPORTED_MODULE_14__.JournalsModalComponent,
        _cv_cv_component__WEBPACK_IMPORTED_MODULE_15__.CvComponent], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_19__.AngularFireModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_20__.AngularFireAuthModule,
        _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_21__.AngularFireDatabaseModule,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_22__.AngularFireStorageModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 9171:
/*!********************************************!*\
  !*** ./src/app/awards/awards.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwardsComponent": () => (/* binding */ AwardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search.pipe */ 9175);





function AwardsComponent_div_48_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const awards_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Earnings: ", awards_r1.earnings, "");
} }
function AwardsComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AwardsComponent_div_48_p_10_Template, 2, 1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "More info");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const awards_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](awards_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](awards_r1.timespan);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](awards_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", awards_r1.earnings != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", awards_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
class AwardsComponent {
    constructor(databaseService) {
        this.databaseService = databaseService;
        //awardsData: any[] = [];
        this.searchAwards = '';
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.databaseService.getData('honors/awards').then((data) => {
            this.awardsData = data;
            this.awardsData = this.awardsData.flat();
            console.log(this.awardsData);
        });
    }
}
AwardsComponent.ɵfac = function AwardsComponent_Factory(t) { return new (t || AwardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService)); };
AwardsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AwardsComponent, selectors: [["app-awards"]], decls: 50, vars: 5, consts: [[1, "main-nav", "navbar-expand-lg"], [1, "row"], [2, "padding-right", "20%"], [1, "logo"], ["href", "index.html"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", "alt", "logo"], [1, "nav-menu", "list-unstyled"], ["href", "#home", 1, "smooth-scroll"], ["href", "#about", 1, "smooth-scroll"], ["href", "/awards", 1, "smooth-scroll"], ["href", "/publications", 1, "smooth-scroll"], ["href", "/research", 1, "smooth-scroll"], ["href", "/students", 1, "smooth-scroll"], ["href", "/cv", 1, "smooth-scroll"], ["id", "awards"], ["width", "395", "height", "81", "viewBox", "0 0 395 81", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "id", "logo"], ["d", "M51.9 64.6H25.7L21.5 77H3.60001L29 6.8H48.8L74.2 77H56.1L51.9 64.6ZM47.5 51.4L38.8 25.7L30.2 51.4H47.5Z", "stroke", "black", "stroke-width", "5"], ["d", "M162.03 21.2L146.93 77H128.03L119.23 40.8L110.13 77H91.3305L76.1305 21.2H93.2305L101.13 61.1L110.53 21.2H128.63L138.13 60.9L145.93 21.2H162.03Z", "stroke", "black", "stroke-width", "5"], ["d", "M165.152 49C165.152 43.2667 166.218 38.2333 168.352 33.9C170.552 29.5667 173.518 26.2333 177.252 23.9C180.985 21.5667 185.152 20.4 189.752 20.4C193.685 20.4 197.118 21.2 200.052 22.8C203.052 24.4 205.352 26.5 206.952 29.1V21.2H224.052V77H206.952V69.1C205.285 71.7 202.952 73.8 199.952 75.4C197.018 77 193.585 77.8 189.652 77.8C185.118 77.8 180.985 76.6333 177.252 74.3C173.518 71.9 170.552 68.5333 168.352 64.2C166.218 59.8 165.152 54.7333 165.152 49ZM206.952 49.1C206.952 44.8333 205.752 41.4667 203.352 39C201.018 36.5333 198.152 35.3 194.752 35.3C191.352 35.3 188.452 36.5333 186.052 39C183.718 41.4 182.552 44.7333 182.552 49C182.552 53.2667 183.718 56.6667 186.052 59.2C188.452 61.6667 191.352 62.9 194.752 62.9C198.152 62.9 201.018 61.6667 203.352 59.2C205.752 56.7333 206.952 53.3667 206.952 49.1Z", "stroke", "black", "stroke-width", "5"], ["d", "M253.523 30.5C255.523 27.4333 258.023 25.0333 261.023 23.3C264.023 21.5 267.356 20.6 271.023 20.6V38.7H266.323C262.056 38.7 258.856 39.6333 256.723 41.5C254.589 43.3 253.523 46.5 253.523 51.1V77H236.423V21.2H253.523V30.5Z", "stroke", "black", "stroke-width", "5"], ["d", "M275.796 49C275.796 43.2667 276.863 38.2333 278.996 33.9C281.196 29.5667 284.163 26.2333 287.896 23.9C291.629 21.5667 295.796 20.4 300.396 20.4C304.063 20.4 307.396 21.1667 310.396 22.7C313.463 24.2333 315.863 26.3 317.596 28.9V3H334.696V77H317.596V69C315.996 71.6667 313.696 73.8 310.696 75.4C307.763 77 304.329 77.8 300.396 77.8C295.796 77.8 291.629 76.6333 287.896 74.3C284.163 71.9 281.196 68.5333 278.996 64.2C276.863 59.8 275.796 54.7333 275.796 49ZM317.596 49.1C317.596 44.8333 316.396 41.4667 313.996 39C311.663 36.5333 308.796 35.3 305.396 35.3C301.996 35.3 299.096 36.5333 296.696 39C294.363 41.4 293.196 44.7333 293.196 49C293.196 53.2667 294.363 56.6667 296.696 59.2C299.096 61.6667 301.996 62.9 305.396 62.9C308.796 62.9 311.663 61.6667 313.996 59.2C316.396 56.7333 317.596 53.3667 317.596 49.1Z", "stroke", "black", "stroke-width", "5"], ["d", "M369.767 77.8C364.901 77.8 360.567 76.9667 356.767 75.3C352.967 73.6333 349.967 71.3667 347.767 68.5C345.567 65.5667 344.334 62.3 344.067 58.7H360.967C361.167 60.6333 362.067 62.2 363.667 63.4C365.267 64.6 367.234 65.2 369.567 65.2C371.701 65.2 373.334 64.8 374.467 64C375.667 63.1333 376.267 62.0333 376.267 60.7C376.267 59.1 375.434 57.9333 373.767 57.2C372.101 56.4 369.401 55.5333 365.667 54.6C361.667 53.6667 358.334 52.7 355.667 51.7C353.001 50.6333 350.701 49 348.767 46.8C346.834 44.5333 345.867 41.5 345.867 37.7C345.867 34.5 346.734 31.6 348.467 29C350.267 26.3333 352.867 24.2333 356.267 22.7C359.734 21.1667 363.834 20.4 368.567 20.4C375.567 20.4 381.067 22.1333 385.067 25.6C389.134 29.0667 391.467 33.6667 392.067 39.4H376.267C376.001 37.4667 375.134 35.9333 373.667 34.8C372.267 33.6667 370.401 33.1 368.067 33.1C366.067 33.1 364.534 33.5 363.467 34.3C362.401 35.0333 361.867 36.0667 361.867 37.4C361.867 39 362.701 40.2 364.367 41C366.101 41.8 368.767 42.6 372.367 43.4C376.501 44.4667 379.867 45.5333 382.467 46.6C385.067 47.6 387.334 49.2667 389.267 51.6C391.267 53.8667 392.301 56.9333 392.367 60.8C392.367 64.0667 391.434 67 389.567 69.6C387.767 72.1333 385.134 74.1333 381.667 75.6C378.267 77.0667 374.301 77.8 369.767 77.8Z", "stroke", "black", "stroke-width", "5"], [1, "line"], [1, "searchTitle"], [1, "search-container"], ["type", "text", "placeholder", "Search...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [1, "grid-container"], [4, "ngFor", "ngForOf"], [1, "grid-item"], [1, "card"], [1, "card-details"], [1, "text-title"], [1, "text-body"], [1, "about-body"], ["class", "text-body", 4, "ngIf"], ["target", "\u201D_blank\u201D", 1, "card-button", 3, "href"]], template: function AwardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header")(1, "nav", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 6)(8, "li")(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li")(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li")(21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li")(24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li")(27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Consulting/CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "path", 16)(32, "path", 17)(33, "path", 18)(34, "path", 19)(35, "path", 20)(36, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "div", 22)(38, "br")(39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Search Awards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 24)(44, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AwardsComponent_Template_input_ngModelChange_44_listener($event) { return ctx.searchAwards = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, AwardsComponent_div_48_Template, 13, 5, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchAwards);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](49, 2, ctx.awardsData, ctx.searchAwards));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], pipes: [_search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\n*[_ngcontent-%COMP%]{\n  padding: 0; \n  margin: 0; \n  box-sizing: border-box !important;\n}\n\nnav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 1000;\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: 'Poppins', sans-serif;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 15px;\n  color: #999999;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  line-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  padding: 6.5px;\n  transition: all 0.2s ease-in-out;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n.logo[_ngcontent-%COMP%] {\n  float: left;\n  padding-left: 20%;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 30%;\n}\n\n.responsive[_ngcontent-%COMP%] {\n    display: none;\n    font-size: 23px;\n  }\n\n.active[_ngcontent-%COMP%] {\n    color: #afafaf;\n  }\n\n.main-nav[_ngcontent-%COMP%] {\n    display: block !important;\n    position: relative;\n  }\n\n.navbar-expand-lg[_ngcontent-%COMP%]{\n    animation: fadeIn 0.75s;\n  }\n\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: 1; } \n  }\n\n.card[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 500px; \n    border-radius: 20px;\n    background: #f1e4d7;\n    position: relative;\n    padding: 1.8rem;\n    border: 2px solid #b8a07e;\n    transition: 0.5s ease-out;\n    overflow: visible;\n   }\n\n.card-details[_ngcontent-%COMP%] {\n    height: 100%;\n    grid-gap: .5em;\n    gap: .5em;\n    display: grid;\n    place-content: center;\n   }\n\n.card-button[_ngcontent-%COMP%] {\n    transform: translate(-50%, 125%);\n    width: 60%;\n    border-radius: 1rem;\n    border: none;\n    background-color: #b8a07e;\n    color: #fff;\n    font-size: 1rem;\n    padding: .5rem 1rem;\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    opacity: 0;\n    transition: 0.3s ease-out;\n   }\n\n.text-body[_ngcontent-%COMP%] {\n    font-size: 25px;\n   }\n\n.about-body[_ngcontent-%COMP%]{\n    font-size: 16px;\n    line-height: 1.5;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 5; \n    color: #000000;\n   }\n\n\n\n.text-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: #b8a07e;\n   }\n\n\n\n.card[_ngcontent-%COMP%]:hover {\n    border-color: #b8a07e;\n    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);\n   }\n\n.card[_ngcontent-%COMP%]:hover   .card-button[_ngcontent-%COMP%] {\n    transform: translate(-50%, 50%);\n    opacity: 1;\n   }\n\n.grid-container[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    width: 90%;\n    display: grid;\n    grid-template-columns: auto auto auto auto;\n    grid-gap: 5%;\n    height: auto;\n}\n\n.grid-item[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    margin-top: 5%;\n    text-align: center;\n}\n\n#awards[_ngcontent-%COMP%]{\n    height: auto !important;\n  }\n\n.searchTitle[_ngcontent-%COMP%]{\n  text-align: center;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 20px;\n  background-color: #f1e4d7;\n  padding: 10px;\n  width: 60%;\n  margin: 0 auto;\n}\n\n.search-container[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background-color: transparent;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.search-container[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  padding: 10px;\n  border-radius: 50%;\n}\n\n.search-container[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #8c765c;\n  font-size: 18px;\n  border: 2px solid #8c765c;\n  border-radius: 50%;\n  padding: 5px;\n}\n\n#logo[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 20%; \n  left: 50%;\n  transform: translate(-50%, -20%); \n  margin-bottom: 10px;\n  animation: fill 0.5s ease forwards 2.5s; \n  z-index: 100;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(1){\n  stroke-dasharray:  329.0250549316406px;\n  stroke-dashoffset: 329.0250549316406px;\n  animation: line-anim 2s ease forwards; \n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2){\n  stroke-dasharray: 442.1668395996094px;\n  stroke-dashoffset: 442.1668395996094px;\n  animation: line-anim 2s ease forwards 0.1s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3){\n  stroke-dasharray: 313.4666748046875px;\n  stroke-dashoffset: 313.4666748046875px;\n  animation: line-anim 2s ease forwards 0.2s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4){\n  stroke-dasharray: 189.638916015625px;\n  stroke-dashoffset: 189.638916015625px;\n  animation: line-anim 2s ease forwards 0.3s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5){\n  stroke-dasharray: 349.69708251953125px;\n  stroke-dashoffset: 349.69708251953125px;\n  animation: line-anim 2s ease forwards 0.4s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6){\n  stroke-dasharray: 289.90948486328125px;\n  stroke-dashoffset: 289.90948486328125px;\n  animation: line-anim 2s ease forwards 0.5s;\n}\n\n@keyframes line-anim {\n    to{\n      stroke-dashoffset: 0px;\n    }\n  \n}\n\n@keyframes fill {\n  from{\n    fill: transparent;\n  }\n  to{\n    fill:black; \n  }\n}\n\n@media only screen \nand  (min-width: 320px) and (max-width: 420px){\n\n  .logo[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  \n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 25%;\n    text-align: center;\n    margin: 0 auto;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 15px;\n  }\n  \n  #logo[_ngcontent-%COMP%]{\n    width: 60%;\n    top: 22%; \n   }\n   #awards[_ngcontent-%COMP%]{\n     padding-top: 25%; \n   }\n \n   .grid-container[_ngcontent-%COMP%] {\n     grid-template-columns: auto;\n     grid-gap: 10px;\n   }\n \n}\n\n@media only screen \n  and  (min-width: 421px) and (max-width: 520px){\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 120%;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 25%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 15px;\n    }\n  \n  #logo[_ngcontent-%COMP%]{\n    width: 60%;\n    top: 25%; \n   }\n   #awards[_ngcontent-%COMP%]{\n     padding-top: 25%; \n   }\n \n   .grid-container[_ngcontent-%COMP%] {\n     grid-template-columns: auto;\n     grid-gap: 10px;\n   }\n \n  }\n\n@media only screen \n  and  (min-width: 521px) and (max-width: 620px){\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 120%; \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 20%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 15px;\n    }\n  \n  #logo[_ngcontent-%COMP%]{\n    width: 60%;\n    top: 30%; \n   }\n   #awards[_ngcontent-%COMP%]{\n     padding-top: 25%; \n   }\n \n   .grid-container[_ngcontent-%COMP%] {\n     grid-template-columns: auto auto;\n     grid-gap: 10px;\n   }\n \n  }\n\n@media only screen \n  and  (min-width: 621px) and (max-width: 820px){\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 120%;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 25%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n    }\n  \n  #logo[_ngcontent-%COMP%]{\n    width: 60%;\n    top: 30%; \n   }\n   #awards[_ngcontent-%COMP%]{\n     padding-top: 15%; \n   }\n \n   .grid-container[_ngcontent-%COMP%] {\n     grid-template-columns: auto auto;\n     grid-gap: 10px;\n   }\n \n  }\n\n@media only screen \n  and  (min-width: 821px) and (max-width: 920px){\n\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 125%;\n    \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 10%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n      margin: 0 auto;\n    }\n  \n    #logo[_ngcontent-%COMP%]{\n      width: 60%;\n      top: 30%; \n     }\n     #awards[_ngcontent-%COMP%]{\n       padding-top: 15%; \n     }\n   \n     .grid-container[_ngcontent-%COMP%] {\n       grid-template-columns: auto auto;\n       grid-gap: 10px;\n     }\n   \n  \n  \n  }\n\n@media only screen \n  and  (min-width: 921px) and (max-width: 1320px){\n\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 125%;\n    \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 10%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n      margin: 0 auto;\n    } \n    #logo[_ngcontent-%COMP%]{\n      width: 60%;\n      top: 30%; \n     }\n     #awards[_ngcontent-%COMP%]{\n       padding-top: 15%; \n     }\n   \n     .grid-container[_ngcontent-%COMP%] {\n       grid-template-columns: auto auto auto;\n       grid-gap: 15px;\n     }\n   \n  }\n\n@media only screen \n  and  (min-width: 1321px) and (max-width: 1520px){\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 125%;\n    \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 10%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n      margin: 0 auto;\n    }\n    #logo[_ngcontent-%COMP%]{\n      width: 60%;\n      top: 35%; \n     }\n     #awards[_ngcontent-%COMP%]{\n       padding-top: 15%; \n     }\n   \n     .grid-container[_ngcontent-%COMP%] {\n       grid-template-columns: auto auto auto;\n       grid-gap: 15px;\n     }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTs7QUFFNUU7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGlDQUFpQztBQUNuQzs7QUFHQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVFO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLEtBQUssVUFBVSxFQUFFO0lBQ2pCLE9BQU8sVUFBVSxFQUFFO0VBQ3JCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixpQkFBaUI7R0FD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RUE7TUFDRSxVQUFVO01BQ1YsUUFBUTtLQUNUO0tBQ0E7T0FDRSxnQkFBZ0I7S0FDbEI7O0tBRUE7T0FDRSxnQ0FBZ0M7T0FDaEMsY0FBYztLQUNoQjs7OztFQUlIOztBQUlBOzs7SUFHRTtNQUNFLFdBQVc7SUFDYjtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLFdBQVc7O0lBRWI7SUFDQTtNQUNFLFNBQVM7TUFDVCxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGVBQWU7TUFDZixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxVQUFVO01BQ1YsUUFBUTtLQUNUO0tBQ0E7T0FDRSxnQkFBZ0I7S0FDbEI7O0tBRUE7T0FDRSxxQ0FBcUM7T0FDckMsY0FBYztLQUNoQjs7RUFFSDs7QUFHQTs7SUFFRTtNQUNFLFdBQVc7SUFDYjtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLFdBQVc7O0lBRWI7SUFDQTtNQUNFLFNBQVM7TUFDVCxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGVBQWU7TUFDZixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxVQUFVO01BQ1YsUUFBUTtLQUNUO0tBQ0E7T0FDRSxnQkFBZ0I7S0FDbEI7O0tBRUE7T0FDRSxxQ0FBcUM7T0FDckMsY0FBYztLQUNoQjtFQUNIIiwiZmlsZSI6ImF3YXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcblxuKntcbiAgcGFkZGluZzogMDsgXG4gIG1hcmdpbjogMDsgXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcbn1cblxuXG5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogMTAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5uYXYtbWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxubmF2IHVsIGxpIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbn1cblxubmF2IHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbm5hdiB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZzogNi41cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5uYXYgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuXG4ubG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwJTtcbn1cblxuLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAzMCU7XG59XG5cbiAgLnJlc3BvbnNpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICB9XG4gIFxuICAuYWN0aXZlIHtcbiAgICBjb2xvcjogI2FmYWZhZjtcbiAgfVxuICBcbiAgLm1haW4tbmF2IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5uYXZiYXItZXhwYW5kLWxne1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNzVzO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IH0gXG4gIH1cbiAgXG4gIC5jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4OyBcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmMWU0ZDc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDEuOHJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYjhhMDdlO1xuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICB9XG4gICBcbiAgIC5jYXJkLWRldGFpbHMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBnYXA6IC41ZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICB9XG4gICBcbiAgIC5jYXJkLWJ1dHRvbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTI1JSk7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhhMDdlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbiAgIH1cbiAgIFxuICAgLnRleHQtYm9keSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgfVxuICAgLmFib3V0LWJvZHl7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogNTsgLyogU2hvdyBvbmx5IDIgbGluZXMgb2YgdGV4dCAqL1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgfVxuICAgLypUZXh0Ki9cbiAgIC50ZXh0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2I4YTA3ZTtcbiAgIH1cbiAgIFxuICAgLypIb3ZlciovXG4gICAuY2FyZDpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYjhhMDdlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgfVxuICAgXG4gICAuY2FyZDpob3ZlciAuY2FyZC1idXR0b24ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgIH1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICAgIGdyaWQtZ2FwOiA1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ncmlkLWl0ZW0ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuICAjYXdhcmRze1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIFxuLnNlYXJjaFRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWU0ZDc7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnNlYXJjaC1jb250YWluZXIgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNlYXJjaC1jb250YWluZXIgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0gaSB7XG4gIGNvbG9yOiAjOGM3NjVjO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4Yzc2NWM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xufVxuI2xvZ297XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7IFxuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMCUpOyBcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYW5pbWF0aW9uOiBmaWxsIDAuNXMgZWFzZSBmb3J3YXJkcyAyLjVzOyBcbiAgei1pbmRleDogMTAwO1xufVxuXG4jbG9nbyBwYXRoOm50aC1jaGlsZCgxKXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogIDMyOS4wMjUwNTQ5MzE2NDA2cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAzMjkuMDI1MDU0OTMxNjQwNnB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzOyBcbn1cblxuI2xvZ28gcGF0aDpudGgtY2hpbGQoMil7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDQ0Mi4xNjY4Mzk1OTk2MDk0cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiA0NDIuMTY2ODM5NTk5NjA5NHB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuMXM7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCgzKXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMzEzLjQ2NjY3NDgwNDY4NzVweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMxMy40NjY2NzQ4MDQ2ODc1cHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC4ycztcbn1cbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDQpe1xuICBzdHJva2UtZGFzaGFycmF5OiAxODkuNjM4OTE2MDE1NjI1cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxODkuNjM4OTE2MDE1NjI1cHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC4zcztcbn1cbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDUpe1xuICBzdHJva2UtZGFzaGFycmF5OiAzNDkuNjk3MDgyNTE5NTMxMjVweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDM0OS42OTcwODI1MTk1MzEyNXB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuNHM7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCg2KXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjg5LjkwOTQ4NDg2MzI4MTI1cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAyODkuOTA5NDg0ODYzMjgxMjVweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjVzO1xufVxuXG5cbkBrZXlmcmFtZXMgbGluZS1hbmltIHtcbiAgICB0b3tcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwcHg7XG4gICAgfVxuICBcbn1cbkBrZXlmcmFtZXMgZmlsbCB7XG4gIGZyb217XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgdG97XG4gICAgZmlsbDpibGFjazsgXG4gIH1cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gXG5hbmQgIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpe1xuXG4gIC5sb2dvIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAubmF2LW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgfVxuICBuYXYgdWwgbGkge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBuYXYgdWwgbGkgYXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgXG4gICNsb2dve1xuICAgIHdpZHRoOiA2MCU7XG4gICAgdG9wOiAyMiU7IFxuICAgfVxuICAgI2F3YXJkc3tcbiAgICAgcGFkZGluZy10b3A6IDI1JTsgXG4gICB9XG4gXG4gICAuZ3JpZC1jb250YWluZXIge1xuICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgfVxuIFxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gXG4gIGFuZCAgKG1pbi13aWR0aDogNDIxcHgpIGFuZCAobWF4LXdpZHRoOiA1MjBweCl7XG4gICAgLmxvZ28ge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuICAgIC5uYXYtbWVudSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMjAlO1xuICAgIH1cbiAgICBuYXYgdWwgbGkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBuYXYgdWwgbGkgYXtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gIFxuICAjbG9nb3tcbiAgICB3aWR0aDogNjAlO1xuICAgIHRvcDogMjUlOyBcbiAgIH1cbiAgICNhd2FyZHN7XG4gICAgIHBhZGRpbmctdG9wOiAyNSU7IFxuICAgfVxuIFxuICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgICBncmlkLWdhcDogMTBweDtcbiAgIH1cbiBcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBcbiAgYW5kICAobWluLXdpZHRoOiA1MjFweCkgYW5kIChtYXgtd2lkdGg6IDYyMHB4KXtcbiAgICAubG9nbyB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLm5hdi1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEyMCU7IFxuICAgIH1cbiAgICBuYXYgdWwgbGkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBuYXYgdWwgbGkgYXtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gIFxuICAjbG9nb3tcbiAgICB3aWR0aDogNjAlO1xuICAgIHRvcDogMzAlOyBcbiAgIH1cbiAgICNhd2FyZHN7XG4gICAgIHBhZGRpbmctdG9wOiAyNSU7IFxuICAgfVxuIFxuICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgfVxuIFxuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIFxuICBhbmQgIChtaW4td2lkdGg6IDYyMXB4KSBhbmQgKG1heC13aWR0aDogODIwcHgpe1xuICAgIC5sb2dvIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgICAubmF2LW1lbnUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTIwJTtcbiAgICB9XG4gICAgbmF2IHVsIGxpIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgbmF2IHVsIGxpIGF7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICBcbiAgI2xvZ297XG4gICAgd2lkdGg6IDYwJTtcbiAgICB0b3A6IDMwJTsgXG4gICB9XG4gICAjYXdhcmRze1xuICAgICBwYWRkaW5nLXRvcDogMTUlOyBcbiAgIH1cbiBcbiAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAgICBncmlkLWdhcDogMTBweDtcbiAgIH1cbiBcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBcbiAgYW5kICAobWluLXdpZHRoOiA4MjFweCkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KXtcblxuICAgIC5sb2dvIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgICAubmF2LW1lbnUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTI1JTtcbiAgICBcbiAgICB9XG4gICAgbmF2IHVsIGxpIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgbmF2IHVsIGxpIGF7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gIFxuICAgICNsb2dve1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIHRvcDogMzAlOyBcbiAgICAgfVxuICAgICAjYXdhcmRze1xuICAgICAgIHBhZGRpbmctdG9wOiAxNSU7IFxuICAgICB9XG4gICBcbiAgICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgICAgICBncmlkLWdhcDogMTBweDtcbiAgICAgfVxuICAgXG4gIFxuICBcbiAgfVxuXG5cbiAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBcbiAgYW5kICAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEzMjBweCl7XG5cbiAgICAubG9nbyB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLm5hdi1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEyNSU7XG4gICAgXG4gICAgfVxuICAgIG5hdiB1bCBsaSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMTAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIG5hdiB1bCBsaSBhe1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfSBcbiAgICAjbG9nb3tcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgICB0b3A6IDMwJTsgXG4gICAgIH1cbiAgICAgI2F3YXJkc3tcbiAgICAgICBwYWRkaW5nLXRvcDogMTUlOyBcbiAgICAgfVxuICAgXG4gICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgICAgICBncmlkLWdhcDogMTVweDtcbiAgICAgfVxuICAgXG4gIH1cblxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBcbiAgYW5kICAobWluLXdpZHRoOiAxMzIxcHgpIGFuZCAobWF4LXdpZHRoOiAxNTIwcHgpe1xuICAgIC5sb2dvIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgICAubmF2LW1lbnUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTI1JTtcbiAgICBcbiAgICB9XG4gICAgbmF2IHVsIGxpIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgbmF2IHVsIGxpIGF7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgI2xvZ297XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgdG9wOiAzNSU7IFxuICAgICB9XG4gICAgICNhd2FyZHN7XG4gICAgICAgcGFkZGluZy10b3A6IDE1JTsgXG4gICAgIH1cbiAgIFxuICAgICAuZ3JpZC1jb250YWluZXIge1xuICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gICAgICAgZ3JpZC1nYXA6IDE1cHg7XG4gICAgIH1cbiAgfVxuXG4gICJdfQ== */"] });


/***/ }),

/***/ 4725:
/*!************************************!*\
  !*** ./src/app/cv/cv.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CvComponent": () => (/* binding */ CvComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CvComponent {
    constructor() { }
    ngOnInit() {
    }
}
CvComponent.ɵfac = function CvComponent_Factory(t) { return new (t || CvComponent)(); };
CvComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CvComponent, selectors: [["app-cv"]], decls: 57, vars: 0, consts: [[1, "main-nav", "navbar-expand-lg"], [1, "row"], [2, "padding-right", "20%"], [1, "logo"], ["href", "index.html"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", "alt", "logo"], [1, "nav-menu", "list-unstyled"], ["href", "#home", 1, "smooth-scroll"], ["href", "#about", 1, "smooth-scroll"], ["href", "/awards", 1, "smooth-scroll"], ["href", "/publications", 1, "smooth-scroll"], ["href", "/research", 1, "smooth-scroll"], ["href", "/students", 1, "smooth-scroll"], ["href", "/cv", 1, "smooth-scroll"], ["id", "CV"], [1, "title"], [1, "button", 2, "margin", "0 auto", "border", "2px solid black"], ["href", "#", "target", "\\blank", 1, "link"], [2, "font-size", "200%"], [1, "experience"], [1, "styled-list"]], template: function CvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "nav", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6)(8, "li")(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li")(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li")(21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li")(24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li")(27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Consulting/CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Consulting/CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br")(34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16)(36, "a", 17)(37, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Download CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br")(40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19)(42, "ul", 20)(43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Expert Witness, Code Review, Quandarypeak and LTL Attorneys, 2022-2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Expert Witness, Shore Chan Depumpo, 2018-2020 (more than 20 hours of testimony litigation)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Expert Witness, Janik Vinnakota LLP, 2019-2020, (Preparing 8 IPRs)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Technology Consultant, Netlist Inc., 2014-2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Expert Witness, McAndrews, Held & Malloy, 2014-2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Expert Witness, Bartko Zankel Bunzel, 2014-2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Technology Consultant, Gerchen Keller Capital, LLC, 2014-2015");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\n*[_ngcontent-%COMP%]{\n  padding: 0; \n  margin: 0; \n  box-sizing: border-box;\n}\n\nnav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    background: #fff;\n    z-index: 1000;\n    width: 100%;\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);\n  }\n\n.nav-menu[_ngcontent-%COMP%] {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n  }\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-family: 'Poppins', sans-serif;\n  }\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    margin-left: 0;\n  }\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 15px;\n    color: #999999;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 500;\n    line-height: 16px;\n    text-transform: uppercase;\n    letter-spacing: 0.02em;\n    text-transform: capitalize;\n    padding: 6.5px;\n    transition: all 0.2s ease-in-out;\n  }\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: black;\n  }\n\n.logo[_ngcontent-%COMP%] {\n    float: left;\n    padding-left: 20%;\n  }\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30%;\n    height: 30%;\n  }\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\n    height: 50%;\n  }\n\n.responsive[_ngcontent-%COMP%] {\n    display: none;\n    font-size: 23px;\n  }\n\n.active[_ngcontent-%COMP%] {\n    color: #afafaf;\n  }\n\n.main-nav[_ngcontent-%COMP%] {\n    display: block !important;\n    position: relative;\n  }\n\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: 1; } \n  }\n\n.styled-list[_ngcontent-%COMP%] {\n    list-style: none;\n    padding: 0;\n    margin-left: 10px;\n  }\n\n.styled-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 15px 0;\n    position: relative;\n    padding-left: 25px;\n    font-size: 20px;\n    line-height: 1.4;\n    font-family: 'Poppins', sans-serif;\n    color: black;\n  }\n\n.styled-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n    content: \"\\2192\";\n    position: absolute;\n    left: 0;\n    animation: bullet 0.5s ease-out;\n  }\n\n@keyframes bullet {\n    0% {\n      transform: scale(0);\n      opacity: 0;\n     \n    }\n    100% {\n      transform: scale(5);\n      opacity: 1;\n    }\n  }\n\n.title[_ngcontent-%COMP%]{\n    text-align: center;\n    font-size: 50px;\n    color: black;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 900;\n  }\n\n.button[_ngcontent-%COMP%] {\n    background-color: #b8a07e;\n    color: #ffffff;\n    padding: 10px 20px;\n    border-radius: 5px;\n    cursor: pointer;\n    width: 30%;\n    text-align: center;\n  }\n\n.button[_ngcontent-%COMP%]:hover {\n    background-color: #a08e6b;\n  }\n\n.link[_ngcontent-%COMP%]{\n    text-decoration: none;\n    color: white;\n  }\n\n@media only screen \nand  (min-width: 320px) and (max-width: 420px){\n\n  .logo[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  \n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 25%;\n    text-align: center;\n    margin: 0 auto;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 15px;\n  }\n  .button[_ngcontent-%COMP%]{\n    font-size: 5px;\n  }\n \n}\n\n@media only screen \n  and  (min-width: 421px) and (max-width: 520px){\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 120%;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 25%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 15px;\n    }\n \n  }\n\n@media only screen \n  and  (min-width: 521px) and (max-width: 620px){\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 120%; \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 20%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 15px;\n    }\n  \n  \n  }\n\n@media only screen \n  and  (min-width: 621px) and (max-width: 820px){\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 120%;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 25%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n    }\n  \n \n  }\n\n@media only screen \n  and  (min-width: 821px) and (max-width: 920px){\n\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 125%;\n    \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 10%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n      margin: 0 auto;\n    }\n  \n  \n  }\n\n@media only screen \n  and  (min-width: 921px) and (max-width: 1320px){\n\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 125%;\n    \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 10%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n      margin: 0 auto;\n    } \n   \n   \n  }\n\n@media only screen \n  and  (min-width: 1321px) and (max-width: 1520px){\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 125%;\n    \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 10%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n      margin: 0 auto;\n    }\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,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Q0UsZUFBZTtJQUNqQjs7O0VBR0Y7O0FBRUE7O0lBRUU7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixXQUFXO0lBQ2I7SUFDQTtNQUNFLFNBQVM7TUFDVCxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGVBQWU7SUFDakI7OztFQUdGOztBQUVBOzs7SUFHRTtNQUNFLFdBQVc7SUFDYjtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLFdBQVc7O0lBRWI7SUFDQTtNQUNFLFNBQVM7TUFDVCxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGVBQWU7TUFDZixjQUFjO0lBQ2hCOzs7RUFHRjs7QUFJQTs7O0lBR0U7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixXQUFXOztJQUViO0lBQ0E7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxlQUFlO01BQ2YsY0FBYztJQUNoQjs7O0VBR0Y7O0FBR0E7O0lBRUU7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixXQUFXOztJQUViO0lBQ0E7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxlQUFlO01BQ2YsY0FBYztJQUNoQjs7RUFFRiIsImZpbGUiOiJjdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcblxuKntcbiAgcGFkZGluZzogMDsgXG4gIG1hcmdpbjogMDsgXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxubmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIH1cbiAgXG4gIC5uYXYtbWVudSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIFxuICBuYXYgdWwgbGkge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIG5hdiB1bCBsaTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgXG4gIG5hdiB1bCBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBwYWRkaW5nOiA2LjVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgbmF2IHVsIGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgXG4gIC5sb2dvIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgfVxuICBcbiAgLmxvZ28gaW1nIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzAlO1xuICB9XG4gIC5sb2dvIGltZzpob3ZlcntcbiAgICBoZWlnaHQ6IDUwJTtcbiAgfVxuICBcbiAgLnJlc3BvbnNpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyM3B4O1xuICB9XG4gIFxuICAuYWN0aXZlIHtcbiAgICBjb2xvcjogI2FmYWZhZjtcbiAgfVxuICBcbiAgLm1haW4tbmF2IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9IFxuICB9XG5cbiAgLnN0eWxlZC1saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5zdHlsZWQtbGlzdCBsaSB7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLnN0eWxlZC1saXN0IGxpOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFwyMTkyXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYW5pbWF0aW9uOiBidWxsZXQgMC41cyBlYXNlLW91dDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBidWxsZXQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICBcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDUpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgLnRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgfVxuXG4gIC5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiOGEwN2U7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDMwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTA4ZTZiO1xuICB9XG5cbiAgLmxpbmt7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcblxuICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBcbmFuZCAgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCl7XG5cbiAgLmxvZ28ge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5uYXYtbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxuICB9XG4gIG5hdiB1bCBsaSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIG5hdiB1bCBsaSBhe1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogNXB4O1xuICB9XG4gXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBcbiAgYW5kICAobWluLXdpZHRoOiA0MjFweCkgYW5kIChtYXgtd2lkdGg6IDUyMHB4KXtcbiAgICAubG9nbyB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLm5hdi1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEyMCU7XG4gICAgfVxuICAgIG5hdiB1bCBsaSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIG5hdiB1bCBsaSBhe1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiBcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBcbiAgYW5kICAobWluLXdpZHRoOiA1MjFweCkgYW5kIChtYXgtd2lkdGg6IDYyMHB4KXtcbiAgICAubG9nbyB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLm5hdi1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEyMCU7IFxuICAgIH1cbiAgICBuYXYgdWwgbGkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBuYXYgdWwgbGkgYXtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gIFxuICBcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBcbiAgYW5kICAobWluLXdpZHRoOiA2MjFweCkgYW5kIChtYXgtd2lkdGg6IDgyMHB4KXtcbiAgICAubG9nbyB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLm5hdi1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEyMCU7XG4gICAgfVxuICAgIG5hdiB1bCBsaSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIG5hdiB1bCBsaSBhe1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgXG4gXG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gXG4gIGFuZCAgKG1pbi13aWR0aDogODIxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCl7XG5cbiAgICAubG9nbyB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLm5hdi1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEyNSU7XG4gICAgXG4gICAgfVxuICAgIG5hdiB1bCBsaSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMTAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIG5hdiB1bCBsaSBhe1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICBcbiAgXG4gIH1cblxuXG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gXG4gIGFuZCAgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMzIwcHgpe1xuXG4gICAgLmxvZ28ge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuICAgIC5uYXYtbWVudSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMjUlO1xuICAgIFxuICAgIH1cbiAgICBuYXYgdWwgbGkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBuYXYgdWwgbGkgYXtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH0gXG4gICBcbiAgIFxuICB9XG5cblxuICBAbWVkaWEgb25seSBzY3JlZW4gXG4gIGFuZCAgKG1pbi13aWR0aDogMTMyMXB4KSBhbmQgKG1heC13aWR0aDogMTUyMHB4KXtcbiAgICAubG9nbyB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLm5hdi1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEyNSU7XG4gICAgXG4gICAgfVxuICAgIG5hdiB1bCBsaSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMTAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIG5hdiB1bCBsaSBhe1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIFxuICB9XG5cbiAgXG4gICJdfQ== */"] });


/***/ }),

/***/ 7528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modals_award_modal_award_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modals/award-modal/award-modal.component */ 7093);
/* harmony import */ var _modals_research_modal_research_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals/research-modal/research-modal.component */ 7861);
/* harmony import */ var _modals_publications_modal_publications_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals/publications-modal/publications-modal.component */ 9671);
/* harmony import */ var _modals_journals_modal_journals_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/journals-modal/journals-modal.component */ 7585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search.pipe */ 9175);












function DashboardComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_div_29_Template_a_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const indOfelement_r11 = restoredCtx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r12.remove("honors/awards", indOfelement_r11, "awards"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const awards_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](awards_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](awards_r10.timespan);
} }
function DashboardComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_tr_59_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const ind_r15 = restoredCtx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r16.remove("journals/journals", ind_r15, "publications"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const journals_r14 = ctx.$implicit;
    const ind_r15 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](journals_r14.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.journalsData.length - ind_r15, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", journals_r14.journal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", journals_r14.authors, "");
} }
function DashboardComponent_tr_96_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_tr_96_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const y_r19 = restoredCtx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r20.remove("publications/conferences", y_r19, "publications"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const conferences_r18 = ctx.$implicit;
    const y_r19 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](conferences_r18.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.conferencesData.length - y_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](conferences_r18.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", conferences_r18.journal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](conferences_r18.authors);
} }
function DashboardComponent_div_108_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 45);
} if (rf & 2) {
    const research_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", research_r22.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function DashboardComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardComponent_div_108_img_1_Template, 1, 1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_div_108_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const ind_r23 = restoredCtx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.remove("research/research", ind_r23, "research"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const research_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", research_r22.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](research_r22.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](research_r22.content);
} }
function DashboardComponent_ng_container_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", peoples_r28.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r28.research);
} }
function DashboardComponent_ng_container_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", peoples_r29.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r29.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r29.research);
} }
function DashboardComponent_ng_container_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 46)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r30);
} }
function DashboardComponent_ng_container_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 50)(4, "div", 51)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", peoples_r31.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r31.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Current job: ", peoples_r31.job, "");
} }
function DashboardComponent_ng_container_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 50)(4, "div", 52)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", peoples_r32.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r32.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("PhD Thesis: ", peoples_r32.thesis, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r32.job);
} }
function DashboardComponent_ng_container_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 50)(4, "div", 52)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", peoples_r33.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r33.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("PhD Thesis: ", peoples_r33.thesis, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r33.job);
} }
class DashboardComponent {
    constructor(databaseService, dialogRef, afStorage) {
        this.databaseService = databaseService;
        this.dialogRef = dialogRef;
        this.afStorage = afStorage;
        this.lengthOfConference = 0;
        this.searchJournals = '';
        this.searchPublications = '';
        this.director = [];
        this.masters = [];
        this.ms_alumni = [];
        this.phd_alumni = [];
        this.phds = [];
        this.post_doc_alumni = [];
        this.undergrad_alumni = [];
        this.undergraduates = [];
        this.images = [];
    }
    ngOnInit() {
        this.activePage = "awards";
        this.getData('awards');
    }
    getData(page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (page == "awards") {
                yield this.databaseService.getData('honors/awards').then((data) => {
                    this.currentData = data;
                    this.currentData = this.currentData.flat();
                    this.length = this.currentData.length;
                });
                console.log(this.currentData);
            }
            if (page == "research") {
                yield this.databaseService.getData('research/research').then((data) => {
                    this.currentData = data;
                    this.currentData = this.currentData.flat();
                    this.length = this.currentData.length;
                });
                this.putResearchImageList();
            }
            if (page == "publications") {
                this.journalsData = [];
                this.conferencesData = [];
                this.databaseService.getData("journals/journals").then((res) => {
                    console.log(res);
                    this.journalsData = res;
                    this.journalsData = this.journalsData.flat();
                    this.length = this.currentData.length;
                });
                this.databaseService.getData("publications/conferences").then((res) => {
                    console.log(res);
                    this.conferencesData = res;
                    this.conferencesData = this.conferencesData.flat();
                    this.lengthOfConference = this.conferencesData.length;
                });
            }
            if (page == "students") {
                this.director = [];
                this.masters = [];
                this.ms_alumni = [];
                this.phd_alumni = [];
                this.phds = [];
                this.post_doc_alumni = [];
                this.undergrad_alumni = [];
                this.undergraduates = [];
                this.images = [];
                yield this.databaseService.getData('people').then((data) => {
                    const result = Object.keys(data).map((key) => {
                        return { [key]: data[key] };
                    });
                    result.forEach(mobile => {
                        for (let key in mobile) {
                            for (let i = 0; i < Object.keys(mobile[key]).length; i++) {
                                if (`${key}` == "director") {
                                    this.director.push(mobile[key][i]);
                                }
                                if (`${key}` == "masters") {
                                    this.masters.push(mobile[key][i]);
                                }
                                if (`${key}` == "ms_alumni") {
                                    this.ms_alumni.push(mobile[key][i]);
                                }
                                if (`${key}` == "phd_alumni") {
                                    this.phd_alumni.push(mobile[key][i]);
                                }
                                if (`${key}` == "phds") {
                                    this.phds.push(mobile[key][i]);
                                }
                                if (`${key}` == "post_doc_alumni") {
                                    this.post_doc_alumni.push(mobile[key][i]);
                                }
                                if (`${key}` == "undergrad_alumni") {
                                    this.undergrad_alumni.push(mobile[key][i]);
                                }
                                if (`${key}` == "undergraduates") {
                                    this.undergraduates.push(mobile[key][i]);
                                }
                            }
                        }
                    });
                });
            }
            this.putImageList();
        });
    }
    putResearchImageList() {
        for (let i = 0; i < this.currentData.length; i++) {
            if (this.currentData[i].title == "ASEEC") {
                this.currentData.splice(i, 1);
            }
            if (this.currentData[i].img_name != "" || this.currentData[i].img_name != null) {
                this.storageRef = this.afStorage.ref("research/" + this.currentData[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.currentData[i].url = url;
                });
            }
        }
    }
    putImageList() {
        for (let i = 0; i < this.masters.length; i++) {
            if (this.masters[i].img_name != "" || this.masters[i].img_name != null) {
                this.storageRef = this.afStorage.ref("students/" + this.masters[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.masters[i].url = url;
                });
            }
        }
        for (let i = 0; i < this.ms_alumni.length; i++) {
            if (this.ms_alumni[i].img_name != "" || this.ms_alumni[i].img_name != undefined) {
                this.storageRef = this.afStorage.ref("students/" + this.ms_alumni[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.ms_alumni[i].url = url;
                });
            }
        }
        for (let i = 0; i < this.phd_alumni.length; i++) {
            if (this.phd_alumni[i].img_name != "" || this.phd_alumni[i].img_name != null) {
                this.storageRef = this.afStorage.ref("students/" + this.phd_alumni[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.phd_alumni[i].url = url;
                });
            }
        }
        for (let i = 0; i < this.phds.length; i++) {
            if (this.phds[i].img_name != "" || this.phds[i].img_name != null) {
                this.storageRef = this.afStorage.ref("students/" + this.phds[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.phds[i].url = url;
                });
            }
        }
        for (let i = 0; i < this.post_doc_alumni.length; i++) {
            if (this.post_doc_alumni[i].img_name != "" || this.post_doc_alumni[i].img_name != null) {
                this.storageRef = this.afStorage.ref("students/" + this.post_doc_alumni[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.post_doc_alumni[i].url = url;
                });
            }
        }
        for (let i = 0; i < this.undergrad_alumni.length; i++) {
            if (this.undergrad_alumni[i].img_name != "" || this.undergrad_alumni[i].img_name != null) {
                this.storageRef = this.afStorage.ref("students/" + this.undergrad_alumni[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.undergrad_alumni[i].url = url;
                });
            }
        }
        for (let i = 0; i < this.undergraduates.length; i++) {
            if (this.undergraduates[i].img_name != "" || this.undergraduates[i].img_name != null) {
                this.storageRef = this.afStorage.ref("students/" + this.undergraduates[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.undergraduates[i].url = url;
                });
            }
        }
    }
    openDialog(page) {
        if (page == "awards") {
            const dialog = this.dialogRef.open(_modals_award_modal_award_modal_component__WEBPACK_IMPORTED_MODULE_0__.AwardModalComponent, {
                data: {
                    length: this.length
                }
            });
            dialog.afterClosed().subscribe(() => {
                // Do stuff after the dialog has closed
                this.getData(page);
            });
        }
        if (page == "research") {
            const dialog = this.dialogRef.open(_modals_research_modal_research_modal_component__WEBPACK_IMPORTED_MODULE_1__.ResearchModalComponent, {
                data: {
                    length: this.length
                }
            });
            dialog.afterClosed().subscribe(() => {
                // Do stuff after the dialog has closed
                this.getData(page);
            });
        }
        if (page == "publications") {
            const dialog = this.dialogRef.open(_modals_publications_modal_publications_modal_component__WEBPACK_IMPORTED_MODULE_2__.PublicationsModalComponent, {
                data: {
                    length: this.length
                }
            });
            dialog.afterClosed().subscribe(() => {
                // Do stuff after the dialog has closed
                this.getData(page);
            });
        }
        if (page == "journals") {
            const dialog = this.dialogRef.open(_modals_journals_modal_journals_modal_component__WEBPACK_IMPORTED_MODULE_3__.JournalsModalComponent, {
                data: {
                    length: this.length
                }
            });
            dialog.afterClosed().subscribe(() => {
                // Do stuff after the dialog has closed
                this.getData(page);
            });
        }
    }
    remove(path, index, page) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.databaseService.remove(`${path}/${index}`);
            this.getData(page);
        });
    }
    togglePage(page) {
        this.activePage = page;
        this.getData(page);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_database_service__WEBPACK_IMPORTED_MODULE_4__.DatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_9__.AngularFireStorage)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 140, vars: 26, consts: [[1, "d-flex", "flex-column", "flex-lg-row", "h-lg-full", "bg-surface-secondary"], [1, "h-screen", "flex-grow-1", "overflow-y-lg-auto"], [1, "bg-surface-primary", "border-bottom", "pt-6"], [1, "container-fluid"], [1, "mb-npx"], [1, "row", "align-items-center"], [1, "col-sm-6", "col-12", "mb-4", "mb-sm-0"], [1, "h2", "mb-0", "ls-tight"], [1, "nav", "nav-tabs", "mt-4", "overflow-x", "border-0"], [1, "nav-item"], [3, "ngClass", "click"], ["id", "awards", 3, "hidden"], [1, "grid-container"], [1, "grid-item"], [1, "card"], [1, "card-details"], [1, "text-title", 3, "click"], [4, "ngFor", "ngForOf"], ["id", "publications", 3, "hidden"], [1, "container-pub"], [1, "search-container"], [1, "title-pub"], ["type", "text", "placeholder", "Search...", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "search-button"], [1, "publications"], [2, "color", "red", 3, "click"], [1, "line"], ["id", "research", 3, "hidden"], [1, "project-container"], [1, "project-card", 3, "click"], [1, "project-title"], [1, "project-description"], ["class", "project-card", 4, "ngFor", "ngForOf"], ["id", "students", 3, "hidden"], [1, "title"], [1, "phd-grid"], [1, "postdoc-grid"], [1, "text-title"], [1, "text-body"], [1, "card-button", 3, "click"], ["href", "#", "target", "_blank"], [3, "click"], [1, "project-card"], ["class", "project-image", "alt", "Research Project 1", 3, "src", 4, "ngIf"], [1, "project-read-more", 3, "click"], ["alt", "Research Project 1", 1, "project-image", 3, "src"], [1, "people"], ["alt", "Image 1", 1, "image", 3, "src"], [1, "people2"], ["alt", "Image 1", 1, "image2", 3, "src"], [1, "about1"], [1, "about2"], [1, "about3"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ul", 8)(10, "li", 9)(11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_11_listener() { return ctx.togglePage("awards"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "AWARDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "li", 9)(14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_14_listener() { return ctx.togglePage("publications"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "li", 9)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_17_listener() { return ctx.togglePage("research"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "li", 9)(20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_20_listener() { return ctx.togglePage("students"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "section", 11)(23, "div", 12)(24, "div", 13)(25, "div", 14)(26, "div", 15)(27, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_Template_p_click_27_listener() { return ctx.openDialog("awards"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Add New Award");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, DashboardComponent_div_29_Template, 10, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "section", 18)(31, "div", 19)(32, "div", 20)(33, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Journals Published: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_35_listener($event) { return ctx.searchJournals = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 24)(39, "table")(40, "thead")(41, "tr")(42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Paper Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Journal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "People");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "tbody")(51, "tr")(52, "td")(53, "a")(54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_54_listener() { return ctx.openDialog("journals"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, " Add new Journal");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "td")(57, "td")(58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, DashboardComponent_tr_59_Template, 12, 4, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](60, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "br")(62, "br")(63, "div", 26)(64, "br")(65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 19)(67, "div", 20)(68, "h1", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Conferences: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_70_listener($event) { return ctx.searchPublications = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 24)(74, "table")(75, "thead")(76, "tr")(77, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Conference Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Conference");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "People");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "tbody")(88, "tr")(89, "td")(90, "a")(91, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_91_listener() { return ctx.openDialog("publications"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, " Add new Publication");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](93, "td")(94, "td")(95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](96, DashboardComponent_tr_96_Template, 14, 5, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](97, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](98, "br")(99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "section", 27)(101, "div", 28)(102, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_102_listener() { return ctx.openDialog("research"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, "Add Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](106, "p", 31)(107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](108, DashboardComponent_div_108_Template, 10, 3, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "section", 33)(110, "h1", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "PhD Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](113, DashboardComponent_ng_container_113_Template, 7, 3, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "h1", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "Master Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](117, DashboardComponent_ng_container_117_Template, 7, 3, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "h1", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "Undergraduate Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](121, DashboardComponent_ng_container_121_Template, 4, 1, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "h1", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123, "Post-Doc Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](125, DashboardComponent_ng_container_125_Template, 9, 3, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](126, "br")(127, "br")(128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "h1", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130, "PhD Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](132, DashboardComponent_ng_container_132_Template, 11, 4, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](133, "br")(134, "br")(135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "h1", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "MS Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](139, DashboardComponent_ng_container_139_Template, 11, 4, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.activePage == "awards" ? "nav-link active" : "nav-link font-regular");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.activePage == "publications" ? "nav-link active" : "nav-link font-regular");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.activePage == "research" ? "nav-link active" : "nav-link font-regular");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.activePage == "students" ? "nav-link active" : "nav-link font-regular");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !(ctx.activePage == "awards"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.currentData);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !(ctx.activePage == "publications"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchJournals);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](60, 20, ctx.journalsData, ctx.searchJournals));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchPublications);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](97, 23, ctx.conferencesData, ctx.searchPublications));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !(ctx.activePage == "research"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.currentData);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !(ctx.activePage == "students"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.phds);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.masters);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.undergraduates);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.post_doc_alumni);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.phd_alumni);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ms_alumni);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf], pipes: [_search_pipe__WEBPACK_IMPORTED_MODULE_5__.SearchPipe], styles: ["@import url(https://unpkg.com/@webpixels/css@1.1.5/dist/index.css);\n@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\n\n\n.card[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 300px;\n    border-radius: 20px;\n    background: #f5f5f5;\n    position: relative;\n    padding: 1.8rem;\n    border: 2px solid #c3c6ce;\n    transition: 0.5s ease-out;\n    overflow: visible;\n   }\n.card-details[_ngcontent-%COMP%] {\n    color: black;\n    height: 100%;\n    grid-gap: .5em;\n    gap: .5em;\n    display: grid;\n    place-content: center;\n   }\n.card-button[_ngcontent-%COMP%] {\n    transform: translate(-50%, 125%);\n    width: 60%;\n    border-radius: 1rem;\n    border: none;\n    background-color: #008bf8;\n    color: #fff;\n    font-size: 1rem;\n    padding: .5rem 1rem;\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    opacity: 0;\n    transition: 0.3s ease-out;\n   }\n.text-body[_ngcontent-%COMP%] {\n    color: rgb(134, 134, 134);\n   }\n\n.text-title[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    font-weight: bold;\n   }\n\n.card[_ngcontent-%COMP%]:hover {\n    border-color: #008bf8;\n    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);\n   }\n.card[_ngcontent-%COMP%]:hover   .card-button[_ngcontent-%COMP%] {\n    transform: translate(-50%, 50%);\n    opacity: 1;\n   }\n.grid-container[_ngcontent-%COMP%] {\n    margin-top: 10%;\n    display: grid;\n    grid-template-columns: auto auto auto auto auto;\n    padding-left: 10%;\n    height: auto;\n}\n.grid-item[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    margin-top: 10%;\n    text-align: center;\n}\n#awards[_ngcontent-%COMP%]{\n    height: auto !important;\n  }\n.container[_ngcontent-%COMP%]{\n    margin: 0 auto; \n    display: grid;\n    grid-template-columns:auto auto;\n    grid-column-gap: 10%;\n    column-gap: 10%;\n    grid-row-gap: 1%;\n    row-gap: 1%;\n    top: 1.5%;\n    transform: translateY(1.5%);\n    padding-bottom: 65%;\n}\n.researchCard[_ngcontent-%COMP%]{\n    box-shadow: 0.5rem 0.5rem black, -0.5rem -0.5rem #ccc;\n    border-radius: 10%;\n    transition: 0.5s;\n}\n.researchCard[_ngcontent-%COMP%]:hover{\n    background: #eee;\n    box-shadow: 0 8px 8px -4px green;\n}\n.cardTitle[_ngcontent-%COMP%]{\n    text-align: center;\n    margin: 0 auto;\n    font-family: 'Poppins', sans-serif;\n    font-size: 50px;\n    font-weight: 900;\n    margin-top: 5%;\n    width: 90%; \n}\n.cardDescription[_ngcontent-%COMP%]{\n    font-family: 'Poppins', sans-serif;\n    color: black;\n    text-align: center;\n    margin: 0 auto;\n    width: 95%;\n}\n.container-pub[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n}\n.title-pub[_ngcontent-%COMP%]{\n  font-size: 30px;\n}\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-bottom: 3px solid #b8a07e;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.search-button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 16px;\n  background-color: #b8a07e;\n  color: #FFF;\n  border: none;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n}\n.publications[_ngcontent-%COMP%] {\n  max-height: 500px;\n  width: 100%;\n  overflow-y: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  border-bottom: 1px solid #b8a07e;\n}\na[_ngcontent-%COMP%]{\n  color: black;\n}\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n.line[_ngcontent-%COMP%]{\n  height: 2px;\n  width: 40%;\n  margin: 0 auto; \n  background-color: #b8a07e;\n}\n.phd-grid[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 50px;\n  margin: 0 auto; \n  text-align: center;\n}\n.image[_ngcontent-%COMP%]{\n  width: 300px;\n  border-radius: 50%;\n  border: 10px dotted #b8a07e;\n}\n.people[_ngcontent-%COMP%]{\n  text-align: center;\n  font-family: 'Poppins', sans-serif;\n  margin-bottom: 15%;\n}\n.postdoc-grid[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 50px;\n  margin: 0 auto; \n}\n.people2[_ngcontent-%COMP%]{\n  font-family: 'Poppins', sans-serif;\n  border-radius: 20%;\n}\n.image2[_ngcontent-%COMP%]{\n  width: 300px;\n  border-radius: 50%;\n  border: 10px dotted #b8a07e;\n  margin-left: 20%;\n}\n.about1[_ngcontent-%COMP%]{\n  font-family: 'Poppins', sans-serif;\n  border: 10px solid #b8a07e;\n  border-radius: 20%;\n  margin-right: 5%;\n}\n.about2[_ngcontent-%COMP%]{\n  margin: o auto;\n  text-align: center;\n  position: relative;\n  top: 20%;\n  right: 90%;\n  transform: translate(90%, 20%);\n}\n.about3[_ngcontent-%COMP%]{\n  margin: o auto;\n  text-align: center;\n  position: relative;\n  top: 10%;\n  right: 90%;\n  transform: translate(90%, 10%);\n}\n.project-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 50px;\n  padding-bottom: 5%;\n}\n.project-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  padding: 20px;\n  border-radius: 10px;\n  transition: border-color 0.3s ease-in-out;\n  border: 1px solid #b8a07e;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  border: 3px solid #b8a07e;\n}\n.project-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #b8a07e;\n  transition: border-color 0.3s ease-in-out;\n}\n.project-image[_ngcontent-%COMP%]:hover {\n  border: 2px solid #b8a07e;\n}\n.project-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n.project-description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.5;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 5; \n}\n.project-more-text[_ngcontent-%COMP%] {\n  display: none; \n}\n.project-read-more[_ngcontent-%COMP%]{\n  background-color: #b8a07e;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease-in-out;\n}\n.project-read-more[_ngcontent-%COMP%]:hover{\n  background-color: #8c765c;\n}\n/*# sourceMappingURL=data:application/json;base64,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ZixlQUFlO0VBQ2YsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBXZWJwaXhlbHMgQ1NTICovXG4vKiBVdGlsaXR5IGFuZCBjb21wb25lbnQtY2VudHJpYyBEZXNpZ24gU3lzdGVtIGJhc2VkIG9uIEJvb3RzdHJhcCBmb3IgZmFzdCwgcmVzcG9uc2l2ZSBVSSBkZXZlbG9wbWVudCAqL1xuLyogVVJMOiBodHRwczovL2dpdGh1Yi5jb20vd2VicGl4ZWxzL2NzcyAqL1xuXG5AaW1wb3J0IHVybChodHRwczovL3VucGtnLmNvbS9Ad2VicGl4ZWxzL2Nzc0AxLjEuNS9kaXN0L2luZGV4LmNzcyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xuICBcblxuLmNhcmQge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMS44cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjM2M2Y2U7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgIH1cbiAgIFxuICAgLmNhcmQtZGV0YWlscyB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBnYXA6IC41ZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICB9XG4gICBcbiAgIC5jYXJkLWJ1dHRvbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTI1JSk7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YmY4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbiAgIH1cbiAgIFxuICAgLnRleHQtYm9keSB7XG4gICAgY29sb3I6IHJnYigxMzQsIDEzNCwgMTM0KTtcbiAgIH1cbiAgIFxuICAgLypUZXh0Ki9cbiAgIC50ZXh0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgIH1cbiAgIFxuICAgLypIb3ZlciovXG4gICAuY2FyZDpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA4YmY4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgfVxuICAgXG4gICAuY2FyZDpob3ZlciAuY2FyZC1idXR0b24ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgIH1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ncmlkLWl0ZW0ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiAgI2F3YXJkc3tcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG5cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luOiAwIGF1dG87IFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gYXV0bztcbiAgICBjb2x1bW4tZ2FwOiAxMCU7XG4gICAgcm93LWdhcDogMSU7XG4gICAgdG9wOiAxLjUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxLjUlKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjUlO1xufVxuXG4ucmVzZWFyY2hDYXJke1xuICAgIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gYmxhY2ssIC0wLjVyZW0gLTAuNXJlbSAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ucmVzZWFyY2hDYXJkOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgYm94LXNoYWRvdzogMCA4cHggOHB4IC00cHggZ3JlZW47XG59XG5cbi5jYXJkVGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgd2lkdGg6IDkwJTsgXG59XG4uY2FyZERlc2NyaXB0aW9ue1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogOTUlO1xufVxuLmNvbnRhaW5lci1wdWIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4udGl0bGUtcHVie1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2VhcmNoLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2I4YTA3ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5zZWFyY2gtYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGEwN2U7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucHVibGljYXRpb25zIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbnRoLCB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiOGEwN2U7XG59XG5he1xuICBjb2xvcjogYmxhY2s7XG59XG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG4ubGluZXtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogMCBhdXRvOyBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YTA3ZTtcbn1cblxuXG4ucGhkLWdyaWR7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdyaWQtZ2FwOiA1MHB4O1xuICBtYXJnaW46IDAgYXV0bzsgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltYWdle1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxMHB4IGRvdHRlZCAjYjhhMDdlO1xufVxuLnBlb3BsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAxNSU7XG59XG5cbi5wb3N0ZG9jLWdyaWR7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtZ2FwOiA1MHB4O1xuICBtYXJnaW46IDAgYXV0bzsgXG59XG5cbi5wZW9wbGUye1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBib3JkZXItcmFkaXVzOiAyMCU7XG59XG5cbi5pbWFnZTJ7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDEwcHggZG90dGVkICNiOGEwN2U7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG4uYWJvdXQxe1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6IDEwcHggc29saWQgI2I4YTA3ZTtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuLmFib3V0MntcbiAgbWFyZ2luOiBvIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwJTtcbiAgcmlnaHQ6IDkwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTAlLCAyMCUpO1xufVxuLmFib3V0M3tcbiAgbWFyZ2luOiBvIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwJTtcbiAgcmlnaHQ6IDkwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTAlLCAxMCUpO1xufVxuXG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtZ2FwOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4YTA3ZTtcbn1cblxuLnByb2plY3QtY2FyZDpob3ZlciB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNiOGEwN2U7XG59XG5cbi5wcm9qZWN0LWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4YTA3ZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ucHJvamVjdC1pbWFnZTpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNiOGEwN2U7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7IC8qIFNob3cgb25seSAyIGxpbmVzIG9mIHRleHQgKi9cbn1cbi5wcm9qZWN0LW1vcmUtdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgdGhlIGFkZGl0aW9uYWwgdGV4dCBpbml0aWFsbHkgKi9cbn1cbi5wcm9qZWN0LXJlYWQtbW9yZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YTA3ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnByb2plY3QtcmVhZC1tb3JlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM3NjVjO1xufSJdfQ== */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search.pipe */ 9175);









function HomeComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header")(1, "nav", 83)(2, "div", 41)(3, "div", 84)(4, "div", 85)(5, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 88)(8, "li")(9, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li")(15, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Awards");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li")(18, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Publications");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li")(21, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Research");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li")(24, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Students");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li")(27, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Consulting/CV");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
} }
function HomeComponent_ng_container_60_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const peoples_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Job: ", peoples_r3.job, " ");
} }
function HomeComponent_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 96)(2, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 99)(5, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HomeComponent_ng_container_60_span_8_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", peoples_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Name: ", peoples_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", peoples_r3.job);
} }
function HomeComponent_tr_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const funds_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", funds_r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", funds_r6.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](funds_r6.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](funds_r6.timespan);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](funds_r6.purpose);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](funds_r6.role);
} }
class HomeComponent {
    constructor(router, databaseService, afStorage) {
        this.router = router;
        this.databaseService = databaseService;
        this.afStorage = afStorage;
        this.hidden = false;
        this.post_doc_alumni = [];
        this.phd_alumni = [];
        this.alumni = [];
        this.alumni_images = [];
    }
    getScrollHeight(event) {
        if (window.pageYOffset <= 100)
            this.hidden = false;
        else
            this.hidden = true;
    }
    ngOnInit() {
        this.mapMarker = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMapMarker;
        this.building = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faCity;
        this.email = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMailBulk;
        this.mobile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMobile;
        this.birthday = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faBirthdayCake;
        this.badge = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faGraduationCap;
        this.home = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faLaptopHouse;
        this.post_doc_alumni = [];
        this.phd_alumni = [];
        this.alumni = [];
        this.getData();
    }
    expand() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("expandButton");
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
            btnText.style.fontSize = "15px";
            btnText.style.display = "inline";
        }
        else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
            btnText.style.display = "none";
        }
    }
    routeLogin() {
        this.router.navigate(['/login']);
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.databaseService.getData('funding/funds').then((data) => {
                this.fundsData = data;
                //this.awardsData = this.awardsData.flat();
                console.log(this.fundsData);
            });
            yield this.databaseService.getData('funding').then((data) => {
                this.totalFunds = data.total;
                ;
                //this.awardsData = this.awardsData.flat();
                console.log(this.totalFunds);
            });
            yield this.databaseService.getData('people').then((data) => {
                const result = Object.keys(data).map((key) => {
                    return { [key]: data[key] };
                });
                result.forEach(mobile => {
                    for (let key in mobile) {
                        for (let i = 0; i < Object.keys(mobile[key]).length; i++) {
                            if (`${key}` == "phd_alumni") {
                                this.phd_alumni.push(mobile[key][i]);
                            }
                            if (`${key}` == "post_doc_alumni") {
                                this.post_doc_alumni.push(mobile[key][i]);
                            }
                        }
                    }
                });
            });
            this.putImagesList();
        });
    }
    putImagesList() {
        for (let i = 0; i < this.phd_alumni.length; i++) {
            if (this.phd_alumni[i].img_name != "" || this.phd_alumni[i].img_name != null) {
                this.storageRef = this.afStorage.ref("students/" + this.phd_alumni[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.alumni.push({ url: url, name: this.phd_alumni[i].name, job: this.phd_alumni[i].job });
                });
            }
        }
        for (let i = 0; i < this.post_doc_alumni.length; i++) {
            if (this.post_doc_alumni[i].img_name != "" || this.post_doc_alumni[i].img_name != null) {
                this.storageRef = this.afStorage.ref("students/" + this.post_doc_alumni[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.alumni.push({ url: url, name: this.post_doc_alumni[i].name, job: this.post_doc_alumni[i].job });
                });
            }
        }
        for (let i = 0; i < this.fundsData.length; i++) {
            if (this.fundsData[i].img_name != "" || this.fundsData[i].img_name != null) {
                this.storageRef = this.afStorage.ref("funding/" + this.fundsData[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.fundsData[i].url = url;
                });
            }
        }
        console.log(this.fundsData);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__.AngularFireStorage)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.getScrollHeight($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 191, vars: 8, consts: [[4, "ngIf"], ["id", "home"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"], ["id", "header", 1, "home"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", 1, "eceLogo"], [1, "container"], ["viewBox", "0 0 978 71", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "id", "logo"], ["d", "M57.3 3.82V67H41.91V40.99H17.97V67H2.58V3.82H17.97V28.57H41.91V3.82H57.3Z", "stroke", "white", "stroke-width", "5"], ["d", "M98.2901 67.63C92.3501 67.63 86.8901 66.25 81.9101 63.49C76.9901 60.73 73.0601 56.89 70.1201 51.97C67.2401 46.99 65.8001 41.41 65.8001 35.23C65.8001 29.05 67.2401 23.5 70.1201 18.58C73.0601 13.66 76.9901 9.82 81.9101 7.06C86.8901 4.3 92.3501 2.92 98.2901 2.92C104.23 2.92 109.66 4.3 114.58 7.06C119.56 9.82 123.46 13.66 126.28 18.58C129.16 23.5 130.6 29.05 130.6 35.23C130.6 41.41 129.16 46.99 126.28 51.97C123.4 56.89 119.5 60.73 114.58 63.49C109.66 66.25 104.23 67.63 98.2901 67.63ZM98.2901 53.59C103.33 53.59 107.35 51.91 110.35 48.55C113.41 45.19 114.94 40.75 114.94 35.23C114.94 29.65 113.41 25.21 110.35 21.91C107.35 18.55 103.33 16.87 98.2901 16.87C93.1901 16.87 89.1101 18.52 86.0501 21.82C83.0501 25.12 81.5501 29.59 81.5501 35.23C81.5501 40.81 83.0501 45.28 86.0501 48.64C89.1101 51.94 93.1901 53.59 98.2901 53.59Z", "stroke", "white", "stroke-width", "5"], ["d", "M154.282 3.82V41.62C154.282 45.4 155.212 48.31 157.072 50.35C158.932 52.39 161.662 53.41 165.262 53.41C168.862 53.41 171.622 52.39 173.542 50.35C175.462 48.31 176.422 45.4 176.422 41.62V3.82H191.812V41.53C191.812 47.17 190.612 51.94 188.212 55.84C185.812 59.74 182.572 62.68 178.492 64.66C174.472 66.64 169.972 67.63 164.992 67.63C160.012 67.63 155.542 66.67 151.582 64.75C147.682 62.77 144.592 59.83 142.312 55.93C140.032 51.97 138.892 47.17 138.892 41.53V3.82H154.282Z", "stroke", "white", "stroke-width", "5"], ["d", "M274.169 3.82V67H258.779V29.11L244.649 67H232.229L218.009 29.02V67H202.619V3.82H220.799L238.529 47.56L256.079 3.82H274.169Z", "stroke", "white", "stroke-width", "5"], ["d", "M324.566 55.84H300.986L297.206 67H281.096L303.956 3.82H321.776L344.636 67H328.346L324.566 55.84ZM320.606 43.96L312.776 20.83L305.036 43.96H320.606Z", "stroke", "white", "stroke-width", "5"], ["d", "M408.114 67H392.724L366.984 28.03V67H351.594V3.82H366.984L392.724 42.97V3.82H408.114V67Z", "stroke", "white", "stroke-width", "5"], ["d", "M493.062 3.82V67H477.672V40.99H453.732V67H438.342V3.82H453.732V28.57H477.672V3.82H493.062Z", "stroke", "white", "stroke-width", "5"], ["d", "M534.052 67.63C528.112 67.63 522.652 66.25 517.672 63.49C512.752 60.73 508.822 56.89 505.882 51.97C503.002 46.99 501.562 41.41 501.562 35.23C501.562 29.05 503.002 23.5 505.882 18.58C508.822 13.66 512.752 9.82 517.672 7.06C522.652 4.3 528.112 2.92 534.052 2.92C539.992 2.92 545.422 4.3 550.342 7.06C555.322 9.82 559.222 13.66 562.042 18.58C564.922 23.5 566.362 29.05 566.362 35.23C566.362 41.41 564.922 46.99 562.042 51.97C559.162 56.89 555.262 60.73 550.342 63.49C545.422 66.25 539.992 67.63 534.052 67.63ZM534.052 53.59C539.092 53.59 543.112 51.91 546.112 48.55C549.172 45.19 550.702 40.75 550.702 35.23C550.702 29.65 549.172 25.21 546.112 21.91C543.112 18.55 539.092 16.87 534.052 16.87C528.952 16.87 524.872 18.52 521.812 21.82C518.812 25.12 517.312 29.59 517.312 35.23C517.312 40.81 518.812 45.28 521.812 48.64C524.872 51.94 528.952 53.59 534.052 53.59Z", "stroke", "white", "stroke-width", "5"], ["d", "M646.474 3.82V67H631.084V29.11L616.954 67H604.534L590.314 29.02V67H574.924V3.82H593.104L610.834 47.56L628.384 3.82H646.474Z", "stroke", "white", "stroke-width", "5"], ["d", "M696.871 55.84H673.291L669.511 67H653.401L676.261 3.82H694.081L716.941 67H700.651L696.871 55.84ZM692.911 43.96L685.081 20.83L677.341 43.96H692.911Z", "stroke", "white", "stroke-width", "5"], ["d", "M778.078 3.82L756.208 46.12V67H740.818V46.12L718.948 3.82H736.408L748.648 30.28L760.798 3.82H778.078Z", "stroke", "white", "stroke-width", "5"], ["d", "M814.159 67.63C808.219 67.63 802.759 66.25 797.779 63.49C792.859 60.73 788.929 56.89 785.989 51.97C783.109 46.99 781.669 41.41 781.669 35.23C781.669 29.05 783.109 23.5 785.989 18.58C788.929 13.66 792.859 9.82 797.779 7.06C802.759 4.3 808.219 2.92 814.159 2.92C820.099 2.92 825.529 4.3 830.449 7.06C835.429 9.82 839.329 13.66 842.149 18.58C845.029 23.5 846.469 29.05 846.469 35.23C846.469 41.41 845.029 46.99 842.149 51.97C839.269 56.89 835.369 60.73 830.449 63.49C825.529 66.25 820.099 67.63 814.159 67.63ZM814.159 53.59C819.199 53.59 823.219 51.91 826.219 48.55C829.279 45.19 830.809 40.75 830.809 35.23C830.809 29.65 829.279 25.21 826.219 21.91C823.219 18.55 819.199 16.87 814.159 16.87C809.059 16.87 804.979 18.52 801.919 21.82C798.919 25.12 797.419 29.59 797.419 35.23C797.419 40.81 798.919 45.28 801.919 48.64C804.979 51.94 809.059 53.59 814.159 53.59Z", "stroke", "white", "stroke-width", "5"], ["d", "M870.151 3.82V41.62C870.151 45.4 871.081 48.31 872.941 50.35C874.801 52.39 877.531 53.41 881.131 53.41C884.731 53.41 887.491 52.39 889.411 50.35C891.331 48.31 892.291 45.4 892.291 41.62V3.82H907.681V41.53C907.681 47.17 906.481 51.94 904.081 55.84C901.681 59.74 898.441 62.68 894.361 64.66C890.341 66.64 885.841 67.63 880.861 67.63C875.881 67.63 871.411 66.67 867.451 64.75C863.551 62.77 860.461 59.83 858.181 55.93C855.901 51.97 854.761 47.17 854.761 41.53V3.82H870.151Z", "stroke", "white", "stroke-width", "5"], ["d", "M975.008 67H959.618L933.878 28.03V67H918.488V3.82H933.878L959.618 42.97V3.82H975.008V67Z", "stroke", "white", "stroke-width", "5"], [1, "department"], ["href", "#about"], [1, "glyphicon", "glyphicon-triangle-bottom"], ["id", "about"], ["data-aos", "fade-up"], ["id", "about", 1, "paddsection"], [1, "row", "justify-content-between"], [1, "col-lg-4"], [1, "div-img-bg"], [1, "about-img"], ["src", "../../assets/images/profile.png", "alt", "me", 1, "img-responsive"], ["src", "../../assets/contact.png", 2, "height", "100px"], [1, "col-lg-7"], [1, "about-descr"], [1, "p-heading"], [1, "heading"], [1, "separator"], ["id", "expandButton", 3, "click"], ["id", "dots", 2, "color", "#b8a07e"], ["id", "more"], [1, "row"], [4, "ngFor", "ngForOf"], ["id", "funding"], [1, "search-container"], [1, "title", 2, "font-weight", "bold"], ["type", "text", "placeholder", "Search...", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "search-button"], [1, "publications"], [1, "line2"], ["id", "researchCarousel"], ["id", "carouselExampleIndicators", "data-ride", "carousel", "data-interval", "2000", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "d-block", "w-100"], ["src", "https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/256/external-machine-learning-smart-devices-smashingstocks-mixed-smashing-stocks.png", 1, "AM"], [1, "carousel-item"], ["src", "https://img.icons8.com/dotty/480/null/cyber-security.png", 1, "AM"], ["src", "https://img.icons8.com/ios-filled/200/machine-learning.png", 1, "AM"], ["src", "https://img.icons8.com/glyph-neue/200/null/security-shield-green.png", 1, "AM"], ["src", "https://img.icons8.com/ios-filled/200/null/big-data.png", 1, "AM"], ["src", "https://img.icons8.com/external-flatart-icons-outline-flatarticons/200/null/external-algorithm-data-science-and-cyber-security-flatart-icons-outline-flatarticons.png", 1, "AM"], ["src", "https://img.icons8.com/external-flaticons-lineal-flat-icons/200/null/external-processors-computer-programming-flaticons-lineal-flat-icons-2.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/wearable-technology.png", 1, "AM"], ["src", "https://img.icons8.com/windows/200/null/product-architecture.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/chip-card-blocked.png", 1, "AM"], ["src", "https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/200/null/external-3d-design-ui-ux-user-interface-smashingstocks-detailed-outline-smashing-stocks.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/android-l-battery--v1.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/memory-slot.png", 1, "AM"], ["src", "https://img.icons8.com/external-outline-black-m-oki-orlando/200/null/external-memory-allocation-programming-outline-outline-black-m-oki-orlando.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/dashboard.png", 1, "AM"], ["src", "https://img.icons8.com/material-outlined/200/null/energy-efficiency-g.png", 1, "AM"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [2, "text-align", "center", "font-size", "10px"], [3, "click"], [1, "main-nav", "navbar-expand-lg"], [2, "padding-right", "20%"], [1, "logo"], ["href", "index.html"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", "alt", "logo"], [1, "nav-menu", "list-unstyled"], ["href", "#home", 1, "smooth-scroll"], ["href", "#about", 1, "smooth-scroll"], ["href", "/awards", 1, "smooth-scroll"], ["href", "/publications", 1, "smooth-scroll"], ["href", "/research", 1, "smooth-scroll"], ["href", "/students", 1, "smooth-scroll"], ["href", "/cv", 1, "smooth-scroll"], [1, "col-lg-1", "col-md-2", "col-sm-2", "col-3", "padding-grid"], [1, "popover__wrapper"], ["alt", "Avatar", 1, "avatar", 3, "src"], [1, "popover__content"], [1, "popover__message", 2, "color", "black"], [1, "fa", "fa-linkedin-square", 2, "font-size", "55px", "margin-left", "40%", "color", "#b8a07e"], [2, "width", "50px", "height", "50px", 3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HomeComponent_header_0_Template, 29, 0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10)(11, "path", 11)(12, "path", 12)(13, "path", 13)(14, "path", 14)(15, "path", 15)(16, "path", 16)(17, "path", 17)(18, "path", 18)(19, "path", 19)(20, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "UC Davis Department of Electrical and Computer Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "section", 24)(26, "div", 25)(27, "div", 26)(28, "div", 5)(29, "div", 27)(30, "div", 28)(31, "div", 29)(32, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 33)(36, "div", 34)(37, "p", 35)(38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Houman Homayoun");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " is a Professor in the Department of Electrical and Computer Engineering at the University of California, Davis. He leads the National Science Foundation Center for Hardware and Embedded Systems Security and Trust. Under his direction, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "CHEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " tackles some of the most pressing security challenges facing the world today, helping to ensure the safety and reliability of hardware and embedded systems.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Prior to his current position, Houman Homayoun held an Associate Professorship in the Department of Electrical and Computer Engineering at George Mason University. He was also a recipient of the Computing Innovation (CI) Fellowship from the CRA-CCC, during which he spent two years at the University of California, San Diego. Dr. Homayoun completed his Ph.D. in Computer Science at the University of California, Irvine, where he was awarded the prestigious four-year Computer Science Department Chair Fellowship. His educational background also includes an MS in computer engineering from the University of Victoria and a BS in electrical engineering from the Sharif University of Technology. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_48_listener() { return ctx.expand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Continue Reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Houman Homayoun is an accomplished computer engineer and currently holds the position of Professor in the Department of Electrical and Computer Engineering at the University of California, Davis. He also serves as the director of the National Science Foundation Center for Hardware and Embedded Systems Security and Trust (CHEST). Prior to his appointment at UC Davis, Houman was an Associate Professor at George Mason University (GMU). He was also recognized as an NSF Computing Innovation (CI) Fellow awarded by the CRA-CCC and spent two years at the University of California, San Diego from 2010 to 2012. Houman holds a Ph.D. in Computer Science from the University of California, Irvine, which he earned in 2010. During his time at UCI, he received a four-year fellowship from the Computer Science Department. He also received an MS degree in computer engineering from the University of Victoria in 2005 and a BS degree in electrical engineering from the Sharif University of Technology in 2003. Houman's research focuses on hardware security and trust, applied machine learning and AI, data-intensive computing, and heterogeneous computing. He has published more than 200 technical papers in prestigious conferences and journals on these subjects and has directed over $10M in research funding from NSF, DARPA, AFRL, NIST, US Congress, and various industrial sponsors. His work has received numerous best paper awards and nominations, including GLSVLSI 2016, ICCAD 2019, ICDM 2019, DCAS 2020, ISVLSI 2020, ICCAD 2020, and DATE 2022. Houman's CHEST center has received congressional support for research in hardware security, which was included in the 2021 National Defense Authorization Act. He has also served as a Member of the Advisory Committee, Cybersecurity Research and Technology Commercialization working group in the Commonwealth of Virginia, and as a core group member of the hardware security body of knowledge development team supported by the Department of Defense. In addition, he was recognized as the recipient of the 2010 National Science Foundation computing innovation fellow award by CCC/CRA and has been serving as an Associate Editor of IEEE Transactions on VLSI since 2017. Houman has also chaired and co-chaired major conferences in ACM, including the Great Lake Symposium on VLSI. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_54_listener() { return ctx.expand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Read Less...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 5)(59, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, HomeComponent_ng_container_60_Template, 11, 3, "ng-container", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "section", 43)(62, "div", 5)(63, "div", 44)(64, "h1", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_66_listener($event) { return ctx.searchFunds = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 48)(70, "table")(71, "thead")(72, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Funding");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Grant");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, HomeComponent_tr_85_Template, 13, 6, "tr", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](86, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "br")(88, "br")(89, "div", 49)(90, "br")(91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "section", 50)(93, "div", 51)(94, "ol", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "li", 53)(96, "li", 54)(97, "li", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 56)(99, "div", 57)(100, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Applied Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 60)(105, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Hardware Security and Trust");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 60)(110, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Adversarial Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 60)(115, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Cybersecurity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 60)(120, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Big Data Computing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 60)(125, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Algorithms for Energy-Efficient Acceleration of Big Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 60)(130, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Heterogeneous Computing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 60)(135, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Accelerating Wearable Biomedical Computing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 60)(140, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](141, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Heterogeneous Architecture Mapping and Scheduling");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 60)(145, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Emerging STT Logic for Enhancing Hardware Security and Trust");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 60)(150, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "3D Integration and Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 60)(155, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Low Power and Thermal Aware Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 60)(160, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "DRAM Memory Management for Emerging Big Data Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 60)(165, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "Emerging Memory Technologies (non-volatile STTRAM, PCM, and volatile HMC");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "div", 60)(170, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](171, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Performance Characterization of Emerging Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 60)(175, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](176, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Energy Efficiency and Power Management in Enterprise Datacenter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](184, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "footer")(188, "p", 81)(189, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_189_listener() { return ctx.routeLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "Are you an admin? Log In Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.alumni);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Sponsored Research Total $", ctx.totalFunds, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchFunds);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](86, 5, ctx.fundsData, ctx.searchFunds));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel], pipes: [_search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\n*[_ngcontent-%COMP%]{\n  padding: 0; \n  margin: 0; \n  box-sizing: border-box;\n}\n\n#header[_ngcontent-%COMP%] {\n    background: linear-gradient(rgba(0, 0, 0, 0.2),\n    rgba(0, 0, 0, 0.2)), url('home.jpeg') repeat scroll center center / cover;\n    height: 100vh;\n    width: 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n\n.header-content[_ngcontent-%COMP%] {\n    height: 100vh;\n    text-align: left;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n  }\n\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n    font-weight: 780;\n    margin-bottom: 10px;\n    text-transform: uppercase;\n    color: #fff;\n  }\n\n.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n    letter-spacing: 5px;\n    margin-top: 0;\n    margin-bottom: 30px;\n    text-transform: capitalize;\n    color: #fff;\n    font-weight: 500;\n  }\n\n.header-content[_ngcontent-%COMP%]   .list-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left;\n    margin-right: 20px;\n  }\n\n.header-content[_ngcontent-%COMP%]   .list-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 15px;\n  }\n\n#logo[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 50%; \n  left: 50%;\n  transform: translate(-50%, -50%); \n  animation: fill 0.5s ease forwards 3s; \n  width: 978px; \n  height: 71px;  \n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(1){\n  stroke-dasharray: 337.32000732421875px;\n  stroke-dashoffset: 337.32000732421875px;\n  animation: line-anim 2s ease forwards; \n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2){\n  stroke-dasharray: 316.58935546875px;\n  stroke-dashoffset: 316.58935546875px;\n  animation: line-anim 2s ease forwards 0.1s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3){\n  stroke-dasharray: 302.68817138671875px;\n  stroke-dashoffset: 302.68817138671875px;\n  animation: line-anim 2s ease forwards 0.2s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4){\n  stroke-dasharray: 457.0200500488281px;\n  stroke-dashoffset: 457.0200500488281px;\n  animation: line-anim 2s ease forwards 0.3s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5){\n  stroke-dasharray: 296.12249755859375px;\n  stroke-dashoffset: 296.12249755859375px;\n  animation: line-anim 2s ease forwards 0.4s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6){\n  stroke-dasharray: 359.59716796875px;\n  stroke-dashoffset: 359.59716796875px;\n  animation: line-anim 2s ease forwards 0.5s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(7){\n  stroke-dasharray: 337.32000732421875px;\n  stroke-dashoffset: 337.32000732421875px;\n  animation: line-anim 2s ease forwards 0.6s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(8){\n  stroke-dasharray: 316.59033203125px;\n  stroke-dashoffset: 316.59033203125px;\n  animation: line-anim 2s ease forwards 0.7s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(9){\n  stroke-dasharray: 457.02008056640625px;\n  stroke-dashoffset: 457.02008056640625px;\n  animation: line-anim 2s ease forwards 0.8s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(10){\n  stroke-dasharray: 296.12249755859375px;\n  stroke-dashoffset: 296.12249755859375px;\n  animation: line-anim 2s ease forwards 0.9s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(11){\n  stroke-dasharray: 245.39852905273438px;\n  stroke-dashoffset: 245.39852905273438px;\n  animation: line-anim 2s ease forwards 1s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(12){\n  stroke-dasharray: 316.5907897949219px;\n  stroke-dashoffset: 316.5907897949219px;\n  animation: line-anim 2s ease forwards 1.1s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(13){\n  stroke-dasharray: 302.6885070800781px;\n  stroke-dashoffset: 302.6885070800781px;\n  animation: line-anim 2s ease forwards 1.2s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(14){\n  stroke-dasharray:  359.59716796875px;\n  stroke-dashoffset:  359.59716796875px;\n  animation: line-anim 2s ease forwards 1.3s;\n}\n\n@keyframes line-anim {\n    to{\n      stroke-dashoffset: 25;\n    }\n  \n}\n\n@keyframes fill {\n  from{\n    fill: transparent;\n  }\n  to{\n    fill:white; \n  }\n}\n\n.department[_ngcontent-%COMP%]{\n  color: white;\n  font-family: 'Poppins', sans-serif;\n  font-size: 20Px;\n  font-weight: 800;\n  position: absolute;\n  left: 50%;\n  top: 60%; \n  transform: translate(-50%, -60%);\n  animation: fadeIn 4.5s;\n  text-align: center;\n}\n\n.eceLogo[_ngcontent-%COMP%]{\n  padding: 25px;\n  height: 12%;\n  animation: fadeIn 4.5s;\n}\n\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n.glyphicon-triangle-bottom[_ngcontent-%COMP%]{\n  color: white;\n  font-size: 50px;\n  position: absolute;\n  left: 50%;\n  top: 95%; \n  transform: translate(-50%, -95%);\n  animation: fadeIn 4.5s;\n}\n\n#about[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background: #f7f7f7;\n  padding-top: 70px;\n  padding-bottom: 70px;\n  \n}\n\n#about[_ngcontent-%COMP%]   .div-img-bg[_ngcontent-%COMP%] {\n  padding-bottom: 30px;\n  border: 20px solid #b8a07e;\n  border-radius: 50px;\n}\n\n#about[_ngcontent-%COMP%]   .div-img-bg[_ngcontent-%COMP%]   .about-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 25 25 85px 25 rgba(0, 0, 0, 0.14);\n  margin-top: -60px;\n  margin-left: 40px;\n  height: 400px;\n  object-fit: cover;\n  border-radius: 50px;\n}\n\n#about[_ngcontent-%COMP%]   .about-descr[_ngcontent-%COMP%]   .p-heading[_ngcontent-%COMP%] {\n  font-family: 'Poppins', sans-serif;\n  font-size: 20px;\n  text-align: left;\n  color: black;\n  text-align: center;\n}\n\n#about[_ngcontent-%COMP%]   .about-descr[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  text-align: left;\n  font-family: 'Poppins', sans-serif;\n  color: black;\n  font-size: 15px;\n}\n\n.heading[_ngcontent-%COMP%]{\n  font-size: 30px;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 900;\n}\n\n#expandButton[_ngcontent-%COMP%]{\n  background: none!important;\n  border: none;\n  padding: 0!important;\n  color: #b8a07e; \n}\n\n#expandButton[_ngcontent-%COMP%]:hover{\n  color: #b8a07eab;\n}\n\n#more[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#funding[_ngcontent-%COMP%]{\n  height: auto;\n}\n\n.title[_ngcontent-%COMP%]{\n  font-size: 30px;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-bottom: 3px solid #b8a07e;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.search-button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 16px;\n  background-color: #b8a07e;\n  color: #FFF;\n  border: none;\n  cursor: pointer;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.publications[_ngcontent-%COMP%] {\n  max-height: 500px;\n  width: 100%;\n  overflow-y: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  border-bottom: 1px solid #b8a07e;\n}\n\na[_ngcontent-%COMP%]{\n  color: black;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\n.line[_ngcontent-%COMP%]{\n  height: 2px;\n  width: 40%;\n  margin: 0 auto; \n  background-color: #b8a07e;\n}\n\n#researchCarousel[_ngcontent-%COMP%]{\n    height: 60vh !important;\n\n}\n\n.w-100[_ngcontent-%COMP%]{\n    height: 50vh;\n    color: #b8a07e;\n    font-family: 'Poppins', sans-serif;\n    text-align: center;\n    overflow: hidden;\n}\n\n.AM[_ngcontent-%COMP%]{\n    height: 50%;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    filter: invert(66%) sepia(21%) saturate(447%) hue-rotate(356deg) brightness(94%) contrast(89%);\n}\n\n.carousel-indicators[_ngcontent-%COMP%]{\n    filter: invert(66%) sepia(21%) saturate(447%) hue-rotate(356deg) brightness(94%) contrast(89%);\n    z-index: 0;\n}\n\n.carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%]{\n    filter: invert(66%) sepia(21%) saturate(447%) hue-rotate(356deg) brightness(94%) contrast(89%);\n\n}\n\nnav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 1000;\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: 'Poppins', sans-serif;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 15px;\n  color: #999999;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  line-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  padding: 8px;\n  transition: all 0.2s ease-in-out;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n.logo[_ngcontent-%COMP%] {\n  float: left;\n  padding-left: 20%;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 30%;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\n  height: 50%;\n}\n\n.responsive[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 23px;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #afafaf;\n}\n\n.main-nav[_ngcontent-%COMP%] {\n  display: block !important;\n  position: relative;\n}\n\n.navbar-expand-lg[_ngcontent-%COMP%]{\n  animation: fadeIn 0.75s;\n}\n\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; } \n}\n\nbody[_ngcontent-%COMP%]{\n  background-color: #25274d;\n}\n\n#contact[_ngcontent-%COMP%]{\n  padding: 4%;\n  height: auto;\n  font-family: 'Poppins', sans-serif;\n}\n\n.title[_ngcontent-%COMP%]{\n  padding-bottom: 1%;\n}\n\n.col-md-3[_ngcontent-%COMP%]{\n  background: #b8a07e;\n  padding: 4%;\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n  margin-bottom: 10%;\n}\n\n.col-md-9[_ngcontent-%COMP%]{\n  background: #fff;\n  padding: 3%;\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n  font-weight:600;\n}\n\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n  background:#b8a07ee0;\n  color: #fff;\n  font-weight: 600;\n  width: 25%;\n  margin-top: 10px;\n}\n\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\n  box-shadow:none;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{\n  color: white;\n}\n\n.form-group[_ngcontent-%COMP%]{\n  padding: 2%;\n  \n}\n\n.line[_ngcontent-%COMP%]{\n  margin-top: 10px; \n  height: 3px;\n  width: 55%;\n  background-color: white;\n  float: left;\n  border-radius: 20%;\n}\n\n.line2[_ngcontent-%COMP%]{\n  height: 2px;\n  width: 40%;\n  margin: 0 auto; \n  background-color: #b8a07e;\n}\n\n@media only screen \nand  (min-width: 320px) and (max-width: 420px){\n  .logo[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  \n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 25%;\n    text-align: center;\n    margin: 0 auto;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 15px;\n  }  \n    .carousel-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n      font-size: 20px;\n    }\n    .AM[_ngcontent-%COMP%]{\n      height: 25%;\n    }\n    #logo[_ngcontent-%COMP%]{\n      width: 80%;\n    }\n    .department[_ngcontent-%COMP%]{\n      font-size: 15px;\n    }\n    #about[_ngcontent-%COMP%]   .div-img-bg[_ngcontent-%COMP%] {\n      margin-bottom: 30px;\n    }\n    .p-heading[_ngcontent-%COMP%]{\n      margin-bottom: 30px;\n    }\n    \n  }\n\n@media only screen \nand  (min-width: 421px) and (max-width: 520px){\n  .logo[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 120%;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 25%;\n    text-align: center;\n    margin: 0 auto;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 15px;\n  }\n    .carousel-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n      font-size: 20px;\n    }\n    .AM[_ngcontent-%COMP%]{\n      height: 25%;\n    }\n    #logo[_ngcontent-%COMP%]{\n      width: 80%;\n    }\n    .department[_ngcontent-%COMP%]{\n      font-size: 15px;\n    }\n    #about[_ngcontent-%COMP%]   .div-img-bg[_ngcontent-%COMP%] {\n      margin-bottom: 30px;\n    }\n    .p-heading[_ngcontent-%COMP%]{\n      margin-bottom: 30px;\n    }\n    \n  }\n\n@media only screen \n  and  (min-width: 521px) and (max-width: 620px){\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 120%; \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 20%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 15px;\n    }\n      .carousel-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 20px;\n      }\n      .AM[_ngcontent-%COMP%]{\n        height: 25%;\n      }\n      #logo[_ngcontent-%COMP%]{\n        width: 80%;\n      }\n      .department[_ngcontent-%COMP%]{\n        font-size: 15px;\n      }\n      #about[_ngcontent-%COMP%]   .div-img-bg[_ngcontent-%COMP%] {\n        margin-bottom: 30px;\n      }\n      .p-heading[_ngcontent-%COMP%]{\n        margin-bottom: 30px;\n      }\n      \n    }\n\n@media only screen \n    and  (min-width: 621px) and (max-width: 820px){\n     \n      .logo[_ngcontent-%COMP%] {\n        float: none;\n      }\n      .nav-menu[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        width: 120%;\n      }\n      nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        margin: 0;\n        width: 25%;\n        text-align: center;\n        margin: 0 auto;\n      }\n      nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n        font-size: 20px;\n      }\n      .carousel-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 20px;\n      }\n      .AM[_ngcontent-%COMP%]{\n        height: 25%;\n      }\n      #logo[_ngcontent-%COMP%]{\n        width: 90%;\n      }\n      .department[_ngcontent-%COMP%]{\n        font-size: 20px;\n      }\n      #about[_ngcontent-%COMP%]   .div-img-bg[_ngcontent-%COMP%] {\n        margin-bottom: 30px;\n      }\n      .p-heading[_ngcontent-%COMP%]{\n        margin-bottom: 30px;\n      }\n    }\n\n@media only screen \n    and  (min-width: 821px) and (max-width: 920px){\n  \n      .logo[_ngcontent-%COMP%] {\n        float: none;\n      }\n      .nav-menu[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        width: 125%;\n      \n      }\n      nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        margin: 0;\n        width: 10%;\n        text-align: center;\n        margin: 0 auto;\n      }\n      nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n        font-size: 20px;\n        margin: 0 auto;\n      }\n      .carousel-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 20px;\n      }\n      .AM[_ngcontent-%COMP%]{\n        height: 25%;\n      }\n      #logo[_ngcontent-%COMP%]{\n        width: 90%;\n      }\n      .department[_ngcontent-%COMP%]{\n        font-size: 20px;\n      }\n      #about[_ngcontent-%COMP%]   .div-img-bg[_ngcontent-%COMP%] {\n        margin-bottom: 30px;\n      }\n      .p-heading[_ngcontent-%COMP%]{\n        margin-bottom: 30px;\n      }\n    }\n\n@media only screen \n    and  (min-width: 921px) and (max-width: 1320px){\n  \n      .logo[_ngcontent-%COMP%] {\n        float: none;\n      }\n      .nav-menu[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        width: 125%;\n      \n      }\n      nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        margin: 0;\n        width: 10%;\n        text-align: center;\n        margin: 0 auto;\n      }\n      nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n        font-size: 20px;\n        margin: 0 auto;\n      } \n      .carousel-inner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n        font-size: 20px;\n      }\n      .AM[_ngcontent-%COMP%]{\n        height: 25%;\n      }\n      #logo[_ngcontent-%COMP%]{\n        width: 90%;\n      }\n      .department[_ngcontent-%COMP%]{\n        font-size: 25px;\n      }\n      #about[_ngcontent-%COMP%]   .div-img-bg[_ngcontent-%COMP%] {\n        margin-bottom: 30px;\n      }\n      .p-heading[_ngcontent-%COMP%]{\n        margin-bottom: 30px;\n      }\n\n    }\n\n@media only screen \n    and  (min-width: 1321px) and (max-width: 1520px){\n      .logo[_ngcontent-%COMP%] {\n        float: none;\n      }\n      .nav-menu[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        width: 125%;\n      \n      }\n      nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        margin: 0;\n        width: 10%;\n        text-align: center;\n        margin: 0 auto;\n      }\n      nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n        font-size: 20px;\n        margin: 0 auto;\n      }\n    }\n\n.avatar[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n\n.padding-grid[_ngcontent-%COMP%] {\n  padding-right: 10%;\n}\n\n.popover__title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 36px;\n  text-decoration: none;\n  text-align: center;\n  padding: 15px 0;\n}\n\n.popover__wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 1.5rem;\n  display: inline-block;\n  color: black;\n}\n\n.popover__content[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  right: -100px;\n  left: -100px;\n  transform: translate(0, 10px);\n  background-color: #fff;\n  padding: 1.5rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  width: auto;\n  border-radius: 50px;\n  border: 2px solid #b8a07e;\n}\n\n.popover__wrapper[_ngcontent-%COMP%]:hover   .popover__content[_ngcontent-%COMP%] {\n  z-index: 10;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -20px);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n\n.popover__message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7O0FBRTVFO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBQ0E7SUFDSTs2RUFDNkY7SUFDN0YsYUFBYTtJQUNiLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7RUFDeEI7O0FBSUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0FBR0Y7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsdUNBQXVDO0VBQ3ZDLHFDQUFxQztBQUN2Qzs7QUFHQTtFQUNFLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLHVDQUF1QztFQUN2QywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsc0NBQXNDO0VBQ3RDLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLHNDQUFzQztFQUN0Qyx1Q0FBdUM7RUFDdkMsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLG9DQUFv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RSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsMkNBQTJDO0VBQzNDLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHlEQUF5RDtBQUMzRDs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xuXG4qe1xuICBwYWRkaW5nOiAwOyBcbiAgbWFyZ2luOiAwOyBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiNoZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIpKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLmpwZWdcIikgcmVwZWF0IHNjcm9sbCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICBcbiAgXG4gIC5oZWFkZXItY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLmhlYWRlci1jb250ZW50IGgxIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDc4MDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5oZWFkZXItY29udGVudCBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgLmhlYWRlci1jb250ZW50IC5saXN0LXNvY2lhbCBsaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyLWNvbnRlbnQgLmxpc3Qtc29jaWFsIGxpIGkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG5cbiNsb2dve1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlOyBcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXG4gIGFuaW1hdGlvbjogZmlsbCAwLjVzIGVhc2UgZm9yd2FyZHMgM3M7IFxuICB3aWR0aDogOTc4cHg7IFxuICBoZWlnaHQ6IDcxcHg7ICBcbn1cblxuI2xvZ28gcGF0aDpudGgtY2hpbGQoMSl7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDMzNy4zMjAwMDczMjQyMTg3NXB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogMzM3LjMyMDAwNzMyNDIxODc1cHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHM7IFxufVxuXG5cbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDIpe1xuICBzdHJva2UtZGFzaGFycmF5OiAzMTYuNTg5MzU1NDY4NzVweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMxNi41ODkzNTU0Njg3NXB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuMXM7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCgzKXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMzAyLjY4ODE3MTM4NjcxODc1cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAzMDIuNjg4MTcxMzg2NzE4NzVweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjJzO1xufVxuI2xvZ28gcGF0aDpudGgtY2hpbGQoNCl7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDQ1Ny4wMjAwNTAwNDg4MjgxcHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiA0NTcuMDIwMDUwMDQ4ODI4MXB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuM3M7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCg1KXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjk2LjEyMjQ5NzU1ODU5Mzc1cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAyOTYuMTIyNDk3NTU4NTkzNzVweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjRzO1xufVxuI2xvZ28gcGF0aDpudGgtY2hpbGQoNil7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDM1OS41OTcxNjc5Njg3NXB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogMzU5LjU5NzE2Nzk2ODc1cHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC41cztcbn1cbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDcpe1xuICBzdHJva2UtZGFzaGFycmF5OiAzMzcuMzIwMDA3MzI0MjE4NzVweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMzNy4zMjAwMDczMjQyMTg3NXB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuNnM7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCg4KXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMzE2LjU5MDMzMjAzMTI1cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAzMTYuNTkwMzMyMDMxMjVweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjdzO1xufVxuI2xvZ28gcGF0aDpudGgtY2hpbGQoOSl7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDQ1Ny4wMjAwODA1NjY0MDYyNXB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogNDU3LjAyMDA4MDU2NjQwNjI1cHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC44cztcbn1cbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDEwKXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjk2LjEyMjQ5NzU1ODU5Mzc1cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAyOTYuMTIyNDk3NTU4NTkzNzVweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjlzO1xufVxuI2xvZ28gcGF0aDpudGgtY2hpbGQoMTEpe1xuICBzdHJva2UtZGFzaGFycmF5OiAyNDUuMzk4NTI5MDUyNzM0MzhweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI0NS4zOTg1MjkwNTI3MzQzOHB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDFzO1xufVxuI2xvZ28gcGF0aDpudGgtY2hpbGQoMTIpe1xuICBzdHJva2UtZGFzaGFycmF5OiAzMTYuNTkwNzg5Nzk0OTIxOXB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogMzE2LjU5MDc4OTc5NDkyMTlweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAxLjFzO1xufVxuI2xvZ28gcGF0aDpudGgtY2hpbGQoMTMpe1xuICBzdHJva2UtZGFzaGFycmF5OiAzMDIuNjg4NTA3MDgwMDc4MXB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogMzAyLjY4ODUwNzA4MDA3ODFweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAxLjJzO1xufVxuI2xvZ28gcGF0aDpudGgtY2hpbGQoMTQpe1xuICBzdHJva2UtZGFzaGFycmF5OiAgMzU5LjU5NzE2Nzk2ODc1cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAgMzU5LjU5NzE2Nzk2ODc1cHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMS4zcztcbn1cblxuQGtleWZyYW1lcyBsaW5lLWFuaW0ge1xuICAgIHRve1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI1O1xuICAgIH1cbiAgXG59XG5Aa2V5ZnJhbWVzIGZpbGwge1xuICBmcm9te1xuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICB9XG4gIHRve1xuICAgIGZpbGw6d2hpdGU7IFxuICB9XG59XG5cbi5kZXBhcnRtZW50e1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBQeDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNjAlOyBcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTYwJSk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDQuNXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVjZUxvZ297XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGhlaWdodDogMTIlO1xuICBhbmltYXRpb246IGZhZGVJbiA0LjVzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHsgb3BhY2l0eTogMDsgfVxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG4uZ2x5cGhpY29uLXRyaWFuZ2xlLWJvdHRvbXtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDk1JTsgXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC05NSUpO1xuICBhbmltYXRpb246IGZhZGVJbiA0LjVzO1xufVxuXG4jYWJvdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG4gIFxufVxuXG4jYWJvdXQgLmRpdi1pbWctYmcge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyOiAyMHB4IHNvbGlkICNiOGEwN2U7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbiNhYm91dCAuZGl2LWltZy1iZyAuYWJvdXQtaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAyNSAyNSA4NXB4IDI1IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbiNhYm91dCAuYWJvdXQtZGVzY3IgLnAtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNhYm91dCAuYWJvdXQtZGVzY3IgLnNlcGFyYXRvciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaGVhZGluZ3tcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuI2V4cGFuZEJ1dHRvbntcbiAgYmFja2dyb3VuZDogbm9uZSFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYjhhMDdlOyBcbn1cbiNleHBhbmRCdXR0b246aG92ZXJ7XG4gIGNvbG9yOiAjYjhhMDdlYWI7XG59XG5cbiNtb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI2Z1bmRpbmd7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnRpdGxle1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uc2VhcmNoLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2I4YTA3ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5zZWFyY2gtYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGEwN2U7XG4gIGNvbG9yOiAjRkZGO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucHVibGljYXRpb25zIHtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cbnRoLCB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiOGEwN2U7XG59XG5he1xuICBjb2xvcjogYmxhY2s7XG59XG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG4ubGluZXtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogMCBhdXRvOyBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YTA3ZTtcbn1cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcblxuI3Jlc2VhcmNoQ2Fyb3VzZWx7XG4gICAgaGVpZ2h0OiA2MHZoICFpbXBvcnRhbnQ7XG5cbn1cblxuLnctMTAwe1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBjb2xvcjogI2I4YTA3ZTtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cblxuLkFNe1xuICAgIGhlaWdodDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgZmlsdGVyOiBpbnZlcnQoNjYlKSBzZXBpYSgyMSUpIHNhdHVyYXRlKDQ0NyUpIGh1ZS1yb3RhdGUoMzU2ZGVnKSBicmlnaHRuZXNzKDk0JSkgY29udHJhc3QoODklKTtcbn0gXG4uY2Fyb3VzZWwtaW5kaWNhdG9yc3tcbiAgICBmaWx0ZXI6IGludmVydCg2NiUpIHNlcGlhKDIxJSkgc2F0dXJhdGUoNDQ3JSkgaHVlLXJvdGF0ZSgzNTZkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCg4OSUpO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbntcbiAgICBmaWx0ZXI6IGludmVydCg2NiUpIHNlcGlhKDIxJSkgc2F0dXJhdGUoNDQ3JSkgaHVlLXJvdGF0ZSgzNTZkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCg4OSUpO1xuXG59XG5cbm5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiAxMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuLm5hdi1tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5uYXYgdWwgbGkge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuXG5uYXYgdWwgbGk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxubmF2IHVsIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5uYXYgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuXG4ubG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwJTtcbn1cblxuLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAzMCU7XG59XG4ubG9nbyBpbWc6aG92ZXJ7XG4gIGhlaWdodDogNTAlO1xufVxuXG4ucmVzcG9uc2l2ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjYWZhZmFmO1xufVxuXG4ubWFpbi1uYXYge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXZiYXItZXhwYW5kLWxne1xuICBhbmltYXRpb246IGZhZGVJbiAwLjc1cztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH0gXG59XG5cblxuYm9keXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1Mjc0ZDtcbn1cblxuI2NvbnRhY3R7XG4gIHBhZGRpbmc6IDQlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG59XG4udGl0bGV7XG4gIHBhZGRpbmctYm90dG9tOiAxJTtcbn1cbi5jb2wtbWQtM3tcbiAgYmFja2dyb3VuZDogI2I4YTA3ZTtcbiAgcGFkZGluZzogNCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xufVxuXG4uY29udGFjdC1pbmZvIGgye1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5jb2wtbWQtOXtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMyU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG59XG5cbi5jb250YWN0LWZvcm0gbGFiZWx7XG4gIGZvbnQtd2VpZ2h0OjYwMDtcbn1cblxuLmNvbnRhY3QtZm9ybSBidXR0b257XG4gIGJhY2tncm91bmQ6I2I4YTA3ZWUwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvbnRhY3QtZm9ybSBidXR0b246Zm9jdXN7XG4gIGJveC1zaGFkb3c6bm9uZTtcbn1cblxuXG5oMyxoNHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZm9ybS1ncm91cHtcbiAgcGFkZGluZzogMiU7XG4gIFxufVxuXG4ubGluZXtcbiAgbWFyZ2luLXRvcDogMTBweDsgXG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogNTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbn1cbi5saW5lMntcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogMCBhdXRvOyBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YTA3ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIFxuYW5kICAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQyMHB4KXtcbiAgLmxvZ28ge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5uYXYtbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIFxuICB9XG4gIG5hdiB1bCBsaSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIG5hdiB1bCBsaSBhe1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfSAgXG4gICAgLmNhcm91c2VsLWlubmVyIGgxe1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuQU17XG4gICAgICBoZWlnaHQ6IDI1JTtcbiAgICB9XG4gICAgI2xvZ297XG4gICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgICAuZGVwYXJ0bWVudHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgI2Fib3V0IC5kaXYtaW1nLWJnIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIC5wLWhlYWRpbmd7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICBcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBcbmFuZCAgKG1pbi13aWR0aDogNDIxcHgpIGFuZCAobWF4LXdpZHRoOiA1MjBweCl7XG4gIC5sb2dvIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAubmF2LW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMjAlO1xuICB9XG4gIG5hdiB1bCBsaSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIG5hdiB1bCBsaSBhe1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAgIC5jYXJvdXNlbC1pbm5lciBoMXtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLkFNe1xuICAgICAgaGVpZ2h0OiAyNSU7XG4gICAgfVxuICAgICNsb2dve1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgLmRlcGFydG1lbnR7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgICNhYm91dCAuZGl2LWltZy1iZyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAucC1oZWFkaW5ne1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gICAgXG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gXG4gIGFuZCAgKG1pbi13aWR0aDogNTIxcHgpIGFuZCAobWF4LXdpZHRoOiA2MjBweCl7XG4gICAgLmxvZ28ge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuICAgIC5uYXYtbWVudSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMjAlOyBcbiAgICB9XG4gICAgbmF2IHVsIGxpIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgbmF2IHVsIGxpIGF7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgICAgLmNhcm91c2VsLWlubmVyIGgxe1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgICAuQU17XG4gICAgICAgIGhlaWdodDogMjUlO1xuICAgICAgfVxuICAgICAgI2xvZ297XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICB9XG4gICAgICAuZGVwYXJ0bWVudHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgfVxuICAgICAgI2Fib3V0IC5kaXYtaW1nLWJnIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cbiAgICAgIC5wLWhlYWRpbmd7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gXG4gICAgYW5kICAobWluLXdpZHRoOiA2MjFweCkgYW5kIChtYXgtd2lkdGg6IDgyMHB4KXtcbiAgICAgXG4gICAgICAubG9nbyB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgfVxuICAgICAgLm5hdi1tZW51IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMjAlO1xuICAgICAgfVxuICAgICAgbmF2IHVsIGxpIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgbmF2IHVsIGxpIGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICAgIC5jYXJvdXNlbC1pbm5lciBoMXtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgICAgLkFNe1xuICAgICAgICBoZWlnaHQ6IDI1JTtcbiAgICAgIH1cbiAgICAgICNsb2dve1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgfVxuICAgICAgLmRlcGFydG1lbnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICAgICNhYm91dCAuZGl2LWltZy1iZyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICB9XG4gICAgICAucC1oZWFkaW5ne1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIFxuICAgIGFuZCAgKG1pbi13aWR0aDogODIxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCl7XG4gIFxuICAgICAgLmxvZ28ge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5uYXYtbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTI1JTtcbiAgICAgIFxuICAgICAgfVxuICAgICAgbmF2IHVsIGxpIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgbmF2IHVsIGxpIGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICAuY2Fyb3VzZWwtaW5uZXIgaDF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICAgIC5BTXtcbiAgICAgICAgaGVpZ2h0OiAyNSU7XG4gICAgICB9XG4gICAgICAjbG9nb3tcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIH1cbiAgICAgIC5kZXBhcnRtZW50e1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgICAjYWJvdXQgLmRpdi1pbWctYmcge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgfVxuICAgICAgLnAtaGVhZGluZ3tcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gXG4gICAgYW5kICAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEzMjBweCl7XG4gIFxuICAgICAgLmxvZ28ge1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5uYXYtbWVudSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTI1JTtcbiAgICAgIFxuICAgICAgfVxuICAgICAgbmF2IHVsIGxpIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgfVxuICAgICAgbmF2IHVsIGxpIGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9IFxuICAgICAgLmNhcm91c2VsLWlubmVyIGgxe1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgICAuQU17XG4gICAgICAgIGhlaWdodDogMjUlO1xuICAgICAgfVxuICAgICAgI2xvZ297XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICB9XG4gICAgICAuZGVwYXJ0bWVudHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgfVxuICAgICAgI2Fib3V0IC5kaXYtaW1nLWJnIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cbiAgICAgIC5wLWhlYWRpbmd7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgIFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBcbiAgICBhbmQgIChtaW4td2lkdGg6IDEzMjFweCkgYW5kIChtYXgtd2lkdGg6IDE1MjBweCl7XG4gICAgICAubG9nbyB7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgfVxuICAgICAgLm5hdi1tZW51IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMjUlO1xuICAgICAgXG4gICAgICB9XG4gICAgICBuYXYgdWwgbGkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICBuYXYgdWwgbGkgYXtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIH1cbiAgICB9XG5cbi5hdmF0YXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wYWRkaW5nLWdyaWQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG59XG5cbi5wb3BvdmVyX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG5cbi5wb3BvdmVyX193cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IGJsYWNrO1xufVxuLnBvcG92ZXJfX2NvbnRlbnQge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xMDBweDtcbiAgbGVmdDogLTEwMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2I4YTA3ZTtcbn1cbi5wb3BvdmVyX193cmFwcGVyOmhvdmVyIC5wb3BvdmVyX19jb250ZW50IHtcbiAgei1pbmRleDogMTA7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIC0wLjAyLCAwLjIsIDAuOTcpO1xufVxuLnBvcG92ZXJfX21lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




class LoginComponent {
    constructor(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.afAuth.signInWithEmailAndPassword(this.email, this.password).then((res) => {
            console.log(res);
            this.router.navigate(['/dashboard']);
        }).catch((err) => {
            alert(err.message);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 18, vars: 2, consts: [[1, "session"], [1, "left"], ["action", "", "autocomplete", "off", 1, "log-in"], [1, "floating-label"], ["placeholder", "Email", "type", "text", "name", "email", "id", "email", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "email"], ["placeholder", "Password", "type", "password", "name", "password", "id", "password", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "submit", "onClick", "return false;", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2)(4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DASHBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3)(13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["*[_ngcontent-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"San Francisco\", Helvetica, Arial, sans-serif;\n    font-weight: 300;\n    margin: 0;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n    height: 100vh;\n    width: 100vw;\n    margin: 0 0;\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-start;\n    background: #f3f2f2;\n}\nh4[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: 600;\n    color: #000;\n    opacity: 0.85;\n}\nlabel[_ngcontent-%COMP%] {\n    font-size: 12.5px;\n    color: #000;\n    opacity: 0.8;\n    font-weight: 400;\n}\nform[_ngcontent-%COMP%] {\n    padding: 40px 30px;\n    background: #fefefe;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding-bottom: 20px;\n}\nform[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    color: rgba(0, 0, 0, .5);\n}\nform[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, 1);\n    font-weight: 700;\n}\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    line-height: 155%;\n    margin-bottom: 5px;\n    font-size: 14px;\n    color: #000;\n    opacity: 0.65;\n    font-weight: 400;\n    max-width: 200px;\n    margin-bottom: 40px;\n}\na.discrete[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, .4);\n    font-size: 14px;\n    border-bottom: solid 1px rgba(0, 0, 0, .0);\n    padding-bottom: 4px;\n    margin-left: auto;\n    font-weight: 300;\n    transition: all 0.3s ease;\n    margin-top: 40px;\n}\na.discrete[_ngcontent-%COMP%]:hover {\n    border-bottom: solid 1px rgba(0, 0, 0, .2);\n}\nbutton[_ngcontent-%COMP%] {\n    -webkit-appearance: none;\n    width: auto;\n    min-width: 100px;\n    border-radius: 24px;\n    text-align: center;\n    padding: 15px 40px;\n    margin-top: 5px;\n    background-color: #b08bf8;\n    color: #fff;\n    font-size: 14px;\n    margin-left: auto;\n    font-weight: 500;\n    box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, .13);\n    border: none;\n    transition: all 0.3s ease;\n    outline: 0;\n}\nbutton[_ngcontent-%COMP%]:hover {\n    transform: translateY(-3px);\n    box-shadow: 0 2px 6px -1px rgba(182, 157, 230, .65);\n}\nbutton[_ngcontent-%COMP%]:hover:active {\n    transform: scale(0.99);\n}\ninput[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 20px 0px;\n    height: 56px;\n    border: none;\n    border-bottom: solid 1px rgba(0, 0, 0, .1);\n    background: #fff;\n    min-width: 280px;\n    box-sizing: border-box;\n    transition: all 0.3s linear;\n    color: #000;\n    font-weight: 400;\n    -webkit-appearance: none;\n}\ninput[_ngcontent-%COMP%]:focus {\n    border-bottom: solid 1px #b69de6;\n    outline: 0;\n    box-shadow: 0 2px 6px -8px rgba(182, 157, 230, .45);\n}\n.floating-label[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 10px;\n}\n.floating-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    position: absolute;\n    top: calc(50% - 7px);\n    left: 0;\n    opacity: 0;\n    transition: all 0.3s ease;\n}\n.floating-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) {\n    padding: 28px 0px 12px 0px;\n}\n.floating-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%] {\n    transform: translateY(-10px);\n    opacity: 0.7;\n}\n.session[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    width: auto;\n    height: auto;\n    margin: auto auto;\n    background: #fff;\n    border-radius: 4px;\n    box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, .12);\n}\n.left[_ngcontent-%COMP%] {\n    width: 220px;\n    height: auto;\n    min-height: 100%;\n    position: relative;\n    background-image: url('loginImage.jpg');    \n    background-size: cover;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n.left[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    height: 40px;\n    width: auto;\n    margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2RkFBNkY7SUFDN0YsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLCtDQUErQztJQUMvQyxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLG1EQUFtRDtBQUN2RDtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixtREFBbUQ7QUFDdkQ7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsT0FBTztJQUNQLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwrQ0FBK0M7QUFDbkQ7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1Q0FBb0Q7SUFDcEQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTYW4gRnJhbmNpc2NvXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW46IDA7XG59XG5odG1sLCBib2R5IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXJnaW46IDAgMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmMmYyO1xufVxuaDQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIG9wYWNpdHk6IDAuODU7XG59XG5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMi41cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5mb3JtIHtcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5mb3JtIGg0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcbn1cbmZvcm0gaDQgc3BhbiB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbmZvcm0gcCB7XG4gICAgbGluZS1oZWlnaHQ6IDE1NSU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAwLjY1O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuYS5kaXNjcmV0ZSB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAuMCk7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cbmEuZGlzY3JldGU6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIC4yKTtcbn1cbmJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweCA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjA4YmY4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMTMpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIG91dGxpbmU6IDA7XG59XG5idXR0b246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggLTFweCByZ2JhKDE4MiwgMTU3LCAyMzAsIC42NSk7XG59XG5idXR0b246aG92ZXI6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xufVxuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1pbi13aWR0aDogMjgwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNiNjlkZTY7XG4gICAgb3V0bGluZTogMDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggLThweCByZ2JhKDE4MiwgMTU3LCAyMzAsIC40NSk7XG59XG4uZmxvYXRpbmctbGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZsb2F0aW5nLWxhYmVsIGxhYmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDdweCk7XG4gICAgbGVmdDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4uZmxvYXRpbmctbGFiZWwgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xuICAgIHBhZGRpbmc6IDI4cHggMHB4IDEycHggMHB4O1xufVxuLmZsb2F0aW5nLWxhYmVsIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgb3BhY2l0eTogMC43O1xufVxuLnNlc3Npb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIC4xMik7XG59XG4ubGVmdCB7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvbG9naW5JbWFnZS5qcGdcIik7ICAgIFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbn1cbi5sZWZ0IHN2ZyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMjBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7093:
/*!*************************************************************!*\
  !*** ./src/app/modals/award-modal/award-modal.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwardModalComponent": () => (/* binding */ AwardModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/database.service */ 4382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);





class AwardModalComponent {
    constructor(databaseService, data) {
        this.databaseService = databaseService;
        this.data = data;
        this.name = "";
        this.link = "";
        this.timespan = "";
        this.earnings = "";
        this.extra = "";
    }
    ngOnInit() {
        this.length = this.data.length;
    }
    addAward() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.databaseService.addAwardData(`honors/awards/`, this.name, this.link, this.timespan, this.earnings, this.extra);
            alert("Successfully added Data");
        });
    }
}
AwardModalComponent.ɵfac = function AwardModalComponent_Factory(t) { return new (t || AwardModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
AwardModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AwardModalComponent, selectors: [["app-award-modal"]], decls: 15, vars: 5, consts: [["placeholder", "Name", 3, "ngModel", "ngModelChange"], ["placeholder", "link", 3, "ngModel", "ngModelChange"], ["placeholder", "timespan", 3, "ngModel", "ngModelChange"], ["placeholder", "earnings", 3, "ngModel", "ngModelChange"], ["placeholder", "extra", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function AwardModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Add New Award ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AwardModalComponent_Template_input_ngModelChange_3_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AwardModalComponent_Template_input_ngModelChange_5_listener($event) { return ctx.link = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AwardModalComponent_Template_input_ngModelChange_7_listener($event) { return ctx.timespan = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AwardModalComponent_Template_input_ngModelChange_9_listener($event) { return ctx.earnings = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AwardModalComponent_Template_input_ngModelChange_11_listener($event) { return ctx.extra = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AwardModalComponent_Template_button_click_13_listener() { return ctx.addAward(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.link);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.timespan);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.earnings);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.extra);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhd2FyZC1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7585:
/*!*******************************************************************!*\
  !*** ./src/app/modals/journals-modal/journals-modal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JournalsModalComponent": () => (/* binding */ JournalsModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/database.service */ 4382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




class JournalsModalComponent {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    ngOnInit() {
    }
    addJournal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.databaseService.addJournalData(`journals/journals`, this.title, this.url, this.journal, this.authors);
            alert("Successfully added Data");
        });
    }
}
JournalsModalComponent.ɵfac = function JournalsModalComponent_Factory(t) { return new (t || JournalsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService)); };
JournalsModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: JournalsModalComponent, selectors: [["app-journals-modal"]], decls: 15, vars: 4, consts: [["placeholder", "title", 3, "ngModel", "ngModelChange"], ["placeholder", "url", 3, "ngModel", "ngModelChange"], ["placeholder", "journal", "rows", "4", "cols", "50", 3, "ngModel", "ngModelChange"], ["placeholder", "authors", "rows", "4", "cols", "50", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function JournalsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Add Research ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JournalsModalComponent_Template_input_ngModelChange_3_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JournalsModalComponent_Template_input_ngModelChange_5_listener($event) { return ctx.url = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JournalsModalComponent_Template_textarea_ngModelChange_7_listener($event) { return ctx.journal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JournalsModalComponent_Template_textarea_ngModelChange_10_listener($event) { return ctx.authors = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JournalsModalComponent_Template_button_click_13_listener() { return ctx.addJournal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.journal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.authors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb3VybmFscy1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9671:
/*!***************************************************************************!*\
  !*** ./src/app/modals/publications-modal/publications-modal.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicationsModalComponent": () => (/* binding */ PublicationsModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/database.service */ 4382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);




class PublicationsModalComponent {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    ngOnInit() {
    }
    addPublication() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.databaseService.addPublicationData(`publications/conferences`, this.title, this.url, this.journal, this.authors, this.year);
            alert("Successfully added Data");
        });
    }
}
PublicationsModalComponent.ɵfac = function PublicationsModalComponent_Factory(t) { return new (t || PublicationsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService)); };
PublicationsModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PublicationsModalComponent, selectors: [["app-publications-modal"]], decls: 17, vars: 5, consts: [["placeholder", "title", 3, "ngModel", "ngModelChange"], ["placeholder", "year", 3, "ngModel", "ngModelChange"], ["placeholder", "url", 3, "ngModel", "ngModelChange"], ["placeholder", "journal", "rows", "4", "cols", "50", 3, "ngModel", "ngModelChange"], ["placeholder", "authors", "rows", "4", "cols", "50", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function PublicationsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Add Research ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PublicationsModalComponent_Template_input_ngModelChange_3_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PublicationsModalComponent_Template_input_ngModelChange_5_listener($event) { return ctx.year = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PublicationsModalComponent_Template_input_ngModelChange_7_listener($event) { return ctx.url = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PublicationsModalComponent_Template_textarea_ngModelChange_9_listener($event) { return ctx.journal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PublicationsModalComponent_Template_textarea_ngModelChange_12_listener($event) { return ctx.authors = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PublicationsModalComponent_Template_button_click_15_listener() { return ctx.addPublication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.journal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.authors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdWJsaWNhdGlvbnMtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7861:
/*!*******************************************************************!*\
  !*** ./src/app/modals/research-modal/research-modal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResearchModalComponent": () => (/* binding */ ResearchModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/database.service */ 4382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);





class ResearchModalComponent {
    constructor(databaseService, data) {
        this.databaseService = databaseService;
        this.data = data;
        this.content = "";
        this.img_name = "";
        this.title = "";
    }
    ngOnInit() {
        this.length = this.data.length;
    }
    addResearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.databaseService.addResearchData(`research/research/`, this.content, this.img_name, this.title);
            alert("Successfully added Data");
        });
    }
}
ResearchModalComponent.ɵfac = function ResearchModalComponent_Factory(t) { return new (t || ResearchModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA)); };
ResearchModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResearchModalComponent, selectors: [["app-research-modal"]], decls: 12, vars: 3, consts: [["placeholder", "title", 3, "ngModel", "ngModelChange"], ["placeholder", "image name", 3, "ngModel", "ngModelChange"], ["placeholder", "content", "rows", "4", "cols", "50", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function ResearchModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Add Research ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ResearchModalComponent_Template_input_ngModelChange_3_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ResearchModalComponent_Template_input_ngModelChange_5_listener($event) { return ctx.img_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ResearchModalComponent_Template_textarea_ngModelChange_7_listener($event) { return ctx.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResearchModalComponent_Template_button_click_10_listener() { return ctx.addResearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.img_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.content);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNlYXJjaC1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 4809:
/*!********************************************************!*\
  !*** ./src/app/publications/publications.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicationsComponent": () => (/* binding */ PublicationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search.pipe */ 9175);





function PublicationsComponent_tr_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const journals_r2 = ctx.$implicit;
    const ind_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.journalsData.length - ind_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", journals_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](journals_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", journals_r2.journal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", journals_r2.authors, "");
} }
function PublicationsComponent_tr_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td")(4, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const conferences_r4 = ctx.$implicit;
    const y_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.conferencesData.length - y_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", conferences_r4.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](conferences_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](conferences_r4.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", conferences_r4.journal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](conferences_r4.authors);
} }
class PublicationsComponent {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.lengthOfConference = 0;
        this.searchJournals = '';
        this.searchPublications = '';
    }
    ngOnInit() {
        console.log("here");
        this.getData();
    }
    getData() {
        console.log("here");
        this.databaseService.getData("journals/journals").then((res) => {
            console.log(res);
            this.journalsData = res;
            this.journalsData = this.journalsData.flat();
        });
        this.databaseService.getData("publications/conferences").then((res) => {
            console.log(res);
            this.conferencesData = res;
            this.conferencesData = this.conferencesData.flat();
            this.lengthOfConference = this.conferencesData.length;
        });
    }
}
PublicationsComponent.ɵfac = function PublicationsComponent_Factory(t) { return new (t || PublicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService)); };
PublicationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PublicationsComponent, selectors: [["app-publications"]], decls: 100, vars: 10, consts: [[1, "main-nav", "navbar-expand-lg"], [1, "row"], [2, "padding-right", "20%"], [1, "logo"], ["href", "index.html"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", "alt", "logo"], [1, "nav-menu", "list-unstyled"], ["href", "#home", 1, "smooth-scroll"], ["href", "#about", 1, "smooth-scroll"], ["href", "/awards", 1, "smooth-scroll"], ["href", "/publications", 1, "smooth-scroll"], ["href", "/research", 1, "smooth-scroll"], ["href", "/students", 1, "smooth-scroll"], ["href", "/cv", 1, "smooth-scroll"], ["id", "publications"], ["width", "638", "height", "87", "viewBox", "0 0 638 87", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "id", "logo"], ["d", "M56.7 35.4C56.7 39.4667 55.7667 43.2 53.9 46.6C52.0333 49.9333 49.1667 52.6333 45.3 54.7C41.4333 56.7667 36.6333 57.8 30.9 57.8H20.3V83H3.2V12.8H30.9C36.5 12.8 41.2333 13.7667 45.1 15.7C48.9667 17.6333 51.8667 20.3 53.8 23.7C55.7333 27.1 56.7 31 56.7 35.4ZM29.6 44.2C32.8667 44.2 35.3 43.4333 36.9 41.9C38.5 40.3667 39.3 38.2 39.3 35.4C39.3 32.6 38.5 30.4333 36.9 28.9C35.3 27.3667 32.8667 26.6 29.6 26.6H20.3V44.2H29.6Z", "stroke", "black", "stroke-width", "5"], ["d", "M120.702 27.2V83H103.602V75.4C101.869 77.8667 99.5023 79.8667 96.5023 81.4C93.569 82.8667 90.3023 83.6 86.7023 83.6C82.4357 83.6 78.669 82.6667 75.4023 80.8C72.1357 78.8667 69.6023 76.1 67.8023 72.5C66.0023 68.9 65.1023 64.6667 65.1023 59.8V27.2H82.1023V57.5C82.1023 61.2333 83.069 64.1333 85.0023 66.2C86.9357 68.2667 89.5357 69.3 92.8023 69.3C96.1357 69.3 98.769 68.2667 100.702 66.2C102.636 64.1333 103.602 61.2333 103.602 57.5V27.2H120.702Z", "stroke", "black", "stroke-width", "5"], ["d", "M150.085 35.1C151.685 32.5 153.985 30.4 156.985 28.8C159.985 27.2 163.418 26.4 167.285 26.4C171.885 26.4 176.052 27.5667 179.785 29.9C183.518 32.2333 186.452 35.5667 188.585 39.9C190.785 44.2333 191.885 49.2667 191.885 55C191.885 60.7333 190.785 65.8 188.585 70.2C186.452 74.5333 183.518 77.9 179.785 80.3C176.052 82.6333 171.885 83.8 167.285 83.8C163.352 83.8 159.918 83.0333 156.985 81.5C154.052 79.9 151.752 77.8 150.085 75.2V83H132.985V9H150.085V35.1ZM174.485 55C174.485 50.7333 173.285 47.4 170.885 45C168.552 42.5333 165.652 41.3 162.185 41.3C158.785 41.3 155.885 42.5333 153.485 45C151.152 47.4667 149.985 50.8333 149.985 55.1C149.985 59.3667 151.152 62.7333 153.485 65.2C155.885 67.6667 158.785 68.9 162.185 68.9C165.585 68.9 168.485 67.6667 170.885 65.2C173.285 62.6667 174.485 59.2667 174.485 55Z", "stroke", "black", "stroke-width", "5"], ["d", "M217.956 9V83H200.856V9H217.956Z", "stroke", "black", "stroke-width", "5"], ["d", "M238.948 21.4C235.948 21.4 233.482 20.5333 231.548 18.8C229.682 17 228.748 14.8 228.748 12.2C228.748 9.53333 229.682 7.33333 231.548 5.59999C233.482 3.79999 235.948 2.89999 238.948 2.89999C241.882 2.89999 244.282 3.79999 246.148 5.59999C248.082 7.33333 249.048 9.53333 249.048 12.2C249.048 14.8 248.082 17 246.148 18.8C244.282 20.5333 241.882 21.4 238.948 21.4ZM247.448 27.2V83H230.348V27.2H247.448Z", "stroke", "black", "stroke-width", "5"], ["d", "M256.441 55.1C256.441 49.3 257.607 44.2333 259.941 39.9C262.341 35.5667 265.641 32.2333 269.841 29.9C274.107 27.5667 278.974 26.4 284.441 26.4C291.441 26.4 297.274 28.2333 301.941 31.9C306.674 35.5667 309.774 40.7333 311.241 47.4H293.041C291.507 43.1333 288.541 41 284.141 41C281.007 41 278.507 42.2333 276.641 44.7C274.774 47.1 273.841 50.5667 273.841 55.1C273.841 59.6333 274.774 63.1333 276.641 65.6C278.507 68 281.007 69.2 284.141 69.2C288.541 69.2 291.507 67.0667 293.041 62.8H311.241C309.774 69.3333 306.674 74.4667 301.941 78.2C297.207 81.9333 291.374 83.8 284.441 83.8C278.974 83.8 274.107 82.6333 269.841 80.3C265.641 77.9667 262.341 74.6333 259.941 70.3C257.607 65.9667 256.441 60.9 256.441 55.1Z", "stroke", "black", "stroke-width", "5"], ["d", "M316.987 55C316.987 49.2667 318.054 44.2333 320.187 39.9C322.387 35.5667 325.354 32.2333 329.087 29.9C332.821 27.5667 336.987 26.4 341.587 26.4C345.521 26.4 348.954 27.2 351.887 28.8C354.887 30.4 357.187 32.5 358.787 35.1V27.2H375.887V83H358.787V75.1C357.121 77.7 354.787 79.8 351.787 81.4C348.854 83 345.421 83.8 341.487 83.8C336.954 83.8 332.821 82.6333 329.087 80.3C325.354 77.9 322.387 74.5333 320.187 70.2C318.054 65.8 316.987 60.7333 316.987 55ZM358.787 55.1C358.787 50.8333 357.587 47.4667 355.187 45C352.854 42.5333 349.987 41.3 346.587 41.3C343.187 41.3 340.287 42.5333 337.887 45C335.554 47.4 334.387 50.7333 334.387 55C334.387 59.2667 335.554 62.6667 337.887 65.2C340.287 67.6667 343.187 68.9 346.587 68.9C349.987 68.9 352.854 67.6667 355.187 65.2C357.587 62.7333 358.787 59.3667 358.787 55.1Z", "stroke", "black", "stroke-width", "5"], ["d", "M419.359 68.5V83H410.659C404.459 83 399.625 81.5 396.159 78.5C392.692 75.4333 390.959 70.4667 390.959 63.6V41.4H384.159V27.2H390.959V13.6H408.059V27.2H419.259V41.4H408.059V63.8C408.059 65.4667 408.459 66.6667 409.259 67.4C410.059 68.1333 411.392 68.5 413.259 68.5H419.359Z", "stroke", "black", "stroke-width", "5"], ["d", "M437.484 21.4C434.484 21.4 432.017 20.5333 430.084 18.8C428.217 17 427.284 14.8 427.284 12.2C427.284 9.53333 428.217 7.33333 430.084 5.59999C432.017 3.79999 434.484 2.89999 437.484 2.89999C440.417 2.89999 442.817 3.79999 444.684 5.59999C446.617 7.33333 447.584 9.53333 447.584 12.2C447.584 14.8 446.617 17 444.684 18.8C442.817 20.5333 440.417 21.4 437.484 21.4ZM445.984 27.2V83H428.884V27.2H445.984Z", "stroke", "black", "stroke-width", "5"], ["d", "M483.776 83.8C478.309 83.8 473.376 82.6333 468.976 80.3C464.642 77.9667 461.209 74.6333 458.676 70.3C456.209 65.9667 454.976 60.9 454.976 55.1C454.976 49.3667 456.242 44.3333 458.776 40C461.309 35.6 464.776 32.2333 469.176 29.9C473.576 27.5667 478.509 26.4 483.976 26.4C489.442 26.4 494.376 27.5667 498.776 29.9C503.176 32.2333 506.642 35.6 509.176 40C511.709 44.3333 512.976 49.3667 512.976 55.1C512.976 60.8333 511.676 65.9 509.076 70.3C506.542 74.6333 503.042 77.9667 498.576 80.3C494.176 82.6333 489.242 83.8 483.776 83.8ZM483.776 69C487.042 69 489.809 67.8 492.076 65.4C494.409 63 495.576 59.5667 495.576 55.1C495.576 50.6333 494.442 47.2 492.176 44.8C489.976 42.4 487.242 41.2 483.976 41.2C480.642 41.2 477.876 42.4 475.676 44.8C473.476 47.1333 472.376 50.5667 472.376 55.1C472.376 59.5667 473.442 63 475.576 65.4C477.776 67.8 480.509 69 483.776 69Z", "stroke", "black", "stroke-width", "5"], ["d", "M556.048 26.6C562.581 26.6 567.781 28.7333 571.648 33C575.581 37.2 577.548 43 577.548 50.4V83H560.548V52.7C560.548 48.9667 559.581 46.0667 557.648 44C555.714 41.9333 553.114 40.9 549.848 40.9C546.581 40.9 543.981 41.9333 542.048 44C540.114 46.0667 539.148 48.9667 539.148 52.7V83H522.048V27.2H539.148V34.6C540.881 32.1333 543.214 30.2 546.148 28.8C549.081 27.3333 552.381 26.6 556.048 26.6Z", "stroke", "black", "stroke-width", "5"], ["d", "M612.13 83.8C607.264 83.8 602.93 82.9667 599.13 81.3C595.33 79.6333 592.33 77.3667 590.13 74.5C587.93 71.5667 586.697 68.3 586.43 64.7H603.33C603.53 66.6333 604.43 68.2 606.03 69.4C607.63 70.6 609.597 71.2 611.93 71.2C614.064 71.2 615.697 70.8 616.83 70C618.03 69.1333 618.63 68.0333 618.63 66.7C618.63 65.1 617.797 63.9333 616.13 63.2C614.464 62.4 611.764 61.5333 608.03 60.6C604.03 59.6667 600.697 58.7 598.03 57.7C595.364 56.6333 593.064 55 591.13 52.8C589.197 50.5333 588.23 47.5 588.23 43.7C588.23 40.5 589.097 37.6 590.83 35C592.63 32.3333 595.23 30.2333 598.63 28.7C602.097 27.1667 606.197 26.4 610.93 26.4C617.93 26.4 623.43 28.1333 627.43 31.6C631.497 35.0667 633.83 39.6667 634.43 45.4H618.63C618.364 43.4667 617.497 41.9333 616.03 40.8C614.63 39.6667 612.764 39.1 610.43 39.1C608.43 39.1 606.897 39.5 605.83 40.3C604.764 41.0333 604.23 42.0667 604.23 43.4C604.23 45 605.064 46.2 606.73 47C608.464 47.8 611.13 48.6 614.73 49.4C618.864 50.4667 622.23 51.5333 624.83 52.6C627.43 53.6 629.697 55.2667 631.63 57.6C633.63 59.8667 634.664 62.9333 634.73 66.8C634.73 70.0667 633.797 73 631.93 75.6C630.13 78.1333 627.497 80.1333 624.03 81.6C620.63 83.0667 616.664 83.8 612.13 83.8Z", "stroke", "black", "stroke-width", "5"], [1, "container"], [1, "search-container"], [1, "title"], ["type", "text", "placeholder", "Search...", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "search-button"], [1, "publications"], [4, "ngFor", "ngForOf"], [1, "line"], ["target", "_blank", 3, "href"]], template: function PublicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header")(1, "nav", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 6)(8, "li")(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li")(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li")(21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li")(24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li")(27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Consulting/CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "path", 16)(32, "path", 17)(33, "path", 18)(34, "path", 19)(35, "path", 20)(36, "path", 21)(37, "path", 22)(38, "path", 23)(39, "path", 24)(40, "path", 25)(41, "path", 26)(42, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "br")(44, "br")(45, "br")(46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 28)(48, "div", 29)(49, "h1", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Journals Published ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PublicationsComponent_Template_input_ngModelChange_51_listener($event) { return ctx.searchJournals = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 33)(55, "table")(56, "thead")(57, "tr")(58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Paper Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Journal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "People");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, PublicationsComponent_tr_67_Template, 10, 5, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](68, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "br")(70, "br")(71, "div", 35)(72, "br")(73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 28)(75, "div", 29)(76, "h1", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Conferences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PublicationsComponent_Template_input_ngModelChange_78_listener($event) { return ctx.searchPublications = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 33)(82, "table")(83, "thead")(84, "tr")(85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Conference Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Conference");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "People");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](96, PublicationsComponent_tr_96_Template, 12, 6, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](97, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "br")(99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchJournals);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](68, 4, ctx.journalsData, ctx.searchJournals));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchPublications);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](97, 7, ctx.conferencesData, ctx.searchPublications));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\n*[_ngcontent-%COMP%]{\n  padding: 0; \n  margin: 0; \n  font-family: 'Poppins', sans-serif;\n}\n\nnav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 1000;\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: 'Poppins', sans-serif;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 15px;\n  color: #999999;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  line-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  padding: 6.5px;\n  transition: all 0.2s ease-in-out;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n.logo[_ngcontent-%COMP%] {\n  float: left;\n  padding-left: 20%;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 30%;\n}\n\n.responsive[_ngcontent-%COMP%] {\n    display: none;\n    font-size: 23px;\n  }\n\n.active[_ngcontent-%COMP%] {\n    color: #afafaf;\n  }\n\n.main-nav[_ngcontent-%COMP%] {\n    display: block !important;\n    position: relative;\n  }\n\n.navbar-expand-lg[_ngcontent-%COMP%]{\n    animation: fadeIn 0.75s;\n  }\n\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: 1; } \n  }\n\n#publications[_ngcontent-%COMP%]{\n    height: auto !important;\n  }\n\n#logo[_ngcontent-%COMP%]{\n  position: relative;\n  top: -20%; \n  left: 50%;\n  transform: translate(-50%, 20%); \n  margin-bottom: 10px;\n  animation: fill 0.5s ease forwards 2.5s; \n  z-index: 100;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(1){\n    stroke-dasharray:  294.2875061035156px;\n    stroke-dashoffset: 294.2875061035156px;\n    animation: line-anim 2s ease forwards; \n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2){\n    stroke-dasharray: 299.8020935058594px;\n    stroke-dashoffset: 299.8020935058594px;\n    animation: line-anim 2s ease forwards 0.08333s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3){\n    stroke-dasharray: 349.8691711425781px;\n    stroke-dashoffset: 349.8691711425781px;\n    animation: line-anim 2s ease forwards 0.16666666666s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4){\n    stroke-dasharray: 182.19998168945312px;\n    stroke-dashoffset: 182.19998168945312px;\n    animation: line-anim 2s ease forwards 0.3333s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5){\n    stroke-dasharray: 313.46636962890625px;\n    stroke-dashoffset: 313.46636962890625px;\n    animation: line-anim 2s ease forwards 0.4166666s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6){\n    stroke-dasharray: 333.52908325195312px;\n    stroke-dashoffset: 333.52908325195312px;\n    animation: line-anim 2s ease forwards 0.5s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(7){\n    stroke-dasharray:   260.28506469726562px;\n    stroke-dashoffset:  260.28506469726562px;\n    animation: line-anim 2s ease forwards 0.5833333s; \n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(8){\n    stroke-dasharray: 442.1668395996094px;\n    stroke-dashoffset: 442.1668395996094px;\n    animation: line-anim 2s ease forwards 0.6666666s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(9){\n    stroke-dasharray: 313.4666748046875px;\n    stroke-dashoffset: 313.4666748046875px;\n    animation: line-anim 2s ease forwards 0.75s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(10){\n    stroke-dasharray: 264.819091796875px;\n    stroke-dashoffset: 264.819091796875px;\n    animation: line-anim 2s ease forwards 0.8333333s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(11){\n    stroke-dasharray: 299.34197998046875px;\n    stroke-dashoffset: 299.34197998046875px;\n    animation: line-anim 2s ease forwards 0.91666s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(12){\n    stroke-dasharray: 289.90960693359375px;\n    stroke-dashoffset: 289.90960693359375px;\n    animation: line-anim 2s ease forwards 1s;\n  }\n\n@keyframes line-anim {\n    to{\n      stroke-dashoffset: 0px;\n    }\n  \n}\n\n@keyframes fill {\n  from{\n    fill: transparent;\n  }\n  to{\n    fill:black; \n  }\n}\n\n.title[_ngcontent-%COMP%]{\n  font-size: 30px;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-bottom: 3px solid #b8a07e;\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.search-button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 16px;\n  background-color: #b8a07e;\n  color: #FFF;\n  border: none;\n  cursor: pointer;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.publications[_ngcontent-%COMP%] {\n  max-height: 500px;\n  width: 100%;\n  overflow-y: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-align: center;\n  border-bottom: 1px solid #b8a07e;\n}\n\na[_ngcontent-%COMP%]{\n  color: black;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\n.line[_ngcontent-%COMP%]{\n  height: 2px;\n  width: 40%;\n  margin: 0 auto; \n  background-color: #b8a07e;\n}\n\n@media only screen \n  and  (min-width: 320px) and (max-width: 420px){\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n    \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 25%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 15px;\n    }\n    \n  #logo[_ngcontent-%COMP%]{\n    width: 70%;\n   }\n   .search-input[_ngcontent-%COMP%]{\n    width: 80%;\n    margin-top: 5%; \n    margin-bottom: 5%; \n    border-radius: 5%;\n    border: 5px solid #b8a07e;\n   }\n   .search-button[_ngcontent-%COMP%]{\n    margin-left: 4%;\n   }\n\n   .search-container[_ngcontent-%COMP%]{\n    display: block;\n   }\n\n}\n\n@media only screen \nand  (min-width: 421px) and (max-width: 520px){\n\n  .logo[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 120%;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 25%;\n    text-align: center;\n    margin: 0 auto;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 15px;\n  }\n  #logo[_ngcontent-%COMP%]{\n    width: 70%;\n   }\n   .search-input[_ngcontent-%COMP%]{\n    width: 80%;\n    margin-top: 5%; \n    margin-bottom: 5%; \n    border-radius: 5%;\n    border: 5px solid #b8a07e;\n   }\n   .search-button[_ngcontent-%COMP%]{\n    margin-left: 4%;\n   }\n\n   .search-container[_ngcontent-%COMP%]{\n    display: block;\n   }    \n  \n}\n\n@media only screen \nand  (min-width: 521px) and (max-width: 620px){\n\n  .logo[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 120%; \n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 20%;\n    text-align: center;\n    margin: 0 auto;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 15px;\n  }\n  #logo[_ngcontent-%COMP%]{\n    width: 70%;\n   }\n  \n}\n\n@media only screen \nand  (min-width: 621px) and (max-width: 820px){\n  .logo[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 120%;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 25%;\n    text-align: center;\n    margin: 0 auto;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 20px;\n  }\n  #logo[_ngcontent-%COMP%]{\n    width: 70%;\n   }\n}\n\n@media only screen \nand  (min-width: 821px) and (max-width: 920px){\n\n  .logo[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 125%;\n  \n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 10%;\n    text-align: center;\n    margin: 0 auto;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 20px;\n    margin: 0 auto;\n  }\n  #logo[_ngcontent-%COMP%]{\n    width: 70%;\n   }  \n}\n\n@media only screen \nand  (min-width: 921px) and (max-width: 1320px){\n  .logo[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 125%;\n  \n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 10%;\n    text-align: center;\n    margin: 0 auto;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 20px;\n    margin: 0 auto;\n  }\n  #logo[_ngcontent-%COMP%]{\n    width: 70%;\n   }  \n}\n\n@media only screen \nand  (min-width: 1321px) and (max-width: 1520px){\n  .logo[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: 125%;\n  \n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 10%;\n    text-align: center;\n    margin: 0 auto;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 20px;\n    margin: 0 auto;\n  }\n  #logo[_ngcontent-%COMP%]{\n    width: 70%;\n   }  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTs7QUFFNUU7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGtDQUFrQztBQUNwQzs7QUFHQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVFO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7QUFHQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLEtBQUssVUFBVSxFQUFFO0lBQ2pCLE9BQU8sVUFBVSxFQUFFO0VBQ3JCOztBQUlBO0lBQ0UsdUJBQXVCO0VBQ3pCOztBQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsWUFB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bUI7SUFDbkIsV0FBVzs7RUFFYjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFVBQVU7R0FDWDtBQUNIIiwiZmlsZSI6InB1YmxpY2F0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcblxuKntcbiAgcGFkZGluZzogMDsgXG4gIG1hcmdpbjogMDsgXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG59XG5cblxubmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG4ubmF2LW1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbm5hdiB1bCBsaSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG59XG5cbm5hdiB1bCBsaTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG5uYXYgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmc6IDYuNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cblxubmF2IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cblxuLmxvZ28ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XG59XG5cbi5sb2dvIGltZyB7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMzAlO1xufVxuXG4gIC5yZXNwb25zaXZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgfVxuICBcbiAgLmFjdGl2ZSB7XG4gICAgY29sb3I6ICNhZmFmYWY7XG4gIH1cbiAgXG4gIC5tYWluLW5hdiB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIFxuICAubmF2YmFyLWV4cGFuZC1sZ3tcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjc1cztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9IFxuICB9XG5cblxuXG4gICNwdWJsaWNhdGlvbnN7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4jbG9nb3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMCU7IFxuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwJSk7IFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBhbmltYXRpb246IGZpbGwgMC41cyBlYXNlIGZvcndhcmRzIDIuNXM7IFxuICB6LWluZGV4OiAxMDA7XG59XG5cbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDEpe1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6ICAyOTQuMjg3NTA2MTAzNTE1NnB4O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyOTQuMjg3NTA2MTAzNTE1NnB4O1xuICAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHM7IFxuICB9XG4gIFxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCgyKXtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyOTkuODAyMDkzNTA1ODU5NHB4O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyOTkuODAyMDkzNTA1ODU5NHB4O1xuICAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC4wODMzM3M7XG4gIH1cbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoMyl7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMzQ5Ljg2OTE3MTE0MjU3ODFweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMzQ5Ljg2OTE3MTE0MjU3ODFweDtcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuMTY2NjY2NjY2NjZzO1xuICB9XG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDQpe1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE4Mi4xOTk5ODE2ODk0NTMxMnB4O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxODIuMTk5OTgxNjg5NDUzMTJweDtcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuMzMzM3M7XG4gIH1cbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoNSl7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMzEzLjQ2NjM2OTYyODkwNjI1cHg7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMxMy40NjYzNjk2Mjg5MDYyNXB4O1xuICAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC40MTY2NjY2cztcbiAgfVxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCg2KXtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAzMzMuNTI5MDgzMjUxOTUzMTJweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMzMzLjUyOTA4MzI1MTk1MzEycHg7XG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjVzO1xuICB9XG4gIFxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCg3KXtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAgIDI2MC4yODUwNjQ2OTcyNjU2MnB4O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAgMjYwLjI4NTA2NDY5NzI2NTYycHg7XG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjU4MzMzMzNzOyBcbiAgfVxuICBcbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoOCl7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNDQyLjE2NjgzOTU5OTYwOTRweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNDQyLjE2NjgzOTU5OTYwOTRweDtcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuNjY2NjY2NnM7XG4gIH1cbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoOSl7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMzEzLjQ2NjY3NDgwNDY4NzVweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMzEzLjQ2NjY3NDgwNDY4NzVweDtcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuNzVzO1xuICB9XG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDEwKXtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyNjQuODE5MDkxNzk2ODc1cHg7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI2NC44MTkwOTE3OTY4NzVweDtcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuODMzMzMzM3M7XG4gIH1cbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoMTEpe1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDI5OS4zNDE5Nzk5ODA0Njg3NXB4O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyOTkuMzQxOTc5OTgwNDY4NzVweDtcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuOTE2NjZzO1xuICB9XG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDEyKXtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyODkuOTA5NjA2OTMzNTkzNzVweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjg5LjkwOTYwNjkzMzU5Mzc1cHg7XG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAxcztcbiAgfVxuICBcblxuXG5Aa2V5ZnJhbWVzIGxpbmUtYW5pbSB7XG4gICAgdG97XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMHB4O1xuICAgIH1cbiAgXG59XG5Aa2V5ZnJhbWVzIGZpbGwge1xuICBmcm9te1xuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICB9XG4gIHRve1xuICAgIGZpbGw6YmxhY2s7IFxuICB9XG59XG4udGl0bGV7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5zZWFyY2gtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYjhhMDdlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnNlYXJjaC1idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YTA3ZTtcbiAgY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5wdWJsaWNhdGlvbnMge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxudGgsIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I4YTA3ZTtcbn1cbmF7XG4gIGNvbG9yOiBibGFjaztcbn1cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cbi5saW5le1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luOiAwIGF1dG87IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhhMDdlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gXG4gIGFuZCAgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCl7XG4gICAgLmxvZ28ge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuICAgIC5uYXYtbWVudSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICB9XG4gICAgbmF2IHVsIGxpIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgbmF2IHVsIGxpIGF7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIFxuICAjbG9nb3tcbiAgICB3aWR0aDogNzAlO1xuICAgfVxuICAgLnNlYXJjaC1pbnB1dHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi10b3A6IDUlOyBcbiAgICBtYXJnaW4tYm90dG9tOiA1JTsgXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI2I4YTA3ZTtcbiAgIH1cbiAgIC5zZWFyY2gtYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgIH1cblxuICAgLnNlYXJjaC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICB9XG5cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gXG5hbmQgIChtaW4td2lkdGg6IDQyMXB4KSBhbmQgKG1heC13aWR0aDogNTIwcHgpe1xuXG4gIC5sb2dvIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAubmF2LW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMjAlO1xuICB9XG4gIG5hdiB1bCBsaSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIG5hdiB1bCBsaSBhe1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAjbG9nb3tcbiAgICB3aWR0aDogNzAlO1xuICAgfVxuICAgLnNlYXJjaC1pbnB1dHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi10b3A6IDUlOyBcbiAgICBtYXJnaW4tYm90dG9tOiA1JTsgXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI2I4YTA3ZTtcbiAgIH1cbiAgIC5zZWFyY2gtYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgIH1cblxuICAgLnNlYXJjaC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICB9ICAgIFxuICBcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gXG5hbmQgIChtaW4td2lkdGg6IDUyMXB4KSBhbmQgKG1heC13aWR0aDogNjIwcHgpe1xuXG4gIC5sb2dvIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAubmF2LW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMjAlOyBcbiAgfVxuICBuYXYgdWwgbGkge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMjAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBuYXYgdWwgbGkgYXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgI2xvZ297XG4gICAgd2lkdGg6IDcwJTtcbiAgIH1cbiAgXG59XG5cbiBcbkBtZWRpYSBvbmx5IHNjcmVlbiBcbmFuZCAgKG1pbi13aWR0aDogNjIxcHgpIGFuZCAobWF4LXdpZHRoOiA4MjBweCl7XG4gIC5sb2dvIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAubmF2LW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMjAlO1xuICB9XG4gIG5hdiB1bCBsaSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIG5hdiB1bCBsaSBhe1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAjbG9nb3tcbiAgICB3aWR0aDogNzAlO1xuICAgfVxufVxuXG5cbiAgICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBcbmFuZCAgKG1pbi13aWR0aDogODIxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCl7XG5cbiAgLmxvZ28ge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5uYXYtbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEyNSU7XG4gIFxuICB9XG4gIG5hdiB1bCBsaSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIG5hdiB1bCBsaSBhe1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAjbG9nb3tcbiAgICB3aWR0aDogNzAlO1xuICAgfSAgXG59XG5cbiBcbkBtZWRpYSBvbmx5IHNjcmVlbiBcbmFuZCAgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMzIwcHgpe1xuICAubG9nbyB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLm5hdi1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTI1JTtcbiAgXG4gIH1cbiAgbmF2IHVsIGxpIHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgbmF2IHVsIGxpIGF7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gICNsb2dve1xuICAgIHdpZHRoOiA3MCU7XG4gICB9ICBcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIFxuYW5kICAobWluLXdpZHRoOiAxMzIxcHgpIGFuZCAobWF4LXdpZHRoOiAxNTIwcHgpe1xuICAubG9nbyB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLm5hdi1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTI1JTtcbiAgXG4gIH1cbiAgbmF2IHVsIGxpIHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgbmF2IHVsIGxpIGF7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gICNsb2dve1xuICAgIHdpZHRoOiA3MCU7XG4gICB9ICBcbn0iXX0= */"] });


/***/ }),

/***/ 4818:
/*!************************************************!*\
  !*** ./src/app/research/research.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResearchComponent": () => (/* binding */ ResearchComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search.pipe */ 9175);







function ResearchComponent_div_61_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 42);
} if (rf & 2) {
    const research_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", research_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ResearchComponent_div_61_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResearchComponent_div_61_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ind_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.readMore(ind_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Read more");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResearchComponent_div_61_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ResearchComponent_div_61_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ind_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.readLess(ind_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Read Less");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ResearchComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ResearchComponent_div_61_img_1_Template, 1, 1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ResearchComponent_div_61_button_8_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ResearchComponent_div_61_button_9_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const research_r1 = ctx.$implicit;
    const ind_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", research_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](research_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.readMoreList[ind_r2] == false ? "project-description" : "project-description-full");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](research_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.readMoreList[ind_r2] == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.readMoreList[ind_r2] == true);
} }
class ResearchComponent {
    constructor(databaseService, afStorage) {
        this.databaseService = databaseService;
        this.afStorage = afStorage;
        this.images = [];
        this.readMoreList = [];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.databaseService.getData("research/research").then((res) => {
                this.researchData = res;
                this.researchData = this.researchData.flat();
            });
            this.putImageList();
        });
    }
    putImageList() {
        for (let i = 0; i < this.researchData.length; i++) {
            this.readMoreList.push(false);
            if (this.researchData[i].title == "ASEEC") {
                this.researchIntro = this.researchData[i];
                this.researchData.splice(i, 1);
            }
            if (this.researchData[i].img_name != "" || this.researchData[i].img_name != null) {
                this.storageRef = this.afStorage.ref("research/" + this.researchData[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.researchData[i].url = url;
                });
            }
        }
        console.log(this.researchData);
        console.log(this.readMoreList);
    }
    readMore(ind) {
        this.readMoreList[ind] = true;
    }
    readLess(ind) {
        this.readMoreList[ind] = false;
    }
}
ResearchComponent.ɵfac = function ResearchComponent_Factory(t) { return new (t || ResearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_4__.AngularFireStorage)); };
ResearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResearchComponent, selectors: [["app-research"]], decls: 63, vars: 8, consts: [[1, "main-nav", "navbar-expand-lg"], [1, "row"], [2, "padding-right", "20%"], [1, "logo"], ["href", "index.html"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", "alt", "logo"], [1, "nav-menu", "list-unstyled"], ["href", "#home", 1, "smooth-scroll"], ["href", "#about", 1, "smooth-scroll"], ["href", "/awards", 1, "smooth-scroll"], ["href", "/publications", 1, "smooth-scroll"], ["href", "/research", 1, "smooth-scroll"], ["href", "/students", 1, "smooth-scroll"], ["href", "/cv", 1, "smooth-scroll"], ["id", "research"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"], ["width", "400", "height", "66", "viewBox", "0 0 400 66", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "id", "logo"], ["d", "M31.64 62.2L19.96 41H16.68V62.2H3V6.04H25.96C30.3867 6.04 34.1467 6.81333 37.24 8.36C40.3867 9.90666 42.7333 12.04 44.28 14.76C45.8267 17.4267 46.6 20.4133 46.6 23.72C46.6 27.4533 45.5333 30.7867 43.4 33.72C41.32 36.6533 38.2267 38.7333 34.12 39.96L47.08 62.2H31.64ZM16.68 31.32H25.16C27.6667 31.32 29.5333 30.7067 30.76 29.48C32.04 28.2533 32.68 26.52 32.68 24.28C32.68 22.1467 32.04 20.4667 30.76 19.24C29.5333 18.0133 27.6667 17.4 25.16 17.4H16.68V31.32Z", "stroke", "black", "stroke-width", "5"], ["d", "M98.8 39.16C98.8 40.44 98.72 41.7733 98.56 43.16H67.6C67.8133 45.9333 68.6933 48.0667 70.24 49.56C71.84 51 73.7792 52.7 76.0725 52.7C79.4858 52.7 81.7392 53.08 83.0725 50.2C85.9155 50.2 87.7295 50.2 90.5725 50.2C93.4155 50.2 94.2295 50.2 97.0725 50.2C96.3258 53.1333 96.0458 53.3533 94.0725 55.7C92.1525 58.0467 89.3333 59.5067 86.4 60.84C83.4667 62.1733 80.1867 62.84 76.56 62.84C72.1867 62.84 68.2933 61.9067 64.88 60.04C61.4667 58.1733 58.8 55.5067 56.88 52.04C54.96 48.5733 54 44.52 54 39.88C54 35.24 54.9333 31.1867 56.8 27.72C58.72 24.2533 61.3867 21.5867 64.8 19.72C68.2133 17.8533 72.1333 16.92 76.56 16.92C80.88 16.92 84.72 17.8267 88.08 19.64C91.44 21.4533 94.0533 24.04 95.92 27.4C97.84 30.76 98.8 34.68 98.8 39.16ZM84.8 35.56C84.8 33.2133 84 31.3467 82.4 29.96C80.8 28.5733 78.8 27.88 76.4 27.88C74.1067 27.88 72.16 28.5467 70.56 29.88C69.0133 31.2133 68.0533 33.1067 67.68 35.56H84.8Z", "stroke", "black", "stroke-width", "5"], ["d", "M126.631 62.2C122.737 62.2 119.271 61.5333 116.231 60.2C113.191 58.8667 110.791 57.0533 109.031 54.76C107.271 52.4133 106.284 49.8 106.071 46.92H119.591C119.751 48.4667 120.471 49.72 121.751 50.68C123.031 51.64 124.604 52.12 126.471 52.12C128.177 52.12 129.484 51.8 130.391 51.16C131.351 50.4667 131.831 49.5867 131.831 48.52C131.831 47.24 131.164 46.3067 129.831 45.72C128.497 45.08 126.337 44.3867 123.351 43.64C120.151 42.8933 117.484 42.12 115.351 41.32C113.217 40.4667 111.377 39.16 109.831 37.4C108.284 35.5867 107.511 33.16 107.511 30.12C107.511 27.56 108.204 25.24 109.591 23.16C111.031 21.0267 113.111 19.3467 115.831 18.12C118.604 16.8933 121.884 16.28 125.671 16.28C131.271 16.28 135.671 17.6667 138.871 20.44C142.124 23.2133 143.991 26.8933 144.471 31.48H131.831C131.617 29.9333 130.924 28.7067 129.751 27.8C128.631 26.8933 127.137 26.44 125.271 26.44C123.671 26.44 122.444 26.76 121.591 27.4C120.737 27.9867 120.311 28.8133 120.311 29.88C120.311 31.16 120.977 32.12 122.311 32.76C123.697 33.4 125.831 34.04 128.711 34.68C132.017 35.5333 134.711 36.3867 136.791 37.24C138.871 38.04 140.684 39.3733 142.231 41.24C143.831 43.0533 144.657 45.5067 144.711 48.6C144.711 51.2133 143.964 53.56 142.471 55.64C141.031 57.6667 138.924 59.2667 136.151 60.44C133.431 61.6133 130.257 62.2 126.631 62.2Z", "stroke", "black", "stroke-width", "5"], ["d", "M206 39.8C206 35.2133 206.853 31.1867 208.56 27.72C210.32 24.2533 212.693 21.5867 215.68 19.72C218.667 17.8533 222 16.92 225.68 16.92C228.827 16.92 231.573 17.56 233.92 18.84C236.32 20.12 238.16 21.8 239.44 23.88V17.56H253.12V62.2H239.44V55.88C238.107 57.96 236.24 59.64 233.84 60.92C231.493 62.2 228.747 62.84 225.6 62.84C221.973 62.84 218.667 61.9067 215.68 60.04C212.693 58.12 210.32 55.4267 208.56 51.96C206.853 48.44 206 44.3867 206 39.8ZM239.44 39.88C239.44 36.4667 238.48 33.7733 236.56 31.8C234.693 29.8267 232.4 28.84 229.68 28.84C226.96 28.84 224.64 29.8267 222.72 31.8C220.853 33.72 219.92 36.3867 219.92 39.8C219.92 43.2133 220.853 45.9333 222.72 47.96C224.64 49.9333 226.96 50.92 229.68 50.92C232.4 50.92 234.693 49.9333 236.56 47.96C238.48 45.9867 239.44 43.2933 239.44 39.88Z", "stroke", "black", "stroke-width", "5"], ["d", "M277.18 25C278.78 22.5467 280.78 20.6267 283.18 19.24C285.58 17.8 288.247 17.08 291.18 17.08V31.56H287.42C284.007 31.56 281.447 32.3067 279.74 33.8C278.033 35.24 277.18 37.8 277.18 41.48V62.2H263.5V17.56H277.18V25Z", "stroke", "black", "stroke-width", "5"], ["d", "M298.442 39.88C298.442 35.24 299.376 31.1867 301.242 27.72C303.162 24.2533 305.802 21.5867 309.162 19.72C312.576 17.8533 316.469 16.92 320.842 16.92C326.442 16.92 331.109 18.3867 334.842 21.32C338.629 24.2533 341.109 28.3867 342.283 33.72H327.722C326.496 30.3067 324.122 28.6 320.602 28.6C318.096 28.6 316.096 29.5867 314.602 31.56C313.109 33.48 312.362 36.2533 312.362 39.88C312.362 43.5067 313.109 46.3067 314.602 48.28C316.096 50.2 318.096 51.16 320.602 51.16C324.122 51.16 326.496 49.4533 327.722 46.04H342.283C341.109 51.2667 338.629 55.3733 334.842 58.36C331.056 61.3467 326.389 62.84 320.842 62.84C316.469 62.84 312.576 61.9067 309.162 60.04C305.802 58.1733 303.162 55.5067 301.242 52.04C299.376 48.5733 298.442 44.52 298.442 39.88Z", "stroke", "black", "stroke-width", "5"], ["d", "M380.54 17.08C385.66 17.08 389.767 18.7867 392.86 22.2C395.953 25.56 397.5 30.2 397.5 36.12V62.2H383.9V37.96C383.9 34.9733 383.127 32.6533 381.58 31C380.033 29.3467 377.953 28.52 375.34 28.52C372.727 28.52 370.647 29.3467 369.1 31C367.553 32.6533 366.78 34.9733 366.78 37.96V62.2H353.1V3H366.78V23.56C368.167 21.5867 370.06 20.0133 372.46 18.84C374.86 17.6667 377.553 17.08 380.54 17.08Z", "stroke", "black", "stroke-width", "5"], ["d", "M197.096 38.52C197.096 39.8 197.016 41.1333 196.856 42.52H165.896C166.11 45.2933 166.99 47.4267 168.536 48.92C170.136 50.36 172.075 52.06 174.369 52.06C177.782 52.06 180.035 52.44 181.369 49.56C184.212 49.56 186.026 49.56 188.869 49.56C191.712 49.56 192.526 49.56 195.369 49.56C194.622 52.4933 194.342 52.7133 192.369 55.06C190.449 57.4067 187.63 58.8667 184.696 60.2C181.763 61.5333 178.483 62.2 174.856 62.2C170.483 62.2 166.59 61.2667 163.176 59.4C159.763 57.5333 157.096 54.8667 155.176 51.4C153.256 47.9333 152.296 43.88 152.296 39.24C152.296 34.6 153.23 30.5467 155.096 27.08C157.016 23.6133 159.683 20.9467 163.096 19.08C166.51 17.2133 170.43 16.28 174.856 16.28C179.176 16.28 183.016 17.1867 186.376 19C189.736 20.8133 192.35 23.4 194.216 26.76C196.136 30.12 197.096 34.04 197.096 38.52ZM183.096 34.92C183.096 32.5733 182.296 30.7067 180.696 29.32C179.096 27.9333 177.096 27.24 174.696 27.24C172.403 27.24 170.456 27.9067 168.856 29.24C167.31 30.5733 166.35 32.4667 165.976 34.92H183.096Z", "stroke", "black", "stroke-width", "5"], [1, "assec-div"], [1, "aseec", 2, "font-weight", "bold"], [1, "aseec-img", 3, "src"], [1, "about-asec", 2, "color", "black"], [1, "line"], [1, "searchTitle"], [1, "search-container"], ["type", "text", "placeholder", "Search...", 3, "ngModel", "ngModelChange"], ["type", "submit"], [1, "fa", "fa-search"], [1, "project-container"], ["class", "project-card", 4, "ngFor", "ngForOf"], [1, "project-card"], ["class", "project-image", "alt", "Research Project 1", 3, "src", 4, "ngIf"], [1, "project-title"], [3, "ngClass"], ["class", "project-read-more", 3, "click", 4, "ngIf"], ["alt", "Research Project 1", 1, "project-image", 3, "src"], [1, "project-read-more", 3, "click"]], template: function ResearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header")(1, "nav", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 6)(8, "li")(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li")(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li")(21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li")(24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li")(27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Consulting/CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "svg", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "path", 17)(33, "path", 18)(34, "path", 19)(35, "path", 20)(36, "path", 21)(37, "path", 22)(38, "path", 23)(39, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 25)(41, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "br")(47, "br")(48, "div", 29)(49, "br")(50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "h1", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Search Research ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 31)(55, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ResearchComponent_Template_input_ngModelChange_55_listener($event) { return ctx.searchResearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "br")(59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, ResearchComponent_div_61_Template, 10, 6, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.researchIntro.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.researchIntro.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.researchIntro.content, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchResearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](62, 5, ctx.researchData, ctx.searchResearch));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], pipes: [_search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\n*[_ngcontent-%COMP%]{\n  padding: 0; \n  margin: 0; \n}\n\nnav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 1000;\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: 'Poppins', sans-serif;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 15px;\n  color: #999999;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  line-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  padding: 6.5px;\n  transition: all 0.2s ease-in-out;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n\n}\n\n.logo[_ngcontent-%COMP%] {\n  float: left;\n  padding-left: 20%;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 30%;\n}\n\n.responsive[_ngcontent-%COMP%] {\n    display: none;\n    font-size: 23px;\n  }\n\n.active[_ngcontent-%COMP%] {\n    color: #afafaf;\n  }\n\n.main-nav[_ngcontent-%COMP%] {\n    display: block !important;\n    position: relative;\n  }\n\n.navbar-expand-lg[_ngcontent-%COMP%]{\n    animation: fadeIn 0.75s;\n  }\n\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: 1; } \n  }\n\n#research[_ngcontent-%COMP%]{\n    height: auto !important;\n  }\n\n#logo[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 15%; \n  left: 50%;\n  transform: translate(-50%, -15%); \n  margin-bottom: 10px;\n  animation: fill 0.5s ease forwards 2.5s; \n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(1){\n  stroke-dasharray: 289.62725830078125px;\n  stroke-dashoffset: 289.62725830078125px;\n  animation: line-anim 2s ease forwards; \n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2){\n  stroke-dasharray: 247.31051635742188px;\n  stroke-dashoffset: 247.31051635742188px;\n  animation: line-anim 2s ease forwards 0.1s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3){\n  stroke-dasharray: 231.9273223876953px;\n  stroke-dashoffset: 231.9273223876953px;\n  animation: line-anim 2s ease forwards 0.2s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4){\n  stroke-dasharray: 250.7732696533203px;\n  stroke-dashoffset: 250.7732696533203px;\n  animation: line-anim 2s ease forwards 0.3s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5){\n  stroke-dasharray: 151.71096801757812px;\n  stroke-dashoffset: 151.71096801757812px;\n  animation: line-anim 2s ease forwards 0.4s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6){\n  stroke-dasharray: 211.22018432617188px;\n  stroke-dashoffset: 211.22018432617188px;\n  animation: line-anim 2s ease forwards 0.5s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(7){\n    stroke-dasharray: 268.7515869140625px;\n    stroke-dashoffset: 268.7515869140625px;\n    animation: line-anim 2s ease forwards 0.5s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(8){\n    stroke-dasharray: 247.31068420410156px;\n    stroke-dashoffset: 247.31068420410156px;\n    animation: line-anim 2s ease forwards 0.5s;\n}\n\n@keyframes line-anim {\n    to{\n      stroke-dashoffset: 0px;\n    }\n  \n}\n\n@keyframes fill {\n  from{\n    fill: transparent;\n  }\n  to{\n    fill:black; \n  }\n}\n\n.container[_ngcontent-%COMP%]{\n    margin: 0 auto; \n    display: grid;\n    grid-template-columns:auto auto;\n    grid-column-gap: 10%;\n    column-gap: 10%;\n    grid-row-gap: 1%;\n    row-gap: 1%;\n    padding-bottom: 65%;\n}\n\n.image[_ngcontent-%COMP%]{\n  border-radius: 10%;\n  border: 2px solid #b8a07e;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: 5%;\n  margin-top: 5%;\n}\n\n.assec-div[_ngcontent-%COMP%]{\n  font-family: 'Poppins', sans-serif;\n    margin: 0 auto;\n    text-align: center;\n    width: 95%;\n    margin-top: 10%;\n}\n\n.aseec-image[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  border-radius: 20%;\n  border: 5px solid #b8a07e;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 20px;\n  background-color: #f1e4d7;\n  padding: 10px;\n  width: 60%;\n  margin: 0 auto;\n}\n\n.search-container[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background-color: transparent;\n  padding: 10px;\n  font-size: 16px;\n}\n\n.search-container[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  padding: 10px;\n  border-radius: 50%;\n}\n\n.search-container[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #8c765c;\n  font-size: 18px;\n  border: 2px solid #8c765c;\n  border-radius: 50%;\n  padding: 5px;\n}\n\n.project-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 50px;\n  padding-bottom: 5%;\n}\n\n.project-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  padding: 20px;\n  border-radius: 10px;\n  transition: border-color 0.3s ease-in-out;\n  border: 1px solid #b8a07e;\n}\n\n.project-card[_ngcontent-%COMP%]:hover {\n  border: 3px solid #b8a07e;\n}\n\n.project-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #b8a07e;\n  transition: border-color 0.3s ease-in-out;\n}\n\n.project-image[_ngcontent-%COMP%]:hover {\n  border: 2px solid #b8a07e;\n}\n\n.project-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n\n.project-description[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.5;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 5; \n}\n\n.project-more-text[_ngcontent-%COMP%] {\n  display: none; \n}\n\n.project-read-more[_ngcontent-%COMP%]{\n  background-color: #b8a07e;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease-in-out;\n}\n\n.project-read-more[_ngcontent-%COMP%]:hover{\n  background-color: #8c765c;\n}\n\n.line[_ngcontent-%COMP%]{\n  height: 2px;\n  width: 40%;\n  margin: 0 auto; \n  background-color: #b8a07e;\n}\n\n@media only screen \nand  (min-width: 320px) and (max-width: 420px){\n  .about-asec[_ngcontent-%COMP%]{\n    width: 100%;\n    margin: 0 auto;\n    text-align: center;\n  }\n  .logo[_ngcontent-%COMP%] {\n    float: none;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  \n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 25%;\n    text-align: center;\n    margin: 0 auto;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 15px;\n  }\n       \n  #logo[_ngcontent-%COMP%]{\n    width: 60%;\n    top: 22%; \n   }\n   #research[_ngcontent-%COMP%]{\n     padding-top: 25%; \n   }\n   .project-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 1fr);\n    grid-gap: 10px;\n  }\n  .search-container[_ngcontent-%COMP%]   button[type=\"submit\"][_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    padding: 15px;\n    font-size: 25px;\n    margin-left: 10px; \n  }\n}\n\n@media only screen \n  and  (min-width: 421px) and (max-width: 520px){\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 120%;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 25%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 15px;\n    }\n\n    .about-asec[_ngcontent-%COMP%]{\n      width: 100%;\n      margin: 0 auto;\n      text-align: center;\n    }\n    #logo[_ngcontent-%COMP%]{\n      width: 60%;\n      top: 30%; \n     }\n     #research[_ngcontent-%COMP%]{\n       padding-top: 25%; \n     }\n     .project-container[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(1, 1fr);\n      grid-gap: 10px;\n    }\n}\n\n@media only screen \n  and  (min-width: 521px) and (max-width: 620px){\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 120%; \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 20%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 15px;\n    }\n    .about-asec[_ngcontent-%COMP%]{\n      width: 100%;\n      margin: 0 auto;\n      text-align: center;\n    }\n    #logo[_ngcontent-%COMP%]{\n      width: 60%;\n      top: 30%; \n     }\n     #research[_ngcontent-%COMP%]{\n       padding-top: 25%; \n     }\n     .project-container[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(2, 1fr);\n      grid-gap: 10px;\n    }  \n  }\n\n@media only screen \n  and  (min-width: 621px) and (max-width: 820px){\n   \n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 120%;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 25%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n    }\n    .about-asec[_ngcontent-%COMP%]{\n      width: 100%;\n      margin: 0 auto;\n      text-align: center;\n    }\n    #logo[_ngcontent-%COMP%]{\n      width: 60%;\n      top: 30%; \n     }\n     #research[_ngcontent-%COMP%]{\n       padding-top: 10%; \n     }\n     .project-container[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(2, 1fr);\n      grid-gap: 20px;\n    }  \n         \n  }\n\n@media only screen \n  and  (min-width: 821px) and (max-width: 920px){\n\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 125%;\n    \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 10%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n      margin: 0 auto;\n    }\n    #logo[_ngcontent-%COMP%]{\n      width: 60%;\n      top: 20%; \n     }\n     #research[_ngcontent-%COMP%]{\n       padding-top: 10%; \n     }\n     .project-container[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(2, 1fr);\n      grid-gap: 20px;\n    } \n  }\n\n@media only screen \n  and  (min-width: 921px) and (max-width: 1320px){\n\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 125%;\n    \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 10%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n      margin: 0 auto;\n    } \n    \n    #logo[_ngcontent-%COMP%]{\n      width: 70%;\n      top: 25%; \n     }\n    \n     .project-container[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(3, 1fr);\n      grid-gap: 25px;\n    } \n        \n  }\n\n@media only screen \n  and  (min-width: 1321px) and (max-width: 1520px){\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 125%;\n    \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 10%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n      margin: 0 auto;\n    }\n    \n    #logo[_ngcontent-%COMP%]{\n      width: 70%;\n      top: 25%; \n     }\n    \n     .project-container[_ngcontent-%COMP%] {\n      grid-template-columns: repeat(3, 1fr);\n      grid-gap: 25px;\n    } \n        \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFOztBQUU1RTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZOztBQUVkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUU7SUFDRSxhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UsS0FBSyxVQUFVLEVBQUU7SUFDakIsT0FBTyxVQUFVLEVBQUU7RUFDckI7O0FBR0E7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHNDQUFzQztF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LFNBQVM7TUFDVCxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGVBQWU7TUFDZixjQUFjO0lBQ2hCOztJQUVBO01BQ0UsVUFBVTtNQUNWLFFBQVE7S0FDVDs7S0FFQTtNQUNDLHFDQUFxQztNQUNyQyxjQUFjO0lBQ2hCOztFQUVGIiwiZmlsZSI6InJlc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xuXG4qe1xuICBwYWRkaW5nOiAwOyBcbiAgbWFyZ2luOiAwOyBcbn1cblxuXG5uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogMTAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5uYXYtbWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxubmF2IHVsIGxpIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbn1cblxubmF2IHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbm5hdiB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZzogNi41cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5uYXYgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcblxufVxuXG4ubG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwJTtcbn1cblxuLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAzMCU7XG59XG4gXG4gIC5yZXNwb25zaXZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgfVxuICBcbiAgLmFjdGl2ZSB7XG4gICAgY29sb3I6ICNhZmFmYWY7XG4gIH1cbiAgXG4gIC5tYWluLW5hdiB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5uYXZiYXItZXhwYW5kLWxne1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNzVzO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IH0gXG4gIH1cbiAgXG5cbiAgI3Jlc2VhcmNoe1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIFxuI2xvZ297XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNSU7IFxuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xNSUpOyBcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYW5pbWF0aW9uOiBmaWxsIDAuNXMgZWFzZSBmb3J3YXJkcyAyLjVzOyBcbn1cblxuI2xvZ28gcGF0aDpudGgtY2hpbGQoMSl7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDI4OS42MjcyNTgzMDA3ODEyNXB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogMjg5LjYyNzI1ODMwMDc4MTI1cHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHM7IFxufVxuXG4jbG9nbyBwYXRoOm50aC1jaGlsZCgyKXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjQ3LjMxMDUxNjM1NzQyMTg4cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAyNDcuMzEwNTE2MzU3NDIxODhweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjFzO1xufVxuI2xvZ28gcGF0aDpudGgtY2hpbGQoMyl7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDIzMS45MjczMjIzODc2OTUzcHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAyMzEuOTI3MzIyMzg3Njk1M3B4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuMnM7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCg0KXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjUwLjc3MzI2OTY1MzMyMDNweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI1MC43NzMyNjk2NTMzMjAzcHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC4zcztcbn1cbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDUpe1xuICBzdHJva2UtZGFzaGFycmF5OiAxNTEuNzEwOTY4MDE3NTc4MTJweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE1MS43MTA5NjgwMTc1NzgxMnB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuNHM7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCg2KXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjExLjIyMDE4NDMyNjE3MTg4cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAyMTEuMjIwMTg0MzI2MTcxODhweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjVzO1xufVxuI2xvZ28gcGF0aDpudGgtY2hpbGQoNyl7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjY4Ljc1MTU4NjkxNDA2MjVweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjY4Ljc1MTU4NjkxNDA2MjVweDtcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuNXM7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCg4KXtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyNDcuMzEwNjg0MjA0MTAxNTZweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjQ3LjMxMDY4NDIwNDEwMTU2cHg7XG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjVzO1xufVxuXG5Aa2V5ZnJhbWVzIGxpbmUtYW5pbSB7XG4gICAgdG97XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMHB4O1xuICAgIH1cbiAgXG59XG5Aa2V5ZnJhbWVzIGZpbGwge1xuICBmcm9te1xuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICB9XG4gIHRve1xuICAgIGZpbGw6YmxhY2s7IFxuICB9XG59XG5cbi5jb250YWluZXJ7XG4gICAgbWFyZ2luOiAwIGF1dG87IFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gYXV0bztcbiAgICBjb2x1bW4tZ2FwOiAxMCU7XG4gICAgcm93LWdhcDogMSU7XG4gICAgcGFkZGluZy1ib3R0b206IDY1JTtcbn1cbi5pbWFnZXtcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjYjhhMDdlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5hc3NlYy1kaXZ7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uYXNlZWMtaW1hZ2Uge1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xuICBib3JkZXI6IDVweCBzb2xpZCAjYjhhMDdlO1xufVxuXG5cbi5zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZTRkNztcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSBpIHtcbiAgY29sb3I6ICM4Yzc2NWM7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzhjNzY1YztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtZ2FwOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNSU7XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4YTA3ZTtcbn1cblxuLnByb2plY3QtY2FyZDpob3ZlciB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNiOGEwN2U7XG59XG5cbi5wcm9qZWN0LWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4YTA3ZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4ucHJvamVjdC1pbWFnZTpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNiOGEwN2U7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7IC8qIFNob3cgb25seSAyIGxpbmVzIG9mIHRleHQgKi9cbn1cbi5wcm9qZWN0LW1vcmUtdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGUgdGhlIGFkZGl0aW9uYWwgdGV4dCBpbml0aWFsbHkgKi9cbn1cbi5wcm9qZWN0LXJlYWQtbW9yZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YTA3ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLnByb2plY3QtcmVhZC1tb3JlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM3NjVjO1xufVxuXG4ubGluZXtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiA0MCU7XG4gIG1hcmdpbjogMCBhdXRvOyBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YTA3ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIFxuYW5kICAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQyMHB4KXtcbiAgLmFib3V0LWFzZWN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5sb2dvIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgfVxuICAubmF2LW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgfVxuICBuYXYgdWwgbGkge1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMjUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBuYXYgdWwgbGkgYXtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgICAgICBcbiAgI2xvZ297XG4gICAgd2lkdGg6IDYwJTtcbiAgICB0b3A6IDIyJTsgXG4gICB9XG4gICAjcmVzZWFyY2h7XG4gICAgIHBhZGRpbmctdG9wOiAyNSU7IFxuICAgfVxuICAgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICB9XG4gIC5zZWFyY2gtY29udGFpbmVyIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIGl7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBcbiAgYW5kICAobWluLXdpZHRoOiA0MjFweCkgYW5kIChtYXgtd2lkdGg6IDUyMHB4KXtcbiAgICAubG9nbyB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLm5hdi1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEyMCU7XG4gICAgfVxuICAgIG5hdiB1bCBsaSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIG5hdiB1bCBsaSBhe1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgIC5hYm91dC1hc2Vje1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgI2xvZ297XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgdG9wOiAzMCU7IFxuICAgICB9XG4gICAgICNyZXNlYXJjaHtcbiAgICAgICBwYWRkaW5nLXRvcDogMjUlOyBcbiAgICAgfVxuICAgICAucHJvamVjdC1jb250YWluZXIge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIFxuICBhbmQgIChtaW4td2lkdGg6IDUyMXB4KSBhbmQgKG1heC13aWR0aDogNjIwcHgpe1xuICAgIC5sb2dvIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgICAubmF2LW1lbnUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTIwJTsgXG4gICAgfVxuICAgIG5hdiB1bCBsaSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMjAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIG5hdiB1bCBsaSBhe1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICAuYWJvdXQtYXNlY3tcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgICNsb2dve1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIHRvcDogMzAlOyBcbiAgICAgfVxuICAgICAjcmVzZWFyY2h7XG4gICAgICAgcGFkZGluZy10b3A6IDI1JTsgXG4gICAgIH1cbiAgICAgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICBncmlkLWdhcDogMTBweDtcbiAgICB9ICBcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBcbiAgYW5kICAobWluLXdpZHRoOiA2MjFweCkgYW5kIChtYXgtd2lkdGg6IDgyMHB4KXtcbiAgIFxuICAgIC5sb2dvIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgICAubmF2LW1lbnUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTIwJTtcbiAgICB9XG4gICAgbmF2IHVsIGxpIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgbmF2IHVsIGxpIGF7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5hYm91dC1hc2Vje1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgI2xvZ297XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgdG9wOiAzMCU7IFxuICAgICB9XG4gICAgICNyZXNlYXJjaHtcbiAgICAgICBwYWRkaW5nLXRvcDogMTAlOyBcbiAgICAgfVxuICAgICAucHJvamVjdC1jb250YWluZXIge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgIH0gIFxuICAgICAgICAgXG4gIH1cblxuICAgIFxuICBAbWVkaWEgb25seSBzY3JlZW4gXG4gIGFuZCAgKG1pbi13aWR0aDogODIxcHgpIGFuZCAobWF4LXdpZHRoOiA5MjBweCl7XG5cbiAgICAubG9nbyB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLm5hdi1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEyNSU7XG4gICAgXG4gICAgfVxuICAgIG5hdiB1bCBsaSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMTAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIG5hdiB1bCBsaSBhe1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgICNsb2dve1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIHRvcDogMjAlOyBcbiAgICAgfVxuICAgICAjcmVzZWFyY2h7XG4gICAgICAgcGFkZGluZy10b3A6IDEwJTsgXG4gICAgIH1cbiAgICAgLnByb2plY3QtY29udGFpbmVyIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICBncmlkLWdhcDogMjBweDtcbiAgICB9IFxuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIFxuICBhbmQgIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTMyMHB4KXtcblxuICAgIC5sb2dvIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgICAubmF2LW1lbnUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTI1JTtcbiAgICBcbiAgICB9XG4gICAgbmF2IHVsIGxpIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgbmF2IHVsIGxpIGF7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9IFxuICAgIFxuICAgICNsb2dve1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIHRvcDogMjUlOyBcbiAgICAgfVxuICAgIFxuICAgICAucHJvamVjdC1jb250YWluZXIge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgIGdyaWQtZ2FwOiAyNXB4O1xuICAgIH0gXG4gICAgICAgIFxuICB9XG5cbiAgIFxuICBAbWVkaWEgb25seSBzY3JlZW4gXG4gIGFuZCAgKG1pbi13aWR0aDogMTMyMXB4KSBhbmQgKG1heC13aWR0aDogMTUyMHB4KXtcbiAgICAubG9nbyB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLm5hdi1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEyNSU7XG4gICAgXG4gICAgfVxuICAgIG5hdiB1bCBsaSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMTAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIG5hdiB1bCBsaSBhe1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIFxuICAgICNsb2dve1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIHRvcDogMjUlOyBcbiAgICAgfVxuICAgIFxuICAgICAucHJvamVjdC1jb250YWluZXIge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICAgIGdyaWQtZ2FwOiAyNXB4O1xuICAgIH0gXG4gICAgICAgIFxuICB9Il19 */"] });


/***/ }),

/***/ 9175:
/*!********************************!*\
  !*** ./src/app/search.pipe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPipe": () => (/* binding */ SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SearchPipe {
    transform(value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter((item) => {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });


/***/ }),

/***/ 4382:
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);




class DatabaseService {
    constructor(db) {
        this.db = db;
    }
    getData(path) {
        return this.db.object(path).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1)).toPromise();
    }
    addAwardData(path, name, link, timespan, earnings, extra) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.db.object(path).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1)).toPromise().then((data) => {
                this.list = data;
            });
            this.list.unshift({ name: name, link: link, timespan: timespan, earnings: earnings, extra: extra });
            const ref = this.db.object(path);
            return ref.set(this.list);
        });
    }
    addJournalData(path, title, url, journal, authors) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.db.object(path).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1)).toPromise().then((data) => {
                this.list = data;
            });
            this.list.unshift({ authors: authors, url: url, journal: journal, title: title });
            const ref = this.db.object(path);
            return ref.set(this.list);
        });
    }
    addPublicationData(path, title, url, journal, authors, year) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.db.object(path).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1)).toPromise().then((data) => {
                this.list = data;
            });
            this.list.unshift({ authors: authors, url: url, journal: journal, title: title, year: year });
            const ref = this.db.object(path);
            return ref.set(this.list);
        });
    }
    remove(path) {
        const ref = this.db.object(path);
        return ref.remove();
    }
    addResearchData(path, content, img_name, title) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.db.object(path).valueChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.take)(1)).toPromise().then((data) => {
                this.list = data;
            });
            this.list.unshift({ content: content, img_name: img_name, title: title });
            const ref = this.db.object(path);
            return ref.set(this.list);
        });
    }
}
DatabaseService.ɵfac = function DatabaseService_Factory(t) { return new (t || DatabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_3__.AngularFireDatabase)); };
DatabaseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DatabaseService, factory: DatabaseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3157:
/*!************************************************!*\
  !*** ./src/app/students/students.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsComponent": () => (/* binding */ StudentsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function StudentsComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", peoples_r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](peoples_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](peoples_r6.research);
} }
function StudentsComponent_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", peoples_r7.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](peoples_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](peoples_r7.research);
} }
function StudentsComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](peoples_r8);
} }
function StudentsComponent_ng_container_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 32)(4, "div", 33)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", peoples_r9.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](peoples_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Current job: ", peoples_r9.job, "");
} }
function StudentsComponent_ng_container_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 32)(4, "div", 34)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", peoples_r10.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](peoples_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("PhD Thesis: ", peoples_r10.thesis, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](peoples_r10.job);
} }
function StudentsComponent_ng_container_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 32)(4, "div", 34)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", peoples_r11.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](peoples_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("PhD Thesis: ", peoples_r11.thesis, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](peoples_r11.job);
} }
class StudentsComponent {
    constructor(databaseService, afStorage) {
        this.databaseService = databaseService;
        this.afStorage = afStorage;
        this.director = [];
        this.masters = [];
        this.ms_alumni = [];
        this.phd_alumni = [];
        this.phds = [];
        this.post_doc_alumni = [];
        this.undergrad_alumni = [];
        this.undergraduates = [];
        this.images = [];
    }
    ngOnInit() {
        this.images = [];
        this.director = [];
        this.masters = [];
        this.ms_alumni = [];
        this.phd_alumni = [];
        this.phds = [];
        this.post_doc_alumni = [];
        this.undergrad_alumni = [];
        this.undergraduates = [];
        this.getData();
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.databaseService.getData('people').then((data) => {
                const result = Object.keys(data).map((key) => {
                    return { [key]: data[key] };
                });
                result.forEach(mobile => {
                    for (let key in mobile) {
                        for (let i = 0; i < Object.keys(mobile[key]).length; i++) {
                            if (`${key}` == "director") {
                                this.director.push(mobile[key][i]);
                            }
                            if (`${key}` == "masters") {
                                this.masters.push(mobile[key][i]);
                            }
                            if (`${key}` == "ms_alumni") {
                                this.ms_alumni.push(mobile[key][i]);
                            }
                            if (`${key}` == "phd_alumni") {
                                this.phd_alumni.push(mobile[key][i]);
                            }
                            if (`${key}` == "phds") {
                                this.phds.push(mobile[key][i]);
                            }
                            if (`${key}` == "post_doc_alumni") {
                                this.post_doc_alumni.push(mobile[key][i]);
                            }
                            if (`${key}` == "undergrad_alumni") {
                                this.undergrad_alumni.push(mobile[key][i]);
                            }
                            if (`${key}` == "undergraduates") {
                                this.undergraduates.push(mobile[key][i]);
                            }
                        }
                    }
                });
            });
            this.putImageList();
        });
    }
    putImageList() {
        for (let i = 0; i < this.masters.length; i++) {
            if (this.masters[i].img_name != "" || this.masters[i].img_name != null) {
                this.storageRef = this.afStorage.ref("students/" + this.masters[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.masters[i].url = url;
                });
            }
        }
        for (let i = 0; i < this.ms_alumni.length; i++) {
            if (this.ms_alumni[i].img_name != "" || this.ms_alumni[i].img_name != undefined) {
                this.storageRef = this.afStorage.ref("students/" + this.ms_alumni[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.ms_alumni[i].url = url;
                });
            }
        }
        for (let i = 0; i < this.phd_alumni.length; i++) {
            if (this.phd_alumni[i].img_name != "" || this.phd_alumni[i].img_name != null) {
                this.storageRef = this.afStorage.ref("students/" + this.phd_alumni[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.phd_alumni[i].url = url;
                });
            }
        }
        for (let i = 0; i < this.phds.length; i++) {
            if (this.phds[i].img_name != "" || this.phds[i].img_name != null) {
                this.storageRef = this.afStorage.ref("students/" + this.phds[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.phds[i].url = url;
                });
            }
        }
        for (let i = 0; i < this.post_doc_alumni.length; i++) {
            if (this.post_doc_alumni[i].img_name != "" || this.post_doc_alumni[i].img_name != null) {
                this.storageRef = this.afStorage.ref("students/" + this.post_doc_alumni[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.post_doc_alumni[i].url = url;
                });
            }
        }
        for (let i = 0; i < this.undergrad_alumni.length; i++) {
            if (this.undergrad_alumni[i].img_name != "" || this.undergrad_alumni[i].img_name != null) {
                this.storageRef = this.afStorage.ref("students/" + this.undergrad_alumni[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.undergrad_alumni[i].url = url;
                });
            }
        }
        for (let i = 0; i < this.undergraduates.length; i++) {
            if (this.undergraduates[i].img_name != "" || this.undergraduates[i].img_name != null) {
                this.storageRef = this.afStorage.ref("students/" + this.undergraduates[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.undergraduates[i].url = url;
                });
            }
        }
    }
}
StudentsComponent.ɵfac = function StudentsComponent_Factory(t) { return new (t || StudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_3__.AngularFireStorage)); };
StudentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StudentsComponent, selectors: [["app-students"]], decls: 77, vars: 6, consts: [[1, "main-nav", "navbar-expand-lg"], [1, "row"], [2, "padding-right", "20%"], [1, "logo"], ["href", "index.html"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", "alt", "logo"], [1, "nav-menu", "list-unstyled"], ["href", "#home", 1, "smooth-scroll"], ["href", "#about", 1, "smooth-scroll"], ["href", "/awards", 1, "smooth-scroll"], ["href", "/publications", 1, "smooth-scroll"], ["href", "/research", 1, "smooth-scroll"], ["href", "/students", 1, "smooth-scroll"], ["href", "/cv", 1, "smooth-scroll"], ["id", "student"], ["id", "logo", "width", "651", "height", "118", "viewBox", "0 0 651 118", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M38.7 115.05C31.8 115.05 25.6 113.85 20.1 111.45C14.7 108.95 10.45 105.55 7.34999 101.25C4.24999 96.85 2.64999 91.8 2.54999 86.1H17.1C17.6 91 19.6 95.15 23.1 98.55C26.7 101.85 31.9 103.5 38.7 103.5C45.2 103.5 50.3 101.9 54 98.7C57.8 95.4 59.7 91.2 59.7 86.1C59.7 82.1 58.6 78.85 56.4 76.35C54.2 73.85 51.45 71.95 48.15 70.65C44.85 69.35 40.4 67.95 34.8 66.45C27.9 64.65 22.35 62.85 18.15 61.05C14.05 59.25 10.5 56.45 7.49999 52.65C4.59999 48.75 3.14999 43.55 3.14999 37.05C3.14999 31.35 4.59999 26.3 7.49999 21.9C10.4 17.5 14.45 14.1 19.65 11.7C24.95 9.29999 31 8.09999 37.8 8.09999C47.6 8.09999 55.6 10.55 61.8 15.45C68.1 20.35 71.65 26.85 72.45 34.95H57.45C56.95 30.95 54.85 27.45 51.15 24.45C47.45 21.35 42.55 19.8 36.45 19.8C30.75 19.8 26.1 21.3 22.5 24.3C18.9 27.2 17.1 31.3 17.1 36.6C17.1 40.4 18.15 43.5 20.25 45.9C22.45 48.3 25.1 50.15 28.2 51.45C31.4 52.65 35.85 54.05 41.55 55.65C48.45 57.55 54 59.45 58.2 61.35C62.4 63.15 66 66 69 69.9C72 73.7 73.5 78.9 73.5 85.5C73.5 90.6 72.15 95.4 69.45 99.9C66.75 104.4 62.75 108.05 57.45 110.85C52.15 113.65 45.9 115.05 38.7 115.05Z", "stroke", "black", "stroke-width", "5"], ["d", "M110.237 43.05V91.5C110.237 95.5 111.087 98.35 112.787 100.05C114.487 101.65 117.437 102.45 121.637 102.45H131.687V114H119.387C111.787 114 106.087 112.25 102.287 108.75C98.4871 105.25 96.5871 99.5 96.5871 91.5V43.05H85.9371V31.8H96.5871V11.1H110.237V31.8H131.687V43.05H110.237Z", "stroke", "black", "stroke-width", "5"], ["d", "M221.126 31.8V114H207.476V101.85C204.876 106.05 201.226 109.35 196.526 111.75C191.926 114.05 186.826 115.2 181.226 115.2C174.826 115.2 169.076 113.9 163.976 111.3C158.876 108.6 154.826 104.6 151.826 99.3C148.926 94 147.476 87.55 147.476 79.95V31.8H160.976V78.15C160.976 86.25 163.026 92.5 167.126 96.9C171.226 101.2 176.826 103.35 183.926 103.35C191.226 103.35 196.976 101.1 201.176 96.6C205.376 92.1 207.476 85.55 207.476 76.95V31.8H221.126Z", "stroke", "black", "stroke-width", "5"], ["d", "M239.073 72.6C239.073 64.2 240.773 56.85 244.173 50.55C247.573 44.15 252.223 39.2 258.123 35.7C264.123 32.2 270.823 30.45 278.223 30.45C284.623 30.45 290.573 31.95 296.073 34.95C301.573 37.85 305.773 41.7 308.673 46.5V3H322.473V114H308.673V98.55C305.973 103.45 301.973 107.5 296.673 110.7C291.373 113.8 285.173 115.35 278.073 115.35C270.773 115.35 264.123 113.55 258.123 109.95C252.223 106.35 247.573 101.3 244.173 94.8C240.773 88.3 239.073 80.9 239.073 72.6ZM308.673 72.75C308.673 66.55 307.423 61.15 304.923 56.55C302.423 51.95 299.023 48.45 294.723 46.05C290.523 43.55 285.873 42.3 280.773 42.3C275.673 42.3 271.023 43.5 266.823 45.9C262.623 48.3 259.273 51.8 256.773 56.4C254.273 61 253.023 66.4 253.023 72.6C253.023 78.9 254.273 84.4 256.773 89.1C259.273 93.7 262.623 97.25 266.823 99.75C271.023 102.15 275.673 103.35 280.773 103.35C285.873 103.35 290.523 102.15 294.723 99.75C299.023 97.25 302.423 93.7 304.923 89.1C307.423 84.4 308.673 78.95 308.673 72.75Z", "stroke", "black", "stroke-width", "5"], ["d", "M420.54 69.75C420.54 72.35 420.39 75.1 420.09 78H354.39C354.89 86.1 357.64 92.45 362.64 97.05C367.74 101.55 373.89 103.8 381.09 103.8C386.99 103.8 391.89 102.45 395.79 99.75C399.79 96.95 402.59 93.25 404.19 88.65H418.89C416.69 96.55 412.29 103 405.69 108C399.09 112.9 390.89 115.35 381.09 115.35C373.29 115.35 366.29 113.6 360.09 110.1C353.99 106.6 349.19 101.65 345.69 95.25C342.19 88.75 340.44 81.25 340.44 72.75C340.44 64.25 342.14 56.8 345.54 50.4C348.94 44 353.69 39.1 359.79 35.7C365.99 32.2 373.09 30.45 381.09 30.45C388.89 30.45 395.79 32.15 401.79 35.55C407.79 38.95 412.39 43.65 415.59 49.65C418.89 55.55 420.54 62.25 420.54 69.75ZM406.44 66.9C406.44 61.7 405.29 57.25 402.99 53.55C400.69 49.75 397.54 46.9 393.54 45C389.64 43 385.29 42 380.49 42C373.59 42 367.69 44.2 362.79 48.6C357.99 53 355.24 59.1 354.54 66.9H406.44Z", "stroke", "black", "stroke-width", "5"], ["d", "M478.608 30.3C488.608 30.3 496.708 33.35 502.908 39.45C509.108 45.45 512.208 54.15 512.208 65.55V114H498.708V67.5C498.708 59.3 496.658 53.05 492.558 48.75C488.458 44.35 482.858 42.15 475.758 42.15C468.558 42.15 462.808 44.4 458.508 48.9C454.308 53.4 452.208 59.95 452.208 68.55V114H438.558V31.8H452.208V43.5C454.908 39.3 458.558 36.05 463.158 33.75C467.858 31.45 473.008 30.3 478.608 30.3Z", "stroke", "black", "stroke-width", "5"], ["d", "M551.155 43.05V91.5C551.155 95.5 552.005 98.35 553.705 100.05C555.405 101.65 558.355 102.45 562.555 102.45H572.605V114H560.305C552.705 114 547.005 112.25 543.205 108.75C539.405 105.25 537.505 99.5 537.505 91.5V43.05H526.855V31.8H537.505V11.1H551.155V31.8H572.605V43.05H551.155Z", "stroke", "black", "stroke-width", "5"], ["d", "M618.244 115.35C611.944 115.35 606.294 114.3 601.294 112.2C596.294 110 592.344 107 589.444 103.2C586.544 99.3 584.944 94.85 584.644 89.85H598.744C599.144 93.95 601.044 97.3 604.444 99.9C607.944 102.5 612.494 103.8 618.094 103.8C623.294 103.8 627.394 102.65 630.394 100.35C633.394 98.05 634.894 95.15 634.894 91.65C634.894 88.05 633.294 85.4 630.094 83.7C626.894 81.9 621.944 80.15 615.244 78.45C609.144 76.85 604.144 75.25 600.244 73.65C596.444 71.95 593.144 69.5 590.344 66.3C587.644 63 586.294 58.7 586.294 53.4C586.294 49.2 587.544 45.35 590.044 41.85C592.544 38.35 596.094 35.6 600.694 33.6C605.294 31.5 610.544 30.45 616.444 30.45C625.544 30.45 632.894 32.75 638.494 37.35C644.094 41.95 647.094 48.25 647.494 56.25H633.844C633.544 51.95 631.794 48.5 628.594 45.9C625.494 43.3 621.294 42 615.994 42C611.094 42 607.194 43.05 604.294 45.15C601.394 47.25 599.944 50 599.944 53.4C599.944 56.1 600.794 58.35 602.494 60.15C604.294 61.85 606.494 63.25 609.094 64.35C611.794 65.35 615.494 66.5 620.194 67.8C626.094 69.4 630.894 71 634.594 72.6C638.294 74.1 641.444 76.4 644.044 79.5C646.744 82.6 648.144 86.65 648.244 91.65C648.244 96.15 646.994 100.2 644.494 103.8C641.994 107.4 638.444 110.25 633.844 112.35C629.344 114.35 624.144 115.35 618.244 115.35Z", "stroke", "black", "stroke-width", "5"], [1, "title"], [1, "phd-grid"], [4, "ngFor", "ngForOf"], [1, "postdoc-grid"], [1, "people"], ["alt", "Image 1", 1, "image", 3, "src"], [1, "people2"], ["alt", "Image 1", 1, "image2", 3, "src"], [1, "about1"], [1, "about2"], [1, "about3"]], template: function StudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header")(1, "nav", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6)(8, "li")(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li")(27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Consulting/CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "path", 16)(32, "path", 17)(33, "path", 18)(34, "path", 19)(35, "path", 20)(36, "path", 21)(37, "path", 22)(38, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br")(40, "br")(41, "br")(42, "br")(43, "br")(44, "br")(45, "br")(46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "PhD Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, StudentsComponent_ng_container_50_Template, 7, 3, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Master Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, StudentsComponent_ng_container_54_Template, 7, 3, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Undergraduate Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, StudentsComponent_ng_container_58_Template, 4, 1, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Post-Doc Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, StudentsComponent_ng_container_62_Template, 9, 3, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br")(64, "br")(65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "PhD Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, StudentsComponent_ng_container_69_Template, 11, 4, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "br")(71, "br")(72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "MS Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, StudentsComponent_ng_container_76_Template, 11, 4, "ng-container", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.phds);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.masters);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.undergraduates);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.post_doc_alumni);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.phd_alumni);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ms_alumni);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\n*[_ngcontent-%COMP%]{\n  padding: 0; \n  margin: 0; \n}\n\nnav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 1000;\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: 'Poppins', sans-serif;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 15px;\n  color: #999999;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  line-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  padding: 6.5px;\n  transition: all 0.2s ease-in-out;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n \n}\n\n.logo[_ngcontent-%COMP%] {\n  float: left;\n  padding-left: 20%;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 30%;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\n  height: 50%;\n}\n\n.responsive[_ngcontent-%COMP%] {\n    display: none;\n    font-size: 23px;\n  }\n\n.active[_ngcontent-%COMP%] {\n    color: #afafaf;\n  }\n\n.main-nav[_ngcontent-%COMP%] {\n    display: block !important;\n    position: relative;\n  }\n\n.navbar-expand-lg[_ngcontent-%COMP%]{\n    animation: fadeIn 0.75s;\n  }\n\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: 1; } \n  }\n\n#student[_ngcontent-%COMP%]{\n    height: auto !important;\n  }\n\n#logo[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 20%; \n    left: 50%;\n    transform: translate(-50%, -20%); \n    margin-bottom: 10px;\n    animation: fill 0.5s ease forwards 1  .5s; \n    \n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(1){\n    stroke-dasharray: 514.4924926757812px;\n    stroke-dashoffset: 514.4924926757812px;\n    animation: line-anim 2s ease forwards; \n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2){\n    stroke-dasharray: 328.07232666015625px;\n    stroke-dashoffset:328.07232666015625px ;\n    animation: line-anim 2s ease forwards; \n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3){\n    stroke-dasharray:  439.7518310546875px;\n    stroke-dashoffset: 439.7518310546875px;\n    animation: line-anim 2s ease forwards; \n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4){\n    stroke-dasharray:  584.791748046875px;\n    stroke-dashoffset: 584.791748046875px;\n    animation: line-anim 2s ease forwards; \n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5){\n    stroke-dasharray:  536.73291015625px;\n    stroke-dashoffset: 536.73291015625px;\n    animation: line-anim 2s ease forwards; \n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6){\n    stroke-dasharray:  440.10479736328125px;\n    stroke-dashoffset: 440.10479736328125px;\n    animation: line-anim 2s ease forwards; \n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(7){\n    stroke-dasharray:  328.072509765625px;\n    stroke-dashoffset: 328.072509765625px;\n    animation: line-anim 2s ease forwards; \n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(8){\n    stroke-dasharray:  436.27020263671875px;\n    stroke-dashoffset: 436.27020263671875px;\n    animation: line-anim 2s ease forwards; \n  }\n\n@keyframes line-anim {\n  to{\n    stroke-dashoffset: 0px;\n  }\n\n}\n\n@keyframes fill {\nfrom{\n  fill: transparent;\n}\nto{\n  fill:black; \n}\n}\n\n.title[_ngcontent-%COMP%]{\n  font-family: 'Poppins', sans-serif;\n  font-weight: bold;\n  margin-bottom: 1%;\n  margin-left: 2%;\n}\n\n.phd-grid[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 50px;\n  margin: 0 auto; \n  text-align: center;\n}\n\n.image[_ngcontent-%COMP%]{\n  width: 300px;\n  border-radius: 50%;\n  border: 5px solid #b8a07e;\n}\n\n.people[_ngcontent-%COMP%]{\n  text-align: center;\n  font-family: 'Poppins', sans-serif;\n  margin-bottom: 15%;\n}\n\n.postdoc-grid[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 50px;\n  margin: 0 auto; \n}\n\n.people2[_ngcontent-%COMP%]{\n  font-family: 'Poppins', sans-serif;\n  border-radius: 20%;\n}\n\n.image2[_ngcontent-%COMP%]{\n  width: 300px;\n  border-radius: 50%;\n  border: 5px solid #b8a07e;\n  margin-left: 20%;\n}\n\n.about1[_ngcontent-%COMP%]{\n  font-family: 'Poppins', sans-serif;\n  border: 10px solid #b8a07e;\n  border-radius: 20%;\n  margin-right: 5%;\n  \n}\n\n.about2[_ngcontent-%COMP%]{\n  margin: 0 auto;\n  text-align: center;\n  \n}\n\n.about3[_ngcontent-%COMP%]{\n  margin: o auto;\n  text-align: center;\n}\n\n@media only screen \n  and  (min-width: 320px) and (max-width: 420px){\n  \n    #logo[_ngcontent-%COMP%]{\n      top: 22%;\n      width: 70%;\n    }\n    .phd-grid[_ngcontent-%COMP%]{\n      grid-template-columns: repeat(1, 1fr);\n      grid-gap: 50px;\n  }\n  .postdoc-grid[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    width: 100%;\n    \n  }\n  .people2[_ngcontent-%COMP%], .image2[_ngcontent-%COMP%], .about1[_ngcontent-%COMP%], .about3[_ngcontent-%COMP%]{\n    margin: 0 auto;\n  }\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n    \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 25%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 15px;\n    }\n         \n    \n    }\n\n@media only screen \n  and  (min-width: 421px) and (max-width: 520px){\n  \n    #logo[_ngcontent-%COMP%]{\n      top: 22%;\n      width: 70%;\n    }\n    .phd-grid[_ngcontent-%COMP%]{\n      grid-template-columns: repeat(1, 1fr);\n      grid-gap: 50px;\n  }\n  .postdoc-grid[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    width: 100%;\n    \n  }\n  .people2[_ngcontent-%COMP%], .image2[_ngcontent-%COMP%], .about1[_ngcontent-%COMP%], .about3[_ngcontent-%COMP%]{\n    margin: 0 auto;\n  }\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 120%;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 25%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 15px;\n    }\n         \n    \n  }\n\n@media only screen \n  and  (min-width: 521px) and (max-width: 620px){\n  \n \n    #logo[_ngcontent-%COMP%]{\n      top: 25%;\n      width: 70%;\n    }\n    .phd-grid[_ngcontent-%COMP%]{\n      grid-template-columns: repeat(2, 1fr);\n      grid-gap: 10px;\n  }\n  .postdoc-grid[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    width: 100%;\n    \n  }\n  .people2[_ngcontent-%COMP%], .image2[_ngcontent-%COMP%], .about1[_ngcontent-%COMP%], .about3[_ngcontent-%COMP%]{\n    margin: 0 auto;\n  }\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 120%; \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 20%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 15px;\n    }\n         \n    \n  }\n\n@media only screen \n  and  (min-width: 621px) and (max-width: 820px){\n  \n \n    #logo[_ngcontent-%COMP%]{\n      top: 30%;\n      width: 70%;\n    }\n    .phd-grid[_ngcontent-%COMP%]{\n      grid-template-columns: repeat(2, 1fr);\n      grid-gap: 10px;\n  }\n  .postdoc-grid[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    width: 100%;\n    \n  }\n  .people2[_ngcontent-%COMP%], .image2[_ngcontent-%COMP%], .about1[_ngcontent-%COMP%], .about3[_ngcontent-%COMP%]{\n    margin: 0 auto;\n  }\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 120%;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 25%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n    }\n         \n    \n  }\n\n@media only screen \n  and  (min-width: 821px) and (max-width: 920px){\n  \n \n    #logo[_ngcontent-%COMP%]{\n      top: 25%;\n      width: 70%;\n    }\n    .phd-grid[_ngcontent-%COMP%]{\n      grid-template-columns: repeat(2, 1fr);\n      grid-gap: 10px;\n  }\n  .postdoc-grid[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    width: 100%;\n    \n  }\n  .people2[_ngcontent-%COMP%], .image2[_ngcontent-%COMP%], .about1[_ngcontent-%COMP%], .about3[_ngcontent-%COMP%]{\n    margin: 0 auto;\n  }\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 125%;\n    \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 10%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n      margin: 0 auto;\n    }\n         \n  }\n\n@media only screen \n  and  (min-width: 921px) and (max-width: 1320px){\n  \n \n    #logo[_ngcontent-%COMP%]{\n      top: 25%;\n      width: 70%;\n    }\n    .phd-grid[_ngcontent-%COMP%]{\n      grid-template-columns: repeat(3, 1fr);\n      grid-gap: 10px;\n  }\n  .postdoc-grid[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    width: 100%;\n    \n  }\n  .people2[_ngcontent-%COMP%], .image2[_ngcontent-%COMP%], .about1[_ngcontent-%COMP%], .about3[_ngcontent-%COMP%]{\n    margin: 0 auto;\n  }\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 125%;\n    \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 10%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n      margin: 0 auto;\n    }\n         \n  }\n\n@media only screen \n  and  (min-width: 1321px) and (max-width: 1520px){\n  \n \n    #logo[_ngcontent-%COMP%]{\n      top: 25%;\n      width: 70%;\n    }\n    .phd-grid[_ngcontent-%COMP%]{\n      grid-template-columns: repeat(4, 1fr);\n      grid-gap: 10px;\n  }\n  .postdoc-grid[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    width: 100%;\n    \n  }\n  .people2[_ngcontent-%COMP%], .image2[_ngcontent-%COMP%], .about1[_ngcontent-%COMP%], .about3[_ngcontent-%COMP%]{\n    margin: 0 auto;\n  }\n    .logo[_ngcontent-%COMP%] {\n      float: none;\n    }\n    .nav-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 125%;\n    \n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n      margin: 0;\n      width: 10%;\n      text-align: center;\n      margin: 0 auto;\n    }\n    nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      font-size: 20px;\n      margin: 0 auto;\n    }\n         \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFOztBQUU1RTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSxZQUFZOztBQUVkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBR0U7SUFDRSxhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UsS0FBSyxVQUFVLEVBQUU7SUFDakIsT0FBTyxVQUFVLEVBQUU7RUFDckI7O0FBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLHlDQUF5Qzs7RUFF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QUNiO0lBQ0E7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsV0FBVzs7SUFFYjtJQUNBO01BQ0UsU0FBUztNQUNULFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsY0FBYztJQUNoQjtJQUNBO01BQ0UsZUFBZTtNQUNmLGNBQWM7SUFDaEI7O0VBRUY7O0FBR0E7Ozs7SUFJRTtNQUNFLFFBQVE7TUFDUixVQUFVO0lBQ1o7SUFDQTtNQUNFLHFDQUFxQztNQUNyQyxjQUFjO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFdBQVc7O0VBRWI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7SUFDRTtNQUNFLFdBQVc7SUFDYjtJQUNBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLFdBQVc7O0lBRWI7SUFDQTtNQUNFLFNBQVM7TUFDVCxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGVBQWU7TUFDZixjQUFjO0lBQ2hCOztFQUVGIiwiZmlsZSI6InN0dWRlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xuXG4qe1xuICBwYWRkaW5nOiAwOyBcbiAgbWFyZ2luOiAwOyBcbn1cblxubmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG4ubmF2LW1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbm5hdiB1bCBsaSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG59XG5cbm5hdiB1bCBsaTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG5uYXYgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmc6IDYuNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbm5hdiB1bCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xuIFxufVxuXG4ubG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwJTtcbn1cblxuLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAzMCU7XG59XG4ubG9nbyBpbWc6aG92ZXJ7XG4gIGhlaWdodDogNTAlO1xufVxuIFxuIFxuICAucmVzcG9uc2l2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cbiAgXG4gIC5hY3RpdmUge1xuICAgIGNvbG9yOiAjYWZhZmFmO1xuICB9XG4gIFxuICAubWFpbi1uYXYge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAubmF2YmFyLWV4cGFuZC1sZ3tcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjc1cztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9IFxuICB9XG5cbiAgI3N0dWRlbnR7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjbG9nb3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMCU7IFxuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMjAlKTsgXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBhbmltYXRpb246IGZpbGwgMC41cyBlYXNlIGZvcndhcmRzIDEgIC41czsgXG4gICAgXG4gIH1cblxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCgxKXtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA1MTQuNDkyNDkyNjc1NzgxMnB4O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA1MTQuNDkyNDkyNjc1NzgxMnB4O1xuICAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHM7IFxuICB9XG5cbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoMil7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMzI4LjA3MjMyNjY2MDE1NjI1cHg7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6MzI4LjA3MjMyNjY2MDE1NjI1cHggO1xuICAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHM7IFxuICB9XG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDMpe1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6ICA0MzkuNzUxODMxMDU0Njg3NXB4O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA0MzkuNzUxODMxMDU0Njg3NXB4O1xuICAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHM7IFxuICB9XG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDQpe1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6ICA1ODQuNzkxNzQ4MDQ2ODc1cHg7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDU4NC43OTE3NDgwNDY4NzVweDtcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzOyBcbiAgfVxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCg1KXtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAgNTM2LjczMjkxMDE1NjI1cHg7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDUzNi43MzI5MTAxNTYyNXB4O1xuICAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHM7IFxuICB9XG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDYpe1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6ICA0NDAuMTA0Nzk3MzYzMjgxMjVweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNDQwLjEwNDc5NzM2MzI4MTI1cHg7XG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkczsgXG4gIH1cbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoNyl7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogIDMyOC4wNzI1MDk3NjU2MjVweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMzI4LjA3MjUwOTc2NTYyNXB4O1xuICAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHM7IFxuICB9XG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDgpe1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6ICA0MzYuMjcwMjAyNjM2NzE4NzVweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNDM2LjI3MDIwMjYzNjcxODc1cHg7XG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkczsgXG4gIH1cblxuICBcbkBrZXlmcmFtZXMgbGluZS1hbmltIHtcbiAgdG97XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDBweDtcbiAgfVxuXG59XG5Aa2V5ZnJhbWVzIGZpbGwge1xuZnJvbXtcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XG59XG50b3tcbiAgZmlsbDpibGFjazsgXG59XG59XG5cbi50aXRsZXtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5waGQtZ3JpZHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ3JpZC1nYXA6IDUwcHg7XG4gIG1hcmdpbjogMCBhdXRvOyBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1hZ2V7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDVweCBzb2xpZCAjYjhhMDdlO1xufVxuLnBlb3BsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiAxNSU7XG59XG5cbi5wb3N0ZG9jLWdyaWR7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtZ2FwOiA1MHB4O1xuICBtYXJnaW46IDAgYXV0bzsgXG59XG5cbi5wZW9wbGUye1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBib3JkZXItcmFkaXVzOiAyMCU7XG59XG5cbi5pbWFnZTJ7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDVweCBzb2xpZCAjYjhhMDdlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuLmFib3V0MXtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICNiOGEwN2U7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgXG59XG4uYWJvdXQye1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbn1cbi5hYm91dDN7XG4gIG1hcmdpbjogbyBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuICBAbWVkaWEgb25seSBzY3JlZW4gXG4gIGFuZCAgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCl7XG4gIFxuICAgICNsb2dve1xuICAgICAgdG9wOiAyMiU7XG4gICAgICB3aWR0aDogNzAlO1xuICAgIH1cbiAgICAucGhkLWdyaWR7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICAgICAgZ3JpZC1nYXA6IDUwcHg7XG4gIH1cbiAgLnBvc3Rkb2MtZ3JpZHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gIH1cbiAgLnBlb3BsZTIsIC5pbWFnZTIsIC5hYm91dDEsIC5hYm91dDN7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgICAubG9nbyB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLm5hdi1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIH1cbiAgICBuYXYgdWwgbGkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBuYXYgdWwgbGkgYXtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgICAgICBcbiAgICBcbiAgICB9XG5cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBcbiAgYW5kICAobWluLXdpZHRoOiA0MjFweCkgYW5kIChtYXgtd2lkdGg6IDUyMHB4KXtcbiAgXG4gICAgI2xvZ297XG4gICAgICB0b3A6IDIyJTtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICAgIC5waGQtZ3JpZHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAgICBncmlkLWdhcDogNTBweDtcbiAgfVxuICAucG9zdGRvYy1ncmlke1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgfVxuICAucGVvcGxlMiwgLmltYWdlMiwgLmFib3V0MSwgLmFib3V0M3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAgIC5sb2dvIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgICAubmF2LW1lbnUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTIwJTtcbiAgICB9XG4gICAgbmF2IHVsIGxpIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgbmF2IHVsIGxpIGF7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgICAgICAgXG4gICAgXG4gIH1cblxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIFxuICBhbmQgIChtaW4td2lkdGg6IDUyMXB4KSBhbmQgKG1heC13aWR0aDogNjIwcHgpe1xuICBcbiBcbiAgICAjbG9nb3tcbiAgICAgIHRvcDogMjUlO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG4gICAgLnBoZC1ncmlke1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICB9XG4gIC5wb3N0ZG9jLWdyaWR7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICB9XG4gIC5wZW9wbGUyLCAuaW1hZ2UyLCAuYWJvdXQxLCAuYWJvdXQze1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gICAgLmxvZ28ge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuICAgIC5uYXYtbWVudSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMjAlOyBcbiAgICB9XG4gICAgbmF2IHVsIGxpIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgbmF2IHVsIGxpIGF7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgICAgICAgXG4gICAgXG4gIH1cblxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIFxuICBhbmQgIChtaW4td2lkdGg6IDYyMXB4KSBhbmQgKG1heC13aWR0aDogODIwcHgpe1xuICBcbiBcbiAgICAjbG9nb3tcbiAgICAgIHRvcDogMzAlO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG4gICAgLnBoZC1ncmlke1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICB9XG4gIC5wb3N0ZG9jLWdyaWR7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICB9XG4gIC5wZW9wbGUyLCAuaW1hZ2UyLCAuYWJvdXQxLCAuYWJvdXQze1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gICAgLmxvZ28ge1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuICAgIC5uYXYtbWVudSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMjAlO1xuICAgIH1cbiAgICBuYXYgdWwgbGkge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBuYXYgdWwgbGkgYXtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgICAgICBcbiAgICBcbiAgfVxuXG4gICAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBcbiAgYW5kICAobWluLXdpZHRoOiA4MjFweCkgYW5kIChtYXgtd2lkdGg6IDkyMHB4KXtcbiAgXG4gXG4gICAgI2xvZ297XG4gICAgICB0b3A6IDI1JTtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICAgIC5waGQtZ3JpZHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICBncmlkLWdhcDogMTBweDtcbiAgfVxuICAucG9zdGRvYy1ncmlke1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgfVxuICAucGVvcGxlMiwgLmltYWdlMiwgLmFib3V0MSwgLmFib3V0M3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAgIC5sb2dvIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgICAubmF2LW1lbnUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTI1JTtcbiAgICBcbiAgICB9XG4gICAgbmF2IHVsIGxpIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgbmF2IHVsIGxpIGF7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgICAgICBcbiAgfVxuXG4gICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIFxuICBhbmQgIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTMyMHB4KXtcbiAgXG4gXG4gICAgI2xvZ297XG4gICAgICB0b3A6IDI1JTtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICAgIC5waGQtZ3JpZHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgICBncmlkLWdhcDogMTBweDtcbiAgfVxuICAucG9zdGRvYy1ncmlke1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgfVxuICAucGVvcGxlMiwgLmltYWdlMiwgLmFib3V0MSwgLmFib3V0M3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICAgIC5sb2dvIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgICAubmF2LW1lbnUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTI1JTtcbiAgICBcbiAgICB9XG4gICAgbmF2IHVsIGxpIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgbmF2IHVsIGxpIGF7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgICAgICBcbiAgfVxuXG4gICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIFxuICBhbmQgIChtaW4td2lkdGg6IDEzMjFweCkgYW5kIChtYXgtd2lkdGg6IDE1MjBweCl7XG4gIFxuIFxuICAgICNsb2dve1xuICAgICAgdG9wOiAyNSU7XG4gICAgICB3aWR0aDogNzAlO1xuICAgIH1cbiAgICAucGhkLWdyaWR7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gIH1cbiAgLnBvc3Rkb2MtZ3JpZHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgXG4gIH1cbiAgLnBlb3BsZTIsIC5pbWFnZTIsIC5hYm91dDEsIC5hYm91dDN7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgICAubG9nbyB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLm5hdi1tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEyNSU7XG4gICAgXG4gICAgfVxuICAgIG5hdiB1bCBsaSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMTAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIG5hdiB1bCBsaSBhe1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgICAgICAgXG4gIH1cblxuICAgXG4iXX0= */"] });


/***/ }),

/***/ 9019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyC_vWtMlCyBdYH0EXWARLkzf2Q0lFv1NnQ",
        authDomain: "professor-website.firebaseapp.com",
        databaseURL: "https://professor-website-default-rtdb.firebaseio.com",
        projectId: "professor-website",
        storageBucket: "professor-website.appspot.com",
        messagingSenderId: "184918592250",
        appId: "1:184918592250:web:a5fa377361a06b3014d743",
        measurementId: "G-2M4PVFNNMV"
    }
};


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC_vWtMlCyBdYH0EXWARLkzf2Q0lFv1NnQ",
        authDomain: "professor-website.firebaseapp.com",
        databaseURL: "https://professor-website-default-rtdb.firebaseio.com",
        projectId: "professor-website",
        storageBucket: "professor-website.appspot.com",
        messagingSenderId: "184918592250",
        appId: "1:184918592250:web:a5fa377361a06b3014d743",
        measurementId: "G-2M4PVFNNMV"
    }
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ 7490);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
aos__WEBPACK_IMPORTED_MODULE_2__.init();
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map