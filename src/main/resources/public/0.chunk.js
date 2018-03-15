webpackJsonp([0],{

/***/ "../../../../../src/app/admin/activities/activities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ng-component{\n    padding: 1%;\n}\n\na:hover, a:focus{\n    text-decoration: none;\n}\n\na.mat-tab-link:focus{\n    background: #fff;\n    text-decoration: none;\n}\n\ni.fa-times{\n    /* position: fixed; */\n}\n\ni.fa-times:hover{\n    cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/activities/activities.component.html":
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\n\n  <span *ngFor=\"let link of navLinks\">\n    <a mat-tab-link\n      [routerLink]=\"link.ref\"\n      routerLinkActive #rla=\"routerLinkActive\"\n      [active]=\"rla.isActive\">\n      <span *ngIf=\"titleType(link) == 0\">{{link.label}}</span>\n      <i *ngIf=\"titleType(link) == 1\">{{link.label}}</i>\n      <b *ngIf=\"titleType(link) == 2\">{{link.label}}</b>\n\n    </a>\n    <i class=\"fa fa-window-close\" style=\"cursor:pointer; color: red;\" aria-hidden=\"true\" *ngIf=\"link.id>0\" (click)=\"closeUser(link.id)\"></i>\n  </span>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/admin/activities/activities.component.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_history_service__ = __webpack_require__("../../../../../src/app/service/history.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
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




var ActivitiesComponent = (function (_super) {
    __extends(ActivitiesComponent, _super);
    function ActivitiesComponent(route, router, location, localStorageService, historyService, adminComponent) {
        var _this = _super.call(this, location, router) || this;
        _this.route = route;
        _this.router = router;
        _this.location = location;
        _this.localStorageService = localStorageService;
        _this.historyService = historyService;
        _this.adminComponent = adminComponent;
        _this.navLinks = [
            { label: 'Spread', ref: 'spread', id: -1, default: false },
            { label: 'Activity List', ref: 'activity-list', id: -2, default: true },
            { label: 'Create Activity', ref: 'create-activity', id: -3, default: false }
        ];
        //activeId = 0;
        _this.state = 'out';
        _this.componentUrl = '/admin/activities';
        _this.keepLive = true;
        return _this;
    }
    ActivitiesComponent.prototype.animationEnded = function (event) {
        console.log("animationEnded");
    };
    ActivitiesComponent.prototype.ngOnInit = function () {
        this.restoreProperties();
        this.adminComponent.setActive(this.constructor.name);
        var params = this.route.snapshot.queryParams;
        if (params["redirectTo"] != null && params["redirectTo"] == 'lastVisited') {
            var lastRoute = this.localStorageService.get(this.constructor.name + '.lastRoute');
            if (lastRoute != null) {
                this.router.navigate([lastRoute]);
            }
        }
    };
    /** Opens a new tab. It's title will initialy be simply of the form "id999" where 999 is the userId passed to
     *  this method. The child component (EditUser if nobody has changed it) will update tab's title with user's
     *  name as soon as it has fetched the user object from the server.
     */
    ActivitiesComponent.prototype.editUser = function (userId) {
        if (typeof userId == 'string') {
            userId = parseInt(userId);
        }
        for (var _i = 0, _a = this.navLinks; _i < _a.length; _i++) {
            var link = _a[_i];
            if (link.id == userId) {
                return;
            }
        }
        if (typeof userId == 'number' && userId > 0) {
            this.navLinks.push({ label: "id" + userId, ref: 'edit-activity/' + userId, id: userId, default: false });
        }
        //this.history.push({id: userId});
    };
    /** Closes a tab associated with the given userId. Method will check whether that tab is open and if that's the
     *  case will go back one step in browser's history (that's the most natural behaviour and the one the user would
     *  expect).
     */
    ActivitiesComponent.prototype.closeUser = function (userId) {
        var index = -1;
        var counter = 0;
        for (var _i = 0, _a = this.navLinks; _i < _a.length; _i++) {
            var link = _a[_i];
            if (link.id == userId) {
                index = counter;
                break;
            }
            counter++;
        }
        if (index > -1) {
            if (userId == this.activeId) {
                this.back();
            }
            this.navLinks.splice(index, 1);
        }
    };
    /** A supplementary method used by component's template. We are recognising 3 types of tabs: permament tabs (which
     *  we are going to display as "normal" text), editing tab with id for title (this happens for a short time starting
     *  from moment the tab is open until the user is fetched from the backend), editing tab with user's name
     *  for title. The last two will be displayed differently from each other so it would be obvious for the user
     *  what the titles stand for */
    ActivitiesComponent.prototype.titleType = function (link) {
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
    /** Updates tab title after it was created. Method would be called externally by the child component when the entire user
     *  object is fetched from the backend. The tab will be identified by its userId value (since having multiple tabs open
     *  against the same user doesn't make sense)
     */
    ActivitiesComponent.prototype.updateTabTitle = function (userId, name) {
        for (var _i = 0, _a = this.navLinks; _i < _a.length; _i++) {
            var link = _a[_i];
            if (link.id == userId) {
                link.label = name;
                break;
            }
        }
    };
    ActivitiesComponent.prototype.ngOnDestroy = function () {
        this.storeProperties();
    };
    // ngOnDestroy will be only called if the user navigates to a different route. If she just closes
    // the document destructor will not be called. Here we cover closing document.
    ActivitiesComponent.prototype.beforeUnloadHander = function (event) {
        this.ngOnDestroy();
    };
    ActivitiesComponent.prototype.storeProperties = function () {
        //console.log(this.historyService.currentUrl);
        this.localStorageService.set(this.constructor.name + '.navLinks', this.navLinks);
        this.localStorageService.set(this.constructor.name + '.lastRoute', this.historyService.currentUrl);
        // when storing properties we also want to store current URL, which we will redirect to when
        // the user navigates back to this section of the application. This way navigation would feel
        // less obtrusive and would allow the user to freely navigate between sections without losing
        // focus to the last used tab
    };
    ActivitiesComponent.prototype.restoreProperties = function () {
        var navLinks = this.localStorageService.get(this.constructor.name + '.navLinks');
        if (navLinks != null) {
            this.navLinks = navLinks;
        }
    };
    return ActivitiesComponent;
}(__WEBPACK_IMPORTED_MODULE_4__model_tabbed_component__["a" /* TabbedComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ActivitiesComponent.prototype, "beforeUnloadHander", null);
ActivitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/admin/activities/activities.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/activities/activities.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__service_history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_history_service__["a" /* HistoryService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__admin_component__["a" /* AdminComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__admin_component__["a" /* AdminComponent */]) === "function" && _f || Object])
], ActivitiesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=activities.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/activities/activities.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_multi_select_input_multi_select_input_module__ = __webpack_require__("../../../../../src/app/lib/multi-select-input/multi-select-input.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__activities_component__ = __webpack_require__("../../../../../src/app/admin/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activity_list_component__ = __webpack_require__("../../../../../src/app/admin/activities/activity-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__spread_component__ = __webpack_require__("../../../../../src/app/admin/activities/spread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manage_confirm_assignment_erase__ = __webpack_require__("../../../../../src/app/admin/activities/manage/confirm-assignment-erase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_activity_component__ = __webpack_require__("../../../../../src/app/admin/activities/edit-activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__edit_activity_calendar_component__ = __webpack_require__("../../../../../src/app/admin/activities/edit-activity/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_activity_grade_configuration_component__ = __webpack_require__("../../../../../src/app/admin/activities/edit-activity/grade-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__edit_activity_work_rules_component__ = __webpack_require__("../../../../../src/app/admin/activities/edit-activity/work-rules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__edit_activity_maximized_schedule_preview__ = __webpack_require__("../../../../../src/app/admin/activities/edit-activity/maximized-schedule-preview.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesModule", function() { return ActivitiesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/** Importing local modules */

/** Importing local components */









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__activities_component__["a" /* ActivitiesComponent */],
        //canActivate: [AuthGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'activity-list' },
            { path: 'spread', component: __WEBPACK_IMPORTED_MODULE_9__spread_component__["a" /* SpreadComponent */] },
            { path: 'activity-list', component: __WEBPACK_IMPORTED_MODULE_8__activity_list_component__["a" /* ActivityListComponent */] },
            { path: 'edit-activity/:id', component: __WEBPACK_IMPORTED_MODULE_11__edit_activity_component__["a" /* EditActivityComponent */] },
            { path: 'create-activity', component: __WEBPACK_IMPORTED_MODULE_11__edit_activity_component__["a" /* EditActivityComponent */] },
        ]
    }
];
var ActivitiesModule = (function () {
    function ActivitiesModule() {
    }
    return ActivitiesModule;
}());
ActivitiesModule = __decorate([
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
            __WEBPACK_IMPORTED_MODULE_6__lib_multi_select_input_multi_select_input_module__["a" /* MultiSelectInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__activities_component__["a" /* ActivitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__activity_list_component__["a" /* ActivityListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__edit_activity_component__["a" /* EditActivityComponent */],
            __WEBPACK_IMPORTED_MODULE_12__edit_activity_calendar_component__["a" /* EditActivityCalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__edit_activity_work_rules_component__["a" /* EditActivityWorkRulesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__edit_activity_grade_configuration_component__["a" /* GradeConfigurationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__edit_activity_maximized_schedule_preview__["a" /* MaximizedSchedulePreviewDialog */],
            __WEBPACK_IMPORTED_MODULE_9__spread_component__["a" /* SpreadComponent */],
            __WEBPACK_IMPORTED_MODULE_10__manage_confirm_assignment_erase__["a" /* ConfirmAssignmentEraseComponent */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_15__edit_activity_maximized_schedule_preview__["a" /* MaximizedSchedulePreviewDialog */],
            __WEBPACK_IMPORTED_MODULE_10__manage_confirm_assignment_erase__["a" /* ConfirmAssignmentEraseComponent */],
        ],
        providers: []
    })
], ActivitiesModule);

//# sourceMappingURL=activities.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/activities/activity-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n\n  <mat-table #table [dataSource]=\"dataSource\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"name\">\n      <mat-header-cell *cdkHeaderCellDef> Title </mat-header-cell>\n      <mat-cell *cdkCellDef=\"let row\">\n          <a [routerLink]=\"['../edit-activity', row.id]\"><div class=\"colorBadge\" [style.background-color]=\"row.color\"></div> {{row.name}}</a>\n      </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"type\">\n      <mat-header-cell *cdkHeaderCellDef> Type </mat-header-cell>\n      <mat-cell *cdkCellDef=\"let row\">\n           {{row.type.name}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *cdkRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n\n  </mat-table>\n\n  <mat-paginator #paginator\n                [length]=\"dataSource.totalCount\"\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/activities/activity-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_activity_service__ = __webpack_require__("../../../../../src/app/service/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activities_component__ = __webpack_require__("../../../../../src/app/admin/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityListComponent; });
/* unused harmony export ActivityDataSource */
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










/** importing Models */

var ActivityListComponent = (function () {
    function ActivityListComponent(router, parentComponent, activityService, usersComponent, localStorageService) {
        this.router = router;
        this.parentComponent = parentComponent;
        this.activityService = activityService;
        this.usersComponent = usersComponent;
        this.localStorageService = localStorageService;
        this.displayedColumns = ['name', 'type'];
        this.day = new __WEBPACK_IMPORTED_MODULE_9__model_user__["c" /* Day */]();
        this.shift = new __WEBPACK_IMPORTED_MODULE_9__model_user__["b" /* Shift */]();
    }
    ActivityListComponent.prototype.ngOnInit = function () {
        this.parentComponent.currentPage = "Users";
        this.restoreProperties();
        this.dataSource = new ActivityDataSource(this.activityService, this.paginator, this.localStorageService);
        this.usersComponent.pushHistory(-1);
    };
    ActivityListComponent.prototype.ngOnDestroy = function () {
        this.storeProperties();
    };
    ActivityListComponent.prototype.storeProperties = function () {
        this.localStorageService.set(this.constructor.name + '.pageIndex', this.paginator.pageIndex);
        this.localStorageService.set(this.constructor.name + '.pageSize', this.paginator.pageSize);
    };
    ActivityListComponent.prototype.restoreProperties = function () {
        var pageIndex = this.localStorageService.get(this.constructor.name + '.pageIndex');
        if (pageIndex != null) {
            this.paginator.pageIndex = pageIndex;
        }
        var pageSize = this.localStorageService.get(this.constructor.name + '.pageSize');
        if (pageSize != null) {
            this.paginator.pageSize = pageSize;
        }
    };
    // ngOnDestroy will be only called if the user navigates to a different route. If she just closes
    // the document destructor will not be called. Here we cover closing document.
    ActivityListComponent.prototype.beforeUnloadHander = function (event) {
        this.ngOnDestroy();
    };
    ActivityListComponent.prototype.isWorking = function (row, day, shift) {
        var boolean = false;
        row.workingDays.forEach(function (value) {
            if (value.day == day && value.shift == shift) {
                boolean = true;
            }
        });
        return boolean;
    };
    return ActivityListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatPaginator */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatPaginator */]) === "function" && _a || Object)
], ActivityListComponent.prototype, "paginator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ActivityListComponent.prototype, "beforeUnloadHander", null);
ActivityListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'activity-list-component',
        template: __webpack_require__("../../../../../src/app/admin/activities/activity-list.component.html"),
        styles: ["\n        .colorBadge{\n            display: inline-block;\n            border-radius: 50%;\n            width: 1em;\n            height: 1em; \n        }\n        td{border: 1px solid #1d1e1f}      \n  "]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__admin_component__["a" /* AdminComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__admin_component__["a" /* AdminComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_activity_service__["a" /* ActivityService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__activities_component__["a" /* ActivitiesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__activities_component__["a" /* ActivitiesComponent */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"]) === "function" && _f || Object])
], ActivityListComponent);

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ActivityDataSource = (function (_super) {
    __extends(ActivityDataSource, _super);
    function ActivityDataSource(activityService, _paginator, localStorageService) {
        var _this = _super.call(this) || this;
        _this.activityService = activityService;
        _this._paginator = _paginator;
        _this.localStorageService = localStorageService;
        _this.totalCount = 0;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ActivityDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.activityService.activitiesSubject,
            this._paginator.page,
        ];
        //return Observable.merge(...displayDataChanges).map(this.activityService.retrieve);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"], displayDataChanges).map(function () {
            // Grab the page's slice of data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            //return this.activityService.users_collection.slice(startIndex, this._paginator.pageSize);
            _this.totalCount = _this.activityService.totalCount;
            return _this.activityService.retrieve(startIndex, _this._paginator.pageSize);
        }).flatMap(function (e) { return e; });
    };
    ActivityDataSource.prototype.disconnect = function () { };
    return ActivityDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["n" /* DataSource */]));

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=activity-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".iconLocker {\n    font-size: 26px;\n    cursor: pointer;\n}\n\n.iconHover:hover{\n    cursor: pointer;\n    color: #02d1a5;\n}\n\n.loading-indication {\n    top:10%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.invisible {\n    display: none;\n}\n\n.info {\n    text-align: center;\n    background-color: #F7DD83;\n    padding: 15px;\n}\n\n.colorBadge{\n    display: inline-block;\n    border-radius: 50%;\n    width: 1em;\n    height: 1em; \n}\n\n.displayColorBadge {\n    margin-top: 1em;\n    margin-bottom: 1em;\n}\n\n.example-form {\n}\n\n.form-fields-container {\n    position: absolute;\n    width: 300px;\n}\n\n.form-fields-container table {\n    margin-top: 2em;\n    margin-bottom: 1em;\n    width: 300px;\n}\n\n.form-fields-container table tr {\n    margin-bottom: 1em;\n}\n\n.form-fields-container table tr td:last-child {\n    padding-left: 1em;\n}\n\nh1, h2, h3, h4, h5 {\n    color: #004F76;\n}\n\n.tmSelectInput {\n    border: 1px solid #3673AA;\n    padding: 0.25em;\n}\n\n.tmSelectInput .mat-select-value-text{\n    color: #3673AA;\n}\n\n._row {\n    margin-top: 2em;\n}\n\n._row h5 {\n    margin-top:1em;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\" style=\"margin-top:40px;\">\n    <div [style.display]=\"loadingIndication\" style=\"position:fixed;top:0;right:0;bottom:0;left:0;background-color:white;opacity:0.8;z-index:99999;\">\n        <mat-progress-spinner class=\"loading-indication\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" style=\"margin: 0 auto;position: relative; top: 50%;\">\n        </mat-progress-spinner>\n    </div>\n    <div style=\"clear: both;\"></div>\n    <form class=\"example-form\" (ngSubmit)=\"saveActivity()\" [formGroup]=\"editActivityForm\">\n        <button mat-raised-button color=\"primary\"\n            [disabled]=\"!(editActivityForm.valid && activity.type && activity.type.id)\">Save</button>\n        <button mat-raised-button color=\"accent\" type=\"button\" (click)='forkActivityUI()' [disabled]='!activityId'>Copy Activity</button>\n        <button mat-raised-button color=\"primary\" type=\"button\" (click)='deleteActivityUI()' [disabled]='!activityId'>Delete Activity</button>\n        <div class=\"form-fields-container\" style=\"\">\n            <table>\n                <tr>\n                    <td>\n                    Title \n                    </td>\n                    <td>\n                    <input class=\"tmSelectInput\" style=\"width:100%\" matInput [formControlName]=\"'name'\"> \n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                    Type\n                    </td>\n                    <td>\n                    <mat-select *ngIf=\"activity\" class=\"tmSelectInput\" [(ngModel)]=\"activity.type.id\" [ngModelOptions]=\"{standalone: true}\">\n                        <mat-option *ngFor=\"let type of activityTypes\" [value]=\"type.id\">{{type.name}}</mat-option>\n                    </mat-select>\n                    </td>\n                </tr>\n            </table>\n\n            <div class=\"_row\">\n                <grade-configuration-component\n                 [(model)]='activity'\n                 [consultants]='consultants'\n                 [formReady]='formReady'\n                 [formSubmit]='formSubmit'>\n                </grade-configuration-component>\n            </div>\n        </div>\n        <div class=\"form-fields-container\" style=\"left:350px; width: 420px;\">\n            <edit-activity-calendar-component \n                [(previewStartDate)]='previewStartDate'\n                [(previewEndDate)]='previewEndDate'\n                [scheduleReady]='scheduleReady'\n                [scheduleSubmit]='formSubmit'\n                [schedulePreviewEvent]='schedulePreviewEvent'\n                (changeMonth)='refreshScheduleUI()'\n                >\n            </edit-activity-calendar-component>\n            <mat-form-field style=\"width: 420px; margin-top:3em;\">\n                  <textarea matInput placeholder=\"Activity Description\" matTextareaAutosize matAutosizeMinRows=\"2\"\n                   [formControlName]=\"'description'\" matAutosizeMaxRows=\"15\"></textarea>\n            </mat-form-field>\n        </div>\n        <div class=\"form-fields-container\" style=\"left:800px\">\n            <edit-activity-work-rules-component\n                [formReady]='formReady'\n                [formSubmit]='formSubmit'\n                [model]=\"activityShifts\">\n            </edit-activity-work-rules-component>\n\n        <mat-input-container *ngIf=\"activity && activity.scheduleStartDate\" >\n          <input matInput [matDatepicker]=\"picker\" [ngModelOptions]=\"{standalone: true}\"\n                 [(ngModel)]='activity.scheduleStartDate' placeholder=\"Activity Start Date\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        </mat-input-container>\n        <mat-datepicker #picker></mat-datepicker>\n\n        <mat-checkbox (change)=\"tickEndDateOff()\" class=\"checkbox\" [checked]=\"activity && !activity.scheduleEndDate\">\n            Activity works indefinitely\n        </mat-checkbox>\n        <mat-input-container *ngIf=\"activity && activity.scheduleEndDate\" >\n          <input matInput [matDatepicker]=\"pickerEnd\" [ngModelOptions]=\"{standalone: true}\"\n                 [(ngModel)]='activity.scheduleEndDate' placeholder=\"Activity End Date\">\n          <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\n        <mat-datepicker #pickerEnd></mat-datepicker>\n        </mat-input-container>\n\n\n        <h5>Specialities</h5>\n        <multi-select-input-component\n            [model]=\"specialitiesModel\"\n            [items]=\"specialities\"\n            [emptyMessage]=\"'No specialities selected'\">\n        </multi-select-input-component>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__activities_component__ = __webpack_require__("../../../../../src/app/admin/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_dynamic_form_service__ = __webpack_require__("../../../../../src/app/service/dynamic-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_activity_service__ = __webpack_require__("../../../../../src/app/service/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_tmdate__ = __webpack_require__("../../../../../src/app/model/tmdate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_confirm_confirm__ = __webpack_require__("../../../../../src/app/lib/confirm/confirm.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditActivityComponent; });
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








