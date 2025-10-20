"use strict";
(self["webpackChunkDX_Admin_FE"] = self["webpackChunkDX_Admin_FE"] || []).push([["src_app_credit-cards_credit-cards_module_ts"],{

/***/ 1631:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/credit-cards/create-reconciliation/components/group-reconciliation/group-reconciliation.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupReconciliationComponent": () => (/* binding */ GroupReconciliationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/modals/message-modal/message-modal.component */ 4280);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/credit-card.service */ 1265);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/table-advanced/table-advanced.component */ 9973);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _shared_directives_decimal_number_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/decimal-number.directive */ 8648);
/* harmony import */ var _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/validation-error/validation-error.component */ 7711);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);













function GroupReconciliationComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (item_r2 == null ? null : item_r2.accountName) + "-" + (item_r2 == null ? null : item_r2.bankNameEnglish) + "-" + (item_r2 == null ? null : item_r2.accountNumber), " ");
  }
}
const _c0 = function () {
  return {
    required: "Input is required"
  };
};
const _c1 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
const _c2 = "Commission amount cannot be greater than total amount.";
const _c3 = function () {
  return {
    inValidAmount: _c2
  };
};
const _c4 = function () {
  return {
    required: "Input is required",
    min: "Value must be in 0-100 range.",
    max: "Value must be in 0-100 range."
  };
};
class GroupReconciliationComponent {
  constructor(fb, _activeModal, _modalService, cerditCardService) {
    this.fb = fb;
    this._activeModal = _activeModal;
    this._modalService = _modalService;
    this.cerditCardService = cerditCardService;
    this.bankAccountList = [];
    this.commisionPercentage = '';
    this.checkRecon = false;
    this.tableConfig = {
      paging: false
    };
    this.reconList = [];
    this.tableColumns = [];
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  ngOnInit() {
    this.initForm();
    this.getBankAccountList();
    this.initTableColumns();
    console.log(this.data);
  }
  initForm() {
    this.formGroup = this.fb.group({
      bankId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      date: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      commission: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(100)]]
    });
  }
  getBankAccountList() {
    this.cerditCardService.getBankAccounts(`pageSize=1000&status=2001&accountType=15010`).subscribe(response => {
      this.bankAccountList = response.data;
    });
  }
  handleCommissionAmountChange(event) {
    const amount = +event.target.value;
    if (amount > +this.data?.totalAmount) {
      this.f.get('commission')?.setErrors({
        inValidAmount: true
      });
      this.f.get('commission').markAsTouched();
    } else {
      if (amount > 0) {
        this.commisionPercentage = ((1 - (this.data?.totalAmount - amount) / this.data?.totalAmount) * 100).toString();
        this.f.get('commission')?.setValue(this.commisionPercentage);
        this.f.get('commission')?.setErrors(null);
      }
    }
  }
  handleCheckRecon() {
    this.checkRecon = true;
    this.reconList = [...this.data?.cardIds];
    this.reconList = this.reconList.map(x => {
      let comAmount = +(+x?.cardCollectionJod * +this.commisionPercentage / 100).toFixed(3);
      return {
        ...x,
        comPercentage: +this.commisionPercentage,
        comAmount,
        amount: (x?.cardCollectionJod).toFixed(3),
        netAmount: (+x?.cardCollectionJod - comAmount).toFixed(3)
      };
    });
  }
  calculateCommission(item) {
    let amount = item?.cardCollectionJod;
    let commissionPercentage = +this.f.get('commission')?.value;
    let commissionAmount = (amount * (commissionPercentage / 100)).toFixed(3);
    let netAmount = (amount - +commissionAmount).toFixed(3);
    return {
      netAmount,
      commissionAmount
    };
  }
  save() {
    //console.log(this.calculateCommission({ cardCollectionJod: 100 }));
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    let value = this.formGroup.value;
    let dataArray = [];
    //this.data.cardIds.forEach((item: any) => {
    //  let obj = {
    //    reconcilationIds: item?.reconcilationIds,
    //    commission: this.calculateCommission(item).commissionAmount,
    //    cardCollectionJodNet: this.calculateCommission(item).netAmount,
    //    cardBankDepositDate: value?.date,
    //    bankaccountID: value?.bankId,
    //  }
    //  dataArray.push(obj);
    //})
    this.reconList.forEach(item => {
      let obj = {
        reconcilationIds: item?.reconcilationIds,
        commission: item?.comAmount,
        cardCollectionJodNet: item?.netAmount,
        cardBankDepositDate: value?.date,
        bankaccountID: value?.bankId
      };
      dataArray.push(obj);
    });
    this.cerditCardService.ReconcilationIds(dataArray).subscribe({
      next: response => {
        if (response.isSuccess) {
          this.responseModal('success', 'Reconciliation successfully done.');
          this.eventData.emit(response.data);
        }
      },
      error: err => {
        this.responseModal('error', err?.error?.errors[0].errorMessageEn || err?.error?.errors[0].ErrorMessageEn || err?.info);
      }
    });
  }
  responseModal(type, message) {
    const ref = this._modalService.open(_shared_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_0__.MessageModalComponent);
    ref.componentInstance.type = type;
    ref.componentInstance.message = message;
  }
  toggleEdit() {
    this.formGroup.enable();
  }
  get f() {
    return this.formGroup;
  }
  initTableColumns() {
    this.tableColumns = [{
      key: 'reconcilationIds',
      label: 'Card ID'
    }, {
      key: 'comPercentage',
      label: 'Commission Percentage'
    }, {
      key: 'comAmount',
      label: 'Commission Amount'
    }, {
      key: 'amount',
      label: 'Amount'
    }, {
      key: 'netAmount',
      label: 'Net Amount'
    }];
  }
}
GroupReconciliationComponent.ɵfac = function GroupReconciliationComponent_Factory(t) {
  return new (t || GroupReconciliationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_1__.CreditCardService));
};
GroupReconciliationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: GroupReconciliationComponent,
  selectors: [["app-group-reconciliation"]],
  outputs: {
    eventData: "eventData"
  },
  decls: 59,
  vars: 25,
  consts: [[1, "modal-header", "align-items-center", "justify-content-between"], ["ngbAutoFocus", "", 1, "modal-title"], [1, "modal-body"], [3, "formGroup"], [1, "row", "mb-3"], [1, "col-4"], [1, "col-8"], ["placeholder", "Bank Account", "formControlName", "bankId", "bindLabel", "accountName", "bindValue", "accountId", 3, "items"], ["ng-option-tmp", ""], [3, "control", "errorMessages"], [1, "input-group"], ["type", "text", "formControlName", "date", "placeholder", "Select Date", "bsDatepicker", "", 1, "form-control", "custom-input-field", 3, "bsConfig"], ["drp", "bsDatepicker"], [1, "input-group-text", "cursor-pointer", 3, "click"], ["src", "/assets/images/calendar.png", "alt", "", 1, "calender"], [1, "fw-600"], ["type", "text", "decimalNumber", "", "placeholder", "Commission Amount", 1, "form-control", "height-47", 3, "change"], ["type", "text", "decimalNumber", "", "formControlName", "commission", "placeholder", "Commission Percentage", 1, "form-control", "height-47"], [1, "input-group-text"], [3, "config", "columns", "data"], [1, "modal-footer", "border-0"], ["type", "button", 1, "btn", "btn-add", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"]],
  template: function GroupReconciliationComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Reconciliation of selected cards");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "form", 3)(5, "div", 4)(6, "div", 5)(7, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Deposit Bank Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6)(10, "ng-select", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, GroupReconciliationComponent_ng_template_11_Template, 1, 1, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "validation-error", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 4)(14, "div", 5)(15, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Deposit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 6)(18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupReconciliationComponent_Template_span_click_21_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r1.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "validation-error", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 4)(25, "div", 5)(26, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Total Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 6)(29, "h6", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 4)(33, "div", 5)(34, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Commission Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 6)(37, "div", 10)(38, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function GroupReconciliationComponent_Template_input_change_38_listener($event) {
        return ctx.handleCommissionAmountChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "validation-error", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 4)(41, "div", 5)(42, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Commission Percentage");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 6)(45, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "validation-error", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "app-table-advanced", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 20)(53, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupReconciliationComponent_Template_button_click_53_listener() {
        return ctx.handleCheckRecon();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Check Reconciliation");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupReconciliationComponent_Template_button_click_55_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Group Reconciliation");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GroupReconciliationComponent_Template_button_click_57_listener() {
        return ctx._activeModal.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.bankAccountList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.f.get("bankId"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](20, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](21, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.f.get("date"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](22, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](31, 17, ctx.data == null ? null : ctx.data.totalAmount, "2.3-3"), " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.f.get("commission"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](23, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("control", ctx.f.get("commission"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](24, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.tableConfig)("columns", ctx.tableColumns)("data", ctx.reconList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgOptionTemplateDirective, _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_2__.TableAdvancedComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerInputDirective, _shared_directives_decimal_number_directive__WEBPACK_IMPORTED_MODULE_3__.DecimalNumberDirective, _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_4__.ValidationErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8224:
/*!***************************************************************************************!*\
  !*** ./src/app/credit-cards/create-reconciliation/create-reconciliation.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateReconciliationComponent": () => (/* binding */ CreateReconciliationComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _shared_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/modals/message-modal/message-modal.component */ 4280);
/* harmony import */ var _components_group_reconciliation_group_reconciliation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/group-reconciliation/group-reconciliation.component */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/credit-card.service */ 1265);
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/header.service */ 940);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/helper.service */ 1785);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _shared_directives_decimal_number_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/directives/decimal-number.directive */ 8648);
/* harmony import */ var _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/validation-error/validation-error.component */ 7711);


















