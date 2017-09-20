webpackJsonp([0],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_index__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rmc_tooltip_assets_bootstrap_less__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rmc_tooltip_assets_bootstrap_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rmc_tooltip_assets_bootstrap_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_placements__ = __webpack_require__(91);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





// do not use rc-tooltip/lib/placements


var Test = function (_Component) {
    _inherits(Test, _Component);

    function Test() {
        _classCallCheck(this, Test);

        var _this = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));

        _this.state = {
            destroyTooltipOnHide: false,
            placement: 'right',
            offsetX: __WEBPACK_IMPORTED_MODULE_4__src_placements__["a" /* default */].right.offset[0],
            offsetY: __WEBPACK_IMPORTED_MODULE_4__src_placements__["a" /* default */].right.offset[1],
            transitionName: ''
        };
        _this.onPlacementChange = function (e) {
            var placement = e.target.value;
            var offset = __WEBPACK_IMPORTED_MODULE_4__src_placements__["a" /* default */][placement].offset;
            _this.setState({
                placement: e.target.value,
                offsetX: offset[0],
                offsetY: offset[1]
            });
        };
        _this.onTransitionChange = function (e) {
            _this.setState({
                transitionName: e.target.checked ? e.target.value : ''
            });
        };
        _this.onOffsetXChange = function (e) {
            var targetValue = e.target.value;
            _this.setState({
                offsetX: targetValue || undefined
            });
        };
        _this.onOffsetYChange = function (e) {
            var targetValue = e.target.value;
            _this.setState({
                offsetY: targetValue || undefined
            });
        };
        _this.onVisibleChange = function (visible) {
            /* tslint:disable:no-console */
            console.log('tooltip', visible);
        };
        _this.onDestroyCheck = function () {
            _this.setState({
                destroyTooltipOnHide: !_this.state.destroyTooltipOnHide
            });
        };
        _this.preventDefault = function (e) {
            e.preventDefault();
        };
        return _this;
    }

    _createClass(Test, [{
        key: 'render',
        value: function render() {
            var state = this.state;
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { style: { margin: '10px 20px' } },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        null,
                        'placement:',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'select',
                            { value: this.state.placement, onChange: this.onPlacementChange },
                            Object.keys(__WEBPACK_IMPORTED_MODULE_4__src_placements__["a" /* default */]).map(function (p) {
                                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'option',
                                    { key: p, value: p },
                                    p
                                );
                            })
                        )
                    ),
                    '\xA0\xA0\xA0\xA0',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { value: 'rmc-tooltip-zoom', type: 'checkbox', onChange: this.onTransitionChange, checked: this.state.transitionName === 'rmc-tooltip-zoom' }),
                        'transitionName'
                    ),
                    '\xA0\xA0\xA0\xA0',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'checkbox', onChange: this.onDestroyCheck, checked: this.state.destroyTooltipOnHide }),
                        'destroyTooltipOnHide'
                    ),
                    '\xA0\xA0\xA0\xA0',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        null,
                        'offsetX:',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: state.offsetX, onChange: this.onOffsetXChange, style: { width: 50 } })
                    ),
                    '\xA0\xA0\xA0\xA0',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'label',
                        null,
                        'offsetY:',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: state.offsetY, onChange: this.onOffsetYChange, style: { width: 50 } })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { style: { margin: 100 } },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2__src_index__["a" /* default */],
                        { placement: this.state.placement, destroyTooltipOnHide: this.state.destroyTooltipOnHide, onVisibleChange: this.onVisibleChange, overlay: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { style: { height: 50, width: 50 } },
                                'i am a tooltip'
                            ), align: {
                                offset: [this.state.offsetX, this.state.offsetY]
                            }, transitionName: this.state.transitionName },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { style: { height: 100, width: 100, border: '1px solid red' } },
                            'trigger'
                        )
                    )
                )
            );
        }
    }]);

    return Test;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Test, null), document.getElementById('__react-content'));

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(146);


/***/ })

},[318]);
//# sourceMappingURL=simple.js.map