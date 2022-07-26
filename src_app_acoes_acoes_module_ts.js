"use strict";
(self["webpackChunkbyte_bank_broker"] = self["webpackChunkbyte_bank_broker"] || []).push([["src_app_acoes_acoes_module_ts"],{

/***/ 6808:
/*!***********************************************!*\
  !*** ./src/app/acoes/acoes-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcoesRoutingModule": () => (/* binding */ AcoesRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _acoes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acoes.component */ 3947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _acoes_component__WEBPACK_IMPORTED_MODULE_0__.AcoesComponent,
    },
];
class AcoesRoutingModule {
}
AcoesRoutingModule.ɵfac = function AcoesRoutingModule_Factory(t) { return new (t || AcoesRoutingModule)(); };
AcoesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AcoesRoutingModule });
AcoesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AcoesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3947:
/*!******************************************!*\
  !*** ./src/app/acoes/acoes.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcoesComponent": () => (/* binding */ AcoesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _acoes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acoes.service */ 287);
/* harmony import */ var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @po-ui/ng-components */ 9306);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _card_acoes_card_acoes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-acoes/card-acoes.component */ 3571);








function AcoesComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-card-acoes", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const acao_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("acao", acao_r5);
} }
function AcoesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AcoesComponent_div_4_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const acoes_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", acoes_r3);
} }
function AcoesComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "N\u00E3o h\u00E1 dados");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const ESPERA_DIGITACAO = 300;
class AcoesComponent {
    constructor(acoesService) {
        this.acoesService = acoesService;
        this.acoesInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.todasAcoes$ = this.acoesService.getAcoes().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
            console.log('fluxo inicial');
        }));
        this.filtroPeloInput$ = this.acoesInput.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(ESPERA_DIGITACAO), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
            console.log('fluxo do filtro');
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(console.log), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)((valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.switchMap)((valorDigitado) => this.acoesService.getAcoes(valorDigitado)));
        this.acoes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this.todasAcoes$, this.filtroPeloInput$);
    }
}
AcoesComponent.ɵfac = function AcoesComponent_Factory(t) { return new (t || AcoesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_acoes_service__WEBPACK_IMPORTED_MODULE_0__.AcoesService)); };
AcoesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AcoesComponent, selectors: [["app-acoes"]], decls: 8, vars: 5, consts: [["p-title", "A\u00E7\u00F5es"], [1, "po-row"], [1, "po-xl-6", "po-lg-6", "po-md-6", "po-sm-6"], ["p-label", "A\u00E7\u00F5es", 3, "formControl"], ["class", "td-page-wrapper", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "td-page-wrapper"], ["class", "po-md-4", 4, "ngFor", "ngForOf"], [1, "po-md-4"], [3, "acao"]], template: function AcoesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "po-page-default", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "po-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AcoesComponent_div_4_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AcoesComponent_ng_template_6_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.acoesInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, ctx.acoes$))("ngIfElse", _r1);
    } }, directives: [_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_10__.PoPageDefaultComponent, _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_10__.PoInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _card_acoes_card_acoes_component__WEBPACK_IMPORTED_MODULE_1__.CardAcoesComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY29lcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3984:
/*!***************************************!*\
  !*** ./src/app/acoes/acoes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcoesModule": () => (/* binding */ AcoesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _acoes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acoes-routing.module */ 6808);
/* harmony import */ var _acoes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acoes.component */ 3947);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 5349);
/* harmony import */ var _card_acoes_card_acoes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-acoes/card-acoes.component */ 3571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class AcoesModule {
}
AcoesModule.ɵfac = function AcoesModule_Factory(t) { return new (t || AcoesModule)(); };
AcoesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AcoesModule });
AcoesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _acoes_routing_module__WEBPACK_IMPORTED_MODULE_0__.AcoesRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AcoesModule, { declarations: [_acoes_component__WEBPACK_IMPORTED_MODULE_1__.AcoesComponent, _card_acoes_card_acoes_component__WEBPACK_IMPORTED_MODULE_3__.CardAcoesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _acoes_routing_module__WEBPACK_IMPORTED_MODULE_0__.AcoesRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 287:
/*!****************************************!*\
  !*** ./src/app/acoes/acoes.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcoesService": () => (/* binding */ AcoesService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 4766);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4276);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);





const API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
class AcoesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAcoes(valor) {
        const params = valor ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().append('valor', valor) : undefined;
        return this.httpClient.get(`${API}/acoes`, { params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((valor) => console.table(valor)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.pluck)('payload'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((acoes) => acoes.sort((acaoA, acaoB) => this.ordenaPorCodigo(acaoA, acaoB))));
    }
    ordenaPorCodigo(acaoA, acaoB) {
        if (acaoA.codigo > acaoB.codigo) {
            return 1;
        }
        else if (acaoA.codigo > acaoB.codigo) {
            return -1;
        }
        else
            return 0;
    }
}
AcoesService.ɵfac = function AcoesService_Factory(t) { return new (t || AcoesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AcoesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AcoesService, factory: AcoesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3571:
/*!**********************************************************!*\
  !*** ./src/app/acoes/card-acoes/card-acoes.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardAcoesComponent": () => (/* binding */ CardAcoesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @po-ui/ng-components */ 9306);


class CardAcoesComponent {
    constructor() { }
    ngOnInit() { }
}
CardAcoesComponent.ɵfac = function CardAcoesComponent_Factory(t) { return new (t || CardAcoesComponent)(); };
CardAcoesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardAcoesComponent, selectors: [["app-card-acoes"]], inputs: { acao: "acao" }, decls: 1, vars: 3, consts: [["p-size", "po-sm-12", 3, "p-title", "p-primary-label", "p-secondary-label"]], template: function CardAcoesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "po-widget", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("p-title", ctx.acao.codigo)("p-primary-label", ctx.acao.descricao)("p-secondary-label", ctx.acao.preco);
    } }, directives: [_po_ui_ng_components__WEBPACK_IMPORTED_MODULE_1__.PoWidgetComponent], styles: ["app-card-acoes .po-widget {\n  margin: 0 10px 10px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtYWNvZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJjYXJkLWFjb2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtY2FyZC1hY29lcyAucG8td2lkZ2V0IHtcbiAgbWFyZ2luOiAwIDEwcHggMTBweCAwO1xufVxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 4276:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/pluck.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pluck": () => (/* binding */ pluck)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ 635);

function pluck(...properties) {
    const length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return (0,_map__WEBPACK_IMPORTED_MODULE_0__.map)((x) => {
        let currentProp = x;
        for (let i = 0; i < length; i++) {
            const p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    });
}


/***/ })

}]);
//# sourceMappingURL=src_app_acoes_acoes_module_ts.js.map