const _c0 = ["myModal"];
const _c1 = ["myErrorModal"];
function CreateReconciliationComponent_tr_113_ng_container_25_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CreateReconciliationComponent_tr_113_ng_container_25_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Invalid amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CreateReconciliationComponent_tr_113_ng_container_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreateReconciliationComponent_tr_113_ng_container_25_ng_container_1_span_1_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CreateReconciliationComponent_tr_113_ng_container_25_ng_container_1_span_2_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r6 == null ? null : (tmp_0_0 = control_r6.get("comissionAmount")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r6 == null ? null : (tmp_1_0 = control_r6.get("comissionAmount")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["amountExceeded"]);
  }
}
function CreateReconciliationComponent_tr_113_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreateReconciliationComponent_tr_113_ng_container_25_ng_container_1_Template, 3, 2, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (control_r6 == null ? null : (tmp_0_0 = control_r6.get("comissionAmount")) == null ? null : tmp_0_0.invalid) && (control_r6 == null ? null : (tmp_0_0 = control_r6.get("comissionAmount")) == null ? null : tmp_0_0.touched) || (control_r6 == null ? null : (tmp_0_0 = control_r6.get("comissionAmount")) == null ? null : tmp_0_0.dirty));
  }
}
function CreateReconciliationComponent_tr_113_ng_container_28_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CreateReconciliationComponent_tr_113_ng_container_28_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Invalid amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CreateReconciliationComponent_tr_113_ng_container_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreateReconciliationComponent_tr_113_ng_container_28_ng_container_1_span_1_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CreateReconciliationComponent_tr_113_ng_container_28_ng_container_1_span_2_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r6 == null ? null : (tmp_0_0 = control_r6.get("netAmount")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r6 == null ? null : (tmp_1_0 = control_r6.get("netAmount")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["amountExceeded"]);
  }
}
function CreateReconciliationComponent_tr_113_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreateReconciliationComponent_tr_113_ng_container_28_ng_container_1_Template, 3, 2, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (control_r6 == null ? null : (tmp_0_0 = control_r6.get("netAmount")) == null ? null : tmp_0_0.invalid) && (control_r6 == null ? null : (tmp_0_0 = control_r6.get("netAmount")) == null ? null : tmp_0_0.touched) || (control_r6 == null ? null : (tmp_0_0 = control_r6.get("netAmount")) == null ? null : tmp_0_0.dirty));
  }
}
function CreateReconciliationComponent_tr_113_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const item_r23 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (item_r23 == null ? null : item_r23.accountName) + "-" + (item_r23 == null ? null : item_r23.bankNameEnglish) + "-" + (item_r23 == null ? null : item_r23.accountNumber), " ");
  }
}
function CreateReconciliationComponent_tr_113_ng_container_39_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CreateReconciliationComponent_tr_113_ng_container_39_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreateReconciliationComponent_tr_113_ng_container_39_ng_container_1_span_1_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r6 == null ? null : (tmp_0_0 = control_r6.get("depositDate")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function CreateReconciliationComponent_tr_113_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CreateReconciliationComponent_tr_113_ng_container_39_ng_container_1_Template, 2, 1, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (control_r6 == null ? null : (tmp_0_0 = control_r6.get("depositDate")) == null ? null : tmp_0_0.invalid) && (control_r6 == null ? null : (tmp_0_0 = control_r6.get("depositDate")) == null ? null : tmp_0_0.touched) || (control_r6 == null ? null : (tmp_0_0 = control_r6.get("depositDate")) == null ? null : tmp_0_0.dirty));
  }
}
const _c2 = function () {
  return {
    required: "Input is required"
  };
};
const _c3 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
function CreateReconciliationComponent_tr_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 44)(1, "td")(2, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CreateReconciliationComponent_tr_113_Template_input_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const index_r7 = restoredCtx.index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r28.handleChangeCheckBox($event, ctx_r28.reconciliation[index_r7], index_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "td")(24, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CreateReconciliationComponent_tr_113_Template_input_change_24_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const index_r7 = restoredCtx.index;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.handleCommissionAmountChange($event, index_r7, ctx_r30.reconciliation[index_r7]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, CreateReconciliationComponent_tr_113_ng_container_25_Template, 2, 1, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "td")(27, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CreateReconciliationComponent_tr_113_Template_input_change_27_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const index_r7 = restoredCtx.index;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r31.handleNetAmountChange($event, index_r7, ctx_r31.reconciliation[index_r7]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, CreateReconciliationComponent_tr_113_ng_container_28_Template, 2, 1, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "td")(30, "ng-select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, CreateReconciliationComponent_tr_113_ng_template_31_Template, 1, 1, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "validation-error", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "td")(34, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "input", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateReconciliationComponent_tr_113_Template_span_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](36);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r11.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, CreateReconciliationComponent_tr_113_ng_container_39_Template, 2, 1, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const control_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_11_0;
    let tmp_12_0;
    let tmp_17_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", index_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.reconciliation[index_r7] == null ? null : ctx_r1.reconciliation[index_r7].cardLast4Digits);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r1.reconciliation[index_r7] == null ? null : ctx_r1.reconciliation[index_r7].machineID) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.reconciliation[index_r7] == null ? null : ctx_r1.reconciliation[index_r7].provider == null ? null : ctx_r1.reconciliation[index_r7].provider.providerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.reconciliation[index_r7] == null ? null : ctx_r1.reconciliation[index_r7].orderCollectionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](13, 18, ctx_r1.reconciliation[index_r7] == null ? null : ctx_r1.reconciliation[index_r7].collectionAt, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.reconciliation[index_r7] == null ? null : ctx_r1.reconciliation[index_r7].branch == null ? null : ctx_r1.reconciliation[index_r7].branch.branchName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.reconciliation[index_r7] == null ? null : ctx_r1.reconciliation[index_r7].register == null ? null : ctx_r1.reconciliation[index_r7].register.registersName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.reconciliation[index_r7] == null ? null : ctx_r1.reconciliation[index_r7].cardType == null ? null : ctx_r1.reconciliation[index_r7].cardType.translations[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](22, 21, ctx_r1.reconciliation[index_r7] == null ? null : ctx_r1.reconciliation[index_r7].cardCollectionJod, "2.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", (ctx_r1.reconciliation[index_r7] == null ? null : ctx_r1.reconciliation[index_r7].isReturn) && "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r6 == null ? null : (tmp_11_0 = control_r6.get("comissionAmount")) == null ? null : tmp_11_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r6 == null ? null : (tmp_12_0 = control_r6.get("netAmount")) == null ? null : tmp_12_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx_r1.bankAccountList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", control_r6.get("bankaccountID"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](24, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](25, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r6 == null ? null : (tmp_17_0 = control_r6.get("depositDate")) == null ? null : tmp_17_0.errors);
  }
}
function CreateReconciliationComponent_ng_template_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Successfully posted!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Your reconciliation is created successfully");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
function CreateReconciliationComponent_ng_template_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h5", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Failed to create reconciliation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.erromessage);
  }
}
const _c4 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true,
    rangeInputFormat: "MM-DD-YYYY"
  };
};
class CreateReconciliationComponent {
  constructor(creditcardservice, headerService, modalService, router, modalConfig, fb, _datePipe, _helperService) {
    this.creditcardservice = creditcardservice;
    this.headerService = headerService;
    this.modalService = modalService;
    this.router = router;
    this.modalConfig = modalConfig;
    this.fb = fb;
    this._datePipe = _datePipe;
    this._helperService = _helperService;
    this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null);
    this.netAmount = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null);
    this.collectionDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null);
    this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.isvalid = true;
    this.isReturn = false;
    this.tableColumns = [];
    this.searchChequeNo = '';
    this.searchCustomerNo = '';
    this.loading = false;
    this.reconciliation = [];
    this.bankAccountList = [];
    this.branchList = [];
    this.totalAllRecordsCount = 0;
    this.page = 1;
    this.total = 0;
    this.limit = 6;
    this.sort = 1;
    this.startDate = '';
    this.tableConfig = {
      paging: true,
      filter: {
        Sort: 1,
        PageSize: this.limit
      }
    };
    this.selectedAmount = 0;
    this.filterParams = '';
    this.selecteddata = [];
    this.provider = [];
    this.cardlist = [];
    this.modalConfig.centered = true;
  }
  ngOnInit() {
    this.headerService.setTitle('Create Reconciliation');
    this.initFilterForm();
    this.getData();
    this.formGroup = this.fb.group({
      cardsArray: this.fb.array([])
    });
    this.fetcAllData();
    this.getBankAccountList();
  }
  getData() {
    const api1$ = this.creditcardservice.GetProviders({
      pageSize: 1000,
      status: 2001
    });
    const api2$ = this.creditcardservice.GetCards();
    const branch$ = this.creditcardservice.GetBranch({});
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)([api1$, api2$, branch$]).subscribe(([result1, result2, branch]) => {
      this.provider = result1.data;
      this.cardlist = result2.data;
      this.branchList = branch.data;
    }, error => {}, () => {
      this.loading = false;
    });
  }
  initFilterForm() {
    this.filterForm = this.fb.group({
      providerId: [null],
      collectionDate: [''],
      collectionDateFrom: [''],
      collectionDateTo: [''],
      cardTypeId: [null],
      netAmount: [''],
      last4digits: [''],
      machineID: [''],
      branchId: [null],
      status: [30001]
    });
    this.filterForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(500)).subscribe(data => {
      this.page = 1;
      let formValues = this._helperService.trim(data);
      if (formValues?.collectionDate) {
        formValues = {
          ...formValues,
          collectionDateFrom: this._datePipe.transform(formValues.collectionDate[0], 'yyyy-MM-dd'),
          collectionDateTo: this._datePipe.transform(formValues.collectionDate[1], 'yyyy-MM-dd')
        };
        delete formValues.collectionDate;
      }
      this.filterParams = new URLSearchParams(formValues).toString();
      this.fetcAllData();
    });
  }
  fetcAllData() {
    this.loading = true;
    let params = '';
    if (this.filterParams) params = `${this.filterParams}&pageSize=1000&pageNo=${this.page - 1}&sort=${this.sort}`;else params = `status=${30001}&pageSize=1000&pageNo=${this.page - 1}&sort=${this.sort}`;
    this.creditcardservice.GetReconHistory(params).subscribe(result => {
      if (result) {
        this.reconciliation = result.data || [];
        this.totalAllRecordsCount = result?.totalRecordCount;
        this.total = result?.totalRecordCount;
        this.cardsArray.clear();
        this.reconciliation = this.reconciliation.map((element, index) => {
          this.cardsArray.push(this.initFormGroup(element));
          return {
            ...element,
            checked: false
          };
        });
      }
    }).add(() => this.loading = false);
  }
  getBankAccountList() {
    this.creditcardservice.getBankAccounts(`pageSize=1000&status=2001&accountType=15010`).subscribe(response => {
      this.bankAccountList = response.data;
    });
  }
  get cardsArray() {
    return this.formGroup.get('cardsArray');
  }
  getNotReturnedCardTransactions() {
    let filtered = this.cardsArray.getRawValue().filter(value => value?.reconcilationIds > 0);
    if (filtered.length) this.isReturn = filtered.every(value => !value.isReturn);
  }
  groupReconciliation() {
    let cardIds = this.cardsArray.getRawValue().filter(value => value?.reconcilationIds > 0 && !value.isReturn);
    const modalRef = this.modalService.open(_components_group_reconciliation_group_reconciliation_component__WEBPACK_IMPORTED_MODULE_1__.GroupReconciliationComponent, {
      size: 'lg'
    });
    modalRef.componentInstance.data = {
      cardIds,
      totalAmount: this.selectedAmount
    };
    modalRef.componentInstance.eventData.subscribe(value => {
      //let comPercentage = value?.commissionPercentage;
      //this.cardsArray.controls.forEach((control: AbstractControl, index: number) => {
      //  let reconcilationId = control.get('reconcilationIds')?.value;
      //  if (reconcilationId) {
      //    let amount = +this.reconciliation[index].cardCollectionJod;
      //    let comAmount = +(amount * comPercentage / 100)
      //    control.get('comissionPercentage')?.setValue(comPercentage);
      //    control.get('comissionAmount')?.setValue(comAmount.toFixed(3));
      //    control.get('netAmount')?.setValue((amount - comAmount).toFixed(3));
      //  }
      //})
      this.selectedAmount = 0;
      this.isReturn = false;
      this.fetcAllData();
      modalRef.dismiss();
    });
  }
  initFormGroup(item) {
    const formGroup = this.fb.group({
      reconcilationIds: [null],
      //comissionPercentage: ['0'],
      comissionAmount: [''],
      netAmount: [null],
      bankaccountID: [null],
      depositDate: [new Date()],
      checked: [false],
      isReturn: [item?.isReturn],
      cardCollectionJod: [item?.cardCollectionJod] //Readonly
    });

    if (item && item.isReturn) {
      formGroup.get('comissionAmount')?.setValue('0');
      formGroup.get('comissionAmount')?.disable();
      formGroup.get('netAmount')?.setValue(item?.collectedAmount);
      formGroup.get('netAmount')?.disable();
    }
    return formGroup;
  }
  handleCommissionAmountChange(event, index, row) {
    let commissionAmount = event.target.value;
    if (commissionAmount) {
      let amount = row?.cardCollectionJod;
      if (commissionAmount > amount) {
        this.cardsArray.at(index).get('comissionAmount')?.setErrors({
          amountExceeded: true
        });
        return;
      }
      this.cardsArray.at(index).get('netAmount')?.setValue((amount - commissionAmount).toFixed(3));
    }
  }
  handleNetAmountChange(event, index, row) {
    let netAmount = event.target.value;
    if (netAmount) {
      let amount = row?.cardCollectionJod;
      if (netAmount > amount) {
        this.cardsArray.at(index).get('netAmount')?.setErrors({
          amountExceeded: true
        });
        return;
      }
      this.cardsArray.at(index).get('comissionAmount')?.setValue((amount - netAmount).toFixed(3));
    }
  }
  checkAll(event) {
    let checked = event.target.checked;
    this.selectedAmount = 0;
    this.reconciliation.forEach((x, index) => {
      if (checked) {
        this.cardsArray.at(index).get('checked')?.setValue(true);
        this.cardsArray.at(index).get('reconcilationIds')?.setValue(x?.ordersCardsCollectionId);
        this.setValidator('comissionAmount', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, index);
        this.setValidator('netAmount', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, index);
        this.setValidator('depositDate', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, index);
        this.setValidator('bankaccountID', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, index);
        this.selectedAmount += x.cardCollectionJod;
      } else {
        this.cardsArray.at(index).get('checked')?.setValue(false);
        this.cardsArray.at(index).get('reconcilationIds')?.setValue(null);
        this.setValidator('comissionAmount', null, index);
        this.setValidator('netAmount', null, index);
        this.setValidator('depositDate', null, index);
        this.setValidator('bankaccountID', null, index);
      }
    });
    this.getNotReturnedCardTransactions();
  }
  handleChangeCheckBox(event, item, index) {
    let checked = event.target.checked;
    if (checked) {
      this.cardsArray.at(index).get('reconcilationIds')?.setValue(item?.ordersCardsCollectionId);
      this.setValidator('comissionAmount', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, index);
      this.setValidator('netAmount', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, index);
      this.setValidator('bankaccountID', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, index);
      this.selectedAmount += item?.cardCollectionJod;
    } else {
      this.cardsArray.at(index).get('reconcilationIds')?.setValue(null);
      this.setValidator('comissionAmount', null, index);
      this.setValidator('netAmount', null, index);
      this.setValidator('depositDate', null, index);
      this.setValidator('bankaccountID', null, index);
      this.selectedAmount -= item?.cardCollectionJod;
    }
    this.getNotReturnedCardTransactions();
  }
  setValidator(controlName, validator, index) {
    const control = this.cardsArray.at(index).get(controlName);
    if (control && validator) {
      control.setValidators(validator);
      control.updateValueAndValidity();
    } else if (!validator) {
      control?.clearValidators();
      control?.updateValueAndValidity();
    }
  }
  onPostReconcilationIds() {
    let data = this.cardsArray.getRawValue().filter(x => x.checked).map(item => {
      return {
        reconcilationIds: item?.reconcilationIds,
        commission: item?.comissionAmount,
        cardCollectionJodNet: item?.netAmount,
        cardBankDepositDate: item?.depositDate,
        bankaccountID: item?.bankaccountID
      };
    });
    this.creditcardservice.ReconcilationIds(data).subscribe(result => {
      if (result.isSuccess) {
        this.responseModal('success', `Reconciliation successfully done.`);
        this.fetcAllData();
        this.selectedAmount = 0;
      }
    }, err => {
      this.responseModal('error', err?.error?.errors[0]?.ErrorMessageEn);
    }).add(() => this.loading = false);
  }
  responseModal(type, message) {
    const ref = this.modalService.open(_shared_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_0__.MessageModalComponent);
    ref.componentInstance.type = type;
    ref.componentInstance.message = message;
  }
  openmdel() {
    this.modalService.open(this.event, {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then(result => {
      this.closeResult = `Closed with: ${result}`;
    }, reason => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  openmdelerroe() {
    this.modalService.open(this.eventerror, {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then(result => {
      this.closeResult = `Closed with: ${result}`;
    }, reason => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  sortByCardLast4Digits() {
    if (this.sort == 3) this.sort = 1;else {
      this.sort = this.sort == 2 ? 3 : 2;
    }
    ;
    this.fetcAllData();
  }
  sortByProviderName() {
    if (this.sort == 5) this.sort = 1;else this.sort = this.sort == 4 ? 5 : 4;
    this.fetcAllData();
  }
  sortByOrderCollectionId() {
    if (this.sort == 7) this.sort = 1;else this.sort = this.sort == 6 ? 7 : 6;
    this.fetcAllData();
  }
  sortByCollectionAt() {
    if (this.sort == 9) this.sort = 1;else this.sort = this.sort == 8 ? 9 : 8;
    this.fetcAllData();
  }
  sortByBranchName() {
    if (this.sort == 11) this.sort = 1;else this.sort = this.sort == 10 ? 11 : 10;
    this.fetcAllData();
  }
  sortByRegisterName() {
    if (this.sort == 11) this.sort = 1;else this.sort = this.sort == 10 ? 11 : 10;
    this.fetcAllData();
  }
  sortByCardType() {
    if (this.sort == 13) this.sort = 1;else this.sort = this.sort == 12 ? 13 : 12;
    this.fetcAllData();
  }
  sortByCardCollectionJod() {
    if (this.sort == 15) this.sort = 1;else this.sort = this.sort == 14 ? 15 : 14;
    this.fetcAllData();
  }
  onPageChange(page) {
    this.page = page;
    this.fetcAllData();
  }
  modelClose(num) {
    if (num == 1) {
      this.modalService.dismissAll();
      this.router.navigate(['credit-card'], {
        queryParams: {
          num: 2
        }
      });
    } else {
      this.modalService.dismissAll();
    }
  }
  validateInput(event) {
    const enteredValue = event.target.value;
    const pattern = /^[0-9]*\.?[0-9]*$/; // Regex pattern to allow numbers and decimal point
    if (!pattern.test(enteredValue)) {
      event.target.value = enteredValue.replace(/[^0-9.]/g, ''); // Remove any invalid characters
    }
  }
}

CreateReconciliationComponent.ɵfac = function CreateReconciliationComponent_Factory(t) {
  return new (t || CreateReconciliationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_2__.CreditCardService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__.HelperService));
};
CreateReconciliationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CreateReconciliationComponent,
  selectors: [["app-create-reconciliation"]],
  viewQuery: function CreateReconciliationComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.event = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.eventerror = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe])],
  decls: 127,
  vars: 61,
  consts: [[3, "formGroup"], [1, "row"], [1, "col-3", "mb-3"], ["formControlName", "providerId", "placeholder", "Provider", "bindLabel", "providerName", "bindValue", "providerId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items"], [1, "input-group"], ["type", "text", "placeholder", "Collection Date", "formControlName", "collectionDate", "bsDaterangepicker", "", 1, "form-control", "custom-input-field", 3, "bsConfig"], ["toDate", "bsDaterangepicker"], [1, "input-group-text", "cursor-pointer", 3, "click"], ["src", "/assets/images/calendar.png", "alt", "", 1, "calender"], ["formControlName", "cardTypeId", "placeholder", "Search By Card", "bindLabel", "name.lookupName", "bindValue", "id", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items"], [1, "input-group-text"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Net Amount", "formControlName", "netAmount", 1, "form-control", "height-45"], ["type", "text", "placeholder", "Last 4 Digits", "formControlName", "last4digits", 1, "form-control", "height-45"], ["type", "text", "placeholder", "Merchant ID", "formControlName", "machineID", 1, "form-control", "height-45"], ["formControlName", "branchId", "placeholder", "Search By Branch", "bindLabel", "branchName", "bindValue", "branchId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items"], [1, "col-12", "mb-3", "d-flex", "justify-content-end"], [1, "btn", "btn-add", 3, "click"], [1, "row", "mt-2"], [1, "col-lg-12", "text-heading"], [1, "col-lg-6", "text-heading"], [1, "col-lg-5", "offset-1"], [1, "col-lg-9", "text-end", "text-heading"], [1, "col-lg-3", "text-end"], [1, "table-advanced", "custom-table", "mt-3"], [1, "table-wrapper", "table-responsive"], [1, "table"], ["scope", "col"], [1, "btn", "d-flex", "gap-2", "flex-column", "align-items-start", "justify-content-start", 3, "disabled"], ["type", "checkbox", 1, "form-check-input", "input-checkbox", 3, "change"], [1, "btn", 3, "disabled", "click"], [1, "fa-solid", "fa-arrow-up-long"], [1, "fa-solid", "fa-arrow-down-long"], [1, "btn", 3, "disabled"], ["scope", "col", "width", "15%"], ["formArrayName", "cardsArray"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "mt-3", "text-end"], ["routerLink", "/credit-card", 1, "btn", "btn-cancel", "me-2"], [1, "btn", "btn-add", "me-2", 3, "disabled", "click"], [1, "btn", "btn-add", 3, "disabled", "click"], ["class", "modal fade w-100 modal-dialog-centered", "id", "exampleModalToggle", "aria-hidden", "true", "aria-labelledby", "exampleModalToggleLabel", "tabindex", "-1"], ["myModal", ""], ["myErrorModal", ""], [3, "formGroupName"], ["type", "checkbox", "formControlName", "checked", 1, "form-check-input", "input-checkbox", 3, "change"], ["type", "text", "formControlName", "comissionAmount", "decimalNumber", "", 1, "form-control", 3, "ngClass", "change"], [4, "ngIf"], ["type", "text", "formControlName", "netAmount", "decimalNumber", "", 1, "form-control", 3, "change"], ["placeholder", "Bank Account", "formControlName", "bankaccountID", "bindLabel", "accountName", "bindValue", "accountId", 3, "items"], ["ng-option-tmp", ""], [3, "control", "errorMessages"], ["type", "text", "formControlName", "depositDate", "placeholder", "Select Date", "bsDatepicker", "", 1, "form-control", "custom-input-field", 3, "bsConfig"], ["drp", "bsDatepicker"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center"], ["src", "../../../assets/svg/check-one.svg", "alt", "", "srcset", "", 1, "mt-4"], [1, "mt-4"], [1, "mt-3", "mb-4"], ["src", "../../../assets/svg/close-circle.svg", "alt", "", "srcset", "", 1, "mt-2"]],
  template: function CreateReconciliationComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ng-select", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2)(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateReconciliationComponent_Template_span_click_8_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "ng-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 2)(13, "div", 4)(14, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 2)(18, "div", 4)(19, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 2)(23, "div", 4)(24, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "ng-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 16)(30, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateReconciliationComponent_Template_button_click_30_listener() {
        return ctx.filterForm.reset({
          status: "30001"
        });
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Clear Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 18)(33, "div", 19)(34, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 18)(38, "div", 20)(39, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Unreconciled Cards Transactions List");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 21)(42, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 23)(45, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 24)(48, "form", 0)(49, "div", 25)(50, "table", 26)(51, "thead")(52, "tr")(53, "th", 27)(54, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, " Select All ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CreateReconciliationComponent_Template_input_change_56_listener($event) {
        return ctx.checkAll($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "th", 27)(58, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateReconciliationComponent_Template_button_click_58_listener() {
        return ctx.sortByCardLast4Digits();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, " Last 4 Digit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "i", 31)(61, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "th", 27)(63, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Merchant ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "th", 27)(66, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateReconciliationComponent_Template_button_click_66_listener() {
        return ctx.sortByProviderName();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, " Provider ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "i", 31)(69, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "th", 27)(71, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateReconciliationComponent_Template_button_click_71_listener() {
        return ctx.sortByOrderCollectionId();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, " Invoice ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "i", 31)(74, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "th", 27)(76, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateReconciliationComponent_Template_button_click_76_listener() {
        return ctx.sortByCollectionAt();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, " Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](78, "i", 31)(79, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "th", 27)(81, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateReconciliationComponent_Template_button_click_81_listener() {
        return ctx.sortByBranchName();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82, " Branch Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](83, "i", 31)(84, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "th", 27)(86, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateReconciliationComponent_Template_button_click_86_listener() {
        return ctx.sortByRegisterName();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, " Register Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](88, "i", 31)(89, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "th", 27)(91, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateReconciliationComponent_Template_button_click_91_listener() {
        return ctx.sortByCardType();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, " Card Type ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](93, "i", 31)(94, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "th", 27)(96, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateReconciliationComponent_Template_button_click_96_listener() {
        return ctx.sortByCardCollectionJod();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, " Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "i", 31)(99, "i", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](100, "th", 27)(101, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102, " Commission Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "th", 27)(104, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105, " Net Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "th", 27)(107, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](108, "Bank Account Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "th", 34)(110, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](111, "Bank Deposit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](112, "tbody", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](113, CreateReconciliationComponent_tr_113_Template, 40, 26, "tr", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "div", 37)(115, "button", 38)(116, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateReconciliationComponent_Template_button_click_118_listener() {
        return ctx.groupReconciliation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](119, "Group Reconciliation");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreateReconciliationComponent_Template_button_click_120_listener() {
        return ctx.onPostReconcilationIds();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](121, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](122, "Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](123, CreateReconciliationComponent_ng_template_123_Template, 8, 0, "ng-template", 41, 42, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](125, CreateReconciliationComponent_ng_template_125_Template, 8, 1, "ng-template", 41, 43, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.filterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.provider);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](60, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.cardlist);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.branchList);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Selected Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](36, 57, ctx.selectedAmount, "1.3-3"), " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Total No. ", ctx.total, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.reconciliation.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.reconciliation.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.reconciliation.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.reconciliation.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.reconciliation.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.reconciliation.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.reconciliation.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.reconciliation.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.reconciliation.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.reconciliation.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx.sort == 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.reconciliation.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.reconciliation.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.reconciliation.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.reconciliation.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.cardsArray.controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isReturn);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.formGroup.invalid || ctx.selectedAmount == 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgOptionTemplateDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__.BsDatepickerInputDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_16__.BsDaterangepickerInputDirective, _shared_directives_decimal_number_directive__WEBPACK_IMPORTED_MODULE_5__.DecimalNumberDirective, _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_6__.ValidationErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
  styles: [".applyMargin[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n\n.total[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 15px 0 0px;\n  padding: 10px 0px;\n}\n.total[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  color: #929eae;\n  margin: 0px;\n  padding: 10px 0px;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  border: 0.5px solid #f4f4f4;\n  box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -webkit-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n}\n\n.btn-provide[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 8px 14px 8px 14px;\n  border-radius: 4px;\n  font-size: 12px;\n  width: 80px;\n}\n\n.btn-disabled[_ngcontent-%COMP%] {\n  background-color: #c5c6c7;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 8px 14px 8px 14px;\n  border-radius: 4px;\n  font-size: 12px;\n  width: 80px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 8px;\n}\n\n.play-left[_ngcontent-%COMP%] {\n  color: #eceaea;\n  transform: rotate(180deg);\n  margin-right: 5px;\n}\n\n.play-right[_ngcontent-%COMP%] {\n  color: #eceaea;\n}\n\n.dropdownBox[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 150px;\n  height: 48px;\n  background: #4e9aff;\n  border-radius: 8px;\n}\n\n.headButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95px;\n  height: 34.2px;\n  border-radius: 8px;\n}\n\n.headButtonText[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.menu[_ngcontent-%COMP%] {\n  width: 180px;\n  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1));\n}\n\n.menu2[_ngcontent-%COMP%] {\n  width: 235px;\n  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1));\n}\n\n.more-filter-drop[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 150px;\n  background: #4e9aff;\n  border-radius: 8px;\n  color: white;\n  outline: none;\n  border: none;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 12px 12px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.checkBox[_ngcontent-%COMP%] {\n  accent-color: #dc3545;\n  width: 20px;\n  height: 20px;\n}\n\n.dropdownFilters[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #dc3545;\n}\n\n.filterFlex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.btn-edit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\np[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  color: #929eae;\n  margin: 0px;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  background-color: #F8F8F8;\n  border-radius: 8px;\n  color: red;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  border: 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3JlZGl0LWNhcmRzL2NyZWF0ZS1yZWNvbmNpbGlhdGlvbi9jcmVhdGUtcmVjb25jaWxpYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNOO0FBQ0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDTjs7QUFFRTtFQUNFLDJCQUFBO0VBQ0EsZ0RBQUE7RUFDQSx3REFBQTtFQUNBLHFEQUFBO0FBQ0o7O0FBQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHSjs7QUFERTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUlKOztBQUZFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIRTtFQUNFLGNBQUE7QUFNSjs7QUFIRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBRkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7QUFJSjs7QUFGRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEU7RUFDRSxZQUFBO0VBQ0EscURBQUE7QUFNSjs7QUFIRTtFQUNFLFlBQUE7RUFFQSxxREFBQTtBQUtKOztBQUZFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBS0o7O0FBRkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSEU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0FBTUo7O0FBSEU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBTUo7O0FBRkk7RUFDRSxXQUFBO0FBS047O0FBRkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBS0o7O0FBSEU7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBS047O0FBRkU7RUFDRSxXQUFBO0FBS0oiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwbHlNYXJnaW4ge1xyXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG4gIH1cclxuICAudG90YWwge1xyXG4gICAgaDQge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1hcmdpbjogMTVweCAwIDBweDtcclxuICAgICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgY29sb3I6ICM5MjllYWU7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNhcmQtdGFibGUge1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZjRmNGY0O1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDdweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggN3B4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDNweCA3cHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcclxuICB9XHJcbiAgLmJ0bi1wcm92aWRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogOHB4IDE0cHggOHB4IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICB9XHJcbiAgLmJ0bi1kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjNmM3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDhweCAxNHB4IDhweCAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgfVxyXG4gIC5wYWdpbmF0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICB9XHJcbiAgLnBsYXktbGVmdCB7XHJcbiAgICBjb2xvcjogI2VjZWFlYTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLnBsYXktcmlnaHQge1xyXG4gICAgY29sb3I6ICNlY2VhZWE7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bkJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kOiAjNGU5YWZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZEJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDk1cHg7XHJcbiAgICBoZWlnaHQ6IDM0LjJweDtcclxuICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbiAgLmhlYWRCdXR0b25UZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBLdW1iaCBTYW5zO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5tZW51IHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xyXG4gIH1cclxuICBcclxuICAubWVudTIge1xyXG4gICAgd2lkdGg6IDIzNXB4O1xyXG4gIFxyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb3JlLWZpbHRlci1kcm9wIHtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM0ZTlhZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24taXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDEycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNoZWNrQm94IHtcclxuICAgIGFjY2VudC1jb2xvcjogI2RjMzU0NTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd25GaWx0ZXJzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGMzNTQ1O1xyXG4gIH1cclxuICBcclxuICAuZmlsdGVyRmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuIFxyXG4gIC5idG4tZWRpdCB7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBjb2xvcjogIzkyOWVhZTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuICAuYnRuLWNhbmNlbHtcclxuICAgXHJcbiAgICAgIHBhZGRpbmc6IDEycHggMjRweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gIFxyXG4gIH1cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7879:
/*!*****************************************************************************!*\
  !*** ./src/app/credit-cards/credit-card-list/credit-card-list.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditCardListComponent": () => (/* binding */ CreditCardListComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Momen_alShouha_Desktop_Projects_DX_FE_Treasury_DX_FE_Treasury_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/excel.service */ 8219);
/* harmony import */ var src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/credit-card.service */ 1265);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/header.service */ 940);
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/helper.service */ 1785);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/table-advanced/table-advanced.component */ 9973);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/table-advanced/table-advanced.directives */ 5746);
















function CreditCardListComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 68)(1, "div", 69)(2, "div", 2)(3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 72)(6, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", item_r23.provider.imageFile, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Total No . ", item_r23.cardsCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](11, 3, item_r23.total, "1.3-3"), " JOD");
  }
}
function CreditCardListComponent_i_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_i_27_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r24.removeCollectionDateFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CreditCardListComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "div", 7)(2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_div_91_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.removeInvoiceFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx_r3.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r3.searchText.value == null);
  }
}
function CreditCardListComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "div", 7)(2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function CreditCardListComponent_div_92_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r28.inputvalue($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_div_92_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.removeCommissionFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx_r4.CommissionRatiochange);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r4.CommissionRatiochange.value == null);
  }
}
function CreditCardListComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "div", 7)(2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function CreditCardListComponent_div_93_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r31.validateInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_div_93_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r33.removeAmountFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx_r5.amountchange);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r5.amountchange.value == null);
  }
}
function CreditCardListComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "div", 7)(2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function CreditCardListComponent_div_94_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.validateNumberInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_div_94_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r36.removeSectionFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx_r6.SessionNumberchange);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r6.SessionNumberchange.value == null);
  }
}
function CreditCardListComponent_div_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "div", 7)(2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function CreditCardListComponent_div_95_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r37.validateInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_div_95_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r39.removeNetAmountFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx_r7.netamountchange);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r7.netamountchange.value == null);
  }
}
function CreditCardListComponent_div_96_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CreditCardListComponent_div_96_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r43 + ",", " ");
  }
}
function CreditCardListComponent_div_96_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 29)(1, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CreditCardListComponent_div_96_a_9_Template_input_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);
      const item_r44 = restoredCtx.$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r46.handleCategoryChange3(item_r44, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r44.branchId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u00A0 ", item_r44 == null ? null : item_r44.branchName, " ");
  }
}
function CreditCardListComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Branch : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CreditCardListComponent_div_96_span_3_Template, 2, 0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CreditCardListComponent_div_96_div_4_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_div_96_Template_i_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r48.removebranchFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ul", 85)(8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, CreditCardListComponent_div_96_a_9_Template, 3, 2, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.newDropdownbranch.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r8.newDropdownbranch);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r8.branch);
  }
}
function CreditCardListComponent_div_97_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CreditCardListComponent_div_97_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r53 + ",", " ");
  }
}
function CreditCardListComponent_div_97_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 29)(1, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CreditCardListComponent_div_97_a_9_Template_input_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r57);
      const item_r54 = restoredCtx.$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r56.handleCategoryChange4(item_r54, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", item_r54.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u00A0 ", item_r54 == null ? null : item_r54.registersName, " ");
  }
}
function CreditCardListComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Register : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CreditCardListComponent_div_97_span_3_Template, 2, 0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CreditCardListComponent_div_97_div_4_Template, 2, 1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_div_97_Template_i_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r58.removeregisterFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ul", 90)(8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, CreditCardListComponent_div_97_a_9_Template, 3, 2, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.newDropdownregister.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r9.newDropdownregister);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r9.register);
  }
}
function CreditCardListComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "div", 7)(2, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_div_98_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r60.removeMachineIdFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx_r10.machineId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r10.machineId.value == null);
  }
}
function CreditCardListComponent_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r62 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r62.provider == null ? null : row_r62.provider.providerName, " ");
  }
}
function CreditCardListComponent_ng_template_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const row_r63 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 1, row_r63 == null ? null : row_r63.collectionAt), " ");
  }
}
function CreditCardListComponent_ng_template_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r64 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r64.branch == null ? null : row_r64.branch.branchName, " ");
  }
}
function CreditCardListComponent_ng_template_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r65 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r65.register == null ? null : row_r65.register.registersName, " ");
  }
}
function CreditCardListComponent_ng_template_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 94)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r66 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r66 == null ? null : row_r66.cardType == null ? null : row_r66.cardType.translations[0] == null ? null : row_r66.cardType.translations[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", row_r66.cardType == null ? null : row_r66.cardType.lookupImage, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function CreditCardListComponent_ng_template_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r67 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 1, row_r67 == null ? null : row_r67.cardCollectionJod, "1.3-3"), " JOD ");
  }
}
function CreditCardListComponent_ng_template_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r68 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (row_r68 == null ? null : row_r68.commissionAmount) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 1, row_r68 == null ? null : row_r68.commissionAmount, "2.3-3") + " JOD" || "-", " ");
  }
}
function CreditCardListComponent_ng_template_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r69 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (row_r69 == null ? null : row_r69.statusObj == null ? null : row_r69.statusObj.lookupId) == 30001 && "-" || (row_r69 == null ? null : row_r69.commissionRatio) + " %" || 0, " ");
  }
}
function CreditCardListComponent_ng_template_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r70 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (row_r70 == null ? null : row_r70.statusObj == null ? null : row_r70.statusObj.lookupId) == 30001 && "-" || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 1, row_r70 == null ? null : row_r70.cardCollectionJodNet, "1.3-3") + " JOD", " ");
  }
}
function CreditCardListComponent_ng_template_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const row_r71 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](1, 1, row_r71 == null ? null : row_r71.cardBankDepositDate, "mediumDate") || "-", " ");
  }
}
function CreditCardListComponent_ng_template_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r72 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", row_r72 == null ? null : row_r72.statusObj == null ? null : row_r72.statusObj.lookupTextColor)("background-color", row_r72 == null ? null : row_r72.statusObj == null ? null : row_r72.statusObj.lookupBGColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r72 == null ? null : row_r72.statusObj == null ? null : row_r72.statusObj.translations == null ? null : row_r72.statusObj.translations[0].lookupName, " ");
  }
}
function CreditCardListComponent_ng_template_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_ng_template_122_Template_i_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r75);
      const row_r73 = restoredCtx.row;
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r74.gotopaymentdetails(row_r73.ordersCardsCollectionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
class CreditCardListComponent {
  constructor(_excelService, creditcardservice, router, headerService, _helperService) {
    this._excelService = _excelService;
    this.creditcardservice = creditcardservice;
    this.router = router;
    this.headerService = headerService;
    this._helperService = _helperService;
    // Form controls for search inputs
    this.searchChequeText = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null);
    this.machineId = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null);
    this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null);
    this.amountchange = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null);
    this.SessionNumberchange = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null);
    this.netamountchange = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(null);
    this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.CommissionRatiochange = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(0);
    this.tableColumns = [];
    this.searchChequeNo = '';
    this.searchCustomerNo = '';
    this.loading = false;
    this.chequeList = [];
    this.dropDownbankId = [];
    this.cardlist = [];
    this.branch = [];
    this.register = [];
    this.carddetial = [];
    this.totalAllRecordsCount = 0;
    this.page = 1;
    this.total = 0;
    this.limit = 6;
    this.sort = 1;
    this.startDate = '';
    this.tableConfig = {
      paging: true,
      filter: {
        Sort: 1,
        PageSize: this.limit
      }
    };
    this.isMachineId = false;
    this.newDropdownbank = [];
    this.bank = false;
    this.dueDate = false;
    this.RegisterName = false;
    this.BranchName = false;
    this.NetAmount = false;
    this.Amount = false;
    this.SessionNumber = false;
    this.Commission = false;
    this.Invoice = false;
    this.newDropdownbranch = [];
    this.dropDownbranchId = [];
    this.newDropdownregister = [];
    this.dropDownregisterId = [];
  }
  ngOnInit() {
    // Set the page title
    this.headerService.setTitle('Credit Cards Payments ');
    // Initialize table columns
    this.initTableColumns();
    // Fetch data from APIs
    this.getdata();
    this.gettable();
    // Subscribe to form control value changes for search inputs
    this.searchChequeText.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe)).subscribe(value => {
      // Update the Last4digits filter and refresh the table
      const text = value || '';
      if (text?.length >= 3 || !text?.length && this.tableConfig.filter.Last4digits?.length) {
        this.tableConfig.filter.Last4digits = text;
        this.page = 1;
        this.gettable();
      }
    });
    this.machineId.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe)).subscribe(value => {
      // Update the Last4digits filter and refresh the table
      const text = value || '';
      if (text?.length >= 3 || !text?.length && this.tableConfig.filter.machineId?.length) {
        this.tableConfig.filter.machineId = text;
        this.page = 1;
        this.gettable();
      }
    });
    this.searchText.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe)).subscribe(value => {
      // Update the MachineReceipt filter and refresh the table
      const text = value || '';
      if (text?.length >= 3 || !text?.length && this.tableConfig.filter.MachineReceipt?.length) {
        this.tableConfig.filter.MachineReceipt = text;
        this.page = 1;
        this.gettable();
      }
    });
    this.amountchange.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe)).subscribe(value => {
      // Update the Amount filter and refresh the table
      const text = value || '';
      if (text?.length >= 0 || !text?.length && this.tableConfig.filter.Amount?.length) {
        this.tableConfig.filter.Amount = text;
        this.page = 1;
        this.gettable();
      }
    });
    this.SessionNumberchange.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe)).subscribe(value => {
      // Update the Amount filter and refresh the table
      const text = value || '';
      if (text?.length >= 0 || !text?.length && this.tableConfig.filter.SessionNumber?.length) {
        let checktext = parseFloat(text);
        if (!isNaN(checktext)) this.tableConfig.filter.RegisterSessionId = checktext;
        this.page = 1;
        this.gettable();
      }
    });
    this.netamountchange.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.unsubscribe)).subscribe(value => {
      // Update the NetAmount filter and refresh the table
      const text = value || '';
      if (text?.length >= 0 || !text?.length && this.tableConfig.filter.NetAmount?.length) {
        this.tableConfig.filter.NetAmount = text;
        this.page = 1;
        this.gettable();
      }
    });
  }
  ngOnDestroy() {
    // Unsubscribe from subscriptions to avoid memory leaks
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  getCardsForExport() {
    this.loading = true;
    this.tableConfig.filter.PageNo = this.page - 1;
    this.tableConfig.filter.PageSize = 10000;
    this.creditcardservice.GetTable(this.tableConfig.filter).subscribe(result => {
      if (result) {
        this.generateExcelExport(result.data);
        this.tableConfig.filter.PageSize = this.limit;
      }
    }).add(() => this.loading = false);
  }
  generateExcelExport(data) {
    var _this = this;
    return (0,C_Users_Momen_alShouha_Desktop_Projects_DX_FE_Treasury_DX_FE_Treasury_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      data = data.map(x => {
        return {
          ...x,
          collectionAt: _this._helperService.dateFormate(x?.collectionAt),
          cardBankDepositDate: _this._helperService.dateFormate(x?.cardBankDepositDate)
        };
      });
      const exportOptions = {
        fileName: 'Card_Transactions',
        mainHeading: '',
        sections: [{
          heading: [],
          headerStyle: {
            bold: true,
            size: 12,
            color: {
              argb: 'ff000000'
            },
            fgColor: {
              argb: 'ffe7e6e6'
            }
          },
          headers: ['Last 4 Digit', 'Provider', 'Merchant ID', 'Machine Receipt Number', 'Collection Date', 'Branch Name', 'Ragister Name', 'Card Type', 'Amount', 'Commission Ratio', 'Commission Amount', 'Net Amount', 'Bank Deposit Date', 'Session Number', 'Status'],
          mainKeyMapping: ['cardLast4Digits', 'provider.providerName', 'machineID', 'machineReceiptNumber', 'collectionAt', 'branch.branchName', 'register.registersName', 'cardType.translations[0].lookupName', 'cardCollectionJod', 'commissionRatio', 'commissionAmount', 'cardCollectionJodNet', 'cardBankDepositDate', 'registerSessionId', 'statusObj.translations[0].lookupName'],
          data: data
        }]
      };
      const result = yield _this._excelService.exportToExcelJs1(exportOptions);
    })();
  }
  // Initialize table columns
  initTableColumns() {
    this.tableColumns = [
    // Define columns with their keys and labels
    {
      key: 'cardLast4Digits',
      label: 'Last 4 Digit',
      canSort: true
    }, {
      key: 'provider',
      label: 'Provider',
      canSort: true
    }, {
      key: 'machineID',
      label: 'Merchant ID'
    }, {
      key: 'machineReceiptNumber',
      label: 'Machine Receipt Number',
      canSort: true
    }, {
      key: 'collectionAt',
      label: 'Collection Date',
      canSort: true
    }, {
      key: 'branch',
      label: 'Branch Name',
      canSort: true
    }, {
      key: 'registers',
      label: 'Ragister Name',
      canSort: true
    }, {
      key: 'cardType',
      label: 'Card Type',
      canSort: true
    }, {
      key: 'cardCollectionJod',
      label: 'Amount',
      canSort: true
    }, {
      key: 'commissionRatio',
      label: 'Commission Ratio',
      canSort: true
    }, {
      key: 'commissionAmount',
      label: 'Commission Amount'
    }, {
      key: 'cardCollectionJodNet',
      label: 'Net Amount',
      canSort: true
    }, {
      key: 'cardBankDepositDate',
      label: 'Bank Deposit Date'
    }, {
      key: 'registerSessionId',
      label: 'Session Number',
      canSort: true
    }, {
      key: 'statusObj',
      label: 'Status',
      canSort: true
    }, {
      key: 'Action',
      label: 'Action',
      canSort: true
    }];
  }
  // Handle table sort change
  onSortChange(sort) {
    if (sort?.direction && sort?.column) {
      // Map the sort column to the corresponding filter property
      switch (sort.column) {
        case 'cardLast4Digits':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 3 : 2;
          break;
        case 'provider':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 5 : 4;
          break;
        case 'machineReceiptNumber':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 7 : 6;
          break;
        case 'collectionAt':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 9 : 8;
          break;
        case 'branch':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 11 : 10;
          break;
        case 'registers':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 13 : 12;
          break;
        case 'cardType':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 15 : 14;
          break;
        case 'cardCollectionJod':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 17 : 16;
          break;
        case 'commission':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 19 : 18;
          break;
        case 'cardCollectionJodNet':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 21 : 20;
          break;
        case 'registerSessionId':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 23 : 22;
          break;
        case 'statusObj':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 25 : 24;
          break;
        case 'Action':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 27 : 26;
          break;
        default:
          break;
      }
    } else {
      this.tableConfig.filter.Sort = 1;
    }
    this.gettable();
  }
  // Fetch necessary data from APIs
  getdata() {
    const api1$ = this.creditcardservice.GetProviders({
      pageSize: 1000,
      status: 2001
    });
    const api2$ = this.creditcardservice.GetCards();
    const api3$ = this.creditcardservice.GetBranch(this.tableConfig.filter);
    const api4$ = this.creditcardservice.GetRegister(this.tableConfig.filter);
    const api5$ = this.creditcardservice.Getcard();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.forkJoin)([api1$, api2$, api3$, api4$, api5$]).subscribe(([result1, result2, result3, result4, result5]) => {
      // Store the fetched data in respective variables
      if (result1) {
        this.provider = result1.data || [];
      }
      if (result2) {
        this.cardlist = result2.data || [];
      }
      if (result3) {
        this.branch = result3.data || [];
      }
      if (result4) {
        this.register = result4.data || [];
      }
      if (result5) {
        this.carddetial = result5.data || [];
      }
    }, error => {
      console.error(error);
    }, () => {
      this.loading = false;
    });
  }
  // Fetch table data
  gettable() {
    this.loading = true;
    this.tableConfig.filter.PageNo = this.page - 1;
    this.creditcardservice.GetTable(this.tableConfig.filter).subscribe(result => {
      if (result) {
        this.chequeList = result.data;
        this.totalAllRecordsCount = result.totalRecordCount;
        this.total = result.totalRecordCount;
      }
    }).add(() => this.loading = false);
  }
  // Handle table sort change
  onPageChange(page) {
    console.log(page);
    this.page = page;
    this.gettable();
  }
  removelast4Filter() {
    this.searchChequeText.setValue(null);
    this.tableConfig.filter.Last4digits = '';
    this.page = 1;
    this.gettable();
  }
  removebankFilter() {
    this.newDropdownbank = [];
    this.dropDownbankId = [];
    this.bank = false;
    this.page = 1;
    this.gettable();
  }
  removeInvoiceFilter() {
    this.searchText.setValue(null);
    this.tableConfig.filter.MachineReceipt = '';
    this.page = 1;
    this.gettable();
  }
  removeCommissionFilter() {
    this.Commission = false;
    this.CommissionRatiochange.setValue(0);
    this.tableConfig.filter.Commission = '';
    this.page = 1;
    this.gettable();
  }
  removeAmountFilter() {
    this.amountchange.setValue(null);
    this.tableConfig.filter.Amount = '';
    this.page = 1;
    this.gettable();
  }
  removeMachineIdFilter() {
    this.machineId.setValue(null);
    this.tableConfig.filter.machineId = '';
    this.page = 1;
    this.gettable();
  }
  removeSectionFilter() {
    this.SessionNumberchange.setValue(null);
    this.tableConfig.filter.RegisterSessionId = '';
    this.page = 1;
    this.gettable();
  }
  removeNetAmountFilter() {
    this.netamountchange.setValue(null);
    this.tableConfig.filter.NetAmount = '';
    this.page = 1;
    this.gettable();
  }
  removeBranchNameFilter() {
    this.BranchName = false;
    this.branch = '';
    this.page = 1;
    this.gettable();
  }
  removeRegisterNameFilter() {
    this.RegisterName = false;
    this.page = 1;
    this.gettable();
  }
  filterRegisterName(event) {
    this.RegisterName = event.checked;
    if (!this.RegisterName) {
      this.RegisterName = false;
      delete this.tableConfig.filter.RegisterId;
      this.page = 1;
      this.gettable();
    }
  }
  filterMachineId(event) {
    this.isMachineId = event.checked;
    if (!this.isMachineId) {
      delete this.tableConfig.filter.machineId;
      this.page = 1;
      this.gettable();
    }
  }
  filterBranchName(event) {
    this.BranchName = event.checked;
    if (!this.BranchName) {
      this.BranchName = false;
      delete this.tableConfig.filter.BranchId;
      this.page = 1;
      this.gettable();
    }
  }
  filterNetAmount(event) {
    this.NetAmount = event.checked;
    if (!this.NetAmount) {
      this.NetAmount = false;
      this.netamountchange.setValue(null);
      this.tableConfig.filter.netamountchange = '';
      this.page = 1;
      this.gettable();
    }
  }
  filterAmount(event) {
    this.Amount = event.checked;
    if (!this.Amount) {
      this.Amount = false;
      this.amountchange.setValue(null);
      this.tableConfig.filter.amountchange = '';
      this.page = 1;
      this.gettable();
    }
  }
  filterSessionNumber(event) {
    this.SessionNumber = event.checked;
    if (!this.SessionNumber) {
      this.SessionNumber = false;
      this.SessionNumberchange.setValue(null);
      this.tableConfig.filter.RegisterSessionId = '';
      this.page = 1;
      this.gettable();
    }
  }
  filterCommission(event) {
    this.Commission = event.checked;
    if (!this.Commission) {
      this.Commission = false;
      this.CommissionRatiochange.setValue(null);
      this.tableConfig.filter.Commission = '';
      this.page = 1;
      this.gettable();
    }
  }
  filterInvoice(event) {
    this.Invoice = event.checked;
    if (!this.Invoice) {
      this.Invoice = false;
      this.searchText.setValue(null);
      this.tableConfig.filter.searchText = '';
      this.page = 1;
      this.gettable();
    }
  }
  onDateValueChange(event) {
    var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe('en-US');
    this.startDate = pipe.transform(event) || '';
    console.log(this.startDate);
    if (this.startDate) {
      const fromDate = new Date(this.startDate);
      fromDate.setDate(fromDate.getDate() + 1); // Adding one day
      const formattedFromDate = fromDate.toISOString();
      this.tableConfig.filter.CollectionDate = formattedFromDate;
    } else this.tableConfig.filter.CollectionDate = this.startDate;
    this.page = 1;
    this.gettable();
  }
  removeCollectionDateFilter() {
    delete this.tableConfig.filter.CollectionDate;
    this.page = 1;
    this.datepickerInput = null;
    this.gettable();
  }
  handleCategoryChange(event) {
    console.log('bhushan ==>', event.providerId);
    this.tableConfig.filter.providerId = event.providerId;
    this.page = 1;
    // this.statusId = event?.id;
    this.gettable();
  }
  handleCategoryChange2(event) {
    this.tableConfig.filter.CardTypeId = event.id;
    this.page = 1;
    // this.statusId = event?.id;
    this.gettable();
  }
  handleCategoryChange3(item, event) {
    const obj4 = item.branchName;
    const branchId = item.branchId;
    if (event.target.checked) {
      // checking if the checkbox has been checked
      this.newDropdownbranch.push(obj4); // pushing object to newArray[]
      this.dropDownbranchId.push(branchId); // pushing object to newArray[]
    } else {
      this.newDropdownbranch = this.newDropdownbranch.filter(v => v !== obj4); // if the checkbox has been unchecked removing the object from the array
      this.dropDownbranchId = this.dropDownbranchId.filter(x => x !== branchId);
    }
    this.tableConfig.filter.BranchId = this.dropDownbranchId;
    this.page = 1;
    // this.statusId = event?.id;
    this.gettable();
  }
  removebranchFilter() {
    this.newDropdownbranch = [];
    this.dropDownbranchId = [];
    this.tableConfig.filter.BranchId = [];
    this.BranchName = false;
    this.page = 1;
    this.gettable();
  }
  handleCategoryChange4(item, event) {
    const obj4 = item.registersName;
    const id = item.id;
    if (event.target.checked) {
      // checking if the checkbox has been checked
      this.newDropdownregister.push(obj4); // pushing object to newArray[]
      this.dropDownregisterId.push(id); // pushing object to newArray[]
    } else {
      this.newDropdownregister = this.newDropdownregister.filter(v => v !== obj4); // if the checkbox has been unchecked removing the object from the array
      this.dropDownregisterId = this.dropDownregisterId.filter(x => x !== id);
    }
    this.tableConfig.filter.RegisterId = this.dropDownregisterId;
    this.page = 1;
    // this.statusId = event?.id;
    this.gettable();
  }
  removeregisterFilter() {
    this.newDropdownregister = [];
    this.dropDownregisterId = [];
    this.tableConfig.filter.RegisterId = [];
    this.RegisterName = false;
    this.page = 1;
    this.gettable();
  }
  onClear() {
    delete this.tableConfig.filter.BranchId;
    this.page = 1;
    this.gettable();
  }
  onClearR() {
    delete this.tableConfig.filter.RegisterId;
    this.page = 1;
    this.gettable();
  }
  onClearcard() {
    delete this.tableConfig.filter.CardTypeId;
    this.page = 1;
    this.gettable();
  }
  IsPDCFilter(value) {
    this.tableConfig.filter.Status = value;
    // this.statusId = event?.id;
    this.page = 1;
    this.gettable();
  }
  // Navigate to payment details page
  gotopaymentdetails(value) {
    this.router.navigate(['credit-card/payment-details'], {
      queryParams: {
        ordersCardsCollectionId: value
      }
    });
  }
  onClearprovider() {
    delete this.tableConfig.filter.providerId;
    this.page = 1;
    this.gettable();
  }
  inputvalue(value) {
    let checkPoint = false;
    const inputValue = value?.target?.value;
    if (inputValue && inputValue.includes('.')) {
      const parts = inputValue.split('.');
      if (parts.length === 2 && parts[1].length > 0) {
        if (inputValue === '0.0') checkPoint = true;else if (inputValue === '0.00') checkPoint = true;else checkPoint = false;
      } else if (parts.length === 2 && parts[1].length === 0) {
        checkPoint = true;
      } else {
        checkPoint = false;
      }
    }
    if (!checkPoint && parseFloat(inputValue) > 0) {
      this.tableConfig.filter.Commission = parseFloat(inputValue).toFixed(3);
      this.CommissionRatiochange.patchValue(parseFloat(parseFloat(inputValue).toFixed(3)));
      this.page = 1;
      this.sort = 1;
      this.gettable();
    } else if (inputValue.includes('-')) {
      this.CommissionRatiochange.patchValue(0);
    } else if (isNaN(parseFloat(inputValue))) {
      this.CommissionRatiochange.patchValue(0);
    } else if (parseFloat(inputValue) == 0 && !checkPoint) {
      this.CommissionRatiochange.patchValue(0);
    }
  }
  validateInput(event) {
    const enteredValue = event.target.value;
    const pattern = /^[0-9]*\.?[0-9]*$/; // Regex pattern to allow numbers and decimal point
    if (!pattern.test(enteredValue)) {
      event.target.value = enteredValue.replace(/[^0-9.]/g, ''); // Remove any invalid characters
    }
  }

  validateNumberInput(event) {
    const enteredValue = event.target.value;
    const pattern = /^[1-9]\d*$/; // Regex pattern to allow positive integers
    if (!pattern.test(enteredValue)) {
      event.target.value = enteredValue.replace(/[^1-9]/g, ''); // Remove any invalid characters
    }
  }

  validateCommissionInput(event) {
    const enteredValue = event.target.value;
    const pattern = /^[1-9]\d*$/; // Regex pattern to allow positive integers
    if (!pattern.test(enteredValue)) {
      event.target.value = enteredValue.replace(/[^1-9]/g, ''); // Remove any invalid characters
    } else {
      // Check if the value is greater than 100, and if so, set it to 100
      const numericValue = parseInt(enteredValue, 10);
      if (numericValue > 100) {
        event.target.value = '100';
      }
    }
  }
}
CreditCardListComponent.ɵfac = function CreditCardListComponent_Factory(t) {
  return new (t || CreditCardListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_1__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_2__.CreditCardService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_3__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__.HelperService));
};
CreditCardListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CreditCardListComponent,
  selectors: [["app-credit-card-list"]],
  decls: 123,
  vars: 34,
  consts: [[1, "card-wrapper"], [1, "notes-wrapper", "row"], [1, "row"], ["class", "col-lg-3", 4, "ngFor", "ngForOf"], [1, "row", "mt-2"], [1, "col-md-10"], [1, "col-lg-3", "col-md-6"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Last 4 Digits", 1, "form-control", 3, "formControl"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], [1, "input-group"], ["placeholder", "Search By Provider Name", "bindLabel", "providerName", "bindValue", "providerId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items", "formControl", "clear", "change"], [1, "col-lg-3", "col-md-6", "filterFlex"], ["placeholder", "Search By Card Type", "bindLabel", "name.lookupName", "bindValue", "id", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items", "clear", "change"], [1, "dropdown"], ["type", "button", 1, "btn", "dropdownFilters"], ["type", "text", "placeholder", "Select Date", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange", "bsValueChange"], ["dp", "bsDatepicker"], ["src", "../../../../assets/images/calendar.png", "alt", "", 1, "calender", 3, "click"], ["class", "fa-regular fa-circle-xmark", 3, "click", 4, "ngIf"], [1, "col-md-2"], [1, "row", "justify-content-end"], [1, "col-lg-10", "col-md-6", "d-flex", "justify-content-end"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdownButton", "more-filter-drop"], [1, "fa-regular", "fa-plus"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "menu"], [1, "dropdown-item"], ["type", "checkbox", 1, "checkBox", 3, "ngModel", "ngModelChange", "change"], [1, "deposited-cheques-list-tabs"], [1, "col-lg-7"], [1, "col-lg-2"], [1, "col-lg-8"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-light"], [1, "form-check"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "", "checked", "", 1, "form-check-input", 3, "click"], ["for", "exampleRadios1", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "", 1, "form-check-input", 3, "click"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios2", "value", "true", 1, "form-check-input", 3, "click"], ["for", "exampleRadios2", 1, "form-check-label"], [1, "col-lg-5", "text-end"], ["routerLink", "/credit-card/reconciliation", 1, "btn", "btn-add"], [1, "col-lg-12"], [1, "filterFlex", "mt-4"], ["class", "dropdown", 4, "ngIf"], [1, "col-lg-12", "mb-3", "d-flex", "justify-content-between", "align-items-center"], [1, "m-0", "fw-600"], [1, "d-flex", "gap-2", "align-items-center"], ["type", "button", 1, "btn", "btn-success", "btn-lg", "font-16", 3, "click"], [1, "fas", "fa-file-excel", "me-2"], [1, "m-0", "txt-light"], [1, "col-md-12"], [3, "config", "columns", "data", "loading", "page", "total", "limit", "sortUpdated", "pageUpdated"], ["libTableAdvancedColumn", "provider"], ["libTableAdvancedColumn", "collectionAt"], ["libTableAdvancedColumn", "branch"], ["libTableAdvancedColumn", "registers"], ["libTableAdvancedColumn", "cardType"], ["libTableAdvancedColumn", "cardCollectionJod"], ["libTableAdvancedColumn", "commissionAmount"], ["libTableAdvancedColumn", "commissionRatio"], ["libTableAdvancedColumn", "cardCollectionJodNet"], ["libTableAdvancedColumn", "cardBankDepositDate"], ["libTableAdvancedColumn", "statusObj"], ["libTableAdvancedColumn", "Action"], [1, "col-lg-3"], [1, "card", "mb-3"], [1, "col-md-4"], ["alt", "", "srcset", "", "width", "72;", 3, "src"], [1, "col-md-8"], [1, "label"], [1, "label-txt"], [1, "fa-regular", "fa-circle-xmark", 3, "click"], ["type", "text", "placeholder", "Machine Receipt Number", 1, "form-control", 3, "formControl"], ["type", "text", "placeholder", "Commission", 1, "form-control", 3, "formControl", "input"], ["type", "text", "placeholder", "Amount", 1, "form-control", 3, "formControl", "input"], ["type", "text", "placeholder", "Section No", 1, "form-control", 3, "formControl", "input"], ["type", "text", "placeholder", "Net Amount", 1, "form-control", 3, "formControl", "input"], ["type", "button", "id", "dropdownbranch", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdownFilters"], [4, "ngIf"], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "fa-solid", "fa-chevron-down"], ["aria-labelledby", "dropdownbranch", 1, "dropdown-menu", "menu2"], ["class", "dropdown-item", 4, "ngFor", "ngForOf"], [1, "d-flex"], ["type", "checkbox", 1, "checkBox", 3, "value", "change"], ["type", "button", "id", "dropdownregister", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdownFilters"], ["aria-labelledby", "dropdownregister", 1, "dropdown-menu", "menu2"], ["type", "button", "id", "button-addon133", 1, "btn"], ["type", "text", "placeholder", "MachineId", 1, "form-control", 3, "formControl"], ["type", "button", "id", "button-addon133", 1, "btn", 3, "hidden", "click"], [1, "d-flex", "flex-column"], ["alt", "", "srcset", "", "width", "55", 3, "src"], [1, "collected-btn"], [1, "fa-light", "fa-eye", 2, "cursor", "pointer", 3, "click"]],
  template: function CreditCardListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CreditCardListComponent_div_3_Template, 12, 6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 2)(7, "div", 6)(8, "div", 7)(9, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_Template_button_click_12_listener() {
        return ctx.removelast4Filter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 6)(15, "div", 13)(16, "ng-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("clear", function CreditCardListComponent_Template_ng_select_clear_16_listener() {
        return ctx.onClearprovider();
      })("change", function CreditCardListComponent_Template_ng_select_change_16_listener($event) {
        return ctx.handleCategoryChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 15)(18, "div", 13)(19, "ng-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("clear", function CreditCardListComponent_Template_ng_select_clear_19_listener() {
        return ctx.onClearcard();
      })("change", function CreditCardListComponent_Template_ng_select_change_19_listener($event) {
        return ctx.handleCategoryChange2($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 15)(21, "div", 7)(22, "div", 17)(23, "button", 18)(24, "input", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreditCardListComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.datepickerInput = $event;
      })("bsValueChange", function CreditCardListComponent_Template_input_bsValueChange_24_listener($event) {
        return ctx.onDateValueChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_Template_img_click_26_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r76);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](25);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r1.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, CreditCardListComponent_i_27_Template, 1, 0, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 23)(29, "div", 24)(30, "div", 25)(31, "div", 17)(32, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " More Filters ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "ul", 28)(36, "li")(37, "a", 29)(38, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreditCardListComponent_Template_input_ngModelChange_38_listener($event) {
        return ctx.Invoice = $event;
      })("change", function CreditCardListComponent_Template_input_change_38_listener($event) {
        return ctx.filterInvoice($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, " \u00A0 Machine Receipt ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "a", 29)(41, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreditCardListComponent_Template_input_ngModelChange_41_listener($event) {
        return ctx.Commission = $event;
      })("change", function CreditCardListComponent_Template_input_change_41_listener($event) {
        return ctx.filterCommission($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " \u00A0Commission ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "a", 29)(44, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreditCardListComponent_Template_input_ngModelChange_44_listener($event) {
        return ctx.Amount = $event;
      })("change", function CreditCardListComponent_Template_input_change_44_listener($event) {
        return ctx.filterAmount($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, " \u00A0Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "a", 29)(47, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreditCardListComponent_Template_input_ngModelChange_47_listener($event) {
        return ctx.SessionNumber = $event;
      })("change", function CreditCardListComponent_Template_input_change_47_listener($event) {
        return ctx.filterSessionNumber($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, " \u00A0Session Number ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "a", 29)(50, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreditCardListComponent_Template_input_ngModelChange_50_listener($event) {
        return ctx.NetAmount = $event;
      })("change", function CreditCardListComponent_Template_input_change_50_listener($event) {
        return ctx.filterNetAmount($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, " \u00A0Net Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "a", 29)(53, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreditCardListComponent_Template_input_ngModelChange_53_listener($event) {
        return ctx.BranchName = $event;
      })("change", function CreditCardListComponent_Template_input_change_53_listener($event) {
        return ctx.filterBranchName($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, " \u00A0Branch Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "a", 29)(56, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreditCardListComponent_Template_input_ngModelChange_56_listener($event) {
        return ctx.RegisterName = $event;
      })("change", function CreditCardListComponent_Template_input_change_56_listener($event) {
        return ctx.filterRegisterName($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, " \u00A0Register Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "a", 29)(59, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CreditCardListComponent_Template_input_ngModelChange_59_listener($event) {
        return ctx.isMachineId = $event;
      })("change", function CreditCardListComponent_Template_input_change_59_listener($event) {
        return ctx.filterMachineId($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, " \u00A0Merchant ID ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 31)(62, "div", 2)(63, "div", 32)(64, "div", 4)(65, "div", 33)(66, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 34)(69, "div", 35)(70, "button", 36)(71, "div", 37)(72, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_Template_input_click_72_listener() {
        return ctx.IsPDCFilter("");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74, " All ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "button", 36)(76, "div", 37)(77, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_Template_input_click_77_listener() {
        return ctx.IsPDCFilter(30001);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, " UnReconciled ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "button", 36)(81, "div", 37)(82, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_Template_input_click_82_listener() {
        return ctx.IsPDCFilter(30002);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "label", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, " Reconciled ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 43)(86, "button", 44)(87, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Create Reconciliation");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 45)(90, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, CreditCardListComponent_div_91_Template, 7, 2, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](92, CreditCardListComponent_div_92_Template, 7, 2, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](93, CreditCardListComponent_div_93_Template, 7, 2, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](94, CreditCardListComponent_div_94_Template, 7, 2, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](95, CreditCardListComponent_div_95_Template, 7, 2, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](96, CreditCardListComponent_div_96_Template, 10, 3, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](97, CreditCardListComponent_div_97_Template, 10, 3, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](98, CreditCardListComponent_div_98_Template, 7, 2, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "div", 4)(100, "div", 48)(101, "h5", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102, "Cards Transactions List");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "div", 50)(104, "button", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CreditCardListComponent_Template_button_click_104_listener() {
        return ctx.getCardsForExport();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](105, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](106, " Export");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "h6", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](108);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](109, "div", 54)(110, "app-table-advanced", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sortUpdated", function CreditCardListComponent_Template_app_table_advanced_sortUpdated_110_listener($event) {
        return ctx.onSortChange($event);
      })("pageUpdated", function CreditCardListComponent_Template_app_table_advanced_pageUpdated_110_listener($event) {
        return ctx.onPageChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](111, CreditCardListComponent_ng_template_111_Template, 1, 1, "ng-template", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](112, CreditCardListComponent_ng_template_112_Template, 2, 3, "ng-template", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](113, CreditCardListComponent_ng_template_113_Template, 1, 1, "ng-template", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](114, CreditCardListComponent_ng_template_114_Template, 1, 1, "ng-template", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](115, CreditCardListComponent_ng_template_115_Template, 4, 2, "ng-template", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](116, CreditCardListComponent_ng_template_116_Template, 2, 4, "ng-template", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](117, CreditCardListComponent_ng_template_117_Template, 2, 4, "ng-template", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](118, CreditCardListComponent_ng_template_118_Template, 1, 1, "ng-template", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](119, CreditCardListComponent_ng_template_119_Template, 2, 4, "ng-template", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](120, CreditCardListComponent_ng_template_120_Template, 2, 4, "ng-template", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](121, CreditCardListComponent_ng_template_121_Template, 2, 5, "ng-template", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](122, CreditCardListComponent_ng_template_122_Template, 1, 0, "ng-template", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.carddetial);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.searchChequeText);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx.searchChequeText.value == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.provider)("formControl", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.cardlist);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.datepickerInput)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](33, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.datepickerInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.Invoice);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.Commission);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.Amount);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.SessionNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.NetAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.BranchName);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.RegisterName);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.isMachineId);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Invoice);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Commission);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Amount);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.SessionNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.NetAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.BranchName);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.RegisterName);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isMachineId);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Total No. : ", ctx.totalAllRecordsCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("config", ctx.tableConfig)("columns", ctx.tableColumns)("data", ctx.chequeList)("loading", ctx.loading)("page", ctx.page)("total", ctx.total)("limit", ctx.limit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectComponent, _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_5__.TableAdvancedComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__.BsDatepickerInputDirective, _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_6__.TableAdvancedColumnDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
  styles: ["[_nghost-%COMP%]     .ant-tabs-nav {\n  margin: 0 0 24px;\n}\n\n.card-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  flex: 1;\n}\n.card-wrapper[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n.card-wrapper[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n\n.card-subheading[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n@media (max-width: 768px) {\n  .card-wrapper[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .card-wrapper[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n.more-filter-drop[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 150px;\n  background: #4e9aff;\n  border-radius: 8px;\n  color: white;\n  outline: none;\n  border: none;\n}\n\n.label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 24px;\n  color: #929eae;\n}\n\n.label-txt[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: 0.016em;\n  color: #00261c;\n}\n\n.checkBox[_ngcontent-%COMP%] {\n  accent-color: #dc3545;\n  width: 20px;\n  height: 20px;\n}\n\n.dropdownFilters[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #dc3545;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3JlZGl0LWNhcmRzL2NyZWRpdC1jYXJkLWxpc3QvY3JlZGl0LWNhcmQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGdCQUFBO0FBRE47O0FBTUE7RUFDRSxtQkFBQTtBQUhGO0FBS0U7RUFDRSxnQkFBQTtFQUNBLE9BQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBSko7QUFNSTtFQUNFLGdCQUFBO0FBSk47O0FBU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBTkY7O0FBU0E7RUFDRSxtQkFBQTtBQU5GOztBQVVBO0VBRUk7SUFDRSxzQkFBQTtFQVJKO0VBVUk7SUFDRSxZQUFBO0VBUk47QUFDRjtBQWFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBWEY7O0FBYUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFWRjs7QUFZQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBVEY7O0FBV0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUkY7O0FBVUE7RUFFRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0FBUkYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgOjpuZy1kZWVwIHtcclxuICAgIC5hbnQtdGFicy1uYXYge1xyXG4gICAgICBtYXJnaW46IDAgMCAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuXHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuY29sdW1ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDI0cHg7XHJcbn1cclxuXHJcbi5jYXJkLXN1YmhlYWRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY2FyZC13cmFwcGVyIHtcclxuICAgIC5jb2x1bW5zIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb3JlLWZpbHRlci1kcm9wIHtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICM0ZTlhZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4ubGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGNvbG9yOiAjOTI5ZWFlO1xyXG59XHJcbi5sYWJlbC10eHQge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xyXG4gIGNvbG9yOiAjMDAyNjFjO1xyXG59XHJcbi5jaGVja0JveCB7XHJcbiAgYWNjZW50LWNvbG9yOiAjZGMzNTQ1O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG4uZHJvcGRvd25GaWx0ZXJzIHtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2970:
/*!*************************************************************************************!*\
  !*** ./src/app/credit-cards/credit-cards-payment/credit-cards-payment.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditCardsPaymentComponent": () => (/* binding */ CreditCardsPaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/header.service */ 940);
