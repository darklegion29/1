webpackJsonp([2],{

/***/ "../../../../../src/app/customer/customer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n    /* border: 1px solid red;   */\r\n}\r\n\r\nhtml, body{\r\n  background: #fbfbfb;\r\n  color: #004F76;\r\n  height: 100%;\r\n  width: 100%;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  outline: none;\r\n}\r\n\r\n.leftSide{\r\n  background: #fff;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  padding: 0px;\r\n  font-size: 20px;\r\n}\r\n\r\n.hideMenuBtn{\r\n  /* left: 22px;\r\n  position: absolute;\r\n  top: 8px;\r\n  z-index: 99999; */\r\n  left: 195px;\r\n  position: fixed;\r\n  top: 0px;\r\n  z-index: 999;\r\n  bottom: 0;\r\n  width: 1%;\r\n}\r\n\r\n.hideMenuBtn:hover{\r\n  background: #e0e0e0;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-chevron-left{\r\n  position: absolute;\r\n  top: 50%;\r\n}\r\n\r\n.stickyMenuButton{\r\n  left: 0px;\r\n  position: fixed;\r\n  top: 0px;\r\n  z-index: 99999;\r\n}\r\n\r\n.leadHead{\r\n  text-transform: uppercase;\r\n  padding: 14px;\r\n}\r\n\r\n.mainWrapper{\r\n  float: right;\r\n  padding: 1%;\r\n  padding-top: 1%;\r\n}\r\n\r\n.mainContent{\r\n  height: 90vh;\r\n  overflow: auto;\r\n}\r\n\r\nmd-grid-list{\r\n  padding: 2%;\r\n}\r\n\r\n.row{\r\n  margin-right: 0px;\r\n}\r\n\r\n .sideBarMenu[class^=\"col-\"]{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n} \r\n\r\n.mat-menu-item{\r\n  padding: 1em;\r\n  margin: 1em;\r\n  border-left: 4px solid #fff;\r\n  text-transform: uppercase;\r\n  color: #c6c6c6;\r\n  font-weight: bold;\r\n}\r\n\r\n.mat-menu-item:focus, .mat-menu-item:hover{\r\n  /*background: #fff;*/\r\n  color: #252525;\r\n  border-left: 4px solid #02d1a5;\r\n}\r\n\r\n.user span{\r\n  margin-left: 2%;\r\n}\r\n\r\n.user{\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  padding: 6%;\r\n  border-top: 1px solid #ececec;\r\n}\r\n\r\n.logoWrapper div[class^=\"col-\"]{\r\n  padding-left: 0px !important;\r\n}\r\n\r\n.logoWrapper img{\r\n  padding: 4%;\r\n  max-width: 220px;\r\n}\r\n\r\nul li a:focus{\r\n  border-left: 4px solid #02d1a5;\r\n  text-decoration: none;\r\n}\r\n\r\nul li:hover .fa::before, ul li:active .fa::before{\r\n  color: #02d1a5;\r\n}\r\n\r\n.fa-rotate-90 {\r\n    -webkit-transform: rotate(-90deg);\r\n    transform: rotate(-90deg);\r\n}\r\n\r\n.createdBy{\r\n    width: 98%;\r\n    float: right;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.createdBy a{\r\n  color: #02d1a4;\r\n  text-decoration: underline;\r\n}\r\n\r\n.logo{\r\n  text-align: center;\r\n  width: 90%;\r\n}\r\n\r\n.logoHebeData{\r\n  bottom: 2px;\r\n  opacity: 0.1;\r\n  position: absolute;\r\n  text-align: center;\r\n  width: 90%;\r\n}\r\n/* \r\n.navbar-toggleable-sm .navbar-collapse{\r\n  height: 96vh;\r\n} */\r\n\r\n@media (max-width:360px){\r\n  .mainWrapper{\r\n    float: none;\r\n    padding: 1%;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px)\r\n{\r\n  .navbar-fixed-side\r\n  {\r\n    margin-left:0px;\r\n    margin-right:-15px;\r\n  }\r\n\r\n  ul li a, .user, .logoWrapper img{\r\n    padding: 2%;\r\n  }\r\n\r\n  .logoHebeData{\r\n    position: static;\r\n  }\r\n\r\n  .navbar-toggleable-sm .navbar-collapse{\r\n    height: auto;\r\n  }\r\n\r\n  .logo, .logoHebeData{\r\n    text-align: left;\r\n  }\r\n\r\n  nav{\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .hideMenuBtn{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-height: 680px)\r\n{\r\n  .logoHebeData{\r\n    position: static;\r\n  }\r\n}\r\n\r\n@media (min-width: 1280px) and (max-width: 1480px){\r\n  .sideBarMenu .col-lg-2{\r\n    max-width: 19%;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px){\r\n  .navbar-fixed-side\r\n  {\r\n    position:fixed;\r\n    margin:0 -15px;\r\n    height:100vh;\r\n    width:inherit;\r\n    overflow:auto;\r\n    border-top-width:0;\r\n    border-bottom-width:0;\r\n    border-radius:0}\r\n  }\r\n\r\n#menu{\r\n  padding: 2%;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: auto;\r\n    background-color: #fff;\r\n}\r\n\r\nli {\r\n  border-bottom: 1px solid #ececec;\r\n}\r\n\r\nli a {\r\n  display: block;\r\n  border-left: 4px solid #fff;\r\n  text-transform: uppercase;\r\n  color: #c6c6c6;\r\n  font-weight: bold;\r\n  padding: 6%;\r\n}\r\n\r\n/* Change the link color on hover */\r\nli a:hover {\r\n  text-decoration: none;\r\n\r\n  color: #252525;\r\n  border-left: 4px solid #02d1a5;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\n\r\nspan.fa{\r\n  margin-right: 10%;\r\n}\r\n\r\n.alert-count {\r\n  padding-left: 7px;\r\n  padding-right: 7px;\r\n  float:right;\r\n\r\n  color: white;\r\n  background-color: #F7102A;\r\n}\r\n\r\nul li:hover a.navigated-to .fa::before{\r\n  color: #02d1a5;\r\n}\r\n\r\nli a.navigated-to {\r\n  pointer-events: none;\r\n  color: #02d1a5;\r\n  border-left: 4px solid #02d1a5;\r\n}\r\n\r\n/***********************  TOP Bar ********************/\r\n.sidebar{ transition: all 0.5s  ease-in-out; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 sideBarMenu\">\n    <div class=\"menulist\">\n        <div class=\"col-lg-2 col-md-4 col-sm-12 col-12 leftSide navbar-fixed-side\">\n            <div id=\"menu\" *ngIf=\"!menulist\">\n                <nav class=\"nav navbar-light navbar-toggleable-sm\">\n                    <!-- <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarWEX\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                    </button> -->\n\n                    <div class=\"navbar-collapse collapse flex-column\" id=\"navbarWEX\">\n                        <div class=\"logoWrapper logo justify-content-center\">\n                            <img src=\"assets/images/logo.png\" alt=\"Logo\" class=\"col-md-12 col-10 col-lg-10\" />\n                        </div>\n                        <ul>\n                            <li class=\"user\"><span>Rota Coordinator</span>\n                            </li>\n                            <li><a routerLink=\"activities\" [queryParams]=\"{redirectTo:'lastVisited'}\" [class.navigated-to]=\"navigation.ActivitiesComponent\"><span class=\"fa fa-hospital-o\">&nbsp;&nbsp;Activities</span></a></li>\n                            <li><a routerLink=\"schedule2\" [queryParams]=\"{redirectTo:'lastVisited'}\" [class.navigated-to]=\"navigation.Schedule2Component\"><span class=\"fa fa-calendar\">&nbsp;&nbsp;QCCH</span></a></li>\n                            <li><a routerLink=\"schedule3\" [queryParams]=\"{redirectTo:'lastVisited'}\" [class.navigated-to]=\"navigation.Schedule3Component\"><span class=\"fa fa-calendar\">&nbsp;&nbsp;ROTA</span></a></li>\n                            <li><a routerLink=\"users\" [queryParams]=\"{redirectTo:'lastVisited'}\" [class.navigated-to]=\"navigation.UsersComponent\"><span class=\"fa fa-user-md\">&nbsp;&nbsp;Clinical&nbsp;Staff</span></a></li>\n                        </ul>\n                        <button mat-raised-button color=\"accent\" *ngFor=\"let button of taskBarButtons\" (click)=\"button.callback()\">{{button.label}}</button>\n                        <div class=\"logoWrapper logoHebeData justify-content-center\">\n                            <img src=\"assets/images/HebeData-Logo.png\" alt=\"Logo Hebe Data\" class=\"col-md-12 col-10 col-lg-10\" />\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n    </div>\n\n    <div (click)=\"toggleNavigationMenu()\" class=\"hideMenuBtn\" [class.stickyMenuButton]=\"isSticky\" style=\"display:none\">\n        <i class=\"fa fa-chevron-left\" aria-hidden=\"true\" [class.fa-chevron-right]=\"isIconRight\"></i>\n    </div>\n\n    <div #mainWrapper class=\"col-sm-12 col-lg-10 col-md-8 mainWrapper\" [class.col-lg-12]=\"isVisible\" [class.col-md-12]=\"isVisible\" [class.col-xl-12]=\"isVisible\">\n        <div class=\"col-lg-12 mainContent example-sidenav-content\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n\n<div class=\"col-12 col-lg-12 col-sm-12 col-md-12\">\n    <div class=\"createdBy col-10 col-lg-10 col-md-8 col-sm-8 text-right\">\n        <span style=\"color: #252525;\">Created by</span> <a href=\"https://www.edatachase.com/\" target=\"_blank\"><span>EdataChase Ltd.</span></a>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerComponent = (function () {
    function CustomerComponent(route) {
        this.route = route;
        this.currentPage = "Admin";
        this.loggedUser = "Guest";
        this.taskBarButtons = [];
        //public alertInfo: AlertServiceInfo;
        this.navigation = {
            ScheduleComponent: true,
            Schedule2Component: false,
            Schedule3Component: false,
            UsersComponent: false,
            ActivitiesComponent: false,
        };
        this.menulist = false;
        this.isVisible = false;
        this.isSticky = false;
        this.isIconRight = false;
    }
    CustomerComponent.prototype.toggleNavigationMenu = function () {
        this.menulist = !this.menulist;
        this.isVisible = !this.isVisible;
        this.isSticky = !this.isSticky;
        this.isIconRight = !this.isIconRight;
    };
    /** Sets the section associated with the given component as the active one. This method needs to be
     *  called whenever administration component is initialized. Most likely you will call it from
     *  *ngOnInit()* of the respective component.
     *
     *  Please keep in mind that the component needs to be triggered not from this method
     *  but from an already implemented mechanism (such as using Router). This method only makes the
     *  navigation button (which triggers the component) visibly *selected* so it would be obvious
     *  to the user which section is currently active.
     *
     *  @param component Class name of the component that has just been activated
     */
    CustomerComponent.prototype.setActive = function (component) {
        for (var comp in this.navigation) {
            this.navigation[comp] = false;
        }
        this.navigation[component] = true;
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'customer-component',
        template: __webpack_require__("../../../../../src/app/customer/customer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/customer.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], CustomerComponent);

var _a;
//# sourceMappingURL=customer.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/schedule2/manage-conventional.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen {\n    table.month {\n        margin-bottom: 2em;\n        margin-right: 2em;\n    }\n}\n\n@media screen and (min-width: 1900px) {\n    table.month {\n        margin-bottom: 2em;\n        margin-right: 2em;\n    }\n}\n\n@media (min-width: 768px) {\n    div.registrarContainer {\n        width: 30vw;\n    }\n}\n\n@media (min-width: 992px) {\n    div.registrarContainer {\n        width: 18vw;\n    }\n}\n\ndiv.registrarContainer {\n    position: fixed;\n    background-color: deepskyblue;\n    padding: 0em;\n    top: 0px;\n    left: 0px;\n    height: 0vh;\n    opacity: 0;\n    overflow: hidden;\n    z-index: 29;\n    /* display: none; */\n   /* background:\n    linear-gradient(135deg, #708090 22px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),\n    linear-gradient(225deg, #708090 22px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px; */\n    /*background-size: 64px 128px */\n}\n\ndiv.registrarContainer.fadeIn {\n    -webkit-animation: registrar-container-fade-in 0.3s;\n            animation: registrar-container-fade-in 0.3s; \n    -webkit-animation-fill-mode: forwards; \n            animation-fill-mode: forwards;\n}\n\ndiv.registrarContainer.fadeOut {\n    -webkit-animation: registrar-container-fade-out 0.3s;\n            animation: registrar-container-fade-out 0.3s; \n    -webkit-animation-fill-mode: forwards; \n            animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes registrar-container-fade-out{\n    0% { opacity: 1; padding: 1em; height: 100vh;}\n    99.9% { height: 100vh; padding: 1em}\n    100% {opacity: 0; -webkit-transform:translate(-50px); transform:translate(-50px); height: 0px; padding: 0px}\n}\n\n@keyframes registrar-container-fade-out{\n    0% { opacity: 1; padding: 1em; height: 100vh;}\n    99.9% { height: 100vh; padding: 1em}\n    100% {opacity: 0; -webkit-transform:translate(-50px); transform:translate(-50px); height: 0px; padding: 0px}\n}\n\n@-webkit-keyframes registrar-container-fade-in{\n    0% { opacity: 0; -webkit-transform:translate(-50px); transform:translate(-50px); padding: 1em; height: 100vh; padding: 1em}\n    100% {opacity: 1; -webkit-transform:translate(0px); transform:translate(0px); height: 100vh; padding: 1em}\n}\n\n@keyframes registrar-container-fade-in{\n    0% { opacity: 0; -webkit-transform:translate(-50px); transform:translate(-50px); padding: 1em; height: 100vh; padding: 1em}\n    100% {opacity: 1; -webkit-transform:translate(0px); transform:translate(0px); height: 100vh; padding: 1em}\n}\n\ntable.month tr {\n    border-bottom: 1px solid #f9f9f9;\n}\n\ntable.month td{\n    margin-right: 4px;\n    background-color: #fff;\n    border-right: 1px solid #f9f9f9;\n}\n\ntable.month td * {\n    cursor: default;\n}\n\ntable.month tr td:first-child {\n    border-left: 1px solid #f9f9f9;\n}\n\ntable.month tr:first-child td{\n    border: none; \n}\n\ntable.month tr:nth-child(2) {\n    border-top: 1px solid #f9f9f9;\n}\n\ntable.month tr:last-child > td:last-child {\n    border-right: 1px solid #f9f9f9;\n}\n\ntable.month div > div:first-child{\n    text-align: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n}\n\ntable.month div.dateCell{\n    width: 6ch;\n    height: 5ch;\n    line-height: 0.75em;\n    padding-bottom: 1px;\n    position: relative;\n    border-radius: 5px;\n    border: 1px solid lightgray;\n}\n\ntable.month div.dateCell.unavailable-for-swap{\n    background-color: #e5ecf3;\n}\n\ndiv.month-label {\n    color: #FF4032;\n    font-size: 1.7em;\n}\n\ndiv.year-label {\n    color: #808080;\n    font-size: 3.2em;\n    clear: both;\n}\n\ntable.month .weeks div{\n    color: #E4F2FF;\n    background-color: #3673AA;\n    text-align: center;\n    width: 100%;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n    cursor: default;\n}\n\ntable.month tr.weeks {\n    vertical-align: top;\n    height: 2em;\n}\n\ntable.month div.not-current-month {\n    background-color: #f5f5f5;\n    color: #8D8D8D;\n}\n\ntable.fullScreenMonth {\n    font-size: 1vw;\n    width: 77vw;\n    height: 70vh;\n    top: 0;\n    opacity: 0;\n    -webkit-animation: opacity 0.3s;\n            animation: opacity 0.3s;\n}\n\ntable.fullScreenMonth.fullScreen {\n    opacity: 1;\n}\n\ntable.fullScreenMonth.fullScreen td {\n    width: 9vw;\n}\n\ntable.fullScreenMonth.fullScreen div.dateCell{\n    width: 100%;\n    height: 100%;\n    background-color: #F2F9FF;\n    color: #3673AA;\n    line-height: 0.75em;\n    padding-bottom: 1px;\n    position: relative;\n}\n\nh3{\n    color: #004F76;\n}\n\n.tmSelectInput {\n    border: 1px solid #3673AA;\n    background-color: white;\n    padding: 0.25em;\n    width: 8em;\n}\n\n.shift {\n    font-size: 15px;\n    border: 1px solid;\n    padding-left: 0.2em;\n    width: 8ch;\n    margin-right: 0.2em;\n    display: inline-block;\n    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.15);\n}\n\n.shift-badge {\n    border-radius: 50%;\n    font-size: 6px;\n    width: 3em;\n    height: 3em;\n    text-align: center;\n    padding-top: 2px;\n    color: white;\n    font-weight: bolder;\n    position: absolute;\n    transition: all 0.3s;\n}\n\n.shift-badge.hover{\n    padding-top: 0.7em;\n    font-size: 10px;\n    z-index: 21;\n    transition: all 0.3s;\n}\n\n.fullScreenMonth .shift-badge {\n    font-size: 1vw;\n    padding-top: 2.34vh;\n}\n\n.fullScreenMonth .shift-badge.hover {\n    font-size: 1.2vw;\n    padding-top: 2.54vh;\n}\n\n.date {\n    padding-top: 0.5em;\n}\n\n.off {\n    color: brown;\n}\n\n.clear-left {\n    clear: left;\n}\n\ndiv.conventional-parent {\n}\n\n.shiftContainer {\n    position: absolute;    \n    padding: 0;\n    -webkit-animation: all 0.3s;\n            animation: all 0.3s;\n}\n\n.shiftContainer.hover {\n    background-color: white;\n    box-shadow: 0px 3px 8px 2px rgba(0, 0, 0, 0.37);\n    padding: 0.4em;\n    border: 1px solid #464a4c63;\n    z-index: 23;\n    height: 2em;\n    transition: all 0.3s;\n}\n\n.fullScreenMonth .shiftContainer{\n}\n\n.fullScreenMonth .shiftContainer.hover {\n    padding: 1em;\n    height: 5em;\n}\n\n.tm_tooltip {\n    z-index: 29;\n}\n\n.tm_tooltip .name {\n    font-weight: bold;\n    margin-bottom: 0.5em;\n}\n\n.tm_tooltip .description {\n\n}\n\n.user_mode_banner, .swapCart {\n    z-index: 28;\n    color: aliceblue;\n    background-color: deepskyblue;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    font-size: 2em;\n    font-weight: bold;\n    height: 4em;\n    overflow: hidden;\n    transition: all 0.3s;\n    opacity: 0;\n}\n\n.user_mode_banner .contents, .swapCart .contents {\n    margin-left: 18vw;\n    width: 80vw;\n}\n\n.user_mode_banner.fadeIn, .swapCart.fadeIn {\n    height: 3em;\n    opacity: 1;\n}\n\n.assignment_under_swap {\n    -webkit-animation: assignment_under_swap 1.3s infinite alternate;\n            animation: assignment_under_swap 1.3s infinite alternate;\n}\n\n@-webkit-keyframes assignment_under_swap {\n    from {\n        box-shadow: 0px 0px 20px 14px #e2ff30;\n    }\n    to {\n        box-shadow: 0px 0px 20px 5px #e2ff30;\n    }\n}\n\n@keyframes assignment_under_swap {\n    from {\n        box-shadow: 0px 0px 20px 14px #e2ff30;\n    }\n    to {\n        box-shadow: 0px 0px 20px 5px #e2ff30;\n    }\n}\n\n.swapSuggestion {\n    -webkit-animation: swap_suggestion 1s infinite alternate;\n            animation: swap_suggestion 1s infinite alternate;\n}\n\n@-webkit-keyframes swap_suggestion {\n    from {\n        box-shadow: rgb(54, 115, 170) 0px 0px 3px 1px;\n    }\n    to {\n        box-shadow: rgb(54, 115, 170) 0px 0px 3px 6px;\n    }\n}\n\n@keyframes swap_suggestion {\n    from {\n        box-shadow: rgb(54, 115, 170) 0px 0px 3px 1px;\n    }\n    to {\n        box-shadow: rgb(54, 115, 170) 0px 0px 3px 6px;\n    }\n}\n\n@-webkit-keyframes justSwapped{\n    from {\n        box-shadow: #FFC84E 0px 0px 3px 1px;\n    }\n    to {\n        box-shadow: #FFC84E 0px 0px 3px 6px;\n    }\n}\n\n@keyframes justSwapped{\n    from {\n        box-shadow: #FFC84E 0px 0px 3px 1px;\n    }\n    to {\n        box-shadow: #FFC84E 0px 0px 3px 6px;\n    }\n}\n\n.justSwapped {\n    -webkit-animation: justSwapped 0.5s linear 0s 2 alternate;\n            animation: justSwapped 0.5s linear 0s 2 alternate;\n}\n\n.suggestionList {\n    height: 15em;\n\n}\n\n.suggestionList .name {\n    font-weight: bold;\n}\n\n.suggestionList .suggestion {\n    padding-left: 1.5em;\n}\n\n.dateCell.shift.weekend {\n    color: #CA574E;\n    box-shadow: 1px 1px 3px 0px #CA574E;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/schedule2/manage-conventional.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"swapCart\">\n    <div class=\"contents\">\n        <single-select-input-component\n            [items]=\"swap_cart_struct\"\n            (itemMouseMove)=\"revealTooltip('swapCartItem', $event)\"\n            (itemMouseLeave)=\"concealTooltip()\"\n        >\n        </single-select-input-component>\n    </div>\n</div>\n\n<div *ngIf=\"swap_struct && swap_struct.type == '2way'\" class=\"user_mode_banner\">\n    <div class=\"contents\">\n        <div style=\"float:left; padding-right: 1em;\">\n            2 way Swap <button mat-raised-button color=\"accent\" (click)=\"cancel2WaySwap()\">cancel</button>\n        </div>\n        <single-select-input-component\n            style=\"float:left; height: 2.4em;\"\n            [items]=\"swap_struct.assignments_selection\"\n            (itemMouseMove)=\"revealTooltip('swapCartItem', $event)\"\n            (itemMouseLeave)=\"concealTooltip()\"\n        >\n        </single-select-input-component>\n        <div style=\"float: left\">\n            <button style=\"font-size: 15px\" (click)=\"sendSwapToCart()\" mat-raised-button [disabled]=\"swap_struct.assignments.length != 2\">Swap Completed</button>\n        </div>\n    </div>\n</div>\n<div class=\"conventional-parent\">\n    <div [style.display]=\"loadingIndication\" style=\"position:fixed;top:0;right:0;bottom:0;left:0;background-color:white;opacity:0.8;z-index:99999;\">\n        <mat-progress-spinner class=\"loading-indication\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" style=\"margin: 0 auto;position: relative; top: 50%;\">\n        </mat-progress-spinner>\n    </div>\n    <div *ngFor=\"let month of months; let mindex=index\">\n        <div class=\"year-label\" *ngIf=\"mindex==0\">{{months[0].year}}</div>\n        <div class=\"year-label\" *ngIf=\"months[mindex-1] && months[mindex-1].year != month.year\">{{month.year}}</div>\n        <table class=\"month\"\n               style=\"float:left;\"\n               [class.clear-left]=\"months[mindex-1] && months[mindex-1].year != month.year\"\n               (contextmenu)=\"invokeContextMenuMonth($event, month)\"\n               [attr.data-monthname]=\"month.month\">\n            <tr>\n                <td colspan=\"7\">\n                    <div class=\"month-label\">{{month.month}}</div>\n                </td>\n            </tr>\n            <tr class=\"weeks\">\n                <td *ngFor=\"let day of _week\">\n                    <div class=\"toggleButton\">{{day}}</div>\n                </td>\n            </tr>\n            <tr *ngFor=\"let week of month.weeks; let windex = index\">\n                <!-- <td>{{week.ordinal}}</td> -->\n                <td *ngFor=\"let day of week.days; let dindex=index\">\n                    <div class='dateCell shift {{day.shifts.oc ? day.shifts.oc.shift : \"\"}}' [class.not-current-month]=\"day.date.getMonth()!=month.month\"\n                        [class.unavailable-for-swap]=\"day.date.getMonth()==month.month && day.date.date.getTime() <= today\"\n                        [class.justSwapped]=\"day.shifts.oc && day.shifts.oc.justSwapped\"\n                        [class.weekend]=\"day.date.date.getUTCDay() == 0 || day.date.date.getUTCDay() == 6\"\n                        (contextmenu)=\"revealContextMenu($event)\"\n                        (click)=\"clickAssignment($event, 'months['+mindex+'].weeks['+windex+'].days['+dindex+'].shifts.oc')\"\n                        (mousemove)=\"onMouseEnter($event, 'assignment', {shift:day.shifts.oc})\"\n                        (mouseleave)=\"onMouseLeave($event, 'assignment', {shift:day.shifts.oc})\"\n                        [attr.data-jsaccess]=\"'months['+mindex+'].weeks['+windex+'].days['+dindex+']'\"\n                        >\n                        <div class=\"date\">{{day.date.date.getDate()}}\n                            <span style=\"line-height: 1.4em\" *ngIf=\"day.shifts.oc\"><br>{{substr1(day.shifts.oc.shift)}}</span> \n                        </div>\n                        <!--\n                        <div class=\"shiftContainer\"  *ngIf=\"day.shifts.length > 0\"\n                             [style.width.em]=\"day.shifts.length+1\"\n                             (mouseenter)=\"onMouseEnter($event, 'assignment_container')\"\n                             (mouseleave)=\"onMouseLeave($event, 'assignment_container')\">\n                             <div class=\"shift-badge {{'ts_'+day.date.date.getTime()}}\" *ngFor=\"let shift of day.shifts; let sindex=index\"\n                                 [style.background-color]=\"shift.assignmentEmployees[0].employee.color\"\n                                 [style.box-shadow]=\"'inset 0 0 1px 2px ' + shift.assignmentEmployees[0].employee.color\"\n                                 [style.left.em]=\"calculateBadgeOffset(sindex, day.shifts)\"\n                                 [attr.data-id]=\"shift.id\"\n                                 [attr.data-jsaccess]=\"'months['+mindex+'].weeks['+windex+'].days['+dindex+']'\"\n                                 [class.swapSuggestion]=\"shift.swapSuggestion\"\n                                 [class.justSwapped]=\"shift.justSwapped\"\n                                 (contextmenu)=\"revealContextMenu($event)\"\n                                  (mousemove)=\"onMouseEnter($event, 'assignment', {shift:shift})\"\n                                  (mouseleave)=\"onMouseLeave($event, 'assignment', {shift:shift})\"\n                                 (click)=\"clickAssignment($event, 'months['+mindex+'].weeks['+windex+'].days['+dindex+'].shifts['+sindex+']')\"\n                                 >\n                                {{substr1(shift.shift)}} \n                            </div>\n                        </div>\n                        -->\n                    </div>\n                </td>\n            </tr>\n        </table>\n    </div>\n</div>\n\n<div class=\"registrarContainer\">\n    <div style=\"position: relative;\">\n        <button mat-raised-button (click)=\"revealMainMenu()\"> <span class=\"fa fa-arrow-left\"></span> Main Menu </button>\n        <button mat-raised-button (click)=\"toggleSwapCart()\"> <span class=\"fa fa-shopping-cart\"></span> Swap Cart </button>\n\n        <div style=\"height: 1.4em;\"></div>\n        <mat-select class=\"tmSelectInput\"\n            [(ngModel)]=\"selected_user\"\n            (ngModelChange)=\"changeSelectedUser($event)\"\n            >\n                <mat-option *ngFor=\"let user of users\" [value]=\"user.id\">\n                    {{user.firstName}} {{user.lastName}}\n                </mat-option>\n        </mat-select>\n        <div style=\"height: 1.4em;\"></div>\n\n        <!-- Suggestion list -->\n        <div class=\"suggestionList\" *ngIf=\"swap_struct && swap_struct.suggestions_selection\">\n            <single-select-input-component\n                [items]=\"swap_struct.suggestions_selection\"\n                (itemMouseMove)=\"revealTooltip('suggestion_item', $event)\"\n                (itemMouseLeave)=\"concealTooltip()\"\n                [emptyMessage]=\"'No Swap Suggestions'\"\n            >\n            </single-select-input-component>\n\n            <table *ngIf=\"swap_struct && swap_struct.type == '3way'\">\n                <tr *ngFor=\"let sugg of suggested_swaps_struct; let i=index\">\n                    <td>\n                        <div class=\"name\" *ngIf=\"(i == 0) || (suggested_swaps_struct[i-1] && suggested_swaps_struct[i-1].assignmentEmployees[0].employee.id != sugg.assignmentEmployees[0].employee.id)\">\n                            {{sugg.assignmentEmployees[0].employee.firstName}} {{sugg.assignmentEmployees[0].employee.lastName}}\n                        </div>\n                        <div class=\"suggestion\" (click)=\"clickSuggestion($event, sugg)\" [class.selected]='sugg.selected'>\n                            {{sugg.dateFrom | date:'MMM d y'}} \n                        </div>\n                    </td>\n                </tr>\n            </table>\n\n        </div>\n    </div>\n</div>\n\n<div class=\"tm_contextmenu\" *ngFor=\"let contextMenu of contextMenus\"\n     [style.left.px]=\"contextMenu.left\"\n     [style.top.px]=\"contextMenu.top\"\n     [style.height.px]=\"contextMenu.height\"\n     [style.width.ch]=\"contextMenu.width\"\n     >\n     <div class=\"menu_item\" *ngFor=\"let item of contextMenu.items\"\n          [class.disabled]=\"item.disabled\"\n          (click)=\"item.callback()\"\n          (mouseenter)=\"onMouseEnter($event, 'menu_item')\"\n          (mouseleave)=\"onMouseLeave($event, 'menu_item')\"\n          >\n          {{item.label}}\n          <span *ngIf=\"item.submenu\" class=\"fa fa-arrow-right\" style=\"float:right;\"></span>\n     </div>\n</div>\n\n<div *ngIf=\"fullScreenMonth\" style=\"position: absolute;\">\n    <button mat-raised-button (click)=\"restoreYearView()\"><span class=\"fa fa-arrow-left\"></span> &nbsp; Back</button>\n    <div class=\"month-label\">{{fullScreenMonth.month}}</div>\n    <table class=\"month fullScreenMonth\"\n           style=\"float:left;\"\n           [class.clear-left]=\"mindex%4==0\"\n           (contextmenu)=\"invokeContextMenuMonth($event, fullScreenMonth)\"\n           (dblclick)=\"toggleFullScreenMonth($event)\"\n           [attr.data-monthname]=\"fullScreenMonth.month\">\n        <tr class=\"weeks\">\n            <td *ngFor=\"let day of _week\">\n                <div class=\"toggleButton\">{{day}}</div>\n            </td>\n        </tr>\n        <tr *ngFor=\"let week of fullScreenMonth.weeks; let windex = index\">\n            <!-- <td>{{week.ordinal}}</td> -->\n            <td *ngFor=\"let day of week.days; let dindex=index\">\n                <div class='dateCell' [class.not-current-month]=\"day.date.getMonth()!=fullScreenMonth.month\">\n                    <div class=\"date\">{{day.date.date.getDate()}}</div>\n                    <div class=\"shiftContainer\" *ngIf=\"day.shifts.length > 0\"\n                         [style.width.em]=\"(day.shifts.length*3)+2\"\n                         (mouseenter)=\"onMouseEnter($event, 'assignment_container')\"\n                         (mouseleave)=\"onMouseLeave($event, 'assignment_container')\">\n                         <div class=\"shift-badge {{'ts_'+day.date.date.getTime()}}\" *ngFor=\"let shift of day.shifts; let sindex=index\"\n                             [style.background-color]=\"shift.assignmentEmployees[0].employee.color\"\n                             [style.box-shadow]=\"'inset 0 0 1px 2px ' + shift.assignmentEmployees[0].employee.color\"\n                             [style.left.em]=\"calculateBadgeOffset(sindex, day.shifts)\"\n                             [attr.data-id]=\"shift.id\"\n                              (mousemove)=\"onMouseEnter($event, 'assignment', {shift:shift})\"\n                              (mouseleave)=\"onMouseLeave($event, 'assignment', {shift:shift})\"\n                             [attr.data-jsaccess]=\"'fullScreenMonth.weeks['+windex+'].days['+dindex+']'\"\n                             (contextmenu)=\"revealContextMenu($event)\"\n                             >\n                            {{substr1(shift.shift)}} \n                        </div>\n                    </div>\n                </div>\n            </td>\n        </tr>\n    </table>\n</div>\n \n<div *ngIf=\"tooltip_struct && tooltip_struct.context == 'swapCartItem'\" class=\"tm_tooltip\" [style.left.px]='tooltip_struct.left' [style.top.px]='tooltip_struct.top'>\n    {{tooltip_struct.name}}\n    {{tooltip_struct.description}}\n</div>\n\n<div *ngIf=\"tooltip_struct && tooltip_struct.context == 'swapItem'\" class=\"tm_tooltip\" [style.left.px]='tooltip_struct.left' [style.top.px]='tooltip_struct.top'>\n    {{tooltip_struct.name}}\n    {{tooltip_struct.description}}\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/schedule2/manage-conventional.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_admincomponent_service__ = __webpack_require__("../../../../../src/app/service/admincomponent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_schedule2_service__ = __webpack_require__("../../../../../src/app/service/schedule2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_tmdate__ = __webpack_require__("../../../../../src/app/model/tmdate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageConventionalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Import local services **/



/** Import local modules **/


var ManageConventionalComponent = (function () {
    function ManageConventionalComponent(dialog, userService, adminComponentService, localStorageService, schedule2Service) {
        this.dialog = dialog;
        this.userService = userService;
        this.adminComponentService = adminComponentService;
        this.localStorageService = localStorageService;
        this.schedule2Service = schedule2Service;
        this.previewStartDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.previewEndDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.scheduleReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changeMonth = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.month = { weeks: [] };
        this.months = [];
        this.years = [];
        this._week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.shifts = [];
        this.loadingIndication = 'none';
        this.users = [];
        this.usersVisible = [];
        this.usersModel = [];
        this.usersVisiblityOptions = ['Show All', 'My Grade Only'];
        this.usersVisibility = '';
        this.selected_user = null;
        //public loadingIndication = 'none';
        this.mode = 'indeterminate';
        this.value = 0;
        this.timeoutHandler = 0;
        this.contextMenus = [];
        this.fullScreenMonth = null;
        this.swap_struct = {};
        this.focused_assignment_container = null;
        this.keep_assignment_container_focused = false;
        this.tooltip_struct = null;
        this.assignments = {}; // A flat structure holding all assignments being displayed
        this.user_assignments = {}; // A hash containing shifts for each individual employee.
        this.today = 0;
        this.swap_cart_struct = [];
    }
    ManageConventionalComponent.prototype.switchMonth = function (month) {
        var tmDate = __WEBPACK_IMPORTED_MODULE_6__model_tmdate__["a" /* TmDate */].today();
        if (month) {
            tmDate.date.setUTCDate(1);
            tmDate.setMonth(month);
        }
        if (this.month && this.month.year) {
            tmDate.date.setUTCFullYear(this.month.year);
        }
        this.generateMonth(tmDate);
        if (month) {
            this.changeMonth.emit();
        }
    };
    /**
     * Currently called only from user input
     */
    ManageConventionalComponent.prototype.switchYear = function (year) {
        var tmDate = new __WEBPACK_IMPORTED_MODULE_6__model_tmdate__["a" /* TmDate */]();
        tmDate.date.setUTCDate(1);
        tmDate.date.setUTCFullYear(parseInt(year));
        if (this.month && this.month.month) {
            tmDate.setMonth(this.month.month);
        }
        this.generateMonth(tmDate);
        if (year) {
            this.changeMonth.emit();
        }
    };
    ManageConventionalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var todayDate = new Date();
        this.today = todayDate.getTime();
        this.restoreProperties();
        this.switchMonth();
        this.generateYears();
        //this.months = TmDate.getMonthList();
        for (var shift in __WEBPACK_IMPORTED_MODULE_7__model_user__["b" /* Shift */]) {
            this.shifts.push(shift);
        }
        this.generate12Months();
        this.userService._getUsers(0, 1000).then(function (users) {
            _this.users.length = 0;
            (_a = _this.users).splice.apply(_a, [0, 0].concat(users));
            var _a;
        });
        setTimeout(function () {
            _this.adminComponentService.taskBarEvent.emit([{
                    label: 'Supplementary Menu',
                    callback: function () {
                        _this.concealMainMenu();
                        console.log('conceal');
                    }
                }]);
        }, 1300);
        setTimeout(function () { return _this.concealMainMenu(); }, 1000);
        //        this.swap_cart_struct = [
        //            {value: 1, text: '3way: Dr.Artyom → Dr.Konstantin → Dr.Tihomir → Dr.Artyom'},
        //            {value: 2, text: '2way: Dr.Artyom ⇄ Dr.Konstantin'},
        //            {value: 3, text: 'transfer: Dr.Artyom → Dr.Konstantin'},
        //        ];
    };
    //    public ngAfterViewInit() {
    //        let userIds = [];
    //        for(let u of this.usersModel) {
    //            userIds.push({id:u.value});
    //        }
    //        this.loadAssignments(userIds);
    //    }
    ManageConventionalComponent.prototype.generateYears = function () {
        var y = this.month.year;
        for (var i = y; i <= y + 1; i++) {
            this.years.push(i);
        }
    };
    ManageConventionalComponent.prototype.generate12Months = function () {
        var tmDate = new __WEBPACK_IMPORTED_MODULE_6__model_tmdate__["a" /* TmDate */]();
        var m = tmDate.date.getUTCMonth();
        tmDate.date.setUTCHours(0);
        tmDate.date.setUTCMinutes(0);
        tmDate.date.setUTCMilliseconds(0);
        tmDate.date.setUTCMinutes(0);
        tmDate.date.setUTCDate(1);
        for (var i = 0; i <= 11; i++, m++) {
            if (m > 11) {
                tmDate.date.setUTCFullYear(tmDate.date.getUTCFullYear() + 1);
                m = 0;
            }
            tmDate.date.setUTCMonth(m);
            this.months.push(this.generateMonth(tmDate));
        }
    };
    ManageConventionalComponent.prototype.generateMonth = function (tmDate) {
        tmDate = tmDate.fork();
        tmDate.date.setUTCHours(0);
        tmDate.date.setUTCMinutes(0);
        tmDate.date.setUTCSeconds(0);
        tmDate.date.setUTCMilliseconds(0);
        tmDate.date.setUTCDate(1);
        var iMon = tmDate.date.getUTCMonth();
        var inMon = (iMon == 11) ? 0 : iMon + 1; //next month
        var weeks = [];
        var week = { days: [] }; // {[days:string]: [{[date:string]: string}]} = {days: []};
        var month = {};
        month.month = tmDate.getMonth();
        month.year = tmDate.date.getUTCFullYear();
        //if the first day of the month is not Monday, rollback to
        //the nearest one
        if (tmDate.date.getUTCDay() > 1) {
            var sub = tmDate.date.getUTCDay();
            tmDate.date.setTime(tmDate.date.getTime() - (sub * 1000 * 3600 * 24));
        }
        else if (tmDate.date.getUTCDay() == 0) {
            tmDate.date.setTime(tmDate.date.getTime() - (7 * 1000 * 3600 * 24));
        }
        else {
            tmDate.date.setTime(tmDate.date.getTime() - (1000 * 3600 * 24));
        }
        // @var i     day index 
        // @var wi    week index
        for (var i = 1, wi = 0;; i++) {
            var day = tmDate.alterDate(+1).fork();
            if (i == 1) {
                this.previewStartDate = day.get_ISO_8601_Date();
            }
            var adjecentMonth = iMon == day.date.getUTCMonth() ? false : true;
            if (!this.assignments['t_' + day.date.getTime()]) {
                this.assignments['t_' + day.date.getTime()] = {};
            }
            var shifts_reference = adjecentMonth ? {} : this.assignments['t_' + day.date.getTime()];
            week.days.push({ date: day, working: false, shifts: shifts_reference, adjecentMonth: adjecentMonth });
            if (i % 7 == 0) {
                //if(week.days[0].date.date.getMonth() == inMon) {
                if (wi >= 6) {
                    break;
                }
                wi++;
                weeks.push(week);
                week = { days: [] };
                this.previewEndDate = day.get_ISO_8601_Date();
            }
        }
        //weeks.push(week);
        month.weeks = weeks;
        return month;
        //this.previewStartDateChange.emit(this.previewStartDate);
        //this.previewEndDateChange.emit(this.previewEndDate);
    };
    ManageConventionalComponent.prototype.revealMainMenu = function () {
        var registrarContainers = document.querySelectorAll(".registrarContainer");
        for (var _i = 0, registrarContainers_1 = registrarContainers; _i < registrarContainers_1.length; _i++) {
            var cont = registrarContainers_1[_i];
            cont.classList.remove("fadeOut");
            cont.classList.remove("fadeIn");
            cont.classList.add("fadeOut");
        }
    };
    ManageConventionalComponent.prototype.concealMainMenu = function () {
        var registrarContainers = document.querySelectorAll(".registrarContainer");
        for (var _i = 0, registrarContainers_2 = registrarContainers; _i < registrarContainers_2.length; _i++) {
            var cont = registrarContainers_2[_i];
            cont.classList.remove("fadeOut");
            cont.classList.remove("fadeIn");
            cont.classList.add("fadeIn");
        }
    };
    ManageConventionalComponent.prototype.revealTooltip = function (context, userData) {
    };
    ManageConventionalComponent.prototype.concealTooltip = function () {
    };
    ManageConventionalComponent.prototype.beforeUnloadHander = function (event) {
        this.ngOnDestroy();
    };
    ManageConventionalComponent.prototype.window_click = function (event) {
        this.releaseContextMenu(null);
    };
    ManageConventionalComponent.prototype.ngOnDestroy = function () {
        this.storeProperties();
        this.adminComponentService.taskBarEvent.emit([]);
    };
    ManageConventionalComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService._getUsers(0, 1000).then(function (users) {
            if (users) {
                _this.users.length = 0;
                for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                    var u = users_1[_i];
                    _this.users.push({ value: u.id, text: u.firstName + " " + u.lastName, grade: u.grade });
                }
            }
            _this.usersVisibility = 'Show All';
            _this.changeUsersVisibility(_this.usersVisibility);
        });
    };
    ManageConventionalComponent.prototype.changeUsersVisibility = function (option) {
        //this.filterUsers(option);
        switch (option) {
            case 'Show All':
                option = '';
                break;
        }
        this.usersVisible.length = 0;
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var u = _a[_i];
            if (typeof option == 'string' && option.length > 0) {
                if (u.grade == option) {
                    this.usersVisible.push({ value: u.id, text: u.firstName + " " + u.lastName, grade: u.grade });
                }
            }
            else {
                this.usersVisible.push({ value: u.value, text: u.text, grade: u.grade });
            }
        }
    };
    ManageConventionalComponent.prototype.onMouseLeave = function (event, context, userData) {
        var target = event.target;
        switch (context) {
            case 'assignment':
                this.tooltip_struct = null;
                break;
            case 'assignment_container':
                if (!this.keep_assignment_container_focused) {
                    this.focused_assignment_container = null;
                    target.classList.remove("hover");
                }
                break;
            case 'menu_item':
                target.classList.remove("hover");
                break;
        }
    };
    ManageConventionalComponent.prototype.onMouseEnter = function (event, context, userData) {
        var target = event.target;
        switch (context) {
            //            case 'assignment':
            //                if(userData && userData.shift) {
            //                    this.tooltip_struct = {
            //                        description: userData.shift.assignmentEmployees[0].employee.gradeOnCall,
            //                        name: userData.shift.assignmentEmployees[0].employee.firstName+" "+userData.shift.assignmentEmployees[0].employee.lastName,
            //                    };
            //                    
            //                    this.tooltip_struct.left = (event.clientX+10);
            //                    this.tooltip_struct.top = (event.clientY+10);
            //                }
            //                break;
            case 'assignment_container':
                if (!this.keep_assignment_container_focused) {
                    this.focused_assignment_container = event.target;
                    event.target.classList.add("hover");
                }
                break;
            case 'menu_item':
                event.target.classList.add("hover");
                break;
        }
    };
    ManageConventionalComponent.prototype.releaseContextMenu = function (event) {
        this.contextMenus.length = 0;
        this.keep_assignment_container_focused = false;
        if (this.focused_assignment_container) {
            this.focused_assignment_container.classList.remove('hover');
        }
        return true;
    };
    ManageConventionalComponent.prototype.preventDefault = function (ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        return false;
    };
    ManageConventionalComponent.prototype.invokeContextMenuMonth = function (ev, month) {
        var target = ev.target;
        while (target.dataset && target.dataset.monthname == null) {
            if (target.parentNode == null) {
                break;
            }
            target = target.parentNode;
        }
        if (target == null) {
            return true;
        }
        if (typeof target.getBoudingClientRect == 'function') {
            var box = target.getBoundingClientRect();
            var left = box.left;
            var top = box.top;
            target.style.position = 'fixed';
            target.style.left = left;
            target.style.top = top;
        }
        return false;
    };
    ManageConventionalComponent.prototype.initiate2WaySwap = function (shift) {
        var _this = this;
        console.log(shift);
        var userIds = [];
        for (var _i = 0, _a = this.usersModel; _i < _a.length; _i++) {
            var u = _a[_i];
            userIds.push({ id: u.value });
        }
        var date = shift.startTime.get_ISO_8601_Date() + " (" + shift.startTime.getWeekDay() + ") ";
        var shiftName = shift.shift;
        var employeeName = shift.assignmentEmployees[0].employee.firstName + " " + shift.assignmentEmployees[0].employee.lastName;
        this.swap_struct = {
            type: '2way',
            assignments: [shift],
            assignments_selection: [{
                    value: shift.id,
                    text: date + " (" + shiftName + " shift) " + employeeName,
                }],
            suggestions: [],
            suggestions_selection: [],
        };
        setTimeout(function () {
            document.querySelector('.user_mode_banner').classList.add('fadeIn');
        }, 0);
        this.schedule2Service.suggestSwap(shift.id, shift.assignmentEmployees[0].employee, userIds, function (assignments) {
            //
            // Clear all assignments for whole period for all users
            // 
            for (var u_userId in _this.user_assignments) {
                for (var t_stamp in _this.user_assignments[u_userId]) {
                    _this.user_assignments[u_userId][t_stamp] = {};
                }
            }
            var assignment;
            while (assignment = assignments.shift()) {
                _this.swap_struct.suggestions.push(assignment);
                var day = new __WEBPACK_IMPORTED_MODULE_6__model_tmdate__["a" /* TmDate */]();
                day.date.setTime(assignment.dateFrom);
                var suggestion_name = day.get_ISO_8601_Date() + " (" +
                    day.getWeekDay() + ") " +
                    assignment.assignmentEmployees[0].employee.firstName +
                    assignment.assignmentEmployees[0].employee.lastName;
                _this.swap_struct.suggestions_selection.push({ id: assignment.id, text: suggestion_name });
                var userId = assignment.assignmentEmployees[0].employee.id;
                var u_userId = 'u_' + userId;
                var timeStamp = assignment.dateFrom;
                var t_stamp = 't_' + timeStamp;
                if (!_this.user_assignments[u_userId]) {
                    _this.user_assignments[u_userId] = {};
                }
                if (!_this.user_assignments[u_userId][t_stamp]) {
                    _this.user_assignments[u_userId][t_stamp] = {};
                }
                if (assignment.shift == 'Late' || assignment.shift == 'Night' || assignment.shift == 'OC') {
                    _this.user_assignments[u_userId][t_stamp]['oc'] = assignment;
                }
                else {
                    _this.user_assignments[u_userId][t_stamp]['daylight'] = assignment;
                }
            }
        });
    };
    ManageConventionalComponent.prototype.clearObject = function (object_) {
        for (var k in object_) {
            if (object_.hasOwnProperty(k)) {
                delete object_[k];
            }
        }
    };
    ManageConventionalComponent.prototype.cancel2WaySwap = function () {
        var _this = this;
        document.querySelector('.user_mode_banner').classList.remove('fadeIn');
        var assignment_under_swap = document.querySelector('.assignment_under_swap');
        if (assignment_under_swap) {
            assignment_under_swap.classList.remove('assignment_under_swap');
        }
        //        for(let ass of this.assignments) {
        //            ass.swapSuggestion = false;
        //        }
        setTimeout(function () {
            _this.swap_struct = null;
        }, 320);
    };
    ManageConventionalComponent.prototype.clickAssignment = function (ev, accessor) {
        var target = ev.currentTarget;
        if (this.swap_struct && this.swap_struct.type == '2way' && this.swap_struct.assignments) {
            var assi1 = eval('this.' + accessor);
            if (assi1 == this.swap_struct.assignment) {
                console.log('This assignment cannot be picked as a second as it is already part of the swap transaction');
            }
            else if (!target.classList.contains('swapSuggestion')) {
                console.log('This assignment is not suitable for swap');
            }
            else {
                var date = assi1.startTime.get_ISO_8601_Date() + " (" + assi1.startTime.getWeekDay() + ") ";
                var shiftName = assi1.shift;
                var employeeName = assi1.assignmentEmployees[0].employee.firstName + " " + assi1.assignmentEmployees[0].employee.lastName;
                this.swap_struct.assignments[1] = assi1;
                this.swap_struct.assignments_selection[1] = { value: assi1.id, text: date + " (" + shiftName + " shift) " + employeeName };
            }
        }
    };
    ManageConventionalComponent.prototype.sendSwapToCart = function () {
        //        document.querySelector('.assignment_under_swap').classList.remove('assignment_under_swap');
        //        for(let ass of this.assignments) {
        //            ass.swapSuggestion = false;
        //        }
        //
        //        let assi0_parent_array = eval(this.swap_struct.assignment.jsaccess);
        //        let assi1_parent_array = eval('this.'+target.dataset.jsaccess+'.shifts');
        //        this.schedule2Service.twoWaySwap(assi1, this.swap_struct.assignment, (status: string) => {
        //            //.match();
        //            let i0 = assi0_parent_array.findIndex((v)=>{
        //                return v.id == this.swap_struct.assignment.id    
        //            });
        //
        //            let i1 = assi1_parent_array.findIndex((v)=>{
        //                return v.id == assi1.id    
        //            });
        //
        //            if(status == 'ok') {
        //                if(i0 > -1 && i1 > -1) {
        //                    assi0_parent_array.splice(i0, 1, assi1);
        //                    assi1_parent_array.splice(i1, 1, this.swap_struct.assignment);
        //                }
        //
        //                console.log('ok');
        //                assi1.justSwapped = true;
        //                this.swap_struct.assignment.justSwapped = true;
        //                document.querySelector('.user_mode_banner').classList.remove('fadeIn');
        //                setTimeout(()=>{
        //                    assi1.justSwapped = false;
        //                    this.swap_struct.assignment.justSwapped = false;
        //                    this.swap_struct = null;
        //                },1000);
        //            }
        //        });
    };
    ManageConventionalComponent.prototype.revealContextMenu = function (ev) {
        //        let className = (event.target as any).className;
        //        let klass = className.match('ts_[0-9]+');
        //        let assignmentIds = [];
        //        if(klass) {
        //            let siblingShifts = document.querySelectorAll('.'+klass[0]) as any;
        //            for(let sibling of siblingShifts) {
        //                assignmentIds.push(sibling.dataset.id);
        //            }
        var _this = this;
        // retrieve assignments by their ids
        // 
        var target = ev.currentTarget;
        this.keep_assignment_container_focused = true;
        var shifts = {};
        try {
            shifts = eval('this.' + target.dataset.jsaccess + '.shifts');
        }
        catch (e) {
        }
        if (shifts.oc) {
            this.contextMenus.length = 0;
            this.contextMenus[0] = { items: [] };
            var width_ch = 0;
            shifts.oc.jsaccess = 'this.' + target.dataset.jsaccess + '.shifts';
            var label = 'Swap ' + shifts.oc.shift + " shift";
            width_ch = label.length > width_ch ? label.length : width_ch;
            this.contextMenus[0].items.push({
                label: label,
                callback: function () {
                    //
                    // clear highlightment, if any, of an assignment which was
                    // previously chosen for swap
                    //
                    try {
                        document.querySelector('.assignment_under_swap').classList.remove('assignment_under_swap');
                    }
                    catch (e) {
                    }
                    target.classList.add('assignment_under_swap');
                    _this.initiate2WaySwap(shifts.oc);
                }
            });
            this.contextMenus[0].width = width_ch + 5;
            var left = 0;
            var top = 0;
            this.contextMenus[0].left = ev.clientX;
            this.contextMenus[0].top = ev.clientY;
        }
        //        let contextMenu = document.querySelector("#contextMenu") as any;
        //        contextMenu.style.left = ev.clientX + "px";
        //        contextMenu.style.top = ev.clientY + "px";
        //        if(contextMenu.style.display == 'block') {
        //            contextMenu.style.display = 'none';
        //        }
        //        else if(this.contextMenuItems.length > 0){
        //            contextMenu.style.display = 'block';
        //        }
        ev.preventDefault();
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        return false;
    };
    ManageConventionalComponent.prototype.loadAssignments = function (userIds) {
        var _this = this;
        // Load assignments
        //
        // @firstDate   firstDate of year
        // @lastDate    lastDate of year
        this.loadingIndication = 'block';
        this.mode = 'indeterminate';
        var firstDate = this.months[0].weeks[0].days[0].date;
        var lastDate = this.months[this.months.length - 1];
        lastDate = lastDate.weeks[lastDate.weeks.length - 1];
        lastDate = lastDate.days[lastDate.days.length - 1];
        lastDate = lastDate.date.date.getTime();
        var timeLength = new __WEBPACK_IMPORTED_MODULE_6__model_tmdate__["b" /* TmLength */]();
        timeLength.seconds = (lastDate - firstDate.date.getTime()) / 1000;
        //retrieve users ids from usersModel
        //
        //        this.swap_struct = {
        //            type: '2way',
        //            assignments: [],
        //            assignments_selection: [{
        //                value: 0,
        //                text: "( shift) "
        //            }],
        //            suggestions: [],
        //            suggestions_selection: [],
        //        };
        //userIds.push({id:2}, {id:10}, {id:3});
        this.schedule2Service.fetchAssignments(firstDate, timeLength, userIds, function (assignments) {
            //let vehicleIdMap = this.array_flip(vehicleIds);
            //this.assignments.length = 0;
            //this.assignments.splice(0, 0, ...assignments);
            _this.mode = 'determinate';
            _this.value = 0;
            var originalCount = assignments.length;
            var ratio = 0;
            var accum = 0;
            for (var mi = 0; mi < _this.months.length; mi++) {
                var month = _this.months[mi];
                for (var _i = 0, _a = month.weeks; _i < _a.length; _i++) {
                    var week = _a[_i];
                    for (var _b = 0, _c = week.days; _b < _c.length; _b++) {
                        var day = _c[_b];
                        if (!day.adjecentMonth) {
                            day.shifts.length = 0;
                            var dayAssignments = _this.retrieveAssignments(day.date.date.getTime(), assignments);
                            if (dayAssignments.length == 0) {
                                dayAssignments = _this.retrieveAssignmentsPreviousMonth(mi - 1, day);
                            }
                            if (dayAssignments[0]) {
                                var userId = dayAssignments[0].assignmentEmployees[0].employee.id;
                                if (typeof _this.user_assignments['u_' + userId] != 'object') {
                                    _this.user_assignments['u_' + userId] = {};
                                }
                                var time = day.date.date.getTime();
                                if (!_this.user_assignments['u_' + userId]['t_' + time]) {
                                    _this.user_assignments['u_' + userId]['t_' + time] = {};
                                }
                                //this.user_assignments['u_'+userId]['t_'+time].splice(0,0,...dayAssignments);
                                for (var _d = 0, dayAssignments_1 = dayAssignments; _d < dayAssignments_1.length; _d++) {
                                    var assignment = dayAssignments_1[_d];
                                    if (assignment.shift == 'Late' || assignment.shift == 'Night' || assignment.shift == 'OC') {
                                        _this.user_assignments['u_' + userId]['t_' + time]['oc'] = assignment;
                                    }
                                    else {
                                        _this.user_assignments['u_' + userId]['t_' + time]['daylight'] = assignment;
                                    }
                                }
                                //                            if(typeof this.assignments['t_'+day.date.date.getTime()] != 'array') {
                                //                                this.assignments['t_'+day.date.date.getTime()] = [];
                                //                            }
                                //                            this.assignments['t_'+day.date.date.getTime()].push();
                                //day.shifts.splice(0,0, ...dayAssignments);
                                accum += dayAssignments.length;
                                ratio = originalCount / (originalCount - accum);
                                var percentage = 100 / ratio;
                                _this.value = percentage;
                            }
                        }
                    }
                }
            }
            _this.revealAssignmentsOf(userIds[0].id);
            _this.loadingIndication = 'none';
            document.querySelector('.registrarContainer').classList.add('animate');
        });
    };
    /** Retrieve assignemnts which were already assigned to the previoud month. This happens when a date appears in two displayed
     *  months (because every month would display a week or two from the next month and up to a week from the previos one*/
    ManageConventionalComponent.prototype.retrieveAssignmentsPreviousMonth = function (iMon, day) {
        if (!this.months[iMon]) {
            return [];
        }
        var weeksLength = this.months[iMon].weeks.length;
        for (var w = weeksLength - 1; w >= 0; w--) {
            var daysLength = this.months[iMon].weeks[w].days.length;
            for (var d = daysLength - 1; d >= 0; d--) {
                if (day.date.date.getTime() == this.months[iMon].weeks[w].days[d].date.date.getTime()) {
                    return this.months[iMon].weeks[w].days[d].shifts;
                }
            }
        }
        return [];
    };
    ManageConventionalComponent.prototype.retrieveAssignments = function (timeStamp, assignments) {
        var toRemove = [];
        var i = 0;
        for (var _i = 0, assignments_1 = assignments; _i < assignments_1.length; _i++) {
            var ass = assignments_1[_i];
            //if(ass.dateFrom >= timeStamp && timeStamp <= ass.dateFrom + (24*3600000)) {
            if (ass && ass.dateFrom == timeStamp) {
                ass.assignmentId = ass.id;
                ass.startTime = new __WEBPACK_IMPORTED_MODULE_6__model_tmdate__["a" /* TmDate */]();
                ass.startTime.date.setTime(ass.dateFrom);
                toRemove.push(i);
            }
            i++;
        }
        var toReturn = [];
        for (var _a = 0, toRemove_1 = toRemove; _a < toRemove_1.length; _a++) {
            var el = toRemove_1[_a];
            //toReturn = toReturn.concat(assignments.splice(el, 1)); 
            toReturn.push(assignments[el]);
            assignments[el] = null;
        }
        return toReturn;
    };
    ManageConventionalComponent.prototype.revealAssignmentsOf = function (userId) {
        var u_userId = 'u_' + userId;
        //
        // Clear displayed shifts
        //
        for (var k in this.assignments) {
            this.clearObject(this.assignments[k]);
        }
        for (var k in this.user_assignments[u_userId]) {
            this.transferProperties(this.user_assignments[u_userId][k], this.assignments[k]);
        }
    };
    ManageConventionalComponent.prototype.transferProperties = function (src, dest) {
        for (var k in src) {
            dest[k] = src[k];
        }
    };
    ManageConventionalComponent.prototype.substr1 = function (str) {
        return str.substr(0, 1);
    };
    ManageConventionalComponent.prototype.calculateBadgeOffset = function (index, shifts) {
        var offset = 3;
        //        if(shifts.length < 4) {
        //            offset = 1;
        //        }
        return index * offset;
    };
    ManageConventionalComponent.prototype.changeSelectedUser = function (model) {
        var _this = this;
        clearTimeout(this.timeoutHandler);
        this.timeoutHandler = setTimeout(function () {
            _this.loadAssignments([{ id: model }]);
        }, 100);
    };
    ManageConventionalComponent.prototype.userSelectionChange = function (model) {
        var _this = this;
        clearTimeout(this.timeoutHandler);
        this.timeoutHandler = setTimeout(function () {
            var userIds = [];
            for (var _i = 0, model_1 = model; _i < model_1.length; _i++) {
                var u = model_1[_i];
                userIds.push({ id: u.value });
            }
            _this.loadAssignments(userIds);
        }, 1000);
    };
    ManageConventionalComponent.prototype.storeProperties = function () {
        this.localStorageService.set(this.constructor.name + '.usersModel', this.usersModel);
    };
    ManageConventionalComponent.prototype.restoreProperties = function () {
        var usersModel = this.localStorageService.get(this.constructor.name + '.usersModel');
        if (usersModel != null) {
            this.usersModel = usersModel;
        }
    };
    ManageConventionalComponent.prototype.toggleFullScreenMonth = function (ev, month) {
        if (!this.fullScreenMonth) {
            this.fullScreenMonth = month;
            setTimeout(function () {
                var element = document.querySelector('.fullScreenMonth');
                element.classList.add('fullScreen');
                element = document.querySelector('.conventional-parent');
                element.style = "display:none";
            }, 0);
        }
        else {
            this.fullScreenMonth = null;
            setTimeout(function () {
                var element = document.querySelector('.conventional-parent');
                element.style = "display:block";
            }, 0);
        }
    };
    ManageConventionalComponent.prototype.restoreYearView = function () {
        var _this = this;
        var element = document.querySelector('.fullScreenMonth');
        element.classList.remove('fullScreen');
        element = document.querySelector('.conventional-parent');
        element.style = "display:block";
        setTimeout(function () {
            _this.fullScreenMonth = null;
        }, 300);
    };
    ManageConventionalComponent.prototype.toggleSwapCart = function () {
        var target = document.querySelector('.swapCart');
        if (target.classList.contains('fadeIn')) {
            target.classList.remove('fadeIn');
        }
        else {
            target.classList.add('fadeIn');
        }
    };
    ManageConventionalComponent.prototype.clickSuggestion = function (event, suggestion) {
        this.revealAssignmentsOf(suggestion.assignmentEmployees[0].employee.id);
    };
    return ManageConventionalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ManageConventionalComponent.prototype, "beforeUnloadHander", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ManageConventionalComponent.prototype, "window_click", null);
ManageConventionalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/customer/schedule2/manage-conventional.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/schedule2/manage-conventional.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_admincomponent_service__["a" /* AdminComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_admincomponent_service__["a" /* AdminComponentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__service_schedule2_service__["a" /* Schedule2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__service_schedule2_service__["a" /* Schedule2Service */]) === "function" && _e || Object])
], ManageConventionalComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=manage-conventional.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/schedule2/manage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\n    /* border: 1px solid red; */\n}\n\n.hour {\n    float: left;\n    width: 5px;\n    height: 60px;\n    border-left: 1px #FBFBFB solid;\n    border-top: 1px #E8E8E7 solid;\n}\n\n.mightyParent{\n    position: relative;\n    overflow: hidden;\n    height: 77vh;\n    margin-top: -95px;\n}\n\n.scrollbarX {\n    position:absolute;\n    bottom:0px;\n    overflow-x:scroll;\n    overflow-y: hidden;\n    height: 20px;\n    width: 80%;\n    left:200px;\n    z-index: 999;\n}\n\n.scrollbarY {\n    position:absolute;\n    bottom:0px;\n    overflow-x:hidden;\n    overflow-y:auto;\n    width: 20px;\n    right:0px;\n    z-index: 999;\n}\n\n.timeTableContainer{\n    position: relative;\n    margin-top: 95px;\n    margin-left: 120px;\n    overflow: hidden;\n}\n\n.timeContainer {\n    position:absolute;\n    width: 5px;\n    height: 100px;\n    border-bottom: 1px solid #f1f1f1;\n    /*border: 1px red solid; */\n}\n\n.regNoContainer{\n    position: absolute;\n    float: left;\n    width: 120px;\n    border-right: 1px solid #f1f1f1;\n}\n\n.driverTrailerBox{\n    overflow: auto;\n    height: auto;\n}\n\n.driverTrailerContainer{\n    height: 77vh;\n    width: 240px;\n    float: left;\n}\n\n.driverContainer, .trailerContainer{\n    width: 100%;\n    float: left;\n    height: 38vh;\n    /* overflow: auto; */\n    cursor: pointer;\n}\n\n.driverContainer, .mightyParent, .trailerContainer, .assingmentPanel{\n    position: relative;\n    background: #fff;\n    /* white-space: nowrap; */\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n    margin-bottom: 10px;\n}\n\n.assignPanelDetails{\n    max-height: 160px;\n    height: 160px;\n    overflow-y: auto;\n}\n\n.driverHeader, .trailerHeader{\n    color: #989898;\n    font-weight: bold;\n    text-transform: uppercase;\n    padding-left: 35px;\n    padding-right: 35px;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    background: #fbfbfb;\n}\n\n.driverHeader input, .trailerHeader input{\n    border: none;\n    border-bottom: 1px solid #C7C7C7;\n    background: transparent;\n}\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    font-size: 12px;\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    font-size: 12px;\n  }\n  :-ms-input-placeholder { /* IE 10+ */\n    font-size: 12px;\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    font-size: 12px;\n  }\n\n.driver {\n    /* left: 20px;\n    top: 0px;\n    position:absolute;\n    width: auto;\n    height: 40px;\n    color: #7e7e7e;\n    font-weight: bold;\n    padding: 10px;\n    margin-top: 10px;\n     */\n     width: auto;\n     height: 21px;\n     color: #7e7e7e;\n     font-weight: bold;\n     padding: 0px;\n}\n\n.driverContainer .driver:hover{\n    color: #252525;\n}\n\n\n.assingmentPanel{\n    /* position: absolute;\n    bottom:0px;\n    height: 200px;\n    width:350px;\n    right:2%;\n    display: block;\n    overflow: auto;\n    padding: 10px;\n    z-index: 1000; */\n}\n\n.assingmentPanel .tabs{\n    background-color: #ececec;\n    border-radius: 5px;\n    font-weight: normal;\n    line-height: 28px;\n    height: 30px;\n    padding: 0 4px;\n    cursor: pointer;\n    box-sizing: border-box;\n    opacity: .6;\n    text-align: center;\n    display: inline-block;\n    vertical-align: top;\n    text-decoration: none;\n    position: relative;\n    overflow: hidden;\n    border-bottom: 2px solid #FFFFFF;\n}\n\n.assingmentPanel .tabs:active,\n.assingmentPanel .tabs:hover,\n.assingmentPanel .tabs:focus{\n    border-bottom: 2px solid #3f51b5;\n}\n\n.assingmentPanel .tabs_active{\n    border-bottom: 2px solid #3f51b5;\n}\n\n.assingmentPanel .driver:hover{\n    color: #7e7e7e;\n}\n\n.assignPanelDetails {\n    padding: 1em;\n}\n\n.assignPanelDetails .fa-trash{\n    color: #252525;\n}\n\n.assignPanelDetails .fa-trash:hover{\n    color: #7e7e7e !important;\n    cursor: pointer;\n}\n\n.day {\n    height: 95px;\n    width: 121px;\n    border-left: 2px;\n    padding: 25px;\n    background: #fbfbfb;\n    font-weight: bold;\n    border-top: 2px solid #fbfbfb;\n    border-right: 1px solid #F1F1F1;\n    border-bottom:  1px solid #F1F1F1;\n    z-index: 997;\n    text-align: center;\n    overflow: hidden;\n}\n\n.weekend {\n    background-color: #FFE7E7;\n}\n\n/*.day:hover, .day:active, .day:focus{\n    border-top: 2px solid #02d1a5;\n    background: #ffffff;\n}*/\n\n.startOfDay {\n    float: left;\n    width: 5px;\n    height: 100px;\n    border-left: 1px solid #F1F1F1;\n    border-top: 1px #E8E8E7 solid;\n}\n\n.startOfMonth {\n    float: left;\n    width: 5px;\n    height: 100px;\n    border-left: 1px #D9B1BC solid;\n    border-top: 1px #E8E8E7 solid;\n}\n\n.month {\n    position: absolute;\n    z-index: -1;\n    top: -3px;\n    font-weight: bold;\n    color:#989898;\n    font-size: large;\n    left: 1em;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.registrarHeaderItem {\n    font-size: 16px;\n    float: left;\n    width: 100%;\n    height: 100px;\n    color: #252525;\n    text-transform: uppercase;\n    text-align: center;\n    line-height: 4;\n    border-bottom: 1px solid #F1F1F1;\n    overflow: hidden;\n}\n\n.registrarHeader {\n    color: #989898;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 95px;\n    overflow: hidden;\n    background: #fbfbfb;\n}\n\n.daysContainer {\n    padding-left: 2px;\n    margin-left: 118px;\n    border-left: 2px;\n    overflow:hidden;\n    overflow-y: hidden;\n    height: 95px;\n    /* width: 80%; */\n}\n\n.scrollbarX{\n    position:absolute;\n    bottom:0px;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    height: 20px;\n    width: 85%;\n    left:210px;\n}\n\n.assignment{\n    left: 20px;\n    top: 0px;\n    position:absolute;\n    vertical-align: middle;\n    text-align: center;\n    color: #252525;\n    background-color: aliceblue;\n    border: 1px solid grey;\n    padding-top: 1.4em;\n}\n\n.assignmentSelected {\n    border-width: 2px;\n    opacity: 0.912;\n}\n\n.EditedByPeer {\n    background-color: #8cfbff;\n}\n\n#AssignPanelHeader {\n    overflow: hidden;\n    width: 100%;\n}\n\n#AssignPanelHeader div{\n\tmargin-right: 1em;\n}\n\n#AssignPanelHeader div:last-child{\n\tmargin-right: 0em;\n}\n\n#AssignPanelTabs {\n    overflow: hidden;\n    max-height: 30px;\n}\n\n.currentMonth {\n    position: absolute;\n    z-index: 999;\n    color:#989898;\n    background-color: #FBFBFB;\n    padding-left: 2em;\n    margin-left: -2em;\n    font-weight: bold;\n}\n\n.colorBadge{\n    margin-left: 0.5em;\n    display: inline-block;\n    border-radius: 50%;\n    width: 1em;\n    height: 1em;\n}\n\n#redBall {\n    visibility: hidden;\n    border-radius:50px;\n    width:50px;\n    height:50px;\n    background:rgb(141, 154, 162);\n    position:fixed;\n    top:0;\n    left:0;\n    transition: -webkit-transform 1s;\n    transition: transform 1s;\n    transition: transform 1s, -webkit-transform 1s;\n}\n\n.assignmentDetails {\n    position: relative;\n    line-height: 50%;\n    overflow: hidden;\n}\n\n.assignmentDetails > .drivers{\n    position: absolute;\n    line-height: 50%;\n    margin: 0.2 em;\n}\n\n\n.assignment_rowDrivers {\n\tfloat: left;\n\tfont-size: 13px;\n    color: rgb(37, 37, 37);\n}\n\n.assignment_rowDrivers li, .assignment_rowDrivers ul{\n\tmargin: 0px;\n    color: rgb(37, 37, 37);\n}\n\n.assignment_rowDrivers > div {\n    float: left;\n\n}\n\ncanvas {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n}\n\ndiv {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline: none;\n}\n\n.assignPanelDetails .driver {\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\n\n.closeAssignPanel {\n    float:right;\n    color: red;\n    cursor:pointer;\n    position: absolute;\n    background-color: white;\n    right: 0px;\n    top: 0px;\n    min-width: 20px;\n}\n\n/*\n#contextMenu{\n  z-index: 99999;\n  display: none;\n  position: fixed;\n}\n\n#contextMenu ul {\n  list-style-type: none;\n  padding: 0;\n  padding-left: 0.3em;\n  padding-right: 0.3em;\n}\n\n#contextMenu ul a {\n  cursor: pointer;\n}\n\n#contextMenu ul a:hover {\n  color: #2aabd2;\n}\n*/\n\ndiv.shift {\n    font-weight: bold;\n    font-size: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/schedule2/manage.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <button mat-button (click)=\"zoomIn()\"><i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i></button>\n    {{_scale_factor_percentage}}%\n    <button mat-button (click)=\"zoomOut()\"><i class=\"fa fa-search-minus\" aria-hidden=\"true\"></i></button>\n      <span>\n        <mat-input-container>\n          <input matInput  [matDatepicker]=\"picker\" (ngModelChange)='onChangeScheduleStartDate($event)' [(ngModel)]='_scheduleStartDate' placeholder=\"Timeline Start Date\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        </mat-input-container>\n        <mat-datepicker #picker></mat-datepicker>\n      </span>\n      <a [routerLink]=\"'../manage-conventional'\" mat-raised-button><span class=\"fa fa-calendar\"></span> Calendar View</a>\n</div>\n\n  <div #timeHeader class=\"daysContainer\" (contextmenu)=\"preventDefault($event)\">\n      <div class=\"currentMonth\">{{currentMonth}}</div>\n    <div #timeHeaderContent>\n      <div style=\"float:left;position:relative;\" *ngFor=\"let day of days\" class=\"day\"\n          [class.weekend]=\"day.getWeekDay()=='Saturday' || day.getWeekDay()=='Sunday'\">\n        <span style=\"text-align: center;color: #02d1a5;\">{{day.date.getDate()}}</span><br />\n        <span style=\"color:#989898;text-transform: uppercase;text-align: center;\">{{day.getWeekDay()}}</span>\n        <div *ngIf=\"day.date.getDate()==1\" class=\"month\">{{day.getMonth()}}</div>\n      </div>\n    </div>\n  </div>\n\n  <div #mightyParent class=\"mightyParent\" (contextmenu)=\"preventDefault($event)\">\n    <div class=\"regNoContainer\">\n      <div #registrarHeader class=\"registrarHeader\">Registrars</div>\n      <div #registrarHeaderContainer class=\"registrarHeaderContainer\" style=\"overflow: hidden\">\n        <div *ngFor=\"let row of registrarSchedule\" class=\"registrarHeaderItem\">{{row.registrar.firstName}} {{row.registrar.lastName}}</div>\n        <div style=\"clear:both\"></div>\n        <div [style.height.px]=\"scrollbarXHeight\"> </div>\n      </div>\n    </div>\n\n    <div #scrollbarX class=\"scrollbarX\">\n      <div #scrollbarXDummyContent style=\"color: #fff;\">.</div>\n    </div>\n\n    <div #scrollbarY class=\"scrollbarY\">\n      <div #scrollbarYDummyContent> </div>\n    </div>\n\n    <div #scrolledParent class=\"timeTableContainer\">\n\n\n      <div class=\"scrolledWidget\" #scrolledWidget style=\"float:left\" (mousemove)=\"onMouseMove($event)\" (mouseup)=\"onMouseUp($event)\">\n        <div *ngFor=\"let row of registrarSchedule; let i = index\">\n          <div #timeContainer class=\"timeContainer\" (drop)=\"onDropDriver($event, false)\" (dragover)=\"onDragOver($event)\" [attr.data-registrarid]=\"row.registrar.id\" [attr.data-index]=\"i\" (contextmenu)=\"revealContextMenu($event, 'timeline', row.registrar.id)\">\n            <div *ngFor=\"let assignment of row.assignments; let i = index\"\n              [attr.data-assignmentid]=\"assignment.id\"\n              [style.left.px]=\"assignment.offsetLeft\" [style.width.px]=\"assignment.width\"\n              class=\"assignment shift {{assignment.shift}}\"\n              (contextmenu)=\"revealContextMenu($event, 'assignment', assignment)\" \n              [class.EditedByPeer]='assignment.indicatePeerEdit'>\n                <div *ngIf=\"assignment.shift != 'D'\">\n                     {{assignment.shift}}\n                </div>\n            </div>\n          </div>\n          <canvas class=\"hour\" [class.startOfDay]=\"hour==0\"> </canvas>\n          <div style=\"clear:both\"></div>\n        </div>\n        <div [style.height.px]=\"scrollbarXHeight\"> </div>\n      </div>\n    </div>\n  </div>\n\n<div id=\"redBall\"></div>\n\n<div *ngIf=\"contextmenu_struct.visible\" class=\"tm_contextmenu\" style=\"width:8em;\"\n    [style.top.px]=\"contextmenu_struct.top\"\n    [style.left.px]=\"contextmenu_struct.left\">\n    <div class=\"menu_item\" *ngFor=\"let shift of contextmenu_struct.userData.shifts\"\n        [class.disabled]=\"shift.disabled\"\n        (click)=\"assignShift($event, shift.label)\"\n        (mouseenter)=\"onMouseEnter($event)\"\n        (mouseleave)=\"onMouseLeave($event)\">\n        {{ shift.label }}\n    </div>\n </div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/schedule2/manage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_activity_service__ = __webpack_require__("../../../../../src/app/service/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_css_service__ = __webpack_require__("../../../../../src/app/service/css.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_schedule2_service__ = __webpack_require__("../../../../../src/app/service/schedule2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__model_tmdate__ = __webpack_require__("../../../../../src/app/model/tmdate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__schedule_component__ = __webpack_require__("../../../../../src/app/customer/schedule2/schedule.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//
//   _____      _              _       _
//  / ____|    | |            | |     | |
// | (___   ___| |__   ___  __| |_   _| | ___           _ __   __ _  __ _  ___
//  \___ \ / __| '_ \ / _ \/ _` | | | | |/ _ \         | '_ \ / _` |/ _` |/ _ \
//  ____) | (__| | | |  __/ (_| | |_| | |  __/         | |_) | (_| | (_| |  __/
// |_____/ \___|_| |_|\___|\__,_|\__,_|_|\___|         | .__/ \__,_|\__, |\___|
//                                                     | |           __/ |
//                                                     |_|          |___/
//
// Please enjoy the code in this file. It was written with the full intention of being
// pleasent to read. Any complains send to tihomir@edatachase.com (me)
//
//
//
/** importing 3rd party modules */






/** importing services */

//import { TrailerService } from '../../service/trailer.service';



/** importing models */
//import { Vehicle } from '../../model/vehicle';
//import { Trailer } from '../../model/trailer';


/** importing components */


//import { SelectVehicleComponent } from './manage/select-vehicle.component';
//import { ConfirmAssignmentEraseComponent } from './manage/confirm-assignment-erase';
/** exporting components */
//export { SelectVehicleComponent } from './manage/select-vehicle.component';
//export { ConfirmAssignmentEraseComponent } from './manage/confirm-assignment-erase';
var ManageComponent = (function () {
    function ManageComponent(router, parentComponent, userService, activityService, 
        //private trailerService: TrailerService,
        scheduleComponent, localStorageService, renderer, renderer2, dialog, document, cssService, schedule2Service, formBuilder) {
        var _this = this;
        this.router = router;
        this.parentComponent = parentComponent;
        this.userService = userService;
        this.activityService = activityService;
        this.scheduleComponent = scheduleComponent;
        this.localStorageService = localStorageService;
        this.renderer = renderer;
        this.renderer2 = renderer2;
        this.dialog = dialog;
        this.document = document;
        this.cssService = cssService;
        this.schedule2Service = schedule2Service;
        this.formBuilder = formBuilder;
        //@ViewChild("activityHeaderContainerViewPort") public activityHeaderContainerViewPort: ElementRef;
        this.selectedUsersSimple = { total: 0, users: [] };
        this.registrarSchedule = [];
        //private _driver_schedule: Array<DriverSchedule[]> = [];
        this.hours = [];
        // TODO manage through local storage
        this._scale_factor = 1;
        this._scale_factor_percentage = 100;
        this._hour_width = 5; //in pixels
        this._hour_height = 60; //in pixels
        this._cell_width = 180; //in pixels
        this._cell_height = 60; //in pixels
        this.days = [];
        /** Mouse pointer offset from the left side of the Drag-and-Drop source element. */
        this._dnd_t_offset_x = 0;
        /** Mouse pointer offset from the top side of the Drag-and-Drop source element. */
        this._dnd_t_offset_y = 0;
        /** The element that is being currently dragged. Null when Drag-and-Drop is not being performed */
        this._dnd_element = null;
        this._resize_target = null;
        this._driver_time_from = 0;
        this._driver_time_to = 0;
        this._resize_side = '';
        this.drivers = [];
        //private trailers: Trailer[] = [];
        /**  */
        this.assignments_overlapped = [];
        this.assignment_selected = null;
        //private onClickAssignment_ignore: boolean;
        this.reached_z_index = 0;
        this.scrollbarYWidth = 20;
        this.scrollbarXHeight = 20;
        this._periodForm_from = '';
        this._periodForm_to = '';
        this._scheduleStartDate = '';
        this.currentMonth = '';
        this._vehicle_header_font_dize = 16;
        this._date_header_padding = 25;
        this._assignment_border_radius = 15;
        this.scheduleIndex = -1;
        this.contextmenu_struct = {
            visible: false,
            top: 0,
            left: 0,
        };
        this.resizeCallback = function (event) {
            // TODO Reevalute scroll callback (or at least that part which is responsible for
            // *redrawing* time *cells*)
            //this.applyCustomScrollbars();
            setTimeout(function () {
                _this.applyMainWidgetsSizes();
                setTimeout(function () { return _this._scaleView(); }, 0);
            }, 0);
            console.log("__width: " + _this.scrolledParent.nativeElement.clientWidth);
        };
        /** Handles mouse wheel events. If Control key is pressed zooming is performed, otherwise scrolling the timeline.
         *  If no key is pressed scrolls vertically, if the Shift key is pressed scroll horizontally
         */
        this.mousewheelCallback = function (event) {
            if (event.ctrlKey == true) {
                if (event.deltaY > 0) {
                    _this.zoomOut();
                }
                else {
                    _this.zoomIn();
                }
                //console.log(event.deltaY);
            }
            else {
                if (event.deltaMode == event.DOM_DELTA_PIXEL) {
                    if (event.shiftKey == true) {
                        _this.scrollbarX.nativeElement.scrollLeft += event.deltaY;
                        //console.log('scrollLeft: '+this.scrollbarX.nativeElement.scrollLeft);
                        //this.document.get().scrollTop += event.deltaY;
                        event.preventDefault();
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                    }
                    else {
                        _this.scrollbarY.nativeElement.scrollTop += event.deltaY;
                        event.preventDefault();
                        event.stopPropagation();
                        event.stopImmediatePropagation();
                    }
                }
            }
            //   else if (event.deltaMode == event.DOM_DELTA_PAGE) {
            //       // TODO scroll by whole page. That is, whole width at a time
            //   }
            //   else if (event.deltaMode == event.DOM_DELTA_LINE) {
            //       // TODO scroll by an hour
            //   }
            //console.log("mousewheel; "+event.deltaY);
            return false;
        };
        this.scrollCallbackY = function (event) {
            _this.closeContextMenu();
            _this.scrolledParent.nativeElement.scrollTop = _this.scrollbarY.nativeElement.scrollTop;
            _this.registrarHeaderContainer.nativeElement.scrollTop = _this.scrollbarY.nativeElement.scrollTop;
            console.log("scrolledParent Y: " + _this.scrolledParent.nativeElement.scrollTop);
            console.log("activityHeaderContainerY: " + _this.registrarHeaderContainer.nativeElement.scrollTop);
        };
        this.scrollCallbackX = function (event) {
            _this.closeContextMenu();
            if ((_this.scrollbarX.nativeElement.scrollLeft + 10) >
                (_this.scrolledWidget.nativeElement.clientWidth - _this.scrolledParent.nativeElement.clientWidth)) {
                var hoursPerScreen = _this.scrolledParent.nativeElement.clientWidth /
                    (_this._hour_width * _this._scale_factor);
                var daysPerScreen = hoursPerScreen / 24;
                var hoursToAdd = hoursPerScreen;
                //this.hours.length = Math.ceil(hoursPerScreen) * 2;
                var date = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["a" /* TmDate */]();
                date.setFromTmDate(_this.days[_this.days.length - 1]);
                //date.alterDate(+1);
                var timeLength = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["b" /* TmLength */]();
                timeLength.seconds = hoursToAdd * 3600;
                //            let vehicleIds: any[] = [];                // we need to prepare an array containing vehicleIds
                //            for(let v of this.registrarSchedule) {          // in a format suitable for the loadAssignments()
                //                vehicleIds.push({id:v.registrar.id.toString()}); // method
                //            }                                             // .....
                _this.loadAssignments(_this.days[_this.days.length - 1], timeLength, []);
                var day = void 0;
                for (var i = _this.hours[_this.hours.length - 1] + 1; i < hoursToAdd; i++) {
                    _this.hours.push(i % 24);
                    if (i % 24 == 0) {
                        date.alterDate(+1);
                        day = date.fork();
                        _this.days.push(day);
                    }
                }
                _this.updateTimelineWidth();
            }
            _this.scrolledParent.nativeElement.scrollLeft = _this.scrollbarX.nativeElement.scrollLeft;
            _this.timeHeader.nativeElement.scrollLeft = _this.scrollbarX.nativeElement.scrollLeft;
            _this.reevaluateCurrentMonth();
        };
        this.periodFormFields = this.formBuilder.group({ dateFrom: '', dateTo: '' });
    }
    //private loadVehicles() {
    //  for(let i in this.selectedVehiclesSimple.vehicles) {
    //      if(this.selectedVehiclesSimple.vehicles[i] != null && this.selectedVehiclesSimple.vehicles[i] == true) {
    //        this.vehicleService.getVehicle(+i).then(vehicle => {
    //            this.registrarSchedule.push({vehicle: vehicle, assignments: []});
    //        })
    //      }
    //  }
    //  console.log(this.registrarSchedule);
    //}
    ManageComponent.prototype.ngDoCheck = function () {
        var total = 0;
        for (var i in this.selectedUsersSimple.users) {
            if (this.selectedUsersSimple.users[i] != null && this.selectedUsersSimple.users[i] == true) {
                total++;
            }
        }
        if (this.selectedUsersSimple.total != total) {
            //if(true) {
            this.selectedUsersSimple.total = total;
            for (var i in this.selectedUsersSimple.users) {
                if (this.selectedUsersSimple.users[i] == true &&
                    !this.isVehiclePresent(+i)) {
                    //                    this.vehicleService.getVehicle(+i).then(vehicle => {
                    //                        this.activitySchedule.unshift({vehicle:vehicle, assignments: []});
                    //
                    //                        let vehicleId: string[] = [];                 // we need to prepare an array containing vehicleId
                    //                        vehicleId[this.activitySchedule.length-1] = i; // in a format suitable for the loadAssignments()
                    //                        // method. I'm sure it seems rather obfscured, sorry.
                    //                        // vehicleId index is the index at which the vehicle
                    //                        // appear in the activitySchedule array, that's why
                    //                        // we use latter's last index (we just pushed in it);
                    //                        // i is the vehicleId
                    //
                    //                        let timeLength = new TmLength();                // time length is calculated by multiplying the hours
                    //                        timeLength.seconds = this.hours.length * 3600;  // we got for the timeline by number of seconds
                    //                        this.loadAssignments(this.days[0], timeLength, vehicleId);
                    //
                    //                    })
                }
            }
            var toBeRemoved = [];
            //let len = this.activitySchedule.length;
            //            for(let i=0; i<len; i++) {
            //                if(this.isVehicleRemoved(this.activitySchedule[i].vehicle.id)) {
            //                    toBeRemoved.push(i);
            //                    //delete(this.selectedUsersSimple[vehi.id]);
            //                }
            //            }
            //
            //            for(let i of toBeRemoved) {
            //                this.removeKnownReferences(i);
            //                this.activitySchedule.splice(i,1);
            //            }
        }
    };
    /** Removes known references to assignments. Used when unloading vehicle schedules
     *  @param index activitySchedule index
     */
    ManageComponent.prototype.removeKnownReferences = function (index) {
        if (this.assignment_selected == null) {
            return;
        }
        // 1. Remove reference to assignment_selected if it was the one selected
        //        for(let ass of this.activitySchedule[index].assignments){
        //            if(ass.assignmentId == this.assignment_selected.assignmentId) {
        //                this.assignment_selected = null;
        //                break;
        //            }
        //        }
    };
    ManageComponent.prototype.isVehicleRemoved = function (id) {
        if (this.selectedUsersSimple.users[id] == null || this.selectedUsersSimple.users[id] == false) {
            return true;
        }
        return false;
    };
    ManageComponent.prototype.isVehiclePresent = function (id) {
        //        for(let vehi of this.activitySchedule) {
        //            if(vehi.vehicle.id == id) {
        //                return true;
        //            }
        //        }
        //        return false;
    };
    ManageComponent.prototype.moveRedBall = function (ev) {
        var f = document.getElementById('redBall');
        f.style.visibility = 'visible';
        f.style.transform = 'translateY(' + (ev.clientY - 25) + 'px)';
        f.style.transform += 'translateX(' + (ev.clientX - 25) + 'px)';
    };
    ManageComponent.prototype.centralizeActiveTab = function () {
        var tab = document.getElementById('redBall');
        var tabContainer = document.getElementById('redBall');
        var scrollTo = this.elementCoords(tab);
        tabContainer.scrollLeft = scrollTo.x - this.mightyParent.nativeElement.clientWidth;
        //        f.style.visibility = 'visible';
        //        f.style.transform = 'translateY('+(ev.clientY-25)+'px)';
        //        f.style.transform += 'translateX('+(ev.clientX-25)+'px)';
    };
    ManageComponent.prototype.installCallbacks = function () {
        if (this.scrollbarX != null) {
            this.renderer2.listen(this.scrollbarX.nativeElement, "scroll", this.scrollCallbackX);
        }
        if (this.scrollbarY != null) {
            this.renderer2.listen(this.scrollbarY.nativeElement, "scroll", this.scrollCallbackY);
        }
        if (this.mightyParent != null) {
            this.renderer2.listen(this.mightyParent.nativeElement, "mousewheel", this.mousewheelCallback);
        }
    };
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restoreProperties();
        this.scheduleComponent.pushHistory(-1);
        // set up event handlers
        this.renderer2.listen(this.scrollbarX.nativeElement, "scroll", this.scrollCallbackX);
        this.renderer2.listen(this.scrollbarY.nativeElement, "scroll", this.scrollCallbackY);
        this.renderer2.listen(this.mightyParent.nativeElement, "mousewheel", this.mousewheelCallback);
        this.renderer2.listen('window', 'resize', this.resizeCallback);
        var f = document.getElementById('foo');
        //this.renderer2.listen(document, 'dblclick', this.moveRedBall);
        //TODO Come up with a mechanism for paginating users
        this.userService._getUsers(0, 1000).then(function (users) {
            _this.drivers.length = 0;
            (_a = _this.drivers).splice.apply(_a, [0, 0].concat(users));
            var _a;
        });
        //        this.trailerService._getTrailers(0, 1000).then(trailers => {
        //            this.trailers.length = 0;
        //            this.trailers.splice(0,0,...trailers);
        //        });
        this.schedule2Service.addPeerSaveCallback(function (assignment) {
            assignment.assignmentId = assignment.id;
            assignment.startTime = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["a" /* TmDate */]();
            assignment.startTime.date.setTime(assignment.dateFrom - (assignment.startTime.date.getTimezoneOffset() * 60000));
            assignment.timeLength = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["b" /* TmLength */]();
            assignment.timeLength.seconds = (assignment.dateTo - assignment.dateFrom) / 1000;
            assignment.offsetLeft = Math.floor(((assignment.startTime.date.getTime() / 3600000) - _this.days[0].date.getTime() / 3600000) + 1) * (_this._hour_width * _this._scale_factor);
            //ass.offsetLeft = 40;
            assignment.width = ((assignment.timeLength.seconds) / 3600) * (_this._hour_width * _this._scale_factor);
            assignment = _this.pushAssignmentLocally(assignment);
        });
        this.schedule2Service.addPeerDeleteCallback(function (assignmentId) {
            _this.deleteAssignmentLocally(assignmentId);
        });
    };
    ManageComponent.prototype.ngAfterViewInit = function () {
        var date = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["a" /* TmDate */]();
        if (this._scheduleStartDate !== '') {
            date.setFromDate(this._scheduleStartDate + ' UTC');
        }
        //        this._scheduleStartDate = date.getShortDateWithYear();
        this.initView(date);
    };
    ManageComponent.prototype.peerSaveCallback = function (assignment) {
        //            assignment.assignmentId = assignment.id;
        //
        //            assignment.startTime = new TmDate();
        //            assignment.startTime.date.setTime(assignment.dateFrom-(assignment.startTime.date.getTimezoneOffset()*60000));
        //            assignment.timeLength = new TmLength();
        //            assignment.timeLength.seconds = (assignment.dateTo - assignment.dateFrom) / 1000;
        //            assignment.offsetLeft = Math.floor(((assignment.startTime.date.getTime()/3600000) - this.days[0].date.getTime()/3600000)+1) * (this._hour_width * this._scale_factor);
        //            //ass.offsetLeft = 40;
        //            assignment.width = ((assignment.timeLength.seconds) / 3600) * (this._hour_width * this._scale_factor);
        //            assignment.indicatePeerEdit = true;
        //            console.log("inidicatePeerEdit");
        //            setTimeout(() => assignment.indicatePeerEdit = false, 2000);
        //            this.pushAssignmentLocally(assignment);
    };
    ManageComponent.prototype.loadAssignments = function (startDate, timeLength, vehicleIds) {
        var _this = this;
        this.schedule2Service.fetchAssignments(startDate, timeLength, vehicleIds, function (assignments) {
            var vehicleIdMap = _this.array_flip(vehicleIds);
            for (var _i = 0, assignments_1 = assignments; _i < assignments_1.length; _i++) {
                var ass = assignments_1[_i];
                ass.assignmentId = ass.id;
                ass.startTime = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["a" /* TmDate */]();
                ass.startTime.date.setTime(ass.dateFrom);
                ass.timeLength = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["b" /* TmLength */]();
                ass.timeLength.seconds = (ass.dateTo - ass.dateFrom) / 1000;
                ass.offsetLeft = Math.floor(((ass.startTime.date.getTime() / 3600000) - _this.days[0].date.getTime() / 3600000)) * (_this._hour_width * _this._scale_factor);
                //ass.offsetLeft = 40;
                ass.width = (_this._hour_width * 24 * _this._scale_factor);
                _this.pushAssignmentLocally(ass);
                //this.registrarSchedule[vehicleIdMap[ass.assignmentActivities[0].vehicle.id]].assignments.push(ass);
                console.log(ass);
            }
            if (_this.assignment_selected != null) {
                _this.bubbleSort(_this.registrarSchedule[vehicleIdMap[_this.assignment_selected.assignmentActivities[0].activity.id]].assignments, 'offsetLeft');
            }
            _this.applyCustomScrollbars();
            setTimeout(function () { return _this.resizeAssignPanelTabs(); }, 0);
        });
    };
    ManageComponent.prototype.computeWidth = function (shift) {
        var width = this._hour_width * this._scale_factor;
        switch (shift) {
            case 'AM':
            case 'PM':
                width *= 12;
                break;
            case 'D':
                width *= 24;
                break;
        }
        return width;
    };
    ManageComponent.prototype.array_flip = function (array) {
        var key, tmp_ar = {};
        for (key in array) {
            if (array.hasOwnProperty(key)) {
                tmp_ar[array[key]] = key;
            }
        }
        return tmp_ar;
    };
    ManageComponent.prototype.getVehicleIdMapping = function (vehicleIds) {
        var map = [];
        var c = 0;
        for (var v in vehicleIds) {
            map[c] = v;
            c++;
        }
        return map;
    };
    ManageComponent.prototype.initView = function (date) {
        var _this = this;
        this._scheduleStartDate = date.get_ISO_8601_Date();
        this.currentMonth = date.getMonth() + " " + date.date.getFullYear();
        var hoursPerScreen = this.scrolledParent.nativeElement.clientWidth /
            (this._hour_width * this._scale_factor);
        var daysPerScreen = hoursPerScreen / 24;
        this.hours.length = Math.ceil(hoursPerScreen) * 2;
        this.days.length = 0;
        var day;
        for (var i = 0; i < this.hours.length; i++) {
            this.hours[i] = i % 24;
            if (this.hours[i] == 0) {
                day = date.fork();
                this.days.push(day);
                date.alterDate(+1);
            }
        }
        var vehicleIds = [];
        //        for(let id in this.selectedVehiclesSimple.vehicles) {
        //            if(this.selectedVehiclesSimple.vehicles[id] == true) {
        //                vehicleIds.push(id);
        //            }
        //        }
        var timeLength = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["b" /* TmLength */]();
        timeLength.seconds = this.hours.length * 3600;
        setTimeout(function () { return _this.loadAssignments(_this.days[0], timeLength, vehicleIds); }, 2000);
        this._scaleView();
        //        this.scrollbarX.nativeElement.scrollLeft = 300;
        //        this.scrolledParent.nativeElement.scrollLeft = this.scrollbarX.nativeElement.scrollLeft;
        //        this.timeHeader.nativeElement.scrollLeft = this.scrollbarX.nativeElement.scrollLeft;
    };
    ManageComponent.prototype.zoomIn = function () {
        if (this._scale_factor > 1.74) {
            return;
        }
        this._scale_factor += 0.15;
        console.log(this._scale_factor);
        this._scale_factor_percentage = Math.ceil(this._scale_factor * 100);
        this._scaleView();
    };
    ManageComponent.prototype.zoomOut = function () {
        if (this._scale_factor < 0.551) {
            return;
        }
        this._scale_factor -= 0.15;
        console.log(this._scale_factor);
        this._scale_factor_percentage = Math.ceil(this._scale_factor * 100);
        this._scaleView();
        //TODO check to see whether to allocate more time in the timeline (and load additioanl assignments)
    };
    ManageComponent.prototype.updateTimelineWidth = function () {
        var width = (this.hours.length * (this._hour_width * this._scale_factor));
        //width -= 80;
        this.scrolledWidget.nativeElement.style.width = width.toString() + "px";
        var timeContainers = document.querySelectorAll('.timeContainer');
        for (var i = 0; timeContainers[i]; i++) {
            timeContainers[i].style.width = width.toString() + "px";
        }
        var hoursCanvasses = document.querySelectorAll('.hour');
        for (var i = 0; hoursCanvasses[i]; i++) {
            var canvas = hoursCanvasses[i];
            canvas.setAttribute("width", width);
            canvas.setAttribute("height", this._hour_height);
            canvas.style.width = this.scrolledWidget.nativeElement.style.width;
            var context = canvas.getContext("2d");
            var step = this._hour_width * this._scale_factor;
            context.clearRect(0, 0, width, this._hour_height);
            for (var x = 0, i_1 = 0; x < width; x += step, i_1++) {
                if (i_1 % 24 == 0 && i_1 != 0) {
                    context.fillStyle = '#F1F1F1';
                    context.fillRect(x, 0, 2, this._hour_height);
                }
                // else {
                //     context.fillStyle = '#FBFBFB';
                //     context.fillRect(x, 0, 1, this._hour_height);
                // }
            }
        }
        this.scrollbarXDummyContent.nativeElement.style.width = width.toString() + "px";
        this.timeHeaderContent.nativeElement.style.width = (width + 100).toString() + "px";
    };
    ManageComponent.prototype._scaleView = function () {
        var _this = this;
        var styles = this.cssService.getStyle("^\\.hour.*");
        //let hour_width = parseInt(styles[0].style.getPropertyValue("width"));
        styles.forEach(function (rule) {
            rule.style.setProperty("width", (_this._hour_width * _this._scale_factor) + "px");
            rule.style.setProperty("height", (_this._hour_height * _this._scale_factor) + "px");
        });
        styles = this.cssService.getStyle("^\\.assignment\\[[^\\]]*\\]$");
        //let hour_width = parseInt(styles[0].style.getPropertyValue("width"));
        styles.forEach(function (rule) {
            rule.style.setProperty("height", (_this._hour_height * _this._scale_factor) + "px");
        });
        //styles[0].style.setProperty("border-radius", (this._assignment_border_radius*this._scale_factor)+"px");
        this.updateTimelineWidth();
        styles = this.cssService.getStyle("^\\.registrarHeaderItem.*");
        //let hour_width = parseInt(styles[0].style.getPropertyValue("width"));
        //styles[0].style.setProperty("width", (this._cell_width*this._scale_factor)+"px");
        styles.forEach(function (rule) {
            rule.style.setProperty("height", (_this._cell_height * _this._scale_factor) + "px");
        });
        if (this._scale_factor < 1) {
            styles.forEach(function (rule) {
                rule.style.setProperty('font-size', (_this._vehicle_header_font_dize * _this._scale_factor) + "px");
            });
        }
        //this.scaleCssProperty(styles[0].style, 'font-size', this._vehicle_header_font_dize, this._scale_factor);
        styles = this.cssService.getStyle("^\\.day\\[[^\\]]*\\]$");
        //let hour_width = parseInt(styles[0].style.getPropertyValue("width"));
        //styles[0].style.setProperty("width", (this._cell_width*this._scale_factor)+"px");
        styles.forEach(function (rule) {
            rule.style.setProperty("width", (_this._hour_width * 24 * _this._scale_factor) + "px");
            rule.style.setProperty("max-width", (_this._hour_width * 24 * _this._scale_factor) + "px");
            if (_this._scale_factor < 1) {
                rule.style.setProperty("padding", (_this._date_header_padding * _this._scale_factor) + "px");
                rule.style.setProperty("padding-top", _this._date_header_padding + "px");
                rule.style.setProperty("font-size", (_this._vehicle_header_font_dize * _this._scale_factor) + "px");
            }
        });
        styles = this.cssService.getStyle("^\\.startOfDay.*");
        //let hour_width = parseInt(styles[0].style.getPropertyValue("width"));
        styles.forEach(function (rule) {
            rule.style.setProperty("width", (_this._hour_width * _this._scale_factor) + "px");
            rule.style.setProperty("height", (_this._hour_height * _this._scale_factor) + "px");
        });
        styles = this.cssService.getStyle("^\\.timeContainer.*");
        styles.forEach(function (rule) {
            //let hour_width = parseInt(rule.style.getPropertyValue("width"));
            rule.style.setProperty("width", _this.scrolledWidget.nativeElement.style.width);
            rule.style.setProperty("height", (_this._hour_height * _this._scale_factor) + "px");
        });
        this.applyCustomScrollbars();
        this.applyMainWidgetsSizes();
        this._scaleAssignments();
    };
    ManageComponent.prototype.scaleCssProperty = function (style, property, scaleFactor) {
        var value = style.getPropertyValue(property);
        value = (value && value.length > 0) ? parseInt(value) : 0;
        var regex = new RegExp('([^0-9].*)');
        var match = regex.exec(value);
        var suffix = match ? match[1] : 'px';
        style.setProperty(property, (value * scaleFactor) + suffix);
    };
    ManageComponent.prototype.applyCustomScrollbars = function () {
        // Positioning some things programatically. This is needed because we have elements
        // with no "analog connection" between them
        this.scrollbarX.nativeElement.style.left = this.registrarHeader.nativeElement.clientWidth;
        var scrollbarXWidth = (this.mightyParent.nativeElement.clientWidth - this.registrarHeader.nativeElement.clientWidth - 120) - this.scrollbarYWidth;
        this.scrollbarX.nativeElement.style.width = scrollbarXWidth + "px";
        this.scrollbarY.nativeElement.style.height =
            (this.mightyParent.nativeElement.clientHeight - this.registrarHeader.nativeElement.clientHeight) + "px";
        this.scrollbarYDummyContent.nativeElement.style.height = (this.scrolledWidget.nativeElement.clientHeight) + "px";
        this.scrolledParent.nativeElement.style.height = this.scrollbarY.nativeElement.style.height;
        //this.activityHeaderContainerViewPort.nativeElement.style.height = this.scrollbarY.nativeElement.style.height;
        this.registrarHeaderContainer.nativeElement.style.height = this.scrollbarY.nativeElement.style.height;
    };
    ManageComponent.prototype.applyMainWidgetsSizes = function () {
        var vpHeight = window.innerHeight;
        var timelineBox = this.elementCoords(this.mightyParent.nativeElement);
        var createdBy = document.querySelectorAll('.createdBy');
        var createdByBox = this.elementCoords(createdBy[0]);
        var preHeight = (vpHeight - timelineBox.y) - createdByBox.height; //precalculated height.
        preHeight -= 60;
        if (this.assignment_selected) {
            preHeight -= 200;
        }
        if (vpHeight > 932) {
            preHeight -= 80;
        }
        this.mightyParent.nativeElement.style.height = Math.floor(preHeight) + "px";
        //preHeight -= 100;
        var driverContainerHeight = ((preHeight - 50) / 2);
        this.resizeAssignPanelTabs();
    };
    ManageComponent.prototype.resizeAssignPanelTabs = function () {
        var assignPanelHeader = document.querySelector("#AssignPanelHeader");
        if (assignPanelHeader != null) {
            //assignPanelHeader.style.width = (this.mightyParent.nativeElement.clientWidth) + "px";
        }
        var assignPanelTabs = document.querySelector("#AssignPanelTabs");
        if (assignPanelTabs != null) {
            var actualTabs = document.querySelectorAll("#AssignPanelTabs > div");
            var totalWidth = 0;
            for (var _i = 0, actualTabs_1 = actualTabs; _i < actualTabs_1.length; _i++) {
                var tab = actualTabs_1[_i];
                totalWidth += tab.offsetWidth + 16;
            }
            assignPanelTabs.style.width = totalWidth + "px";
        }
    };
    ManageComponent.prototype.assignPanelTabsMouseWheelCallback = function (event) {
        var assignPanelTabs = document.querySelector("#AssignPanelTabs");
        if (assignPanelTabs != null) {
            assignPanelTabs.scrollLeft += event.deltaY;
        }
        //console.log(event.deltaY);
    };
    ManageComponent.prototype._scaleAssignments = function () {
        for (var _i = 0, _a = this.registrarSchedule; _i < _a.length; _i++) {
            var schedule = _a[_i];
            for (var _b = 0, _c = schedule.assignments; _b < _c.length; _b++) {
                var assignment = _c[_b];
                assignment.offsetLeft = Math.floor(((assignment.startTime.date.getTime() / 3600000) - this.days[0].date.getTime() / 3600000) + 1) * (this._hour_width * this._scale_factor);
                //ass.offsetLeft = 40;
                assignment.width = ((assignment.timeLength.seconds) / 3600) * (this._hour_width * this._scale_factor);
            }
        }
    };
    ManageComponent.prototype.closeContextMenu = function () {
        this.contextmenu_struct.visible = false;
        //let menu = document.querySelector("#contextMenu") as any;
        //menu.style.display = 'none';
    };
    ManageComponent.prototype.reevaluateCurrentMonth = function () {
        var scrollLeft = this.scrolledParent.nativeElement.scrollLeft;
        var daysOffset = Math.floor(scrollLeft / ((this._hour_width * this._scale_factor) * 24));
        this.currentMonth = this.days[daysOffset].getMonth() + " " + this.days[daysOffset].date.getFullYear();
    };
    ManageComponent.prototype.ngOnDestroy = function () {
        this.storeProperties();
    };
    ManageComponent.prototype.storeProperties = function () {
        //this.localStorageService.set(this.constructor.name+'.selectedVehiclesSimple', this.selectedVehiclesSimple);
        //        let selectedVehiclesOrdered: any[] = [];
        //        for(let schdl of this.registrarSchedule) {
        //            selectedVehiclesOrdered.push(schdl.vehicle);
        //        }
        //        this.localStorageService.set(this.constructor.name+'.selectedVehiclesOrdered', selectedVehiclesOrdered);
        //   this.localStorageService.set(this.constructor.name+'.pageSize', this.paginator.pageSize);
        if (typeof (this._scheduleStartDate) != 'string') {
            //var regexp = new RegExp('(\\d\\d).(\\d\\d).(\\d\\d\\d\\d)');
            //var match = regexp.exec(this._scheduleStartDate);
            //let date.setUTCDate(+match[1]);
            //let date.setUTCMonth(+match[2]);
            //let date.setUTCFullYear(+match[3]);
            //let
            var year = this._scheduleStartDate.getFullYear();
            var date = this._scheduleStartDate.getDate();
            var month = this._scheduleStartDate.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            this._scheduleStartDate = year + "/" + month + "/" + date;
        }
        this.localStorageService.set(this.constructor.name + '._scheduleStartDate', this._scheduleStartDate);
        this.localStorageService.set(this.constructor.name + '._scale_factor', this._scale_factor);
        this.localStorageService.set(this.constructor.name + '._scale_factor_percentage', this._scale_factor_percentage);
    };
    ManageComponent.prototype.selectAllVehicles = function () {
        var _this = this;
        var grades = [];
        for (var g in __WEBPACK_IMPORTED_MODULE_10__model_user__["a" /* Grade */]) {
            if (g != 'Consultant') {
                grades.push(g);
            }
        }
        this.userService._getUsers(0, 1000000, grades).then(function (result) {
            var counter = 0;
            _this.selectedUsersSimple = { total: 0, users: [] };
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var registrar = result_1[_i];
                //for(let vehicle of result.vehicleList) {
                _this.registrarSchedule.push({ registrar: registrar, assignments: [] });
                _this.selectedUsersSimple.users[registrar.id] = true;
                counter++;
            }
            _this.selectedUsersSimple.total = counter;
            //window.location.reload(false); //quick and dirty: reload the page in order to initialize it correctly
            setTimeout(function () { return _this.updateTimelineWidth(); }, 0);
        });
    };
    ManageComponent.prototype.restoreProperties = function () {
        this.selectAllVehicles();
        //        let selectedVehiclesSimple = <any>this.localStorageService.get(this.constructor.name+'.selectedVehiclesSimple');
        //        if(selectedVehiclesSimple != null) {
        //            //this.selectedVehiclesSimple.vehicles.length = 0;
        //            this.selectedVehiclesSimple = selectedVehiclesSimple;
        //        }
        //        else {
        //        }
        //        let selectedVehiclesOrdered = <any>this.localStorageService.get(this.constructor.name+'.selectedVehiclesOrdered');
        //        if (selectedVehiclesOrdered != null) {
        //            this.registrarSchedule.length = 0;
        //            for(let vehicle of selectedVehiclesOrdered) {
        //                this.registrarSchedule.push({vehicle: vehicle, assignments: []});
        //            }
        //        }
        //   let pageSize = <number>this.localStorageService.get(this.constructor.name+'.pageSize');
        //   if(pageSize != null) {
        //         this.paginator.pageSize = pageSize;
        //   }
        var _scheduleStartDate = this.localStorageService.get(this.constructor.name + '._scheduleStartDate');
        if (_scheduleStartDate != null && Date.parse(_scheduleStartDate)) {
            this._scheduleStartDate = _scheduleStartDate;
        }
        var _scale_factor = this.localStorageService.get(this.constructor.name + '._scale_factor');
        if (_scale_factor != null) {
            this._scale_factor = _scale_factor;
        }
        var _scale_factor_percentage = this.localStorageService.get(this.constructor.name + '._scale_factor_percentage');
        if (_scale_factor_percentage != null) {
            this._scale_factor_percentage = _scale_factor_percentage;
        }
    };
    // ngOnDestroy will be only called if the user navigates to a different route. If she just closes
    // the document destructor will not be called. Here we cover closing document.
    ManageComponent.prototype.beforeUnloadHander = function (event) {
        this.ngOnDestroy();
    };
    ManageComponent.prototype.onClickHostHandler = function (event) {
        //  if(this.onClickAssignment_ignore == false){
        //    //this.assignment_selected = null;
        //    console.log("this.assignment_selected = null;");
        //  }
        //  this.onClickAssignment_ignore = false;
    };
    ManageComponent.prototype.openSelectVehicleDialog = function () {
        //        console.log(this.selectedVehiclesSimple);
        //        this.dialog.open(SelectVehicleComponent, {
        //            data: {
        //                selected_vehicles: this.selectedVehiclesSimple
        //            }
        //        });
    };
    //  @HostListener('mousewheel', ['$event'])
    //     scroll(event: MouseEvent) {
    //         //this.renderer.selectRootElement(this.scrolledWidget).nativeElement.scroll(10, 0);
    //         this.scrolledParent.nativeElement.scrollLeft = 30;
    //         console.log(this.scrolledParent.nativeElement.scrollLeft);
    //         return false;
    //         // let wheelDelta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    //         // if(wheelDelta > 0) {
    //         //   factor = 0.5;
    //         // }else {
    //         //  factor = 2.0;
    //         // }
    //         // this.initPointX = event.PageX;
    //         // this.initPointY = event.PageY;
    //     }
    ManageComponent.prototype.onDragDriver = function (ev) {
        var dataTransfer = { id: ev.target.dataset.driverid, entityType: 'driver' };
        ev.dataTransfer.setData("text/json", JSON.stringify(dataTransfer));
        //(<any>ev.target).style.visibility = 'hidden';
        //(<any>ev.target).style.transform = 'translateX(-9999px)';
        ev.dataTransfer.effectAllowed = "copy";
        //console.log("drag");
        var elementCoords = this.elementCoords(ev.target);
        this._dnd_t_offset_x = ev.clientX - elementCoords.x;
        this._dnd_t_offset_y = ev.clientY - elementCoords.y;
        this._dnd_element = ev.target;
    };
    ManageComponent.prototype.onDragTrailer = function (ev) {
        var dataTransfer = { id: ev.target.dataset.trailerid, entityType: 'trailer' };
        ev.dataTransfer.setData("text/json", JSON.stringify(dataTransfer));
        //(<any>ev.target).style.visibility = 'hidden';
        //(<any>ev.target).style.transform = 'translateX(-9999px)';
        ev.dataTransfer.effectAllowed = "copy";
        console.log("onDragTrailer: " + ev.target.dataset.trailerid);
        var elementCoords = this.elementCoords(ev.target);
        this._dnd_t_offset_x = ev.clientX - elementCoords.x;
        this._dnd_t_offset_y = ev.clientY - elementCoords.y;
        this._dnd_element = ev.target;
    };
    ManageComponent.prototype.onDragAssignment = function (ev) {
        ev.dataTransfer.setData("text/json", JSON.stringify({ id: ev.target.dataset.assignmentid }));
        //(<any>ev.target).style.visibility = 'hidden';
        //(<any>ev.target).style.transform = 'translateX(-9999px)';
        ev.dataTransfer.effectAllowed = "move";
        //console.log("drag");
        var elementCoords = this.elementCoords(ev.target);
        this._dnd_t_offset_x = ev.clientX - elementCoords.x;
        this._dnd_t_offset_y = ev.clientY - elementCoords.y;
        this._dnd_element = ev.target;
    };
    ManageComponent.prototype.onDragDriverEnd = function (ev) {
        //(<any>ev.target).style.visibility = 'visible';
        //(<any>ev.target).style.transform = 'translateX(0px)';
        this._dnd_t_offset_x = 0;
        this._dnd_t_offset_y = 0;
        this._dnd_element = null;
    };
    ManageComponent.prototype.onDragOver = function (ev) {
        ev.preventDefault();
    };
    ManageComponent.prototype.removeUserFromAssignment = function (assignmentUserId) {
        console.log('removeUserFromAssignment: ' + assignmentUserId);
        var index = null;
        var c = 0;
        for (var _i = 0, _a = this.assignment_selected.assignmentEmployees; _i < _a.length; _i++) {
            var assignmentShift = _a[_i];
            if (assignmentShift.id == assignmentUserId) {
                index = c;
                break;
            }
            c++;
        }
        if (index != null) {
            this.assignment_selected.assignmentEmployees.splice(index, 1);
        }
        this.saveAssignment(this.assignment_selected);
    };
    ManageComponent.prototype.deleteAssignmentUI = function (assignmentId) {
        //        this.dialog.open(ConfirmAssignmentEraseComponent, {
        //            data: {
        //                assignmentId: assignmentId,
        //                yesCallback: () => {
        //                    this.deleteAssignment(assignmentId);
        //                },
        //            }
        //        });
    };
    ManageComponent.prototype.deleteAssignmentLocally = function (assignmentId) {
        var vi = null;
        var ai = null;
        var vc = 0;
        var ac = 0;
        SEEK_ASSIGNMENT: for (var _i = 0, _a = this.registrarSchedule; _i < _a.length; _i++) {
            var vehicle = _a[_i];
            for (var _b = 0, _c = vehicle.assignments; _b < _c.length; _b++) {
                var ass = _c[_b];
                if (ass.assignmentId == assignmentId) {
                    vi = vc;
                    ai = ac;
                    break SEEK_ASSIGNMENT;
                }
                ac++;
            }
            vc++;
            ac = 0;
        }
        if (vi != null && ai != null) {
            this.registrarSchedule[vi].assignments.splice(ai, 1);
            this.assignment_selected = null;
        }
    };
    ManageComponent.prototype.deleteAssignment = function (assignmentId) {
        var _this = this;
        this.schedule2Service.deleteAssignment(assignmentId, function () {
            _this.deleteAssignmentLocally(assignmentId);
        });
    };
    ManageComponent.prototype.selectAssignment = function (assignmentId) {
        // if(this.assignment_selected != null) {
        //     let exSelected = document.querySelector("#assignment"+this.assignment_selected.assignmentId);
        //     exSelected.classList.remove("assignmentSelected");
        // }
        // let selected = document.querySelector("#assignment"+assignmentId);
        // selected.classList.add("assignmentSelected");
        //this.applyMainWidgetsSizes();
        this.assignment_selected = this.getAssignment(assignmentId);
        //this.assignment_selected = index;
        console.log(this.assignment_selected);
        //this.assignment_selected.z_index = ++this.reached_z_index;
        //this.onClickAssignment_ignore = true;
        //this.calculateOverlappedAssignments();
        //this._periodForm_from = this.assignment_selected.startTime.getShortDateWithYear();
        //this._periodForm_to = this.assignment_selected.startTime.plusLength(this.assignment_selected.timeLength).getShortDateWithYear();
        //for(let index in this.periodFormFields.controls) {
        //    this.periodFormFields.controls[index].disable();
        // }
        // setTimeout(() => {
        //     let assignPanelDetails = document.querySelector(".assignPanelDetails");
        //     this.renderer2.listen(assignPanelDetails, "scroll", this.assignPanelDetailsScrollCallback);
        //     setTimeout(() => this.centralizeActiveTab(), 0);
        //     setTimeout(() => this._scaleView(), 0);
        // }, 0);
        //this.periodFormFields.setValue({dateFrom: this.assignment_selected.startTime.getShortDateWithYear(),
        //    dateTo:this.assignment_selected.startTime.plusLength(this.assignment_selected.timeLength).getShortDateWithYear()});
        //this.applyMainWidgetsSizes();
    };
    ManageComponent.prototype.bubbleSort = function (array, property) {
        for (var i = (array.length - 1); i >= 0; i--) {
            for (var j = 1; j <= i; j++) {
                if (array[j - 1][property] > array[j][property]) {
                    var tmp = array[j - 1];
                    array[j - 1] = array[j];
                    array[j] = tmp;
                }
            }
        }
    };
    ManageComponent.prototype.getMouseClickTarget = function (ev) {
        var schedules = document.querySelectorAll(".timeContainer");
        var schedule;
        for (var _i = 0, schedules_1 = schedules; _i < schedules_1.length; _i++) {
            var sch = schedules_1[_i];
            var box = sch.getBoundingClientRect();
            if (box.top < ev.clientY && box.height + box.top > ev.clientY) {
                schedule = sch;
                break;
            }
        }
        if (schedule == null) {
            return ev.target;
        }
        var overlapped = [];
        for (var _a = 0, _b = this.registrarSchedule[schedule.dataset.index].assignments; _a < _b.length; _a++) {
            var ass = _b[_a];
            var scrolledParentBox = this.scrolledParent.nativeElement.getBoundingClientRect();
            var assignmentX = (ass.offsetLeft - this.scrollbarX.nativeElement.scrollLeft) + scrolledParentBox.left;
            if (ev.clientX > assignmentX && ev.clientX < assignmentX + ass.width) {
                overlapped.push(__assign({}, ass, { cursorProximity: ev.clientX - assignmentX }));
            }
        }
        this.bubbleSort(overlapped, 'cursorProximity');
        var target = document.querySelector("#assignment" + overlapped[0].assignmentId);
        if (this.assignment_selected != null) {
            if (this.assignment_selected.assignmentId == overlapped[0].assignmentId &&
                overlapped[1] != null) {
                target = document.querySelector("#assignment" + overlapped[1].assignmentId);
            }
        }
        return target;
    };
    ManageComponent.prototype.assignShift = function (event, shift) {
        var target = event.currentTarget;
        if (!target.classList.contains('disabled')) {
            if (this.assignment_selected) {
                this.assignment_selected.shift = shift;
                this.schedule2Service.saveAssignment(this.assignment_selected, function () { });
            }
            else {
                var assignment = {
                    assignmentId: 0,
                    startTime: this.contextmenu_struct.userData.startTime,
                    shift: shift,
                    assignmentEmployees: [{ id: 0, employee: { id: this.contextmenu_struct.userData.userId } }],
                    timeLength: this.contextmenu_struct.userData.timeLength,
                    offsetLeft: this.contextmenu_struct.userData.left,
                    width: (this._hour_width * this._scale_factor) * 24,
                };
                this.saveAssignment(assignment);
            }
        }
        this.closeContextMenu();
        //let contextMenu = document.querySelector("#contextMenu") as any;
        //contextMenu.style.display = 'none';
    };
    ManageComponent.prototype.revealContextMenu = function (ev, context, userData) {
        var targetCoords = this.elementCoords(ev.target);
        this.contextmenu_struct.top = ev.clientY;
        this.contextmenu_struct.left = ev.clientX;
        this.contextmenu_struct.visible = true;
        if (context == 'assignment') {
            this.assignment_selected = this.getAssignment(userData.id);
            var shifts = void 0;
            if (this.assignment_selected.startTime.date.getUTCDay() == 0 || this.assignment_selected.startTime.date.getUTCDay() == 6) {
                shifts = [
                    { label: 'OC' },
                    { label: 'Night' },
                    { label: 'Unset', disabled: false },
                    { label: 'OFF' },
                    { label: 'OffNight' },
                    { label: 'OffLate' },
                ];
            }
            else {
                shifts = [
                    { label: 'Late' },
                    { label: 'Night' },
                    { label: 'Unset', disabled: false },
                    { label: 'OFF' },
                    { label: 'OffNight' },
                    { label: 'OffLate' },
                ];
            }
            if (!this.contextmenu_struct.userData) {
                this.contextmenu_struct.userData = {};
            }
            this.contextmenu_struct.userData.shifts = shifts;
        }
        else if (context == 'timeline') {
            this.assignment_selected = null;
            var eventCoordinates = this.alignAssignment(ev.clientX - targetCoords.x, 'day');
            var startTime = this.computeStartTime(eventCoordinates);
            var shifts = void 0;
            if (startTime.date.getUTCDay() == 0 || startTime.date.getUTCDay() == 6) {
                shifts = [
                    { label: 'OC' },
                    { label: 'Night' },
                    { label: 'Unset', disabled: false },
                    { label: 'OFF' },
                    { label: 'OffNight' },
                    { label: 'OffLate' },
                ];
            }
            else {
                shifts = [
                    { label: 'Late' },
                    { label: 'Night' },
                    { label: 'Unset', disabled: false },
                    { label: 'OFF' },
                    { label: 'OffNight' },
                    { label: 'OffLate' },
                ];
            }
            var timeLength = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["b" /* TmLength */]();
            timeLength.seconds = 24 * 3600;
            this.contextmenu_struct.userData = {
                left: eventCoordinates,
                startTime: startTime,
                userId: userData,
                timeLength: timeLength,
                shifts: shifts,
            };
        }
        ev.preventDefault();
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        return false;
    };
    ManageComponent.prototype.onClickAssignment = function (ev, assignment) {
        //let target = this.getMouseClickTarget(ev) as any;
        var target = ev.target;
        if (ev.shiftKey != true) {
            // if(this.assignment_selected != null) {
            //     this.assignment_selected.z_index = 0;
            // }
            //ev.preventDefault();
            this.selectAssignment(target.dataset.assignmentid);
            this.contextmenu_struct.visible = true;
            ev.preventDefault();
            ev.stopImmediatePropagation();
            ev.stopPropagation();
            return false;
        }
        ev.preventDefault();
        this._resize_target = target;
        var elementCoords = this.elementCoords(this._resize_target);
        var targetLeftOffset = target.offsetLeft;
        var relX = event.clientX - elementCoords.x;
        //this._resize_target.style.width = relX;
        if (relX < 30) {
            this._resize_side = 'left';
        }
        else if (relX > (this._resize_target.offsetWidth - 30)) {
            this._resize_side = 'right';
        }
        else {
            this._resize_side = 'center';
            this._dnd_t_offset_x = ev.clientX - elementCoords.x;
        }
        this.scrollbarX.nativeElement.scrollLeft =
            (this.assignment_selected.offsetLeft - (this.mightyParent.nativeElement.clientWidth / 2));
    };
    ManageComponent.prototype.calculateOverlappedAssignments = function () {
        //let scheduleIndex = -1;
        for (var i in this.registrarSchedule) {
            if (this.registrarSchedule[i].registrar.id == this.assignment_selected.assignmentEmployees[0].employee.id) {
                this.scheduleIndex = parseInt(i);
                break;
            }
        }
        this.bubbleSort(this.registrarSchedule[this.scheduleIndex].assignments, 'offsetLeft');
        //        this.assignments_overlapped.length = 0;
        //        if(scheduleIndex > -1) {
        //            for(let ass of this.registrarSchedule[scheduleIndex].assignments) {
        //                if((ass.startTime.isGreaterOrEqual(this.assignment_selected.startTime) ||
        //                    ass.startTime.plusLength(ass.timeLength).isGreaterOrEqual(this.assignment_selected.startTime)) &&
        //                    (ass.startTime.isLessOrEqual(this.assignment_selected.startTime.plusLength(this.assignment_selected.timeLength)) ||
        //                        ass.startTime.plusLength(ass.timeLength).isLessOrEqual(this.assignment_selected.startTime.plusLength(this.assignment_selected.timeLength)))){
        //                    this.assignments_overlapped.push(ass);
        //                }
        //            }
        //        }
    };
    ManageComponent.prototype.switchAssignPanelTab = function (assignmentId) {
        this.selectAssignment(assignmentId);
    };
    ManageComponent.prototype.onMouseUp = function (event) {
        //this.schedule1Service.updateAssignment();
        //let assignmentId = this._resize_target.dataset.assignmentId;
        this.applyAssingmentTransformation(this._resize_target);
        this._resize_target = null;
        this._resize_side = '';
        this._dnd_t_offset_x = 0;
    };
    /** Applies assignment transformation (moving along vehicle's timeline, changing
     * assignment's period (visual element size).
     *
     * @param HTMLElement assignment element
     * @return void
     */
    ManageComponent.prototype.applyAssingmentTransformation = function (target) {
        if (target == null) {
            return;
        }
        var assignmentId = target.dataset.assignmentid;
        var startTime = this.computeStartTime(target.offsetLeft);
        var timeLength = this.computeTimeLength(parseInt(target.style.width));
        console.log('updateAssignment: ' + assignmentId);
        var assignment = this.getAssignment(assignmentId);
        assignment.startTime = startTime;
        assignment.timeLength = timeLength;
        assignment.width = parseInt(target.style.width);
        assignment.offsetLeft = parseInt(target.offsetLeft);
        this.schedule2Service.saveAssignment(assignment, function () { });
    };
    ManageComponent.prototype.getAssignment = function (assignmentId) {
        for (var _i = 0, _a = this.registrarSchedule; _i < _a.length; _i++) {
            var v = _a[_i];
            for (var _b = 0, _c = v.assignments; _b < _c.length; _b++) {
                var a = _c[_b];
                if (a.assignmentId == assignmentId) {
                    return a;
                }
            }
        }
        return null;
    };
    ManageComponent.prototype.onMouseMove = function (event) {
        if (this._resize_target != null) {
            if (this._resize_side == 'right') {
                var elementCoords = this.elementCoords(this._resize_target);
                var relX = this.alignAssignment(event.clientX - elementCoords.x, 'hour');
                var width = this.alignAssignment(relX, "meridiem_ceil");
                var maxWidth = this.computeWidth("D");
                width = maxWidth > width ? width : maxWidth;
                if (width > 0) {
                    this._resize_target.style.width = width + "px";
                }
                console.log("resize; " + relX);
            }
            else if (this._resize_side == 'left') {
                var elementCoords = this.elementCoords(this.scrolledWidget.nativeElement);
                //let relX = (<any>event).clientX-elementCoords.x;
                var relX = this.alignAssignment(event.clientX - elementCoords.x, 'hour');
                var growth = parseInt(this._resize_target.style.left) - Math.ceil(relX);
                var width = this._resize_target.offsetWidth + growth;
                var maxWidth = this.computeWidth("D");
                width = maxWidth > width ? width : maxWidth;
                if (width > 0) {
                    this._resize_target.style.width = this.alignAssignment(width, "meridiem_ceil") + "px";
                }
                this._resize_target.style.left = this.alignAssignment(relX, "meridiem_ceil") + "px";
            }
            else if (this._resize_side == 'center') {
                var elementCoords = this.elementCoords(this.scrolledWidget.nativeElement);
                //let relX = (<any>event).clientX-elementCoords.x;
                var relX = this.alignAssignment(event.clientX - elementCoords.x, 'hour');
                console.log('clientX:' + event.clientX + ' ' + relX);
                var growth = parseInt(this._resize_target.style.left) - event.clientX;
                var width = this._resize_target.offsetWidth + growth;
                var maxWidth = this.computeWidth("D");
                width = maxWidth > width ? width : maxWidth;
                console.log("offsetWidth:" + this._resize_target.offsetWidth + " growth:" + growth);
                console.log('width: ' + this._resize_target.style.width);
                //this._resize_target.style.left = Math.ceil(relX)+"px";
                var assignment = this.getAssignment(this._resize_target.dataset.assignmentid);
                if (assignment.shift == 'D') {
                    this._resize_target.style.left = this.alignAssignment(((relX) - this._dnd_t_offset_x), "day") + "px";
                }
                else {
                    this._resize_target.style.left = this.alignAssignment(((relX) - this._dnd_t_offset_x), "meridiem") + "px";
                }
                console.log("style.left; " + this._resize_target.style.left + "; ");
            }
        }
    };
    ManageComponent.prototype.elementCoords = function (node) {
        //let node = <any>event.target;
        if (node.getBoundingClientRect) {
            var rect = node.getBoundingClientRect();
            var sx = -(window.scrollX ? window.scrollX : window.pageXOffset);
            var sy = -(window.scrollY ? window.scrollY : window.pageYOffset);
            return {
                x: rect.left - sx,
                y: rect.top - sy,
                width: rect.width,
                height: rect.height,
            };
        }
    };
    ManageComponent.prototype.elementCoordsDocument = function (node) {
        //let node = <any>event.target;
        if (node.getBoundingClientRect) {
            var rect = node.getBoundingClientRect();
            var sx = -(window.scrollX ? window.scrollX : window.pageXOffset);
            var sy = -(window.scrollY ? window.scrollY : window.pageYOffset);
            sx -= this.scrolledParent.nativeElement.scrollLeft;
            sy -= this.scrolledParent.nativeElement.scrollTop;
            return {
                x: rect.left - sx,
                y: rect.top - sy
            };
        }
    };
    ManageComponent.prototype.computeStartTime = function (offsetLeft) {
        var offsetHours = offsetLeft / (this._scale_factor * this._hour_width);
        var startTime = this.days[0].fork();
        startTime.date.setMilliseconds(startTime.date.getMilliseconds() + (offsetHours * 3600000));
        return startTime;
    };
    ManageComponent.prototype.computeTimeLength = function (width) {
        var hours = width / (this._scale_factor * this._hour_width);
        var tmLength = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["b" /* TmLength */]();
        tmLength.setHours(hours);
        return tmLength;
    };
    ManageComponent.prototype.onDropDriver = function (ev, add) {
        var target = null;
        if (ev.target == this._dnd_element) {
            target = ev.target.parentNode;
        }
        else {
            target = ev.target;
        }
        /** id is either userId (if user is being dragged from the driver list) or assignmentid
         *  (if the driver id being dragged form the timeline)
         */
        var dataTransfer = JSON.parse(ev.dataTransfer.getData("text/json"));
        var id = dataTransfer.id;
        var entityType = dataTransfer.entityType;
        //let entityType = ev.dataTransfer.getData("text/plain");
        var vehicleId = target.dataset.vehicleid;
        var targetVehicle = target;
        if (vehicleId == null) {
            do {
                targetVehicle = targetVehicle.parentNode;
                vehicleId = targetVehicle.dataset.vehicleid;
            } while (vehicleId == null);
        }
        //let element = this.document.querySelector('#driver-23');
        //target.appendChild(element);
        var elementCoords = this.elementCoords(targetVehicle);
        var targetCoords = ((ev.clientX - elementCoords.x) - (target.style.width) - this._dnd_t_offset_x) + "px";
        var eventCoordinates = this.alignAssignment(ev.clientX - elementCoords.x - this._dnd_t_offset_x, 'hour');
        console.log(eventCoordinates);
        //let fetch_
        if (ev.dataTransfer.effectAllowed == 'copy') {
            if (add == false) {
                if (entityType != null && entityType == 'trailer') {
                    //                    let fetch_trailer = Observable.fromPromise(this.trailerService.getTrailer(id));
                    //                    let fetch_vehicle = Observable.fromPromise(this.vehicleService.getVehicle(vehicleId));
                    //
                    //                    Observable.zip(fetch_trailer, fetch_vehicle).subscribe((params:any[]) => {
                    //                        let trailer: AssignmentTrailer = {id: 0, trailer:params[0]};
                    //                        let vehicle: AssignmentVehicle = {id: 0, vehicle:params[1]};
                    //                        let width = (this._hour_width * this._scale_factor) * 24;
                    //                        let startTime = this.computeStartTime(eventCoordinates);
                    //                        let timeLength = this.computeTimeLength(width);
                    //
                    //                        let assignment: Assignment = {
                    //                            assignmentId: 0,
                    //                            assignmentTrailers: [trailer],
                    //                            assignmentEmployees: [],
                    //                            assignmentActivities: [vehicle],
                    //                            startTime: startTime,
                    //                            timeLength: timeLength,
                    //                            offsetLeft: eventCoordinates,
                    //                            width: width,
                    //                            z_index: ++this.reached_z_index,
                    //                        };
                    //
                    //                        this.saveAssignment(assignment);
                    //})
                }
                else {
                    //let fetch_user = Observable.fromPromise(this.userService.getUser(id));
                    //let fetch_vehicle = Observable.fromPromise(this.vehicleService.getVehicle(vehicleId));
                    //Observable.zip(fetch_user, fetch_vehicle).subscribe((params:any[]) => {
                    //                    let user: AssignmentShift;
                    //                    for(let driver of this.drivers) {
                    //                        if(driver.id == id) {
                    //                            user = {id: 0, user:driver};
                    //                            break;
                    //                        }
                    //                    }
                    //                    let vehicle: AssignmentVehicle;
                    //                    for(let schedule of this.registrarSchedule) {
                    //                        if(schedule.vehicle.id == vehicleId) {
                    //                            vehicle = {id: 0, vehicle: schedule.vehicle};
                    //                        }
                    //                    }
                    //                    if(vehicle != undefined && user != undefined) {
                    //                        let width = (this._hour_width * this._scale_factor) * 24;
                    //                        let startTime = this.computeStartTime(eventCoordinates);
                    //                        let timeLength = this.computeTimeLength(width);
                    //
                    //                        let assignment: Assignment = {
                    //                            assignmentId: 0,
                    //                            assignmentTrailers: [],
                    //                            assignmentEmployees: [user],
                    //                            assignmentActivities: [vehicle],
                    //                            startTime: startTime,
                    //                            timeLength: timeLength,
                    //                            offsetLeft: eventCoordinates,
                    //                            width: width,
                    //                            z_index: ++this.reached_z_index,
                    //                        };
                    //
                    //                        this.saveAssignment(assignment);
                    //                    }
                }
            }
            else {
                // it is possible that event's target may not be the assignment
                // so we need to take this into account and find the assignment
                // element
                if (target.dataset.assignmentid == null) {
                    do {
                        target = target.parentNode;
                    } while (target.dataset.assignmentid == null);
                }
                if (entityType != null && entityType == 'trailer') {
                    //this.addTrailerToAssignment(id, target.dataset.assignmentid);
                }
                else {
                    this.addUserToAssignment(id, target.dataset.assignmentid);
                }
            }
        }
        else if (ev.dataTransfer.effectAllowed == 'move') {
            this.moveAssignment(id, vehicleId, eventCoordinates);
        }
        ev.preventDefault();
        ev.stopPropagation();
        return false;
    };
    ManageComponent.prototype.addUserToAssignment = function (id, assignmentid) {
        //        if(typeof(id) == 'string') {
        //            id = parseInt(id);
        //        }
        //        this.userService.getUser(id).then(user => {
        //            if(typeof(assignmentid) == 'string') {
        //                assignmentid = parseInt(assignmentid);
        //            }
        //
        //            let assignment = this.getAssignment(assignmentid);
        //            let isPresent: boolean = false;
        //            for(let assUser of assignment.assignmentEmployees) {
        //                if(assUser.user.id == id){
        //                    isPresent = true;
        //                    break;
        //                }
        //            }
        //            if(!isPresent) {
        //                assignment.assignmentEmployees.push({id:0, user: user});
        //                this.saveAssignment(assignment);
        //            }
        //        });
    };
    //public createAssignment(assignment: Assignment) {
    //    this.schedule1Service.saveAssignment(assignment, (assignmentList: any) => {
    //        this.updateAssignmentLocally(assignment, assignmentList[0]);
    //        this.pushAssignmentLocally(assignment);
    //    });
    //}
    ManageComponent.prototype.saveAssignment = function (assignment) {
        var _this = this;
        this.schedule2Service.saveAssignment(assignment, function (incoming) {
            //assignment.previousAssignmentVehicle = null; // we do not need previous assignment vehicle any more
            // as we have already sent it to the backend
            _this.updateAssignmentLocally(assignment, incoming.assignmentList[0]);
            _this.pushAssignmentLocally(assignment);
        });
    };
    ManageComponent.prototype.updateAssignmentLocally = function (assignment, remoteAssignment) {
        try {
            assignment.assignmentActivities[0].id = remoteAssignment.assignmentActivities[0].id;
        }
        catch (e) {
        }
        try {
            assignment.assignmentEmployees[0].id = remoteAssignment.assignmentEmployees[0].id;
        }
        catch (e) {
        }
        try {
            assignment.assignmentId = remoteAssignment.id;
        }
        catch (e) {
        }
    };
    /** Pushes assignment to the local Vehicle Schedule (backend is not bothered). Information about which vehicle it needs to be
     * attached to is taken from the assignment itself (it has it anyway). Usually assignments are retrieved from the server even when
     * they had just been created by the user.
     * A check will be performed whether the assignment was already added to the vehicle's assignment list. If it already exists the
     * existing assignment will be updated with the new data
     *
     * @param Assignment assignment created by the user
     * @return Assignment either the passed assignment (if it was pushed to the schedule) or the equivalent assignment that already
     * exists locally
     */
    ManageComponent.prototype.pushAssignmentLocally = function (assignment) {
        var exists = false;
        var ret_assignment = assignment;
        var targetRegistrarId;
        //if(assignment.previousAssignmentVehicle != null) {
        //    targetRegistrarId = assignment.previousAssignmentVehicle.vehicle.id;
        //}
        //else {
        targetRegistrarId = assignment.assignmentEmployees[0].employee.id;
        //}
        for (var _i = 0, _a = this.registrarSchedule; _i < _a.length; _i++) {
            var schedule = _a[_i];
            if (schedule.registrar.id == targetRegistrarId) {
                for (var _b = 0, _c = schedule.assignments; _b < _c.length; _b++) {
                    var ass = _c[_b];
                    if (ass.assignmentId == assignment.assignmentId) {
                        ass.startTime = assignment.startTime;
                        ass.timeLength = assignment.timeLength;
                        ass.offsetLeft = assignment.offsetLeft;
                        ass.width = assignment.width;
                        //this.applyPeerChanges(ass.assignmentEmployees, assignment.assignmentEmployees);
                        //if(this.applyPeerChanges(ass.assignmentActivities, assignment.assignmentActivities)) {
                        //    this.reapplyAssignmentVehicleLocally(ass.assignmentId);
                        //}
                        ret_assignment = ass;
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    schedule.assignments.push(assignment);
                }
                break;
            }
        }
        if (this.scheduleIndex > -1) {
            this.bubbleSort(this.registrarSchedule[this.scheduleIndex].assignments, 'offsetLeft');
        }
        return ret_assignment;
    };
    ManageComponent.prototype.applyPeerChanges = function (localAssignUsers, remoteAssignUsers) {
        var changed = false;
        var listToRemove = localAssignUsers.filter(function (x) {
            //let existsBoth = false;
            for (var _i = 0, remoteAssignUsers_1 = remoteAssignUsers; _i < remoteAssignUsers_1.length; _i++) {
                var y = remoteAssignUsers_1[_i];
                if (y.id == x.id) {
                    return false;
                }
            }
            return true;
        });
        var listToAdd = remoteAssignUsers.filter(function (x) {
            //let existsBoth = false;
            for (var _i = 0, localAssignUsers_1 = localAssignUsers; _i < localAssignUsers_1.length; _i++) {
                var y = localAssignUsers_1[_i];
                if (y.id == x.id) {
                    return false;
                }
            }
            return true;
        });
        if (listToRemove.length > 0 || listToAdd.length > 0) {
            changed = true;
        }
        //let listToAdd = Supplement.array_diff(remoteAssignUsers, localAssignUsers);
        //    let listToRemove = Supplement.array_diff(localAssignUsers, remoteAssignUsers);
        var _localAssignUsers = localAssignUsers.filter(function (element, index, array) {
            for (var _i = 0, listToRemove_1 = listToRemove; _i < listToRemove_1.length; _i++) {
                var toRem = listToRemove_1[_i];
                if (element.id == toRem.id) {
                    return false;
                }
            }
            return true;
        });
        for (var _i = 0, listToAdd_1 = listToAdd; _i < listToAdd_1.length; _i++) {
            var toAdd = listToAdd_1[_i];
            _localAssignUsers.push(toAdd);
        }
        localAssignUsers.splice.apply(localAssignUsers, [0, _localAssignUsers.length + 1].concat(_localAssignUsers));
        return changed;
    };
    /** Removes assignment locally. It would be returned so if you need it you catch the return from this method
     *
     *  @param number assignmentId
     */
    ManageComponent.prototype.removeAssignmentLocally = function (assignmentId) {
        /** vehicle index */
        var vI = 0;
        /** schedule index */
        var sI = 0;
        for (var i in this.registrarSchedule) {
            //if(this.registrarSchedule[i].vehicle.id == vehicleId) {
            for (var n in this.registrarSchedule[i].assignments) {
                if (this.registrarSchedule[i].assignments[n].assignmentId == assignmentId) {
                    sI = +n;
                    vI = +i;
                    var schedule = this.registrarSchedule[vI].assignments.splice(sI, 1);
                    return schedule[0];
                }
            }
        }
        return null;
    };
    /**
     * Moves assignment from one place to another, possibly across registrars
     *
     * @param id assignment id
     * @param vehicleId destination vehicle id
     * @param eventCoordinates position in the timeline in pixels
     */
    ManageComponent.prototype.moveAssignment = function (id, registrarId, eventCoordinates) {
        //        let assignment = this.removeAssignmentLocally(id);
        //        assignment.offsetLeft = eventCoordinates;
        //        assignment.startTime = this.computeStartTime(eventCoordinates);
        //        // TODO update startTime with eventCoordinates
        //        // TODO update startTime with eventCoordinates
        //        for (let schdl of this.registrarSchedule) {
        //            if (schdl.registrar.id == registrarId) {
        //                assignment.previousAssignmentVehicle = assignment.assignmentActivities[0];
        //                assignment.assignmentActivities[0] = {id:0, aci: schdl.e};
        //                this.saveAssignment(assignment);
        //                break;
        //            }
        //        }
    };
    ManageComponent.prototype.reapplyAssignmentVehicleLocally = function (assignmentId) {
        var assignment = this.removeAssignmentLocally(assignmentId);
        var registrarId = assignment.assignmentActivities[0].vehicle.id;
        for (var _i = 0, _a = this.registrarSchedule; _i < _a.length; _i++) {
            var schedule = _a[_i];
            if (schedule.registrar.id == registrarId) {
                schedule.assignments.push(assignment);
                break;
            }
        }
    };
    // public getPositionInDocument(m_posx: number, m_posy: number, obj: any) {
    //     let e_posx = 0;
    //     let e_posy = 0;
    //     if (obj.offsetParent){
    //         do {
    //             e_posx += obj.offsetLeft;
    //             e_posy += obj.offsetTop;
    //             console.log('e_posx:'+e_posx+"  e_posy:"+e_posy);
    //         } while (obj = obj.offsetParent);
    //     }
    //     console.log('e_posx:'+e_posx+"  e_posy:"+e_posy);
    // }
    //
    ManageComponent.prototype.applyAssignmentPeriodFromForm = function () {
        //        let assignmentId = target.dataset.assignmentid;
        //        let startTime = this.computeStartTime(target.offsetLeft);
        //        let timeLength = this.computeTimeLength(parseInt(target.style.width));
        //
        //        console.log('updateAssignment: '+assignmentId);
        //        let assignment = this.getAssignment(assignmentId);
        //        assignment.startTime = startTime;
        //        assignment.timeLength = timeLength;
        //        assignment.width = parseInt(target.style.width);
        //
        //        this.schedule1Service.saveAssignment(assignment, () => {});
        //        console.log("apply");
        //
        //
        //            assignment.assignmentId = assignment.id;
        //
        //            assignment.startTime = new TmDate();
        //            assignment.startTime.date.setTime(assignment.dateFrom-(assignment.startTime.date.getTimezoneOffset()*60000));
        //            assignment.timeLength = new TmLength();
        //            assignment.timeLength.seconds = (assignment.dateTo - assignment.dateFrom) / 1000;
        //            assignment.offsetLeft = Math.floor(((assignment.startTime.date.getTime()/3600000) - this.days[0].date.getTime()/3600000)+1) * (this._hour_width * this._scale_factor);
        //            //ass.offsetLeft = 40;
        //            assignment.width = ((assignment.timeLength.seconds) / 3600) * (this._hour_width * this._scale_factor);
        //            assignment = this.pushAssignmentLocally(assignment);
    };
    ManageComponent.prototype.onChangeScheduleStartDate = function (newValue) {
        var date = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["a" /* TmDate */]();
        date.setFromDate(newValue + " UTC");
        this.initView(date);
        var vehicleIds = [];
        for (var id in this.selectedUsersSimple.vehicles) {
            if (this.selectedUsersSimple.vehicles[id] == true) {
                vehicleIds.push(id);
            }
        }
        var timeLength = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["b" /* TmLength */]();
        timeLength.seconds = this.hours.length * 3600;
        this.loadAssignments(this.days[0], timeLength, vehicleIds);
    };
    ManageComponent.prototype.closeAssignmentPanel = function () {
        var _this = this;
        if (this.assignment_selected != null) {
            var exSelected = document.querySelector("#assignment" + this.assignment_selected.assignmentId);
            exSelected.classList.remove("assignmentSelected");
        }
        this.assignment_selected = null;
        setTimeout(function () {
            _this._scaleView();
            _this.applyCustomScrollbars();
        }, 0);
    };
    ManageComponent.prototype.assignPanelDetailsScrollCallback = function (event) {
        var panelScroll = document.querySelector(".assignPanelDetails").scrollTop;
        var elements = document.querySelectorAll(".assignPanelDetails > div.dont-scroll");
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var div = elements_1[_i];
            div.style.marginTop = panelScroll + "px";
        }
    };
    ManageComponent.prototype.alignAssignment = function (coordinates, granularity) {
        switch (granularity) {
            case 'hour':
                var remaining = Math.floor(coordinates) % (this._hour_width * this._scale_factor);
                coordinates -= remaining;
                break;
            case 'day':
                remaining = Math.floor(coordinates) % (this._hour_width * 24 * this._scale_factor);
                coordinates -= remaining;
                break;
        }
        return coordinates;
    };
    ManageComponent.prototype.onMouseLeave = function (event) {
        event.target.classList.remove("hover");
    };
    ManageComponent.prototype.onMouseEnter = function (event) {
        var target = event.currentTarget;
        if (target.classList.contains('disabled')) {
            return false;
        }
        target.classList.add("hover");
    };
    ManageComponent.prototype.releaseContextMenu = function (event) {
        var contextMenu = document.querySelector("#contextMenu");
        contextMenu.style.display = "none";
        return true;
    };
    ManageComponent.prototype.preventDefault = function (ev) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        return false;
    };
    ManageComponent.prototype.window_click = function (event) {
        this.closeContextMenu();
    };
    return ManageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrolledWidget"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ManageComponent.prototype, "scrolledWidget", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrolledParent"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], ManageComponent.prototype, "scrolledParent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("mightyParent"),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], ManageComponent.prototype, "mightyParent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrollbarX"),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], ManageComponent.prototype, "scrollbarX", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrollbarXDummyContent"),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object)
], ManageComponent.prototype, "scrollbarXDummyContent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrollbarY"),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object)
], ManageComponent.prototype, "scrollbarY", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrollbarYDummyContent"),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _g || Object)
], ManageComponent.prototype, "scrollbarYDummyContent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("timeHeaderContent"),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _h || Object)
], ManageComponent.prototype, "timeHeaderContent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("timeHeader"),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _j || Object)
], ManageComponent.prototype, "timeHeader", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("assignmentContextTrigger"),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatMenuTrigger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatMenuTrigger */]) === "function" && _k || Object)
], ManageComponent.prototype, "assignmentContextTrigger", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("registrarHeader"),
    __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _l || Object)
], ManageComponent.prototype, "registrarHeader", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("registrarHeaderContainer"),
    __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _m || Object)
], ManageComponent.prototype, "registrarHeaderContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("AssignPanelDetails"),
    __metadata("design:type", typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _o || Object)
], ManageComponent.prototype, "assignPanelDetails", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ManageComponent.prototype, "beforeUnloadHander", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ManageComponent.prototype, "onClickHostHandler", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ManageComponent.prototype, "window_click", null);
ManageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/customer/schedule2/manage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customer/schedule2/manage.component.css")],
    }),
    __param(9, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_12__customer_component__["a" /* CustomerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__customer_component__["a" /* CustomerComponent */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_8__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_user_service__["a" /* UserService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_6__service_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_activity_service__["a" /* ActivityService */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_13__schedule_component__["a" /* ScheduleComponent2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__schedule_component__["a" /* ScheduleComponent2 */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _u || Object, typeof (_v = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _v || Object, typeof (_w = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _w || Object, typeof (_x = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatDialog */]) === "function" && _x || Object, Object, typeof (_y = typeof __WEBPACK_IMPORTED_MODULE_7__service_css_service__["a" /* CssService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_css_service__["a" /* CssService */]) === "function" && _y || Object, typeof (_z = typeof __WEBPACK_IMPORTED_MODULE_9__service_schedule2_service__["a" /* Schedule2Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_schedule2_service__["a" /* Schedule2Service */]) === "function" && _z || Object, typeof (_0 = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */]) === "function" && _0 || Object])
], ManageComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
//# sourceMappingURL=manage.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/schedule2/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/customer/schedule2/schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_tabbed_component__ = __webpack_require__("../../../../../src/app/model/tabbed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_component__ = __webpack_require__("../../../../../src/app/customer/customer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_history_service__ = __webpack_require__("../../../../../src/app/service/history.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent2; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// parent class




var ScheduleComponent2 = (function (_super) {
    __extends(ScheduleComponent2, _super);
    // activeUserId = 0;
    // public state = 'out';
    // animationEnded(event: any) {
    //   console.log("animationEnded");
    // }
    // ngOnInit() {
    //   console.log(this.state);
    //   //this.state = 'active';
    //   console.log(this.state);
    //   setTimeout(()=> this.state='in', 1);
    // }
    // ngOnDestroy() {
    //   //this.state = 'inactive';
    //   setTimeout(()=> this.state='out', 1);
    // }
    function ScheduleComponent2(route, router, location, localStorageService, historyService, customerComponent) {
        var _this = _super.call(this, location, router) || this;
        _this.route = route;
        _this.router = router;
        _this.location = location;
        _this.localStorageService = localStorageService;
        _this.historyService = historyService;
        _this.customerComponent = customerComponent;
        _this.navLinks = [
            { label: 'Manage', ref: 'manage', id: -1, default: true },
        ];
        return _this;
    }
    ScheduleComponent2.prototype.ngOnInit = function () {
        //   this.restoreProperties();
        this.customerComponent.setActive(this.constructor.name);
        //     let params = this.route.snapshot.queryParams;
        //     if(params["redirectTo"] != null && params["redirectTo"] == 'lastVisited') {
        //           let lastRoute = this.localStorageService.get(this.constructor.name+'.lastRoute');
        //           if(lastRoute != null) {
        //             this.router.navigate([lastRoute]);
        //           }
        //     }
    };
    /** Opens a new tab. It's title will initialy be simply of the form "id999" where 999 is the userId passed to
     *  this method. The child component (EditUser if nobody has changed it) will update tab's title with user's
     *  name as soon as it has fetched the user object from the server.
     */
    // editUser(userId:any): void {
    //   for (let link of this.navLinks) {
    //     if(link.id == userId){
    //       return;
    //     }
    //   }
    //   this.navLinks.push({label: "id"+userId, ref: 'edit-user/'+userId, id: userId, default: false});
    //   //this.history.push({id: userId});
    // }
    ScheduleComponent2.prototype.pushHistory = function (id) {
        this.history.push({ id: id });
    };
    /** Closes a tab associated with the given userId. Method will check whether that tab is open and if that's the
     *  case will go back one step in browser's history (that's the most natural behaviour and the one the user would
     *  expect).
     */
    // closeUser(userId:any): void {
    //   let index: number = -1;
    //   let counter = 0;
    //   for (let link of this.navLinks) {
    //     if(link.id == userId){
    //       index = counter;
    //       break;
    //     }
    //     counter++;
    //   }
    //   if(index > -1){
    //     if(userId == this.activeUserId) {
    //       this.back();
    //     }
    //     this.navLinks.splice(index, 1);
    //   }
    // }
    /** A supplementary method used by component's template. We are recognising 3 types of tabs: permament tabs (which
     *  we are going to display as "normal" text), editing tab with id for title (this happens for a short time starting
     *  from moment the tab is open until the user is fetched from the backend), editing tab with user's name
     *  for title. The last two will be displayed differently from each other so it would be obvious for the user
     *  what the titles stand for */
    ScheduleComponent2.prototype.titleType = function (link) {
        if (link.label.id == 0) {
            return 0;
        }
        else if (link.label.indexOf("id") == 0) {
            return 1;
        }
        else {
            return 0;
        }
    };
    return ScheduleComponent2;
}(__WEBPACK_IMPORTED_MODULE_4__model_tabbed_component__["a" /* TabbedComponent */]));
ScheduleComponent2 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/customer/schedule2/schedule.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__service_history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_history_service__["a" /* HistoryService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__customer_component__["a" /* CustomerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__customer_component__["a" /* CustomerComponent */]) === "function" && _f || Object])
], ScheduleComponent2);

