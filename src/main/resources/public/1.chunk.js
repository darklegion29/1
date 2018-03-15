webpackJsonp([1],{

/***/ "../../../../../src/app/admin/users/edit-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".iconLocker {\n    font-size: 26px;\n    cursor: pointer;\n}\n\n.iconHover:hover{\n    cursor: pointer;\n    color: #02d1a5;\n}\n\n.loading-indication {\n    top:10%;\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.invisible {\n    display: none;\n}\n\n.info {\n    text-align: center;\n    background-color: #F7DD83;\n    padding: 15px;\n}\n\n.colorBadge{\n    display: inline-block;\n    border-radius: 50%;\n    width: 1em;\n    height: 1em; \n}\n\n.displayColorBadge {\n    margin-top: 1em;\n    margin-bottom: 1em;\n}\n\n.example-form {\n    width: 300px;\n}\n\n.form-fields-container {\n    position: absolute;\n    width: 300px;\n}\n\n.tmSelectInput {\n    border: 1px solid #3673AA;\n    padding: 0.25em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\" style=\"margin-top:40px;\">\n  <div [style.display]=\"loadingIndication\" style=\"position:fixed;top:0;right:0;bottom:0;left:0;background-color:white;opacity:0.8;z-index:99999;\">\n    <mat-progress-spinner class=\"loading-indication\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" style=\"margin: 0 auto;position: relative; top: 50%;\">\n    </mat-progress-spinner>\n  </div>\n  <div style=\"clear: both;\"></div>\n  <form class=\"example-form\" (ngSubmit)=\"saveUser()\" [formGroup]=\"editUserForm\">\n        <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"false\">Save</button>\n        <button mat-raised-button color=\"primary\" type=\"button\" (click)='editSpecialInterestsUI()'>Specialities...</button>\n        <div class=\"form-fields-container\" style=\"320px\">\n            <div *ngFor=\"let qa of formColumn0; let i = index\">\n          <!--  <dfcontrol [form]=\"editCheckListForm\" [question]=\"qa\"></dfcontrol> -->\n                <div>\n                    <ul>\n                        <li>{{qa.label}}</li>\n                            <div [ngSwitch]=\"qa.controlType\">\n                                <input class=\"tmSelectInput\" matInput *ngSwitchCase=\"'textbox'\" [formControlName]=\"qa.key\"\n                                    [id]=\"qa.key\" [type]=\"qa.type\" [(ngModel)]='qa.value'>\n\n                                <mat-select class=\"tmSelectInput\"\n                                 *ngSwitchCase=\"'dropdown'\"\n                                 [formControlName]='qa.key'\n                                 [(ngModel)]=\"formColumn0[i].value\"\n                                 (ngModelChange)=\"formValueChange(qa.key, $event)\">\n                                    <mat-option *ngFor=\"let opt of formColumn0[i].options\" [value]=\"opt.value\">\n                                    {{opt.value}}\n                                    </mat-option>\n                                </mat-select>\n                            </div>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-fields-container\" style=\"left:320px\">\n            <div *ngFor=\"let qa of formColumn1; let i = index\">\n          <!--  <dfcontrol [form]=\"editCheckListForm\" [question]=\"qa\"></dfcontrol> -->\n                <div>\n                    <ul>\n                        <li>{{qa.label}}</li>\n                            <div [ngSwitch]=\"qa.controlType\">\n                                <mat-form-field *ngSwitchCase=\"'textbox'\">\n                                    <input class=\"tmSelectInput\" matInput [formControlName]=\"qa.key\" [id]=\"qa.key\" [type]=\"qa.type\" [(ngModel)]='qa.value'>\n                                </mat-form-field>\n\n                                <mat-select class=\"tmSelectInput\" *ngSwitchCase=\"'dropdown'\" [formControlName]='qa.key' [(ngModel)]=\"formColumn1[i].value\">\n                                    <mat-option *ngFor=\"let opt of formColumn1[i].options\" [value]=\"opt.value\">\n                                    {{opt.value}}\n                                    </mat-option>\n                                </mat-select>\n                            </div>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-fields-container\" style=\"left: 640px\">\n            <h5>Special Interests</h5>\n            <multi-select-input-component\n                [model]=\"specialitiesModel\"\n                [items]=\"specialities\"\n                [emptyMessage]=\"'No specialities selected'\">\n            </multi-select-input-component>\n\n            <h5 style=\"margin-top: 2em;\">Consultants</h5>\n            <multi-select-input-component style=\"margin-top: 40px;\"\n                [model]=\"consultantsModel\"\n                [items]=\"consultants\"\n                [enabled]=\"consultantsEnabled\"\n                [emptyMessage]=\"consultantsEmptyMessage\">\n            </multi-select-input-component>\n        </div>\n\n        <div class=\"form-fields-container\" style=\"left: 960px\">\n            <h5>Working Days</h5>\n            <multi-select-input-component\n                [model]=\"weekDaysModel\"\n                [items]=\"weekDays\"\n                [listOnly]=\"true\"\n                [height]='null'\n                [emptyMessage]=\"''\">\n            </multi-select-input-component>\n        </div>\n</form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_user_edit_special_interests__ = __webpack_require__("../../../../../src/app/admin/users/edit-user/edit-special-interests.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_dynamic_form_service__ = __webpack_require__("../../../../../src/app/service/dynamic-form.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/** Importing local components **/


/** Importing local services */



var EditUserComponent = (function () {
    function EditUserComponent(usersComponent, route, userService, formBuilder, snackBar, router, dynamicFormService, localStorageService, dialog) {
        var _this = this;
        this.usersComponent = usersComponent;
        this.route = route;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.router = router;
        this.dynamicFormService = dynamicFormService;
        this.localStorageService = localStorageService;
        this.dialog = dialog;
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
        /** Tells whether form fields contain cached data (what is displayed had been entered by the user
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
        /** The id of the entity being edited if any. When creating a user this property's value is 0 */
        this.userId = 0;
        this.driverColor = '';
        this.formColumn0 = [];
        this.formColumn1 = [];
        this.consultants = [];
        this.specialities = [];
        this.specialitiesModel = [];
        this.consultantsModel = [];
        this.consultantsEmptyMessage = 'No consultants selected';
        this.consultantsEnabled = true;
        this.weekDays = [];
        this.weekDaysModel = [];
        this.specialInterests = [];
        this.saveSpeciality = function (speciality) {
            _this.userService.saveSpeciality(speciality, function () {
                _this.getSpecialities();
            });
        };
        this.createForm();
    }
    EditUserComponent.prototype.createForm = function () {
        this.editUserForm = this.formBuilder.group({
            code: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].pattern(/\d\d\d\d/)]),
            firstName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required]),
            lastName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required]),
        });
        this.form = this.formBuilder.group({
            multi: {},
        });
    };
    /** This method is going to be called everytime the component is displayed, so it makes sense
     *  to use parameteres here to fetch data from the VehicleService
     */
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSpecialities();
        this.getConsultants();
        this.loadingIndication = 'block';
        this.generateWeekDays();
        this.route.params.subscribe(function (params) {
            //this.state = 'inactive';
            _this.specialitiesModel.length = 0;
            _this.consultantsModel.length = 0;
            if (params['id']) {
                // Create a new tab in the parent component (it is visible at the top side of the
                // page).
                _this.usersComponent.editUser(params['id']);
                // Storing the id of the vehicle being edited in this instance so we can pass it back
                // to the backend when updating
                _this.userId = params['id'];
                // By setting 'activeUserId' to a value different than 0 we signal that the tab
                // that was just opened is currently focused and if the user close it the application
                // needs to go back one step in browser's history
                _this.usersComponent.activeId = params['id'];
                // Fetch vehicle data from the VehicleService and populate the form with it
                _this.userService.getUser(params['id']).then(function (response) {
                    //let users = response;
                    var user = response;
                    _this.user = response;
                    delete (user.id); //not part of form model
                    delete (user.dateCreated); //not part of form model
                    _this.driverColor = user.color;
                    delete (user.color);
                    _this.usersComponent.updateTabTitle(params['id'], user.firstName + " " + user.lastName);
                    _this.usersComponent.pushHistory(params['id']);
                    _this.unpackSpecialitiesModel(response);
                    _this.unpackConsultantsModel(response);
                    _this.unpackWorkingDays(user);
                    _this.scatterFormFields(response.form);
                    //----------------------------
                    _this.editUserForm = _this.dynamicFormService.toFormGroup(response.form);
                    var formValues = _this.dynamicFormService.toFormGroupValue(response.form);
                    //this.changeDetector.detectChanges();
                    ////this.qaPairs = checklist.qa;
                    //this.editCheckListForm.setValue(formValues);
                    //
                    if (formValues.grade == 'Consultant') {
                        _this.consultantsEnabled = false;
                        _this.consultantsEmptyMessage = 'No consultants allowed';
                    }
                    _this.editUserForm.setValue(formValues);
                    //this.disableForm();
                    //this.state = 'active';
                    _this.loadingIndication = 'none';
                });
            }
            else {
                var user = _this.userService.getEmptyUser();
                _this.user = user;
                _this.unpackSpecialitiesModel(user);
                _this.unpackConsultantsModel(user);
                _this.unpackWorkingDays(user);
                _this.scatterFormFields(user.form);
                //----------------------------
                _this.editUserForm = _this.dynamicFormService.toFormGroup(user.form);
                // if no 'id' parameter is given set parent's property 'activeVehicleId' to 0.
                // This way we signal that when a tab is being closed the application doesn't
                // need to go one step back in browser's history
                _this.usersComponent.activeId = 0;
                _this.enableForm();
                _this.userId = 0;
                _this.usersComponent.pushHistory(-2);
                //this.state = 'active';
                _this.restoreProperties(); // populate the form with the last entered values. This is
                // convenient for when the user navigates to different page
                // before submitting the form
                _this.loadingIndication = 'none';
            }
            //this.state = 'inactive';
        });
    };
    EditUserComponent.prototype.formValueChange = function (key, value) {
        switch (key) {
            case 'grade':
                if (value == 'Consultant') {
                    this.consultantsEnabled = false;
                    this.consultantsEmptyMessage = 'No consultants allowed';
                }
                else {
                    this.consultantsEnabled = true;
                    this.consultantsEmptyMessage = 'No consultants selected';
                }
                break;
        }
    };
    EditUserComponent.prototype.unpackSpecialitiesModel = function (form) {
        if (form.specialInterests && form.specialInterests.length > 0) {
            for (var _i = 0, _a = form.specialInterests; _i < _a.length; _i++) {
                var s = _a[_i];
                this.specialitiesModel.push({ value: s.speciality.id, text: s.speciality.name });
            }
        }
    };
    EditUserComponent.prototype.packSpecialitiesModel = function () {
        if (!this.user.specialInterests) {
            this.user.specialInterests = [];
        }
        for (var _i = 0, _a = this.specialitiesModel; _i < _a.length; _i++) {
            var a = _a[_i];
            this.user.specialInterests.push({ speciality: { id: a.value } });
        }
    };
    EditUserComponent.prototype.unpackConsultantsModel = function (form) {
        if (form.supervisors && form.supervisors.length > 0) {
            for (var _i = 0, _a = form.supervisors; _i < _a.length; _i++) {
                var c = _a[_i];
                this.consultantsModel.push({ value: "" + c.supervisor.id, text: c.supervisor.firstName + " " + c.supervisor.lastName });
            }
        }
    };
    EditUserComponent.prototype.packConsultantsModel = function () {
        if (!this.user.supervisors) {
            this.user.supervisors = [];
        }
        // A consultant cannot have another consultant above him
        if (this.user.grade == 'Consultant') {
            return;
        }
        for (var _i = 0, _a = this.consultantsModel; _i < _a.length; _i++) {
            var c = _a[_i];
            this.user.supervisors.push({ supervisor: { id: c.value } });
        }
    };
    EditUserComponent.prototype.getSpecialities = function () {
        var _this = this;
        this.userService.fetchSpecialities(function (result) {
            _this.specialities.length = 0;
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var speciality = result_1[_i];
                _this.specialities.push({ value: speciality.id, text: speciality.name });
            }
        });
    };
    EditUserComponent.prototype.generateWeekDays = function () {
        var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        for (var _i = 0, weekDays_1 = weekDays; _i < weekDays_1.length; _i++) {
            var day = weekDays_1[_i];
            this.weekDays.push({ value: day, text: day });
        }
    };
    EditUserComponent.prototype.getConsultants = function () {
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
    EditUserComponent.prototype.scatterFormFields = function (form) {
        this.formColumn0.length = 0;
        this.formColumn1.length = 0;
        var col = 0;
        for (var _i = 0, form_1 = form; _i < form_1.length; _i++) {
            var f = form_1[_i];
            if (/^Training/.test(f.label)) {
                col = 1;
            }
            switch (col) {
                case 0:
                    this.formColumn0.push(f);
                    break;
                case 1:
                    this.formColumn1.push(f);
                    break;
            }
        }
    };
    EditUserComponent.prototype.packWorkingDays = function () {
        var workingDays = [];
        var _loop_1 = function (day) {
            if (this_1.weekDaysModel.find(function (v) {
                return v.value == day.value;
            })) {
                workingDays.push({ day: day.value, shift: 'Day' });
            }
            else {
                workingDays.push({ day: day.value, shift: 'NotWorking' });
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.weekDays; _i < _a.length; _i++) {
            var day = _a[_i];
            _loop_1(day);
        }
        this.user.workingDays = workingDays;
    };
    EditUserComponent.prototype.unpackWorkingDays = function (form) {
        if (form.workingDays && form.workingDays.length > 0) {
            for (var _i = 0, _a = form.workingDays; _i < _a.length; _i++) {
                var day = _a[_i];
                if (day.shift == 'Day') {
                    this.weekDaysModel.push({ value: day.day, text: day.day });
                }
            }
        }
    };
    EditUserComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    /** Saves the user instance at the server. If the instance doesn't have *id* property
     *  it would be created, otherwise (and if the *id* exists) the existing vehicle is going
     *  to be updated
     */
    EditUserComponent.prototype.saveUser = function () {
        var _this = this;
        //this.disableForm()
        this.loadingIndication = 'block';
        this.user = this.prepareSaveUser();
        this.packWorkingDays();
        this.packSpecialitiesModel();
        this.packConsultantsModel();
        this.userService.saveUser(this.user).then(function (result) {
            if (result.status == 'ok') {
                if (_this.userId == 0) {
                    // is "Create User"
                    _this.usersComponent.editUser(result.id);
                    _this.router.navigate(['/admin/users/edit-user/' + result.employee.id]);
                    _this.openSnackBar("User " + _this.user.firstName + " " + _this.user.lastName + " created", 3);
                }
                else {
                    _this.usersComponent.updateTabTitle(_this.userId, _this.user.firstName + " " + _this.user.lastName);
                    _this.openSnackBar("User " + _this.user.firstName + " " + _this.user.lastName + " updated", 3);
                }
            }
            else {
                _this.openSnackBar("Error updating user", 3);
            }
            _this.loadingIndication = 'none';
            //setTimeout(() => this.disableForm() , 2000); // keep *Save* button disabled for a while after
            // the server returned response
            delete (_this.editUserForm.value.id); // this.prepare() adds id field to the form
            // we have to remove it when we don't need it
        });
    };
    EditUserComponent.prototype.prepareSaveUser = function () {
        var formModel = this.editUserForm.value;
        formModel.id = this.userId == 0 ? null : this.userId; //this is important because the id field is not part of our Vehicle model
        for (var k in formModel) {
            if (formModel[k] && typeof formModel[k] == 'string' && formModel[k].length == 0) {
                formModel[k] = null;
            }
        }
        if (!formModel.workingDays) {
            formModel.workingDays = [];
        }
        formModel.workingDays.push({ day: 'Monday', shift: formModel.Monday });
        formModel.workingDays.push({ day: 'Tuesday', shift: formModel.Tuesday });
        formModel.workingDays.push({ day: 'Wednesday', shift: formModel.Wednesday });
        formModel.workingDays.push({ day: 'Thursday', shift: formModel.Thursday });
        formModel.workingDays.push({ day: 'Friday', shift: formModel.Friday });
        formModel.workingDays.push({ day: 'Saturday', shift: formModel.Saturday });
        formModel.workingDays.push({ day: 'Sunday', shift: formModel.Sunday });
        //formModel.emails = this.user.emails;
        //formModel.phones = this.user.phones;
        //formModel.emails[0].email = formModel.email;
        //formModel.phones[0].phone = formModel.phone;
        formModel.emails = [{ email: formModel.email, type: 'work' }];
        formModel.phones = [{ phone: formModel.phone, type: 'work' }];
        return formModel;
    };
    /** Displays a "snackbar" message (analogous to Toast messages in Android).
     *
     *  @param message message to be displayed
     *  @param duration duration in seconds before the message disappears
     *
     *  @return void
     */
    EditUserComponent.prototype.openSnackBar = function (message, duration) {
        this.snackBar.open(message, null, {
            duration: duration * 1000
        });
    };
    EditUserComponent.prototype.storeProperties = function () {
        this.localStorageService.set(this.constructor.name + '.form', this.editUserForm.value);
    };
    EditUserComponent.prototype.restoreProperties = function () {
        var form = this.localStorageService.get(this.constructor.name + '.form');
        if (form != null) {
            this.isFormCached = true;
            try {
                this.editUserForm.setValue(form);
            }
            catch (e) {
            }
        }
    };
    // Only called when route changes and a different component is about to be displayed. Closing
    // document is not handled here. See below method
    EditUserComponent.prototype.ngOnDestroy = function () {
        if (this.userId == 0) {
            this.storeProperties();
        }
    };
    // ngOnDestroy will be only called if the user navigates to a different route. If she just closes
    // the document destructor will not be called. Here we cover closing document.
    EditUserComponent.prototype.beforeUnloadHander = function (event) {
        this.ngOnDestroy();
    };
    EditUserComponent.prototype.applyFormDisability = function () {
        if (this.formDisabled == true) {
            this.extraThingsVisibility = 'hidden';
        }
        else {
            this.extraThingsVisibility = 'visible';
        }
        for (var key in this.editUserForm.controls) {
            if (this.formDisabled == true) {
                this.editUserForm.controls[key].disable();
            }
            else {
                this.editUserForm.controls[key].enable();
            }
        }
    };
    EditUserComponent.prototype.toggleFormDisability = function () {
        this.formDisabled = !this.formDisabled;
        this.applyFormDisability();
    };
    EditUserComponent.prototype.disableForm = function () {
        this.formDisabled = true;
        this.applyFormDisability();
    };
    EditUserComponent.prototype.enableForm = function () {
        this.formDisabled = false;
        this.applyFormDisability();
    };
    EditUserComponent.prototype.editSpecialInterestsUI = function () {
        var _this = this;
        this.userService.fetchSpecialities(function (specialInterests) {
            _this.specialInterests = specialInterests;
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__edit_user_edit_special_interests__["a" /* EditSpecialInterestsDialog */], {
                data: {
                    specialInterests: _this.specialInterests,
                    saveCallback: _this.saveSpeciality,
                }
            });
        });
    };
    return EditUserComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('consultantMulti'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _a || Object)
], EditUserComponent.prototype, "consultantMulti", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EditUserComponent.prototype, "beforeUnloadHander", null);
EditUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'edit-user-component',
        template: __webpack_require__("../../../../../src/app/admin/users/edit-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/users/edit-user.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__users_component__["a" /* UsersComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__users_component__["a" /* UsersComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["I" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["I" /* MatSnackBar */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__service_dynamic_form_service__["a" /* DynamicFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_dynamic_form_service__["a" /* DynamicFormService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["F" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["F" /* MatDialog */]) === "function" && _k || Object])
], EditUserComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=edit-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/users/edit-user/edit-special-interests.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table.month {\n    font-size: 1.5em;\n}\n\ntable.month tr {\n    border-bottom: 1px solid #f9f9f9;\n}\n\ntable.month td{\n    margin-right: 4px;\n    background-color: #fff;\n    border-right: 1px solid #f9f9f9;\n}\n\ntable.month tr td:first-child {\n    border-left: 1px solid #f9f9f9;\n}\n/*table.month td:last-child{\n    margin-right: inherit;\n    border-right: none;\n}*/\n\ntable.month tr:first-child td{\n    border: none; \n}\n\ntable.month tr:nth-child(2) {\n    border-top: 1px solid #f9f9f9;\n}\n\n/*table.month tr:last-child {\n    border-bottom: none;\n}*/\n\ntable.month tr:last-child > td:last-child {\n    border-right: 1px solid #f9f9f9;\n}\n\ntable.month div > div:first-child{\n    text-align: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n}\n\ntable.month div.dateCell{\n    width: 9ch;\n    height: 9ch;\n    background-color: #F2F9FF;\n    color: #3673AA;\n    line-height: 0.75em;\n}\n\ntable.month .weeks div{\n    color: #E4F2FF;\n    background-color: #3673AA;\n    text-align: center;\n    width: 100%;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n    cursor: default;\n}\n\ntable.month tr.weeks {\n    vertical-align: top;\n    height: 2em;\n}\n\ntable.month div.not-current-month {\n    background-color: #f5f5f5;\n    color: #8D8D8D;\n}\n\n.selection {\n    border: 1px solid;\n    color: #3673AA;\n    padding: 0.5em;\n    overflow: auto;\n    position: relative;\n    height: 100%;\n    width: 100%;\n    font-size: 0.7vw;\n    margin-top: 0.5em;\n    background-color: white;\n}\n\n.selection * {\n    cursor: default;\n}\n\n.selection div {\n    padding-left: 0.6em;\n}\n\n.selection div:hover {\n    background-color: aliceblue;\n}\n\n.selection div.selected {\n    background-color: deepskyblue;\n}\n\n.selection div.new {\n    border: dotted 1px;\n}\n\nh3{\n    color: #004F76;\n}\n\n.tmSelectInput {\n    border: 1px solid #3673AA;\n    padding: 0.25em;\n    width: 8em;\n}\n\n.shift {\n    font-size: 12px;\n    border: 1px solid;\n    padding-left: 0.2em;\n    width: 8ch;\n    margin-right: 0.2em;\n    background: lightyellow;\n    display: inline-block;\n    box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.15);\n}\n\n.date {\n    padding-top: 0.5em;\n}\n\n.off {\n    color: brown;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users/edit-user/edit-special-interests.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" (click)=\"newInterest()\"><span class=\"fa fa-plus\"></span>New</button>\n\n<div style=\"margin-botton: 1.5em; width: 30vw\" class=\"selection\">\n    <div (dblclick)=\"selectInterest(interest)\" *ngFor=\"let interest of specialInterests\" [class.new]=\"!interest.id\"\n        [class.selected]=\"selected_interest && selected_interest.id==interest.id\">\n            {{interest.name}}\n    </div>\n</div>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"onSaveClick()\">\n    <input class=\"tmSelectInput\" matInput [id]='name' [formControlName]='\"name\"'>\n</form>\n\n<button mat-raised-button color=\"accent\">Save</button>\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/edit-user/edit-special-interests.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSpecialInterestsDialog; });
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





var EditSpecialInterestsDialog = (function () {
    function EditSpecialInterestsDialog(dialogRef, router, formBuilder, localStorageService, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.formBuilder = formBuilder;
        this.localStorageService = localStorageService;
        this.data = data;
        this.saveCallback = data.saveCallback;
        this.specialInterests = data.specialInterests;
        this.form = this.formBuilder.group({
            name: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* Validators */].required]),
        });
    }
    EditSpecialInterestsDialog.prototype.ngOnInit = function () {
    };
    EditSpecialInterestsDialog.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            try {
                document.querySelector('input').focus();
            }
            catch (e) {
                //...shhhh
            }
        }, 500);
    };
    EditSpecialInterestsDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ;
    EditSpecialInterestsDialog.prototype.onSaveClick = function () {
        var id = null;
        if (this.selected_interest) {
            id = this.selected_interest.id;
        }
        var editedInterest = __assign({}, this.form.value, { id: id });
        this.saveCallback(editedInterest);
        this.dialogRef.close();
    };
    EditSpecialInterestsDialog.prototype.newInterest = function () {
        var hasUnsaved = this.specialInterests.some(function (v) {
            if (v.id == null)
                return true;
        });
        if (!hasUnsaved) {
            this.specialInterests.push({ id: null, name: 'New' });
        }
        this.selected_interest = this.specialInterests[this.specialInterests.length - 1];
        this.form.setValue({ name: this.selected_interest.name });
        document.querySelector('input').focus();
    };
    EditSpecialInterestsDialog.prototype.selectInterest = function (interest) {
        var bottomInterest = this.specialInterests[this.specialInterests.length - 1];
        if (interest != bottomInterest && !bottomInterest.id) {
            this.specialInterests.pop();
        }
        this.selected_interest = interest;
        this.form.setValue({ name: interest.name });
    };
    return EditSpecialInterestsDialog;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('defaultButton'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _a || Object)
], EditSpecialInterestsDialog.prototype, "defaultButton", void 0);
EditSpecialInterestsDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/admin/users/edit-user/edit-special-interests.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/users/edit-user/edit-special-interests.css")],
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["G" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _e || Object, Object])
], EditSpecialInterestsDialog);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-special-interests.js.map