/* harmony import */ var _shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/sidebar.service */ 9106);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _credit_card_list_credit_card_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../credit-card-list/credit-card-list.component */ 7879);
/* harmony import */ var _reconciliation_history_reconciliation_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reconciliation-history/reconciliation-history.component */ 1840);







function CreditCardsPaymentComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreditCardsPaymentComponent_button_4_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.chooseDeposit(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", item_r4.id === ctx_r0.selecteddeposit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
  }
}
function CreditCardsPaymentComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Total No. ", ctx_r1.totalAllRecordsCount, "");
  }
}
function CreditCardsPaymentComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-credit-card-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CreditCardsPaymentComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-reconciliation-history");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class CreditCardsPaymentComponent {
  constructor(headerService, sidebarService, route) {
    this.headerService = headerService;
    this.sidebarService = sidebarService;
    this.route = route;
    this.selecteddeposit = 1;
    this.depositTypes = [];
    this.totalAllRecordsCount = 0;
    this.headerService.selecteddeposit = 1;
    const step = this.route.snapshot.queryParamMap.get('num');
    if (step) {
      this.selecteddeposit = parseInt(step);
    } else {
      this.selecteddeposit = 1;
    }
  }
  ngOnInit() {
    this.headerService.setTitle('Deposited Cheques > Cheques List ');
    const activeNavLink = this.sidebarService.findNavLink(this.sidebarService.navLinks, 'deposites');
    if (activeNavLink) {
      this.sidebarService.emitEvent({
        select: {
          navLink: activeNavLink,
          silent: true
        }
      });
    }
    this.getdepositTypes();
  }
  ngOnDestroy() {}
  chooseDeposit(deposit) {
    this.selecteddeposit = deposit.id;
  }
  getdepositTypes() {
    this.depositTypes = [{
      id: 1,
      name: 'Credit Cards Payments List'
    }, {
      id: 2,
      name: 'Reconciliation History'
    }];
  }
}
CreditCardsPaymentComponent.ɵfac = function CreditCardsPaymentComponent_Factory(t) {
  return new (t || CreditCardsPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_0__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
};
CreditCardsPaymentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CreditCardsPaymentComponent,
  selectors: [["app-credit-cards-payment"]],
  decls: 8,
  vars: 4,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-9"], [1, "btn-tabs"], ["type", "button", "class", "btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "col-md-3", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["type", "button", 1, "btn", 3, "click"], [1, "col-md-3"], [1, "total-amount"]],
  template: function CreditCardsPaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, CreditCardsPaymentComponent_button_4_Template, 2, 3, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, CreditCardsPaymentComponent_div_5_Template, 3, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, CreditCardsPaymentComponent_div_6_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CreditCardsPaymentComponent_div_7_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.depositTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selecteddeposit == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selecteddeposit == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selecteddeposit == 2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _credit_card_list_credit_card_list_component__WEBPACK_IMPORTED_MODULE_2__.CreditCardListComponent, _reconciliation_history_reconciliation_history_component__WEBPACK_IMPORTED_MODULE_3__.ReconciliationHistoryComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2530:
