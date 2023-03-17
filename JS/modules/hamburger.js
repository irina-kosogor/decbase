export const toggleHamburger = () => {
	const hamburger = document.querySelector(".hamburger"),
		menu = document.querySelector(".mobile-menu"),
		closeElem = document.querySelector(".mobile-menu__close");

	hamburger.addEventListener("click", () => {
		menu.classList.add("active");
	});

	closeElem.addEventListener("click", () => {
		menu.classList.remove("active");
	});
};
