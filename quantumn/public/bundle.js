/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_checkBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/checkBox */ \"./src/utils/checkBox.ts\");\n/* harmony import */ var _utils_radioGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/radioGroup */ \"./src/utils/radioGroup.ts\");\n/* harmony import */ var _constants_courses_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/courses.json */ \"./src/constants/courses.json\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/index */ \"./src/utils/index.ts\");\n\n\n\n\n/* dashboard */\nconst dashboardItemsElement = document.querySelector('#dashboard-items');\nconst courseCountElement = document.querySelector('#course-count');\nconst courseCountHeadingElement = document.querySelector('#course-count-heading');\nif (courseCountElement)\n    courseCountElement.innerHTML = `Showing ${_constants_courses_json__WEBPACK_IMPORTED_MODULE_2__.length} of ${_constants_courses_json__WEBPACK_IMPORTED_MODULE_2__.length} courses`;\nif (courseCountHeadingElement)\n    courseCountHeadingElement.innerHTML = `${_constants_courses_json__WEBPACK_IMPORTED_MODULE_2__.length} <span>Courses</span>`;\nfor (const course of _constants_courses_json__WEBPACK_IMPORTED_MODULE_2__) {\n    if (dashboardItemsElement)\n        dashboardItemsElement.innerHTML += (0,_utils_index__WEBPACK_IMPORTED_MODULE_3__.getDashboardItem)(course);\n}\n/* login */\nconst login = (user) => {\n    console.log(user);\n};\nconst typeElement = document.querySelector(\"#type\");\nconst rememberMeElement = document.querySelector(\"#remember-me\");\nconst stateSelect = document.querySelector('#state');\nconst districtSelect = document.querySelector('#district');\nconst usernameInput = document.querySelector('#username');\nconst passwordInput = document.querySelector('#password');\nconst loginButton = document.querySelector('#login-button');\nconst showPasswordElement = document.querySelector('#show-password');\nlet typeRadioButtons = new _utils_radioGroup__WEBPACK_IMPORTED_MODULE_1__[\"default\"](typeElement);\nlet rememberMeCheckBox = new _utils_checkBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"](rememberMeElement, \"assets/icons/checkbox-checked.svg\", \"assets/icons/checkbox-unchecked.svg\");\nnew _utils_checkBox__WEBPACK_IMPORTED_MODULE_0__[\"default\"](showPasswordElement, \"assets/icons/preview.svg\", \"assets/icons/preview-hide.png\", (checked) => {\n    if (checked)\n        passwordInput.type = 'text';\n    else\n        passwordInput.type = 'password';\n});\nloginButton.addEventListener('click', () => {\n    /* perform input validations */\n    const selectedRadioButton = typeRadioButtons.radioButtons[typeRadioButtons.selectedIndex];\n    login({\n        username: usernameInput.value,\n        password: passwordInput.value,\n        state: stateSelect.value,\n        district: districtSelect.value,\n        type: selectedRadioButton.getAttribute('name'),\n        rememberMe: rememberMeCheckBox.checked,\n    });\n});\n\n\n//# sourceURL=webpack://quantum/./src/index.ts?");

/***/ }),