/*!*************************************************************!*\
  !*** ./src/app/credit-cards/credit-cards-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditCardsRoutingModule": () => (/* binding */ CreditCardsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _credit_cards_payment_credit_cards_payment_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credit-cards-payment/credit-cards-payment.component */ 2970);
/* harmony import */ var _create_reconciliation_create_reconciliation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-reconciliation/create-reconciliation.component */ 8224);
/* harmony import */ var _reconciliation_details_reconciliation_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reconciliation-details/reconciliation-details.component */ 7380);
/* harmony import */ var _payment_detail_view_payment_detail_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-detail-view/payment-detail-view.component */ 5081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: '',
  component: _credit_cards_payment_credit_cards_payment_component__WEBPACK_IMPORTED_MODULE_0__.CreditCardsPaymentComponent
}, {
  path: 'reconciliation',
  component: _create_reconciliation_create_reconciliation_component__WEBPACK_IMPORTED_MODULE_1__.CreateReconciliationComponent
}, {
  path: 'reconciliation-details',
  component: _reconciliation_details_reconciliation_details_component__WEBPACK_IMPORTED_MODULE_2__.ReconciliationDetailsComponent
}, {
  path: 'payment-details',
  component: _payment_detail_view_payment_detail_view_component__WEBPACK_IMPORTED_MODULE_3__.PaymentDetailViewComponent
}
// { path: 'detail/:id', component: DepositChequeDetailComponent },
// { path: 'replace', component: ReplaceChequeComponent },
// { path: 'replace-view', component: ReplacedChequeDetailViewComponent },
//   { path: 'view-branch/:id', component: AddBranchComponent },
];

