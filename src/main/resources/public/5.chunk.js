webpackJsonp([5],{

/***/ "../../../../../src/app/admin/schedule3/manage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\n    /* border: 1px solid red; */\n}\n\n.hour {\n    float: left;\n    width: 5px;\n    height: 60px;\n    border-left: 1px #FBFBFB solid;\n    border-top: 1px #E8E8E7 solid;\n}\n\n.mightyParent{\n    position: relative;\n    overflow: hidden;\n    height: 77vh;\n    margin-top: -95px;\n    margin-left: 250px;\n}\n\n.scrollbarX {\n    position:absolute;\n    bottom:0px;\n    overflow-x:scroll;\n    overflow-y: hidden;\n    height: 20px;\n    width: 80%;\n    left:200px;\n    z-index: 999;\n}\n\n.scrollbarY {\n    position:absolute;\n    bottom:0px;\n    overflow-x:hidden;\n    overflow-y:auto;\n    width: 20px;\n    right:0px;\n    z-index: 999;\n}\n\n.timeTableContainer{\n    position: relative;\n    margin-top: 95px;\n    margin-left: 120px;\n    overflow: hidden;\n}\n\n.timeContainer {\n    position:absolute;\n    width: 5px;\n    height: 100px;\n    border-bottom: 1px solid #f1f1f1;\n    /*border: 1px red solid; */\n}\n.timeContainer.Spare {\n    background-color: azure;\n}\n\n.regNoContainer{\n    position: absolute;\n    float: left;\n    width: 120px;\n    border-right: 1px solid #f1f1f1;\n}\n\n.driverTrailerBox{\n    overflow: auto;\n    height: auto;\n}\n\n.driverTrailerContainer{\n    height: 77vh;\n    width: 240px;\n    float: left;\n}\n\n.consultantContainer, .registrarContainer{\n    width: 100%;\n    float: left;\n    height: 38vh;\n    /* overflow: auto; */\n    cursor: pointer;\n}\n\n.consultantContainer, .mightyParent, .registrarContainer, .assingmentPanel{\n    position: relative;\n    background: #fff;\n    /* white-space: nowrap; */\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n    margin-bottom: 10px;\n}\n\n.assignPanelDetails{\n    max-height: 160px;\n    height: 160px;\n    overflow-y: auto;\n}\n\n.driverHeader, .trailerHeader{\n    color: #989898;\n    font-weight: bold;\n    text-transform: uppercase;\n    padding-left: 35px;\n    padding-right: 35px;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    background: #fbfbfb;\n}\n\n.driverHeader input, .trailerHeader input{\n    border: none;\n    border-bottom: 1px solid #C7C7C7;\n    background: transparent;\n}\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    font-size: 12px;\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    font-size: 12px;\n  }\n  :-ms-input-placeholder { /* IE 10+ */\n    font-size: 12px;\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    font-size: 12px;\n  }\n\n.employee {\n    /* left: 20px;\n    top: 0px;\n    position:absolute;\n    width: auto;\n    height: 40px;\n    color: #7e7e7e;\n    font-weight: bold;\n    padding: 10px;\n    margin-top: 10px;\n     */\n     width: auto;\n     height: 21px;\n     color: #7e7e7e;\n     font-weight: bold;\n     padding: 0px;\n}\n\n.employee:hover{\n    background-color: aliceblue;\n}\n\n.consultantContainer .driver:hover{\n    color: #252525;\n}\n\n\n.assingmentPanel{\n    /* position: absolute;\n    bottom:0px;\n    height: 200px;\n    width:350px;\n    right:2%;\n    display: block;\n    overflow: auto;\n    padding: 10px;\n    z-index: 1000; */\n}\n\n.assingmentPanel .tabs{\n    background-color: #ececec;\n    border-radius: 5px;\n    font-weight: normal;\n    line-height: 28px;\n    height: 30px;\n    padding: 0 4px;\n    cursor: pointer;\n    box-sizing: border-box;\n    opacity: .6;\n    text-align: center;\n    display: inline-block;\n    vertical-align: top;\n    text-decoration: none;\n    position: relative;\n    overflow: hidden;\n    border-bottom: 2px solid #FFFFFF;\n}\n\n.assingmentPanel .tabs:active,\n.assingmentPanel .tabs:hover,\n.assingmentPanel .tabs:focus{\n    border-bottom: 2px solid #3f51b5;\n}\n\n.assingmentPanel .tabs_active{\n    border-bottom: 2px solid #3f51b5;\n}\n\n.assingmentPanel .driver:hover{\n    color: #7e7e7e;\n}\n\n.assignPanelDetails {\n    padding: 1em;\n}\n\n.assignPanelDetails .fa-trash{\n    color: #252525;\n}\n\n.assignPanelDetails .fa-trash:hover{\n    color: #7e7e7e !important;\n    cursor: pointer;\n}\n\n.day {\n    height: 95px;\n    width: 121px;\n    border-left: 2px;\n    padding: 0px;\n    background: #fbfbfb;\n    font-weight: bold;\n    border-top: 2px solid #fbfbfb;\n    border-right: 1px solid #F1F1F1;\n    border-bottom:  1px solid #F1F1F1;\n    z-index: 997;\n    text-align: center;\n    overflow: hidden;\n}\n\n/*.day:hover, .day:active, .day:focus{\n    border-top: 2px solid #02d1a5;\n    background: #ffffff;\n}*/\n\n.startOfDay {\n    float: left;\n    width: 5px;\n    height: 100px;\n    border-left: 1px solid #F1F1F1;\n    border-top: 1px #E8E8E7 solid;\n}\n\n.startOfMonth {\n    float: left;\n    width: 5px;\n    height: 100px;\n    border-left: 1px #D9B1BC solid;\n    border-top: 1px #E8E8E7 solid;\n}\n\n.month {\n    position: absolute;\n    z-index: -1;\n    top: -3px;\n    font-weight: bold;\n    color:#989898;\n    font-size: large;\n    left: 1em;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.activityHeaderItem {\n    font-size: 16px;\n    float: left;\n    width: 100%;\n    height: 100px;\n    color: #252525;\n    text-transform: uppercase;\n    text-align: center;\n    line-height: 4;\n    border-bottom: 1px solid #F1F1F1;\n    overflow: hidden;\n}\n.activityHeaderItem.Spare {\n    background-color: azure;\n}\n\n.activityHeader {\n    color: #989898;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 95px;\n    overflow: hidden;\n    background: #fbfbfb;\n}\n\n.daysContainer {\n    padding-left: 2px;\n    margin-left: 370px;\n    border-left: 2px;\n    overflow:hidden;\n    overflow-y: hidden;\n    height: 95px;\n    /* width: 80%; */\n}\n\n.scrollbarX{\n    position:absolute;\n    bottom:0px;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    height: 20px;\n    width: 85%;\n    left:210px;\n}\n\n.assignment{\n    left: 20px;\n    top: 0px;\n    position:absolute;\n    width: auto;\n    height: 60px;\n    color: #252525;\n    background-color: #FBFBFB;\n    border: 1px solid #080808;\n    font-weight: bold;\n    padding: 5px;\n    margin-top: 0px;\n    overflow: hidden;\n    opacity: 0.765;\n    transition: border 1;\n}\n\n.assignmentSelected {\n    border-top: 2px solid #080808;\n    border-left: 2px solid #080808;\n    opacity: 0.912;\n}\n\n.EditedByPeer {\n    background-color: #8cfbff;\n}\n\n#AssignPanelHeader {\n    overflow: hidden;\n    width: 100%;\n}\n\n#AssignPanelHeader div{\n\tmargin-right: 1em;\n}\n\n#AssignPanelHeader div:last-child{\n\tmargin-right: 0em;\n}\n\n#AssignPanelTabs {\n    overflow: hidden;\n    max-height: 30px;\n}\n\n.currentMonth {\n    position: absolute;\n    z-index: 999;\n    color:#989898;\n    background-color: #FBFBFB;\n    padding-left: 2em;\n    margin-left: -2em;\n    font-weight: bold;\n}\n\n.colorBadge{\n    margin-left: 0.5em;\n    display: inline-block;\n    border-radius: 50%;\n    width: 1em;\n    height: 1em;\n}\n\n#redBall {\n    visibility: hidden;\n    border-radius:50px;\n    width:50px;\n    height:50px;\n    background:rgb(141, 154, 162);\n    position:fixed;\n    top:0;\n    left:0;\n    transition: -webkit-transform 1s;\n    transition: transform 1s;\n    transition: transform 1s, -webkit-transform 1s;\n}\n\n.assignmentDetails {\n    position: relative;\n    line-height: 50%;\n    overflow: hidden;\n}\n\n.assignmentDetails > .drivers{\n    position: absolute;\n    line-height: 50%;\n    margin: 0.2 em;\n}\n\n.assignmentNumber {\n    float: left;\n    background-color: #ececec;\n    border-radius: 5px;\n    font-weight: normal;\n    font-size: 13px;\n}\n\n.assignment_rowEmployees{\n\tfloat: left;\n\tfont-size: 13px;\n    color: rgb(37, 37, 37);\n}\n\n.assignment_rowEmployees li, .assignment_rowEmployees ul{\n    border-radius: 5px;\n    padding: 3px;\n    padding-top: 1px;\n\tmargin: 0px;\n    color: #fbfbfb;\n}\n\n.assignment_rowEmployees > div {\n    float: left;\n}\n\ncanvas {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    outline: none;\n}\n\ndiv {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  outline: none;\n}\n\n.assignPanelDetails .driver {\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\n\n.closeAssignPanel {\n    float:right;\n    color: red;\n    cursor:pointer;\n    position: absolute;\n    background-color: white;\n    right: 0px;\n    top: 0px;\n    min-width: 20px;\n}\n\n.day ._meridiem_container {\n    border-top: 1px solid #dbdbdb;\n    height: 2px;\n}\n\n.day ._meridiem{\n    float: left;\n    width: 50%;\n    border-right: 1px solid #dbdbdb;\n    height: 50px;\n    color: #afafaf;\n    vertical-align: middle;\n    padding-top: 12px;\n}\n\n.day ._meridiem:last-child {\n    border: none;\n}\n\n.scrolledWidget {\n    position:relative;\n}\n\n.employees {\n    color: #292b2c;\n    font-weight: bold;\n}\n\n.employees.noConsultant {\n    color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/schedule3/manage.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <button mat-button (click)=\"zoomIn()\"><i class=\"fa fa-search-plus\" aria-hidden=\"true\"></i></button>\n    {{_scale_factor_percentage}}%\n    <button mat-button (click)=\"zoomOut()\"><i class=\"fa fa-search-minus\" aria-hidden=\"true\"></i></button>\n      <span>\n        <mat-input-container>\n          <input matInput  [matDatepicker]=\"picker\" (ngModelChange)='onChangeScheduleStartDate($event)' [(ngModel)]='_scheduleStartDate' placeholder=\"Timeline Start Date\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        </mat-input-container>\n        <mat-datepicker #picker></mat-datepicker>\n      </span>\n    <button mat-raised-button color=\"primary\" (click)=\"generateScheduleUI()\"><span class=\"fa fa-bolt\" aria-hidden=\"true\"></span> Generate Schedule</button>\n\n</div>\n\n  <div class=\"driverTrailerContainer\">\n    <div class=\"consultantContainer\">\n      <div class=\"driverHeader\">Consultants:\n          <!-- <input matInput placeholder=\"search\"> -->\n      </div>\n\n      <div class=\"driverTrailerBox\">\n        <div id='consultant-{{consultant.id}}' [attr.data-driverid]='consultant.id' class=\"employee\" draggable=\"true\"\n         (dragstart)=\"onDragConsultant($event)\" style=\"position:static;\" *ngFor=\"let consultant of consultants\">\n            <div class='colorBadge' [style.background-color]='consultant.color'></div> {{consultant.firstName}} {{consultant.lastName}}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"registrarContainer\">\n      <div class=\"driverHeader\">Registrars:\n          <!-- <input matInput placeholder=\"search\"> -->\n      </div>\n\n      <div class=\"driverTrailerBox\">\n        <div id='registrar-{{registrar.id}}' [attr.data-driverid]='registrar.id' class=\"employee\" draggable=\"true\"\n         (dragstart)=\"onDragRegistrar($event)\" style=\"position:static;\" *ngFor=\"let registrar of registrars\">\n            <div class='colorBadge' [style.background-color]='registrar.color'></div> {{registrar.firstName}} {{registrar.lastName}}\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div #timeHeader class=\"daysContainer\">\n      <div class=\"currentMonth\">{{currentMonth}}</div>\n    <div #timeHeaderContent>\n      <div style=\"float:left;position:relative;\" *ngFor=\"let day of days\" class=\"day\">\n        <span style=\"text-align: center;color: #02d1a5;\">{{day.date.getDate()}}</span><br />\n        <span style=\"color:#989898;text-transform: uppercase;text-align: center;\">{{day.getWeekDay()}}</span>\n        <div *ngIf=\"day.date.getDate()==1\" class=\"month\">{{day.getMonth()}}</div>\n        <div class=\"_meridiem_container\">\n            <div class=\"_meridiem\">AM</div>\n            <div class=\"_meridiem\">PM</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div #mightyParent class=\"mightyParent\">\n    <div class=\"regNoContainer\">\n      <div #activityHeader class=\"activityHeader\">Activities</div>\n      <div #activityHeaderContainer class=\"activityHeaderContainer\" style=\"overflow: hidden\">\n        <div *ngFor=\"let row of activitySchedule\" class=\"activityHeaderItem\" [class.Spare]=\"row.activity.name=='Spare'\">{{row.activity.name}}</div>\n        <div style=\"clear:both\"></div>\n        <div [style.height.px]=\"scrollbarXHeight\"> </div>\n      </div>\n    </div>\n\n    <div #scrollbarX class=\"scrollbarX\">\n      <div #scrollbarXDummyContent style=\"color: #fff;\">.</div>\n    </div>\n\n    <div #scrollbarY class=\"scrollbarY\">\n      <div #scrollbarYDummyContent> </div>\n    </div>\n\n    <div #scrolledParent class=\"timeTableContainer\">\n        <div [style.display]=\"loadingIndication\" style=\"position:absolute;top:0;right:0;bottom:0;left:0;background-color:white;opacity:0.8;z-index:99999;\">\n\t\t\t<mat-progress-spinner class=\"loading-indication\" mode=\"indeterminate\" style=\"margin: 0 auto;position: relative; top: 50%;\">\n                Generating Schedule...\n\t\t\t</mat-progress-spinner>\n\t     </div>\n\n      <div class=\"scrolledWidget\" #scrolledWidget style=\"float:left\" (mousemove)=\"onMouseMove($event)\" (mouseup)=\"onMouseUp($event)\">\n        <div *ngFor=\"let row of activitySchedule; let i = index\">\n          <div #timeContainer class=\"timeContainer\" (drop)=\"onDropDriver($event, false)\" (dragover)=\"onDragOver($event)\" [attr.data-activityid]=\"row.activity.id\" [attr.data-index]=\"i\">\n            <div *ngFor=\"let assignment of row.assignments\"\n              [attr.data-assignmentid]='assignment.assignmentId' [style.z-index]='assignment.z_index'\n              [style.left.px]=\"assignment.offsetLeft\" [style.width.px]=\"assignment.width\" class=\"assignment\"\n              (drop)=\"onDropDriver($event, true)\" (mousedown)=\"onClickAssignment($event)\"\n              [class.EditedByPeer]='assignment.indicatePeerEdit' [id]='\"assignment\"+assignment.assignmentId'>\n\t\t\t    <div style=\"width: 300px; overflow: hidden;\">\n                  <div class=\"assignment_rowEmployees\" style=\"margin-left: 10px;float: left;\">\n                      <div style=\"display: inline-block;top:1em;\">\n\n                          <div class=\"employees\" aria-hidden=\"true\"\n                              [class.noConsultant]=\"!_isThereConsultants(assignment.assignmentEmployees)\">\n                              {{_printConsultantHeader(assignment.assignmentEmployees)}}\n                          </div>\n\n                          <div class=\"employees\" aria-hidden=\"true\">\n                              {{_printRegistrarHeader(assignment.assignmentEmployees)}}\n                          </div>\n                          <ul *ngFor=\"let assignmentShift of assignment.assignmentEmployees\" class=\"driver\">\n                              <li *ngIf=\"_isEmployeeRegistrar(assignmentShift.employee)\" [style.background-color]=\"assignmentShift.employee.color\">\n                              {{assignmentShift.employee.firstName}} {{assignmentShift.employee.lastName}}\n                              </li>\n                          </ul>\n                      </div>\n                      <div>\n                      </div>\n                    <br/>\n                  </div>\n\t\t\t    </div>\n            </div>\n          </div>\n          <canvas class=\"hour\" [class.startOfDay]=\"hour==0\"> </canvas>\n          <div style=\"clear:both\"></div>\n        </div>\n        <div [style.height.px]=\"scrollbarXHeight\"> </div>\n      </div>\n    </div>\n  </div>\n\n  <div #AssignPanel class=\"assingmentPanel\" *ngIf=\"assignment_selected\">\n    <div #AssignPanelTabs id=\"AssignPanelHeader\">\n      <div style=\"float:right; color: red; cursor:pointer\" (click)=\"closeAssignmentPanel()\">x</div>\n      <div style=\"clear:both;\"></div>\n    </div>\n  \n    <div #AssignPanelDetails class=\"assignPanelDetails\">\n  \n      <div style=\"margin-left: 10px;float: left;width: 20%;\">\n          <span aria-hidden=\"true\"  style=\"color: #292b2c;font-weight: bold;\">\n              {{_printConsultantHeaderPanel()}}\n          </span>\n        <div *ngFor=\"let assignmentEmployee of _getAssignmentConsultants()\" class=\"consultant\" draggable=\"true\" (dragstart)=\"onDragActor($event)\"\n            [attr.data-assignmentemployeeid]='assignmentEmployee.id'>\n            <div class='colorBadge' [style.background-color]='assignmentEmployee.employee.color'></div>\n            {{assignmentEmployee.employee.firstName}} {{assignmentEmployee.employee.lastName}}\n        </div>\n        <br/>\n      </div>\n\n      <div style=\"float: left;width: 20%;\">\n          <span aria-hidden=\"true\"  style=\"color: #292b2c;font-weight: bold;\">\n              {{_printSHOHeaderPanel()}}\n          </span>\n        <div *ngFor=\"let assignmentEmployee of _getAssignmentSHOs()\" class=\"registrar\" draggable=\"true\" (dragstart)=\"onDragActor($event)\"\n            [attr.data-assignmentemployeeid]='assignmentEmployee.id'>\n            <div class='colorBadge' [style.background-color]='assignmentEmployee.employee.color'></div>\n            {{assignmentEmployee.employee.firstName}} {{assignmentEmployee.employee.lastName}}\n        </div>\n        <br/>\n      </div>\n  \n      <div style=\"float: left;width: 20%;\">\n          <span aria-hidden=\"true\"  style=\"color: #292b2c;font-weight: bold;\">\n              {{_printRegistrarHeaderPanel()}}\n          </span>\n        <div *ngFor=\"let assignmentEmployee of _getAssignmentRegistrars()\" class=\"registrar\" draggable=\"true\" (dragstart)=\"onDragActor($event)\"\n            [attr.data-assignmentemployeeid]='assignmentEmployee.id'>\n            <div class='colorBadge' [style.background-color]='assignmentEmployee.employee.color'></div>\n            {{assignmentEmployee.employee.firstName}} {{assignmentEmployee.employee.lastName}}\n        </div>\n        <br/>\n      </div>\n  \n      <div style=\"float: left;width: 20%;\">\n          <span aria-hidden=\"true\"  style=\"color: #292b2c;font-weight: bold;\">\n              Others\n          </span>\n        <div *ngFor=\"let assignmentEmployee of _getAssignmentOthers()\" class=\"registrar\" draggable=\"true\" (dragstart)=\"onDragActor($event)\"\n            [attr.data-assignmentemployeeid]='assignmentEmployee.id'>\n            <div class='colorBadge' [style.background-color]='assignmentEmployee.employee.color'></div>\n            {{assignmentEmployee.employee.firstName}} {{assignmentEmployee.employee.lastName}}\n        </div>\n        <br/>\n      </div>\n\n      <div style=\"clear: both\"></div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/schedule3/manage.component.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_schedule3_service__ = __webpack_require__("../../../../../src/app/service/schedule3.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__model_tmdate__ = __webpack_require__("../../../../../src/app/model/tmdate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_schedule__ = __webpack_require__("../../../../../src/app/model/schedule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__schedule_component__ = __webpack_require__("../../../../../src/app/admin/schedule3/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__manage_confirm_assignment_erase__ = __webpack_require__("../../../../../src/app/admin/schedule3/manage/confirm-assignment-erase.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Manage3Component; });
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

/** exporting components */
//export { SelectVehicleComponent } from './manage/select-vehicle.component';
//export { ConfirmDialog } from './manage/confirm-assignment-erase';
var Manage3Component = (function () {
    function Manage3Component(router, parentComponent, userService, activityService, 
        //private trailerService: TrailerService,
        scheduleComponent, localStorageService, renderer, renderer2, dialog, document, cssService, schedule3Service, formBuilder) {
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
        this.schedule3Service = schedule3Service;
        this.formBuilder = formBuilder;
        //@ViewChild("activityHeaderContainerViewPort") public activityHeaderContainerViewPort: ElementRef;
        this.selectedActivitiesSimple = { total: 0, users: [] };
        this.activitySchedule = [];
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
        this.consultants = [];
        this.registrars = [];
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
        this.reservedOffsetLeft = 0; //with this we compensate over unalighed assignments
        this.loadingIndication = 'none';
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
            if (_this.loadingIndication == 'block') {
                event.stopPropagation();
                return false;
            }
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
            _this.scrolledParent.nativeElement.scrollTop = _this.scrollbarY.nativeElement.scrollTop;
            _this.activityHeaderContainer.nativeElement.scrollTop = _this.scrollbarY.nativeElement.scrollTop;
            console.log("scrolledParent Y: " + _this.scrolledParent.nativeElement.scrollTop);
            console.log("activityHeaderContainerY: " + _this.activityHeaderContainer.nativeElement.scrollTop);
        };
        this.scrollCallbackX = function (event) {
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
                var activityIds = []; // we need to prepare an array containing vehicleIds
                for (var _i = 0, _a = _this.activitySchedule; _i < _a.length; _i++) {
                    var v = _a[_i];
                    activityIds.push(v.activity.id.toString()); // method
                } // .....
                _this.loadAssignments(_this.days[_this.days.length - 1], timeLength, activityIds);
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
    Manage3Component.prototype.ngDoCheck = function () {
        var total = 0;
        for (var i in this.selectedActivitiesSimple.users) {
            if (this.selectedActivitiesSimple.users[i] != null && this.selectedActivitiesSimple.users[i] == true) {
                total++;
            }
        }
        if (this.selectedActivitiesSimple.total != total) {
            //if(true) {
            this.selectedActivitiesSimple.total = total;
            for (var i in this.selectedActivitiesSimple.users) {
                if (this.selectedActivitiesSimple.users[i] == true &&
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
    Manage3Component.prototype.removeKnownReferences = function (index) {
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
    Manage3Component.prototype.isVehicleRemoved = function (id) {
        if (this.selectedActivitiesSimple.users[id] == null || this.selectedActivitiesSimple.users[id] == false) {
            return true;
        }
        return false;
    };
    Manage3Component.prototype.isVehiclePresent = function (id) {
        //        for(let vehi of this.activitySchedule) {
        //            if(vehi.vehicle.id == id) {
        //                return true;
        //            }
        //        }
        //        return false;
    };
    Manage3Component.prototype.moveRedBall = function (ev) {
        var f = document.getElementById('redBall');
        f.style.visibility = 'visible';
        f.style.transform = 'translateY(' + (ev.clientY - 25) + 'px)';
        f.style.transform += 'translateX(' + (ev.clientX - 25) + 'px)';
    };
    Manage3Component.prototype.centralizeActiveTab = function () {
        var tab = document.getElementById('redBall');
        var tabContainer = document.getElementById('redBall');
        var scrollTo = this.elementCoords(tab);
        tabContainer.scrollLeft = scrollTo.x - this.mightyParent.nativeElement.clientWidth;
        //        f.style.visibility = 'visible';
        //        f.style.transform = 'translateY('+(ev.clientY-25)+'px)';
        //        f.style.transform += 'translateX('+(ev.clientX-25)+'px)';
    };
    Manage3Component.prototype.installCallbacks = function () {
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
    Manage3Component.prototype.ngOnInit = function () {
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
        this.userService._getUsers(0, 1000, ['Consultant']).then(function (users) {
            _this.consultants.length = 0;
            (_a = _this.consultants).splice.apply(_a, [0, 0].concat(users));
            var _a;
        });
        var registrarGrades = [];
        for (var g in __WEBPACK_IMPORTED_MODULE_10__model_user__["a" /* Grade */]) {
            if (g != 'Consultant') {
                registrarGrades.push(g);
            }
        }
        this.userService._getUsers(0, 1000, registrarGrades).then(function (users) {
            _this.registrars.length = 0;
            (_a = _this.registrars).splice.apply(_a, [0, 0].concat(users));
            var _a;
        });
        this.schedule3Service.addPeerSaveCallback(function (assignment) {
            assignment.assignmentId = assignment.id;
            assignment.startTime = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["a" /* TmDate */]();
            assignment.startTime.date.setTime(assignment.dateFrom - (assignment.startTime.date.getTimezoneOffset() * 60000));
            assignment.timeLength = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["b" /* TmLength */]();
            assignment.timeLength.seconds = (assignment.dateTo - assignment.dateFrom) / 1000;
            assignment.offsetLeft = _this.reservedOffsetLeft + Math.floor(((assignment.startTime.date.getTime() / 3600000) - _this.days[0].date.getTime() / 3600000)) * (_this._hour_width * _this._scale_factor);
            //ass.offsetLeft = 40;
            assignment.width = ((assignment.timeLength.seconds) / 3600) * (_this._hour_width * _this._scale_factor);
            assignment = _this.pushAssignmentLocally(assignment);
        });
        this.schedule3Service.addPeerDeleteCallback(function (assignmentId) {
            _this.deleteAssignmentLocally(assignmentId);
        });
    };
    Manage3Component.prototype.ngAfterViewInit = function () {
        var date = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["a" /* TmDate */]();
        if (this._scheduleStartDate !== '') {
            date.setFromDate(this._scheduleStartDate + ' UTC');
        }
        //        this._scheduleStartDate = date.getShortDateWithYear();
        this.initView(date);
    };
    Manage3Component.prototype.peerSaveCallback = function (assignment) {
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
    Manage3Component.prototype.loadAssignments = function (startDate, timeLength, vehicleIds) {
        var _this = this;
        this.loadingIndication = 'block';
        this.schedule3Service.fetchAssignments(startDate, timeLength, vehicleIds, function (assignments) {
            var vehicleIdMap = _this.array_flip(vehicleIds);
            for (var _i = 0, assignments_1 = assignments; _i < assignments_1.length; _i++) {
                var ass = assignments_1[_i];
                ass.assignmentId = ass.id;
                ass.startTime = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["a" /* TmDate */]();
                ass.startTime.date.setTime(ass.dateFrom); //-(ass.startTime.date.getTimezoneOffset()*60000));
                ass.timeLength = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["b" /* TmLength */]();
                ass.timeLength.seconds = (ass.dateTo - ass.dateFrom) / 1000;
                ass.width = (_this._hour_width * _this._scale_factor * 12);
                ass.offsetLeft = _this.reservedOffsetLeft + Math.floor(((ass.startTime.date.getTime() / 3600000) - _this.days[0].date.getTime() / 3600000)) * (_this._hour_width * _this._scale_factor);
                if (ass.shift == 'PM') {
                    ass.offsetLeft += ass.width;
                }
                //ass.offsetLeft = 40;
                _this.pushAssignmentLocally(ass);
                //this.registrarSchedule[vehicleIdMap[ass.assignmentActivities[0].vehicle.id]].assignments.push(ass);
                console.log(ass);
            }
            if (_this.assignment_selected != null) {
                _this.bubbleSort(_this.activitySchedule[vehicleIdMap[_this.assignment_selected.assignmentActivities[0].activity.id]].assignments, 'offsetLeft');
            }
            _this.applyCustomScrollbars();
            setTimeout(function () { return _this.resizeAssignPanelTabs(); }, 0);
            _this.loadingIndication = 'none';
        });
    };
    Manage3Component.prototype.computeWidth = function (shift) {
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
    Manage3Component.prototype.array_flip = function (array) {
        var key, tmp_ar = {};
        for (key in array) {
            if (array.hasOwnProperty(key)) {
                tmp_ar[array[key]] = key;
            }
        }
        return tmp_ar;
    };
    Manage3Component.prototype.getVehicleIdMapping = function (vehicleIds) {
        var map = [];
        var c = 0;
        for (var v in vehicleIds) {
            map[c] = v;
            c++;
        }
        return map;
    };
    Manage3Component.prototype.initView = function (date) {
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
    Manage3Component.prototype.zoomIn = function () {
        if (this._scale_factor > 1.74) {
            return;
        }
        this._scale_factor += 0.15;
        console.log(this._scale_factor);
        this._scale_factor_percentage = Math.ceil(this._scale_factor * 100);
        this._scaleView();
    };
    Manage3Component.prototype.zoomOut = function () {
        if (this._scale_factor < 0.551) {
            return;
        }
        this._scale_factor -= 0.15;
        console.log(this._scale_factor);
        this._scale_factor_percentage = Math.ceil(this._scale_factor * 100);
        this._scaleView();
        //TODO check to see whether to allocate more time in the timeline (and load additioanl assignments)
    };
    Manage3Component.prototype.updateTimelineWidth = function () {
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
                    context.fillStyle = '#EFEFEF';
                    context.fillRect(x, 0, 2, this._hour_height);
                }
                else if (i_1 % 12 == 0 && i_1 != 0) {
                    context.fillStyle = '#F1F1F1';
                    context.fillRect(x, 0, 2, this._hour_height);
                }
                else {
                    context.fillStyle = '#FBFBFB';
                    context.fillRect(x, 0, 1, this._hour_height);
                }
            }
        }
        this.scrollbarXDummyContent.nativeElement.style.width = width.toString() + "px";
        this.timeHeaderContent.nativeElement.style.width = (width + 100).toString() + "px";
    };
    Manage3Component.prototype._scaleView = function () {
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
        styles = this.cssService.getStyle("^\\.activityHeaderItem.*");
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
    Manage3Component.prototype.scaleCssProperty = function (style, property, scaleFactor) {
        var value = style.getPropertyValue(property);
        value = (value && value.length > 0) ? parseInt(value) : 0;
        var regex = new RegExp('([^0-9].*)');
        var match = regex.exec(value);
        var suffix = match ? match[1] : 'px';
        style.setProperty(property, (value * scaleFactor) + suffix);
    };
    Manage3Component.prototype.applyCustomScrollbars = function () {
        // Positioning some things programatically. This is needed because we have elements
        // with no "analog connection" between them
        this.scrollbarX.nativeElement.style.left = this.activityHeader.nativeElement.clientWidth;
        var scrollbarXWidth = (this.mightyParent.nativeElement.clientWidth - this.activityHeader.nativeElement.clientWidth - 120) - this.scrollbarYWidth;
        this.scrollbarX.nativeElement.style.width = scrollbarXWidth + "px";
        this.scrollbarY.nativeElement.style.height =
            (this.mightyParent.nativeElement.clientHeight - this.activityHeader.nativeElement.clientHeight) + "px";
        this.scrollbarYDummyContent.nativeElement.style.height = (this.scrolledWidget.nativeElement.clientHeight) + "px";
        this.scrolledParent.nativeElement.style.height = this.scrollbarY.nativeElement.style.height;
        //this.activityHeaderContainerViewPort.nativeElement.style.height = this.scrollbarY.nativeElement.style.height;
        this.activityHeaderContainer.nativeElement.style.height = this.scrollbarY.nativeElement.style.height;
    };
    Manage3Component.prototype.applyMainWidgetsSizes = function () {
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
        var consultantContainerHeight = ((preHeight - 50) / 2);
        var driverTrailerContainers = document.querySelectorAll('.driverTrailerContainer');
        driverTrailerContainers[0].style.height = Math.floor(preHeight) + "px";
        var consultantContainer = document.querySelectorAll('.consultantContainer');
        consultantContainer[0].style.height = Math.floor(consultantContainerHeight) + "px";
        var trailerContainer = document.querySelectorAll('.registrarContainer');
        trailerContainer[0].style.height = Math.floor(consultantContainerHeight + 40) + "px";
        var driverTrailerBox = document.querySelectorAll('.driverTrailerBox');
        for (var _i = 0, driverTrailerBox_1 = driverTrailerBox; _i < driverTrailerBox_1.length; _i++) {
            var box = driverTrailerBox_1[_i];
            box.style.height = Math.floor(consultantContainerHeight - 30) + "px";
        }
        this.resizeAssignPanelTabs();
    };
    Manage3Component.prototype.resizeAssignPanelTabs = function () {
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
    Manage3Component.prototype.assignPanelTabsMouseWheelCallback = function (event) {
        var assignPanelTabs = document.querySelector("#AssignPanelTabs");
        if (assignPanelTabs != null) {
            assignPanelTabs.scrollLeft += event.deltaY;
        }
        //console.log(event.deltaY);
    };
    Manage3Component.prototype._scaleAssignments = function () {
        for (var _i = 0, _a = this.activitySchedule; _i < _a.length; _i++) {
            var schedule = _a[_i];
            for (var _b = 0, _c = schedule.assignments; _b < _c.length; _b++) {
                var assignment = _c[_b];
                assignment.width = (this._hour_width * this._scale_factor * 12);
                assignment.offsetLeft = this.reservedOffsetLeft + Math.floor(((assignment.startTime.date.getTime() / 3600000) - this.days[0].date.getTime() / 3600000)) * (this._hour_width * this._scale_factor);
                if (assignment.shift == 'PM') {
                    assignment.offsetLeft += assignment.width;
                }
            }
        }
    };
    Manage3Component.prototype.reevaluateCurrentMonth = function () {
        var scrollLeft = this.scrolledParent.nativeElement.scrollLeft;
        var daysOffset = Math.floor(scrollLeft / ((this._hour_width * this._scale_factor) * 24));
        this.currentMonth = this.days[daysOffset].getMonth() + " " + this.days[daysOffset].date.getFullYear();
    };
    Manage3Component.prototype.ngOnDestroy = function () {
        this.storeProperties();
    };
    Manage3Component.prototype.storeProperties = function () {
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
    Manage3Component.prototype.selectAllVehicles = function () {
        var _this = this;
        this.activityService._getAllActivitys(0, 1000000).then(function (result) {
            var specialActivities = [];
            var counter = 0;
            var ids = [];
            _this.selectedActivitiesSimple = { total: 0, vehicles: [] };
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var activity = result_1[_i];
                ids.push(activity.id);
                //for(let vehicle of result.vehicleList) {
                if (activity.name == 'Late' || activity.name == 'Night') {
                    specialActivities.push(activity);
                }
                else {
                    _this.activitySchedule.push({ activity: activity, assignments: [] });
                }
                _this.selectedActivitiesSimple.vehicles[activity.id] = true;
                counter++;
            }
            for (var _a = 0, specialActivities_1 = specialActivities; _a < specialActivities_1.length; _a++) {
                var sa = specialActivities_1[_a];
                _this.activitySchedule.unshift({ activity: sa, assignments: [] });
            }
            _this.selectedActivitiesSimple.total = counter;
            //window.location.reload(false); //quick and dirty: reload the page in order to initialize it correctly
            //this.loadAssignments(ids);
            setTimeout(function () { return _this.updateTimelineWidth(); }, 0);
        });
    };
    Manage3Component.prototype.restoreProperties = function () {
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
    Manage3Component.prototype.beforeUnloadHander = function (event) {
        this.ngOnDestroy();
    };
    Manage3Component.prototype.onClickHostHandler = function (event) {
        //  if(this.onClickAssignment_ignore == false){
        //    //this.assignment_selected = null;
        //    console.log("this.assignment_selected = null;");
        //  }
        //  this.onClickAssignment_ignore = false;
    };
    Manage3Component.prototype.openSelectVehicleDialog = function () {
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
    Manage3Component.prototype.onDragActor = function (ev) {
        var dataTransfer = { id: ev.target.dataset.assignmentemployeeid, operation: 'move' };
        ev.dataTransfer.setData("text/json", JSON.stringify(dataTransfer));
        //(<any>ev.target).style.visibility = 'hidden';
        //(<any>ev.target).style.transform = 'translateX(-9999px)';
        ev.dataTransfer.effectAllowed = "move";
        //console.log("drag");
        var elementCoords = this.elementCoords(ev.target);
        //this._dnd_t_offset_x = ev.clientX-elementCoords.x;
        //this._dnd_t_offset_y = ev.clientY-elementCoords.y;
        this._dnd_t_offset_x = 0;
        this._dnd_t_offset_y = 0;
        this._dnd_element = ev.target;
    };
    Manage3Component.prototype.onDragConsultant = function (ev) {
        var dataTransfer = { id: ev.target.dataset.driverid, entityType: 'consultant' };
        ev.dataTransfer.setData("text/json", JSON.stringify(dataTransfer));
        //(<any>ev.target).style.visibility = 'hidden';
        //(<any>ev.target).style.transform = 'translateX(-9999px)';
        ev.dataTransfer.effectAllowed = "copy";
        //console.log("drag");
        var elementCoords = this.elementCoords(ev.target);
        //this._dnd_t_offset_x = ev.clientX-elementCoords.x;
        //this._dnd_t_offset_y = ev.clientY-elementCoords.y;
        this._dnd_t_offset_x = 0;
        this._dnd_t_offset_y = 0;
        this._dnd_element = ev.target;
    };
    Manage3Component.prototype.onDragRegistrar = function (ev) {
        var dataTransfer = { id: ev.target.dataset.driverid, entityType: 'registrar' };
        ev.dataTransfer.setData("text/json", JSON.stringify(dataTransfer));
        //(<any>ev.target).style.visibility = 'hidden';
        //(<any>ev.target).style.transform = 'translateX(-9999px)';
        ev.dataTransfer.effectAllowed = "copy";
        console.log("onDragRegistrar: " + ev.target.dataset.trailerid);
        var elementCoords = this.elementCoords(ev.target);
        this._dnd_t_offset_x = ev.clientX - elementCoords.x;
        this._dnd_t_offset_y = ev.clientY - elementCoords.y;
        this._dnd_element = ev.target;
    };
    Manage3Component.prototype.onDragAssignment = function (ev) {
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
    Manage3Component.prototype.onDragConsultantEnd = function (ev) {
        //(<any>ev.target).style.visibility = 'visible';
        //(<any>ev.target).style.transform = 'translateX(0px)';
        this._dnd_t_offset_x = 0;
        this._dnd_t_offset_y = 0;
        this._dnd_element = null;
    };
    Manage3Component.prototype.onDragOver = function (ev) {
        ev.preventDefault();
    };
    Manage3Component.prototype.removeUserFromAssignment = function (assignmentUserId) {
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
    Manage3Component.prototype.deleteAssignmentUI = function (assignmentId) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_15__manage_confirm_assignment_erase__["a" /* ConfirmDialog */], {
            data: {
                message: "Are you sure you want to delete assignment " + assignmentId + "?",
                yesButtonLabel: "Yes, delete it!",
                noButtonLabel: "No, keep it",
                yesCallback: function () {
                    _this.deleteAssignment(assignmentId);
                },
            }
        });
    };
    Manage3Component.prototype.deleteAssignmentLocally = function (assignmentId) {
        var vi = null;
        var ai = null;
        var vc = 0;
        var ac = 0;
        SEEK_ASSIGNMENT: for (var _i = 0, _a = this.activitySchedule; _i < _a.length; _i++) {
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
            this.activitySchedule[vi].assignments.splice(ai, 1);
            this.assignment_selected = null;
        }
    };
    Manage3Component.prototype.deleteAssignment = function (assignmentId) {
        var _this = this;
        this.schedule3Service.deleteAssignment(assignmentId, function () {
            _this.deleteAssignmentLocally(assignmentId);
        });
    };
    Manage3Component.prototype.selectAssignment = function (assignmentId) {
        console.log('assignmentid: ' + assignmentId);
        if (this.assignment_selected != null) {
            var exSelected = document.querySelector("#assignment" + this.assignment_selected.assignmentId);
            exSelected.classList.remove("assignmentSelected");
        }
        var selected = document.querySelector("#assignment" + assignmentId);
        selected.classList.add("assignmentSelected");
        //this.applyMainWidgetsSizes();
        this.assignment_selected = this.getAssignment(assignmentId);
        console.log(this.assignment_selected);
        this.assignment_selected.z_index = ++this.reached_z_index;
        //this.onClickAssignment_ignore = true;
        this.calculateOverlappedAssignments();
        this._periodForm_from = this.assignment_selected.startTime.get_ISO_8601_Date();
        this._periodForm_to = this.assignment_selected.startTime.plusLength(this.assignment_selected.timeLength).get_ISO_8601_Date();
        for (var index in this.periodFormFields.controls) {
            this.periodFormFields.controls[index].disable();
        }
        //        setTimeout(() => {
        //            let assignPanelDetails = document.querySelector(".assignPanelDetails");
        //            this.renderer2.listen(assignPanelDetails, "scroll", this.assignPanelDetailsScrollCallback);
        //            setTimeout(() => this.centralizeActiveTab(), 0);
        //            setTimeout(() => this._scaleView(), 0);
        //        }, 0);
        //this.periodFormFields.setValue({dateFrom: this.assignment_selected.startTime.getShortDateWithYear(),
        //    dateTo:this.assignment_selected.startTime.plusLength(this.assignment_selected.timeLength).getShortDateWithYear()});
        this.applyMainWidgetsSizes();
    };
    Manage3Component.prototype.bubbleSort = function (array, property) {
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
    Manage3Component.prototype.getMouseClickTarget = function (ev) {
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
        for (var _a = 0, _b = this.activitySchedule[schedule.dataset.index].assignments; _a < _b.length; _a++) {
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
    Manage3Component.prototype.onClickAssignment = function (ev) {
        var target = this.getMouseClickTarget(ev);
        if (target.dataset.assignmentid == null) {
            do {
                target = target.parentNode;
            } while (target.dataset.assignmentid == null);
        }
        if (ev.shiftKey != true) {
            // if(this.assignment_selected != null) {
            //     this.assignment_selected.z_index = 0;
            // }
            //ev.preventDefault();
            this.selectAssignment(target.dataset.assignmentid);
            return true;
        }
        ev.preventDefault();
        //
        //        this._resize_target = target;
        //
        //        let elementCoords = this.elementCoords(this._resize_target);
        //        let targetLeftOffset = target.offsetLeft;
        //        let relX = (<any>event).clientX-elementCoords.x;
        //        //this._resize_target.style.width = relX;
        //
        //        if (relX < 30) {
        //            this._resize_side = 'left';
        //        }
        //        else if(relX > (this._resize_target.offsetWidth - 30)) {
        //            this._resize_side = 'right';
        //        }
        //        else {
        //            this._resize_side = 'center';
        //            this._dnd_t_offset_x = ev.clientX-elementCoords.x;
        //        }
        this.scrollbarX.nativeElement.scrollLeft =
            (this.assignment_selected.offsetLeft - (this.mightyParent.nativeElement.clientWidth / 2));
    };
    Manage3Component.prototype.calculateOverlappedAssignments = function () {
        for (var i in this.activitySchedule) {
            if (this.activitySchedule[i].activity.id == this.assignment_selected.assignmentActivities[0].activity.id) {
                this.scheduleIndex = parseInt(i);
                break;
            }
        }
        this.bubbleSort(this.activitySchedule[this.scheduleIndex].assignments, 'offsetLeft');
        this.assignments_overlapped.length = 0;
        if (this.scheduleIndex > -1) {
            for (var _i = 0, _a = this.activitySchedule[this.scheduleIndex].assignments; _i < _a.length; _i++) {
                var ass = _a[_i];
                if ((ass.startTime.isGreaterOrEqual(this.assignment_selected.startTime) ||
                    ass.startTime.plusLength(ass.timeLength).isGreaterOrEqual(this.assignment_selected.startTime)) &&
                    (ass.startTime.isLessOrEqual(this.assignment_selected.startTime.plusLength(this.assignment_selected.timeLength)) ||
                        ass.startTime.plusLength(ass.timeLength).isLessOrEqual(this.assignment_selected.startTime.plusLength(this.assignment_selected.timeLength)))) {
                    this.assignments_overlapped.push(ass);
                }
            }
        }
    };
    Manage3Component.prototype.switchAssignPanelTab = function (assignmentId) {
        this.selectAssignment(assignmentId);
    };
    Manage3Component.prototype.onMouseUp = function (event) {
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
    Manage3Component.prototype.applyAssingmentTransformation = function (target) {
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
        this.schedule3Service.saveAssignment(assignment, function () { });
    };
    Manage3Component.prototype.getAssignment = function (assignmentId) {
        for (var _i = 0, _a = this.activitySchedule; _i < _a.length; _i++) {
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
    Manage3Component.prototype.onMouseMove = function (event) {
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
    Manage3Component.prototype.elementCoords = function (node) {
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
    Manage3Component.prototype.elementCoordsDocument = function (node) {
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
    Manage3Component.prototype.computeStartTime = function (offsetLeft) {
        var offsetHours = offsetLeft / (this._scale_factor * this._hour_width);
        var startTime = this.days[0].fork();
        startTime.date.setTime(startTime.date.getTime() + (offsetHours * 3600000));
        startTime.date.setHours(0);
        startTime.date.setMinutes(0);
        startTime.date.setSeconds(0);
        startTime.date.setMilliseconds(0);
        return startTime;
    };
    Manage3Component.prototype.computeTimeLength = function (width) {
        var hours = width / (this._scale_factor * this._hour_width);
        var tmLength = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["b" /* TmLength */]();
        tmLength.setHours(hours);
        return tmLength;
    };
    Manage3Component.prototype.onDropDriver = function (ev, add) {
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
        var activityid = target.dataset.activityid;
        var targetActivity = target;
        if (activityid == null) {
            do {
                targetActivity = targetActivity.parentNode;
                activityid = targetActivity.dataset.activityid;
            } while (activityid == null);
        }
        //let element = this.document.querySelector('#driver-23');
        //target.appendChild(element);
        var elementCoords = this.elementCoords(targetActivity);
        var targetCoords = ((ev.clientX - elementCoords.x) - (target.style.width) - this._dnd_t_offset_x) + "px";
        var eventCoordinates = this.alignAssignment(ev.clientX - elementCoords.x - this._dnd_t_offset_x, 'halfday');
        console.log(eventCoordinates);
        //let fetch_
        if (ev.dataTransfer.effectAllowed == 'copy') {
            if (add == false) {
                var user = void 0;
                if (entityType == 'registrar') {
                    for (var _i = 0, _a = this.registrars; _i < _a.length; _i++) {
                        var r = _a[_i];
                        if (r.id == id) {
                            user = { id: 0, employee: r };
                            break;
                        }
                    }
                }
                else {
                    for (var _b = 0, _c = this.consultants; _b < _c.length; _b++) {
                        var c = _c[_b];
                        if (c.id == id) {
                            user = { id: 0, employee: c };
                            break;
                        }
                    }
                }
                var activity = void 0;
                for (var _d = 0, _e = this.activitySchedule; _d < _e.length; _d++) {
                    var schedule = _e[_d];
                    if (schedule.activity.id == activityid) {
                        activity = { id: 0, activity: schedule.activity };
                    }
                }
                if (activity != undefined && user != undefined) {
                    var width = (this._hour_width * this._scale_factor) * 12;
                    var startTime = this.computeStartTime(eventCoordinates);
                    var timeLength = this.computeTimeLength(width);
                    var shift = this.computeShift(eventCoordinates);
                    var assignment = new __WEBPACK_IMPORTED_MODULE_12__model_schedule__["a" /* Assignment */]({
                        id: 0,
                        assignmentId: 0,
                        assignmentEmployees: [user],
                        assignmentActivities: [activity],
                        startTime: startTime,
                        timeLength: timeLength,
                        offsetLeft: eventCoordinates,
                        shift: shift,
                        shiftName: '',
                        width: width,
                        z_index: ++this.reached_z_index,
                    });
                    this.saveAssignment(assignment);
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
            if (dataTransfer.operation == 'move') {
                var target_1 = ev.currentTarget;
                this.moveEmployee(id, target_1.dataset.assignmentid);
            }
            else {
                this.moveAssignment(id, activityid, eventCoordinates);
            }
        }
        ev.preventDefault();
        ev.stopPropagation();
        return false;
    };
    Manage3Component.prototype.computeShift = function (coordinates) {
        var remaining = Math.floor(coordinates) % (this._hour_width * this._scale_factor * 24);
        var shift = 'AM';
        if (remaining > 0) {
            shift = 'PM';
        }
        return shift;
    };
    Manage3Component.prototype.addUserToAssignment = function (id, assignmentid) {
        var _this = this;
        if (typeof (id) == 'string') {
            id = parseInt(id);
        }
        this.userService.getUser(id).then(function (user) {
            if (typeof (assignmentid) == 'string') {
                assignmentid = parseInt(assignmentid);
            }
            var assignment = _this.getAssignment(assignmentid);
            var isPresent = false;
            for (var _i = 0, _a = assignment.assignmentEmployees; _i < _a.length; _i++) {
                var assUser = _a[_i];
                if (assUser.employee.id == id) {
                    isPresent = true;
                    break;
                }
            }
            if (!isPresent) {
                assignment.assignmentEmployees.push({ id: 0, employee: user });
                _this.saveAssignment(assignment);
            }
        });
    };
    //public createAssignment(assignment: Assignment) {
    //    this.schedule1Service.saveAssignment(assignment, (assignmentList: any) => {
    //        this.updateAssignmentLocally(assignment, assignmentList[0]);
    //        this.pushAssignmentLocally(assignment);
    //    });
    //}
    Manage3Component.prototype.saveAssignment = function (assignment) {
        var _this = this;
        this.schedule3Service.saveAssignment(assignment, function (incoming) {
            assignment.previousAssignmentVehicle = null; // we do not need previous assignment vehicle any more
            // as we have already sent it to the backend
            _this.updateAssignmentLocally(assignment, incoming.assignmentList[0]);
            _this.pushAssignmentLocally(assignment);
        });
    };
    Manage3Component.prototype.updateAssignmentLocally = function (assignment, remoteAssignment) {
        try {
            assignment.assignmentActivities[0].id = remoteAssignment.assignmentActivities[0].id;
        }
        catch (e) {
        }
        try {
            var newIds = [];
            var local0i = -1;
            for (var _i = 0, _a = remoteAssignment.assignmentEmployees; _i < _a.length; _i++) {
                var remoteAEss = _a[_i];
                var _new = true;
                var i = 0;
                for (var _b = 0, _c = assignment.assignmentEmployees; _b < _c.length; _b++) {
                    var aess = _c[_b];
                    if (aess.id == 0) {
                        local0i = i;
                    }
                    if (remoteAEss.id == aess.id) {
                        _new = false;
                        break;
                    }
                    i++;
                }
                if (_new) {
                    newIds.push(remoteAEss.id);
                }
            }
            if (newIds.length == 1 && local0i > -1) {
                assignment.assignmentEmployees[local0i].id = newIds[0];
            }
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
    Manage3Component.prototype.pushAssignmentLocally = function (assignment) {
        var exists = false;
        var ret_assignment = assignment;
        var targetActivityId;
        // if(assignment.previousAssignmentVehicle != null) {
        //     targetActivityId = assignment.previousAssignmentVehicle.vehicle.id;
        // }
        // else {
        targetActivityId = assignment.assignmentActivities[0].activity.id;
        // }
        for (var _i = 0, _a = this.activitySchedule; _i < _a.length; _i++) {
            var schedule = _a[_i];
            if (schedule.activity.id == targetActivityId) {
                for (var _b = 0, _c = schedule.assignments; _b < _c.length; _b++) {
                    var ass = _c[_b];
                    if (ass.assignmentId == assignment.assignmentId) {
                        ass.startTime = assignment.startTime;
                        ass.timeLength = assignment.timeLength;
                        ass.offsetLeft = assignment.offsetLeft;
                        ass.width = assignment.width;
                        this.applyPeerChanges(ass.assignmentEmployees, assignment.assignmentEmployees);
                        if (this.applyPeerChanges(ass.assignmentActivities, assignment.assignmentActivities)) {
                            this.reapplyAssignmentVehicleLocally(ass.assignmentId);
                        }
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
            this.bubbleSort(this.activitySchedule[this.scheduleIndex].assignments, 'offsetLeft');
        }
        return ret_assignment;
    };
    Manage3Component.prototype.applyPeerChanges = function (localAssignUsers, remoteAssignUsers) {
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
    Manage3Component.prototype.removeAssignmentLocally = function (assignmentId) {
        /** vehicle index */
        var vI = 0;
        /** schedule index */
        var sI = 0;
        for (var i in this.activitySchedule) {
            //if(this.registrarSchedule[i].vehicle.id == vehicleId) {
            for (var n in this.activitySchedule[i].assignments) {
                if (this.activitySchedule[i].assignments[n].assignmentId == assignmentId) {
                    sI = +n;
                    vI = +i;
                    var schedule = this.activitySchedule[vI].assignments.splice(sI, 1);
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
    Manage3Component.prototype.moveAssignment = function (id, registrarId, eventCoordinates) {
        var assignment = this.removeAssignmentLocally(id);
        assignment.offsetLeft = eventCoordinates;
        assignment.startTime = this.computeStartTime(eventCoordinates);
        // TODO update startTime with eventCoordinates
        // TODO update startTime with eventCoordinates
        for (var _i = 0, _a = this.activitySchedule; _i < _a.length; _i++) {
            var schdl = _a[_i];
            if (schdl.activity.id == registrarId) {
                assignment.previousAssignmentVehicle = assignment.assignmentActivities[0];
                assignment.assignmentActivities[0] = { id: 0, activity: schdl.activity };
                this.saveAssignment(assignment);
                break;
            }
        }
    };
    Manage3Component.prototype.moveEmployee = function (assignmentEmployeeId, assignmentId) {
        var _this = this;
        var i = -1;
        for (var _i = 0, _a = this.assignment_selected.assignmentEmployees; _i < _a.length; _i++) {
            var ae = _a[_i];
            i++;
            if (ae.id == assignmentEmployeeId) {
                break;
            }
        }
        var assEm;
        if (i != -1) {
            assEm = this.assignment_selected.assignmentEmployees.splice(i, 1);
        }
        this.schedule3Service.moveEmployee(assEm, assignmentId, function () {
            var assignment = _this.getAssignment(assignmentId);
            assignment.assignmentEmployees.push(assEm[0]);
        });
    };
    Manage3Component.prototype.reapplyAssignmentVehicleLocally = function (assignmentId) {
        var assignment = this.removeAssignmentLocally(assignmentId);
        var registrarId = assignment.assignmentActivities[0].vehicle.id;
        for (var _i = 0, _a = this.activitySchedule; _i < _a.length; _i++) {
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
    Manage3Component.prototype.applyAssignmentPeriodFromForm = function () {
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
    Manage3Component.prototype.onChangeScheduleStartDate = function (newValue) {
        var date = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["a" /* TmDate */]();
        date.setFromDate(newValue);
        this.initView(date);
        var vehicleIds = [];
        for (var id in this.selectedActivitiesSimple.vehicles) {
            if (this.selectedActivitiesSimple.vehicles[id] == true) {
                vehicleIds.push(id);
            }
        }
        var timeLength = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["b" /* TmLength */]();
        timeLength.seconds = this.hours.length * 3600;
        this.loadAssignments(this.days[0], timeLength, vehicleIds);
    };
    Manage3Component.prototype.closeAssignmentPanel = function () {
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
    Manage3Component.prototype.assignPanelDetailsScrollCallback = function (event) {
        var panelScroll = document.querySelector(".assignPanelDetails").scrollTop;
        var elements = document.querySelectorAll(".assignPanelDetails > div.dont-scroll");
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var div = elements_1[_i];
            div.style.marginTop = panelScroll + "px";
        }
    };
    Manage3Component.prototype.alignAssignment = function (coordinates, granularity) {
        var remaining;
        switch (granularity) {
            case 'hour':
                remaining = Math.floor(coordinates) % (this._hour_width * this._scale_factor);
                coordinates -= remaining;
                break;
            case 'halfday':
                remaining = Math.floor(coordinates) % (this._hour_width * this._scale_factor * 12);
                coordinates -= remaining;
                break;
        }
        coordinates += this.reservedOffsetLeft;
        return coordinates;
    };
    Manage3Component.prototype.generateSchedule = function (_startDate, _endDate) {
        var _this = this;
        this.loadingIndication = 'block';
        this.assignment_selected = null;
        var activityIds = [];
        for (var _i = 0, _a = this.activitySchedule; _i < _a.length; _i++) {
            var s = _a[_i];
            s.assignments.length = 0;
            activityIds.push(s.activity.id);
        }
        var timeLength = new __WEBPACK_IMPORTED_MODULE_11__model_tmdate__["b" /* TmLength */]();
        timeLength.seconds = (_endDate.date.getTime() - _startDate.date.getTime()) / 1000;
        this.schedule3Service.generateSchedule(_startDate, timeLength, function (response) {
            _this.loadAssignments(_startDate, timeLength, activityIds);
            _this.loadingIndication = 'none';
        });
    };
    Manage3Component.prototype.generateScheduleUI = function (assignmentId) {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_15__manage_confirm_assignment_erase__["a" /* ConfirmDialog */], {
            data: {
                message: "Generating schedule will wipe its data and regenerate it according to data from the other two schedules. " +
                    "Any changes done so far manually will be lost! Please be patient, schedule related processing is time consuming " +
                    "and you may need to wait several minutes",
                yesButtonLabel: "Yes, generate it!",
                noButtonLabel: "No, leave it",
                yesCallback: function (_startDate, _endDate) {
                    _this.generateSchedule(_startDate, _endDate);
                    console.log("generate");
                },
            }
        });
    };
    Manage3Component.prototype._printRegistrarHeader = function (assignmentEmployees) {
        var c = 0;
        for (var _i = 0, assignmentEmployees_1 = assignmentEmployees; _i < assignmentEmployees_1.length; _i++) {
            var e = assignmentEmployees_1[_i];
            if (e.employee.grade == 'SeniorRegistrar' || e.employee.grade == 'JuniorRegistrar') {
                c++;
            }
        }
        var count_str = '1 registrar';
        if (c != 1) {
            count_str = c + ' registrars';
        }
        return count_str;
    };
    Manage3Component.prototype._getRegistrarInitials = function (registrar) {
        var initials = registrar.firstName.substr(0, 1) + '.';
        if (registrar.lastName.length > 0) {
            initials += ' ' + registrar.lastName.substr(0, 1) + '.';
        }
        return initials;
    };
    Manage3Component.prototype._printConsultantHeader = function (assignmentEmployees) {
        var c = 0;
        var header = '';
        for (var _i = 0, assignmentEmployees_2 = assignmentEmployees; _i < assignmentEmployees_2.length; _i++) {
            var e = assignmentEmployees_2[_i];
            if (e.employee.grade == 'Consultant') {
                header = this._getRegistrarInitials(e.employee);
            }
        }
        if (header.length == 0) {
            header = 'No Consultant!';
        }
        return header;
    };
    Manage3Component.prototype._isThereConsultants = function (assignmentEmployees) {
        var c = 0;
        for (var _i = 0, assignmentEmployees_3 = assignmentEmployees; _i < assignmentEmployees_3.length; _i++) {
            var e = assignmentEmployees_3[_i];
            if (e.employee.grade == 'Consultant') {
                c++;
            }
        }
        return c;
    };
    Manage3Component.prototype._printRegistrarHeaderPanel = function () {
        var c = 0;
        for (var _i = 0, _a = this.assignment_selected.assignmentEmployees; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.employee.grade == 'JuniorRegistrar' || e.employee.grade == 'SeniorRegistrar') {
                c++;
            }
            if (c > 1) {
                break;
            }
        }
        var header = 'Registrar';
        if (c != 1) {
            header = 'Registrars';
        }
        return header;
    };
    Manage3Component.prototype._printConsultantHeaderPanel = function () {
        var c = 0;
        for (var _i = 0, _a = this.assignment_selected.assignmentEmployees; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.employee.grade == 'Consultant') {
                c++;
            }
            if (c > 1) {
                break;
            }
        }
        var header = 'Consultant';
        if (c != 1) {
            header = 'Consultants';
        }
        return header;
    };
    Manage3Component.prototype._printSHOHeaderPanel = function () {
        var c = 0;
        for (var _i = 0, _a = this.assignment_selected.assignmentEmployees; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.employee.grade == 'SHO') {
                c++;
            }
            if (c > 1) {
                break;
            }
        }
        var header = 'SHO';
        if (c != 1) {
            header = 'SHOs';
        }
        return header;
    };
    Manage3Component.prototype._getAssignmentConsultants = function () {
        var employees = [];
        for (var _i = 0, _a = this.assignment_selected.assignmentEmployees; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.employee.grade == 'Consultant') {
                employees.push(e);
            }
        }
        return employees;
    };
    Manage3Component.prototype._getAssignmentSHOs = function () {
        var employees = [];
        for (var _i = 0, _a = this.assignment_selected.assignmentEmployees; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.employee.grade == 'SHO') {
                employees.push(e);
            }
        }
        return employees;
    };
    Manage3Component.prototype._getAssignmentRegistrars = function () {
        var employees = [];
        for (var _i = 0, _a = this.assignment_selected.assignmentEmployees; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.employee.grade == 'JuniorRegistrar' || e.employee.grade == 'SeniorRegistrar') {
                employees.push(e);
            }
        }
        return employees;
    };
    Manage3Component.prototype._getAssignmentOthers = function () {
        var employees = [];
        for (var _i = 0, _a = this.assignment_selected.assignmentEmployees; _i < _a.length; _i++) {
            var e = _a[_i];
            if (e.employee.grade != 'JuniorRegistrar' && e.employee.grade != 'SeniorRegistrar' &&
                e.employee.grade != 'SHO' && e.employee.grade != 'Consultant') {
                employees.push(e);
            }
        }
        return employees;
    };
    Manage3Component.prototype._isEmployeeConsultant = function (employee) {
        return employee.grade == 'Consultant';
    };
    Manage3Component.prototype._isEmployeeRegistrar = function (employee) {
        return employee.grade == 'JuniorRegistrar' || employee.grade == 'SeniorRegistrar';
    };
    return Manage3Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrolledWidget"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], Manage3Component.prototype, "scrolledWidget", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrolledParent"),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], Manage3Component.prototype, "scrolledParent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("mightyParent"),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], Manage3Component.prototype, "mightyParent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrollbarX"),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], Manage3Component.prototype, "scrollbarX", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrollbarXDummyContent"),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object)
], Manage3Component.prototype, "scrollbarXDummyContent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrollbarY"),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object)
], Manage3Component.prototype, "scrollbarY", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("scrollbarYDummyContent"),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _g || Object)
], Manage3Component.prototype, "scrollbarYDummyContent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("timeHeaderContent"),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _h || Object)
], Manage3Component.prototype, "timeHeaderContent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("timeHeader"),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _j || Object)
], Manage3Component.prototype, "timeHeader", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("assignmentContextTrigger"),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatMenuTrigger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatMenuTrigger */]) === "function" && _k || Object)
], Manage3Component.prototype, "assignmentContextTrigger", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("activityHeader"),
    __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _l || Object)
], Manage3Component.prototype, "activityHeader", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("activityHeaderContainer"),
    __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _m || Object)
], Manage3Component.prototype, "activityHeaderContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("AssignPanelDetails"),
    __metadata("design:type", typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _o || Object)
], Manage3Component.prototype, "assignPanelDetails", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:beforeunload', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Manage3Component.prototype, "beforeUnloadHander", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Manage3Component.prototype, "onClickHostHandler", null);
Manage3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/admin/schedule3/manage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/schedule3/manage.component.css")],
    }),
    __param(9, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_13__admin_component__["a" /* AdminComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__admin_component__["a" /* AdminComponent */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_8__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_user_service__["a" /* UserService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_6__service_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_activity_service__["a" /* ActivityService */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_14__schedule_component__["a" /* ScheduleComponent3 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__schedule_component__["a" /* ScheduleComponent3 */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _u || Object, typeof (_v = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _v || Object, typeof (_w = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _w || Object, typeof (_x = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatDialog */]) === "function" && _x || Object, Object, typeof (_y = typeof __WEBPACK_IMPORTED_MODULE_7__service_css_service__["a" /* CssService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_css_service__["a" /* CssService */]) === "function" && _y || Object, typeof (_z = typeof __WEBPACK_IMPORTED_MODULE_9__service_schedule3_service__["a" /* Schedule3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_schedule3_service__["a" /* Schedule3Service */]) === "function" && _z || Object, typeof (_0 = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */]) === "function" && _0 || Object])
], Manage3Component);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
//# sourceMappingURL=manage.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/schedule3/manage/confirm-assignment-erase.html":
/***/ (function(module, exports) {

module.exports = "<span>{{message}}</span>\n<div style=\"clear:both\"></div>\n\n<mat-input-container>\n  <input matInput  [min]=\"_minDate\" [max]=\"_maxDate\" [matDatepicker]=\"picker\" [(ngModel)]='_startDate' placeholder=\"Start Date\">\n  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n</mat-input-container>\n<mat-datepicker #picker></mat-datepicker>\n\n<mat-input-container>\n  <input matInput  [min]=\"_minDate\" [max]=\"_maxDate\" [matDatepicker]=\"pickerEnd\" [(ngModel)]='_endDate' placeholder=\"End Date\">\n  <mat-datepicker-toggle matSuffix [for]=\"pickerEnd\"></mat-datepicker-toggle>\n</mat-input-container>\n<mat-datepicker #pickerEnd></mat-datepicker>\n\n<button mat-raised-button color=\"accent\" (click)=\"onYesClick()\">{{yesButtonLabel}}</button>\n<button mat-raised-button #defaultButton (click)=\"onNoClick()\">{{noButtonLabel}}</button>\n"

/***/ }),

/***/ "../../../../../src/app/admin/schedule3/manage/confirm-assignment-erase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_tmdate__ = __webpack_require__("../../../../../src/app/model/tmdate.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialog; });
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
var ConfirmDialog = (function () {
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
        this._startDate = "";
        this._endDate = "";
        this._minDate = "";
        this._maxDate = "";
        this.message = data.message;
        this.yesButtonLabel = data.yesButtonLabel;
        this.noButtonLabel = data.noButtonLabel;
        this.yesCallback = data.yesCallback;
    }
    ConfirmDialog.prototype.ngOnInit = function () {
        var startDate = __WEBPACK_IMPORTED_MODULE_4__model_tmdate__["a" /* TmDate */].today();
        startDate.date.setTime(startDate.date.getTime() + (24 * 3600000));
        this._startDate = startDate.get_ISO_8601_Date();
        var endDate = __WEBPACK_IMPORTED_MODULE_4__model_tmdate__["a" /* TmDate */].today();
        endDate.date.setTime(startDate.date.getTime() + (24 * 3600000));
        this._endDate = endDate.get_ISO_8601_Date();
        this._minDate = startDate.get_ISO_8601_Date();
        startDate.date.setTime(startDate.date.getTime() + (365 * 24 * 3600000));
        this._maxDate = startDate.get_ISO_8601_Date();
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
        var startDate = new __WEBPACK_IMPORTED_MODULE_4__model_tmdate__["a" /* TmDate */]();
        startDate.setFromDate(this._startDate + " UTC");
        var endDate = new __WEBPACK_IMPORTED_MODULE_4__model_tmdate__["a" /* TmDate */]();
        endDate.setFromDate(this._endDate + " UTC");
        this.yesCallback(startDate, endDate);
        this.dialogRef.close();
    };
    return ConfirmDialog;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('defaultButton'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ConfirmDialog.prototype, "defaultButton", void 0);
ConfirmDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/admin/schedule3/manage/confirm-assignment-erase.html"),
        styles: ["\n    span {\n        margin: 1em;\n        margin-bottom: 8em;\n    }\n\n    div {\n        height: 4em;\n    }\n\n    button {\n        float:right;\n        margin-right: 1em;\n    }\n\n    button:last-of-type {\n        margin-right: 2em;\n    }\n  "]
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _d || Object, Object])
], ConfirmDialog);

var _a, _b, _c, _d;
//# sourceMappingURL=confirm-assignment-erase.js.map

/***/ }),

/***/ "../../../../../src/app/admin/schedule3/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/admin/schedule3/schedule.component.ts":
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent3; });
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