/***/ "./src/utils/checkBox.ts":
/*!*******************************!*\
  !*** ./src/utils/checkBox.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass CheckBox {\n    constructor(checkBox, checkedImage, uncheckedImage, callback) {\n        this.checkBox = checkBox;\n        this.checked = false;\n        this.checkedImage = checkedImage;\n        this.uncheckedImage = uncheckedImage;\n        this.callback = callback;\n        this.checkBox.tabIndex = 0;\n        this.checkBox.setAttribute(\"aria-checked\", \"false\");\n        this.checkBox.addEventListener(\"keydown\", this.handleKeyDown.bind(this));\n        this.checkBox.addEventListener(\"click\", this.handleClick.bind(this));\n    }\n    toggleChecked() {\n        const child = this.checkBox.children[0];\n        if (this.checked) {\n            this.checkBox.setAttribute(\"aria-checked\", \"false\");\n            child.src = this.uncheckedImage;\n        }\n        else {\n            this.checkBox.setAttribute(\"aria-checked\", \"true\");\n            child.src = this.checkedImage;\n        }\n        this.checked = !this.checked;\n        if (this.callback)\n            this.callback(this.checked);\n    }\n    handleKeyDown(event) {\n        let flag = false;\n        switch (event.key) {\n            case \" \":\n            case \"Enter\":\n                this.toggleChecked();\n                flag = true;\n                break;\n            default:\n                break;\n        }\n        if (flag) {\n            event.stopPropagation();\n            event.preventDefault();\n        }\n    }\n    handleClick(event) {\n        this.toggleChecked();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);\n\n\n//# sourceURL=webpack://quantum/./src/utils/checkBox.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDashboardItem: () => (/* binding */ getDashboardItem)\n/* harmony export */ });\nconst getDashboardItem = (course) => {\n    return `\r\n        <div class=\"dashboard-item\">\r\n            <div class=\"dashboard-item-top\">\r\n                <img src=\"${course.image}\" alt=\"${course.name}\"/>\r\n                <img \r\n                    src=\"assets/icons/${course.starred ? 'favourite' : 'not-favourite'}.svg\" \r\n                    alt=\"Star\" \r\n                    class=\"dashboard-item-top-overlay-icon\" \r\n                    role=\"checkbox\" \r\n                    aria-checked=\"${course.starred}\" \r\n                    tabindex=\"0\"\r\n                />\r\n                <div class=\"dashboard-item-top-info\">\r\n                    <p>${course.name}</p>\r\n                    <p>\r\n                        <small class=\"dashboard-item-top-info-border\">${course.subject}</small>\r\n                        <small>Grade ${course.grade}<span>+${course.gradeExtra}</span></small>\r\n                    </p>\r\n                    <p>\r\n                        ${course.unitCount && course.lessonCount && course.topicCount ?\n        `<small class=\"dashboard-item-top-info-no-space\"><b>${course.unitCount}</b>Units</small>\r\n                            <small><b>${course.lessonCount}</b>Lessons</small>\r\n                            <small><b>${course.topicCount}</b>Topics</small>` :\n        ''}\r\n                    </p>\r\n                    <select ${course.classes.length ? '' : 'disabled'}>\r\n                        ${course.classes.length ? '' : '<option>No Classes</option>'}\r\n                        ${course.classes.map(courseClass => `<option>${courseClass}</option>`)}\r\n                    </select>\r\n                    <p>\r\n                        ${course.studentCount ?\n        `<small \r\n                                class=\"dashboard-item-top-info-no-space ${(course.startDate && course.endDate) ? 'dashboard-item-top-info-border' : ''}\"\r\n                            >\r\n                                ${course.studentCount} Students\r\n                            </small>` :\n        ''}\r\n                        ${(course.startDate && course.endDate) ? `<small>${course.startDate} - ${course.endDate}</small>` : ''}\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"dashboard-item-bottom\">\r\n                <ul class=\"dashboard-item-bottom-icons\">\r\n                    <li class=\"${!course.isDetailsLinkActive ? 'dashboard-item-bottom-icon-disabled' : ''}\">\r\n                        <a href=\"#\" aria-label=\"Course Details\" ${!course.isDetailsLinkActive ? \"aria-hidden=true tabindex=-1\" : ''}>\r\n                            <img src=\"assets/icons/preview.svg\" alt=\"Eye\"/>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"${!course.isScheduleLinkActive ? 'dashboard-item-bottom-icon-disabled' : ''}\">\r\n                        <a href=\"#\" aria-label=\"Course Schedule\" ${!course.isScheduleLinkActive ? \"aria-hidden=true tabindex=-1\" : ''}>\r\n                            <img src=\"assets/icons/manage course.svg\" alt=\"Calendar\"/>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"${!course.isGradesLinkActive ? 'dashboard-item-bottom-icon-disabled' : ''}\">\r\n                        <a href=\"#\" aria-label=\"Course Grades\" ${!course.isGradesLinkActive ? \"aria-hidden=true tabindex=-1\" : ''}>\r\n                            <img src=\"assets/icons/grade submissions.svg\" alt=\"Grade\"/>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"${!course.isReportsLinkActive ? 'dashboard-item-bottom-icon-disabled' : ''}\">\r\n                        <a href=\"#\" aria-label=\"Course Reports\" ${!course.isReportsLinkActive ? \"aria-hidden=true tabindex=-1\" : ''}>\r\n                            <img src=\"assets/icons/reports.svg\" alt=\"Graph\"/>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            ${course.expired ? `<div class=\"dashboard-item-expired\">EXPIRED</div>` : ''}\r\n        </div>\r\n    `;\n};\n\n\n//# sourceURL=webpack://quantum/./src/utils/index.ts?");

/***/ }),

