export const loader = () => {
    document.body.style.overflow = "hidden";
	setTimeout(function () {
		document.body.style.overflow = "";
		document.querySelector(".loader").classList.add("loader_hide");
	}, 5000);
}