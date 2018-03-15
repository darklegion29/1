webpackJsonp([4],{

/***/ "../../../../../src/app/admin/schedule/manage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\n    /* border: 1px solid red; */\n}\n\n.hour {\n    float: left;\n    width: 5px;\n    height: 60px;\n    border-left: 1px #FBFBFB solid;\n    border-top: 1px #E8E8E7 solid;\n}\n\n.mightyParent{\n    position: relative;\n    overflow: hidden;\n    height: 77vh;\n    margin-top: -95px;\n    margin-left: 250px;\n}\n\n.scrollbarX {\n    position:absolute;\n    bottom:0px;\n    overflow-x:scroll;\n    overflow-y: hidden;\n    height: 20px;\n    width: 80%;\n    left:200px;\n    z-index: 999;\n}\n\n.scrollbarY {\n    position:absolute;\n    bottom:0px;\n    overflow-x:hidden;\n    overflow-y:auto;\n    width: 20px;\n    right:0px;\n    z-index: 999;\n}\n\n.timeTableContainer{\n    position: relative; \n    margin-top: 95px;\n    margin-left: 120px;\n    overflow: hidden;\n}\n\n.timeContainer {\n    position:absolute;\n    width: 5px;\n    border-bottom: 1px solid #f1f1f1;\n    /*border: 1px red solid; */\n}\n\n.regNoContainer{\n    position: absolute;\n    float: left;\n    width: 120px;\n    border-right: 1px solid #f1f1f1;\n}\n\n.driverTrailerBox{\n    overflow: auto;\n    height: auto;\n}\n\n.driverTrailerContainer{\n    height: 77vh;\n    width: 240px;\n    float: left;\n}\n\n.driverContainer, .trailerContainer{\n    width: 100%;\n    float: left;\n    height: 38vh;\n    /* overflow: auto; */\n    cursor: pointer;\n}\n\n.driverContainer, .mightyParent, .trailerContainer, .assingmentPanel{\n    background: #fff;\n    /* white-space: nowrap; */\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n    margin-bottom: 10px;\n}\n\n.assignPanelDetails{\n    max-height: 160px;\n    height: 160px;\n    overflow-y: auto;\n}\n\n.driverHeader, .trailerHeader{\n    color: #989898;\n    font-weight: bold;\n    text-transform: uppercase;\n    padding-left: 35px;\n    padding-right: 35px;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    background: #fbfbfb;\n}\n\n.driverHeader input, .trailerHeader input{\n    border: none;\n    border-bottom: 1px solid #C7C7C7;\n    background: transparent;\n}\n\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    font-size: 12px;\n  }\n  ::-moz-placeholder { /* Firefox 19+ */\n    font-size: 12px;\n  }\n  :-ms-input-placeholder { /* IE 10+ */\n    font-size: 12px;\n  }\n  :-moz-placeholder { /* Firefox 18- */\n    font-size: 12px;\n  }\n\n.consultant {\n    /* left: 20px;\n    top: 0px;\n    position:absolute;\n    width: auto;\n    height: 40px;\n    color: #7e7e7e;\n    font-weight: bold;\n    padding: 10px;\n    margin-top: 10px;\n     */\n     width: auto;\n     height: 21px;\n     color: #7e7e7e;\n     font-weight: bold;\n     padding: 0px;\n}\n\n.driverContainer .consultant:hover{\n    color: #252525;\n}\n\n\n.assingmentPanel{\n    /* position: absolute;\n    bottom:0px;\n    height: 200px;\n    width:350px;\n    right:2%;\n    display: block;\n    overflow: auto;\n    padding: 10px;\n    z-index: 1000; */\n}\n\n.assingmentPanel .tabs{\n    background-color: #ececec;\n    border-radius: 5px;\n    font-weight: normal;\n    line-height: 28px;\n    height: 30px;\n    padding: 0 4px;\n    cursor: pointer;\n    box-sizing: border-box;\n    opacity: .6;\n    text-align: center;\n    display: inline-block;\n    vertical-align: top;\n    text-decoration: none;\n    position: relative;\n    overflow: hidden;\n    border-bottom: 2px solid #FFFFFF;\n}\n\n.assingmentPanel .tabs:active,\n.assingmentPanel .tabs:hover,\n.assingmentPanel .tabs:focus{\n    border-bottom: 2px solid #3f51b5;\n}\n\n.assingmentPanel .tabs_active{\n    border-bottom: 2px solid #3f51b5;\n}\n\n.assingmentPanel .consultant:hover{\n    color: #7e7e7e;\n}\n\n.assignPanelDetails {\n    padding: 1em;\n}\n\n.assignPanelDetails .fa-trash{\n    color: #252525;\n}\n\n.assignPanelDetails .fa-trash:hover{\n    color: #7e7e7e !important;\n    cursor: pointer;\n}\n\n.day {\n    height: 95px;\n    width: 121px;\n    border-left: 2px;\n    padding: 25px;\n    background: #fbfbfb;\n    font-weight: bold;\n    border-top: 2px solid #fbfbfb;\n    border-right: 1px solid #F1F1F1;\n    border-bottom:  1px solid #F1F1F1;\n    z-index: 997;\n    text-align: center;\n    overflow: hidden;\n}\n\n.day_week {\n    padding: 0px;\n}\n\n.day > div:first-child {\n    color: #48C6FF;\n    text-transform: uppercase;\n    text-align: center;\n    padding-top: 12px;\n    padding-bottom: 12px;\n}\n\n.day ._meridiem_container {\n    border-top: 1px solid #dbdbdb;\n    height: 2px;\n}\n\n.day ._meridiem{\n    float: left;\n    width: 50%;\n    border-right: 1px solid #dbdbdb;\n    height: 50px;\n    color: #afafaf;\n    vertical-align: middle;\n    padding-top: 12px;\n}\n\n.day ._meridiem:last-child {\n    border: none;\n}\n\n/*.day:hover, .day:active, .day:focus{\nborder-top: 2px solid #02d1a5;\nbackground: #ffffff;\n}*/\n\n    .startOfDay {\n        float: left;\n        width: 5px;\n        height: 100px;\n        border-left: 1px solid #F1F1F1;\n        border-top: 1px #E8E8E7 solid;\n    }\n\n    .startOfMonth {\n        float: left;\n        width: 5px;\n        height: 100px;\n        border-left: 1px #D9B1BC solid;\n        border-top: 1px #E8E8E7 solid;\n    }\n\n    .month {\n        position: absolute;\n        z-index: -1;\n        top: -3px;\n        font-weight: bold;\n        color:#989898;\n        font-size: large;\n        left: 1em;\n        overflow: hidden;\n        white-space: nowrap;\n    }\n\n    .activityHeaderItem {\n        font-size: 16px;\n        float: left;\n        width: 100%;\n        height: 100px;\n        color: #252525;\n        text-transform: uppercase;\n        text-align: center;\n        line-height: 4;\n        border-bottom: 1px solid #F1F1F1;\n        overflow: hidden;\n    }\n\n    .activityHeader {\n        color: #989898;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        height: 95px;\n        overflow: hidden;\n        background: #fbfbfb;\n    }\n\n    .daysContainer {\n        padding-left: 2px;\n        margin-left: 370px;\n        border-left: 2px;\n        overflow:hidden; \n        overflow-y: hidden; \n        height: 95px;\n        /* width: 80%; */\n    }\n\n    .scrollbarX{\n        position:absolute;\n        bottom:0px;\n        overflow-x: scroll;\n        overflow-y: hidden;\n        height: 20px;\n        width: 85%;\n        left:210px;\n    }\n\n    .assignment{\n        left: 20px;\n        top: 0px;\n        position:absolute;\n        width: auto;\n        height: 60px;\n        color: #252525;\n        background-color: #E8F6FF;\n        border: 1px solid #002B36;\n        font-weight: bold;\n        padding: 5px;\n        margin-top: 0px;\n        overflow: hidden;\n        opacity: 0.765;\n        transition: border 1;\n    }\n\n    .assignmentSelected {\n        border-width: 2px;\n        opacity: 0.912;\n    }\n\n    .EditedByPeer {\n        background-color: #8cfbff;\n    }\n\n    #AssignPanelHeader {\n        overflow: hidden;\n    }\n\n    #AssignPanelHeader div{\n        margin-right: 1em;\n    }\n\n    #AssignPanelHeader div:last-child{\n        margin-right: 0em;\n    }\n\n    #AssignPanelTabs {\n        overflow: hidden;\n    }\n\n    .currentMonth {\n        position: absolute;\n        z-index: 999;\n        color:#989898;\n        background-color: #FBFBFB;\n        padding-left: 2em;\n        margin-left: -2em;\n        font-weight: bold;\n    }\n\n    .colorBadge{\n        margin-left: 0.5em;\n        display: inline-block;\n        border-radius: 50%;\n        width: 1em;\n        height: 1em; \n    }\n\n    #redBall {\n        visibility: hidden;\n        border-radius:50px;\n        width:50px;\n        height:50px;\n        background:rgb(141, 154, 162);\n        position:fixed;\n        top:0;\n        left:0;  \n        transition: -webkit-transform 1s;  \n        transition: transform 1s;  \n        transition: transform 1s, -webkit-transform 1s;  \n    }\n\n    .assignmentDetails {\n        position: relative;\n        line-height: 50%;\n        overflow: hidden;\n    }\n\n    .assignmentDetails > .consultants{\n        position: absolute;\n        line-height: 50%;\n        margin: 0.2 em;\n    }\n\n    .assignmentNumber {\n        float: left;\n        background-color: #ececec;\n        border-radius: 5px;\n        font-weight: normal;\n        font-size: 13px;\n    }\n\n.assignment_rowEmployees{\n\tfloat: left;\n\tfont-size: 13px;\n    color: rgb(37, 37, 37);\n}\n\n.assignment_rowEmployees li, .assignment_rowEmployees ul{\n    border-radius: 5px;\n    padding: 3px;\n    padding-top: 1px;\n\tmargin: 0px;\n    color: #fbfbfb;\n}\n\n.assignment_rowEmployees > div {\n    float: left;\n}\n\n    canvas {\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        outline: none;\n    }\n\n    div {\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        outline: none;\n    }\n\n    .assignPanelDetails .consultant {\n        -webkit-user-select: text;\n           -moz-user-select: text;\n            -ms-user-select: text;\n                user-select: text;\n    }\n\ncanvas {\n    border-bottom: 1px solid #dbdbdb;\n}\n\n.schedule_background{\n    float: left;\n}\n\n.week_timeContainer {\n    position:absolute;\n    width: 5px;\n    /*border: 1px red solid; */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/schedule/manage.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 20px\">\n</div>\n  \n  <div class=\"driverTrailerContainer\">\n    <div class=\"driverContainer\">\n      <div class=\"driverHeader\">consultants:\n          <!-- <input matInput placeholder=\"search\"> -->\n      </div>\n  \n      <div class=\"driverTrailerBox\">\n        <div id='consultant-{{consultant.id}}' [attr.data-driverid]='consultant.id' class=\"consultant\" draggable=\"true\" (dragstart)=\"onDragDriver($event)\"\n          style=\"position:static;\" *ngFor=\"let consultant of consultants\">\n            <div class='colorBadge' [style.background-color]='consultant.color'></div> {{consultant.firstName}} {{consultant.lastName}}\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <span *ngIf=\"b_week_view == true; then weekView else monthView\"></span>\n  <ng-template #monthView>\n  <div #timeHeader class=\"daysContainer\">\n      <div class=\"currentMonth\">{{currentMonth}}</div>\n    <div #timeHeaderContent class=\"timeHeaderContent\">\n      <div style=\"float:left;position:relative;\" *ngFor=\"let day of days\" class=\"day\">\n        <span style=\"text-align: center;color: #02d1a5;\">{{day.date.getDate()}}</span><br />\n        <span style=\"color:#989898;text-transform: uppercase;text-align: center;\">{{day.getWeekDay()}}</span>\n        <div *ngIf=\"day.date.getDate()==1\" class=\"month\">{{day.getMonth()}}</div>\n      </div>\n    </div>\n  </div>\n\n  <div #mightyParent class=\"mightyParent\">\n    <div class=\"regNoContainer\">\n      <div #activityHeader class=\"activityHeader\">Activities</div>\n      <div #activityHeaderContainer class=\"activityHeaderContainer\" style=\"overflow: hidden\">\n        <div *ngFor=\"let row of activitySchedule.assignments\" class=\"activityHeaderItem\">{{row.activity.name}}</div>\n        <div style=\"clear:both\"></div>\n        <div [style.height.px]=\"scrollbarXHeight\"> </div>\n      </div>\n    </div>\n  \n    <div #scrollbarX class=\"scrollbarX\">\n      <div #scrollbarXDummyContent style=\"color: #fff;\">.</div>\n    </div>\n  \n    <div #scrollbarY class=\"scrollbarY\">\n      <div #scrollbarYDummyContent> </div>\n    </div>\n  \n    <div #scrolledParent class=\"timeTableContainer\">\n      <div class=\"scrolledWidget\" #scrolledWidget style=\"float:left\" (mousemove)=\"onMouseMove($event)\" (mouseup)=\"onMouseUp($event)\">\n        <div *ngFor=\"let row of activitySchedule.assignments; let i = index\">\n          <div #timeContainer class=\"timeContainer\" (drop)=\"onDropDriver($event, false)\" (dragover)=\"onDragOver($event)\" [attr.data-activityid]=\"row.activity.id\" [attr.data-index]=\"i\">\n            <div *ngFor=\"let assignment of row.assignments\"\n              [attr.data-assignmentid]='assignment.assignmentId' [style.z-index]='assignment.z_index'\n              [style.left.px]=\"assignment.offsetLeft\" [style.width.px]=\"assignment.width\" class=\"assignment\"\n              (drop)=\"onDropDriver($event, true)\" (mousedown)=\"onClickAssignment($event)\"\n              [class.EditedByPeer]='assignment.indicatePeerEdit' [id]='\"assignment\"+assignment.assignmentId'>\n\t\t\t    <div style=\"width: 300px; overflow: hidden;\">\n                  <div class=\"assignment_rowDrivers\" style=\"margin-left: 10px;float: left;\">\n                      <div style=\"display: inline-block;top:1em;\">\n                          <span *ngIf=\"assignment.assignmentEmployees.length == 1; then singleDriver else multiDrivers\"></span>\n                          <ng-template #singleDriver class=\"consultants\" aria-hidden=\"true\"  style=\"color: #292b2c;font-weight: bold;\">{{assignment.assignmentEmployees.length}}  &nbsp; consultant\n                          </ng-template>\n                          <ng-template #multiDrivers class=\"consultants\" aria-hidden=\"true\"  style=\"color: #292b2c;font-weight: bold;\">{{assignment.assignmentEmployees.length}}  &nbsp; consultants\n                          </ng-template>\n                          <!--<ul *ngFor=\"let assignmentEmployee of assignment.assignmentEmployees\" class=\"consultant\">\n                              <li>\n                              {{assignmentEmployee.employee.firstName}} {{assignmentEmployee.employee.lastName}}\n                              </li>\n                          </ul> -->\n                      </div>\n                    <br/>\n                  </div>\n\t\t\t    </div>\n            </div>\n          </div>\n          <canvas class=\"hour\" [class.startOfDay]=\"hour==0\"> </canvas>\n          <div style=\"clear:both\"></div>\n        </div>\n        <div [style.height.px]=\"scrollbarXHeight\"> </div>\n      </div>\n    </div>\n  </div>\n  </ng-template>\n\n    <ng-template #weekView>\n      <div #timeHeader class=\"daysContainer\">\n        <div #timeHeaderContent>\n          <div style=\"float:left;position:relative;\" *ngFor=\"let day of _week_days\" class=\"day day_week\">\n            <div>{{day}}</div>\n            <div class=\"_meridiem_container\">\n                <div class=\"_meridiem\">AM</div>\n                <div class=\"_meridiem\">PM</div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div #mightyParent class=\"mightyParent\">\n        <div class=\"regNoContainer\">\n          <div #activityHeader class=\"activityHeader\">Activities</div>\n          <div #activityHeaderContainer class=\"activityHeaderContainer\" style=\"overflow: hidden\">\n            <div *ngFor=\"let row of activitySchedule\" class=\"activityHeaderItem\">{{row.activity.name}}</div>\n            <div style=\"clear:both\"></div>\n            <div [style.height.px]=\"scrollbarXHeight\"> </div>\n          </div>\n        </div>\n      \n        <div #scrollbarX class=\"scrollbarX\">\n          <div #scrollbarXDummyContent style=\"color: #fff;\">.</div>\n        </div>\n      \n        <div #scrollbarY class=\"scrollbarY\">\n          <div #scrollbarYDummyContent> </div>\n        </div>\n      \n        <div #scrolledParent class=\"timeTableContainer\">\n          <div class=\"scrolledWidget\" #scrolledWidget style=\"float:left\" (mousemove)=\"onMouseMove($event)\" (mouseup)=\"onMouseUp($event)\">\n            <div *ngFor=\"let row of activitySchedule; let i = index\" >\n              <div #timeContainer class=\"week_timeContainer\" (drop)=\"onDropDriver($event, false)\" (dragover)=\"onDragOver($event)\" [attr.data-activityid]=\"row.activity.id\" [attr.data-index]=\"i\">\n                <div *ngFor=\"let assignment of row.assignments\" \n              [attr.data-assignmentid]='assignment.assignmentId' [style.z-index]='assignment.z_index'\n              [style.left.px]=\"assignment.offsetLeft\" [style.width.px]=\"assignment.width\" class=\"assignment\" draggable=\"true\"\n              (drop)=\"onDropDriver($event, true)\" (dragstart)=\"onDragAssignment($event)\" (mousedown)=\"onClickAssignment($event)\"\n              [class.EditedByPeer]='assignment.indicatePeerEdit' [id]='\"assignment\"+assignment.assignmentId'>\n\t\t\t    <div style=\"width: 300px; overflow: hidden;\">\n                  <div class=\"assignment_rowEmployees\" style=\"margin-left: 10px;float: left;\">\n                      <div style=\"display: inline-block;top:1em;\">\n                          <span *ngIf=\"assignment.assignmentEmployees.length == 1; then singleDriver else multiDrivers\"></span>\n                          <ng-template #singleDriver class=\"consultants\" aria-hidden=\"true\"  style=\"color: #292b2c;font-weight: bold;\">{{assignment.assignmentEmployees.length}}  &nbsp; consultant\n                          </ng-template>\n                          <ng-template #multiDrivers class=\"consultants\" aria-hidden=\"true\"  style=\"color: #292b2c;font-weight: bold;\">{{assignment.assignmentEmployees.length}}  &nbsp; consultants\n                          </ng-template>\n                          <ul *ngFor=\"let assignmentEmployee of assignment.assignmentEmployees\" class=\"consultant\">\n                              <li [style.background-color]=\"assignmentEmployee.employee.color\">\n                              {{assignmentEmployee.employee.firstName}} {{assignmentEmployee.employee.lastName}}\n                              </li>\n                          </ul>\n                      </div>\n                    <br/>\n                  </div>\n\t\t\t    </div>\n            </div>\n              </div>\n              <canvas class=\"schedule_background\"> </canvas>\n              <div style=\"clear:both\"></div>\n            </div>\n            <div [style.height.px]=\"scrollbarXHeight\"> </div>\n          </div>\n        </div>\n      </div>\n      </ng-template>\n  \n  <div #AssignPanel class=\"assingmentPanel\" *ngIf=\"assignment_selected\">\n    <div #AssignPanelTabs id=\"AssignPanelHeader\">\n        <div id=\"AssignPanelTabs\" (wheel)=\"assignPanelTabsMouseWheelCallback()\">\n      <div *ngFor=\"let assignment of activitySchedule[scheduleIndex].assignments\" style=\"float:left; display: inline-block\" (click)=\"switchAssignPanelTab(assignment.assignmentId)\">\n        <a class=\"tabs\" [class.tabs_active]=\"assignment.assignmentId == assignment_selected.assignmentId\">A{{assignment.assignmentId}}</a>\n      </div>\n        </div>\n      <div style=\"float:right; color: red; cursor:pointer\" (click)=\"closeAssignmentPanel()\">x</div>\n      <div style=\"clear:both;\"></div>\n    </div>\n  \n    <div #AssignPanelDetails class=\"assignPanelDetails\">\n      <div style=\"float: left; width: 50px\" class=\"dont-scroll\">\n        <span class=\"fa fa-trash\" (click)=\"deleteAssignmentUI(assignment_selected.assignmentId)\" aria-hidden=\"true\" style=\"margin-left: 12px;\"></span>\n        <br>\n        <!-- Date From -->\n      </div>\n  \n      <div style=\"margin-left: 10px;float: left;min-width: 30%;\">\n          <span aria-hidden=\"true\"  style=\"color: #292b2c;font-weight: bold;\">Employees &nbsp;&nbsp;&nbsp; {{assignment_selected.assignmentEmployees.length}}</span>\n        <div *ngFor=\"let assignmentEmployee of assignment_selected.assignmentEmployees\" class=\"consultant\">\n            <div class='colorBadge' [style.background-color]='assignmentEmployee.employee.color'></div>\n            {{assignmentEmployee.employee.firstName}} {{assignmentEmployee.employee.lastName}}\n            <span (click)=\"removeUserFromAssignment(assignmentEmployee.id)\" class=\"fa fa-trash\" aria-hidden=\"true\"></span>\n        </div>\n        <br/>\n      </div>\n  \n      <div style=\"clear: both\"></div>\n    </div>\n  </div>\n\n<div id=\"redBall\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/schedule/manage.component.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_schedule1_service__ = __webpack_require__("../../../../../src/app/service/schedule1.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_tmdate__ = __webpack_require__("../../../../../src/app/model/tmdate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__model_schedule__ = __webpack_require__("../../../../../src/app/model/schedule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__model_activity__ = __webpack_require__("../../../../../src/app/model/activity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__schedule_component__ = __webpack_require__("../../../../../src/app/admin/schedule/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__manage_confirm_assignment_erase__ = __webpack_require__("../../../../../src/app/admin/schedule/manage/confirm-assignment-erase.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageComponent; });
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






/** importing components */


//import { SelectVehicleComponent } from './manage/select-vehicle.component';

/** exporting components */
//export { SelectVehicleComponent } from './manage/select-vehicle.component';
//export { ConfirmAssignmentEraseComponent } from './manage/confirm-assignment-erase';
var ManageComponent = (function () {
    function ManageComponent(router, parentComponent, userService, activityService, 
        //private trailerService: TrailerService,
        scheduleComponent, localStorageService, renderer, renderer2, dialog, document, cssService, schedule1Service, formBuilder) {
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
        this.schedule1Service = schedule1Service;
        this.formBuilder = formBuilder;
        //@ViewChild("vehicleHeaderContainerViewPort") public vehicleHeaderContainerViewPort: ElementRef;
        this.selectedActivitiesSimple = { total: 0, vehicles: [] };
        this.activitySchedule = [];
        //private _driver_schedule: Array<DriverSchedule[]> = [];
        this.hours = [];
        // TODO manage through local storage
        this._scale_factor = 1;
        this._scale_factor_percentage = 100;
        this._hour_width = 5; //in pixels
        this._hour_height = 50; //in pixels
        this._cell_width = 180; //in pixels
        this._cell_height = 50; //in pixels
        this.days = [];
        this._week_days = [];
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
        this.b_week_view = true;
        this.oldScrolledParentWidth = 0;
        this.resizeCallback = function (event) {
            // TODO Reevalute scroll callback (or at least that part which is responsible for
            // *redrawing* time *cells*)
            _this.resizeCallbackCallable();
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
        this.week_scrollCallbackY = function (event) {
            _this.scrolledParent.nativeElement.scrollTop = _this.scrollbarY.nativeElement.scrollTop;
            _this.activityHeaderContainer.nativeElement.scrollTop = _this.scrollbarY.nativeElement.scrollTop;
            console.log("scrolledParent Y: " + _this.scrolledParent.nativeElement.scrollTop);
            console.log("vehicleHeaderContainerY: " + _this.activityHeaderContainer.nativeElement.scrollTop);
        };
        this.scrollCallbackY = function (event) {
            _this.scrolledParent.nativeElement.scrollTop = _this.scrollbarY.nativeElement.scrollTop;
            _this.activityHeaderContainer.nativeElement.scrollTop = _this.scrollbarY.nativeElement.scrollTop;
            console.log("scrolledParent Y: " + _this.scrolledParent.nativeElement.scrollTop);
            console.log("vehicleHeaderContainerY: " + _this.activityHeaderContainer.nativeElement.scrollTop);
        };
        this.week_scrollCallbackX = function (event) {
            _this.scrolledParent.nativeElement.scrollLeft = _this.scrollbarX.nativeElement.scrollLeft;
            if (_this.timeHeader != null) {
                _this.timeHeader.nativeElement.scrollLeft = _this.scrollbarX.nativeElement.scrollLeft;
            }
        };
        this.scrollCallbackX = function (event) {
            if ((_this.scrollbarX.nativeElement.scrollLeft + 10) >
                (_this.scrolledWidget.nativeElement.clientWidth - _this.scrolledParent.nativeElement.clientWidth)) {
                var hoursPerScreen = _this.scrolledParent.nativeElement.clientWidth /
                    (_this._hour_width * _this._scale_factor);
                var daysPerScreen = hoursPerScreen / 24;
                var hoursToAdd = hoursPerScreen;
                //this.hours.length = Math.ceil(hoursPerScreen) * 2;
                var date = new __WEBPACK_IMPORTED_MODULE_10__model_tmdate__["a" /* TmDate */]();
                date.setFromTmDate(_this.days[_this.days.length - 1]);
                //date.alterDate(+1);
                var timeLength = new __WEBPACK_IMPORTED_MODULE_10__model_tmdate__["b" /* TmLength */]();
                timeLength.seconds = hoursToAdd * 3600;
                var vehicleIds = []; // we need to prepare an array containing vehicleIds
                //            for(let v of this.activitySchedule) {          // in a format suitable for the loadAssignments()
                //                vehicleIds.push(v.vehicle.id.toString()); // method
                //            }                                             // .....
                //this.loadAssignments(this.days[this.days.length-1], timeLength, vehicleIds);
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
            if (_this.timeHeader != null) {
                _this.timeHeader.nativeElement.scrollLeft = _this.scrollbarX.nativeElement.scrollLeft;
            }
            _this.reevaluateCurrentMonth();
        };
        this.periodFormFields = this.formBuilder.group({ dateFrom: '', dateTo: '' });
    }
    //private loadVehicles() {
    //  for(let i in this.selectedActivitiesSimple.vehicles) {
    //      if(this.selectedActivitiesSimple.vehicles[i] != null && this.selectedActivitiesSimple.vehicles[i] == true) {
    //        this.vehicleService.getVehicle(+i).then(vehicle => {
    //            this.activitySchedule.push({vehicle: vehicle, assignments: []});
    //        })
    //      }
    //  }
    //  console.log(this.activitySchedule);
    //}
    ManageComponent.prototype.ngDoCheck = function () {
        //        if(this.scrolledParent && this.scrolledParent.nativeElement) {
        //            if(this.oldScrolledParentWidth != this.scrolledParent.nativeElement.clientWidth) {
        //                this.oldScrolledParentWidth = this.scrolledParent.nativeElement.clientWidth;
        //                this.resizeCallbackCallable();
        //            }
        //        }
        var total = 0;
        for (var i in this.selectedActivitiesSimple.vehicles) {
            if (this.selectedActivitiesSimple.vehicles[i] != null && this.selectedActivitiesSimple.vehicles[i] == true) {
                total++;
            }
        }
        if (this.selectedActivitiesSimple.total != total) {
            //if(true) {
            this.selectedActivitiesSimple.total = total;
            for (var i in this.selectedActivitiesSimple.vehicles) {
                if (this.selectedActivitiesSimple.vehicles[i] == true &&
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
            //                    //delete(this.selectedActivitiesSimple[vehi.id]);
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
        if (this.selectedActivitiesSimple.vehicles[id] == null || this.selectedActivitiesSimple.vehicles[id] == false) {
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
        setTimeout(function () { return _this.installCallbacks(); }, 0);
        this.renderer2.listen('window', 'resize', this.resizeCallback);
        var f = document.getElementById('foo');
        //this.renderer2.listen(document, 'dblclick', this.moveRedBall);    
        //TODO Come up with a mechanism for paginating users
        this.userService._getUsers(0, 1000, ['Consultant']).then(function (users) {
            if (users) {
                _this.consultants.length = 0;
                (_a = _this.consultants).splice.apply(_a, [0, 0].concat(users));
            }
            var _a;
        });
        //        this.trailerService._getTrailers(0, 1000).then(trailers => {
        //            this.trailers.length = 0;
        //            this.trailers.splice(0,0,...trailers);
        //        });
        this.schedule1Service.addPeerSaveCallback(function (assignment) {
            assignment.assignmentId = assignment.id;
            assignment.startTime = new __WEBPACK_IMPORTED_MODULE_10__model_tmdate__["a" /* TmDate */]();
            assignment.startTime.date.setTime(assignment.dateFrom - (assignment.startTime.date.getTimezoneOffset() * 60000));
            assignment.timeLength = new __WEBPACK_IMPORTED_MODULE_10__model_tmdate__["b" /* TmLength */]();
            assignment.timeLength.seconds = (assignment.dateTo - assignment.dateFrom) / 1000;
            assignment.offsetLeft = Math.floor(((assignment.startTime.date.getTime() / 3600000) - _this.days[0].date.getTime() / 3600000) + 1) * (_this._hour_width * _this._scale_factor);
            //ass.offsetLeft = 40;
            assignment.width = ((assignment.timeLength.seconds) / 3600) * (_this._hour_width * _this._scale_factor);
            assignment = _this.pushAssignmentLocally(assignment);
        });
        this.schedule1Service.addPeerDeleteCallback(function (assignmentId) {
            _this.deleteAssignmentLocally(assignmentId);
        });
    };
    ManageComponent.prototype.ngAfterViewInit = function () {
        var date = new __WEBPACK_IMPORTED_MODULE_10__model_tmdate__["a" /* TmDate */]();
        if (this._scheduleStartDate !== '') {
            date.setFromDate(this._scheduleStartDate + ' UTC');
        }
        this._scheduleStartDate = date.get_ISO_8601_Date();
        this._week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        this.initView(date);
        this.resizeCallbackCallable();
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
    ManageComponent.prototype.loadAssignments = function (activityIds) {
        var _this = this;
        this.schedule1Service.fetchAssignments(activityIds, function (assignments) {
            var activityIdMap = _this.array_flip(activityIds);
            for (var _i = 0, assignments_1 = assignments; _i < assignments_1.length; _i++) {
                var ass = assignments_1[_i];
                ass.assignmentId = ass.id;
                //ass.startTime = new TmDate();
                //ass.startTime.date.setTime(ass.dateFrom-(ass.startTime.date.getTimezoneOffset()*60000));
                //ass.timeLength = new TmLength();
                //ass.timeLength.seconds = (ass.dateTo - ass.dateFrom) / 1000;
                //ass.offsetLeft = Math.floor(((ass.startTime.date.getTime()/3600000) - this.days[0].date.getTime()/3600000)+1) * (this._hour_width * this._scale_factor);
                ass.offsetLeft = _this.computeOffsetLeft(ass.weekDay, ass.shift);
                ass.width = _this.computeWidth(ass.shift);
                _this.pushAssignmentLocally(ass);
                console.log(ass);
            }
            _this.applyCustomScrollbars();
        });
    };
    ManageComponent.prototype.computeDay = function (offsetLeft) {
        var result = Math.floor(offsetLeft / (this._hour_width * this._scale_factor * 24)) + 1;
        return result;
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
    /** Computes assignment's offset from its left side in pixels.
     * @param weekday Week day in number. Monday is 0 (contrary to Javascript's 1!)
     * @param shift Shift abbreviation. Examples: "D"
     *
     * @return offset in pixels
     */
    ManageComponent.prototype.computeOffsetLeft = function (weekday, shift) {
        weekday--;
        weekday = (weekday < 0) ? 6 : weekday;
        var coordinates;
        var dayLength = this._hour_width * this._scale_factor * 24; //day length in pixels
        coordinates = dayLength * weekday;
        if (shift == 'PM') {
            coordinates += this._hour_width * this._scale_factor * 12;
        }
        return coordinates;
        //remaining = Math.floor(coordinates) % (this._hour_width*this._scale_factor*12);
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
    ManageComponent.prototype.initView = function (date) {
        //this._scheduleStartDate = date.get_ISO_8601_Date();
        //this.currentMonth = date.getMonth()+" "+date.date.getFullYear();
        //let hoursPerScreen = this.scrolledParent.nativeElement.clientWidth /
        //    (this._hour_width * this._scale_factor);
        //        let daysPerScreen = hoursPerScreen / 24;
        //        this.hours.length = Math.ceil(hoursPerScreen) * 2;
        //        this.days.length = 0;
        //        let day;
        //        for(let i=0; i<this.hours.length; i++){
        //            this.hours[i] = i % 24;
        //            if(this.hours[i] == 0){
        //                day = date.fork();
        //                this.days.push(day);
        //                date.alterDate(+1);
        //            }
        //        }
        //
        //        let activityIds: any[] = [];
        //        for(let schedule of this.activitySchedule) {
        //            activityIds.push(schedule.activity.id);
        //        }
        var timeLength = new __WEBPACK_IMPORTED_MODULE_10__model_tmdate__["b" /* TmLength */]();
        timeLength.seconds = this.hours.length * 3600;
        //        this.scrollbarX.nativeElement.scrollLeft = 300;
        //        this.scrolledParent.nativeElement.scrollLeft = this.scrollbarX.nativeElement.scrollLeft;
        //        this.timeHeader.nativeElement.scrollLeft = this.scrollbarX.nativeElement.scrollLeft;
    };
    ManageComponent.prototype.initView_unused = function (date) {
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
        for (var _i = 0, _a = this.activitySchedule; _i < _a.length; _i++) {
            var sch = _a[_i];
            vehicleIds.push(sch.activity.id);
        }
        var timeLength = new __WEBPACK_IMPORTED_MODULE_10__model_tmdate__["b" /* TmLength */]();
        timeLength.seconds = this.hours.length * 3600;
        this._scaleView();
        //        this.scrollbarX.nativeElement.scrollLeft = 300;
        //        this.scrolledParent.nativeElement.scrollLeft = this.scrollbarX.nativeElement.scrollLeft;
        //        this.timeHeader.nativeElement.scrollLeft = this.scrollbarX.nativeElement.scrollLeft;
    };
    ManageComponent.prototype.zoomIn = function () {
        this.resizeCallbackCallable();
        //        if(this._scale_factor > 1.74) {
        //            return
        //        }
        //        this._scale_factor += 0.15;
        //        console.log(this._scale_factor);
        //        this._scale_factor_percentage = Math.ceil(this._scale_factor * 100);
        //        this._scaleView();
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
        var canvasHeight = this._hour_height * this._scale_factor;
        var _hours_in_week = 24 * this._week_days.length; //168;
        var width = (_hours_in_week * (this._hour_width * this._scale_factor));
        var hoursCanvasses = document.querySelectorAll('.schedule_background');
        for (var i = 0; hoursCanvasses[i]; i++) {
            var canvas = hoursCanvasses[i];
            canvas.setAttribute("width", width);
            canvas.setAttribute("height", canvasHeight);
            canvas.style.width = width + "px";
            canvas.style.height = canvasHeight + "px";
            var context = canvas.getContext("2d");
            var step = (this._hour_width * 12) * this._scale_factor;
            context.clearRect(0, 0, width, canvasHeight);
            for (var x = 0, i_1 = 0; x < width; x += step, i_1 += 12) {
                if (i_1 % 24 == 0 && i_1 != 0) {
                    context.fillStyle = '#F1F1F1';
                    context.fillRect(x, 0, 2, canvasHeight);
                }
                else {
                    context.fillStyle = '#FBFBFB';
                    context.fillRect(x, 0, 2, canvasHeight);
                }
            }
        }
        //this.scrollbarXDummyContent.nativeElement.style.width = width.toString()+"px";
        if (this.timeHeaderContent != null) {
            this.timeHeaderContent.nativeElement.style.width = (width + 100).toString() + "px";
        }
    };
    ManageComponent.prototype.updateTimelineWidth__unused = function () {
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
            for (var x = 0, i_2 = 0; x < width; x += step, i_2++) {
                if (i_2 % 24 == 0 && i_2 != 0) {
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
        if (this.timeHeaderContent != null) {
            this.timeHeaderContent.nativeElement.style.width = (width + 100).toString() + "px";
        }
    };
    ManageComponent.prototype._scaleView = function () {
        var _this = this;
        var styles = this.cssService.getStyle("^\\.hour.*");
        var _hours_in_week = 24 * 7;
        //let hour_width = parseInt(styles[0].style.getPropertyValue("width"));
        styles.forEach(function (rule) {
            rule.style.setProperty("width", (_this._hour_width * _this._scale_factor) + "px");
            rule.style.setProperty("height", (_this._hour_height * _this._scale_factor) + "px");
        });
        styles = this.cssService.getStyle("^\\.schedule_background.*");
        styles.forEach(function (rule) {
            //let hour_width = parseInt(styles[0].style.getPropertyValue("width"));
            styles[0].style.setProperty("width", ((_this._hour_width * _hours_in_week) * _this._scale_factor) + "px");
            styles[0].style.setProperty("height", (_this._hour_height * _this._scale_factor) + "px");
        });
        styles = this.cssService.getStyle("^\\.assignment\\[[^\\]]*\\]$");
        styles.forEach(function (rule) {
            rule.style.setProperty("height", (_this._hour_height * _this._scale_factor) + "px");
            //rule.style.setProperty("border-radius", (this._assignment_border_radius*this._scale_factor)+"px");
        });
        setTimeout(function () { return _this.updateTimelineWidth(); }, 0);
        styles = this.cssService.getStyle("^\\.activityHeaderItem.*");
        styles.forEach(function (rule) {
            rule.style.setProperty("height", (_this._cell_height * _this._scale_factor) + "px");
            if (_this._scale_factor < 1) {
                rule.style.setProperty('font-size', (_this._vehicle_header_font_dize * _this._scale_factor) + "px");
            }
        });
        //this.scaleCssProperty(styles[0].style, 'font-size', this._vehicle_header_font_dize, this._scale_factor);
        //styles = this.cssService.getStyle("^\\.day\\[[^]]*\\]\s*$");
        styles = this.cssService.getStyle("^\\.day\\[[^\\]]*\\]$");
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
        styles.forEach(function (rule) {
            rule.style.setProperty("width", (_this._hour_width * _this._scale_factor) + "px");
            rule.style.setProperty("height", (_this._hour_height * _this._scale_factor) + "px");
        });
        styles = this.cssService.getStyle("^\\.week_timeContainer.*");
        styles.forEach(function (rule) {
            rule.style.setProperty("width", ((_this._hour_width * _hours_in_week) * _this._scale_factor) + "px");
            rule.style.setProperty("height", (_this._hour_height * _this._scale_factor) + "px");
        });
        //        }
        // else {
        //            styles = this.cssService.getStyle("^\\.timeContainer.*");
        //            //let hour_width = parseInt(styles[0].style.getPropertyValue("width"));
        //            styles[0].style.setProperty("width", this.scrolledWidget.nativeElement.style.width);
        //            styles[0].style.setProperty("height", (this._hour_height*this._scale_factor)+"px");
        // }
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
        this.scrollbarX.nativeElement.style.left = this.activityHeader.nativeElement.clientWidth;
        var scrollbarXWidth = (this.mightyParent.nativeElement.clientWidth - this.activityHeader.nativeElement.clientWidth - 120) - this.scrollbarYWidth;
        this.scrollbarX.nativeElement.style.width = scrollbarXWidth + "px";
        this.scrollbarY.nativeElement.style.height =
            (this.mightyParent.nativeElement.clientHeight - this.activityHeader.nativeElement.clientHeight) + "px";
        this.scrollbarYDummyContent.nativeElement.style.height = (this.scrolledWidget.nativeElement.clientHeight) + "px";
        this.scrolledParent.nativeElement.style.height = this.scrollbarY.nativeElement.style.height;
        //this.vehicleHeaderContainerViewPort.nativeElement.style.height = this.scrollbarY.nativeElement.style.height;
        this.activityHeaderContainer.nativeElement.style.height = this.scrollbarY.nativeElement.style.height;
    };
    ManageComponent.prototype.applyMainWidgetsSizes = function () {
        var _this = this;
        setTimeout(function () {
            var vpHeight = window.innerHeight;
            var timelineBox = _this.elementCoords(_this.mightyParent.nativeElement);
            var createdBy = document.querySelectorAll('.createdBy');
            var createdByBox = _this.elementCoords(createdBy[0]);
            var preHeight = (vpHeight - timelineBox.y) - createdByBox.height; //precalculated height.
            preHeight -= 60;
            if (_this.assignment_selected) {
                preHeight -= 200;
            }
            if (vpHeight > 932) {
                preHeight -= 80;
            }
            _this.mightyParent.nativeElement.style.height = Math.floor(preHeight) + "px";
            //preHeight -= 100;
            var driverContainerHeight = preHeight; //((preHeight-50) / 2);
            var driverTrailerContainers = document.querySelectorAll('.driverTrailerContainer');
            if (driverTrailerContainers && driverTrailerContainers[0]) {
                driverTrailerContainers[0].style.height = Math.floor(preHeight) + "px";
            }
            var driverContainer = document.querySelectorAll('.driverContainer');
            driverContainer[0].style.height = Math.floor(driverContainerHeight) + "px";
            var driverTrailerBox = document.querySelectorAll('.driverTrailerBox');
            for (var _i = 0, driverTrailerBox_1 = driverTrailerBox; _i < driverTrailerBox_1.length; _i++) {
                var box = driverTrailerBox_1[_i];
                box.style.height = Math.floor(driverContainerHeight - 30) + "px";
            }
            var assignPanel = document.querySelector(".assignmentPanel");
            if (assignPanel) {
                assignPanel.style.height = 40 + "px";
            }
            _this.resizeAssignPanelTabs();
        }, 0);
    };
    ManageComponent.prototype.resizeAssignPanelTabs = function () {
        var assignPanelHeader = document.querySelector("#AssignPanelHeader");
        if (assignPanelHeader != null) {
            //assignPanelHeader.style.width = (this.mightyParent.nativeElement.clientWidth) + "px";
            assignPanelHeader.style.width = "100%";
        }
        var assignPanelTabs = document.querySelector("#AssignPanelTabs");
        if (assignPanelTabs != null) {
            var actualTabs = document.querySelectorAll("#AssignPanelTabs > div");
            var totalWidth = 0;
            for (var _i = 0, actualTabs_1 = actualTabs; _i < actualTabs_1.length; _i++) {
                var tab = actualTabs_1[_i];
                totalWidth += tab.offsetWidth + 32;
            }
            //assignPanelTabs.style.width = totalWidth + "px";
            assignPanelTabs.style.width = "100%";
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
        for (var _i = 0, _a = this.activitySchedule; _i < _a.length; _i++) {
            var schedule = _a[_i];
            for (var _b = 0, _c = schedule.assignments; _b < _c.length; _b++) {
                var assignment = _c[_b];
                assignment.offsetLeft = this.computeOffsetLeft(assignment.weekDay, assignment.shift);
                assignment.width = this.computeWidth(assignment.shift);
            }
        }
    };
    ManageComponent.prototype.resizeCallbackCallable = function () {
        var _this = this;
        this.applyCustomScrollbars();
        setTimeout(function () { return _this.applyMainWidgetsSizes(); }, 50);
        console.log("__width: " + this.scrolledParent.nativeElement.clientWidth);
        var timelineWidth = this._hour_width * 24 * this._week_days.length;
        var scaleRatio = this.scrolledParent.nativeElement.clientWidth / timelineWidth;
        this._scale_factor = scaleRatio;
        setTimeout(function () { _this._scaleView(); });
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
        this.localStorageService.set(this.constructor.name + '.selectedActivitiesSimple', this.selectedActivitiesSimple);
        var selectedVehiclesOrdered = [];
        //        for(let schdl of this.activitySchedule) {
        //            selectedVehiclesOrdered.push(schdl.vehicle);
        //        }
        this.localStorageService.set(this.constructor.name + '.selectedVehiclesOrdered', selectedVehiclesOrdered);
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
        var activityTypes = [];
        for (var t in __WEBPACK_IMPORTED_MODULE_12__model_activity__["a" /* ActivityType */]) {
            if (t != 'Late' && t != 'Night') {
                activityTypes.push(t);
            }
        }
        this.activityService._getActivitys(0, 1000000, activityTypes).then(function (result) {
            var counter = 0;
            var ids = [];
            _this.selectedActivitiesSimple = { total: 0, vehicles: [] };
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var activity = result_1[_i];
                ids.push(activity.id);
                //for(let vehicle of result.vehicleList) {
                _this.activitySchedule.push({ activity: activity, assignments: [] });
                _this.selectedActivitiesSimple.vehicles[activity.id] = true;
                counter++;
            }
            _this.selectedActivitiesSimple.total = counter;
            //window.location.reload(false); //quick and dirty: reload the page in order to initialize it correctly
            _this.loadAssignments(ids);
            setTimeout(function () { return _this.updateTimelineWidth(); }, 0);
        });
    };
    ManageComponent.prototype.restoreProperties = function () {
        //        let selectedActivitiesSimple = <any>this.localStorageService.get(this.constructor.name+'.selectedActivitiesSimple');
        //        if(selectedActivitiesSimple != null) {
        //            //this.selectedActivitiesSimple.vehicles.length = 0;
        //            this.selectedActivitiesSimple = selectedActivitiesSimple;
        //        }
        //        else {
        this.selectAllVehicles();
        //        }
        var selectedActivitiesOrdered = this.localStorageService.get(this.constructor.name + '.selectedActivitiesOrdered');
        if (selectedActivitiesOrdered != null) {
            this.activitySchedule.length = 0;
            for (var _i = 0, selectedActivitiesOrdered_1 = selectedActivitiesOrdered; _i < selectedActivitiesOrdered_1.length; _i++) {
                var activity = selectedActivitiesOrdered_1[_i];
                this.activitySchedule.push({ activity: activity, assignments: [] });
            }
        }
        var pageSize = this.localStorageService.get(this.constructor.name + '.pageSize');
        if (pageSize != null) {
            //this.paginator.pageSize = pageSize;
        }
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
        console.log(this.selectedActivitiesSimple);
        //        this.dialog.open(SelectVehicleComponent, {
        //            data: {
        //                selected_vehicles: this.selectedActivitiesSimple
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
        var dataTransfer = { id: ev.target.dataset.driverid, entityType: 'consultant' };
        ev.dataTransfer.setData("text/json", JSON.stringify(dataTransfer));
        //(<any>ev.target).style.visibility = 'hidden';
        //(<any>ev.target).style.transform = 'translateX(-9999px)';
        ev.dataTransfer.effectAllowed = "copy";
        //console.log("drag");
        var elementCoords = this.elementCoords(ev.target);
        this._dnd_t_offset_x = 0; //ev.clientX-elementCoords.x;
        this._dnd_t_offset_y = 0; //ev.clientY-elementCoords.y;
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
    ManageComponent.prototype.removeTrailerFromAssignment = function (assignmentTrailerId) {
        console.log('removeTrailerFromAssignment: ' + assignmentTrailerId);
        var index = null;
        var c = 0;
        //        for(let assignmentTrailer of this.assignment_selected.assignmentTrailers) {
        //            if(assignmentTrailer.id == assignmentTrailerId){
        //                index = c;
        //                break;
        //            }
        //            c++;
        //        }
        //        if(index != null) {
        //            this.assignment_selected.assignmentTrailers.splice(index, 1);
        //        }
        //TODO We may create additional version of the saveAssignment method in which
        //the assignment returned from the backend is ignored (as we already had updated that
        //assignment locally)
        this.saveAssignment(this.assignment_selected);
    };
    ManageComponent.prototype.removeUserFromAssignment = function (assignmentUserId) {
        console.log('removeUserFromAssignment: ' + assignmentUserId);
        var index = null;
        var c = 0;
        for (var _i = 0, _a = this.assignment_selected.assignmentEmployees; _i < _a.length; _i++) {
            var assignmentUser = _a[_i];
            if (assignmentUser.id == assignmentUserId) {
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
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_15__manage_confirm_assignment_erase__["a" /* ConfirmAssignmentEraseComponent */], {
            data: {
                assignmentId: assignmentId,
                yesCallback: function () {
                    _this.deleteAssignment(assignmentId);
                },
            }
        });
    };
    ManageComponent.prototype.deleteAssignmentLocally = function (assignmentId) {
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
    ManageComponent.prototype.deleteAssignment = function (assignmentId) {
        var _this = this;
        this.schedule1Service.deleteAssignment(assignmentId, function () {
            _this.deleteAssignmentLocally(assignmentId);
        });
    };
    ManageComponent.prototype.selectAssignment = function (assignmentId) {
        var _this = this;
        console.log('assignmentid: ' + assignmentId);
        this.applyMainWidgetsSizes();
        this.assignment_selected = this.getAssignment(assignmentId);
        console.log(this.assignment_selected);
        this.assignment_selected.z_index = ++this.reached_z_index;
        //this.onClickAssignment_ignore = true;
        this.calculateOverlappedAssignments();
        //this._periodForm_from = this.assignment_selected.startTime.get_ISO_8601_Date();
        //this._periodForm_to = this.assignment_selected.startTime.plusLength(this.assignment_selected.timeLength).get_ISO_8601_Date();
        for (var index in this.periodFormFields.controls) {
            this.periodFormFields.controls[index].disable();
        }
        setTimeout(function () {
            var assignPanelDetails = document.querySelector(".assignPanelDetails");
            _this.renderer2.listen(assignPanelDetails, "scroll", _this.assignPanelDetailsScrollCallback);
        }, 0);
        //this.periodFormFields.setValue({dateFrom: this.assignment_selected.startTime.get_ISO_8601_Date(),
        //    dateTo:this.assignment_selected.startTime.plusLength(this.assignment_selected.timeLength).get_ISO_8601_Date()});
        this.applyMainWidgetsSizes();
        this.applyCustomScrollbars();
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
        //        for(let ass of this.activitySchedule[schedule.dataset.index].assignments) {
        //            let scrolledParentBox = this.scrolledParent.nativeElement.getBoundingClientRect();
        //            let assignmentX = (ass.offsetLeft - this.scrollbarX.nativeElement.scrollLeft) + scrolledParentBox.left;
        //            if(ev.clientX > assignmentX && ev.clientX < assignmentX + ass.width) {
        //                overlapped.push({...ass, cursorProximity: ev.clientX - assignmentX});
        //            }
        //        }
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
    ManageComponent.prototype.onClickAssignment = function (ev) {
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
            if (this.assignment_selected != null) {
                var exSelected = document.querySelector("#assignment" + this.assignment_selected.assignmentId);
                if (exSelected) {
                    exSelected.classList.remove("assignmentSelected");
                }
            }
            target.classList.add("assignmentSelected");
            //ev.preventDefault();
            this.selectAssignment(target.dataset.assignmentid);
            return true;
        }
        ev.preventDefault();
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
        //this.scrollbarX.nativeElement.scrollLeft =
        //    (this.assignment_selected.offsetLeft - (this.mightyParent.nativeElement.clientWidth /2));
    };
    ManageComponent.prototype.calculateOverlappedAssignments = function () {
        var scheduleIndex = -1;
        for (var i in this.activitySchedule) {
            if (this.activitySchedule[i].activity.id == this.assignment_selected.assignmentActivities[0].activity.id) {
                this.scheduleIndex = parseInt(i);
                break;
            }
        }
        //        this.bubbleSort(this.activitySchedule[this.scheduleIndex].assignments, 'offsetLeft');
        //
        //                this.assignments_overlapped.length = 0;
        //                if(scheduleIndex > -1) {
        //                    for(let ass of this.activitySchedule[scheduleIndex].assignments) {
        //                        if((ass.startTime.isGreaterOrEqual(this.assignment_selected.startTime) ||
        //                            ass.startTime.plusLength(ass.timeLength).isGreaterOrEqual(this.assignment_selected.startTime)) && 
        //                            (ass.startTime.isLessOrEqual(this.assignment_selected.startTime.plusLength(this.assignment_selected.timeLength)) || 
        //                                ass.startTime.plusLength(ass.timeLength).isLessOrEqual(this.assignment_selected.startTime.plusLength(this.assignment_selected.timeLength)))){
        //                            this.assignments_overlapped.push(ass);
        //                        }
        //                    }
        //                }
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
    ManageComponent.prototype.convertCoordinatesToShift = function (offsetLeft, width) {
        var amWidth = this._hour_width * this._scale_factor * 12;
        var dayWidth = amWidth * 2;
        if (width > amWidth) {
            return 'D';
        }
        else {
            var remaining = offsetLeft % dayWidth;
            if (remaining < amWidth) {
                return 'AM';
            }
            else {
                return 'PM';
            }
        }
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
        //let startTime = this.computeStartTime(target.offsetLeft);
        //let timeLength = this.computeTimeLength(parseInt(target.style.width));
        console.log('updateAssignment: ' + assignmentId);
        var assignment = this.getAssignment(assignmentId);
        //assignment.startTime = startTime;
        //assignment.timeLength = timeLength;
        var width = this.week_alignAssignment(parseInt(target.style.width), "meridiem");
        if (width > 0) {
            assignment.width = width;
        }
        assignment.offsetLeft = this.week_alignAssignment(parseInt(target.offsetLeft), "meridiem");
        assignment.shift = this.convertCoordinatesToShift(assignment.offsetLeft, width);
        this.schedule1Service.saveAssignment(assignment, function () { });
    };
    ManageComponent.prototype.getAssignment = function (assignmentId) {
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
    ManageComponent.prototype.onMouseMove = function (event) {
        if (this._resize_target != null) {
            if (this._resize_side == 'right') {
                var elementCoords = this.elementCoords(this._resize_target);
                var relX = this.alignAssignment(event.clientX - elementCoords.x, 'hour');
                var width = this.week_alignAssignment(relX, "meridiem_ceil");
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
                    this._resize_target.style.width = this.week_alignAssignment(width, "meridiem_ceil") + "px";
                }
                this._resize_target.style.left = this.week_alignAssignment(relX, "meridiem_ceil") + "px";
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
                    this._resize_target.style.left = this.week_alignAssignment(((relX) - this._dnd_t_offset_x), "day") + "px";
                }
                else {
                    this._resize_target.style.left = this.week_alignAssignment(((relX) - this._dnd_t_offset_x), "meridiem") + "px";
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
        var tmLength = new __WEBPACK_IMPORTED_MODULE_10__model_tmdate__["b" /* TmLength */]();
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
        /** id is either userId (if user is being dragged from the consultant list) or assignmentid
         *  (if the consultant id being dragged form the timeline)
         */
        var dataTransfer = JSON.parse(ev.dataTransfer.getData("text/json"));
        var id = dataTransfer.id;
        var entityType = dataTransfer.entityType;
        //let entityType = ev.dataTransfer.getData("text/plain");
        var activityId = target.dataset.activityid;
        var targetActivity = target;
        if (activityId == null) {
            do {
                targetActivity = targetActivity.parentNode;
                activityId = targetActivity.dataset.activityid;
            } while (activityId == null);
        }
        //let element = this.document.querySelector('#consultant-23');
        //target.appendChild(element);
        var elementCoords = this.elementCoords(targetActivity);
        var targetCoords = ((ev.clientX - elementCoords.x) - (target.style.width) - this._dnd_t_offset_x) + "px";
        var eventCoordinates = this.week_alignAssignment(ev.clientX - elementCoords.x - this._dnd_t_offset_x, 'meridiem');
        console.log(eventCoordinates);
        //let fetch_
        if (ev.dataTransfer.effectAllowed == 'copy') {
            if (add == false) {
                if (entityType != null && entityType == 'trailer') {
                    //                    //let fetch_trailer = Observable.fromPromise(this.trailerService.getTrailer(id));
                    //                    //let fetch_vehicle = Observable.fromPromise(this.vehicleService.getVehicle(vehicleId));
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
                    //                            assignmentVehicles: [vehicle],
                    //                            startTime: startTime,
                    //                            timeLength: timeLength,
                    //                            offsetLeft: eventCoordinates,
                    //                            width: width,
                    //                            z_index: ++this.reached_z_index,
                    //                        };
                    //
                    //                        this.saveAssignment(assignment);
                    //                    })
                }
                else {
                    //let fetch_user = Observable.fromPromise(this.userService.getUser(id));
                    //let fetch_vehicle = Observable.fromPromise(this.vehicleService.getVehicle(vehicleId));
                    //Observable.zip(fetch_user, fetch_vehicle).subscribe((params:any[]) => {
                    var user = void 0;
                    for (var _i = 0, _a = this.consultants; _i < _a.length; _i++) {
                        var consultant = _a[_i];
                        if (consultant.id == id) {
                            user = { id: 0, employee: consultant };
                            break;
                        }
                    }
                    var activity = void 0;
                    for (var _b = 0, _c = this.activitySchedule; _b < _c.length; _b++) {
                        var schedule = _c[_b];
                        if (schedule.activity.id == activityId) {
                            activity = { id: 0, activity: schedule.activity };
                        }
                    }
                    if (activity != undefined && user != undefined) {
                        var width = (this._hour_width * this._scale_factor) * 12;
                        //let startTime = this.computeStartTime(eventCoordinates);
                        //let timeLength = this.computeTimeLength(width);
                        var day = this.computeDay(eventCoordinates);
                        var shift = this.computeShift(eventCoordinates);
                        var assignment = new __WEBPACK_IMPORTED_MODULE_11__model_schedule__["a" /* Assignment */]({
                            assignmentId: 0,
                            //assignmentTrailers: [],
                            assignmentEmployees: [user],
                            assignmentActivities: [activity],
                            //startTime: startTime,
                            //timeLength: timeLength,
                            offsetLeft: eventCoordinates,
                            width: width,
                            z_index: ++this.reached_z_index,
                            shift: shift,
                            day: day
                        });
                        this.saveAssignment(assignment);
                    }
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
                    this.addTrailerToAssignment(id, target.dataset.assignmentid);
                }
                else {
                    this.addUserToAssignment(id, target.dataset.assignmentid);
                }
            }
        }
        else if (ev.dataTransfer.effectAllowed == 'move') {
            this.moveAssignment(id, activityId, eventCoordinates);
        }
        ev.preventDefault();
        ev.stopPropagation();
        return false;
    };
    ManageComponent.prototype.computeShift = function (coordinates) {
        var remaining = Math.floor(coordinates) % (this._hour_width * this._scale_factor * 24);
        var shift = 'AM';
        if (remaining >= 1) {
            shift = 'PM';
        }
        return shift;
    };
    ManageComponent.prototype.addTrailerToAssignment = function (id, assignmentid) {
        if (typeof (id) == 'string') {
            id = parseInt(id);
        }
        //        this.trailerService.getTrailer(id).then(trailer => {
        //            if(typeof(assignmentid) == 'string') {
        //                assignmentid = parseInt(assignmentid);
        //            }
        //
        //            let assignment = this.getAssignment(assignmentid);
        //            let isPresent = false;
        //            for(let assTrailer of assignment.assignmentTrailers) {
        //                if(assTrailer.trailer.id == id) {
        //                    isPresent = true;
        //                    break;
        //                }
        //            }
        //            if(!isPresent){
        //                assignment.assignmentTrailers.push({id:0, trailer: trailer});
        //                this.saveAssignment(assignment);
        //            }
        //        });
    };
    ManageComponent.prototype.addUserToAssignment = function (id, assignmentid) {
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
    ManageComponent.prototype.saveAssignment = function (assignment) {
        var _this = this;
        this.schedule1Service.saveAssignment(assignment, function (incoming) {
            assignment.previousActivity = null; // we do not need previous assignment vehicle any more
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
        var targetActivityId;
        if (assignment.previousActivity != null) {
            targetActivityId = assignment.previousActivity.id;
        }
        else {
            targetActivityId = assignment.assignmentActivities[0].activity.id;
        }
        for (var _i = 0, _a = this.activitySchedule; _i < _a.length; _i++) {
            var activity = _a[_i];
            if (activity.activity.id == targetActivityId) {
                for (var _b = 0, _c = activity.assignments; _b < _c.length; _b++) {
                    var ass = _c[_b];
                    if (ass.assignmentId == assignment.assignmentId) {
                        //ass.startTime = assignment.startTime;
                        //ass.timeLength = assignment.timeLength;
                        ass.offsetLeft = assignment.offsetLeft;
                        ass.width = assignment.width;
                        this.applyPeerChanges(ass.assignmentEmployees, assignment.assignmentEmployees);
                        //this.applyPeerChanges(ass.assignmentTrailers, assignment.assignmentTrailers);
                        if (this.applyPeerChanges(ass.assignmentActivities, assignment.assignmentActivities)) {
                            this.reapplyAssignmentActivityLocally(ass.assignmentId);
                        }
                        ret_assignment = ass;
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    activity.assignments.push(assignment);
                }
                break;
            }
        }
        if (this.scheduleIndex > -1) {
            //this.bubbleSort(this.activitySchedule[this.scheduleIndex].assignments, 'offsetLeft');
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
    /** Removes assignment locally. It would be returned so if you need it you can catch the return value from this method
     *
     *  @param number assignmentId
     */
    ManageComponent.prototype.removeAssignmentLocally = function (assignmentId) {
        /** vehicle index */
        var vI = 0;
        /** schedule index */
        var sI = 0;
        for (var i in this.activitySchedule) {
            //if(this.activitySchedule[i].vehicle.id == vehicleId) {
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
     * Moves assignment from one place to another, possibly across vehicles
     *
     * @param id assignment id
     * @param vehicleId destination vehicle id
     * @param eventCoordinates position in the timeline in pixels
     */
    ManageComponent.prototype.moveAssignment = function (id, vehicleId, eventCoordinates) {
        var assignment = this.removeAssignmentLocally(id);
        assignment.offsetLeft = eventCoordinates;
        assignment.day = this.computeDay(eventCoordinates);
        assignment.shift = this.computeShift(eventCoordinates);
        //assignment.startTime = this.computeStartTime(eventCoordinates);
        // TODO update startTime with eventCoordinates
        // TODO update startTime with eventCoordinates
        for (var _i = 0, _a = this.activitySchedule; _i < _a.length; _i++) {
            var schdl = _a[_i];
            if (schdl.activity.id == vehicleId) {
                assignment.previousActivity = assignment.assignmentActivities[0];
                assignment.assignmentActivities[0] = { id: 0, activity: schdl.activity };
                this.saveAssignment(assignment);
                break;
            }
        }
    };
    ManageComponent.prototype.reapplyAssignmentActivityLocally = function (assignmentId) {
        var assignment = this.removeAssignmentLocally(assignmentId);
        var activityId = assignment.assignmentActivities[0].activity.id;
        for (var _i = 0, _a = this.activitySchedule; _i < _a.length; _i++) {
            var schedule = _a[_i];
            if (schedule.activity.id == activityId) {
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
        var date = new __WEBPACK_IMPORTED_MODULE_10__model_tmdate__["a" /* TmDate */]();
        date.setFromDate(newValue);
        this.initView(date);
        var vehicleIds = [];
        for (var id in this.selectedActivitiesSimple.vehicles) {
            if (this.selectedActivitiesSimple.vehicles[id] == true) {
                vehicleIds.push(id);
            }
        }
        var timeLength = new __WEBPACK_IMPORTED_MODULE_10__model_tmdate__["b" /* TmLength */]();
        timeLength.seconds = this.hours.length * 3600;
        //this.loadAssignments(this.days[0], timeLength, vehicleIds);
    };
    ManageComponent.prototype.closeAssignmentPanel = function () {
        var _this = this;
        if (this.assignment_selected != null) {
            var exSelected = document.querySelector("#assignment" + this.assignment_selected.assignmentId);
            exSelected.classList.remove("assignmentSelected");
        }
        this.assignment_selected = null;
        setTimeout(function () {
            _this.applyMainWidgetsSizes();
            _this.applyCustomScrollbars();
        }, 50);
    };
    ManageComponent.prototype.assignPanelDetailsScrollCallback = function (event) {
        var panelScroll = document.querySelector(".assignPanelDetails").scrollTop;
        var elements = document.querySelectorAll(".assignPanelDetails > div.dont-scroll");
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var div = elements_1[_i];
            div.style.marginTop = panelScroll + "px";
        }
    };
    ManageComponent.prototype.week_alignAssignment = function (coordinates, granularity) {
        var remaining;
        switch (granularity) {
            case 'meridiem':
                remaining = Math.floor(coordinates) % (this._hour_width * this._scale_factor * 12);
                coordinates -= remaining;
                break;
            case 'meridiem_ceil':
                remaining = Math.ceil(coordinates) % (this._hour_width * this._scale_factor * 12);
                coordinates -= remaining;
                break;
            case 'day':
                remaining = Math.ceil(coordinates) % (this._hour_width * this._scale_factor * 24);
                coordinates -= remaining;
                break;
        }
        return coordinates;
    };
    ManageComponent.prototype.alignAssignment = function (coordinates, granularity) {
        switch (granularity) {
            case 'hour':
                var remaining = Math.ceil(coordinates) % this._hour_width;
                coordinates -= remaining;
                break;
        }
        return coordinates;
    };
    ManageComponent.prototype.toggleWeekView = function () {
        var _this = this;
        this.b_week_view = !this.b_week_view;
        setTimeout(function () {
            _this._scaleView();
            _this.installCallbacks();
        }, 0);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("activityHeader"),
    __metadata("design:type", typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _l || Object)
], ManageComponent.prototype, "activityHeader", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("activityHeaderContainer"),
    __metadata("design:type", typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _m || Object)
], ManageComponent.prototype, "activityHeaderContainer", void 0);
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
ManageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/admin/schedule/manage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/schedule/manage.component.css")],
    }),
    __param(9, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_13__admin_component__["a" /* AdminComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__admin_component__["a" /* AdminComponent */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_8__service_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service_user_service__["a" /* UserService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_6__service_activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_activity_service__["a" /* ActivityService */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_14__schedule_component__["a" /* ScheduleComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__schedule_component__["a" /* ScheduleComponent */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _u || Object, typeof (_v = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _v || Object, typeof (_w = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _w || Object, typeof (_x = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatDialog */]) === "function" && _x || Object, Object, typeof (_y = typeof __WEBPACK_IMPORTED_MODULE_7__service_css_service__["a" /* CssService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_css_service__["a" /* CssService */]) === "function" && _y || Object, typeof (_z = typeof __WEBPACK_IMPORTED_MODULE_9__service_schedule1_service__["a" /* Schedule1Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__service_schedule1_service__["a" /* Schedule1Service */]) === "function" && _z || Object, typeof (_0 = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* FormBuilder */]) === "function" && _0 || Object])
], ManageComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
//# sourceMappingURL=manage.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/schedule/manage/confirm-assignment-erase.html":
/***/ (function(module, exports) {

module.exports = "<span>Are you sure you want to delete assignment {{assignmentId}}?</span>\n<div style=\"clear:both\"></div>\n<button md-button (click)=\"onYesClick()\">Yes, delete it!</button>\n<button md-button #defaultButton (click)=\"onNoClick()\">No, leave it.</button>\n"

/***/ }),

/***/ "../../../../../src/app/admin/schedule/manage/confirm-assignment-erase.ts":
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
        template: __webpack_require__("../../../../../src/app/admin/schedule/manage/confirm-assignment-erase.html"),
        styles: ["\n    span {\n        margin: 1em;\n        margin-bottom: 8em;\n    }\n\n    div {\n        height: 4em;\n    }\n\n    button {\n        float:right;\n        margin-right: 1em;\n    }\n\n    button:last-of-type {\n        margin-right: 0em;\n    }\n  "]
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatDialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _d || Object, Object])
], ConfirmAssignmentEraseComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=confirm-assignment-erase.js.map

/***/ }),

/***/ "../../../../../src/app/admin/schedule/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/admin/schedule/schedule.component.ts":
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
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




var ScheduleComponent = (function (_super) {
    __extends(ScheduleComponent, _super);
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
    function ScheduleComponent(route, router, location, localStorageService, historyService, adminComponent) {
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
    ScheduleComponent.prototype.ngOnInit = function () {
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
    ScheduleComponent.prototype.pushHistory = function (id) {
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
    ScheduleComponent.prototype.titleType = function (link) {
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
    return ScheduleComponent;
}(__WEBPACK_IMPORTED_MODULE_4__model_tabbed_component__["a" /* TabbedComponent */]));
ScheduleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/admin/schedule/schedule.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__service_history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_history_service__["a" /* HistoryService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__admin_component__["a" /* AdminComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__admin_component__["a" /* AdminComponent */]) === "function" && _f || Object])
], ScheduleComponent);

var NavLink = (function () {
    function NavLink() {
    }
    return NavLink;
}());
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=schedule.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/schedule/schedule.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__schedule_component__ = __webpack_require__("../../../../../src/app/admin/schedule/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manage_component__ = __webpack_require__("../../../../../src/app/admin/schedule/manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manage_confirm_assignment_erase__ = __webpack_require__("../../../../../src/app/admin/schedule/manage/confirm-assignment-erase.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleModule", function() { return ScheduleModule; });
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
        component: __WEBPACK_IMPORTED_MODULE_6__schedule_component__["a" /* ScheduleComponent */],
        //canActivate: [AuthGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'manage' },
            { path: 'manage', component: __WEBPACK_IMPORTED_MODULE_7__manage_component__["a" /* ManageComponent */] },
        ]
    }
];
var ScheduleModule = (function () {
    function ScheduleModule() {
    }
    return ScheduleModule;
}());
ScheduleModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["x" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["y" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["z" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["A" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["B" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["C" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__["a" /* CdkTableModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__schedule_component__["a" /* ScheduleComponent */],
            __WEBPACK_IMPORTED_MODULE_7__manage_component__["a" /* ManageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__manage_confirm_assignment_erase__["a" /* ConfirmAssignmentEraseComponent */]
        ],
        entryComponents: [
            //        SelectVehicleComponent,
            __WEBPACK_IMPORTED_MODULE_8__manage_confirm_assignment_erase__["a" /* ConfirmAssignmentEraseComponent */],
        ],
        providers: []
    })
], ScheduleModule);

//# sourceMappingURL=schedule.module.js.map

/***/ }),

/***/ "../../../../../src/app/model/activity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Activity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityType; });
var Activity = (function () {
    function Activity() {
    }
    return Activity;
}());

var ActivityType = (function () {
    function ActivityType() {
    }
    return ActivityType;
}());

ActivityType.Training = 'Trainig';
ActivityType.Service = 'Service';
ActivityType.Late = 'Late';
ActivityType.Night = 'Night';
//# sourceMappingURL=activity.js.map

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
//# sourceMappingURL=4.chunk.js.map