var NavLink = (function () {
    function NavLink() {
    }
    return NavLink;
}());
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ "../../../../../src/app/customer/schedule2/schedule2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_component__ = __webpack_require__("../../../../../src/app/customer/schedule2/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_component__ = __webpack_require__("../../../../../src/app/customer/schedule2/manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manage_conventional_component__ = __webpack_require__("../../../../../src/app/customer/schedule2/manage-conventional.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_multi_select_input_multi_select_input_module__ = __webpack_require__("../../../../../src/app/lib/multi-select-input/multi-select-input.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_single_select_input_single_select_input_module__ = __webpack_require__("../../../../../src/app/lib/single-select-input/single-select-input.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleRoutes", function() { return scheduleRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schedule2Module", function() { return Schedule2Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/** Importing local components */




//import { AuthGuard }            from '../../auth-guard.service';
/** Importing local modules */


var scheduleRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__schedule_component__["a" /* ScheduleComponent2 */],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'manage-conventional' },
            { path: 'manage-conventional', component: __WEBPACK_IMPORTED_MODULE_7__manage_conventional_component__["a" /* ManageConventionalComponent */] },
        ]
    }
];
var Schedule2Module = (function () {
    function Schedule2Module() {
    }
    return Schedule2Module;
}());
Schedule2Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__["a" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__lib_multi_select_input_multi_select_input_module__["a" /* MultiSelectInputModule */],
            __WEBPACK_IMPORTED_MODULE_10__lib_single_select_input_single_select_input_module__["a" /* SingleSelectInputModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forChild(scheduleRoutes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__schedule_component__["a" /* ScheduleComponent2 */],
            __WEBPACK_IMPORTED_MODULE_6__manage_component__["a" /* ManageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__manage_conventional_component__["a" /* ManageConventionalComponent */]
        ],
        entryComponents: [],
        providers: []
    })
], Schedule2Module);

