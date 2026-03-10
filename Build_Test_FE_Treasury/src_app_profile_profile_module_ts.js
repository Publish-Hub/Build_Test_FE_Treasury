"use strict";
(self["webpackChunkDX_Admin_FE"] = self["webpackChunkDX_Admin_FE"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 6829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRoutingModule": () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ 6630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
}];
class ProfileRoutingModule {}
ProfileRoutingModule.ɵfac = function ProfileRoutingModule_Factory(t) {
  return new (t || ProfileRoutingModule)();
};
ProfileRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProfileRoutingModule
});
ProfileRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6630:
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/header.service */ 940);
/* harmony import */ var _shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/sidebar.service */ 9106);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth.service */ 8915);
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/user.service */ 8613);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_edit_icon_edit_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/edit-icon/edit-icon.component */ 265);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/loading/loading.component */ 8424);
/* harmony import */ var _shared_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/directives/numbers-only.directive */ 3117);
/* harmony import */ var _shared_directives_alphabet_only_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/directives/alphabet-only.directive */ 2439);
/* harmony import */ var _shared_directives_tel_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/directives/tel-input.directive */ 7129);














function ProfileComponent_div_1_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_div_1_div_14_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.formValid["fullName"] == null ? null : ctx_r3.formValid["fullName"].errors == null ? null : ctx_r3.formValid["fullName"].errors["required"]);
  }
}
function ProfileComponent_div_1_div_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Phone Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_1_div_27_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Minimum 9 Digit required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_div_1_div_27_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProfileComponent_div_1_div_27_span_2_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.formValid["mobile"] == null ? null : ctx_r4.formValid["mobile"].errors == null ? null : ctx_r4.formValid["mobile"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r4.form.get("mobile")) == null ? null : tmp_1_0.hasError("minlength"));
  }
}
function ProfileComponent_div_1_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 3)(1, "div", 32)(2, "div", 33)(3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 32)(8, "div", 37)(9, "div", 38)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 32)(14, "div", 37)(15, "div", 38)(16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", item_r9.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", item_r9.day[0] == null ? null : item_r9.day[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", item_r9.fromTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", item_r9.fromTime);
  }
}
const _c0 = function () {
  return ["jo", "sa"];
};
const _c1 = function (a1) {
  return {
    initialCountry: "jo",
    preferredCountries: a1
  };
};
function ProfileComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 3)(1, "form", 4)(2, "div", 5)(3, "div", 6)(4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Account Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 7)(7, "div", 3)(8, "div", 8)(9, "div", 9)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Full Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "app-edit-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_div_1_Template_app_edit_icon_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.editFullname());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, ProfileComponent_div_1_div_14_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Email*");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 8)(21, "div", 14)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div")(25, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("input", function ProfileComponent_div_1_Template_input_input_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.limitMobileLength());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "app-edit-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_div_1_Template_app_edit_icon_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r14.editMobile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, ProfileComponent_div_1_div_27_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 8)(29, "div", 9)(30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "Branch Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 8)(34, "div", 9)(35, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Register Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "div", 8)(39, "div", 9)(40, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "Register No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](42, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 5)(44, "div", 17)(45, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_div_1_Template_button_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r15.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](46, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProfileComponent_div_1_Template_button_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.editUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, " Update Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 5)(50, "div", 6)(51, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "Working Hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, ProfileComponent_div_1_div_54_Template, 19, 4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "div", 5)(56, "div", 6)(57, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58, "Contract");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 7)(60, "div", 3)(61, "div", 8)(62, "div", 9)(63, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](65, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](66, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "div", 8)(68, "div", 9)(69, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](70, "End Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](71, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](72, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "div", 5)(74, "div", 6)(75, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](76, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "div", 7)(78, "div", 3)(79, "div", 8)(80, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](81, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "div", 24)(83, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](84, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86, " indoor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](88, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90, " outdoor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("heightInRem", "1.25rem")("alt", ctx_r0.isShowFullName)("cursorPointer", !ctx_r0.isShowFullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.formValid["fullName"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.userDetails.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("libTelInputOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](30, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](29, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("heightInRem", "1.25rem")("alt", ctx_r0.isShowMobile)("cursorPointer", !ctx_r0.isShowMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.formValid["mobile"].invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.branch == null ? null : ctx_r0.userDetails.branch.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.register == null ? null : ctx_r0.userDetails.register.registersName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.register == null ? null : ctx_r0.userDetails.register.registersId);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r0.isShowFullName && !ctx_r0.isShowMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.userDetails.userWorkingHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](66, 23, ctx_r0.userDetails.contractStartDate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](72, 26, ctx_r0.userDetails.contractEndDate, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.userDetails.role.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.userDetails.indoor)("checked", ctx_r0.userDetails.indoor);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r0.userDetails.outdoor)("checked", ctx_r0.userDetails.outdoor);
  }
}
function ProfileComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-loading");
  }
}
class ProfileComponent {
  constructor(fb, toastrService, headerService, sidebarService, authService, userService) {
    this.fb = fb;
    this.toastrService = toastrService;
    this.headerService = headerService;
    this.sidebarService = sidebarService;
    this.authService = authService;
    this.userService = userService;
    this.loading = false;
    this.isShowFullName = false;
    this.isShowMobile = false;
  }
  ngOnInit() {
    this.headerService.setTitle('Profile');
    this.sidebarService.emitEvent({
      select: {
        navLink: {
          id: 'profile',
          name: 'profile',
          url: '/profile'
        },
        silent: true
      }
    });
    this.form = this.fb.group({
      userId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(9)]]
    });
    this.reset();
    this.fetchData();
  }
  fetchData() {
    this.loading = true;
    this.authService.getLoggedUserDetails().subscribe(result => {
      if (result?.isSuccess) {
        this.userDetails = result.data;
        if (this.userDetails) {
          this.form.get('userId')?.patchValue(this.authService.userId);
          this.form.get('fullName')?.patchValue(this.userDetails.fullName);
          this.form.get('mobile')?.patchValue(this.userDetails?.mobile);
        }
      }
    }).add(() => this.loading = false);
  }
  limitMobileLength() {
    const maxLength = 9; // Maximum allowed digits
    const mobileControl = this.form.get('mobile');
    if (mobileControl?.value && mobileControl?.value.length > maxLength) {
      mobileControl.setValue(mobileControl.value.slice(0, maxLength));
    }
  }
  editUser() {
    if (this.form.valid) {
      this.userService.updateUser(this.form.value).subscribe({
        next: result => {
          if (result.isSuccess) {
            this.reset();
            this.toastrService.success('Updated successfully');
          }
        },
        error: err => {
          const errors = err?.error?.errors?.map(entry => entry.ErrorMessageEn) || [];
          this.toastrService.error(errors.length ? errors.join('<br>') : 'Update failed', '', {
            enableHtml: true
          });
        }
      });
    }
  }
  reset() {
    this.form.controls['fullName'].disable();
    this.isShowFullName = false;
    this.form.controls['mobile'].disable();
    this.isShowMobile = false;
    this.fetchData();
  }
  editFullname() {
    if (!this.isShowFullName) {
      this.isShowFullName = true;
      this.form.controls['fullName'].enable();
    }
  }
  editMobile() {
    if (!this.isShowMobile) {
      this.isShowMobile = true;
      this.form.controls['mobile'].enable();
    }
  }
  get formValid() {
    return this.form.controls;
  }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_0__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService));
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 4,
  vars: 2,
  consts: [[1, "card-page"], ["class", "row", 4, "ngIf", "ngIfElse"], ["loadingTemplate", ""], [1, "row"], [3, "formGroup"], [1, "col-md-12"], [1, "page-title"], [1, "card-form", "position-relative"], [1, "col-md-4"], [1, "form-group", "overflow-hidden", "position-relative"], ["type", "text", "placeholder", "", "formControlName", "fullName", "alphabetOnly", "", "required", "", 1, "form-control"], [1, "btn-floating", 3, "heightInRem", "alt", "cursorPointer", "click"], [4, "ngIf"], ["type", "text", "placeholder", "email", "disabled", "", 1, "form-control", 3, "value"], [1, "form-group", "position-relative"], ["type", "text", "placeholder", "7 9012 3456", "libTelInput", "", "formControlName", "mobile", "numbersOnly", "", 1, "form-control", 3, "libTelInputOptions", "input"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "disabled", "click"], ["class", "row", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "placeholder", " ", "disabled", "", 1, "form-control", 3, "value"], ["name", "fullName", "type", "text", "disabled", "", 1, "form-control", 3, "value"], [1, "col-md-4", 2, "padding-top", "15px"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "indoor", "disabled", "", 1, "form-check-input", 3, "value", "checked"], ["for", "indoor", 1, "form-check-label"], ["type", "checkbox", "id", "outdoor", "disabled", "", 1, "form-check-input", 3, "value", "checked"], ["for", "outdoor", 1, "form-check-label"], ["class", "error", 4, "ngIf"], [1, "error"], [1, "col-sm-4"], [1, "form-group", "day-active"], [1, "form-check", "form-switch", "justify-content-between"], ["type", "checkbox", "role", "switch", "id", "flexSwitchCheckDefault", "disabled", "", 1, "form-check-input", 3, "checked"], ["for", ""], [1, ""], [1, "from-to-time"], ["type", "time", "name", "fromTime", "disabled", "", 1, "form-control", 3, "value"], ["type", "time", "name", "toTime", "disabled", "", 1, "form-control", 3, "value"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProfileComponent_div_1_Template, 91, 32, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProfileComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _shared_components_edit_icon_edit_icon_component__WEBPACK_IMPORTED_MODULE_4__.EditIconComponent, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_5__.LoadingComponent, _shared_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_6__.NumberOnlyDirective, _shared_directives_alphabet_only_directive__WEBPACK_IMPORTED_MODULE_7__.AlphabetOnlyDirective, _shared_directives_tel_input_directive__WEBPACK_IMPORTED_MODULE_8__.TelInputDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: [".btn-floating[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8px;\n  right: 0;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tZmxvYXRpbmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDhweDtcclxuICByaWdodDogMDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-routing.module */ 6829);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component */ 6630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class ProfileModule {}
ProfileModule.ɵfac = function ProfileModule_Factory(t) {
  return new (t || ProfileModule)();
};
ProfileModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ProfileModule
});
ProfileModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfileRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfileRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map