const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const navbarTop = navbar.getBoundingClientRect().top;
const main = document.querySelector(".main-content");
const sticky = header.offsetTop + navbarTop;

export function stickNavbarToTop() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
		main.classList.add("navbarOffsetMargin");
	} else {
		header.classList.remove("sticky");
		main.classList.remove("navbarOffsetMargin");
	}
}

export function showProgress() {
	const winScroll =
		document.body.scrollTop || document.documentElement.scrollTop;
	const height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	const scrolled = (winScroll / height) * 100;
	document.querySelector("#progress-bar").style.width = scrolled + "%";
}