/** Importing local services */




/** Importing supplementary stuff */

var EditActivityComponent = (function () {
    function EditActivityComponent(activitysComponent, route, formBuilder, snackBar, router, dynamicFormService, localStorageService, activityService, userService, dialog) {
        this.activitysComponent = activitysComponent;
        this.route = route;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.router = router;
        this.dynamicFormService = dynamicFormService;
        this.localStorageService = localStorageService;
        this.activityService = activityService;
        this.userService = userService;
        this.dialog = dialog;
        // NOTICE many properties in this class are public. This is because they need to be so,
        // the template to have access to them
        /** used by the Progress Spinner widget */
        this.color = 'primary';
        /** used by the Progress Spinner widget */
        this.mode = 'indeterminate';
        /** used by the Progress Spinner widget */
        this.value = 50;
        /** Tells whether the form is in a process of being saved to the backend. It is being used to
         *  disable the *Save* button during that time. It goes on par with **loadingIndication** so
         *  the *Save* button should be disabled while the loading indication is being displayed
         */
        this.formDisabled = true;
        /** Tells whether form fields contain cached data (what is displayed had been entered by the activity
         *  but is not yet saved to the backed). Currently not used, though you can rely on its value if
         *  you need to. */
        this.isFormCached = false;
        /** Tells whether loading indication should be displayed. In actuality this property's value gets
         *  assigned to the CSS *display* property of the load widget. This means valid values are either
         *  'none' (not displayed) or 'block' (displayed).
         */
        this.loadingIndication = 'none';
        this.extraThingsVisibility = 'hidden';
        /** Used to be used to control transitional animations. Not used currently and will probably get
         *  phased out at some point. Don't rely on it.
         */
        this.state = 'inactive';
        /** The id of the entity being edited if any. When creating a activity this property's value is 0 */
        this.activityId = 0;
        this.driverColor = '';
        this.formColumn0 = [];
        this.formColumn1 = [];
        this.consultants = [];
        this.activities = [];
        this.activitiesModel = [];
        this.consultantsModel = [];
        this.staffTrainLevelCount = [];
        this.staffGradeCount = [];
        this.modelWithConsultants = {};
        this.modelNoConsultants = {};
        this.formReady = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.formSubmit = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.scheduleReady = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.schedulePreviewEvent = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.specialities = [];
        this.specialitiesModel = [];
        this.createForm();
    }
    EditActivityComponent.prototype.createForm = function () {
        this.editActivityForm = this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required]),
            description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](''),
        });
    };
    /** This method is going to be called everytime the component is displayed, so it makes sense
     *  to use parameteres here to fetch data from the VehicleService
     */
    EditActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSpecialities();
        this.loadingIndication = 'block';
        this.activityTypesPromise = this.activityService.getActivityTypes().then(function (types) {
            _this.activityTypes = types;
        });
        this.route.params.subscribe(function (params) {
            //this.state = 'inactive';
            _this.specialitiesModel.length = 0;
            _this.activitiesModel.length = 0;
            _this.consultantsModel.length = 0;
            _this.getUsers();
            if (params['id']) {
                // Create a new tab in the parent component (it is visible at the top side of the
                // page).
                _this.activitysComponent.editUser(params['id']);
                // Storing the id of the vehicle being edited in this instance so we can pass it back
                // to the backend when updating
                _this.activityId = params['id'];
                // By setting 'activeUserId' to a value different than 0 we signal that the tab
                // that was just opened is currently focused and if the activity close it the application
                // needs to go back one step in browser's history
                _this.activitysComponent.activeId = params['id'];
                // Fetch vehicle data from the VehicleService and populate the form with it
                _this.activityService.getActivity(params['id']).then(function (response) {
                    //let activitys = response;
                    _this.activity = response;
                    _this.activityShifts = _this.activity.activityShifts;
                    delete (_this.activity.id); //not part of form model
                    _this.unpackSpecialitiesModel(response);
                    //delete(activity.dateCreated); //not part of form model
                    //this.driverColor = activity.color;
                    //delete(activity.color);
                    _this.activitysComponent.updateTabTitle(params['id'], _this.activity.name);
                    _this.activitysComponent.pushHistory(params['id']);
                    //----------------------------
                    //this.changeDetector.detectChanges();
                    ////this.qaPairs = checklist.qa;
                    //this.editCheckListForm.setValue(formValues);
                    //
                    var model = {};
                    model.name = _this.activity.name;
                    model.description = _this.activity.description;
                    _this.editActivityForm.setValue(model);
                    setTimeout(function () {
                        _this.formReady.emit(true);
                        //this.refreshScheduleUI();
                        _this.loadingIndication = 'none';
                    }, 0);
                    _this.activityTypesPromise.then(function (types) {
                        //this.activity.type = {id: types[0].id};
                    });
                });
            }
            else {
                //let activity = this.activityService.getEmptyUser();
                //----------------------------
                // if no 'id' parameter is given set parent's property 'activeVehicleId' to 0.
                // This way we signal that when a tab is being closed the application doesn't
                // need to go one step back in browser's history
                _this.activitysComponent.activeId = 0;
                _this.enableForm();
                _this.activityId = 0;
                _this.activitysComponent.pushHistory(-2);
                //this.state = 'active';
                // convenient for when the activity navigates to different page
                // before submitting the form
                _this.activity = _this.activityService.getEmptyActivity();
                _this.activityShifts = _this.activity.activityShifts;
                var model = {};
                model.name = _this.activity.name;
                model.description = _this.activity.description;
                _this.unpackSpecialitiesModel(_this.activity);
                _this.editActivityForm.setValue(model);
                setTimeout(function () {
                    _this.formReady.emit(true);
                    //this.refreshScheduleUI();
                    _this.loadingIndication = 'none';
                }, 0);
                _this.restoreProperties(); // populate the form with the last entered values.
                _this.activityTypesPromise.then(function (types) {
                    //this.activity.type = {id: types[0].id};
                });
            }
            //this.state = 'inactive';
        });
    };
    EditActivityComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    EditActivityComponent.prototype.deleteActivity = function () {
        var _this = this;
        this.activityService.deleteActivity(this.activityId).then(function (result) {
            if (result.status == 'ok') {
                // is "Create User"
                _this.activitysComponent.closeUser(_this.activityId);
                //this.router.navigate(['/admin/activities/list-activities']);
                _this.openSnackBar("Activity " + _this.activity.name + " deleted", 3);
            }
            else {
                _this.openSnackBar("Error deleting activity", 3);
            }
            _this.loadingIndication = 'none';
            //setTimeout(() => this.disableForm() , 2000); // keep *Save* button disabled for a while after
            // the server returned response
        });
    };
    /** Saves the activity instance at the server. If the instance doesn't have *id* property
     *  it would be created, otherwise (and if the *id* exists) the existing vehicle is going
     *  to be updated
     */
    EditActivityComponent.prototype.saveActivity = function () {
        var _this = this;
        //this.disableForm()
        this.loadingIndication = 'block';
        var v = 1;
        this.activity = this.prepareSaveUser();
        if (v == 1) {
            return;
        }
        this.packSpecialitiesModel();
        this.activityService.saveActivity(this.activity).then(function (result) {
            if (result.status == 'ok') {
                if (_this.activityId == 0) {
                    // is "Create User"
                    _this.activitysComponent.editUser(result.id);
                    _this.router.navigate(['/admin/activities/edit-activity/' + result.id]);
                    _this.openSnackBar("Activity " + _this.activity.name + " created", 3);
                }
                else {
                    _this.activitysComponent.updateTabTitle(_this.activityId, _this.activity.name);
                    _this.openSnackBar("Activity " + _this.activity.name + " updated", 3);
                }
            }
            else {
                _this.openSnackBar("Error updating activity", 3);
            }
            _this.loadingIndication = 'none';
            //setTimeout(() => this.disableForm() , 2000); // keep *Save* button disabled for a while after
            // the server returned response
            delete (_this.editActivityForm.value.id); // this.prepare() adds id field to the form
            // we have to remove it when we don't need it
        });
    };
    EditActivityComponent.prototype.prepareSaveUser = function () {
        this.formSubmit.emit(true);
        var formModel = __assign({}, this.activity, this.editActivityForm.value);
        formModel.id = this.activityId == 0 ? null : this.activityId; //this is important because the id field is not part of our Vehicle model
        var startDate = new __WEBPACK_IMPORTED_MODULE_10__model_tmdate__["a" /* TmDate */]();
        startDate.setFromDate(formModel.scheduleStartDate);
        if (formModel.scheduleEndDate) {
            var endDate = new __WEBPACK_IMPORTED_MODULE_10__model_tmdate__["a" /* TmDate */]();
            endDate.setFromDate(formModel.scheduleEndDate);
            formModel.scheduleStartDate = startDate.get_ISO_8601_Date();
            formModel.scheduleEndDate = endDate.get_ISO_8601_Date();
            if (formModel.type.id == 0) {
                formModel.type = null;
            }
            //formModel.type = {id: formModel.type};
        }
        return formModel;
    };
    /** Displays a "snackbar" message (analogous to Toast messages in Android).
     *
     *  @param message message to be displayed
     *  @param duration duration in seconds before the message disappears
     *
     *  @return void
     */
    EditActivityComponent.prototype.openSnackBar = function (message, duration) {
        this.snackBar.open(message, null, {
            duration: duration * 1000
        });
    };
    EditActivityComponent.prototype.storeProperties = function () {
        this.localStorageService.set(this.constructor.name + '.form', this.editActivityForm.value);
    };
    EditActivityComponent.prototype.restoreProperties = function () {
        var form = this.localStorageService.get(this.constructor.name + '.form');
        if (form != null) {
            this.isFormCached = true;
            try {
                this.editActivityForm.setValue(form);
            }
            catch (e) {
            }
        }
    };
    // Only called when route changes and a different component is about to be displayed. Closing
    // document is not handled here. See below method
    EditActivityComponent.prototype.ngOnDestroy = function () {
        if (this.activityId == 0) {
            this.storeProperties();
        }
    };
    // ngOnDestroy will be only called if the activity navigates to a different route. If she just closes
    // the document destructor will not be called. Here we cover closing document.
    EditActivityComponent.prototype.beforeUnloadHander = function (event) {
        this.ngOnDestroy();
    };
    EditActivityComponent.prototype.applyFormDisability = function () {
        if (this.formDisabled == true) {
            this.extraThingsVisibility = 'hidden';
        }
        else {
            this.extraThingsVisibility = 'visible';
        }
        for (var key in this.editActivityForm.controls) {
            if (this.formDisabled == true) {
                this.editActivityForm.controls[key].disable();
            }
            else {
                this.editActivityForm.controls[key].enable();
            }
        }
    };
    EditActivityComponent.prototype.toggleFormDisability = function () {
        this.formDisabled = !this.formDisabled;
        this.applyFormDisability();
    };
    EditActivityComponent.prototype.disableForm = function () {
        this.formDisabled = true;
        this.applyFormDisability();
    };
    EditActivityComponent.prototype.enableForm = function () {
        this.formDisabled = false;
        this.applyFormDisability();
    };
    EditActivityComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService._getUsers(0, 1000, ['Consultant']).then(function (users) {
            if (users) {
                _this.consultants.length = 0;
                for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                    var u = users_1[_i];
                    _this.consultants.push({ value: u.id, text: u.firstName + " " + u.lastName });
                }
            }
        });
    };
    EditActivityComponent.prototype.forkActivity = function () {
        this.activityId = 0;
        this.saveActivity();
    };
    EditActivityComponent.prototype.forkActivityUI = function () {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__lib_confirm_confirm__["a" /* ConfirmDialog */], {
            data: {
                message: "Copying activity will make a new indistinguishable instance of it.\n " +
                    "Be sure to immediatelly do some changes in the new instance (including\n " +
                    "its name), so that the two will not be confused. Are you sure you want to\n " +
                    "copy the activity?",
                yesButtonLabel: "Yes, copy it!",
                noButtonLabel: "No, leave it",
                yesCallback: function () {
                    _this.forkActivity();
                },
            }
        });
    };
    EditActivityComponent.prototype.deleteActivityUI = function () {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__lib_confirm_confirm__["a" /* ConfirmDialog */], {
            data: {
                message: "Are you sure you want to delete this activity? It can later be recovered.",
                yesButtonLabel: "Yes, delete it!",
                noButtonLabel: "No, keep it",
                yesCallback: function () {
                    _this.deleteActivity();
                },
            }
        });
    };
    EditActivityComponent.prototype.refreshScheduleUI = function () {
        var _this = this;
        //this.previewStartDate = '2017-10-31';
        //this.previewEndDate = '2017-12-01';
        var activity = this.prepareSaveUser();
        //this.formSubmit.emit(true);
        this.activityService.schedulePreview(activity, this.previewStartDate, this.previewEndDate)
            .then(function (schedulePreview) {
            _this.schedulePreview = schedulePreview;
            _this.scheduleReady.emit(_this.schedulePreview);
            _this.schedulePreviewEvent.emit(true);
        });
    };
    EditActivityComponent.prototype.onContextMenu = function (event) {
        //this.selectAssignment(target.dataset.assignmentid);
        var contextMenu = document.querySelector("#contextMenu");
        contextMenu.style.left = event.clientX + "px";
        contextMenu.style.top = event.clientY + "px";
        contextMenu.style.display = 'block';
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        return true;
    };
    EditActivityComponent.prototype.context_mouseleave = function (event) {
        event.target.classList.remove("hover");
    };
    EditActivityComponent.prototype.context_mouseenter = function (event) {
        event.target.classList.add("hover");
    };
    EditActivityComponent.prototype.releaseContextMenu = function (event) {
        var contextMenu = document.querySelector("#contextMenu");
        contextMenu.style.display = "none";
        return true;
    };
    EditActivityComponent.prototype.tickEndDateOff = function () {
        if (this.activity.scheduleEndDate) {
            this.activity.scheduleEndDate = null;
        }
        else {
            var date = new Date();
            this.activity.scheduleEndDate = date.toISOString();
        }
    };
    EditActivityComponent.prototype.getSpecialities = function () {
        var _this = this;
        this.userService.fetchSpecialities(function (result) {
            _this.specialities.length = 0;
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var speciality = result_1[_i];
                _this.specialities.push({ value: speciality.id, text: speciality.name });
            }
        });
    };
    EditActivityComponent.prototype.unpackSpecialitiesModel = function (form) {
        if (form.activitySpecialities && form.activitySpecialities.length > 0) {
            for (var _i = 0, _a = form.activitySpecialities; _i < _a.length; _i++) {
                var s = _a[_i];
                this.specialitiesModel.push({ value: s.speciality.id, text: s.speciality.name });
            }
        }
    };
    EditActivityComponent.prototype.packSpecialitiesModel = function () {
        if (!this.activity.activitySpecialities) {
            this.activity.activitySpecialities = [];
        }
        this.activity.activitySpecialities.length = 0;
        for (var _i = 0, _a = this.specialitiesModel; _i < _a.length; _i++) {
            var a = _a[_i];
            this.activity.activitySpecialities.push({ speciality: { id: a.value } });
        }
    };
    return EditActivityComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostListener"])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EditActivityComponent.prototype, "beforeUnloadHander", null);
EditActivityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'edit-activity-component',
        template: __webpack_require__("../../../../../src/app/admin/activities/edit-activity.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/activities/edit-activity.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__activities_component__["a" /* ActivitiesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__activities_component__["a" /* ActivitiesComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["I" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["I" /* MatSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__service_dynamic_form_service__["a" /* DynamicFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_dynamic_form_service__["a" /* DynamicFormService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__service_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_activity_service__["a" /* ActivityService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_user_service__["a" /* UserService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["F" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["F" /* MatDialog */]) === "function" && _k || Object])
], EditActivityComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=edit-activity.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table.month {\n    font-size: 1.5em;\n    cursor: pointer;\n}\n\ntable.month tr {\n    border-bottom: 1px solid #f9f9f9;\n}\n\ntable.month td{\n    margin-right: 4px;\n    background-color: #fff;\n    border-right: 1px solid #f9f9f9;\n}\n\ntable.month tr td:first-child {\n    border-left: 1px solid #f9f9f9;\n}\n/*table.month td:last-child{\n    margin-right: inherit;\n    border-right: none;\n}*/\n\ntable.month tr:first-child td{\n    border: none; \n}\n\ntable.month tr:nth-child(2) {\n    border-top: 1px solid #f9f9f9;\n}\n\n/*table.month tr:last-child {\n    border-bottom: none;\n}*/\n\ntable.month tr:last-child > td:last-child {\n    border-right: 1px solid #f9f9f9;\n}\n\ntable.month div{\n    color: #3673AA;\n    background-color: #BAD6EF;\n    text-align: center;\n    width: 4ch;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n    cursor: pointer;\n}\n\ntable.month .weeks div{\n    color: #E4F2FF;\n    background-color: #3673AA;\n    text-align: center;\n    width: 4ch;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n    cursor: default;\n}\n\ntable.month tr.weeks {\n    vertical-align: top;\n    height: 2em;\n}\n\ntable.month div.not-current-month, table.month div.not-current-month div {\n    background-color: #f5f5f5;\n    color: #8D8D8D;\n}\n\nh3{\n    color: #004F76;\n}\n\n.tmSelectInput {\n    border: 1px solid #3673AA;\n    padding: 0.25em;\n    width: 8em;\n}\n\n.shift {\n    font-size: 12px;\n    border: 1px solid;\n    padding-left: 0.2em;\n    width: 8ch;\n    margin-right: 0.2em;\n    background: lightyellow;\n    display: inline-block;\n}\n\n.date {\n    padding-top: 0.5em;\n}\n\ntable.month div.off {\n    background-color: brown;\n    color: antiquewhite;\n}\n\n.loadingIndication{\n    position:absolute;\n    top:0;\n    bottom:0;\n    left:150px;\n    opacity:0.8;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity/calendar.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_tmdate__ = __webpack_require__("../../../../../src/app/model/tmdate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__maximized_schedule_preview__ = __webpack_require__("../../../../../src/app/admin/activities/edit-activity/maximized-schedule-preview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditActivityCalendarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditActivityCalendarComponent = (function () {
    function EditActivityCalendarComponent(dialog) {
        this.dialog = dialog;
        this.previewStartDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.previewEndDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changeMonth = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.month = { weeks: [] };
        this.months = [];
        this.years = [];
        this._week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.shifts = [];
        this.loadingIndication = 'none';
    }
    EditActivityCalendarComponent.prototype.switchMonth = function (month) {
        var tmDate = __WEBPACK_IMPORTED_MODULE_1__model_tmdate__["a" /* TmDate */].today();
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
    EditActivityCalendarComponent.prototype.switchYear = function (year) {
        var tmDate = new __WEBPACK_IMPORTED_MODULE_1__model_tmdate__["a" /* TmDate */]();
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
    EditActivityCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.switchMonth();
        this.generateYears();
        this.months = __WEBPACK_IMPORTED_MODULE_1__model_tmdate__["a" /* TmDate */].getMonthList();
        for (var shift in __WEBPACK_IMPORTED_MODULE_4__model_user__["b" /* Shift */]) {
            this.shifts.push(shift);
        }
        this.schedulePreviewEvent.subscribe(function (v) {
            _this.openSchedulePreviewUI();
        });
        this.scheduleSubmit.subscribe(function () {
            _this.loadingIndication = 'block';
        });
        this.scheduleReady.subscribe(function (schedulePreview) {
            _this.schedulePreview = schedulePreview;
            _this.loadingIndication = 'none';
            var dateObj;
            var remoteDates = [];
            //            for(let date in schedulePreview) {
            //                remoteDates.push(date);
            //            }
            //let date = remoteDates.shift();
            var date;
            for (var _i = 0, _a = _this.month.weeks; _i < _a.length; _i++) {
                var week = _a[_i];
                var _loop_1 = function (day) {
                    date = day.date.get_ISO_8601_Date();
                    if (schedulePreview[date]) {
                        day.working = false;
                        schedulePreview[date].shifts.find(function (v) {
                            if (v != 'OFF') {
                                day.working = true;
                                return true;
                            }
                            return false;
                        });
                        day.shifts = schedulePreview[date].shifts;
                        //day.shifts = this.shifts;
                    }
                    else {
                        day.working = false;
                        day.shifts = [];
                    }
                };
                for (var _b = 0, _c = week.days; _b < _c.length; _b++) {
                    var day = _c[_b];
                    _loop_1(day);
                }
            }
        });
    };
    EditActivityCalendarComponent.prototype.generateYears = function () {
        var y = this.month.year;
        for (var i = y; i <= y + 1; i++) {
            this.years.push(i);
        }
    };
    EditActivityCalendarComponent.prototype.generateMonth = function (tmDate) {
        tmDate = tmDate.fork();
        tmDate.date.setUTCDate(1);
        var iMon = tmDate.date.getUTCMonth();
        var inMon = (iMon == 11) ? 0 : iMon + 1; //next month
        var weeks = [];
        var week = { days: [] }; // {[days:string]: [{[date:string]: string}]} = {days: []};
        this.month.month = tmDate.getMonth();
        this.month.year = tmDate.date.getUTCFullYear();
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
        for (var i = 1;; i++) {
            var day = tmDate.alterDate(+1).fork();
            if (i == 1) {
                this.previewStartDate = day.get_ISO_8601_Date();
            }
            week.days.push({ date: day, working: false });
            if (i % 7 == 0) {
                if (week.days[0].date.date.getMonth() == inMon) {
                    break;
                }
                //week.ordinal = day.date.get
                weeks.push(week);
                week = { days: [] };
                this.previewEndDate = day.get_ISO_8601_Date();
                if (inMon == day.date.getMonth()) {
                    break; //break if we have reached next month already
                }
            }
        }
        //weeks.push(week);
        this.month.weeks = weeks;
        this.previewStartDateChange.emit(this.previewStartDate);
        this.previewEndDateChange.emit(this.previewEndDate);
    };
    EditActivityCalendarComponent.prototype.openSchedulePreviewUI = function () {
        this.changeMonth.emit();
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__maximized_schedule_preview__["a" /* MaximizedSchedulePreviewDialog */], {
            data: {
                schedulePreview: this.schedulePreview,
                month: this.month,
            }
        });
    };
    return EditActivityCalendarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditActivityCalendarComponent.prototype, "previewStartDate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], EditActivityCalendarComponent.prototype, "previewStartDateChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditActivityCalendarComponent.prototype, "previewEndDate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], EditActivityCalendarComponent.prototype, "previewEndDateChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditActivityCalendarComponent.prototype, "scheduleReady", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditActivityCalendarComponent.prototype, "scheduleSubmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditActivityCalendarComponent.prototype, "schedulePreviewEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], EditActivityCalendarComponent.prototype, "changeMonth", void 0);
EditActivityCalendarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'edit-activity-calendar-component',
        template: __webpack_require__("../../../../../src/app/admin/activities/edit-activity/calendar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/activities/edit-activity/calendar.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatDialog */]) === "function" && _a || Object])
], EditActivityCalendarComponent);

var _a;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity/grade-configuration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, h2, h3, h4, h5 {\n    margin-top:1em;\n    color: #004F76;\n}\n\n.tmSelectInput {\n    border: 1px solid #3673AA;\n    padding: 0.25em;\n}\n\n.tmSelectInput .mat-select-value-text{\n    color: #3673AA;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity/grade-configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h5>Configuraion</h5>\n    <mat-select class=\"tmSelectInput\" [(ngModel)]=\"selectionModel\" (ngModelChange)='switchModel(selectionModel, $event)'>\n    <mat-option [value]=\"'withConsultant'\">Config. with Consultant</mat-option>\n    <mat-option [value]=\"'noConsultant'\">Config. without Consultant</mat-option>\n    </mat-select>\n-->\n\n<div *ngIf=\"model\">\n    <h5>Consultant</h5>\n\n    <mat-select class=\"tmSelectInput\" [(ngModel)]=\"consultantModel\">\n        <mat-option *ngFor=\"let o of consultants\" [value]=\"o.value\">\n            {{ o.text }}\n        </mat-option>\n    </mat-select>\n\n\n    <h5>Staff Members</h5>\n    <table>\n        <tr *ngFor=\"let grade of model.configurationConsultant.gradeCounts\">\n            <td style=\"width: 25ch\">\n                {{grade.grade}} \n            </td>\n            <td style=\"width: 3em\">\n                <mat-select class=\"tmSelectInput\" [(ngModel)]='grade.count' [disabled]='grade.disabled'> \n                    <mat-option *ngFor=\"let o of staffCountOptions\" [value]=\"o\">\n                        {{ o }}\n                    </mat-option>\n                </mat-select>\n            </td>\n        </tr>\n    </table>\n\n    <h5>Staff Members In the abscence of Consultant</h5>\n    <table>\n        <tr *ngFor=\"let grade of model.configuration.gradeCounts\">\n            <td style=\"width: 25ch\">\n                {{grade.grade}} \n            </td>\n            <td style=\"width: 3em\">\n                <mat-select class=\"tmSelectInput\" [(ngModel)]='grade.count' [disabled]='grade.disabled'> \n                    <mat-option *ngFor=\"let o of staffCountOptions\" [value]=\"o\">\n                        {{ o }}\n                    </mat-option>\n                </mat-select>\n            </td>\n        </tr>\n    </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity/grade-configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_tmdate__ = __webpack_require__("../../../../../src/app/model/tmdate.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradeConfigurationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GradeConfigurationComponent = (function () {
    function GradeConfigurationComponent() {
        //    @Output('NoConsultantsChange') public modelNoConsultantsChange = new EventEmitter<any>();;
        //    @Output('WithConsultantsChange') public modelWithConsultantsChange = new EventEmitter<any>();;
        this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.consultantModel = -1;
        this.staffCountMax = 20;
        this.staffCountOptions = [];
        this.month = { weeks: [] };
        this._week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.unusedModel = '';
        this.emptyMessage = '';
        this.shifts = [];
        var tmDate = __WEBPACK_IMPORTED_MODULE_1__model_tmdate__["a" /* TmDate */].today();
        this.generateMonth(tmDate);
        this.generateStuffCountOptions();
        //---- init configuration model
        //this.switchModel('noConsultant');
        //        for(let shift in Shift) {
        //            if(shift == 'NotAssigned' || shift == 'Study' || shift == 'Annual' || shift == 'OFF') {
        //                continue;
        //            }
        //            this.shifts.push(shift);
        //        }
    }
    GradeConfigurationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formReady.subscribe(function () {
            _this.selectionModel = 'noConsultant';
            _this.selectionShiftModel = 'AM';
            //this.switchShift('AM');
            //this.switchModel('', 'noConsultant');
            _this.unpackConsultantsModel();
        });
        this.formSubmit.subscribe(function () {
            _this.packConsultantsModel();
        });
    };
    GradeConfigurationComponent.prototype.generateStuffCountOptions = function () {
        for (var i = 0; i <= this.staffCountMax; i++) {
            this.staffCountOptions.push(i);
        }
    };
    GradeConfigurationComponent.prototype.generateMonth = function (tmDate) {
        tmDate = tmDate.fork();
        tmDate.date.setUTCDate(1);
        var iMon = tmDate.date.getUTCMonth();
        var inMon = (iMon == 11) ? 0 : iMon + 1; //next month
        var weeks = [];
        var week = { days: [] }; // {[days:string]: [{[date:string]: string}]} = {days: []};
        this.month.month = tmDate.getMonth();
        //if the first day of the month is not Monday, rollback to
        //the nearest one
        if (tmDate.date.getUTCDay() > 1) {
            var sub = tmDate.date.getUTCDay();
            tmDate.date.setTime(tmDate.date.getTime() - (sub * 1000 * 3600 * 24));
        }
        else if (tmDate.date.getUTCDay() == 0) {
            tmDate.date.setTime(tmDate.date.getTime() - (7 * 1000 * 3600 * 24));
        }
        for (var i = 1;; i++) {
            var day = tmDate.alterDate(+1).fork();
            week.days.push({ date: day, working: false });
            if (i % 7 == 0) {
                //week.ordinal = day.date.get
                weeks.push(week);
                week = { days: [] };
                if (inMon == day.date.getMonth()) {
                    break; //break if we have reached next month already
                }
            }
        }
        //weeks.push(week);
        this.month.weeks = weeks;
    };
    GradeConfigurationComponent.prototype.unpackConsultantsModel = function () {
        //this.consultantModel.length = 0;
        //if(this.model.activityConsultants && this.model.activityConsultants.length > 0) {
        try {
            this.consultantModel = this.model.activityConsultants[0].employee.id;
        }
        catch (e) {
        }
        //            for(let c of this.model.activityConsultants) {
        //                this.consultantModel.push({value: ""+c.employee.id, text: c.employee.firstName+" "+c.employee.lastName});
        //            }
        //}
        //(this.consultantMulti as any).updateOptions();
    };
    GradeConfigurationComponent.prototype.packConsultantsModel = function () {
        //        if(this.selectionModel != 'withConsultant') {
        //            return;
        //        }
        //        if(!this.model.activityConsultants) {
        //            this.model.activityConsultants = [];
        //        }
        //        else {
        //            this.model.activityConsultants.length = 0;
        //        }
        if (this.consultantModel > 0) {
            this.model.activityConsultants[0] = { employee: { id: this.consultantModel } };
        }
    };
    return GradeConfigurationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('consultants'),
    __metadata("design:type", Object)
], GradeConfigurationComponent.prototype, "consultants", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('model'),
    __metadata("design:type", Object)
], GradeConfigurationComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('modelChange'),
    __metadata("design:type", Object)
], GradeConfigurationComponent.prototype, "modelChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('formReady'),
    __metadata("design:type", Object)
], GradeConfigurationComponent.prototype, "formReady", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('formSubmit'),
    __metadata("design:type", Object)
], GradeConfigurationComponent.prototype, "formSubmit", void 0);
GradeConfigurationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'grade-configuration-component',
        template: __webpack_require__("../../../../../src/app/admin/activities/edit-activity/grade-configuration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/activities/edit-activity/grade-configuration.component.css")],
    }),
    __metadata("design:paramtypes", [])
], GradeConfigurationComponent);