class CreditCardsRoutingModule {}
CreditCardsRoutingModule.ɵfac = function CreditCardsRoutingModule_Factory(t) {
  return new (t || CreditCardsRoutingModule)();
};
CreditCardsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: CreditCardsRoutingModule
});
CreditCardsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CreditCardsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 9354:
/*!*****************************************************!*\
  !*** ./src/app/credit-cards/credit-cards.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditCardsModule": () => (/* binding */ CreditCardsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/google-maps */ 3889);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _credit_cards_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credit-cards-routing.module */ 2530);
/* harmony import */ var _credit_card_list_credit_card_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./credit-card-list/credit-card-list.component */ 7879);
/* harmony import */ var _create_reconciliation_create_reconciliation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-reconciliation/create-reconciliation.component */ 8224);
/* harmony import */ var _reconciliation_history_reconciliation_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reconciliation-history/reconciliation-history.component */ 1840);
/* harmony import */ var _reconciliation_details_reconciliation_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reconciliation-details/reconciliation-details.component */ 7380);
/* harmony import */ var _credit_cards_payment_credit_cards_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credit-cards-payment/credit-cards-payment.component */ 2970);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-charts */ 1208);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _payment_detail_view_payment_detail_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./payment-detail-view/payment-detail-view.component */ 5081);
/* harmony import */ var _create_reconciliation_components_group_reconciliation_group_reconciliation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-reconciliation/components/group-reconciliation/group-reconciliation.component */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
















