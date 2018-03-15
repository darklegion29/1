webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/activities/activities.module": [
		"../../../../../src/app/admin/activities/activities.module.ts",
		"common",
		"activities.module"
	],
	"app/admin/schedule2/schedule2.module": [
		"../../../../../src/app/admin/schedule2/schedule2.module.ts",
		"common",
		"schedule2.module.0"
	],
	"app/admin/schedule3/schedule3.module": [
		"../../../../../src/app/admin/schedule3/schedule3.module.ts",
		"common",
		"schedule3.module"
	],
	"app/admin/skills/skill.module": [
		"../../../../../src/app/admin/skills/skill.module.ts",
		"common",
		"skill.module"
	],
	"app/admin/users/users.module": [
		"../../../../../src/app/admin/users/users.module.ts",
		"common",
		"users.module"
	],
	"app/customer/schedule2/schedule2.module": [
		"../../../../../src/app/customer/schedule2/schedule2.module.ts",
		"common",
		"schedule2.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n    /* border: 1px solid red;   */\r\n}\r\n\r\nhtml, body{\r\n  background: #fbfbfb;\r\n  color: #004F76;\r\n  height: 100%;\r\n  width: 100%;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  outline: none;\r\n}\r\n\r\n.leftSide{\r\n  background: #fff;\r\n  -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n          box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  padding: 0px;\r\n  font-size: 20px;\r\n}\r\n\r\n.fa-chevron-left{\r\n  position: absolute;\r\n  top: 50%;\r\n}\r\n\r\n.leadHead{\r\n  text-transform: uppercase;\r\n  padding: 14px;\r\n}\r\n\r\n.mainWrapper{\r\n  float: right;\r\n  padding: 1%;\r\n  padding-top: 1%;\r\n}\r\n\r\n.mainContent{\r\n  height: 90vh;\r\n  overflow: auto;\r\n}\r\n\r\nmd-grid-list{\r\n  padding: 2%;\r\n}\r\n\r\n.row{\r\n  margin-right: 0px;\r\n}\r\n\r\n.sideBarMenu[class^=\"col-\"]{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.mat-menu-item{\r\n  padding: 1em;\r\n  margin: 1em;\r\n  border-left: 4px solid #fff;\r\n  text-transform: uppercase;\r\n  color: #c6c6c6;\r\n  font-weight: bold;\r\n}\r\n\r\n.mat-menu-item:focus, .mat-menu-item:hover{\r\n  /*background: #fff;*/\r\n  color: #252525;\r\n  border-left: 4px solid #02d1a5;\r\n}\r\n\r\n.user span{\r\n  margin-left: 2%;\r\n}\r\n\r\n.user{\r\n  font-style: italic;\r\n  font-weight: bold;\r\n  padding: 6%;\r\n  border-top: 1px solid #ececec;\r\n}\r\n\r\n.logoWrapper div[class^=\"col-\"]{\r\n  padding-left: 0px !important;\r\n}\r\n\r\n.logoWrapper img{\r\n  padding: 4%;\r\n  max-width: 220px;\r\n}\r\n\r\nul li a:focus{\r\n  border-left: 4px solid #02d1a5;\r\n  text-decoration: none;\r\n}\r\n\r\nul li:hover .fa::before, ul li:active .fa::before{\r\n  color: #02d1a5;\r\n}\r\n\r\n.fa-rotate-90 {\r\n    -webkit-transform: rotate(-90deg);\r\n    transform: rotate(-90deg);\r\n}\r\n\r\n.createdBy{\r\n    width: 98%;\r\n    float: right;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.createdBy a{\r\n  color: #02d1a4;\r\n  text-decoration: underline;\r\n}\r\n\r\n.logo{\r\n  text-align: center;\r\n  width: 90%;\r\n}\r\n\r\n.logoHebeData{\r\n  bottom: 2px;\r\n  opacity: 0.1;\r\n  position: absolute;\r\n  text-align: center;\r\n  width: 90%;\r\n}\r\n\r\n/* \r\n.navbar-toggleable-sm .navbar-collapse{\r\n  height: 96vh;\r\n} */\r\n\r\n@media (max-width:360px){\r\n  .mainWrapper{\r\n    float: none;\r\n    padding: 1%;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px)\r\n{\r\n  .navbar-fixed-side\r\n  {\r\n    margin-left:0px;\r\n    margin-right:-15px;\r\n  }\r\n\r\n  ul li a, .user, .logoWrapper img{\r\n    padding: 2%;\r\n  }\r\n\r\n  .logoHebeData{\r\n    position: static;\r\n  }\r\n\r\n  .navbar-toggleable-sm .navbar-collapse{\r\n    height: auto;\r\n  }\r\n\r\n  .logo, .logoHebeData{\r\n    text-align: left;\r\n  }\r\n\r\n  nav{\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n}\r\n\r\n@media (max-height: 680px)\r\n{\r\n  .logoHebeData{\r\n    position: static;\r\n  }\r\n}\r\n\r\n@media (min-width: 1280px) and (max-width: 1480px){\r\n  .sideBarMenu .col-lg-2{\r\n    max-width: 19%;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px){\r\n  .navbar-fixed-side\r\n  {\r\n    position:fixed;\r\n    margin:0 -15px;\r\n    height:100vh;\r\n    width:inherit;\r\n    overflow:auto;\r\n    border-top-width:0;\r\n    border-bottom-width:0;\r\n    border-radius:0}\r\n  }\r\n\r\n#menu{\r\n  padding: 2%;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: auto;\r\n    background-color: #fff;\r\n}\r\n\r\nli {\r\n  border-bottom: 1px solid #ececec;\r\n}\r\n\r\nli a {\r\n  display: block;\r\n  border-left: 4px solid #fff;\r\n  text-transform: uppercase;\r\n  color: #c6c6c6;\r\n  font-weight: bold;\r\n  padding: 6%;\r\n}\r\n\r\n/* Change the link color on hover */\r\n\r\nli a:hover {\r\n  text-decoration: none;\r\n\r\n  color: #252525;\r\n  border-left: 4px solid #02d1a5;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\n\r\nspan.fa{\r\n  margin-right: 10%;\r\n}\r\n\r\n.alert-count {\r\n  padding-left: 7px;\r\n  padding-right: 7px;\r\n  float:right;\r\n\r\n  color: white;\r\n  background-color: #F7102A;\r\n}\r\n\r\nul li:hover a.navigated-to .fa::before{\r\n  color: #02d1a5;\r\n}\r\n\r\nli a.navigated-to {\r\n  pointer-events: none;\r\n  color: #02d1a5;\r\n  border-left: 4px solid #02d1a5;\r\n}\r\n\r\n/***********************  TOP Bar ********************/\r\n\r\n.sidebar{ -webkit-transition: all 0.5s  ease-in-out; transition: all 0.5s  ease-in-out; }\r\n\r\n.revealMenuButton {\r\n    float: left;\r\n}\r\n\r\n.menulist {\r\n    opacity: 1;\r\n}\r\n\r\n.fadeIn {\r\n    -webkit-animation: fade-in 0.3s;\r\n            animation: fade-in 0.3s; \r\n    -webkit-animation-fill-mode: forwards; \r\n            animation-fill-mode: forwards;\r\n}\r\n\r\n.fadeOut {\r\n    -webkit-animation: fade-out 0.3s;\r\n            animation: fade-out 0.3s; \r\n    -webkit-animation-fill-mode: forwards; \r\n            animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes fade-out{\r\n    0% { opacity: 1; }\r\n    100% {opacity: 0; -webkit-transform:translate(-50px); transform:translate(-50px); height: 0px;}\r\n}\r\n\r\n@keyframes fade-out{\r\n    0% { opacity: 1; }\r\n    100% {opacity: 0; -webkit-transform:translate(-50px); transform:translate(-50px); height: 0px;}\r\n}\r\n\r\n@-webkit-keyframes fade-in{\r\n    0% { opacity: 0; -webkit-transform:translate(-50px); transform:translate(-50px);}\r\n    100% {opacity: 1; -webkit-transform:translate(0px); transform:translate(0px);}\r\n}\r\n\r\n@keyframes fade-in{\r\n    0% { opacity: 0; -webkit-transform:translate(-50px); transform:translate(-50px);}\r\n    100% {opacity: 1; -webkit-transform:translate(0px); transform:translate(0px);}\r\n}\r\n\r\n.concealMenuButton {\r\n    margin-left: 0.5em;\r\n    width: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n.concealMenuButton:hover {\r\n    background-color: #D2D6EF;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 sideBarMenu\">\n    <div class=\"menulist\">\n        <div class=\"col-lg-2 col-md-4 col-sm-12 col-12 leftSide navbar-fixed-side\">\n            <!-- <button mat-raised-button color=\"primary\" (click)=\"concealMainMenu()\" style=\"fa fa-tag\">Hide Menu</button> -->\n            <div (click)=\"concealMainMenu()\" class=\"fa fa-dedent concealMenuButton\">Hide Menu</div>\n            <div id=\"menu\" *ngIf=\"!menulist\">\n                <nav class=\"nav navbar-light navbar-toggleable-sm\">\n                    <!-- <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarWEX\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                    </button> -->\n\n                    <div class=\"navbar-collapse collapse flex-column\" id=\"navbarWEX\">\n                        <div class=\"logoWrapper logo justify-content-center\">\n                            <img src=\"assets/images/logo.png\" alt=\"Logo\" class=\"col-md-12 col-10 col-lg-10\" />\n                        </div>\n                        <ul>\n                            <li class=\"user\"><span>Rota Coordinator</span>\n                            </li>\n                            <li><a routerLink=\"activities\" [queryParams]=\"{redirectTo:'lastVisited'}\" [class.navigated-to]=\"navigation.ActivitiesComponent\"><span class=\"fa fa-hospital-o\">&nbsp;&nbsp;Activities</span></a></li>\n                            <li><a routerLink=\"schedule2\" [queryParams]=\"{redirectTo:'lastVisited'}\" [class.navigated-to]=\"navigation.Schedule2Component\"><span class=\"fa fa-calendar\" style=\"font-size: 0.87em;\">&nbsp;&nbsp;On Call ROTA</span></a></li>\n                            <li><a routerLink=\"schedule3\" [queryParams]=\"{redirectTo:'lastVisited'}\" [class.navigated-to]=\"navigation.Schedule3Component\"><span class=\"fa fa-calendar\">&nbsp;&nbsp;ROTA</span></a></li>\n                            <li><a routerLink=\"users\" [queryParams]=\"{redirectTo:'lastVisited'}\" [class.navigated-to]=\"navigation.UsersComponent\"><span class=\"fa fa-user-md\" style=\"font-size: 0.9em\">&nbsp;&nbsp;Clinical&nbsp;Staff</span></a></li>\n                            <li><a routerLink=\"skills\" [queryParams]=\"{redirectTo:'lastVisited'}\" [class.navigated-to]=\"navigation.Skills\"><span class=\"fa fa-medkit\" aria-hidden=\"true\" style=\"font-size: 0.9em\">&nbsp;Skills</span></a></li>\n                        </ul>\n                        <button mat-raised-button color=\"accent\" *ngFor=\"let button of taskBarButtons\" (click)=\"button.callback()\">{{button.label}}</button>\n                        <div class=\"logoWrapper logoHebeData justify-content-center\">\n                            <img src=\"assets/images/HebeData-Logo.png\" alt=\"Logo Hebe Data\" class=\"col-md-12 col-10 col-lg-10\" />\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n    </div>\n    <button mat-raised-button *ngIf=\"isMainMenuConcealed\" class=\"fa fa-bars revealMenuButton\" (click)=\"revealMainMenu()\"></button>\n\n    <div #mainWrapper class=\"col-sm-12 col-lg-10 col-md-8 mainWrapper\" [class.col-lg-12]=\"isVisible\" [class.col-md-12]=\"isVisible\" [class.col-xl-12]=\"isVisible\">\n        <div class=\"col-lg-12 mainContent example-sidenav-content\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n\n<div class=\"col-12 col-lg-12 col-sm-12 col-md-12\">\n    <div class=\"createdBy col-10 col-lg-10 col-md-8 col-sm-8 text-right\">\n        <span style=\"color: #252525;\">Created by</span> <a href=\"https://www.edatachase.com/\" target=\"_blank\"><span>EdataChase Ltd.</span></a>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_base_component__ = __webpack_require__("../../../../../src/app/model/base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_admincomponent_service__ = __webpack_require__("../../../../../src/app/service/admincomponent.service.ts");
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





/** Importing local models **/

/* Import local service */

var AdminComponent = /** @class */ (function (_super) {
    __extends(AdminComponent, _super);
    function AdminComponent(route, adminComponentService) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.adminComponentService = adminComponentService;
        _this.currentPage = "Admin";
        _this.loggedUser = "Guest";
        _this.taskBarButtons = [];
        _this.isMainMenuConcealed = false;
        //public alertInfo: AlertServiceInfo;
        _this.navigation = {
            ScheduleComponent: true,
            Schedule2Component: false,
            Schedule3Component: false,
            UsersComponent: false,
            ActivitiesComponent: false,
            Skills: false,
        };
        _this.adminComponentService.taskBarEvent.subscribe(function (buttons) {
            _this.taskBarButtons.length = 0;
            (_a = _this.taskBarButtons).splice.apply(_a, [0, 0].concat(buttons));
            var _a;
        });
        return _this;
    }
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
    AdminComponent.prototype.setActive = function (component) {
        for (var comp in this.navigation) {
            this.navigation[comp] = false;
        }
        this.navigation[component] = true;
    };
    AdminComponent.prototype.revealMainMenu = function () {
        var _this = this;
        try {
            //this.concealElement('.hideMenuButton');
            setTimeout(function () {
                _this.isMainMenuConcealed = false;
                var mainWrapper = document.querySelector('.mainWrapper');
                mainWrapper.classList.add('col-sm-12');
                mainWrapper.classList.add('col-lg-10');
                mainWrapper.classList.add('col-md-8');
                mainWrapper.style.float = 'right';
                _this.revealElement('.menulist');
            }, 0);
        }
        catch (e) {
        }
        this.adminComponentService.menuVisibilityEvent.emit(true);
    };
    AdminComponent.prototype.concealMainMenu = function () {
        var _this = this;
        this.concealElement('.menulist');
        setTimeout(function () {
            try {
                var mainWrapper = document.querySelector('.mainWrapper');
                mainWrapper.classList.remove('col-sm-12');
                mainWrapper.classList.remove('col-lg-10');
                mainWrapper.classList.remove('col-md-8');
                mainWrapper.style.float = 'unset';
                _this.isMainMenuConcealed = true;
                _this.revealElement('.revealMenuButton');
            }
            catch (e) {
            }
        }, 300);
        this.adminComponentService.menuVisibilityEvent.emit(false);
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'admin-component',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__service_admincomponent_service__["a" /* AdminComponentService */]])
    ], AdminComponent);
    return AdminComponent;
}(__WEBPACK_IMPORTED_MODULE_5__model_base_component__["a" /* BaseComponent */]));



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_multi_select_input_multi_select_input_module__ = __webpack_require__("../../../../../src/app/lib/multi-select-input/multi-select-input.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_single_select_input_single_select_input_module__ = __webpack_require__("../../../../../src/app/lib/single-select-input/single-select-input.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_admincomponent_service__ = __webpack_require__("../../../../../src/app/service/admincomponent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/* Import local services */

/*
import { TablePaginationExample } from './table-pagination-example';

*/
var adminRoutes = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_4__admin_component__["a" /* AdminComponent */],
        /*canActivate: [AuthGuard],*/
        children: [
            {
                path: '',
                redirectTo: 'activities',
                pathMatch: 'full'
            },
            {
                path: 'schedule2',
                loadChildren: 'app/admin/schedule2/schedule2.module#Schedule2Module',
            },
            {
                path: 'schedule3',
                loadChildren: 'app/admin/schedule3/schedule3.module#Schedule3Module',
            },
            {
                path: 'users',
                loadChildren: 'app/admin/users/users.module#UsersModule',
            },
            {
                path: 'activities',
                loadChildren: 'app/admin/activities/activities.module#ActivitiesModule',
            },
            {
                path: 'skills',
                // component: SkillsComponent
                loadChildren: 'app/admin/skills/skill.module#SkillModule',
            },
        ]
    }
];
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__lib_multi_select_input_multi_select_input_module__["a" /* MultiSelectInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__lib_single_select_input_single_select_input_module__["a" /* SingleSelectInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* RouterModule */].forChild(adminRoutes),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__admin_component__["a" /* AdminComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__service_admincomponent_service__["a" /* AdminComponentService */],
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div (contextmenu)=\"preventContextMenu()\">\n<router-outlet></router-outlet>\n\n<div class=\"tm_contextmenu\" *ngFor=\"let contextMenu of contextMenus\" [style.visibility]=\"contextMenu.visibility\"\n     [style.left.px]=\"contextMenu.left\"\n     [style.top.px]=\"contextMenu.top\"\n     [style.height.px]=\"contextMenu.height\"\n     [style.width.ch]=\"contextMenu.width\"\n     >\n     <div class=\"menu_item\" *ngFor=\"let item of contextMenu.items\"\n          [class.disabled]=\"item.disabled\"\n          [class.checked]=\"item.checked\"\n          [class.separator]=\"item.separator\"\n          (click)=\"item.clickCallback()\"\n          (mouseenter)=\"item.mouseEnterCallback($event)\"\n          (mouseleave)=\"item.mouseLeaveCallback($event)\"\n          >\n          <span *ngIf=\"item.checked\" class=\"fa fa-check\"></span>{{item.label}}\n          <span *ngIf=\"item.child\" class=\"fa fa-arrow-right\" style=\"float:right;\"></span>\n     </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(location) {
        var _this = this;
        this.location = location;
        this.contextMenus = [];
        this.contextMenuTriggerEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.contextMenuTriggerEvent.subscribe((function (cme) {
            _this.clearContextMenus();
            _this.revealContextMenu(cme);
        }));
    }
    AppComponent.prototype.clearContextMenus = function () {
        this.contextMenus.length = 0;
    };
    AppComponent.prototype.revealContextMenu = function (ev) {
        this.contextMenus.push(ev);
        setTimeout(function () {
            ev.displayMenu();
        });
    };
    AppComponent.prototype.window_click = function (event) {
        this.clearContextMenus();
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
        return false;
    };
    AppComponent.prototype.preventContextMenu = function () {
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "window_click", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_component__ = __webpack_require__("../../../../../src/app/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stomp_ng2_stompjs__ = __webpack_require__("../../../../@stomp/ng2-stompjs/@stomp/ng2-stompjs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_backend_service__ = __webpack_require__("../../../../../src/app/service/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_css_service__ = __webpack_require__("../../../../../src/app/service/css.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_schedule1_service__ = __webpack_require__("../../../../../src/app/service/schedule1.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_schedule2_service__ = __webpack_require__("../../../../../src/app/service/schedule2.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_schedule3_service__ = __webpack_require__("../../../../../src/app/service/schedule3.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_history_service__ = __webpack_require__("../../../../../src/app/service/history.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_activity_service__ = __webpack_require__("../../../../../src/app/service/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_dynamic_form_service__ = __webpack_require__("../../../../../src/app/service/dynamic-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lib_confirm_confirm__ = __webpack_require__("../../../../../src/app/lib/confirm/confirm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__service_criteria_service__ = __webpack_require__("../../../../../src/app/service/criteria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_skill_type_service__ = __webpack_require__("../../../../../src/app/service/skill-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_skills_service__ = __webpack_require__("../../../../../src/app/service/skills.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/** Importing 3rd party modules **/










/** Importing Local Component **/



/** Importing local modules **/

/** Importing local services **/













var routes = [
    {
        path: '',
        children: [
            {
                path: 'login-page',
                component: __WEBPACK_IMPORTED_MODULE_10__login_component__["a" /* LoginComponent */],
            },
            {
                path: 'customer',
                loadChildren: 'app/customer/schedule2/schedule2.module#Schedule2Module',
            },
        ]
    }
];
var stompConfig = {
    //url: 'ws://192.168.2.23:8090/socket',
    //    url: 'ws://192.168.2.4:8090/socket',
    //url: 'ws://192.168.2.2:8080/socket',
    //url: 'ws://localhost:8090/socket',
    url: 'ws://rotaswap.edatachase.co.uk:8080/socket',
    // Headers
    // Typical keys: login, passcode, host
    headers: {
        token: '4445',
    },
    // How often to heartbeat?
    // Interval in milliseconds, set to 0 to disable
    heartbeat_in: 0,
    heartbeat_out: 20000,
    // Wait in milliseconds before attempting auto reconnect
    // Set to 0 to disable
    // Typical value 5000 (5 seconds)
    reconnect_delay: 5000,
    // Will log diagnostics on console
    debug: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_22__lib_confirm_confirm__["a" /* ConfirmDialog */],
                __WEBPACK_IMPORTED_MODULE_10__login_component__["a" /* LoginComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_22__lib_confirm_confirm__["a" /* ConfirmDialog */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageModule"].withConfig({
                    prefix: 'RotaSwapp',
                    storageType: 'localStorage'
                }),
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["E" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["d" /* RouterModule */].forRoot(routes),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__service_backend_service__["a" /* BackendService */],
                __WEBPACK_IMPORTED_MODULE_11__stomp_ng2_stompjs__["b" /* StompService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_11__stomp_ng2_stompjs__["a" /* StompConfig */],
                    useValue: stompConfig
                },
                __WEBPACK_IMPORTED_MODULE_19__service_history_service__["a" /* HistoryService */],
                __WEBPACK_IMPORTED_MODULE_14__service_css_service__["a" /* CssService */],
                __WEBPACK_IMPORTED_MODULE_15__service_schedule1_service__["a" /* Schedule1Service */],
                __WEBPACK_IMPORTED_MODULE_16__service_schedule2_service__["a" /* Schedule2Service */],
                __WEBPACK_IMPORTED_MODULE_17__service_schedule3_service__["a" /* Schedule3Service */],
                __WEBPACK_IMPORTED_MODULE_18__service_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_20__service_activity_service__["a" /* ActivityService */],
                __WEBPACK_IMPORTED_MODULE_21__service_dynamic_form_service__["a" /* DynamicFormService */],
                __WEBPACK_IMPORTED_MODULE_23__service_criteria_service__["a" /* CriteriaService */],
                __WEBPACK_IMPORTED_MODULE_24__service_skill_type_service__["a" /* SkillTypeService */],
                __WEBPACK_IMPORTED_MODULE_25__service_skills_service__["a" /* SkillsService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/lib/confirm/confirm.html":
/***/ (function(module, exports) {

module.exports = "<span style=\"white-space: pre;\">{{message}}</span>\n<div style=\"clear:both\"></div>\n<button md-button (click)=\"onYesClick()\">{{yesButtonLabel}}</button>\n<button md-button #defaultButton (click)=\"onNoClick()\">{{noButtonLabel}}</button>\n"

/***/ }),

/***/ "../../../../../src/app/lib/confirm/confirm.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
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




/** importing Models */
//import { Vehicle } from '../../../model/vehicle';
var ConfirmDialog = /** @class */ (function () {
    function ConfirmDialog(dialogRef, router, 
        //private userService: VehicleService,
        localStorageService, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.localStorageService = localStorageService;
        this.data = data;
        this.message = "";
        this.yesButtonLabel = "";
        this.noButtonLabel = "";
        this.message = data.message;
        this.yesButtonLabel = data.yesButtonLabel;
        this.noButtonLabel = data.noButtonLabel;
        this.yesCallback = data.yesCallback;
    }
    ConfirmDialog.prototype.ngOnInit = function () {
    };
    ConfirmDialog.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            try {
                _this.defaultButton.nativeElement.focus();
            }
            catch (e) {
                //...shhhh
            }
        }, 500);
    };
    ConfirmDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ;
    ConfirmDialog.prototype.onYesClick = function () {
        this.yesCallback();
        this.dialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('defaultButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ConfirmDialog.prototype, "defaultButton", void 0);
    ConfirmDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/lib/confirm/confirm.html"),
            styles: ["\n    span {\n        margin: 1em;\n        margin-bottom: 8em;\n    }\n\n    div {\n        height: 4em;\n    }\n\n    button {\n        float:right;\n        margin-right: 1em;\n    }\n\n    button:last-of-type {\n        margin-right: 2em;\n    }\n  "]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"], Object])
    ], ConfirmDialog);
    return ConfirmDialog;
}());



/***/ }),

/***/ "../../../../../src/app/lib/multi-select-input/multi-select-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".root {\n}\n\n.root button {\n    margin-top: 0.5em;\n    background-color: #3673AA;\n}\n\n.empty {\n    height: 5em;\n}\n\n.selection {\n    border: 1px solid;\n    color: #3673AA;\n    padding: 0.5em;\n    overflow: auto;\n}\n\n.no-consultants {\n    color: #AFAFAF;\n    text-align: center;\n}\n\n@media screen and (min-width: 1900px) {\n    .root {\n    }\n}\n\n@media (min-width: 768px) {\n    .root{\n    }\n}\n\n@media (min-width: 992px) {\n    .root{\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lib/multi-select-input/multi-select-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isSelecting\" class=\"root\">\n    <div class=\"selection\" [style.height.px]='height'>\n      <div *ngFor=\"let item of items; let i=index\">\n          <mat-checkbox (click)=\"check(item)\" class=\"checkbox\" [checked]=\"isChecked(item)\">{{item.text}}</mat-checkbox>\n      </div>\n    </div>\n    <button *ngIf=\"!listOnly\" type=\"button\" mat-raised-button color=\"accent\" (click)=\"switchSelectionViewOff()\">Selection Completed</button>\n</div>\n<div *ngIf=\"!isSelecting\" class=\"root\">\n    <div class=\"selection\" [class.empty]='model.length == 0' [style.height.px]='height'>\n        <div *ngIf=\"model.length==0\" class='no-consultants'>{{emptyMessage}}</div>\n      <div *ngFor=\"let item of model; let i=index\">\n          <mat-checkbox [disabled]='true' [checked]='true' class=\"checkbox\">{{item.text}}</mat-checkbox>\n      </div>\n    </div>\n    <button *ngIf=\"!listOnly\" type=\"button\" mat-raised-button color=\"accent\" (click)=\"switchSelectionViewOn()\" [disabled]='!enabled'>Select</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lib/multi-select-input/multi-select-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelectInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MultiSelectInputComponent = /** @class */ (function () {
    function MultiSelectInputComponent() {
        this.isSelecting = false;
        this.enabled = true;
        this.listOnly = false;
        this.height = 160;
        this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.comparisonCallback = function (item1, item2) {
            return item1 == item2;
        };
        console.log(this.model);
    }
    MultiSelectInputComponent.prototype.ngAfterViewInit = function () {
        if (this.listOnly == true) {
            this.isSelecting = true;
        }
    };
    MultiSelectInputComponent.prototype.isChecked = function (item) {
        return this.getModelItem(item) != null;
    };
    MultiSelectInputComponent.prototype.getModelItem = function (item) {
        for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
            var mi = _a[_i];
            if (this.comparisonCallback) {
                if (this.comparisonCallback(mi.value, item.value)) {
                    return mi;
                }
            }
            else if (mi.value == item.value) {
                return mi;
            }
        }
        return null;
    };
    MultiSelectInputComponent.prototype.check = function (item) {
        var mi = this.getModelItem(item);
        if (!mi) {
            this.addModelItem(item);
        }
        else {
            this.removeModelItem(item);
        }
        this.modelChange.emit(this.model);
    };
    MultiSelectInputComponent.prototype.addModelItem = function (item) {
        this.model.push(item);
    };
    MultiSelectInputComponent.prototype.removeModelItem = function (item) {
        var index = null;
        for (var i = 0; i <= this.model.length; i++) {
            if (this.comparisonCallback) {
                if (this.comparisonCallback(this.model[i].value, item.value)) {
                    index = i;
                    break;
                }
            }
            else if (this.model[i].value == item.value) {
                index = i;
                break;
            }
        }
        if (index != null) {
            this.model.splice(index, 1);
        }
    };
    MultiSelectInputComponent.prototype.switchSelectionViewOn = function () {
        this.isSelecting = true;
    };
    MultiSelectInputComponent.prototype.switchSelectionViewOff = function () {
        this.isSelecting = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('items'),
        __metadata("design:type", Object)
    ], MultiSelectInputComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('model'),
        __metadata("design:type", Object)
    ], MultiSelectInputComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('enabled'),
        __metadata("design:type", Object)
    ], MultiSelectInputComponent.prototype, "enabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('listOnly'),
        __metadata("design:type", Object)
    ], MultiSelectInputComponent.prototype, "listOnly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('height'),
        __metadata("design:type", Object)
    ], MultiSelectInputComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('emptyMessage'),
        __metadata("design:type", Object)
    ], MultiSelectInputComponent.prototype, "emptyMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('modelChange'),
        __metadata("design:type", Object)
    ], MultiSelectInputComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('comparisonCallback'),
        __metadata("design:type", Object)
    ], MultiSelectInputComponent.prototype, "comparisonCallback", void 0);
    MultiSelectInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'multi-select-input-component',
            template: __webpack_require__("../../../../../src/app/lib/multi-select-input/multi-select-input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lib/multi-select-input/multi-select-input.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], MultiSelectInputComponent);
    return MultiSelectInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lib/multi-select-input/multi-select-input.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelectInputModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multi_select_input_component__ = __webpack_require__("../../../../../src/app/lib/multi-select-input/multi-select-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { CommonModule } from '@angular/platform-browser';

var MultiSelectInputModule = /** @class */ (function () {
    function MultiSelectInputModule() {
    }
    MultiSelectInputModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__multi_select_input_component__["a" /* MultiSelectInputComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__multi_select_input_component__["a" /* MultiSelectInputComponent */]
            ],
        })
    ], MultiSelectInputModule);
    return MultiSelectInputModule;
}());