//# sourceMappingURL=grade-configuration.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity/maximized-schedule-preview.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table.month {\n    font-size: 1.5em;\n}\n\ntable.month tr {\n    border-bottom: 1px solid #f9f9f9;\n}\n\ntable.month td{\n    margin-right: 4px;\n    background-color: #fff;\n    border-right: 1px solid #f9f9f9;\n}\n\ntable.month tr td:first-child {\n    border-left: 1px solid #f9f9f9;\n}\n/*table.month td:last-child{\n    margin-right: inherit;\n    border-right: none;\n}*/\n\ntable.month tr:first-child td{\n    border: none; \n}\n\ntable.month tr:nth-child(2) {\n    border-top: 1px solid #f9f9f9;\n}\n\n/*table.month tr:last-child {\n    border-bottom: none;\n}*/\n\ntable.month tr:last-child > td:last-child {\n    border-right: 1px solid #f9f9f9;\n}\n\ntable.month div > div:first-child{\n    text-align: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n}\n\ntable.month div.dateCell{\n    width: 9ch;\n    height: 9ch;\n    background-color: #F2F9FF;\n    color: #3673AA;\n    line-height: 0.75em;\n}\n\ntable.month .weeks div{\n    color: #E4F2FF;\n    background-color: #3673AA;\n    text-align: center;\n    width: 100%;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n    cursor: default;\n}\n\ntable.month tr.weeks {\n    vertical-align: top;\n    height: 2em;\n}\n\ntable.month div.not-current-month {\n    background-color: #f5f5f5;\n    color: #8D8D8D;\n}\n\nh3{\n    color: #004F76;\n}\n\n.tmSelectInput {\n    border: 1px solid #3673AA;\n    padding: 0.25em;\n    width: 8em;\n}\n\n.shift {\n    font-size: 12px;\n    border: 1px solid;\n    padding-left: 0.2em;\n    width: 8ch;\n    margin-right: 0.2em;\n    background: lightyellow;\n    display: inline-block;\n    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.15);\n}\n\n.date {\n    padding-top: 0.5em;\n}\n\n.off {\n    color: brown;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity/maximized-schedule-preview.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"month\">\n    <tr class=\"weeks\">\n        <td *ngFor=\"let day of _week\">\n            <div class=\"toggleButton\">{{day}}</div>\n        </td>\n    </tr>\n    <tr *ngFor=\"let week of month.weeks\">\n        <!-- <td>{{week.ordinal}}</td> -->\n        <td *ngFor=\"let day of week.days\">\n            <div class='dateCell' [class.not-current-month]=\"day.date.getMonth()!=month.month\">\n                <div class=\"date\" [class.off]=\"!day.working\">{{day.date.date.getDate()}}</div>\n                <div class=\"shift {{shift}}\" *ngFor=\"let shift of day.shifts\" [class.off]='shift == \"OFF\"'>\n                    {{shift}} \n                </div>\n            </div>\n        </td>\n    </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity/maximized-schedule-preview.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaximizedSchedulePreviewDialog; });
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

