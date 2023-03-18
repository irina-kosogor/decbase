import { stickNavbarToTop, showProgress } from "./modules/header";
import { createSlider } from "./modules/shop";
import { setCurrentYear } from "./modules/footer-year";
import { closeWindowAfterTimeout } from "./modules/modal-close-window";
import { testimonialsSlider } from "./modules/testimonials-slider";
import { formValidation } from "./modules/form-validation";
import { blogNews } from "./modules/blog-news";
import { services } from "./modules/services";
import { toggleHamburger } from "./modules/hamburger";


window.addEventListener("load", function () {
	document.body.style.overflow = "hidden";
	setTimeout(function () {
		document.body.style.overflow = "";
		document.querySelector(".loader").classList.add("loader_hide");
	}, 5000);
});

window.addEventListener("DOMContentLoaded", () => {
	createSlider();
	setCurrentYear();
	closeWindowAfterTimeout();
	formValidation();
	testimonialsSlider();
	blogNews();
	services();
	toggleHamburger();
});

window.addEventListener("scroll", () => {
	stickNavbarToTop();
	showProgress();
});


