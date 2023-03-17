import { stickNavbarToTop, showProgress } from "./modules/header";
// import { createSlider } from "./modules/shop";
import { setCurrentYear } from "./modules/footer-year";
import { closeWindowAfterTimeout } from "./modules/modal-close-window";
import { showCards, shownCards } from "./modules/testimonials-slider";
import { formValidation } from "./modules/form-validation";
import { blogNews } from "./modules/blog-news";
import { services } from "./modules/services";
import { toggleHamburger } from "./modules/hamburger";


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
	formValidation();
	blogNews();
	services();
	toggleHamburger();
});

window.addEventListener("scroll", () => {
	stickNavbarToTop();
	showProgress();
});

window.addEventListener('resize', () => {
	shownCards = window.innerWidth <= 1199.98 ? 1 : 2;
	showCards();
});