var MaximizedSchedulePreviewDialog = (function () {
    function MaximizedSchedulePreviewDialog(dialogRef, router, 
        //private userService: VehicleService,
        localStorageService, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.localStorageService = localStorageService;
        this.data = data;
        this.all_shifts = [];
        this._week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.schedulePreview = data.schedulePreview;
        this.month = data.month;
        for (var sh in __WEBPACK_IMPORTED_MODULE_4__model_user__["b" /* Shift */]) {
            this.all_shifts.push(sh);
        }
    }
    MaximizedSchedulePreviewDialog.prototype.ngOnInit = function () {
    };
    MaximizedSchedulePreviewDialog.prototype.ngAfterViewInit = function () {
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
    MaximizedSchedulePreviewDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ;
    MaximizedSchedulePreviewDialog.prototype.onYesClick = function () {
        //this.yesCallback();
        this.dialogRef.close();
    };
    return MaximizedSchedulePreviewDialog;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('defaultButton'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], MaximizedSchedulePreviewDialog.prototype, "defaultButton", void 0);
MaximizedSchedulePreviewDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/admin/activities/edit-activity/maximized-schedule-preview.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/activities/edit-activity/maximized-schedule-preview.css")],
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _d || Object, Object])
], MaximizedSchedulePreviewDialog);

