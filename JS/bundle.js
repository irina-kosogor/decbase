/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/footer-year.js":
/*!***********************************!*\
  !*** ./js/modules/footer-year.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCurrentYear": () => (/* binding */ setCurrentYear)
/* harmony export */ });
const yearContainer = document.querySelector("#footer-year");
const yearCurrent = new Date().getFullYear();

const setCurrentYear = () => {
    yearContainer.innerHTML = yearCurrent;
}

/***/ }),

/***/ "./js/modules/header.js":
/*!******************************!*\
  !*** ./js/modules/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showProgress": () => (/* binding */ showProgress),
/* harmony export */   "stickNavbarToTop": () => (/* binding */ stickNavbarToTop)
/* harmony export */ });
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const navbarTop = navbar.getBoundingClientRect().top;
const main = document.querySelector(".main-content");
const sticky = header.offsetTop + navbarTop;

function stickNavbarToTop() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
		main.classList.add("navbarOffsetMargin");
	} else {
		header.classList.remove("sticky");
		main.classList.remove("navbarOffsetMargin");
	}
}

function showProgress() {
	const winScroll =
		document.body.scrollTop || document.documentElement.scrollTop;
	const height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	const scrolled = (winScroll / height) * 100;
	document.querySelector("#progress-bar").style.width = scrolled + "%";
}


/***/ }),

/***/ "./js/modules/modal-close-window.js":
/*!******************************************!*\
  !*** ./js/modules/modal-close-window.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeWindowAfterTimeout": () => (/* binding */ closeWindowAfterTimeout)
/* harmony export */ });
const closeWindowAfterTimeout = () => {
	const modal = document.querySelector(".modal-close-window");
	const yesButton = document.querySelector("#yes-button");
	const noButton = document.querySelector("#no-button");
	let timeoutId;

	function openModal() {
		modal.classList.remove("modal-close-window_hide");
		modal.classList.add(
			"modal-close-window_show",
			"modal-close-window_fade"
		);
		document.body.style.overflow = "hidden";
		yesButton.addEventListener("click", closeModal);
		noButton.addEventListener("click", closeWindow);
		timeoutId = setTimeout(closeWindow, 300000);
	}

	function closeModal() {
		clearTimeout(timeoutId);
		modal.classList.remove("modal-close-window_show", "modal-close-window_fade");
		modal.classList.add("modal-close-window_hide");
		document.body.style.overflow = "";
	}

	function closeWindow() {
		clearTimeout(timeoutId);
		window.close();
	}

	timeoutId = setTimeout(openModal, 600000);

	document.addEventListener("mousemove", resetTimeout);
	document.addEventListener("keydown", resetTimeout);
	document.addEventListener("keydown", (event) => {
		if (
			event.code === "Escape" &&
			modal.classList.contains("modal-close-window_show")
		) {
			closeModal();
		}
	});

	function resetTimeout() {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(function () {
			if (modal.classList.contains("modal-close-window_hide")) {
				openModal();
			}
		}, 600000);
	}
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ "./js/modules/header.js");
/* harmony import */ var _modules_footer_year__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/footer-year */ "./js/modules/footer-year.js");
/* harmony import */ var _modules_modal_close_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal-close-window */ "./js/modules/modal-close-window.js");

// import { createSlider } from "./modules/shop";



// window.addEventListener("load", function () {
// 	document.body.style.overflow = "hidden";
// 	setTimeout(function () {
// 		document.body.style.overflow = "";
// 		document.querySelector(".loader").classList.add("loader_hide");
// 	}, 5000);
// });

window.addEventListener("DOMContentLoaded", () => {
	// createSlider();
	(0,_modules_footer_year__WEBPACK_IMPORTED_MODULE_1__.setCurrentYear)();
	(0,_modules_modal_close_window__WEBPACK_IMPORTED_MODULE_2__.closeWindowAfterTimeout)();
});

window.addEventListener("scroll", () => {
	(0,_modules_header__WEBPACK_IMPORTED_MODULE_0__.stickNavbarToTop)();
	(0,_modules_header__WEBPACK_IMPORTED_MODULE_0__.showProgress)();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map