/***/ }),

/***/ "../../../../../src/app/lib/single-select-input/single-select-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".root {\n    height: 100%;\n}\n\n.root button {\n    margin-top: 0.5em;\n    background-color: #3673AA;\n}\n\n.empty {\n    height: 5em;\n}\n\n.selection {\n    border: 1px solid;\n    color: #3673AA;\n    padding: 0.5em;\n    overflow: auto;\n    position: relative;\n    height: 100%;\n    width: 100%;\n    font-size: 0.7vw;\n    margin-top: 0.5em;\n    background-color: white;\n}\n\n.selection * {\n    cursor: default;\n}\n\n.selection div {\n    padding-left: 0.6em;\n}\n\n.selection div:hover {\n    background-color: aliceblue;\n}\n\n.selection div.selected {\n    background-color: deepskyblue;\n}\n\n.empty{\n    color: #AFAFAF;\n    text-align: center;\n}\n\n@media screen and (min-width: 1900px) {\n    .root {\n    }\n}\n\n@media (min-width: 768px) {\n    .root{\n    }\n}\n\n@media (min-width: 992px) {\n    .root{\n    }\n}\n\n.loadingIndication {\n    position:absolute;\n    top:0;\n    right:0;\n    bottom:0;\n    left:0;\n    background-color:white;\n    opacity:0.8;\n    z-index:30;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lib/single-select-input/single-select-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"root\">\n    <div class=\"selection\">\n        <div *ngIf=\"loading\" class=\"loadingIndication\">\n        <mat-progress-spinner mode=\"indeterminate\" style=\"top:30%; left: 30%\">\n        </mat-progress-spinner>\n    </div>\n      <div *ngIf=\"items.length==0\" class='empty'>{{emptyMessage}}</div>\n      <div *ngFor=\"let item of items; let i=index\"\n           (click)=\"check(item)\"\n           (dblclick)=\"_doubleClick(item)\"\n           [class.selected]=\"item == model\">\n          {{item.text}}\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lib/single-select-input/single-select-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleSelectInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SingleSelectInputComponent = /** @class */ (function () {
    function SingleSelectInputComponent() {
        this.isSelecting = false;
        this.enabled = true;
        this.listOnly = false;
        this.height = 160;
        this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.doubleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loading = false;
    }
    SingleSelectInputComponent.prototype.ngAfterViewInit = function () {
    };
    SingleSelectInputComponent.prototype.check = function (item) {
        this.model = item;
        this.modelChange.emit(this.model);
    };
    SingleSelectInputComponent.prototype._doubleClick = function (item) {
        this.model = item;
        this.doubleClick.emit(this.model);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('items'),
        __metadata("design:type", Object)
    ], SingleSelectInputComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('model'),
        __metadata("design:type", Object)
    ], SingleSelectInputComponent.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('enabled'),
        __metadata("design:type", Object)
    ], SingleSelectInputComponent.prototype, "enabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('listOnly'),
        __metadata("design:type", Object)
    ], SingleSelectInputComponent.prototype, "listOnly", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('height'),
        __metadata("design:type", Object)
    ], SingleSelectInputComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('emptyMessage'),
        __metadata("design:type", Object)
    ], SingleSelectInputComponent.prototype, "emptyMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('modelChange'),
        __metadata("design:type", Object)
    ], SingleSelectInputComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SingleSelectInputComponent.prototype, "doubleClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SingleSelectInputComponent.prototype, "loading", void 0);
    SingleSelectInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'single-select-input-component',
            template: __webpack_require__("../../../../../src/app/lib/single-select-input/single-select-input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lib/single-select-input/single-select-input.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SingleSelectInputComponent);
    return SingleSelectInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lib/single-select-input/single-select-input.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleSelectInputModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__single_select_input_component__ = __webpack_require__("../../../../../src/app/lib/single-select-input/single-select-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { CommonModule } from '@angular/platform-browser';

var SingleSelectInputModule = /** @class */ (function () {
    function SingleSelectInputModule() {
    }
    SingleSelectInputModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__single_select_input_component__["a" /* SingleSelectInputComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__single_select_input_component__["a" /* SingleSelectInputComponent */]
            ],
        })
    ], SingleSelectInputModule);
    return SingleSelectInputModule;
}());



/***/ }),

/***/ "../../../../../src/app/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n\n    <span>RotaSwapp</span>\n    <span class=\"example-spacer\"></span>\n    \n</mat-toolbar>\n\n<!--The whole content below can be removed with the new code.-->\n<div style=\"text-align:center; margin-top: 2em\">\n  <h3>\n    Please login with your credentials\n  </h3>\n</div>\n\n<div style=\"text-align: center\">\n  <form class=\"example-form\" (ngSubmit)=\"login()\" [formGroup]=\"loginForm\">\n    <mat-input-container class=\"example-full-width\">\n      <input matInput placeholder=\"User Name\" formControlName=\"uname\">\n    </mat-input-container>\n    <div></div>\n    <mat-input-container class=\"example-full-width\">\n      <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\">\n    </mat-input-container>\n\n    <input type=\"hidden\" name=\"_csrf\" value=\"${_csrf.token}\" />\n  </form>\n\n  <button mat-raised-button type=\"submit\" (click)=\"login()\">login</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, http, formBuilder) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.formBuilder = formBuilder;
        this.setMessage();
        this.loginForm = this.formBuilder.group({
            uname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */](),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function (params) {
            if (params['username']) {
                //this.authService.login(params['username']);
            }
        });
    };
    LoginComponent.prototype.setMessage = function () {
        //this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log("login attempt");
        this.message = 'Trying to log in ...';
        var url = '/login';
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var hidden = document.querySelector('input[type=hidden]');
        var hidden_data = "";
        try {
            hidden_data = "&" + hidden.getAttribute("name") + "=" + hidden.getAttribute("value");
        }
        catch (e) {
        }
        console.log(this.loginForm.controls.uname);
        var body = "username=" + this.loginForm.value.uname + "&password=" + this.loginForm.value.password + hidden_data + "&submit=Login";
        return new Promise(function (resolve) {
            _this.http.post(url, body, options).subscribe(function (data) {
                console.log(data.headers);
            });
        });
        // this.authService.login().subscribe(() => {
        //   this.setMessage();
        //   if (this.authService.isLoggedIn) {
        //     // Get the redirect URL from our auth service
        //     // If no redirect has been set, use the default
        //     let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin/users';
        //     // Redirect the user
        //     this.router.navigate([redirect]);
        //   }
        // });
    };
    LoginComponent.prototype.logout = function () {
        //this.authService.logout();
        //this.setMessage();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/activity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activity; });
/* unused harmony export ActivityType */
var Activity = /** @class */ (function () {
    function Activity(input) {
        this.id = input.id || 0;
        this.name = input.name || '';
        this.type = input.type || { id: 0 };
        this.description = input.description || '';
        this.scheduleStartDate = input.scheduleStartDate || '';
        this.scheduleEndDate = input.scheduleEndDate || null;
        this.activityShifts = input.activityShifts || [];
        this.activityConsultants = input.activityConsultants || [];
        this.expression = input.expression || {};
    }
    Activity.prototype.pack = function () {
        this.expression.pack();
    };
    return Activity;
}());

var ActivityType = /** @class */ (function () {
    function ActivityType() {
    }
    ActivityType.Training = 'Trainig';
    ActivityType.Service = 'Service';
    ActivityType.Late = 'Late';
    ActivityType.Night = 'Night';
    return ActivityType;
}());



/***/ }),