/***/ "./src/utils/radioGroup.ts":
/*!*********************************!*\
  !*** ./src/utils/radioGroup.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass RadioGroup {\n    constructor(radioGroup) {\n        this.radioGroup = radioGroup;\n        this.radioButtons = [];\n        this.selectedIndex = 0;\n        const radioButtons = this.radioGroup.querySelectorAll(\"[role=radio]\");\n        this.firstRadioButton = radioButtons[0];\n        this.lastRadioButton = radioButtons[0];\n        radioButtons.forEach((radioButton) => {\n            const _radioButton = radioButton;\n            _radioButton.setAttribute(\"tabindex\", \"-1\");\n            _radioButton.setAttribute(\"aria-checked\", \"false\");\n            _radioButton.addEventListener(\"keydown\", this.handleKeyDown.bind(this));\n            _radioButton.addEventListener(\"click\", this.handleClick.bind(this));\n            this.radioButtons.push(_radioButton);\n            if (!this.firstRadioButton)\n                this.firstRadioButton = _radioButton;\n            this.lastRadioButton = _radioButton;\n        });\n        this.firstRadioButton.setAttribute(\"tabindex\", \"0\");\n        this.firstRadioButton.setAttribute('aria-checked', \"true\");\n    }\n    setChecked(currentRadioButtonTarget) {\n        const currentRadioButton = currentRadioButtonTarget;\n        this.radioButtons.forEach((radioButton) => {\n            radioButton.setAttribute(\"aria-checked\", \"false\");\n            radioButton.setAttribute(\"tabindex\", \"-1\");\n            const radioButtonImage = radioButton\n                .children[0];\n            radioButtonImage.src = \"assets/icons/radio-button-off.svg\";\n        });\n        this.selectedIndex = this.radioButtons.indexOf(currentRadioButton);\n        const currentRadioButtonImage = currentRadioButton\n            .children[0];\n        currentRadioButtonImage.src = \"assets/icons/radio-button-on.svg\";\n        currentRadioButton.setAttribute(\"aria-checked\", \"true\");\n        currentRadioButton.setAttribute(\"tabindex\", \"0\");\n        currentRadioButton.focus();\n    }\n    setCheckedPrevious(currentRadioButton) {\n        if (currentRadioButton === this.firstRadioButton)\n            this.setChecked(this.lastRadioButton);\n        else {\n            const index = this.radioButtons.indexOf(currentRadioButton);\n            this.setChecked(this.radioButtons[index - 1]);\n        }\n    }\n    setCheckedNext(currentRadioButton) {\n        if (currentRadioButton === this.lastRadioButton)\n            this.setChecked(this.firstRadioButton);\n        else {\n            const index = this.radioButtons.indexOf(currentRadioButton);\n            this.setChecked(this.radioButtons[index + 1]);\n        }\n    }\n    handleKeyDown(event) {\n        const target = event.target;\n        if (target === null)\n            return;\n        const currentRadioButton = target.children.length\n            ? target\n            : target.parentElement;\n        let flag = false;\n        const radioButton = currentRadioButton;\n        switch (event.key) {\n            case \" \":\n            case \"Enter\":\n                this.setChecked(radioButton);\n                flag = true;\n                break;\n            case \"Up\":\n            case \"ArrowUp\":\n            case \"Left\":\n            case \"ArrowLeft\":\n                this.setCheckedPrevious(radioButton);\n                flag = true;\n                break;\n            case \"Down\":\n            case \"ArrowDown\":\n            case \"Right\":\n            case \"ArrowRight\":\n                this.setCheckedNext(radioButton);\n                flag = true;\n                break;\n            default:\n                break;\n        }\n        if (flag) {\n            event.stopPropagation();\n            event.preventDefault();\n        }\n    }\n    handleClick(event) {\n        this.setChecked(event.currentTarget);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioGroup);\n\n\n//# sourceURL=webpack://quantum/./src/utils/radioGroup.ts?");

/***/ }),

/***/ "./src/constants/courses.json":
/*!************************************!*\
  !*** ./src/constants/courses.json ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"name\":\"Acceleration\",\"subject\":\"Physics\",\"image\":\"assets/images/imageMask-1.svg\",\"grade\":\"7\",\"gradeExtra\":\"2\",\"unitCount\":4,\"lessonCount\":18,\"topicCount\":24,\"studentCount\":50,\"startDate\":\"21-Jan-2020\",\"endDate\":\"21-Aug-2020\",\"classes\":[\"Mr. Frank\\'s Class B\"],\"starred\":true,\"expired\":false,\"isDetailsLinkActive\":true,\"isScheduleLinkActive\":true,\"isGradesLinkActive\":true,\"isReportsLinkActive\":true},{\"name\":\"Displacement, Velocity and Spped\",\"subject\":\"Physics 2\",\"image\":\"assets/images/imageMask-2.svg\",\"grade\":\"6\",\"gradeExtra\":\"3\",\"unitCount\":2,\"lessonCount\":15,\"topicCount\":20,\"classes\":[],\"starred\":true,\"expired\":false,\"isDetailsLinkActive\":true,\"isScheduleLinkActive\":false,\"isGradesLinkActive\":false,\"isReportsLinkActive\":true},{\"name\":\"Introduction to Biology: Micro organisms and how they affec...\",\"subject\":\"Biology\",\"image\":\"assets/images/imageMask.svg\",\"grade\":\"4\",\"gradeExtra\":\"1\",\"unitCount\":5,\"lessonCount\":16,\"topicCount\":22,\"studentCount\":300,\"classes\":[\"All Classes\"],\"starred\":true,\"expired\":false,\"isDetailsLinkActive\":true,\"isScheduleLinkActive\":false,\"isGradesLinkActive\":false,\"isReportsLinkActive\":true},{\"name\":\"Introduction to High School Mathematics\",\"subject\":\"Mathematics\",\"image\":\"assets/images/imageMask-3.svg\",\"grade\":\"8\",\"gradeExtra\":\"3\",\"studentCount\":44,\"startDate\":\"14-Oct-2019\",\"endDate\":\"20-Oct-2020\",\"classes\":[\"Mr. Frank\\'s Class A\"],\"starred\":false,\"expired\":true,\"isDetailsLinkActive\":true,\"isScheduleLinkActive\":true,\"isGradesLinkActive\":true,\"isReportsLinkActive\":true}]');\n\n//# sourceURL=webpack://quantum/./src/constants/courses.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;