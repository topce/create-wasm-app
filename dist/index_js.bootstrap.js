"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcreate_wasm_app"] = self["webpackChunkcreate_wasm_app"] || []).push([["index_js"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cirilica__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cirilica */ \"./node_modules/cirilica/cirilica_bg.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([cirilica__WEBPACK_IMPORTED_MODULE_0__]);\ncirilica__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\ndocument.title = cirilica__WEBPACK_IMPORTED_MODULE_0__.to_serbian_cyrillic('anja voli milovana');\n\ndocument.getElementById('prepisi').onclick = function () {\n  myFunction();\n};\n\nfunction myFunction(ev) {\n  document.getElementById('cirilica').value = cirilica__WEBPACK_IMPORTED_MODULE_0__.to_serbian_cyrillic(document.getElementById('latinica').value);\n  \n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://create-wasm-app/./index.js?");

/***/ }),

/***/ "./node_modules/cirilica/cirilica_bg.js":
/*!**********************************************!*\
  !*** ./node_modules/cirilica/cirilica_bg.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"to_serbian_cyrillic\": () => (/* binding */ to_serbian_cyrillic)\n/* harmony export */ });\n/* harmony import */ var _cirilica_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cirilica_bg.wasm */ \"./node_modules/cirilica/cirilica_bg.wasm\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_cirilica_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);\n_cirilica_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_cirilica_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedInt32Memory0 = new Int32Array();\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(_cirilica_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n* @param {string} word\n* @returns {string}\n*/\nfunction to_serbian_cyrillic(word) {\n    try {\n        const retptr = _cirilica_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);\n        const ptr0 = passStringToWasm0(word, _cirilica_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _cirilica_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);\n        const len0 = WASM_VECTOR_LEN;\n        _cirilica_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.to_serbian_cyrillic(retptr, ptr0, len0);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        _cirilica_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);\n        _cirilica_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1);\n    }\n}\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://create-wasm-app/./node_modules/cirilica/cirilica_bg.js?");

/***/ }),

/***/ "./node_modules/cirilica/cirilica_bg.wasm":
/*!************************************************!*\
  !*** ./node_modules/cirilica/cirilica_bg.wasm ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.v(exports, module.id, \"75f89763452b9192d830\");\n\n//# sourceURL=webpack://create-wasm-app/./node_modules/cirilica/cirilica_bg.wasm?");

/***/ })

}]);