/***/ "../../../../../src/app/model/base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
// import { Component } from '@angular/core';
//import { Location } from '@angular/common';
//import { Router } from '@angular/router';
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
    }
    BaseComponent.prototype.revealElement = function (selector) {
        var elements = document.querySelectorAll(selector);
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var e = elements_1[_i];
            e.classList.remove("fadeOut");
            e.classList.remove("fadeIn");
            e.classList.add("fadeIn");
        }
    };
    BaseComponent.prototype.concealElement = function (selector) {
        var elements = document.querySelectorAll(selector);
        for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
            var e = elements_2[_i];
            e.classList.remove("fadeOut");
            e.classList.remove("fadeIn");
            e.classList.add("fadeOut");
        }
    };
    return BaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/criteria.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Operation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CriteriaExpression; });
/* unused harmony export ExpressionRowSetEntity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ExpressionConfigurationSetEntity; });
/* unused harmony export ConfigurationCriteriaSetEntity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Criteria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CriteriaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CriteriaList; });
var Operation;
(function (Operation) {
    Operation["AND"] = "AND";
    Operation["OR"] = "OR";
})(Operation || (Operation = {}));
var CriteriaExpression = /** @class */ (function () {
    function CriteriaExpression(object) {
        this.expressionRowSet = [];
        this.id = object.id;
        this.operationType = object.operationType;
        for (var _i = 0, _a = object.expressionRowSet; _i < _a.length; _i++) {
            var item = _a[_i];
            this.expressionRowSet.push(new ExpressionRowSetEntity(item));
        }
    }
    CriteriaExpression.prototype.createExpressionRowSetEntity = function () {
        var row = ExpressionRowSetEntity.createEmpty();
        this.expressionRowSet.push(row);
        return row;
    };
    CriteriaExpression.createEmpty = function () {
        return new CriteriaExpression({ id: null, operationType: Operation.AND, expressionRowSet: [] });
    };
    CriteriaExpression.prototype.removeExpressionRowSetEntity = function (expressionRowSetEntity) {
        var index = -1;
        var counter = 0;
        for (var _i = 0, _a = this.expressionRowSet; _i < _a.length; _i++) {
            var row = _a[_i];
            if (row == expressionRowSetEntity) {
                index = counter;
                break;
            }
            counter++;
        }
        if (index > -1) {
            this.expressionRowSet.splice(index, 1);
        }
    };
    CriteriaExpression.prototype.getPayload = function () {
        this.pack();
        return this;
    };
    CriteriaExpression.prototype.pack = function () {
        for (var _i = 0, _a = this.expressionRowSet; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, _c = row.expressionConfigurationSet; _b < _c.length; _b++) {
                var expr = _c[_b];
                expr.pack();
            }
        }
    };
    CriteriaExpression.setUserService = function (_userService) {
        CriteriaExpression._userService = _userService;
        ExpressionConfigurationSetEntity.userService = _userService;
    };
    CriteriaExpression.fetchCriteriaTypeOptions = function () {
        var _this = this;
        return CriteriaExpression._userService._getCriteriaTypes().then(function (criteriaTypes) {
            for (var _i = 0, criteriaTypes_1 = criteriaTypes; _i < criteriaTypes_1.length; _i++) {
                var _type = criteriaTypes_1[_i];
                _this.criteriaTypeOptions.push(_type);
                //ExpressionConfigurationSetEntity.critebb
            }
        });
    };
    CriteriaExpression.fetchCriteriaOptions = function () {
        var _this = this;
        return CriteriaExpression._userService._getCriterias().then(function (criterias) {
            for (var _i = 0, criterias_1 = criterias; _i < criterias_1.length; _i++) {
                var _criteria = criterias_1[_i];
                _this.criteriaOptions.push(_criteria);
                //ExpressionConfigurationSetEntity.critebb
            }
        });
    };
    CriteriaExpression.criteriaTypeOptions = [];
    CriteriaExpression.criteriaOptions = [];
    return CriteriaExpression;
}());

var ExpressionRowSetEntity = /** @class */ (function () {
    function ExpressionRowSetEntity(object) {
        this.expressionConfigurationSet = [];
        this.id = object.id;
        this.operationType = object.operationType;
        for (var _i = 0, _a = object.expressionConfigurationSet; _i < _a.length; _i++) {
            var item = _a[_i];
            this.expressionConfigurationSet.push(new ExpressionConfigurationSetEntity(item));
        }
    }
    ExpressionRowSetEntity.createEmpty = function () {
        return new ExpressionRowSetEntity({ id: null, operationType: Operation.OR, expressionConfigurationSet: [] });
    };
    ExpressionRowSetEntity.prototype.removeExpressionConfigurationSetEntity = function (expressionConfigurationSetEntity) {
        var index = -1;
        var counter = 0;
        for (var _i = 0, _a = this.expressionConfigurationSet; _i < _a.length; _i++) {
            var expression = _a[_i];
            if (expression == expressionConfigurationSetEntity) {
                index = counter;
                break;
            }
            counter++;
        }
        if (index > -1) {
            this.expressionConfigurationSet.splice(index, 1);
        }
    };
    ExpressionRowSetEntity.prototype.createExpressionConfigurationSetEntity = function () {
        this.expressionConfigurationSet.push(ExpressionConfigurationSetEntity.createEmpty());
    };
    return ExpressionRowSetEntity;
}());

var ExpressionConfigurationSetEntity = /** @class */ (function () {
    function ExpressionConfigurationSetEntity(object) {
        this.configurationCriteriaSet = [];
        this.model = [];
        this.options = [];
        this.configurationCriteriaSetToCriteriaTypeMap = {};
        this.id = object.id;
        this.operationType = object.operationType;
        this.count = object.count;
        for (var _i = 0, _a = object.configurationCriteriaSet; _i < _a.length; _i++) {
            var item = _a[_i];
            this.configurationCriteriaSet.push(new ConfigurationCriteriaSetEntity(item));
        }
        //
        //User first ConfigurationCriteria's type. If there are no ConfigurationCriterias default to criteria type "Grade"
        //
        if (this.configurationCriteriaSet[0] && this.configurationCriteriaSet[0].criteria) {
            this.criteriaType = this.configurationCriteriaSet[0].criteria.criteriaType.name;
        }
        else {
            this.criteriaType = 'Grade'; //quick and dirty
        }
        this.putCriteriaOptions(this.criteriaType);
        //
        //Since the data model that arrives from the server differs from the structure used by the form we need to unpack the former
        this.unpack();
    }
    Object.defineProperty(ExpressionConfigurationSetEntity.prototype, "criteriaTypeOptions", {
        get: function () {
            return CriteriaExpression.criteriaTypeOptions;
        },
        enumerable: true,
        configurable: true
    });
    ExpressionConfigurationSetEntity.createEmpty = function () {
        return new ExpressionConfigurationSetEntity({ id: null, operationType: Operation.OR, configurationCriteriaSet: [], count: 0 });
    };
    ExpressionConfigurationSetEntity.prototype.pack = function () {
        this.configurationCriteriaSet = [];
        for (var item in this.configurationCriteriaSetToCriteriaTypeMap) {
            if (this.configurationCriteriaSetToCriteriaTypeMap[item].length > 0) {
                for (var _i = 0, _a = this.configurationCriteriaSetToCriteriaTypeMap[item]; _i < _a.length; _i++) {
                    var configurationCriteriaSetItem = _a[_i];
                    this.configurationCriteriaSet.push(configurationCriteriaSetItem);
                }
            }
        }
    };
    ExpressionConfigurationSetEntity.prototype.unpack = function () {
        if (this.configurationCriteriaSet && this.configurationCriteriaSet.length > 0) {
            for (var _i = 0, _a = this.configurationCriteriaSet; _i < _a.length; _i++) {
                var v = _a[_i];
                this.model.push({ value: v, text: v.criteria.name });
            }
        }
    };
    ExpressionConfigurationSetEntity.prototype.changeCriteriaType = function (criteriaType) {
        this.model.length = 0;
        this.putCriteriaOptions(criteriaType);
    };
    ExpressionConfigurationSetEntity.prototype.putCriteriaOptions = function (criteriaType) {
        this.options.length = 0;
        for (var _i = 0, _a = CriteriaExpression.criteriaOptions; _i < _a.length; _i++) {
            var _criteria = _a[_i];
            if (_criteria.criteriaType.name == criteriaType) {
                var criteriaEntity = new ConfigurationCriteriaSetEntity({ id: null, criteria: _criteria });
                this.options.push(criteriaEntity);
            }
        }
    };
    Object.defineProperty(ExpressionConfigurationSetEntity.prototype, "comparisonCallback", {
        get: function () {
            return ExpressionConfigurationSetEntity._comparisonCallback;
        },
        enumerable: true,
        configurable: true
    });
    ExpressionConfigurationSetEntity.prototype.initConfigurationCriteriaSetByCriteriaType = function (typeList) {
        for (var _i = 0, typeList_1 = typeList; _i < typeList_1.length; _i++) {
            var type = typeList_1[_i];
            this.configurationCriteriaSetToCriteriaTypeMap[type.id] = [];
        }
        for (var _a = 0, _b = this.configurationCriteriaSet; _a < _b.length; _a++) {
            var configurationCriteriaSetItem = _b[_a];
            /* some category might not be part of typeList */
            if (!(configurationCriteriaSetItem.criteria.criteriaType.id in this.configurationCriteriaSetToCriteriaTypeMap)) {
                this.configurationCriteriaSetToCriteriaTypeMap[configurationCriteriaSetItem.criteria.criteriaType.id] = [];
            }
            this.configurationCriteriaSetToCriteriaTypeMap[configurationCriteriaSetItem.criteria.criteriaType.id].push(configurationCriteriaSetItem);
        }
    };
    ExpressionConfigurationSetEntity.prototype.getConfigurationCriteriaSetByType = function (type) {
        return this.configurationCriteriaSetToCriteriaTypeMap[type.id];
    };
    ExpressionConfigurationSetEntity._comparisonCallback = function (item1, item2) {
        return item1.criteria.name == item2.criteria.name;
    };
    return ExpressionConfigurationSetEntity;
}());

var ConfigurationCriteriaSetEntity = /** @class */ (function () {
    function ConfigurationCriteriaSetEntity(object) {
        this.id = object.id;
        this.criteria = new Criteria(object.criteria);
    }
    return ConfigurationCriteriaSetEntity;
}());

var Criteria = /** @class */ (function () {
    function Criteria(object) {
        this.id = object.id;
        this.name = object.name;
        if (object.criteriaType) {
            this.criteriaType = new CriteriaType(object.criteriaType);
        }
    }
    return Criteria;
}());

var CriteriaType = /** @class */ (function () {
    function CriteriaType(object) {
        this.id = object.id;
        this.name = object.name;
    }
    return CriteriaType;
}());

var CriteriaList = /** @class */ (function () {
    function CriteriaList() {
        this.categoryList = [];
        this.mapTypeToCriteria = {};
    }
    CriteriaList.prototype.getCategoryList = function () {
        return this.categoryList;
    };
    CriteriaList.prototype.getCriteriaListByCategory = function (type) {
        return this.mapTypeToCriteria[type.id];
    };
    CriteriaList.prototype.getCriteriaListByCategoryId = function (id) {
        return this.mapTypeToCriteria[id];
    };
    CriteriaList.prototype.addCriteria = function (criteria) {
        if (!(criteria.criteriaType.id in this.mapTypeToCriteria)) {
            this.mapTypeToCriteria[criteria.criteriaType.id] = [];
            this.categoryList.push(criteria.criteriaType);
        }
        this.mapTypeToCriteria[criteria.criteriaType.id].push(new ConfigurationCriteriaSetEntity({ 'criteria': criteria, 'id': null }));
    };
    return CriteriaList;
}());



/***/ }),

/***/ "../../../../../src/app/model/question-base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export QuestionBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TextboxQuestion; });
/* unused harmony export DropdownQuestion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MultiSelectQuestion; });
/* unused harmony export AppendNewItem */
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
var QuestionBase = /** @class */ (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.severity = options.severity || '';
        this.column = options.column || 0;
        this.group = options.group || '';
    }
    return QuestionBase;
}());

var CheckboxQuestion = /** @class */ (function (_super) {
    __extends(CheckboxQuestion, _super);
    function CheckboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'checkbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return CheckboxQuestion;
}(QuestionBase));

var TextboxQuestion = /** @class */ (function (_super) {
    __extends(TextboxQuestion, _super);
    function TextboxQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'textbox';
        _this.type = options['type'] || '';
        return _this;
    }
    return TextboxQuestion;
}(QuestionBase));

var DropdownQuestion = /** @class */ (function (_super) {
    __extends(DropdownQuestion, _super);
    function DropdownQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'dropdown';
        _this.options = [];
        _this.options = options['options'] || [];
        _this.selected = options['selected'] || {};
        return _this;
    }
    return DropdownQuestion;
}(QuestionBase));

var MultiSelectQuestion = /** @class */ (function (_super) {
    __extends(MultiSelectQuestion, _super);
    function MultiSelectQuestion(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.controlType = 'multiselect';
        _this.comparisonCallback = null;
        _this.label = '';
        _this.options = [];
        _this.model = [];
        _this.listOnly = options['listOnly'] || false;
        _this.label = options['label'] || '';
        _this.options = options['options'] || [];
        _this.model = options['model'] || [];
        _this.comparisonCallback = options['comparisonCallback'];
        return _this;
    }
    return MultiSelectQuestion;
}(QuestionBase));

var AppendNewItem = /** @class */ (function (_super) {
    __extends(AppendNewItem, _super);
    function AppendNewItem(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.label = '';
        _this.tooltip = '';
        _this.label = options['label'] || '';
        _this.tooltip = options['tooltip'] || '';
        _this.callback = options['callback'] || null;
        return _this;
    }
    return AppendNewItem;
}(QuestionBase));



/***/ }),

/***/ "../../../../../src/app/model/schedule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AssignmentEmployee */
/* unused harmony export AssignmentActivity */
/* unused harmony export AssignmentShift */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Assignment; });
/* unused harmony export ActivitySchedule */
/* unused harmony export EmployeeSchedule */
var AssignmentEmployee = /** @class */ (function () {
    function AssignmentEmployee() {
    }
    return AssignmentEmployee;
}());

var AssignmentActivity = /** @class */ (function () {
    function AssignmentActivity() {
    }
    return AssignmentActivity;
}());

var AssignmentShift = /** @class */ (function () {
    function AssignmentShift() {
    }
    return AssignmentShift;
}());

var Assignment = /** @class */ (function () {
    function Assignment(ass) {
        this.id = ass.id;
        this.assignmentId = ass.id;
        this.assignmentEmployees = ass.assignmentEmployees;
        this.assignmentActivities = ass.assignmentActivities;
        this.startTime = ass.startTime;
        this.dateFrom = ass.dateFrom;
        this.timeLength = ass.timeLength;
        this.dateTo = ass.dateTo;
        this.offsetLeft = ass.offsetLeft;
        this.width = ass.width;
        this.z_index = ass.z_index;
        this.shift = ass.shift;
        this.shiftName = ass.shiftName;
        this.day = ass.day;
        this.weekDay = ass.weekDay;
    }
    Assignment.prototype.getShiftName = function () {
        switch (this.shift) {
            case 'OffNight':
                return 'Night';
            case 'OffLate':
                return 'Zero Late';
            case 'AnnualLate':
                return 'Annual Late';
            case 'NotWorkingLate':
                return 'Off Late';
            case 'StudyLate':
                return 'Study Late';
            case 'OffNight':
                return 'Zero Night';
            case 'AnnualNight':
                return 'Annual Night';
            case 'NotWorkingNight':
                return 'Off Night';
            case 'StudyNight':
                return 'Study Night';
            case 'Off':
                return 'Zero';
            case 'NotWorking':
                return 'Off';
            default:
                return this.shift;
        }
    };
    return Assignment;
}());

var ActivitySchedule = /** @class */ (function () {
    function ActivitySchedule() {
        this.highlighted = false;
    }
    return ActivitySchedule;
}());

var EmployeeSchedule = /** @class */ (function () {
    function EmployeeSchedule() {
        this.highlighted = false;
    }
    return EmployeeSchedule;
}());



/***/ }),