var _a, _b, _c, _d;
//# sourceMappingURL=maximized-schedule-preview.js.map

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity/work-rules.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".removeWeek {\n    color: #CA574E;\n    cursor: pointer;\n}\n\n.removeWeek:hover {\n    color: #FFCFCB;\n}\n\n.addWeek {\n    margin-bottom: 1em;\n    display: inline-block;\n    cursor: pointer;\n    color: #3673AA;\n}\n\n.addWeek:hover {\n    color: #77B0E3;\n}\n\ntable.month, table.weeks {\n    border: 1px solid #d6d6d6;\n}\n\ntable.month {\n    margin-bottom: 1em;\n}\n\ndiv.toggleButton {\n    cursor: pointer;\n    color: #3673AA;\n    background-color: #BAD6EF;\n    text-align: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n    width: 5ch;\n}\n\ndiv.toggleButton:hover {\n    background-color: #d3e8fb\n}\n\ndiv.disabled {\n    background-color: unset\n}\n\ndiv.off {\n    color: brown;\n}\n\n\ntable.month td, table.weeks td {\n    margin-right: 4px;\n    background-color: #fff;\n    border-right: 1px solid #d6d6d6;\n}\n\ntable.month td:last-child, table.weeks td:last-child {\n    margin-right: inherit;\n    border-right: none;\n}\n\ntable.weeks tr, table.month tr {\n    border-bottom: 1px solid #d6d6d6;\n}\n\ntable.weeks tr:last-child, table.month tr:last-child {\n    border-bottom: none;\n}\n\ntable.weeks tr:last-child > td:last-child, table.month tr:last-child > td:last-child {\n    border-right: 1px solid #d6d6d6;\n}\n\ntable.weeks tr:first-child div, table.month tr:first-child td > div{\n    background-color: #3673AA;\n    color: #E4F2FF;\n    width: 5ch;\n    text-align: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n    cursor: default;\n}\n\n.tm_tooltip {\n    position: fixed;\n    display: none;\n    padding: 0.5em;\n    border: 1px solid #004F76;\n    background-color: #FFFFE1;\n    color: #004f76;\n    font-weight: bold;\n    box-shadow: 10px 13px 21px -15px rgba(0,0,0,0.75);\n}\n\n.tm_tooltip.static {\n    position: static;\n    display: block;\n}\n\n.invisible {\n    visibility: hidden;\n}\n\nh3{\n    color: #004F76;\n}\n\n.week_rotation_info {\n    color: #004F76;\n}\n\n.week_sequence {\n    font-weight: bold;\n    color: #004F76;\n    margin-top: 1em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity/work-rules.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Working Days rules</h3>\n<!-- listing week days -->\n<div class=\"tm_tooltip static\" *ngIf=\"weeks.length>1\">\n    Rules for multiple weeks will be rotated in the order they are defined.\n</div>\n<div  *ngFor=\"let week of weeks; let i=index\">\n    <div class=\"week_sequence\" *ngIf=\"i>0\">\n        {{sequence(i+1)}} week\n        <span (mousemove)=\"onMouseMove($event, 'removeWeekTooltip')\"\n         (mouseleave)=\"onMouseLeave($event, 'removeWeekTooltip')\" (click)=\"removeWeek(i)\" class=\"fa fa-minus-square-o removeWeek\"></span>\n    </div>\n    <table class=\"weeks\">\n        <tr>\n            <td *ngFor=\"let day of week.days\">\n                <div>{{day.weekDay}}</div>\n            </td>\n        </tr>\n        <tr *ngFor=\"let shift of _shifts;\">\n            <td *ngFor=\"let day of week.days\">\n                <div class=\"toggleButton\"\n                     [class.disabled]=\"!day.shifts[shift]\"\n                     [class.off]=\"shift=='Off'\"\n                     (click)=\"toggleShiftWeekly(day.shifts, shift)\">{{shift}}</div>\n            </td>\n        </tr>\n    </table>\n</div>\n\n\n<div (mousemove)=\"onMouseMove($event, 'addWeekTooltip')\"\n                     (mouseleave)=\"onMouseLeave($event, 'addWeekTooltip')\" (click)=\"appendWeek()\" class=\"fa fa-plus-square-o addWeek\"></div>\n<br>\n\n<div #addWeekTooltip id=\"addWeekTooltip\" class=\"tm_tooltip\">Add a rule for the week after</div>\n<div #removeWeekTooltip id=\"removeWeekTooltip\" class=\"tm_tooltip\">Remove rule for this week</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/activities/edit-activity/work-rules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditActivityWorkRulesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditActivityWorkRulesComponent = (function () {
    function EditActivityWorkRulesComponent() {
        //public _week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this._week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        //public _shifts = ['AM', 'PM', 'Late', 'Night'];
        this._shifts = ['Off', 'AM', 'PM'];
        this.weeks = [];
        this.month = { weeks: [] };
        //this.weeks.push({days: [...this._week]});
        //        for(let shift in Shift) {
        //            if(shift == 'NotAssigned' || shift == 'Study' || shift == 'Annual') {
        //                continue;
        //            }
        //            this._shifts.push(shift);
        //        }
    }
    EditActivityWorkRulesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formSubmit.subscribe(function () {
            var expr = '';
            for (var _i = 0, _a = _this.model; _i < _a.length; _i++) {
                var shift = _a[_i];
                var cronExprs = [];
                var weekNumber = 0;
                /** Processing week rules **/
                for (var _b = 0, _c = _this.weeks; _b < _c.length; _b++) {
                    var week = _c[_b];
                    for (var _d = 0, _e = week.days; _d < _e.length; _d++) {
                        var day = _e[_d];
                        for (var sh in day.shifts) {
                            if (shift.shift == sh) {
                                if (day.shifts[sh] == true) {
                                    expr += ',' + day.weekDay;
                                }
                                break;
                            }
                        }
                    }
                    if (expr.length > 0) {
                        expr = expr.substr(1);
                        expr = '12 12 12 * * ' + expr;
                        cronExprs.push({ totalWeeks: _this.weeks.length, weekNumber: weekNumber, type: 'weekly', expression: expr });
                    }
                    expr = '';
                    weekNumber++;
                }
                /** Processing month rules **/
                for (var _f = 0, _g = _this.month.weeks; _f < _g.length; _f++) {
                    var week = _g[_f];
                    for (var _h = 0, _j = week.days; _h < _j.length; _h++) {
                        var day = _j[_h];
                        for (var sh in day.shifts) {
                            if (shift.shift == sh) {
                                if (day.shifts[sh] == true) {
                                    expr += ',' + day.date;
                                }
                                break;
                            }
                        }
                    }
                }
                if (expr.length > 0) {
                    expr = expr.substr(1);
                    expr = '12 12 12 ' + expr + ' * *';
                    cronExprs.push({ weekNumber: null, type: 'monthly', expression: expr });
                }
                expr = '';
                shift.cron.length = 0;
                (_k = shift.cron).splice.apply(_k, [0, 0].concat(cronExprs));
            }
            var _k;
        });
        this.generateMonth();
        this.formReady.subscribe(function () {
            var weeklyCrons = [];
            var weekIndex = 0;
            var weekMaxIndex = -1;
            _this.weeks.length = 0;
            do {
                _this.addWeek();
                for (var _i = 0, _a = _this.model; _i < _a.length; _i++) {
                    var shift = _a[_i];
                    //for(let c of shift.cron) {
                    var cron = _this.getWeeklyCron(weekIndex, shift);
                    if (cron) {
                        //weeklyCrons.push(shift.cron[weekIndex]);
                        //let wc = shift.cron[weekIndex];
                        weekMaxIndex = (cron.totalWeeks > weekMaxIndex) ? cron.totalWeeks : weekMaxIndex;
                        var wDays = cron.expression.replace(/^\S*\s*\S*\s*\S*\s*\S*\s*\S*\s*/, '').split(',');
                        _this.applyShift(shift.shift, wDays);
                    }
                }
                weekIndex++;
            } while (weekIndex < weekMaxIndex);
            for (var _b = 0, _c = _this.model; _b < _c.length; _b++) {
                var shift = _c[_b];
                var cron = _this.getMonthlyCron(shift);
                if (cron) {
                    var days = cron.expression.replace(/^\S*\s*\S*\s*\S*\s*(\S+).*$/, '$1').split(',');
                    _this.applyShiftMonthly(shift.shift, days);
                }
            }
        });
    };
    EditActivityWorkRulesComponent.prototype.getMonthlyCron = function (shift) {
        for (var _i = 0, _a = shift.cron; _i < _a.length; _i++) {
            var cron = _a[_i];
            if (cron.type == 'monthly') {
                return cron;
            }
        }
        return null;
    };
    EditActivityWorkRulesComponent.prototype.getWeeklyCron = function (weekIndex, shift) {
        for (var _i = 0, _a = shift.cron; _i < _a.length; _i++) {
            var cron = _a[_i];
            if (cron.weekNumber == weekIndex && cron.type == 'weekly') {
                return cron;
            }
        }
        return null;
    };
    EditActivityWorkRulesComponent.prototype.appendWeek = function () {
        this.addWeek();
        var days = this.weeks[this.weeks.length - 1].days;
        for (var _i = 0, days_1 = days; _i < days_1.length; _i++) {
            var d = days_1[_i];
            this.toggleShiftWeekly(d.shifts, 'Off');
        }
    };
    EditActivityWorkRulesComponent.prototype.addWeek = function () {
        var week = [];
        var days = [];
        for (var _i = 0, _a = this._week; _i < _a.length; _i++) {
            var _wday = _a[_i];
            var day = { weekDay: _wday, shifts: {} };
            days.push(day);
        }
        this.weeks.push({ days: days });
    };
    EditActivityWorkRulesComponent.prototype.applyShiftMonthly = function (shift, days) {
        var week = [];
        var i = this.month.weeks.length - 1;
        for (var _i = 0, _a = this.month.weeks; _i < _a.length; _i++) {
            var week_1 = _a[_i];
            var _loop_1 = function (day) {
                if (!day.shifts) {
                    day.shifts = {};
                }
                day.shifts[shift] = undefined != days.find(function (v) {
                    if (day.date == v)
                        return true;
                });
            };
            for (var _b = 0, _c = week_1.days; _b < _c.length; _b++) {
                var day = _c[_b];
                _loop_1(day);
            }
        }
        return true;
    };
    EditActivityWorkRulesComponent.prototype.applyShift = function (shift, wDays) {
        var week = [];
        var i = this.weeks.length - 1;
        var _loop_2 = function (_wday) {
            if (!_wday.shifts) {
                _wday.shifts = {};
            }
            _wday.shifts[shift] = undefined != wDays.find(function (v) {
                if (_wday.weekDay == v)
                    return true;
            });
        };
        for (var _i = 0, _a = this.weeks[i].days; _i < _a.length; _i++) {
            var _wday = _a[_i];
            _loop_2(_wday);
        }
        return true;
    };
    EditActivityWorkRulesComponent.prototype.bubbleSort = function (array, property) {
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
    EditActivityWorkRulesComponent.prototype.removeWeek = function (i) {
        this.weeks.splice(i, 1);
        var element = document.querySelector('#removeWeekTooltip');
        element.style.display = 'none';
    };
    EditActivityWorkRulesComponent.prototype.generateMonth = function () {
        var weeks = [];
        var week = { days: [] }; // {[days:string]: [{[date:string]: string}]} = {days: []};
        for (var i = 1; i <= 31; i++) {
            var shifts = [];
            for (var sh in __WEBPACK_IMPORTED_MODULE_1__model_user__["b" /* Shift */]) {
                shifts[sh] = false;
            }
            week.days.push({ date: i, shifts: shifts });
            if (i % 7 == 0) {
                weeks.push(week);
                week = { days: [] };
            }
        }
        weeks.push(week);
        this.month.weeks = weeks;
    };
    EditActivityWorkRulesComponent.prototype.toggleShiftWeekly = function (shifts, shift) {
        shifts[shift] = !shifts[shift];
        if (shift == 'Off') {
            if (shifts[shift] == true) {
                for (var k in shifts) {
                    if (k == 'Off')
                        continue;
                    shifts[k] = false;
                }
            }
            else {
                for (var k in shifts) {
                    if (k == 'Off')
                        continue;
                    shifts[k] = true;
                }
            }
        }
        else {
            var shftSelected = false;
            for (var k in shifts) {
                if (k != 'Off' && shifts[k] == true) {
                    shftSelected = true;
                    break;
                }
            }
            if (shftSelected == true) {
                shifts['Off'] = false;
            }
            else {
                shifts['Off'] = true;
            }
        }
    };
    EditActivityWorkRulesComponent.prototype.toggleShiftMonthly = function (shifts, shift) {
        shifts[shift] = !shifts[shift];
        if (shift == 'Off') {
            if (shifts[shift] == true) {
                for (var k in shifts) {
                    if (k == 'Off')
                        continue;
                    shifts[k] = false;
                }
            }
        }
        else {
            var shftSelected = false;
            for (var k in shifts) {
                if (k != 'Off' && shifts[k] == true) {
                    shftSelected = true;
                    break;
                }
            }
            if (shftSelected == true) {
                shifts['Off'] = false;
            }
        }
    };
    EditActivityWorkRulesComponent.prototype.onMouseMove = function (ev, tooltip) {
        var element = document.querySelector('#' + tooltip);
        element.style.display = 'block';
        element.style.left = (ev.clientX + 10) + "px";
        element.style.top = (ev.clientY + 10) + "px";
    };
    EditActivityWorkRulesComponent.prototype.onMouseLeave = function (ev, tooltip) {
        var element = document.querySelector('#' + tooltip);
        element.style.display = 'none';
    };
    EditActivityWorkRulesComponent.prototype.sequence = function (i) {
        var seq = '';
        switch (i) {
            case 1:
                seq = '1st';
                break;
            case 2:
                seq = '2nd';
                break;
            case 3:
                seq = '3rd';
                break;
            default:
                seq = i + 'th';
                break;
        }
        return seq;
    };
    return EditActivityWorkRulesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditActivityWorkRulesComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditActivityWorkRulesComponent.prototype, "formSubmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditActivityWorkRulesComponent.prototype, "formReady", void 0);
EditActivityWorkRulesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'edit-activity-work-rules-component',
        template: __webpack_require__("../../../../../src/app/admin/activities/edit-activity/work-rules.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/activities/edit-activity/work-rules.component.css")],
    }),
    __metadata("design:paramtypes", [])
], EditActivityWorkRulesComponent);

