import { stickNavbarToTop, showProgress } from "./modules/header";
// import { createSlider } from "./modules/shop";
import { setCurrentYear } from "./modules/footer-year";
import { closeWindowAfterTimeout } from "./modules/modal-close-window";
import { showCards } from "./modules/testimonials-slider";

// window.addEventListener("load", function () {
// 	document.body.style.overflow = "hidden";
// 	setTimeout(function () {
// 		document.body.style.overflow = "";
// 		document.querySelector(".loader").classList.add("loader_hide");
// 	}, 5000);
// });

window.addEventListener("DOMContentLoaded", () => {
	// createSlider();
	setCurrentYear();
	closeWindowAfterTimeout();
	showCards();
});

window.addEventListener("scroll", () => {
	stickNavbarToTop();
	showProgress();
});