/***/ "../../../../../src/app/model/tmdate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TmDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TmLength; });
var TmDate = /** @class */ (function () {
    function TmDate() {
        /** Determines whether this TmDate object should be highlighted. Whether to honor this is up to the component which displayes this object **/
        this.highlighted = false;
        this.date = new Date();
    }
    /** Returns instance with current date and clock of 00:00:00 */
    TmDate.today = function () {
        var instance = new this();
        instance.setTime("00:00:00 UTC");
        return instance;
    };
    TmDate.getMonthList = function () {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    };
    /** Returns instance with current date and time. Analogous to calling constructor */
    TmDate.now = function () {
        return new this();
    };
    /** Returns a copy of the instance */
    TmDate.prototype.fork = function () {
        var forked = new TmDate();
        forked.date.setTime(this.date.getTime());
        return forked;
    };
    TmDate.prototype.setTime = function (time) {
        var regexp = new RegExp('(\\d\\d):(\\d\\d):(\\d\\d)');
        var match = regexp.exec(time);
        this.date.setUTCHours(+match[1]);
        this.date.setUTCMinutes(+match[2]);
        this.date.setUTCSeconds(+match[3]);
        // return instance to allow for chaining
        return this;
    };
    TmDate.prototype.getDateString = function () {
        var month = this.date.getUTCMonth() + 1;
        var hour = this.date.getUTCHours();
        var minute = this.date.getUTCMinutes();
        var second = this.date.getUTCSeconds();
        var date = this.date.getUTCDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minute < 10) {
            minute = "0" + minute;
        }
        if (second < 10) {
            second = "0" + second;
        }
        if (date < 10) {
            date = "0" + date;
        }
        return this.date.getUTCFullYear() + "-" + month + "-" + date + " "
            + hour + ":" + minute + ":" + second;
    };
    TmDate.prototype.getShortDateWithYear = function () {
        var month = this.date.getUTCMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        return this.date.getUTCFullYear() + "/" + month + "/" + this.date.getUTCDate();
    };
    TmDate.prototype.get_ISO_8601_Date = function () {
        var month = this.date.getUTCMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        var date = this.date.getUTCDate();
        if (date < 10) {
            date = "0" + date;
        }
        return this.date.getUTCFullYear() + "-" + month + "-" + date;
    };
    TmDate.prototype.get_ISO_8601_Week_Number = function () {
        var target = new Date(this.date.valueOf());
        var dayNr = (this.date.getDay() + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        var firstThursday = target.valueOf();
        target.setMonth(0, 1);
        if (target.getDay() != 4) {
            target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
        }
        return 1 + Math.ceil((firstThursday - target.getTime()) / 604800000);
    };
    TmDate.prototype.getShortDate = function () {
        var month = this.date.getUTCMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        return this.date.getUTCDate() + "/" + month;
    };
    TmDate.prototype.alterDate = function (day) {
        this.date.setTime(this.date.getTime() + (3600 * 1000 * 24 * day));
        return this;
    };
    TmDate.prototype.setFromTmDate = function (date) {
        this.date = new Date(date.date);
        // return instance to allow for chaining
        return this;
    };
    TmDate.prototype.setFromDate = function (date) {
        this.date = new Date(date);
        return this;
    };
    /** Set instance's date. Format is dd.mm.yyyy*/
    TmDate.prototype.setDate = function (date) {
        var regexp = new RegExp('(\\d\\d).(\\d\\d).(\\d\\d\\d\\d)');
        var match = regexp.exec(date);
        this.date.setUTCDate(+match[1]);
        this.date.setUTCMonth(+match[2]);
        this.date.setUTCFullYear(+match[3]);
    };
    /** Set instance's date. Format is dd.mm.yyyy*/
    TmDate.prototype.setDateYMD = function (date) {
        var regexp = new RegExp('(\\d\\d\\d\\d).(\\d\\d).(\\d\\d)');
        var match = regexp.exec(date);
        this.date.setUTCFullYear(+match[1]);
        this.date.setUTCMonth(+match[2]);
        this.date.setUTCDate(+match[3]);
    };
    /** Alters month according to parameter. Use relative numbers
     */
    TmDate.prototype.alterMonth = function (month) {
        var currentMonth = this.date.getUTCMonth();
        this.date.setUTCMonth(currentMonth + month);
        return this;
    };
    /** Performs mathematical less-than-or-equal test between current instance and another one */
    TmDate.prototype.isLessOrEqual = function (otherDate) {
        return (this.date <= otherDate.date);
    };
    TmDate.prototype.isGreaterOrEqual = function (otherDate) {
        return (this.date >= otherDate.date);
    };
    TmDate.prototype.getWeekDay = function () {
        switch (this.date.getDay()) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
        }
    };
    TmDate.prototype.getMonth = function () {
        switch (this.date.getMonth()) {
            case 0:
                return 'January';
            case 1:
                return 'February';
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'September';
            case 9:
                return 'October';
            case 10:
                return 'November';
            case 11:
                return 'December';
        }
    };
    TmDate.prototype.setMonth = function (month) {
        console.log(this.date);
        switch (month) {
            case 'January':
                this.date.setUTCMonth(0);
                break;
            case 'February':
                this.date.setUTCMonth(1);
                break;
            case 'March':
                this.date.setUTCMonth(2);
                break;
            case 'April':
                this.date.setUTCMonth(3);
                break;
            case 'May':
                this.date.setUTCMonth(4);
                break;
            case 'June':
                this.date.setUTCMonth(5);
                break;
            case 'July':
                this.date.setUTCMonth(6);
                break;
            case 'August':
                this.date.setUTCMonth(7);
                break;
            case 'September':
                this.date.setUTCMonth(8);
                break;
            case 'October':
                this.date.setUTCMonth(9);
                break;
            case 'November':
                this.date.setUTCMonth(10);
                break;
            case 'December':
                this.date.setUTCMonth(11);
                break;
        }
        console.log(this.date);
    };
    TmDate.prototype.stdTimezoneOffset = function () {
        var jan = new Date(this.date.getFullYear(), 0, 1);
        var jul = new Date(this.date.getFullYear(), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    };
    TmDate.prototype.plusLength = function (length) {
        var newDate = this.fork();
        newDate.date.setTime(newDate.date.getTime() + (length.seconds * 1000));
        return newDate;
    };
    TmDate.prototype.getHumanDate = function () {
        var date = this.date.getUTCDate();
        switch (date) {
            case 1:
                date = '1st';
                break;
            case 2:
                date = '2nd';
                break;
            case 3:
                date = '3rd';
                break;
            default:
                date = date + "th";
                break;
        }
        return date + " of " + this.getMonth() + " " + this.date.getUTCFullYear();
    };
    return TmDate;
}());

/** A convinient model for keeping time length. */
var TmLength = /** @class */ (function () {
    function TmLength() {
    }
    TmLength.prototype.setHours = function (hours) {
        this.seconds = hours * 3600;
    };
    return TmLength;
}());



/***/ }),

/***/ "../../../../../src/app/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UserForm; });
/* unused harmony export EmployeeSupervisor */
/* unused harmony export EmployeeCriteria */
/* unused harmony export Criteria */
/* unused harmony export CriteriaType */
/* unused harmony export Phone */
/* unused harmony export Type */
/* unused harmony export Email */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grade; });
/* unused harmony export Role */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TrainingLevel; });
/* unused harmony export WorkingDay */
/* unused harmony export Day */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Shift; });
/* unused harmony export RmsUser */
/* unused harmony export ConsultantList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_question_base__ = __webpack_require__("../../../../../src/app/model/question-base.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var User = /** @class */ (function () {
    /**
     * Accepts a plain user object and blesses it into a feature User object
     */
    function User(user) {
        this.id = user.id;
        this.grade = user.grade;
        this.trainingLevel = user.trainingLevel;
        this.role = user.role;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.title = user.title;
        this.excludeFromRota = user.excludeFromRota;
        this.initials = user.initials;
        this.dateCreated = user.dateCreated;
        this.color = user.color;
        this.workingDays = WorkingDay.factory(user.workingDays);
        this.specialInterests = user.specialInterests;
        //this.employees = User.factory(user.employees);
        this.supervisors = User.factory(user.supervisors);
        this.phones = Phone.factory(user.phones);
        this.emails = Email.factory(user.emails);
        this.employeeCriteria = EmployeeCriteria.factory(user.employeeCriteria);
    }
    /**
     * Factory method for instantiating multiple User objects at once. Accepts
     * an array of plain user objects and blesses them into feature User objects
     */
    User.factory = function (input) {
        var users = [];
        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
            var user = input_1[_i];
            users.push(new User(user));
        }
        return users;
    };
    return User;
}());

var Form = /** @class */ (function () {
    function Form() {
        this.dynamicFormStruct = [];
    }
    Form.prototype.getFormStructByKey = function (key) {
        for (var _i = 0, _a = this.dynamicFormStruct; _i < _a.length; _i++) {
            var struct = _a[_i];
            if (struct.key == key) {
                return struct;
            }
        }
        return null;
    };
    Form.prototype.putAfterLast = function (key, item) {
        var index;
        for (var i = this.dynamicFormStruct.length - 1; i >= 0; i--) {
            if (this.dynamicFormStruct[i].key == key) {
                index = i;
            }
        }
        this.dynamicFormStruct.splice(index, 0, item);
    };
    return Form;
}());
var UserForm = /** @class */ (function () {
    function UserForm() {
        this.formDisabled = false;
        this.columns = [];
    }
    UserForm.factory = function (user) {
        //        let dynamicFormService = DynamicFormService.instance;
        //        if(!dynamicFormService) {
        //            throw new Error('dynamicFormService is null!');
        //        }
        var _this = this;
        return this.userService._getUsers(0, 1000, ['Consultant']).then(function (consultants) {
            var column = 0;
            /*
             * Prepare options for the consultant input element
             */
            var consultantOptions = [];
            for (var _i = 0, consultants_1 = consultants; _i < consultants_1.length; _i++) {
                var u = consultants_1[_i];
                consultantOptions.push({ value: u.id, text: u.firstName + " " + u.lastName });
            }
            var userForm = new UserForm();
            userForm.user = user;
            userForm.dynamicForm = new Form();
            userForm.commonForm = new Form();
            userForm.commonForm.dynamicFormStruct.push(new __WEBPACK_IMPORTED_MODULE_0__model_question_base__["c" /* TextboxQuestion */]({
                key: 'firstName',
                label: 'First Name',
                value: user.firstName,
                column: column,
            }));
            userForm.commonForm.dynamicFormStruct.push(new __WEBPACK_IMPORTED_MODULE_0__model_question_base__["c" /* TextboxQuestion */]({
                key: 'lastName',
                label: 'Last Name',
                value: user.lastName,
                column: column,
            }));
            userForm.commonForm.dynamicFormStruct.push(new __WEBPACK_IMPORTED_MODULE_0__model_question_base__["c" /* TextboxQuestion */]({
                key: 'title',
                label: 'Title',
                value: user.title,
                column: column,
            }));
            userForm.commonForm.dynamicFormStruct.push(new __WEBPACK_IMPORTED_MODULE_0__model_question_base__["c" /* TextboxQuestion */]({
                key: 'initials',
                label: 'Initials',
                value: user.initials,
                column: column,
            }));
            userForm.commonForm.dynamicFormStruct.push(new __WEBPACK_IMPORTED_MODULE_0__model_question_base__["a" /* CheckboxQuestion */]({
                key: 'excludeFromRota',
                label: 'Exclude this person from Automated Rota',
                value: user.excludeFromRota,
                column: column,
            }));
            if (!user.emails || user.emails.length == 0) {
                userForm.commonForm.dynamicFormStruct.push(new __WEBPACK_IMPORTED_MODULE_0__model_question_base__["c" /* TextboxQuestion */]({
                    key: 'email',
                    label: 'Email',
                    value: '',
                    column: column,
                    group: 'email',
                }));
            }
            else {
                for (var _a = 0, _b = user.emails; _a < _b.length; _a++) {
                    var email = _b[_a];
                    userForm.commonForm.dynamicFormStruct.push(new __WEBPACK_IMPORTED_MODULE_0__model_question_base__["c" /* TextboxQuestion */]({
                        key: 'email',
                        label: 'Email',
                        removable: true,
                        column: column,
                        group: 'email',
                        value: email.email //.email.email
                    }));
                }
            }
            /**
             * Appending the "Add another email" button
             */
            //            userForm.commonForm.dynamicFormStruct.push(new AppendNewItem({
            //                label: '+',
            //                group: 'email',
            //                tooltip: 'Add new email',
            //                callback: () => {
            //                    userForm.commonForm.putAfterLast('email', new TextboxQuestion({
            //                        key: 'email',
            //                        label: 'Email',
            //                        removable: true,
            //                        column: column,
            //                        group: 'email',
            //                        value: ''//.email.email
            //                    }));
            //                    userForm.calculateColumns();
            //                }
            //            }));
            if (!user.phones || user.phones.length == 0) {
                userForm.commonForm.dynamicFormStruct.push(new __WEBPACK_IMPORTED_MODULE_0__model_question_base__["c" /* TextboxQuestion */]({
                    key: 'phone',
                    label: 'Phone',
                    column: column,
                    group: 'phone',
                    value: '',
                }));
            }
            else {
                for (var _c = 0, _d = user.phones; _c < _d.length; _c++) {
                    var phone = _d[_c];
                    userForm.commonForm.dynamicFormStruct.push(new __WEBPACK_IMPORTED_MODULE_0__model_question_base__["c" /* TextboxQuestion */]({
                        key: 'phone',
                        label: 'Phone',
                        column: column,
                        group: 'phone',
                        value: phone.phone //.phone.phone
                    }));
                }
            }
            /**
             * Appending the "Add another phone" button
             */
            //            userForm.commonForm.dynamicFormStruct.push(new AppendNewItem({
            //                label: '+',
            //                group: 'phone',
            //                tooltip: 'Add new phone',
            //                callback: () => {
            //                    userForm.commonForm.putAfterLast('phone', new TextboxQuestion({
            //                        key: 'phone',
            //                        label: 'Phone',
            //                        removable: true,
            //                        column: column,
            //                        group: 'phone',
            //                        value: ''//.email.email
            //                    }));
            //                    userForm.calculateColumns();
            //                }
            //            }));
            //            let phone0value = '';
            //            if(user.emails[0]) {
            //                phone0value = user.phones[0].phone;
            //            }
            //            userForm.commonForm.dynamicFormStruct.push(new TextboxQuestion({
            //                key: 'phone',
            //                label: 'Phone',
            //                value: phone0value,
            //            }));
            column++;
            userForm.commonForm.dynamicFormStruct.push(new __WEBPACK_IMPORTED_MODULE_0__model_question_base__["b" /* MultiSelectQuestion */]({
                key: 'workingDays',
                label: 'Working Days',
                listOnly: true,
                column: column,
                model: [],
                options: UserForm.weekDays,
            }));
            userForm.commonForm.dynamicFormStruct.push(new __WEBPACK_IMPORTED_MODULE_0__model_question_base__["b" /* MultiSelectQuestion */]({
                key: 'supervisors',
                label: 'Consultants',
                column: column,
                model: [],
                options: consultantOptions,
            }));
            userForm.unpackConsultantsModel();
            userForm.unpackWorkingDays();
            userForm.commonForm.formGroup = UserForm.dynamicFormService.toFormGroup(userForm.commonForm.dynamicFormStruct);
            column++;
            return UserForm.userService._getCriterias().then(function (criterias) {
                return UserForm.userService._getCriteriaTypes().then(function (criteriaTypes) {
                    for (var _i = 0, criteriaTypes_1 = criteriaTypes; _i < criteriaTypes_1.length; _i++) {
                        var ctype = criteriaTypes_1[_i];
                        var model = [];
                        for (var _a = 0, _b = user.employeeCriteria; _a < _b.length; _a++) {
                            var ec = _b[_a];
                            if (ec.criteria.criteriaType.name == ctype.name) {
                                model.push({ text: ec.criteria.name, value: ec });
                            }
                        }
                        var typeCriterias = [];
                        for (var _c = 0, criterias_1 = criterias; _c < criterias_1.length; _c++) {
                            var c = criterias_1[_c];
                            if (c.criteriaType.name == ctype.name) {
                                typeCriterias.push({ text: c.name, value: { criteria: c } });
                            }
                        }
                        userForm.dynamicForm.dynamicFormStruct.push(new __WEBPACK_IMPORTED_MODULE_0__model_question_base__["b" /* MultiSelectQuestion */]({
                            key: ctype.name,
                            label: ctype.name,
                            options: typeCriterias,
                            model: model,
                            column: column,
                            comparisonCallback: function (item1, item2) {
                                return item1.criteria.name == item2.criteria.name;
                            }
                        }));
                    }
                    userForm.dynamicForm.formGroup = _this.dynamicFormService.toFormGroup(userForm.dynamicForm.dynamicFormStruct);
                    userForm.calculateColumns();
                    return Promise.resolve(userForm);
                });
            });
        });
    };
    UserForm.prototype.calculateColumns = function () {
        var fields = this.commonForm.dynamicFormStruct.concat(this.dynamicForm.dynamicFormStruct);
        var columns = [];
        var column = [];
        var columnIItems = Math.ceil(fields.length / UserForm.colNumber);
        var ic = 0;
        var i = 0;
        var field;
        while (field = fields.shift()) {
            if (i > columnIItems || (field.controlType == 'multiselect' && i >= columnIItems)) {
                if (field.group == '' || (column[i - 1] && column[i - 1].group != field.group)) {
                    columns.push(column);
                    column = [];
                    i = 0;
                }
            }
            column.push(field);
            //
            // Multiselect fields cover twice the space (approximately)
            if (field.controlType == 'multiselect') {
                i += 2;
            }
            else {
                i++;
            }
        }
        if (column.length > 0) {
            columns.push(column);
        }
        //        for(let i=0; i < UserForm.colNumber; i++) {
        //            let column = [];
        //            for(let ii=0; ii < columnIItems; ii++) {
        //                /*
        //                 * Quit loop if there are no more fields
        //                 */
        //                if(fields[(i*columnIItems)+ii] != undefined) {
        //                    column.push(fields[(i*columnIItems)+ii]);
        //                }
        //            }
        //            columns.push(column);
        //        }
        this.columns = columns;
    };
    UserForm.prototype.save = function () {
        this.packConsultantsModel();
        this.packEmployeeCriteria();
        this.packWorkingDays();
        var user = __assign({}, this.user, this.commonForm.formGroup.value, this.dynamicForm.formGroup.value);
        var v = false;
        if (v != false) {
            return Promise.resolve({ status: 'ok' }); //
        }
        for (var k in user) {
            if (user[k] && typeof user[k] == 'string' && user[k].length == 0) {
                user[k] = null;
            }
        }
        //        if(!user.workingDays) {
        //            user.workingDays = []
        //        }
        //
        //        user.workingDays.push({day: 'Monday', shift: user.Monday});
        //        user.workingDays.push({day: 'Tuesday', shift: user.Tuesday});
        //        user.workingDays.push({day: 'Wednesday', shift: user.Wednesday});
        //        user.workingDays.push({day: 'Thursday', shift: user.Thursday});
        //        user.workingDays.push({day: 'Friday', shift: user.Friday});
        //        user.workingDays.push({day: 'Saturday', shift: user.Saturday});
        //        user.workingDays.push({day: 'Sunday', shift: user.Sunday});
        user.emails = [{ email: user.email, type: 'work' }];
        user.phones = [{ phone: user.phone, type: 'work' }];
        delete (this.user.grade);
        delete (this.user.trainingLevel);
        delete (this.user.role);
        return UserForm.userService.saveUser(user);
    };
    UserForm.prototype.unpackConsultantsModel = function () {
        if (this.user.supervisors && this.user.supervisors.length > 0) {
            for (var _i = 0, _a = this.user.supervisors; _i < _a.length; _i++) {
                var v = _a[_i];
                this.commonForm.getFormStructByKey('supervisors').model.push({ value: "" + v.supervisor.id, text: v.supervisor.firstName + " " + v.supervisor.lastName });
            }
        }
    };
    UserForm.prototype.packConsultantsModel = function () {
        // A consultant cannot have another consultant above him
        if (this.user.grade == 'Consultant') {
            return;
        }
        if (!this.user.supervisors) {
            this.user.supervisors = [];
        }
        for (var _i = 0, _a = this.commonForm.getFormStructByKey('supervisors').model; _i < _a.length; _i++) {
            var v = _a[_i];
            this.user.supervisors.push({ supervisor: { id: v.value } });
        }
    };
    UserForm.prototype.packEmployeeCriteria = function () {
        if (!this.user.employeeCriteria) {
            this.user.employeeCriteria = [];
        }
        else {
            this.user.employeeCriteria.length = 0;
        }
        for (var _i = 0, _a = this.dynamicForm.dynamicFormStruct; _i < _a.length; _i++) {
            var formStruct = _a[_i];
            for (var _b = 0, _c = formStruct.model; _b < _c.length; _b++) {
                var model = _c[_b];
                this.user.employeeCriteria.push(model.value);
            }
        }
    };
    UserForm.prototype.unpackEmployeeCriteria = function () {
        if (this.user.employeeCriteria && this.user.employeeCriteria.length > 0) {
            for (var _i = 0, _a = this.user.employeeCriteria; _i < _a.length; _i++) {
                var v = _a[_i];
                this.dynamicForm.getFormStructByKey(v.criteria.criteriaType.name)
                    .model.push({ value: v, text: v.criteria.name });
            }
        }
    };
    UserForm.prototype.packWorkingDays = function () {
        var workingDays = [];
        var _loop_1 = function (day) {
            if (this_1.commonForm.getFormStructByKey('workingDays').model.find(function (v) {
                return v.value == day.value;
            })) {
                workingDays.push({ day: day.value, shift: 'Day' });
            }
            else {
                workingDays.push({ day: day.value, shift: 'NotWorking' });
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = UserForm.weekDays; _i < _a.length; _i++) {
            var day = _a[_i];
            _loop_1(day);
        }
        this.user.workingDays = workingDays;
    };
    UserForm.prototype.unpackWorkingDays = function () {
        if (this.user.workingDays && this.user.workingDays.length > 0) {
            for (var _i = 0, _a = this.user.workingDays; _i < _a.length; _i++) {
                var day = _a[_i];
                if (day.shift == 'Day') {
                    this.commonForm.getFormStructByKey('workingDays').model.push({ value: day.day, text: day.day });
                }
            }
        }
    };
    //
    //    public getConsultants() {
    //        this.userService._getUsers(0, 1000, ['Consultant']).then(users => {
    //            if(users){
    //                this.consultants.length = 0;
    //                for(let u of users) {
    //                    this..push({value: u.id, text: u.firstName+" "+u.lastName});
    //                }
    //            }
    //        });
    //    }
    UserForm.prototype.toggleFormDisability = function () {
        this.formDisabled = !this.formDisabled;
        this.applyFormDisability();
    };
    UserForm.prototype.disableForm = function () {
        this.formDisabled = true;
        this.applyFormDisability();
    };
    UserForm.prototype.enableForm = function () {
        this.formDisabled = false;
        this.applyFormDisability();
    };
    UserForm.prototype.applyFormDisability = function () {
        for (var key in this.commonForm.formGroup.controls) {
            if (this.formDisabled == true) {
                this.commonForm.formGroup.controls[key].disable();
            }
            else {
                this.commonForm.formGroup.controls[key].enable();
            }
        }
        for (var key in this.dynamicForm.formGroup.controls) {
            if (this.formDisabled == true) {
                this.dynamicForm.formGroup.controls[key].disable();
            }
            else {
                this.dynamicForm.formGroup.controls[key].enable();
            }
        }
    };
    UserForm.weekDays = [
        { text: 'Monday', value: 'Monday' },
        { text: 'Tuesday', value: 'Tuesday' },
        { text: 'Wednesday', value: 'Wednesday' },
        { text: 'Thursday', value: 'Thursday' },
        { text: 'Friday', value: 'Friday' },
    ];
    UserForm.colNumber = 3;
    return UserForm;
}());

var EmployeeSupervisor = /** @class */ (function () {
    function EmployeeSupervisor() {
    }
    return EmployeeSupervisor;
}());

var EmployeeCriteria = /** @class */ (function () {
    function EmployeeCriteria(input) {
        this.id = input.id;
        //this.employee = new User(input.employee);
        this.criteria = new Criteria(input.criteria);
    }
    EmployeeCriteria.factory = function (input) {
        var employeeCriterias = [];
        for (var _i = 0, input_2 = input; _i < input_2.length; _i++) {
            var employeeCriteria = input_2[_i];
            employeeCriterias.push(new EmployeeCriteria(employeeCriteria));
        }
        return employeeCriterias;
    };
    return EmployeeCriteria;
}());

var Criteria = /** @class */ (function () {
    function Criteria(input) {
        this.id = input.id;
        this.criteriaType = new CriteriaType(input.criteriaType);
        this.name = input.name;
    }
    return Criteria;
}());

var CriteriaType = /** @class */ (function () {
    function CriteriaType(input) {
        this.id = input.id;
        this.name = input.name;
    }
    return CriteriaType;
}());

var Phone = /** @class */ (function () {
    function Phone(input) {
        this.id = input.id;
        this.phone = input.phone;
        this.type = input.type;
    }
    Phone.factory = function (input) {
        var phones = [];
        for (var _i = 0, input_3 = input; _i < input_3.length; _i++) {
            var phone = input_3[_i];
            phones.push(new Phone(phone));
        }
        return phones;
    };
    return Phone;
}());

var Type;
(function (Type) {
    Type["Personal"] = "personal";
    Type["Work"] = "work";
    Type["Beep"] = "beep";
})(Type || (Type = {}));
var Email = /** @class */ (function () {
    function Email(input) {
        this.id = input.id;
        this.email = input.email;
        this.type = input.type;
    }
    Email.factory = function (input) {
        var emails = [];
        for (var _i = 0, input_4 = input; _i < input_4.length; _i++) {
            var email = input_4[_i];
            emails.push(new Email(email));
        }
        return emails;
    };
    return Email;
}());

var Grade;
(function (Grade) {
    Grade["FY"] = "FY";
    Grade["JuniorRegistrar"] = "JuniorRegistrar";
    Grade["SeniorRegistrar"] = "SeniorRegistrar";
    Grade["SHO"] = "SHO";
    Grade["Consultant"] = "Consultant";
})(Grade || (Grade = {}));
var Role;
(function (Role) {
    Role["Trainee"] = "Trainee";
    Role["CRF"] = "CRF";
    Role["TrustGrade"] = "TrustGrade";
})(Role || (Role = {}));
var TrainingLevel;
(function (TrainingLevel) {
    TrainingLevel["FY1"] = "FY1";
    TrainingLevel["FY2"] = "FY2";
    TrainingLevel["ST1"] = "ST1";
    TrainingLevel["ST2"] = "ST2";
    TrainingLevel["ST3"] = "ST3";
    TrainingLevel["ST4"] = "ST4";
    TrainingLevel["ST5"] = "ST5";
    TrainingLevel["ST6"] = "ST6";
    TrainingLevel["ST7"] = "ST7";
})(TrainingLevel || (TrainingLevel = {}));
var WorkingDay = /** @class */ (function () {
    function WorkingDay(input) {
        this.id = input.id;
        this.day = input.day;
        this.shift = input.shift;
    }
    WorkingDay.factory = function (input) {
        var workingDays = [];
        for (var _i = 0, input_5 = input; _i < input_5.length; _i++) {
            var day = input_5[_i];
            workingDays.push(new WorkingDay(day));
        }
        return workingDays;
    };
    return WorkingDay;
}());

var Day;
(function (Day) {
    Day["Monday"] = "Monday";
    Day["Tuesday"] = "Tuesday";
    Day["Wednesday"] = "Wednesday";
    Day["Thursday"] = "Thursday";
    Day["Friday"] = "Friday";
    Day["Saturday"] = "Saturday";
    Day["Sunday"] = "Sunday";
})(Day || (Day = {}));
var Shift;
(function (Shift) {
    Shift["OFF"] = "OFF";
    Shift["AM"] = "AM";
    Shift["PM"] = "PM";
    Shift["Late"] = "Late";
    Shift["Day"] = "Day";
    Shift["OC"] = "OC";
    Shift["Night"] = "Night";
    Shift["Annual"] = "Annual";
    Shift["Study"] = "Study";
    Shift["NotAssigned"] = "NotAssigned";
})(Shift || (Shift = {}));
var RmsUser = /** @class */ (function () {
    function RmsUser() {
    }
    return RmsUser;
}());

var ConsultantList = /** @class */ (function () {
    function ConsultantList() {
        this.consultantList = [];
        this.mapTypeToUser = {};
        //    public getCriteriaListByCategory(type: User): ConfigurationCriteriaSetEntity[] {
        //        return this.mapTypeToCriteria[type.id];
        //    }
        //
        //    public getCriteriaListByCategoryId(id: number): ConfigurationCriteriaSetEntity[] {
        //        return this.mapTypeToCriteria[id];
        //    }
        //    public addConsultant(user: User){
        //        if (!(user.id in this.mapTypeToUser)) {
        //            this.mapTypeToUser[user.userType.id] = [];
        //            this.consultantList.push(user.userType);
        //        }
        //
        //        this.mapTypeToUser[user.userType.id].push(new ConfigurationUserSetEntity({'user':user,'id':null}));
        //    }
    }
    ConsultantList.prototype.getConsultantList = function () {
        return this.consultantList;
    };
    return ConsultantList;
}());



/***/ }),