//# sourceMappingURL=schedule2.module.js.map

/***/ }),

/***/ "../../../../../src/app/model/tabbed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabbedComponent; });
/* unused harmony export NavLink */
// import { ActivatedRoute, Params }  from '@angular/router';
// import 'rxjs/add/operator/switchMap';
// import { MdTabsModule } from '@angular/material';
var TabbedComponent = (function () {
    function TabbedComponent(location, router) {
        this.location = location;
        this.router = router;
        /** Stores history of visited tabs */
        this.history = [];
        /** Stores tabs */
        this.navLinks = [];
        /** route to the tabbed component. The child class must set this for the navigation features to work */
        this.componentUrl = '';
    }
    TabbedComponent.prototype.back = function () {
        this.history.pop();
        var hisEntry;
        do {
            hisEntry = this.history.pop();
        } while (hisEntry != null && this.activeId == hisEntry.id);
        if (hisEntry == null) {
            console.log("wow");
            var defaultUrl = this.getDefaultUrl();
            this.router.navigate([this.componentUrl, defaultUrl]);
        }
        else {
            var isPresent = false; // this is the indication whether the tab exists
            for (var _i = 0, _a = this.navLinks; _i < _a.length; _i++) {
                var e = _a[_i];
                if (e.id == hisEntry.id) {
                    isPresent = true;
                    break;
                }
            }
            if (!isPresent) {
                this.back();
            }
            else {
                this.router.navigate([this.componentUrl + '/' + this.getUrl(hisEntry.id)]);
            }
        }
    };
    TabbedComponent.prototype.getDefaultUrl = function () {
        for (var _i = 0, _a = this.navLinks; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.default == true) {
                return e.ref;
            }
        }
    };
    TabbedComponent.prototype.getUrl = function (id) {
        var url = '';
        for (var _i = 0, _a = this.navLinks; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.id == id) {
                url = e.ref;
                break;
            }
        }
        return url;
    };
    TabbedComponent.prototype.pushHistory = function (id) {
        this.history.push({ id: id });
    };
    TabbedComponent.prototype.clearInvalidTabs = function () {
        this.navLinks = this.navLinks.filter(function (v) {
            if (typeof v == 'undefined')
                return false;
            else
                return true;
        });
    };
    return TabbedComponent;
}());

var NavLink = (function () {
    function NavLink() {
    }
    return NavLink;
}());

//# sourceMappingURL=tabbed.component.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map