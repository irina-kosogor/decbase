export const toggleHamburger = () => {
	const hamburger = document.querySelector(".hamburger");
	const menu = document.querySelector(".mobile-menu");
	const closeElem = document.querySelector(".mobile-menu__close");
	const linksWrapper = document.querySelector(".mobile-menu__list");

	hamburger.addEventListener("click", () => {
		menu.classList.add("active");
	});

	closeElem.addEventListener("click", () => {
		menu.classList.remove("active");
	});

	linksWrapper.addEventListener("click", () => {
		menu.classList.remove("active");
	})
};