/***/ "../../../../../src/app/service/activity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_activity__ = __webpack_require__("../../../../../src/app/model/activity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_criteria__ = __webpack_require__("../../../../../src/app/model/criteria.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
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






/** Importing models */




var ActivityService = /** @class */ (function () {
    function ActivityService(http, localStorageService, userService) {
        this.http = http;
        this.localStorageService = localStorageService;
        this.userService = userService;
        /** HTTP headers that we like to send with every request. Angular is going to merge them to browser's ones*/
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        /** Holds activity type list. Initially it is empty but will get populated after the first call to getActivityTypes() */
        this.activityTypes = [];
        this.activitiesSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.activities_collection = [];
        this.totalCount = 0;
        // We will cache the last result from the server.
        this.lastOffset = 0;
        this.lasPageSize = 0;
        this.restoreProperties(); // restore service's properties from local storage
    }
    /** Stores selected properties from this service to browser's local storage. NOTE Since Angular
     *  service don't have destructors (at least as far as I know) we will call this method whenever
     *  those properties are changed
     */
    ActivityService.prototype.storeProperties = function () {
        this.localStorageService.set(this.constructor.name + '.lastOffset', this.lastOffset);
        this.localStorageService.set(this.constructor.name + '.lasPageSize', this.lasPageSize);
        this.localStorageService.set(this.constructor.name + '.totalCount', this.totalCount);
    };
    /** Restores selected properties from this service.   */
    ActivityService.prototype.restoreProperties = function () {
        var lastOffset = this.localStorageService.get(this.constructor.name + '.lastOffset');
        if (lastOffset != null) {
            this.lastOffset = lastOffset;
        }
        var lasPageSize = this.localStorageService.get(this.constructor.name + '.lasPageSize');
        if (lasPageSize != null) {
            this.lasPageSize = lasPageSize;
        }
        var totalCount = this.localStorageService.get(this.constructor.name + '.totalCount');
        if (totalCount != null) {
            //this.totalCount = totalCount;
        }
    };
    /** Fetches activities from backend.
     *
     *  @param offset number indicating how many rows to skip when returning activities
     *  @param limit  number indicating how many activities to include in the result
     *  @return Promise
     */
    ActivityService.prototype._getActivities = function (offset, limit, activityTypes) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 1000; }
        if (activityTypes === void 0) { activityTypes = null; }
        var url = 'api/activity/list';
        var payload;
        payload = {
            'types': activityTypes,
            'pager': {
                'offset': offset,
                'limit': limit,
            },
        };
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (response) {
            var responseJson = response.json();
            //let activities = responseJson.activityList as Activity[];
            _this.totalCount = responseJson.totalCount; //responseJson.totalCount as number;
            var activities = responseJson.activities;
            return Promise.resolve(activities);
        });
    };
    ActivityService.prototype._getAllActivities = function (offset, limit, activityTypes) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 1000; }
        if (activityTypes === void 0) { activityTypes = null; }
        var url = 'api/activity/list-all';
        var payload;
        payload = {
            'types': activityTypes,
            'pager': {
                'offset': offset,
                'limit': limit,
            },
        };
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (response) {
            var responseJson = response.json();
            //let activities = responseJson.activityList as Activity[];
            _this.totalCount = responseJson.totalCount; //responseJson.totalCount as number;
            var activities = responseJson.activities;
            return Promise.resolve(activities);
        });
    };
    /** Fetches activities from backend.
     *
     *  @param offset number indicating how many rows to skip when returning activities
     *  @param limit  number indicating how many activities to include in the result
     *  @return Promise
     */
    //  public getActivityHistory(activityId: number, offset: number=0, limit: number=20): Promise<ActivityHistoryEntry[]> {
    //        let url: string = 'api/activity/history';
    //        let payload: {[key:string]: object|string|number};
    //        payload = {
    //              "pager" : {
    //                    "offset": offset,
    //                    "limit": limit,
    //              },
    //              "id": activityId,
    //      };
    //
    //        return this.http
    //        .post(url, JSON.stringify(payload), { headers: this.headers })
    //        .toPromise().then(response => {
    //            let responseJson = response.json();
    //            //let activities = responseJson.activityList as Activity[];
    //            this.totalCount = responseJson.totalCount; //responseJson.totalCount as number;
    //            let activityHistories = responseJson.activityHistories;
    //            return Promise.resolve(activityHistories)
    //        })
    //  }
    /** Retrieves activities from the backend. The last result will be cached. So if the user navigates
     *  somewhere else and comes back to the List Activities page she would see the last fetched results
     *  (without unpleasent blinking)
     *
     *  @param offset number indicating how many rows to skip when returning activities
     *  @param pageSize number indicating how many activities to include in the result
     *  @return Observable
     */
    ActivityService.prototype.retrieve = function (offset, pageSize) {
        var _this = this;
        var promise;
        //      if (this.lastOffset == offset && this.lasPageSize == pageSize && this.activities_collection.length > 0) {
        //            promise = Promise.resolve(this.activities_collection); // return cached result if the criteria passed
        //                                                              // through (offset, pageSize) is the same
        //                                                              // as the last one
        //      }
        //      else {
        promise = this._getActivities(offset, pageSize);
        this.lasPageSize = pageSize;
        this.lastOffset = offset;
        this.storeProperties();
        //      }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromPromise(promise.then(function (users) {
            var _users = users.slice();
            _this.activities_collection.length = 0;
            (_a = _this.activities_collection).splice.apply(_a, [0, 0].concat(_users));
            return _this.activities_collection;
            var _a;
        }));
    };
    /** This is a convinient function to call getActivities() with *id* as the only parameter */
    ActivityService.prototype.getActivity = function (activityId) {
        var _this = this;
        var url = 'api/activity/list-detailed';
        var payload;
        payload = {
            pager: {
                'offset': 0,
                'limit': 1,
            },
            id: activityId,
        };
        return this.userService._getCriterias().then(function (criterias) {
            return _this.userService._getCriteriaTypes().then(function (criteriaTypes) {
                for (var _i = 0, criteriaTypes_1 = criteriaTypes; _i < criteriaTypes_1.length; _i++) {
                    var ctype = criteriaTypes_1[_i];
                    var model = [];
                    //                        for(let ec of user.employeeCriteria) {
                    //                            if(ec.criteria.criteriaType.name == ctype.name) {
                    //                                model.push({text: ec.criteria.name, value: ec});
                    //                            }
                    //                        }
                    var typeCriterias = [];
                    for (var _a = 0, criterias_1 = criterias; _a < criterias_1.length; _a++) {
                        var c = criterias_1[_a];
                        if (c.criteriaType.name == ctype.name) {
                            typeCriterias.push({ text: c.name, value: { criteria: c } });
                        }
                    }
                    //                        userForm.dynamicForm.dynamicFormStruct.push(new MultiSelectQuestion({
                    //                            key: ctype.name,
                    //                            label: ctype.name,
                    //                            options: typeCriterias,
                    //                            model: model,
                    //                            column: column,
                    //                            comparisonCallback: (item1: any, item2: any) => {
                    //                                return item1.criteria.name == item2.criteria.name;
                    //                            }
                    //                        }));
                }
                //userForm.dynamicForm.formGroup = this.dynamicFormService.toFormGroup(userForm.dynamicForm.dynamicFormStruct);
                //userForm.calculateColumns();
                //return Promise.resolve(userForm);
                return _this.http
                    .post(url, payload, { headers: _this.headers })
                    .toPromise().then(function (response) {
                    var activity = response.json();
                    if (activity == null) {
                        throw "basi filma";
                    }
                    __WEBPACK_IMPORTED_MODULE_8__model_criteria__["b" /* CriteriaExpression */].setUserService(_this.userService);
                    activity.expression = new __WEBPACK_IMPORTED_MODULE_8__model_criteria__["b" /* CriteriaExpression */](activity.expression);
                    //delete(activity.id);
                    try {
                        var date = new Date();
                        date.setTime(activity.scheduleStartDate);
                        activity.scheduleStartDate = date.toISOString();
                    }
                    catch (e) {
                    }
                    try {
                        if (activity.scheduleEndDate) {
                            var date = new Date();
                            date.setTime(activity.scheduleEndDate);
                            activity.scheduleEndDate = date.toISOString();
                        }
                    }
                    catch (e) {
                    }
                    return Promise.resolve(activity);
                });
            });
        });
    };
    ActivityService.prototype.prepareConfiguration = function (activity) {
        var n_staffTrainLevelCount = [];
        for (var p in __WEBPACK_IMPORTED_MODULE_7__model_user__["c" /* TrainingLevel */]) {
            n_staffTrainLevelCount.push({ trainingLevel: p, count: 0 });
        }
        var _staffTrainLevelCount = [];
        for (var p in __WEBPACK_IMPORTED_MODULE_7__model_user__["c" /* TrainingLevel */]) {
            _staffTrainLevelCount.push({ trainingLevel: p, count: 0 });
        }
        var n_staffGradeCount = [];
        var disabled = false;
        for (var p in __WEBPACK_IMPORTED_MODULE_7__model_user__["a" /* Grade */]) {
            disabled = (p == 'Consultant') ? true : false;
            n_staffGradeCount.push({ grade: p, count: 0, disabled: disabled });
        }
        var _staffGradeCount = [];
        for (var p in __WEBPACK_IMPORTED_MODULE_7__model_user__["a" /* Grade */]) {
            _staffGradeCount.push({ grade: p, count: 0, disabled: false });
        }
        activity.configuration = {
            countFY: 8,
            gradeCounts: n_staffGradeCount,
            trainingLevelCounts: n_staffTrainLevelCount,
        };
        activity.configurationConsultant = {
            gradeCounts: _staffGradeCount,
            trainingLevelCounts: _staffTrainLevelCount,
        };
    };
    ActivityService.prototype.prepareShifts = function (shift) {
        var shift_;
        var cronExpression;
        if (shift == 'Off') {
            cronExpression = '* * * * * Mon,Tue,Wed,Thu,Fri,Sat,Sun';
        }
        else {
            cronExpression = '';
        }
        shift_ = {
            cron: [{ weekNumber: 0, type: 'weekly', expression: cronExpression }],
            shift: shift,
        };
        return shift_;
    };
    ActivityService.prototype.getEmptyActivity = function () {
        var time = new Date();
        var activity = new __WEBPACK_IMPORTED_MODULE_6__model_activity__["a" /* Activity */]({
            description: '',
            name: '',
            type: { id: 0 },
            activityShifts: [],
            activityConsultants: [],
            scheduleStartDate: time.toISOString(),
            scheduleEndDate: null,
            expression: __WEBPACK_IMPORTED_MODULE_8__model_criteria__["b" /* CriteriaExpression */].createEmpty()
        });
        //let activityShifts = [];
        for (var _i = 0, _a = ['Off', 'AM', 'PM']; _i < _a.length; _i++) {
            var shift = _a[_i];
            activity.activityShifts.push(this.prepareShifts(shift));
        }
        this.prepareConfiguration(activity);
        return activity;
    };
    /** Save activity to the server. If the *activity* object doesn't have *id* property a new instance will be
     *  recorded in database, otherwise (and if the id is valid) the existing activity will be updated
     */
    ActivityService.prototype.saveActivity = function (activity) {
        var url = 'api/activity/save';
        activity.expression.pack();
        var v = 2;
        if (v == 1) {
            return Promise.resolve({ status: 'ok' });
        }
        return this.http
            .post(url, JSON.stringify(activity), { headers: this.headers })
            .toPromise().then(function (response) {
            //return Promise.resolve({status: response.json().status});
            return Promise.resolve({ status: 'ok', id: response.json().activity.id });
        }).catch(function (response) {
            return Promise.resolve({ status: 'failure' });
        });
    };
    /** Save activity to the server. If the *activity* object doesn't have *id* property a new instance will be
     *  recorded in database, otherwise (and if the id is valid) the existing activity will be updated
     */
    ActivityService.prototype.deleteActivity = function (activityId) {
        var url = 'api/activity/delete';
        var payload = {
            id: activityId,
        };
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (response) {
            return Promise.resolve({ status: response.json().status });
            //return Promise.resolve({status: '',});
        }).catch(function (response) {
            return Promise.resolve({ status: 'failure' });
        });
    };
    /** Returns a promise which when resolved will contain a list of activity types. When this method is called for the first
     * time types will be fetched from the backend and stored locally as cache. All subsequent calls to this method will
     * return cached data (this is for performance reasons).
     */
    ActivityService.prototype.getActivityTypes = function () {
        var _this = this;
        var url = 'api/activity/getTypes';
        if (this.activityTypes.length == 0) {
            return this.http.post(url, null, { headers: this.headers }).toPromise().then(function (response) {
                _this.activityTypes = response.json();
                return Promise.resolve(_this.activityTypes);
            });
        }
        else {
            return Promise.resolve(this.activityTypes);
        }
    };
    ActivityService.prototype.schedulePreview = function (activity, previewStartDate, previewEndDate) {
        var url = 'api/activity/preview';
        var _activity = __assign({}, activity, { type: 'Service', name: 'name' });
        var payload = {
            activity: _activity,
            previewStartDate: previewStartDate,
            previewEndDate: previewEndDate,
        };
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (response) {
            //return Promise.resolve({status: response.json().status});
            return response.json();
        }).catch(function (response) {
            return Promise.resolve({ status: 'failure' });
        });
    };
    ActivityService.prototype.fetchSpread = function (dateFrom, dateTo, callback) {
        var _this = this;
        var url = 'api/activity/spread';
        var payload;
        payload = {
            dateFrom: dateFrom.get_ISO_8601_Date(),
            dateTo: dateTo.get_ISO_8601_Date(),
        };
        this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (response) {
            var responseJson = response.json();
            //let activities = responseJson.activityList as Activity[];
            _this.totalCount = responseJson.totalCount; //responseJson.totalCount as number;
            callback(responseJson.spreads);
        });
    };
    ActivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"], __WEBPACK_IMPORTED_MODULE_9__service_user_service__["a" /* UserService */]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "../../../../../src/app/service/admincomponent.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { Headers, Http, Response } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
