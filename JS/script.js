import { loader } from "./modules/loader";
import { stickNavbarToTop, showProgress } from "./modules/header";
import { createSlider } from "./modules/shop";
import { setCurrentYear } from "./modules/footer-year";
import { closeWindowAfterTimeout } from "./modules/modal-close-window";
import { testimonialsSlider } from "./modules/testimonials-slider";
import { formValidation } from "./modules/form-validation";
import { blogNews } from "./modules/blog-news";
import { services } from "./modules/services";
import { toggleHamburger } from "./modules/toggle-hamburger";

window.addEventListener("DOMContentLoaded", () => {
	loader();
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
