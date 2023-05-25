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
exports.id = "pages/api/topics/[id]";
exports.ids = ["pages/api/topics/[id]"];
exports.modules = {

/***/ "(api)/./data/db.js":
/*!********************!*\
  !*** ./data/db.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst defaultData = {\n    topics: [\n        {\n            id: 1,\n            title: \"html\",\n            body: \"html is ...\"\n        },\n        {\n            id: 2,\n            title: \"css\",\n            body: \"css is ...\"\n        },\n        {\n            id: 3,\n            title: \"js3\",\n            body: \"js is ...\"\n        }\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL2RiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxjQUFjO0lBQ2xCQyxRQUFRO1FBQ047WUFBRUMsSUFBSTtZQUFHQyxPQUFPO1lBQVFDLE1BQU07UUFBYztRQUM1QztZQUFFRixJQUFJO1lBQUdDLE9BQU87WUFBT0MsTUFBTTtRQUFhO1FBQzFDO1lBQUVGLElBQUk7WUFBR0MsT0FBTztZQUFPQyxNQUFNO1FBQVk7S0FDMUM7QUFDSDtBQUNBLGlFQUFlSixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMDUyMy8uL2RhdGEvZGIuanM/MWU5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWZhdWx0RGF0YSA9IHtcbiAgdG9waWNzOiBbXG4gICAgeyBpZDogMSwgdGl0bGU6ICdodG1sJywgYm9keTogJ2h0bWwgaXMgLi4uJyB9LFxuICAgIHsgaWQ6IDIsIHRpdGxlOiAnY3NzJywgYm9keTogJ2NzcyBpcyAuLi4nIH0sXG4gICAgeyBpZDogMywgdGl0bGU6ICdqczMnLCBib2R5OiAnanMgaXMgLi4uJyB9LFxuICBdLFxufTtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHREYXRhO1xuIl0sIm5hbWVzIjpbImRlZmF1bHREYXRhIiwidG9waWNzIiwiaWQiLCJ0aXRsZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./data/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/topics/[id].js":
/*!**********************************!*\
  !*** ./pages/api/topics/[id].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/db */ \"(api)/./data/db.js\");\n\nfunction handler(req, res) {\n    const { id  } = req.query;\n    switch(req.method){\n        case \"GET\":\n            const topic = _data_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topics.find((t)=>t.id == id);\n            res.status(200).json(topic);\n            break;\n        case \"PATCH\":\n            for(let i = 0; i < _data_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topics.length; i++){\n                if (_data_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topics[i].id == id) {\n                    _data_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topics[i].title = req.body.title;\n                    _data_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topics[i].body = req.body.body;\n                    res.status(200).json(_data_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topics[i]);\n                    break;\n                }\n            }\n            res.status(404).json({\n                message: \"Not found\"\n            });\n            break;\n        case \"DELETE\":\n            // Delete Topic\n            const newTopics = [];\n            for(let i = 0; i < _data_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topics.length; i++){\n                if (_data_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topics[i].id != id) {\n                    newTopics.push(_data_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topics[i]);\n                }\n            }\n            _data_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].topics = newTopics;\n            res.status(200).json({\n                message: \"ok\"\n            });\n            break;\n        default:\n            res.status(405).end(); // Method Not Allowed\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9waWNzL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0M7QUFFbkIsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsTUFBTSxFQUFFQyxHQUFFLEVBQUUsR0FBR0YsSUFBSUcsS0FBSztJQUV4QixPQUFRSCxJQUFJSSxNQUFNO1FBQ2hCLEtBQUs7WUFDSCxNQUFNQyxRQUFRUCw0REFBYyxDQUFDLENBQUNVLElBQU1BLEVBQUVOLEVBQUUsSUFBSUE7WUFDNUNELElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNMO1lBQ3JCLEtBQU07UUFDUixLQUFLO1lBQ0gsSUFBSyxJQUFJTSxJQUFJLEdBQUdBLElBQUliLDhEQUFnQixFQUFFYSxJQUFLO2dCQUN6QyxJQUFJYix1REFBUyxDQUFDYSxFQUFFLENBQUNULEVBQUUsSUFBSUEsSUFBSTtvQkFDekJKLHVEQUFTLENBQUNhLEVBQUUsQ0FBQ0UsS0FBSyxHQUFHYixJQUFJYyxJQUFJLENBQUNELEtBQUs7b0JBQ25DZix1REFBUyxDQUFDYSxFQUFFLENBQUNHLElBQUksR0FBR2QsSUFBSWMsSUFBSSxDQUFDQSxJQUFJO29CQUNqQ2IsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1osdURBQVMsQ0FBQ2EsRUFBRTtvQkFDakMsS0FBTTtnQkFDUixDQUFDO1lBQ0g7WUFDQVYsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUssU0FBUztZQUFZO1lBQzVDLEtBQU07UUFDUixLQUFLO1lBQ0gsZUFBZTtZQUNmLE1BQU1DLFlBQVksRUFBRTtZQUNwQixJQUFLLElBQUlMLElBQUksR0FBR0EsSUFBSWIsOERBQWdCLEVBQUVhLElBQUs7Z0JBQ3pDLElBQUliLHVEQUFTLENBQUNhLEVBQUUsQ0FBQ1QsRUFBRSxJQUFJQSxJQUFJO29CQUN6QmMsVUFBVUMsSUFBSSxDQUFDbkIsdURBQVMsQ0FBQ2EsRUFBRTtnQkFDN0IsQ0FBQztZQUNIO1lBQ0FiLHVEQUFTLEdBQUdrQjtZQUNaZixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFSyxTQUFTO1lBQUs7WUFDckMsS0FBTTtRQUNSO1lBQ0VkLElBQUlRLE1BQU0sQ0FBQyxLQUFLUyxHQUFHLElBQUkscUJBQXFCO1lBQzVDLEtBQU07SUFDVjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wNTIzLy4vcGFnZXMvYXBpL3RvcGljcy9baWRdLmpzPzRhYTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiIGZyb20gJy4uLy4uLy4uL2RhdGEvZGInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcblxuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlICdHRVQnOlxuICAgICAgY29uc3QgdG9waWMgPSBkYi50b3BpY3MuZmluZCgodCkgPT4gdC5pZCA9PSBpZCk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih0b3BpYyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQQVRDSCc6XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRiLnRvcGljcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZGIudG9waWNzW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgZGIudG9waWNzW2ldLnRpdGxlID0gcmVxLmJvZHkudGl0bGU7XG4gICAgICAgICAgZGIudG9waWNzW2ldLmJvZHkgPSByZXEuYm9keS5ib2R5O1xuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRiLnRvcGljc1tpXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogJ05vdCBmb3VuZCcgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdERUxFVEUnOlxuICAgICAgLy8gRGVsZXRlIFRvcGljXG4gICAgICBjb25zdCBuZXdUb3BpY3MgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGIudG9waWNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChkYi50b3BpY3NbaV0uaWQgIT0gaWQpIHtcbiAgICAgICAgICBuZXdUb3BpY3MucHVzaChkYi50b3BpY3NbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkYi50b3BpY3MgPSBuZXdUb3BpY3M7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdvaycgfSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgpOyAvLyBNZXRob2QgTm90IEFsbG93ZWRcbiAgICAgIGJyZWFrO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsIm1ldGhvZCIsInRvcGljIiwidG9waWNzIiwiZmluZCIsInQiLCJzdGF0dXMiLCJqc29uIiwiaSIsImxlbmd0aCIsInRpdGxlIiwiYm9keSIsIm1lc3NhZ2UiLCJuZXdUb3BpY3MiLCJwdXNoIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/topics/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/topics/[id].js"));
module.exports = __webpack_exports__;

})();