//import * as Rx from 'rxjs/Rx';
// /** imports related to UserDataSource */
// import { DataSource } from '@angular/cdk';
/** Importing models */
//import { Subscription } from 'rxjs/Subscription';
//import { Observable } from 'rxjs/Observable';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
/* Import models */
//import { Vehicle } from '../model/activity';
var AdminComponentService = /** @class */ (function () {
    function AdminComponentService() {
        this.taskBarEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.menuVisibilityEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AdminComponentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AdminComponentService);
    return AdminComponentService;
}());



/***/ }),

/***/ "../../../../../src/app/service/backend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stomp_ng2_stompjs__ = __webpack_require__("../../../../@stomp/ng2-stompjs/@stomp/ng2-stompjs.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Message } from '@stomp/stompjs';
//import { T_Response } from './t_response';
var BackendService = /** @class */ (function () {
    function BackendService(http, stompService) {
        this.http = http;
        this.stompService = stompService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        //private url = 'api/backend';
        this.instanceKey = '';
        this.instanceHeartBeatInterval = 20000; //1 minute in milliseconds
        this.onInstanceExtend = function (message) {
            var incoming = JSON.parse(message.body);
            if (incoming.instanceKey == null) {
                //window.location.reload(false); 
            }
        };
        //this.getInstanceKey();
    }
    BackendService.prototype.getInstanceKey = function () {
        var _this = this;
        var url = 'api/instanceKey/get';
        if (this.instanceKeyPromise == null) {
            this.instanceKeyPromise = this.http
                .post(url, null, { headers: this.headers })
                .toPromise().then(function (response) {
                _this.instanceKey = response.json().instanceKey;
                console.log("INSTANCE_KEY ", _this.instanceKey);
                _this.stompService.subscribe('/com/' + _this.instanceKey).subscribe(_this.onInstanceExtend);
                var payload = {
                    instanceKey: _this.instanceKey,
                };
                _this.stompService.publish('/com/extend', JSON.stringify(payload));
                setInterval(function () {
                    _this.stompService.publish('/com/extend', JSON.stringify(payload));
                    //console.log("")
                }, _this.instanceHeartBeatInterval);
                return _this.instanceKey;
            });
        }
        return this.instanceKeyPromise;
    };
    BackendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__stomp_ng2_stompjs__["b" /* StompService */]])
    ], BackendService);
    return BackendService;
}());



/***/ }),

/***/ "../../../../../src/app/service/criteria.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriteriaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_criteria__ = __webpack_require__("../../../../../src/app/model/criteria.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CriteriaService = /** @class */ (function () {
    function CriteriaService(http) {
        this.http = http;
        this.criteriaList = null;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    CriteriaService.prototype.getCriteriaList = function () {
        var _this = this;
        var url = 'api/employee/getCriterias';
        var payload = {};
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (response) {
            if (null !== _this.criteriaList) {
                return Promise.resolve(_this.criteriaList);
            }
            var responseJson = response.json();
            var criteriaList = new __WEBPACK_IMPORTED_MODULE_2__model_criteria__["c" /* CriteriaList */]();
            for (var index in responseJson) {
                var criteria = new __WEBPACK_IMPORTED_MODULE_2__model_criteria__["a" /* Criteria */](responseJson[index]);
                criteriaList.addCriteria(criteria);
            }
            return Promise.resolve(criteriaList);
        });
    };
    CriteriaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CriteriaService);
    return CriteriaService;
}());



/***/ }),

/***/ "../../../../../src/app/service/css.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CssService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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


var CssService = /** @class */ (function () {
    function CssService(document) {
        this.document = document;
    }
    /** Returns an array of CSSStyleRule objects.
     *
     *  @param selector A string to match the style rule. The selector is the complete portion of text
     *  before the curly braces. So if you have rule like this:
     *  .title, .sub-tutle {font-weight: bold}
     *  the selector is ".title, .sub-tutle"
     */
    CssService.prototype.getStyle = function (selector) {
        var result = [];
        var regSelector = new RegExp(selector);
        for (var i = 0; i < document.styleSheets.length; i++) {
            try {
                var sheet = document.styleSheets[i];
                for (var i_1 in sheet.cssRules) {
                    try {
                        if (sheet.cssRules[i_1].type == CSSRule.STYLE_RULE) {
                            if (regSelector.test(sheet.cssRules[i_1].selectorText)) {
                                console.log(sheet.cssRules[i_1].selectorText);
                                result.push(sheet.cssRules[i_1]);
                            }
                        }
                    }
                    catch (e) {
                        // ... nothing to be found here
                    }
                }
            }
            catch (e) {
                // ... I'm off for a week, please don't let anybody know, thanks.
            }
        }
        return result;
    };
    CssService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DOCUMENT */])),
        __metadata("design:paramtypes", [Object])
    ], CssService);
    return CssService;
}());



/***/ }),

/***/ "../../../../../src/app/service/dynamic-form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { QuestionBase } from '../model/checklist';
var DynamicFormService = /** @class */ (function () {
    function DynamicFormService() {
    }
    DynamicFormService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            if (question.controlType == 'multiselect') {
                return;
            }
            group[question.key] = question.required ? new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](question.value || '', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required)
                : new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](question.value || '');
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */](group);
    };
    DynamicFormService.prototype.toFormGroupValue = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.value;
        });
        return group;
    };
    DynamicFormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DynamicFormService);
    return DynamicFormService;
}());



/***/ }),

/***/ "../../../../../src/app/service/history.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryService = /** @class */ (function () {
    function HistoryService(router) {
        var _this = this;
        this.router = router;
        this.currentUrl = '';
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.currentUrl = event.url;
            }
        });
    }
    HistoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], HistoryService);
    return HistoryService;
}());



/***/ }),

/***/ "../../../../../src/app/service/schedule1.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Schedule1Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stomp_ng2_stompjs__ = __webpack_require__("../../../../@stomp/ng2-stompjs/@stomp/ng2-stompjs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backend_service__ = __webpack_require__("../../../../../src/app/service/backend.service.ts");
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





var Schedule1Service = /** @class */ (function () {
    //public alertsSubject: BehaviorSubject<Alert[]> = new BehaviorSubject<Alert[]>([]);
    //public alerts_collection: Alert[] = [];
    function Schedule1Service(http, stompService, backend) {
        var _this = this;
        this.http = http;
        this.stompService = stompService;
        this.backend = backend;
        /** HTTP headers that we like to send with every request. Angular is going to merge them with browser's ones*/
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // Subscription status
        this.subscribed = false;
        this.transactionKey = 0;
        this.remote_requests = [];
        this.peerSaveCallbacks = [];
        this.peerDeleteCallbacks = [];
        /** Consume a message from the _stompService */
        this.on_next = function (message) {
            _this.backend.getInstanceKey().then(function (instanceKey) {
                // Store message in "historic messages" queue
                var incoming = JSON.parse(message.body);
                if (incoming.instanceKey == null) {
                    //window.location.reload(false); 
                }
                else if (incoming.instanceKey != instanceKey) {
                    if (incoming.requestType == 'save') {
                        //TODO make sure that the backend returns assignment id
                        incoming.assignmentList[0].previousAssignmentVehicle = incoming.previousAssignmentVehicle;
                        for (var _i = 0, _a = _this.peerSaveCallbacks; _i < _a.length; _i++) {
                            var callback = _a[_i];
                            callback(incoming.assignmentList[0]);
                        }
                    }
                    else if (incoming.requestType == 'delete') {
                        //TODO make sure that the backend returns assignment id
                        for (var _b = 0, _c = _this.peerDeleteCallbacks; _b < _c.length; _b++) {
                            var callback = _c[_b];
                            callback(incoming.assignmentId);
                        }
                    }
                }
                else {
                    if (_this.remote_requests[incoming.transactionKey].requestType == 'save') {
                        //TODO make sure that the backend returns assignment id
                        _this.remote_requests[incoming.transactionKey].assignmentId = incoming.assignmentId;
                        if (incoming.transactionKey != null && _this.remote_requests[incoming.transactionKey].callback != null) {
                            _this.remote_requests[incoming.transactionKey].callback(incoming);
                        }
                    }
                    else if (_this.remote_requests[incoming.transactionKey].requestType == 'fetch') {
                        //TODO make sure that the backend returns assignment id
                        _this.remote_requests[incoming.transactionKey].assignmentId = incoming.assignmentId;
                        if (incoming.transactionKey != null && _this.remote_requests[incoming.transactionKey].callback != null) {
                            _this.remote_requests[incoming.transactionKey].callback(incoming.assignmentList);
                        }
                    }
                    else if (_this.remote_requests[incoming.transactionKey].requestType == 'delete') {
                        _this.remote_requests[incoming.transactionKey].assignmentId = incoming.assignmentId;
                        if (incoming.transactionKey != null && _this.remote_requests[incoming.transactionKey].callback != null) {
                            _this.remote_requests[incoming.transactionKey].callback(incoming.assignmentId);
                        }
                    }
                    console.log(alert);
                    // this.alerts_collection.unshift(alert);
                    // this.alertsSubject.next(this.alerts_collection);
                    // Count it
                    //this.count++;
                    // Log it to the console
                    //console.log(message);
                }
            });
        };
        this._subscribe();
    }
    Schedule1Service.prototype._subscribe = function () {
        var _this = this;
        if (this.subscribed) {
            return;
        }
        // Stream of messages
        this.backend.getInstanceKey().then(function (key) {
            _this.messages = _this.stompService.subscribe('/com/schedule/' + _this.backend.instanceKey);
            // Subscribe a function to be run on_next message
            _this.subscription = _this.messages.subscribe(_this.on_next);
            _this.subscribed = true;
        });
    };
    //TODO update transaction keys accordingly
    //    public addAssignment(assignment: any, callback: any){
    //        //assignment.instanceKey = this.backend.instanceKey;
    //
    //        let payload = {
    //            transactionKey: this.transactionKey,
    //            instanceKey: this.backend.instanceKey,
    //            ...assignment
    //        };
    //        payload.startTime = payload.startTime.getDateString();
    //        payload.timeLength = payload.timeLength.seconds;
    //
    //        this.stompService.publish('/com/schedule/save', JSON.stringify(payload));
    //
    //        payload.callback = callback;
    //        payload.requestType = 'save';
    //        //payload.assignment = assignment;
    //        this.remote_requests[this.transactionKey] = payload;//new Promise();
    //        this.transactionKey++;
    //        //return this.remote_requests[this.transactionKey];
    //    }
    Schedule1Service.prototype.saveAssignment = function (assignment, callback) {
        //assignment.instanceKey = this.backend.instanceKey;
        //this.whenSubscribed().then({;
        var payload = __assign({ transactionKey: this.transactionKey, instanceKey: this.backend.instanceKey }, assignment);
        payload.requestType = 'save';
        payload.tag = 'consultant';
        //payload.startTime = payload.startTime.getDateString();
        //payload.timeLength = payload.timeLength.seconds;
        this.stompService.publish('/com/schedule/save', JSON.stringify(payload));
        payload.callback = callback;
        //payload.assignment = assignment;
        this.remote_requests[this.transactionKey] = payload; //new Promise();
        this.transactionKey++;
        //return this.remote_requests[this.transactionKey];
    };
    Schedule1Service.prototype.fetchAssignments = function (activityIds, callback) {
        var _this = this;
        var activities = [];
        for (var _i = 0, activityIds_1 = activityIds; _i < activityIds_1.length; _i++) {
            var v = activityIds_1[_i];
            if (v != null) {
                activities.push({ id: 0, activity: { id: v } });
            }
        }
        this.backend.getInstanceKey().then(function (key) {
            var payload = {
                transactionKey: _this.transactionKey,
                instanceKey: _this.backend.instanceKey,
                //startTime: startDate.getDateString(),
                //timeLength: length.seconds,
                requestType: 'fetch',
                assignmentActivities: activities
            };
            //  this.stompService.publish('/com/schedule/fetch-weekly', JSON.stringify(payload));
            _this.http
                .post('api/assignment/fetch-weekly', JSON.stringify(payload), { headers: _this.headers })
                .toPromise().then(function (message) {
                var data = JSON.parse(message._body);
                callback(data.assignmentList);
            });
            //payload.callback = callback;
            // this.remote_requests[this.transactionKey] = payload;//new Promise();
            //this.transactionKey++;
        });
    };
    Schedule1Service.prototype.fetchAssignments2 = function (startDate, length, activityIds, callback) {
        var _this = this;
        var activities = [];
        for (var _i = 0, activityIds_2 = activityIds; _i < activityIds_2.length; _i++) {
            var v = activityIds_2[_i];
            if (v != null) {
                activities.push({ id: 0, activity: { id: v } });
            }
        }
        this.backend.getInstanceKey().then(function (key) {
            var payload = {
                transactionKey: _this.transactionKey,
                instanceKey: _this.backend.instanceKey,
                startTime: startDate.getDateString(),
                timeLength: length.seconds,
                requestType: 'fetch',
                assignmentActivities: activities
            };
            _this.stompService.publish('/com/schedule/fetch', JSON.stringify(payload));
            payload.callback = callback;
            _this.remote_requests[_this.transactionKey] = payload; //new Promise();
            _this.transactionKey++;
        });
    };
    Schedule1Service.prototype.deleteAssignment = function (assignmentId, callback) {
        //assignment.instanceKey = this.backend.instanceKey;
        var payload = {
            transactionKey: this.transactionKey,
            instanceKey: this.backend.instanceKey,
            assignmentId: assignmentId,
            callback: callback,
            requestType: 'delete',
        };
        //payload.startTime = payload.startTime.getDateString();
        //payload.timeLength = payload.timeLength.seconds;
        this.stompService.publish('/com/schedule/delete', JSON.stringify(payload));
        //payload.assignment = assignment;
        this.remote_requests[this.transactionKey] = payload; //new Promise();
        this.transactionKey++;
        //return this.remote_requests[this.transactionKey];
    };
    Schedule1Service.prototype.addPeerSaveCallback = function (callback) {
        this.peerSaveCallbacks.push(callback);
    };
    Schedule1Service.prototype.addPeerDeleteCallback = function (callback) {
        this.peerDeleteCallbacks.push(callback);
    };
    Schedule1Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__stomp_ng2_stompjs__["b" /* StompService */],
            __WEBPACK_IMPORTED_MODULE_4__backend_service__["a" /* BackendService */]])
    ], Schedule1Service);
    return Schedule1Service;
}());