var ScheduleComponent3 = (function (_super) {
    __extends(ScheduleComponent3, _super);
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
    function ScheduleComponent3(route, router, location, localStorageService, historyService, adminComponent) {
        var _this = _super.call(this, location, router) || this;
        _this.route = route;
        _this.router = router;
        _this.location = location;
        _this.localStorageService = localStorageService;
        _this.historyService = historyService;
        _this.adminComponent = adminComponent;
        _this.navLinks = [
            { label: 'Manage', ref: 'manage', id: -1, default: true },
        ];
        return _this;
    }
    ScheduleComponent3.prototype.ngOnInit = function () {
        //   this.restoreProperties();
        this.adminComponent.setActive(this.constructor.name);
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
    ScheduleComponent3.prototype.pushHistory = function (id) {
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
    ScheduleComponent3.prototype.titleType = function (link) {
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
    return ScheduleComponent3;
}(__WEBPACK_IMPORTED_MODULE_4__model_tabbed_component__["a" /* TabbedComponent */]));
ScheduleComponent3 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/admin/schedule3/schedule.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__service_history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_history_service__["a" /* HistoryService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__admin_component__["a" /* AdminComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__admin_component__["a" /* AdminComponent */]) === "function" && _f || Object])
], ScheduleComponent3);

var NavLink = (function () {
    function NavLink() {
    }
    return NavLink;
}());
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/schedule3/schedule3.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_component__ = __webpack_require__("../../../../../src/app/admin/schedule3/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_component__ = __webpack_require__("../../../../../src/app/admin/schedule3/manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manage_confirm_assignment_erase__ = __webpack_require__("../../../../../src/app/admin/schedule3/manage/confirm-assignment-erase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleRoutes", function() { return scheduleRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schedule3Module", function() { return Schedule3Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/** Importing local components */




//import { AuthGuard }            from '../../auth-guard.service';
var scheduleRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__schedule_component__["a" /* ScheduleComponent3 */],
        //   canActivate: [AuthGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'manage' },
            { path: 'manage', component: __WEBPACK_IMPORTED_MODULE_6__manage_component__["a" /* Manage3Component */] },
        ]
    }
];
var Schedule3Module = (function () {
    function Schedule3Module() {
    }
    return Schedule3Module;
}());
Schedule3Module = __decorate([
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
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forChild(scheduleRoutes)
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__schedule_component__["a" /* ScheduleComponent3 */],
            __WEBPACK_IMPORTED_MODULE_6__manage_component__["a" /* Manage3Component */],
            __WEBPACK_IMPORTED_MODULE_7__manage_confirm_assignment_erase__["a" /* ConfirmDialog */]
        ],
        providers: [],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_7__manage_confirm_assignment_erase__["a" /* ConfirmDialog */]],
    })
], Schedule3Module);

//# sourceMappingURL=schedule3.module.js.map

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
//# sourceMappingURL=5.chunk.js.map