/***/ }),

/***/ "../../../../../src/app/admin/users/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table.weeks td {\n    margin-right: 4px;\n    background-color: #fff;\n    border-right: 1px solid #d6d6d6;\n}\n\ntable.weeks tr:first-child div {\n    overflow: hidden;\n    background-color: #3673AA;\n    color: #E4F2FF;\n    width: 5ch;\n    text-align: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n    cursor: default;\n}\n\ntable.weeks div{\n    background-color: #F2F9FF;\n    text-align: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n    width: 5ch;\n}\n\n.colorBadge{\n    display: inline-block;\n    border-radius: 50%;\n    width: 1em;\n    height: 1em; \n}\n\n.shift {\n    overflow: hidden;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n\n    <mat-table #table [dataSource]=\"dataSource\">\n\n        <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n            <!-- Name Column -->\n            <ng-container cdkColumnDef=\"name\">\n                <mat-header-cell *cdkHeaderCellDef> Name </mat-header-cell>\n                <mat-cell *cdkCellDef=\"let row\">\n                    <a [routerLink]=\"['../edit-user', row.id]\"><span style=\"font-size: 1.8em;\" class=\"fa fa-user-md\" [style.color]=\"row.color\"></span> {{row.firstName}} {{row.lastName}}</a>\n                </mat-cell>\n            </ng-container>\n\n            <ng-container cdkColumnDef=\"workingDays\">\n                <mat-header-cell *cdkHeaderCellDef style=\"flex: 0 0 200px\"> Working Days </mat-header-cell>\n                <mat-cell *cdkCellDef=\"let row\" style=\"flex: 0 0 200px\">\n                    <table class=\"weeks\">\n                        <tr>\n                            <td *ngFor=\"let day of row.workingDays\">\n                                <div>{{shorten(day.day, 3)}}</div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td *ngFor=\"let day of row.workingDays\">\n                                <div class=\"shift {{day.shift}}\">{{day.shift}}</div>\n                            </td>\n                        </tr>\n                    </table>\n                </mat-cell>\n            </ng-container>\n\n            <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *cdkRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n    </mat-table>\n\n    <mat-paginator #paginator\n         [length]=\"dataSource.totalCount\"\n         [pageSizeOptions]=\"[5, 10, 25, 100]\">\n    </mat-paginator>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* unused harmony export UserDataSource */
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

