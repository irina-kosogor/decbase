export const closeWindowAfterTimeout = () => {
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
