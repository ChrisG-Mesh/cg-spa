"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MeshConnectButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MeshConnectButton */ \"./src/components/MeshConnectButton.js\");\n/* harmony import */ var _components_BrokerConnectButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BrokerConnectButton */ \"./src/components/BrokerConnectButton.js\");\n/* harmony import */ var _components_HoldingsButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HoldingsButton */ \"./src/components/HoldingsButton.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar App = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"34aeb688-decb-485f-9d80-b66466783394\"), 2), integrationId = _useState[0], setIntegrationId = _useState[1]; // hard coded Metamask since this is the first choice\n    var authLink = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    var linkToken = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), authToken = _useState1[0], setAuthToken = _useState1[1]; // State to hold the auth token\n    var handleIntegrationChange = function(event) {\n        setIntegrationId(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: styles.heading,\n                children: \"Try Mesh Below\"\n            }, void 0, false, {\n                fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.dropdownContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"integrationId\",\n                        children: \"Select Broker: \"\n                    }, void 0, false, {\n                        fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"integrationId\",\n                        value: integrationId,\n                        onChange: handleIntegrationChange,\n                        style: styles.dropdown,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"34aeb688-decb-485f-9d80-b66466783394\",\n                                children: \"Metamask\"\n                            }, void 0, false, {\n                                fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"47624467-e52e-4938-a41a-7926b6c27acf\",\n                                children: \"Coinbase\"\n                            }, void 0, false, {\n                                fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.buttonContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BrokerConnectButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    authLink: authLink,\n                    linkToken: linkToken,\n                    integrationId: integrationId\n                }, void 0, false, {\n                    fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_6__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_7__._)({}, styles.buttonContainer), {\n                    marginTop: \"20px\"\n                }),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MeshConnectButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    authLink: authLink,\n                    linkToken: linkToken,\n                    setAuthToken: setAuthToken\n                }, void 0, false, {\n                    fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.spacing\n            }, void 0, false, {\n                fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Below is the button to review the User Holdings\",\n                    authToken ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HoldingsButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        authToken: authToken\n                    }, void 0, false, {\n                        fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: styles.errorContainer,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: styles.errorMessage,\n                            children: \"Auth token is not set. Please connect to Mesh first.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/christopher.gentibano/API-testing/cg-spa/mesh-web-app/src/pages/index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(App, \"GA4LJooGGjJEsuLfq3p0LkXSEuc=\");\n_c = App;\nvar styles = {\n    container: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        height: \"100vh\",\n        fontFamily: \"Arial, sans-serif\",\n        backgroundColor: \"#f0f0f0\",\n        padding: \"20px\"\n    },\n    heading: {\n        fontSize: \"2rem\",\n        marginBottom: \"20px\"\n    },\n    dropdownContainer: {\n        marginBottom: \"20px\"\n    },\n    dropdown: {\n        padding: \"10px\",\n        fontSize: \"1rem\",\n        borderRadius: \"5px\",\n        border: \"1px solid #ccc\",\n        cursor: \"pointer\"\n    },\n    buttonContainer: {\n        display: \"flex\",\n        marginBottom: \"20px\"\n    },\n    button: {\n        padding: \"10px 20px\",\n        fontSize: \"1rem\",\n        marginRight: \"10px\",\n        borderRadius: \"5px\",\n        border: \"none\",\n        backgroundColor: \"#007bff\",\n        color: \"white\",\n        cursor: \"pointer\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDd0I7QUFDSTtBQUNWO0FBRTFELElBQU1LLE1BQU07O0lBQ1YsSUFBMENKLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyw2Q0FBNUNLLGdCQUFtQ0wsY0FBcEJNLG1CQUFvQk4sY0FBa0QscURBQXFEO0lBQ2pKLElBQU1PLFdBQVdQLCtDQUFRQSxDQUFDO0lBQzFCLElBQU1RLFlBQVlSLCtDQUFRQSxDQUFDO0lBQzNCLElBQWtDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsV0FBcENTLFlBQTJCVCxlQUFoQlUsZUFBZ0JWLGVBQWdCLCtCQUErQjtJQUVqRixJQUFNVywwQkFBMEIsU0FBQ0M7UUFDL0JOLGlCQUFpQk0sTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ3JDO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLE9BQU9DLE9BQU9DLFNBQVM7OzBCQUMxQiw4REFBQ0M7Z0JBQUdILE9BQU9DLE9BQU9HLE9BQU87MEJBQUU7Ozs7OzswQkFFM0IsOERBQUNMO2dCQUFJQyxPQUFPQyxPQUFPSSxpQkFBaUI7O2tDQUNsQyw4REFBQ0M7d0JBQU1DLFNBQVE7a0NBQWdCOzs7Ozs7a0NBQy9CLDhEQUFDQzt3QkFBT0MsSUFBRzt3QkFBZ0JYLE9BQU9UO3dCQUFlcUIsVUFBVWY7d0JBQXlCSyxPQUFPQyxPQUFPVSxRQUFROzswQ0FDeEcsOERBQUNDO2dDQUFPZCxPQUFNOzBDQUF1Qzs7Ozs7OzBDQUNyRCw4REFBQ2M7Z0NBQU9kLE9BQU07MENBQXVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3pELDhEQUFDQztnQkFBSUMsT0FBT0MsT0FBT1ksZUFBZTswQkFDaEMsNEVBQUMzQix1RUFBbUJBO29CQUFDSyxVQUFVQTtvQkFBVUMsV0FBV0E7b0JBQVdILGVBQWVBOzs7Ozs7Ozs7OzswQkFHaEYsOERBQUNVO2dCQUFJQyxPQUFPLHNJQUFLQyxPQUFPWSxlQUFlO29CQUFFQyxXQUFXOzswQkFDbEQsNEVBQUM3QixxRUFBaUJBO29CQUFDTSxVQUFVQTtvQkFBVUMsV0FBV0E7b0JBQVdFLGNBQWNBOzs7Ozs7Ozs7OzswQkFHN0UsOERBQUNLO2dCQUFJQyxPQUFPQyxPQUFPYyxPQUFPOzs7Ozs7MEJBQzFCLDhEQUFDaEI7O29CQUFJO29CQUVGTiwwQkFDQyw4REFBQ04sa0VBQWNBO3dCQUFDTSxXQUFXQTs7Ozs7OENBRTNCLDhEQUFDTTt3QkFBSUMsT0FBT0MsT0FBT2UsY0FBYztrQ0FDL0IsNEVBQUNDOzRCQUFFakIsT0FBT0MsT0FBT2lCLFlBQVk7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNDO0dBNUNNOUI7S0FBQUE7QUE4Q04sSUFBTWEsU0FBUztJQUNiQyxXQUFXO1FBQ1RpQixTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsWUFBWTtRQUNaQyxnQkFBZ0I7UUFDaEJDLFFBQVE7UUFDUkMsWUFBWTtRQUNaQyxpQkFBaUI7UUFDakJDLFNBQVM7SUFDWDtJQUNBdEIsU0FBUztRQUNQdUIsVUFBVTtRQUNWQyxjQUFjO0lBQ2hCO0lBQ0F2QixtQkFBbUI7UUFDakJ1QixjQUFjO0lBQ2hCO0lBQ0FqQixVQUFVO1FBQ1JlLFNBQVM7UUFDVEMsVUFBVTtRQUNWRSxjQUFjO1FBQ2RDLFFBQVE7UUFDUkMsUUFBUTtJQUNWO0lBQ0FsQixpQkFBaUI7UUFDZk0sU0FBUztRQUNUUyxjQUFjO0lBQ2hCO0lBQ0FJLFFBQVE7UUFDTk4sU0FBUztRQUNUQyxVQUFVO1FBQ1ZNLGFBQWE7UUFDYkosY0FBYztRQUNkQyxRQUFRO1FBQ1JMLGlCQUFpQjtRQUNqQlMsT0FBTztRQUNQSCxRQUFRO0lBQ1Y7QUFDRjtBQUVBLCtEQUFlM0MsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVzaENvbm5lY3RCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9NZXNoQ29ubmVjdEJ1dHRvbic7XG5pbXBvcnQgQnJva2VyQ29ubmVjdEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0Jyb2tlckNvbm5lY3RCdXR0b24nO1xuaW1wb3J0IEhvbGRpbmdzQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvSG9sZGluZ3NCdXR0b24nO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbnRlZ3JhdGlvbklkLCBzZXRJbnRlZ3JhdGlvbklkXSA9IHVzZVN0YXRlKCczNGFlYjY4OC1kZWNiLTQ4NWYtOWQ4MC1iNjY0NjY3ODMzOTQnKTsgLy8gaGFyZCBjb2RlZCBNZXRhbWFzayBzaW5jZSB0aGlzIGlzIHRoZSBmaXJzdCBjaG9pY2VcbiAgY29uc3QgYXV0aExpbmsgPSB1c2VTdGF0ZShudWxsKTsgXG4gIGNvbnN0IGxpbmtUb2tlbiA9IHVzZVN0YXRlKG51bGwpOyBcbiAgY29uc3QgW2F1dGhUb2tlbiwgc2V0QXV0aFRva2VuXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBTdGF0ZSB0byBob2xkIHRoZSBhdXRoIHRva2VuXG5cbiAgY29uc3QgaGFuZGxlSW50ZWdyYXRpb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRJbnRlZ3JhdGlvbklkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMSBzdHlsZT17c3R5bGVzLmhlYWRpbmd9PlRyeSBNZXNoIEJlbG93PC9oMT5cblxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmRyb3Bkb3duQ29udGFpbmVyfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnRlZ3JhdGlvbklkXCI+U2VsZWN0IEJyb2tlcjogPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBpZD1cImludGVncmF0aW9uSWRcIiB2YWx1ZT17aW50ZWdyYXRpb25JZH0gb25DaGFuZ2U9e2hhbmRsZUludGVncmF0aW9uQ2hhbmdlfSBzdHlsZT17c3R5bGVzLmRyb3Bkb3dufT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzRhZWI2ODgtZGVjYi00ODVmLTlkODAtYjY2NDY2NzgzMzk0XCI+TWV0YW1hc2s8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNDc2MjQ0NjctZTUyZS00OTM4LWE0MWEtNzkyNmI2YzI3YWNmXCI+Q29pbmJhc2U8L29wdGlvbj5cbiAgICAgICAgICB7LyogQWRkIG1vcmUgb3B0aW9ucyBhcyBuZWVkZWQgKi99XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICA8QnJva2VyQ29ubmVjdEJ1dHRvbiBhdXRoTGluaz17YXV0aExpbmt9IGxpbmtUb2tlbj17bGlua1Rva2VufSBpbnRlZ3JhdGlvbklkPXtpbnRlZ3JhdGlvbklkfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgLi4uc3R5bGVzLmJ1dHRvbkNvbnRhaW5lciwgbWFyZ2luVG9wOiAnMjBweCcgfX0+XG4gICAgICAgIDxNZXNoQ29ubmVjdEJ1dHRvbiBhdXRoTGluaz17YXV0aExpbmt9IGxpbmtUb2tlbj17bGlua1Rva2VufSBzZXRBdXRoVG9rZW49e3NldEF1dGhUb2tlbn0vPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5zcGFjaW5nfSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgQmVsb3cgaXMgdGhlIGJ1dHRvbiB0byByZXZpZXcgdGhlIFVzZXIgSG9sZGluZ3NcbiAgICAgICAge2F1dGhUb2tlbiA/IChcbiAgICAgICAgICA8SG9sZGluZ3NCdXR0b24gYXV0aFRva2VuPXthdXRoVG9rZW59IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmVycm9yQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZXJyb3JNZXNzYWdlfT5BdXRoIHRva2VuIGlzIG5vdCBzZXQuIFBsZWFzZSBjb25uZWN0IHRvIE1lc2ggZmlyc3QuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIGZvbnRGYW1pbHk6ICdBcmlhbCwgc2Fucy1zZXJpZicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2YwZjBmMCcsXG4gICAgcGFkZGluZzogJzIwcHgnXG4gIH0sXG4gIGhlYWRpbmc6IHtcbiAgICBmb250U2l6ZTogJzJyZW0nLFxuICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnXG4gIH0sXG4gIGRyb3Bkb3duQ29udGFpbmVyOiB7XG4gICAgbWFyZ2luQm90dG9tOiAnMjBweCdcbiAgfSxcbiAgZHJvcGRvd246IHtcbiAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9LFxuICBidXR0b25Db250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMjBweCdcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgcGFkZGluZzogJzEwcHggMjBweCcsXG4gICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwN2JmZicsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgY3Vyc29yOiAncG9pbnRlcidcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJNZXNoQ29ubmVjdEJ1dHRvbiIsIkJyb2tlckNvbm5lY3RCdXR0b24iLCJIb2xkaW5nc0J1dHRvbiIsIkFwcCIsImludGVncmF0aW9uSWQiLCJzZXRJbnRlZ3JhdGlvbklkIiwiYXV0aExpbmsiLCJsaW5rVG9rZW4iLCJhdXRoVG9rZW4iLCJzZXRBdXRoVG9rZW4iLCJoYW5kbGVJbnRlZ3JhdGlvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJzdHlsZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImgxIiwiaGVhZGluZyIsImRyb3Bkb3duQ29udGFpbmVyIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJvbkNoYW5nZSIsImRyb3Bkb3duIiwib3B0aW9uIiwiYnV0dG9uQ29udGFpbmVyIiwibWFyZ2luVG9wIiwic3BhY2luZyIsImVycm9yQ29udGFpbmVyIiwicCIsImVycm9yTWVzc2FnZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwiZm9udEZhbWlseSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImN1cnNvciIsImJ1dHRvbiIsIm1hcmdpblJpZ2h0IiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});