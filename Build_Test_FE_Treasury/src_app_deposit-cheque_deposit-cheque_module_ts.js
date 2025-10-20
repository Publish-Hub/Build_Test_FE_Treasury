"use strict";
(self["webpackChunkDX_Admin_FE"] = self["webpackChunkDX_Admin_FE"] || []).push([["src_app_deposit-cheque_deposit-cheque_module_ts"],{

/***/ 282:
/*!******************************************************************************************************!*\
  !*** ./src/app/deposit-cheque/cheque-dashboard/cheque-aging-report/cheque-aging-report.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChequeAgingReportComponent": () => (/* binding */ ChequeAgingReportComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Momen_alShouha_Desktop_Projects_DX_FE_Treasury_DX_FE_Treasury_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-charts */ 1208);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-datalabels */ 9007);
/* harmony import */ var src_app_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/deposit.service */ 8378);
/* harmony import */ var _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/excel.service */ 8219);
/* harmony import */ var _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/table-advanced/table-advanced.component */ 9973);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/table-advanced/table-advanced.directives */ 5746);
















function ChequeAgingReportComponent_i_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChequeAgingReportComponent_i_21_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.removeCollectionDateFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ChequeAgingReportComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const index_r13 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (ctx_r1.page - 1) * 6 + index_r13 + 1, " ");
  }
}
function ChequeAgingReportComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r14 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](1, 1, row_r14.overDueTotal, "1.3-3"), " JOD ");
  }
}
function ChequeAgingReportComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](1, 1, row_r15.ageing[1].amount, "1.3-3"), " JOD ");
  }
}
function ChequeAgingReportComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r16 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](1, 1, row_r16.ageing[2].amount, "1.3-3"), " JOD ");
  }
}
function ChequeAgingReportComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r17 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](1, 1, row_r17.ageing[3].amount, "1.3-3"), " JOD ");
  }
}
function ChequeAgingReportComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r18 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](1, 1, row_r18.ageing[4].amount, "1.3-3"), " JOD ");
  }
}
function ChequeAgingReportComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r19 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](1, 1, row_r19.ageing[5].amount, "1.3-3"), " JOD ");
  }
}
function ChequeAgingReportComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r20 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](1, 1, row_r20.ageing[6].amount, "1.3-3"), " JOD ");
  }
}
function ChequeAgingReportComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r21 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](1, 1, row_r21.ageing[7].amount, "1.3-3"), " JOD ");
  }
}
const _c0 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
const _c1 = function (a0) {
  return [a0];
};
class ChequeAgingReportComponent {
  constructor(depositService, _excelService) {
    this.depositService = depositService;
    this._excelService = _excelService;
    this.amountchange = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null);
    this.phonenumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null);
    this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.tableColumns = [];
    this.searchChequeNo = '';
    this.searchCustomerNo = '';
    this.loading = false;
    this.chequeList = [];
    this.lookupNames = [];
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
    //chart
    this.dataUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.barChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_1__["default"]];
    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 30
          }
        },
        datalabels: {
          font: {
            size: 8
          },
          formatter: value => {
            return value || '';
          }
        },
        tooltip: {
          callbacks: {
            label: context => {
              const value = context.raw;
              const formattedValue = value.toLocaleString(); // Convert to thousand separator format
              return `${context.label}: ${formattedValue} JOD`;
            }
          }
        }
      },
      scales: {
        y: {
          stacked: true,
          grid: {
            display: false
          },
          // ticks: {
          //   callback: (tickValue: string | number) => {
          //     if (typeof tickValue === 'number') {
          //       return tickValue >= 1000 ? `${tickValue / 1000}k` : tickValue;
          //     }
          //     return tickValue;
          //   }
          // },
          border: {
            display: false
          }
        },
        x: {
          stacked: true,
          grid: {
            display: false
          },
          border: {
            display: false
          },
          ticks: {
            padding: 20
          }
        },
        x1: {
          grid: {
            display: false,
            drawOnChartArea: false,
            drawTicks: false
          },
          ticks: {
            display: false
          },
          border: {
            display: false
          }
        }
      }
    };
    this.barChartData = {
      labels: [],
      datasets: [{
        data: [],
        label: 'PDC',
        datalabels: {
          color: '#FFFFFF'
        },
        backgroundColor: '#D9D9D9',
        borderColor: '#D9D9D9',
        borderSkipped: false,
        borderRadius: {
          topLeft: 32,
          topRight: 32,
          bottomLeft: 32,
          bottomRight: 32
        },
        barThickness: this.getBarThickness()
      }, {
        data: [],
        label: 'Collected',
        datalabels: {
          color: '#FFFFFF'
        },
        backgroundColor: '#DC3545',
        borderColor: '#DC3545',
        borderSkipped: false,
        borderRadius: {
          topLeft: 32,
          topRight: 32,
          bottomLeft: 32,
          bottomRight: 32
        },
        barThickness: this.getBarThickness()
      }]
    };
    this.selectedYearValue = new Date();
    this.data = {};
  }
  ngOnInit() {
    this.initTableColumns();
    this.fetchData();
    this.fetchtable();
    this.amountchange.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe)).subscribe(value => {
      const text = value || '';
      if (text?.length >= 0 || !text?.length && this.tableConfig.filter.ChequeNumber?.length) {
        this.tableConfig.filter.ChequeNumber = text;
        this.page = 1;
        this.fetchtable();
      }
    });
    this.phonenumber.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe)).subscribe(value => {
      const text = value || '';
      if (text?.length >= 0 || !text?.length && this.tableConfig.filter.Customer?.length) {
        this.tableConfig.filter.Customer = text;
        this.page = 1;
        this.fetchtable();
      }
    });
  }
  getChequeAgingForExport() {
    this.loading = true;
    this.tableConfig.filter.PageNo = this.page - 1;
    this.tableConfig.filter.PageSize = 10000;
    this.depositService.GetChequesAgingList(this.tableConfig.filter).subscribe(result => {
      if (result) {
        this.tableConfig.filter.PageSize = this.limit;
        this.generateExcelExport(result.data);
      }
    }).add(() => this.loading = false);
  }
  generateExcelExport(data) {
    var _this = this;
    return (0,C_Users_Momen_alShouha_Desktop_Projects_DX_FE_Treasury_DX_FE_Treasury_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      data = data.map((x, index) => {
        return {
          index: index + 1,
          ...x
        };
      });
      const exportOptions = {
        fileName: 'Cheques_Aging_List',
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
          headers: ['No', 'Customer Name', 'Over Due', '0-30', '31-60', '61-90', '91-120', '121-150', '151-180', '180+',,],
          mainKeyMapping: ['index', 'customerName', 'overDueTotal', 'ageing[1].amount', 'ageing[2].amount', 'ageing[3].amount', 'ageing[4].amount', 'ageing[5].amount', 'ageing[6].amount', 'ageing[7].amount'],
          data: data
        }]
      };
      const result = yield _this._excelService.exportToExcelJs1(exportOptions);
    })();
  }
  fetchData() {}
  ngOnDestroy() {}
  initTableColumns() {
    this.tableColumns = [{
      key: 'no',
      label: 'No'
    }, {
      key: 'customerName',
      label: 'Customer Name'
    }, {
      key: 'overDueTotal',
      label: 'Over Due'
    }, {
      key: 'ageing',
      label: '0-30'
    }, {
      key: 'second',
      label: '31-60'
    }, {
      key: 'three',
      label: '61-90'
    }, {
      key: 'four',
      label: '91-120'
    }, {
      key: 'five',
      label: '121-150'
    }, {
      key: 'six',
      label: '151-180'
    }, {
      key: 'last',
      label: '180+'
    }];
  }
  fetchtable() {
    this.chequeList = [];
    this.tableConfig.filter.PageNo = this.page - 1;
    const api1$ = this.depositService.GetChequesAgingList(this.tableConfig.filter);
    const api2$ = this.depositService.GetChequesAgingGraph(this.tableConfig.filter);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)([api1$, api2$]).subscribe(([result1, result2]) => {
      if (result1) {
        this.chequeList = result1.data;
        this.totalrecord = result1.totalRecordCount;
        this.updateTotalValues(this.chequeList);
        this.totalAllRecordsCount = result1.totalRecordCount;
        this.total = result1.totalRecordCount;
      }
      if (result2) {
        this.data = result2;
        if (this.data.ageing) {
          this.barChartData.labels = this.data.ageing.map(item => item.translations[0].lookupName);
          this.updateChart();
        }
      }
    }, error => {
      console.error(error);
    }, () => {
      this.loading = false;
    });
  }
  onPageChange(page) {
    this.page = page;
    this.fetchtable();
  }
  removeSearchChequeNo() {
    this.searchChequeNo = '';
    this.sort = 1;
    this.fetchData();
  }
  searchCheque(event) {
    const text = event.target.value;
    if (text.length >= 2) {
      this.searchChequeNo = text;
      this.page = 0;
      this.fetchData();
    }
    if (text.length == 0) {
      this.fetchData();
    }
  }
  removeSearchCustomerNo() {
    this.searchCustomerNo = '';
    this.sort = 1;
    this.fetchData();
  }
  searchCustomer(event) {
    const text = event.target.value;
    if (text.length >= 2) {
      this.searchCustomerNo = text;
      this.page = 0;
      this.fetchData();
    }
    if (text.length == 0) {
      this.fetchData();
    }
  }
  onDateValueChange(event) {
    var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe('en-US');
    this.startDate = pipe.transform(event) || '';
    if (this.startDate) {
      const fromDate = new Date(this.startDate);
      fromDate.setDate(fromDate.getDate() + 1); // Adding one day
      const formattedFromDate = fromDate.toISOString();
      this.tableConfig.filter.CollectionDate = formattedFromDate;
    } else this.tableConfig.filter.CollectionDate = this.startDate;
    this.fetchtable();
  }
  removeCollectionDateFilter() {
    this.startDate = '';
    if (this.datepickerInput) this.datepickerInput = '';
    this.fetchtable();
  }
  validateInput(event) {
    const enteredValue = event.target.value;
    const pattern = /^[0-9]*\.?[0-9]*$/; // Regex pattern to allow numbers and decimal point
    if (!pattern.test(enteredValue)) {
      event.target.value = enteredValue.replace(/[^0-9.]/g, ''); // Remove any invalid characters
    }
  }

  calculateTotalValue(rows, columnIndex, columnName) {
    let total = 0;
    if (columnName === 'overDueTotal') {
      for (const row of rows) {
        total += row[columnName];
      }
    } else {
      for (const row of rows) {
        total += row.ageing[columnIndex].amount;
      }
    }
    return total.toFixed(3);
  }
  updateTotalValues(rows) {
    const currencySymbol = ' JOD'; // Replace 'JOD' with your desired currency symbol
    this.totalValues = {
      'customerName': 'Total:',
      'overDueTotal': this.calculateTotalValue(rows, 0, 'overDueTotal') + currencySymbol,
      'ageing': this.calculateTotalValue(rows, 0, 'ageing') + currencySymbol,
      'second': this.calculateTotalValue(rows, 1, 'second') + currencySymbol,
      'three': this.calculateTotalValue(rows, 2, 'three') + currencySymbol,
      'four': this.calculateTotalValue(rows, 3, 'four') + currencySymbol,
      'five': this.calculateTotalValue(rows, 4, 'five') + currencySymbol,
      'six': this.calculateTotalValue(rows, 5, 'six') + currencySymbol,
      'last': this.calculateTotalValue(rows, 6, 'last') + currencySymbol
    };
  }
  ngAfterViewInit() {
    this.initChart();
  }
  onResize() {
    const barThickness = this.getBarThickness();
    this.barChartData.datasets[0].barThickness = barThickness;
    this.barChartData.datasets[1].barThickness = barThickness;
    if (this.chart) this.chart.update();
  }
  getBarThickness() {
    return window.innerWidth < 620 ? 14 : 32;
  }
  selectYearItem() {
    this.initChart();
  }
  initChart() {
    const filter = {};
    if (this.selectedYearValue) {
      filter.year = this.selectedYearValue.getFullYear();
    } else {
      filter.year = new Date().getFullYear();
    }
  }
  updateChart() {
    if (!this.chart) {
      return;
    }
    const defaultAmount = 0;
    const defaultCollectedAmount = 0;
    this.barChartData.datasets[0].data = [];
    this.barChartData.datasets[1].data = [];
    for (let i = 0; i < (this.data?.ageing).length; i++) {
      const totalAmount = this.data?.ageing[i]?.totalAmount || defaultAmount;
      const collectedAmount = this.data?.ageing[i]?.collectedAmount || defaultCollectedAmount;
      this.barChartData.datasets[0].data.push(totalAmount);
      this.barChartData.datasets[1].data.push(collectedAmount);
    }
    this.chart.update();
  }
}
ChequeAgingReportComponent.ɵfac = function ChequeAgingReportComponent_Factory(t) {
  return new (t || ChequeAgingReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_2__.DepositService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_3__.ExcelService));
};
ChequeAgingReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ChequeAgingReportComponent,
  selectors: [["app-cheque-aging-report"]],
  viewQuery: function ChequeAgingReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_14__.BaseChartDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    }
  },
  outputs: {
    dataUpdated: "dataUpdated"
  },
  decls: 48,
  vars: 25,
  consts: [[1, "row", "mt-2"], [1, "col-lg-3", "col-md-6"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "placeholder", "Cheque Number", 1, "form-control", 3, "ngModel", "formControl", "ngModelChange", "input"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], ["type", "text", "placeholder", "Customer Name or Phone", 1, "form-control", 3, "ngModel", "formControl", "ngModelChange", "keyup"], [1, "col-lg-3", "col-md-6", "filterFlex"], [1, "dropdown"], ["type", "button", 1, "btn", "dropdownFilters"], ["type", "text", "placeholder", "Select Collection Date", "bsDatepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange", "bsValueChange"], ["src", "../../../../assets/images/calendar.png", "alt", "", 1, "calender"], ["class", "fa-regular fa-circle-xmark", 3, "click", 4, "ngIf"], [1, "col-lg-3", "col-md-6", "d-flex", "justify-content-end"], [1, "btn", "btn-add", 3, "click"], ["src", "../../../../assets/images/export-line.png", "alt", ""], [1, "col-lg-12", "text-heading"], [1, "text-end"], [1, "col-md-12"], [1, "table-container"], [3, "config", "columns", "data", "loading", "tablefoot", "page", "total", "limit", "pageUpdated"], ["libTableAdvancedColumn", "no"], ["libTableAdvancedColumn", "overDueTotal"], ["libTableAdvancedColumn", "ageing"], ["libTableAdvancedColumn", "second"], ["libTableAdvancedColumn", "three"], ["libTableAdvancedColumn", "four"], ["libTableAdvancedColumn", "five"], ["libTableAdvancedColumn", "six"], ["libTableAdvancedColumn", "last"], [1, "mt-5"], [1, "chart-wrapper", 3, "resize"], ["baseChart", "", 3, "data", "options", "plugins", "type"], [1, "fa-regular", "fa-circle-xmark", 3, "click"]],
  template: function ChequeAgingReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChequeAgingReportComponent_Template_button_click_3_listener() {
        return ctx.removeSearchChequeNo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ChequeAgingReportComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchChequeNo = $event;
      })("input", function ChequeAgingReportComponent_Template_input_input_5_listener($event) {
        return ctx.validateInput($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChequeAgingReportComponent_Template_button_click_6_listener() {
        return ctx.removeSearchChequeNo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChequeAgingReportComponent_Template_button_click_10_listener() {
        return ctx.removeSearchCustomerNo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ChequeAgingReportComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.searchCustomerNo = $event;
      })("keyup", function ChequeAgingReportComponent_Template_input_keyup_12_listener($event) {
        return ctx.searchCustomer($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChequeAgingReportComponent_Template_button_click_13_listener() {
        return ctx.removeSearchCustomerNo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 9)(16, "div", 2)(17, "div", 10)(18, "button", 11)(19, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ChequeAgingReportComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.datepickerInput = $event;
      })("bsValueChange", function ChequeAgingReportComponent_Template_input_bsValueChange_19_listener($event) {
        return ctx.onDateValueChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ChequeAgingReportComponent_i_21_Template, 1, 0, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 15)(23, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChequeAgingReportComponent_Template_button_click_23_listener() {
        return ctx.getChequeAgingForExport();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Export To Excel");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 0)(28, "div", 18)(29, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Cheques Aging Report");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "h6", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 20)(34, "div", 21)(35, "app-table-advanced", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageUpdated", function ChequeAgingReportComponent_Template_app_table_advanced_pageUpdated_35_listener($event) {
        return ctx.onPageChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, ChequeAgingReportComponent_ng_template_36_Template, 1, 1, "ng-template", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, ChequeAgingReportComponent_ng_template_37_Template, 2, 4, "ng-template", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, ChequeAgingReportComponent_ng_template_38_Template, 2, 4, "ng-template", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, ChequeAgingReportComponent_ng_template_39_Template, 2, 4, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, ChequeAgingReportComponent_ng_template_40_Template, 2, 4, "ng-template", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, ChequeAgingReportComponent_ng_template_41_Template, 2, 4, "ng-template", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ChequeAgingReportComponent_ng_template_42_Template, 2, 4, "ng-template", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, ChequeAgingReportComponent_ng_template_43_Template, 2, 4, "ng-template", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, ChequeAgingReportComponent_ng_template_44_Template, 2, 4, "ng-template", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 32)(46, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("resize", function ChequeAgingReportComponent_Template_div_resize_46_listener() {
        return ctx.onResize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "canvas", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchChequeNo)("formControl", ctx.amountchange);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.searchChequeNo.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchCustomerNo)("formControl", ctx.phonenumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.searchCustomerNo.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.datepickerInput)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](22, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.datepickerInput);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Total No.:", ctx.totalrecord, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("config", ctx.tableConfig)("columns", ctx.tableColumns)("data", ctx.chequeList)("loading", ctx.loading)("tablefoot", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](23, _c1, ctx.totalValues))("page", ctx.page)("total", ctx.total)("limit", ctx.limit);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx.barChartData)("options", ctx.barChartOptions)("plugins", ctx.barChartPlugins)("type", "bar");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_4__.TableAdvancedComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerInputDirective, _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_5__.TableAdvancedColumnDirective, ng2_charts__WEBPACK_IMPORTED_MODULE_14__.BaseChartDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe],
  styles: [".filter-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n\n.dropdown-action[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 32px;\n  position: relative;\n}\n.dropdown-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border: 1px solid #c4cdd5;\n  border-radius: 8px;\n  padding: 0 32px 0 16px;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 24px;\n  color: #1b212d;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dropdown-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #1b212d !important;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #1b212d !important;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-action[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.dropdown-action[_ngcontent-%COMP%]   .date-menu[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.dropdown-action[_ngcontent-%COMP%]   .date-item[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  margin-bottom: 0;\n  font-size: 12px;\n}\n\nnz-date-picker[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #1b212d;\n  background: #f8f8f8;\n  border: 1px solid #c4cdd5 !important;\n  height: 32px !important;\n  border-radius: 8px !important;\n}\nnz-date-picker[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8;\n}\nnz-date-picker[_ngcontent-%COMP%]     input {\n  font-weight: 500 !important;\n  font-size: 15px !important;\n  line-height: 24px !important;\n  cursor: pointer;\n}\nnz-date-picker[_ngcontent-%COMP%]     input::placeholder {\n  color: #929eae;\n}\n\n.chart-wrapper[_ngcontent-%COMP%] {\n  width: 99%;\n  height: 360px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVwb3NpdC1jaGVxdWUvY2hlcXVlLWRhc2hib2FyZC9jaGVxdWUtYWdpbmctcmVwb3J0L2NoZXF1ZS1hZ2luZy1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRU47QUFETTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUdSO0FBQ007RUFDRSx3QkFBQTtBQUNSO0FBQ007RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0FBQ1I7QUFDTTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQUNNO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQUNSO0FBRUk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsMENBQUE7RUFDQSwwQ0FBQTtBQUFOO0FBRUk7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFBTjtBQUdJO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQUROO0FBSUk7RUFDRSxzQkFBQTtBQUZOO0FBS0k7RUFDRSxzQkFBQTtBQUhOO0FBTUk7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSk47QUFLTTtFQUVFLHlCQUFBO0VBQ0EsMENBQUE7QUFKUjtBQVFJO0VBQ0UsZUFBQTtBQU5OO0FBU0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUE47O0FBV0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBUko7QUFVSTtFQUNFLHlCQUFBO0FBUk47QUFZTTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUFWUjtBQVlRO0VBQ0UsY0FBQTtBQVZWOztBQWdCRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBYkoiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWFjdGlvbiB7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAuYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M0Y2RkNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDMycHggMCAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBjb2xvcjogIzFiMjEyZDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHJpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLXRvZ2dsZSB7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlOCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjMWIyMTJkICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICMxYjIxMmQgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGNvbHVtbi1jb3VudDogMTtcclxuICAgICAgY29sdW1uLWdhcDogMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMCU7XHJcbiAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCA0MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiAycHggMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICB3aWR0aDogMTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIH1cclxuICBcclxuICAgIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZHJvcGRvd24tbWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZHJvcGRvd24taXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTZweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAmOmhvdmVyLFxyXG4gICAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRhdGUtbWVudSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICBcclxuICAgIC5kYXRlLWl0ZW0ge1xyXG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgbnotZGF0ZS1waWNrZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICMxYjIxMmQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0Y2RkNSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcclxuICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgaW5wdXQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICBcclxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICBjb2xvcjogIzkyOWVhZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNoYXJ0LXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDk5JTsgLy8gbm90IGZ1bGwgd2lkdGggYW5kIGZpeGVzIGZvciByZXNwb25zaXZlXHJcbiAgICBoZWlnaHQ6IDM2MHB4O1xyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3446:
/*!*******************************************************************************!*\
  !*** ./src/app/deposit-cheque/cheque-dashboard/cheque-dashboard.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChequeDashboardComponent": () => (/* binding */ ChequeDashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/deposit.service */ 8378);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cheque_aging_report_cheque_aging_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cheque-aging-report/cheque-aging-report.component */ 282);
/* harmony import */ var _cheques_due_date_cheques_due_date_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cheques-due-date/cheques-due-date.component */ 931);






function ChequeDashboardComponent_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.currency[0] == null ? null : item_r8.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Rate: ", item_r8 == null ? null : item_r8.currency[0] == null ? null : item_r8.currency[0].currencyRate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Count: ", item_r8 == null ? null : item_r8.count, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 4, item_r8 == null ? null : item_r8.collectedAmount, "2.3-3"), "");
  }
}
function ChequeDashboardComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChequeDashboardComponent_ng_container_11_div_1_Template, 12, 7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.cardsData == null ? null : ctx_r0.cardsData.depositedCheques);
  }
}
function ChequeDashboardComponent_ng_container_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10 == null ? null : item_r10.currency[0] == null ? null : item_r10.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Rate: ", item_r10 == null ? null : item_r10.currency[0] == null ? null : item_r10.currency[0].currencyRate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Count: ", item_r10 == null ? null : item_r10.count, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 4, item_r10 == null ? null : item_r10.collectedAmount, "2.3-3"), "");
  }
}
function ChequeDashboardComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChequeDashboardComponent_ng_container_20_div_1_Template, 12, 7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.cardsData == null ? null : ctx_r1.cardsData.collectedCheques);
  }
}
function ChequeDashboardComponent_ng_container_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r12 == null ? null : item_r12.currency[0] == null ? null : item_r12.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Rate: ", item_r12 == null ? null : item_r12.currency[0] == null ? null : item_r12.currency[0].currencyRate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Count: ", item_r12 == null ? null : item_r12.count, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 4, item_r12 == null ? null : item_r12.collectedAmount, "2.3-3"), "");
  }
}
function ChequeDashboardComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChequeDashboardComponent_ng_container_29_div_1_Template, 12, 7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.cardsData == null ? null : ctx_r2.cardsData.replacedCheques);
  }
}
function ChequeDashboardComponent_ng_container_38_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r14 == null ? null : item_r14.currency[0] == null ? null : item_r14.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Rate: ", item_r14 == null ? null : item_r14.currency[0] == null ? null : item_r14.currency[0].currencyRate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Count: ", item_r14 == null ? null : item_r14.count, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 4, item_r14 == null ? null : item_r14.collectedAmount, "2.3-3"), "");
  }
}
function ChequeDashboardComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChequeDashboardComponent_ng_container_38_div_1_Template, 12, 7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.cardsData == null ? null : ctx_r3.cardsData.withDrawnCheques);
  }
}
function ChequeDashboardComponent_ng_container_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r16 == null ? null : item_r16.currency[0] == null ? null : item_r16.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Rate: ", item_r16 == null ? null : item_r16.currency[0] == null ? null : item_r16.currency[0].currencyRate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Count: ", item_r16 == null ? null : item_r16.count, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Amount: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 4, item_r16 == null ? null : item_r16.collectedAmount, "2.3-3"), "");
  }
}
function ChequeDashboardComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ChequeDashboardComponent_ng_container_47_div_1_Template, 12, 7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.cardsData == null ? null : ctx_r4.cardsData.bouncedCheques);
  }
}
function ChequeDashboardComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Cheques");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class ChequeDashboardComponent {
  constructor(depositService) {
    this.depositService = depositService;
    this.limit = 6;
    this.tableConfig = {
      paging: true,
      filter: {
        Sort: 1,
        PageSize: this.limit
      }
    };
    this.cardsData = {};
  }
  ngOnInit() {
    this.Getdashbord();
  }
  ngOnDestroy() {}
  Getdashbord() {
    const api1$ = this.depositService.GetDashboardCard();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)([api1$]).subscribe(([result1]) => {
      if (result1) {
        this.cardsData = {
          ...result1
        };
      }
    });
  }
}
ChequeDashboardComponent.ɵfac = function ChequeDashboardComponent_Factory(t) {
  return new (t || ChequeDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_0__.DepositService));
};
ChequeDashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ChequeDashboardComponent,
  selectors: [["app-cheque-dashboard"]],
  decls: 54,
  vars: 10,
  consts: [[1, "card-wrapper"], [1, "notes-wrapper"], [1, "row", "mb-3"], [1, "col-xl-4", "col-md-6", "col-12", "mb-3"], [1, "card-note"], [1, "d-flex", "gap-3", "align-items-center", "mb-3"], [1, "icon-box"], ["src", "assets/images/dashboard/bank.png"], [1, "font-18", "fw-700", "ff-medium"], [1, "d-flex"], [4, "ngIf", "ngIfElse"], ["src", "assets/images/dashboard/collected.png"], ["src", "assets/images/dashboard/replace.png"], ["src", "assets/images/dashboard/returned.png"], ["src", "assets/images/dashboard/bounced.png"], ["noCheques", ""], [1, "row"], [1, "col-12", "mt-5"], ["class", "border-end px-3", 4, "ngFor", "ngForOf"], [1, "border-end", "px-3"], [1, "d-flex", "align-items-center", "gap-3"], [1, "font-14", "fw-600", "m-0"], [1, "fw-700", "sea-green-clr", "d-flex", "gap-2", "align-items-center"], [1, "fa-solid", "fa-arrow-trend-up", "fw-700"], [1, "fw-600"]],
  template: function ChequeDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Total Deposited");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ChequeDashboardComponent_ng_container_11_Template, 2, 1, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 3)(13, "div", 4)(14, "div", 5)(15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Collected");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ChequeDashboardComponent_ng_container_20_Template, 2, 1, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 3)(22, "div", 4)(23, "div", 5)(24, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Replaced");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ChequeDashboardComponent_ng_container_29_Template, 2, 1, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 3)(31, "div", 4)(32, "div", 5)(33, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Withdrawn");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, ChequeDashboardComponent_ng_container_38_Template, 2, 1, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 3)(40, "div", 4)(41, "div", 5)(42, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Bounced");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, ChequeDashboardComponent_ng_container_47_Template, 2, 1, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ChequeDashboardComponent_ng_template_48_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "app-cheque-aging-report");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "cheques-due-date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cardsData == null ? null : ctx.cardsData.depositedCheques == null ? null : ctx.cardsData.depositedCheques.length)("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cardsData == null ? null : ctx.cardsData.collectedCheques == null ? null : ctx.cardsData.collectedCheques.length)("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cardsData == null ? null : ctx.cardsData.replacedCheques == null ? null : ctx.cardsData.replacedCheques.length)("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cardsData == null ? null : ctx.cardsData.withDrawnCheques == null ? null : ctx.cardsData.withDrawnCheques.length)("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cardsData == null ? null : ctx.cardsData.bouncedCheques == null ? null : ctx.cardsData.bouncedCheques.length)("ngIfElse", _r5);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _cheque_aging_report_cheque_aging_report_component__WEBPACK_IMPORTED_MODULE_1__.ChequeAgingReportComponent, _cheques_due_date_cheques_due_date_component__WEBPACK_IMPORTED_MODULE_2__.ChequesDueDateComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe],
  styles: ["[_nghost-%COMP%]     .ant-tabs-nav {\n  margin: 0 0 24px;\n}\n\n.card-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  flex: 1;\n}\n.card-wrapper[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n.card-wrapper[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n\n.card-subheading[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n@media (max-width: 768px) {\n  .card-wrapper[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .card-wrapper[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n}\n.card-note[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 15px;\n  gap: 5px;\n  background: #ffffff;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 8px;\n  font-family: \"KumbhSans-Light\";\n  min-height: 170px;\n}\n.card-note[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n  gap: 8px;\n  width: 40px;\n  height: 40px;\n  background: #f8f8f8;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n.card-note[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.card-note[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  font-family: \"KumbhSans-Medium\", sans-serif !important;\n  line-height: 24px;\n  color: #929eae;\n}\n.card-note[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .label-txt[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: 0.016em;\n  color: #00261c;\n  font-family: \"KumbhSans-Medium\", sans-serif !important;\n}\n.card-note[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: \"KumbhSans-Medium\", sans-serif !important;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.016em;\n  color: #00261c;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVwb3NpdC1jaGVxdWUvY2hlcXVlLWRhc2hib2FyZC9jaGVxdWUtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsZ0JBQUE7QUFETjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsT0FBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFKSjtBQU1JO0VBQ0UsZ0JBQUE7QUFKTjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFORjs7QUFTQTtFQUNFLG1CQUFBO0FBTkY7O0FBZUE7RUFDRSxZQUFBO0FBWkY7QUFjRTtFQUNFLGtCQUFBO0FBWko7O0FBZ0JBO0VBRUk7SUFDRSxzQkFBQTtFQWRKO0VBZ0JJO0lBQ0UsWUFBQTtFQWROO0FBQ0Y7QUFrQkE7RUFFRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBakJGO0FBbUJFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FBakJKO0FBb0JFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQWxCSjtBQW9CSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNEQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBbEJOO0FBcUJJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxzREFBQTtBQW5CTjtBQXNCSTtFQUNFLGdCQUFBO0VBQ0Esc0RBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFwQk4iLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgOjpuZy1kZWVwIHtcclxuICAgIC5hbnQtdGFicy1uYXYge1xyXG4gICAgICBtYXJnaW46IDAgMCAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuXHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG5cclxuICAuY29sdW1ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDI0cHg7XHJcbn1cclxuXHJcbi5jYXJkLXN1YmhlYWRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5ub3Rlcy13cmFwcGVyIHtcclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGZsZXgtd3JhcDogd3JhcDtcclxuICAvLyBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGhlaWdodDogNDBweDtcclxuXHJcbiAgc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jYXJkLXdyYXBwZXIge1xyXG4gICAgLmNvbHVtbnMge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uY2FyZC1ub3RlIHtcclxuICAvLyBtaW4td2lkdGg6IDIxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZ2FwOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdLdW1iaFNhbnMtTGlnaHQnO1xyXG4gIG1pbi1oZWlnaHQ6MTcwcHg7XHJcblxyXG4gIC5pY29uLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA4cHg7XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJLdW1iaFNhbnMtTWVkaXVtXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjOTI5ZWFlO1xyXG4gICAgfVxyXG5cclxuICAgIC5sYWJlbC10eHQge1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcclxuICAgICAgY29sb3I6ICMwMDI2MWM7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoU2Fucy1NZWRpdW1cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbW91bnQge1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBmb250LWZhbWlseTogXCJLdW1iaFNhbnMtTWVkaXVtXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE2ZW07XHJcbiAgICAgIGNvbG9yOiAjMDAyNjFjO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 931:
/*!************************************************************************************************!*\
  !*** ./src/app/deposit-cheque/cheque-dashboard/cheques-due-date/cheques-due-date.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChequesDueDateComponent": () => (/* binding */ ChequesDueDateComponent)
/* harmony export */ });
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-plugin-datalabels */ 9007);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ 1208);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/deposit.service */ 8378);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);









function ChequesDueDateComponent_ng_container_15_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 15);
  }
}
function ChequesDueDateComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Bank Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "No of Cheques: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Total Amount: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ChequesDueDateComponent_ng_container_15_div_14_Template, 1, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const last_r4 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3 == null ? null : item_r3.bank);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r3 == null ? null : item_r3.cheques == null ? null : item_r3.cheques.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 4, item_r3 == null ? null : item_r3.totalAmount, "2.3-3"), " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !last_r4);
  }
}
function ChequesDueDateComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "canvas", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartClick", function ChequesDueDateComponent_ng_container_17_Template_canvas_chartClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.chartClicked($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r2.pieChartData)("type", ctx_r2.pieChartType)("options", ctx_r2.pieChartOptions)("plugins", ctx_r2.pieChartPlugins);
  }
}
const _c0 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
class ChequesDueDateComponent {
  constructor(depositservice, _datePipe) {
    this.depositservice = depositservice;
    this._datePipe = _datePipe;
    this.dueChequeList = [];
    this.bsRangeValue = [];
    // Pie
    this.pieChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        datalabels: {
          color: 'white',
          formatter: (value, ctx) => {
            if (ctx.chart.data.labels) {
              return ctx.chart.data.labels[ctx.dataIndex];
            }
          }
        }
      }
    };
    this.pieChartType = 'pie';
    this.pieChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__["default"]];
    const currentDate = new Date();
    let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    let lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    this.bsRangeValue = [firstDay, lastDay];
  }
  ngOnInit() {
    this.getDueCheques();
  }
  getDueCheques(from, to) {
    const currentDate = new Date();
    let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    let lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    let fromDate = this._datePipe.transform(from || firstDay, 'yyyy-MM-dd');
    let toDate = this._datePipe.transform(to || lastDay, 'yyyy-MM-dd');
    let param = `?FromDate=${fromDate}&ToDate=${toDate}`;
    this.depositservice.getDueCheques(param).subscribe(res => {
      this.dueChequeList = res.data;
      let amount = this.dueChequeList.map(x => x.totalAmount);
      let bank = this.dueChequeList.map(x => x.bank);
      this.pieChartData = {
        labels: bank,
        datasets: [{
          data: amount,
          backgroundColor: ['#253951', '#DC3545', '#C4CDD5', '#767271', '#B5B5B4']
        }]
      };
    });
  }
  onDateValueChange(event) {
    var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe('en-US');
    let startDate = pipe.transform(event[0]) || '';
    let endDate = pipe.transform(event[1]) || '';
    this.getDueCheques(startDate, endDate);
  }
  // events
  chartClicked({
    event,
    active
  }) {
    console.log(event.native?.currentTarget);
  }
  chartHovered({
    event,
    active
  }) {
    console.log(event, active);
  }
}
ChequesDueDateComponent.ɵfac = function ChequesDueDateComponent_Factory(t) {
  return new (t || ChequesDueDateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_1__.DepositService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe));
};
ChequesDueDateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ChequesDueDateComponent,
  selectors: [["cheques-due-date"]],
  viewQuery: function ChequesDueDateComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_4__.BaseChartDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe])],
  decls: 18,
  vars: 5,
  consts: [[1, "row"], [1, "col-12", "text-heading", "mb-2"], [1, "col-4", "mb-3"], [1, "input-group"], ["type", "text", "placeholder", "Select Date", "bsDaterangepicker", "", 1, "form-control", 3, "ngModel", "bsConfig", "ngModelChange", "bsValueChange"], ["drp", "bsDaterangepicker"], [1, "input-group-text", "cursor-pointer", 3, "click"], ["src", "/assets/images/calendar.png", "alt", "", 1, "calender"], [1, "col-6", "d-flex", "justify-content-end"], [1, "fw-600"], [4, "ngFor", "ngForOf"], [1, "col-6"], [4, "ngIf"], [1, "txt-light"], ["class", "border-top mb-3", 4, "ngIf"], [1, "border-top", "mb-3"], ["baseChart", "", "height", "300", 1, "chart", 3, "data", "type", "options", "plugins", "chartClick"]],
  template: function ChequesDueDateComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Cheques Due Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChequesDueDateComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.bsRangeValue = $event;
      })("bsValueChange", function ChequesDueDateComponent_Template_input_bsValueChange_6_listener($event) {
        return ctx.onDateValueChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChequesDueDateComponent_Template_span_click_8_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.toggle());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 0)(11, "div", 8)(12, "div")(13, "h4", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ChequesDueDateComponent_ng_container_15_Template, 15, 7, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ChequesDueDateComponent_ng_container_17_Template, 2, 4, "ng-container", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.bsRangeValue)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dueChequeList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pieChartData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__.BsDaterangepickerInputDirective, ng2_charts__WEBPACK_IMPORTED_MODULE_4__.BaseChartDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8860:
/*!************************************************************************************************************!*\
  !*** ./src/app/deposit-cheque/cheque-dashboard/dashboard-cheque-chart/dashboard-cheque-chart.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardChequeChartComponent": () => (/* binding */ DashboardChequeChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-plugin-datalabels */ 9007);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ 1208);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ 895);





class DashboardChequeChartComponent {
  constructor() {
    this.dataUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.barChartPlugins = [chartjs_plugin_datalabels__WEBPACK_IMPORTED_MODULE_0__["default"]];
    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            usePointStyle: true,
            padding: 30
          }
        },
        datalabels: {
          font: {
            size: 8
          },
          formatter: value => {
            return value || '';
          }
        },
        tooltip: {
          callbacks: {
            label: context => {
              const value = context.raw;
              const formattedValue = value.toLocaleString(); // Convert to thousand separator format
              return `${context.label}: ${formattedValue} JOD`;
              // return `${context.label}: ${context.raw} JOD`;
            }
          }
        }
      },

      scales: {
        y: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
            callback: tickValue => {
              if (typeof tickValue === 'number') {
                return tickValue >= 1000 ? `${tickValue / 1000}k` : tickValue;
              }
              return tickValue;
            }
          },
          border: {
            display: false
          }
        },
        x: {
          stacked: true,
          grid: {
            display: false
          },
          border: {
            display: false
          },
          ticks: {
            padding: 20
          }
        },
        x1: {
          grid: {
            display: false,
            drawOnChartArea: false,
            drawTicks: false
          },
          ticks: {
            display: false
          },
          border: {
            display: false
          }
        }
      }
    };
    this.barChartData = {
      labels: ['580k', '800k', '200k', '1M', '600k', '800k', '980k', '800k'],
      datasets: [{
        data: [],
        label: 'PDC',
        datalabels: {
          color: '#FFFFFF'
        },
        backgroundColor: '#D9D9D9',
        borderColor: '#D9D9D9',
        borderSkipped: false,
        borderRadius: {
          topLeft: 32,
          topRight: 32,
          bottomLeft: 32,
          bottomRight: 32
        },
        barThickness: this.getBarThickness()
      }, {
        data: [],
        label: 'Collected',
        datalabels: {
          color: '#FFFFFF'
        },
        backgroundColor: '#DC3545',
        borderColor: '#DC3545',
        borderSkipped: false,
        borderRadius: {
          topLeft: 32,
          topRight: 32,
          bottomLeft: 32,
          bottomRight: 32
        },
        barThickness: this.getBarThickness()
      }]
    };
    this.selectedYearValue = new Date();
    this.data = {};
  }
  ngAfterViewInit() {
    this.initChart();
  }
  onResize() {
    const barThickness = this.getBarThickness();
    this.barChartData.datasets[0].barThickness = barThickness;
    this.barChartData.datasets[1].barThickness = barThickness;
    if (this.chart) this.chart.update();
  }
  getBarThickness() {
    return window.innerWidth < 620 ? 14 : 32;
  }
  selectYearItem() {
    this.initChart();
  }
  initChart() {
    const filter = {};
    if (this.selectedYearValue) {
      filter.year = this.selectedYearValue.getFullYear();
    } else {
      filter.year = new Date().getFullYear();
    }
    this.data = _data__WEBPACK_IMPORTED_MODULE_1__.DashboardChartData;
    this.updateChart();
    // this.apiService.getPromissoryNotesPerYear(filter).subscribe((result) => {
    //   if (result?.isSuccess) {
    //     this.data = result.data || {};
    //     this.dataUpdated.emit(this.data);
    //   }
    //   this.updateChart();
    // });
  }

  updateChart() {
    if (!this.chart) {
      return;
    }
    this.barChartData.datasets[0].data = [this.data?.january?.collected || 0, this.data?.february?.collected || 0, this.data?.march?.collected || 0, this.data?.april?.collected || 0, this.data?.may?.collected || 0, this.data?.june?.collected || 0, this.data?.july?.collected || 0, this.data?.august?.collected || 0];
    this.barChartData.datasets[1].data = [this.data?.january?.uncollected || 0, this.data?.february?.uncollected || 0, this.data?.march?.uncollected || 0, this.data?.april?.uncollected || 0, this.data?.may?.uncollected || 0, this.data?.june?.uncollected || 0, this.data?.july?.uncollected || 0, this.data?.august?.uncollected || 0];
    this.chart.update();
  }
}
DashboardChequeChartComponent.ɵfac = function DashboardChequeChartComponent_Factory(t) {
  return new (t || DashboardChequeChartComponent)();
};
DashboardChequeChartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DashboardChequeChartComponent,
  selectors: [["app-dashboard-cheque-chart"]],
  viewQuery: function DashboardChequeChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    }
  },
  outputs: {
    dataUpdated: "dataUpdated"
  },
  decls: 0,
  vars: 0,
  template: function DashboardChequeChartComponent_Template(rf, ctx) {},
  styles: [".filter-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 24px;\n}\n\n.dropdown-action[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 32px;\n  position: relative;\n}\n.dropdown-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #f8f8f8;\n  border: 1px solid #c4cdd5;\n  border-radius: 8px;\n  padding: 0 32px 0 16px;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 24px;\n  color: #1b212d;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dropdown-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 24px;\n  transform: translateY(-50%);\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none !important;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8 !important;\n  color: #1b212d !important;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:focus {\n  background-color: #dc3545 !important;\n  color: white !important;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:active {\n  background-color: #f8f8f8 !important;\n  color: #1b212d !important;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: none;\n  background-color: #fff;\n  column-count: 1;\n  column-gap: 0px;\n  position: absolute;\n  top: 0%;\n  z-index: 9999;\n  max-height: 300px;\n  overflow-y: auto;\n  right: 0;\n  transform: translate(0px, 40px) !important;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 10px;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background-color: #555;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active {\n  background-color: #333;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  font-size: 14px;\n  color: #000;\n  font-weight: bold;\n  padding: 6px 16px;\n  cursor: pointer;\n}\n.dropdown-action[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover, .dropdown-action[_ngcontent-%COMP%]   .dropdown-item.selected[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);\n}\n.dropdown-action[_ngcontent-%COMP%]   .date-menu[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.dropdown-action[_ngcontent-%COMP%]   .date-item[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  margin-bottom: 0;\n  font-size: 12px;\n}\n\nnz-date-picker[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #1b212d;\n  background: #f8f8f8;\n  border: 1px solid #c4cdd5 !important;\n  height: 32px !important;\n  border-radius: 8px !important;\n}\nnz-date-picker[_ngcontent-%COMP%]:hover {\n  background-color: #e8e8e8;\n}\nnz-date-picker[_ngcontent-%COMP%]     input {\n  font-weight: 500 !important;\n  font-size: 15px !important;\n  line-height: 24px !important;\n  cursor: pointer;\n}\nnz-date-picker[_ngcontent-%COMP%]     input::placeholder {\n  color: #929eae;\n}\n\n.chart-wrapper[_ngcontent-%COMP%] {\n  width: 99%;\n  height: 360px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVwb3NpdC1jaGVxdWUvY2hlcXVlLWRhc2hib2FyZC9kYXNoYm9hcmQtY2hlcXVlLWNoYXJ0L2Rhc2hib2FyZC1jaGVxdWUtY2hhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRUo7QUFESTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQUdOO0FBQ0k7RUFDRSx3QkFBQTtBQUNOO0FBQ0k7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0FBQ047QUFDSTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7QUFDTjtBQUNJO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBQUNOO0FBRUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsMENBQUE7RUFDQSwwQ0FBQTtBQUFKO0FBRUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUdFO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxzQkFBQTtBQUZKO0FBS0U7RUFDRSxzQkFBQTtBQUhKO0FBTUU7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSko7QUFLSTtFQUVFLHlCQUFBO0VBQ0EsMENBQUE7QUFKTjtBQVFFO0VBQ0UsZUFBQTtBQU5KO0FBU0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUEo7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBUkY7QUFVRTtFQUNFLHlCQUFBO0FBUko7QUFZSTtFQUNFLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUFWTjtBQVlNO0VBQ0UsY0FBQTtBQVZSOztBQWdCQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBYkYiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMjRweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWFjdGlvbiB7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjZGQ1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMCAzMnB4IDAgMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGNvbG9yOiAjMWIyMTJkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBzdmcge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICByaWdodDogMjRweDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZHJvcGRvd24tdG9nZ2xlIHtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTggIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICMxYjIxMmQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjMWIyMTJkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kcm9wZG93bi1tZW51IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sdW1uLWNvdW50OiAxO1xyXG4gICAgY29sdW1uLWdhcDogMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwJTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICByaWdodDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgNDBweCkgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1tZW51Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogNnB4IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVyLFxyXG4gICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kYXRlLW1lbnUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmRhdGUtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxubnotZGF0ZS1waWNrZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzFiMjEyZDtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGNkZDUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjOTI5ZWFlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhcnQtd3JhcHBlciB7XHJcbiAgd2lkdGg6IDk5JTsgLy8gbm90IGZ1bGwgd2lkdGggYW5kIGZpeGVzIGZvciByZXNwb25zaXZlXHJcbiAgaGVpZ2h0OiAzNjBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9645:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/deposit-cheque/cheque-dashboard/replaced-cheque-detail-view/replaced-cheque-detail-view.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplacedChequeDetailViewComponent": () => (/* binding */ ReplacedChequeDetailViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/view-file/view-file.component */ 7761);




function ReplacedChequeDetailViewComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReplacedChequeDetailViewComponent_button_20_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const item_r2 = restoredCtx.$implicit;
      const index_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.chooseDeposit(item_r2, index_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", item_r2.id === ctx_r0.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
  }
}
function ReplacedChequeDetailViewComponent_div_21_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Cheque drawer name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.drawerName);
  }
}
function ReplacedChequeDetailViewComponent_div_21_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Customer Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.customer == null ? null : item_r6.customer.customerName);
  }
}
function ReplacedChequeDetailViewComponent_div_21_div_40_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No Image to display");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ReplacedChequeDetailViewComponent_div_21_div_40_div_2_button_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "button", 50);
  }
  if (rf & 2) {
    const i_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r22 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-bs-slide-to", i_r22)("aria-current", i_r22 === 0 ? "true" : null)("aria-label", "Slide " + (i_r22 + 1));
  }
}
function ReplacedChequeDetailViewComponent_div_21_div_40_div_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const image_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r24 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", image_r23 == null ? null : image_r23.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ReplacedChequeDetailViewComponent_div_21_div_40_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReplacedChequeDetailViewComponent_div_21_div_40_div_2_button_2_Template, 1, 5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6)(4, "div", 41)(5, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 45)(10, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ReplacedChequeDetailViewComponent_div_21_div_40_div_2_div_11_Template, 2, 3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 41)(13, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.details == null ? null : ctx_r18.details.chequeImages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.details == null ? null : ctx_r18.details.chequeImages);
  }
}
function ReplacedChequeDetailViewComponent_div_21_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReplacedChequeDetailViewComponent_div_21_div_40_div_1_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReplacedChequeDetailViewComponent_div_21_div_40_div_2_Template, 17, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r6 == null ? null : item_r6.chequeImages == null ? null : item_r6.chequeImages.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (item_r6 == null ? null : item_r6.chequeImages == null ? null : item_r6.chequeImages.length) > 0);
  }
}
function ReplacedChequeDetailViewComponent_div_21_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No Image to display");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ReplacedChequeDetailViewComponent_div_21_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReplacedChequeDetailViewComponent_div_21_div_41_div_1_Template, 4, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(item_r6 == null ? null : item_r6.chequeImages));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r6 == null ? null : item_r6.chequeImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function ReplacedChequeDetailViewComponent_div_21_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "view-file", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("file", item_r6 == null ? null : item_r6.actionFile)("download", true);
  }
}
function ReplacedChequeDetailViewComponent_div_21_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ReplacedChequeDetailViewComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 12)(2, "div", 13)(3, "div", 6)(4, "div", 14)(5, "div", 15)(6, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Amount to Pay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14)(11, "div", 15)(12, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Cheque No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14)(17, "div", 15)(18, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14)(24, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Bank ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ReplacedChequeDetailViewComponent_div_21_div_28_Template, 6, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ReplacedChequeDetailViewComponent_div_21_div_29_Template, 6, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "div", 20)(33, "div")(34, "div")(35, "div", 21)(36, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ReplacedChequeDetailViewComponent_div_21_div_40_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ReplacedChequeDetailViewComponent_div_21_div_41_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 24)(43, "div", 6)(44, "div", 25)(45, "div", 26)(46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Action Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 25)(51, "div", 26)(52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Action Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, ReplacedChequeDetailViewComponent_div_21_ng_container_54_Template, 2, 2, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ReplacedChequeDetailViewComponent_div_21_ng_template_55_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 30)(58, "div", 26)(59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Action Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 18)(64, "div", 31)(65, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReplacedChequeDetailViewComponent_div_21_Template_button_click_65_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](56);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r6.chequeCollectionJod, " JOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.chequeNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 19, item_r6.chequeDate, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6 == null ? null : item_r6.bank == null ? null : item_r6.bank.translations == null ? null : item_r6.bank.translations[0] == null ? null : item_r6.bank.translations[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedValue == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedValue == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.selectedCheque.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", item_r6 == null ? null : item_r6.statusObj == null ? null : item_r6.statusObj.lookupTextColor)("background-color", item_r6 == null ? null : item_r6.statusObj == null ? null : item_r6.statusObj.lookupBGColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r6 == null ? null : item_r6.statusObj == null ? null : item_r6.statusObj.translations == null ? null : item_r6.statusObj.translations[0] == null ? null : item_r6.statusObj.translations[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedValue == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.selectedValue == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((item_r6 == null ? null : item_r6.reason == null ? null : item_r6.reason.chequeActionReason) || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r6 == null ? null : item_r6.actionFile)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((item_r6 == null ? null : item_r6.notes) || "---");
  }
}
class ReplacedChequeDetailViewComponent {
  constructor() {
    this.selectedValue = 1;
    this.replacedCheque = [];
    this.details = [];
    this.sendtoLoadData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {
    // this.getdepositTypes();
    // this.selectedCheque = this.replacedCheque.find((x:any) => x.id == this.selectedValue);
  }
  chooseDeposit(deposit, index) {
    this.selectedValue = index + 1;
    this.selectedCheque = deposit;
  }
  getdepositTypes() {
    this.replacedCheque = [{
      id: 1,
      name: 'V1 Cheque Details',
      children: [{
        ChequeId: 1,
        ChequeAmount: "500JOD",
        ChequeNumber: 345465,
        ChequeDate: "16-june-2023",
        ChauqeBankID: "Arab Bank",
        ChauqeName: "Muhammad Ali sami mahmood",
        Customer: true,
        Note: "No note has been added"
      }]
    }, {
      id: 2,
      name: 'V2 Cheque Details',
      children: [{
        ChequeId: 2,
        ChequeAmount: "1000JOD",
        ChequeNumber: 100017,
        ChequeDate: "20-june-2023",
        ChauqeBankID: "National Bank",
        ChauqeName: "Muhammad Sami",
        Customer: false,
        Note: "Cheque replaced by the help of owner"
      }]
    }, {
      id: 3,
      name: 'V3 Cheque Details',
      children: [{
        ChequeId: 3,
        ChequeAmount: "1500JOD",
        ChequeNumber: 345617,
        ChequeDate: "10-june-2023",
        ChauqeBankID: "Arab Bank",
        ChauqeName: "Muhammad Sami Ibrahim",
        Customer: true,
        Note: "no comment"
      }]
    }];
  }
  close() {
    this.sendtoLoadData.emit();
  }
}
ReplacedChequeDetailViewComponent.ɵfac = function ReplacedChequeDetailViewComponent_Factory(t) {
  return new (t || ReplacedChequeDetailViewComponent)();
};
ReplacedChequeDetailViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ReplacedChequeDetailViewComponent,
  selectors: [["app-replaced-cheque-detail-view"]],
  inputs: {
    replacedCheque: "replacedCheque",
    details: "details",
    selectedCheque: "selectedCheque"
  },
  outputs: {
    sendtoLoadData: "sendtoLoadData"
  },
  decls: 22,
  vars: 7,
  consts: [[1, "modal-body"], [1, "cr-replace-heading"], [1, "d-flex", "right-title"], [1, "d-flex"], [1, "bold"], [1, "card-page"], [1, "row"], [1, "col-md-9"], [1, "btn-tabs"], ["type", "button", "class", "btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", 3, "click"], [1, "cr-replace-view"], [1, "cr-replace-head"], [1, "col-lg-3", "col-sm-6"], [1, "block"], [1, "title"], ["class", "col-lg-3 col-sm-6", 4, "ngIf"], [1, "col-lg-12"], [1, "cr-card", "mt-3"], [1, "wizard-content"], [1, "top-heading"], ["type", "button", 1, "btn", "btn-light", "collected-btn", 3, "disabled"], [4, "ngIf"], [1, "col-md-12", "mt-3"], [1, "col-4"], [1, "d-flex", "flex-column"], [1, "txt-light"], [4, "ngIf", "ngIfElse"], ["noActionFile", ""], [1, "col-12", "mt-2"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["class", "no-image-display", 4, "ngIf"], ["id", "carouselExampleIndicators1", "class", "carousel slide", "data-bs-ride", "carousel", 4, "ngIf"], [1, "no-image-display"], ["src", "https://cdn.dribbble.com/users/1785628/screenshots/5605512/media/097297f8e21d501ba45d7ce437ed77bd.gif", "alt", ""], [1, "text-center"], ["id", "carouselExampleIndicators1", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators1", 3, "active", 4, "ngFor", "ngForOf"], [1, "col-lg-1"], ["type", "button", "data-bs-target", "#carouselExampleIndicators1", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], [1, "col-lg-10"], [1, "carousel-inner"], ["class", "carousel-item", 3, "active", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleIndicators1", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["type", "button", "data-bs-target", "#carouselExampleIndicators1"], [1, "carousel-item"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], [1, "d-block", "w-100", 3, "src"], [3, "file", "download"]],
  template: function ReplacedChequeDetailViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Replace Cheque Details View");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Replace By:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3)(11, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Replace Date:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5)(17, "div", 6)(18, "div", 7)(19, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ReplacedChequeDetailViewComponent_button_20_Template, 2, 3, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ReplacedChequeDetailViewComponent_div_21_Template, 67, 22, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.createdBy == null ? null : ctx.details.createdBy.fullName);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 4, ctx.details == null ? null : ctx.details.createdAt, "dd/MM/yyyy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.replacedCheque);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedCheque.children);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_0__.ViewFileComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2459:
/*!*********************************************************************!*\
  !*** ./src/app/deposit-cheque/cheque-list/cheque-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChequeListComponent": () => (/* binding */ ChequeListComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Momen_alShouha_Desktop_Projects_DX_FE_Treasury_DX_FE_Treasury_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _deposit_cheque_modal_deposit_cheque_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deposit-cheque-modal/deposit-cheque-modal.component */ 5333);
/* harmony import */ var _replace_cheque_replace_cheque_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../replace-cheque/replace-cheque.component */ 4840);
/* harmony import */ var _cheque_dashboard_replaced_cheque_detail_view_replaced_cheque_detail_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cheque-dashboard/replaced-cheque-detail-view/replaced-cheque-detail-view.component */ 9645);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _postpone_cheque_postpone_cheque_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../postpone-cheque/postpone-cheque.component */ 7964);
/* harmony import */ var _shared_enums_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/enums/enum */ 5706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var src_app_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/deposit.service */ 8378);
/* harmony import */ var src_app_shared_services_permission_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/permission.service */ 8700);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/auth.service */ 8915);
/* harmony import */ var _shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/credit-card.service */ 1265);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/helper.service */ 1785);
/* harmony import */ var _shared_services_excel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/services/excel.service */ 8219);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/table-advanced/table-advanced.component */ 9973);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/table-advanced/table-advanced.directives */ 5746);
/* harmony import */ var _shared_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/directives/numbers-only.directive */ 3117);

























const _c0 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
function ChequeListComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11)(1, "button", 55)(2, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("bsValueChange", function ChequeListComponent_div_79_Template_input_bsValueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r18.onDateValueChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_div_79_Template_i_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r20.removeCollectionDateFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](1, _c0));
  }
}
function ChequeListComponent_div_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11)(1, "button", 55)(2, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("bsValueChange", function ChequeListComponent_div_80_Template_input_bsValueChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r21.onDueDateValueChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_div_80_Template_i_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r23.removeDueCollectionDateFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](1, _c0));
  }
}
function ChequeListComponent_div_81_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function ChequeListComponent_div_81_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", item_r27 + ",", " ");
  }
}
function ChequeListComponent_div_81_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 15)(1, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("change", function ChequeListComponent_div_81_a_9_Template_input_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r31);
      const item_r28 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r30.applybank(item_r28, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", item_r28.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" \u00A0 ", item_r28 == null ? null : item_r28.name == null ? null : item_r28.name[0].lookupName, " ");
  }
}
function ChequeListComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11)(1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Cheque Bank : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ChequeListComponent_div_81_span_3_Template, 2, 0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ChequeListComponent_div_81_div_4_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_div_81_Template_i_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r32.removebankFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "ul", 63)(8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, ChequeListComponent_div_81_a_9_Template, 3, 2, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r2.newDropdownbank.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.newDropdownbank);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.banksList);
  }
}
function ChequeListComponent_div_82_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const item_r35 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", (item_r35 == null ? null : item_r35.accountName) + "-" + (item_r35 == null ? null : item_r35.bankNameEnglish) + "-" + (item_r35 == null ? null : item_r35.accountNumber), " ");
  }
}
function ChequeListComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11)(1, "div", 67)(2, "ng-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ChequeListComponent_div_82_Template_ng_select_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r36.markaziaModel = $event);
    })("change", function ChequeListComponent_div_82_Template_ng_select_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r38.handleMarkaziaBankChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ChequeListComponent_div_82_ng_template_3_Template, 1, 1, "ng-template", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_div_82_Template_i_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r39.removeMarkaziaBank());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("items", ctx_r3.markaziaBankList)("multiple", true)("ngModel", ctx_r3.markaziaModel)("closeOnSelect", false);
  }
}
function ChequeListComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 11)(1, "button", 55)(2, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("input", function ChequeListComponent_div_83_Template_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r40.inputvalue($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_div_83_Template_i_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r42.removeAmount());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx_r4.displayAmount);
  }
}
function ChequeListComponent_ng_template_87_input_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ChequeListComponent_ng_template_87_input_0_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r47);
      const row_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().row;
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](row_r43.checked = $event);
    })("click", function ChequeListComponent_ng_template_87_input_0_Template_input_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r47);
      const row_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().row;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r48.getSelectedItem(row_r43, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("value", row_r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", row_r43.checked);
  }
}
function ChequeListComponent_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](0, ChequeListComponent_ng_template_87_input_0_Template, 1, 2, "input", 71);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r5.showMultiSelect);
  }
}
function ChequeListComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r51 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", row_r51 == null ? null : row_r51.chequeNo, " ");
  }
}
function ChequeListComponent_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r52 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", row_r52.customer == null ? null : row_r52.customer.customerName, " ");
  }
}
function ChequeListComponent_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r53 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", row_r53.bank, " ");
  }
}
function ChequeListComponent_ng_template_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r54 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](1, 1, row_r54.collectedAmount, "1.3-3"), " JOD ");
  }
}
function ChequeListComponent_ng_template_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "number");
  }
  if (rf & 2) {
    const row_r55 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](1, 1, row_r55.chequeCollectionJod, "1.3-3"), " ");
  }
}
function ChequeListComponent_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 73)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r56 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](row_r56 == null ? null : row_r56.currency[0] == null ? null : row_r56.currency[0].lookupName);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Ex. Rate ", row_r56 == null ? null : row_r56.currency[0] == null ? null : row_r56.currency[0].currencyRate, "");
  }
}
function ChequeListComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const row_r57 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](1, 1, row_r57.chequeDate, "dd MMM yyyy"), " ");
  }
}
function ChequeListComponent_ng_template_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "date");
  }
  if (rf & 2) {
    const row_r58 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](1, 1, row_r58.collectedAt, "dd MMM yyyy"), " ");
  }
}
function ChequeListComponent_ng_template_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 73)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r59 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](row_r59 == null ? null : row_r59.account == null ? null : row_r59.account.bankNameEnglish);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](row_r59 == null ? null : row_r59.account == null ? null : row_r59.account.bankNameArabic);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](row_r59 == null ? null : row_r59.account == null ? null : row_r59.account.accountNumber);
  }
}
function ChequeListComponent_ng_template_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r60 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleProp"]("color", row_r60 == null ? null : row_r60.statusObj == null ? null : row_r60.statusObj.lookupTextColor)("background-color", row_r60 == null ? null : row_r60.statusObj == null ? null : row_r60.statusObj.lookupBGColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", row_r60 == null ? null : row_r60.statusObj == null ? null : row_r60.statusObj.translations == null ? null : row_r60.statusObj.translations[0].lookupName, " ");
  }
}
function ChequeListComponent_ng_template_98_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function ChequeListComponent_ng_template_98_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function ChequeListComponent_ng_template_98_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
const _c1 = function (a0) {
  return [a0];
};
function ChequeListComponent_ng_template_98_ng_container_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](1, _c1, "/deposit-cheque/detail/" + row_r61.id));
  }
}
function ChequeListComponent_ng_template_98_ng_container_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](1, _c1, "/deposit-cheque/detail/" + row_r61.id));
  }
}
function ChequeListComponent_ng_template_98_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0)(1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ChequeListComponent_ng_template_98_ng_container_2_ng_container_2_Template, 3, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ChequeListComponent_ng_template_98_ng_container_2_ng_container_3_Template, 3, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ChequeListComponent_ng_template_98_ng_container_2_ng_container_4_Template, 3, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, ChequeListComponent_ng_template_98_ng_container_2_ng_container_5_Template, 3, 3, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, ChequeListComponent_ng_template_98_ng_container_2_ng_container_6_Template, 3, 3, "ng-container", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().row;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", row_r61 == null ? null : row_r61.statusObj == null ? null : row_r61.statusObj.lookupId);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r62.chequeStatusEnum.Deposited);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r62.chequeStatusEnum.ReDeposited);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r62.chequeStatusEnum.Postponed);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r62.chequeStatusEnum.Withdrawn);
  }
}
function ChequeListComponent_ng_template_98_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function ChequeListComponent_ng_template_98_ng_container_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function ChequeListComponent_ng_template_98_ng_container_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function ChequeListComponent_ng_template_98_ng_container_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function ChequeListComponent_ng_template_98_ng_container_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function ChequeListComponent_ng_template_98_ng_container_3_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](1, _c1, "/deposit-cheque/detail/" + row_r61.id));
  }
}
function ChequeListComponent_ng_template_98_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0)(1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ChequeListComponent_ng_template_98_ng_container_3_ng_container_2_Template, 3, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ChequeListComponent_ng_template_98_ng_container_3_ng_container_3_Template, 3, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ChequeListComponent_ng_template_98_ng_container_3_ng_container_4_Template, 3, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, ChequeListComponent_ng_template_98_ng_container_3_ng_container_5_Template, 3, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, ChequeListComponent_ng_template_98_ng_container_3_ng_container_6_Template, 3, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ChequeListComponent_ng_template_98_ng_container_3_ng_container_7_Template, 3, 3, "ng-container", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().row;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", row_r61 == null ? null : row_r61.statusObj == null ? null : row_r61.statusObj.lookupId);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r63.chequeStatusEnum.Deposited);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r63.chequeStatusEnum.ReDeposited);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r63.chequeStatusEnum.Bounced);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r63.chequeStatusEnum.Postponed);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r63.chequeStatusEnum.Withdrawn);
  }
}
function ChequeListComponent_ng_template_98_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](1, _c1, "/deposit-cheque/detail/" + row_r61.id));
  }
}
function ChequeListComponent_ng_template_98_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_7_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r92);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r90.depositDetail(29003, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_7_ng_container_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r92);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r93.depositDetail(29011, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Postpone");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_7_ng_container_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r92);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r95.depositDetail(29002, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Withdraw");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function ChequeListComponent_ng_template_98_ng_container_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_7_ng_container_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r99);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r97.depositDetail(29006, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Collect");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_7_ng_container_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r99);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r100.depositDetail(29001, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Bounce");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function ChequeListComponent_ng_template_98_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0)(1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ChequeListComponent_ng_template_98_ng_container_7_ng_container_2_Template, 7, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ChequeListComponent_ng_template_98_ng_container_7_ng_container_3_Template, 5, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", ctx_r65.userDetails == null ? null : ctx_r65.userDetails.role == null ? null : ctx_r65.userDetails.role.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", 46);
  }
}
function ChequeListComponent_ng_template_98_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_8_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r106);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r104.depositDetail(29003, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_8_ng_container_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r106);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r107.depositDetail(29011, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Postpone");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_8_ng_container_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r106);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r109.depositDetail(29002, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Withdraw");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function ChequeListComponent_ng_template_98_ng_container_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_8_ng_container_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r113);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r111.depositDetail(29006, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Collect");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_8_ng_container_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r113);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r114.depositDetail(29001, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Bounce");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function ChequeListComponent_ng_template_98_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0)(1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ChequeListComponent_ng_template_98_ng_container_8_ng_container_2_Template, 7, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ChequeListComponent_ng_template_98_ng_container_8_ng_container_3_Template, 5, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", ctx_r66.userDetails == null ? null : ctx_r66.userDetails.role == null ? null : ctx_r66.userDetails.role.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", 46);
  }
}
function ChequeListComponent_ng_template_98_ng_container_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_9_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r120);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r118.depositDetail(29003, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_9_ng_container_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r120);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r121.depositDetail(29004, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Re-Deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_9_ng_container_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r120);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r123.depositDetail(29017, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "Pay In Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function ChequeListComponent_ng_template_98_ng_container_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](1, _c1, "/deposit-cheque/detail/" + row_r61.id));
  }
}
function ChequeListComponent_ng_template_98_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0)(1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ChequeListComponent_ng_template_98_ng_container_9_ng_container_2_Template, 7, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ChequeListComponent_ng_template_98_ng_container_9_ng_container_3_Template, 4, 3, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", ctx_r67.userDetails == null ? null : ctx_r67.userDetails.role == null ? null : ctx_r67.userDetails.role.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", 46);
  }
}
function ChequeListComponent_ng_template_98_ng_container_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_10_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r130);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r128.depositDetail(29003, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_10_ng_container_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r130);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r131.depositDetail(29002, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Withdraw");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function ChequeListComponent_ng_template_98_ng_container_10_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_10_ng_container_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r135);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r133.depositDetail(29006, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Collect");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_10_ng_container_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r135);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r136.depositDetail(29001, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Bounce");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
}
function ChequeListComponent_ng_template_98_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0)(1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ChequeListComponent_ng_template_98_ng_container_10_ng_container_2_Template, 5, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ChequeListComponent_ng_template_98_ng_container_10_ng_container_3_Template, 5, 0, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", ctx_r68.userDetails == null ? null : ctx_r68.userDetails.role == null ? null : ctx_r68.userDetails.role.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", 46);
  }
}
function ChequeListComponent_ng_template_98_ng_container_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_ng_template_98_ng_container_11_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r142);
      const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r140.depositDetail(row_r61 == null ? null : row_r61.nextAllowedActionId, row_r61));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](row_r61 == null ? null : row_r61.nextAllowedAction[0] == null ? null : row_r61.nextAllowedAction[0].lookupName);
  }
}
function ChequeListComponent_ng_template_98_ng_container_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](1, _c1, "/deposit-cheque/detail/" + row_r61.id));
  }
}
function ChequeListComponent_ng_template_98_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0)(1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ChequeListComponent_ng_template_98_ng_container_11_ng_container_2_Template, 3, 1, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ChequeListComponent_ng_template_98_ng_container_11_ng_container_3_Template, 4, 3, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", ctx_r69.userDetails == null ? null : ctx_r69.userDetails.role == null ? null : ctx_r69.userDetails.role.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", 46);
  }
}
function ChequeListComponent_ng_template_98_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainer"](0);
  }
}
function ChequeListComponent_ng_template_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](1, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, ChequeListComponent_ng_template_98_ng_container_2_Template, 7, 5, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, ChequeListComponent_ng_template_98_ng_container_3_Template, 8, 6, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, ChequeListComponent_ng_template_98_ng_container_4_Template, 3, 3, "ng-container", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](6, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, ChequeListComponent_ng_template_98_ng_container_7_Template, 4, 3, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, ChequeListComponent_ng_template_98_ng_container_8_Template, 4, 3, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, ChequeListComponent_ng_template_98_ng_container_9_Template, 4, 3, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, ChequeListComponent_ng_template_98_ng_container_10_Template, 4, 3, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, ChequeListComponent_ng_template_98_ng_container_11_Template, 4, 3, "ng-container", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, ChequeListComponent_ng_template_98_ng_container_12_Template, 1, 0, "ng-container", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r61 = ctx.row;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", ctx_r16.userDetails == null ? null : ctx_r16.userDetails.role == null ? null : ctx_r16.userDetails.role.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitch", row_r61 == null ? null : row_r61.statusObj == null ? null : row_r61.statusObj.lookupId);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r16.chequeStatusEnum.Deposited);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r16.chequeStatusEnum.ReDeposited);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r16.chequeStatusEnum.Bounced);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r16.chequeStatusEnum.Postponed);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngSwitchCase", ctx_r16.chequeStatusEnum.Withdrawn);
  }
}
function ChequeListComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 88)(1, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_div_99_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r146);
      const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r145.multi());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
class ChequeListComponent {
  constructor(modalService, depositservice, permission, _datePipe, _authService, creditcardservice, _router, _helperService, _excelService) {
    this.modalService = modalService;
    this.depositservice = depositservice;
    this.permission = permission;
    this._datePipe = _datePipe;
    this._authService = _authService;
    this.creditcardservice = creditcardservice;
    this._router = _router;
    this._helperService = _helperService;
    this._excelService = _excelService;
    this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null);
    this.searchChequeText = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null);
    this.statusIdControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null);
    this.chequeType = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('');
    this.loading = false;
    this.page = 1;
    this.total = 0;
    this.limit = 6;
    this.sort = 1;
    this.tableConfig = {
      paging: true,
      filter: {
        Sort: 1,
        PageSize: this.limit
      }
    };
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null);
    this.tableColumns = [];
    this.deposites = [];
    this.totalAllRecordsCount = 0;
    this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
    this.actionList = [];
    this.markaziaModel = [];
    this.showMultiSelect = false;
    this.pendingChequesActions = [28008, 28009, 28010, 28011];
    this.chequeStatusEnum = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_5__.ChequeStatusEnum;
    this.chequeActionEnum = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_5__.ChequeActionEnum;
    this.selecteddata = [];
    /**
    * filter selection
    */
    this.bank = false;
    this.amount = false;
    this.displayAmount = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(0);
    this.collectionDate = false;
    this.dueDate = false;
    this.markaziaBank = false;
    this.markaziaBankList = [];
    this.newDropdownbank = [];
    this.dropDownbankId = [];
  }
  ngOnInit() {
    let values = JSON.parse(localStorage.getItem('chequeFilters'));
    if (values?.searchChequeText) {
      this.searchChequeText.setValue(values?.searchChequeText);
      this.tableConfig.filter.ChequeNo = values?.searchChequeText;
    }
    if (values?.searchText) {
      this.searchText.setValue(values?.searchText);
      this.tableConfig.filter.Customer = values?.searchText;
    }
    if (values?.statusIdControl) {
      this.statusIdControl.setValue(values?.statusIdControl);
      this.tableConfig.filter.Status = values?.statusIdControl;
    }
    if (values?.chequeType) {
      this.chequeType.setValue(values?.chequeType);
      this.tableConfig.filter.IsPDC = values?.chequeType;
    }
    localStorage.removeItem('chequeFilters');
    this.getbanks();
    this.initTableColumns();
    this.fetchData();
    this.getUserDetails();
    this.searchChequeText.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.unsubscribe)).subscribe(value => {
      const text = value || '';
      if (text?.length >= 3 || !text?.length && this.tableConfig.filter.ChequeNo?.length) {
        this.tableConfig.filter.ChequeNo = text;
        this.page = 1;
        this.selecteddata = [];
        this.fetchData();
      }
    });
    this.searchText.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.unsubscribe)).subscribe(value => {
      const text = value || '';
      if (text?.length >= 3 || !text?.length && this.tableConfig.filter.Customer?.length) {
        this.tableConfig.filter.Customer = text;
        this.selecteddata = [];
        this.page = 1;
        this.fetchData();
      }
    });
  }
  getChequesForExport() {
    this.loading = true;
    this.tableConfig.filter.PageNo = this.page - 1;
    this.tableConfig.filter.PageSize = 10000;
    this.depositservice.getDepositCheques(this.tableConfig.filter).subscribe(result => {
      if (result) {
        this.tableConfig.filter.PageSize = this.limit;
        this.generateExcelExport(result.data);
      }
    }).add(() => this.loading = false);
  }
  generateExcelExport(data) {
    var _this = this;
    return (0,C_Users_Momen_alShouha_Desktop_Projects_DX_FE_Treasury_DX_FE_Treasury_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      data = data.map(x => {
        return {
          ...x,
          chequeDate: _this._helperService.dateFormate(x?.chequeDate),
          collectedAt: _this._helperService.dateFormate(x?.collectedAt),
          markaziaBA: `${x?.account?.bankNameEnglish}-${x?.account?.bankNameArabic}-${x?.account?.accountNumber}`
        };
      });
      const exportOptions = {
        fileName: 'Cheques_List',
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
          headers: ['Cheque No', 'Customer Account', 'Customer Name', 'Cheque Bank', 'Due Date', 'Amount', 'Currency', 'Amount (JOD)', 'Collection Date', 'Markazia Bank Account', 'Status'],
          mainKeyMapping: ['chequeNo', 'customer.customerId', 'customer.customerName', 'bank', 'chequeDate', 'collectedAmount', 'currency[0].lookupName', 'chequeCollectionJod', 'collectedAt', 'markaziaBA', 'statusObj.translations[0].lookupName'],
          data: data
        }]
      };
      const result = yield _this._excelService.exportToExcelJs1(exportOptions);
    })();
  }
  getUserDetails() {
    this._authService.getLoggedUserDetails().subscribe(response => {
      this.userDetails = response?.data;
    });
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    let nextRoute = this._router.url;
    if (nextRoute.includes('/deposit-cheque/detail')) {
      let filters = {
        searchChequeText: this.searchChequeText.value,
        searchText: this.searchText.value,
        statusIdControl: this.statusIdControl.value,
        chequeType: this.chequeType.value
      };
      localStorage.setItem('chequeFilters', JSON.stringify(filters));
    }
  }
  fetchData() {
    this.loading = true;
    // this.makeDepositList(depositChequeList);
    // this.tableConfig.filter.BranchTypeId = this.selectedBranch.id;
    this.tableConfig.filter.PageNo = this.page - 1;
    this.depositservice.getDepositCheques(this.tableConfig.filter).subscribe(result => {
      if (result) {
        this.makeListData(result.data || []);
        if (this.selecteddata.length > 0) {
          this.deposites.forEach(element => {
            let findElement = this.selecteddata.find(elem => elem.id == element.id);
            if (findElement) element.checked = true;
          });
        }
        this.totalAllRecordsCount = result?.totalRecordCount;
        this.total = result?.totalRecordCount;
      }
    }).add(() => this.loading = false);
  }
  makeListData(data) {
    const updatedData = data.map(item => {
      let chequeType = item.statusObj?.translations?.[0]?.lookupName;
      let dueDate = this._datePipe.transform(item.chequeDate, 'yyyy-MM-dd');
      const isCollectedInPast = this.isDateWithinFiveDays(dueDate) && chequeType != 'Collected' && chequeType != 'Withdrawn' && chequeType != 'Replaced';
      return {
        ...item,
        isCollectedInPast
      };
    });
    this.deposites = updatedData;
  }
  isDateWithinFiveDays(inputDate) {
    const currentDate = new Date();
    const futureDate = new Date(inputDate);
    futureDate.setDate(futureDate.getDate() + 5);
    let value = currentDate >= futureDate;
    return value;
  }
  onSortChange(sort) {
    if (sort?.direction && sort?.column) {
      switch (sort.column) {
        case 'chequeNo':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 3 : 2;
          break;
        case 'customerName':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 5 : 4;
          break;
        case 'bank':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 7 : 6;
          break;
        case 'chequeDate':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 9 : 8;
          break;
        case 'chequeCollectionJod':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 11 : 10;
          break;
        case 'collectedAt':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 13 : 12;
          break;
        case 'status':
          this.tableConfig.filter.Sort = sort.direction === 'desc' ? 15 : 14;
          break;
        default:
          break;
      }
    } else {
      this.tableConfig.filter.Sort = 1;
    }
    this.fetchData();
  }
  onPageChange(page) {
    this.page = page;
    this.fetchData();
  }
  initTableColumns() {
    this.tableColumns = [{
      key: 'select',
      label: 'Select All',
      canSort: true
    }, {
      key: 'chequeNo',
      label: 'Cheque No',
      canSort: true
    }, {
      key: 'customer.customerId',
      label: 'Customer Account'
    }, {
      key: 'customerName',
      label: 'Customer Name',
      canSort: true
    }, {
      key: 'bank',
      label: 'Cheque Bank',
      canSort: true
    }, {
      key: 'chequeDate',
      label: 'Due Date',
      canSort: true
    }, {
      key: 'collectedAmount',
      label: 'Amount',
      canSort: true
    }, {
      key: 'currency',
      label: 'Currency'
    }, {
      key: 'chequeCollectionJod',
      label: 'Amount (JOD)'
    }, {
      key: 'collectedAt',
      label: 'Collection Date',
      canSort: true
    }, {
      key: 'markaziaBA',
      label: 'Markazia Bank Account'
    }, {
      key: 'status',
      label: 'Status',
      canSort: true
    }, {
      key: 'action',
      label: 'Action'
    }];
  }
  getStatusLabel(item) {
    if (item && item.name && item.name.length > 0) {
      return item.name[0].lookupName;
    }
    return '';
  }
  onSelectData(selectedData) {}
  getSelectedItem(data, event) {
    if (this.selecteddata.length == 0 && event.target.checked) {
      this.sort = 1;
      this.page = 1;
      if (this.tableConfig.filter.Status != data.status) {
        this.selecteddata.push(data);
        this.tableConfig.filter.Status = data.status;
        this.fetchData();
      } else this.selecteddata.push(data);
    } else if (event.target.checked) {
      this.selecteddata.push(data);
    } else {
      const index = this.selecteddata.findIndex(selectedDataItem => {
        return this.areObjectsEqual(selectedDataItem, data);
      });
      if (index !== -1) {
        this.selecteddata.splice(index, 1);
      }
    }
  }
  areObjectsEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
  multiSelect() {
    this.showMultiSelect = !this.showMultiSelect;
    if (!this.showMultiSelect) {
      delete this.tableConfig.filter.Status;
      this.selecteddata = [];
      this.fetchData();
    }
  }
  removeSearch() {
    this.searchText.setValue(null);
    this.sort = 1;
    this.selecteddata = [];
    this.page = 1;
    delete this.tableConfig.filter.Customer;
    this.fetchData();
  }
  removeChequeSearch() {
    this.searchChequeText.setValue(null);
    this.sort = 1;
    this.page = 1;
    this.selecteddata = [];
    delete this.tableConfig.filter.ChequeNo;
    this.fetchData();
  }
  handleCategoryChange(event) {
    this.tableConfig.filter.Status = event.id;
    // this.statusId = event?.id;
    this.sort = 1;
    this.page = 1;
    this.selecteddata = [];
    this.fetchData();
  }
  onClear() {
    delete this.tableConfig.filter.Status;
    // this.statusId = null;
    this.selecteddata = [];
    this.page = 1;
    this.fetchData();
  }
  filterbank(event) {
    this.bank = event.checked;
  }
  filteramount(event) {
    this.amount = event.checked;
  }
  filterMarkaziaBank(event) {
    this.markaziaBank = event.checked;
    //let params = `?pageSize=1000&status=1001`;
    //this.depositservice.getSageBanksAccounts(params).subscribe(response => {
    //  this.markaziaBankList = response.data;
    //})
    this.creditcardservice.getBankAccounts(`pageSize=1000&status=2001`).subscribe(response => {
      this.markaziaBankList = response.data;
    });
  }
  filterCollectionDates(event) {
    this.collectionDate = event.checked;
  }
  filterDueDates(event) {
    this.dueDate = event.checked;
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
      this.tableConfig.filter.Amount = parseFloat(inputValue).toFixed(3);
      this.displayAmount.patchValue(parseFloat(parseFloat(inputValue).toFixed(3)));
      this.page = 1;
      this.selecteddata = [];
      this.sort = 1;
      this.fetchData();
    } else if (inputValue.includes('-')) {
      this.displayAmount.patchValue(0);
    } else if (isNaN(parseFloat(inputValue))) {
      this.displayAmount.patchValue(0);
    } else if (parseFloat(inputValue) == 0 && !checkPoint) {
      this.displayAmount.patchValue(0);
    }
  }
  getbanks() {
    const api1$ = this.depositservice.getBankLookups(11);
    const api2$ = this.depositservice.getLookups('', `lookupTypeId=28&pageSize=1000`);
    const api3$ = this.depositservice.getLookups('', `lookupTypeId=29&pageSize=1000`);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.forkJoin)([api1$, api2$, api3$]).subscribe(([result1, result2, result3]) => {
      this.banksList = result1.data || [];
      this.statusId = result2.data || [];
      this.actionList = result3.data || [];
    }, error => {
      console.error(error);
    }, () => {
      this.loading = false;
    });
  }
  depositDetail(action, row) {
    let item = this.actionList.find(x => x.id == action);
    if (item?.id == 29002) this.openModalTrigger(item, row, 'Withdraw Cheque', true, true);else if (item?.id == 29001) this.openModalTrigger(item, row, 'Bounce Cheque', true, true);else if (item?.id == 29004) this.openModalTrigger(item, row, 'Re-deposited Cheque', true, true);else if (item?.id == 29006) this.openModalTrigger(item, row, 'Collect Cheque', true, true);else if (item?.id == _shared_enums_enum__WEBPACK_IMPORTED_MODULE_5__.ChequeActionEnum.PaidInCash) this.openModalTrigger(item, row, 'Pay In Cash', true, true);else if (item?.id == 29003) this.replace(item, row);else if (item?.id == _shared_enums_enum__WEBPACK_IMPORTED_MODULE_5__.ChequeActionEnum.Postpone) this.replace(item, row);else if (item?.name?.[0].lookupName == 'replace-view') this.replaceView();
  }
  openModalTrigger(actionType, detail, item, confirm, detailShow) {
    debugger;
    let listArray = [];
    if (this.showMultiSelect) {
      this.selecteddata.forEach(element => {
        const data = this.deposites.find(a => a.id === element.id);
        listArray.push(data);
      });
    } else listArray = [detail];
    const modalRef = this.modalService.open(_deposit_cheque_modal_deposit_cheque_modal_component__WEBPACK_IMPORTED_MODULE_1__.DepositChequeModalComponent, {
      backdrop: 'static',
      keyboard: false,
      size: 'xl'
    });
    modalRef.componentInstance.details = listArray;
    modalRef.componentInstance.title = item;
    modalRef.componentInstance.isConfirmShow = confirm;
    modalRef.componentInstance.detailShow = detailShow;
    modalRef.componentInstance.actionType = actionType;
    modalRef.componentInstance.sendtoLoadData.subscribe(result => {
      if (result) {
        if (!this.showMultiSelect) {
          this.fetchData();
        } else this.multiSelect();
      }
      modalRef.dismiss();
      //this.modalService.dismissAll();
      // this.getList();
    });
  }

  replace(actionType, detail) {
    let listArray = [];
    if (this.showMultiSelect) {
      this.selecteddata.forEach(element => {
        const data = this.deposites.find(a => a.id === element.id);
        listArray.push(data);
      });
    } else listArray = [detail];
    let component = actionType.id == 29003 && _replace_cheque_replace_cheque_component__WEBPACK_IMPORTED_MODULE_2__.ReplaceChequeComponent || _postpone_cheque_postpone_cheque_component__WEBPACK_IMPORTED_MODULE_4__.PostponeChequeComponent;
    const modalRef = this.modalService.open(component, {
      backdrop: 'static',
      keyboard: false,
      size: 'xl',
      windowClass: 'custom-modal-popup'
    });
    modalRef.componentInstance.details = listArray;
    modalRef.componentInstance.actionType = actionType;
    modalRef.componentInstance.sendtoLoadData.subscribe(result => {
      if (result) {
        /*this.ngOnInit();*/
        this.multiSelect();
      }
      modalRef.dismiss();
    });
  }
  replaceView() {
    const modalRef = this.modalService.open(_cheque_dashboard_replaced_cheque_detail_view_replaced_cheque_detail_view_component__WEBPACK_IMPORTED_MODULE_3__.ReplacedChequeDetailViewComponent, {
      backdrop: 'static',
      keyboard: false,
      size: 'xl'
    });
    modalRef.componentInstance.sendtoLoadData.subscribe(result => {
      console.log('resendtoLoadDatasult', result);
      this.modalService.dismissAll();
      // this.getList();
    });
  }

  removebankFilter() {
    this.newDropdownbank = [];
    this.dropDownbankId = [];
    delete this.tableConfig.filter.BankId;
    this.bank = false;
    this.page = 1;
    this.selecteddata = [];
    this.sort = 1;
    this.fetchData();
  }
  removeCollectionDateFilter() {
    this.collectionDate = false;
    delete this.tableConfig.filter.FromDate;
    delete this.tableConfig.filter.ToDate;
    this.selecteddata = [];
    this.page = 1;
    this.sort = 1;
    this.fetchData();
  }
  removeDueCollectionDateFilter() {
    this.dueDate = false;
    delete this.tableConfig.filter.FromDueDate;
    delete this.tableConfig.filter.ToDueDate;
    this.selecteddata = [];
    this.page = 1;
    this.sort = 1;
    this.fetchData();
  }
  removeAmount() {
    this.displayAmount.patchValue(0);
    this.amount = false;
    delete this.tableConfig.filter.Amount;
    this.page = 1;
    this.selecteddata = [];
    this.sort = 1;
    this.fetchData();
  }
  applybank(item, event) {
    const obj4 = item.name?.[0].lookupName;
    const bankId = item.id;
    if (event.target.checked) {
      // checking if the checkbox has been checked
      this.newDropdownbank.push(obj4); // pushing object to newArray[]
      this.dropDownbankId.push(bankId); // pushing object to newArray[]
    } else {
      this.newDropdownbank = this.newDropdownbank.filter(v => v !== obj4); // if the checkbox has been unchecked removing the object from the array
      this.dropDownbankId = this.dropDownbankId.filter(x => x !== bankId);
    }
    this.tableConfig.filter.BankId = this.dropDownbankId;
    this.selecteddata = [];
    this.page = 1;
    this.fetchData();
  }
  handleMarkaziaBankChange(event) {
    this.tableConfig.filter.accountId = event?.map(x => x.accountId).toString() || '';
    this.selecteddata = [];
    this.page = 1;
    this.sort = 1;
    this.fetchData();
  }
  removeMarkaziaBank() {
    this.markaziaModel = [];
    delete this.tableConfig.filter.accountId;
    this.markaziaBank = false;
    this.page = 1;
    this.sort = 1;
    this.selecteddata = [];
    this.fetchData();
  }
  onDateValueChange(event) {
    var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe('en-US');
    let startDate = pipe.transform(event[0]) || '';
    let endDate = pipe.transform(event[1]) || '';
    this.tableConfig.filter.FromDate = startDate;
    this.tableConfig.filter.ToDate = endDate;
    this.selecteddata = [];
    this.page = 1;
    this.sort = 1;
    this.fetchData();
  }
  onDueDateValueChange(event) {
    var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe('en-US');
    let startDate = pipe.transform(event[0]) || '';
    let endDate = pipe.transform(event[1]) || '';
    if (startDate) {
      const fromDate = new Date(startDate);
      fromDate.setDate(fromDate.getDate() + 1); // Adding one day
      const formattedFromDate = fromDate.toISOString();
      this.tableConfig.filter.FromDueDate = formattedFromDate;
    } else this.tableConfig.filter.FromDueDate = startDate;
    if (endDate) {
      const fromDate = new Date(endDate);
      fromDate.setDate(fromDate.getDate() + 1); // Adding one day
      const formattedFromDate = fromDate.toISOString();
      this.tableConfig.filter.ToDueDate = formattedFromDate;
    } else this.tableConfig.filter.ToDueDate = endDate;
    this.selecteddata = [];
    this.page = 1;
    this.sort = 1;
    this.fetchData();
  }
  IsPDCFilter(IsPDC) {
    this.tableConfig.filter.IsPDC = IsPDC;
    this.selecteddata = [];
    this.page = 1;
    this.sort = 1;
    this.fetchData();
  }
  canPerformAction(catId, subCatId, perItemName) {
    return this.permission.checkPermission(catId, subCatId, perItemName);
  }
  multi() {
    this.showMultiSelect = false;
    this.selecteddata = [];
    this.page = 1;
    this.sort = 1;
    delete this.tableConfig.filter.Status;
    this.fetchData();
  }
}
ChequeListComponent.ɵfac = function ChequeListComponent_Factory(t) {
  return new (t || ChequeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_6__.DepositService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_shared_services_permission_service__WEBPACK_IMPORTED_MODULE_7__.PermissionService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_credit_card_service__WEBPACK_IMPORTED_MODULE_9__.CreditCardService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_10__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_11__.ExcelService));
};
ChequeListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: ChequeListComponent,
  selectors: [["app-cheque-list"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe])],
  decls: 100,
  vars: 32,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-2"], [1, "input-group", "search-box"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "click"], [1, "fa-solid", "fa-search"], ["type", "text", "numbersOnly", "", "placeholder", "Search By Cheque No", 1, "form-control", 3, "formControl"], ["type", "button", "id", "button-addon1", 1, "btn", 3, "hidden", "click"], [1, "fa-solid", "fa-xmark"], ["type", "text", "placeholder", "Search By Customer Name", 1, "form-control", 3, "formControl"], ["placeholder", "Search By Status", "bindLabel", "description", "bindValue", "id", 1, "flex-grow-1", "mt-3", "mt-md-0", 3, "items", "formControl", "clear", "change"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdownButton", "more-filter-drop"], [1, "fa-regular", "fa-plus"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "menu"], [1, "dropdown-item"], ["type", "checkbox", 1, "checkBox", 3, "ngModel", "ngModelChange", "change"], [1, "col-md-4", "d-flex", "justify-content-end", "gap-2", "align-items-center"], [1, "btn", "btn-add", 3, "click"], ["type", "button", 1, "btn", "btn-success", "cp", "btn-lg", "font-16", 3, "click"], [1, "fas", "fa-file-excel", "me-2"], [1, "deposited-cheques-list-tabs"], [1, "col-lg-7"], [1, "col-lg-4"], [1, "col-lg-8"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-light"], [1, "form-check"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios1", "value", "", "checked", "", 1, "form-check-input", 3, "formControl", "click"], ["for", "exampleRadios1", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios2", "value", "true", 1, "form-check-input", 3, "formControl", "click"], ["for", "exampleRadios2", 1, "form-check-label"], ["type", "radio", "name", "exampleRadios", "id", "exampleRadios3", "value", "false", 1, "form-check-input", 3, "formControl", "click"], ["for", "exampleRadios3", 1, "form-check-label"], [1, "col-lg-4", "offset-1"], [1, "col-lg-6"], [1, "col-lg-6", "d-flex", "justify-content-end"], [1, "filterFlex", "mt-2"], ["class", "dropdown", 4, "ngIf"], [1, "row", "mt-2"], [1, "col-md-12"], [2, "cursor", "pointer", 3, "showMultiSelect", "config", "columns", "selecteddata", "link", "data", "loading", "page", "total", "limit", "selectedData", "sortUpdated", "pageUpdated"], ["libTableAdvancedColumn", "select"], ["libTableAdvancedColumn", "chequeNo"], ["libTableAdvancedColumn", "customerName"], ["libTableAdvancedColumn", "bank"], ["libTableAdvancedColumn", "collectedAmount"], ["libTableAdvancedColumn", "chequeCollectionJod"], ["libTableAdvancedColumn", "currency"], ["libTableAdvancedColumn", "chequeDate"], ["libTableAdvancedColumn", "collectedAt"], ["libTableAdvancedColumn", "markaziaBA"], ["libTableAdvancedColumn", "status"], ["libTableAdvancedColumn", "action"], ["class", "btns-group", 4, "ngIf"], ["type", "button", 1, "btn", "dropdownFilters"], ["type", "text", "placeholder", "Select Collection Date", "bsDaterangepicker", "", 1, "form-control", 2, "height", "46px", "border", "none", 3, "bsConfig", "bsValueChange"], [1, "fa-regular", "fa-circle-xmark", 3, "click"], ["type", "text", "placeholder", "Select Due Date", "bsDaterangepicker", "", 1, "form-control", 2, "height", "46px", "border", "none", 3, "bsConfig", "bsValueChange"], ["type", "button", "id", "dropdownbank", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "dropdownFilters"], [4, "ngIf"], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "fa-solid", "fa-chevron-down"], ["aria-labelledby", "dropdownbank", 1, "dropdown-menu", "menu2"], ["class", "dropdown-item", 4, "ngFor", "ngForOf"], [1, "d-flex"], ["type", "checkbox", 1, "checkBox", 3, "value", "change"], [1, "dropdownFilters", "p-1", 2, "height", "auto"], ["placeholder", "Markazia Bank", "bindLabel", "accountName", "bindValue", "accountId", 3, "items", "multiple", "ngModel", "closeOnSelect", "ngModelChange", "change"], ["ng-option-tmp", ""], ["type", "text", "placeholder", "Enter Amount", 1, "form-control", 2, "height", "46px", "border", "none", 3, "formControl", "input"], ["type", "checkbox", 3, "value", "ngModel", "ngModelChange", "click", 4, "ngIf"], ["type", "checkbox", 3, "value", "ngModel", "ngModelChange", "click"], [1, "d-flex", "flex-column"], [1, "txt-light"], [1, "collected-btn"], ["ngbDropdown", "", "container", "body", 1, "d-inline-block"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["ngbDropdownMenu", "", 1, "dropdown-menu-end"], ["ngbDropdownToggle", "", 1, "d-inline-flex", "justify-content-center", 2, "width", "20px"], [1, "fa-solid", "fa-ellipsis-v", "font-20", "cursor-pointer"], [3, "routerLink"], [1, "fa-light", "fa-eye"], ["ngbDropdownItem", "", 1, "btn", 3, "click"], ["ngbDropdownItem", "", 1, "btn", 3, "routerLink"], [1, "me-2", "fa-light", "fa-eye"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"]],
  template: function ChequeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_Template_button_click_4_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_Template_button_click_7_listener() {
        return ctx.removeChequeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 2)(10, "div", 3)(11, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_Template_button_click_11_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_Template_button_click_14_listener() {
        return ctx.removeSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 2)(17, "ng-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("clear", function ChequeListComponent_Template_ng_select_clear_17_listener() {
        return ctx.onClear();
      })("change", function ChequeListComponent_Template_ng_select_change_17_listener($event) {
        return ctx.handleCategoryChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 2)(19, "div", 11)(20, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](21, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](22, " More Filters ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "ul", 14)(24, "li")(25, "a", 15)(26, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ChequeListComponent_Template_input_ngModelChange_26_listener($event) {
        return ctx.collectionDate = $event;
      })("change", function ChequeListComponent_Template_input_change_26_listener($event) {
        return ctx.filterCollectionDates($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](27, " \u00A0 Collection Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](28, "a", 15)(29, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ChequeListComponent_Template_input_ngModelChange_29_listener($event) {
        return ctx.dueDate = $event;
      })("change", function ChequeListComponent_Template_input_change_29_listener($event) {
        return ctx.filterDueDates($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, " \u00A0 Due Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "a", 15)(32, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ChequeListComponent_Template_input_ngModelChange_32_listener($event) {
        return ctx.bank = $event;
      })("change", function ChequeListComponent_Template_input_change_32_listener($event) {
        return ctx.filterbank($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, " \u00A0 Cheque Bank ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "a", 15)(35, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ChequeListComponent_Template_input_ngModelChange_35_listener($event) {
        return ctx.amount = $event;
      })("change", function ChequeListComponent_Template_input_change_35_listener($event) {
        return ctx.filteramount($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](36, " \u00A0Amount ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](37, "a", 15)(38, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngModelChange", function ChequeListComponent_Template_input_ngModelChange_38_listener($event) {
        return ctx.markaziaBank = $event;
      })("change", function ChequeListComponent_Template_input_change_38_listener($event) {
        return ctx.filterMarkaziaBank($event.target);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, " \u00A0Markazia Bank ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 17)(41, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_Template_button_click_41_listener() {
        return ctx.multiSelect();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](43, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_Template_button_click_43_listener() {
        return ctx.getChequesForExport();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](44, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](45, " Export");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "div", 21)(47, "div", 1)(48, "div", 22)(49, "div", 1)(50, "div", 23)(51, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, "Deposited Cheques List");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "div", 24)(54, "div", 25)(55, "button", 26)(56, "div", 27)(57, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_Template_input_click_57_listener() {
        return ctx.IsPDCFilter("");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](59, " All ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](60, "button", 26)(61, "div", 27)(62, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_Template_input_click_62_listener() {
        return ctx.IsPDCFilter(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](63, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](64, " PDC Cheques ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "button", 26)(66, "div", 27)(67, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ChequeListComponent_Template_input_click_67_listener() {
        return ctx.IsPDCFilter(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](69, " Cheques ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](70, "div", 34)(71, "div", 1)(72, "div", 35)(73, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](74, "Reminder List");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](75, "div", 36)(76, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](78, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](79, ChequeListComponent_div_79_Template, 4, 2, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](80, ChequeListComponent_div_80_Template, 4, 2, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](81, ChequeListComponent_div_81_Template, 10, 3, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](82, ChequeListComponent_div_82_Template, 5, 4, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](83, ChequeListComponent_div_83_Template, 4, 1, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](84, "div", 39)(85, "div", 40)(86, "app-table-advanced", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("selectedData", function ChequeListComponent_Template_app_table_advanced_selectedData_86_listener($event) {
        return ctx.onSelectData($event);
      })("sortUpdated", function ChequeListComponent_Template_app_table_advanced_sortUpdated_86_listener($event) {
        return ctx.onSortChange($event);
      })("pageUpdated", function ChequeListComponent_Template_app_table_advanced_pageUpdated_86_listener($event) {
        return ctx.onPageChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](87, ChequeListComponent_ng_template_87_Template, 1, 1, "ng-template", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](88, ChequeListComponent_ng_template_88_Template, 1, 1, "ng-template", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](89, ChequeListComponent_ng_template_89_Template, 1, 1, "ng-template", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](90, ChequeListComponent_ng_template_90_Template, 1, 1, "ng-template", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](91, ChequeListComponent_ng_template_91_Template, 2, 4, "ng-template", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](92, ChequeListComponent_ng_template_92_Template, 2, 4, "ng-template", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](93, ChequeListComponent_ng_template_93_Template, 5, 2, "ng-template", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](94, ChequeListComponent_ng_template_94_Template, 2, 4, "ng-template", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](95, ChequeListComponent_ng_template_95_Template, 2, 4, "ng-template", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](96, ChequeListComponent_ng_template_96_Template, 7, 3, "ng-template", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](97, ChequeListComponent_ng_template_97_Template, 2, 5, "ng-template", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](98, ChequeListComponent_ng_template_98_Template, 13, 9, "ng-template", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](99, ChequeListComponent_div_99_Template, 3, 0, "div", 54);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx.searchChequeText);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx.searchChequeText.value == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx.searchText.value == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("items", ctx.statusId)("formControl", ctx.statusIdControl);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.collectionDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.dueDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.bank);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.amount);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngModel", ctx.markaziaBank);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx.showMultiSelect && "Remove Multi Select" || "Multi Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx.chequeType);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx.chequeType);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx.chequeType);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("Total No. ", ctx.totalAllRecordsCount, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.collectionDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.dueDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.bank);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.markaziaBank);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.amount);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("showMultiSelect", ctx.showMultiSelect)("config", ctx.tableConfig)("columns", ctx.tableColumns)("selecteddata", ctx.selecteddata)("link", "deposit-cheque/detail")("data", ctx.deposites)("loading", ctx.loading)("page", ctx.page)("total", ctx.total)("limit", ctx.limit);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showMultiSelect);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgSwitchDefault, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_23__.NgbDropdownItem, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_25__.NgOptionTemplateDirective, _shared_components_table_advanced_table_advanced_component__WEBPACK_IMPORTED_MODULE_12__.TableAdvancedComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__.BsDaterangepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_26__.BsDaterangepickerInputDirective, _shared_components_table_advanced_table_advanced_directives__WEBPACK_IMPORTED_MODULE_13__.TableAdvancedColumnDirective, _shared_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_14__.NumberOnlyDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe],
  styles: [".applyMargin[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n\n.total[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 15px 0 0px;\n  padding: 10px 0px;\n}\n.total[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  color: #929eae;\n  margin: 0px;\n  padding: 10px 0px;\n}\n\n.card-table[_ngcontent-%COMP%] {\n  border: 0.5px solid #f4f4f4;\n  box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -webkit-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n  -moz-box-shadow: 3px 7px 12px 0px rgba(0, 0, 0, 0.18);\n}\n\n.btn-provide[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 8px 14px 8px 14px;\n  border-radius: 4px;\n  font-size: 12px;\n  width: 80px;\n}\n\n.btn-disabled[_ngcontent-%COMP%] {\n  background-color: #c5c6c7;\n  color: white;\n  outline: none;\n  border: none;\n  padding: 8px 14px 8px 14px;\n  border-radius: 4px;\n  font-size: 12px;\n  width: 80px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  gap: 8px;\n}\n\n.play-left[_ngcontent-%COMP%] {\n  color: #eceaea;\n  transform: rotate(180deg);\n  margin-right: 5px;\n}\n\n.play-right[_ngcontent-%COMP%] {\n  color: #eceaea;\n}\n\n.dropdownBox[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 150px;\n  height: 48px;\n  background: #4e9aff;\n  border-radius: 8px;\n}\n\n.headButton[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 95px;\n  height: 34.2px;\n  border-radius: 8px;\n}\n\n.headButtonText[_ngcontent-%COMP%] {\n  font-family: Kumbh Sans;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n  letter-spacing: 0em;\n  text-align: left;\n}\n\n.menu[_ngcontent-%COMP%] {\n  width: 180px;\n  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1));\n}\n\n.menu2[_ngcontent-%COMP%] {\n  width: 235px;\n  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1));\n}\n\n.more-filter-drop[_ngcontent-%COMP%] {\n  height: 46px;\n  width: 150px;\n  background: #4e9aff;\n  border-radius: 8px;\n  color: white;\n  outline: none;\n  border: none;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 12px 12px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.checkBox[_ngcontent-%COMP%] {\n  accent-color: #dc3545;\n  width: 16px;\n  height: 16px;\n}\n\n.dropdownFilters[_ngcontent-%COMP%] {\n  height: 48px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #dc3545;\n}\n\n.filterFlex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.btn-edit[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]:after {\n  border: none;\n}\n\n.cp[_ngcontent-%COMP%] {\n  padding: 10.5px 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVwb3NpdC1jaGVxdWUvY2hlcXVlLWxpc3QvY2hlcXVlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsZ0RBQUE7RUFDQSx3REFBQTtFQUNBLHFEQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7QUFJRjs7QUFGQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxZQUFBO0VBQ0EscURBQUE7QUFNRjs7QUFIQTtFQUNFLFlBQUE7RUFFQSxxREFBQTtBQUtGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBS0Y7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSEE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtBQU1GOztBQUhBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUZFO0VBQ0UsV0FBQTtBQUtKOztBQURFO0VBQ0UsWUFBQTtBQUlKOztBQURBO0VBQ0ksb0JBQUE7QUFJSiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBseU1hcmdpbiB7XHJcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xyXG59XHJcbi50b3RhbCB7XHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogMTVweCAwIDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGNvbG9yOiAjOTI5ZWFlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICB9XHJcbn1cclxuLmNhcmQtdGFibGUge1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgI2Y0ZjRmNDtcclxuICBib3gtc2hhZG93OiAzcHggN3B4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggN3B4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggN3B4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbn1cclxuLmJ0bi1wcm92aWRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA4cHggMTRweCA4cHggMTRweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcbi5idG4tZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNWM2Yzc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDhweCAxNHB4IDhweCAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn1cclxuLnBhZ2luYXRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG4ucGxheS1sZWZ0IHtcclxuICBjb2xvcjogI2VjZWFlYTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5wbGF5LXJpZ2h0IHtcclxuICBjb2xvcjogI2VjZWFlYTtcclxufVxyXG5cclxuLmRyb3Bkb3duQm94IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuXHJcbiAgYmFja2dyb3VuZDogIzRlOWFmZjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5oZWFkQnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDk1cHg7XHJcbiAgaGVpZ2h0OiAzNC4ycHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4uaGVhZEJ1dHRvblRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBLdW1iaCBTYW5zO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ubWVudSB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xyXG59XHJcblxyXG4ubWVudTIge1xyXG4gIHdpZHRoOiAyMzVweDtcclxuXHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XHJcbn1cclxuXHJcbi5tb3JlLWZpbHRlci1kcm9wIHtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICM0ZTlhZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDEycHggMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jaGVja0JveCB7XHJcbiAgYWNjZW50LWNvbG9yOiAjZGMzNTQ1O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxufVxyXG5cclxuLmRyb3Bkb3duRmlsdGVycyB7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7XHJcbn1cclxuXHJcbi5maWx0ZXJGbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmJ0bi1lZGl0IHtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgfVxyXG59XHJcbi5kcm9wZG93bi10b2dnbGUge1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG4uY3B7XHJcbiAgICBwYWRkaW5nOjEwLjVweCAyNHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9362:
/*!***************************************************************************!*\
  !*** ./src/app/deposit-cheque/dashboard-card/dashboard-card.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardCardComponent": () => (/* binding */ DashboardCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function DashboardCardComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r0.amount, ".3"), " ", ctx_r0.currency, "");
  }
}
function DashboardCardComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r1.amount, ".3"), " ", ctx_r1.currency, "");
  }
}
class DashboardCardComponent {
  constructor() {
    this.icon = '';
    this.label = '';
    this.amount = 0;
    this.chequeAmount = 0;
    this.currency = '';
    this.isCurrency = true;
  }
}
DashboardCardComponent.ɵfac = function DashboardCardComponent_Factory(t) {
  return new (t || DashboardCardComponent)();
};
DashboardCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DashboardCardComponent,
  selectors: [["app-dashboard-card"]],
  inputs: {
    icon: "icon",
    label: "label",
    amount: "amount",
    chequeAmount: "chequeAmount",
    currency: "currency",
    isCurrency: "isCurrency"
  },
  decls: 10,
  vars: 5,
  consts: [[1, "card-note"], [1, "icon-box"], [3, "src"], [1, "content"], [1, "label-txt"], [1, "label"], ["class", "amount", 4, "ngIf"], [1, "amount"]],
  template: function DashboardCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardCardComponent_span_8_Template, 3, 5, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DashboardCardComponent_span_9_Template, 3, 5, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.chequeAmount, " Cheques");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCurrency);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCurrency);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
  styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n\n.card-note[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 15px;\n  gap: 12px;\n  background: #ffffff;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 8px;\n}\n.card-note[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 8px;\n  gap: 8px;\n  width: 40px;\n  height: 40px;\n  background: #f8f8f8;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n}\n.card-note[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.card-note[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  font-family: \"KumbhSans-Medium\", sans-serif !important;\n  line-height: 24px;\n  color: #929eae;\n}\n.card-note[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .label-txt[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: 0.016em;\n  color: #00261c;\n  font-family: \"KumbhSans-Medium\", sans-serif !important;\n}\n.card-note[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-family: \"KumbhSans-Medium\", sans-serif !important;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.016em;\n  color: #00261c;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVwb3NpdC1jaGVxdWUvZGFzaGJvYXJkLWNhcmQvZGFzaGJvYXJkLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFFRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FBQUo7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFESjtBQUdJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0RBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFETjtBQUlJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxzREFBQTtBQUZOO0FBS0k7RUFDRSxnQkFBQTtFQUNBLHNEQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBSE4iLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmNhcmQtbm90ZSB7XHJcbiAgLy8gbWluLXdpZHRoOiAyMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGdhcDogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgLmljb24tYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDhweDtcclxuXHJcbiAgICAubGFiZWwge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoU2Fucy1NZWRpdW1cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgY29sb3I6ICM5MjllYWU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhYmVsLXR4dCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNmVtO1xyXG4gICAgICBjb2xvcjogIzAwMjYxYztcclxuICAgICAgZm9udC1mYW1pbHk6IFwiS3VtYmhTYW5zLU1lZGl1bVwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFtb3VudCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkt1bWJoU2Fucy1NZWRpdW1cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTZlbTtcclxuICAgICAgY29sb3I6ICMwMDI2MWM7XHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 895:
/*!****************************************!*\
  !*** ./src/app/deposit-cheque/data.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Branches": () => (/* binding */ Branches),
/* harmony export */   "Category": () => (/* binding */ Category),
/* harmony export */   "DashboardChartData": () => (/* binding */ DashboardChartData),
/* harmony export */   "Register": () => (/* binding */ Register),
/* harmony export */   "Users": () => (/* binding */ Users),
/* harmony export */   "depositChequeList": () => (/* binding */ depositChequeList)
/* harmony export */ });
var Branches = [{
  "branchId": 23,
  "branchName": "Test Branch GG",
  "phone": "123456780",
  "email": "gg@gmail.com",
  "country": "India",
  "city": "Tamil Nadu",
  "branchArea": "Chennai",
  "address": "K. K. Nagar, Chennai, Tamil Nadu, India",
  "latitude": "13.0410013",
  "longitude": "80.1993919",
  "status": 2001,
  "createdAt": "2023-06-17T18:51:52.2342542",
  "branchType": [{
    "branchTypeId": 3001,
    "orderTypeCanCollect": 7002,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Direct Payment Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Showroom Branches"
    }, {
      "languageId": 1002,
      "lookupName": "معارض"
    }]
  }]
}, {
  "branchId": 22,
  "branchName": "gluiguigiuhi",
  "phone": null,
  "email": null,
  "country": "Lebanon",
  "city": "محافظة بيروت",
  "branchArea": "بيروت",
  "address": "STR 2065, Alfred Naccache، بيروت، Lebanon",
  "latitude": "33.8884933",
  "longitude": "35.5196149",
  "status": 2001,
  "createdAt": "2023-06-16T21:01:32.7563746",
  "branchType": [{
    "branchTypeId": 3001,
    "orderTypeCanCollect": 7002,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Direct Payment Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Showroom Branches"
    }, {
      "languageId": 1002,
      "lookupName": "معارض"
    }]
  }]
}, {
  "branchId": 21,
  "branchName": "guygujmfgjgfjhvb",
  "phone": null,
  "email": null,
  "country": "Lebanon",
  "city": "محافظة بيروت",
  "branchArea": "بيروت",
  "address": "STR 2065, Alfred Naccache، بيروت، Lebanon",
  "latitude": "33.8884933",
  "longitude": "35.5196149",
  "status": 2001,
  "createdAt": "2023-06-16T20:59:52.6778152",
  "branchType": [{
    "branchTypeId": 3001,
    "orderTypeCanCollect": 7002,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Direct Payment Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Showroom Branches"
    }, {
      "languageId": 1002,
      "lookupName": "معارض"
    }]
  }]
}, {
  "branchId": 20,
  "branchName": "New test edit edit",
  "phone": null,
  "email": "thh+02@hh.co",
  "country": "Jordan",
  "city": "Amman Governorate",
  "branchArea": "Gardens",
  "address": "Amman, Jordan",
  "latitude": "31.9539494",
  "longitude": "35.910635",
  "status": 2001,
  "createdAt": "2023-06-16T18:56:43.6633489",
  "branchType": [{
    "branchTypeId": 3001,
    "orderTypeCanCollect": 7002,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Direct Payment Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Showroom Branches"
    }, {
      "languageId": 1002,
      "lookupName": "معارض"
    }]
  }, {
    "branchTypeId": 3002,
    "orderTypeCanCollect": 7001,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Services Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Service Center Branches"
    }, {
      "languageId": 1002,
      "lookupName": "مراكز خدمة"
    }]
  }]
}, {
  "branchId": 19,
  "branchName": "test duplicate",
  "phone": null,
  "email": null,
  "country": "Indonesia",
  "city": "Daerah Khusus Ibukota Jakarta",
  "branchArea": "Kota Jakarta Selatan",
  "address": "Jl. DR. Saharjo I No.1, RT.1/RW.5, Manggarai, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12850, Indonesia",
  "latitude": "-6.20842209091785",
  "longitude": "106.8481739206543",
  "status": 2001,
  "createdAt": "2023-06-16T12:14:02.932086",
  "branchType": [{
    "branchTypeId": 3001,
    "orderTypeCanCollect": 7002,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Direct Payment Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Showroom Branches"
    }, {
      "languageId": 1002,
      "lookupName": "معارض"
    }]
  }]
}, {
  "branchId": 18,
  "branchName": "ffaddd",
  "phone": null,
  "email": null,
  "country": "United States",
  "city": "California",
  "branchArea": "San Francisco",
  "address": "Japantown, San Francisco, CA, USA",
  "latitude": "37.7846321",
  "longitude": "-122.4313039",
  "status": 2001,
  "createdAt": "2023-06-16T10:26:04.2023217",
  "branchType": [{
    "branchTypeId": 3001,
    "orderTypeCanCollect": 7002,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Direct Payment Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Showroom Branches"
    }, {
      "languageId": 1002,
      "lookupName": "معارض"
    }]
  }]
}, {
  "branchId": 17,
  "branchName": "Branch Test",
  "phone": null,
  "email": null,
  "country": "Jordan",
  "city": "Amman Governorate",
  "branchArea": "Wadi As-Seir",
  "address": "Al-Madina Al-Monawara St, Amman, Jordan",
  "latitude": "31.97258070000001",
  "longitude": "35.8645648",
  "status": 2001,
  "createdAt": "2023-06-16T09:30:40.7186166",
  "branchType": [{
    "branchTypeId": 3001,
    "orderTypeCanCollect": 7002,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Direct Payment Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Showroom Branches"
    }, {
      "languageId": 1002,
      "lookupName": "معارض"
    }]
  }]
}, {
  "branchId": 16,
  "branchName": "tetataww",
  "phone": null,
  "email": null,
  "country": "United States",
  "city": "Oregon",
  "branchArea": "Portland",
  "address": "Portland, OR, USA",
  "latitude": "45.515232",
  "longitude": "-122.6783853",
  "status": 2001,
  "createdAt": "2023-06-13T18:47:13.1776417",
  "branchType": [{
    "branchTypeId": 3001,
    "orderTypeCanCollect": 7002,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Direct Payment Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Showroom Branches"
    }, {
      "languageId": 1002,
      "lookupName": "معارض"
    }]
  }]
}, {
  "branchId": 14,
  "branchName": "Mecca Street",
  "phone": null,
  "email": null,
  "country": "Jordan",
  "city": "Amman Governorate",
  "branchArea": "Mecca Street",
  "address": "Mecca St., Amman, Jordan",
  "latitude": "31.9749561",
  "longitude": "35.863232",
  "status": 2001,
  "createdAt": "2023-05-24T19:40:22.0483508",
  "branchType": [{
    "branchTypeId": 3001,
    "orderTypeCanCollect": 7002,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Direct Payment Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Showroom Branches"
    }, {
      "languageId": 1002,
      "lookupName": "معارض"
    }]
  }]
}, {
  "branchId": 13,
  "branchName": "Spare Parts HO",
  "phone": null,
  "email": null,
  "country": "Jordan",
  "city": "Amman Governorate",
  "branchArea": "Wadi As-Seir",
  "address": "Al Bayader, Amman, Jordan",
  "latitude": "31.9529717",
  "longitude": "35.8202638",
  "status": 2001,
  "createdAt": "2023-05-24T18:57:17.4019932",
  "branchType": [{
    "branchTypeId": 3003,
    "orderTypeCanCollect": 7003,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Spare Parts Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Spare parts Branches"
    }, {
      "languageId": 1002,
      "lookupName": "قطع الغيار"
    }]
  }]
}, {
  "branchId": 12,
  "branchName": "Spare Parts Zarqa",
  "phone": null,
  "email": null,
  "country": "Jordan",
  "city": "Zarqa Governorate",
  "branchArea": "Zarqa",
  "address": "332W+G9V, Zarqa, Jordan",
  "latitude": "32.0513509",
  "longitude": "36.0959173",
  "status": 2001,
  "createdAt": "2023-05-24T18:54:42.8494462",
  "branchType": [{
    "branchTypeId": 3003,
    "orderTypeCanCollect": 7003,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Spare Parts Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Spare parts Branches"
    }, {
      "languageId": 1002,
      "lookupName": "قطع الغيار"
    }]
  }]
}, {
  "branchId": 11,
  "branchName": "Spare Parts Yamaha",
  "phone": null,
  "email": null,
  "country": "Jordan",
  "city": "Amman Governorate",
  "branchArea": "Wadi As-Seir",
  "address": "Al Bayader, Amman, Jordan",
  "latitude": "31.9529717",
  "longitude": "35.8202638",
  "status": 2001,
  "createdAt": "2023-05-24T18:53:53.1171993",
  "branchType": [{
    "branchTypeId": 3003,
    "orderTypeCanCollect": 7003,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Spare Parts Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Spare parts Branches"
    }, {
      "languageId": 1002,
      "lookupName": "قطع الغيار"
    }]
  }]
}, {
  "branchId": 10,
  "branchName": "Spre Parts Sweileh",
  "phone": null,
  "email": null,
  "country": "Jordan",
  "city": "Amman Governorate",
  "branchArea": "Sweileh",
  "address": "Sweileh, Amman, Jordan",
  "latitude": "32.021888",
  "longitude": "35.8439368",
  "status": 2001,
  "createdAt": "2023-05-24T18:53:16.8808725",
  "branchType": [{
    "branchTypeId": 3003,
    "orderTypeCanCollect": 7003,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Spare Parts Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Spare parts Branches"
    }, {
      "languageId": 1002,
      "lookupName": "قطع الغيار"
    }]
  }]
}, {
  "branchId": 9,
  "branchName": "Spare Parts Remam",
  "phone": null,
  "email": null,
  "country": "Jordan",
  "city": "Amman Governorate",
  "branchArea": "Al Yarmouk",
  "address": "Al Yarmouk 240, Amman, Jordan",
  "latitude": "31.9419066",
  "longitude": "35.9525738",
  "status": 2001,
  "createdAt": "2023-05-24T18:51:59.5138562",
  "branchType": [{
    "branchTypeId": 3003,
    "orderTypeCanCollect": 7003,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Spare Parts Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Spare parts Branches"
    }, {
      "languageId": 1002,
      "lookupName": "قطع الغيار"
    }]
  }]
}, {
  "branchId": 8,
  "branchName": "Spare Parts Main",
  "phone": null,
  "email": null,
  "country": "Jordan",
  "city": "Amman Governorate",
  "branchArea": "Wadi As-Seir",
  "address": "Al Bayader, Amman, Jordan",
  "latitude": "31.9529717",
  "longitude": "35.8202638",
  "status": 2001,
  "createdAt": "2023-05-24T18:49:06.6720286",
  "branchType": [{
    "branchTypeId": 3003,
    "orderTypeCanCollect": 7003,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Spare Parts Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Spare parts Branches"
    }, {
      "languageId": 1002,
      "lookupName": "قطع الغيار"
    }]
  }]
}, {
  "branchId": 7,
  "branchName": "Spare Parts Irbid",
  "phone": null,
  "email": null,
  "country": "11814",
  "city": "محافظة إربد",
  "branchArea": "Jordan",
  "address": "City Centre St إربد،, 11814, Jordan",
  "latitude": "32.5358248",
  "longitude": "35.864891",
  "status": 2001,
  "createdAt": "2023-05-24T18:48:31.2635099",
  "branchType": [{
    "branchTypeId": 3003,
    "orderTypeCanCollect": 7003,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Spare Parts Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Spare parts Branches"
    }, {
      "languageId": 1002,
      "lookupName": "قطع الغيار"
    }]
  }]
}, {
  "branchId": 6,
  "branchName": "Spare Parts Bayader",
  "phone": null,
  "email": null,
  "country": "Jordan",
  "city": "Amman Governorate",
  "branchArea": "Wadi As-Seir",
  "address": "Al Bayader, Amman, Jordan",
  "latitude": "31.9529717",
  "longitude": "35.8202638",
  "status": 2001,
  "createdAt": "2023-05-24T18:47:55.1227332",
  "branchType": [{
    "branchTypeId": 3003,
    "orderTypeCanCollect": 7003,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Spare Parts Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Spare parts Branches"
    }, {
      "languageId": 1002,
      "lookupName": "قطع الغيار"
    }]
  }]
}, {
  "branchId": 5,
  "branchName": "Service Center  HO",
  "phone": null,
  "email": null,
  "country": "Jordan",
  "city": "Amman Governorate",
  "branchArea": "Wadi As-Seir",
  "address": "Al Bayader, Amman, Jordan",
  "latitude": "31.9529717",
  "longitude": "35.8202638",
  "status": 2001,
  "createdAt": "2023-05-24T17:17:11.4765281",
  "branchType": [{
    "branchTypeId": 3002,
    "orderTypeCanCollect": 7001,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Services Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Service Center Branches"
    }, {
      "languageId": 1002,
      "lookupName": "مراكز خدمة"
    }]
  }]
}, {
  "branchId": 4,
  "branchName": "SC Yamaha",
  "phone": null,
  "email": null,
  "country": "Jordan",
  "city": "Amman Governorate",
  "branchArea": "Wadi As-Seir",
  "address": "Al Bayader, Amman, Jordan",
  "latitude": "31.9529717",
  "longitude": "35.8202638",
  "status": 2001,
  "createdAt": "2023-05-24T17:16:09.9367388",
  "branchType": [{
    "branchTypeId": 3002,
    "orderTypeCanCollect": 7001,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Services Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Service Center Branches"
    }, {
      "languageId": 1002,
      "lookupName": "مراكز خدمة"
    }]
  }]
}, {
  "branchId": 1,
  "branchName": "SC Marka",
  "phone": null,
  "email": null,
  "country": "Jordan",
  "city": "Amman Governorate",
  "branchArea": "Marka",
  "address": "Marka, Amman, Jordan",
  "latitude": "31.9777666",
  "longitude": "35.9801855",
  "status": 2001,
  "createdAt": "2023-05-24T17:15:18.8308697",
  "branchType": [{
    "branchTypeId": 3002,
    "orderTypeCanCollect": 7001,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Services Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Service Center Branches"
    }, {
      "languageId": 1002,
      "lookupName": "مراكز خدمة"
    }]
  }]
}, {
  "branchId": 2,
  "branchName": "SC Lexus",
  "phone": null,
  "email": null,
  "country": "Jordan",
  "city": "Amman Governorate",
  "branchArea": "Wadi As-Seir",
  "address": "Al Bayader, Amman, Jordan",
  "latitude": "31.9529717",
  "longitude": "35.8202638",
  "status": 2001,
  "createdAt": "2023-05-24T17:14:48.4349072",
  "branchType": [{
    "branchTypeId": 3002,
    "orderTypeCanCollect": 7001,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Services Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Service Center Branches"
    }, {
      "languageId": 1002,
      "lookupName": "مراكز خدمة"
    }]
  }]
}, {
  "branchId": 0,
  "branchName": "SC Bayader",
  "phone": null,
  "email": null,
  "country": "Jordan",
  "city": "Amman Governorate",
  "branchArea": "Wadi As-Seir",
  "address": "Al Bayader, Amman, Jordan",
  "latitude": "31.9529717",
  "longitude": "35.8202638",
  "status": 2001,
  "createdAt": "2023-05-24T17:13:26.4078564",
  "branchType": [{
    "branchTypeId": 3002,
    "orderTypeCanCollect": 7001,
    "orderTypeCanCollectName": [{
      "languageId": 1001,
      "lookupName": "Services Sales Orders"
    }],
    "name": [{
      "languageId": 1001,
      "lookupName": "Service Center Branches"
    }, {
      "languageId": 1002,
      "lookupName": "مراكز خدمة"
    }]
  }]
}];
const Register = [{
  "id": 71,
  "registersName": "JasTwoRegister",
  "branch": {
    "branchName": "SC Bayader",
    "branchId": 0
  },
  "status": 2001,
  "createdAt": "2023-05-18T10:30:20.5854446"
}, {
  "id": 72,
  "registersName": "ABC Test Register",
  "branch": {
    "branchName": "SC Bayader",
    "branchId": 0
  },
  "status": 2001,
  "createdAt": "2023-05-18T10:47:26.9319379"
}, {
  "id": 73,
  "registersName": "asdfasf asdad a",
  "branch": {
    "branchName": "SC Bayader",
    "branchId": 0
  },
  "status": 2001,
  "createdAt": "2023-06-14T01:26:57.7049752"
}, {
  "id": 69,
  "registersName": "JasmineRegister",
  "branch": {
    "branchName": "Spare Parts Zarqa",
    "branchId": 12
  },
  "status": 2001,
  "createdAt": "2023-05-17T08:42:02.7615054"
}];
const Users = [{
  "userId": 900108,
  "fullName": "Ali Second Cashier",
  "email": "info+077@abc-programmers.com",
  "mobile": null,
  "outdoor": false,
  "indoor": false,
  "city": "Amman Governorate",
  "createdAt": "2023-06-10T11:20:06.7963726",
  "lastLogin": null,
  "status": 2001,
  "invitation": 2004,
  "profileImage": "",
  "branch": {
    "branchId": 14,
    "branchName": "Mecca Street"
  },
  "role": {
    "roleId": 1,
    "name": "Cashier"
  },
  "workingHours": [{
    "dayId": 6001,
    "day": [{
      "languageId": 1001,
      "lookupName": "Sunday"
    }, {
      "languageId": 1002,
      "lookupName": "الأحد"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-06-10T11:20:06.7967765"
  }, {
    "dayId": 6002,
    "day": [{
      "languageId": 1001,
      "lookupName": "Monday"
    }, {
      "languageId": 1002,
      "lookupName": "الاثنين"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-06-10T11:20:06.7967885"
  }, {
    "dayId": 6003,
    "day": [{
      "languageId": 1001,
      "lookupName": "Tuesday"
    }, {
      "languageId": 1002,
      "lookupName": "الثلاثاء"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-06-10T11:20:06.7967912"
  }, {
    "dayId": 6004,
    "day": [{
      "languageId": 1001,
      "lookupName": "Wednessday"
    }, {
      "languageId": 1002,
      "lookupName": "الأربعاء"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-06-10T11:20:06.7967922"
  }, {
    "dayId": 6005,
    "day": [{
      "languageId": 1001,
      "lookupName": "Thursday"
    }, {
      "languageId": 1002,
      "lookupName": "الخميس"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-06-10T11:20:06.7967932"
  }, {
    "dayId": 6007,
    "day": [{
      "languageId": 1001,
      "lookupName": "Saturday"
    }, {
      "languageId": 1002,
      "lookupName": "السبت"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-06-10T11:20:06.7967952"
  }],
  "permissions": [{
    "permissionItems": {
      "permissionItemId": 11,
      "perItemName": "Yes"
    },
    "permissionItemDetails": null,
    "createdAt": "2023-06-10T11:20:06.8065023"
  }, {
    "permissionItems": {
      "permissionItemId": 15,
      "perItemName": "Yes"
    },
    "permissionItemDetails": null,
    "createdAt": "2023-06-10T11:20:06.8080885"
  }]
}, {
  "userId": 900103,
  "fullName": "Test Invitation",
  "email": "info+05@abc-programmers.com",
  "mobile": "775855011",
  "outdoor": false,
  "indoor": false,
  "city": "Amman Governorate",
  "createdAt": "2023-05-28T18:52:43.8262204",
  "lastLogin": "2023-06-01T09:53:28.7649662",
  "status": 2001,
  "invitation": 2004,
  "profileImage": "",
  "branch": {
    "branchId": 14,
    "branchName": "Mecca Street"
  },
  "role": {
    "roleId": 1,
    "name": "Cashier"
  },
  "workingHours": [{
    "dayId": 6001,
    "day": [{
      "languageId": 1001,
      "lookupName": "Sunday"
    }, {
      "languageId": 1002,
      "lookupName": "الأحد"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-05-28T18:52:43.8262401"
  }, {
    "dayId": 6002,
    "day": [{
      "languageId": 1001,
      "lookupName": "Monday"
    }, {
      "languageId": 1002,
      "lookupName": "الاثنين"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-05-28T18:52:43.8262423"
  }, {
    "dayId": 6003,
    "day": [{
      "languageId": 1001,
      "lookupName": "Tuesday"
    }, {
      "languageId": 1002,
      "lookupName": "الثلاثاء"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-05-28T18:52:43.8262445"
  }, {
    "dayId": 6004,
    "day": [{
      "languageId": 1001,
      "lookupName": "Wednessday"
    }, {
      "languageId": 1002,
      "lookupName": "الأربعاء"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-05-28T18:52:43.8262457"
  }, {
    "dayId": 6005,
    "day": [{
      "languageId": 1001,
      "lookupName": "Thursday"
    }, {
      "languageId": 1002,
      "lookupName": "الخميس"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-05-28T18:52:43.8262484"
  }, {
    "dayId": 6007,
    "day": [{
      "languageId": 1001,
      "lookupName": "Saturday"
    }, {
      "languageId": 1002,
      "lookupName": "السبت"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-05-28T18:52:43.8262499"
  }],
  "permissions": [{
    "permissionItems": {
      "permissionItemId": 11,
      "perItemName": "Yes"
    },
    "permissionItemDetails": null,
    "createdAt": "2023-05-28T18:52:43.8269971"
  }, {
    "permissionItems": {
      "permissionItemId": 15,
      "perItemName": "Yes"
    },
    "permissionItemDetails": null,
    "createdAt": "2023-05-28T18:52:43.8278484"
  }]
}, {
  "userId": 900100,
  "fullName": "admin full",
  "email": "info+01@abc-programmers.com",
  "mobile": "9999999999",
  "outdoor": false,
  "indoor": true,
  "city": "Amman Governorate",
  "createdAt": "2023-05-28T06:37:19.7824981",
  "lastLogin": "2023-06-20T19:57:12.1342759",
  "status": 2001,
  "invitation": 2004,
  "profileImage": "",
  "branch": {
    "branchId": 14,
    "branchName": "Mecca Street"
  },
  "role": {
    "roleId": 1,
    "name": "Cashier"
  },
  "workingHours": [{
    "dayId": 6001,
    "day": [{
      "languageId": 1001,
      "lookupName": "Sunday"
    }, {
      "languageId": 1002,
      "lookupName": "الأحد"
    }],
    "fromTime": "09:00:00",
    "toTime": "23:59:00",
    "createdAt": "2023-06-18T21:07:42.7103364"
  }, {
    "dayId": 6002,
    "day": [{
      "languageId": 1001,
      "lookupName": "Monday"
    }, {
      "languageId": 1002,
      "lookupName": "الاثنين"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-06-18T21:07:42.7124804"
  }, {
    "dayId": 6003,
    "day": [{
      "languageId": 1001,
      "lookupName": "Tuesday"
    }, {
      "languageId": 1002,
      "lookupName": "الثلاثاء"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-06-18T21:07:42.7132299"
  }, {
    "dayId": 6004,
    "day": [{
      "languageId": 1001,
      "lookupName": "Wednessday"
    }, {
      "languageId": 1002,
      "lookupName": "الأربعاء"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-06-18T21:07:42.7139357"
  }, {
    "dayId": 6005,
    "day": [{
      "languageId": 1001,
      "lookupName": "Thursday"
    }, {
      "languageId": 1002,
      "lookupName": "الخميس"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-06-18T21:07:42.7208523"
  }, {
    "dayId": 6007,
    "day": [{
      "languageId": 1001,
      "lookupName": "Saturday"
    }, {
      "languageId": 1002,
      "lookupName": "السبت"
    }],
    "fromTime": "09:00:00",
    "toTime": "17:00:00",
    "createdAt": "2023-06-18T21:07:42.72226"
  }],
  "permissions": [{
    "permissionItems": {
      "permissionItemId": 11,
      "perItemName": "Yes"
    },
    "permissionItemDetails": null,
    "createdAt": "2023-06-18T21:07:42.7235608"
  }, {
    "permissionItems": {
      "permissionItemId": 21,
      "perItemName": "Yes"
    },
    "permissionItemDetails": null,
    "createdAt": "2023-06-18T21:07:42.7242214"
  }, {
    "permissionItems": {
      "permissionItemId": 79,
      "perItemName": "View & Manage"
    },
    "permissionItemDetails": null,
    "createdAt": "2023-06-18T21:07:42.7249616"
  }, {
    "permissionItems": {
      "permissionItemId": 82,
      "perItemName": "View & Manage"
    },
    "permissionItemDetails": null,
    "createdAt": "2023-06-18T21:07:42.731303"
  }, {
    "permissionItems": {
      "permissionItemId": 93,
      "perItemName": "View & Manage"
    },
    "permissionItemDetails": null,
    "createdAt": "2023-06-18T21:07:42.7320404"
  }, {
    "permissionItems": {
      "permissionItemId": 15,
      "perItemName": "Yes"
    },
    "permissionItemDetails": null,
    "createdAt": "2023-06-18T21:07:42.7320404"
  }]
}];
const Category = [{
  "id": 13,
  "description": "DC Racing",
  "imagePath": "https://pos-markaziastage.azurewebsites.net/POSAPI/",
  "createdDateTime": "2023-05-31T10:51:20.9528099",
  "createdByUser": {
    "id": 900100,
    "fullName": "admin full",
    "email": "info+01@abc-programmers.com",
    "mobile": "9999999999"
  },
  "name": [{
    "languageId": 1001,
    "lookupName": "DC Racing"
  }]
}, {
  "id": 14,
  "description": "أزهار ونباتات",
  "imagePath": "https://pos-markaziastage.azurewebsites.net/POSAPI/",
  "createdDateTime": "2023-05-31T10:52:04.076892",
  "createdByUser": {
    "id": 900100,
    "fullName": "admin full",
    "email": "info+01@abc-programmers.com",
    "mobile": "9999999999"
  },
  "name": [{
    "languageId": 1001,
    "lookupName": "DF racing"
  }]
}, {
  "id": 15,
  "description": "اصول",
  "imagePath": "https://pos-markaziastage.azurewebsites.net/POSAPI/",
  "createdDateTime": "2023-05-31T10:52:25.5278241",
  "createdByUser": {
    "id": 900100,
    "fullName": "admin full",
    "email": "info+01@abc-programmers.com",
    "mobile": "9999999999"
  },
  "name": [{
    "languageId": 1001,
    "lookupName": "اصول"
  }]
}, {
  "id": 16,
  "description": "اضافات سيارات",
  "imagePath": "https://pos-markaziastage.azurewebsites.net/POSAPI/",
  "createdDateTime": "2023-05-31T10:52:34.3603723",
  "createdByUser": {
    "id": 900100,
    "fullName": "admin full",
    "email": "info+01@abc-programmers.com",
    "mobile": "9999999999"
  },
  "name": [{
    "languageId": 1001,
    "lookupName": "اضافات سيارات"
  }]
}, {
  "id": 17,
  "description": "البريد السريع",
  "imagePath": "https://pos-markaziastage.azurewebsites.net/POSAPI/",
  "createdDateTime": "2023-05-31T10:52:47.0257588",
  "createdByUser": {
    "id": 900100,
    "fullName": "admin full",
    "email": "info+01@abc-programmers.com",
    "mobile": "9999999999"
  },
  "name": [{
    "languageId": 1001,
    "lookupName": "البريد السريع"
  }]
}, {
  "id": 18,
  "description": "الصيانة",
  "imagePath": "https://pos-markaziastage.azurewebsites.net/POSAPI/",
  "createdDateTime": "2023-05-31T10:53:13.0832542",
  "createdByUser": {
    "id": 900100,
    "fullName": "admin full",
    "email": "info+01@abc-programmers.com",
    "mobile": "9999999999"
  },
  "name": [{
    "languageId": 1001,
    "lookupName": "الصيانة"
  }]
}, {
  "id": 19,
  "description": "بدل ضيافة",
  "imagePath": "https://pos-markaziastage.azurewebsites.net/POSAPI/",
  "createdDateTime": "2023-05-31T10:53:26.8148038",
  "createdByUser": {
    "id": 900100,
    "fullName": "admin full",
    "email": "info+01@abc-programmers.com",
    "mobile": "9999999999"
  },
  "name": [{
    "languageId": 1001,
    "lookupName": "بدل ضيافة"
  }]
}, {
  "id": 20,
  "description": "تبرعات",
  "imagePath": "https://pos-markaziastage.azurewebsites.net/POSAPI/",
  "createdDateTime": "2023-05-31T10:53:35.4309016",
  "createdByUser": {
    "id": 900100,
    "fullName": "admin full",
    "email": "info+01@abc-programmers.com",
    "mobile": "9999999999"
  },
  "name": [{
    "languageId": 1001,
    "lookupName": "تبرعات"
  }]
}, {
  "id": 21,
  "description": "تراخيص حكومية",
  "imagePath": "https://pos-markaziastage.azurewebsites.net/POSAPI/",
  "createdDateTime": "2023-05-31T10:53:47.5074756",
  "createdByUser": {
    "id": 900100,
    "fullName": "admin full",
    "email": "info+01@abc-programmers.com",
    "mobile": "9999999999"
  },
  "name": [{
    "languageId": 1001,
    "lookupName": "تراخيص حكومية"
  }]
}, {
  "id": 22,
  "description": "ترخيص وتأمين سيارات",
  "imagePath": "https://pos-markaziastage.azurewebsites.net/POSAPI/",
  "createdDateTime": "2023-05-31T10:54:01.4085148",
  "createdByUser": {
    "id": 900100,
    "fullName": "admin full",
    "email": "info+01@abc-programmers.com",
    "mobile": "9999999999"
  },
  "name": [{
    "languageId": 1001,
    "lookupName": "ترخيص وتأمين سيارات"
  }]
}];
const DashboardChartData = {
  "january": {
    "collected": 2000,
    "uncollected": 3000
  },
  "february": {
    "collected": 2000,
    "uncollected": 5000
  },
  "march": {
    "collected": 3000,
    "uncollected": 7000
  },
  "april": {
    "collected": 9000,
    "uncollected": 2000
  },
  "may": {
    "collected": 4000,
    "uncollected": 6000
  },
  "june": {
    "collected": 5000,
    "uncollected": 3000
  },
  "july": {
    "collected": 7000,
    "uncollected": 3000
  },
  "august": {
    "collected": 9000,
    "uncollected": 2000
  }
};
const depositChequeList = [{
  "id": 1,
  "orderID": 3032300001060313,
  "chequeNo": "string",
  "collectionID": 65,
  "chequeDate": "2023-06-18T14:19:21.803",
  "collectedAt": "2023-06-18T17:21:04.37",
  "chequeCollectionJod": 100,
  "createdAt": "2023-06-24T19:21:53.827",
  "isPDCCheque": true,
  "customer": {
    "customerId": 10009011,
    "customerName": "Dot 11",
    "email": null,
    "mobile": "962775855011",
    "profileImage": null,
    "remainingAvailableCredit": null,
    "creditLimit": null,
    "consumedCredit": null,
    "onAccountAllowed": null
  },
  "bankId": 11003,
  "status": 28001,
  "bank": "البنك العربي",
  "statusObj": {
    "lookupId": 28001,
    "lookupBGColor": null,
    "lookupTextColor": null,
    "translations": [{
      "languageId": 1001,
      "lookupName": "Deposited"
    }]
  }
}, {
  "id": 2,
  "orderID": 3032300001060313,
  "chequeNo": "string",
  "collectionID": 66,
  "chequeDate": "2023-06-18T14:24:12.663",
  "collectedAt": "2023-06-18T17:25:14.32",
  "chequeCollectionJod": 150,
  "createdAt": "2023-06-24T19:22:04.953",
  "isPDCCheque": true,
  "customer": {
    "customerId": 10009011,
    "customerName": "Dot 11",
    "email": null,
    "mobile": "962775855011",
    "profileImage": null,
    "remainingAvailableCredit": null,
    "creditLimit": null,
    "consumedCredit": null,
    "onAccountAllowed": null
  },
  "bankId": 11003,
  "status": 28001,
  "bank": "البنك العربي",
  "statusObj": {
    "lookupId": 28001,
    "lookupBGColor": null,
    "lookupTextColor": null,
    "translations": [{
      "languageId": 1001,
      "lookupName": "Deposited"
    }]
  }
}, {
  "id": 3,
  "orderID": 2,
  "chequeNo": "string",
  "collectionID": 67,
  "chequeDate": "2023-06-20T07:55:55.93",
  "collectedAt": "2023-06-20T10:57:38.4",
  "chequeCollectionJod": 210,
  "createdAt": "2023-06-24T19:22:11.677",
  "isPDCCheque": true,
  "customer": {
    "customerId": 11111,
    "customerName": "ahmed",
    "email": null,
    "mobile": "78945612",
    "profileImage": null,
    "remainingAvailableCredit": null,
    "creditLimit": null,
    "consumedCredit": null,
    "onAccountAllowed": null
  },
  "bankId": 11003,
  "status": 28001,
  "bank": "البنك العربي",
  "statusObj": {
    "lookupId": 28001,
    "lookupBGColor": '#3B82F6',
    "lookupTextColor": '#F8F8F8',
    "translations": [{
      "languageId": 1001,
      "lookupName": "Deposited"
    }]
  }
}];


/***/ }),

/***/ 9773:
/*!*****************************************************************************************************!*\
  !*** ./src/app/deposit-cheque/deposit-cheque-detail-modal/deposit-cheque-detail-modal.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositChequeDetailModalComponent": () => (/* binding */ DepositChequeDetailModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_enums_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/enums/enum */ 5706);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/view-file/view-file.component */ 7761);
/* harmony import */ var _shared_directives_max_characters_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/max-characters.directive */ 4659);








function DepositChequeDetailModalComponent_div_39_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r5.details == null ? null : ctx_r5.details.bank == null ? null : ctx_r5.details.bank.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r5.details == null ? null : ctx_r5.details.bank == null ? null : ctx_r5.details.bank.translations == null ? null : ctx_r5.details.bank.translations[0] == null ? null : ctx_r5.details.bank.translations[0].lookupName) || "---", " ");
  }
}
function DepositChequeDetailModalComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DepositChequeDetailModalComponent_div_39_p_1_Template, 3, 2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.details == null ? null : ctx_r0.details.bank == null ? null : ctx_r0.details.bank.translations == null ? null : ctx_r0.details.bank.translations[0] == null ? null : ctx_r0.details.bank.translations[0].lookupName);
  }
}
function DepositChequeDetailModalComponent_ng_template_40_p_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r6.details == null ? null : ctx_r6.details.bank == null ? null : ctx_r6.details.bank.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r6.details == null ? null : ctx_r6.details.bank) || "---");
  }
}
function DepositChequeDetailModalComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DepositChequeDetailModalComponent_ng_template_40_p_0_Template, 3, 2, "p", 16);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.details == null ? null : ctx_r2.details.bank);
  }
}
function DepositChequeDetailModalComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Bank Confirmation Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 20)(9, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Cheque Collection Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 2, ctx_r3.details == null ? null : ctx_r3.details.bankConfirmationDate, "dd-MM-yyyy") || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 5, ctx_r3.details == null ? null : ctx_r3.details.chequeCollectionDate, "dd-MM-yyyy") || "---");
  }
}
function DepositChequeDetailModalComponent_div_54_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "div", 24)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Bank Confirmation Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 1, ctx_r7.details == null ? null : ctx_r7.details.bankConfirmationDate, "mediumDate") || "---");
  }
}
function DepositChequeDetailModalComponent_div_54_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "div", 24)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Receipt Voucher No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r8.details == null ? null : ctx_r8.details.receiptVoucherNumber) || "---");
  }
}
function DepositChequeDetailModalComponent_div_54_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "view-file", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("file", ctx_r9.details == null ? null : ctx_r9.details.actionFile)("download", true);
  }
}
function DepositChequeDetailModalComponent_div_54_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DepositChequeDetailModalComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DepositChequeDetailModalComponent_div_54_div_2_Template, 7, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 20)(4, "div", 24)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Action Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, DepositChequeDetailModalComponent_div_54_div_9_Template, 6, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 20)(11, "div", 24)(12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Action Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DepositChequeDetailModalComponent_div_54_ng_container_14_Template, 2, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DepositChequeDetailModalComponent_div_54_ng_template_15_Template, 2, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 27)(18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Action Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.chequeStatusEnum.Withdrawn == ctx_r4.statusId || ctx_r4.chequeStatusEnum.ReDeposited == ctx_r4.statusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r4.details == null ? null : ctx_r4.details.reason == null ? null : ctx_r4.details.reason.chequeActionReason) || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.chequeActionEnum.PaidInCash == ctx_r4.actionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.details == null ? null : ctx_r4.details.actionFile)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appMaxCharacters", 200)("ngModel", ctx_r4.details == null ? null : ctx_r4.details.notes);
  }
}
class DepositChequeDetailModalComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.title = '';
    this.detailShow = false;
    this.sendtoLoadData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.chequeStatusEnum = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_0__.ChequeStatusEnum;
    this.chequeActionEnum = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_0__.ChequeActionEnum;
    this.statusId = 0;
    this.actionId = 0;
  }
  ngOnInit() {
    this.statusId = this.details?.statusObj?.lookupId;
    this.actionId = this.details.chqActionId;
  }
  dismissModal() {
    this.modalService.dismissAll();
  }
  submit() {
    this.sendtoLoadData.emit();
  }
}
DepositChequeDetailModalComponent.ɵfac = function DepositChequeDetailModalComponent_Factory(t) {
  return new (t || DepositChequeDetailModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal));
};
DepositChequeDetailModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DepositChequeDetailModalComponent,
  selectors: [["app-deposit-cheque-detail-modal"]],
  inputs: {
    details: "details",
    title: "title",
    detailShow: "detailShow"
  },
  outputs: {
    sendtoLoadData: "sendtoLoadData"
  },
  decls: 58,
  vars: 29,
  consts: [["ngbAutoFocus", "", 1, "modal-body"], [1, "page-heading", "flex-wrap", "gap-2"], [1, "text-end"], [1, "soft-text"], [1, "last-content"], [1, "modal-cr-card"], [1, "card-head", "grid-container"], [1, "title"], [1, "card-content"], [1, "grid-container"], [4, "ngIf", "ngIfElse"], ["banks", ""], ["class", "modal-cr-card mb-3", 4, "ngIf"], ["class", "detail-content mt-3", 4, "ngIf"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], [4, "ngIf"], ["height", "25", "width", "25", 3, "src"], [1, "modal-cr-card", "mb-3"], [1, "row"], [1, "col-4"], [1, "fw-500", "mb-2"], [1, "detail-content", "mt-3"], ["class", "col-4", 4, "ngIf"], [1, "d-flex", "flex-column"], [1, "txt-light"], ["noActionFile", ""], [1, "col-12", "mt-2"], ["readonly", "", "rows", "5", 1, "form-control", 3, "appMaxCharacters", "ngModel"], [3, "file", "download"]],
  template: function DepositChequeDetailModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 2)(6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5)(16, "div", 6)(17, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Cheque No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Customer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Cheque Bank Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Due Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Amount (JOD)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 8)(32, "div", 9)(33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, DepositChequeDetailModalComponent_div_39_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, DepositChequeDetailModalComponent_ng_template_40_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](52, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, DepositChequeDetailModalComponent_div_53_Template, 14, 8, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, DepositChequeDetailModalComponent_div_54_Template, 21, 7, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 14)(56, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepositChequeDetailModalComponent_Template_button_click_56_listener() {
        return ctx.dismissModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.title, " Cheque Details View");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.title, " By: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.createdBy == null ? null : ctx.details.createdBy.fullName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.title == "Returned" ? "Return Date: " : ctx.title == "Collected" ? "Collection Date: " : ctx.title == "Re-deposited" ? "Re-deposit Date: " : ctx.title, ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](14, 17, ctx.details == null ? null : ctx.details.createdAt, "dd/MM/yyyy"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx.details == null ? null : ctx.details.chequeNo) || "---");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.details == null ? null : ctx.details.customer == null ? null : ctx.details.customer.customerName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.customer == null ? null : ctx.details.customer.mobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.details == null ? null : ctx.details.bank == null ? null : ctx.details.bank.translations)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](44, 20, ctx.details == null ? null : ctx.details.chequeDate, "dd MMM yyyy") || "---");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](47, 23, ctx.details == null ? null : ctx.details.collectedAmount, ".3") || "---");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.details == null ? null : ctx.details.currency[0] == null ? null : ctx.details.currency[0].lookupName, " (", (ctx.details == null ? null : ctx.details.currency[0] == null ? null : ctx.details.currency[0].currencyRate) || 1, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](52, 26, ctx.details == null ? null : ctx.details.chequeCollectionJod, ".3") || "---");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.chequeStatusEnum.Collected == ctx.statusId || ctx.chequeStatusEnum.Bounced == ctx.statusId);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.detailShow);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_1__.ViewFileComponent, _shared_directives_max_characters_directive__WEBPACK_IMPORTED_MODULE_2__.MaxCharactersDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: [".grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr repeat(5, 1fr);\n  gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVwb3NpdC1jaGVxdWUvZGVwb3NpdC1jaGVxdWUtZGV0YWlsLW1vZGFsL2RlcG9zaXQtY2hlcXVlLWRldGFpbC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLFNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjVmciByZXBlYXQoNSwgMWZyKTtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4967:
/*!************************************************************************************************************!*\
  !*** ./src/app/deposit-cheque/deposit-cheque-detail/components/confirm-action/confirm-action.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmActionComponent": () => (/* binding */ ConfirmActionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/modals/message-modal/message-modal.component */ 4280);
/* harmony import */ var _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/enums/enum */ 5706);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/deposit.service */ 8378);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 7217);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/validation-error/validation-error.component */ 7711);












function ConfirmActionComponent_p_30_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 18);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r4.details == null ? null : ctx_r4.details.bank == null ? null : ctx_r4.details.bank.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ConfirmActionComponent_p_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ConfirmActionComponent_p_30_img_1_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.details == null ? null : ctx_r0.details.bank == null ? null : ctx_r0.details.bank.imagePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (ctx_r0.details == null ? null : ctx_r0.details.bank == null ? null : ctx_r0.details.bank.translations[0] == null ? null : ctx_r0.details.bank.translations[0].lookupName) || "---", " ");
  }
}
const _c0 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
const _c1 = function () {
  return {
    required: "Input is required"
  };
};
function ConfirmActionComponent_ng_container_43_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22)(2, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Bank Confirmation Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "validation-error", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r5.bankConfirmationDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r5.bankConfirmationDate)("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c1));
  }
}
function ConfirmActionComponent_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ConfirmActionComponent_ng_container_43_ng_container_3_Template, 9, 6, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx_r1.chequeStatusId);
  }
}
function ConfirmActionComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "div", 29)(2, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Reject Reason *");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "textarea", 30)(5, "validation-error", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx_r3.rejectReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("control", ctx_r3.rejectReason)("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c1));
  }
}
class ConfirmActionComponent {
  constructor(_activeModal, depositservice, _modalService, _datePipe, _spinner) {
    this._activeModal = _activeModal;
    this.depositservice = depositservice;
    this._modalService = _modalService;
    this._datePipe = _datePipe;
    this._spinner = _spinner;
    this.chequeStatusId = 0;
    this.eventData = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.bankConfirmationDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(new Date());
    this.rejectReason = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
    this.chequeStatusEnum = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeStatusEnum;
    this.chequeActionEnum = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeActionEnum;
  }
  ngOnInit() {
    this.details = this.data;
    this.action = this.details.cusAction;
    this.chequeStatusId = this.details?.status;
    if (this.action == 'confirm') {
      this.bankConfirmationDate.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
      this.bankConfirmationDate.updateValueAndValidity();
    } else if (this.action == 'reject') {
      this.rejectReason.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]);
      this.rejectReason.updateValueAndValidity();
    }
  }
  confirm() {
    let URL;
    let formData = new FormData();
    formData.append('depositedChequeId', this.details?.id);
    if (this.action == 'confirm') {
      if (this.chequeStatusId == _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeStatusEnum.PendingPostpone || this.chequeStatusId == _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeStatusEnum.PendingReplace || this.chequeStatusId == _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeStatusEnum.PendingWithdraw || this.chequeStatusId == _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeStatusEnum.PendingReDeposit) {
        formData.append('BankConfirmationDate', this._datePipe.transform(this.bankConfirmationDate.value, 'yyyy-MM-dd') || '');
      }
      URL = this.depositservice.confirmChequeAction(formData);
    } else if (this.action == 'reject') {
      formData.append('rejectReason', this.rejectReason.value);
      URL = this.depositservice.rejectChequeAction(formData);
    }
    this._spinner.show();
    URL.subscribe({
      next: response => {
        if (response.isSuccess) {
          this.responseModal('success', 'Action successfully done.');
          this.eventData.emit({
            success: true
          });
          this._activeModal.close();
        }
      },
      error: err => {
        this.responseModal('error', err?.error?.errors[0].errorMessageEn || err?.error?.errors[0].ErrorMessageEn || err?.info);
      }
    }).add(() => this._spinner.hide());
  }
  responseModal(type, message) {
    const ref = this._modalService.open(_shared_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_0__.MessageModalComponent);
    ref.componentInstance.type = type;
    ref.componentInstance.message = message;
  }
}
ConfirmActionComponent.ɵfac = function ConfirmActionComponent_Factory(t) {
  return new (t || ConfirmActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_2__.DepositService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService));
};
ConfirmActionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ConfirmActionComponent,
  selectors: [["app-confirm-action"]],
  inputs: {
    data: "data"
  },
  outputs: {
    eventData: "eventData"
  },
  decls: 52,
  vars: 26,
  consts: [[1, "modal-header", "align-items-center", "justify-content-between"], [1, "font-16", "m-0"], [1, "status-tag", "m-0"], ["ngbAutoFocus", "", 1, "modal-body"], [1, "modal-cr-card"], [1, "card-head", "grid-container"], [1, "title"], [1, "card-content"], [1, "pb-4", "grid-container"], [4, "ngIf"], [1, "modal-cr-card", "overflow-visible"], [4, "ngIf", "ngIfElse"], ["rejectBlock", ""], [1, "modal-footer", "border-0", "mt-3"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "disabled", "click"], ["height", "25", "width", "25", 3, "src", 4, "ngIf"], ["height", "25", "width", "25", 3, "src"], [1, "row"], [3, "ngSwitch"], [4, "ngSwitchDefault"], [1, "col-4"], [1, "fw-500", "mb-2"], [1, "input-group"], ["type", "text", "placeholder", "Collection Date", "bsDatepicker", "", "placement", "bottom", 1, "form-control", 3, "formControl", "bsConfig"], [1, "input-group-text"], [1, "fa-regular", "fa-calendar"], [3, "control", "errorMessages"], [1, "col-12"], ["placeholder", "Reject Reason", 1, "form-control", 3, "formControl"]],
  template: function ConfirmActionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "You are about to confirm the following cheque");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Cheque No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Customer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Cheque Bank Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Due Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Amount (JOD)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 7)(23, "div", 8)(24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ConfirmActionComponent_p_30_Template, 3, 2, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](41, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, ConfirmActionComponent_ng_container_43_Template, 4, 1, "ng-container", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, ConfirmActionComponent_ng_template_44_Template, 6, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 13)(47, "div", 14)(48, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfirmActionComponent_Template_button_click_48_listener() {
        return ctx._activeModal.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ConfirmActionComponent_Template_button_click_50_listener() {
        return ctx.confirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, " Confirm ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.details == null ? null : ctx.details.statusObj == null ? null : ctx.details.statusObj.lookupTextColor)("background-color", ctx.details == null ? null : ctx.details.statusObj == null ? null : ctx.details.statusObj.lookupBGColor);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.details == null ? null : ctx.details.statusObj == null ? null : ctx.details.statusObj.translations == null ? null : ctx.details.statusObj.translations[0].lookupName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((ctx.details == null ? null : ctx.details.chequeNo) || "---");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.details == null ? null : ctx.details.customer == null ? null : ctx.details.customer.customerName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.details == null ? null : ctx.details.customer == null ? null : ctx.details.customer.mobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.details == null ? null : ctx.details.bank);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](33, 17, ctx.details == null ? null : ctx.details.chequeDate, "dd MMM yyyy") || "---");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](36, 20, ctx.details == null ? null : ctx.details.collectedAmount, ".3") || "---");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.details == null ? null : ctx.details.currency[0] == null ? null : ctx.details.currency[0].lookupName, " (", (ctx.details == null ? null : ctx.details.currency[0] == null ? null : ctx.details.currency[0].currencyRate) || 1, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](41, 23, ctx.details == null ? null : ctx.details.chequeCollectionJod, ".3") || "---");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.action === "confirm")("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.bankConfirmationDate.invalid || ctx.rejectReason.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchDefault, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerInputDirective, _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_3__.ValidationErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  styles: [".status-tag[_ngcontent-%COMP%] {\n  background: #c7c7c7;\n  padding: 7px;\n  border-radius: 5px;\n  color: #333333;\n}\n\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVwb3NpdC1jaGVxdWUvZGVwb3NpdC1jaGVxdWUtZGV0YWlsL2NvbXBvbmVudHMvY29uZmlybS1hY3Rpb24vY29uZmlybS1hY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXR1cy10YWcge1xyXG4gIGJhY2tncm91bmQ6ICNjN2M3Yzc7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogIzMzMzMzMztcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8070:
/*!*****************************************************************************************!*\
  !*** ./src/app/deposit-cheque/deposit-cheque-detail/deposit-cheque-detail.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositChequeDetailComponent": () => (/* binding */ DepositChequeDetailComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _deposit_cheque_modal_deposit_cheque_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deposit-cheque-modal/deposit-cheque-modal.component */ 5333);
/* harmony import */ var _replace_cheque_replace_cheque_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../replace-cheque/replace-cheque.component */ 4840);
/* harmony import */ var _cheque_dashboard_replaced_cheque_detail_view_replaced_cheque_detail_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cheque-dashboard/replaced-cheque-detail-view/replaced-cheque-detail-view.component */ 9645);
/* harmony import */ var _deposit_cheque_detail_modal_deposit_cheque_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../deposit-cheque-detail-modal/deposit-cheque-detail-modal.component */ 9773);
/* harmony import */ var _shared_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/modals/message-modal/message-modal.component */ 4280);
/* harmony import */ var _shared_enums_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/enums/enum */ 5706);
/* harmony import */ var _components_confirm_action_confirm_action_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/confirm-action/confirm-action.component */ 4967);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _postpone_cheque_postpone_cheque_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../postpone-cheque/postpone-cheque.component */ 7964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/auth.service */ 8915);
/* harmony import */ var src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/header.service */ 940);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var src_app_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/deposit.service */ 8378);
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/services/helper.service */ 1785);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/view-file/view-file.component */ 7761);
/* harmony import */ var _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/validation-error/validation-error.component */ 7711);























const _c0 = ["chequeImageFileRef"];
function DepositChequeDetailComponent_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0)(1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, DepositChequeDetailComponent_ng_container_6_ng_container_2_Template, 3, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, DepositChequeDetailComponent_ng_container_6_ng_container_3_Template, 3, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, DepositChequeDetailComponent_ng_container_6_ng_container_4_Template, 3, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", ctx_r0.depositeDetail == null ? null : ctx_r0.depositeDetail.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r0.chequeStatusEnum.Deposited);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r0.chequeStatusEnum.ReDeposited);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r0.chequeStatusEnum.Postponed);
  }
}
function DepositChequeDetailComponent_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_7_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_7_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0)(1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, DepositChequeDetailComponent_ng_container_7_ng_container_2_Template, 3, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, DepositChequeDetailComponent_ng_container_7_ng_container_3_Template, 3, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, DepositChequeDetailComponent_ng_container_7_ng_container_4_Template, 3, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, DepositChequeDetailComponent_ng_container_7_ng_container_5_Template, 3, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, DepositChequeDetailComponent_ng_container_7_ng_container_6_Template, 3, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", ctx_r1.depositeDetail == null ? null : ctx_r1.depositeDetail.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r1.chequeStatusEnum.Deposited);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r1.chequeStatusEnum.ReDeposited);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r1.chequeStatusEnum.Bounced);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r1.chequeStatusEnum.Postponed);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx_r1.chequeStatusEnum.Withdrawn);
  }
}
function DepositChequeDetailComponent_ng_container_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_10_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r35.depositDetail(29003));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_10_ng_container_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r37.depositDetail(29011));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Postpone");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_10_ng_container_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r38.depositDetail(29002));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Withdraw");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_10_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_10_ng_container_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r39.depositDetail(29006));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Collect");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_10_ng_container_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r41.depositDetail(29001));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Bounce");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0)(1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, DepositChequeDetailComponent_ng_container_10_ng_container_2_Template, 7, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, DepositChequeDetailComponent_ng_container_10_ng_container_3_Template, 5, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", ctx_r2.userDetails == null ? null : ctx_r2.userDetails.role == null ? null : ctx_r2.userDetails.role.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 46);
  }
}
function DepositChequeDetailComponent_ng_container_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_11_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r44.depositDetail(29003));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_11_ng_container_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r46.depositDetail(29011));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Postpone");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_11_ng_container_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r47.depositDetail(29002));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Withdraw");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_11_ng_container_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r48.depositDetail(29006));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Collect");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_11_ng_container_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r49);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r50.depositDetail(29001));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Bounce");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0)(1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, DepositChequeDetailComponent_ng_container_11_ng_container_2_Template, 7, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, DepositChequeDetailComponent_ng_container_11_ng_container_3_Template, 5, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", ctx_r3.userDetails == null ? null : ctx_r3.userDetails.role == null ? null : ctx_r3.userDetails.role.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 46);
  }
}
function DepositChequeDetailComponent_ng_container_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_12_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r52.depositDetail(29003));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_12_ng_container_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r54.depositDetail(29004));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Re-Deposit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_12_ng_container_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r53);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r55.depositDetail(29017));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Pay In Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0)(1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, DepositChequeDetailComponent_ng_container_12_ng_container_2_Template, 7, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", ctx_r4.userDetails == null ? null : ctx_r4.userDetails.role == null ? null : ctx_r4.userDetails.role.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 47);
  }
}
function DepositChequeDetailComponent_ng_container_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_13_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r58.depositDetail(29003));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_13_ng_container_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r59);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r60.depositDetail(29002));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Withdraw");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_13_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_13_ng_container_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r61.depositDetail(29006));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Collect");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_13_ng_container_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r62);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r63.depositDetail(29001));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Bounce");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
}
function DepositChequeDetailComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0)(1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, DepositChequeDetailComponent_ng_container_13_ng_container_2_Template, 5, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, DepositChequeDetailComponent_ng_container_13_ng_container_3_Template, 5, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", ctx_r5.userDetails == null ? null : ctx_r5.userDetails.role == null ? null : ctx_r5.userDetails.role.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 46);
  }
}
function DepositChequeDetailComponent_ng_container_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_14_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r65.depositDetail(ctx_r65.depositeDetail == null ? null : ctx_r65.depositeDetail.nextAllowedActionId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r64.depositeDetail == null ? null : ctx_r64.depositeDetail.nextAllowedAction[0] == null ? null : ctx_r64.depositeDetail.nextAllowedAction[0].lookupName, " ");
  }
}
function DepositChequeDetailComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0)(1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, DepositChequeDetailComponent_ng_container_14_ng_container_2_Template, 3, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", ctx_r6.userDetails == null ? null : ctx_r6.userDetails.role == null ? null : ctx_r6.userDetails.role.roleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 47);
  }
}
function DepositChequeDetailComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainer"](0);
  }
}
function DepositChequeDetailComponent_div_40_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", ctx_r67.depositeDetail == null ? null : ctx_r67.depositeDetail.bank == null ? null : ctx_r67.depositeDetail.bank.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", (ctx_r67.depositeDetail == null ? null : ctx_r67.depositeDetail.bank == null ? null : ctx_r67.depositeDetail.bank.translations == null ? null : ctx_r67.depositeDetail.bank.translations[0] == null ? null : ctx_r67.depositeDetail.bank.translations[0].lookupName) || "---", " ");
  }
}
function DepositChequeDetailComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, DepositChequeDetailComponent_div_40_p_1_Template, 3, 2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r8.depositeDetail == null ? null : ctx_r8.depositeDetail.bank == null ? null : ctx_r8.depositeDetail.bank.translations == null ? null : ctx_r8.depositeDetail.bank.translations[0] == null ? null : ctx_r8.depositeDetail.bank.translations[0].lookupName);
  }
}
function DepositChequeDetailComponent_ng_template_41_p_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", ctx_r68.depositeDetail == null ? null : ctx_r68.depositeDetail.bank == null ? null : ctx_r68.depositeDetail.bank.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]((ctx_r68.depositeDetail == null ? null : ctx_r68.depositeDetail.bank) || "---");
  }
}
function DepositChequeDetailComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, DepositChequeDetailComponent_ng_template_41_p_0_Template, 3, 2, "p", 13);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r10.depositeDetail == null ? null : ctx_r10.depositeDetail.bank);
  }
}
function DepositChequeDetailComponent_ng_container_54_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 45)(2, "div", 46)(3, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Cheque Receiving Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 46)(9, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Customer Delivery Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 2, ctx_r69.depositeDetail == null ? null : ctx_r69.depositeDetail.chequeReceivedDate, "mediumDate") || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](13, 5, ctx_r69.depositeDetail == null ? null : ctx_r69.depositeDetail.customerDeliveryDate, "mediumDate") || "---");
  }
}
function DepositChequeDetailComponent_ng_container_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, DepositChequeDetailComponent_ng_container_54_ng_container_1_Template, 14, 8, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r11.chequeStatusEnum.Withdrawn == (ctx_r11.depositeDetail == null ? null : ctx_r11.depositeDetail.status) || ctx_r11.chequeStatusEnum.Bounced == (ctx_r11.depositeDetail == null ? null : ctx_r11.depositeDetail.status) || ctx_r11.chequeStatusEnum.Replaced == (ctx_r11.depositeDetail == null ? null : ctx_r11.depositeDetail.status) || ctx_r11.chequeStatusEnum.PaidInCash == (ctx_r11.depositeDetail == null ? null : ctx_r11.depositeDetail.status));
  }
}
const _c1 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
const _c2 = function () {
  return {
    oneRequired: "Select date to confirm"
  };
};
function DepositChequeDetailComponent_ng_container_55_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 0)(2, "div", 49)(3, "div", 50)(4, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Cheque Receiving Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 50)(8, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Customer Delivery Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 50)(12, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_ng_container_55_ng_container_1_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r71.handleClickConfirmDate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Confirm Dates");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "validation-error", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControl", ctx_r70.chequeReceivedDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControl", ctx_r70.customerDeliveryDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("control", ctx_r70.chequeReceivedDate)("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](8, _c2));
  }
}
function DepositChequeDetailComponent_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, DepositChequeDetailComponent_ng_container_55_ng_container_1_Template, 16, 9, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r12.chequeStatusEnum.Withdrawn == (ctx_r12.depositeDetail == null ? null : ctx_r12.depositeDetail.status) || ctx_r12.chequeStatusEnum.Bounced == (ctx_r12.depositeDetail == null ? null : ctx_r12.depositeDetail.status) || ctx_r12.chequeStatusEnum.Replaced == (ctx_r12.depositeDetail == null ? null : ctx_r12.depositeDetail.status) || ctx_r12.chequeStatusEnum.PaidInCash == (ctx_r12.depositeDetail == null ? null : ctx_r12.depositeDetail.status));
  }
}
function DepositChequeDetailComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 57)(1, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function DepositChequeDetailComponent_div_62_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r73.markAsDelivered = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Mark as Delivered to Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r13.markAsDelivered);
  }
}
function DepositChequeDetailComponent_div_64_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "div", 66);
  }
}
function DepositChequeDetailComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_div_64_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r79);
      const item_r75 = restoredCtx.$implicit;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r78.depositDetailModal(item_r75));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 61)(2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h6", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, DepositChequeDetailComponent_div_64_div_6_Template, 1, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r75 = ctx.$implicit;
    const last_r76 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("flex-grow-1", !last_r76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]((item_r75 == null ? null : item_r75.status[0] == null ? null : item_r75.status[0].lookupName) || "Paid In Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !last_r76);
  }
}
const _c3 = function (a1) {
  return {
    isUploaded: true,
    uploadedFile: a1
  };
};
function DepositChequeDetailComponent_view_file_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "view-file", 67);
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](1, _c3, ctx_r15.uploadedFile));
  }
}
function DepositChequeDetailComponent_view_file_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "view-file", 68);
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("file", ctx_r16.depositeDetail == null ? null : ctx_r16.depositeDetail.actionFile)("download", true);
  }
}
function DepositChequeDetailComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "h3", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "No Image to display");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function DepositChequeDetailComponent_div_83_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 85)(2, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Click to open PDF file ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const image_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("href", image_r81 == null ? null : image_r81.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
  }
}
function DepositChequeDetailComponent_div_83_div_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "img", 87);
  }
  if (rf & 2) {
    const image_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", image_r81 == null ? null : image_r81.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
  }
}
function DepositChequeDetailComponent_div_83_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, DepositChequeDetailComponent_div_83_div_9_ng_container_1_Template, 4, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, DepositChequeDetailComponent_div_83_div_9_ng_template_2_Template, 1, 1, "ng-template", null, 84, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const image_r81 = ctx.$implicit;
    const i_r82 = ctx.index;
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", i_r82 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (image_r81 == null ? null : image_r81.fileExt) === "pdf")("ngIfElse", _r84);
  }
}
function DepositChequeDetailComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 72)(1, "div", 73)(2, "div", 74)(3, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 78)(8, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, DepositChequeDetailComponent_div_83_div_9_Template, 4, 4, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 74)(11, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r19.depositeDetail == null ? null : ctx_r19.depositeDetail.chequeImages);
  }
}
function DepositChequeDetailComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 73)(1, "div", 88)(2, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 46)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Date: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 46)(11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 46)(17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "By: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 46)(22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Role: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 50)(27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, "Action: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r88 = ctx.$implicit;
    const index_r89 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", index_r89 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](9, 6, item_r88 == null ? null : item_r88.createdAt, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](15, 9, item_r88.createdAt, "hh:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r88 == null ? null : item_r88.createdBy == null ? null : item_r88.createdBy.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r88 == null ? null : item_r88.role.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item_r88 == null ? null : item_r88.actionDetails, " ");
  }
}
function DepositChequeDetailComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_div_93_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r91);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r90.viewMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 91)(2, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function DepositChequeDetailComponent_div_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_div_94_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r93);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r92.viewLess());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 91)(2, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, " View Less");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function DepositChequeDetailComponent_button_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_button_98_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r95);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r94.markChequeAsDelivered());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function DepositChequeDetailComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 94)(1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_div_99_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r97);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r96.save("reject"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_div_99_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r97);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r98.save("confirm"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
class DepositChequeDetailComponent {
  constructor(activatedRoute, _authService, headerService, _router, modalService, depositservice, _helperService, toastrService) {
    this.activatedRoute = activatedRoute;
    this._authService = _authService;
    this.headerService = headerService;
    this._router = _router;
    this.modalService = modalService;
    this.depositservice = depositservice;
    this._helperService = _helperService;
    this.toastrService = toastrService;
    this.chequeReceivedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('');
    this.customerDeliveryDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('');
    this.current = 0;
    this.loading = false;
    this.steps = [];
    this.actionList = [];
    this.activityLog = [];
    this.masterActivityLog = [];
    this.pendingChequesActions = [_shared_enums_enum__WEBPACK_IMPORTED_MODULE_5__.ChequeStatusEnum.PendingWithdraw, _shared_enums_enum__WEBPACK_IMPORTED_MODULE_5__.ChequeStatusEnum.PendingReplace, _shared_enums_enum__WEBPACK_IMPORTED_MODULE_5__.ChequeStatusEnum.PendingPostpone, _shared_enums_enum__WEBPACK_IMPORTED_MODULE_5__.ChequeStatusEnum.PendingReDeposit];
    this.markAsDelivered = false;
    this.withAndReplaceChequeActions = [28003, 28005, 28008, 28009];
    this.chequeStatusEnum = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_5__.ChequeStatusEnum;
    this.chequeActionEnum = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_5__.ChequeActionEnum;
    this.userRoleEnum = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_5__.UserRoleEnum;
  }
  ngOnInit() {
    this.getUserDetails();
    this.headerService.setTitle('Deposited Cheques > Cheques List > Deposited Cheque Details ');
    this.activatedRoute.params.subscribe(res => {
      if (res) {
        this.id = res['id'];
        this.getDepositDetail();
        this.getData();
      }
    });
  }
  handleClickConfirmDate() {
    if (!this.chequeReceivedDate.value && !this.customerDeliveryDate.value) {
      this.chequeReceivedDate.setErrors({
        oneRequired: true
      });
      this.chequeReceivedDate.markAsTouched();
      return;
    } else this.chequeReceivedDate.setErrors(null);
    let formData = new FormData();
    formData.append('DepositedChequeId', this.id);
    formData.append('ChequeReceivedDate', this._helperService.dateFormate(this.chequeReceivedDate.value) || '');
    formData.append('CustomerDeliveryDate', this._helperService.dateFormate(this.customerDeliveryDate.value) || '');
    this.depositservice.updateCheque(formData).subscribe({
      next: response => {
        if (response.isSuccess) {
          this.responseModal('success', 'Data saved successfully!');
          this.chequeReceivedDate.reset();
          this.customerDeliveryDate.reset();
          this.getDepositDetail();
        }
      },
      error: err => {
        this.responseModal('error', err?.error?.errors[0].errorMessageEn || err?.error?.errors[0].ErrorMessageEn || err?.info);
      }
    });
  }
  onFileSelected(event) {
    let files = [...event.target.files];
    files.forEach(file => {
      this.depositservice.fileToBase64(file).then(response => {
        this.uploadedFile = response;
        this.chequeImageFileRef = null;
        this.uploadChequeImage();
      });
    });
  }
  uploadChequeImage() {
    const formData = new FormData();
    formData.append('DepositedChequeId', this.depositeDetail.id);
    formData.append('Image', this.uploadedFile.file);
    this.depositservice.uploadChequeImage(formData).subscribe({
      next: response => {
        if (response.isSuccess) {
          this.responseModal('success', 'Cheque image saved successfully!');
          this.uploadedFile = null;
          this.getDepositDetail();
        }
      },
      error: err => {
        this.responseModal('error', err?.error?.errors[0].errorMessageEn || err?.error?.errors[0].ErrorMessageEn || err?.info);
      }
    });
  }
  markChequeAsDelivered() {
    let url = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Observable();
    let formData = new FormData();
    formData.append('depositedChequeId', this.id);
    formData.append('markDelivered', String(this.markAsDelivered));
    url = this.depositservice.markDelivered(formData);
    url.subscribe({
      next: response => {
        if (response.isSuccess) {
          this.responseModal('success', 'Mark as delivered to customer successfully!');
          this._router.navigateByUrl('/deposit-cheque');
        }
      },
      error: err => {
        this.responseModal('error', err?.error?.errors[0].errorMessageEn || err?.error?.errors[0].ErrorMessageEn || err?.info);
      }
    });
  }
  save(action) {
    let url = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Observable();
    let formData = new FormData();
    formData.append('depositedChequeId', this.id);
    let chequeStatus = this.depositeDetail?.status;
    if (chequeStatus == this.chequeStatusEnum.PendingPostpone || chequeStatus == this.chequeStatusEnum.PendingReplace || chequeStatus == _shared_enums_enum__WEBPACK_IMPORTED_MODULE_5__.ChequeStatusEnum.PendingReDeposit || chequeStatus == this.chequeStatusEnum.PendingWithdraw) {
      const ref = this.modalService.open(_components_confirm_action_confirm_action_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmActionComponent, {
        size: 'xl'
      });
      ref.componentInstance.data = {
        ...this.depositeDetail,
        cusAction: action
      };
      ref.componentInstance.eventData.subscribe({
        next: value => {
          if (value.success) {
            this.getDepositDetail();
            this.getData();
          }
        }
      });
      return;
    }
    url = this.depositservice.confirmChequeAction(formData);
    //if (action == 'confirm') {
    //}
    //else
    // url = this.depositservice.rejectChequeAction(formData);
    url.subscribe({
      next: response => {
        if (response.isSuccess) {
          this.getDepositDetail();
          this.responseModal('success', 'Action successfully done.');
        }
      },
      error: err => {
        this.responseModal('error', err?.error?.errors[0].errorMessageEn || err?.error?.errors[0].ErrorMessageEn || err?.info);
      }
    });
  }
  responseModal(type, message) {
    const ref = this.modalService.open(_shared_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_4__.MessageModalComponent);
    ref.componentInstance.type = type;
    ref.componentInstance.message = message;
  }
  getUserDetails() {
    this._authService.getLoggedUserDetails().subscribe(response => {
      this.userDetails = response?.data;
    });
  }
  ngOnDestroy() {
    this.headerService.selecteddeposit = 2;
    let nextRoute = this._router.url;
    if (!nextRoute.includes('/deposit-cheque')) {
      localStorage.removeItem('chequeFilters');
    }
  }
  getDepositDetail() {
    this.loading = true;
    this.depositservice.getChequeDetails(this.id).subscribe(result => {
      if (result) {
        this.depositeDetail = result.data || {};
        let chequeImages = this.depositeDetail?.chequeImages;
        this.markAsDelivered = this.depositeDetail?.markDelivered;
        if (chequeImages?.length > 0) {
          this.depositeDetail.chequeImages = this.depositeDetail?.chequeImages.map(x => {
            return {
              ...x,
              fileExt: this.getFileType(x?.imagePath).toLowerCase()
            };
          });
        }
      }
    }).add(() => this.loading = false);
  }
  getFileType(value) {
    return value?.split('.').pop();
  }
  viewMore() {
    this.activityLog = this.masterActivityLog;
  }
  viewLess() {
    this.activityLog = [];
    let getFirstIndex = this.masterActivityLog.length > 0 ? this.masterActivityLog[0] : null;
    if (getFirstIndex) this.activityLog.push(getFirstIndex);
  }
  getData() {
    const api1$ = this.depositservice.getChequesActionsLog(this.id);
    const api2$ = this.depositservice.getLookups('', `lookupTypeId=28&pageSize=1000`);
    const api3$ = this.depositservice.getLookups('', `lookupTypeId=29&pageSize=1000`);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.forkJoin)([api1$, api2$, api3$]).subscribe(([activityLog, status, actions]) => {
      if (activityLog) {
        this.masterActivityLog = activityLog.data || [];
        let index = this.masterActivityLog.length > 0 ? this.masterActivityLog[0] : null;
        if (index) this.activityLog.push(index);
      }
      if (actions) {
        this.actionList = actions.data || [];
      }
    }, error => {
      console.error(error);
    }, () => {
      this.loading = false;
    });
  }
  depositDetail(id) {
    let action = this.actionList.find(x => x.id == id);
    if (id == 29002) this.openModalTrigger(action, 'Returne Cheque', true, true);else if (id == 29001) this.openModalTrigger(action, 'Bounce Cheque', true, true);else if (id == 29003 || id == 29011) this.replace(action);else if (id == 29004) this.openModalTrigger(action, 'Re-deposited Cheque', true, true);else if (id == 29017) this.openModalTrigger(action, 'Pay In Cash', true, true);else if (id == 29006) this.openModalTrigger(action, 'Collect Cheque', true, false);
  }
  openModalTrigger(actionType, item, confirm, detailShow) {
    const modalRef = this.modalService.open(_deposit_cheque_modal_deposit_cheque_modal_component__WEBPACK_IMPORTED_MODULE_0__.DepositChequeModalComponent, {
      backdrop: 'static',
      keyboard: false,
      size: 'lg'
    });
    modalRef.componentInstance.details = [this.depositeDetail];
    modalRef.componentInstance.title = item;
    modalRef.componentInstance.isConfirmShow = confirm;
    modalRef.componentInstance.detailShow = detailShow;
    modalRef.componentInstance.actionType = actionType;
    modalRef.componentInstance.sendtoLoadData.subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
      console.log('resendtoLoadDatasult', result);
      this.modalService.dismissAll();
      // this.getList();
    });
  }
  //depositDetailModal(item: any) {
  //  let findStatus = this.masterActivityLog.find(a => a.statusId == item.id);
  //  if (findStatus) {
  //    this.depositservice.getChequeActionDetails(this.id, findStatus.actionId)
  //      .subscribe({
  //        next: response => {
  //          if (response.isSuccess) {
  //            if (findStatus?.actionId == 29002)
  //              this.openDetailModal(response.data, 'Withdrawn', true, true)
  //            else if (findStatus?.actionId == 29001)
  //              this.openDetailModal(response.data, 'Bounced', true, true)
  //            else if (findStatus?.actionId == 29003)
  //              this.replaceView(response.data)
  //            else if (findStatus?.actionId == 29004)
  //              this.openDetailModal(response.data, 'Re-deposited', true, true)
  //            else if (findStatus?.actionId == 29010)
  //              this.openDetailModal(response.data, 'Deposited', true, true)
  //            else if (findStatus?.actionId == 29006)
  //              this.openDetailModal(response.data, 'Collected', true, true)
  //            else if (findStatus?.actionId == 29011)
  //              this.openDetailModal(response.data, 'Postpone', true, true)
  //          } else {
  //            const errorsList = response?.errors;
  //            this.toastrService.error(errorsList.length ? errorsList.join('<br>') : 'Failed!', '', {
  //              enableHtml: true,
  //            });
  //          }
  //        },
  //        error: err => {
  //          const errors = err?.error?.errors?.map((entry: any) => entry.ErrorMessageEn) || [];
  //          this.toastrService.error(errors.length ? errors.join('<br>') : 'Failed!', '', {
  //            enableHtml: true,
  //          });
  //        },
  //      })
  //  }
  //}
  depositDetailModal(findStatus) {
    this.depositservice.getChequeActionDetails(this.id, findStatus.actionId).subscribe({
      next: response => {
        if (response.isSuccess) {
          if (findStatus?.actionId == 29002 || findStatus?.actionId == 29013) {
            let text = findStatus?.actionId == 29002 ? 'Withdrawn' : findStatus?.actionId == 29013 && 'Pending Withdrawn';
            this.openDetailModal(response.data, text, true, true);
          } else if (findStatus?.actionId == 29001) this.openDetailModal(response.data, 'Bounced', true, true);else if (findStatus?.actionId == 29003) this.replaceView(response.data);else if (findStatus?.actionId == 29004) this.openDetailModal(response.data, 'Re-deposited', true, true);else if (findStatus?.actionId == 29010 || findStatus?.actionId == 29014 || findStatus?.actionId == 29017) {
            let text = '';
            if (findStatus?.actionId == 29010) text = 'Deposited';else if (findStatus?.actionId == 29014) text = 'Pending Replace';else if (findStatus?.actionId == 29017) text = 'Pay In Cash';
            this.openDetailModal({
              ...response.data,
              chqActionId: findStatus.actionId
            }, text, true, true);
          } else if (findStatus?.actionId == 29006) this.openDetailModal(response.data, 'Collected', true, true);else if (findStatus?.actionId == 29011 || findStatus?.actionId == 29015) {
            let text = findStatus?.actionId == 29011 ? 'Postpone' : findStatus?.actionId == 29015 && 'Pending Postpone';
            this.openDetailModal(response.data, text, true, true);
          }
        } else {
          const errorsList = response?.errors;
          this.toastrService.error(errorsList.length ? errorsList.join('<br>') : 'Failed!', '', {
            enableHtml: true
          });
        }
      },
      error: err => {
        const errors = err?.error?.errors?.map(entry => entry.ErrorMessageEn) || [];
        this.toastrService.error(errors.length ? errors.join('<br>') : 'Failed!', '', {
          enableHtml: true
        });
      }
    });
  }
  openDetailModal(detail, item, confirm, detailShow) {
    const modalRef = this.modalService.open(_deposit_cheque_detail_modal_deposit_cheque_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__.DepositChequeDetailModalComponent, {
      backdrop: 'static',
      keyboard: false,
      size: 'lg'
    });
    modalRef.componentInstance.details = detail;
    modalRef.componentInstance.title = item;
    modalRef.componentInstance.isConfirmShow = confirm;
    modalRef.componentInstance.detailShow = detailShow;
    modalRef.componentInstance.sendtoLoadData.subscribe(result => {
      console.log('resendtoLoadDatasult', result);
      this.modalService.dismissAll();
      // this.getList();
    });
  }

  replace(actionType) {
    let component = actionType.id == 29003 && _replace_cheque_replace_cheque_component__WEBPACK_IMPORTED_MODULE_1__.ReplaceChequeComponent || _postpone_cheque_postpone_cheque_component__WEBPACK_IMPORTED_MODULE_7__.PostponeChequeComponent;
    const modalRef = this.modalService.open(component, {
      backdrop: 'static',
      keyboard: false,
      size: 'xl'
    });
    modalRef.componentInstance.details = [this.depositeDetail];
    modalRef.componentInstance.actionType = actionType;
    modalRef.componentInstance.sendtoLoadData.subscribe(result => {
      if (result) {
        this.ngOnInit();
      }
      console.log('resendtoLoadDatasult', result);
      this.modalService.dismissAll();
      // this.getList();
    });
  }

  replaceView(data) {
    const modalRef = this.modalService.open(_cheque_dashboard_replaced_cheque_detail_view_replaced_cheque_detail_view_component__WEBPACK_IMPORTED_MODULE_2__.ReplacedChequeDetailViewComponent, {
      backdrop: 'static',
      keyboard: false,
      size: 'xl'
    });
    let updateData = [];
    if (data) {
      let replacedCheque = JSON.parse(JSON.stringify(data));
      replacedCheque = {
        ...data,
        ...data?.replacedCheque
      };
      let obj = {
        id: 1,
        name: 'V2 Replace Cheque Details',
        children: [replacedCheque]
      };
      updateData.push(obj);
      let obj1 = {
        id: 2,
        name: 'V1 Cheque Details',
        children: [data]
      };
      updateData.push(obj1);
    }
    modalRef.componentInstance.replacedCheque = updateData;
    modalRef.componentInstance.details = data;
    modalRef.componentInstance.selectedCheque = updateData[0];
    modalRef.componentInstance.sendtoLoadData.subscribe(result => {
      console.log('resendtoLoadDatasult', result);
      this.modalService.dismissAll();
      // this.getList();
    });
  }

  activeTabs(tab) {
    const findStatus = this.masterActivityLog.find(a => a.statusId == tab.id);
    if (findStatus) return true;
    if (tab.id == this.depositeDetail?.statusObj?.lookupId) return true;
    return false;
  }
}
DepositChequeDetailComponent.ɵfac = function DepositChequeDetailComponent_Factory(t) {
  return new (t || DepositChequeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_header_service__WEBPACK_IMPORTED_MODULE_9__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_10__.DepositService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_11__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_20__.ToastrService));
};
DepositChequeDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: DepositChequeDetailComponent,
  selectors: [["app-deposit-cheque-detail"]],
  viewQuery: function DepositChequeDetailComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.chequeImageFileRef = _t.first);
    }
  },
  decls: 100,
  vars: 47,
  consts: [[1, "cr-card"], [1, "top-heading"], ["ngbDropdown", "", "container", "body", 1, "d-inline-block"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["ngbDropdownMenu", "", 1, "dropdown-menu-end"], [4, "ngSwitchDefault"], [1, "card-head", "grid-container"], [1, "title"], [1, "card-content"], [1, "grid-container", "mb-3"], [4, "ngIf", "ngIfElse"], ["banks", ""], [4, "ngIf"], [1, "wizard-form-body"], [1, "main-content"], [1, "top-heading", "d-flex", "align-items-center", "justify-content-start", "gap-3"], ["class", "form-check", 4, "ngIf"], [1, "cheque-life-cycle", "d-flex", "justify-content-center"], ["class", "d-flex cycle-item cursor-pointer flex-grow-1 align-items-center justify-content-center", 3, "flex-grow-1", "click", 4, "ngFor", "ngForOf"], [1, "wizard-content", "banner-slider"], [1, "d-flex", "align-items-center", "gap-2"], [1, "d-flex", "gap-3"], [1, "file-uploader-sm", "d-flex", "gap-2", "justify-content-center", "align-items-center", 3, "click"], ["height", "30", "src", "assets/images/uploader.png"], [1, "font-14", "mb-0"], [3, "data", 4, "ngIf"], [3, "file", "download", 4, "ngIf"], ["type", "file", "hidden", "", "accept", ".png,.jpeg,.jpg,.pdf", 3, "change"], ["chequeImageFileRef", ""], ["disabled", "", 1, "btn"], ["class", "no-image-display", 4, "ngIf"], ["id", "carouselExampleIndicators", "class", "carousel slide", "data-bs-ride", "carousel", 4, "ngIf"], [1, "o-scroll"], [1, "activity-log-card"], ["class", "row", 4, "ngFor", "ngForOf"], ["class", "flex-end-row mt-2 mb-2", 3, "click", 4, "ngIf"], [1, "bottom-buttons"], ["type", "button", "routerLink", "/deposit-cheque", 1, "btn", "btn-cancel"], ["type", "button", "class", "btn btn-add ms-2", 3, "click", 4, "ngIf"], ["class", "d-flex gap-2 ms-2", 4, "ngIf"], ["ngbDropdownToggle", "", 1, "d-inline-flex", "justify-content-center", 2, "width", "20px"], [1, "fa-solid", "fa-ellipsis-v", "font-20", "cursor-pointer"], ["ngbDropdownItem", "", 1, "btn", 3, "click"], ["height", "25", "width", "25", 3, "src"], [1, "row", "mt-4"], [1, "col-2"], [1, "font-12", "fw-600", "mb-2"], [1, "m-0"], [1, "row", "align-items-end"], [1, "col-3"], [1, "fw-600", "mb-2"], ["type", "text", "placeholder", "Cheque Receiving Date", "bsDatepicker", "", "placement", "bottom", 1, "form-control", 2, "height", "46px", 3, "formControl", "bsConfig"], ["type", "text", "placeholder", "Customer Delivery Date", "bsDatepicker", "", "placement", "bottom", 1, "form-control", 2, "height", "46px", 3, "formControl", "bsConfig"], ["type", "button", 1, "btn", "btn-add", 3, "click"], [1, "col-12"], [3, "control", "errorMessages"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "madtc", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "madtc", 1, "form-check-label"], [1, "d-flex", "cycle-item", "cursor-pointer", "flex-grow-1", "align-items-center", "justify-content-center", 3, "click"], [1, "d-flex", "flex-column", "align-items-center", "gap-2", "acion-name-image"], [1, "action-icon"], ["src", "/assets/images/deposited.png"], [1, "action-heading"], ["class", "log-line", 4, "ngIf"], [1, "log-line"], [3, "data"], [3, "file", "download"], [1, "no-image-display"], ["src", "https://cdn.dribbble.com/users/1785628/screenshots/5605512/media/097297f8e21d501ba45d7ce437ed77bd.gif", "alt", ""], [1, "text-center"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "row"], [1, "col-lg-1"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], [1, "col-lg-10"], [1, "carousel-inner"], ["class", "carousel-item", 3, "active", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-item"], ["otherType", ""], [1, "d-flex", "justify-content-center", "align-items-center", "h-100"], ["target", "_blank", 1, "btn", "btn-add", 3, "href"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], [1, "col-1"], [1, "number"], [1, "flex-end-row", "mt-2", "mb-2", 3, "click"], [1, "text-end", "view-more"], [1, "hand-cursor"], ["type", "button", 1, "btn", "btn-add", "ms-2", 3, "click"], [1, "d-flex", "gap-2", "ms-2"]],
  template: function DepositChequeDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "Cheque Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](5, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, DepositChequeDetailComponent_ng_container_6_Template, 5, 4, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, DepositChequeDetailComponent_ng_container_7_Template, 7, 6, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](9, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, DepositChequeDetailComponent_ng_container_10_Template, 4, 3, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, DepositChequeDetailComponent_ng_container_11_Template, 4, 3, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, DepositChequeDetailComponent_ng_container_12_Template, 3, 2, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, DepositChequeDetailComponent_ng_container_13_Template, 4, 3, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, DepositChequeDetailComponent_ng_container_14_Template, 3, 2, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, DepositChequeDetailComponent_ng_container_15_Template, 1, 0, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 0)(17, "div", 7)(18, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "Cheque No. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "Customer Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Cheque Bank Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25, "Due Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "Amount");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, "Currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, " Amount (JOD)");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 9)(33, "div", 10)(34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](40, DepositChequeDetailComponent_div_40_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](41, DepositChequeDetailComponent_ng_template_41_Template, 1, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](45, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](48, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](53, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](54, DepositChequeDetailComponent_ng_container_54_Template, 2, 1, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](55, DepositChequeDetailComponent_ng_container_55_Template, 2, 1, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 14)(57, "div", 15)(58, "div", 0)(59, "div", 16)(60, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61, "Cheque Life Cycle");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](62, DepositChequeDetailComponent_div_62_Template, 4, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](64, DepositChequeDetailComponent_div_64_Template, 7, 4, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](65, "div", 0)(66, "div", 20)(67, "div", 1)(68, "div", 21)(69, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](70, "V1 Cheque Image");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "div", 22)(72, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function DepositChequeDetailComponent_Template_div_click_72_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r99);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](79);
        return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](_r17.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](73, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "h4", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](75, "Upload cheque image");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](76, DepositChequeDetailComponent_view_file_76_Template, 1, 3, "view-file", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](77, DepositChequeDetailComponent_view_file_77_Template, 1, 2, "view-file", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "input", 28, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function DepositChequeDetailComponent_Template_input_change_78_listener($event) {
        return ctx.onFileSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](82, DepositChequeDetailComponent_div_82_Template, 4, 0, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](83, DepositChequeDetailComponent_div_83_Template, 15, 1, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "div", 0)(85, "div", 1)(86, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87, "Activity log");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](89);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "div", 33)(91, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](92, DepositChequeDetailComponent_div_92_Template, 31, 12, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](93, DepositChequeDetailComponent_div_93_Template, 4, 0, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](94, DepositChequeDetailComponent_div_94_Template, 4, 0, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](95, "div", 37)(96, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](97, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](98, DepositChequeDetailComponent_button_98_Template, 2, 0, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](99, DepositChequeDetailComponent_div_99_Template, 5, 0, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", ctx.userDetails == null ? null : ctx.userDetails.role == null ? null : ctx.userDetails.role.roleId);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", ctx.depositeDetail == null ? null : ctx.depositeDetail.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx.chequeStatusEnum.Deposited);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx.chequeStatusEnum.ReDeposited);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx.chequeStatusEnum.Bounced);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx.chequeStatusEnum.Postponed);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", ctx.chequeStatusEnum.Withdrawn);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"]((ctx.depositeDetail == null ? null : ctx.depositeDetail.chequeNo) || "---");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx.depositeDetail == null ? null : ctx.depositeDetail.customer == null ? null : ctx.depositeDetail.customer.customerName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.depositeDetail == null ? null : ctx.depositeDetail.customer == null ? null : ctx.depositeDetail.customer.mobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.depositeDetail == null ? null : ctx.depositeDetail.bank == null ? null : ctx.depositeDetail.bank.translations)("ngIfElse", _r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](45, 38, ctx.depositeDetail == null ? null : ctx.depositeDetail.chequeDate, "dd MMM yyyy") || "---");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](48, 41, ctx.depositeDetail == null ? null : ctx.depositeDetail.collectedAmount, ".3") || "---");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", ctx.depositeDetail == null ? null : ctx.depositeDetail.currency[0] == null ? null : ctx.depositeDetail.currency[0].lookupName, " (", (ctx.depositeDetail == null ? null : ctx.depositeDetail.currency[0] == null ? null : ctx.depositeDetail.currency[0].currencyRate) || 1, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](53, 44, ctx.depositeDetail == null ? null : ctx.depositeDetail.chequeCollectionJod, ".3") || "---");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx._authService.getUserRole.roleId == ctx.userRoleEnum.CreditAndCollection);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx._authService.getUserRole.roleId == ctx.userRoleEnum.CreditAndCollection);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.withAndReplaceChequeActions.includes(ctx.depositeDetail == null ? null : ctx.depositeDetail.status));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.masterActivityLog);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.uploadedFile == null ? null : ctx.uploadedFile.file);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.depositeDetail == null ? null : ctx.depositeDetail.actionFile);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("color", ctx.depositeDetail == null ? null : ctx.depositeDetail.statusObj == null ? null : ctx.depositeDetail.statusObj.lookupTextColor)("background-color", ctx.depositeDetail == null ? null : ctx.depositeDetail.statusObj == null ? null : ctx.depositeDetail.statusObj.lookupBGColor);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.depositeDetail && (ctx.depositeDetail == null ? null : ctx.depositeDetail.statusObj.translations) ? ctx.depositeDetail == null ? null : ctx.depositeDetail.statusObj.translations == null ? null : ctx.depositeDetail.statusObj.translations[0] == null ? null : ctx.depositeDetail.statusObj.translations[0].lookupName : "-", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.depositeDetail == null ? null : ctx.depositeDetail.chequeImages.length) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.depositeDetail == null ? null : ctx.depositeDetail.chequeImages.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Number of Actions : ", ctx.masterActivityLog.length, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.activityLog);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activityLog.length == 1 && ctx.masterActivityLog.length > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activityLog.length > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.withAndReplaceChequeActions.includes(ctx.depositeDetail == null ? null : ctx.depositeDetail.status));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.userDetails == null ? null : ctx.userDetails.role == null ? null : ctx.userDetails.role.roleId) == 46 && ctx.pendingChequesActions.includes(ctx.depositeDetail == null ? null : ctx.depositeDetail.status));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgSwitchDefault, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbDropdownItem, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__.BsDatepickerInputDirective, _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_12__.ViewFileComponent, _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_13__.ValidationErrorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_21__.DatePipe],
  styles: [".grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.7fr 1.5fr repeat(5, 1fr);\n  gap: 10px;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%]:after {\n  border: none;\n}\n\n.cheque-life-cycle[_ngcontent-%COMP%]   .cycle-item[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  background-color: #ffd2d7;\n  height: 40px;\n  width: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  padding: 3px;\n}\n.cheque-life-cycle[_ngcontent-%COMP%]   .cycle-item[_ngcontent-%COMP%]   .action-heading[_ngcontent-%COMP%] {\n  color: #2f73b8;\n  font-weight: 700;\n  font-size: 14px;\n}\n.cheque-life-cycle[_ngcontent-%COMP%]   .cycle-item[_ngcontent-%COMP%]   .acion-name-image[_ngcontent-%COMP%] {\n  flex-basis: 250px;\n}\n.cheque-life-cycle[_ngcontent-%COMP%]   .cycle-item[_ngcontent-%COMP%]   .log-line[_ngcontent-%COMP%] {\n  height: 2px;\n  background: red;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVwb3NpdC1jaGVxdWUvZGVwb3NpdC1jaGVxdWUtZGV0YWlsL2RlcG9zaXQtY2hlcXVlLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpREFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFJSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUROO0FBSUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRk47QUFLSTtFQUNJLGlCQUFBO0FBSFI7QUFLSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUhOIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgMS41ZnIgcmVwZWF0KDUsIDFmcik7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcbi5kcm9wZG93bi10b2dnbGUge1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxufVxyXG4uY2hlcXVlLWxpZmUtY3ljbGUge1xyXG4gIC5jeWNsZS1pdGVtIHtcclxuICAgIC5hY3Rpb24taWNvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQyZDc7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9uLWhlYWRpbmcge1xyXG4gICAgICBjb2xvcjogIzJmNzNiODtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hY2lvbi1uYW1lLWltYWdle1xyXG4gICAgICAgIGZsZXgtYmFzaXM6MjUwcHg7XHJcbiAgICB9XHJcbiAgICAubG9nLWxpbmUge1xyXG4gICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5333:
/*!***************************************************************************************!*\
  !*** ./src/app/deposit-cheque/deposit-cheque-modal/deposit-cheque-modal.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositChequeModalComponent": () => (/* binding */ DepositChequeModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/modals/message-modal/message-modal.component */ 4280);
/* harmony import */ var _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/enums/enum */ 5706);
/* harmony import */ var src_app_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/deposit.service */ 8378);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/loading/loading.component */ 8424);
/* harmony import */ var _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/view-file/view-file.component */ 7761);
/* harmony import */ var _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/validation-error/validation-error.component */ 7711);
/* harmony import */ var _shared_directives_max_characters_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/directives/max-characters.directive */ 4659);
















const _c0 = ["fileRef"];
function DepositChequeModalComponent_div_0_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Bounced By: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Sofy");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Bounced: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " 14/12/2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function DepositChequeModalComponent_div_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 17)(1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", ctx_r4.details[0] == null ? null : ctx_r4.details[0].statusObj == null ? null : ctx_r4.details[0].statusObj.lookupTextColor)("background-color", ctx_r4.details[0] == null ? null : ctx_r4.details[0].statusObj == null ? null : ctx_r4.details[0].statusObj.lookupBGColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r4.details[0] == null ? null : ctx_r4.details[0].statusObj == null ? null : ctx_r4.details[0].statusObj.translations == null ? null : ctx_r4.details[0].statusObj.translations[0].lookupName, " ");
  }
}
function DepositChequeModalComponent_div_0_div_27_p_7_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 23);
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", item_r9 == null ? null : item_r9.bankLogo, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function DepositChequeModalComponent_div_0_div_27_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DepositChequeModalComponent_div_0_div_27_p_7_img_1_Template, 1, 1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : item_r9.bankLogo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((item_r9 == null ? null : item_r9.bank) || "---");
  }
}
function DepositChequeModalComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DepositChequeModalComponent_div_0_div_27_p_7_Template, 3, 2, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((item_r9 == null ? null : item_r9.chequeNo) || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", item_r9 == null ? null : item_r9.customer == null ? null : item_r9.customer.customerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r9 == null ? null : item_r9.customer == null ? null : item_r9.customer.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r9 == null ? null : item_r9.bank);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](10, 9, item_r9 == null ? null : item_r9.chequeDate, "dd MMM yyyy") || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](13, 12, item_r9 == null ? null : item_r9.collectedAmount, ".3") || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", item_r9 == null ? null : item_r9.currency[0] == null ? null : item_r9.currency[0].lookupName, " (", (item_r9 == null ? null : item_r9.currency[0] == null ? null : item_r9.currency[0].currencyRate) || 1, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](18, 15, item_r9 == null ? null : item_r9.chequeCollectionJod, ".3") || "---");
  }
}
const _c1 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
function DepositChequeModalComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7)(1, "div", 24)(2, "div", 25)(3, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Bank Confirmation Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx_r6.bankConfirmationDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c1));
  }
}
function DepositChequeModalComponent_div_0_div_29_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Receipt Voucher No *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DepositChequeModalComponent_div_0_div_29_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r15.actionTypeId == ctx_r15.chequeActionEnum.PaidInCash && "Receipt Copy " || "Attachment ", " ", ctx_r15.actionTypeId != ctx_r15.chequeActionEnum.Bounce && "*" || "", " ");
  }
}
function DepositChequeModalComponent_div_0_div_29_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Reason Type *");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DepositChequeModalComponent_div_0_div_29_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Cheque Collection Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DepositChequeModalComponent_div_0_div_29_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Next Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c2 = function () {
  return {
    required: "Input is required"
  };
};
function DepositChequeModalComponent_div_0_div_29_tr_12_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 38)(2, "validation-error", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const control_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", control_r21.get("receiptVoucherNumber"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c2));
  }
}
const _c3 = function (a1) {
  return {
    isUploaded: true,
    uploadedFile: a1
  };
};
function DepositChequeModalComponent_div_0_div_29_tr_12_td_2_view_file_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "view-file", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("removeFile", function DepositChequeModalComponent_div_0_div_29_tr_12_td_2_view_file_6_Template_view_file_removeFile_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34);
      const index_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r32.removeFileHandle($event, index_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("remove", true)("data", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c3, ctx_r29.filesToUpload[index_r22]));
  }
}
function DepositChequeModalComponent_div_0_div_29_tr_12_td_2_ng_container_9_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DepositChequeModalComponent_div_0_div_29_tr_12_td_2_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DepositChequeModalComponent_div_0_div_29_tr_12_td_2_ng_container_9_ng_container_1_span_1_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r21 == null ? null : (tmp_0_0 = control_r21.get("attachment")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function DepositChequeModalComponent_div_0_div_29_tr_12_td_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DepositChequeModalComponent_div_0_div_29_tr_12_td_2_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (control_r21 == null ? null : (tmp_0_0 = control_r21.get("attachment")) == null ? null : tmp_0_0.invalid) && (control_r21 == null ? null : (tmp_0_0 = control_r21.get("attachment")) == null ? null : tmp_0_0.touched) || (control_r21 == null ? null : (tmp_0_0 = control_r21.get("attachment")) == null ? null : tmp_0_0.dirty));
  }
}
function DepositChequeModalComponent_div_0_div_29_tr_12_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td")(1, "div", 40)(2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DepositChequeModalComponent_div_0_div_29_tr_12_td_2_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);
      const index_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r40.fileRefs.toArray()[index_r22].nativeElement.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Drag & drop files");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, DepositChequeModalComponent_div_0_div_29_tr_12_td_2_view_file_6_Template, 1, 4, "view-file", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function DepositChequeModalComponent_div_0_div_29_tr_12_td_2_Template_input_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);
      const index_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r43.onFileSelected($event, index_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, DepositChequeModalComponent_div_0_div_29_tr_12_td_2_ng_container_9_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const index_r22 = ctx_r45.index;
    const control_r21 = ctx_r45.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r24.filesToUpload[index_r22] == null ? null : ctx_r24.filesToUpload[index_r22].file);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("accept", ctx_r24.acceptedFileTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r21 == null ? null : (tmp_2_0 = control_r21.get("attachment")) == null ? null : tmp_2_0.errors);
  }
}
function DepositChequeModalComponent_div_0_div_29_tr_12_td_3_ng_container_2_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DepositChequeModalComponent_div_0_div_29_tr_12_td_3_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DepositChequeModalComponent_div_0_div_29_tr_12_td_3_ng_container_2_ng_container_1_span_1_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r21 == null ? null : (tmp_0_0 = control_r21.get("reasonId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function DepositChequeModalComponent_div_0_div_29_tr_12_td_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DepositChequeModalComponent_div_0_div_29_tr_12_td_3_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (control_r21 == null ? null : (tmp_0_0 = control_r21.get("reasonId")) == null ? null : tmp_0_0.invalid) && (control_r21 == null ? null : (tmp_0_0 = control_r21.get("reasonId")) == null ? null : tmp_0_0.touched) || (control_r21 == null ? null : (tmp_0_0 = control_r21.get("reasonId")) == null ? null : tmp_0_0.dirty));
  }
}
function DepositChequeModalComponent_div_0_div_29_tr_12_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ng-select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DepositChequeModalComponent_div_0_div_29_tr_12_td_3_ng_container_2_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const control_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx_r25.reasonList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", control_r21 == null ? null : (tmp_1_0 = control_r21.get("reasonId")) == null ? null : tmp_1_0.errors);
  }
}
function DepositChequeModalComponent_div_0_div_29_tr_12_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c1));
  }
}
function DepositChequeModalComponent_div_0_div_29_tr_12_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ng-select", 52)(2, "validation-error", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const control_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appendTo", ctx_r27.body)("items", ctx_r27.actionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("control", control_r21.get("nextAllowedAction"))("errorMessages", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c2));
  }
}
function DepositChequeModalComponent_div_0_div_29_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DepositChequeModalComponent_div_0_div_29_tr_12_td_1_Template, 3, 3, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DepositChequeModalComponent_div_0_div_29_tr_12_td_2_Template, 10, 3, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DepositChequeModalComponent_div_0_div_29_tr_12_td_3_Template, 3, 2, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, DepositChequeModalComponent_div_0_div_29_tr_12_td_4_Template, 2, 2, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, DepositChequeModalComponent_div_0_div_29_tr_12_td_5_Template, 3, 5, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const index_r22 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", index_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r19.actionType.id == ctx_r19.chequeActionEnum.PaidInCash);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r19.actionType.id != ctx_r19.chequeActionEnum.Redeposit && ctx_r19.actionType.id != ctx_r19.chequeActionEnum.Collect);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r19.actionType.id != ctx_r19.chequeActionEnum.Collect && ctx_r19.actionType.id != ctx_r19.chequeActionEnum.PaidInCash);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r19.actionType.id == ctx_r19.chequeActionEnum.Bounce);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r19.actionType.id == ctx_r19.chequeActionEnum.Withdraw);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appMaxCharacters", 200);
  }
}
function DepositChequeModalComponent_div_0_div_29_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r20.messageError, " ");
  }
}
function DepositChequeModalComponent_div_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31)(1, "table", 32)(2, "thead")(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, DepositChequeModalComponent_div_0_div_29_th_4_Template, 2, 0, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, DepositChequeModalComponent_div_0_div_29_th_5_Template, 2, 2, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, DepositChequeModalComponent_div_0_div_29_th_6_Template, 2, 0, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DepositChequeModalComponent_div_0_div_29_th_7_Template, 2, 0, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DepositChequeModalComponent_div_0_div_29_th_8_Template, 2, 0, "th", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "tbody", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, DepositChequeModalComponent_div_0_div_29_tr_12_Template, 8, 7, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, DepositChequeModalComponent_div_0_div_29_div_13_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.actionType.id == ctx_r7.chequeActionEnum.PaidInCash);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.actionType.id != ctx_r7.chequeActionEnum.Redeposit && ctx_r7.actionType.id != ctx_r7.chequeActionEnum.Collect);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.actionType.id != ctx_r7.chequeActionEnum.Collect && ctx_r7.actionType.id != ctx_r7.chequeActionEnum.PaidInCash);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.actionType.id == ctx_r7.chequeActionEnum.Bounce);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.actionType.id == ctx_r7.chequeActionEnum.Withdraw);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r7.formArray.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.messageError);
  }
}
function DepositChequeModalComponent_div_0_button_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function DepositChequeModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 3)(1, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function DepositChequeModalComponent_div_0_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r53.saveForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 5)(3, "div")(4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DepositChequeModalComponent_div_0_span_8_Template, 9, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, DepositChequeModalComponent_div_0_span_9_Template, 3, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Cheque No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Cheque Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Amount (JOD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, DepositChequeModalComponent_div_0_div_27_Template, 19, 18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, DepositChequeModalComponent_div_0_div_28_Template, 9, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, DepositChequeModalComponent_div_0_div_29_Template, 14, 7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 14)(31, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DepositChequeModalComponent_div_0_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r55.dismissModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, DepositChequeModalComponent_div_0_button_33_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.reasonForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("You are about to ", ctx_r0.actionType == null ? null : ctx_r0.actionType.name == null ? null : ctx_r0.actionType.name[0].lookupName, " the following cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.isConfirmShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isConfirmShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.actionTypeId == ctx_r0.chequeActionEnum.Bounce || ctx_r0.actionTypeId == ctx_r0.chequeActionEnum.Collect);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.detailShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.isConfirmShow);
  }
}
function DepositChequeModalComponent_app_loading_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loading");
  }
}
function DepositChequeModalComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.message, "");
  }
}
class DepositChequeModalComponent {
  constructor(formBuilder, deposiService, modalService, toastrService, _datePipe) {
    this.formBuilder = formBuilder;
    this.deposiService = deposiService;
    this.modalService = modalService;
    this.toastrService = toastrService;
    this._datePipe = _datePipe;
    this.title = '';
    this.isConfirmShow = false;
    this.detailShow = false;
    this.sendtoLoadData = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.message = '';
    this.messageError = '';
    this.isLoading = false;
    this.saveSubmitted = false;
    this.reasonList = [];
    this.filesToUpload = [];
    this.acceptedFileTypes = 'image/*,application/pdf';
    this.chequeActionEnum = _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeActionEnum;
    this.actionList = [{
      name: 'Pay In Cash',
      id: _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeActionEnum.PaidInCash
    }, {
      name: 'Replace',
      id: _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeActionEnum.Replace
    }];
    this.fileRefs = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.QueryList();
    this.actionTypeId = 0;
    this.bankConfirmationDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(new Date());
  }
  ngOnInit() {
    console.log(this.details);
    this.initForm();
  }
  getActionReasons() {
    let params = `?actionId=${this.actionType.id}&pageSize=1000`;
    this.deposiService.getActionReasons(params).subscribe(response => {
      this.reasonList = response.data;
    });
  }
  initForm() {
    this.reasonForm = this.formBuilder.group({
      chequeArray: this.formBuilder.array([this.initFormGroup()])
    });
    this.getActionReasons();
    this.actionTypeId = this.actionType?.id;
    if (this.actionType.id != _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeActionEnum.Redeposit && this.actionType.id != _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeActionEnum.Collect) {
      this.formArray.clear();
      this.details.forEach((x, index) => {
        this.formArray.push(this.initFormGroup());
        if (this.actionType.id != _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeActionEnum.Bounce) {
          this.setValidator('attachment', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, index);
        }
        if (this.actionType.id != _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeActionEnum.PaidInCash) {
          this.setValidator('reasonId', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, index);
        }
        if (this.actionType.id == _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeActionEnum.PaidInCash) {
          this.setValidator('receiptVoucherNumber', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, index);
        }
        if (this.actionType.id == _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeActionEnum.Withdraw) {
          this.setValidator('nextAllowedAction', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, index);
        }
      });
    }
  }
  initFormGroup() {
    return this.formBuilder.group({
      receiptVoucherNumber: [''],
      chequeCollectionDate: [new Date()],
      note: [''],
      attachment: [null],
      reasonId: [null],
      nextAllowedAction: [null]
    });
  }
  get formArray() {
    return this.reasonForm.get('chequeArray');
  }
  setValidator(controlName, validator, index) {
    const control = this.formArray.at(index).get(controlName);
    if (control && validator) {
      control.setValidators(validator);
      control.updateValueAndValidity();
    }
  }
  dismissModal() {
    this.modalService.dismissAll();
  }
  close() {
    this.sendtoLoadData.emit('true');
  }
  onFileSelected(event, index) {
    let files = [...event.target.files];
    files.forEach(file => {
      this.deposiService.fileToBase64(file).then(response => {
        this.uploadFile(file, index);
        this.filesToUpload[index] = response; //Adding item on Specific Index of Array because oninit array is empty and always adding item to 0 index if we slect index 2; 
      });
    });
  }

  removeFileHandle(event, index) {
    this.filesToUpload.splice(index, 1);
    this.formArray.at(index).get('attachment')?.setValue('');
    this.fileRefs.toArray()[index].nativeElement.value = null;
  }
  uploadFile(file, index) {
    const formData = new FormData();
    formData.append('Folder', 'ChequeImages');
    formData.append('File', file);
    this.deposiService.uploadFile(formData).subscribe(response => {
      if (response.isSuccess) {
        this.formArray.at(index).get('attachment')?.setValue(response['data']);
      }
    });
  }
  get f() {
    return this.reasonForm;
  }
  saveForm() {
    if (this.isConfirmShow && this.f.valid) {
      let cheques = [];
      if (this.details.length > 1) {
        let formArray = this.formArray.value;
        this.details.forEach((x, index) => {
          let receiptNo = formArray[index]?.receiptVoucherNumber || '';
          let collectionDate = this._datePipe.transform(formArray[index]?.chequeCollectionDate, 'yyyy-MM-dd') || '';
          let obj = {
            depositedChequeId: x.id,
            actionFile: formArray[index]?.attachment,
            reasonId: formArray[index]?.reasonId,
            notes: formArray[index]?.note,
            ...(receiptNo ? {
              receiptVoucherNumber: receiptNo
            } : {}),
            ...(collectionDate ? {
              chequeCollectionDate: collectionDate
            } : {})
          };
          cheques.push(obj);
        });
        let obj = {
          actionId: this.actionType.id,
          cheques
        };
        this.submitData(obj);
      } else {
        this.details.forEach((element, index) => {
          this.isLoading = true;
          let formData = new FormData();
          formData.append('BankConfirmationDate', this._datePipe.transform(this.bankConfirmationDate.value, 'yyyy-MM-dd') || '');
          formData.append('DepositedChequeId', element?.id.toString());
          formData.append('ActionId', this.actionType.id.toString());
          formData.append('Notes', this.formArray.value[index]?.note);
          formData.append('ActionFile', this.filesToUpload[0]?.file || '');
          formData.append('ReasonId', this.formArray.value[index]?.reasonId || '');
          if (this.actionTypeId == _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeActionEnum.PaidInCash) {
            formData.append('ReceiptVoucherNumber', this.formArray.value[index]?.receiptVoucherNumber || '');
          }
          if (this.actionTypeId == _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeActionEnum.Bounce) {
            formData.append('chequeCollectionDate', this._datePipe.transform(this.formArray.value[index]?.chequeCollectionDate, 'yyyy-MM-dd') || '');
          }
          if (this.actionTypeId == _shared_enums_enum__WEBPACK_IMPORTED_MODULE_1__.ChequeActionEnum.Withdraw) {
            formData.append('nextAllowedAction', this.formArray.value[index]?.nextAllowedAction || '');
          }
          this.submitData(formData);
        });
      }
    } else {
      this.f.markAllAsTouched();
      return;
    }
  }
  submitData(formData) {
    let api;
    if (this.details.length == 1) {
      api = this.deposiService.actionOnCheques(formData);
    } else {
      api = this.deposiService.actionOnChequesMulti(formData);
    }
    api.subscribe({
      next: response => {
        if (response.isSuccess) {
          this.responseModal('success', `Your ${(this.actionType?.name?.[0].lookupName).toLowerCase()} action successfully performed`);
          this.sendtoLoadData.emit(true);
        }
      },
      error: err => {
        this.responseModal('error', err?.error?.errors[0].errorMessageEn);
      }
    }).add(() => this.isLoading = false);
  }
  responseModal(type, message) {
    const ref = this.modalService.open(_shared_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_0__.MessageModalComponent);
    ref.componentInstance.type = type;
    ref.componentInstance.message = message;
  }
}
DepositChequeModalComponent.ɵfac = function DepositChequeModalComponent_Factory(t) {
  return new (t || DepositChequeModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_2__.DepositService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe));
};
DepositChequeModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: DepositChequeModalComponent,
  selectors: [["app-deposit-cheque-modal"]],
  viewQuery: function DepositChequeModalComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.fileRefs = _t);
    }
  },
  inputs: {
    details: "details",
    actionType: "actionType",
    title: "title",
    isConfirmShow: "isConfirmShow",
    detailShow: "detailShow"
  },
  outputs: {
    sendtoLoadData: "sendtoLoadData"
  },
  decls: 3,
  vars: 3,
  consts: [["class", "modal-body", "ngbAutoFocus", "", 4, "ngIf"], [4, "ngIf"], ["class", "modal-body", 4, "ngIf"], ["ngbAutoFocus", "", 1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "page-heading"], ["class", "text-end", 4, "ngIf"], [1, "modal-cr-card"], [1, "card-head", "grid-container"], [1, "title"], [1, "card-content"], ["class", "pb-4 grid-container", 4, "ngFor", "ngForOf"], ["class", "modal-cr-card", 4, "ngIf"], ["class", "detail-content simple-table", 4, "ngIf"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", "class", "btn btn-save", 4, "ngIf"], [1, "text-end"], [1, "soft-text"], [1, "last-content"], [1, "collected-btn"], [1, "pb-4", "grid-container"], ["height", "25", "width", "25", 3, "src", 4, "ngIf"], ["height", "25", "width", "25", 3, "src"], [1, "row"], [1, "col-4"], [1, "fw-500", "mb-2"], [1, "input-group"], ["type", "text", "placeholder", "Collection Date", "bsDatepicker", "", "placement", "bottom", 1, "form-control", 3, "formControl", "bsConfig"], [1, "input-group-text"], [1, "fa-regular", "fa-calendar"], [1, "detail-content", "simple-table"], [1, "table"], ["formArrayName", "chequeArray"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["class", "alert alert-danger text-center mt-3 mb-3 my-2", "role", "alert", 4, "ngIf"], [3, "formGroupName"], ["formControlName", "note", 1, "form-control", "custom-input-field", 3, "appMaxCharacters"], ["type", "text", "placeholder", "Receipt voucher no", "formControlName", "receiptVoucherNumber", 1, "form-control"], [3, "control", "errorMessages"], [1, "d-flex", "flex-column"], [1, "file-uploader-sm", "mb-2", "d-flex", "gap-2", "justify-content-center", "align-items-center", 3, "click"], ["height", "30", "src", "assets/images/uploader.png"], [1, "font-14", "mb-0"], [3, "remove", "data", "removeFile", 4, "ngIf"], ["type", "file", "hidden", "", 3, "change"], ["fileRef", ""], [3, "remove", "data", "removeFile"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["placeholder", "Reason Type", "bindLabel", "chequeActionReason", "bindValue", "actionReasonID", "formControlName", "reasonId", 3, "items"], ["type", "text", "formControlName", "chequeCollectionDate", "placeholder", "Cheque Collection Date", "bsDatepicker", "", "placement", "bottom", 1, "form-control", 2, "height", "46px", 3, "bsConfig"], ["placeholder", "Select an Action", "formControlName", "nextAllowedAction", "bindLabel", "name", "bindValue", "id", 3, "appendTo", "items"], ["role", "alert", 1, "alert", "alert-danger", "text-center", "mt-3", "mb-3", "my-2"], ["type", "submit", 1, "btn", "btn-save"], [1, "modal-body"], [1, "message"], [1, "fa-regular", "fa-circle-check"]],
  template: function DepositChequeModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, DepositChequeModalComponent_div_0_Template, 34, 9, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DepositChequeModalComponent_app_loading_1_Template, 1, 0, "app-loading", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, DepositChequeModalComponent_div_2_Template, 5, 1, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.message && !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.message);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerInputDirective, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__.LoadingComponent, _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_4__.ViewFileComponent, _shared_components_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_5__.ValidationErrorComponent, _shared_directives_max_characters_directive__WEBPACK_IMPORTED_MODULE_6__.MaxCharactersDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr repeat(5, 1fr);\n  gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVwb3NpdC1jaGVxdWUvZGVwb3NpdC1jaGVxdWUtbW9kYWwvZGVwb3NpdC1jaGVxdWUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsK0NBQUE7RUFDQSxTQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnIgcmVwZWF0KDUsIDFmcik7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9409:
/*!*****************************************************************!*\
  !*** ./src/app/deposit-cheque/deposit-cheque-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositChequeRoutingModule": () => (/* binding */ DepositChequeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _deposit_cheque_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deposit-cheque.component */ 1697);
/* harmony import */ var _deposit_cheque_detail_deposit_cheque_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deposit-cheque-detail/deposit-cheque-detail.component */ 8070);
/* harmony import */ var _replace_cheque_replace_cheque_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./replace-cheque/replace-cheque.component */ 4840);
/* harmony import */ var _cheque_dashboard_replaced_cheque_detail_view_replaced_cheque_detail_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cheque-dashboard/replaced-cheque-detail-view/replaced-cheque-detail-view.component */ 9645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [{
  path: '',
  component: _deposit_cheque_component__WEBPACK_IMPORTED_MODULE_0__.DepositChequeComponent
}, {
  path: 'detail/:id',
  component: _deposit_cheque_detail_deposit_cheque_detail_component__WEBPACK_IMPORTED_MODULE_1__.DepositChequeDetailComponent
}, {
  path: 'replace',
  component: _replace_cheque_replace_cheque_component__WEBPACK_IMPORTED_MODULE_2__.ReplaceChequeComponent
}, {
  path: 'replace-view',
  component: _cheque_dashboard_replaced_cheque_detail_view_replaced_cheque_detail_view_component__WEBPACK_IMPORTED_MODULE_3__.ReplacedChequeDetailViewComponent
}
//   { path: 'view-branch/:id', component: AddBranchComponent },
];

class DepositChequeRoutingModule {}
DepositChequeRoutingModule.ɵfac = function DepositChequeRoutingModule_Factory(t) {
  return new (t || DepositChequeRoutingModule)();
};
DepositChequeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: DepositChequeRoutingModule
});
DepositChequeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DepositChequeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 1697:
/*!************************************************************!*\
  !*** ./src/app/deposit-cheque/deposit-cheque.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositChequeComponent": () => (/* binding */ DepositChequeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_header_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/header.service */ 940);
/* harmony import */ var _shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/sidebar.service */ 9106);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cheque_list_cheque_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cheque-list/cheque-list.component */ 2459);
/* harmony import */ var _cheque_dashboard_cheque_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cheque-dashboard/cheque-dashboard.component */ 3446);






function DepositChequeComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DepositChequeComponent_button_4_Template_button_click_0_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", item_r4.id === ctx_r0.headerService.selecteddeposit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
  }
}
function DepositChequeComponent_div_5_Template(rf, ctx) {
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
function DepositChequeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-cheque-dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DepositChequeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-cheque-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class DepositChequeComponent {
  constructor(headerService, sidebarService) {
    this.headerService = headerService;
    this.sidebarService = sidebarService;
    this.depositTypes = [];
    this.totalAllRecordsCount = 0;
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
    this.headerService.selecteddeposit = deposit.id;
  }
  getdepositTypes() {
    this.depositTypes = [{
      id: 1,
      name: 'Cheques Dashboard'
    }, {
      id: 2,
      name: 'Cheques List'
    }];
  }
}
DepositChequeComponent.ɵfac = function DepositChequeComponent_Factory(t) {
  return new (t || DepositChequeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_header_service__WEBPACK_IMPORTED_MODULE_0__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.SidebarService));
};
DepositChequeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DepositChequeComponent,
  selectors: [["app-deposit-cheque"]],
  decls: 8,
  vars: 4,
  consts: [[1, "card-page"], [1, "row"], [1, "col-md-9"], [1, "btn-tabs"], ["type", "button", "class", "btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "col-md-3", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["type", "button", 1, "btn", 3, "click"], [1, "col-md-3"], [1, "total-amount"]],
  template: function DepositChequeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DepositChequeComponent_button_4_Template, 2, 3, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DepositChequeComponent_div_5_Template, 3, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DepositChequeComponent_div_6_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DepositChequeComponent_div_7_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.depositTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.headerService.selecteddeposit == 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.headerService.selecteddeposit == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.headerService.selecteddeposit == 2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _cheque_list_cheque_list_component__WEBPACK_IMPORTED_MODULE_2__.ChequeListComponent, _cheque_dashboard_cheque_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.ChequeDashboardComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 300:
/*!*********************************************************!*\
  !*** ./src/app/deposit-cheque/deposit-cheque.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositChequeModule": () => (/* binding */ DepositChequeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/google-maps */ 3889);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _deposit_cheque_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deposit-cheque.component */ 1697);
/* harmony import */ var _deposit_cheque_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deposit-cheque-routing.module */ 9409);
/* harmony import */ var _deposit_cheque_detail_deposit_cheque_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deposit-cheque-detail/deposit-cheque-detail.component */ 8070);
/* harmony import */ var _cheque_list_cheque_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cheque-list/cheque-list.component */ 2459);
/* harmony import */ var _cheque_dashboard_cheque_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cheque-dashboard/cheque-dashboard.component */ 3446);
/* harmony import */ var _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-card/dashboard-card.component */ 9362);
/* harmony import */ var _cheque_dashboard_cheque_aging_report_cheque_aging_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cheque-dashboard/cheque-aging-report/cheque-aging-report.component */ 282);
/* harmony import */ var _cheque_dashboard_dashboard_cheque_chart_dashboard_cheque_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cheque-dashboard/dashboard-cheque-chart/dashboard-cheque-chart.component */ 8860);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-charts */ 1208);
/* harmony import */ var _replace_cheque_replace_cheque_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./replace-cheque/replace-cheque.component */ 4840);
/* harmony import */ var _cheque_dashboard_replaced_cheque_detail_view_replaced_cheque_detail_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cheque-dashboard/replaced-cheque-detail-view/replaced-cheque-detail-view.component */ 9645);
/* harmony import */ var _deposit_cheque_modal_deposit_cheque_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./deposit-cheque-modal/deposit-cheque-modal.component */ 5333);
/* harmony import */ var _shared_directives_max_characters_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/directives/max-characters.directive */ 4659);
/* harmony import */ var _deposit_cheque_detail_modal_deposit_cheque_detail_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deposit-cheque-detail-modal/deposit-cheque-detail-modal.component */ 9773);
/* harmony import */ var _postpone_cheque_postpone_cheque_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./postpone-cheque/postpone-cheque.component */ 7964);
/* harmony import */ var _cheque_dashboard_cheques_due_date_cheques_due_date_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cheque-dashboard/cheques-due-date/cheques-due-date.component */ 931);
/* harmony import */ var _deposit_cheque_detail_components_confirm_action_confirm_action_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./deposit-cheque-detail/components/confirm-action/confirm-action.component */ 4967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2560);






















class DepositChequeModule {}
DepositChequeModule.ɵfac = function DepositChequeModule_Factory(t) {
  return new (t || DepositChequeModule)();
};
DepositChequeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
  type: DepositChequeModule
});
DepositChequeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_19__.GoogleMapsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientJsonpModule, _deposit_cheque_routing_module__WEBPACK_IMPORTED_MODULE_2__.DepositChequeRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng2_charts__WEBPACK_IMPORTED_MODULE_21__.NgChartsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](DepositChequeModule, {
    declarations: [_deposit_cheque_component__WEBPACK_IMPORTED_MODULE_1__.DepositChequeComponent, _deposit_cheque_detail_deposit_cheque_detail_component__WEBPACK_IMPORTED_MODULE_3__.DepositChequeDetailComponent, _cheque_list_cheque_list_component__WEBPACK_IMPORTED_MODULE_4__.ChequeListComponent, _cheque_dashboard_cheque_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.ChequeDashboardComponent, _dashboard_card_dashboard_card_component__WEBPACK_IMPORTED_MODULE_6__.DashboardCardComponent, _cheque_dashboard_cheque_aging_report_cheque_aging_report_component__WEBPACK_IMPORTED_MODULE_7__.ChequeAgingReportComponent, _cheque_dashboard_dashboard_cheque_chart_dashboard_cheque_chart_component__WEBPACK_IMPORTED_MODULE_8__.DashboardChequeChartComponent, _replace_cheque_replace_cheque_component__WEBPACK_IMPORTED_MODULE_9__.ReplaceChequeComponent, _cheque_dashboard_replaced_cheque_detail_view_replaced_cheque_detail_view_component__WEBPACK_IMPORTED_MODULE_10__.ReplacedChequeDetailViewComponent, _deposit_cheque_modal_deposit_cheque_modal_component__WEBPACK_IMPORTED_MODULE_11__.DepositChequeModalComponent, _shared_directives_max_characters_directive__WEBPACK_IMPORTED_MODULE_12__.MaxCharactersDirective, _deposit_cheque_detail_modal_deposit_cheque_detail_modal_component__WEBPACK_IMPORTED_MODULE_13__.DepositChequeDetailModalComponent, _postpone_cheque_postpone_cheque_component__WEBPACK_IMPORTED_MODULE_14__.PostponeChequeComponent, _cheque_dashboard_cheques_due_date_cheques_due_date_component__WEBPACK_IMPORTED_MODULE_15__.ChequesDueDateComponent, _deposit_cheque_detail_components_confirm_action_confirm_action_component__WEBPACK_IMPORTED_MODULE_16__.ConfirmActionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_19__.GoogleMapsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientJsonpModule, _deposit_cheque_routing_module__WEBPACK_IMPORTED_MODULE_2__.DepositChequeRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng2_charts__WEBPACK_IMPORTED_MODULE_21__.NgChartsModule]
  });
})();

/***/ }),

/***/ 7964:
/*!*****************************************************************************!*\
  !*** ./src/app/deposit-cheque/postpone-cheque/postpone-cheque.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostponeChequeComponent": () => (/* binding */ PostponeChequeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _shared_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/modals/message-modal/message-modal.component */ 4280);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/deposit.service */ 8378);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/loading/loading.component */ 8424);
/* harmony import */ var _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/view-file/view-file.component */ 7761);
/* harmony import */ var _shared_directives_max_characters_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/max-characters.directive */ 4659);

















const _c0 = ["fileRef"];
function PostponeChequeComponent_div_0_div_27_div_7_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r5 == null ? null : item_r5.bank == null ? null : item_r5.bank.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (item_r5 == null ? null : item_r5.bank == null ? null : item_r5.bank.translations == null ? null : item_r5.bank.translations[0] == null ? null : item_r5.bank.translations[0].lookupName) || "---", " ");
  }
}
function PostponeChequeComponent_div_0_div_27_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PostponeChequeComponent_div_0_div_27_div_7_p_1_Template, 3, 2, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r5 == null ? null : item_r5.bank == null ? null : item_r5.bank.translations == null ? null : item_r5.bank.translations[0] == null ? null : item_r5.bank.translations[0].lookupName);
  }
}
function PostponeChequeComponent_div_0_div_27_ng_template_8_p_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r5 == null ? null : item_r5.bank == null ? null : item_r5.bank.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((item_r5 == null ? null : item_r5.bank) || "---");
  }
}
function PostponeChequeComponent_div_0_div_27_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PostponeChequeComponent_div_0_div_27_ng_template_8_p_0_Template, 3, 2, "p", 1);
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r5 == null ? null : item_r5.bank);
  }
}
function PostponeChequeComponent_div_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PostponeChequeComponent_div_0_div_27_div_7_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, PostponeChequeComponent_div_0_div_27_ng_template_8_Template, 1, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((item_r5 == null ? null : item_r5.chequeNo) || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r5 == null ? null : item_r5.customer == null ? null : item_r5.customer.customerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r5 == null ? null : item_r5.customer == null ? null : item_r5.customer.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r5 == null ? null : item_r5.bank == null ? null : item_r5.bank.translations)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 10, item_r5 == null ? null : item_r5.chequeDate, "dd MMM yyyy") || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 13, item_r5 == null ? null : item_r5.collectedAmount, ".3") || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", item_r5 == null ? null : item_r5.currency[0] == null ? null : item_r5.currency[0].lookupName, " (", (item_r5 == null ? null : item_r5.currency[0] == null ? null : item_r5.currency[0].currencyRate) || 1, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](20, 16, item_r5 == null ? null : item_r5.chequeCollectionJod, ".3") || "---");
  }
}
const _c1 = function (a1) {
  return {
    isUploaded: true,
    uploadedFile: a1
  };
};
function PostponeChequeComponent_div_0_tr_47_view_file_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "view-file", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("removeFile", function PostponeChequeComponent_div_0_tr_47_view_file_7_Template_view_file_removeFile_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const index_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.removeFileHandle($event, index_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("remove", true)("data", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c1, ctx_r17.filesToUpload[index_r16]));
  }
}
function PostponeChequeComponent_div_0_tr_47_ng_container_10_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PostponeChequeComponent_div_0_tr_47_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PostponeChequeComponent_div_0_tr_47_ng_container_10_ng_container_1_span_1_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r15 == null ? null : (tmp_0_0 = control_r15.get("attachment")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function PostponeChequeComponent_div_0_tr_47_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PostponeChequeComponent_div_0_tr_47_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (control_r15 == null ? null : (tmp_0_0 = control_r15.get("attachment")) == null ? null : tmp_0_0.invalid) && (control_r15 == null ? null : (tmp_0_0 = control_r15.get("attachment")) == null ? null : tmp_0_0.touched) || (control_r15 == null ? null : (tmp_0_0 = control_r15.get("attachment")) == null ? null : tmp_0_0.dirty));
  }
}
function PostponeChequeComponent_div_0_tr_47_ng_container_17_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PostponeChequeComponent_div_0_tr_47_ng_container_17_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PostponeChequeComponent_div_0_tr_47_ng_container_17_ng_container_1_span_1_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r15 == null ? null : (tmp_0_0 = control_r15.get("chequeDate")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function PostponeChequeComponent_div_0_tr_47_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PostponeChequeComponent_div_0_tr_47_ng_container_17_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (control_r15 == null ? null : (tmp_0_0 = control_r15.get("chequeDate")) == null ? null : tmp_0_0.invalid) && (control_r15 == null ? null : (tmp_0_0 = control_r15.get("chequeDate")) == null ? null : tmp_0_0.touched) || (control_r15 == null ? null : (tmp_0_0 = control_r15.get("chequeDate")) == null ? null : tmp_0_0.dirty));
  }
}
function PostponeChequeComponent_div_0_tr_47_ng_container_20_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PostponeChequeComponent_div_0_tr_47_ng_container_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PostponeChequeComponent_div_0_tr_47_ng_container_20_ng_container_1_span_1_Template, 2, 0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r15 == null ? null : (tmp_0_0 = control_r15.get("reasonId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function PostponeChequeComponent_div_0_tr_47_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PostponeChequeComponent_div_0_tr_47_ng_container_20_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (control_r15 == null ? null : (tmp_0_0 = control_r15.get("reasonId")) == null ? null : tmp_0_0.invalid) && (control_r15 == null ? null : (tmp_0_0 = control_r15.get("reasonId")) == null ? null : tmp_0_0.touched) || (control_r15 == null ? null : (tmp_0_0 = control_r15.get("reasonId")) == null ? null : tmp_0_0.dirty));
  }
}
const _c2 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
function PostponeChequeComponent_div_0_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 29)(1, "td")(2, "div", 30)(3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostponeChequeComponent_div_0_tr_47_Template_div_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const index_r16 = restoredCtx.index;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r39.fileRefs.toArray()[index_r16].nativeElement.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Drag & drop files");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PostponeChequeComponent_div_0_tr_47_view_file_7_Template, 1, 4, "view-file", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PostponeChequeComponent_div_0_tr_47_Template_input_change_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const index_r16 = restoredCtx.index;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r41.onFileSelected($event, index_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PostponeChequeComponent_div_0_tr_47_ng_container_10_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td")(12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostponeChequeComponent_div_0_tr_47_Template_span_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40);
      const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r20.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, PostponeChequeComponent_div_0_tr_47_ng_container_17_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "ng-select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, PostponeChequeComponent_div_0_tr_47_ng_container_20_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "textarea", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const control_r15 = ctx.$implicit;
    const index_r16 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_3_0;
    let tmp_5_0;
    let tmp_7_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", index_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.filesToUpload[index_r16] == null ? null : ctx_r3.filesToUpload[index_r16].file);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("accept", ctx_r3.acceptedFileTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r15 == null ? null : (tmp_3_0 = control_r15.get("attachment")) == null ? null : tmp_3_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r15 == null ? null : (tmp_5_0 = control_r15.get("chequeDate")) == null ? null : tmp_5_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r3.reasonList);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", control_r15 == null ? null : (tmp_7_0 = control_r15.get("reasonId")) == null ? null : tmp_7_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("appMaxCharacters", 200);
  }
}
function PostponeChequeComponent_div_0_button_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "fa-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r4.faCircleNotch)("spin", true);
  }
}
function PostponeChequeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Postponse Cheque ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "You are about to Postpone the following Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 5)(8, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 2)(11, "div", 7)(12, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Cheque No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Cheque Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Amount (JOD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, PostponeChequeComponent_div_0_div_27_Template, 21, 19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function PostponeChequeComponent_div_0_Template_form_submit_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r43.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 12)(30, "div", 13)(31, "div", 14)(32, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "New Cheque Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 16)(35, "table", 17)(36, "thead")(37, "tr")(38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Attahment *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "New Cheque Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Reason Type *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "tbody", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, PostponeChequeComponent_div_0_tr_47_Template, 23, 10, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 20)(49, "div", 21)(50, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostponeChequeComponent_div_0_Template_button_click_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r45.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, PostponeChequeComponent_div_0_button_54_Template, 2, 2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r0.details[0] == null ? null : ctx_r0.details[0].statusObj == null ? null : ctx_r0.details[0].statusObj.lookupTextColor)("background-color", ctx_r0.details[0] == null ? null : ctx_r0.details[0].statusObj == null ? null : ctx_r0.details[0].statusObj.lookupBGColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.details[0] == null ? null : ctx_r0.details[0].statusObj == null ? null : ctx_r0.details[0].statusObj.translations == null ? null : ctx_r0.details[0].statusObj.translations[0].lookupName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.formArray.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.loading);
  }
}
function PostponeChequeComponent_app_loading_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loading");
  }
}
class PostponeChequeComponent {
  constructor(fb, depositservice, modalService, _datePipe, _activeModal) {
    this.fb = fb;
    this.depositservice = depositservice;
    this.modalService = modalService;
    this._datePipe = _datePipe;
    this._activeModal = _activeModal;
    this.details = [];
    this.isLoading = false;
    this.loading = false;
    this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.faCircleNotch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faCircleNotch;
    this.reasonList = [];
    this.filesToUpload = [];
    this.acceptedFileTypes = 'image/*,application/pdf';
    this.sendtoLoadData = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.fileRefs = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.QueryList();
  }
  ngOnInit() {
    this.form = this.fb.group({
      chequeArray: this.fb.array([this.initFormGroup()])
    });
    this.getActionReasons();
    this.formArray.clear();
    this.details.forEach(x => {
      this.formArray.push(this.initFormGroup());
    });
  }
  initFormGroup() {
    return this.fb.group({
      chequeDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      note: [''],
      attachment: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      reasonId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
  }
  get formArray() {
    return this.form.get('chequeArray');
  }
  getActionReasons() {
    let params = `?actionId=${this.actionType.id}&pageSize=1000`;
    this.depositservice.getActionReasons(params).subscribe(response => {
      this.reasonList = response.data;
    });
  }
  onSubmit() {
    if (!this.f.valid) {
      this.f.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    let params;
    if (this.details.length > 1) {
      let cheques = [];
      this.details.forEach((x, index) => {
        let formArray = this.formArray.value;
        let obj = {
          depositedChequeId: x.id,
          newChequeDate: this._datePipe.transform(formArray[index].chequeDate, 'yyyy-MM-dd'),
          actionFile: formArray[index].attachment,
          reasonId: formArray[index].reasonId,
          notes: formArray[index].note
        };
        cheques.push(obj);
      });
      params = {
        actionId: this.actionType.id,
        cheques
      };
    } else {
      const formData = new FormData();
      let data = this.formArray.value[0];
      formData.append('DepositedChequeId', this.details[0].id);
      formData.append('ActionId', this.actionType.id);
      let date = this._datePipe.transform(data.chequeDate, 'yyyy-MM-dd') || '';
      formData.append('NewChequeDate', date);
      formData.append('Notes', data.note);
      formData.append('ActionFile', this.filesToUpload[0].file);
      formData.append('ReasonId', data.reasonId);
      params = formData;
    }
    let api;
    if (this.details.length > 1) api = this.depositservice.actionOnChequesMulti(params);else api = this.depositservice.actionOnCheques(params);
    api.subscribe({
      next: response => {
        if (response.isSuccess) {
          this.responseModal('success', `Your ${this.actionType?.name?.[0].lookupName} Action Successfully Performed`);
          this.sendtoLoadData.emit(true);
        }
      },
      error: err => {
        this.responseModal('error', err?.error?.errors[0].errorMessageEn);
      }
    }).add(() => this.isLoading = false);
  }
  responseModal(type, message) {
    const ref = this.modalService.open(_shared_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_0__.MessageModalComponent);
    ref.componentInstance.type = type;
    ref.componentInstance.message = message;
  }
  close() {
    //this.sendtoLoadData.emit(true);
    this._activeModal.close();
  }
  get f() {
    return this.form;
  }
  onFileSelected(event, index) {
    let files = [...event.target.files];
    files.forEach(file => {
      this.depositservice.fileToBase64(file).then(response => {
        this.uploadFile(file, index);
        this.filesToUpload[index] = response; //Adding item on Specific Index of Array because oninit array is empty and always adding item to 0 index if we slect index 2; 
      });
    });
  }

  removeFileHandle(event, index) {
    this.filesToUpload.splice(index, 1);
    this.formArray.at(index).get('attachment')?.setValue('');
    this.fileRefs.toArray()[index].nativeElement.value = null;
  }
  uploadFile(file, index) {
    const formData = new FormData();
    formData.append('Folder', 'ChequeImages');
    formData.append('File', file);
    this.depositservice.uploadFile(formData).subscribe(response => {
      if (response.isSuccess) {
        this.formArray.at(index).get('attachment')?.setValue(response['data']);
      }
    });
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
PostponeChequeComponent.ɵfac = function PostponeChequeComponent_Factory(t) {
  return new (t || PostponeChequeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_1__.DepositService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbActiveModal));
};
PostponeChequeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PostponeChequeComponent,
  selectors: [["app-postpone-cheque"]],
  viewQuery: function PostponeChequeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.fileRefs = _t);
    }
  },
  inputs: {
    actionType: "actionType",
    details: "details"
  },
  outputs: {
    sendtoLoadData: "sendtoLoadData"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe])],
  decls: 2,
  vars: 2,
  consts: [["class", "cr-card", 4, "ngIf"], [4, "ngIf"], [1, "cr-card"], [1, "top-heading"], [1, "heading-break"], [1, "text-end"], [1, "collected-btn"], [1, "card-head", "grid-container"], [1, "title"], [1, "card-content"], ["class", "grid-container mb-3", 4, "ngFor", "ngForOf"], [3, "formGroup", "submit"], [1, "row", "mt-2"], [1, "col-12"], [1, "top-heading", "bb-none"], [1, "heading"], [1, "col-12", "simple-table"], [1, "table"], ["formArrayName", "chequeArray"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save"], ["type", "button", "class", "btn btn-save btn-load", "disabled", "", 4, "ngIf"], [1, "grid-container", "mb-3"], [4, "ngIf", "ngIfElse"], ["banks", ""], ["height", "25", "width", "25", 3, "src"], [3, "formGroupName"], [1, "d-flex", "flex-column"], [1, "file-uploader-sm", "mb-2", "d-flex", "gap-2", "justify-content-center", "align-items-center", 3, "click"], ["height", "30", "src", "assets/images/uploader.png"], [1, "font-14", "mb-0"], [3, "remove", "data", "removeFile", 4, "ngIf"], ["type", "file", "hidden", "", 3, "change"], ["fileRef", ""], [1, "input-group"], ["type", "text", "formControlName", "chequeDate", "placeholder", "Select Date", "bsDatepicker", "", 1, "form-control", "custom-input-field", 3, "bsConfig"], ["drp", "bsDatepicker"], [1, "input-group-text", "cursor-pointer", 3, "click"], ["src", "/assets/images/calendar.png", "alt", "", 1, "calender"], ["placeholder", "Reason Type", "bindLabel", "chequeActionReason", "bindValue", "actionReasonID", "formControlName", "reasonId", 3, "items"], ["formControlName", "note", 1, "form-control", "custom-input-field", 3, "appMaxCharacters"], [3, "remove", "data", "removeFile"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["type", "button", "disabled", "", 1, "btn", "btn-save", "btn-load"], [3, "icon", "spin"]],
  template: function PostponeChequeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PostponeChequeComponent_div_0_Template, 55, 9, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PostponeChequeComponent_app_loading_1_Template, 1, 0, "app-loading", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerInputDirective, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent, _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_3__.ViewFileComponent, _shared_directives_max_characters_directive__WEBPACK_IMPORTED_MODULE_4__.MaxCharactersDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [".grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.7fr 1.5fr repeat(5, 1fr);\n  gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVwb3NpdC1jaGVxdWUvcG9zdHBvbmUtY2hlcXVlL3Bvc3Rwb25lLWNoZXF1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpREFBQTtFQUNBLFNBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuN2ZyIDEuNWZyIHJlcGVhdCg1LCAxZnIpO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4840:
/*!***************************************************************************!*\
  !*** ./src/app/deposit-cheque/replace-cheque/replace-cheque.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaceChequeComponent": () => (/* binding */ ReplaceChequeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _shared_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/modals/message-modal/message-modal.component */ 4280);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var src_app_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/deposit.service */ 8378);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9200);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-select/ng-select */ 3054);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ 1863);
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/loading/loading.component */ 8424);
/* harmony import */ var _shared_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/directives/numbers-only.directive */ 3117);
/* harmony import */ var _shared_directives_alphabet_only_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/directives/alphabet-only.directive */ 2439);
/* harmony import */ var _shared_directives_trim_on_blur_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/directives/trim-on-blur-input.directive */ 8301);
/* harmony import */ var _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/view-file/view-file.component */ 7761);
/* harmony import */ var _shared_directives_max_characters_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/directives/max-characters.directive */ 4659);





















const _c0 = ["fileRef"];
function ReplaceChequeComponent_div_0_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 27)(1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("color", ctx_r3.details[0] == null ? null : ctx_r3.details[0].statusObj == null ? null : ctx_r3.details[0].statusObj.lookupTextColor)("background-color", ctx_r3.details[0] == null ? null : ctx_r3.details[0].statusObj == null ? null : ctx_r3.details[0].statusObj.lookupBGColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r3.details[0] == null ? null : ctx_r3.details[0].statusObj == null ? null : ctx_r3.details[0].statusObj.translations == null ? null : ctx_r3.details[0].statusObj.translations[0].lookupName, " ");
  }
}
function ReplaceChequeComponent_div_0_div_25_div_7_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", item_r8 == null ? null : item_r8.bank == null ? null : item_r8.bank.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (item_r8 == null ? null : item_r8.bank == null ? null : item_r8.bank.translations == null ? null : item_r8.bank.translations[0] == null ? null : item_r8.bank.translations[0].lookupName) || "---", " ");
  }
}
function ReplaceChequeComponent_div_0_div_25_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReplaceChequeComponent_div_0_div_25_div_7_p_1_Template, 3, 2, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r8 == null ? null : item_r8.bank == null ? null : item_r8.bank.translations == null ? null : item_r8.bank.translations[0] == null ? null : item_r8.bank.translations[0].lookupName);
  }
}
function ReplaceChequeComponent_div_0_div_25_ng_template_8_p_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", item_r8 == null ? null : item_r8.bank == null ? null : item_r8.bank.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((item_r8 == null ? null : item_r8.bank) || "---");
  }
}
function ReplaceChequeComponent_div_0_div_25_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, ReplaceChequeComponent_div_0_div_25_ng_template_8_p_0_Template, 3, 2, "p", 1);
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r8 == null ? null : item_r8.bank);
  }
}
function ReplaceChequeComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ReplaceChequeComponent_div_0_div_25_div_7_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ReplaceChequeComponent_div_0_div_25_ng_template_8_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((item_r8 == null ? null : item_r8.chequeNo) || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", item_r8 == null ? null : item_r8.customer == null ? null : item_r8.customer.customerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r8 == null ? null : item_r8.customer == null ? null : item_r8.customer.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r8 == null ? null : item_r8.bank == null ? null : item_r8.bank.translations)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 10, item_r8 == null ? null : item_r8.chequeDate, "dd MMM yyyy") || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](15, 13, item_r8 == null ? null : item_r8.collectedAmount, ".3") || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", item_r8 == null ? null : item_r8.currency[0] == null ? null : item_r8.currency[0].lookupName, " (", (item_r8 == null ? null : item_r8.currency[0] == null ? null : item_r8.currency[0].currencyRate) || 1, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](20, 16, item_r8 == null ? null : item_r8.chequeCollectionJod, ".3") || "---");
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_5_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReplaceChequeComponent_div_0_tr_55_ng_container_5_ng_container_1_span_1_Template, 2, 0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r18 == null ? null : (tmp_0_0 = control_r18.get("ChequeNo")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReplaceChequeComponent_div_0_tr_55_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (control_r18 == null ? null : (tmp_0_0 = control_r18.get("ChequeNo")) == null ? null : tmp_0_0.invalid) && (control_r18 == null ? null : (tmp_0_0 = control_r18.get("ChequeNo")) == null ? null : tmp_0_0.touched) || (control_r18 == null ? null : (tmp_0_0 = control_r18.get("ChequeNo")) == null ? null : tmp_0_0.dirty));
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_12_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReplaceChequeComponent_div_0_tr_55_ng_container_12_ng_container_1_span_1_Template, 2, 0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r18 == null ? null : (tmp_0_0 = control_r18.get("ChequeDate")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReplaceChequeComponent_div_0_tr_55_ng_container_12_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (control_r18 == null ? null : (tmp_0_0 = control_r18.get("ChequeDate")) == null ? null : tmp_0_0.invalid) && (control_r18 == null ? null : (tmp_0_0 = control_r18.get("ChequeDate")) == null ? null : tmp_0_0.touched) || (control_r18 == null ? null : (tmp_0_0 = control_r18.get("ChequeDate")) == null ? null : tmp_0_0.dirty));
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_15_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReplaceChequeComponent_div_0_tr_55_ng_container_15_ng_container_1_span_1_Template, 2, 0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r18 == null ? null : (tmp_0_0 = control_r18.get("BankId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReplaceChequeComponent_div_0_tr_55_ng_container_15_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (control_r18 == null ? null : (tmp_0_0 = control_r18.get("BankId")) == null ? null : tmp_0_0.invalid) && (control_r18 == null ? null : (tmp_0_0 = control_r18.get("BankId")) == null ? null : tmp_0_0.touched) || (control_r18 == null ? null : (tmp_0_0 = control_r18.get("BankId")) == null ? null : tmp_0_0.dirty));
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_18_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReplaceChequeComponent_div_0_tr_55_ng_container_18_ng_container_1_span_1_Template, 2, 0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r18 == null ? null : (tmp_0_0 = control_r18.get("ReasonId")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReplaceChequeComponent_div_0_tr_55_ng_container_18_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (control_r18 == null ? null : (tmp_0_0 = control_r18.get("ReasonId")) == null ? null : tmp_0_0.invalid) && (control_r18 == null ? null : (tmp_0_0 = control_r18.get("ReasonId")) == null ? null : tmp_0_0.touched) || (control_r18 == null ? null : (tmp_0_0 = control_r18.get("ReasonId")) == null ? null : tmp_0_0.dirty));
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_21_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReplaceChequeComponent_div_0_tr_55_ng_container_21_ng_container_1_span_1_Template, 2, 0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r18 == null ? null : (tmp_0_0 = control_r18.get("ChequeCustomer")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReplaceChequeComponent_div_0_tr_55_ng_container_21_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (control_r18 == null ? null : (tmp_0_0 = control_r18.get("ChequeCustomer")) == null ? null : tmp_0_0.invalid) && (control_r18 == null ? null : (tmp_0_0 = control_r18.get("ChequeCustomer")) == null ? null : tmp_0_0.touched) || (control_r18 == null ? null : (tmp_0_0 = control_r18.get("ChequeCustomer")) == null ? null : tmp_0_0.dirty));
  }
}
const _c1 = function (a1) {
  return {
    isUploaded: true,
    uploadedFile: a1
  };
};
function ReplaceChequeComponent_div_0_tr_55_view_file_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "view-file", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("removeFile", function ReplaceChequeComponent_div_0_tr_55_view_file_33_Template_view_file_removeFile_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const index_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r49.removeFileHandle($event, index_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("remove", true)("data", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c1, ctx_r26.filesToUpload[index_r19]));
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_36_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Input is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_36_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReplaceChequeComponent_div_0_tr_55_ng_container_36_ng_container_1_span_1_Template, 2, 0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r18 == null ? null : (tmp_0_0 = control_r18.get("Attachment")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
  }
}
function ReplaceChequeComponent_div_0_tr_55_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReplaceChequeComponent_div_0_tr_55_ng_container_36_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const control_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (control_r18 == null ? null : (tmp_0_0 = control_r18.get("Attachment")) == null ? null : tmp_0_0.invalid) && (control_r18 == null ? null : (tmp_0_0 = control_r18.get("Attachment")) == null ? null : tmp_0_0.touched) || (control_r18 == null ? null : (tmp_0_0 = control_r18.get("Attachment")) == null ? null : tmp_0_0.dirty));
  }
}
const _c2 = function () {
  return {
    containerClass: "theme-red",
    isAnimated: true,
    showClearButton: true
  };
};
function ReplaceChequeComponent_div_0_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 33)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ReplaceChequeComponent_div_0_tr_55_ng_container_5_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td")(7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReplaceChequeComponent_div_0_tr_55_Template_span_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r58);
      const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r21.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, ReplaceChequeComponent_div_0_tr_55_ng_container_12_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ng-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, ReplaceChequeComponent_div_0_tr_55_ng_container_15_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "ng-select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, ReplaceChequeComponent_div_0_tr_55_ng_container_18_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ReplaceChequeComponent_div_0_tr_55_ng_container_21_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "td")(23, "div", 44)(24, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReplaceChequeComponent_div_0_tr_55_Template_input_click_24_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r58);
      const index_r19 = restoredCtx.index;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r59.sameCustomer(index_r19, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, " Same Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "td")(28, "div", 47)(29, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReplaceChequeComponent_div_0_tr_55_Template_div_click_29_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r58);
      const index_r19 = restoredCtx.index;
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r60.fileRefs.toArray()[index_r19].nativeElement.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Drag & drop files");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, ReplaceChequeComponent_div_0_tr_55_view_file_33_Template, 1, 4, "view-file", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "input", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ReplaceChequeComponent_div_0_tr_55_Template_input_change_34_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r58);
      const index_r19 = restoredCtx.index;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r61.onFileSelected($event, index_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, ReplaceChequeComponent_div_0_tr_55_ng_container_36_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "textarea", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const control_r18 = ctx.$implicit;
    const index_r19 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_1_0;
    let tmp_3_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_11_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", index_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r18 == null ? null : (tmp_1_0 = control_r18.get("ChequeNo")) == null ? null : tmp_1_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](13, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r18 == null ? null : (tmp_3_0 = control_r18.get("ChequeDate")) == null ? null : tmp_3_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r5.bankList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r18 == null ? null : (tmp_5_0 = control_r18.get("BankId")) == null ? null : tmp_5_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r5.reasonList);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r18 == null ? null : (tmp_7_0 = control_r18.get("ReasonId")) == null ? null : tmp_7_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r18 == null ? null : (tmp_8_0 = control_r18.get("ChequeCustomer")) == null ? null : tmp_8_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.filesToUpload[index_r19] == null ? null : ctx_r5.filesToUpload[index_r19].file);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("accept", ctx_r5.acceptedFileTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", control_r18 == null ? null : (tmp_11_0 = control_r18.get("Attachment")) == null ? null : tmp_11_0.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appMaxCharacters", 200);
  }
}
function ReplaceChequeComponent_div_0_button_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "fa-icon", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("icon", ctx_r6.faCircleNotch)("spin", true);
  }
}
function ReplaceChequeComponent_div_0_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r7.messageError, " ");
  }
}
function ReplaceChequeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Replace Cheque ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "You are about to Replace the following Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, ReplaceChequeComponent_div_0_span_7_Template, 3, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 3)(9, "div", 7)(10, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Cheque No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Cheque Bank Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " Amount (JOD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, ReplaceChequeComponent_div_0_div_25_Template, 21, 19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function ReplaceChequeComponent_div_0_Template_form_ngSubmit_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r62.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 12)(28, "div", 13)(29, "div", 14)(30, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, " New Cheque ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 16)(33, "table", 17)(34, "thead")(35, "tr")(36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Amount to Pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Cheque No *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Date *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Bank *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Reason Id *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Cheque Drawer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Same Customer *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "Attachment *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "tbody", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, ReplaceChequeComponent_div_0_tr_55_Template, 39, 14, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 21)(57, "div", 22)(58, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ReplaceChequeComponent_div_0_Template_button_click_58_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r63);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r64.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, " Confirm ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, ReplaceChequeComponent_div_0_button_62_Template, 2, 2, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](63, ReplaceChequeComponent_div_0_div_63_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.details);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.formArray.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.messageError);
  }
}
function ReplaceChequeComponent_app_loading_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loading");
  }
}
function ReplaceChequeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 61)(1, "div", 62)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.message, "");
  }
}
class ReplaceChequeComponent {
  constructor(fb, toastrService, depositservice, modalService, _datePipe, _activeModal) {
    this.fb = fb;
    this.toastrService = toastrService;
    this.depositservice = depositservice;
    this.modalService = modalService;
    this._datePipe = _datePipe;
    this._activeModal = _activeModal;
    this.details = [];
    this.isLoading = false;
    this.faXmark = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faXmark;
    this.faCloudArrowUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faCloudArrowUp;
    this.faCircleNotch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faCircleNotch;
    this.loading = false;
    this.bankList = [];
    this.message = '';
    this.messageError = '';
    this.isStatus = false;
    this.submitted = false;
    this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.filesToUpload = [];
    this.reasonList = [];
    this.acceptedFileTypes = 'image/*,application/pdf';
    this.sendtoLoadData = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.fileRefs = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.QueryList();
  }
  ngOnInit() {
    console.log(this.details);
    this.form = this.fb.group({
      chequeArray: this.fb.array([this.initFormGroup()])
    });
    this.depositservice.getBankLookups(11).subscribe(response => {
      this.makeBankList(response.data || []);
    });
    this.getActionReasons();
    this.formArray.clear();
    this.details.forEach((x, index) => {
      this.formArray.push(this.initFormGroup());
      this.formArray.at(index).get('AmountToPay')?.setValue(x?.chequeCollectionJod);
      this.formArray.at(index).get('ChequeCustomer')?.setValue(x?.customer?.customerName || null);
      this.formArray.at(index).get('Customer')?.setValue(true);
    });
  }
  get formArray() {
    return this.form.get('chequeArray');
  }
  initFormGroup() {
    return this.fb.group({
      AmountToPay: [{
        value: '',
        disabled: true
      }],
      ChequeNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      ChequeDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      BankId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      ChequeCustomer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      ReasonId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      Customer: false,
      Attachment: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      Note: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(200)]]
    });
  }
  getActionReasons() {
    let params = `?actionId=${this.actionType.id}&pageSize=1000`;
    this.depositservice.getActionReasons(params).subscribe(response => {
      this.reasonList = response.data;
    });
  }
  sameCustomer(index, event) {
    if (event.target.checked) this.formArray.at(index).get('ChequeCustomer')?.setValue(this.details[0]?.customer?.customerName);else this.formArray.at(index).get('ChequeCustomer')?.setValue(null);
    //if (this.form.get('Customer')?.value) {
    //  this.form.get('ChequeCustomer')?.clearValidators(); // Remove the required validator
    //  this.form.get('ChequeCustomer')?.setValue('');
    //} else {
    //  this.form.get('ChequeCustomer')?.setValidators(Validators.required); // Add the required validator
    //}
    //this.form.get('ChequeCustomer')?.updateValueAndValidity(); // Update the control's validity status
  }

  makeBankList(item) {
    let array = [];
    if (item.length > 0) {
      for (let index = 0; index < item.length; index++) {
        const element = item[index];
        let obj = {
          id: element.id,
          bankName: element?.name?.[0].lookupName
        };
        array.push(obj);
      }
    }
    this.bankList = array;
  }
  onFileSelected(event, index) {
    let files = [...event.target.files];
    files.forEach(file => {
      this.depositservice.fileToBase64(file).then(response => {
        this.uploadFile(file, index);
        this.filesToUpload[index] = response; //Adding item on Specific Index of Array because oninit array is empty and always adding item to 0 index if we slect index 2; 
      });
    });
  }

  uploadFile(file, index) {
    const formData = new FormData();
    formData.append('Folder', 'ChequeImages');
    formData.append('File', file);
    this.depositservice.uploadFile(formData).subscribe(response => {
      if (response.isSuccess) {
        this.formArray.at(index).get('Attachment')?.setValue(response.data);
      }
    });
  }
  removeFileHandle(event, index) {
    this.filesToUpload.splice(index, 1);
    this.formArray.at(index).get('Attachment')?.setValue('');
    this.fileRefs.toArray()[index].nativeElement.value = null;
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  bankSelected(item) {
    this.form.get('BankId')?.setValue(item);
  }
  remove(item) {
    if (item == 'ChequeNo') this.form.get('ChequeNo')?.setValue(null);else if (item == 'ChequeCustomer') {
      this.form.get('ChequeCustomer')?.setValue('');
      this.form.get('Customer')?.setValue(false);
    }
  }
  removeCollectionDateFilter() {
    this.form.get('ChequeDate')?.patchValue('');
  }
  onSubmit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.form.valid) {
      let params;
      this.submitted = true;
      this.isLoading = true;
      if (this.details.length > 1) {
        let cheques = [];
        this.details.forEach((x, index) => {
          let formArray = this.formArray.value;
          let obj = {
            depositedChequeId: x.id,
            chequeNo: '' + formArray[index].ChequeNo,
            chequeDate: this._datePipe.transform(formArray[index].ChequeDate, 'yyyy-MM-dd'),
            bankId: formArray[index].BankId,
            chequeCustomer: formArray[index].ChequeCustomer,
            actionFile: formArray[index].Attachment,
            reasonId: formArray[index].ReasonId,
            notes: formArray[index].Note
          };
          cheques.push(obj);
        });
        params = {
          actionId: this.actionType.id,
          cheques
        };
      } else {
        const formData = new FormData();
        let data = this.formArray.value[0];
        let formattedFromDate = this._datePipe.transform(data.ChequeDate, 'yyyy-MM-dd') || '';
        formData.append('DepositedChequeId', this.details[0].id);
        formData.append('ActionId', this.actionType.id);
        formData.append('ChequeNo', data.ChequeNo);
        formData.append('ChequeDate', formattedFromDate);
        formData.append('BankId', data.BankId);
        formData.append('ChequeCustomer', data.ChequeCustomer);
        formData.append('ActionFile', this.filesToUpload[0].file);
        formData.append('ReasonId', data.ReasonId);
        formData.append('Notes', data.Note);
        params = formData;
      }
      let api;
      if (this.details.length > 1) api = this.depositservice.actionOnChequesMulti(params);else api = this.depositservice.actionOnCheques(params);
      api.subscribe({
        next: response => {
          if (response.isSuccess) {
            this.responseModal('success', `Your ${this.actionType?.name?.[0].lookupName} Action Successfully Performed`);
            this.sendtoLoadData.emit(true);
          }
        },
        error: err => {
          this.responseModal('error', err?.error?.errors[0].errorMessageEn);
        }
      }).add(() => this.isLoading = false);
    }
  }
  responseModal(type, message) {
    const ref = this.modalService.open(_shared_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_0__.MessageModalComponent);
    ref.componentInstance.type = type;
    ref.componentInstance.message = message;
  }
  get formControls() {
    return this.form.controls;
  }
  close() {
    this._activeModal.close();
  }
  get formValid() {
    return this.form.controls;
  }
}
ReplaceChequeComponent.ɵfac = function ReplaceChequeComponent_Factory(t) {
  return new (t || ReplaceChequeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_deposit_service__WEBPACK_IMPORTED_MODULE_1__.DepositService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbActiveModal));
};
ReplaceChequeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ReplaceChequeComponent,
  selectors: [["app-replace-cheque"]],
  viewQuery: function ReplaceChequeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.fileRefs = _t);
    }
  },
  inputs: {
    actionType: "actionType",
    details: "details"
  },
  outputs: {
    sendtoLoadData: "sendtoLoadData"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe])],
  decls: 3,
  vars: 3,
  consts: [["class", "cr-card", 4, "ngIf"], [4, "ngIf"], ["class", "modal-body", 4, "ngIf"], [1, "cr-card"], [1, "top-heading"], [1, "heading-break"], ["class", "text-end", 4, "ngIf"], [1, "card-head", "grid-container"], [1, "title"], [1, "card-content"], ["class", "grid-container mb-3", 4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], [1, "row", "mt-2"], [1, "col-12"], [1, "top-heading", "bb-none"], [1, "heading"], [1, "col-12", "simple-table"], [1, "table"], ["width", "10%"], ["formArrayName", "chequeArray"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "btns-group"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], ["type", "submit", 1, "btn", "btn-save"], ["type", "button", "class", "btn btn-save btn-load", "disabled", "", 4, "ngIf"], ["class", "alert alert-danger text-center mt-3 mb-3 my-2", "role", "alert", 4, "ngIf"], [1, "text-end"], [1, "collected-btn"], [1, "grid-container", "mb-3"], [4, "ngIf", "ngIfElse"], ["banks", ""], ["height", "25", "width", "25", 3, "src"], [3, "formGroupName"], ["formControlName", "AmountToPay", "type", "text", 1, "form-control", "custom-input-field"], ["formControlName", "ChequeNo", "numbersOnly", "", "type", "number", "trimOnBlurInput", "", "placeholder", "Type name", "autocomplete", "off", 1, "form-control", "custom-input-field"], [1, "input-group"], ["type", "text", "formControlName", "ChequeDate", "placeholder", "Select Date", "bsDatepicker", "", 1, "form-control", "custom-input-field", 3, "bsConfig"], ["drp", "bsDatepicker"], [1, "input-group-text", "cursor-pointer", 3, "click"], ["src", "/assets/images/calendar.png", "alt", "", 1, "calender"], ["placeholder", "Bank", "bindLabel", "bankName", "bindValue", "id", "formControlName", "BankId", 3, "items"], ["placeholder", "Reason Type", "bindLabel", "chequeActionReason", "bindValue", "actionReasonID", "formControlName", "ReasonId", 3, "items"], ["formControlName", "ChequeCustomer", "alphabetOnly", "", "type", "text", "placeholder", "Type name", "autocomplete", "off", "trimOnBlurInput", "", 1, "form-control", "custom-input-field"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "formControlName", "Customer", 1, "form-check-input", 3, "click"], ["for", "indoor", 1, "form-check-label"], [1, "d-flex", "flex-column"], [1, "file-uploader-sm", "mb-2", "d-flex", "gap-2", "justify-content-center", "align-items-center", 3, "click"], ["height", "30", "src", "assets/images/uploader.png"], [1, "font-14", "mb-0"], [3, "remove", "data", "removeFile", 4, "ngIf"], ["type", "file", "hidden", "", 3, "change"], ["fileRef", ""], ["formControlName", "Note", 1, "form-control", "custom-input-field", 3, "appMaxCharacters"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [3, "remove", "data", "removeFile"], ["type", "button", "disabled", "", 1, "btn", "btn-save", "btn-load"], [3, "icon", "spin"], ["role", "alert", 1, "alert", "alert-danger", "text-center", "mt-3", "mb-3", "my-2"], [1, "modal-body"], [1, "message"], [1, "fa-regular", "fa-circle-check"]],
  template: function ReplaceChequeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, ReplaceChequeComponent_div_0_Template, 64, 6, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ReplaceChequeComponent_app_loading_1_Template, 1, 0, "app-loading", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, ReplaceChequeComponent_div_2_Template, 5, 1, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.message);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormArrayName, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FaIconComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__.NgSelectComponent, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__.BsDatepickerDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__.BsDatepickerInputDirective, _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_2__.LoadingComponent, _shared_directives_numbers_only_directive__WEBPACK_IMPORTED_MODULE_3__.NumberOnlyDirective, _shared_directives_alphabet_only_directive__WEBPACK_IMPORTED_MODULE_4__.AlphabetOnlyDirective, _shared_directives_trim_on_blur_input_directive__WEBPACK_IMPORTED_MODULE_5__.TrimOnBlurInputDirective, _shared_components_view_file_view_file_component__WEBPACK_IMPORTED_MODULE_6__.ViewFileComponent, _shared_directives_max_characters_directive__WEBPACK_IMPORTED_MODULE_7__.MaxCharactersDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
  styles: [".grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.7fr 1.5fr repeat(5, 1fr);\n  gap: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVwb3NpdC1jaGVxdWUvcmVwbGFjZS1jaGVxdWUvcmVwbGFjZS1jaGVxdWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaURBQUE7RUFDQSxTQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjdmciAxLjVmciByZXBlYXQoNSwgMWZyKTtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4659:
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/max-characters.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxCharactersDirective": () => (/* binding */ MaxCharactersDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class MaxCharactersDirective {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
    this.maxLength = 0;
  }
  onInput(event) {
    const input = event.target;
    if (input.value.length > this.maxLength) {
      input.value = input.value.slice(0, this.maxLength);
      event.preventDefault();
    }
  }
}
MaxCharactersDirective.ɵfac = function MaxCharactersDirective_Factory(t) {
  return new (t || MaxCharactersDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
MaxCharactersDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MaxCharactersDirective,
  selectors: [["", "appMaxCharacters", ""]],
  hostBindings: function MaxCharactersDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MaxCharactersDirective_input_HostBindingHandler($event) {
        return ctx.onInput($event);
      });
    }
  },
  inputs: {
    maxLength: ["appMaxCharacters", "maxLength"]
  }
});

/***/ }),

/***/ 5706:
/*!**************************************!*\
  !*** ./src/app/shared/enums/enum.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChequeActionEnum": () => (/* binding */ ChequeActionEnum),
/* harmony export */   "ChequeStatusEnum": () => (/* binding */ ChequeStatusEnum),
/* harmony export */   "UserRoleEnum": () => (/* binding */ UserRoleEnum)
/* harmony export */ });
var ChequeActionEnum;
(function (ChequeActionEnum) {
  ChequeActionEnum[ChequeActionEnum["Bounce"] = 29001] = "Bounce";
  ChequeActionEnum[ChequeActionEnum["Withdraw"] = 29002] = "Withdraw";
  ChequeActionEnum[ChequeActionEnum["Replace"] = 29003] = "Replace";
  ChequeActionEnum[ChequeActionEnum["Redeposit"] = 29004] = "Redeposit";
  ChequeActionEnum[ChequeActionEnum["Collect"] = 29006] = "Collect";
  ChequeActionEnum[ChequeActionEnum["Postpone"] = 29011] = "Postpone";
  ChequeActionEnum[ChequeActionEnum["PendingReturn"] = 29013] = "PendingReturn";
  ChequeActionEnum[ChequeActionEnum["PendingReplace"] = 29014] = "PendingReplace";
  ChequeActionEnum[ChequeActionEnum["PendingPostpone"] = 29015] = "PendingPostpone";
  ChequeActionEnum[ChequeActionEnum["PendingRedeposited"] = 29016] = "PendingRedeposited";
  ChequeActionEnum[ChequeActionEnum["PaidInCash"] = 29017] = "PaidInCash";
})(ChequeActionEnum || (ChequeActionEnum = {}));
var ChequeStatusEnum;
(function (ChequeStatusEnum) {
  ChequeStatusEnum[ChequeStatusEnum["Deposited"] = 28001] = "Deposited";
  ChequeStatusEnum[ChequeStatusEnum["ReDeposited"] = 28002] = "ReDeposited";
  ChequeStatusEnum[ChequeStatusEnum["Withdrawn"] = 28003] = "Withdrawn";
  ChequeStatusEnum[ChequeStatusEnum["Bounced"] = 28004] = "Bounced";
  ChequeStatusEnum[ChequeStatusEnum["Replaced"] = 28005] = "Replaced";
  ChequeStatusEnum[ChequeStatusEnum["Collected"] = 28006] = "Collected";
  ChequeStatusEnum[ChequeStatusEnum["Postponed"] = 28007] = "Postponed";
  ChequeStatusEnum[ChequeStatusEnum["PendingWithdraw"] = 28008] = "PendingWithdraw";
  ChequeStatusEnum[ChequeStatusEnum["PendingReplace"] = 28009] = "PendingReplace";
  ChequeStatusEnum[ChequeStatusEnum["PendingPostpone"] = 28010] = "PendingPostpone";
  ChequeStatusEnum[ChequeStatusEnum["PendingReDeposit"] = 28011] = "PendingReDeposit";
  ChequeStatusEnum[ChequeStatusEnum["PaidInCash"] = 28014] = "PaidInCash";
})(ChequeStatusEnum || (ChequeStatusEnum = {}));
var UserRoleEnum;
(function (UserRoleEnum) {
  UserRoleEnum[UserRoleEnum["TreasuryTeam"] = 46] = "TreasuryTeam";
  UserRoleEnum[UserRoleEnum["CreditAndCollection"] = 47] = "CreditAndCollection";
})(UserRoleEnum || (UserRoleEnum = {}));

/***/ }),

/***/ 8378:
/*!****************************************************!*\
  !*** ./src/app/shared/services/deposit.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositService": () => (/* binding */ DepositService)
/* harmony export */ });
/* harmony import */ var C_Users_Momen_alShouha_Desktop_Projects_DX_FE_Treasury_DX_FE_Treasury_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ 287);
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-join */ 5487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ 8915);







class DepositService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.fileToBase64 = /*#__PURE__*/function () {
      var _ref = (0,C_Users_Momen_alShouha_Desktop_Projects_DX_FE_Treasury_DX_FE_Treasury_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            if (file.type !== 'application/pdf') {
              resolve({
                fileType: file.type,
                base64: reader.result,
                file,
                fileName: file.name
              });
            } else {
              resolve({
                fileType: file.type,
                file,
                fileName: file.name
              });
            }
          };
          reader.onerror = e => reject(e);
        });
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
  getDepositCheques(filter) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.get((0,_utility__WEBPACK_IMPORTED_MODULE_2__.toFilteringUrl)((0,url_join__WEBPACK_IMPORTED_MODULE_4__["default"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2, '/Cheques/GetDepositedCheques'), filter), {
      headers
    });
  }
  getPermissions(id) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2 + '/User/GetUserPermissions?userId=' + this.authService.userId + '&portalId=' + id, {
      headers
    });
  }
  getLookups(id, params) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    let query = '';
    if (params) query = `/Lookups/GetLookups?${params}`;else query = `/Lookups/GetLookups?lookupTypeId=${id}`;
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2 + query, {
      headers
    });
  }
  getActionReasons(params) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + `/ChequesActionsManagement/GetReasons${params}`, {
      headers
    });
  }
  getDueCheques(params) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2 + `/Cheques/GetDueCheques${params}`, {
      headers
    });
  }
  getSageBanksAccounts(params) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + `/Mainfund/GetSageBanksAccounts${params}`, {
      headers
    });
  }
  getBankLookups(id) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2 + '/Lookups/GetLookups?lookupTypeId=' + id + "&PageNo=0&PageSize=1000", {
      headers
    });
  }
  getChequesActionsLog(id) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2 + '/Cheques/GetChequesActionsLog?chequeId=' + id, {
      headers
    });
  }
  getChequeDetails(id) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2 + '/Cheques/GetChequeDetails?ChequeId=' + id, {
      headers
    });
  }
  markDelivered(data) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.post((0,url_join__WEBPACK_IMPORTED_MODULE_4__["default"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2, '/Cheques/MarkDelivered'), data, {
      headers
    });
  }
  updateCheque(data) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.post((0,url_join__WEBPACK_IMPORTED_MODULE_4__["default"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2, '/Cheques/UpdateCheque'), data, {
      headers
    });
  }
  confirmChequeAction(data) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.post((0,url_join__WEBPACK_IMPORTED_MODULE_4__["default"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2, '/Cheques/ConfirmChequeAction'), data, {
      headers
    });
  }
  rejectChequeAction(data) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.post((0,url_join__WEBPACK_IMPORTED_MODULE_4__["default"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2, '/Cheques/RejectChequeAction'), data, {
      headers
    });
  }
  actionOnCheques(data) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.post((0,url_join__WEBPACK_IMPORTED_MODULE_4__["default"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2, '/Cheques/ActionsOnCheques'), data, {
      headers
    });
  }
  actionOnChequesMulti(data) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.post((0,url_join__WEBPACK_IMPORTED_MODULE_4__["default"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2, '/Cheques/ActionsOnChequesMulti'), data, {
      headers
    });
  }
  uploadFile(data) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.post((0,url_join__WEBPACK_IMPORTED_MODULE_4__["default"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2, '/Upload/UploadFile'), data, {
      headers
    });
  }
  uploadChequeImage(data) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.post((0,url_join__WEBPACK_IMPORTED_MODULE_4__["default"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2, '/Cheques/UploadChequeImage'), data, {
      headers
    });
  }
  getChequeActionDetails(ChequeId, ActionId) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.get((0,url_join__WEBPACK_IMPORTED_MODULE_4__["default"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2, '/Cheques/GetChequeActionDetails?ChequeId=' + ChequeId + "&ActionId=" + ActionId), {
      headers
    });
  }
  GetDashboardCard() {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.get((0,url_join__WEBPACK_IMPORTED_MODULE_4__["default"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2, '/Dashboard/GetDashboardCards'), {
      headers
    });
  }
  GetChequesAgingList(filetr) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.get((0,_utility__WEBPACK_IMPORTED_MODULE_2__.toFilteringUrl)((0,url_join__WEBPACK_IMPORTED_MODULE_4__["default"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2, '/Dashboard/GetChequesAgingList'), filetr), {
      headers
    });
  }
  GetChequesAgingGraph(filetr) {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem("token")
    };
    return this.http.get((0,_utility__WEBPACK_IMPORTED_MODULE_2__.toFilteringUrl)((0,url_join__WEBPACK_IMPORTED_MODULE_4__["default"])(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl2, '/Dashboard/GetChequesAgingTotals'), filetr), {
      headers
    });
  }
}
DepositService.ɵfac = function DepositService_Factory(t) {
  return new (t || DepositService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};
DepositService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: DepositService,
  factory: DepositService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8700:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/permission.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionService": () => (/* binding */ PermissionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _deposit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deposit.service */ 8378);


class PermissionService {
  constructor(apiService) {
    this.apiService = apiService;
    this.permissions = [/* Your permissions data */];
    this.apiService.getPermissions(17004).subscribe(res => {
      if (res.isSuccess) {
        this.permissions = res.data;
      }
    });
  }
  checkPermission(catId, subCatId, permissionItemId) {
    if (this.permissions) {
      const cat = this.permissions.find(cat => cat.permissionCatId === catId);
      if (!cat) return false;
      const subCat = cat.permissionSubCategories.find(sub => sub.permissionSubCatId === subCatId);
      if (!subCat) return false;
      const item = subCat.permissionItems.find(item => item.permissionItemId === permissionItemId);
      if (!item) return false;
      return item.selected;
    } else {
      return false;
    }
  }
}
PermissionService.ɵfac = function PermissionService_Factory(t) {
  return new (t || PermissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_deposit_service__WEBPACK_IMPORTED_MODULE_0__.DepositService));
};
PermissionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PermissionService,
  factory: PermissionService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9007:
/*!**************************************************************************************!*\
  !*** ./node_modules/chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/helpers */ 5867);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ 3854);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 3466);
/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */


var devicePixelRatio = function () {
  if (typeof window !== 'undefined') {
    if (window.devicePixelRatio) {
      return window.devicePixelRatio;
    }

    // devicePixelRatio is undefined on IE10
    // https://stackoverflow.com/a/20204180/8837887
    // https://github.com/chartjs/chartjs-plugin-datalabels/issues/85
    var screen = window.screen;
    if (screen) {
      return (screen.deviceXDPI || 1) / (screen.logicalXDPI || 1);
    }
  }
  return 1;
}();
var utils = {
  // @todo move this in Chart.helpers.toTextLines
  toTextLines: function (inputs) {
    var lines = [];
    var input;
    inputs = [].concat(inputs);
    while (inputs.length) {
      input = inputs.pop();
      if (typeof input === 'string') {
        lines.unshift.apply(lines, input.split('\n'));
      } else if (Array.isArray(input)) {
        inputs.push.apply(inputs, input);
      } else if (!(0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(inputs)) {
        lines.unshift('' + input);
      }
    }
    return lines;
  },
  // @todo move this in Chart.helpers.canvas.textSize
  // @todo cache calls of measureText if font doesn't change?!
  textSize: function (ctx, lines, font) {
    var items = [].concat(lines);
    var ilen = items.length;
    var prev = ctx.font;
    var width = 0;
    var i;
    ctx.font = font.string;
    for (i = 0; i < ilen; ++i) {
      width = Math.max(ctx.measureText(items[i]).width, width);
    }
    ctx.font = prev;
    return {
      height: ilen * font.lineHeight,
      width: width
    };
  },
  /**
   * Returns value bounded by min and max. This is equivalent to max(min, min(value, max)).
   * @todo move this method in Chart.helpers.bound
   * https://doc.qt.io/qt-5/qtglobal.html#qBound
   */
  bound: function (min, value, max) {
    return Math.max(min, Math.min(value, max));
  },
  /**
   * Returns an array of pair [value, state] where state is:
   * * -1: value is only in a0 (removed)
   * *  1: value is only in a1 (added)
   */
  arrayDiff: function (a0, a1) {
    var prev = a0.slice();
    var updates = [];
    var i, j, ilen, v;
    for (i = 0, ilen = a1.length; i < ilen; ++i) {
      v = a1[i];
      j = prev.indexOf(v);
      if (j === -1) {
        updates.push([v, 1]);
      } else {
        prev.splice(j, 1);
      }
    }
    for (i = 0, ilen = prev.length; i < ilen; ++i) {
      updates.push([prev[i], -1]);
    }
    return updates;
  },
  /**
   * https://github.com/chartjs/chartjs-plugin-datalabels/issues/70
   */
  rasterize: function (v) {
    return Math.round(v * devicePixelRatio) / devicePixelRatio;
  }
};
function orient(point, origin) {
  var x0 = origin.x;
  var y0 = origin.y;
  if (x0 === null) {
    return {
      x: 0,
      y: -1
    };
  }
  if (y0 === null) {
    return {
      x: 1,
      y: 0
    };
  }
  var dx = point.x - x0;
  var dy = point.y - y0;
  var ln = Math.sqrt(dx * dx + dy * dy);
  return {
    x: ln ? dx / ln : 0,
    y: ln ? dy / ln : -1
  };
}
function aligned(x, y, vx, vy, align) {
  switch (align) {
    case 'center':
      vx = vy = 0;
      break;
    case 'bottom':
      vx = 0;
      vy = 1;
      break;
    case 'right':
      vx = 1;
      vy = 0;
      break;
    case 'left':
      vx = -1;
      vy = 0;
      break;
    case 'top':
      vx = 0;
      vy = -1;
      break;
    case 'start':
      vx = -vx;
      vy = -vy;
      break;
    case 'end':
      // keep natural orientation
      break;
    default:
      // clockwise rotation (in degree)
      align *= Math.PI / 180;
      vx = Math.cos(align);
      vy = Math.sin(align);
      break;
  }
  return {
    x: x,
    y: y,
    vx: vx,
    vy: vy
  };
}

// Line clipping (Cohen–Sutherland algorithm)
// https://en.wikipedia.org/wiki/Cohen–Sutherland_algorithm

var R_INSIDE = 0;
var R_LEFT = 1;
var R_RIGHT = 2;
var R_BOTTOM = 4;
var R_TOP = 8;
function region(x, y, rect) {
  var res = R_INSIDE;
  if (x < rect.left) {
    res |= R_LEFT;
  } else if (x > rect.right) {
    res |= R_RIGHT;
  }
  if (y < rect.top) {
    res |= R_TOP;
  } else if (y > rect.bottom) {
    res |= R_BOTTOM;
  }
  return res;
}
function clipped(segment, area) {
  var x0 = segment.x0;
  var y0 = segment.y0;
  var x1 = segment.x1;
  var y1 = segment.y1;
  var r0 = region(x0, y0, area);
  var r1 = region(x1, y1, area);
  var r, x, y;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (!(r0 | r1) || r0 & r1) {
      // both points inside or on the same side: no clipping
      break;
    }

    // at least one point is outside
    r = r0 || r1;
    if (r & R_TOP) {
      x = x0 + (x1 - x0) * (area.top - y0) / (y1 - y0);
      y = area.top;
    } else if (r & R_BOTTOM) {
      x = x0 + (x1 - x0) * (area.bottom - y0) / (y1 - y0);
      y = area.bottom;
    } else if (r & R_RIGHT) {
      y = y0 + (y1 - y0) * (area.right - x0) / (x1 - x0);
      x = area.right;
    } else if (r & R_LEFT) {
      y = y0 + (y1 - y0) * (area.left - x0) / (x1 - x0);
      x = area.left;
    }
    if (r === r0) {
      x0 = x;
      y0 = y;
      r0 = region(x0, y0, area);
    } else {
      x1 = x;
      y1 = y;
      r1 = region(x1, y1, area);
    }
  }
  return {
    x0: x0,
    x1: x1,
    y0: y0,
    y1: y1
  };
}
function compute$1(range, config) {
  var anchor = config.anchor;
  var segment = range;
  var x, y;
  if (config.clamp) {
    segment = clipped(segment, config.area);
  }
  if (anchor === 'start') {
    x = segment.x0;
    y = segment.y0;
  } else if (anchor === 'end') {
    x = segment.x1;
    y = segment.y1;
  } else {
    x = (segment.x0 + segment.x1) / 2;
    y = (segment.y0 + segment.y1) / 2;
  }
  return aligned(x, y, range.vx, range.vy, config.align);
}
var positioners = {
  arc: function (el, config) {
    var angle = (el.startAngle + el.endAngle) / 2;
    var vx = Math.cos(angle);
    var vy = Math.sin(angle);
    var r0 = el.innerRadius;
    var r1 = el.outerRadius;
    return compute$1({
      x0: el.x + vx * r0,
      y0: el.y + vy * r0,
      x1: el.x + vx * r1,
      y1: el.y + vy * r1,
      vx: vx,
      vy: vy
    }, config);
  },
  point: function (el, config) {
    var v = orient(el, config.origin);
    var rx = v.x * el.options.radius;
    var ry = v.y * el.options.radius;
    return compute$1({
      x0: el.x - rx,
      y0: el.y - ry,
      x1: el.x + rx,
      y1: el.y + ry,
      vx: v.x,
      vy: v.y
    }, config);
  },
  bar: function (el, config) {
    var v = orient(el, config.origin);
    var x = el.x;
    var y = el.y;
    var sx = 0;
    var sy = 0;
    if (el.horizontal) {
      x = Math.min(el.x, el.base);
      sx = Math.abs(el.base - el.x);
    } else {
      y = Math.min(el.y, el.base);
      sy = Math.abs(el.base - el.y);
    }
    return compute$1({
      x0: x,
      y0: y + sy,
      x1: x + sx,
      y1: y,
      vx: v.x,
      vy: v.y
    }, config);
  },
  fallback: function (el, config) {
    var v = orient(el, config.origin);
    return compute$1({
      x0: el.x,
      y0: el.y,
      x1: el.x + (el.width || 0),
      y1: el.y + (el.height || 0),
      vx: v.x,
      vy: v.y
    }, config);
  }
};
var rasterize = utils.rasterize;
function boundingRects(model) {
  var borderWidth = model.borderWidth || 0;
  var padding = model.padding;
  var th = model.size.height;
  var tw = model.size.width;
  var tx = -tw / 2;
  var ty = -th / 2;
  return {
    frame: {
      x: tx - padding.left - borderWidth,
      y: ty - padding.top - borderWidth,
      w: tw + padding.width + borderWidth * 2,
      h: th + padding.height + borderWidth * 2
    },
    text: {
      x: tx,
      y: ty,
      w: tw,
      h: th
    }
  };
}
function getScaleOrigin(el, context) {
  var scale = context.chart.getDatasetMeta(context.datasetIndex).vScale;
  if (!scale) {
    return null;
  }
  if (scale.xCenter !== undefined && scale.yCenter !== undefined) {
    return {
      x: scale.xCenter,
      y: scale.yCenter
    };
  }
  var pixel = scale.getBasePixel();
  return el.horizontal ? {
    x: pixel,
    y: null
  } : {
    x: null,
    y: pixel
  };
}
function getPositioner(el) {
  if (el instanceof chart_js__WEBPACK_IMPORTED_MODULE_1__.ArcElement) {
    return positioners.arc;
  }
  if (el instanceof chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement) {
    return positioners.point;
  }
  if (el instanceof chart_js__WEBPACK_IMPORTED_MODULE_1__.BarElement) {
    return positioners.bar;
  }
  return positioners.fallback;
}
function drawRoundedRect(ctx, x, y, w, h, radius) {
  var HALF_PI = Math.PI / 2;
  if (radius) {
    var r = Math.min(radius, h / 2, w / 2);
    var left = x + r;
    var top = y + r;
    var right = x + w - r;
    var bottom = y + h - r;
    ctx.moveTo(x, top);
    if (left < right && top < bottom) {
      ctx.arc(left, top, r, -Math.PI, -HALF_PI);
      ctx.arc(right, top, r, -HALF_PI, 0);
      ctx.arc(right, bottom, r, 0, HALF_PI);
      ctx.arc(left, bottom, r, HALF_PI, Math.PI);
    } else if (left < right) {
      ctx.moveTo(left, y);
      ctx.arc(right, top, r, -HALF_PI, HALF_PI);
      ctx.arc(left, top, r, HALF_PI, Math.PI + HALF_PI);
    } else if (top < bottom) {
      ctx.arc(left, top, r, -Math.PI, 0);
      ctx.arc(left, bottom, r, 0, Math.PI);
    } else {
      ctx.arc(left, top, r, -Math.PI, Math.PI);
    }
    ctx.closePath();
    ctx.moveTo(x, y);
  } else {
    ctx.rect(x, y, w, h);
  }
}
function drawFrame(ctx, rect, model) {
  var bgColor = model.backgroundColor;
  var borderColor = model.borderColor;
  var borderWidth = model.borderWidth;
  if (!bgColor && (!borderColor || !borderWidth)) {
    return;
  }
  ctx.beginPath();
  drawRoundedRect(ctx, rasterize(rect.x) + borderWidth / 2, rasterize(rect.y) + borderWidth / 2, rasterize(rect.w) - borderWidth, rasterize(rect.h) - borderWidth, model.borderRadius);
  ctx.closePath();
  if (bgColor) {
    ctx.fillStyle = bgColor;
    ctx.fill();
  }
  if (borderColor && borderWidth) {
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.lineJoin = 'miter';
    ctx.stroke();
  }
}
function textGeometry(rect, align, font) {
  var h = font.lineHeight;
  var w = rect.w;
  var x = rect.x;
  var y = rect.y + h / 2;
  if (align === 'center') {
    x += w / 2;
  } else if (align === 'end' || align === 'right') {
    x += w;
  }
  return {
    h: h,
    w: w,
    x: x,
    y: y
  };
}
function drawTextLine(ctx, text, cfg) {
  var shadow = ctx.shadowBlur;
  var stroked = cfg.stroked;
  var x = rasterize(cfg.x);
  var y = rasterize(cfg.y);
  var w = rasterize(cfg.w);
  if (stroked) {
    ctx.strokeText(text, x, y, w);
  }
  if (cfg.filled) {
    if (shadow && stroked) {
      // Prevent drawing shadow on both the text stroke and fill, so
      // if the text is stroked, remove the shadow for the text fill.
      ctx.shadowBlur = 0;
    }
    ctx.fillText(text, x, y, w);
    if (shadow && stroked) {
      ctx.shadowBlur = shadow;
    }
  }
}
function drawText(ctx, lines, rect, model) {
  var align = model.textAlign;
  var color = model.color;
  var filled = !!color;
  var font = model.font;
  var ilen = lines.length;
  var strokeColor = model.textStrokeColor;
  var strokeWidth = model.textStrokeWidth;
  var stroked = strokeColor && strokeWidth;
  var i;
  if (!ilen || !filled && !stroked) {
    return;
  }

  // Adjust coordinates based on text alignment and line height
  rect = textGeometry(rect, align, font);
  ctx.font = font.string;
  ctx.textAlign = align;
  ctx.textBaseline = 'middle';
  ctx.shadowBlur = model.textShadowBlur;
  ctx.shadowColor = model.textShadowColor;
  if (filled) {
    ctx.fillStyle = color;
  }
  if (stroked) {
    ctx.lineJoin = 'round';
    ctx.lineWidth = strokeWidth;
    ctx.strokeStyle = strokeColor;
  }
  for (i = 0, ilen = lines.length; i < ilen; ++i) {
    drawTextLine(ctx, lines[i], {
      stroked: stroked,
      filled: filled,
      w: rect.w,
      x: rect.x,
      y: rect.y + rect.h * i
    });
  }
}
var Label = function (config, ctx, el, index) {
  var me = this;
  me._config = config;
  me._index = index;
  me._model = null;
  me._rects = null;
  me._ctx = ctx;
  me._el = el;
};
(0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)(Label.prototype, {
  /**
   * @private
   */
  _modelize: function (display, lines, config, context) {
    var me = this;
    var index = me._index;
    var font = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.toFont)((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.font, {}], context, index));
    var color = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.color, chart_js__WEBPACK_IMPORTED_MODULE_2__.d.color], context, index);
    return {
      align: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.align, 'center'], context, index),
      anchor: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.anchor, 'center'], context, index),
      area: context.chart.chartArea,
      backgroundColor: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.backgroundColor, null], context, index),
      borderColor: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.borderColor, null], context, index),
      borderRadius: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.borderRadius, 0], context, index),
      borderWidth: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.borderWidth, 0], context, index),
      clamp: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.clamp, false], context, index),
      clip: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.clip, false], context, index),
      color: color,
      display: display,
      font: font,
      lines: lines,
      offset: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.offset, 4], context, index),
      opacity: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.opacity, 1], context, index),
      origin: getScaleOrigin(me._el, context),
      padding: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.toPadding)((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.padding, 4], context, index)),
      positioner: getPositioner(me._el),
      rotation: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.rotation, 0], context, index) * (Math.PI / 180),
      size: utils.textSize(me._ctx, lines, font),
      textAlign: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textAlign, 'start'], context, index),
      textShadowBlur: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textShadowBlur, 0], context, index),
      textShadowColor: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textShadowColor, color], context, index),
      textStrokeColor: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textStrokeColor, color], context, index),
      textStrokeWidth: (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.textStrokeWidth, 0], context, index)
    };
  },
  update: function (context) {
    var me = this;
    var model = null;
    var rects = null;
    var index = me._index;
    var config = me._config;
    var value, label, lines;

    // We first resolve the display option (separately) to avoid computing
    // other options in case the label is hidden (i.e. display: false).
    var display = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.resolve)([config.display, true], context, index);
    if (display) {
      value = context.dataset.data[index];
      label = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.valueOrDefault)((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.callback)(config.formatter, [value, context]), value);
      lines = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(label) ? [] : utils.toTextLines(label);
      if (lines.length) {
        model = me._modelize(display, lines, config, context);
        rects = boundingRects(model);
      }
    }
    me._model = model;
    me._rects = rects;
  },
  geometry: function () {
    return this._rects ? this._rects.frame : {};
  },
  rotation: function () {
    return this._model ? this._model.rotation : 0;
  },
  visible: function () {
    return this._model && this._model.opacity;
  },
  model: function () {
    return this._model;
  },
  draw: function (chart, center) {
    var me = this;
    var ctx = chart.ctx;
    var model = me._model;
    var rects = me._rects;
    var area;
    if (!this.visible()) {
      return;
    }
    ctx.save();
    if (model.clip) {
      area = model.area;
      ctx.beginPath();
      ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
      ctx.clip();
    }
    ctx.globalAlpha = utils.bound(0, model.opacity, 1);
    ctx.translate(rasterize(center.x), rasterize(center.y));
    ctx.rotate(model.rotation);
    drawFrame(ctx, rects.frame, model);
    drawText(ctx, model.lines, rects.text, model);
    ctx.restore();
  }
});
var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991; // eslint-disable-line es/no-number-minsafeinteger
var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991; // eslint-disable-line es/no-number-maxsafeinteger

function rotated(point, center, angle) {
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  var cx = center.x;
  var cy = center.y;
  return {
    x: cx + cos * (point.x - cx) - sin * (point.y - cy),
    y: cy + sin * (point.x - cx) + cos * (point.y - cy)
  };
}
function projected(points, axis) {
  var min = MAX_INTEGER;
  var max = MIN_INTEGER;
  var origin = axis.origin;
  var i, pt, vx, vy, dp;
  for (i = 0; i < points.length; ++i) {
    pt = points[i];
    vx = pt.x - origin.x;
    vy = pt.y - origin.y;
    dp = axis.vx * vx + axis.vy * vy;
    min = Math.min(min, dp);
    max = Math.max(max, dp);
  }
  return {
    min: min,
    max: max
  };
}
function toAxis(p0, p1) {
  var vx = p1.x - p0.x;
  var vy = p1.y - p0.y;
  var ln = Math.sqrt(vx * vx + vy * vy);
  return {
    vx: (p1.x - p0.x) / ln,
    vy: (p1.y - p0.y) / ln,
    origin: p0,
    ln: ln
  };
}
var HitBox = function () {
  this._rotation = 0;
  this._rect = {
    x: 0,
    y: 0,
    w: 0,
    h: 0
  };
};
(0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)(HitBox.prototype, {
  center: function () {
    var r = this._rect;
    return {
      x: r.x + r.w / 2,
      y: r.y + r.h / 2
    };
  },
  update: function (center, rect, rotation) {
    this._rotation = rotation;
    this._rect = {
      x: rect.x + center.x,
      y: rect.y + center.y,
      w: rect.w,
      h: rect.h
    };
  },
  contains: function (point) {
    var me = this;
    var margin = 1;
    var rect = me._rect;
    point = rotated(point, me.center(), -me._rotation);
    return !(point.x < rect.x - margin || point.y < rect.y - margin || point.x > rect.x + rect.w + margin * 2 || point.y > rect.y + rect.h + margin * 2);
  },
  // Separating Axis Theorem
  // https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
  intersects: function (other) {
    var r0 = this._points();
    var r1 = other._points();
    var axes = [toAxis(r0[0], r0[1]), toAxis(r0[0], r0[3])];
    var i, pr0, pr1;
    if (this._rotation !== other._rotation) {
      // Only separate with r1 axis if the rotation is different,
      // else it's enough to separate r0 and r1 with r0 axis only!
      axes.push(toAxis(r1[0], r1[1]), toAxis(r1[0], r1[3]));
    }
    for (i = 0; i < axes.length; ++i) {
      pr0 = projected(r0, axes[i]);
      pr1 = projected(r1, axes[i]);
      if (pr0.max < pr1.min || pr1.max < pr0.min) {
        return false;
      }
    }
    return true;
  },
  /**
   * @private
   */
  _points: function () {
    var me = this;
    var rect = me._rect;
    var angle = me._rotation;
    var center = me.center();
    return [rotated({
      x: rect.x,
      y: rect.y
    }, center, angle), rotated({
      x: rect.x + rect.w,
      y: rect.y
    }, center, angle), rotated({
      x: rect.x + rect.w,
      y: rect.y + rect.h
    }, center, angle), rotated({
      x: rect.x,
      y: rect.y + rect.h
    }, center, angle)];
  }
});
function coordinates(el, model, geometry) {
  var point = model.positioner(el, model);
  var vx = point.vx;
  var vy = point.vy;
  if (!vx && !vy) {
    // if aligned center, we don't want to offset the center point
    return {
      x: point.x,
      y: point.y
    };
  }
  var w = geometry.w;
  var h = geometry.h;

  // take in account the label rotation
  var rotation = model.rotation;
  var dx = Math.abs(w / 2 * Math.cos(rotation)) + Math.abs(h / 2 * Math.sin(rotation));
  var dy = Math.abs(w / 2 * Math.sin(rotation)) + Math.abs(h / 2 * Math.cos(rotation));

  // scale the unit vector (vx, vy) to get at least dx or dy equal to
  // w or h respectively (else we would calculate the distance to the
  // ellipse inscribed in the bounding rect)
  var vs = 1 / Math.max(Math.abs(vx), Math.abs(vy));
  dx *= vx * vs;
  dy *= vy * vs;

  // finally, include the explicit offset
  dx += model.offset * vx;
  dy += model.offset * vy;
  return {
    x: point.x + dx,
    y: point.y + dy
  };
}
function collide(labels, collider) {
  var i, j, s0, s1;

  // IMPORTANT Iterate in the reverse order since items at the end of the
  // list have an higher weight/priority and thus should be less impacted
  // by the overlapping strategy.

  for (i = labels.length - 1; i >= 0; --i) {
    s0 = labels[i].$layout;
    for (j = i - 1; j >= 0 && s0._visible; --j) {
      s1 = labels[j].$layout;
      if (s1._visible && s0._box.intersects(s1._box)) {
        collider(s0, s1);
      }
    }
  }
  return labels;
}
function compute(labels) {
  var i, ilen, label, state, geometry, center, proxy;

  // Initialize labels for overlap detection
  for (i = 0, ilen = labels.length; i < ilen; ++i) {
    label = labels[i];
    state = label.$layout;
    if (state._visible) {
      // Chart.js 3 removed el._model in favor of getProps(), making harder to
      // abstract reading values in positioners. Also, using string arrays to
      // read values (i.e. var {a,b,c} = el.getProps(["a","b","c"])) would make
      // positioners inefficient in the normal case (i.e. not the final values)
      // and the code a bit ugly, so let's use a Proxy instead.
      proxy = new Proxy(label._el, {
        get: (el, p) => el.getProps([p], true)[p]
      });
      geometry = label.geometry();
      center = coordinates(proxy, label.model(), geometry);
      state._box.update(center, geometry, label.rotation());
    }
  }

  // Auto hide overlapping labels
  return collide(labels, function (s0, s1) {
    var h0 = s0._hidable;
    var h1 = s1._hidable;
    if (h0 && h1 || h1) {
      s1._visible = false;
    } else if (h0) {
      s0._visible = false;
    }
  });
}
var layout = {
  prepare: function (datasets) {
    var labels = [];
    var i, j, ilen, jlen, label;
    for (i = 0, ilen = datasets.length; i < ilen; ++i) {
      for (j = 0, jlen = datasets[i].length; j < jlen; ++j) {
        label = datasets[i][j];
        labels.push(label);
        label.$layout = {
          _box: new HitBox(),
          _hidable: false,
          _visible: true,
          _set: i,
          _idx: label._index
        };
      }
    }

    // TODO New `z` option: labels with a higher z-index are drawn
    // of top of the ones with a lower index. Lowest z-index labels
    // are also discarded first when hiding overlapping labels.
    labels.sort(function (a, b) {
      var sa = a.$layout;
      var sb = b.$layout;
      return sa._idx === sb._idx ? sb._set - sa._set : sb._idx - sa._idx;
    });
    this.update(labels);
    return labels;
  },
  update: function (labels) {
    var dirty = false;
    var i, ilen, label, model, state;
    for (i = 0, ilen = labels.length; i < ilen; ++i) {
      label = labels[i];
      model = label.model();
      state = label.$layout;
      state._hidable = model && model.display === 'auto';
      state._visible = label.visible();
      dirty |= state._hidable;
    }
    if (dirty) {
      compute(labels);
    }
  },
  lookup: function (labels, point) {
    var i, state;

    // IMPORTANT Iterate in the reverse order since items at the end of
    // the list have an higher z-index, thus should be picked first.

    for (i = labels.length - 1; i >= 0; --i) {
      state = labels[i].$layout;
      if (state && state._visible && state._box.contains(point)) {
        return labels[i];
      }
    }
    return null;
  },
  draw: function (chart, labels) {
    var i, ilen, label, state, geometry, center;
    for (i = 0, ilen = labels.length; i < ilen; ++i) {
      label = labels[i];
      state = label.$layout;
      if (state._visible) {
        geometry = label.geometry();
        center = coordinates(label._el, label.model(), geometry);
        state._box.update(center, geometry, label.rotation());
        label.draw(chart, center);
      }
    }
  }
};
var formatter = function (value) {
  if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(value)) {
    return null;
  }
  var label = value;
  var keys, klen, k;
  if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isObject)(value)) {
    if (!(0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(value.label)) {
      label = value.label;
    } else if (!(0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef)(value.r)) {
      label = value.r;
    } else {
      label = '';
      keys = Object.keys(value);
      for (k = 0, klen = keys.length; k < klen; ++k) {
        label += (k !== 0 ? ', ' : '') + keys[k] + ': ' + value[keys[k]];
      }
    }
  }
  return '' + label;
};

/**
 * IMPORTANT: make sure to also update tests and TypeScript definition
 * files (`/test/specs/defaults.spec.js` and `/types/options.d.ts`)
 */

var defaults = {
  align: 'center',
  anchor: 'center',
  backgroundColor: null,
  borderColor: null,
  borderRadius: 0,
  borderWidth: 0,
  clamp: false,
  clip: false,
  color: undefined,
  display: true,
  font: {
    family: undefined,
    lineHeight: 1.2,
    size: undefined,
    style: undefined,
    weight: null
  },
  formatter: formatter,
  labels: undefined,
  listeners: {},
  offset: 4,
  opacity: 1,
  padding: {
    top: 4,
    right: 4,
    bottom: 4,
    left: 4
  },
  rotation: 0,
  textAlign: 'start',
  textStrokeColor: undefined,
  textStrokeWidth: 0,
  textShadowBlur: 0,
  textShadowColor: undefined
};

/**
 * @see https://github.com/chartjs/Chart.js/issues/4176
 */

var EXPANDO_KEY = '$datalabels';
var DEFAULT_KEY = '$default';
function configure(dataset, options) {
  var override = dataset.datalabels;
  var listeners = {};
  var configs = [];
  var labels, keys;
  if (override === false) {
    return null;
  }
  if (override === true) {
    override = {};
  }
  options = (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)({}, [options, override]);
  labels = options.labels || {};
  keys = Object.keys(labels);
  delete options.labels;
  if (keys.length) {
    keys.forEach(function (key) {
      if (labels[key]) {
        configs.push((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)({}, [options, labels[key], {
          _key: key
        }]));
      }
    });
  } else {
    // Default label if no "named" label defined.
    configs.push(options);
  }

  // listeners: {<event-type>: {<label-key>: <fn>}}
  listeners = configs.reduce(function (target, config) {
    (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.each)(config.listeners || {}, function (fn, event) {
      target[event] = target[event] || {};
      target[event][config._key || DEFAULT_KEY] = fn;
    });
    delete config.listeners;
    return target;
  }, {});
  return {
    labels: configs,
    listeners: listeners
  };
}
function dispatchEvent(chart, listeners, label, event) {
  if (!listeners) {
    return;
  }
  var context = label.$context;
  var groups = label.$groups;
  var callback$1;
  if (!listeners[groups._set]) {
    return;
  }
  callback$1 = listeners[groups._set][groups._key];
  if (!callback$1) {
    return;
  }
  if ((0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.callback)(callback$1, [context, event]) === true) {
    // Users are allowed to tweak the given context by injecting values that can be
    // used in scriptable options to display labels differently based on the current
    // event (e.g. highlight an hovered label). That's why we update the label with
    // the output context and schedule a new chart render by setting it dirty.
    chart[EXPANDO_KEY]._dirty = true;
    label.update(context);
  }
}
function dispatchMoveEvents(chart, listeners, previous, label, event) {
  var enter, leave;
  if (!previous && !label) {
    return;
  }
  if (!previous) {
    enter = true;
  } else if (!label) {
    leave = true;
  } else if (previous !== label) {
    leave = enter = true;
  }
  if (leave) {
    dispatchEvent(chart, listeners.leave, previous, event);
  }
  if (enter) {
    dispatchEvent(chart, listeners.enter, label, event);
  }
}
function handleMoveEvents(chart, event) {
  var expando = chart[EXPANDO_KEY];
  var listeners = expando._listeners;
  var previous, label;
  if (!listeners.enter && !listeners.leave) {
    return;
  }
  if (event.type === 'mousemove') {
    label = layout.lookup(expando._labels, event);
  } else if (event.type !== 'mouseout') {
    return;
  }
  previous = expando._hovered;
  expando._hovered = label;
  dispatchMoveEvents(chart, listeners, previous, label, event);
}
function handleClickEvents(chart, event) {
  var expando = chart[EXPANDO_KEY];
  var handlers = expando._listeners.click;
  var label = handlers && layout.lookup(expando._labels, event);
  if (label) {
    dispatchEvent(chart, handlers, label, event);
  }
}
var plugin = {
  id: 'datalabels',
  defaults: defaults,
  beforeInit: function (chart) {
    chart[EXPANDO_KEY] = {
      _actives: []
    };
  },
  beforeUpdate: function (chart) {
    var expando = chart[EXPANDO_KEY];
    expando._listened = false;
    expando._listeners = {}; // {<event-type>: {<dataset-index>: {<label-key>: <fn>}}}
    expando._datasets = []; // per dataset labels: [Label[]]
    expando._labels = []; // layouted labels: Label[]
  },

  afterDatasetUpdate: function (chart, args, options) {
    var datasetIndex = args.index;
    var expando = chart[EXPANDO_KEY];
    var labels = expando._datasets[datasetIndex] = [];
    var visible = chart.isDatasetVisible(datasetIndex);
    var dataset = chart.data.datasets[datasetIndex];
    var config = configure(dataset, options);
    var elements = args.meta.data || [];
    var ctx = chart.ctx;
    var i, j, ilen, jlen, cfg, key, el, label;
    ctx.save();
    for (i = 0, ilen = elements.length; i < ilen; ++i) {
      el = elements[i];
      el[EXPANDO_KEY] = [];
      if (visible && el && chart.getDataVisibility(i) && !el.skip) {
        for (j = 0, jlen = config.labels.length; j < jlen; ++j) {
          cfg = config.labels[j];
          key = cfg._key;
          label = new Label(cfg, ctx, el, i);
          label.$groups = {
            _set: datasetIndex,
            _key: key || DEFAULT_KEY
          };
          label.$context = {
            active: false,
            chart: chart,
            dataIndex: i,
            dataset: dataset,
            datasetIndex: datasetIndex
          };
          label.update(label.$context);
          el[EXPANDO_KEY].push(label);
          labels.push(label);
        }
      }
    }
    ctx.restore();

    // Store listeners at the chart level and per event type to optimize
    // cases where no listeners are registered for a specific event.
    (0,chart_js_helpers__WEBPACK_IMPORTED_MODULE_0__.merge)(expando._listeners, config.listeners, {
      merger: function (event, target, source) {
        target[event] = target[event] || {};
        target[event][args.index] = source[event];
        expando._listened = true;
      }
    });
  },
  afterUpdate: function (chart) {
    chart[EXPANDO_KEY]._labels = layout.prepare(chart[EXPANDO_KEY]._datasets);
  },
  // Draw labels on top of all dataset elements
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
  afterDatasetsDraw: function (chart) {
    layout.draw(chart, chart[EXPANDO_KEY]._labels);
  },
  beforeEvent: function (chart, args) {
    // If there is no listener registered for this chart, `listened` will be false,
    // meaning we can immediately ignore the incoming event and avoid useless extra
    // computation for users who don't implement label interactions.
    if (chart[EXPANDO_KEY]._listened) {
      var event = args.event;
      switch (event.type) {
        case 'mousemove':
        case 'mouseout':
          handleMoveEvents(chart, event);
          break;
        case 'click':
          handleClickEvents(chart, event);
          break;
      }
    }
  },
  afterEvent: function (chart) {
    var expando = chart[EXPANDO_KEY];
    var previous = expando._actives;
    var actives = expando._actives = chart.getActiveElements();
    var updates = utils.arrayDiff(previous, actives);
    var i, ilen, j, jlen, update, label, labels;
    for (i = 0, ilen = updates.length; i < ilen; ++i) {
      update = updates[i];
      if (update[1]) {
        labels = update[0].element[EXPANDO_KEY] || [];
        for (j = 0, jlen = labels.length; j < jlen; ++j) {
          label = labels[j];
          label.$context.active = update[1] === 1;
          label.update(label.$context);
        }
      }
    }
    if (expando._dirty || updates.length) {
      layout.update(expando._labels);
      chart.render();
    }
    delete expando._dirty;
  }
};


/***/ }),

/***/ 7739:
/*!***********************************************!*\
  !*** ./node_modules/chart.js/dist/helpers.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HALF_PI": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   "INFINITY": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b2),
/* harmony export */   "PI": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "PITAU": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b1),
/* harmony export */   "QUARTER_PI": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b4),
/* harmony export */   "RAD_PER_DEG": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b3),
/* harmony export */   "TAU": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   "TWO_THIRDS_PI": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b5),
/* harmony export */   "_addGrace": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   "_alignPixel": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   "_alignStartEnd": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2),
/* harmony export */   "_angleBetween": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   "_angleDiff": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b6),
/* harmony export */   "_arrayUnique": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   "_attachContext": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a8),
/* harmony export */   "_bezierCurveTo": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.as),
/* harmony export */   "_bezierInterpolation": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ap),
/* harmony export */   "_boundSegment": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ax),
/* harmony export */   "_boundSegments": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.an),
/* harmony export */   "_capitalize": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a5),
/* harmony export */   "_computeSegments": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.am),
/* harmony export */   "_createResolver": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a9),
/* harmony export */   "_decimalPlaces": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aK),
/* harmony export */   "_deprecated": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aV),
/* harmony export */   "_descriptors": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aa),
/* harmony export */   "_elementsEqual": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ah),
/* harmony export */   "_factorize": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   "_filterBetween": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aO),
/* harmony export */   "_getParentNode": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   "_getStartAndCountOfVisiblePoints": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "_int16Range": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   "_isBetween": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aj),
/* harmony export */   "_isClickEvent": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ai),
/* harmony export */   "_isDomSupported": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   "_isPointInArea": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "_limitValue": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "_longestText": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aN),
/* harmony export */   "_lookup": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aP),
/* harmony export */   "_lookupByKey": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   "_measureText": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   "_merger": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aT),
/* harmony export */   "_mergerIf": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aU),
/* harmony export */   "_normalizeAngle": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ay),
/* harmony export */   "_parseObjectDataRadialScale": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.y),
/* harmony export */   "_pointInLine": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aq),
/* harmony export */   "_readValueToProps": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ak),
/* harmony export */   "_rlookupByKey": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "_scaleRangesChanged": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "_setMinAndMaxByKey": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aG),
/* harmony export */   "_splitKey": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aW),
/* harmony export */   "_steppedInterpolation": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ao),
/* harmony export */   "_steppedLineTo": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ar),
/* harmony export */   "_textX": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aB),
/* harmony export */   "_toLeftRightCenter": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a1),
/* harmony export */   "_updateBezierControlPoints": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.al),
/* harmony export */   "addRoundedRectPath": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.au),
/* harmony export */   "almostEquals": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aJ),
/* harmony export */   "almostWhole": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aI),
/* harmony export */   "callback": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   "clearCanvas": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.af),
/* harmony export */   "clipArea": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   "clone": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aS),
/* harmony export */   "color": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   "createContext": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "debounce": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ad),
/* harmony export */   "defined": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   "distanceBetweenPoints": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aE),
/* harmony export */   "drawPoint": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.at),
/* harmony export */   "drawPointLegend": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aD),
/* harmony export */   "each": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   "easingEffects": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   "finiteOrDefault": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   "fontString": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a$),
/* harmony export */   "formatNumber": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.o),
/* harmony export */   "getAngleFromPoint": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "getHoverColor": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aR),
/* harmony export */   "getMaximumSize": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   "getRelativePosition": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.z),
/* harmony export */   "getRtlAdapter": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.az),
/* harmony export */   "getStyle": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a_),
/* harmony export */   "isArray": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   "isFinite": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   "isFunction": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a7),
/* harmony export */   "isNullOrUndef": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   "isNumber": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   "isObject": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   "isPatternOrGradient": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aQ),
/* harmony export */   "listenArrayEvents": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   "log10": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aM),
/* harmony export */   "merge": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a4),
/* harmony export */   "mergeIf": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ab),
/* harmony export */   "niceNum": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aH),
/* harmony export */   "noop": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aF),
/* harmony export */   "overrideTextDirection": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aA),
/* harmony export */   "readUsedSize": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   "renderText": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "requestAnimFrame": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   "resolve": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   "resolveObjectKey": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   "restoreTextDirection": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aC),
/* harmony export */   "retinaScale": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ae),
/* harmony export */   "setsEqual": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ag),
/* harmony export */   "sign": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   "splineCurve": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aY),
/* harmony export */   "splineCurveMonotone": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aZ),
/* harmony export */   "supportsEventListenerOptions": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   "throttled": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   "toDegrees": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   "toDimension": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   "toFont": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0),
/* harmony export */   "toFontString": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aX),
/* harmony export */   "toLineHeight": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b0),
/* harmony export */   "toPadding": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "toPercentage": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "toRadians": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   "toTRBL": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.av),
/* harmony export */   "toTRBLCorners": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aw),
/* harmony export */   "uid": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ac),
/* harmony export */   "unclipArea": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.$),
/* harmony export */   "unlistenArrayEvents": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "valueOrDefault": () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)
/* harmony export */ });
/* harmony import */ var _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/helpers.segment.js */ 3466);
/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */



/***/ }),

/***/ 5867:
/*!**************************************************!*\
  !*** ./node_modules/chart.js/helpers/helpers.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HALF_PI": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.HALF_PI),
/* harmony export */   "INFINITY": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.INFINITY),
/* harmony export */   "PI": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.PI),
/* harmony export */   "PITAU": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.PITAU),
/* harmony export */   "QUARTER_PI": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.QUARTER_PI),
/* harmony export */   "RAD_PER_DEG": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.RAD_PER_DEG),
/* harmony export */   "TAU": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.TAU),
/* harmony export */   "TWO_THIRDS_PI": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.TWO_THIRDS_PI),
/* harmony export */   "_addGrace": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._addGrace),
/* harmony export */   "_alignPixel": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._alignPixel),
/* harmony export */   "_alignStartEnd": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._alignStartEnd),
/* harmony export */   "_angleBetween": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._angleBetween),
/* harmony export */   "_angleDiff": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._angleDiff),
/* harmony export */   "_arrayUnique": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._arrayUnique),
/* harmony export */   "_attachContext": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._attachContext),
/* harmony export */   "_bezierCurveTo": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._bezierCurveTo),
/* harmony export */   "_bezierInterpolation": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._bezierInterpolation),
/* harmony export */   "_boundSegment": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._boundSegment),
/* harmony export */   "_boundSegments": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._boundSegments),
/* harmony export */   "_capitalize": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._capitalize),
/* harmony export */   "_computeSegments": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._computeSegments),
/* harmony export */   "_createResolver": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._createResolver),
/* harmony export */   "_decimalPlaces": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._decimalPlaces),
/* harmony export */   "_deprecated": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._deprecated),
/* harmony export */   "_descriptors": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._descriptors),
/* harmony export */   "_elementsEqual": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._elementsEqual),
/* harmony export */   "_factorize": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._factorize),
/* harmony export */   "_filterBetween": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._filterBetween),
/* harmony export */   "_getParentNode": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._getParentNode),
/* harmony export */   "_getStartAndCountOfVisiblePoints": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._getStartAndCountOfVisiblePoints),
/* harmony export */   "_int16Range": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._int16Range),
/* harmony export */   "_isBetween": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._isBetween),
/* harmony export */   "_isClickEvent": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._isClickEvent),
/* harmony export */   "_isDomSupported": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._isDomSupported),
/* harmony export */   "_isPointInArea": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._isPointInArea),
/* harmony export */   "_limitValue": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._limitValue),
/* harmony export */   "_longestText": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._longestText),
/* harmony export */   "_lookup": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._lookup),
/* harmony export */   "_lookupByKey": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._lookupByKey),
/* harmony export */   "_measureText": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._measureText),
/* harmony export */   "_merger": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._merger),
/* harmony export */   "_mergerIf": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._mergerIf),
/* harmony export */   "_normalizeAngle": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._normalizeAngle),
/* harmony export */   "_parseObjectDataRadialScale": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._parseObjectDataRadialScale),
/* harmony export */   "_pointInLine": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._pointInLine),
/* harmony export */   "_readValueToProps": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._readValueToProps),
/* harmony export */   "_rlookupByKey": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._rlookupByKey),
/* harmony export */   "_scaleRangesChanged": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._scaleRangesChanged),
/* harmony export */   "_setMinAndMaxByKey": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._setMinAndMaxByKey),
/* harmony export */   "_splitKey": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._splitKey),
/* harmony export */   "_steppedInterpolation": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._steppedInterpolation),
/* harmony export */   "_steppedLineTo": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._steppedLineTo),
/* harmony export */   "_textX": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._textX),
/* harmony export */   "_toLeftRightCenter": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._toLeftRightCenter),
/* harmony export */   "_updateBezierControlPoints": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__._updateBezierControlPoints),
/* harmony export */   "addRoundedRectPath": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.addRoundedRectPath),
/* harmony export */   "almostEquals": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.almostEquals),
/* harmony export */   "almostWhole": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.almostWhole),
/* harmony export */   "callback": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.callback),
/* harmony export */   "clearCanvas": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.clearCanvas),
/* harmony export */   "clipArea": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.clipArea),
/* harmony export */   "clone": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.clone),
/* harmony export */   "color": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.color),
/* harmony export */   "createContext": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createContext),
/* harmony export */   "debounce": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.debounce),
/* harmony export */   "defined": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.defined),
/* harmony export */   "distanceBetweenPoints": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.distanceBetweenPoints),
/* harmony export */   "drawPoint": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.drawPoint),
/* harmony export */   "drawPointLegend": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.drawPointLegend),
/* harmony export */   "each": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.each),
/* harmony export */   "easingEffects": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.easingEffects),
/* harmony export */   "finiteOrDefault": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.finiteOrDefault),
/* harmony export */   "fontString": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.fontString),
/* harmony export */   "formatNumber": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.formatNumber),
/* harmony export */   "getAngleFromPoint": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.getAngleFromPoint),
/* harmony export */   "getHoverColor": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.getHoverColor),
/* harmony export */   "getMaximumSize": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.getMaximumSize),
/* harmony export */   "getRelativePosition": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.getRelativePosition),
/* harmony export */   "getRtlAdapter": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.getRtlAdapter),
/* harmony export */   "getStyle": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.getStyle),
/* harmony export */   "isArray": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isArray),
/* harmony export */   "isFinite": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isFinite),
/* harmony export */   "isFunction": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isFunction),
/* harmony export */   "isNullOrUndef": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isNullOrUndef),
/* harmony export */   "isNumber": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isNumber),
/* harmony export */   "isObject": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isObject),
/* harmony export */   "isPatternOrGradient": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isPatternOrGradient),
/* harmony export */   "listenArrayEvents": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.listenArrayEvents),
/* harmony export */   "log10": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.log10),
/* harmony export */   "merge": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.merge),
/* harmony export */   "mergeIf": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.mergeIf),
/* harmony export */   "niceNum": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.niceNum),
/* harmony export */   "noop": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.noop),
/* harmony export */   "overrideTextDirection": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.overrideTextDirection),
/* harmony export */   "readUsedSize": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.readUsedSize),
/* harmony export */   "renderText": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.renderText),
/* harmony export */   "requestAnimFrame": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.requestAnimFrame),
/* harmony export */   "resolve": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.resolve),
/* harmony export */   "resolveObjectKey": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.resolveObjectKey),
/* harmony export */   "restoreTextDirection": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.restoreTextDirection),
/* harmony export */   "retinaScale": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.retinaScale),
/* harmony export */   "setsEqual": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setsEqual),
/* harmony export */   "sign": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.sign),
/* harmony export */   "splineCurve": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.splineCurve),
/* harmony export */   "splineCurveMonotone": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.splineCurveMonotone),
/* harmony export */   "supportsEventListenerOptions": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.supportsEventListenerOptions),
/* harmony export */   "throttled": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.throttled),
/* harmony export */   "toDegrees": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toDegrees),
/* harmony export */   "toDimension": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toDimension),
/* harmony export */   "toFont": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toFont),
/* harmony export */   "toFontString": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toFontString),
/* harmony export */   "toLineHeight": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toLineHeight),
/* harmony export */   "toPadding": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toPadding),
/* harmony export */   "toPercentage": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toPercentage),
/* harmony export */   "toRadians": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toRadians),
/* harmony export */   "toTRBL": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toTRBL),
/* harmony export */   "toTRBLCorners": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.toTRBLCorners),
/* harmony export */   "uid": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.uid),
/* harmony export */   "unclipArea": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.unclipArea),
/* harmony export */   "unlistenArrayEvents": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.unlistenArrayEvents),
/* harmony export */   "valueOrDefault": () => (/* reexport safe */ _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__.valueOrDefault)
/* harmony export */ });
/* harmony import */ var _dist_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/helpers.js */ 7739);


/***/ })

}]);
//# sourceMappingURL=src_app_deposit-cheque_deposit-cheque_module_ts.js.map