//# sourceMappingURL=work-rules.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/activities/manage/confirm-assignment-erase.html":
/***/ (function(module, exports) {

module.exports = "<span>Are you sure you want to delete assignment {{assignmentId}}?</span>\n<div style=\"clear:both\"></div>\n<button md-button (click)=\"onYesClick()\">Yes, delete it!</button>\n<button md-button #defaultButton (click)=\"onNoClick()\">No, leave it.</button>\n"

/***/ }),

/***/ "../../../../../src/app/admin/activities/manage/confirm-assignment-erase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmAssignmentEraseComponent; });
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
var ConfirmAssignmentEraseComponent = (function () {
    function ConfirmAssignmentEraseComponent(dialogRef, router, 
        //private userService: VehicleService,
        localStorageService, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.localStorageService = localStorageService;
        this.data = data;
        this.assignmentId = -1;
        this.assignmentId = data.assignmentId;
        this.yesCallback = data.yesCallback;
    }
    ConfirmAssignmentEraseComponent.prototype.ngOnInit = function () {
    };
    ConfirmAssignmentEraseComponent.prototype.ngAfterViewInit = function () {
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
    ConfirmAssignmentEraseComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ;
    ConfirmAssignmentEraseComponent.prototype.onYesClick = function () {
        this.yesCallback();
        this.dialogRef.close();
    };
    return ConfirmAssignmentEraseComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('defaultButton'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ConfirmAssignmentEraseComponent.prototype, "defaultButton", void 0);
ConfirmAssignmentEraseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/admin/activities/manage/confirm-assignment-erase.html"),
        styles: ["\n    span {\n        margin: 1em;\n        margin-bottom: 8em;\n    }\n\n    div {\n        height: 4em;\n    }\n\n    button {\n        float:right;\n        margin-right: 1em;\n    }\n\n    button:last-of-type {\n        margin-right: 0em;\n    }\n  "]
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _d || Object, Object])
], ConfirmAssignmentEraseComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=confirm-assignment-erase.js.map

/***/ }),

/***/ "../../../../../src/app/admin/activities/spread.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/activities/spread.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-input-container>\n  <input matInput [matDatepicker]=\"picker\" [(ngModel)]='_startDate' placeholder=\"Start Date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n</mat-input-container>\n<mat-datepicker #picker></mat-datepicker>\n\n<mat-input-container>\n  <input matInput [matDatepicker]=\"pickerEnd\" [(ngModel)]='_endDate' placeholder=\"End Date\">\n  <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\n</mat-input-container>\n<mat-datepicker #pickerEnd></mat-datepicker>\n\n<button mat-raised-button color=\"primary\" (click)=\"fetchSpread()\"><span class=\"fa fa-bar-chart\" aria-hidden=\"true\"></span> Fetch Spread</button>\n<div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/activities/spread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_activity_service__ = __webpack_require__("../../../../../src/app/service/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_tmdate__ = __webpack_require__("../../../../../src/app/model/tmdate.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpreadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SpreadComponent = (function () {
    function SpreadComponent(activityService, route, router, localStorageService) {
        this.activityService = activityService;
        this.route = route;
        this.router = router;
        this.localStorageService = localStorageService;
        /** used by the Progress Spinner widget */
        this.color = 'primary';
        /** used by the Progress Spinner widget */
        this.mode = 'indeterminate';
        /** used by the Progress Spinner widget */
        this.value = 50;
        /** Tells whether the form is in a process of being saved to the backend. It is being used to
         *  disable the *Save* button during that time. It goes on par with **loadingIndication** so
         *  the *Save* button should be disabled while the loading indication is being displayed
         */
        this.loadingIndication = 'none';
        this.spreadData = { spreads: {} };
        this.activityTypes = [];
    }
    /** This method is going to be called everytime the component is displayed, so it makes sense
     *  to use parameteres here to fetch data from the VehicleService
     */
    SpreadComponent.prototype.ngOnInit = function () {
        //this.loadingIndication = 'block';
        this.initDatePickers();
    };
    SpreadComponent.prototype.initDatePickers = function () {
        var startDate = __WEBPACK_IMPORTED_MODULE_5__model_tmdate__["a" /* TmDate */].today();
        startDate.date.setTime(startDate.date.getTime() + (24 * 3600000));
        this._startDate = startDate.get_ISO_8601_Date();
        var endDate = __WEBPACK_IMPORTED_MODULE_5__model_tmdate__["a" /* TmDate */].today();
        endDate.date.setTime(startDate.date.getTime() + (24 * 3600000));
        this._endDate = endDate.get_ISO_8601_Date();
        //        this._minDate = startDate.get_ISO_8601_Date();
        //
        //        startDate.date.setTime(startDate.date.getTime()+(365*24*3600000));
        //        this._maxDate = startDate.get_ISO_8601_Date();
    };
    SpreadComponent.prototype.fetchSpread = function () {
        var _this = this;
        var startDate = new __WEBPACK_IMPORTED_MODULE_5__model_tmdate__["a" /* TmDate */]();
        startDate.setFromDate(this._startDate + " UTC");
        var endDate = new __WEBPACK_IMPORTED_MODULE_5__model_tmdate__["a" /* TmDate */]();
        endDate.setFromDate(this._endDate + " UTC");
        this.activityService.fetchSpread(startDate, endDate).then(function (data) {
            for (var k in data.spread) {
                for (var a in data.spread[k]) {
                    _this.activityTypes.push(a);
                }
                break;
            }
            _this.spreadData = data;
        });
    };
    SpreadComponent.prototype.storeProperties = function () {
    };
    SpreadComponent.prototype.restoreProperties = function () {
    };
    SpreadComponent.prototype.ngOnDestroy = function () {
        this.storeProperties();
    };
    SpreadComponent.prototype.beforeUnloadHander = function (event) {
        this.ngOnDestroy();
    };
    return SpreadComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SpreadComponent.prototype, "beforeUnloadHander", null);
SpreadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/admin/activities/spread.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/activities/spread.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__service_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_activity_service__["a" /* ActivityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _d || Object])
], SpreadComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=spread.component.js.map

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
//# sourceMappingURL=0.chunk.js.map