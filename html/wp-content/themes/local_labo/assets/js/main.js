/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _keydown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keydown.js */ \"./src/js/keydown.js\");\n/* harmony import */ var _keydown_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_keydown_js__WEBPACK_IMPORTED_MODULE_1__);\n// ============================================================\n//  src/index.js\n// ============================================================\n\n// メインのSCSSファイルをインポート\n\n\n// JavaScriptモジュールをインポート\n\n// import './js/customizer.js';\n\n// 画像をインポート（必要な場合）\n// import './images/logo.png';\n\n// WordPressのjQueryを使用する場合の例\njQuery(document).ready(function ($) {\n  // カスタムスクリプトをここに記述\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/keydown.js":
/*!***************************!*\
  !*** ./src/js/keydown.js ***!
  \***************************/
/***/ (() => {

eval("// 即時関数\n(function () {\n  // キーダウンイベント\n  document.addEventListener('keydown', function (event) {\n    // shiftの左右を区別する\n    var keyName = event.key;\n    if (keyName === 'Shift') {\n      keyName = event.location === 1 ? 'lshift' : 'rshift';\n    }\n\n    // keyを数値に変換するMap\n    var keyMap = {\n      '2': 1,\n      '3': 2,\n      '4': 3,\n      '5': 4,\n      '6': 5,\n      '7': 6,\n      '8': 7,\n      '9': 8,\n      '0': 9,\n      '-': 10,\n      '^': 11,\n      '¥': 12,\n      'q': 13,\n      'w': 14,\n      'e': 15,\n      'r': 16,\n      't': 17,\n      'y': 18,\n      'u': 19,\n      'i': 20,\n      'o': 21,\n      'p': 22,\n      '@': 23,\n      '[': 24,\n      'a': 25,\n      's': 26,\n      'd': 27,\n      'f': 28,\n      'g': 29,\n      'h': 30,\n      'j': 31,\n      'k': 32,\n      'l': 33,\n      ';': 34,\n      ':': 35,\n      ']': 36,\n      'lshift': 37,\n      'z': 38,\n      'x': 39,\n      'c': 40,\n      'v': 41,\n      'b': 42,\n      'n': 43,\n      'm': 44,\n      ',': 45,\n      '.': 46,\n      '/': 47,\n      'rshift': 48\n    };\n    // keyName が keyMap に存在しない場合は ランダム値 を代入\n    var randomNumber = Math.floor(Math.random() * 48) + 1;\n    var keyNumber = keyMap[keyName] ? keyMap[keyName] : randomNumber;\n\n    // キー名を表示\n    var keyNameElement = document.getElementById('js-key-name');\n    var keyNumberElement = document.getElementById('js-key-number');\n    keyNameElement.textContent = keyNumber;\n    keyNumberElement.textContent = keyName;\n\n    // 押された keyNumber と一致する js-pallet-cell を active にする\n    var pressedCellElement = document.querySelector('.js-pallet-cell[data-key-number=\"' + keyNumber + '\"]');\n    var pressedCount = Number(pressedCellElement.dataset.pressedCount);\n    if (pressedCellElement.classList.contains('is-active')) {\n      if (5 > pressedCount) {\n        pressedCellElement.dataset.pressedCount++;\n        if (pressedCellElement.dataset.pressedCount == 5) {\n          setTimeout(function () {\n            pressedCellElement.classList.remove('is-active');\n            pressedCellElement.dataset.pressedCount = 0;\n          }, 600);\n        }\n      }\n    } else {\n      pressedCellElement.classList.add('is-active');\n    }\n  });\n})();\n\n//# sourceURL=webpack:///./src/js/keydown.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;