var UserListComponent = (function () {
    function UserListComponent(router, parentComponent, userService, usersComponent, localStorageService) {
        this.router = router;
        this.parentComponent = parentComponent;
        this.userService = userService;
        this.usersComponent = usersComponent;
        this.localStorageService = localStorageService;
        this.displayedColumns = ['name', 'workingDays'];
        this.day = new __WEBPACK_IMPORTED_MODULE_9__model_user__["c" /* Day */]();
        this.shift = new __WEBPACK_IMPORTED_MODULE_9__model_user__["b" /* Shift */]();
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.parentComponent.currentPage = "Users";
        this.restoreProperties();
        this.dataSource = new UserDataSource(this.userService, this.paginator, this.localStorageService);
        this.usersComponent.pushHistory(-1);
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.storeProperties();
    };
    UserListComponent.prototype.storeProperties = function () {
        this.localStorageService.set(this.constructor.name + '.pageIndex', this.paginator.pageIndex);
        this.localStorageService.set(this.constructor.name + '.pageSize', this.paginator.pageSize);
    };
    UserListComponent.prototype.restoreProperties = function () {
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
    UserListComponent.prototype.beforeUnloadHander = function (event) {
        this.ngOnDestroy();
    };
    UserListComponent.prototype.shorten = function (str, len) {
        return str.substr(0, len);
    };
    return UserListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatPaginator */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["J" /* MatPaginator */]) === "function" && _a || Object)
], UserListComponent.prototype, "paginator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserListComponent.prototype, "beforeUnloadHander", null);
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-list-component',
        template: __webpack_require__("../../../../../src/app/admin/users/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/users/user-list.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__admin_component__["a" /* AdminComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__admin_component__["a" /* AdminComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__users_component__["a" /* UsersComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__users_component__["a" /* UsersComponent */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageService"]) === "function" && _f || Object])
], UserListComponent);

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var UserDataSource = (function (_super) {
    __extends(UserDataSource, _super);
    function UserDataSource(userService, _paginator, localStorageService) {
        var _this = _super.call(this) || this;
        _this.userService = userService;
        _this._paginator = _paginator;
        _this.localStorageService = localStorageService;
        _this.totalCount = 0;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    UserDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.userService.usersSubject,
            this._paginator.page,
        ];
        //return Observable.merge(...displayDataChanges).map(this.userService.retrieve);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"], displayDataChanges).map(function () {
            // Grab the page's slice of data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            //return this.userService.users_collection.slice(startIndex, this._paginator.pageSize);
            _this.totalCount = _this.userService.totalCount;
            return _this.userService.retrieve(startIndex, _this._paginator.pageSize);
        }).flatMap(function (e) { return e; });
    };
    UserDataSource.prototype.disconnect = function () { };
    return UserDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["n" /* DataSource */]));

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ng-component{\n    padding: 1%;\n}\n\na:hover, a:focus{\n    text-decoration: none;\n}\n\na.mat-tab-link:focus{\n    background: #fff;\n    text-decoration: none;\n}\n\ni.fa-times{\n    /* position: fixed; */\n}\n\ni.fa-times:hover{\n    cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\n\n  <span *ngFor=\"let link of navLinks\">\n    <a mat-tab-link\n      [routerLink]=\"link.ref\"\n      routerLinkActive #rla=\"routerLinkActive\"\n      [active]=\"rla.isActive\">\n      <span *ngIf=\"titleType(link) == 0\">{{link.label}}</span>\n      <i *ngIf=\"titleType(link) == 1\">{{link.label}}</i>\n      <b *ngIf=\"titleType(link) == 2\">{{link.label}}</b>\n\n    </a>\n    <i class=\"fa fa-times\" aria-hidden=\"true\" *ngIf=\"link.id>0\" (click)=\"closeUser(link.id)\"></i>\n  </span>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.ts":
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
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




var UsersComponent = (function (_super) {
    __extends(UsersComponent, _super);
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
    function UsersComponent(route, router, location, localStorageService, historyService, adminComponent) {
        var _this = _super.call(this, location, router) || this;
        _this.route = route;
        _this.router = router;
        _this.location = location;
        _this.localStorageService = localStorageService;
        _this.historyService = historyService;
        _this.adminComponent = adminComponent;
        _this.navLinks = [
            { label: 'Employee List', ref: 'user-list', id: -1, default: true },
            { label: 'Create Employee', ref: 'create-user', id: -2, default: false }
        ];
        //activeId = 0;
        _this.state = 'out';
        _this.componentUrl = '/admin/users';
        _this.keepLive = true;
        return _this;
    }
    UsersComponent.prototype.animationEnded = function (event) {
        console.log("animationEnded");
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.restoreProperties();
        this.adminComponent.setActive(this.constructor.name);
        var params = this.route.snapshot.queryParams;
        if (params["redirectTo"] != null && params["redirectTo"] == 'lastVisited') {
            var lastRoute = this.localStorageService.get(this.constructor.name + '.lastRoute');
            if (lastRoute != null) {
                this.router.navigate([lastRoute]);
            }
        }
        this.clearInvalidTabs();
    };
    /** Opens a new tab. It's title will initialy be simply of the form "id999" where 999 is the userId passed to
     *  this method. The child component (EditUser if nobody has changed it) will update tab's title with user's
     *  name as soon as it has fetched the user object from the server.
     */
    UsersComponent.prototype.editUser = function (userId) {
        for (var _i = 0, _a = this.navLinks; _i < _a.length; _i++) {
            var link = _a[_i];
            if (link.id == userId) {
                return;
            }
        }
        if (typeof userId != 'undefined') {
            this.navLinks.push({ label: "id" + userId, ref: 'edit-user/' + userId, id: userId, default: false });
        }
        //this.history.push({id: userId});
    };
    /** Closes a tab associated with the given userId. Method will check whether that tab is open and if that's the
     *  case will go back one step in browser's history (that's the most natural behaviour and the one the user would
     *  expect).
     */
    UsersComponent.prototype.closeUser = function (userId) {
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
    UsersComponent.prototype.titleType = function (link) {
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
    UsersComponent.prototype.updateTabTitle = function (userId, name) {
        for (var _i = 0, _a = this.navLinks; _i < _a.length; _i++) {
            var link = _a[_i];
            if (link.id == userId) {
                link.label = name;
                break;
            }
        }
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.storeProperties();
    };
    // ngOnDestroy will be only called if the user navigates to a different route. If she just closes
    // the document destructor will not be called. Here we cover closing document.
    UsersComponent.prototype.beforeUnloadHander = function (event) {
        this.ngOnDestroy();
    };
    UsersComponent.prototype.storeProperties = function () {
        //console.log(this.historyService.currentUrl);
        this.localStorageService.set(this.constructor.name + '.navLinks', this.navLinks);
        this.localStorageService.set(this.constructor.name + '.lastRoute', this.historyService.currentUrl);
        // when storing properties we also want to store current URL, which we will redirect to when
        // the user navigates back to this section of the application. This way navigation would feel
        // less obtrusive and would allow the user to freely navigate between sections without losing
        // focus to the last used tab
    };
    UsersComponent.prototype.restoreProperties = function () {
        var navLinks = this.localStorageService.get(this.constructor.name + '.navLinks');
        if (navLinks != null) {
            this.navLinks = navLinks;
        }
    };
    return UsersComponent;
}(__WEBPACK_IMPORTED_MODULE_4__model_tabbed_component__["a" /* TabbedComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersComponent.prototype, "beforeUnloadHander", null);
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/admin/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/users/users.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__service_history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_history_service__["a" /* HistoryService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__admin_component__["a" /* AdminComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__admin_component__["a" /* AdminComponent */]) === "function" && _f || Object])
], UsersComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/users/users.module.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_list_component__ = __webpack_require__("../../../../../src/app/admin/users/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_user_component__ = __webpack_require__("../../../../../src/app/admin/users/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_user_edit_special_interests__ = __webpack_require__("../../../../../src/app/admin/users/edit-user/edit-special-interests.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRoutes", function() { return userRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/** Importing local modules */

/** Importing local components */




var userRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__users_component__["a" /* UsersComponent */],
        //canActivate: [AuthGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'user-list' },
            { path: 'user-list', component: __WEBPACK_IMPORTED_MODULE_8__user_list_component__["a" /* UserListComponent */] },
            { path: 'edit-user/:id', component: __WEBPACK_IMPORTED_MODULE_9__edit_user_component__["a" /* EditUserComponent */] },
            { path: 'create-user', component: __WEBPACK_IMPORTED_MODULE_9__edit_user_component__["a" /* EditUserComponent */] },
        ]
    }
];
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
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
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forChild(userRoutes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__edit_user_component__["a" /* EditUserComponent */],
            __WEBPACK_IMPORTED_MODULE_10__edit_user_edit_special_interests__["a" /* EditSpecialInterestsDialog */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__edit_user_edit_special_interests__["a" /* EditSpecialInterestsDialog */],
        ],
        providers: []
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

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
//# sourceMappingURL=1.chunk.js.map