class CreditCardsModule {}
CreditCardsModule.ɵfac = function CreditCardsModule_Factory(t) {
  return new (t || CreditCardsModule)();
};
CreditCardsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: CreditCardsModule
});
CreditCardsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _credit_cards_routing_module__WEBPACK_IMPORTED_MODULE_1__.CreditCardsRoutingModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__.GoogleMapsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientJsonpModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng2_charts__WEBPACK_IMPORTED_MODULE_13__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](CreditCardsModule, {
    declarations: [_credit_card_list_credit_card_list_component__WEBPACK_IMPORTED_MODULE_2__.CreditCardListComponent, _create_reconciliation_create_reconciliation_component__WEBPACK_IMPORTED_MODULE_3__.CreateReconciliationComponent, _reconciliation_history_reconciliation_history_component__WEBPACK_IMPORTED_MODULE_4__.ReconciliationHistoryComponent, _reconciliation_details_reconciliation_details_component__WEBPACK_IMPORTED_MODULE_5__.ReconciliationDetailsComponent, _credit_cards_payment_credit_cards_payment_component__WEBPACK_IMPORTED_MODULE_6__.CreditCardsPaymentComponent, _payment_detail_view_payment_detail_view_component__WEBPACK_IMPORTED_MODULE_7__.PaymentDetailViewComponent, _create_reconciliation_components_group_reconciliation_group_reconciliation_component__WEBPACK_IMPORTED_MODULE_8__.GroupReconciliationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _credit_cards_routing_module__WEBPACK_IMPORTED_MODULE_1__.CreditCardsRoutingModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__.GoogleMapsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientJsonpModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng2_charts__WEBPACK_IMPORTED_MODULE_13__.NgChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule]
  });
})();

/***/ }),

/***/ 5081:
/*!***********************************************************************************!*\
  !*** ./src/app/credit-cards/payment-detail-view/payment-detail-view.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDetailViewComponent": () => (/* binding */ PaymentDetailViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/credit-card.service */ 1265);
/* harmony import */ var src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/header.service */ 940);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = function (a0, a1) {
  return {
    "background-color": a0,
    "color": a1
  };
};
class PaymentDetailViewComponent {
  constructor(route, creditcardservice, headerService, router) {
    this.route = route;
    this.creditcardservice = creditcardservice;
    this.headerService = headerService;
    this.router = router;
    this.loading = false;
    this.tableConfig = {
      paging: true,
      filter: {}
    };
    const step = this.route.snapshot.queryParamMap.get('ordersCardsCollectionId');
    if (step) {
      this.tableConfig.filter.OrdersCardsCollectionId = step;
    }
  }
  ngOnInit() {
    this.headerService.setTitle('Credit Cards Payments > Payment Details View');
    this.getdetial();
  }
  getdetial() {
    this.creditcardservice.getCardsCollectionDetial(this.tableConfig.filter).subscribe(result => {
      if (result) {
        this.data = result;
        const dateString = result.collectionAt;
        const datetimesettled = result.settledAt;
        const date = new Date(dateString);
        const datesettled = new Date(datetimesettled);
        this.extractedDate = date.toLocaleDateString();
        this.extractedTime = date.toLocaleTimeString();
        this.extractedDatesettled = datesettled.toLocaleDateString();
        this.extractedTimesettled = datesettled.toLocaleTimeString();
        this.lookupname = result.statusObj.translations[0].lookupName;
        this.lookupcolor = result.statusObj.lookupBGColor;
        this.lookupTextColor = result.statusObj.lookupTextColor;
      }
    }).add(() => this.loading = false);
  }
  close() {
    this.router.navigate(['credit-card']);
  }
}
PaymentDetailViewComponent.ɵfac = function PaymentDetailViewComponent_Factory(t) {
  return new (t || PaymentDetailViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_0__.CreditCardService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
PaymentDetailViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PaymentDetailViewComponent,
  selectors: [["app-payment-detail-view"]],
  decls: 171,
  vars: 51,
  consts: [[1, "cr-card"], [1, "wizard-content"], [1, "top-heading"], [1, "btn-light", "collected-btn", 3, "ngStyle"], [1, "row"], [1, "col-lg-4", "col-md-6", "filterFlex"], [1, "form-group", "input-group", "search-box", "p-3"], [1, "input-group", "search-box", "p-3"], ["alt", "", "width", "35", 1, "me-3", 3, "src"], [1, "row", "mt-2"], [1, "col-2", "filterFlex"], [1, "col-md-6"], [1, "row", "mb-4"], [1, "col-lg-3", "col-md-6", "filterFlex"], [1, "form-group", "input-group"], [1, "input-group"], [1, "row", "my-2"], [1, "my-5"], [1, "col-md-11"], [1, "col-md-1"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"]],
  template: function PaymentDetailViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Customer Name: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1)(10, "div", 4)(11, "div", 5)(12, "label")(13, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Paid Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5)(20, "label")(21, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Card Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 5)(27, "label")(28, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Last 4 digits of the card");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 9)(33, "div", 5)(34, "label")(35, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Payer name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 5)(40, "label")(41, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Machine Receipt No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 10)(46, "label")(47, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Merchant ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 10)(52, "label")(53, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Bank Deposit Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 9)(59, "div", 5)(60, "label")(61, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Terminal Provider");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 5)(67, "label")(68, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Commission Ratio");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 5)(73, "label")(74, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Net Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](78, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 4)(80, "div", 11)(81, "div", 0)(82, "div", 1)(83, "div", 2)(84, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Collection Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 12)(87, "div", 13)(88, "label")(89, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Branch");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 13)(94, "label")(95, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Register Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 13)(100, "label")(101, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Register No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 13)(106, "label")(107, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Session No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "h5")(112, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Registered By");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 16)(115, "div", 13)(116, "label")(117, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Employee");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 13)(122, "label")(123, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](127, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 13)(129, "label")(130, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](134, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 11)(136, "div", 0)(137, "div", 1)(138, "div", 2)(139, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "Settlement Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "h5", 17)(142, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Settled By");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 16)(145, "div", 13)(146, "label")(147, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Employee");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 13)(152, "label")(153, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](157, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 13)(159, "label")(160, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "Time");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](164, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 19)(168, "div", 20)(169, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentDetailViewComponent_Template_button_click_169_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.customer == null ? null : ctx.data.customer.customerName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](48, _c0, ctx.lookupcolor, ctx.lookupTextColor));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.lookupname);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 25, ctx.data == null ? null : ctx.data.cardCollectionJod) ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 27, ctx.data == null ? null : ctx.data.cardCollectionJod, "1.3-3") + " JOD" : "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", (ctx.data == null ? null : ctx.data.cardType == null ? null : ctx.data.cardType.lookupImage) || "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cardType == null ? null : ctx.data.cardType.translations[0] == null ? null : ctx.data.cardType.translations[0].lookupName) || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cardLast4Digits) || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.cardPayerName) || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.machineReceiptNumber) || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.machineID) || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](57, 30, ctx.data == null ? null : ctx.data.cardBankDepositDate, "mediumDate") || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", (ctx.data == null ? null : ctx.data.provider == null ? null : ctx.data.provider.imageFile) || "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.provider == null ? null : ctx.data.provider.providerName) || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.statusObj == null ? null : ctx.data.statusObj.lookupId) == 30001 && "-" || (ctx.data == null ? null : ctx.data.commissionRatio) && (ctx.data == null ? null : ctx.data.commissionRatio) + " %" || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.statusObj == null ? null : ctx.data.statusObj.lookupId) == 30001 && "-" || (ctx.data == null ? null : ctx.data.cardCollectionJodNet) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](78, 33, ctx.data == null ? null : ctx.data.cardCollectionJodNet, "2.3-3") + " JOD" || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.branch == null ? null : ctx.data.branch.branchName) || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.register == null ? null : ctx.data.register.registersName) || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.register == null ? null : ctx.data.register.registerId) || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.registerSessionId) || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data.collectedBy == null ? null : ctx.data.collectedBy.fullName) || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](127, 36, ctx.data.collectionAt, "dd MMM yyyy"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](134, 39, ctx.data.collectionAt, "h:mm a"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.data == null ? null : ctx.data.settledBy == null ? null : ctx.data.settledBy.fullName) || "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](157, 42, ctx.data.settledAt, "dd MMM yyyy"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](164, 45, ctx.data.settledAt, "h:mm a"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7380:
/*!*****************************************************************************************!*\
  !*** ./src/app/credit-cards/reconciliation-details/reconciliation-details.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReconciliationDetailsComponent": () => (/* binding */ ReconciliationDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/credit-card.service */ 1265);
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/helper.service */ 1785);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/header.service */ 940);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/table-advanced/table-advanced.component */ 9973);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/table-advanced/table-advanced.directives */ 5746);













function ReconciliationDetailsComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Reconciliation Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 1, ctx_r0.reconciliation[0] == null ? null : ctx_r0.reconciliation[0].totalAmount, "1.3-3"), " JOD");
  }
}
function ReconciliationDetailsComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Reconciliation Net Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 1, ctx_r1.reconciliation[0] == null ? null : ctx_r1.reconciliation[0].totalNetAmount, "1.3-3"), " JOD");
  }
}
function ReconciliationDetailsComponent_ng_template_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const index_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", index_r17 + 1, " ");
  }
}
function ReconciliationDetailsComponent_ng_template_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const row_r18 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 1, row_r18 == null ? null : row_r18.collectionAt, "dd MMM yyyy"), " ");
  }
}
function ReconciliationDetailsComponent_ng_template_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r19 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r19.provider == null ? null : row_r19.provider.providerName, " ");
  }
}
function ReconciliationDetailsComponent_ng_template_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r20 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r20.branch == null ? null : row_r20.branch.branchName, " ");
  }
}
function ReconciliationDetailsComponent_ng_template_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r21 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r21.register == null ? null : row_r21.register.registersName, " ");
  }
}
function ReconciliationDetailsComponent_ng_template_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r22 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 1, row_r22 == null ? null : row_r22.cardCollectionJod, "1.3-3"), " JOD ");
  }
}
function ReconciliationDetailsComponent_ng_template_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r23 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (row_r23 == null ? null : row_r23.commissionRatio) + " %" || 0, " ");
  }
}
function ReconciliationDetailsComponent_ng_template_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r24 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 1, row_r24 == null ? null : row_r24.commissionAmount, "1.3-3") + " JOD" || 0, " ");
  }
}
function ReconciliationDetailsComponent_ng_template_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r25 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 1, row_r25 == null ? null : row_r25.cardCollectionJodNet, "1.3-3"), " JOD ");
  }
}
function ReconciliationDetailsComponent_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r26 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (row_r26 == null ? null : row_r26.bank == null ? null : row_r26.bank.bankNameEnglish) + " - " + (row_r26 == null ? null : row_r26.bank == null ? null : row_r26.bank.accountName) + " - " + (row_r26 == null ? null : row_r26.bank == null ? null : row_r26.bank.accountNumber), " ");
  }
}
function ReconciliationDetailsComponent_ng_template_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const row_r27 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 1, row_r27 == null ? null : row_r27.cardBankDepositDate, "mediumDate") || "-", " ");
  }
}
function ReconciliationDetailsComponent_ng_template_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r28 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r28 == null ? null : row_r28.cardType == null ? null : row_r28.cardType.translations[0] == null ? null : row_r28.cardType.translations[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", row_r28.cardType == null ? null : row_r28.cardType.lookupImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true,
    rangeInputFormat: "MM-DD-YYYY"
  };
};
class ReconciliationDetailsComponent {
  constructor(route, fb, creditcardservice, _helperService, _datePipe, headerService) {
    this.route = route;
    this.fb = fb;
    this.creditcardservice = creditcardservice;
    this._helperService = _helperService;
    this._datePipe = _datePipe;
    this.headerService = headerService;
    this.searchChequeText = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null);
    this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null);
    this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.tableColumns = [];
    this.searchChequeNo = '';
    this.searchCustomerNo = '';
    this.loading = false;
    this.chequeList = [];
    this.cardlist = [];
    this.branchList = [];
    this.page = 1;
    this.total = 0;
    this.limit = 6;
    this.sort = 1;
    this.startDate = '';
    this.tableConfig = {
      paging: true,
      filter: {
        Sort: 1,
        PageSize: this.limit
      }
    };
    this.filterParams = '';
    const step = this.route.snapshot.queryParamMap.get('reconciliationHistoryid');
    if (step) {
      this.reconsilationstepid = step;
    }
  }
  ngOnInit() {
    this.headerService.setTitle('Reconciliation History > Reconciliation Details');
    this.getData();
    this.initFilterForm();
    this.initTableColumns();
    this.GetReconciliationTable(this.reconsilationstepid);
    this.getDetails();
  }
  initFilterForm() {
    this.filterForm = this.fb.group({
      providerId: [null],
      collectionDate: [''],
      depositDate: [''],
      cardTypeId: [null],
      last4digits: [''],
      machineID: [''],
      branchId: [null],
      reconciliationId: [this.reconsilationstepid]
    });
    this.filterForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500)).subscribe(data => {
      this.page = 1;
      let formValues = this._helperService.trim(data);
      if (formValues?.collectionDate) {
        formValues = {
          ...formValues,
          collectionDateFrom: this._datePipe.transform(formValues.collectionDate[0], 'yyyy-MM-dd'),
          collectionDateTo: this._datePipe.transform(formValues.collectionDate[1], 'yyyy-MM-dd')
        };
        delete formValues.collectionDate;
      }
      if (formValues?.depositDate) {
        formValues = {
          ...formValues,
          bankDepositDateFrom: this._datePipe.transform(formValues.depositDate[0], 'yyyy-MM-dd'),
          bankDepositDateTo: this._datePipe.transform(formValues.depositDate[1], 'yyyy-MM-dd')
        };
        delete formValues.depositDate;
      }
      this.filterParams = new URLSearchParams(formValues).toString();
      this.getDetails();
    });
  }
  resetFilterForm() {
    this.filterForm.reset({
      reconciliationId: this.reconsilationstepid
    });
  }
  getDetails() {
    let params = '';
    if (this.filterParams) params = `${this.filterParams}&pageSize=6&pageNo=${this.page - 1}&sort=${this.sort}`;else params = `reconciliationId=${this.reconsilationstepid}&pageSize=6&pageNo=${this.page - 1}&sort=${this.sort}`;
    this.creditcardservice.ReconciledTransactionsList(params).subscribe(response => {
      this.chequeList = response.data;
      this.total = response.totalRecordCount;
      this.cardsData = response.info;
    });
  }
  getData() {
    const api1$ = this.creditcardservice.GetProviders({
      pageSize: 1000,
      status: 2001
    });
    const api2$ = this.creditcardservice.GetCards();
    const branch$ = this.creditcardservice.GetBranch({});
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)([api1$, api2$, branch$]).subscribe(([result1, result2, branch]) => {
      this.provider = result1.data;
      this.cardlist = result2.data;
      this.branchList = branch.data;
    }, error => {}, () => {
      this.loading = false;
    });
  }
  initTableColumns() {
    this.tableColumns = [{
      key: 'No',
      label: 'No.',
      canSort: false
    }, {
      key: 'cardLast4Digits',
      label: 'Last 4 Digit',
      canSort: true
    }, {
      key: 'provider',
      label: 'Provider',
      canSort: true
    }, {
      key: 'machineID',
      label: 'Merchant ID'
    }, {
      key: 'machineReceiptNumber',
      label: 'Machine Receipt Number',
      canSort: true
    }, {
      key: 'collectionAt',
      label: 'Collection Date',
      canSort: true
    }, {
      key: 'branch',
      label: 'Branch Name',
      canSort: true
    }, {
      key: 'register',
      label: 'Register Name',
      canSort: true
    }, {
      key: 'cardType',
      label: 'Card Type',
      canSort: true
    }, {
      key: 'cardCollectionJod',
      label: 'Amount',
      canSort: true
    }, {
      key: 'commissionRatio',
      label: 'Commission Ratio'
    }, {
      key: 'commissionAmount',
      label: 'Commission Amount'
    }, {
      key: 'cardCollectionJodNet',
      label: 'Net Amount:',
      canSort: true
    }, {
      key: 'bankDepositAccount',
      label: 'Bank Deposit Account'
    }, {
      key: 'cardBankDepositDate',
      label: 'Bank Deposit Date'
    }];
  }
  onSortChange(sort) {
    if (sort?.direction && sort?.column) {
      switch (sort.column) {
        // case 'No':
        //   this.tableConfig.filter.Sort = sort.direction === 'desc' ? 3 : 2;
        //   break;
        case 'cardLast4Digits':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 3 : 2;
          break;
        case 'reconciliationDetailId':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 5 : 4;
          break;
        case 'provider':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 7 : 6;
          break;
        case 'machineReceiptNumber':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 9 : 8;
          break;
        case 'collectionAt':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 11 : 10;
          break;
        case 'branch':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 13 : 12;
          break;
        case 'register':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 15 : 14;
          break;
        case 'cardType':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 17 : 16;
          break;
        case 'cardCollectionJod':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 19 : 18;
          break;
        case 'cardCollectionJodNet':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 21 : 20;
          break;
        default:
          break;
      }
    } else {
      this.tableConfig.filter.Sort = 1;
    }
    this.GetReconciliationTable(this.reconsilationstepid);
  }
  onPageChange(page) {
    this.page = page;
    this.getDetails();
  }
  GetReconciliationTable(id) {
    this.tableConfig.filter.PageNo = this.page - 1;
    this.tableConfig.filter.ReconciliationId = parseInt(id);
    const api1$ = this.creditcardservice.GetReconciliationHistory(this.tableConfig.filter);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)([api1$]).subscribe(([result1]) => {
      if (result1) {
        this.reconciliation = result1.data;
        this.extractedTime = this.reconciliation[0]?.createdAt;
      }
    });
  }
}
ReconciliationDetailsComponent.ɵfac = function ReconciliationDetailsComponent_Factory(t) {
  return new (t || ReconciliationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_0__.CreditCardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_2__.HeaderService));
};
ReconciliationDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ReconciliationDetailsComponent,
  selectors: [["app-reconciliation-details"]],
  decls: 110,
  vars: 40,
  consts: [[1, "row", "mt-2"], [1, "col-lg-12", "text-heading"], [1, "mb-3"], [1, "col-12", "mb-4"], [1, "row"], [1, "col-3"], [1, "rh-card"], [1, "col-md-3"], [1, "mb-1", "label"], [1, "P-light"], ["class", "col-md-3", 4, "ngIf"], [3, "formGroup"], [1, "col-3", "mb-3"], [1, "input-group"], [1, "input-group-text"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Last 4 Digits", "formControlName", "last4digits", 1, "form-control", "height-45"], ["formControlName", "providerId", "placeholder", "Provider", "bindLabel", "providerName", "bindValue", "providerId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items"], ["type", "text", "placeholder", "Collection Date", "formControlName", "collectionDate", "bsDaterangepicker", "", 1, "form-control", "custom-input-field", 3, "bsConfig"], ["toDate", "bsDaterangepicker"], [1, "input-group-text", "cursor-pointer", 3, "click"], ["src", "/assets/images/calendar.png", "alt", "", 1, "calender"], ["formControlName", "branchId", "placeholder", "Search By Branch", "bindLabel", "branchName", "bindValue", "branchId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items"], ["type", "text", "placeholder", "Deposit Date", "formControlName", "depositDate", "bsDaterangepicker", "", 1, "form-control", "custom-input-field", 3, "bsConfig"], ["depositDate", "bsDaterangepicker"], ["formControlName", "cardTypeId", "placeholder", "Search By Card", "bindLabel", "name.lookupName", "bindValue", "id", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items"], ["type", "text", "placeholder", "Merchant ID", "formControlName", "machineID", 1, "form-control", "height-45"], [1, "col-12", "mb-3", "d-flex", "justify-content-end"], [1, "btn", "btn-add", 3, "click"], [1, "col-lg-12", "text-heading", "mt-2"], [1, "text-end"], [1, "col-lg-12", "mt-4"], [3, "config", "columns", "data", "loading", "page", "total", "limit", "sortUpdated", "pageUpdated"], ["libTableAdvancedColumn", "No"], ["libTableAdvancedColumn", "collectionAt"], ["libTableAdvancedColumn", "provider"], ["libTableAdvancedColumn", "branch"], ["libTableAdvancedColumn", "register"], ["libTableAdvancedColumn", "cardCollectionJod"], ["libTableAdvancedColumn", "commissionRatio"], ["libTableAdvancedColumn", "commissionAmount"], ["libTableAdvancedColumn", "cardCollectionJodNet"], ["libTableAdvancedColumn", "bankDepositAccount"], ["libTableAdvancedColumn", "cardBankDepositDate"], ["libTableAdvancedColumn", "cardType"], [1, "d-flex", "flex-column"], ["alt", "", "srcset", "", "width", "55", 3, "src"]],
  template: function ReconciliationDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Reconciliation Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Reconciliation Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h6")(11, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 5)(16, "div", 6)(17, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Commission Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "h6")(20, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 5)(25, "div", 6)(26, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Net Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "h6")(29, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " JOD");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 7)(34, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Created by:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 7)(39, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Date:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](43, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 7)(45, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Time:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, ReconciliationDetailsComponent_div_50_Template, 6, 4, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, ReconciliationDetailsComponent_div_51_Template, 6, 4, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 7)(53, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Reconciliation Number:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "form", 11)(58, "div", 4)(59, "div", 12)(60, "div", 13)(61, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "ng-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 12)(67, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "input", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReconciliationDetailsComponent_Template_span_click_70_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](69);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r2.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "ng-select", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 12)(75, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "input", 23, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReconciliationDetailsComponent_Template_span_click_78_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](77);
        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r3.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "ng-select", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 12)(83, "div", 13)(84, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](86, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 27)(88, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReconciliationDetailsComponent_Template_button_click_88_listener() {
        return ctx.resetFilterForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Clear Filters");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 0)(91, "div", 29)(92, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "Reconciled Transactions List");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "h6", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 31)(97, "app-table-advanced", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sortUpdated", function ReconciliationDetailsComponent_Template_app_table_advanced_sortUpdated_97_listener($event) {
        return ctx.onSortChange($event);
      })("pageUpdated", function ReconciliationDetailsComponent_Template_app_table_advanced_pageUpdated_97_listener($event) {
        return ctx.onPageChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](98, ReconciliationDetailsComponent_ng_template_98_Template, 1, 1, "ng-template", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, ReconciliationDetailsComponent_ng_template_99_Template, 2, 4, "ng-template", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](100, ReconciliationDetailsComponent_ng_template_100_Template, 1, 1, "ng-template", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](101, ReconciliationDetailsComponent_ng_template_101_Template, 1, 1, "ng-template", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](102, ReconciliationDetailsComponent_ng_template_102_Template, 1, 1, "ng-template", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](103, ReconciliationDetailsComponent_ng_template_103_Template, 2, 4, "ng-template", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](104, ReconciliationDetailsComponent_ng_template_104_Template, 1, 1, "ng-template", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](105, ReconciliationDetailsComponent_ng_template_105_Template, 2, 4, "ng-template", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](106, ReconciliationDetailsComponent_ng_template_106_Template, 2, 4, "ng-template", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](107, ReconciliationDetailsComponent_ng_template_107_Template, 1, 1, "ng-template", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](108, ReconciliationDetailsComponent_ng_template_108_Template, 2, 4, "ng-template", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, ReconciliationDetailsComponent_ng_template_109_Template, 4, 2, "ng-template", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 23, ctx.cardsData == null ? null : ctx.cardsData.totalReconciliationAmount, "2.3-3"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](22, 26, ctx.cardsData == null ? null : ctx.cardsData.totalCommissionAmount, "2.3-3"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](31, 29, ctx.cardsData == null ? null : ctx.cardsData.totalNetAmount, "2.3-3"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.reconciliation && (ctx.reconciliation[0] == null ? null : ctx.reconciliation[0].createdBy.fullName) ? ctx.reconciliation[0] == null ? null : ctx.reconciliation[0].createdBy.fullName : "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.reconciliation && (ctx.reconciliation[0] == null ? null : ctx.reconciliation[0].createdAt) ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](43, 32, ctx.reconciliation[0] == null ? null : ctx.reconciliation[0].createdAt, "dd MMM yyyy") : "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](49, 35, ctx.extractedTime, "shortTime"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reconciliation);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reconciliation);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.reconciliation && (ctx.reconciliation[0] == null ? null : ctx.reconciliation[0].reconciliationHistoryId) ? ctx.reconciliation[0] == null ? null : ctx.reconciliation[0].reconciliationHistoryId : "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.filterForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.provider);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](38, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.branchList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](39, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.cardlist);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Total No. : ", ctx.total, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.tableConfig)("columns", ctx.tableColumns)("data", ctx.chequeList)("loading", ctx.loading)("page", ctx.page)("total", ctx.total)("limit", ctx.limit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_3__.TableAdvancedComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDaterangepickerInputDirective, _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_4__.TableAdvancedColumnDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.P-light[_ngcontent-%COMP%] {\n  color: #9B9B9B;\n  font-size: 15px;\n}\n\n.rh-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.08);\n  background: white;\n}\n.rh-card[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3JlZGl0LWNhcmRzL3JlY29uY2lsaWF0aW9uLWRldGFpbHMvcmVjb25jaWxpYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsaUJBQUE7QUFFRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLlAtbGlnaHQge1xyXG4gICAgY29sb3I6ICM5QjlCOUI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnJoLWNhcmQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDFweCByZ2IoMCAwIDAgLyA4JSk7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gIGg2IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1840:
/*!*****************************************************************************************!*\
  !*** ./src/app/credit-cards/reconciliation-history/reconciliation-history.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReconciliationHistoryComponent": () => (/* binding */ ReconciliationHistoryComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/credit-card.service */ 1265);
/* harmony import */ var src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/header.service */ 940);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/table-advanced/table-advanced.component */ 9973);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/table-advanced/table-advanced.directives */ 5746);

// import { Category, Users, depositChequeList } from '../data';












