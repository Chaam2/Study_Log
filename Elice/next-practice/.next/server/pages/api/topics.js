"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/topics";
exports.ids = ["pages/api/topics"];
exports.modules = {

/***/ "(api)/./data/db.js":
/*!********************!*\
  !*** ./data/db.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst defaultData = {\n    topics: [\n        {\n            id: 1,\n            title: \"html\",\n            body: \"html is ...\"\n        },\n        {\n            id: 2,\n            title: \"css\",\n            body: \"css is ...\"\n        },\n        {\n            id: 3,\n            title: \"js3\",\n            body: \"js is ...\"\n        }\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL2RiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxjQUFjO0lBQ2xCQyxRQUFRO1FBQ047WUFBRUMsSUFBSTtZQUFHQyxPQUFPO1lBQVFDLE1BQU07UUFBYztRQUM1QztZQUFFRixJQUFJO1lBQUdDLE9BQU87WUFBT0MsTUFBTTtRQUFhO1FBQzFDO1lBQUVGLElBQUk7WUFBR0MsT0FBTztZQUFPQyxNQUFNO1FBQVk7S0FDMUM7QUFDSDtBQUNBLGlFQUFlSixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMDUyMy8uL2RhdGEvZGIuanM/MWU5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWZhdWx0RGF0YSA9IHtcbiAgdG9waWNzOiBbXG4gICAgeyBpZDogMSwgdGl0bGU6ICdodG1sJywgYm9keTogJ2h0bWwgaXMgLi4uJyB9LFxuICAgIHsgaWQ6IDIsIHRpdGxlOiAnY3NzJywgYm9keTogJ2NzcyBpcyAuLi4nIH0sXG4gICAgeyBpZDogMywgdGl0bGU6ICdqczMnLCBib2R5OiAnanMgaXMgLi4uJyB9LFxuICBdLFxufTtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHREYXRhO1xuIl0sIm5hbWVzIjpbImRlZmF1bHREYXRhIiwidG9waWNzIiwiaWQiLCJ0aXRsZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./data/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/topics/index.js":
/*!***********************************!*\
  !*** ./pages/api/topics/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/db */ \"(api)/./data/db.js\");\n\nfunction handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            res.status(200).json(_data_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topics);\n            break;\n        case \"POST\":\n            const newTopic = {\n                id: Date.now().toString(),\n                title: req.body.title,\n                body: req.body.body\n            };\n            _data_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topics.push(newTopic);\n            res.status(201).json(newTopic);\n            break;\n        default:\n            res.status(405).end(); // Method Not Allowed\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9waWNzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBQ25CLFNBQVNDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLE9BQVFELElBQUlFLE1BQU07UUFDaEIsS0FBSztZQUNIRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTix1REFBUztZQUM5QixLQUFNO1FBQ1IsS0FBSztZQUNILE1BQU1RLFdBQVc7Z0JBQ2ZDLElBQUlDLEtBQUtDLEdBQUcsR0FBR0MsUUFBUTtnQkFDdkJDLE9BQU9YLElBQUlZLElBQUksQ0FBQ0QsS0FBSztnQkFDckJDLE1BQU1aLElBQUlZLElBQUksQ0FBQ0EsSUFBSTtZQUNyQjtZQUNBZCw0REFBYyxDQUFDUTtZQUNmTCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRTtZQUNyQixLQUFNO1FBQ1I7WUFDRUwsSUFBSUUsTUFBTSxDQUFDLEtBQUtXLEdBQUcsSUFBSSxxQkFBcUI7WUFDNUMsS0FBTTtJQUNWO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzA1MjMvLi9wYWdlcy9hcGkvdG9waWNzL2luZGV4LmpzP2VlN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gJy4uLy4uLy4uL2RhdGEvZGInO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlICdHRVQnOlxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGIudG9waWNzKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgY29uc3QgbmV3VG9waWMgPSB7XG4gICAgICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgICAgIHRpdGxlOiByZXEuYm9keS50aXRsZSxcbiAgICAgICAgYm9keTogcmVxLmJvZHkuYm9keSxcbiAgICAgIH07XG4gICAgICBkYi50b3BpY3MucHVzaChuZXdUb3BpYyk7XG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbihuZXdUb3BpYyk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgpOyAvLyBNZXRob2QgTm90IEFsbG93ZWRcbiAgICAgIGJyZWFrO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsInRvcGljcyIsIm5ld1RvcGljIiwiaWQiLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJ0aXRsZSIsImJvZHkiLCJwdXNoIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/topics/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/topics/index.js"));
module.exports = __webpack_exports__;

})();