/***/ }),

/***/ "../../../../../src/app/service/schedule2.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Schedule2Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_schedule__ = __webpack_require__("../../../../../src/app/model/schedule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stomp_ng2_stompjs__ = __webpack_require__("../../../../@stomp/ng2-stompjs/@stomp/ng2-stompjs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__backend_service__ = __webpack_require__("../../../../../src/app/service/backend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_tmdate__ = __webpack_require__("../../../../../src/app/model/tmdate.ts");
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



// /** imports related to UserDataSource */
// import { DataSource } from '@angular/cdk';
/** Importing models */



/* Import models */
//import { Vehicle } from '../model/activity';

var Schedule2Service = /** @class */ (function () {
    //public alertsSubject: BehaviorSubject<Alert[]> = new BehaviorSubject<Alert[]>([]);
    //public alerts_collection: Alert[] = [];
    function Schedule2Service(http, stompService, backend) {
        var _this = this;
        this.http = http;
        this.stompService = stompService;
        this.backend = backend;
        /** HTTP headers that we like to send with every request. Angular is going to merge them with browser's ones*/
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // Subscription status
        this.subscribed = false;
        this.transactionKey = 0;
        this.remote_requests = [];
        this.peerSaveCallbacks = [];
        this.peerDeleteCallbacks = [];
        /** Consume a message from the _stompService */
        this.on_next = function (message) {
            _this.backend.getInstanceKey().then(function (instanceKey) {
                // Store message in "historic messages" queue
                var incoming = JSON.parse(message.body);
                if (incoming.instanceKey == null) {
                    //window.location.reload(false);
                }
                else if (incoming.instanceKey != instanceKey) {
                    if (incoming.requestType == 'save') {
                        //TODO make sure that the backend returns assignment id
                        incoming.assignmentList[0].previousAssignmentVehicle = incoming.previousAssignmentVehicle;
                        for (var _i = 0, _a = _this.peerSaveCallbacks; _i < _a.length; _i++) {
                            var callback = _a[_i];
                            callback(incoming.assignmentList[0]);
                        }
                    }
                    else if (incoming.requestType == 'delete') {
                        //TODO make sure that the backend returns assignment id
                        for (var _b = 0, _c = _this.peerDeleteCallbacks; _b < _c.length; _b++) {
                            var callback = _c[_b];
                            callback(incoming.assignmentId);
                        }
                    }
                }
                else {
                    if (_this.remote_requests[incoming.transactionKey].requestType == 'save') {
                        //TODO make sure that the backend returns assignment id
                        _this.remote_requests[incoming.transactionKey].assignmentId = incoming.assignmentId;
                        if (incoming.transactionKey != null && _this.remote_requests[incoming.transactionKey].callback != null) {
                            _this.remote_requests[incoming.transactionKey].callback(incoming);
                        }
                    }
                    else if (_this.remote_requests[incoming.transactionKey].requestType == 'fetch') {
                        //TODO make sure that the backend returns assignment id
                        _this.remote_requests[incoming.transactionKey].assignmentId = incoming.assignmentId;
                        if (incoming.transactionKey != null && _this.remote_requests[incoming.transactionKey].callback != null) {
                            _this.remote_requests[incoming.transactionKey].callback(incoming.assignmentList);
                        }
                    }
                    else if (_this.remote_requests[incoming.transactionKey].requestType == 'delete') {
                        _this.remote_requests[incoming.transactionKey].assignmentId = incoming.assignmentId;
                        if (incoming.transactionKey != null && _this.remote_requests[incoming.transactionKey].callback != null) {
                            _this.remote_requests[incoming.transactionKey].callback(incoming.assignmentId);
                        }
                    }
                    console.log(alert);
                    // this.alerts_collection.unshift(alert);
                    // this.alertsSubject.next(this.alerts_collection);
                    // Count it
                    //this.count++;
                    // Log it to the console
                    //console.log(message);
                }
            });
        };
        this._subscribe();
    }
    Schedule2Service.prototype._subscribe = function () {
        var _this = this;
        if (this.subscribed) {
            return;
        }
        // Stream of messages
        this.backend.getInstanceKey().then(function (key) {
            _this.messages = _this.stompService.subscribe('/com/schedule/' + _this.backend.instanceKey);
            // Subscribe a function to be run on_next message
            _this.subscription = _this.messages.subscribe(_this.on_next);
            _this.subscribed = true;
        });
    };
    //TODO update transaction keys accordingly
    //    public addAssignment(assignment: any, callback: any){
    //        //assignment.instanceKey = this.backend.instanceKey;
    //
    //        let payload = {
    //            transactionKey: this.transactionKey,
    //            instanceKey: this.backend.instanceKey,
    //            ...assignment
    //        };
    //        payload.startTime = payload.startTime.getDateString();
    //        payload.timeLength = payload.timeLength.seconds;
    //
    //        this.stompService.publish('/com/schedule/save', JSON.stringify(payload));
    //
    //        payload.callback = callback;
    //        payload.requestType = 'save';
    //        //payload.assignment = assignment;
    //        this.remote_requests[this.transactionKey] = payload;//new Promise();
    //        this.transactionKey++;
    //        //return this.remote_requests[this.transactionKey];
    //    }
    Schedule2Service.prototype.saveAssignment = function (assignment, callback) {
        //assignment.instanceKey = this.backend.instanceKey;
        //this.whenSubscribed().then({;
        var payload = __assign({ transactionKey: this.transactionKey, instanceKey: this.backend.instanceKey }, assignment);
        payload.requestType = 'save';
        payload.tag = 'registrar'; // since the backend implementation is the same for all schedules
        //
        var isoTimeDate = assignment.startTime.get_ISO_8601_Date() + " 00:00:00";
        payload.startTime = isoTimeDate;
        payload.timeLength = payload.timeLength.seconds;
        //payload.startTime = payload.startTime.getDateString();
        //payload.timeLength = payload.timeLength.seconds;
        this.stompService.publish('/com/schedule/save', JSON.stringify(payload));
        payload.callback = callback;
        //payload.assignment = assignment;
        this.remote_requests[this.transactionKey] = payload; //new Promise();
        this.transactionKey++;
        //return this.remote_requests[this.transactionKey];
    };
    Schedule2Service.prototype.fetchAssignments = function (startDate, length, employeeIds, callback) {
        //    let activities: any[] = [];
        //    for(let v of activityIds){
        //      if(v != null){
        //        activities.push({id:0, activity: {id: v}});
        //      }
        //    }
        var _this = this;
        employeeIds = employeeIds.length > 0 ? employeeIds : null;
        this.backend.getInstanceKey().then(function (key) {
            var payload = {
                employees: employeeIds,
                //transactionKey: this.transactionKey,
                instanceKey: _this.backend.instanceKey,
                startTime: startDate.getDateString(),
                timeLength: length.seconds,
                requestType: 'fetch',
            };
            //this.stompService.publish('/com/schedule/fetch-shifts', JSON.stringify(payload));
            _this.http
                .post('api/assignment/fetch-shifts', JSON.stringify(payload), { headers: _this.headers })
                .toPromise().then(function (message) {
                var response = JSON.parse(message._body);
                var assignments = [];
                for (var _i = 0, _a = response.assignmentList; _i < _a.length; _i++) {
                    var a = _a[_i];
                    var tmDate = new __WEBPACK_IMPORTED_MODULE_6__model_tmdate__["a" /* TmDate */]();
                    tmDate.date.setTime(a.dateFrom);
                    a.startTime = tmDate;
                    var ass = new __WEBPACK_IMPORTED_MODULE_3__model_schedule__["a" /* Assignment */](a);
                    assignments.push(ass);
                }
                callback(assignments);
            });
            // payload.callback = callback;
            // this.remote_requests[this.transactionKey] = payload;//new Promise();
            // this.transactionKey++;
        });
    };
    Schedule2Service.prototype.deleteAssignment = function (assignmentId, callback) {
        //assignment.instanceKey = this.backend.instanceKey;
        var payload = {
            transactionKey: this.transactionKey,
            instanceKey: this.backend.instanceKey,
            assignmentId: assignmentId,
            callback: callback,
            requestType: 'delete',
        };
        //payload.startTime = payload.startTime.getDateString();
        //payload.timeLength = payload.timeLength.seconds;
        this.stompService.publish('/com/schedule/delete', JSON.stringify(payload));
        //payload.assignment = assignment;
        this.remote_requests[this.transactionKey] = payload; //new Promise();
        this.transactionKey++;
        //return this.remote_requests[this.transactionKey];
    };
    Schedule2Service.prototype.addPeerSaveCallback = function (callback) {
        this.peerSaveCallbacks.push(callback);
    };
    Schedule2Service.prototype.addPeerDeleteCallback = function (callback) {
        this.peerDeleteCallbacks.push(callback);
    };
    Schedule2Service.prototype.suggestSwap = function (assignmentId, employee, employees, callback) {
        var _this = this;
        this.backend.getInstanceKey().then(function (key) {
            var payload = {
                employees: employees,
                employee: employee,
                assignmentId: assignmentId,
                //transactionKey: this.transactionKey,
                instanceKey: _this.backend.instanceKey,
            };
            _this.http
                .post('api/assignment/suggestSwap', JSON.stringify(payload), { headers: _this.headers })
                .toPromise().then(function (message) {
                var response;
                try {
                    response = JSON.parse(message._body);
                }
                catch (e) {
                    response = [];
                }
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var a = response_1[_i];
                    var tmDate = new __WEBPACK_IMPORTED_MODULE_6__model_tmdate__["a" /* TmDate */]();
                    tmDate.date.setTime(a.dateFrom);
                    a.startTime = tmDate;
                }
                callback(response);
            });
        });
    };
    Schedule2Service.prototype.suggestSwap3Way = function (assignmentId, employee, employees, callback) {
        var _this = this;
        this.backend.getInstanceKey().then(function (key) {
            var payload = {
                employees: employees,
                employee: employee,
                assignmentId: assignmentId,
                instanceKey: _this.backend.instanceKey,
            };
            _this.http
                .post('api/assignment/suggestSwapTreeWay', JSON.stringify(payload), { headers: _this.headers })
                .toPromise().then(function (message) {
                var response;
                try {
                    response = JSON.parse(message._body);
                }
                catch (e) {
                    response = [];
                }
                for (var _i = 0, response_2 = response; _i < response_2.length; _i++) {
                    var g = response_2[_i];
                    for (var _a = 0, g_1 = g; _a < g_1.length; _a++) {
                        var a = g_1[_a];
                        var tmDate = new __WEBPACK_IMPORTED_MODULE_6__model_tmdate__["a" /* TmDate */]();
                        tmDate.date.setTime(a.dateFrom);
                        a.startTime = tmDate;
                    }
                }
                callback(response);
            });
        });
    };
    Schedule2Service.prototype.twoWaySwap = function (assignment1, assignment2, callback) {
        var _this = this;
        this.backend.getInstanceKey().then(function (key) {
            var payload = {
                assignment: assignment1,
                assignment2: assignment2,
                instanceKey: _this.backend.instanceKey,
            };
            _this.http
                .post('api/assignment/twoWaySwap', JSON.stringify(payload), { headers: _this.headers })
                .toPromise().then(function (message) {
                var response = JSON.parse(message._body);
                callback(response.status);
            });
        });
    };
    Schedule2Service.prototype.threeWaySwap = function (assignment1, assignment2, assignment3, callback) {
        var _this = this;
        this.backend.getInstanceKey().then(function (key) {
            var payload = {
                assignment: assignment1,
                assignment2: assignment2,
                assignment3: assignment3,
                instanceKey: _this.backend.instanceKey,
            };
            _this.http
                .post('api/assignment/treeWaySwap', JSON.stringify(payload), { headers: _this.headers })
                .toPromise().then(function (message) {
                var response = JSON.parse(message._body);
                callback(response.status);
            });
        });
    };
    Schedule2Service.prototype.getSwapCart = function (callback) {
        var _this = this;
        this.backend.getInstanceKey().then(function (key) {
            var payload = {};
            _this.http
                .post('api/assignment/getSwapCart', JSON.stringify(null), { headers: _this.headers })
                .toPromise().then(function (message) {
                var response = JSON.parse(message._body);
                callback(response);
            });
        });
    };
    Schedule2Service.prototype.getUnconfirmed = function (callback) {
        var _this = this;
        this.backend.getInstanceKey().then(function (key) {
            var payload = {};
            _this.http
                .post('api/assignment/getNotConfirmSwap', JSON.stringify(null), { headers: _this.headers })
                .toPromise().then(function (message) {
                var response = JSON.parse(message._body);
                callback(response);
            });
        });
    };
    Schedule2Service.prototype.commitCart = function (cartItems, callback) {
        var _this = this;
        this.backend.getInstanceKey().then(function (key) {
            var payload = {
                swapHistories: cartItems
            };
            _this.http
                .post('api/assignment/commitSwapCart', JSON.stringify(payload), { headers: _this.headers })
                .toPromise().then(function (message) {
                var response = JSON.parse(message._body);
                callback(response);
            });
        });
    };
    Schedule2Service.prototype.confirmSwap = function (cartItems, callback) {
        var _this = this;
        this.backend.getInstanceKey().then(function (key) {
            var payload = {
                swapHistories: cartItems
            };
            _this.http
                .post('api/assignment/confirmSwap', JSON.stringify(payload), { headers: _this.headers })
                .toPromise().then(function (message) {
                var response = JSON.parse(message._body);
                callback(response);
            });
        });
    };
    Schedule2Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__stomp_ng2_stompjs__["b" /* StompService */],
            __WEBPACK_IMPORTED_MODULE_5__backend_service__["a" /* BackendService */]])
    ], Schedule2Service);
    return Schedule2Service;
}());



/***/ }),

/***/ "../../../../../src/app/service/schedule3.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Schedule3Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stomp_ng2_stompjs__ = __webpack_require__("../../../../@stomp/ng2-stompjs/@stomp/ng2-stompjs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backend_service__ = __webpack_require__("../../../../../src/app/service/backend.service.ts");
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