function ReconciliationHistoryComponent_i_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReconciliationHistoryComponent_i_12_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.removeCollectionDateFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReconciliationHistoryComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 6)(2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function ReconciliationHistoryComponent_div_29_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.validateInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReconciliationHistoryComponent_div_29_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.removeAmountFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r2.amountchange);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx_r2.amountchange.value == null);
  }
}
function ReconciliationHistoryComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "div", 6)(2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function ReconciliationHistoryComponent_div_30_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.validateInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReconciliationHistoryComponent_div_30_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.removeNetAmountFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r3.netamountchange);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx_r3.netamountchange.value == null);
  }
}
function ReconciliationHistoryComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const index_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", index_r18 + 1, " ");
  }
}
function ReconciliationHistoryComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const row_r19 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, row_r19 == null ? null : row_r19.createdAt), " ");
  }
}
function ReconciliationHistoryComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r20 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, row_r20 == null ? null : row_r20.totalAmount, "1.3-3"), " JOD ");
  }
}
function ReconciliationHistoryComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r21 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](1, 1, row_r21 == null ? null : row_r21.totalNetAmount, "1.3-3"), " JOD ");
  }
}
function ReconciliationHistoryComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReconciliationHistoryComponent_ng_template_43_Template_i_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);
      const row_r22 = restoredCtx.row;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.sendid(row_r22.reconciliationHistoryId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
class ReconciliationHistoryComponent {
  constructor(creditcardservice, headerService, router) {
    this.creditcardservice = creditcardservice;
    this.headerService = headerService;
    this.router = router;
    this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.amountchange = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null);
    this.netamountchange = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null);
    this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null);
    this.tableColumns = [];
    this.searchChequeNo = '';
    this.searchCustomerNo = '';
    this.loading = false;
    this.chequeList = [];
    this.totalAllRecordsCount = 0;
    this.page = 1;
    this.total = 0;
    this.limit = 6;
    this.sort = 1;
    this.startDate = '';
    this.tableConfig = {
      paging: true,
      filter: {
        Sort: 1,
        PageSize: this.limit
      }
    };
    /**
    * filter selection
    */
    this.commission = false;
    this.amount = false;
    this.netAmount = false;
    this.provider = [];
    this.cardlist = [];
  }
  ngOnInit() {
    this.headerService.setTitle('Reconciliation History');
    this.getData();
    this.initTableColumns();
    this.GetReconciliationTable();
    this.amountchange.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsubscribe)).subscribe(value => {
      const text = value || '';
      if (text?.length >= 0 || !text?.length && this.tableConfig.filter.Amount?.length) {
        this.tableConfig.filter.Amount = text;
        this.page = 1;
        this.GetReconciliationTable();
      }
    });
    this.netamountchange.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.unsubscribe)).subscribe(value => {
      const text = value || '';
      if (text?.length >= 0 || !text?.length && this.tableConfig.filter.NetAmount?.length) {
        this.tableConfig.filter.NetAmount = text;
        this.page = 1;
        this.GetReconciliationTable();
      }
    });
  }
  ngOnDestroy() {}
  initTableColumns() {
    this.tableColumns = [{
      key: 'No',
      label: 'No.',
      canSort: false
    }, {
      key: 'reconciliationHistoryId',
      label: 'Reconciliation ID',
      canSort: true
    }, {
      key: 'createdBy.fullName',
      label: 'Created by',
      canSort: true
    }, {
      key: 'createdAt',
      label: 'Date',
      canSort: true
    }, {
      key: 'totalAmount',
      label: 'Amount',
      canSort: true
    },
    // {
    //   key: 'Commission',
    //   label: 'Commission',
    // },
    {
      key: 'totalNetAmount',
      label: 'Net',
      canSort: true
    }, {
      key: 'Action',
      label: 'Action',
      canSort: false
    }];
  }
  onSortChange(sort) {
    if (sort?.direction && sort?.column) {
      switch (sort.column) {
        // case 'No':
        //   this.tableConfig.filter.Sort = sort.direction === 'desc' ? 3 : 2;
        //   break;
        case 'reconciliationHistoryId':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 3 : 2;
          break;
        case 'createdBy.fullName':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 5 : 4;
          break;
        case 'createdAt':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 7 : 6;
          break;
        case 'totalAmount':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 9 : 8;
          break;
        case 'totalNetAmount':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 11 : 10;
          break;
        // case 'Action':
        //   this.tableConfig.filter.Sort = sort.direction === 'desc' ? 15 : 13;
        //   break;
        default:
          break;
      }
    } else {
      this.tableConfig.filter.Sort = 1;
    }
    this.GetReconciliationTable();
  }
  onPageChange(page) {
    this.page = page;
    this.GetReconciliationTable();
  }
  removeSearchChequeNo() {
    this.searchChequeNo = '';
    this.sort = 1;
  }
  onDateValueChange(event) {
    var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe('en-US');
    this.startDate = pipe.transform(event) || '';
    console.log(this.startDate);
    if (this.startDate) {
      const fromDate = new Date(this.startDate);
      fromDate.setDate(fromDate.getDate() + 1); // Adding one day
      const formattedFromDate = fromDate.toISOString();
      this.tableConfig.filter.ReconciliationDate = formattedFromDate;
    } else this.tableConfig.filter.ReconciliationDate = this.startDate;
    this.page = 1;
    this.GetReconciliationTable();
  }
  removeCollectionDateFilter() {
    this.startDate = '';
    if (this.datepickerInput) this.datepickerInput = '';
    this.page = 1;
    this.GetReconciliationTable();
  }
  // To Remove More Filters > Amount clear
  removeAmountFilter() {
    this.amountchange.setValue(null);
    this.tableConfig.filter.Amount = '';
    this.page = 1;
    this.GetReconciliationTable();
  }
  // To Remove Checkbox from More Filters > Amount
  filterAmount(event) {
    this.amount = event.checked;
    if (!this.amount) {
      this.amount = false;
      this.amountchange.setValue(null);
      this.tableConfig.filter.Amount = '';
      this.page = 1;
      this.GetReconciliationTable();
    }
  }
  // To Remove More Filters > Net Amount clear
  removeNetAmountFilter() {
    this.netamountchange.setValue(null);
    this.tableConfig.filter.NetAmount = '';
    this.page = 1;
    this.GetReconciliationTable();
  }
  // To Remove Checkbox from More Filters > Net Amount
  filterNetAmount(event) {
    this.netAmount = event.checked;
    if (!this.netAmount) {
      this.netAmount = false;
      this.netamountchange.setValue(null);
      this.tableConfig.filter.NetAmount = '';
      this.page = 1;
      this.GetReconciliationTable();
    }
  }
  getData() {
    const api1$ = this.creditcardservice.GetProviders({
      pageSize: 1000,
      status: 2001
    });
    const api2$ = this.creditcardservice.GetCards();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)([api1$, api2$]).subscribe(([result1, result2]) => {
      if (result1) {
        console.log(result1.data);
        this.provider = result1.data || [];
      }
      console.log("result2", result2);
      if (result2) {
        this.cardlist = result2.data || [];
      }
    }, error => {
      console.error(error);
    }, () => {
      this.loading = false;
    });
  }
  GetReconciliationTable() {
    this.tableConfig.filter.PageNo = this.page - 1;
    const api1$ = this.creditcardservice.GetReconciliationHistory(this.tableConfig.filter);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)([api1$]).subscribe(([result1]) => {
      console.log(result1);
      if (result1) {
        this.chequeList = result1.data || [];
        this.totalAllRecordsCount = result1.totalRecordCount;
        this.total = result1.totalRecordCount;
      }
    });
  }
  handleCategoryChange(event) {
    this.tableConfig.filter.ProviderId = event.providerId;
    this.page = 1;
    this.GetReconciliationTable();
  }
  onClear() {
    delete this.tableConfig.filter.ProviderId;
    this.page = 1;
    this.GetReconciliationTable();
  }
  onCTClear() {
    delete this.tableConfig.filter.CardTypeId;
    this.page = 1;
    this.GetReconciliationTable();
  }
  handleCardType(event) {
    this.tableConfig.filter.CardTypeId = event.id;
    this.page = 1;
    this.GetReconciliationTable();
  }
  sendid(reconciliationHistoryId) {
    this.router.navigate(['credit-card/reconciliation-details'], {
      queryParams: {
        reconciliationHistoryid: reconciliationHistoryId
      }
    });
  }
  validateInput(event) {
    const enteredValue = event.target.value;
    const pattern = /^[0-9]*\.?[0-9]*$/; // Regex pattern to allow numbers and decimal point
    if (!pattern.test(enteredValue)) {
      event.target.value = enteredValue.replace(/[^0-9.]/g, ''); // Remove any invalid characters
    }
  }
}

ReconciliationHistoryComponent.ɵfac = function ReconciliationHistoryComponent_Factory(t) {
  return new (t || ReconciliationHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_0__.CreditCardService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_1__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
};
ReconciliationHistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ReconciliationHistoryComponent,
  selectors: [["app-reconciliation-history"]],
  decls: 44,
  vars: 19,
  consts: [[1, "row", "mt-2"], [1, "col-md-10"], [1, "row"], [1, "col-lg-3", "col-md-6"], ["placeholder", "Provider", "bindLabel", "providerName", "bindValue", "providerId", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "formControl", "items", "clear", "change"], [1, "col-lg-3", "col-md-6", "filterFlex"], [1, "input-group", "search-box"], [1, "dropdown"], ["type", "button", 1, "btn", "dropdownFilters"], ["type", "text", "placeholder", "Select Date", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange", "bsValueChange"], ["dp", "bsDatepicker"], ["src", "../../../../assets/images/calendar.png", "alt", "", 1, "calender", 3, "click"], ["class", "fa-regular fa-circle-xmark", 3, "click", 4, "ngIf"], ["placeholder", "Search By Card", "bindLabel", "name.lookupName", "bindValue", "id", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items", "clear", "change"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdownButton", "more-filter-drop"], [1, "fa-regular", "fa-plus"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "menu"], [1, "dropdown-item"], ["type", "checkbox", 1, "checkBox", 3, "ngModel", "ngModelChange", "change"], [1, "filterFlex", "mt-3"], ["class", "dropdown", 4, "ngIf"], [1, "col-lg-12", "text-heading"], [1, "text-end"], [1, "col-md-12"], [3, "config", "columns", "data", "loading", "page", "total", "limit", "sortUpdated", "pageUpdated"], ["libTableAdvancedColumn", "No"], ["libTableAdvancedColumn", "createdAt"], ["libTableAdvancedColumn", "totalAmount"], ["libTableAdvancedColumn", "totalNetAmount"], ["libTableAdvancedColumn", "Action"], [1, "fa-regular", "fa-circle-xmark", 3, "click"], ["type", "button", "id", "button-addon1", 1, "btn"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Amount", 1, "form-control", 3, "formControl", "input"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], ["type", "text", "placeholder", "Net Amount", 1, "form-control", 3, "formControl", "input"], [1, "fa-light", "fa-eye", 2, "cursor", "pointer", 3, "click"]],
  template: function ReconciliationHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ng-select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("clear", function ReconciliationHistoryComponent_Template_ng_select_clear_4_listener() {
        return ctx.onClear();
      })("change", function ReconciliationHistoryComponent_Template_ng_select_change_4_listener($event) {
        return ctx.handleCategoryChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "button", 8)(9, "input", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReconciliationHistoryComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.datepickerInput = $event;
      })("bsValueChange", function ReconciliationHistoryComponent_Template_input_bsValueChange_9_listener($event) {
        return ctx.onDateValueChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReconciliationHistoryComponent_Template_img_click_11_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ReconciliationHistoryComponent_i_12_Template, 1, 0, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 3)(14, "ng-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("clear", function ReconciliationHistoryComponent_Template_ng_select_clear_14_listener() {
        return ctx.onCTClear();
      })("change", function ReconciliationHistoryComponent_Template_ng_select_change_14_listener($event) {
        return ctx.handleCardType($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 5)(16, "div", 7)(17, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " More Filters ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ul", 16)(21, "li")(22, "a", 17)(23, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReconciliationHistoryComponent_Template_input_ngModelChange_23_listener($event) {
        return ctx.amount = $event;
      })("change", function ReconciliationHistoryComponent_Template_input_change_23_listener($event) {
        return ctx.filterAmount($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " \u00A0Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "a", 17)(26, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReconciliationHistoryComponent_Template_input_ngModelChange_26_listener($event) {
        return ctx.netAmount = $event;
      })("change", function ReconciliationHistoryComponent_Template_input_change_26_listener($event) {
        return ctx.filterNetAmount($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " \u00A0Net Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ReconciliationHistoryComponent_div_29_Template, 7, 2, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ReconciliationHistoryComponent_div_30_Template, 7, 2, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 0)(32, "div", 21)(33, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Cards reconciliations List");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "h6", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 23)(38, "app-table-advanced", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sortUpdated", function ReconciliationHistoryComponent_Template_app_table_advanced_sortUpdated_38_listener($event) {
        return ctx.onSortChange($event);
      })("pageUpdated", function ReconciliationHistoryComponent_Template_app_table_advanced_pageUpdated_38_listener($event) {
        return ctx.onPageChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, ReconciliationHistoryComponent_ng_template_39_Template, 1, 1, "ng-template", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ReconciliationHistoryComponent_ng_template_40_Template, 2, 3, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, ReconciliationHistoryComponent_ng_template_41_Template, 2, 4, "ng-template", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, ReconciliationHistoryComponent_ng_template_42_Template, 2, 4, "ng-template", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, ReconciliationHistoryComponent_ng_template_43_Template, 1, 0, "ng-template", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.searchText)("items", ctx.provider);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.datepickerInput)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](18, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.datepickerInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.cardlist);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.amount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.netAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.amount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.netAmount);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Total No. : ", ctx.totalAllRecordsCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.tableConfig)("columns", ctx.tableColumns)("data", ctx.chequeList)("loading", ctx.loading)("page", ctx.page)("total", ctx.total)("limit", ctx.limit);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_2__.TableAdvancedComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_14__.BsDatepickerInputDirective, _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_3__.TableAdvancedColumnDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [".applyMargin[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n\n.total[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 15px 0 0px;\n  padding: 10px 0px;\n}\n.total[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  color: #929eae;\n  margin: 0px;\n  padding: 10px 0px;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  border: 0.5px solid #f4f4f4;\n  box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -webkit-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n}\n\n.btn-provide[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 8px 14px 8px 14px;\n  border-radius: 4px;\n  font-size: 12px;\n  width: 80px;\n}\n\n.btn-disabled[_ngcontent-%COMP%] {\n  background-color: #c5c6c7;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 8px 14px 8px 14px;\n  border-radius: 4px;\n  font-size: 12px;\n  width: 80px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 8px;\n}\n\n.play-left[_ngcontent-%COMP%] {\n  color: #eceaea;\n  transform: rotate(180deg);\n  margin-right: 5px;\n}\n\n.play-right[_ngcontent-%COMP%] {\n  color: #eceaea;\n}\n\n.dropdownBox[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 150px;\n  height: 48px;\n  background: #4e9aff;\n  border-radius: 8px;\n}\n\n.headButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95px;\n  height: 34.2px;\n  border-radius: 8px;\n}\n\n.headButtonText[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.menu[_ngcontent-%COMP%] {\n  width: 180px;\n  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1));\n}\n\n.menu2[_ngcontent-%COMP%] {\n  width: 235px;\n  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1));\n}\n\n.more-filter-drop[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 150px;\n  background: #4e9aff;\n  border-radius: 8px;\n  color: white;\n  outline: none;\n  border: none;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 12px 12px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.checkBox[_ngcontent-%COMP%] {\n  accent-color: #dc3545;\n  width: 20px;\n  height: 20px;\n}\n\n.dropdownFilters[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #dc3545;\n}\n\n.filterFlex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.btn-edit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3JlZGl0LWNhcmRzL3JlY29uY2lsaWF0aW9uLWhpc3RvcnkvcmVjb25jaWxpYXRpb24taGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ047QUFDSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNOOztBQUVFO0VBQ0UsMkJBQUE7RUFDQSxnREFBQTtFQUNBLHdEQUFBO0VBQ0EscURBQUE7QUFDSjs7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURFO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBSUo7O0FBRkU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUhFO0VBQ0UsY0FBQTtBQU1KOztBQUhFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFGRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtBQUlKOztBQUZFO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIRTtFQUNFLFlBQUE7RUFDQSxxREFBQTtBQU1KOztBQUhFO0VBQ0UsWUFBQTtFQUVBLHFEQUFBO0FBS0o7O0FBRkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFLSjs7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFNSjs7QUFIRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7QUFNSjs7QUFIRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFNSjs7QUFGSTtFQUNFLFdBQUE7QUFLTiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBseU1hcmdpbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjVyZW07XHJcbiAgfVxyXG4gIC50b3RhbCB7XHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbWFyZ2luOiAxNXB4IDAgMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBjb2xvcjogIzkyOWVhZTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyZC10YWJsZSB7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNmNGY0ZjQ7XHJcbiAgICBib3gtc2hhZG93OiAzcHggN3B4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCA3cHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDdweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xyXG4gIH1cclxuICAuYnRuLXByb3ZpZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweCA4cHggMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gIH1cclxuICAuYnRuLWRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNWM2Yzc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogOHB4IDE0cHggOHB4IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICB9XHJcbiAgLnBhZ2luYXRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gIH1cclxuICAucGxheS1sZWZ0IHtcclxuICAgIGNvbG9yOiAjZWNlYWVhO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuICAucGxheS1yaWdodCB7XHJcbiAgICBjb2xvcjogI2VjZWFlYTtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duQm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICBcclxuICAgIGJhY2tncm91bmQ6ICM0ZTlhZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkQnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTVweDtcclxuICAgIGhlaWdodDogMzQuMnB4O1xyXG4gIFxyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuICAuaGVhZEJ1dHRvblRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IEt1bWJoIFNhbnM7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLm1lbnUge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZW51MiB7XHJcbiAgICB3aWR0aDogMjM1cHg7XHJcbiAgXHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcclxuICB9XHJcbiAgXHJcbiAgLm1vcmUtZmlsdGVyLWRyb3Age1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzRlOWFmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDEycHggMTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuY2hlY2tCb3gge1xyXG4gICAgYWNjZW50LWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bkZpbHRlcnMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWx0ZXJGbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG4gXHJcbiAgLmJ0bi1lZGl0IHtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_credit-cards_credit-cards_module_ts.js.map