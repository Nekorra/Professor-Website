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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awards/awards.component */ 9171);
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publications/publications.component */ 4809);
/* harmony import */ var _research_research_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./research/research.component */ 4818);
/* harmony import */ var _students_students_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./students/students.component */ 3157);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);












const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'awards', component: _awards_awards_component__WEBPACK_IMPORTED_MODULE_1__.AwardsComponent },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'publications', component: _publications_publications_component__WEBPACK_IMPORTED_MODULE_2__.PublicationsComponent },
    { path: 'research', component: _research_research_component__WEBPACK_IMPORTED_MODULE_3__.ResearchComponent },
    { path: 'students', component: _students_students_component__WEBPACK_IMPORTED_MODULE_4__.StudentsComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forRoot(),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: #01557a;\r\n    color: rgb(255, 255, 255);\r\n    text-align: center;\r\n    vertical-align: middle;\r\n  }\r\n  .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n      margin: 10px 0px ;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4QjtFQUNBO01BQ0ksaUJBQWlCO0VBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1NTdhO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIC5mb290ZXIgcHtcclxuICAgICAgbWFyZ2luOiAxMHB4IDBweCA7XHJcbiAgfVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./awards/awards.component */ 9171);
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./publications/publications.component */ 4809);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _research_research_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./research/research.component */ 4818);
/* harmony import */ var _students_students_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./students/students.component */ 3157);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ 9019);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _modals_award_modal_award_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/award-modal/award-modal.component */ 7093);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _modals_research_modal_research_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modals/research-modal/research-modal.component */ 7861);
/* harmony import */ var _modals_publications_modal_publications_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modals/publications-modal/publications-modal.component */ 9671);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search.pipe */ 9175);
/* harmony import */ var _modals_journals_modal_journals_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modals/journals-modal/journals-modal.component */ 7585);
/* harmony import */ var _minni_read_more__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @minni/read-more */ 8028);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);



























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule
    ], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_18__.AngularFireModule.initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.firebase),
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_19__.AngularFireAuthModule,
            _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_20__.AngularFireDatabaseModule,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_21__.AngularFireStorageModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule,
            _minni_read_more__WEBPACK_IMPORTED_MODULE_25__.NgxsReadMoreModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
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
        _modals_journals_modal_journals_modal_component__WEBPACK_IMPORTED_MODULE_14__.JournalsModalComponent], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_18__.AngularFireModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_19__.AngularFireAuthModule,
        _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_20__.AngularFireDatabaseModule,
        _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_21__.AngularFireStorageModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule,
        _minni_read_more__WEBPACK_IMPORTED_MODULE_25__.NgxsReadMoreModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function AwardsComponent_div_32_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const awards_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Earnings: ", awards_r1.earnings, "");
} }
function AwardsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AwardsComponent_div_32_p_8_Template, 2, 1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "More info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const awards_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](awards_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](awards_r1.timespan);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", awards_r1.earnings != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", awards_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class AwardsComponent {
    constructor(databaseService) {
        this.databaseService = databaseService;
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
AwardsComponent.ɵfac = function AwardsComponent_Factory(t) { return new (t || AwardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService)); };
AwardsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AwardsComponent, selectors: [["app-awards"]], decls: 33, vars: 1, consts: [[1, "main-nav", "navbar-expand-lg"], [1, "row"], [2, "padding-right", "15%"], [1, "logo"], ["href", "index.html"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", "alt", "logo"], [1, "nav-menu", "list-unstyled"], ["href", "#home", 1, "smooth-scroll"], ["href", "#about", 1, "smooth-scroll"], ["href", "/publications", 1, "smooth-scroll"], ["href", "/research", 1, "smooth-scroll"], ["href", "/students", 1, "smooth-scroll"], ["id", "awards"], ["width", "395", "height", "81", "viewBox", "0 0 395 81", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "id", "logo"], ["d", "M51.9 64.6H25.7L21.5 77H3.60001L29 6.8H48.8L74.2 77H56.1L51.9 64.6ZM47.5 51.4L38.8 25.7L30.2 51.4H47.5Z", "stroke", "black", "stroke-width", "5"], ["d", "M162.03 21.2L146.93 77H128.03L119.23 40.8L110.13 77H91.3305L76.1305 21.2H93.2305L101.13 61.1L110.53 21.2H128.63L138.13 60.9L145.93 21.2H162.03Z", "stroke", "black", "stroke-width", "5"], ["d", "M165.152 49C165.152 43.2667 166.218 38.2333 168.352 33.9C170.552 29.5667 173.518 26.2333 177.252 23.9C180.985 21.5667 185.152 20.4 189.752 20.4C193.685 20.4 197.118 21.2 200.052 22.8C203.052 24.4 205.352 26.5 206.952 29.1V21.2H224.052V77H206.952V69.1C205.285 71.7 202.952 73.8 199.952 75.4C197.018 77 193.585 77.8 189.652 77.8C185.118 77.8 180.985 76.6333 177.252 74.3C173.518 71.9 170.552 68.5333 168.352 64.2C166.218 59.8 165.152 54.7333 165.152 49ZM206.952 49.1C206.952 44.8333 205.752 41.4667 203.352 39C201.018 36.5333 198.152 35.3 194.752 35.3C191.352 35.3 188.452 36.5333 186.052 39C183.718 41.4 182.552 44.7333 182.552 49C182.552 53.2667 183.718 56.6667 186.052 59.2C188.452 61.6667 191.352 62.9 194.752 62.9C198.152 62.9 201.018 61.6667 203.352 59.2C205.752 56.7333 206.952 53.3667 206.952 49.1Z", "stroke", "black", "stroke-width", "5"], ["d", "M253.523 30.5C255.523 27.4333 258.023 25.0333 261.023 23.3C264.023 21.5 267.356 20.6 271.023 20.6V38.7H266.323C262.056 38.7 258.856 39.6333 256.723 41.5C254.589 43.3 253.523 46.5 253.523 51.1V77H236.423V21.2H253.523V30.5Z", "stroke", "black", "stroke-width", "5"], ["d", "M275.796 49C275.796 43.2667 276.863 38.2333 278.996 33.9C281.196 29.5667 284.163 26.2333 287.896 23.9C291.629 21.5667 295.796 20.4 300.396 20.4C304.063 20.4 307.396 21.1667 310.396 22.7C313.463 24.2333 315.863 26.3 317.596 28.9V3H334.696V77H317.596V69C315.996 71.6667 313.696 73.8 310.696 75.4C307.763 77 304.329 77.8 300.396 77.8C295.796 77.8 291.629 76.6333 287.896 74.3C284.163 71.9 281.196 68.5333 278.996 64.2C276.863 59.8 275.796 54.7333 275.796 49ZM317.596 49.1C317.596 44.8333 316.396 41.4667 313.996 39C311.663 36.5333 308.796 35.3 305.396 35.3C301.996 35.3 299.096 36.5333 296.696 39C294.363 41.4 293.196 44.7333 293.196 49C293.196 53.2667 294.363 56.6667 296.696 59.2C299.096 61.6667 301.996 62.9 305.396 62.9C308.796 62.9 311.663 61.6667 313.996 59.2C316.396 56.7333 317.596 53.3667 317.596 49.1Z", "stroke", "black", "stroke-width", "5"], ["d", "M369.767 77.8C364.901 77.8 360.567 76.9667 356.767 75.3C352.967 73.6333 349.967 71.3667 347.767 68.5C345.567 65.5667 344.334 62.3 344.067 58.7H360.967C361.167 60.6333 362.067 62.2 363.667 63.4C365.267 64.6 367.234 65.2 369.567 65.2C371.701 65.2 373.334 64.8 374.467 64C375.667 63.1333 376.267 62.0333 376.267 60.7C376.267 59.1 375.434 57.9333 373.767 57.2C372.101 56.4 369.401 55.5333 365.667 54.6C361.667 53.6667 358.334 52.7 355.667 51.7C353.001 50.6333 350.701 49 348.767 46.8C346.834 44.5333 345.867 41.5 345.867 37.7C345.867 34.5 346.734 31.6 348.467 29C350.267 26.3333 352.867 24.2333 356.267 22.7C359.734 21.1667 363.834 20.4 368.567 20.4C375.567 20.4 381.067 22.1333 385.067 25.6C389.134 29.0667 391.467 33.6667 392.067 39.4H376.267C376.001 37.4667 375.134 35.9333 373.667 34.8C372.267 33.6667 370.401 33.1 368.067 33.1C366.067 33.1 364.534 33.5 363.467 34.3C362.401 35.0333 361.867 36.0667 361.867 37.4C361.867 39 362.701 40.2 364.367 41C366.101 41.8 368.767 42.6 372.367 43.4C376.501 44.4667 379.867 45.5333 382.467 46.6C385.067 47.6 387.334 49.2667 389.267 51.6C391.267 53.8667 392.301 56.9333 392.367 60.8C392.367 64.0667 391.434 67 389.567 69.6C387.767 72.1333 385.134 74.1333 381.667 75.6C378.267 77.0667 374.301 77.8 369.767 77.8Z", "stroke", "black", "stroke-width", "5"], [1, "grid-container"], [4, "ngFor", "ngForOf"], [1, "grid-item"], [1, "card"], [1, "card-details"], [1, "text-title"], [1, "text-body"], ["class", "text-body", 4, "ngIf"], ["target", "\u201D_blank\u201D", 1, "card-button", 3, "href"]], template: function AwardsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "path", 14)(26, "path", 15)(27, "path", 16)(28, "path", 17)(29, "path", 18)(30, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AwardsComponent_div_32_Template, 11, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.awardsData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\n*[_ngcontent-%COMP%]{\r\n  padding: 0; \r\n  margin: 0; \r\n  box-sizing: border-box !important;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n    background-color: #f7f7f7;\r\n    top: 0;\r\n    z-index: 1000;\r\n    width: 100%;\r\n    padding: 20px;\r\n    display: none;\r\n}\r\n\r\n.nav-menu[_ngcontent-%COMP%] {\r\n    float: right;\r\n    line-height: 32px;\r\n    margin-bottom: 0;\r\n    padding-top: 16px;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-right: 15px;\r\n    font-family: 'Poppins', sans-serif;\r\n    margin-left: 40px;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 2px 0 0 0;\r\n    position: relative;\r\n    display: block;\r\n    font-size: 15px;\r\n    color: #999999;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 500;\r\n    line-height: 16px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.02em;\r\n    text-transform: capitalize;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    font-size: 16px;\r\n  }\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding-left: 20%;\r\n  }\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    height: 30%;\r\n  }\r\n\r\n.responsive[_ngcontent-%COMP%] {\r\n    display: none;\r\n    font-size: 23px;\r\n  }\r\n\r\n.active[_ngcontent-%COMP%] {\r\n    color: #afafaf;\r\n  }\r\n\r\n.main-nav[_ngcontent-%COMP%] {\r\n    display: block !important;\r\n    position: relative;\r\n  }\r\n\r\n#container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n  }\r\n\r\n.navbar-expand-lg[_ngcontent-%COMP%]{\r\n    animation: fadeIn 0.75s;\r\n  }\r\n\r\n@keyframes fadeIn {\r\n    0% { opacity: 0; }\r\n    100% { opacity: 1; } \r\n  }\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 300px;\r\n    border-radius: 20px;\r\n    background: #f5f5f5;\r\n    position: relative;\r\n    padding: 1.8rem;\r\n    border: 2px solid #c3c6ce;\r\n    transition: 0.5s ease-out;\r\n    overflow: visible;\r\n   }\r\n\r\n.card-details[_ngcontent-%COMP%] {\r\n    color: black;\r\n    height: 100%;\r\n    grid-gap: .5em;\r\n    gap: .5em;\r\n    display: grid;\r\n    place-content: center;\r\n   }\r\n\r\n.card-button[_ngcontent-%COMP%] {\r\n    transform: translate(-50%, 125%);\r\n    width: 60%;\r\n    border-radius: 1rem;\r\n    border: none;\r\n    background-color: #008bf8;\r\n    color: #fff;\r\n    font-size: 1rem;\r\n    padding: .5rem 1rem;\r\n    position: absolute;\r\n    left: 50%;\r\n    bottom: 0;\r\n    opacity: 0;\r\n    transition: 0.3s ease-out;\r\n   }\r\n\r\n.text-body[_ngcontent-%COMP%] {\r\n    color: rgb(134, 134, 134);\r\n   }\r\n\r\n\r\n\r\n.text-title[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n    font-weight: bold;\r\n   }\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n    border-color: #008bf8;\r\n    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);\r\n   }\r\n\r\n.card[_ngcontent-%COMP%]:hover   .card-button[_ngcontent-%COMP%] {\r\n    transform: translate(-50%, 50%);\r\n    opacity: 1;\r\n   }\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n    display: grid;\r\n    grid-template-columns: auto auto auto auto auto;\r\n    padding-left: 10%;\r\n    height: auto;\r\n}\r\n\r\n.grid-item[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    margin-top: 10%;\r\n    text-align: center;\r\n}\r\n\r\n#awards[_ngcontent-%COMP%]{\r\n    height: auto !important;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 15%; \r\n  left: 50%;\r\n  transform: translate(-50%, -15%); \r\n  margin-bottom: 10px;\r\n  animation: fill 0.5s ease forwards 2.5s; \r\n  z-index: 100;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(1){\r\n  stroke-dasharray:  329.0250549316406px;\r\n  stroke-dashoffset: 329.0250549316406px;\r\n  animation: line-anim 2s ease forwards; \r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2){\r\n  stroke-dasharray: 442.1668395996094px;\r\n  stroke-dashoffset: 442.1668395996094px;\r\n  animation: line-anim 2s ease forwards 0.1s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3){\r\n  stroke-dasharray: 313.4666748046875px;\r\n  stroke-dashoffset: 313.4666748046875px;\r\n  animation: line-anim 2s ease forwards 0.2s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4){\r\n  stroke-dasharray: 189.638916015625px;\r\n  stroke-dashoffset: 189.638916015625px;\r\n  animation: line-anim 2s ease forwards 0.3s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5){\r\n  stroke-dasharray: 349.69708251953125px;\r\n  stroke-dashoffset: 349.69708251953125px;\r\n  animation: line-anim 2s ease forwards 0.4s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6){\r\n  stroke-dasharray: 289.90948486328125px;\r\n  stroke-dashoffset: 289.90948486328125px;\r\n  animation: line-anim 2s ease forwards 0.5s;\r\n}\r\n\r\n@keyframes line-anim {\r\n    to{\r\n      stroke-dashoffset: 0px;\r\n    }\r\n  \r\n}\r\n\r\n@keyframes fill {\r\n  from{\r\n    fill: transparent;\r\n  }\r\n  to{\r\n    fill:black; \r\n  }\r\n}\r\n\r\n@media only screen \r\n  and (device-width: 414px) \r\n  and (device-height: 896px){\r\n    \r\n    #logo[_ngcontent-%COMP%]{\r\n      margin-top: 10px;\r\n      height: 40px;\r\n    }\r\n    .grid-container[_ngcontent-%COMP%] {\r\n      margin-top: 10%;\r\n      display: grid;\r\n      grid-template-columns: auto ;\r\n      padding-left: 25%;\r\n      height: auto;\r\n  }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTs7QUFFNUU7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGlDQUFpQztBQUNuQzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixNQUFNO0lBQ04sYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFRTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QiwwQkFBMEI7RUFDNUI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxLQUFLLFVBQVUsRUFBRTtJQUNqQixPQUFPLFVBQVUsRUFBRTtFQUNyQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0dBQ2xCOztBQUVBO0lBQ0MsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFTO0lBQVQsU0FBUztJQUNULGFBQWE7SUFDYixxQkFBcUI7R0FDdEI7O0FBRUE7SUFDQyxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7R0FDMUI7O0FBRUE7SUFDQyx5QkFBeUI7R0FDMUI7O0FBRUEsT0FBTzs7QUFDUDtJQUNDLGlCQUFpQjtJQUNqQixpQkFBaUI7R0FDbEI7O0FBRUEsUUFBUTs7QUFDUjtJQUNDLHFCQUFxQjtJQUNyQiw0Q0FBNEM7R0FDN0M7O0FBRUE7SUFDQywrQkFBK0I7SUFDL0IsVUFBVTtHQUNYOztBQUVIO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0MsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFRTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFFRjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsdUNBQXVDO0VBQ3ZDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxzQ0FBc0M7RUFDdEMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHNDQUFzQztFQUN0QywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsc0NBQXNDO0VBQ3RDLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLHVDQUF1QztFQUN2QywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsdUNBQXVDO0VBQ3ZDLDBDQUEwQztBQUM1Qzs7QUFHQTtJQUNJO01BQ0Usc0JBQXNCO0lBQ3hCOztBQUVKOztBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBOzs7O0lBSUk7TUFDRSxnQkFBZ0I7TUFDaEIsWUFBWTtJQUNkO0lBQ0E7TUFDRSxlQUFlO01BQ2YsYUFBYTtNQUNiLDRCQUE0QjtNQUM1QixpQkFBaUI7TUFDakIsWUFBWTtFQUNoQjtFQUNBIiwiZmlsZSI6ImF3YXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbip7XHJcbiAgcGFkZGluZzogMDsgXHJcbiAgbWFyZ2luOiAwOyBcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5uYXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiAgXHJcbiAgLm5hdi1tZW51IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICBuYXYgdWwgbGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiB1bCBsaSBhIHtcclxuICAgIHBhZGRpbmc6IDJweCAwIDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbiAgXHJcbiAgbmF2IHVsIGxpIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvIGltZyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgfVxyXG4gXHJcbiAgLnJlc3BvbnNpdmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICB9XHJcbiAgXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2FmYWZhZjtcclxuICB9XHJcbiAgXHJcbiAgLm1haW4tbmF2IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZiYXItZXhwYW5kLWxne1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC43NXM7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgMTAwJSB7IG9wYWNpdHk6IDE7IH0gXHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEuOHJlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjM2M2Y2U7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5jYXJkLWRldGFpbHMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZ2FwOiAuNWVtO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgfVxyXG4gICBcclxuICAgLmNhcmQtYnV0dG9uIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEyNSUpO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YmY4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIC50ZXh0LWJvZHkge1xyXG4gICAgY29sb3I6IHJnYigxMzQsIDEzNCwgMTM0KTtcclxuICAgfVxyXG4gICBcclxuICAgLypUZXh0Ki9cclxuICAgLnRleHQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgfVxyXG4gICBcclxuICAgLypIb3ZlciovXHJcbiAgIC5jYXJkOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwOGJmODtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuY2FyZDpob3ZlciAuY2FyZC1idXR0b24ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgIH1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmdyaWQtaXRlbSB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICAjYXdhcmRze1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4jbG9nb3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNSU7IFxyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTUlKTsgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBhbmltYXRpb246IGZpbGwgMC41cyBlYXNlIGZvcndhcmRzIDIuNXM7IFxyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuI2xvZ28gcGF0aDpudGgtY2hpbGQoMSl7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogIDMyOS4wMjUwNTQ5MzE2NDA2cHg7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMyOS4wMjUwNTQ5MzE2NDA2cHg7XHJcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkczsgXHJcbn1cclxuXHJcbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDIpe1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDQ0Mi4xNjY4Mzk1OTk2MDk0cHg7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ0Mi4xNjY4Mzk1OTk2MDk0cHg7XHJcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjFzO1xyXG59XHJcbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDMpe1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDMxMy40NjY2NzQ4MDQ2ODc1cHg7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMxMy40NjY2NzQ4MDQ2ODc1cHg7XHJcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjJzO1xyXG59XHJcbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDQpe1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDE4OS42Mzg5MTYwMTU2MjVweDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogMTg5LjYzODkxNjAxNTYyNXB4O1xyXG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC4zcztcclxufVxyXG4jbG9nbyBwYXRoOm50aC1jaGlsZCg1KXtcclxuICBzdHJva2UtZGFzaGFycmF5OiAzNDkuNjk3MDgyNTE5NTMxMjVweDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogMzQ5LjY5NzA4MjUxOTUzMTI1cHg7XHJcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjRzO1xyXG59XHJcbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDYpe1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDI4OS45MDk0ODQ4NjMyODEyNXB4O1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAyODkuOTA5NDg0ODYzMjgxMjVweDtcclxuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuNXM7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGxpbmUtYW5pbSB7XHJcbiAgICB0b3tcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDBweDtcclxuICAgIH1cclxuICBcclxufVxyXG5Aa2V5ZnJhbWVzIGZpbGwge1xyXG4gIGZyb217XHJcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgdG97XHJcbiAgICBmaWxsOmJsYWNrOyBcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIFxyXG4gIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpe1xyXG4gICAgXHJcbiAgICAjbG9nb3tcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI1JTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICB9Il19 */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 38);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 40);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 40);
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
function DashboardComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 41)(2, "h1", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_div_107_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const ind_r23 = restoredCtx.index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r24.remove("research/research", ind_r23, "research"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const research_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", research_r22.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](research_r22.content);
} }
function DashboardComponent_ng_container_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", peoples_r26.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r26.research);
} }
function DashboardComponent_ng_container_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", peoples_r27.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r27.research);
} }
function DashboardComponent_ng_container_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 42)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r28);
} }
function DashboardComponent_ng_container_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 46)(4, "div", 47)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", peoples_r29.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r29.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Current job: ", peoples_r29.job, "");
} }
function DashboardComponent_ng_container_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 46)(4, "div", 48)(5, "h1");
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
    const peoples_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", peoples_r30.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r30.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("PhD Thesis: ", peoples_r30.thesis, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r30.job);
} }
function DashboardComponent_ng_container_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 46)(4, "div", 48)(5, "h1");
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
    const peoples_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", peoples_r31.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r31.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("PhD Thesis: ", peoples_r31.thesis, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](peoples_r31.job);
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
                console.log(this.currentData);
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
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 139, vars: 26, consts: [[1, "d-flex", "flex-column", "flex-lg-row", "h-lg-full", "bg-surface-secondary"], [1, "h-screen", "flex-grow-1", "overflow-y-lg-auto"], [1, "bg-surface-primary", "border-bottom", "pt-6"], [1, "container-fluid"], [1, "mb-npx"], [1, "row", "align-items-center"], [1, "col-sm-6", "col-12", "mb-4", "mb-sm-0"], [1, "h2", "mb-0", "ls-tight"], [1, "nav", "nav-tabs", "mt-4", "overflow-x", "border-0"], [1, "nav-item"], [3, "ngClass", "click"], ["id", "awards", 3, "hidden"], [1, "grid-container"], [1, "grid-item"], [1, "card"], [1, "card-details"], [1, "text-title", 3, "click"], [4, "ngFor", "ngForOf"], ["id", "publications", 3, "hidden"], [1, "container-pub"], [1, "search-container"], [1, "title-pub"], ["type", "text", "placeholder", "Search...", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "search-button"], [1, "publications"], [2, "color", "red", 3, "click"], [1, "line"], ["id", "research", 3, "hidden"], [1, "container"], [1, "researchCard", 3, "click"], [1, "cardTitle"], [1, "cardDescription"], ["id", "students", 3, "hidden"], [1, "title"], [1, "phd-grid"], [1, "postdoc-grid"], [1, "text-title"], [1, "text-body"], [1, "card-button", 3, "click"], ["href", "#", "target", "_blank"], [3, "click"], [1, "researchCard"], [1, "people"], ["alt", "Image 1", 1, "image", 3, "src"], [1, "people2"], ["alt", "Image 1", 1, "image2", 3, "src"], [1, "about1"], [1, "about2"], [1, "about3"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "h1", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, " Add Research ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](105, "br")(106, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](107, DashboardComponent_div_107_Template, 9, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "section", 32)(109, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "PhD Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](112, DashboardComponent_ng_container_112_Template, 7, 3, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "Master Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](116, DashboardComponent_ng_container_116_Template, 7, 3, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, "Undergraduate Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](120, DashboardComponent_ng_container_120_Template, 4, 1, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, "Post-Doc Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](124, DashboardComponent_ng_container_124_Template, 9, 3, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "br")(126, "br")(127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "PhD Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](131, DashboardComponent_ng_container_131_Template, 11, 4, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](132, "br")(133, "br")(134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136, "MS Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](138, DashboardComponent_ng_container_138_Template, 11, 4, "ng-container", 17);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel], pipes: [_search_pipe__WEBPACK_IMPORTED_MODULE_5__.SearchPipe], styles: ["@import url(https://unpkg.com/@webpixels/css@1.1.5/dist/index.css);\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 300px;\r\n    border-radius: 20px;\r\n    background: #f5f5f5;\r\n    position: relative;\r\n    padding: 1.8rem;\r\n    border: 2px solid #c3c6ce;\r\n    transition: 0.5s ease-out;\r\n    overflow: visible;\r\n   }\r\n.card-details[_ngcontent-%COMP%] {\r\n    color: black;\r\n    height: 100%;\r\n    grid-gap: .5em;\r\n    gap: .5em;\r\n    display: grid;\r\n    place-content: center;\r\n   }\r\n.card-button[_ngcontent-%COMP%] {\r\n    transform: translate(-50%, 125%);\r\n    width: 60%;\r\n    border-radius: 1rem;\r\n    border: none;\r\n    background-color: #008bf8;\r\n    color: #fff;\r\n    font-size: 1rem;\r\n    padding: .5rem 1rem;\r\n    position: absolute;\r\n    left: 50%;\r\n    bottom: 0;\r\n    opacity: 0;\r\n    transition: 0.3s ease-out;\r\n   }\r\n.text-body[_ngcontent-%COMP%] {\r\n    color: rgb(134, 134, 134);\r\n   }\r\n\r\n.text-title[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n    font-weight: bold;\r\n   }\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n    border-color: #008bf8;\r\n    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);\r\n   }\r\n.card[_ngcontent-%COMP%]:hover   .card-button[_ngcontent-%COMP%] {\r\n    transform: translate(-50%, 50%);\r\n    opacity: 1;\r\n   }\r\n.grid-container[_ngcontent-%COMP%] {\r\n    margin-top: 10%;\r\n    display: grid;\r\n    grid-template-columns: auto auto auto auto auto;\r\n    padding-left: 10%;\r\n    height: auto;\r\n}\r\n.grid-item[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    margin-top: 10%;\r\n    text-align: center;\r\n}\r\n#awards[_ngcontent-%COMP%]{\r\n    height: auto !important;\r\n  }\r\n.container[_ngcontent-%COMP%]{\r\n    margin: 0 auto; \r\n    display: grid;\r\n    grid-template-columns:auto auto;\r\n    grid-column-gap: 10%;\r\n    column-gap: 10%;\r\n    grid-row-gap: 1%;\r\n    row-gap: 1%;\r\n    top: 1.5%;\r\n    transform: translateY(1.5%);\r\n    padding-bottom: 65%;\r\n}\r\n.researchCard[_ngcontent-%COMP%]{\r\n    box-shadow: 0.5rem 0.5rem black, -0.5rem -0.5rem #ccc;\r\n    border-radius: 10%;\r\n    transition: 0.5s;\r\n}\r\n.researchCard[_ngcontent-%COMP%]:hover{\r\n    background: #eee;\r\n    box-shadow: 0 8px 8px -4px green;\r\n}\r\n.cardTitle[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 50px;\r\n    font-weight: 900;\r\n    margin-top: 5%;\r\n    width: 90%; \r\n}\r\n.cardDescription[_ngcontent-%COMP%]{\r\n    font-family: 'Poppins', sans-serif;\r\n    color: black;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    width: 95%;\r\n}\r\n.container-pub[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n.title-pub[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n.search-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n.search-input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 400px;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  border: none;\r\n  border-bottom: 3px solid #b8a07e;\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n}\r\n.search-button[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n  font-size: 16px;\r\n  background-color: #b8a07e;\r\n  color: #FFF;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n.publications[_ngcontent-%COMP%] {\r\n  max-height: 500px;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  text-align: center;\r\n  border-bottom: 1px solid #b8a07e;\r\n}\r\na[_ngcontent-%COMP%]{\r\n  color: black;\r\n}\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #f2f2f2;\r\n}\r\n.line[_ngcontent-%COMP%]{\r\n  height: 2px;\r\n  width: 40%;\r\n  margin: 0 auto; \r\n  background-color: #b8a07e;\r\n}\r\n.phd-grid[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-gap: 50px;\r\n  margin: 0 auto; \r\n  text-align: center;\r\n}\r\n.image[_ngcontent-%COMP%]{\r\n  width: 300px;\r\n  border-radius: 50%;\r\n  border: 10px dotted #b8a07e;\r\n}\r\n.people[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-family: 'Poppins', sans-serif;\r\n  margin-bottom: 15%;\r\n}\r\n.postdoc-grid[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-gap: 50px;\r\n  margin: 0 auto; \r\n}\r\n.people2[_ngcontent-%COMP%]{\r\n  font-family: 'Poppins', sans-serif;\r\n  border-radius: 20%;\r\n}\r\n.image2[_ngcontent-%COMP%]{\r\n  width: 300px;\r\n  border-radius: 50%;\r\n  border: 10px dotted #b8a07e;\r\n  margin-left: 20%;\r\n}\r\n.about1[_ngcontent-%COMP%]{\r\n  font-family: 'Poppins', sans-serif;\r\n  border: 10px solid #b8a07e;\r\n  border-radius: 20%;\r\n  margin-right: 5%;\r\n}\r\n.about2[_ngcontent-%COMP%]{\r\n  margin: o auto;\r\n  text-align: center;\r\n  position: relative;\r\n  top: 20%;\r\n  right: 90%;\r\n  transform: translate(90%, 20%);\r\n}\r\n.about3[_ngcontent-%COMP%]{\r\n  margin: o auto;\r\n  text-align: center;\r\n  position: relative;\r\n  top: 10%;\r\n  right: 90%;\r\n  transform: translate(90%, 10%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsa0VBQWtFO0FBQ2xFLDRFQUE0RTtBQUw1RSxrQkFBa0I7QUFDbEIsdUdBQXVHO0FBQ3ZHLDBDQUEwQztBQU0xQztJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0dBQ2xCO0FBRUE7SUFDQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQVM7SUFBVCxTQUFTO0lBQ1QsYUFBYTtJQUNiLHFCQUFxQjtHQUN0QjtBQUVBO0lBQ0MsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0dBQzFCO0FBRUE7SUFDQyx5QkFBeUI7R0FDMUI7QUFFQSxPQUFPO0FBQ1A7SUFDQyxpQkFBaUI7SUFDakIsaUJBQWlCO0dBQ2xCO0FBRUEsUUFBUTtBQUNSO0lBQ0MscUJBQXFCO0lBQ3JCLDRDQUE0QztHQUM3QztBQUVBO0lBQ0MsK0JBQStCO0lBQy9CLFVBQVU7R0FDWDtBQUVIO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0MsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBRUU7SUFDRSx1QkFBdUI7RUFDekI7QUFHRjtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLG9CQUFlO0lBQWYsZUFBZTtJQUNmLGdCQUFXO0lBQVgsV0FBVztJQUNYLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxxREFBcUQ7SUFDckQsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUdBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDViw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsOEJBQThCO0FBQ2hDIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogV2VicGl4ZWxzIENTUyAqL1xyXG4vKiBVdGlsaXR5IGFuZCBjb21wb25lbnQtY2VudHJpYyBEZXNpZ24gU3lzdGVtIGJhc2VkIG9uIEJvb3RzdHJhcCBmb3IgZmFzdCwgcmVzcG9uc2l2ZSBVSSBkZXZlbG9wbWVudCAqL1xyXG4vKiBVUkw6IGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwaXhlbHMvY3NzICovXHJcblxyXG5AaW1wb3J0IHVybChodHRwczovL3VucGtnLmNvbS9Ad2VicGl4ZWxzL2Nzc0AxLjEuNS9kaXN0L2luZGV4LmNzcyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XHJcbiAgXHJcblxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxLjhyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzNjNmNlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuY2FyZC1kZXRhaWxzIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGdhcDogLjVlbTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5jYXJkLWJ1dHRvbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMjUlKTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGJmODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xyXG4gICB9XHJcbiAgIFxyXG4gICAudGV4dC1ib2R5IHtcclxuICAgIGNvbG9yOiByZ2IoMTM0LCAxMzQsIDEzNCk7XHJcbiAgIH1cclxuICAgXHJcbiAgIC8qVGV4dCovXHJcbiAgIC50ZXh0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIC8qSG92ZXIqL1xyXG4gICAuY2FyZDpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDhiZjg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgfVxyXG4gICBcclxuICAgLmNhcmQ6aG92ZXIgLmNhcmQtYnV0dG9uIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICB9XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5ncmlkLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiAgI2F3YXJkc3tcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczphdXRvIGF1dG87XHJcbiAgICBjb2x1bW4tZ2FwOiAxMCU7XHJcbiAgICByb3ctZ2FwOiAxJTtcclxuICAgIHRvcDogMS41JTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxLjUlKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2NSU7XHJcbn1cclxuXHJcbi5yZXNlYXJjaENhcmR7XHJcbiAgICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIGJsYWNrLCAtMC41cmVtIC0wLjVyZW0gI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5yZXNlYXJjaENhcmQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggOHB4IC00cHggZ3JlZW47XHJcbn1cclxuXHJcbi5jYXJkVGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB3aWR0aDogOTAlOyBcclxufVxyXG4uY2FyZERlc2NyaXB0aW9ue1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG4uY29udGFpbmVyLXB1YiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLnRpdGxlLXB1YntcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYjhhMDdlO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uc2VhcmNoLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhhMDdlO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLnB1YmxpY2F0aW9ucyB7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG50aCwgdGQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjhhMDdlO1xyXG59XHJcbmF7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcbi5saW5le1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGEwN2U7XHJcbn1cclxuXHJcblxyXG4ucGhkLWdyaWR7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiA1MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvOyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMTBweCBkb3R0ZWQgI2I4YTA3ZTtcclxufVxyXG4ucGVvcGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1JTtcclxufVxyXG5cclxuLnBvc3Rkb2MtZ3JpZHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87IFxyXG59XHJcblxyXG4ucGVvcGxlMntcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcclxufVxyXG5cclxuLmltYWdlMntcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMTBweCBkb3R0ZWQgI2I4YTA3ZTtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcbi5hYm91dDF7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBib3JkZXI6IDEwcHggc29saWQgI2I4YTA3ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG4uYWJvdXQye1xyXG4gIG1hcmdpbjogbyBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyMCU7XHJcbiAgcmlnaHQ6IDkwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg5MCUsIDIwJSk7XHJcbn1cclxuLmFib3V0M3tcclxuICBtYXJnaW46IG8gYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTAlO1xyXG4gIHJpZ2h0OiA5MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTAlLCAxMCUpO1xyXG59XHJcblxyXG4iXX0= */"] });


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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search.pipe */ 9175);







function HomeComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header")(1, "nav", 80)(2, "div", 81)(3, "div", 82)(4, "div", 83)(5, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 86)(8, "li")(9, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li")(15, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Awards");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li")(18, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Publications");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li")(21, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Research");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li")(24, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Students");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
} }
function HomeComponent_tr_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const funds_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", funds_r2.amount + " " + funds_r2.purpose, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](funds_r2.timespan);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](funds_r2.purpose);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](funds_r2.role);
} }
class HomeComponent {
    constructor(router, databaseService) {
        this.router = router;
        this.databaseService = databaseService;
        this.hidden = false;
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
        this.databaseService.getData('funding/funds').then((data) => {
            this.fundsData = data;
            //this.awardsData = this.awardsData.flat();
            console.log(this.fundsData);
        });
        this.databaseService.getData('funding').then((data) => {
            this.totalFunds = data.total;
            ;
            //this.awardsData = this.awardsData.flat();
            console.log(this.totalFunds);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.getScrollHeight($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 177, vars: 7, consts: [[4, "ngIf"], ["id", "home"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"], ["id", "header", 1, "home"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", 1, "eceLogo"], [1, "container"], ["viewBox", "0 0 978 71", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "id", "logo"], ["d", "M57.3 3.82V67H41.91V40.99H17.97V67H2.58V3.82H17.97V28.57H41.91V3.82H57.3Z", "stroke", "white", "stroke-width", "5"], ["d", "M98.2901 67.63C92.3501 67.63 86.8901 66.25 81.9101 63.49C76.9901 60.73 73.0601 56.89 70.1201 51.97C67.2401 46.99 65.8001 41.41 65.8001 35.23C65.8001 29.05 67.2401 23.5 70.1201 18.58C73.0601 13.66 76.9901 9.82 81.9101 7.06C86.8901 4.3 92.3501 2.92 98.2901 2.92C104.23 2.92 109.66 4.3 114.58 7.06C119.56 9.82 123.46 13.66 126.28 18.58C129.16 23.5 130.6 29.05 130.6 35.23C130.6 41.41 129.16 46.99 126.28 51.97C123.4 56.89 119.5 60.73 114.58 63.49C109.66 66.25 104.23 67.63 98.2901 67.63ZM98.2901 53.59C103.33 53.59 107.35 51.91 110.35 48.55C113.41 45.19 114.94 40.75 114.94 35.23C114.94 29.65 113.41 25.21 110.35 21.91C107.35 18.55 103.33 16.87 98.2901 16.87C93.1901 16.87 89.1101 18.52 86.0501 21.82C83.0501 25.12 81.5501 29.59 81.5501 35.23C81.5501 40.81 83.0501 45.28 86.0501 48.64C89.1101 51.94 93.1901 53.59 98.2901 53.59Z", "stroke", "white", "stroke-width", "5"], ["d", "M154.282 3.82V41.62C154.282 45.4 155.212 48.31 157.072 50.35C158.932 52.39 161.662 53.41 165.262 53.41C168.862 53.41 171.622 52.39 173.542 50.35C175.462 48.31 176.422 45.4 176.422 41.62V3.82H191.812V41.53C191.812 47.17 190.612 51.94 188.212 55.84C185.812 59.74 182.572 62.68 178.492 64.66C174.472 66.64 169.972 67.63 164.992 67.63C160.012 67.63 155.542 66.67 151.582 64.75C147.682 62.77 144.592 59.83 142.312 55.93C140.032 51.97 138.892 47.17 138.892 41.53V3.82H154.282Z", "stroke", "white", "stroke-width", "5"], ["d", "M274.169 3.82V67H258.779V29.11L244.649 67H232.229L218.009 29.02V67H202.619V3.82H220.799L238.529 47.56L256.079 3.82H274.169Z", "stroke", "white", "stroke-width", "5"], ["d", "M324.566 55.84H300.986L297.206 67H281.096L303.956 3.82H321.776L344.636 67H328.346L324.566 55.84ZM320.606 43.96L312.776 20.83L305.036 43.96H320.606Z", "stroke", "white", "stroke-width", "5"], ["d", "M408.114 67H392.724L366.984 28.03V67H351.594V3.82H366.984L392.724 42.97V3.82H408.114V67Z", "stroke", "white", "stroke-width", "5"], ["d", "M493.062 3.82V67H477.672V40.99H453.732V67H438.342V3.82H453.732V28.57H477.672V3.82H493.062Z", "stroke", "white", "stroke-width", "5"], ["d", "M534.052 67.63C528.112 67.63 522.652 66.25 517.672 63.49C512.752 60.73 508.822 56.89 505.882 51.97C503.002 46.99 501.562 41.41 501.562 35.23C501.562 29.05 503.002 23.5 505.882 18.58C508.822 13.66 512.752 9.82 517.672 7.06C522.652 4.3 528.112 2.92 534.052 2.92C539.992 2.92 545.422 4.3 550.342 7.06C555.322 9.82 559.222 13.66 562.042 18.58C564.922 23.5 566.362 29.05 566.362 35.23C566.362 41.41 564.922 46.99 562.042 51.97C559.162 56.89 555.262 60.73 550.342 63.49C545.422 66.25 539.992 67.63 534.052 67.63ZM534.052 53.59C539.092 53.59 543.112 51.91 546.112 48.55C549.172 45.19 550.702 40.75 550.702 35.23C550.702 29.65 549.172 25.21 546.112 21.91C543.112 18.55 539.092 16.87 534.052 16.87C528.952 16.87 524.872 18.52 521.812 21.82C518.812 25.12 517.312 29.59 517.312 35.23C517.312 40.81 518.812 45.28 521.812 48.64C524.872 51.94 528.952 53.59 534.052 53.59Z", "stroke", "white", "stroke-width", "5"], ["d", "M646.474 3.82V67H631.084V29.11L616.954 67H604.534L590.314 29.02V67H574.924V3.82H593.104L610.834 47.56L628.384 3.82H646.474Z", "stroke", "white", "stroke-width", "5"], ["d", "M696.871 55.84H673.291L669.511 67H653.401L676.261 3.82H694.081L716.941 67H700.651L696.871 55.84ZM692.911 43.96L685.081 20.83L677.341 43.96H692.911Z", "stroke", "white", "stroke-width", "5"], ["d", "M778.078 3.82L756.208 46.12V67H740.818V46.12L718.948 3.82H736.408L748.648 30.28L760.798 3.82H778.078Z", "stroke", "white", "stroke-width", "5"], ["d", "M814.159 67.63C808.219 67.63 802.759 66.25 797.779 63.49C792.859 60.73 788.929 56.89 785.989 51.97C783.109 46.99 781.669 41.41 781.669 35.23C781.669 29.05 783.109 23.5 785.989 18.58C788.929 13.66 792.859 9.82 797.779 7.06C802.759 4.3 808.219 2.92 814.159 2.92C820.099 2.92 825.529 4.3 830.449 7.06C835.429 9.82 839.329 13.66 842.149 18.58C845.029 23.5 846.469 29.05 846.469 35.23C846.469 41.41 845.029 46.99 842.149 51.97C839.269 56.89 835.369 60.73 830.449 63.49C825.529 66.25 820.099 67.63 814.159 67.63ZM814.159 53.59C819.199 53.59 823.219 51.91 826.219 48.55C829.279 45.19 830.809 40.75 830.809 35.23C830.809 29.65 829.279 25.21 826.219 21.91C823.219 18.55 819.199 16.87 814.159 16.87C809.059 16.87 804.979 18.52 801.919 21.82C798.919 25.12 797.419 29.59 797.419 35.23C797.419 40.81 798.919 45.28 801.919 48.64C804.979 51.94 809.059 53.59 814.159 53.59Z", "stroke", "white", "stroke-width", "5"], ["d", "M870.151 3.82V41.62C870.151 45.4 871.081 48.31 872.941 50.35C874.801 52.39 877.531 53.41 881.131 53.41C884.731 53.41 887.491 52.39 889.411 50.35C891.331 48.31 892.291 45.4 892.291 41.62V3.82H907.681V41.53C907.681 47.17 906.481 51.94 904.081 55.84C901.681 59.74 898.441 62.68 894.361 64.66C890.341 66.64 885.841 67.63 880.861 67.63C875.881 67.63 871.411 66.67 867.451 64.75C863.551 62.77 860.461 59.83 858.181 55.93C855.901 51.97 854.761 47.17 854.761 41.53V3.82H870.151Z", "stroke", "white", "stroke-width", "5"], ["d", "M975.008 67H959.618L933.878 28.03V67H918.488V3.82H933.878L959.618 42.97V3.82H975.008V67Z", "stroke", "white", "stroke-width", "5"], [1, "department"], ["href", "#about"], [1, "glyphicon", "glyphicon-triangle-bottom"], ["id", "about"], ["data-aos", "fade-up"], ["id", "about", 1, "paddsection"], [1, "row", "justify-content-between"], [1, "col-lg-4"], [1, "div-img-bg"], [1, "about-img"], ["src", "../../assets/images/profile.png", "alt", "me", 1, "img-responsive"], [1, "col-lg-7"], [1, "about-descr"], [1, "p-heading"], [1, "heading"], [1, "separator"], ["id", "expandButton", 3, "click"], ["id", "dots", 2, "color", "#b8a07e"], ["id", "more"], ["id", "funding"], [1, "search-container"], [1, "title", 2, "font-weight", "bold"], ["type", "text", "placeholder", "Search...", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "search-button"], [1, "publications"], [4, "ngFor", "ngForOf"], ["id", "researchCarousel"], ["id", "carouselExampleIndicators", "data-ride", "carousel", "data-interval", "2000", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "d-block", "w-100"], ["src", "https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/256/external-machine-learning-smart-devices-smashingstocks-mixed-smashing-stocks.png", 1, "AM"], [1, "carousel-item"], ["src", "https://img.icons8.com/dotty/480/null/cyber-security.png", 1, "AM"], ["src", "https://img.icons8.com/ios-filled/200/machine-learning.png", 1, "AM"], ["src", "https://img.icons8.com/glyph-neue/200/null/security-shield-green.png", 1, "AM"], ["src", "https://img.icons8.com/ios-filled/200/null/big-data.png", 1, "AM"], ["src", "https://img.icons8.com/external-flatart-icons-outline-flatarticons/200/null/external-algorithm-data-science-and-cyber-security-flatart-icons-outline-flatarticons.png", 1, "AM"], ["src", "https://img.icons8.com/external-flaticons-lineal-flat-icons/200/null/external-processors-computer-programming-flaticons-lineal-flat-icons-2.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/wearable-technology.png", 1, "AM"], ["src", "https://img.icons8.com/windows/200/null/product-architecture.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/chip-card-blocked.png", 1, "AM"], ["src", "https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/200/null/external-3d-design-ui-ux-user-interface-smashingstocks-detailed-outline-smashing-stocks.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/android-l-battery--v1.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/memory-slot.png", 1, "AM"], ["src", "https://img.icons8.com/external-outline-black-m-oki-orlando/200/null/external-memory-allocation-programming-outline-outline-black-m-oki-orlando.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/dashboard.png", 1, "AM"], ["src", "https://img.icons8.com/material-outlined/200/null/energy-efficiency-g.png", 1, "AM"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [2, "text-align", "center", "font-size", "10px"], [3, "click"], [1, "main-nav", "navbar-expand-lg"], [1, "row"], [2, "padding-right", "20%"], [1, "logo"], ["href", "index.html"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", "alt", "logo"], [1, "nav-menu", "list-unstyled"], ["href", "#home", 1, "smooth-scroll"], ["href", "#about", 1, "smooth-scroll"], ["href", "/awards", 1, "smooth-scroll"], ["href", "/publications", 1, "smooth-scroll"], ["href", "/research", 1, "smooth-scroll"], ["href", "/students", 1, "smooth-scroll"], [3, "innerHTML"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HomeComponent_header_0_Template, 26, 0, "header", 0);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 32)(35, "div", 33)(36, "p", 34)(37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Houman Homayoun");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " is a Professor in the Department of Electrical and Computer Engineering at the University of California, Davis. He leads the National Science Foundation Center for Hardware and Embedded Systems Security and Trust. Under his direction, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "CHEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " tackles some of the most pressing security challenges facing the world today, helping to ensure the safety and reliability of hardware and embedded systems.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h1", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Prior to his current position, Houman Homayoun held an Associate Professorship in the Department of Electrical and Computer Engineering at George Mason University. He was also a recipient of the Computing Innovation (CI) Fellowship from the CRA-CCC, during which he spent two years at the University of California, San Diego. Dr. Homayoun completed his Ph.D. in Computer Science at the University of California, Irvine, where he was awarded the prestigious four-year Computer Science Department Chair Fellowship. His educational background also includes an MS in computer engineering from the University of Victoria and a BS in electrical engineering from the Sharif University of Technology. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_47_listener() { return ctx.expand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Continue Reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Houman Homayoun is an accomplished computer engineer and currently holds the position of Professor in the Department of Electrical and Computer Engineering at the University of California, Davis. He also serves as the director of the National Science Foundation Center for Hardware and Embedded Systems Security and Trust (CHEST). Prior to his appointment at UC Davis, Houman was an Associate Professor at George Mason University (GMU). He was also recognized as an NSF Computing Innovation (CI) Fellow awarded by the CRA-CCC and spent two years at the University of California, San Diego from 2010 to 2012. Houman holds a Ph.D. in Computer Science from the University of California, Irvine, which he earned in 2010. During his time at UCI, he received a four-year fellowship from the Computer Science Department. He also received an MS degree in computer engineering from the University of Victoria in 2005 and a BS degree in electrical engineering from the Sharif University of Technology in 2003. Houman's research focuses on hardware security and trust, applied machine learning and AI, data-intensive computing, and heterogeneous computing. He has published more than 200 technical papers in prestigious conferences and journals on these subjects and has directed over $10M in research funding from NSF, DARPA, AFRL, NIST, US Congress, and various industrial sponsors. His work has received numerous best paper awards and nominations, including GLSVLSI 2016, ICCAD 2019, ICDM 2019, DCAS 2020, ISVLSI 2020, ICCAD 2020, and DATE 2022. Houman's CHEST center has received congressional support for research in hardware security, which was included in the 2021 National Defense Authorization Act. He has also served as a Member of the Advisory Committee, Cybersecurity Research and Technology Commercialization working group in the Commonwealth of Virginia, and as a core group member of the hardware security body of knowledge development team supported by the Department of Defense. In addition, he was recognized as the recipient of the 2010 National Science Foundation computing innovation fellow award by CCC/CRA and has been serving as an Associate Editor of IEEE Transactions on VLSI since 2017. Houman has also chaired and co-chaired major conferences in ACM, including the Great Lake Symposium on VLSI. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_53_listener() { return ctx.expand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Read Less...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "section", 40)(56, "div", 5)(57, "div", 41)(58, "h1", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_60_listener($event) { return ctx.searchFunds = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 45)(64, "table")(65, "thead")(66, "tr")(67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Grant");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, HomeComponent_tr_76_Template, 8, 4, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](77, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "section", 47)(79, "div", 48)(80, "ol", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "li", 50)(82, "li", 51)(83, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 53)(85, "div", 54)(86, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Applied Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 57)(91, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Hardware Security and Trust");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 57)(96, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Adversarial Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 57)(101, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Cybersecurity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 57)(106, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Big Data Computing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 57)(111, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Algorithms for Energy-Efficient Acceleration of Big Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 57)(116, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Heterogeneous Computing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 57)(121, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Accelerating Wearable Biomedical Computing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 57)(126, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Heterogeneous Architecture Mapping and Scheduling");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 57)(131, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Emerging STT Logic for Enhancing Hardware Security and Trust");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 57)(136, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](137, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "3D Integration and Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 57)(141, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "Low Power and Thermal Aware Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 57)(146, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "DRAM Memory Management for Emerging Big Data Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 57)(151, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "Emerging Memory Technologies (non-volatile STTRAM, PCM, and volatile HMC");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 57)(156, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Performance Characterization of Emerging Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 57)(161, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](162, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Energy Efficiency and Power Management in Enterprise Datacenter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "footer")(174, "p", 78)(175, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_175_listener() { return ctx.routeLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "Are you an admin? Log In Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Sponsored Research: Total ", ctx.totalFunds, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchFunds);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](77, 4, ctx.fundsData, ctx.searchFunds));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], pipes: [_search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\n*[_ngcontent-%COMP%]{\r\n  padding: 0; \r\n  margin: 0; \r\n  box-sizing: border-box;\r\n}\r\n\r\n#header[_ngcontent-%COMP%] {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.2),\r\n    rgba(0, 0, 0, 0.2)), url('home.jpeg') repeat scroll center center / cover;\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n\r\n.header-content[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    text-align: left;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n  }\r\n\r\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    font-weight: 780;\r\n    margin-bottom: 10px;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n  }\r\n\r\n.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    letter-spacing: 5px;\r\n    margin-top: 0;\r\n    margin-bottom: 30px;\r\n    text-transform: capitalize;\r\n    color: #fff;\r\n    font-weight: 500;\r\n  }\r\n\r\n.header-content[_ngcontent-%COMP%]   .list-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-right: 20px;\r\n  }\r\n\r\n.header-content[_ngcontent-%COMP%]   .list-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-size: 15px;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 50%; \r\n  left: 50%;\r\n  transform: translate(-50%, -50%); \r\n  animation: fill 0.5s ease forwards 3s; \r\n  width: 978px; \r\n  height: 71px;  \r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(1){\r\n  stroke-dasharray: 337.32000732421875px;\r\n  stroke-dashoffset: 337.32000732421875px;\r\n  animation: line-anim 2s ease forwards; \r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2){\r\n  stroke-dasharray: 316.58935546875px;\r\n  stroke-dashoffset: 316.58935546875px;\r\n  animation: line-anim 2s ease forwards 0.1s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3){\r\n  stroke-dasharray: 302.68817138671875px;\r\n  stroke-dashoffset: 302.68817138671875px;\r\n  animation: line-anim 2s ease forwards 0.2s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4){\r\n  stroke-dasharray: 457.0200500488281px;\r\n  stroke-dashoffset: 457.0200500488281px;\r\n  animation: line-anim 2s ease forwards 0.3s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5){\r\n  stroke-dasharray: 296.12249755859375px;\r\n  stroke-dashoffset: 296.12249755859375px;\r\n  animation: line-anim 2s ease forwards 0.4s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6){\r\n  stroke-dasharray: 359.59716796875px;\r\n  stroke-dashoffset: 359.59716796875px;\r\n  animation: line-anim 2s ease forwards 0.5s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(7){\r\n  stroke-dasharray: 337.32000732421875px;\r\n  stroke-dashoffset: 337.32000732421875px;\r\n  animation: line-anim 2s ease forwards 0.6s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(8){\r\n  stroke-dasharray: 316.59033203125px;\r\n  stroke-dashoffset: 316.59033203125px;\r\n  animation: line-anim 2s ease forwards 0.7s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(9){\r\n  stroke-dasharray: 457.02008056640625px;\r\n  stroke-dashoffset: 457.02008056640625px;\r\n  animation: line-anim 2s ease forwards 0.8s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(10){\r\n  stroke-dasharray: 296.12249755859375px;\r\n  stroke-dashoffset: 296.12249755859375px;\r\n  animation: line-anim 2s ease forwards 0.9s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(11){\r\n  stroke-dasharray: 245.39852905273438px;\r\n  stroke-dashoffset: 245.39852905273438px;\r\n  animation: line-anim 2s ease forwards 1s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(12){\r\n  stroke-dasharray: 316.5907897949219px;\r\n  stroke-dashoffset: 316.5907897949219px;\r\n  animation: line-anim 2s ease forwards 1.1s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(13){\r\n  stroke-dasharray: 302.6885070800781px;\r\n  stroke-dashoffset: 302.6885070800781px;\r\n  animation: line-anim 2s ease forwards 1.2s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(14){\r\n  stroke-dasharray:  359.59716796875px;\r\n  stroke-dashoffset:  359.59716796875px;\r\n  animation: line-anim 2s ease forwards 1.3s;\r\n}\r\n\r\n@keyframes line-anim {\r\n    to{\r\n      stroke-dashoffset: 25;\r\n    }\r\n  \r\n}\r\n\r\n@keyframes fill {\r\n  from{\r\n    fill: transparent;\r\n  }\r\n  to{\r\n    fill:white; \r\n  }\r\n}\r\n\r\n.department[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 20Px;\r\n  font-weight: 800;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 60%; \r\n  transform: translate(-50%, -60%);\r\n  animation: fadeIn 4.5s;\r\n}\r\n\r\n.eceLogo[_ngcontent-%COMP%]{\r\n  padding: 25px;\r\n  height: 12%;\r\n  animation: fadeIn 4.5s;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% { opacity: 0; }\r\n  100% { opacity: 1; }\r\n}\r\n\r\n.glyphicon-triangle-bottom[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-size: 50px;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 95%; \r\n  transform: translate(-50%, -95%);\r\n  animation: fadeIn 4.5s;\r\n}\r\n\r\n#about[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n  background: #f7f7f7;\r\n  padding-top: 70px;\r\n  padding-bottom: 70px;\r\n  \r\n}\r\n\r\n#about[_ngcontent-%COMP%]   .div-img-bg[_ngcontent-%COMP%] {\r\n  padding-bottom: 30px;\r\n  border: 20px solid #b8a07e;\r\n  border-radius: 50px;\r\n}\r\n\r\n#about[_ngcontent-%COMP%]   .div-img-bg[_ngcontent-%COMP%]   .about-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  box-shadow: 25 25 85px 25 rgba(0, 0, 0, 0.14);\r\n  margin-top: -60px;\r\n  margin-left: 40px;\r\n  height: 400px;\r\n  object-fit: cover;\r\n  border-radius: 50px;\r\n}\r\n\r\n#about[_ngcontent-%COMP%]   .about-descr[_ngcontent-%COMP%]   .p-heading[_ngcontent-%COMP%] {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 20px;\r\n  text-align: left;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n\r\n#about[_ngcontent-%COMP%]   .about-descr[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  text-align: left;\r\n  font-family: 'Poppins', sans-serif;\r\n  color: black;\r\n  font-size: 15px;\r\n}\r\n\r\n.heading[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 900;\r\n}\r\n\r\n#expandButton[_ngcontent-%COMP%]{\r\n  background: none!important;\r\n  border: none;\r\n  padding: 0!important;\r\n  color: #b8a07e; \r\n}\r\n\r\n#expandButton[_ngcontent-%COMP%]:hover{\r\n  color: #b8a07eab;\r\n}\r\n\r\n#more[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n#funding[_ngcontent-%COMP%]{\r\n  height: 60vh;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n\r\n.search-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 400px;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  border: none;\r\n  border-bottom: 3px solid #b8a07e;\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.search-button[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n  font-size: 16px;\r\n  background-color: #b8a07e;\r\n  color: #FFF;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.publications[_ngcontent-%COMP%] {\r\n  max-height: 500px;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  text-align: center;\r\n  border-bottom: 1px solid #b8a07e;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  color: black;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.line[_ngcontent-%COMP%]{\r\n  height: 2px;\r\n  width: 40%;\r\n  margin: 0 auto; \r\n  background-color: #b8a07e;\r\n}\r\n\r\n#researchCarousel[_ngcontent-%COMP%]{\r\n    height: 60vh !important;\r\n\r\n}\r\n\r\n.w-100[_ngcontent-%COMP%]{\r\n    height: 50vh;\r\n    color: #b8a07e;\r\n    font-family: 'Poppins', sans-serif;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.AM[_ngcontent-%COMP%]{\r\n    height: 50%;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    filter: invert(66%) sepia(21%) saturate(447%) hue-rotate(356deg) brightness(94%) contrast(89%);\r\n}\r\n\r\n.carousel-indicators[_ngcontent-%COMP%]{\r\n    filter: invert(66%) sepia(21%) saturate(447%) hue-rotate(356deg) brightness(94%) contrast(89%);\r\n    z-index: 0;\r\n}\r\n\r\n.carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%]{\r\n    filter: invert(66%) sepia(21%) saturate(447%) hue-rotate(356deg) brightness(94%) contrast(89%);\r\n\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  background: #fff;\r\n  z-index: 1000;\r\n  width: 100%;\r\n  padding: 20px;\r\n  display: none;\r\n  box-shadow: 25 2px 92px 25 rgba(0, 0, 0, 0.18);\r\n}\r\n\r\n.nav-menu[_ngcontent-%COMP%] {\r\n  float: right;\r\n  line-height: 32px;\r\n  margin-bottom: 0;\r\n  padding-top: 16px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  float: left;\r\n  margin-right: 15px;\r\n  font-family: 'Poppins', sans-serif;\r\n  margin-left: 40px;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 2px 0 0 0;\r\n  position: relative;\r\n  display: block;\r\n  font-size: 15px;\r\n  color: #999999;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 500;\r\n  line-height: 16px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.02em;\r\n  text-transform: capitalize;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  color: black;\r\n  font-size: 16px;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  float: left;\r\n  padding-left: 20%;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n  height: 30%;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\r\n  height: 50%;\r\n}\r\n\r\n.responsive[_ngcontent-%COMP%] {\r\n  display: none;\r\n  font-size: 23px;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  color: #afafaf;\r\n}\r\n\r\n.main-nav[_ngcontent-%COMP%] {\r\n  display: block !important;\r\n  position: relative;\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.navbar-expand-lg[_ngcontent-%COMP%]{\r\n  animation: fadeIn 0.75s;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% { opacity: 0; }\r\n  100% { opacity: 1; } \r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n  background-color: #25274d;\r\n}\r\n\r\n#contact[_ngcontent-%COMP%]{\r\n  padding: 4%;\r\n  height: auto;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  padding-bottom: 1%;\r\n}\r\n\r\n.col-md-3[_ngcontent-%COMP%]{\r\n  background: #b8a07e;\r\n  padding: 4%;\r\n  border-top-left-radius: 0.5rem;\r\n  border-bottom-left-radius: 0.5rem;\r\n}\r\n\r\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  margin-bottom: 10%;\r\n}\r\n\r\n.col-md-9[_ngcontent-%COMP%]{\r\n  background: #fff;\r\n  padding: 3%;\r\n  border-top-right-radius: 0.5rem;\r\n  border-bottom-right-radius: 0.5rem;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  font-weight:600;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  background:#b8a07ee0;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  width: 25%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\r\n  box-shadow:none;\r\n}\r\n\r\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n  padding: 2%;\r\n  \r\n}\r\n\r\n.line[_ngcontent-%COMP%]{\r\n  margin-top: 10px; \r\n  height: 3px;\r\n  width: 55%;\r\n  background-color: white;\r\n  float: left;\r\n  border-radius: 20%;\r\n}\r\n\r\n@media only screen \r\n  and (device-width: 414px) \r\n  and (device-height: 896px){\r\n    \r\n    html[_ngcontent-%COMP%]{\r\n      overflow-x: hidden;\r\n    }\r\n    \r\n    #logo[_ngcontent-%COMP%]{\r\n      height: 23px;\r\n    }\r\n    .department[_ngcontent-%COMP%]{\r\n      font-size: 15px;\r\n      text-align: center;\r\n    }\r\n    #about[_ngcontent-%COMP%]   .div-img-bg[_ngcontent-%COMP%] {\r\n      margin-bottom: 30px;\r\n    }\r\n    .p-heading[_ngcontent-%COMP%]{\r\n      margin-bottom: 30px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7O0FBRTVFO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBQ0E7SUFDSTs2RUFDNkY7SUFDN0YsYUFBYTtJQUNiLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7RUFDeEI7O0FBSUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0FBR0Y7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsdUNBQXVDO0VBQ3ZDLHFDQUFxQztBQUN2Qzs7QUFHQTtFQUNFLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLHVDQUF1QztFQUN2QywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsc0NBQXNDO0VBQ3RDLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLHNDQUFzQztFQUN0Qyx1Q0FBdUM7RUFDdkMsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsdUNBQXVDO0VBQ3ZDLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLHVDQUF1QztFQUN2QywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsdUNBQXVDO0VBQ3ZDLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLHNDQUFzQztFQUN0Qyx1Q0FBdUM7RUFDdkMsd0NBQXdDO0FBQzFDOztBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLHNDQUFzQztFQUN0QywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxxQ0FBcUM7RUFDckMsc0NBQXNDO0VBQ3RDLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMsMENBQTBDO0FBQzVDOztBQUVBO0lBQ0k7TUFDRSxxQkFBcUI7SUFDdkI7O0FBRUo7O0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsS0FBSyxVQUFVLEVBQUU7RUFDakIsT0FBTyxVQUFVLEVBQUU7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9COztBQUV0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDZDQUE2QztFQUM3QyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQ0FBZ0M7QUFDbEM7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBSUE7SUFDSSx1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFJQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMsOEZBQThGO0FBQ2xHOztBQUNBO0lBQ0ksOEZBQThGO0lBQzlGLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSw4RkFBOEY7O0FBRWxHOztBQUlBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUdiLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxLQUFLLFVBQVUsRUFBRTtFQUNqQixPQUFPLFVBQVUsRUFBRTtBQUNyQjs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUdBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVzs7QUFFYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBOzs7O0lBSUk7TUFDRSxrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLGVBQWU7TUFDZixrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsbUJBQW1CO0lBQ3JCO0VBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbip7XHJcbiAgcGFkZGluZzogMDsgXHJcbiAgbWFyZ2luOiAwOyBcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiNoZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC4yKSksIHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS5qcGVnXCIpIHJlcGVhdCBzY3JvbGwgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbiAgLmhlYWRlci1jb250ZW50IHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWNvbnRlbnQgaDEge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDc4MDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWNvbnRlbnQgLmxpc3Qtc29jaWFsIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWNvbnRlbnQgLmxpc3Qtc29jaWFsIGxpIGkge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuXHJcbiNsb2dve1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTsgXHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyBcclxuICBhbmltYXRpb246IGZpbGwgMC41cyBlYXNlIGZvcndhcmRzIDNzOyBcclxuICB3aWR0aDogOTc4cHg7IFxyXG4gIGhlaWdodDogNzFweDsgIFxyXG59XHJcblxyXG4jbG9nbyBwYXRoOm50aC1jaGlsZCgxKXtcclxuICBzdHJva2UtZGFzaGFycmF5OiAzMzcuMzIwMDA3MzI0MjE4NzVweDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogMzM3LjMyMDAwNzMyNDIxODc1cHg7XHJcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkczsgXHJcbn1cclxuXHJcblxyXG4jbG9nbyBwYXRoOm50aC1jaGlsZCgyKXtcclxuICBzdHJva2UtZGFzaGFycmF5OiAzMTYuNTg5MzU1NDY4NzVweDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogMzE2LjU4OTM1NTQ2ODc1cHg7XHJcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjFzO1xyXG59XHJcbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDMpe1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDMwMi42ODgxNzEzODY3MTg3NXB4O1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAzMDIuNjg4MTcxMzg2NzE4NzVweDtcclxuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuMnM7XHJcbn1cclxuI2xvZ28gcGF0aDpudGgtY2hpbGQoNCl7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogNDU3LjAyMDA1MDA0ODgyODFweDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogNDU3LjAyMDA1MDA0ODgyODFweDtcclxuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuM3M7XHJcbn1cclxuI2xvZ28gcGF0aDpudGgtY2hpbGQoNSl7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjk2LjEyMjQ5NzU1ODU5Mzc1cHg7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI5Ni4xMjI0OTc1NTg1OTM3NXB4O1xyXG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC40cztcclxufVxyXG4jbG9nbyBwYXRoOm50aC1jaGlsZCg2KXtcclxuICBzdHJva2UtZGFzaGFycmF5OiAzNTkuNTk3MTY3OTY4NzVweDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogMzU5LjU5NzE2Nzk2ODc1cHg7XHJcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjVzO1xyXG59XHJcbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDcpe1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDMzNy4zMjAwMDczMjQyMTg3NXB4O1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAzMzcuMzIwMDA3MzI0MjE4NzVweDtcclxuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuNnM7XHJcbn1cclxuI2xvZ28gcGF0aDpudGgtY2hpbGQoOCl7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogMzE2LjU5MDMzMjAzMTI1cHg7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMxNi41OTAzMzIwMzEyNXB4O1xyXG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC43cztcclxufVxyXG4jbG9nbyBwYXRoOm50aC1jaGlsZCg5KXtcclxuICBzdHJva2UtZGFzaGFycmF5OiA0NTcuMDIwMDgwNTY2NDA2MjVweDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogNDU3LjAyMDA4MDU2NjQwNjI1cHg7XHJcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjhzO1xyXG59XHJcbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDEwKXtcclxuICBzdHJva2UtZGFzaGFycmF5OiAyOTYuMTIyNDk3NTU4NTkzNzVweDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogMjk2LjEyMjQ5NzU1ODU5Mzc1cHg7XHJcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjlzO1xyXG59XHJcbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDExKXtcclxuICBzdHJva2UtZGFzaGFycmF5OiAyNDUuMzk4NTI5MDUyNzM0MzhweDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogMjQ1LjM5ODUyOTA1MjczNDM4cHg7XHJcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAxcztcclxufVxyXG4jbG9nbyBwYXRoOm50aC1jaGlsZCgxMil7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogMzE2LjU5MDc4OTc5NDkyMTlweDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogMzE2LjU5MDc4OTc5NDkyMTlweDtcclxuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDEuMXM7XHJcbn1cclxuI2xvZ28gcGF0aDpudGgtY2hpbGQoMTMpe1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDMwMi42ODg1MDcwODAwNzgxcHg7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMwMi42ODg1MDcwODAwNzgxcHg7XHJcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAxLjJzO1xyXG59XHJcbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDE0KXtcclxuICBzdHJva2UtZGFzaGFycmF5OiAgMzU5LjU5NzE2Nzk2ODc1cHg7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6ICAzNTkuNTk3MTY3OTY4NzVweDtcclxuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDEuM3M7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGluZS1hbmltIHtcclxuICAgIHRve1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMjU7XHJcbiAgICB9XHJcbiAgXHJcbn1cclxuQGtleWZyYW1lcyBmaWxsIHtcclxuICBmcm9te1xyXG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIHRve1xyXG4gICAgZmlsbDp3aGl0ZTsgXHJcbiAgfVxyXG59XHJcblxyXG4uZGVwYXJ0bWVudHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIwUHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNjAlOyBcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNjAlKTtcclxuICBhbmltYXRpb246IGZhZGVJbiA0LjVzO1xyXG59XHJcblxyXG4uZWNlTG9nb3tcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGhlaWdodDogMTIlO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDQuNXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7IG9wYWNpdHk6IDA7IH1cclxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4uZ2x5cGhpY29uLXRyaWFuZ2xlLWJvdHRvbXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA5NSU7IFxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC05NSUpO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDQuNXM7XHJcbn1cclxuXHJcbiNhYm91dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XHJcbiAgXHJcbn1cclxuXHJcbiNhYm91dCAuZGl2LWltZy1iZyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgYm9yZGVyOiAyMHB4IHNvbGlkICNiOGEwN2U7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG5cclxuI2Fib3V0IC5kaXYtaW1nLWJnIC5hYm91dC1pbWcgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAyNSAyNSA4NXB4IDI1IHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbiAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4jYWJvdXQgLmFib3V0LWRlc2NyIC5wLWhlYWRpbmcge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Fib3V0IC5hYm91dC1kZXNjciAuc2VwYXJhdG9yIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uaGVhZGluZ3tcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcbiNleHBhbmRCdXR0b257XHJcbiAgYmFja2dyb3VuZDogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjYjhhMDdlOyBcclxufVxyXG4jZXhwYW5kQnV0dG9uOmhvdmVye1xyXG4gIGNvbG9yOiAjYjhhMDdlYWI7XHJcbn1cclxuXHJcbiNtb3JlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jZnVuZGluZ3tcclxuICBoZWlnaHQ6IDYwdmg7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYjhhMDdlO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4uc2VhcmNoLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhhMDdlO1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLnB1YmxpY2F0aW9ucyB7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG50aCwgdGQge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjhhMDdlO1xyXG59XHJcbmF7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcbi5saW5le1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGEwN2U7XHJcbn1cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4jcmVzZWFyY2hDYXJvdXNlbHtcclxuICAgIGhlaWdodDogNjB2aCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLnctMTAwe1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgY29sb3I6ICNiOGEwN2U7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcblxyXG4uQU17XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBmaWx0ZXI6IGludmVydCg2NiUpIHNlcGlhKDIxJSkgc2F0dXJhdGUoNDQ3JSkgaHVlLXJvdGF0ZSgzNTZkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCg4OSUpO1xyXG59IFxyXG4uY2Fyb3VzZWwtaW5kaWNhdG9yc3tcclxuICAgIGZpbHRlcjogaW52ZXJ0KDY2JSkgc2VwaWEoMjElKSBzYXR1cmF0ZSg0NDclKSBodWUtcm90YXRlKDM1NmRlZykgYnJpZ2h0bmVzcyg5NCUpIGNvbnRyYXN0KDg5JSk7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24sXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbntcclxuICAgIGZpbHRlcjogaW52ZXJ0KDY2JSkgc2VwaWEoMjElKSBzYXR1cmF0ZSg0NDclKSBodWUtcm90YXRlKDM1NmRlZykgYnJpZ2h0bmVzcyg5NCUpIGNvbnRyYXN0KDg5JSk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbm5hdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMjUgMnB4IDkycHggMjUgcmdiYSgwLCAwLCAwLCAwLjE4KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDI1IDJweCA5MnB4IDI1IHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbiAgYm94LXNoYWRvdzogMjUgMnB4IDkycHggMjUgcmdiYSgwLCAwLCAwLCAwLjE4KTtcclxufVxyXG5cclxuLm5hdi1tZW51IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxubmF2IHVsIGxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG5cclxubmF2IHVsIGxpIGEge1xyXG4gIHBhZGRpbmc6IDJweCAwIDAgMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjOTk5OTk5O1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbm5hdiB1bCBsaSBhOmhvdmVye1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxufVxyXG5cclxuLmxvZ28gaW1nIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMzAlO1xyXG59XHJcbi5sb2dvIGltZzpob3ZlcntcclxuICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuLnJlc3BvbnNpdmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogI2FmYWZhZjtcclxufVxyXG5cclxuLm1haW4tbmF2IHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ubmF2YmFyLWV4cGFuZC1sZ3tcclxuICBhbmltYXRpb246IGZhZGVJbiAwLjc1cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9IFxyXG59XHJcblxyXG5cclxuYm9keXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNzRkO1xyXG59XHJcblxyXG4jY29udGFjdHtcclxuICBwYWRkaW5nOiA0JTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG4udGl0bGV7XHJcbiAgcGFkZGluZy1ib3R0b206IDElO1xyXG59XHJcbi5jb2wtbWQtM3tcclxuICBiYWNrZ3JvdW5kOiAjYjhhMDdlO1xyXG4gIHBhZGRpbmc6IDQlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LWluZm8gaDJ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG4uY29sLW1kLTl7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAzJTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gbGFiZWx7XHJcbiAgZm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGJ1dHRvbntcclxuICBiYWNrZ3JvdW5kOiNiOGEwN2VlMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBidXR0b246Zm9jdXN7XHJcbiAgYm94LXNoYWRvdzpub25lO1xyXG59XHJcblxyXG5cclxuaDMsaDR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cHtcclxuICBwYWRkaW5nOiAyJTtcclxuICBcclxufVxyXG5cclxuLmxpbmV7XHJcbiAgbWFyZ2luLXRvcDogMTBweDsgXHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgd2lkdGg6IDU1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBcclxuICBhbmQgKGRldmljZS13aWR0aDogNDE0cHgpIFxyXG4gIGFuZCAoZGV2aWNlLWhlaWdodDogODk2cHgpe1xyXG4gICAgXHJcbiAgICBodG1se1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNsb2dve1xyXG4gICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICB9XHJcbiAgICAuZGVwYXJ0bWVudHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAjYWJvdXQgLmRpdi1pbWctYmcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnAtaGVhZGluZ3tcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"] });


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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["*[_ngcontent-%COMP%] {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"San Francisco\", Helvetica, Arial, sans-serif;\r\n    font-weight: 300;\r\n    margin: 0;\r\n}\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    margin: 0 0;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    background: #f3f2f2;\r\n}\r\nh4[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n    color: #000;\r\n    opacity: 0.85;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n    font-size: 12.5px;\r\n    color: #000;\r\n    opacity: 0.8;\r\n    font-weight: 400;\r\n}\r\nform[_ngcontent-%COMP%] {\r\n    padding: 40px 30px;\r\n    background: #fefefe;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    padding-bottom: 20px;\r\n}\r\nform[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n    color: rgba(0, 0, 0, .5);\r\n}\r\nform[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: rgba(0, 0, 0, 1);\r\n    font-weight: 700;\r\n}\r\nform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    line-height: 155%;\r\n    margin-bottom: 5px;\r\n    font-size: 14px;\r\n    color: #000;\r\n    opacity: 0.65;\r\n    font-weight: 400;\r\n    max-width: 200px;\r\n    margin-bottom: 40px;\r\n}\r\na.discrete[_ngcontent-%COMP%] {\r\n    color: rgba(0, 0, 0, .4);\r\n    font-size: 14px;\r\n    border-bottom: solid 1px rgba(0, 0, 0, .0);\r\n    padding-bottom: 4px;\r\n    margin-left: auto;\r\n    font-weight: 300;\r\n    transition: all 0.3s ease;\r\n    margin-top: 40px;\r\n}\r\na.discrete[_ngcontent-%COMP%]:hover {\r\n    border-bottom: solid 1px rgba(0, 0, 0, .2);\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n    -webkit-appearance: none;\r\n    width: auto;\r\n    min-width: 100px;\r\n    border-radius: 24px;\r\n    text-align: center;\r\n    padding: 15px 40px;\r\n    margin-top: 5px;\r\n    background-color: #b08bf8;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    margin-left: auto;\r\n    font-weight: 500;\r\n    box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, .13);\r\n    border: none;\r\n    transition: all 0.3s ease;\r\n    outline: 0;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    transform: translateY(-3px);\r\n    box-shadow: 0 2px 6px -1px rgba(182, 157, 230, .65);\r\n}\r\nbutton[_ngcontent-%COMP%]:hover:active {\r\n    transform: scale(0.99);\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    padding: 20px 0px;\r\n    height: 56px;\r\n    border: none;\r\n    border-bottom: solid 1px rgba(0, 0, 0, .1);\r\n    background: #fff;\r\n    min-width: 280px;\r\n    box-sizing: border-box;\r\n    transition: all 0.3s linear;\r\n    color: #000;\r\n    font-weight: 400;\r\n    -webkit-appearance: none;\r\n}\r\ninput[_ngcontent-%COMP%]:focus {\r\n    border-bottom: solid 1px #b69de6;\r\n    outline: 0;\r\n    box-shadow: 0 2px 6px -8px rgba(182, 157, 230, .45);\r\n}\r\n.floating-label[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n}\r\n.floating-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: calc(50% - 7px);\r\n    left: 0;\r\n    opacity: 0;\r\n    transition: all 0.3s ease;\r\n}\r\n.floating-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) {\r\n    padding: 28px 0px 12px 0px;\r\n}\r\n.floating-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%] {\r\n    transform: translateY(-10px);\r\n    opacity: 0.7;\r\n}\r\n.session[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: auto;\r\n    height: auto;\r\n    margin: auto auto;\r\n    background: #fff;\r\n    border-radius: 4px;\r\n    box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, .12);\r\n}\r\n.left[_ngcontent-%COMP%] {\r\n    width: 220px;\r\n    height: auto;\r\n    min-height: 100%;\r\n    position: relative;\r\n    background-image: url('loginImage.jpg');    \r\n    background-size: cover;\r\n    border-top-left-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n}\r\n.left[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    width: auto;\r\n    margin: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2RkFBNkY7SUFDN0YsZ0JBQWdCO0lBQ2hCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLCtDQUErQztJQUMvQyxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLG1EQUFtRDtBQUN2RDtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixtREFBbUQ7QUFDdkQ7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsT0FBTztJQUNQLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwrQ0FBK0M7QUFDbkQ7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1Q0FBb0Q7SUFDcEQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNhbiBGcmFuY2lzY29cIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgbWFyZ2luOiAwIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmMmYyO1xyXG59XHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6IDAuODU7XHJcbn1cclxubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMi41cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuZm9ybSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbmZvcm0gaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxufVxyXG5mb3JtIGg0IHNwYW4ge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbmZvcm0gcCB7XHJcbiAgICBsaW5lLWhlaWdodDogMTU1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogMC42NTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5hLmRpc2NyZXRlIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIC4wKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5hLmRpc2NyZXRlOmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxufVxyXG5idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHggNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMDhiZjg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMTMpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAtMXB4IHJnYmEoMTgyLCAxNTcsIDIzMCwgLjY1KTtcclxufVxyXG5idXR0b246aG92ZXI6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XHJcbn1cclxuaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWluLXdpZHRoOiAyODBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNiNjlkZTY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IC04cHggcmdiYSgxODIsIDE1NywgMjMwLCAuNDUpO1xyXG59XHJcbi5mbG9hdGluZy1sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mbG9hdGluZy1sYWJlbCBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gN3B4KTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG4uZmxvYXRpbmctbGFiZWwgaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xyXG4gICAgcGFkZGluZzogMjhweCAwcHggMTJweCAwcHg7XHJcbn1cclxuLmZsb2F0aW5nLWxhYmVsIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgbGFiZWwge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxufVxyXG4uc2Vzc2lvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbn1cclxuLmxlZnQge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9sb2dpbkltYWdlLmpwZ1wiKTsgICAgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG59XHJcbi5sZWZ0IHN2ZyB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG4iXX0= */"] });


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





function PublicationsComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](journals_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.journalsData.length - ind_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", journals_r2.journal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", journals_r2.authors, "");
} }
function PublicationsComponent_tr_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td")(2, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](conferences_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.conferencesData.length - y_r5);
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
PublicationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PublicationsComponent, selectors: [["app-publications"]], decls: 94, vars: 10, consts: [[1, "main-nav", "navbar-expand-lg"], [1, "row"], [2, "padding-right", "15%"], [1, "logo"], ["href", "index.html"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", "alt", "logo"], [1, "nav-menu", "list-unstyled"], ["href", "#home", 1, "smooth-scroll"], ["href", "#about", 1, "smooth-scroll"], ["href", "/awards", 1, "smooth-scroll"], ["href", "/research", 1, "smooth-scroll"], ["href", "/students", 1, "smooth-scroll"], ["id", "publications"], ["width", "638", "height", "87", "viewBox", "0 0 638 87", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "id", "logo"], ["d", "M56.7 35.4C56.7 39.4667 55.7667 43.2 53.9 46.6C52.0333 49.9333 49.1667 52.6333 45.3 54.7C41.4333 56.7667 36.6333 57.8 30.9 57.8H20.3V83H3.2V12.8H30.9C36.5 12.8 41.2333 13.7667 45.1 15.7C48.9667 17.6333 51.8667 20.3 53.8 23.7C55.7333 27.1 56.7 31 56.7 35.4ZM29.6 44.2C32.8667 44.2 35.3 43.4333 36.9 41.9C38.5 40.3667 39.3 38.2 39.3 35.4C39.3 32.6 38.5 30.4333 36.9 28.9C35.3 27.3667 32.8667 26.6 29.6 26.6H20.3V44.2H29.6Z", "stroke", "black", "stroke-width", "5"], ["d", "M120.702 27.2V83H103.602V75.4C101.869 77.8667 99.5023 79.8667 96.5023 81.4C93.569 82.8667 90.3023 83.6 86.7023 83.6C82.4357 83.6 78.669 82.6667 75.4023 80.8C72.1357 78.8667 69.6023 76.1 67.8023 72.5C66.0023 68.9 65.1023 64.6667 65.1023 59.8V27.2H82.1023V57.5C82.1023 61.2333 83.069 64.1333 85.0023 66.2C86.9357 68.2667 89.5357 69.3 92.8023 69.3C96.1357 69.3 98.769 68.2667 100.702 66.2C102.636 64.1333 103.602 61.2333 103.602 57.5V27.2H120.702Z", "stroke", "black", "stroke-width", "5"], ["d", "M150.085 35.1C151.685 32.5 153.985 30.4 156.985 28.8C159.985 27.2 163.418 26.4 167.285 26.4C171.885 26.4 176.052 27.5667 179.785 29.9C183.518 32.2333 186.452 35.5667 188.585 39.9C190.785 44.2333 191.885 49.2667 191.885 55C191.885 60.7333 190.785 65.8 188.585 70.2C186.452 74.5333 183.518 77.9 179.785 80.3C176.052 82.6333 171.885 83.8 167.285 83.8C163.352 83.8 159.918 83.0333 156.985 81.5C154.052 79.9 151.752 77.8 150.085 75.2V83H132.985V9H150.085V35.1ZM174.485 55C174.485 50.7333 173.285 47.4 170.885 45C168.552 42.5333 165.652 41.3 162.185 41.3C158.785 41.3 155.885 42.5333 153.485 45C151.152 47.4667 149.985 50.8333 149.985 55.1C149.985 59.3667 151.152 62.7333 153.485 65.2C155.885 67.6667 158.785 68.9 162.185 68.9C165.585 68.9 168.485 67.6667 170.885 65.2C173.285 62.6667 174.485 59.2667 174.485 55Z", "stroke", "black", "stroke-width", "5"], ["d", "M217.956 9V83H200.856V9H217.956Z", "stroke", "black", "stroke-width", "5"], ["d", "M238.948 21.4C235.948 21.4 233.482 20.5333 231.548 18.8C229.682 17 228.748 14.8 228.748 12.2C228.748 9.53333 229.682 7.33333 231.548 5.59999C233.482 3.79999 235.948 2.89999 238.948 2.89999C241.882 2.89999 244.282 3.79999 246.148 5.59999C248.082 7.33333 249.048 9.53333 249.048 12.2C249.048 14.8 248.082 17 246.148 18.8C244.282 20.5333 241.882 21.4 238.948 21.4ZM247.448 27.2V83H230.348V27.2H247.448Z", "stroke", "black", "stroke-width", "5"], ["d", "M256.441 55.1C256.441 49.3 257.607 44.2333 259.941 39.9C262.341 35.5667 265.641 32.2333 269.841 29.9C274.107 27.5667 278.974 26.4 284.441 26.4C291.441 26.4 297.274 28.2333 301.941 31.9C306.674 35.5667 309.774 40.7333 311.241 47.4H293.041C291.507 43.1333 288.541 41 284.141 41C281.007 41 278.507 42.2333 276.641 44.7C274.774 47.1 273.841 50.5667 273.841 55.1C273.841 59.6333 274.774 63.1333 276.641 65.6C278.507 68 281.007 69.2 284.141 69.2C288.541 69.2 291.507 67.0667 293.041 62.8H311.241C309.774 69.3333 306.674 74.4667 301.941 78.2C297.207 81.9333 291.374 83.8 284.441 83.8C278.974 83.8 274.107 82.6333 269.841 80.3C265.641 77.9667 262.341 74.6333 259.941 70.3C257.607 65.9667 256.441 60.9 256.441 55.1Z", "stroke", "black", "stroke-width", "5"], ["d", "M316.987 55C316.987 49.2667 318.054 44.2333 320.187 39.9C322.387 35.5667 325.354 32.2333 329.087 29.9C332.821 27.5667 336.987 26.4 341.587 26.4C345.521 26.4 348.954 27.2 351.887 28.8C354.887 30.4 357.187 32.5 358.787 35.1V27.2H375.887V83H358.787V75.1C357.121 77.7 354.787 79.8 351.787 81.4C348.854 83 345.421 83.8 341.487 83.8C336.954 83.8 332.821 82.6333 329.087 80.3C325.354 77.9 322.387 74.5333 320.187 70.2C318.054 65.8 316.987 60.7333 316.987 55ZM358.787 55.1C358.787 50.8333 357.587 47.4667 355.187 45C352.854 42.5333 349.987 41.3 346.587 41.3C343.187 41.3 340.287 42.5333 337.887 45C335.554 47.4 334.387 50.7333 334.387 55C334.387 59.2667 335.554 62.6667 337.887 65.2C340.287 67.6667 343.187 68.9 346.587 68.9C349.987 68.9 352.854 67.6667 355.187 65.2C357.587 62.7333 358.787 59.3667 358.787 55.1Z", "stroke", "black", "stroke-width", "5"], ["d", "M419.359 68.5V83H410.659C404.459 83 399.625 81.5 396.159 78.5C392.692 75.4333 390.959 70.4667 390.959 63.6V41.4H384.159V27.2H390.959V13.6H408.059V27.2H419.259V41.4H408.059V63.8C408.059 65.4667 408.459 66.6667 409.259 67.4C410.059 68.1333 411.392 68.5 413.259 68.5H419.359Z", "stroke", "black", "stroke-width", "5"], ["d", "M437.484 21.4C434.484 21.4 432.017 20.5333 430.084 18.8C428.217 17 427.284 14.8 427.284 12.2C427.284 9.53333 428.217 7.33333 430.084 5.59999C432.017 3.79999 434.484 2.89999 437.484 2.89999C440.417 2.89999 442.817 3.79999 444.684 5.59999C446.617 7.33333 447.584 9.53333 447.584 12.2C447.584 14.8 446.617 17 444.684 18.8C442.817 20.5333 440.417 21.4 437.484 21.4ZM445.984 27.2V83H428.884V27.2H445.984Z", "stroke", "black", "stroke-width", "5"], ["d", "M483.776 83.8C478.309 83.8 473.376 82.6333 468.976 80.3C464.642 77.9667 461.209 74.6333 458.676 70.3C456.209 65.9667 454.976 60.9 454.976 55.1C454.976 49.3667 456.242 44.3333 458.776 40C461.309 35.6 464.776 32.2333 469.176 29.9C473.576 27.5667 478.509 26.4 483.976 26.4C489.442 26.4 494.376 27.5667 498.776 29.9C503.176 32.2333 506.642 35.6 509.176 40C511.709 44.3333 512.976 49.3667 512.976 55.1C512.976 60.8333 511.676 65.9 509.076 70.3C506.542 74.6333 503.042 77.9667 498.576 80.3C494.176 82.6333 489.242 83.8 483.776 83.8ZM483.776 69C487.042 69 489.809 67.8 492.076 65.4C494.409 63 495.576 59.5667 495.576 55.1C495.576 50.6333 494.442 47.2 492.176 44.8C489.976 42.4 487.242 41.2 483.976 41.2C480.642 41.2 477.876 42.4 475.676 44.8C473.476 47.1333 472.376 50.5667 472.376 55.1C472.376 59.5667 473.442 63 475.576 65.4C477.776 67.8 480.509 69 483.776 69Z", "stroke", "black", "stroke-width", "5"], ["d", "M556.048 26.6C562.581 26.6 567.781 28.7333 571.648 33C575.581 37.2 577.548 43 577.548 50.4V83H560.548V52.7C560.548 48.9667 559.581 46.0667 557.648 44C555.714 41.9333 553.114 40.9 549.848 40.9C546.581 40.9 543.981 41.9333 542.048 44C540.114 46.0667 539.148 48.9667 539.148 52.7V83H522.048V27.2H539.148V34.6C540.881 32.1333 543.214 30.2 546.148 28.8C549.081 27.3333 552.381 26.6 556.048 26.6Z", "stroke", "black", "stroke-width", "5"], ["d", "M612.13 83.8C607.264 83.8 602.93 82.9667 599.13 81.3C595.33 79.6333 592.33 77.3667 590.13 74.5C587.93 71.5667 586.697 68.3 586.43 64.7H603.33C603.53 66.6333 604.43 68.2 606.03 69.4C607.63 70.6 609.597 71.2 611.93 71.2C614.064 71.2 615.697 70.8 616.83 70C618.03 69.1333 618.63 68.0333 618.63 66.7C618.63 65.1 617.797 63.9333 616.13 63.2C614.464 62.4 611.764 61.5333 608.03 60.6C604.03 59.6667 600.697 58.7 598.03 57.7C595.364 56.6333 593.064 55 591.13 52.8C589.197 50.5333 588.23 47.5 588.23 43.7C588.23 40.5 589.097 37.6 590.83 35C592.63 32.3333 595.23 30.2333 598.63 28.7C602.097 27.1667 606.197 26.4 610.93 26.4C617.93 26.4 623.43 28.1333 627.43 31.6C631.497 35.0667 633.83 39.6667 634.43 45.4H618.63C618.364 43.4667 617.497 41.9333 616.03 40.8C614.63 39.6667 612.764 39.1 610.43 39.1C608.43 39.1 606.897 39.5 605.83 40.3C604.764 41.0333 604.23 42.0667 604.23 43.4C604.23 45 605.064 46.2 606.73 47C608.464 47.8 611.13 48.6 614.73 49.4C618.864 50.4667 622.23 51.5333 624.83 52.6C627.43 53.6 629.697 55.2667 631.63 57.6C633.63 59.8667 634.664 62.9333 634.73 66.8C634.73 70.0667 633.797 73 631.93 75.6C630.13 78.1333 627.497 80.1333 624.03 81.6C620.63 83.0667 616.664 83.8 612.13 83.8Z", "stroke", "black", "stroke-width", "5"], [1, "container"], [1, "search-container"], [1, "title"], ["type", "text", "placeholder", "Search...", 1, "search-input", 3, "ngModel", "ngModelChange"], [1, "search-button"], [1, "publications"], [4, "ngFor", "ngForOf"], [1, "line"], ["href", "#", "target", "_blank"]], template: function PublicationsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li")(21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "path", 14)(26, "path", 15)(27, "path", 16)(28, "path", 17)(29, "path", 18)(30, "path", 19)(31, "path", 20)(32, "path", 21)(33, "path", 22)(34, "path", 23)(35, "path", 24)(36, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "br")(38, "br")(39, "br")(40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 26)(42, "div", 27)(43, "h1", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Journals Published: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PublicationsComponent_Template_input_ngModelChange_45_listener($event) { return ctx.searchJournals = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 31)(49, "table")(50, "thead")(51, "tr")(52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Paper Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Journal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "People");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, PublicationsComponent_tr_61_Template, 10, 4, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "br")(64, "br")(65, "div", 33)(66, "br")(67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 26)(69, "div", 27)(70, "h1", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Conferences: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PublicationsComponent_Template_input_ngModelChange_72_listener($event) { return ctx.searchPublications = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 31)(76, "table")(77, "thead")(78, "tr")(79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Conference Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Conference");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "People");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](90, PublicationsComponent_tr_90_Template, 12, 5, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](91, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "br")(93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchJournals);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](62, 4, ctx.journalsData, ctx.searchJournals));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchPublications);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](91, 7, ctx.conferencesData, ctx.searchPublications));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_search_pipe__WEBPACK_IMPORTED_MODULE_1__.SearchPipe], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\n*[_ngcontent-%COMP%]{\r\n  padding: 0; \r\n  margin: 0; \r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n    background-color: #f7f7f7;\r\n    top: 0;\r\n    z-index: 1000;\r\n    width: 100%;\r\n    padding: 20px;\r\n    display: none;\r\n}\r\n\r\n.nav-menu[_ngcontent-%COMP%] {\r\n    float: right;\r\n    line-height: 32px;\r\n    margin-bottom: 0;\r\n    padding-top: 16px;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-right: 15px;\r\n    font-family: 'Poppins', sans-serif;\r\n    margin-left: 40px;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 2px 0 0 0;\r\n    position: relative;\r\n    display: block;\r\n    font-size: 15px;\r\n    color: #999999;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 500;\r\n    line-height: 16px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.02em;\r\n    text-transform: capitalize;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    font-size: 16px;\r\n  }\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding-left: 20%;\r\n  }\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    height: 30%;\r\n  }\r\n\r\n.responsive[_ngcontent-%COMP%] {\r\n    display: none;\r\n    font-size: 23px;\r\n  }\r\n\r\n.active[_ngcontent-%COMP%] {\r\n    color: #afafaf;\r\n  }\r\n\r\n.main-nav[_ngcontent-%COMP%] {\r\n    display: block !important;\r\n    position: relative;\r\n  }\r\n\r\n.navbar-expand-lg[_ngcontent-%COMP%]{\r\n    animation: fadeIn 0.75s;\r\n  }\r\n\r\n@keyframes fadeIn {\r\n    0% { opacity: 0; }\r\n    100% { opacity: 1; } \r\n  }\r\n\r\n#publications[_ngcontent-%COMP%]{\r\n    height: auto !important;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  top: -20%; \r\n  left: 50%;\r\n  transform: translate(-50%, 20%); \r\n  margin-bottom: 10px;\r\n  animation: fill 0.5s ease forwards 2.5s; \r\n  z-index: 100;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(1){\r\n    stroke-dasharray:  294.2875061035156px;\r\n    stroke-dashoffset: 294.2875061035156px;\r\n    animation: line-anim 2s ease forwards; \r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2){\r\n    stroke-dasharray: 299.8020935058594px;\r\n    stroke-dashoffset: 299.8020935058594px;\r\n    animation: line-anim 2s ease forwards 0.08333s;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3){\r\n    stroke-dasharray: 349.8691711425781px;\r\n    stroke-dashoffset: 349.8691711425781px;\r\n    animation: line-anim 2s ease forwards 0.16666666666s;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4){\r\n    stroke-dasharray: 182.19998168945312px;\r\n    stroke-dashoffset: 182.19998168945312px;\r\n    animation: line-anim 2s ease forwards 0.3333s;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5){\r\n    stroke-dasharray: 313.46636962890625px;\r\n    stroke-dashoffset: 313.46636962890625px;\r\n    animation: line-anim 2s ease forwards 0.4166666s;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6){\r\n    stroke-dasharray: 333.52908325195312px;\r\n    stroke-dashoffset: 333.52908325195312px;\r\n    animation: line-anim 2s ease forwards 0.5s;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(7){\r\n    stroke-dasharray:   260.28506469726562px;\r\n    stroke-dashoffset:  260.28506469726562px;\r\n    animation: line-anim 2s ease forwards 0.5833333s; \r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(8){\r\n    stroke-dasharray: 442.1668395996094px;\r\n    stroke-dashoffset: 442.1668395996094px;\r\n    animation: line-anim 2s ease forwards 0.6666666s;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(9){\r\n    stroke-dasharray: 313.4666748046875px;\r\n    stroke-dashoffset: 313.4666748046875px;\r\n    animation: line-anim 2s ease forwards 0.75s;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(10){\r\n    stroke-dasharray: 264.819091796875px;\r\n    stroke-dashoffset: 264.819091796875px;\r\n    animation: line-anim 2s ease forwards 0.8333333s;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(11){\r\n    stroke-dasharray: 299.34197998046875px;\r\n    stroke-dashoffset: 299.34197998046875px;\r\n    animation: line-anim 2s ease forwards 0.91666s;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(12){\r\n    stroke-dasharray: 289.90960693359375px;\r\n    stroke-dashoffset: 289.90960693359375px;\r\n    animation: line-anim 2s ease forwards 1s;\r\n  }\r\n\r\n@keyframes line-anim {\r\n    to{\r\n      stroke-dashoffset: 0px;\r\n    }\r\n  \r\n}\r\n\r\n@keyframes fill {\r\n  from{\r\n    fill: transparent;\r\n  }\r\n  to{\r\n    fill:black; \r\n  }\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n\r\n.search-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 400px;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  border: none;\r\n  border-bottom: 3px solid #b8a07e;\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.search-button[_ngcontent-%COMP%] {\r\n  padding: 10px 20px;\r\n  font-size: 16px;\r\n  background-color: #b8a07e;\r\n  color: #FFF;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.publications[_ngcontent-%COMP%] {\r\n  max-height: 500px;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n}\r\n\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  text-align: center;\r\n  border-bottom: 1px solid #b8a07e;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  color: black;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.line[_ngcontent-%COMP%]{\r\n  height: 2px;\r\n  width: 40%;\r\n  margin: 0 auto; \r\n  background-color: #b8a07e;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTs7QUFFNUU7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGtDQUFrQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixNQUFNO0lBQ04sYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFRTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QiwwQkFBMEI7RUFDNUI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7QUFHQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLEtBQUssVUFBVSxFQUFFO0lBQ2pCLE9BQU8sVUFBVSxFQUFFO0VBQ3JCOztBQUlBO0lBQ0UsdUJBQXVCO0VBQ3pCOztBQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsWUFBWTtBQUNkOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QyxxQ0FBcUM7RUFDdkM7O0FBRUE7SUFDRSxxQ0FBcUM7SUFDckMsc0NBQXNDO0lBQ3RDLDhDQUE4QztFQUNoRDs7QUFDQTtJQUNFLHFDQUFxQztJQUNyQyxzQ0FBc0M7SUFDdEMsb0RBQW9EO0VBQ3REOztBQUNBO0lBQ0Usc0NBQXNDO0lBQ3RDLHVDQUF1QztJQUN2Qyw2Q0FBNkM7RUFDL0M7O0FBQ0E7SUFDRSxzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLGdEQUFnRDtFQUNsRDs7QUFDQTtJQUNFLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFDdkMsMENBQTBDO0VBQzVDOztBQUVBO0lBQ0Usd0NBQXdDO0lBQ3hDLHdDQUF3QztJQUN4QyxnREFBZ0Q7RUFDbEQ7O0FBRUE7SUFDRSxxQ0FBcUM7SUFDckMsc0NBQXNDO0lBQ3RDLGdEQUFnRDtFQUNsRDs7QUFDQTtJQUNFLHFDQUFxQztJQUNyQyxzQ0FBc0M7SUFDdEMsMkNBQTJDO0VBQzdDOztBQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxnREFBZ0Q7RUFDbEQ7O0FBQ0E7SUFDRSxzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLDhDQUE4QztFQUNoRDs7QUFDQTtJQUNFLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFDdkMsd0NBQXdDO0VBQzFDOztBQUlGO0lBQ0k7TUFDRSxzQkFBc0I7SUFDeEI7O0FBRUo7O0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJwdWJsaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4qe1xyXG4gIHBhZGRpbmc6IDA7IFxyXG4gIG1hcmdpbjogMDsgXHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxubmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4gIFxyXG4gIC5uYXYtbWVudSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgbmF2IHVsIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICBuYXYgdWwgbGkgYSB7XHJcbiAgICBwYWRkaW5nOiAycHggMCAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiB1bCBsaSBhOmhvdmVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAubG9nbyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogMjAlO1xyXG4gIH1cclxuICBcclxuICAubG9nbyBpbWcge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gIH1cclxuIFxyXG4gIC5yZXNwb25zaXZlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNhZmFmYWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAubmF2YmFyLWV4cGFuZC1sZ3tcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNzVzO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9IFxyXG4gIH1cclxuXHJcblxyXG5cclxuICAjcHVibGljYXRpb25ze1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4jbG9nb3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMjAlOyBcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMjAlKTsgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBhbmltYXRpb246IGZpbGwgMC41cyBlYXNlIGZvcndhcmRzIDIuNXM7IFxyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuI2xvZ28gcGF0aDpudGgtY2hpbGQoMSl7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAgMjk0LjI4NzUwNjEwMzUxNTZweDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyOTQuMjg3NTA2MTAzNTE1NnB4O1xyXG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkczsgXHJcbiAgfVxyXG4gIFxyXG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDIpe1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjk5LjgwMjA5MzUwNTg1OTRweDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyOTkuODAyMDkzNTA1ODU5NHB4O1xyXG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjA4MzMzcztcclxuICB9XHJcbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoMyl7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAzNDkuODY5MTcxMTQyNTc4MXB4O1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDM0OS44NjkxNzExNDI1NzgxcHg7XHJcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuMTY2NjY2NjY2NjZzO1xyXG4gIH1cclxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCg0KXtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE4Mi4xOTk5ODE2ODk0NTMxMnB4O1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE4Mi4xOTk5ODE2ODk0NTMxMnB4O1xyXG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjMzMzNzO1xyXG4gIH1cclxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCg1KXtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDMxMy40NjYzNjk2Mjg5MDYyNXB4O1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMxMy40NjYzNjk2Mjg5MDYyNXB4O1xyXG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjQxNjY2NjZzO1xyXG4gIH1cclxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCg2KXtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDMzMy41MjkwODMyNTE5NTMxMnB4O1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMzMy41MjkwODMyNTE5NTMxMnB4O1xyXG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjVzO1xyXG4gIH1cclxuICBcclxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCg3KXtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6ICAgMjYwLjI4NTA2NDY5NzI2NTYycHg7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogIDI2MC4yODUwNjQ2OTcyNjU2MnB4O1xyXG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjU4MzMzMzNzOyBcclxuICB9XHJcbiAgXHJcbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoOCl7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA0NDIuMTY2ODM5NTk5NjA5NHB4O1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ0Mi4xNjY4Mzk1OTk2MDk0cHg7XHJcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuNjY2NjY2NnM7XHJcbiAgfVxyXG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDkpe1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMzEzLjQ2NjY3NDgwNDY4NzVweDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzMTMuNDY2Njc0ODA0Njg3NXB4O1xyXG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjc1cztcclxuICB9XHJcbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoMTApe1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjY0LjgxOTA5MTc5Njg3NXB4O1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI2NC44MTkwOTE3OTY4NzVweDtcclxuICAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC44MzMzMzMzcztcclxuICB9XHJcbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoMTEpe1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjk5LjM0MTk3OTk4MDQ2ODc1cHg7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjk5LjM0MTk3OTk4MDQ2ODc1cHg7XHJcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuOTE2NjZzO1xyXG4gIH1cclxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCgxMil7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyODkuOTA5NjA2OTMzNTkzNzVweDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyODkuOTA5NjA2OTMzNTkzNzVweDtcclxuICAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMXM7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbkBrZXlmcmFtZXMgbGluZS1hbmltIHtcclxuICAgIHRve1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMHB4O1xyXG4gICAgfVxyXG4gIFxyXG59XHJcbkBrZXlmcmFtZXMgZmlsbCB7XHJcbiAgZnJvbXtcclxuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICB0b3tcclxuICAgIGZpbGw6YmxhY2s7IFxyXG4gIH1cclxufVxyXG4udGl0bGV7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5zZWFyY2gtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uc2VhcmNoLWlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2I4YTA3ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnNlYXJjaC1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I4YTA3ZTtcclxuICBjb2xvcjogI0ZGRjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5wdWJsaWNhdGlvbnMge1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxudGgsIHRkIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I4YTA3ZTtcclxufVxyXG5he1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG50aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG4ubGluZXtcclxuICBoZWlnaHQ6IDJweDtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvOyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhhMDdlO1xyXG59Il19 */"] });


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/database.service */ 4382);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _minni_read_more__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @minni/read-more */ 8028);






function ResearchComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 28)(2, "h1", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 30)(5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const research_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", research_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", research_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](research_r1.content);
} }
class ResearchComponent {
    constructor(databaseService, afStorage) {
        this.databaseService = databaseService;
        this.afStorage = afStorage;
        this.images = [];
        this.readMoreOption = {
            readLessText: 'less',
            readMoreText: 'more',
            styles: {
                color: "#666",
            },
            classes: ['custom-style', 'blog-style']
        };
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.databaseService.getData("research/research").then((res) => {
                this.researchData = res;
                this.researchData = this.researchData.flat();
                console.log(this.researchData);
                this.researchIntro = this.researchData[0];
                this.researchData.shift();
            });
            this.putImageList();
        });
    }
    putImageList() {
        console.log(this.researchData);
        for (let i = 0; i < this.researchData.length; i++) {
            if (this.researchData[i].img_name != "" || this.researchData[i].img_name != null) {
                this.storageRef = this.afStorage.ref("research/" + this.researchData[i].img_name);
                this.storageRef.getDownloadURL().toPromise().then(url => {
                    this.researchData[i].url = url;
                });
            }
        }
        console.log(this.researchData);
    }
}
ResearchComponent.ɵfac = function ResearchComponent_Factory(t) { return new (t || ResearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_database_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_3__.AngularFireStorage)); };
ResearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResearchComponent, selectors: [["app-research"]], decls: 41, vars: 4, consts: [[1, "main-nav", "navbar-expand-lg"], [1, "row"], [2, "padding-right", "15%"], [1, "logo"], ["href", "index.html"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", "alt", "logo"], [1, "nav-menu", "list-unstyled"], ["href", "#home", 1, "smooth-scroll"], ["href", "#about", 1, "smooth-scroll"], ["href", "/awards", 1, "smooth-scroll"], ["href", "/publications", 1, "smooth-scroll"], ["href", "/students", 1, "smooth-scroll"], ["id", "research"], ["width", "400", "height", "66", "viewBox", "0 0 400 66", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "id", "logo"], ["d", "M31.64 62.2L19.96 41H16.68V62.2H3V6.04H25.96C30.3867 6.04 34.1467 6.81333 37.24 8.36C40.3867 9.90666 42.7333 12.04 44.28 14.76C45.8267 17.4267 46.6 20.4133 46.6 23.72C46.6 27.4533 45.5333 30.7867 43.4 33.72C41.32 36.6533 38.2267 38.7333 34.12 39.96L47.08 62.2H31.64ZM16.68 31.32H25.16C27.6667 31.32 29.5333 30.7067 30.76 29.48C32.04 28.2533 32.68 26.52 32.68 24.28C32.68 22.1467 32.04 20.4667 30.76 19.24C29.5333 18.0133 27.6667 17.4 25.16 17.4H16.68V31.32Z", "stroke", "black", "stroke-width", "5"], ["d", "M98.8 39.16C98.8 40.44 98.72 41.7733 98.56 43.16H67.6C67.8133 45.9333 68.6933 48.0667 70.24 49.56C71.84 51 73.7792 52.7 76.0725 52.7C79.4858 52.7 81.7392 53.08 83.0725 50.2C85.9155 50.2 87.7295 50.2 90.5725 50.2C93.4155 50.2 94.2295 50.2 97.0725 50.2C96.3258 53.1333 96.0458 53.3533 94.0725 55.7C92.1525 58.0467 89.3333 59.5067 86.4 60.84C83.4667 62.1733 80.1867 62.84 76.56 62.84C72.1867 62.84 68.2933 61.9067 64.88 60.04C61.4667 58.1733 58.8 55.5067 56.88 52.04C54.96 48.5733 54 44.52 54 39.88C54 35.24 54.9333 31.1867 56.8 27.72C58.72 24.2533 61.3867 21.5867 64.8 19.72C68.2133 17.8533 72.1333 16.92 76.56 16.92C80.88 16.92 84.72 17.8267 88.08 19.64C91.44 21.4533 94.0533 24.04 95.92 27.4C97.84 30.76 98.8 34.68 98.8 39.16ZM84.8 35.56C84.8 33.2133 84 31.3467 82.4 29.96C80.8 28.5733 78.8 27.88 76.4 27.88C74.1067 27.88 72.16 28.5467 70.56 29.88C69.0133 31.2133 68.0533 33.1067 67.68 35.56H84.8Z", "stroke", "black", "stroke-width", "5"], ["d", "M126.631 62.2C122.737 62.2 119.271 61.5333 116.231 60.2C113.191 58.8667 110.791 57.0533 109.031 54.76C107.271 52.4133 106.284 49.8 106.071 46.92H119.591C119.751 48.4667 120.471 49.72 121.751 50.68C123.031 51.64 124.604 52.12 126.471 52.12C128.177 52.12 129.484 51.8 130.391 51.16C131.351 50.4667 131.831 49.5867 131.831 48.52C131.831 47.24 131.164 46.3067 129.831 45.72C128.497 45.08 126.337 44.3867 123.351 43.64C120.151 42.8933 117.484 42.12 115.351 41.32C113.217 40.4667 111.377 39.16 109.831 37.4C108.284 35.5867 107.511 33.16 107.511 30.12C107.511 27.56 108.204 25.24 109.591 23.16C111.031 21.0267 113.111 19.3467 115.831 18.12C118.604 16.8933 121.884 16.28 125.671 16.28C131.271 16.28 135.671 17.6667 138.871 20.44C142.124 23.2133 143.991 26.8933 144.471 31.48H131.831C131.617 29.9333 130.924 28.7067 129.751 27.8C128.631 26.8933 127.137 26.44 125.271 26.44C123.671 26.44 122.444 26.76 121.591 27.4C120.737 27.9867 120.311 28.8133 120.311 29.88C120.311 31.16 120.977 32.12 122.311 32.76C123.697 33.4 125.831 34.04 128.711 34.68C132.017 35.5333 134.711 36.3867 136.791 37.24C138.871 38.04 140.684 39.3733 142.231 41.24C143.831 43.0533 144.657 45.5067 144.711 48.6C144.711 51.2133 143.964 53.56 142.471 55.64C141.031 57.6667 138.924 59.2667 136.151 60.44C133.431 61.6133 130.257 62.2 126.631 62.2Z", "stroke", "black", "stroke-width", "5"], ["d", "M206 39.8C206 35.2133 206.853 31.1867 208.56 27.72C210.32 24.2533 212.693 21.5867 215.68 19.72C218.667 17.8533 222 16.92 225.68 16.92C228.827 16.92 231.573 17.56 233.92 18.84C236.32 20.12 238.16 21.8 239.44 23.88V17.56H253.12V62.2H239.44V55.88C238.107 57.96 236.24 59.64 233.84 60.92C231.493 62.2 228.747 62.84 225.6 62.84C221.973 62.84 218.667 61.9067 215.68 60.04C212.693 58.12 210.32 55.4267 208.56 51.96C206.853 48.44 206 44.3867 206 39.8ZM239.44 39.88C239.44 36.4667 238.48 33.7733 236.56 31.8C234.693 29.8267 232.4 28.84 229.68 28.84C226.96 28.84 224.64 29.8267 222.72 31.8C220.853 33.72 219.92 36.3867 219.92 39.8C219.92 43.2133 220.853 45.9333 222.72 47.96C224.64 49.9333 226.96 50.92 229.68 50.92C232.4 50.92 234.693 49.9333 236.56 47.96C238.48 45.9867 239.44 43.2933 239.44 39.88Z", "stroke", "black", "stroke-width", "5"], ["d", "M277.18 25C278.78 22.5467 280.78 20.6267 283.18 19.24C285.58 17.8 288.247 17.08 291.18 17.08V31.56H287.42C284.007 31.56 281.447 32.3067 279.74 33.8C278.033 35.24 277.18 37.8 277.18 41.48V62.2H263.5V17.56H277.18V25Z", "stroke", "black", "stroke-width", "5"], ["d", "M298.442 39.88C298.442 35.24 299.376 31.1867 301.242 27.72C303.162 24.2533 305.802 21.5867 309.162 19.72C312.576 17.8533 316.469 16.92 320.842 16.92C326.442 16.92 331.109 18.3867 334.842 21.32C338.629 24.2533 341.109 28.3867 342.283 33.72H327.722C326.496 30.3067 324.122 28.6 320.602 28.6C318.096 28.6 316.096 29.5867 314.602 31.56C313.109 33.48 312.362 36.2533 312.362 39.88C312.362 43.5067 313.109 46.3067 314.602 48.28C316.096 50.2 318.096 51.16 320.602 51.16C324.122 51.16 326.496 49.4533 327.722 46.04H342.283C341.109 51.2667 338.629 55.3733 334.842 58.36C331.056 61.3467 326.389 62.84 320.842 62.84C316.469 62.84 312.576 61.9067 309.162 60.04C305.802 58.1733 303.162 55.5067 301.242 52.04C299.376 48.5733 298.442 44.52 298.442 39.88Z", "stroke", "black", "stroke-width", "5"], ["d", "M380.54 17.08C385.66 17.08 389.767 18.7867 392.86 22.2C395.953 25.56 397.5 30.2 397.5 36.12V62.2H383.9V37.96C383.9 34.9733 383.127 32.6533 381.58 31C380.033 29.3467 377.953 28.52 375.34 28.52C372.727 28.52 370.647 29.3467 369.1 31C367.553 32.6533 366.78 34.9733 366.78 37.96V62.2H353.1V3H366.78V23.56C368.167 21.5867 370.06 20.0133 372.46 18.84C374.86 17.6667 377.553 17.08 380.54 17.08Z", "stroke", "black", "stroke-width", "5"], ["d", "M197.096 38.52C197.096 39.8 197.016 41.1333 196.856 42.52H165.896C166.11 45.2933 166.99 47.4267 168.536 48.92C170.136 50.36 172.075 52.06 174.369 52.06C177.782 52.06 180.035 52.44 181.369 49.56C184.212 49.56 186.026 49.56 188.869 49.56C191.712 49.56 192.526 49.56 195.369 49.56C194.622 52.4933 194.342 52.7133 192.369 55.06C190.449 57.4067 187.63 58.8667 184.696 60.2C181.763 61.5333 178.483 62.2 174.856 62.2C170.483 62.2 166.59 61.2667 163.176 59.4C159.763 57.5333 157.096 54.8667 155.176 51.4C153.256 47.9333 152.296 43.88 152.296 39.24C152.296 34.6 153.23 30.5467 155.096 27.08C157.016 23.6133 159.683 20.9467 163.096 19.08C166.51 17.2133 170.43 16.28 174.856 16.28C179.176 16.28 183.016 17.1867 186.376 19C189.736 20.8133 192.35 23.4 194.216 26.76C196.136 30.12 197.096 34.04 197.096 38.52ZM183.096 34.92C183.096 32.5733 182.296 30.7067 180.696 29.32C179.096 27.9333 177.096 27.24 174.696 27.24C172.403 27.24 170.456 27.9067 168.856 29.24C167.31 30.5733 166.35 32.4667 165.976 34.92H183.096Z", "stroke", "black", "stroke-width", "5"], [1, "assec-div"], [1, "aseec", 2, "font-weight", "bold"], [1, "aseec-img", 3, "src"], [1, "about-asec", 2, "color", "black"], [1, "container"], [4, "ngFor", "ngForOf"], [1, "researchCard"], [1, "cardTitle"], [1, "image", 3, "src"], ["readMore", "10", 1, "cardDescription"]], template: function ResearchComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "path", 14)(26, "path", 15)(27, "path", 16)(28, "path", 17)(29, "path", 18)(30, "path", 19)(31, "path", 20)(32, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22)(34, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ResearchComponent_div_40_Template, 8, 3, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.researchIntro.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.researchIntro.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.researchIntro.content, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.researchData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _minni_read_more__WEBPACK_IMPORTED_MODULE_5__.ReadMoreComponent], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\n*[_ngcontent-%COMP%]{\r\n  padding: 0; \r\n  margin: 0; \r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n    background-color: #f7f7f7;\r\n    top: 0;\r\n    z-index: 1000;\r\n    width: 100%;\r\n    padding: 20px;\r\n    display: none;\r\n}\r\n\r\n.nav-menu[_ngcontent-%COMP%] {\r\n    float: right;\r\n    line-height: 32px;\r\n    margin-bottom: 0;\r\n    padding-top: 16px;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-right: 15px;\r\n    font-family: 'Poppins', sans-serif;\r\n    margin-left: 40px;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 2px 0 0 0;\r\n    position: relative;\r\n    display: block;\r\n    font-size: 15px;\r\n    color: #999999;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 500;\r\n    line-height: 16px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.02em;\r\n    text-transform: capitalize;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    font-size: 16px;\r\n  }\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding-left: 20%;\r\n  }\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    height: 30%;\r\n  }\r\n\r\n.responsive[_ngcontent-%COMP%] {\r\n    display: none;\r\n    font-size: 23px;\r\n  }\r\n\r\n.active[_ngcontent-%COMP%] {\r\n    color: #afafaf;\r\n  }\r\n\r\n.main-nav[_ngcontent-%COMP%] {\r\n    display: block !important;\r\n    position: relative;\r\n  }\r\n\r\n.navbar-expand-lg[_ngcontent-%COMP%]{\r\n    animation: fadeIn 0.75s;\r\n  }\r\n\r\n@keyframes fadeIn {\r\n    0% { opacity: 0; }\r\n    100% { opacity: 1; } \r\n  }\r\n\r\n#research[_ngcontent-%COMP%]{\r\n    height: auto !important;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 15%; \r\n  left: 50%;\r\n  transform: translate(-50%, -15%); \r\n  margin-bottom: 10px;\r\n  animation: fill 0.5s ease forwards 2.5s; \r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(1){\r\n  stroke-dasharray: 289.62725830078125px;\r\n  stroke-dashoffset: 289.62725830078125px;\r\n  animation: line-anim 2s ease forwards; \r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2){\r\n  stroke-dasharray: 247.31051635742188px;\r\n  stroke-dashoffset: 247.31051635742188px;\r\n  animation: line-anim 2s ease forwards 0.1s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3){\r\n  stroke-dasharray: 231.9273223876953px;\r\n  stroke-dashoffset: 231.9273223876953px;\r\n  animation: line-anim 2s ease forwards 0.2s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4){\r\n  stroke-dasharray: 250.7732696533203px;\r\n  stroke-dashoffset: 250.7732696533203px;\r\n  animation: line-anim 2s ease forwards 0.3s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5){\r\n  stroke-dasharray: 151.71096801757812px;\r\n  stroke-dashoffset: 151.71096801757812px;\r\n  animation: line-anim 2s ease forwards 0.4s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6){\r\n  stroke-dasharray: 211.22018432617188px;\r\n  stroke-dashoffset: 211.22018432617188px;\r\n  animation: line-anim 2s ease forwards 0.5s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(7){\r\n    stroke-dasharray: 268.7515869140625px;\r\n    stroke-dashoffset: 268.7515869140625px;\r\n    animation: line-anim 2s ease forwards 0.5s;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(8){\r\n    stroke-dasharray: 247.31068420410156px;\r\n    stroke-dashoffset: 247.31068420410156px;\r\n    animation: line-anim 2s ease forwards 0.5s;\r\n}\r\n\r\n@keyframes line-anim {\r\n    to{\r\n      stroke-dashoffset: 0px;\r\n    }\r\n  \r\n}\r\n\r\n@keyframes fill {\r\n  from{\r\n    fill: transparent;\r\n  }\r\n  to{\r\n    fill:black; \r\n  }\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    margin: 0 auto; \r\n    display: grid;\r\n    grid-template-columns:auto auto;\r\n    grid-column-gap: 10%;\r\n    column-gap: 10%;\r\n    grid-row-gap: 1%;\r\n    row-gap: 1%;\r\n    padding-bottom: 65%;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]{\r\n  border-radius: 10%;\r\n  border: 2px solid #b8a07e;\r\n  position: relative;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  margin-bottom: 5%;\r\n  margin-top: 5%;\r\n}\r\n\r\n.researchCard[_ngcontent-%COMP%]{\r\n    box-shadow: 0.5rem 0.5rem black, -0.5rem -0.5rem #ccc;\r\n    border-radius: 10%;\r\n    transition: 0.5s;\r\n}\r\n\r\n.researchCard[_ngcontent-%COMP%]:hover{\r\n    background: #eee;\r\n    box-shadow: 0 8px 8px -4px green;\r\n}\r\n\r\n.cardTitle[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 50px;\r\n    font-weight: 900;\r\n    margin-top: 5%;\r\n    width: 90%; \r\n}\r\n\r\n.cardDescription[_ngcontent-%COMP%]{\r\n    font-family: 'Poppins', sans-serif;\r\n    color: black;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    width: 95%;\r\n}\r\n\r\n.assec-div[_ngcontent-%COMP%]{\r\n  font-family: 'Poppins', sans-serif;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    width: 95%;\r\n    margin-top: 10%;\r\n}\r\n\r\n.aseec-image[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  border-radius: 20%;\r\n  border: 5px solid #b8a07e;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFOztBQUU1RTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsTUFBTTtJQUNOLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUU7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsMEJBQTBCO0VBQzVCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxLQUFLLFVBQVUsRUFBRTtJQUNqQixPQUFPLFVBQVUsRUFBRTtFQUNyQjs7QUFHQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFFRjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLHVDQUF1QztFQUN2QyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsdUNBQXVDO0VBQ3ZDLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLHFDQUFxQztFQUNyQyxzQ0FBc0M7RUFDdEMsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLHNDQUFzQztFQUN0QywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsdUNBQXVDO0VBQ3ZDLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLHNDQUFzQztFQUN0Qyx1Q0FBdUM7RUFDdkMsMENBQTBDO0FBQzVDOztBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLHNDQUFzQztJQUN0QywwQ0FBMEM7QUFDOUM7O0FBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJO01BQ0Usc0JBQXNCO0lBQ3hCOztBQUVKOztBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isb0JBQWU7SUFBZixlQUFlO0lBQ2YsZ0JBQVc7SUFBWCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFDQTtJQUNJLHFEQUFxRDtJQUNyRCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7RUFDRSxrQ0FBa0M7SUFDaEMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InJlc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuKntcclxuICBwYWRkaW5nOiAwOyBcclxuICBtYXJnaW46IDA7IFxyXG59XHJcblxyXG5cclxubmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4gIFxyXG4gIC5uYXYtbWVudSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgbmF2IHVsIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICBuYXYgdWwgbGkgYSB7XHJcbiAgICBwYWRkaW5nOiAycHggMCAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiB1bCBsaSBhOmhvdmVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAubG9nbyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogMjAlO1xyXG4gIH1cclxuICBcclxuICAubG9nbyBpbWcge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gIH1cclxuIFxyXG4gIC5yZXNwb25zaXZlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNhZmFmYWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLWV4cGFuZC1sZ3tcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNzVzO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9IFxyXG4gIH1cclxuICBcclxuXHJcbiAgI3Jlc2VhcmNoe1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4jbG9nb3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNSU7IFxyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTUlKTsgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBhbmltYXRpb246IGZpbGwgMC41cyBlYXNlIGZvcndhcmRzIDIuNXM7IFxyXG59XHJcblxyXG4jbG9nbyBwYXRoOm50aC1jaGlsZCgxKXtcclxuICBzdHJva2UtZGFzaGFycmF5OiAyODkuNjI3MjU4MzAwNzgxMjVweDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogMjg5LjYyNzI1ODMwMDc4MTI1cHg7XHJcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkczsgXHJcbn1cclxuXHJcbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDIpe1xyXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDI0Ny4zMTA1MTYzNTc0MjE4OHB4O1xyXG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAyNDcuMzEwNTE2MzU3NDIxODhweDtcclxuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuMXM7XHJcbn1cclxuI2xvZ28gcGF0aDpudGgtY2hpbGQoMyl7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjMxLjkyNzMyMjM4NzY5NTNweDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogMjMxLjkyNzMyMjM4NzY5NTNweDtcclxuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuMnM7XHJcbn1cclxuI2xvZ28gcGF0aDpudGgtY2hpbGQoNCl7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjUwLjc3MzI2OTY1MzMyMDNweDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogMjUwLjc3MzI2OTY1MzMyMDNweDtcclxuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuM3M7XHJcbn1cclxuI2xvZ28gcGF0aDpudGgtY2hpbGQoNSl7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTUxLjcxMDk2ODAxNzU3ODEycHg7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE1MS43MTA5NjgwMTc1NzgxMnB4O1xyXG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC40cztcclxufVxyXG4jbG9nbyBwYXRoOm50aC1jaGlsZCg2KXtcclxuICBzdHJva2UtZGFzaGFycmF5OiAyMTEuMjIwMTg0MzI2MTcxODhweDtcclxuICBzdHJva2UtZGFzaG9mZnNldDogMjExLjIyMDE4NDMyNjE3MTg4cHg7XHJcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjVzO1xyXG59XHJcbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDcpe1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjY4Ljc1MTU4NjkxNDA2MjVweDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyNjguNzUxNTg2OTE0MDYyNXB4O1xyXG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjVzO1xyXG59XHJcbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDgpe1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjQ3LjMxMDY4NDIwNDEwMTU2cHg7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjQ3LjMxMDY4NDIwNDEwMTU2cHg7XHJcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuNXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGluZS1hbmltIHtcclxuICAgIHRve1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMHB4O1xyXG4gICAgfVxyXG4gIFxyXG59XHJcbkBrZXlmcmFtZXMgZmlsbCB7XHJcbiAgZnJvbXtcclxuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICB0b3tcclxuICAgIGZpbGw6YmxhY2s7IFxyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMCBhdXRvOyBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byBhdXRvO1xyXG4gICAgY29sdW1uLWdhcDogMTAlO1xyXG4gICAgcm93LWdhcDogMSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjUlO1xyXG59XHJcbi5pbWFnZXtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2I4YTA3ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4ucmVzZWFyY2hDYXJke1xyXG4gICAgYm94LXNoYWRvdzogMC41cmVtIDAuNXJlbSBibGFjaywgLTAuNXJlbSAtMC41cmVtICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4ucmVzZWFyY2hDYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDhweCAtNHB4IGdyZWVuO1xyXG59XHJcblxyXG4uY2FyZFRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgd2lkdGg6IDkwJTsgXHJcbn1cclxuLmNhcmREZXNjcmlwdGlvbntcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5hc3NlYy1kaXZ7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG5cclxuLmFzZWVjLWltYWdlIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2I4YTA3ZTtcclxufSJdfQ== */"] });


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





function StudentsComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 27);
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
function StudentsComponent_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 27);
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
function StudentsComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const peoples_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](peoples_r8);
} }
function StudentsComponent_ng_container_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 30)(4, "div", 31)(5, "h1");
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
function StudentsComponent_ng_container_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 30)(4, "div", 32)(5, "h1");
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
function StudentsComponent_ng_container_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 30)(4, "div", 32)(5, "h1");
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
StudentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StudentsComponent, selectors: [["app-students"]], decls: 71, vars: 6, consts: [[1, "main-nav", "navbar-expand-lg"], [1, "row"], [2, "padding-right", "15%"], [1, "logo"], ["href", "index.html"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", "alt", "logo"], [1, "nav-menu", "list-unstyled"], ["href", "#home", 1, "smooth-scroll"], ["href", "#about", 1, "smooth-scroll"], ["href", "/awards", 1, "smooth-scroll"], ["href", "/publications", 1, "smooth-scroll"], ["href", "/research", 1, "smooth-scroll"], ["id", "student"], ["id", "logo", "width", "651", "height", "118", "viewBox", "0 0 651 118", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M38.7 115.05C31.8 115.05 25.6 113.85 20.1 111.45C14.7 108.95 10.45 105.55 7.34999 101.25C4.24999 96.85 2.64999 91.8 2.54999 86.1H17.1C17.6 91 19.6 95.15 23.1 98.55C26.7 101.85 31.9 103.5 38.7 103.5C45.2 103.5 50.3 101.9 54 98.7C57.8 95.4 59.7 91.2 59.7 86.1C59.7 82.1 58.6 78.85 56.4 76.35C54.2 73.85 51.45 71.95 48.15 70.65C44.85 69.35 40.4 67.95 34.8 66.45C27.9 64.65 22.35 62.85 18.15 61.05C14.05 59.25 10.5 56.45 7.49999 52.65C4.59999 48.75 3.14999 43.55 3.14999 37.05C3.14999 31.35 4.59999 26.3 7.49999 21.9C10.4 17.5 14.45 14.1 19.65 11.7C24.95 9.29999 31 8.09999 37.8 8.09999C47.6 8.09999 55.6 10.55 61.8 15.45C68.1 20.35 71.65 26.85 72.45 34.95H57.45C56.95 30.95 54.85 27.45 51.15 24.45C47.45 21.35 42.55 19.8 36.45 19.8C30.75 19.8 26.1 21.3 22.5 24.3C18.9 27.2 17.1 31.3 17.1 36.6C17.1 40.4 18.15 43.5 20.25 45.9C22.45 48.3 25.1 50.15 28.2 51.45C31.4 52.65 35.85 54.05 41.55 55.65C48.45 57.55 54 59.45 58.2 61.35C62.4 63.15 66 66 69 69.9C72 73.7 73.5 78.9 73.5 85.5C73.5 90.6 72.15 95.4 69.45 99.9C66.75 104.4 62.75 108.05 57.45 110.85C52.15 113.65 45.9 115.05 38.7 115.05Z", "stroke", "black", "stroke-width", "5"], ["d", "M110.237 43.05V91.5C110.237 95.5 111.087 98.35 112.787 100.05C114.487 101.65 117.437 102.45 121.637 102.45H131.687V114H119.387C111.787 114 106.087 112.25 102.287 108.75C98.4871 105.25 96.5871 99.5 96.5871 91.5V43.05H85.9371V31.8H96.5871V11.1H110.237V31.8H131.687V43.05H110.237Z", "stroke", "black", "stroke-width", "5"], ["d", "M221.126 31.8V114H207.476V101.85C204.876 106.05 201.226 109.35 196.526 111.75C191.926 114.05 186.826 115.2 181.226 115.2C174.826 115.2 169.076 113.9 163.976 111.3C158.876 108.6 154.826 104.6 151.826 99.3C148.926 94 147.476 87.55 147.476 79.95V31.8H160.976V78.15C160.976 86.25 163.026 92.5 167.126 96.9C171.226 101.2 176.826 103.35 183.926 103.35C191.226 103.35 196.976 101.1 201.176 96.6C205.376 92.1 207.476 85.55 207.476 76.95V31.8H221.126Z", "stroke", "black", "stroke-width", "5"], ["d", "M239.073 72.6C239.073 64.2 240.773 56.85 244.173 50.55C247.573 44.15 252.223 39.2 258.123 35.7C264.123 32.2 270.823 30.45 278.223 30.45C284.623 30.45 290.573 31.95 296.073 34.95C301.573 37.85 305.773 41.7 308.673 46.5V3H322.473V114H308.673V98.55C305.973 103.45 301.973 107.5 296.673 110.7C291.373 113.8 285.173 115.35 278.073 115.35C270.773 115.35 264.123 113.55 258.123 109.95C252.223 106.35 247.573 101.3 244.173 94.8C240.773 88.3 239.073 80.9 239.073 72.6ZM308.673 72.75C308.673 66.55 307.423 61.15 304.923 56.55C302.423 51.95 299.023 48.45 294.723 46.05C290.523 43.55 285.873 42.3 280.773 42.3C275.673 42.3 271.023 43.5 266.823 45.9C262.623 48.3 259.273 51.8 256.773 56.4C254.273 61 253.023 66.4 253.023 72.6C253.023 78.9 254.273 84.4 256.773 89.1C259.273 93.7 262.623 97.25 266.823 99.75C271.023 102.15 275.673 103.35 280.773 103.35C285.873 103.35 290.523 102.15 294.723 99.75C299.023 97.25 302.423 93.7 304.923 89.1C307.423 84.4 308.673 78.95 308.673 72.75Z", "stroke", "black", "stroke-width", "5"], ["d", "M420.54 69.75C420.54 72.35 420.39 75.1 420.09 78H354.39C354.89 86.1 357.64 92.45 362.64 97.05C367.74 101.55 373.89 103.8 381.09 103.8C386.99 103.8 391.89 102.45 395.79 99.75C399.79 96.95 402.59 93.25 404.19 88.65H418.89C416.69 96.55 412.29 103 405.69 108C399.09 112.9 390.89 115.35 381.09 115.35C373.29 115.35 366.29 113.6 360.09 110.1C353.99 106.6 349.19 101.65 345.69 95.25C342.19 88.75 340.44 81.25 340.44 72.75C340.44 64.25 342.14 56.8 345.54 50.4C348.94 44 353.69 39.1 359.79 35.7C365.99 32.2 373.09 30.45 381.09 30.45C388.89 30.45 395.79 32.15 401.79 35.55C407.79 38.95 412.39 43.65 415.59 49.65C418.89 55.55 420.54 62.25 420.54 69.75ZM406.44 66.9C406.44 61.7 405.29 57.25 402.99 53.55C400.69 49.75 397.54 46.9 393.54 45C389.64 43 385.29 42 380.49 42C373.59 42 367.69 44.2 362.79 48.6C357.99 53 355.24 59.1 354.54 66.9H406.44Z", "stroke", "black", "stroke-width", "5"], ["d", "M478.608 30.3C488.608 30.3 496.708 33.35 502.908 39.45C509.108 45.45 512.208 54.15 512.208 65.55V114H498.708V67.5C498.708 59.3 496.658 53.05 492.558 48.75C488.458 44.35 482.858 42.15 475.758 42.15C468.558 42.15 462.808 44.4 458.508 48.9C454.308 53.4 452.208 59.95 452.208 68.55V114H438.558V31.8H452.208V43.5C454.908 39.3 458.558 36.05 463.158 33.75C467.858 31.45 473.008 30.3 478.608 30.3Z", "stroke", "black", "stroke-width", "5"], ["d", "M551.155 43.05V91.5C551.155 95.5 552.005 98.35 553.705 100.05C555.405 101.65 558.355 102.45 562.555 102.45H572.605V114H560.305C552.705 114 547.005 112.25 543.205 108.75C539.405 105.25 537.505 99.5 537.505 91.5V43.05H526.855V31.8H537.505V11.1H551.155V31.8H572.605V43.05H551.155Z", "stroke", "black", "stroke-width", "5"], ["d", "M618.244 115.35C611.944 115.35 606.294 114.3 601.294 112.2C596.294 110 592.344 107 589.444 103.2C586.544 99.3 584.944 94.85 584.644 89.85H598.744C599.144 93.95 601.044 97.3 604.444 99.9C607.944 102.5 612.494 103.8 618.094 103.8C623.294 103.8 627.394 102.65 630.394 100.35C633.394 98.05 634.894 95.15 634.894 91.65C634.894 88.05 633.294 85.4 630.094 83.7C626.894 81.9 621.944 80.15 615.244 78.45C609.144 76.85 604.144 75.25 600.244 73.65C596.444 71.95 593.144 69.5 590.344 66.3C587.644 63 586.294 58.7 586.294 53.4C586.294 49.2 587.544 45.35 590.044 41.85C592.544 38.35 596.094 35.6 600.694 33.6C605.294 31.5 610.544 30.45 616.444 30.45C625.544 30.45 632.894 32.75 638.494 37.35C644.094 41.95 647.094 48.25 647.494 56.25H633.844C633.544 51.95 631.794 48.5 628.594 45.9C625.494 43.3 621.294 42 615.994 42C611.094 42 607.194 43.05 604.294 45.15C601.394 47.25 599.944 50 599.944 53.4C599.944 56.1 600.794 58.35 602.494 60.15C604.294 61.85 606.494 63.25 609.094 64.35C611.794 65.35 615.494 66.5 620.194 67.8C626.094 69.4 630.894 71 634.594 72.6C638.294 74.1 641.444 76.4 644.044 79.5C646.744 82.6 648.144 86.65 648.244 91.65C648.244 96.15 646.994 100.2 644.494 103.8C641.994 107.4 638.444 110.25 633.844 112.35C629.344 114.35 624.144 115.35 618.244 115.35Z", "stroke", "black", "stroke-width", "5"], [1, "title"], [1, "phd-grid"], [4, "ngFor", "ngForOf"], [1, "postdoc-grid"], [1, "people"], ["alt", "Image 1", 1, "image", 3, "src"], [1, "people2"], ["alt", "Image 1", 1, "image2", 3, "src"], [1, "about1"], [1, "about2"], [1, "about3"]], template: function StudentsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "research");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "path", 14)(26, "path", 15)(27, "path", 16)(28, "path", 17)(29, "path", 18)(30, "path", 19)(31, "path", 20)(32, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br")(34, "br")(35, "br")(36, "br")(37, "br")(38, "br")(39, "br")(40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "PhD Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, StudentsComponent_ng_container_44_Template, 7, 3, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Master Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, StudentsComponent_ng_container_48_Template, 7, 3, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Undergraduate Students");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, StudentsComponent_ng_container_52_Template, 4, 1, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Post-Doc Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, StudentsComponent_ng_container_56_Template, 9, 3, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br")(58, "br")(59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "PhD Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, StudentsComponent_ng_container_63_Template, 11, 4, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br")(65, "br")(66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "MS Alumni");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, StudentsComponent_ng_container_70_Template, 11, 4, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\n*[_ngcontent-%COMP%]{\r\n  padding: 0; \r\n  margin: 0; \r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n    background-color: #f7f7f7;\r\n    top: 0;\r\n    z-index: 1000;\r\n    width: 100%;\r\n    padding: 20px;\r\n    display: none;\r\n}\r\n\r\n.nav-menu[_ngcontent-%COMP%] {\r\n    float: right;\r\n    line-height: 32px;\r\n    margin-bottom: 0;\r\n    padding-top: 16px;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    float: left;\r\n    margin-right: 15px;\r\n    font-family: 'Poppins', sans-serif;\r\n    margin-left: 40px;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 2px 0 0 0;\r\n    position: relative;\r\n    display: block;\r\n    font-size: 15px;\r\n    color: #999999;\r\n    font-family: 'Poppins', sans-serif;\r\n    font-weight: 500;\r\n    line-height: 16px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.02em;\r\n    text-transform: capitalize;\r\n  }\r\n\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: black;\r\n    font-size: 16px;\r\n  }\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding-left: 20%;\r\n  }\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    height: 30%;\r\n  }\r\n\r\n.responsive[_ngcontent-%COMP%] {\r\n    display: none;\r\n    font-size: 23px;\r\n  }\r\n\r\n.active[_ngcontent-%COMP%] {\r\n    color: #afafaf;\r\n  }\r\n\r\n.main-nav[_ngcontent-%COMP%] {\r\n    display: block !important;\r\n    position: relative;\r\n  }\r\n\r\n.navbar-expand-lg[_ngcontent-%COMP%]{\r\n    animation: fadeIn 0.75s;\r\n  }\r\n\r\n@keyframes fadeIn {\r\n    0% { opacity: 0; }\r\n    100% { opacity: 1; } \r\n  }\r\n\r\n#student[_ngcontent-%COMP%]{\r\n    height: auto !important;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 15%; \r\n    left: 50%;\r\n    transform: translate(-50%, -15%); \r\n    margin-bottom: 10px;\r\n    animation: fill 0.5s ease forwards 1  .5s; \r\n    z-index: 100;\r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(1){\r\n    stroke-dasharray: 514.4924926757812px;\r\n    stroke-dashoffset: 514.4924926757812px;\r\n    animation: line-anim 2s ease forwards; \r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2){\r\n    stroke-dasharray: 328.07232666015625px;\r\n    stroke-dashoffset:328.07232666015625px ;\r\n    animation: line-anim 2s ease forwards; \r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3){\r\n    stroke-dasharray:  439.7518310546875px;\r\n    stroke-dashoffset: 439.7518310546875px;\r\n    animation: line-anim 2s ease forwards; \r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4){\r\n    stroke-dasharray:  584.791748046875px;\r\n    stroke-dashoffset: 584.791748046875px;\r\n    animation: line-anim 2s ease forwards; \r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5){\r\n    stroke-dasharray:  536.73291015625px;\r\n    stroke-dashoffset: 536.73291015625px;\r\n    animation: line-anim 2s ease forwards; \r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6){\r\n    stroke-dasharray:  440.10479736328125px;\r\n    stroke-dashoffset: 440.10479736328125px;\r\n    animation: line-anim 2s ease forwards; \r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(7){\r\n    stroke-dasharray:  328.072509765625px;\r\n    stroke-dashoffset: 328.072509765625px;\r\n    animation: line-anim 2s ease forwards; \r\n  }\r\n\r\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(8){\r\n    stroke-dasharray:  436.27020263671875px;\r\n    stroke-dashoffset: 436.27020263671875px;\r\n    animation: line-anim 2s ease forwards; \r\n  }\r\n\r\n@keyframes line-anim {\r\n  to{\r\n    stroke-dashoffset: 0px;\r\n  }\r\n\r\n}\r\n\r\n@keyframes fill {\r\nfrom{\r\n  fill: transparent;\r\n}\r\nto{\r\n  fill:black; \r\n}\r\n}\r\n\r\n.title[_ngcontent-%COMP%]{\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: bold;\r\n  margin-bottom: 1%;\r\n  margin-left: 2%;\r\n}\r\n\r\n.phd-grid[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-gap: 50px;\r\n  margin: 0 auto; \r\n  text-align: center;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]{\r\n  width: 300px;\r\n  border-radius: 50%;\r\n  border: 10px dotted #b8a07e;\r\n}\r\n\r\n.people[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-family: 'Poppins', sans-serif;\r\n  margin-bottom: 15%;\r\n}\r\n\r\n.postdoc-grid[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-gap: 50px;\r\n  margin: 0 auto; \r\n}\r\n\r\n.people2[_ngcontent-%COMP%]{\r\n  font-family: 'Poppins', sans-serif;\r\n  border-radius: 20%;\r\n}\r\n\r\n.image2[_ngcontent-%COMP%]{\r\n  width: 300px;\r\n  border-radius: 50%;\r\n  border: 10px dotted #b8a07e;\r\n  margin-left: 20%;\r\n}\r\n\r\n.about1[_ngcontent-%COMP%]{\r\n  font-family: 'Poppins', sans-serif;\r\n  border: 10px solid #b8a07e;\r\n  border-radius: 20%;\r\n  margin-right: 5%;\r\n}\r\n\r\n.about2[_ngcontent-%COMP%]{\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  \r\n}\r\n\r\n.about3[_ngcontent-%COMP%]{\r\n  margin: o auto;\r\n  text-align: center;\r\n}\r\n\r\n@media only screen \r\n  and (device-width: 414px) \r\n  and (device-height: 896px){\r\n    \r\n    #logo[_ngcontent-%COMP%]{\r\n      margin-top: 10px;\r\n      height: 50px;\r\n    }\r\n   \r\n    .phd-grid[_ngcontent-%COMP%]{\r\n      grid-template-columns: repeat(1, 1fr);\r\n      grid-gap: 50px;\r\n  }\r\n  .postdoc-grid[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: repeat(1, 1fr);\r\n    \r\n  }\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0dWRlbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFOztBQUU1RTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsTUFBTTtJQUNOLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUU7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsMEJBQTBCO0VBQzVCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxLQUFLLFVBQVUsRUFBRTtJQUNqQixPQUFPLFVBQVUsRUFBRTtFQUNyQjs7QUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHFDQUFxQztJQUNyQyxzQ0FBc0M7SUFDdEMscUNBQXFDO0VBQ3ZDOztBQUVBO0lBQ0Usc0NBQXNDO0lBQ3RDLHVDQUF1QztJQUN2QyxxQ0FBcUM7RUFDdkM7O0FBQ0E7SUFDRSxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHFDQUFxQztFQUN2Qzs7QUFDQTtJQUNFLHFDQUFxQztJQUNyQyxxQ0FBcUM7SUFDckMscUNBQXFDO0VBQ3ZDOztBQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxxQ0FBcUM7RUFDdkM7O0FBQ0E7SUFDRSx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLHFDQUFxQztFQUN2Qzs7QUFDQTtJQUNFLHFDQUFxQztJQUNyQyxxQ0FBcUM7SUFDckMscUNBQXFDO0VBQ3ZDOztBQUNBO0lBQ0UsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2QyxxQ0FBcUM7RUFDdkM7O0FBR0Y7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7QUFFRjs7QUFDQTtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjs7QUFFcEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBOzs7O0lBSUk7TUFDRSxnQkFBZ0I7TUFDaEIsWUFBWTtJQUNkOztJQUVBO01BQ0UscUNBQXFDO01BQ3JDLGNBQWM7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYixxQ0FBcUM7O0VBRXZDOztBQUVGIiwiZmlsZSI6InN0dWRlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuKntcclxuICBwYWRkaW5nOiAwOyBcclxuICBtYXJnaW46IDA7IFxyXG59XHJcblxyXG5cclxubmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4gIFxyXG4gIC5uYXYtbWVudSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgbmF2IHVsIGxpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICBuYXYgdWwgbGkgYSB7XHJcbiAgICBwYWRkaW5nOiAycHggMCAwIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG4gIFxyXG4gIG5hdiB1bCBsaSBhOmhvdmVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAubG9nbyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogMjAlO1xyXG4gIH1cclxuICBcclxuICAubG9nbyBpbWcge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gIH1cclxuIFxyXG4gIC5yZXNwb25zaXZlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNhZmFmYWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAubmF2YmFyLWV4cGFuZC1sZ3tcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNzVzO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cclxuICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9IFxyXG4gIH1cclxuXHJcbiAgI3N0dWRlbnR7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNsb2dve1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNSU7IFxyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1JSk7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGFuaW1hdGlvbjogZmlsbCAwLjVzIGVhc2UgZm9yd2FyZHMgMSAgLjVzOyBcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICB9XHJcblxyXG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDEpe1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNTE0LjQ5MjQ5MjY3NTc4MTJweDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA1MTQuNDkyNDkyNjc1NzgxMnB4O1xyXG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkczsgXHJcbiAgfVxyXG5cclxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCgyKXtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDMyOC4wNzIzMjY2NjAxNTYyNXB4O1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6MzI4LjA3MjMyNjY2MDE1NjI1cHggO1xyXG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkczsgXHJcbiAgfVxyXG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDMpe1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogIDQzOS43NTE4MzEwNTQ2ODc1cHg7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNDM5Ljc1MTgzMTA1NDY4NzVweDtcclxuICAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHM7IFxyXG4gIH1cclxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCg0KXtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6ICA1ODQuNzkxNzQ4MDQ2ODc1cHg7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNTg0Ljc5MTc0ODA0Njg3NXB4O1xyXG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkczsgXHJcbiAgfVxyXG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDUpe1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogIDUzNi43MzI5MTAxNTYyNXB4O1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDUzNi43MzI5MTAxNTYyNXB4O1xyXG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkczsgXHJcbiAgfVxyXG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDYpe1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogIDQ0MC4xMDQ3OTczNjMyODEyNXB4O1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ0MC4xMDQ3OTczNjMyODEyNXB4O1xyXG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkczsgXHJcbiAgfVxyXG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDcpe1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogIDMyOC4wNzI1MDk3NjU2MjVweDtcclxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzMjguMDcyNTA5NzY1NjI1cHg7XHJcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzOyBcclxuICB9XHJcbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoOCl7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAgNDM2LjI3MDIwMjYzNjcxODc1cHg7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNDM2LjI3MDIwMjYzNjcxODc1cHg7XHJcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzOyBcclxuICB9XHJcblxyXG4gIFxyXG5Aa2V5ZnJhbWVzIGxpbmUtYW5pbSB7XHJcbiAgdG97XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuQGtleWZyYW1lcyBmaWxsIHtcclxuZnJvbXtcclxuICBmaWxsOiB0cmFuc3BhcmVudDtcclxufVxyXG50b3tcclxuICBmaWxsOmJsYWNrOyBcclxufVxyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbi5waGQtZ3JpZHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdle1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxMHB4IGRvdHRlZCAjYjhhMDdlO1xyXG59XHJcbi5wZW9wbGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG59XHJcblxyXG4ucG9zdGRvYy1ncmlke1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBncmlkLWdhcDogNTBweDtcclxuICBtYXJnaW46IDAgYXV0bzsgXHJcbn1cclxuXHJcbi5wZW9wbGUye1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG59XHJcblxyXG4uaW1hZ2Uye1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxMHB4IGRvdHRlZCAjYjhhMDdlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbn1cclxuLmFib3V0MXtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjYjhhMDdlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbi5hYm91dDJ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG59XHJcbi5hYm91dDN7XHJcbiAgbWFyZ2luOiBvIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gXHJcbiAgYW5kIChkZXZpY2Utd2lkdGg6IDQxNHB4KSBcclxuICBhbmQgKGRldmljZS1oZWlnaHQ6IDg5NnB4KXtcclxuICAgIFxyXG4gICAgI2xvZ297XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgXHJcbiAgICAucGhkLWdyaWR7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICAgIGdyaWQtZ2FwOiA1MHB4O1xyXG4gIH1cclxuICAucG9zdGRvYy1ncmlke1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbn0iXX0= */"] });


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