var Schedule3Service = /** @class */ (function () {
    //public alertsSubject: BehaviorSubject<Alert[]> = new BehaviorSubject<Alert[]>([]);
    //public alerts_collection: Alert[] = [];
    function Schedule3Service(http, stompService, backend) {
        var _this = this;
        this.http = http;
        this.stompService = stompService;
        this.backend = backend;
        /** HTTP headers that we like to send with every request. Angular is going to merge them with browser's ones*/
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // Subscription status
        this.subscribed = false;
        this.transactionKey = 0;
        this.remote_requests = [];
        this.peerSaveCallbacks = [];
        this.peerDeleteCallbacks = [];
        /** Consume a message from the _stompService */
        this.on_next = function (message) {
            _this.backend.getInstanceKey().then(function (instanceKey) {
                // Store message in "historic messages" queue
                var incoming = JSON.parse(message.body);
                if (incoming.instanceKey == null) {
                    //window.location.reload(false);
                }
                else if (incoming.instanceKey != instanceKey) {
                    if (incoming.requestType == 'save') {
                        //TODO make sure that the backend returns assignment id
                        incoming.assignmentList[0].previousAssignmentVehicle = incoming.previousAssignmentVehicle;
                        for (var _i = 0, _a = _this.peerSaveCallbacks; _i < _a.length; _i++) {
                            var callback = _a[_i];
                            callback(incoming.assignmentList[0]);
                        }
                    }
                    else if (incoming.requestType == 'delete') {
                        //TODO make sure that the backend returns assignment id
                        for (var _b = 0, _c = _this.peerDeleteCallbacks; _b < _c.length; _b++) {
                            var callback = _c[_b];
                            callback(incoming.assignmentId);
                        }
                    }
                }
                else {
                    if (_this.remote_requests[incoming.transactionKey].requestType == 'save') {
                        //TODO make sure that the backend returns assignment id
                        _this.remote_requests[incoming.transactionKey].assignmentId = incoming.assignmentId;
                        if (incoming.transactionKey != null && _this.remote_requests[incoming.transactionKey].callback != null) {
                            _this.remote_requests[incoming.transactionKey].callback(incoming);
                        }
                    }
                    else if (_this.remote_requests[incoming.transactionKey].requestType == 'fetch') {
                        //TODO make sure that the backend returns assignment id
                        _this.remote_requests[incoming.transactionKey].assignmentId = incoming.assignmentId;
                        if (incoming.transactionKey != null && _this.remote_requests[incoming.transactionKey].callback != null) {
                            _this.remote_requests[incoming.transactionKey].callback(incoming.assignmentList);
                        }
                    }
                    else if (_this.remote_requests[incoming.transactionKey].requestType == 'delete') {
                        _this.remote_requests[incoming.transactionKey].assignmentId = incoming.assignmentId;
                        if (incoming.transactionKey != null && _this.remote_requests[incoming.transactionKey].callback != null) {
                            _this.remote_requests[incoming.transactionKey].callback(incoming.assignmentId);
                        }
                    }
                    console.log(alert);
                    // this.alerts_collection.unshift(alert);
                    // this.alertsSubject.next(this.alerts_collection);
                    // Count it
                    //this.count++;
                    // Log it to the console
                    //console.log(message);
                }
            });
        };
        this._subscribe();
    }
    Schedule3Service.prototype._subscribe = function () {
        var _this = this;
        if (this.subscribed) {
            return;
        }
        // Stream of messages
        this.backend.getInstanceKey().then(function (key) {
            _this.messages = _this.stompService.subscribe('/com/schedule/' + _this.backend.instanceKey);
            // Subscribe a function to be run on_next message
            _this.subscription = _this.messages.subscribe(_this.on_next);
            _this.subscribed = true;
        });
    };
    //TODO update transaction keys accordingly
    //    public addAssignment(assignment: any, callback: any){
    //        //assignment.instanceKey = this.backend.instanceKey;
    //
    //        let payload = {
    //            transactionKey: this.transactionKey,
    //            instanceKey: this.backend.instanceKey,
    //            ...assignment
    //        };
    //        payload.startTime = payload.startTime.getDateString();
    //        payload.timeLength = payload.timeLength.seconds;
    //
    //        this.stompService.publish('/com/schedule/save', JSON.stringify(payload));
    //
    //        payload.callback = callback;
    //        payload.requestType = 'save';
    //        //payload.assignment = assignment;
    //        this.remote_requests[this.transactionKey] = payload;//new Promise();
    //        this.transactionKey++;
    //        //return this.remote_requests[this.transactionKey];
    //    }
    Schedule3Service.prototype.saveAssignment = function (assignment, callback) {
        //assignment.instanceKey = this.backend.instanceKey;
        //this.whenSubscribed().then({;
        var payload = __assign({ transactionKey: this.transactionKey, instanceKey: this.backend.instanceKey }, assignment);
        payload.requestType = 'save';
        payload.tag = 'overall'; // since the backend implementation is the same for all schedules
        //
        var isoTimeDate = assignment.startTime.get_ISO_8601_Date() + " 00:00:00";
        payload.startTime = isoTimeDate;
        payload.timeLength = payload.timeLength.seconds;
        //payload.startTime = payload.startTime.getDateString();
        //payload.timeLength = payload.timeLength.seconds;
        this.stompService.publish('/com/schedule/save', JSON.stringify(payload));
        payload.callback = callback;
        //payload.assignment = assignment;
        this.remote_requests[this.transactionKey] = payload; //new Promise();
        this.transactionKey++;
        //return this.remote_requests[this.transactionKey];
    };
    Schedule3Service.prototype.fetchAssignments = function (startDate, length, activityIds, callback) {
        var _this = this;
        var activities = [];
        for (var _i = 0, activityIds_1 = activityIds; _i < activityIds_1.length; _i++) {
            var v = activityIds_1[_i];
            if (v != null) {
                activities.push({ id: 0, activity: { id: v } });
            }
        }
        this.backend.getInstanceKey().then(function (key) {
            var payload = {
                //transactionKey: this.transactionKey,
                instanceKey: _this.backend.instanceKey,
                startTime: startDate.getDateString(),
                timeLength: length.seconds,
                requestType: 'fetch',
            };
            //this.stompService.publish('/com/schedule/fetch-shifts', JSON.stringify(payload));
            _this.http
                .post('api/assignment/fetch', JSON.stringify(payload), { headers: _this.headers })
                .toPromise().then(function (message) {
                var response = JSON.parse(message._body);
                callback(response.assignmentList);
            });
            // payload.callback = callback;
            // this.remote_requests[this.transactionKey] = payload;//new Promise();
            // this.transactionKey++;
        });
    };
    Schedule3Service.prototype.fetchAssignmentsForUsers = function (startDate, length, userIds, callback) {
        var _this = this;
        var users = [];
        for (var _i = 0, userIds_1 = userIds; _i < userIds_1.length; _i++) {
            var v = userIds_1[_i];
            if (v != null) {
                users.push({ id: v });
            }
        }
        this.backend.getInstanceKey().then(function (key) {
            var payload = {
                //transactionKey: this.transactionKey,
                instanceKey: _this.backend.instanceKey,
                startTime: startDate.getDateString(),
                timeLength: length.seconds,
                requestType: 'fetch',
                employees: users
            };
            //this.stompService.publish('/com/schedule/fetch-shifts', JSON.stringify(payload));
            _this.http
                .post('api/assignment/fetch', JSON.stringify(payload), { headers: _this.headers })
                .toPromise().then(function (message) {
                var response = JSON.parse(message._body);
                //                    let assignmentList = []
                //                    for(let ass of response.assignmentList) {
                //                        if(ass.assignmentEmployees[0].employee.id == userIds[0]) {
                //                            assignmentList.push(ass);
                //                        }
                //                    }
                callback(response.assignmentList);
            });
            // payload.callback = callback;
            // this.remote_requests[this.transactionKey] = payload;//new Promise();
            // this.transactionKey++;
        });
    };
    Schedule3Service.prototype.moveEmployee = function (assignmentEmployees, assignmentId, callback) {
        var payload = {
            assignmentId: assignmentId,
            assignmentEmployees: assignmentEmployees,
        };
        this.http
            .post('api/assignment/move', JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (message) {
            var response = message.json();
            callback(response.assignmentList);
        });
        //    let activities: any[] = [];
        //    for(let v of activityIds){
        //      if(v != null){
        //        activities.push({id:0, activity: {id: v}});
        //      }
        //    }
        //
        //    this.backend.getInstanceKey().then(key=>{
        //      let payload: any = {
        //        //transactionKey: this.transactionKey,
        //        instanceKey: this.backend.instanceKey,
        //        startTime: startDate.getDateString(),
        //        timeLength: length.seconds,
        //        requestType: 'fetch',
        //        //assignmentActivities: activities
        //      };
        //      //this.stompService.publish('/com/schedule/fetch-shifts', JSON.stringify(payload));
        //      this.http
        //        .post('api/assignment/fetch', JSON.stringify(payload), { headers: this.headers })
        //        .toPromise().then((message: any)=>{
        //          let response = JSON.parse(message._body);
        //          callback(response.assignmentList);
        //        });
        //
        //
        //      // payload.callback = callback;
        //      // this.remote_requests[this.transactionKey] = payload;//new Promise();
        //      // this.transactionKey++;
        //    });
    };
    Schedule3Service.prototype.deleteAssignment = function (assignmentId, callback) {
        //assignment.instanceKey = this.backend.instanceKey;
        var payload = {
            transactionKey: this.transactionKey,
            instanceKey: this.backend.instanceKey,
            assignmentId: assignmentId,
            callback: callback,
            requestType: 'delete',
        };
        //payload.startTime = payload.startTime.getDateString();
        //payload.timeLength = payload.timeLength.seconds;
        this.stompService.publish('/com/schedule/delete', JSON.stringify(payload));
        //payload.assignment = assignment;
        this.remote_requests[this.transactionKey] = payload; //new Promise();
        this.transactionKey++;
        //return this.remote_requests[this.transactionKey];
    };
    Schedule3Service.prototype.generateSchedule = function (startDate, length, callback) {
        var payload = {
            startTime: startDate.getDateString(),
            timeLength: length.seconds,
        };
        this.http
            .post('api/assignment/generate', JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (message) {
            var response = message.json();
            callback(response.assignmentList);
        });
    };
    Schedule3Service.prototype.addPeerSaveCallback = function (callback) {
        this.peerSaveCallbacks.push(callback);
    };
    Schedule3Service.prototype.addPeerDeleteCallback = function (callback) {
        this.peerDeleteCallbacks.push(callback);
    };
    Schedule3Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__stomp_ng2_stompjs__["b" /* StompService */],
            __WEBPACK_IMPORTED_MODULE_4__backend_service__["a" /* BackendService */]])
    ], Schedule3Service);
    return Schedule3Service;
}());



/***/ }),

/***/ "../../../../../src/app/service/skill-type.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillTypeService = /** @class */ (function () {
    function SkillTypeService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    SkillTypeService.prototype.getCriteriaTypeList = function () {
        var _this = this;
        var url = 'api/employee/listCriteriaTypes';
        var payload;
        payload = {};
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (response) {
            var responseJson = response.json();
            var responseList = new ResponseListCriteriaType(responseJson);
            _this.totalCount = responseJson.totalCount;
            return Promise.resolve(responseJson.criteriaTypes);
        });
    };
    SkillTypeService.prototype.getCriteriaTypes = function () {
        var _this = this;
        var url = 'api/employee/listCriteriaTypes';
        var payload;
        payload = {};
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (response) {
            var responseJson = response.json();
            var responseList = new ResponseListCriteriaType(responseJson);
            _this.totalCount = responseJson.totalCount;
            return responseJson.criteriaTypes;
        });
    };
    SkillTypeService.prototype.saveCriteriaType = function (criteriaType) {
        var _this = this;
        var url = 'api/employee/saveCriteriaType';
        var payload;
        payload = criteriaType;
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (response) {
            var responseJson = response.json();
            var responseList = new ResponseListCriteriaType(responseJson);
            _this.totalCount = responseJson.totalCount;
            return Promise.resolve(responseJson);
        });
    };
    SkillTypeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SkillTypeService);
    return SkillTypeService;
}());

var ResponseListCriteriaType = /** @class */ (function () {
    function ResponseListCriteriaType(Object) {
        this.criteriaTypes = Object.criteriaTypes;
        this.totalCount = Object.totalCount;
    }
    return ResponseListCriteriaType;
}());


/***/ }),

/***/ "../../../../../src/app/service/skills.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsService = /** @class */ (function () {
    function SkillsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    SkillsService.prototype.getCriteriaList = function () {
        var _this = this;
        var url;
        url = 'api/employee/listCriterias';
        var payload;
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (response) {
            var responseJson = response.json();
            _this.totalCount = responseJson.totalCount;
            return Promise.resolve(responseJson.criterias);
        });
    };
    SkillsService.prototype.getCriteriaByType = function (type) {
        var url = 'api/employee/getCriteriasByType';
        var payload;
        payload = type;
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (response) {
            var responseJson = response.json();
            return Promise.resolve(responseJson);
        });
    };
    SkillsService.prototype.saveCriteria = function (criteria) {
        var _this = this;
        var url = 'api/employee/saveCriteria';
        var payload;
        payload = criteria;
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (response) {
            var responseJson = response.json();
            _this.totalCount = responseJson.totalCount;
            return Promise.resolve(responseJson);
        });
    };
    SkillsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SkillsService);
    return SkillsService;
}());

var ResponseListCriteria = /** @class */ (function () {
    function ResponseListCriteria(Object) {
        this.criterias = Object.criterias;
        this.totalCount = Object.totalCount;
    }
    return ResponseListCriteria;
}());


/***/ }),

/***/ "../../../../../src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
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






/** Importing models */

var UserService = /** @class */ (function () {
    function UserService(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
        /** HTTP headers that we like to send with every request. Angular is going to merge them with browser's ones*/
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.usersSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.users_collection = [];
        this.totalCount = 18;
        // We will cache the last result from the server.
        this.lastOffset = 0;
        this.lasPageSize = 0;
        this.restoreProperties(); // restore service's properties from local storage
    }
    /** Stores selected properties from this service to browser's local storage. NOTE Since Angular
     *  service don't have destructors (at least as far as I know) we will call this method whenever
     *  those properties are changed
     */
    UserService.prototype.storeProperties = function () {
        this.localStorageService.set(this.constructor.name + '.lastOffset', this.lastOffset);
        this.localStorageService.set(this.constructor.name + '.lasPageSize', this.lasPageSize);
        this.localStorageService.set(this.constructor.name + '.totalCount', this.totalCount);
        //   this.localStorageService.set(this.constructor.name+'.users_collection', this.users_collection);
    };
    /** Restores selected properties from this service.   */
    UserService.prototype.restoreProperties = function () {
        var lastOffset = this.localStorageService.get(this.constructor.name + '.lastOffset');
        if (lastOffset != null) {
            this.lastOffset = lastOffset;
        }
        var lasPageSize = this.localStorageService.get(this.constructor.name + '.lasPageSize');
        if (lasPageSize != null) {
            this.lasPageSize = lasPageSize;
        }
        var totalCount = this.localStorageService.get(this.constructor.name + '.totalCount');
        if (totalCount != null) {
            this.totalCount = totalCount;
        }
        //   let users_collection = <User[]>this.localStorageService.get(this.constructor.name+'.users_collection');
        //   if(users_collection != null) {
        //         this.users_collection = users_collection;
        //   }
    };
    /** Fetches users from backend.
     *
     *  @param offset number indicating how many rows to skip when returning users
     *  @param limit  number indicating how many users to include in the result
     *  @return Promise
     */
    UserService.prototype._getUsers = function (offset, limit, grades) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 1000; }
        if (grades === void 0) { grades = null; }
        var url = 'api/employee/list';
        var payload;
        payload = {
            'grades': grades,
            'pager': {
                'offset': offset,
                'limit': limit,
            },
        };
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (response) {
            var responseJson = response.json();
            //let users = responseJson.userList as User[];
            _this.totalCount = responseJson.totalCount; //responseJson.totalCount as number;
            var users = responseJson.employees;
            //                user.color = user.color ? '#'+user.color : '';
            return Promise.resolve(users);
        });
    };
    /** Fetches criteria types from the backend
     *
     *  @return Promise
     */
    UserService.prototype._getCriteriaTypes = function () {
        var url = 'api/employee/getCriteriaTypes';
        //        let payload: {[key: string]: object|string};
        //        payload = {
        //        };
        return this.http
            .post(url, null, { headers: this.headers })
            .toPromise().then(function (response) {
            var responseJson = response.json();
            //let users = responseJson.userList as User[];
            //this.totalCount = responseJson.totalCount; //responseJson.totalCount as number;
            //const users = responseJson.employees;
            //                user.color = user.color ? '#'+user.color : '';
            return Promise.resolve(responseJson);
        });
    };
    /** Fetches criteria types from the backend
     *
     *  @return Promise
     */
    UserService.prototype._getCriterias = function () {
        var url = 'api/employee/getCriterias';
        //        let payload: {[key: string]: object|string};
        //        payload = {
        //        };
        return this.http
            .post(url, null, { headers: this.headers })
            .toPromise().then(function (response) {
            var responseJson = response.json();
            //let users = responseJson.userList as User[];
            //this.totalCount = responseJson.totalCount; //responseJson.totalCount as number;
            //const users = responseJson.employees;
            //                user.color = user.color ? '#'+user.color : '';
            return Promise.resolve(responseJson);
        });
    };
    /** Retrieves users from the backend. The last result will be cached. So if the user navigates
     *  somewhere else and comes back to the List Users page she would see the last fetched results
     *  (without unpleasent blinking)
     *
     *  @param offset number indicating how many rows to skip when returning users
     *  @param pageSize number indicating how many users to include in the result
     *  @return Observable
     */
    UserService.prototype.retrieve = function (offset, pageSize) {
        var _this = this;
        var promise;
        //        if (this.lastOffset == offset && this.lasPageSize == pageSize && this.users_collection.length > 0) {
        //            promise = Promise.resolve(this.users_collection); // return cached result if the criteria passed
        //            // through (offset, pageSize) is the same
        //            // as the last one
        //        }
        //        else {
        promise = this._getUsers(offset, pageSize);
        this.lasPageSize = pageSize;
        this.lastOffset = offset;
        this.storeProperties();
        //        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromPromise(promise.then(function (users) {
            var _users = users.slice();
            _this.users_collection.length = 0;
            (_a = _this.users_collection).splice.apply(_a, [0, 0].concat(_users));
            //            this.users_collection.forEach((v) => {
            //                v.workingDays.forEach((d) => {
            //                    d.day = d.day.substr(0, 3);
            //                });
            //            });
            return _this.users_collection;
            var _a;
        }));
    };
    UserService.prototype.getEmptyFormUser = function () {
        var user = new __WEBPACK_IMPORTED_MODULE_6__model_user__["d" /* User */]({
            id: 0,
            grade: '',
            trainingLevel: '',
            role: '',
            firstName: '',
            lastName: '',
            dateCreated: '',
            color: '',
            workingDays: [],
            specialInterests: [],
            supervisors: [],
            phones: [],
            emails: [],
            employeeCriteria: []
        });
        //
        //        let form: QuestionBase<any>[] = [];
        //        form.push(new TextboxQuestion({
        //            key: 'firstName',
        //            label: 'First Name',
        //            //value: user.firstName,
        //        }));
        //        form.push(new TextboxQuestion({
        //            key: 'lastName',
        //            label: 'Last Name',
        //            //value: user.lastName,
        //        }));
        //
        //        form.push(new TextboxQuestion({
        //            key: 'email',
        //            label: 'Email',
        //            //value: user.lastName,
        //        }));
        //
        //        form.push(new TextboxQuestion({
        //            key: 'phone',
        //            label: 'Phone',
        //            //value: user.lastName,
        //        }));
        //
        //        user.emails = [{email:'', type: 'work'}];
        //        user.phones = [{phone:'', type: 'work'}];
        var userForm = __WEBPACK_IMPORTED_MODULE_6__model_user__["e" /* UserForm */].factory(user);
        return Promise.resolve(userForm);
    };
    UserService.prototype.getUserForm = function (userId) {
        return this.getUser(userId).then(function (user) {
            var userForm = __WEBPACK_IMPORTED_MODULE_6__model_user__["e" /* UserForm */].factory(user);
            return Promise.resolve(userForm);
        });
    };
    UserService.prototype.getUser = function (userId) {
        var url = 'api/employee/list';
        var payload;
        payload = {
            pager: {
                'offset': 0,
                'limit': 1,
            },
            id: userId,
        };
        return this.http
            .post(url, payload, { headers: this.headers })
            .toPromise().then(function (response) {
            var users = response.json().employees;
            if (users == null) {
                throw new Error('basi filma');
            }
            var user = new __WEBPACK_IMPORTED_MODULE_6__model_user__["d" /* User */](users[0]);
            return Promise.resolve(user);
        });
    };
    UserService.prototype.getActiveUser = function () {
        var url = 'api/rmsUser';
        return this.http
            .post(url, null, { headers: this.headers })
            .toPromise();
    };
    /** Save user to the server. If the *user* object doesn't have *id* property a new instance will be
     *  recorded in database, otherwise (and if the id is valid) the existing user will be updated
     */
    UserService.prototype.saveUser = function (user) {
        var url = 'api/employee/save';
        //return Promise.resolve({status: 'ok'});
        return this.http
            .post(url, JSON.stringify(user), { headers: this.headers })
            .toPromise().then(function (response) {
            //return Promise.resolve({status: response.json().status});
            return Promise.resolve(__assign({ status: 'ok' }, response.json()));
        }).catch(function (response) {
            return Promise.resolve({ status: 'failure' });
        });
    };
    /** Fetches users completed checklists with a given severity. Users will be returned in the order they
     *  completed checklists, newest first.
     */
    UserService.prototype.getReporters = function (severity) {
        var url = 'api/employee/reporters';
        var payload;
        payload = {
            pager: {
                offset: 0,
                limit: 8,
            },
            severity: severity,
        };
        return this.http
            .post(url, payload, { headers: this.headers })
            .toPromise();
    };
    UserService.prototype.fetchSpecialities = function (callback) {
        var url = 'api/employee/fetchSpecialities';
        return this.http
            .post(url, null, { headers: this.headers })
            .toPromise().then(function (response) {
            var specialities = response.json();
            callback(specialities);
        });
    };
    UserService.prototype.saveSpeciality = function (speciality, callback) {
        var url = 'api/employee/saveSpeciality';
        return this.http
            .post(url, JSON.stringify(speciality), { headers: this.headers })
            .toPromise().then(function (response) {
            response = response.json();
            callback(response);
        });
    };
    UserService.prototype.deleteSpeciality = function (specialityId, callback) {
        var url = 'api/employee/deleteSpeciality';
        var payload;
        payload = {
            id: specialityId
        };
        return this.http
            .post(url, JSON.stringify(payload), { headers: this.headers })
            .toPromise().then(function (response) {
            response = response.json();
            callback(response);
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map