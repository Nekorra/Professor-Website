(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/abhisrin/Documents/projects/Professor-Website-/src/main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function HomeComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Awards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Publications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor() {
        this.hidden = false;
    }
    getScrollHeight(event) {
        if (window.pageYOffset <= 100)
            this.hidden = false;
        else
            this.hidden = true;
    }
    ngOnInit() {
        this.mapMarker = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarker"];
        this.building = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCity"];
        this.email = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMailBulk"];
        this.mobile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMobile"];
        this.birthday = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBirthdayCake"];
        this.badge = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"];
        this.home = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLaptopHouse"];
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
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], hostBindings: function HomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) { return ctx.getScrollHeight($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 200, vars: 34, consts: [[4, "ngIf"], ["id", "home"], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css")], ["id", "header", 1, "home"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", 1, "eceLogo"], [1, "container"], ["width", "978", "height", "71", "viewBox", "0 0 978 71", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "id", "logo"], ["d", "M57.3 3.82V67H41.91V40.99H17.97V67H2.58V3.82H17.97V28.57H41.91V3.82H57.3Z", "stroke", "white", "stroke-width", "5"], ["d", "M98.2901 67.63C92.3501 67.63 86.8901 66.25 81.9101 63.49C76.9901 60.73 73.0601 56.89 70.1201 51.97C67.2401 46.99 65.8001 41.41 65.8001 35.23C65.8001 29.05 67.2401 23.5 70.1201 18.58C73.0601 13.66 76.9901 9.82 81.9101 7.06C86.8901 4.3 92.3501 2.92 98.2901 2.92C104.23 2.92 109.66 4.3 114.58 7.06C119.56 9.82 123.46 13.66 126.28 18.58C129.16 23.5 130.6 29.05 130.6 35.23C130.6 41.41 129.16 46.99 126.28 51.97C123.4 56.89 119.5 60.73 114.58 63.49C109.66 66.25 104.23 67.63 98.2901 67.63ZM98.2901 53.59C103.33 53.59 107.35 51.91 110.35 48.55C113.41 45.19 114.94 40.75 114.94 35.23C114.94 29.65 113.41 25.21 110.35 21.91C107.35 18.55 103.33 16.87 98.2901 16.87C93.1901 16.87 89.1101 18.52 86.0501 21.82C83.0501 25.12 81.5501 29.59 81.5501 35.23C81.5501 40.81 83.0501 45.28 86.0501 48.64C89.1101 51.94 93.1901 53.59 98.2901 53.59Z", "stroke", "white", "stroke-width", "5"], ["d", "M154.282 3.82V41.62C154.282 45.4 155.212 48.31 157.072 50.35C158.932 52.39 161.662 53.41 165.262 53.41C168.862 53.41 171.622 52.39 173.542 50.35C175.462 48.31 176.422 45.4 176.422 41.62V3.82H191.812V41.53C191.812 47.17 190.612 51.94 188.212 55.84C185.812 59.74 182.572 62.68 178.492 64.66C174.472 66.64 169.972 67.63 164.992 67.63C160.012 67.63 155.542 66.67 151.582 64.75C147.682 62.77 144.592 59.83 142.312 55.93C140.032 51.97 138.892 47.17 138.892 41.53V3.82H154.282Z", "stroke", "white", "stroke-width", "5"], ["d", "M274.169 3.82V67H258.779V29.11L244.649 67H232.229L218.009 29.02V67H202.619V3.82H220.799L238.529 47.56L256.079 3.82H274.169Z", "stroke", "white", "stroke-width", "5"], ["d", "M324.566 55.84H300.986L297.206 67H281.096L303.956 3.82H321.776L344.636 67H328.346L324.566 55.84ZM320.606 43.96L312.776 20.83L305.036 43.96H320.606Z", "stroke", "white", "stroke-width", "5"], ["d", "M408.114 67H392.724L366.984 28.03V67H351.594V3.82H366.984L392.724 42.97V3.82H408.114V67Z", "stroke", "white", "stroke-width", "5"], ["d", "M493.062 3.82V67H477.672V40.99H453.732V67H438.342V3.82H453.732V28.57H477.672V3.82H493.062Z", "stroke", "white", "stroke-width", "5"], ["d", "M534.052 67.63C528.112 67.63 522.652 66.25 517.672 63.49C512.752 60.73 508.822 56.89 505.882 51.97C503.002 46.99 501.562 41.41 501.562 35.23C501.562 29.05 503.002 23.5 505.882 18.58C508.822 13.66 512.752 9.82 517.672 7.06C522.652 4.3 528.112 2.92 534.052 2.92C539.992 2.92 545.422 4.3 550.342 7.06C555.322 9.82 559.222 13.66 562.042 18.58C564.922 23.5 566.362 29.05 566.362 35.23C566.362 41.41 564.922 46.99 562.042 51.97C559.162 56.89 555.262 60.73 550.342 63.49C545.422 66.25 539.992 67.63 534.052 67.63ZM534.052 53.59C539.092 53.59 543.112 51.91 546.112 48.55C549.172 45.19 550.702 40.75 550.702 35.23C550.702 29.65 549.172 25.21 546.112 21.91C543.112 18.55 539.092 16.87 534.052 16.87C528.952 16.87 524.872 18.52 521.812 21.82C518.812 25.12 517.312 29.59 517.312 35.23C517.312 40.81 518.812 45.28 521.812 48.64C524.872 51.94 528.952 53.59 534.052 53.59Z", "stroke", "white", "stroke-width", "5"], ["d", "M646.474 3.82V67H631.084V29.11L616.954 67H604.534L590.314 29.02V67H574.924V3.82H593.104L610.834 47.56L628.384 3.82H646.474Z", "stroke", "white", "stroke-width", "5"], ["d", "M696.871 55.84H673.291L669.511 67H653.401L676.261 3.82H694.081L716.941 67H700.651L696.871 55.84ZM692.911 43.96L685.081 20.83L677.341 43.96H692.911Z", "stroke", "white", "stroke-width", "5"], ["d", "M778.078 3.82L756.208 46.12V67H740.818V46.12L718.948 3.82H736.408L748.648 30.28L760.798 3.82H778.078Z", "stroke", "white", "stroke-width", "5"], ["d", "M814.159 67.63C808.219 67.63 802.759 66.25 797.779 63.49C792.859 60.73 788.929 56.89 785.989 51.97C783.109 46.99 781.669 41.41 781.669 35.23C781.669 29.05 783.109 23.5 785.989 18.58C788.929 13.66 792.859 9.82 797.779 7.06C802.759 4.3 808.219 2.92 814.159 2.92C820.099 2.92 825.529 4.3 830.449 7.06C835.429 9.82 839.329 13.66 842.149 18.58C845.029 23.5 846.469 29.05 846.469 35.23C846.469 41.41 845.029 46.99 842.149 51.97C839.269 56.89 835.369 60.73 830.449 63.49C825.529 66.25 820.099 67.63 814.159 67.63ZM814.159 53.59C819.199 53.59 823.219 51.91 826.219 48.55C829.279 45.19 830.809 40.75 830.809 35.23C830.809 29.65 829.279 25.21 826.219 21.91C823.219 18.55 819.199 16.87 814.159 16.87C809.059 16.87 804.979 18.52 801.919 21.82C798.919 25.12 797.419 29.59 797.419 35.23C797.419 40.81 798.919 45.28 801.919 48.64C804.979 51.94 809.059 53.59 814.159 53.59Z", "stroke", "white", "stroke-width", "5"], ["d", "M870.151 3.82V41.62C870.151 45.4 871.081 48.31 872.941 50.35C874.801 52.39 877.531 53.41 881.131 53.41C884.731 53.41 887.491 52.39 889.411 50.35C891.331 48.31 892.291 45.4 892.291 41.62V3.82H907.681V41.53C907.681 47.17 906.481 51.94 904.081 55.84C901.681 59.74 898.441 62.68 894.361 64.66C890.341 66.64 885.841 67.63 880.861 67.63C875.881 67.63 871.411 66.67 867.451 64.75C863.551 62.77 860.461 59.83 858.181 55.93C855.901 51.97 854.761 47.17 854.761 41.53V3.82H870.151Z", "stroke", "white", "stroke-width", "5"], ["d", "M975.008 67H959.618L933.878 28.03V67H918.488V3.82H933.878L959.618 42.97V3.82H975.008V67Z", "stroke", "white", "stroke-width", "5"], [1, "department"], ["href", "#about"], [1, "glyphicon", "glyphicon-triangle-bottom"], ["id", "about"], ["data-aos", "fade-up"], ["id", "about", 1, "paddsection"], [1, "row", "justify-content-between"], [1, "col-lg-4"], [1, "div-img-bg"], [1, "about-img"], ["src", "../../assets/images/profile.png", "alt", "me", 1, "img-responsive"], [1, "col-lg-7"], [1, "about-descr"], [1, "p-heading"], [1, "heading"], [1, "separator"], ["id", "expandButton", 3, "click"], ["id", "dots", 2, "color", "#b8a07e"], ["id", "more"], ["id", "researchCarousel"], ["id", "carouselExampleIndicators", "data-ride", "carousel", "data-interval", "2000", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "d-block", "w-100"], ["src", "https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/256/external-machine-learning-smart-devices-smashingstocks-mixed-smashing-stocks.png", 1, "AM"], [1, "carousel-item"], ["src", "https://img.icons8.com/dotty/480/null/cyber-security.png", 1, "AM"], ["src", "https://img.icons8.com/ios-filled/200/machine-learning.png", 1, "AM"], ["src", "https://img.icons8.com/glyph-neue/200/null/security-shield-green.png", 1, "AM"], ["src", "https://img.icons8.com/ios-filled/200/null/big-data.png", 1, "AM"], ["src", "https://img.icons8.com/external-flatart-icons-outline-flatarticons/200/null/external-algorithm-data-science-and-cyber-security-flatart-icons-outline-flatarticons.png", 1, "AM"], ["src", "https://img.icons8.com/external-flaticons-lineal-flat-icons/200/null/external-processors-computer-programming-flaticons-lineal-flat-icons-2.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/wearable-technology.png", 1, "AM"], ["src", "https://img.icons8.com/windows/200/null/product-architecture.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/chip-card-blocked.png", 1, "AM"], ["src", "https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/200/null/external-3d-design-ui-ux-user-interface-smashingstocks-detailed-outline-smashing-stocks.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/android-l-battery--v1.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/memory-slot.png", 1, "AM"], ["src", "https://img.icons8.com/external-outline-black-m-oki-orlando/200/null/external-memory-allocation-programming-outline-outline-black-m-oki-orlando.png", 1, "AM"], ["src", "https://img.icons8.com/ios/200/null/dashboard.png", 1, "AM"], ["src", "https://img.icons8.com/material-outlined/200/null/energy-efficiency-g.png", 1, "AM"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["id", "contact"], [1, "container", "mb-5"], ["data-aos", "fade-up", "data-aos-anchor-placement", "top-center", 1, "row"], [1, "title"], [1, "bar-title", "mb-5"], [1, "col-md-3", "col-lg-3"], [1, "contact-info"], ["src", "assets/images/contact-image.png", "alt", "image"], [1, "line"], [1, "col-md-9"], [1, "contact-form"], [1, "form-group"], ["for", "identite", 1, "control-label", "col-sm-2"], [1, "col-sm-10"], ["type", "text", "id", "identite", "name", "fname", 1, "form-control", 3, "placeholder"], ["for", "email", 1, "control-label", "col-sm-2"], ["type", "email", "id", "email", "name", "email", 1, "form-control", 3, "placeholder"], ["for", "object", 1, "control-label", "col-sm-2"], ["type", "text", "id", "object", "name", "object", 1, "form-control", 3, "placeholder"], ["for", "comment", 1, "control-label", "col-sm-2"], ["rows", "5", "id", "comment", 1, "form-control", 3, "placeholder"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-default"], [1, "main-nav", "navbar-expand-lg"], [1, "row"], [2, "padding-right", "20%"], [1, "logo"], ["href", "index.html"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", "alt", "logo"], [1, "nav-menu", "list-unstyled"], ["href", "#home", 1, "smooth-scroll"], ["href", "#about", 1, "smooth-scroll"], ["href", "/awards", 1, "smooth-scroll"], ["href", "/publications", 1, "smooth-scroll"], ["href", "#contact", 1, "smooth-scroll"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_header_0_Template, 23, 0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "UC Davis Department of Electrical and Computer Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Houman Homayoun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " is a Professor in the Department of Electrical and Computer Engineering at the University of California, Davis. He leads the National Science Foundation Center for Hardware and Embedded Systems Security and Trust. Under his direction, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "CHEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " tackles some of the most pressing security challenges facing the world today, helping to ensure the safety and reliability of hardware and embedded systems.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Prior to his current position, Houman Homayoun held an Associate Professorship in the Department of Electrical and Computer Engineering at George Mason University. He was also a recipient of the Computing Innovation (CI) Fellowship from the CRA-CCC, during which he spent two years at the University of California, San Diego. Dr. Homayoun completed his Ph.D. in Computer Science at the University of California, Irvine, where he was awarded the prestigious four-year Computer Science Department Chair Fellowship. His educational background also includes an MS in computer engineering from the University of Victoria and a BS in electrical engineering from the Sharif University of Technology. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_47_listener() { return ctx.expand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Continue Reading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Houman Homayoun is an accomplished computer engineer and currently holds the position of Professor in the Department of Electrical and Computer Engineering at the University of California, Davis. He also serves as the director of the National Science Foundation Center for Hardware and Embedded Systems Security and Trust (CHEST). Prior to his appointment at UC Davis, Houman was an Associate Professor at George Mason University (GMU). He was also recognized as an NSF Computing Innovation (CI) Fellow awarded by the CRA-CCC and spent two years at the University of California, San Diego from 2010 to 2012. Houman holds a Ph.D. in Computer Science from the University of California, Irvine, which he earned in 2010. During his time at UCI, he received a four-year fellowship from the Computer Science Department. He also received an MS degree in computer engineering from the University of Victoria in 2005 and a BS degree in electrical engineering from the Sharif University of Technology in 2003. Houman's research focuses on hardware security and trust, applied machine learning and AI, data-intensive computing, and heterogeneous computing. He has published more than 200 technical papers in prestigious conferences and journals on these subjects and has directed over $10M in research funding from NSF, DARPA, AFRL, NIST, US Congress, and various industrial sponsors. His work has received numerous best paper awards and nominations, including GLSVLSI 2016, ICCAD 2019, ICDM 2019, DCAS 2020, ISVLSI 2020, ICCAD 2020, and DATE 2022. Houman's CHEST center has received congressional support for research in hardware security, which was included in the 2021 National Defense Authorization Act. He has also served as a Member of the Advisory Committee, Cybersecurity Research and Technology Commercialization working group in the Commonwealth of Virginia, and as a core group member of the hardware security body of knowledge development team supported by the Department of Defense. In addition, he was recognized as the recipient of the 2010 National Science Foundation computing innovation fellow award by CCC/CRA and has been serving as an Associate Editor of IEEE Transactions on VLSI since 2017. Houman has also chaired and co-chaired major conferences in ACM, including the Great Lake Symposium on VLSI. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_53_listener() { return ctx.expand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Read Less...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ol", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Applied Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Hardware Security and Trust");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Adversarial Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Cybersecurity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Big Data Computing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Algorithms for Energy-Efficient Acceleration of Big Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Heterogeneous Computing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Accelerating Wearable Biomedical Computing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Heterogeneous Architecture Mapping and Scheduling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Emerging STT Logic for Enhancing Hardware Security and Trust");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "3D Integration and Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Low Power and Thermal Aware Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "DRAM Memory Management for Emerging Big Data Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Emerging Memory Technologies (non-volatile STTRAM, PCM, and volatile HMC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Performance Characterization of Emerging Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Energy Efficiency and Power Management in Enterprise Datacenter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "section", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h2", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](156, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](163, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "label", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](170, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "input", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](173, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "label", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](177, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "input", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](180, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "label", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](184, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "input", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](187, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "label", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](191, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "textarea", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](194, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "button", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](199, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](155);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](156, 12, "Contact Form"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](163, 14, "Contact Me"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](170, 16, "Name: "));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](173, 18, "Full Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](177, 20, "Email: "));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](180, 22, "username@email.com"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](184, 24, "Subject: "));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](187, 26, "Subject"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](191, 28, "Message: "));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](194, 30, "Type Here"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](199, 32, "Send Message"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\n*[_ngcontent-%COMP%]{\n  padding: 0; \n  margin: 0; \n  box-sizing: border-box;\n}\n\n#header[_ngcontent-%COMP%] {\n    background: linear-gradient(rgba(0, 0, 0, 0.2),\n    rgba(0, 0, 0, 0.2)), url('home.jpeg') repeat scroll center center / cover;\n    height: 100vh;\n    width: 100%;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n\n.header-content[_ngcontent-%COMP%] {\n    height: 100vh;\n    text-align: left;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n  }\n\n.header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n    font-weight: 780;\n    margin-bottom: 10px;\n    text-transform: uppercase;\n    color: #fff;\n  }\n\n.header-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n    letter-spacing: 5px;\n    margin-top: 0;\n    margin-bottom: 30px;\n    text-transform: capitalize;\n    color: #fff;\n    font-weight: 500;\n  }\n\n.header-content[_ngcontent-%COMP%]   .list-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left;\n    margin-right: 20px;\n  }\n\n.header-content[_ngcontent-%COMP%]   .list-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    color: #fff;\n    font-size: 15px;\n  }\n\n#logo[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 50%; \n  left: 50%;\n  transform: translate(-50%, -50%); \n  animation: fill 0.5s ease forwards 3s; \n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(1){\n  stroke-dasharray: 337.32000732421875px;\n  stroke-dashoffset: 337.32000732421875px;\n  animation: line-anim 2s ease forwards; \n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2){\n  stroke-dasharray: 316.58935546875px;\n  stroke-dashoffset: 316.58935546875px;\n  animation: line-anim 2s ease forwards 0.1s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3){\n  stroke-dasharray: 302.68817138671875px;\n  stroke-dashoffset: 302.68817138671875px;\n  animation: line-anim 2s ease forwards 0.2s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4){\n  stroke-dasharray: 457.0200500488281px;\n  stroke-dashoffset: 457.0200500488281px;\n  animation: line-anim 2s ease forwards 0.3s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5){\n  stroke-dasharray: 296.12249755859375px;\n  stroke-dashoffset: 296.12249755859375px;\n  animation: line-anim 2s ease forwards 0.4s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6){\n  stroke-dasharray: 359.59716796875px;\n  stroke-dashoffset: 359.59716796875px;\n  animation: line-anim 2s ease forwards 0.5s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(7){\n  stroke-dasharray: 337.32000732421875px;\n  stroke-dashoffset: 337.32000732421875px;\n  animation: line-anim 2s ease forwards 0.6s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(8){\n  stroke-dasharray: 316.59033203125px;\n  stroke-dashoffset: 316.59033203125px;\n  animation: line-anim 2s ease forwards 0.7s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(9){\n  stroke-dasharray: 457.02008056640625px;\n  stroke-dashoffset: 457.02008056640625px;\n  animation: line-anim 2s ease forwards 0.8s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(10){\n  stroke-dasharray: 296.12249755859375px;\n  stroke-dashoffset: 296.12249755859375px;\n  animation: line-anim 2s ease forwards 0.9s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(11){\n  stroke-dasharray: 245.39852905273438px;\n  stroke-dashoffset: 245.39852905273438px;\n  animation: line-anim 2s ease forwards 1s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(12){\n  stroke-dasharray: 316.5907897949219px;\n  stroke-dashoffset: 316.5907897949219px;\n  animation: line-anim 2s ease forwards 1.1s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(13){\n  stroke-dasharray: 302.6885070800781px;\n  stroke-dashoffset: 302.6885070800781px;\n  animation: line-anim 2s ease forwards 1.2s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(14){\n  stroke-dasharray:  359.59716796875px;\n  stroke-dashoffset:  359.59716796875px;\n  animation: line-anim 2s ease forwards 1.3s;\n}\n\n@keyframes line-anim {\n    to{\n      stroke-dashoffset: 0px;\n    }\n  \n}\n\n@keyframes fill {\n  from{\n    fill: transparent;\n  }\n  to{\n    fill:white; \n  }\n}\n\n.department[_ngcontent-%COMP%]{\n  color: white;\n  font-family: 'Poppins', sans-serif;\n  font-size: 20Px;\n  font-weight: 800;\n  position: absolute;\n  left: 50%;\n  top: 60%; \n  transform: translate(-50%, -60%);\n  animation: fadeIn 4.5s;\n}\n\n.eceLogo[_ngcontent-%COMP%]{\n  padding: 25px;\n  height: 12%;\n  animation: fadeIn 4.5s;\n}\n\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}\n\n.glyphicon-triangle-bottom[_ngcontent-%COMP%]{\n  color: white;\n  font-size: 50px;\n  position: absolute;\n  left: 50%;\n  top: 95%; \n  transform: translate(-50%, -95%);\n  animation: fadeIn 4.5s;\n}\n\n#about[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background: #f7f7f7;\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n\n#about[_ngcontent-%COMP%]   .div-img-bg[_ngcontent-%COMP%] {\n  padding-bottom: 30px;\n  border: 20px solid #b8a07e;\n  border-radius: 50px;\n}\n\n#about[_ngcontent-%COMP%]   .div-img-bg[_ngcontent-%COMP%]   .about-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 0px 0px 85px 0px rgba(0, 0, 0, 0.14);\n  margin-top: -60px;\n  margin-left: 40px;\n  height: 400px;\n  object-fit: cover;\n  border-radius: 50px;\n}\n\n#about[_ngcontent-%COMP%]   .about-descr[_ngcontent-%COMP%]   .p-heading[_ngcontent-%COMP%] {\n  font-family: 'Poppins', sans-serif;\n  font-size: 20px;\n  text-align: left;\n  color: black;\n  text-align: center;\n}\n\n#about[_ngcontent-%COMP%]   .about-descr[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  text-align: left;\n  font-family: 'Poppins', sans-serif;\n  color: black;\n  font-size: 15px;\n}\n\n.heading[_ngcontent-%COMP%]{\n  font-size: 30px;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 900;\n}\n\n#expandButton[_ngcontent-%COMP%]{\n  background: none!important;\n  border: none;\n  padding: 0!important;\n  color: #b8a07e; \n}\n\n#expandButton[_ngcontent-%COMP%]:hover{\n  color: #b8a07eab;\n}\n\n#more[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#researchCarousel[_ngcontent-%COMP%]{\n    height: 60vh !important;\n\n}\n\n.w-100[_ngcontent-%COMP%]{\n    height: 50vh;\n    color: #b8a07e;\n    font-family: 'Poppins', sans-serif;\n    text-align: center;\n    overflow: hidden;\n}\n\n.AM[_ngcontent-%COMP%]{\n    height: 50%;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    filter: invert(66%) sepia(21%) saturate(447%) hue-rotate(356deg) brightness(94%) contrast(89%);\n}\n\n.carousel-indicators[_ngcontent-%COMP%]{\n    filter: invert(66%) sepia(21%) saturate(447%) hue-rotate(356deg) brightness(94%) contrast(89%);\n    z-index: 0;\n}\n\n.carousel-control-prev-icon[_ngcontent-%COMP%], .carousel-control-next-icon[_ngcontent-%COMP%]{\n    filter: invert(66%) sepia(21%) saturate(447%) hue-rotate(356deg) brightness(94%) contrast(89%);\n\n}\n\nnav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 1000;\n  width: 100%;\n  padding: 20px;\n  display: none;\n  box-shadow: 0px 2px 92px 0px rgba(0, 0, 0, 0.18);\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n  float: right;\n  line-height: 32px;\n  margin-bottom: 0;\n  padding-top: 16px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  margin-right: 15px;\n  font-family: 'Poppins', sans-serif;\n  margin-left: 40px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 2px 0 0 0;\n  position: relative;\n  display: block;\n  font-size: 15px;\n  color: #999999;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  line-height: 16px;\n  text-transform: uppercase;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n  color: black;\n  font-size: 16px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  float: left;\n  padding-left: 20%;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 30%;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{\n  height: 50%;\n}\n\n.responsive[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 23px;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: #afafaf;\n}\n\n.main-nav[_ngcontent-%COMP%] {\n  display: block !important;\n  position: relative;\n}\n\n#container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.navbar-expand-lg[_ngcontent-%COMP%]{\n  animation: fadeIn 0.75s;\n}\n\n@keyframes fadeIn {\n  0% { opacity: 0; }\n  100% { opacity: 1; } \n}\n\nbody[_ngcontent-%COMP%]{\n  background-color: #25274d;\n}\n\n#contact[_ngcontent-%COMP%]{\n  padding: 4%;\n  height: auto;\n  font-family: 'Poppins', sans-serif;\n}\n\n.title[_ngcontent-%COMP%]{\n  padding-bottom: 1%;\n}\n\n.col-md-3[_ngcontent-%COMP%]{\n  background: #1478a7;\n  padding: 4%;\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n  margin-bottom: 10%;\n}\n\n.col-md-9[_ngcontent-%COMP%]{\n  background: #fff;\n  padding: 3%;\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n  font-weight:600;\n}\n\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n  background:#149ddd;\n  color: #fff;\n  font-weight: 600;\n  width: 25%;\n  margin-top: 10px;\n}\n\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\n  box-shadow:none;\n}\n\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{\n  color: white;\n}\n\n.form-group[_ngcontent-%COMP%]{\n  padding: 2%;\n  \n}\n\n.line[_ngcontent-%COMP%]{\n  margin-top: 10px; \n  height: 3px;\n  width: 55%;\n  background-color: white;\n  float: left;\n  border-radius: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7O0FBRTVFO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBQ0E7SUFDSTs2RUFDNkY7SUFDN0YsYUFBYTtJQUNiLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7RUFDeEI7O0FBSUE7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0FBR0Y7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLHVDQUF1QztFQUN2QyxxQ0FBcUM7QUFDdkM7O0FBR0E7RUFDRSxtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLHNDQUFzQztFQUN0Qyx1Q0FBdUM7RUFDdkMsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLHNDQUFzQztFQUN0QywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsdUNBQXVDO0VBQ3ZDLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLHVDQUF1QztFQUN2QywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLHNDQUFzQztFQUN0Qyx1Q0FBdUM7RUFDdkMsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0Usc0NBQXNDO0VBQ3RDLHVDQUF1QztFQUN2QywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsdUNBQXVDO0VBQ3ZDLHdDQUF3QztBQUMxQzs7QUFDQTtFQUNFLHFDQUFxQztFQUNyQyxzQ0FBc0M7RUFDdEMsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLHNDQUFzQztFQUN0QywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMscUNBQXFDO0VBQ3JDLDBDQUEwQztBQUM1Qzs7QUFFQTtJQUNJO01BQ0Usc0JBQXNCO0lBQ3hCOztBQUVKOztBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLEtBQUssVUFBVSxFQUFFO0VBQ2pCLE9BQU8sVUFBVSxFQUFFO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdEQUFnRDtFQUNoRCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUtBO0lBQ0ksdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBSUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZ0NBQWdDO0lBQ2hDLDhGQUE4RjtBQUNsRzs7QUFDQTtJQUNJLDhGQUE4RjtJQUM5RixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksOEZBQThGOztBQUVsRzs7QUFJQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFHYixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsS0FBSyxVQUFVLEVBQUU7RUFDakIsT0FBTyxVQUFVLEVBQUU7QUFDckI7O0FBR0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xuXG4qe1xuICBwYWRkaW5nOiAwOyBcbiAgbWFyZ2luOiAwOyBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiNoZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIpKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9ob21lLmpwZWdcIikgcmVwZWF0IHNjcm9sbCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICBcbiAgXG4gIC5oZWFkZXItY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLmhlYWRlci1jb250ZW50IGgxIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDc4MDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5oZWFkZXItY29udGVudCBwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICBcbiAgLmhlYWRlci1jb250ZW50IC5saXN0LXNvY2lhbCBsaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAuaGVhZGVyLWNvbnRlbnQgLmxpc3Qtc29jaWFsIGxpIGkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG5cbiNsb2dve1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlOyBcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXG4gIGFuaW1hdGlvbjogZmlsbCAwLjVzIGVhc2UgZm9yd2FyZHMgM3M7IFxufVxuXG4jbG9nbyBwYXRoOm50aC1jaGlsZCgxKXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMzM3LjMyMDAwNzMyNDIxODc1cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAzMzcuMzIwMDA3MzI0MjE4NzVweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkczsgXG59XG5cblxuI2xvZ28gcGF0aDpudGgtY2hpbGQoMil7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDMxNi41ODkzNTU0Njg3NXB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogMzE2LjU4OTM1NTQ2ODc1cHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC4xcztcbn1cbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDMpe1xuICBzdHJva2UtZGFzaGFycmF5OiAzMDIuNjg4MTcxMzg2NzE4NzVweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMwMi42ODgxNzEzODY3MTg3NXB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuMnM7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCg0KXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogNDU3LjAyMDA1MDA0ODgyODFweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ1Ny4wMjAwNTAwNDg4MjgxcHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC4zcztcbn1cbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDUpe1xuICBzdHJva2UtZGFzaGFycmF5OiAyOTYuMTIyNDk3NTU4NTkzNzVweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI5Ni4xMjI0OTc1NTg1OTM3NXB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuNHM7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCg2KXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMzU5LjU5NzE2Nzk2ODc1cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAzNTkuNTk3MTY3OTY4NzVweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjVzO1xufVxuI2xvZ28gcGF0aDpudGgtY2hpbGQoNyl7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDMzNy4zMjAwMDczMjQyMTg3NXB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogMzM3LjMyMDAwNzMyNDIxODc1cHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC42cztcbn1cbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDgpe1xuICBzdHJva2UtZGFzaGFycmF5OiAzMTYuNTkwMzMyMDMxMjVweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMxNi41OTAzMzIwMzEyNXB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuN3M7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCg5KXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogNDU3LjAyMDA4MDU2NjQwNjI1cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiA0NTcuMDIwMDgwNTY2NDA2MjVweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjhzO1xufVxuI2xvZ28gcGF0aDpudGgtY2hpbGQoMTApe1xuICBzdHJva2UtZGFzaGFycmF5OiAyOTYuMTIyNDk3NTU4NTkzNzVweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI5Ni4xMjI0OTc1NTg1OTM3NXB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuOXM7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCgxMSl7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDI0NS4zOTg1MjkwNTI3MzQzOHB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogMjQ1LjM5ODUyOTA1MjczNDM4cHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMXM7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCgxMil7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDMxNi41OTA3ODk3OTQ5MjE5cHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAzMTYuNTkwNzg5Nzk0OTIxOXB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDEuMXM7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCgxMyl7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDMwMi42ODg1MDcwODAwNzgxcHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAzMDIuNjg4NTA3MDgwMDc4MXB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDEuMnM7XG59XG4jbG9nbyBwYXRoOm50aC1jaGlsZCgxNCl7XG4gIHN0cm9rZS1kYXNoYXJyYXk6ICAzNTkuNTk3MTY3OTY4NzVweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6ICAzNTkuNTk3MTY3OTY4NzVweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAxLjNzO1xufVxuXG5Aa2V5ZnJhbWVzIGxpbmUtYW5pbSB7XG4gICAgdG97XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMHB4O1xuICAgIH1cbiAgXG59XG5Aa2V5ZnJhbWVzIGZpbGwge1xuICBmcm9te1xuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICB9XG4gIHRve1xuICAgIGZpbGw6d2hpdGU7IFxuICB9XG59XG5cbi5kZXBhcnRtZW50e1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBQeDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNjAlOyBcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTYwJSk7XG4gIGFuaW1hdGlvbjogZmFkZUluIDQuNXM7XG59XG5cbi5lY2VMb2dve1xuICBwYWRkaW5nOiAyNXB4O1xuICBoZWlnaHQ6IDEyJTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLmdseXBoaWNvbi10cmlhbmdsZS1ib3R0b217XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA5NSU7IFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtOTUlKTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gNC41cztcbn1cblxuI2Fib3V0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuXG4jYWJvdXQgLmRpdi1pbWctYmcge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyOiAyMHB4IHNvbGlkICNiOGEwN2U7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbiNhYm91dCAuZGl2LWltZy1iZyAuYWJvdXQtaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDg1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbiNhYm91dCAuYWJvdXQtZGVzY3IgLnAtaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNhYm91dCAuYWJvdXQtZGVzY3IgLnNlcGFyYXRvciB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaGVhZGluZ3tcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuI2V4cGFuZEJ1dHRvbntcbiAgYmFja2dyb3VuZDogbm9uZSFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYjhhMDdlOyBcbn1cbiNleHBhbmRCdXR0b246aG92ZXJ7XG4gIGNvbG9yOiAjYjhhMDdlYWI7XG59XG5cbiNtb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xuXG4jcmVzZWFyY2hDYXJvdXNlbHtcbiAgICBoZWlnaHQ6IDYwdmggIWltcG9ydGFudDtcblxufVxuXG4udy0xMDB7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIGNvbG9yOiAjYjhhMDdlO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuXG4uQU17XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBmaWx0ZXI6IGludmVydCg2NiUpIHNlcGlhKDIxJSkgc2F0dXJhdGUoNDQ3JSkgaHVlLXJvdGF0ZSgzNTZkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCg4OSUpO1xufSBcbi5jYXJvdXNlbC1pbmRpY2F0b3Jze1xuICAgIGZpbHRlcjogaW52ZXJ0KDY2JSkgc2VwaWEoMjElKSBzYXR1cmF0ZSg0NDclKSBodWUtcm90YXRlKDM1NmRlZykgYnJpZ2h0bmVzcyg5NCUpIGNvbnRyYXN0KDg5JSk7XG4gICAgei1pbmRleDogMDtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLFxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29ue1xuICAgIGZpbHRlcjogaW52ZXJ0KDY2JSkgc2VwaWEoMjElKSBzYXR1cmF0ZSg0NDclKSBodWUtcm90YXRlKDM1NmRlZykgYnJpZ2h0bmVzcyg5NCUpIGNvbnRyYXN0KDg5JSk7XG5cbn1cblxuXG5cbm5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiAxMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDkycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCA5MnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDkycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi5uYXYtbWVudSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG5uYXYgdWwgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxubmF2IHVsIGxpIGEge1xuICBwYWRkaW5nOiAycHggMCAwIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxubmF2IHVsIGxpIGE6aG92ZXJ7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwJTtcbn1cblxuLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAzMCU7XG59XG4ubG9nbyBpbWc6aG92ZXJ7XG4gIGhlaWdodDogNTAlO1xufVxuXG4ucmVzcG9uc2l2ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjYWZhZmFmO1xufVxuXG4ubWFpbi1uYXYge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNjb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ubmF2YmFyLWV4cGFuZC1sZ3tcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC43NXM7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9IFxufVxuXG5cbmJvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI3NGQ7XG59XG5cbiNjb250YWN0e1xuICBwYWRkaW5nOiA0JTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuLnRpdGxle1xuICBwYWRkaW5nLWJvdHRvbTogMSU7XG59XG4uY29sLW1kLTN7XG4gIGJhY2tncm91bmQ6ICMxNDc4YTc7XG4gIHBhZGRpbmc6IDQlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbn1cblxuLmNvbnRhY3QtaW5mbyBoMntcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG4uY29sLW1kLTl7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDMlO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuXG4uY29udGFjdC1mb3JtIGxhYmVse1xuICBmb250LXdlaWdodDo2MDA7XG59XG5cbi5jb250YWN0LWZvcm0gYnV0dG9ue1xuICBiYWNrZ3JvdW5kOiMxNDlkZGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY29udGFjdC1mb3JtIGJ1dHRvbjpmb2N1c3tcbiAgYm94LXNoYWRvdzpub25lO1xufVxuXG5cbmgzLGg0e1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5mb3JtLWdyb3Vwe1xuICBwYWRkaW5nOiAyJTtcbiAgXG59XG5cbi5saW5le1xuICBtYXJnaW4tdG9wOiAxMHB4OyBcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiA1NSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, { getScrollHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "FsIY":
/*!********************************************!*\
  !*** ./src/app/awards/awards.component.ts ***!
  \********************************************/
/*! exports provided: AwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsComponent", function() { return AwardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AwardsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AwardsComponent.ɵfac = function AwardsComponent_Factory(t) { return new (t || AwardsComponent)(); };
AwardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AwardsComponent, selectors: [["app-awards"]], decls: 257, vars: 0, consts: [[1, "main-nav", "navbar-expand-lg"], [1, "row"], [2, "padding-right", "20%"], [1, "logo"], ["href", "index.html"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", "alt", "logo"], [1, "nav-menu", "list-unstyled"], ["href", "#home", 1, "smooth-scroll"], ["href", "#about", 1, "smooth-scroll"], ["href", "/awards", 1, "smooth-scroll"], ["href", "/publications", 1, "smooth-scroll"], ["href", "#contact", 1, "smooth-scroll"], ["id", "awards"], ["width", "395", "height", "81", "viewBox", "0 0 395 81", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "id", "logo"], ["d", "M51.9 64.6H25.7L21.5 77H3.60001L29 6.8H48.8L74.2 77H56.1L51.9 64.6ZM47.5 51.4L38.8 25.7L30.2 51.4H47.5Z", "stroke", "black", "stroke-width", "5"], ["d", "M162.03 21.2L146.93 77H128.03L119.23 40.8L110.13 77H91.3305L76.1305 21.2H93.2305L101.13 61.1L110.53 21.2H128.63L138.13 60.9L145.93 21.2H162.03Z", "stroke", "black", "stroke-width", "5"], ["d", "M165.152 49C165.152 43.2667 166.218 38.2333 168.352 33.9C170.552 29.5667 173.518 26.2333 177.252 23.9C180.985 21.5667 185.152 20.4 189.752 20.4C193.685 20.4 197.118 21.2 200.052 22.8C203.052 24.4 205.352 26.5 206.952 29.1V21.2H224.052V77H206.952V69.1C205.285 71.7 202.952 73.8 199.952 75.4C197.018 77 193.585 77.8 189.652 77.8C185.118 77.8 180.985 76.6333 177.252 74.3C173.518 71.9 170.552 68.5333 168.352 64.2C166.218 59.8 165.152 54.7333 165.152 49ZM206.952 49.1C206.952 44.8333 205.752 41.4667 203.352 39C201.018 36.5333 198.152 35.3 194.752 35.3C191.352 35.3 188.452 36.5333 186.052 39C183.718 41.4 182.552 44.7333 182.552 49C182.552 53.2667 183.718 56.6667 186.052 59.2C188.452 61.6667 191.352 62.9 194.752 62.9C198.152 62.9 201.018 61.6667 203.352 59.2C205.752 56.7333 206.952 53.3667 206.952 49.1Z", "stroke", "black", "stroke-width", "5"], ["d", "M253.523 30.5C255.523 27.4333 258.023 25.0333 261.023 23.3C264.023 21.5 267.356 20.6 271.023 20.6V38.7H266.323C262.056 38.7 258.856 39.6333 256.723 41.5C254.589 43.3 253.523 46.5 253.523 51.1V77H236.423V21.2H253.523V30.5Z", "stroke", "black", "stroke-width", "5"], ["d", "M275.796 49C275.796 43.2667 276.863 38.2333 278.996 33.9C281.196 29.5667 284.163 26.2333 287.896 23.9C291.629 21.5667 295.796 20.4 300.396 20.4C304.063 20.4 307.396 21.1667 310.396 22.7C313.463 24.2333 315.863 26.3 317.596 28.9V3H334.696V77H317.596V69C315.996 71.6667 313.696 73.8 310.696 75.4C307.763 77 304.329 77.8 300.396 77.8C295.796 77.8 291.629 76.6333 287.896 74.3C284.163 71.9 281.196 68.5333 278.996 64.2C276.863 59.8 275.796 54.7333 275.796 49ZM317.596 49.1C317.596 44.8333 316.396 41.4667 313.996 39C311.663 36.5333 308.796 35.3 305.396 35.3C301.996 35.3 299.096 36.5333 296.696 39C294.363 41.4 293.196 44.7333 293.196 49C293.196 53.2667 294.363 56.6667 296.696 59.2C299.096 61.6667 301.996 62.9 305.396 62.9C308.796 62.9 311.663 61.6667 313.996 59.2C316.396 56.7333 317.596 53.3667 317.596 49.1Z", "stroke", "black", "stroke-width", "5"], ["d", "M369.767 77.8C364.901 77.8 360.567 76.9667 356.767 75.3C352.967 73.6333 349.967 71.3667 347.767 68.5C345.567 65.5667 344.334 62.3 344.067 58.7H360.967C361.167 60.6333 362.067 62.2 363.667 63.4C365.267 64.6 367.234 65.2 369.567 65.2C371.701 65.2 373.334 64.8 374.467 64C375.667 63.1333 376.267 62.0333 376.267 60.7C376.267 59.1 375.434 57.9333 373.767 57.2C372.101 56.4 369.401 55.5333 365.667 54.6C361.667 53.6667 358.334 52.7 355.667 51.7C353.001 50.6333 350.701 49 348.767 46.8C346.834 44.5333 345.867 41.5 345.867 37.7C345.867 34.5 346.734 31.6 348.467 29C350.267 26.3333 352.867 24.2333 356.267 22.7C359.734 21.1667 363.834 20.4 368.567 20.4C375.567 20.4 381.067 22.1333 385.067 25.6C389.134 29.0667 391.467 33.6667 392.067 39.4H376.267C376.001 37.4667 375.134 35.9333 373.667 34.8C372.267 33.6667 370.401 33.1 368.067 33.1C366.067 33.1 364.534 33.5 363.467 34.3C362.401 35.0333 361.867 36.0667 361.867 37.4C361.867 39 362.701 40.2 364.367 41C366.101 41.8 368.767 42.6 372.367 43.4C376.501 44.4667 379.867 45.5333 382.467 46.6C385.067 47.6 387.334 49.2667 389.267 51.6C391.267 53.8667 392.301 56.9333 392.367 60.8C392.367 64.0667 391.434 67 389.567 69.6C387.767 72.1333 385.134 74.1333 381.667 75.6C378.267 77.0667 374.301 77.8 369.767 77.8Z", "stroke", "black", "stroke-width", "5"], [1, "grid-container"], [1, "grid-item"], [1, "card"], [1, "card-details"], [1, "text-title"], [1, "text-body"], ["href", "https://ieeexplore.ieee.org/author/37398927100", "target", "\u201D_blank\u201D", 1, "card-button"], ["href", "https://cra.org/announcing-the-2020-computing-innovation-fellows/", "target", "\u201D_blank\u201D", 1, "card-button"], ["href", "https://citris-uc.org/people/person/houman-homayoun/", "target", "_blank", 1, "card-button"], ["href", "https://engineering.utdallas.edu/DCAS/invited-speakers.html", "target", "_blank", 1, "card-button"], ["href", "https://ece.ucdavis.edu/news/prof-houman-homayoun-recignized-association-computing-machinerys-glsvlsi-service-recognition", "target", "_blank", 1, "card-button"], ["href", "https://sebokwiki.org/wiki/Guide_to_the_Systems_Engineering_Body_of_Knowledge_(SEBoK)", "target", "_blank", 1, "card-button"], ["href", "https://ece.ucdavis.edu/news/prof-houman-homayoun-wins-best-paper-award-19th-ieee-international-conference-data-mining", "target", "_blank", 1, "card-button"], ["href", "https://www.congress.gov/bill/117th-congress/house-bill/7900", "target", "_blank", 1, "card-button"], ["href", "https://ece.ucdavis.edu/news/prof-houman-homayoun-and-ece-phd-student-gaurav-kolhe-nominated-best-paper-award-iccad", "target", "_blank", 1, "card-button"], ["href", "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1747780&HistoricalAwards=false", "target", "_blank", 1, "card-button"], ["href", "http://www.wikicfp.com/cfp/servlet/event.showcfp?eventid=82163", "target", "_blank", 1, "card-button"], ["href", "https://www.glsvlsi.org/program.html", "target", "_blank", 1, "card-button"], ["href", "https://ieeexplore.ieee.org/author/37398927100", "target", "_blank", 1, "card-button"], ["href", "https://www.acm.org/conferences/best-paper-awards", "target", "_blank", 1, "card-button"], ["href", "https://myemail.constantcontact.com/Funding-Opportunities--Engineering-and-Applied-Sciences.html?soid=1111345979402&aid=KIMaL4qCTdQ", "target", "_blank", 1, "card-button"], ["href", "https://cec.gmu.edu/research/grants", "target", "_blank", 1, "card-button"], ["href", "https://awards.acm.org/doctoral-dissertation/award-recipients", "target", "_blank", 1, "card-button"], ["href", "https://www.sciencedirect.com/science/article/pii/S2210537910000065", "target", "_blank", 1, "card-button"], ["href", "https://ansci.osu.edu/graduate/outstanding-graduate-student-award", "target", "_blank", 1, "card-button"], ["href", "https://r6.ieee.org/ocs/wp-content/uploads/sites/16/2011/03/July2012.pdf", "target", "_blank", 1, "card-button"], ["href", "https://gs.mcmaster.ca/current-students/scholarships/", "target", "_blank", 1, "card-button"], ["href", "https://goldwaterscholarship.gov/", "target", "_blank", 1, "card-button"]], template: function AwardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "IEEE Senior Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "NSF Computing Innovation (CI) Fellow Mentor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Best Paper Nominee, IEEE Computer Society Annual Symposium on VLSI (ISVLSI)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Best Paper Award, 14th IEEE Dallas Circuits and Systems (DCAS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "ACM GLSVLSI Service Recognition Award");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Core Member, Hardware Assurance Group, Systems Engineering Body of Knowledge (SEBoK)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Best Paper Award, 19th IEEE International Conference on Data Mining (ICDM)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Congress budget appropriation for CHEST Center as part of National Defense Authorization Act ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Best Paper Nominee, International Conference on Computer Aided Design (ICCAD)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "NSF IUCRC Center Award, Center for HW Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "2019-2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "General Chair, IEEE/ACM 29th ACM Great Lakes Symposium on VLSI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Technical Program Co-Chair, IEEE/ACM 28th ACM Great Lakes Symposium on VLSI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Associate Editor, IEEE Transactions on VLSI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "2017-Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Best Paper Award, 26th ACM Great Lakes Symposium on VLSI (GLSVLSI)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "DARPA Microsystems Technology Office Award $330K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "2015-2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "National Science Foundation Cyber Physical Program Award $995K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "2013-2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "General Motors Corporation Research Fund $261K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "2013-2016");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "National Science Foundation CI Fellow Award $280K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "2010-2012");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "ACM Doctoral Dissertation Award Nominee (2 out of 31 dissertations selected) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "2010");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "4-Years Chair Fellowship Award, University of California Irvine $160K");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "2006");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Outstanding Graduate Student Award, (APSIH)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "2010");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "First Place, IEEE Orange County and Western Digital Student Design Contest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "2009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "More Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "First Place, IEEE Orange County and Western Digital Student Design Contest.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "2008");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "University Scholarship, McMaster University, Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "2006");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "NAHAAL Scholarship for Excellence in Education and Research");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "2001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "More info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\n*[_ngcontent-%COMP%]{\n  padding: 0; \n  margin: 0; \n  box-sizing: border-box !important;\n}\n\nnav[_ngcontent-%COMP%] {\n    background-color: #f7f7f7;\n    top: 0;\n    z-index: 1000;\n    width: 100%;\n    padding: 20px;\n    display: none;\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n    float: right;\n    line-height: 32px;\n    margin-bottom: 0;\n    padding-top: 16px;\n  }\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left;\n    margin-right: 15px;\n    font-family: 'Poppins', sans-serif;\n    margin-left: 40px;\n  }\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 2px 0 0 0;\n    position: relative;\n    display: block;\n    font-size: 15px;\n    color: #999999;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 500;\n    line-height: 16px;\n    text-transform: uppercase;\n    letter-spacing: 0.02em;\n    text-transform: capitalize;\n  }\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    color: black;\n    font-size: 16px;\n  }\n\n.logo[_ngcontent-%COMP%] {\n    float: left;\n    padding-left: 20%;\n  }\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30%;\n    height: 30%;\n  }\n\n.responsive[_ngcontent-%COMP%] {\n    display: none;\n    font-size: 23px;\n  }\n\n.active[_ngcontent-%COMP%] {\n    color: #afafaf;\n  }\n\n.main-nav[_ngcontent-%COMP%] {\n    display: block !important;\n    position: relative;\n  }\n\n#container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n  }\n\n.navbar-expand-lg[_ngcontent-%COMP%]{\n    animation: fadeIn 0.75s;\n  }\n\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: 1; } \n  }\n\n.card[_ngcontent-%COMP%] {\n    width: 190px;\n    height: 254px;\n    border-radius: 20px;\n    background: #f5f5f5;\n    position: relative;\n    padding: 1.8rem;\n    border: 2px solid #c3c6ce;\n    transition: 0.5s ease-out;\n    overflow: visible;\n   }\n\n.card-details[_ngcontent-%COMP%] {\n    color: black;\n    height: 100%;\n    gap: .5em;\n    display: grid;\n    place-content: center;\n   }\n\n.card-button[_ngcontent-%COMP%] {\n    transform: translate(-50%, 125%);\n    width: 60%;\n    border-radius: 1rem;\n    border: none;\n    background-color: #008bf8;\n    color: #fff;\n    font-size: 1rem;\n    padding: .5rem 1rem;\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    opacity: 0;\n    transition: 0.3s ease-out;\n   }\n\n.text-body[_ngcontent-%COMP%] {\n    color: rgb(134, 134, 134);\n   }\n\n\n\n.text-title[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    font-weight: bold;\n   }\n\n\n\n.card[_ngcontent-%COMP%]:hover {\n    border-color: #008bf8;\n    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);\n   }\n\n.card[_ngcontent-%COMP%]:hover   .card-button[_ngcontent-%COMP%] {\n    transform: translate(-50%, 50%);\n    opacity: 1;\n   }\n\n.title[_ngcontent-%COMP%]{\n        text-align: center;\n        font-family: 'Poppins', sans-serif;\n        padding-top: 1%;\n        font-size: 100px;\n }\n\n.grid-container[_ngcontent-%COMP%] {\n    margin-top: 10%;\n    display: grid;\n    grid-template-columns: auto auto auto auto auto;\n    padding: 10px;\n    height: auto;\n}\n\n.grid-item[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    margin-top: 10%;\n    text-align: center;\n}\n\n#awards[_ngcontent-%COMP%]{\n    height: auto !important;\n  }\n\n#logo[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 15%; \n  left: 50%;\n  transform: translate(-50%, -15%); \n  margin-bottom: 10px;\n  animation: fill 0.5s ease forwards 2.5s; \n  z-index: 100;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(1){\n  stroke-dasharray:  329.0250549316406px;\n  stroke-dashoffset: 329.0250549316406px;\n  animation: line-anim 2s ease forwards; \n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2){\n  stroke-dasharray: 442.1668395996094px;\n  stroke-dashoffset: 442.1668395996094px;\n  animation: line-anim 2s ease forwards 0.1s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3){\n  stroke-dasharray: 313.4666748046875px;\n  stroke-dashoffset: 313.4666748046875px;\n  animation: line-anim 2s ease forwards 0.2s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4){\n  stroke-dasharray: 189.638916015625px;\n  stroke-dashoffset: 189.638916015625px;\n  animation: line-anim 2s ease forwards 0.3s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5){\n  stroke-dasharray: 349.69708251953125px;\n  stroke-dashoffset: 349.69708251953125px;\n  animation: line-anim 2s ease forwards 0.4s;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6){\n  stroke-dasharray: 289.90948486328125px;\n  stroke-dashoffset: 289.90948486328125px;\n  animation: line-anim 2s ease forwards 0.5s;\n}\n\n@keyframes line-anim {\n    to{\n      stroke-dashoffset: 0px;\n    }\n  \n}\n\n@keyframes fill {\n  from{\n    fill: transparent;\n  }\n  to{\n    fill:black; \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF3YXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTs7QUFFNUU7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULGlDQUFpQztBQUNuQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixNQUFNO0lBQ04sYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFRTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QiwwQkFBMEI7RUFDNUI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxLQUFLLFVBQVUsRUFBRTtJQUNqQixPQUFPLFVBQVUsRUFBRTtFQUNyQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsaUJBQWlCO0dBQ2xCOztBQUVBO0lBQ0MsWUFBWTtJQUNaLFlBQVk7SUFDWixTQUFTO0lBQ1QsYUFBYTtJQUNiLHFCQUFxQjtHQUN0Qjs7QUFFQTtJQUNDLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtHQUMxQjs7QUFFQTtJQUNDLHlCQUF5QjtHQUMxQjs7QUFFQSxPQUFPOztBQUNQO0lBQ0MsaUJBQWlCO0lBQ2pCLGlCQUFpQjtHQUNsQjs7QUFFQSxRQUFROztBQUNSO0lBQ0MscUJBQXFCO0lBQ3JCLDRDQUE0QztHQUM3Qzs7QUFFQTtJQUNDLCtCQUErQjtJQUMvQixVQUFVO0dBQ1g7O0FBQ0g7UUFDUSxrQkFBa0I7UUFDbEIsa0NBQWtDO1FBQ2xDLGVBQWU7UUFDZixnQkFBZ0I7Q0FDdkI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLCtDQUErQztJQUMvQyxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVFO0lBQ0UsdUJBQXVCO0VBQ3pCOztBQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLHNDQUFzQztFQUN0QyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsc0NBQXNDO0VBQ3RDLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLHFDQUFxQztFQUNyQyxzQ0FBc0M7RUFDdEMsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHFDQUFxQztFQUNyQywwQ0FBMEM7QUFDNUM7O0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsdUNBQXVDO0VBQ3ZDLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLHNDQUFzQztFQUN0Qyx1Q0FBdUM7RUFDdkMsMENBQTBDO0FBQzVDOztBQUdBO0lBQ0k7TUFDRSxzQkFBc0I7SUFDeEI7O0FBRUo7O0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoiYXdhcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xuXG4qe1xuICBwYWRkaW5nOiAwOyBcbiAgbWFyZ2luOiAwOyBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xufVxuXG5uYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuICBcbiAgLm5hdi1tZW51IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgfVxuICBcbiAgbmF2IHVsIGxpIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgfVxuICBcbiAgbmF2IHVsIGxpIGEge1xuICAgIHBhZGRpbmc6IDJweCAwIDAgMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbiAgXG4gIG5hdiB1bCBsaSBhOmhvdmVye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgXG4gIC5sb2dvIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgfVxuICBcbiAgLmxvZ28gaW1nIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzAlO1xuICB9XG4gXG4gIC5yZXNwb25zaXZlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgfVxuICBcbiAgLmFjdGl2ZSB7XG4gICAgY29sb3I6ICNhZmFmYWY7XG4gIH1cbiAgXG4gIC5tYWluLW5hdiB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gICNjb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuICBcbiAgLm5hdmJhci1leHBhbmQtbGd7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC43NXM7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMTsgfSBcbiAgfVxuICBcbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxOTBweDtcbiAgICBoZWlnaHQ6IDI1NHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMS44cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjM2M2Y2U7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgIH1cbiAgIFxuICAgLmNhcmQtZGV0YWlscyB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBnYXA6IC41ZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICB9XG4gICBcbiAgIC5jYXJkLWJ1dHRvbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTI1JSk7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YmY4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcbiAgIH1cbiAgIFxuICAgLnRleHQtYm9keSB7XG4gICAgY29sb3I6IHJnYigxMzQsIDEzNCwgMTM0KTtcbiAgIH1cbiAgIFxuICAgLypUZXh0Ki9cbiAgIC50ZXh0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgIH1cbiAgIFxuICAgLypIb3ZlciovXG4gICAuY2FyZDpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA4YmY4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgfVxuICAgXG4gICAuY2FyZDpob3ZlciAuY2FyZC1idXR0b24ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgIH1cbi50aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICBwYWRkaW5nLXRvcDogMSU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gfVxuXG4uZ3JpZC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZ3JpZC1pdGVtIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4gICNhd2FyZHN7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4jbG9nb3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1JTsgXG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1JSk7IFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBhbmltYXRpb246IGZpbGwgMC41cyBlYXNlIGZvcndhcmRzIDIuNXM7IFxuICB6LWluZGV4OiAxMDA7XG59XG5cbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDEpe1xuICBzdHJva2UtZGFzaGFycmF5OiAgMzI5LjAyNTA1NDkzMTY0MDZweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMyOS4wMjUwNTQ5MzE2NDA2cHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHM7IFxufVxuXG4jbG9nbyBwYXRoOm50aC1jaGlsZCgyKXtcbiAgc3Ryb2tlLWRhc2hhcnJheTogNDQyLjE2NjgzOTU5OTYwOTRweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ0Mi4xNjY4Mzk1OTk2MDk0cHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC4xcztcbn1cbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDMpe1xuICBzdHJva2UtZGFzaGFycmF5OiAzMTMuNDY2Njc0ODA0Njg3NXB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogMzEzLjQ2NjY3NDgwNDY4NzVweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjJzO1xufVxuI2xvZ28gcGF0aDpudGgtY2hpbGQoNCl7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDE4OS42Mzg5MTYwMTU2MjVweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE4OS42Mzg5MTYwMTU2MjVweDtcbiAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjNzO1xufVxuI2xvZ28gcGF0aDpudGgtY2hpbGQoNSl7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDM0OS42OTcwODI1MTk1MzEyNXB4O1xuICBzdHJva2UtZGFzaG9mZnNldDogMzQ5LjY5NzA4MjUxOTUzMTI1cHg7XG4gIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC40cztcbn1cbiNsb2dvIHBhdGg6bnRoLWNoaWxkKDYpe1xuICBzdHJva2UtZGFzaGFycmF5OiAyODkuOTA5NDg0ODYzMjgxMjVweDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI4OS45MDk0ODQ4NjMyODEyNXB4O1xuICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuNXM7XG59XG5cblxuQGtleWZyYW1lcyBsaW5lLWFuaW0ge1xuICAgIHRve1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDBweDtcbiAgICB9XG4gIFxufVxuQGtleWZyYW1lcyBmaWxsIHtcbiAgZnJvbXtcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgfVxuICB0b3tcbiAgICBmaWxsOmJsYWNrOyBcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AwardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-awards',
                templateUrl: './awards.component.html',
                styleUrls: ['./awards.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GVa1":
/*!********************************************************!*\
  !*** ./src/app/publications/publications.component.ts ***!
  \********************************************************/
/*! exports provided: PublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function() { return PublicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PublicationsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PublicationsComponent.ɵfac = function PublicationsComponent_Factory(t) { return new (t || PublicationsComponent)(); };
PublicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicationsComponent, selectors: [["app-publications"]], decls: 178, vars: 0, consts: [[1, "main-nav", "navbar-expand-lg"], [1, "row"], [2, "padding-right", "20%"], [1, "logo"], ["href", "index.html"], ["src", "https://ece.ucdavis.edu/sites/g/files/dgvnsk8091/files/ece_logo_125px.png", "alt", "logo"], [1, "nav-menu", "list-unstyled"], ["href", "#home", 1, "smooth-scroll"], ["href", "#about", 1, "smooth-scroll"], ["href", "/awards", 1, "smooth-scroll"], ["href", "/publications", 1, "smooth-scroll"], ["href", "#contact", 1, "smooth-scroll"], ["id", "publications"], ["width", "638", "height", "87", "viewBox", "0 0 638 87", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "id", "logo"], ["d", "M56.7 35.4C56.7 39.4667 55.7667 43.2 53.9 46.6C52.0333 49.9333 49.1667 52.6333 45.3 54.7C41.4333 56.7667 36.6333 57.8 30.9 57.8H20.3V83H3.2V12.8H30.9C36.5 12.8 41.2333 13.7667 45.1 15.7C48.9667 17.6333 51.8667 20.3 53.8 23.7C55.7333 27.1 56.7 31 56.7 35.4ZM29.6 44.2C32.8667 44.2 35.3 43.4333 36.9 41.9C38.5 40.3667 39.3 38.2 39.3 35.4C39.3 32.6 38.5 30.4333 36.9 28.9C35.3 27.3667 32.8667 26.6 29.6 26.6H20.3V44.2H29.6Z", "stroke", "black", "stroke-width", "5"], ["d", "M120.702 27.2V83H103.602V75.4C101.869 77.8667 99.5023 79.8667 96.5023 81.4C93.569 82.8667 90.3023 83.6 86.7023 83.6C82.4357 83.6 78.669 82.6667 75.4023 80.8C72.1357 78.8667 69.6023 76.1 67.8023 72.5C66.0023 68.9 65.1023 64.6667 65.1023 59.8V27.2H82.1023V57.5C82.1023 61.2333 83.069 64.1333 85.0023 66.2C86.9357 68.2667 89.5357 69.3 92.8023 69.3C96.1357 69.3 98.769 68.2667 100.702 66.2C102.636 64.1333 103.602 61.2333 103.602 57.5V27.2H120.702Z", "stroke", "black", "stroke-width", "5"], ["d", "M150.085 35.1C151.685 32.5 153.985 30.4 156.985 28.8C159.985 27.2 163.418 26.4 167.285 26.4C171.885 26.4 176.052 27.5667 179.785 29.9C183.518 32.2333 186.452 35.5667 188.585 39.9C190.785 44.2333 191.885 49.2667 191.885 55C191.885 60.7333 190.785 65.8 188.585 70.2C186.452 74.5333 183.518 77.9 179.785 80.3C176.052 82.6333 171.885 83.8 167.285 83.8C163.352 83.8 159.918 83.0333 156.985 81.5C154.052 79.9 151.752 77.8 150.085 75.2V83H132.985V9H150.085V35.1ZM174.485 55C174.485 50.7333 173.285 47.4 170.885 45C168.552 42.5333 165.652 41.3 162.185 41.3C158.785 41.3 155.885 42.5333 153.485 45C151.152 47.4667 149.985 50.8333 149.985 55.1C149.985 59.3667 151.152 62.7333 153.485 65.2C155.885 67.6667 158.785 68.9 162.185 68.9C165.585 68.9 168.485 67.6667 170.885 65.2C173.285 62.6667 174.485 59.2667 174.485 55Z", "stroke", "black", "stroke-width", "5"], ["d", "M217.956 9V83H200.856V9H217.956Z", "stroke", "black", "stroke-width", "5"], ["d", "M238.948 21.4C235.948 21.4 233.482 20.5333 231.548 18.8C229.682 17 228.748 14.8 228.748 12.2C228.748 9.53333 229.682 7.33333 231.548 5.59999C233.482 3.79999 235.948 2.89999 238.948 2.89999C241.882 2.89999 244.282 3.79999 246.148 5.59999C248.082 7.33333 249.048 9.53333 249.048 12.2C249.048 14.8 248.082 17 246.148 18.8C244.282 20.5333 241.882 21.4 238.948 21.4ZM247.448 27.2V83H230.348V27.2H247.448Z", "stroke", "black", "stroke-width", "5"], ["d", "M256.441 55.1C256.441 49.3 257.607 44.2333 259.941 39.9C262.341 35.5667 265.641 32.2333 269.841 29.9C274.107 27.5667 278.974 26.4 284.441 26.4C291.441 26.4 297.274 28.2333 301.941 31.9C306.674 35.5667 309.774 40.7333 311.241 47.4H293.041C291.507 43.1333 288.541 41 284.141 41C281.007 41 278.507 42.2333 276.641 44.7C274.774 47.1 273.841 50.5667 273.841 55.1C273.841 59.6333 274.774 63.1333 276.641 65.6C278.507 68 281.007 69.2 284.141 69.2C288.541 69.2 291.507 67.0667 293.041 62.8H311.241C309.774 69.3333 306.674 74.4667 301.941 78.2C297.207 81.9333 291.374 83.8 284.441 83.8C278.974 83.8 274.107 82.6333 269.841 80.3C265.641 77.9667 262.341 74.6333 259.941 70.3C257.607 65.9667 256.441 60.9 256.441 55.1Z", "stroke", "black", "stroke-width", "5"], ["d", "M316.987 55C316.987 49.2667 318.054 44.2333 320.187 39.9C322.387 35.5667 325.354 32.2333 329.087 29.9C332.821 27.5667 336.987 26.4 341.587 26.4C345.521 26.4 348.954 27.2 351.887 28.8C354.887 30.4 357.187 32.5 358.787 35.1V27.2H375.887V83H358.787V75.1C357.121 77.7 354.787 79.8 351.787 81.4C348.854 83 345.421 83.8 341.487 83.8C336.954 83.8 332.821 82.6333 329.087 80.3C325.354 77.9 322.387 74.5333 320.187 70.2C318.054 65.8 316.987 60.7333 316.987 55ZM358.787 55.1C358.787 50.8333 357.587 47.4667 355.187 45C352.854 42.5333 349.987 41.3 346.587 41.3C343.187 41.3 340.287 42.5333 337.887 45C335.554 47.4 334.387 50.7333 334.387 55C334.387 59.2667 335.554 62.6667 337.887 65.2C340.287 67.6667 343.187 68.9 346.587 68.9C349.987 68.9 352.854 67.6667 355.187 65.2C357.587 62.7333 358.787 59.3667 358.787 55.1Z", "stroke", "black", "stroke-width", "5"], ["d", "M419.359 68.5V83H410.659C404.459 83 399.625 81.5 396.159 78.5C392.692 75.4333 390.959 70.4667 390.959 63.6V41.4H384.159V27.2H390.959V13.6H408.059V27.2H419.259V41.4H408.059V63.8C408.059 65.4667 408.459 66.6667 409.259 67.4C410.059 68.1333 411.392 68.5 413.259 68.5H419.359Z", "stroke", "black", "stroke-width", "5"], ["d", "M437.484 21.4C434.484 21.4 432.017 20.5333 430.084 18.8C428.217 17 427.284 14.8 427.284 12.2C427.284 9.53333 428.217 7.33333 430.084 5.59999C432.017 3.79999 434.484 2.89999 437.484 2.89999C440.417 2.89999 442.817 3.79999 444.684 5.59999C446.617 7.33333 447.584 9.53333 447.584 12.2C447.584 14.8 446.617 17 444.684 18.8C442.817 20.5333 440.417 21.4 437.484 21.4ZM445.984 27.2V83H428.884V27.2H445.984Z", "stroke", "black", "stroke-width", "5"], ["d", "M483.776 83.8C478.309 83.8 473.376 82.6333 468.976 80.3C464.642 77.9667 461.209 74.6333 458.676 70.3C456.209 65.9667 454.976 60.9 454.976 55.1C454.976 49.3667 456.242 44.3333 458.776 40C461.309 35.6 464.776 32.2333 469.176 29.9C473.576 27.5667 478.509 26.4 483.976 26.4C489.442 26.4 494.376 27.5667 498.776 29.9C503.176 32.2333 506.642 35.6 509.176 40C511.709 44.3333 512.976 49.3667 512.976 55.1C512.976 60.8333 511.676 65.9 509.076 70.3C506.542 74.6333 503.042 77.9667 498.576 80.3C494.176 82.6333 489.242 83.8 483.776 83.8ZM483.776 69C487.042 69 489.809 67.8 492.076 65.4C494.409 63 495.576 59.5667 495.576 55.1C495.576 50.6333 494.442 47.2 492.176 44.8C489.976 42.4 487.242 41.2 483.976 41.2C480.642 41.2 477.876 42.4 475.676 44.8C473.476 47.1333 472.376 50.5667 472.376 55.1C472.376 59.5667 473.442 63 475.576 65.4C477.776 67.8 480.509 69 483.776 69Z", "stroke", "black", "stroke-width", "5"], ["d", "M556.048 26.6C562.581 26.6 567.781 28.7333 571.648 33C575.581 37.2 577.548 43 577.548 50.4V83H560.548V52.7C560.548 48.9667 559.581 46.0667 557.648 44C555.714 41.9333 553.114 40.9 549.848 40.9C546.581 40.9 543.981 41.9333 542.048 44C540.114 46.0667 539.148 48.9667 539.148 52.7V83H522.048V27.2H539.148V34.6C540.881 32.1333 543.214 30.2 546.148 28.8C549.081 27.3333 552.381 26.6 556.048 26.6Z", "stroke", "black", "stroke-width", "5"], ["d", "M612.13 83.8C607.264 83.8 602.93 82.9667 599.13 81.3C595.33 79.6333 592.33 77.3667 590.13 74.5C587.93 71.5667 586.697 68.3 586.43 64.7H603.33C603.53 66.6333 604.43 68.2 606.03 69.4C607.63 70.6 609.597 71.2 611.93 71.2C614.064 71.2 615.697 70.8 616.83 70C618.03 69.1333 618.63 68.0333 618.63 66.7C618.63 65.1 617.797 63.9333 616.13 63.2C614.464 62.4 611.764 61.5333 608.03 60.6C604.03 59.6667 600.697 58.7 598.03 57.7C595.364 56.6333 593.064 55 591.13 52.8C589.197 50.5333 588.23 47.5 588.23 43.7C588.23 40.5 589.097 37.6 590.83 35C592.63 32.3333 595.23 30.2333 598.63 28.7C602.097 27.1667 606.197 26.4 610.93 26.4C617.93 26.4 623.43 28.1333 627.43 31.6C631.497 35.0667 633.83 39.6667 634.43 45.4H618.63C618.364 43.4667 617.497 41.9333 616.03 40.8C614.63 39.6667 612.764 39.1 610.43 39.1C608.43 39.1 606.897 39.5 605.83 40.3C604.764 41.0333 604.23 42.0667 604.23 43.4C604.23 45 605.064 46.2 606.73 47C608.464 47.8 611.13 48.6 614.73 49.4C618.864 50.4667 622.23 51.5333 624.83 52.6C627.43 53.6 629.697 55.2667 631.63 57.6C633.63 59.8667 634.664 62.9333 634.73 66.8C634.73 70.0667 633.797 73 631.93 75.6C630.13 78.1333 627.497 80.1333 624.03 81.6C620.63 83.0667 616.664 83.8 612.13 83.8Z", "stroke", "black", "stroke-width", "5"], [1, "seperatorLine"], [1, "container"], [1, "journalLinks"], [1, "title"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["href", "https://dl.acm.org/doi/10.1145/3579823", "target", "\\blank", 1, "btn", "btn-primary"], ["href", "https://dl.acm.org/doi/10.1145/3442696", "target", "\\blank", 1, "btn", "btn-primary"], ["href", "https://ieeexplore.ieee.org/document/9392010", "target", "\\blank", 1, "btn", "btn-primary"], [1, "confrencesLinks"], ["href", "https://www.ndss-symposium.org/ndss-paper/heteroscore-evaluating-and-mitigating-cloud-security-threats-brought-by-heterogeneity/", "target", "\\blank", 1, "btn", "btn-primary"], ["href", "https://ieeexplore.ieee.org/document/9995121", "target", "\\blank", 1, "btn", "btn-primary"], ["href", "https://ieeexplore.ieee.org/document/9995093", "target", "\\blank", 1, "btn", "btn-primary"]], template: function PublicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Awards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Journals: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Hardware Trojan Detection Using Machine Learning: A Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Journal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " TECS | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Citations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Kevin Immanuel Gubbi, Banafsheh Saber Latibari, Anirudh Srikanth, Tyler Sheaves, Sayed Arash Beheshti-Shirazi, Sai Manoj Pd, Satareh Rafatirad, Avesta Sasan, Houman Homayoun, Soheil Salehi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Adaptive performance modeling of data-intensive workloads for resource provisioning in virtualized environment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Journal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " TOMPECS | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Citations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " 49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Hosein Mohamamdi Makrani, Hossein Sayadi, Najmeh Nazari, Sai Mnoj Pudukotai Dinakarrao, Avesta Sasan, Tinoosh Mohsenin, Setareh Rafatirad, Houman Homayoun. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Imitating functional operations for mitigating side-channel leakage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Journal:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " TCAD | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Citations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " 48");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Abhijitt Dhavlle, Setareh Rafatirad, Khaled Khasawneh, Houman Homayoun, Sai Manoj Pudukotai Dinakarrao. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Conferences: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "HeteroScore: Evaluating and Mitigating Cloud Security Threats Brought by Heterogeneity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Conference:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " NDSS | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Citations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " 181");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Chongzhou Fang, Najmeh Nazari, Behnam Omidi, Han Wang, Aditya Puri, Manish Arora, Setareh Rafatirad, Houman Homayoun and Khaled N. Khasawneh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Prevent Over-fitting and Redundancy in Physiological Signal Analyses for Stress Detection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Conference:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " BIBM | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Citations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " 180");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Ruijie Fang, Ruoyu Zhang, Elahe Hosseini, Anna M Parenteau, Sally Hang, Setareh Rafatirad, Camelia E Hostinar, Mahdi Orooji, Houman Homayoun ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "A Low Cost EDA-based Stress Detection Using Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Conference:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " BIBM | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Citations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " 179");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Abhijitt Dhavlle, Setareh Rafatirad, Khaled Khasawneh, Houman Homayoun, Sai Manoj Pudukotai Dinakarrao. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\n*[_ngcontent-%COMP%]{\n  padding: 0; \n  margin: 0; \n}\n\nnav[_ngcontent-%COMP%] {\n    background-color: #f7f7f7;\n    top: 0;\n    z-index: 1000;\n    width: 100%;\n    padding: 20px;\n    display: none;\n}\n\n.nav-menu[_ngcontent-%COMP%] {\n    float: right;\n    line-height: 32px;\n    margin-bottom: 0;\n    padding-top: 16px;\n  }\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    float: left;\n    margin-right: 15px;\n    font-family: 'Poppins', sans-serif;\n    margin-left: 40px;\n  }\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 2px 0 0 0;\n    position: relative;\n    display: block;\n    font-size: 15px;\n    color: #999999;\n    font-family: 'Poppins', sans-serif;\n    font-weight: 500;\n    line-height: 16px;\n    text-transform: uppercase;\n    letter-spacing: 0.02em;\n    text-transform: capitalize;\n  }\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    color: black;\n    font-size: 16px;\n  }\n\n.logo[_ngcontent-%COMP%] {\n    float: left;\n    padding-left: 20%;\n  }\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30%;\n    height: 30%;\n  }\n\n.responsive[_ngcontent-%COMP%] {\n    display: none;\n    font-size: 23px;\n  }\n\n.active[_ngcontent-%COMP%] {\n    color: #afafaf;\n  }\n\n.main-nav[_ngcontent-%COMP%] {\n    display: block !important;\n    position: relative;\n  }\n\n.navbar-expand-lg[_ngcontent-%COMP%]{\n    animation: fadeIn 0.75s;\n  }\n\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: 1; } \n  }\n\n#publications[_ngcontent-%COMP%]{\n    height: auto !important;\n  }\n\n#logo[_ngcontent-%COMP%]{\n  position: relative;\n  top: -20%; \n  left: 50%;\n  transform: translate(-50%, 20%); \n  margin-bottom: 10px;\n  animation: fill 0.5s ease forwards 2.5s; \n  z-index: 100;\n}\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(1){\n    stroke-dasharray:  294.2875061035156px;\n    stroke-dashoffset: 294.2875061035156px;\n    animation: line-anim 2s ease forwards; \n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(2){\n    stroke-dasharray: 299.8020935058594px;\n    stroke-dashoffset: 299.8020935058594px;\n    animation: line-anim 2s ease forwards 0.08333s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(3){\n    stroke-dasharray: 349.8691711425781px;\n    stroke-dashoffset: 349.8691711425781px;\n    animation: line-anim 2s ease forwards 0.16666666666s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(4){\n    stroke-dasharray: 182.19998168945312px;\n    stroke-dashoffset: 182.19998168945312px;\n    animation: line-anim 2s ease forwards 0.3333s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(5){\n    stroke-dasharray: 313.46636962890625px;\n    stroke-dashoffset: 313.46636962890625px;\n    animation: line-anim 2s ease forwards 0.4166666s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(6){\n    stroke-dasharray: 333.52908325195312px;\n    stroke-dashoffset: 333.52908325195312px;\n    animation: line-anim 2s ease forwards 0.5s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(7){\n    stroke-dasharray:   260.28506469726562px;\n    stroke-dashoffset:  260.28506469726562px;\n    animation: line-anim 2s ease forwards 0.5833333s; \n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(8){\n    stroke-dasharray: 442.1668395996094px;\n    stroke-dashoffset: 442.1668395996094px;\n    animation: line-anim 2s ease forwards 0.6666666s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(9){\n    stroke-dasharray: 313.4666748046875px;\n    stroke-dashoffset: 313.4666748046875px;\n    animation: line-anim 2s ease forwards 0.75s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(10){\n    stroke-dasharray: 264.819091796875px;\n    stroke-dashoffset: 264.819091796875px;\n    animation: line-anim 2s ease forwards 0.8333333s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(11){\n    stroke-dasharray: 299.34197998046875px;\n    stroke-dashoffset: 299.34197998046875px;\n    animation: line-anim 2s ease forwards 0.91666s;\n  }\n\n#logo[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:nth-child(12){\n    stroke-dasharray: 289.90960693359375px;\n    stroke-dashoffset: 289.90960693359375px;\n    animation: line-anim 2s ease forwards 1s;\n  }\n\n@keyframes line-anim {\n    to{\n      stroke-dashoffset: 0px;\n    }\n  \n}\n\n@keyframes fill {\n  from{\n    fill: transparent;\n  }\n  to{\n    fill:black; \n  }\n}\n\n.container[_ngcontent-%COMP%]{\n  width: 100%;\n  max-width: 100%;\n}\n\n.seperatorLine[_ngcontent-%COMP%]{\n  height: 5px;\n  width: 35%;\n  border-radius: 20%;\n  background-color: black;\n  margin: 0 auto; \n  margin-top: 25px;\n  animation: fadeIn 5s;\n}\n\n.title[_ngcontent-%COMP%]{\n  font-family: 'Poppins', sans-serif;\n  font-size: 50px; \n  margin-left: 2%;\n}\n\nul[_ngcontent-%COMP%]{\n  list-style-type: none;\n}\n\n.container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n  margin: 0 auto;\n  width: 90%;\n  margin-top: 2%;\n}\n\n.card-header[_ngcontent-%COMP%]{\n  font-family: 'Poppins', sans-serif;\n  font-size: 30px;\n  padding: 10px;\n  text-align: center;\n}\n\n.card-body[_ngcontent-%COMP%]{\n  font-family: 'Poppins', sans-serif;\n}\n\n.card-title[_ngcontent-%COMP%]{\n  padding: 15px;\n  width: 25%;\n  border: 2px solid black;\n  border-radius: 10px;\n  text-align: center;\n  margin: 0 auto;\n  transition: 0.4s;\n}\n\n.card-title[_ngcontent-%COMP%]:hover{\n  background-color: rgba(211, 211, 211, 0.719);\n}\n\n.card-text[_ngcontent-%COMP%]{\n  font-size: 20px;\n  color: black; \n  text-align: center;\n  font-weight: 500;\n}\n\n.btn-primary[_ngcontent-%COMP%]{\n  width: 100%;\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTs7QUFFNUU7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLE1BQU07SUFDTixhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVFO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtFQUM1Qjs7QUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0VBQ3BCOztBQUdBO0lBQ0UsdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UsS0FBSyxVQUFVLEVBQUU7SUFDakIsT0FBTyxVQUFVLEVBQUU7RUFDckI7O0FBSUE7SUFDRSx1QkFBdUI7RUFDekI7O0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsc0NBQXNDO0lBQ3RDLHFDQUFxQztFQUN2Qzs7QUFFQTtJQUNFLHFDQUFxQztJQUNyQyxzQ0FBc0M7SUFDdEMsOENBQThDO0VBQ2hEOztBQUNBO0lBQ0UscUNBQXFDO0lBQ3JDLHNDQUFzQztJQUN0QyxvREFBb0Q7RUFDdEQ7O0FBQ0E7SUFDRSxzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLDZDQUE2QztFQUMvQzs7QUFDQTtJQUNFLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFDdkMsZ0RBQWdEO0VBQ2xEOztBQUNBO0lBQ0Usc0NBQXNDO0lBQ3RDLHVDQUF1QztJQUN2QywwQ0FBMEM7RUFDNUM7O0FBRUE7SUFDRSx3Q0FBd0M7SUFDeEMsd0NBQXdDO0lBQ3hDLGdEQUFnRDtFQUNsRDs7QUFFQTtJQUNFLHFDQUFxQztJQUNyQyxzQ0FBc0M7SUFDdEMsZ0RBQWdEO0VBQ2xEOztBQUNBO0lBQ0UscUNBQXFDO0lBQ3JDLHNDQUFzQztJQUN0QywyQ0FBMkM7RUFDN0M7O0FBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLGdEQUFnRDtFQUNsRDs7QUFDQTtJQUNFLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFDdkMsOENBQThDO0VBQ2hEOztBQUNBO0lBQ0Usc0NBQXNDO0lBQ3RDLHVDQUF1QztJQUN2Qyx3Q0FBd0M7RUFDMUM7O0FBSUY7SUFDSTtNQUNFLHNCQUFzQjtJQUN4Qjs7QUFFSjs7QUFDQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakIiLCJmaWxlIjoicHVibGljYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xuXG4qe1xuICBwYWRkaW5nOiAwOyBcbiAgbWFyZ2luOiAwOyBcbn1cblxubmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiAgXG4gIC5uYXYtbWVudSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gIH1cbiAgXG4gIG5hdiB1bCBsaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cbiAgXG4gIG5hdiB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiAycHggMCAwIDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG4gIFxuICBuYXYgdWwgbGkgYTpob3ZlcntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIFxuICAubG9nbyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XG4gIH1cbiAgXG4gIC5sb2dvIGltZyB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgfVxuIFxuICAucmVzcG9uc2l2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cbiAgXG4gIC5hY3RpdmUge1xuICAgIGNvbG9yOiAjYWZhZmFmO1xuICB9XG4gIFxuICAubWFpbi1uYXYge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICBcbiAgLm5hdmJhci1leHBhbmQtbGd7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC43NXM7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgb3BhY2l0eTogMTsgfSBcbiAgfVxuXG5cblxuICAjcHVibGljYXRpb25ze1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIFxuI2xvZ297XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjAlOyBcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyMCUpOyBcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYW5pbWF0aW9uOiBmaWxsIDAuNXMgZWFzZSBmb3J3YXJkcyAyLjVzOyBcbiAgei1pbmRleDogMTAwO1xufVxuXG4jbG9nbyBwYXRoOm50aC1jaGlsZCgxKXtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAgMjk0LjI4NzUwNjEwMzUxNTZweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjk0LjI4NzUwNjEwMzUxNTZweDtcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzOyBcbiAgfVxuICBcbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoMil7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjk5LjgwMjA5MzUwNTg1OTRweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjk5LjgwMjA5MzUwNTg1OTRweDtcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuMDgzMzNzO1xuICB9XG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDMpe1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDM0OS44NjkxNzExNDI1NzgxcHg7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDM0OS44NjkxNzExNDI1NzgxcHg7XG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjE2NjY2NjY2NjY2cztcbiAgfVxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCg0KXtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxODIuMTk5OTgxNjg5NDUzMTJweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTgyLjE5OTk4MTY4OTQ1MzEycHg7XG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjMzMzNzO1xuICB9XG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDUpe1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDMxMy40NjYzNjk2Mjg5MDYyNXB4O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzMTMuNDY2MzY5NjI4OTA2MjVweDtcbiAgICBhbmltYXRpb246IGxpbmUtYW5pbSAycyBlYXNlIGZvcndhcmRzIDAuNDE2NjY2NnM7XG4gIH1cbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoNil7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMzMzLjUyOTA4MzI1MTk1MzEycHg7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMzMy41MjkwODMyNTE5NTMxMnB4O1xuICAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC41cztcbiAgfVxuICBcbiAgI2xvZ28gcGF0aDpudGgtY2hpbGQoNyl7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogICAyNjAuMjg1MDY0Njk3MjY1NjJweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogIDI2MC4yODUwNjQ2OTcyNjU2MnB4O1xuICAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMC41ODMzMzMzczsgXG4gIH1cbiAgXG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDgpe1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDQ0Mi4xNjY4Mzk1OTk2MDk0cHg7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ0Mi4xNjY4Mzk1OTk2MDk0cHg7XG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjY2NjY2NjZzO1xuICB9XG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDkpe1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDMxMy40NjY2NzQ4MDQ2ODc1cHg7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDMxMy40NjY2NzQ4MDQ2ODc1cHg7XG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjc1cztcbiAgfVxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCgxMCl7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjY0LjgxOTA5MTc5Njg3NXB4O1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyNjQuODE5MDkxNzk2ODc1cHg7XG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjgzMzMzMzNzO1xuICB9XG4gICNsb2dvIHBhdGg6bnRoLWNoaWxkKDExKXtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyOTkuMzQxOTc5OTgwNDY4NzVweDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjk5LjM0MTk3OTk4MDQ2ODc1cHg7XG4gICAgYW5pbWF0aW9uOiBsaW5lLWFuaW0gMnMgZWFzZSBmb3J3YXJkcyAwLjkxNjY2cztcbiAgfVxuICAjbG9nbyBwYXRoOm50aC1jaGlsZCgxMil7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMjg5LjkwOTYwNjkzMzU5Mzc1cHg7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI4OS45MDk2MDY5MzM1OTM3NXB4O1xuICAgIGFuaW1hdGlvbjogbGluZS1hbmltIDJzIGVhc2UgZm9yd2FyZHMgMXM7XG4gIH1cbiAgXG5cblxuQGtleWZyYW1lcyBsaW5lLWFuaW0ge1xuICAgIHRve1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDBweDtcbiAgICB9XG4gIFxufVxuQGtleWZyYW1lcyBmaWxsIHtcbiAgZnJvbXtcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgfVxuICB0b3tcbiAgICBmaWxsOmJsYWNrOyBcbiAgfVxufVxuXG4uY29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uc2VwZXJhdG9yTGluZXtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiAzNSU7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMCBhdXRvOyBcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gNXM7XG59XG5cbi50aXRsZXtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA1MHB4OyBcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG51bHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uY29udGFpbmVyIGxpe1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5jYXJkLWhlYWRlcntcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZC1ib2R5e1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uY2FyZC10aXRsZXtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDI1JTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5jYXJkLXRpdGxlOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNzE5KTtcbn1cblxuLmNhcmQtdGV4dHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogYmxhY2s7IFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5idG4tcHJpbWFyeXtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-publications',
                templateUrl: './publications.component.html',
                styleUrls: ['./publications.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.getScrollHeight($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".footer[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: #01557a;\n    color: rgb(255, 255, 255);\n    text-align: center;\n    vertical-align: middle;\n  }\n  .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n      margin: 10px 0px ;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4QjtFQUNBO01BQ0ksaUJBQWlCO0VBQ3JCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTU1N2E7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuICAuZm9vdGVyIHB7XG4gICAgICBtYXJnaW46IDEwcHggMHB4IDtcbiAgfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, { getScrollHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./awards/awards.component */ "FsIY");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./publications/publications.component */ "GVa1");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _awards_awards_component__WEBPACK_IMPORTED_MODULE_14__["AwardsComponent"],
        _publications_publications_component__WEBPACK_IMPORTED_MODULE_15__["PublicationsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _awards_awards_component__WEBPACK_IMPORTED_MODULE_14__["AwardsComponent"],
                    _publications_publications_component__WEBPACK_IMPORTED_MODULE_15__["PublicationsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot(),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./awards/awards.component */ "FsIY");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publications/publications.component */ "GVa1");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'awards', component: _awards_awards_component__WEBPACK_IMPORTED_MODULE_4__["AwardsComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'publications', component: _publications_publications_component__WEBPACK_IMPORTED_MODULE_5__["PublicationsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot(),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forRoot(),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map