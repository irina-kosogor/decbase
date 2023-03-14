export const formValidation = () => {
	const signUpForm = document.getElementById("sign-up-form");
	const nameInput = document.getElementById("sign-up-name");
	const surnameInput = document.getElementById("sign-up-surname");
	const emailInput = document.getElementById("sign-up-email");
	const errorInputText = document.querySelector(".sign-up-form__error-name");
	const errorInputEmail = document.querySelector(".sign-up-form__error-email");

	const validateText = (text) => text.length > 0 && /^[A-Z][a-z]*$/.test(text);
	const validateEmail = (email) => email.length > 0 && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);

	const addValidationClass = (selector, className) => {
		selector.classList.add(className);
	}

	const removeValidationClass = (selector, className) => {
		selector.classList.remove(className);
	}

	nameInput.addEventListener("input", (event) => {
		if (!validateText(event.target.value)) {
			addValidationClass(nameInput, "sign-up-form__name_error");
		} else {
			removeValidationClass(nameInput, "sign-up-form__name_error");
		}
	})

	surnameInput.addEventListener("input", (event) => {
		if (!validateText(event.target.value)) {
			addValidationClass(surnameInput, "sign-up-form__name_error");
		} else {
			removeValidationClass(surnameInput, "sign-up-form__name_error");
		}
	})

	emailInput.addEventListener("input", (event) => {
		if (!validateEmail(event.target.value)) {
			addValidationClass(emailInput, "sign-up-form__name_error");
		} else {
			removeValidationClass(emailInput, "sign-up-form__name_error");
		}
	})

	signUpForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const name = nameInput.value.trim();
		const surname = surnameInput.value.trim();
		const email = emailInput.value.trim();
		
		if (!validateText(name)) {
			errorInputText.innerHTML = "Please enter a valid name (only letters, first letter capital).";
			addValidationClass(nameInput, "sign-up-form__name_error");
			setTimeout(() => {
				errorInputText.innerHTML = "";
				removeValidationClass(nameInput, "sign-up-form__name_error");
			}, 2000);
			nameInput.focus();
			return;
		}
		
		if (!validateText(surname)) {
			errorInputText.innerHTML = "Please enter a valid surname (only letters, first letter capital).";
			addValidationClass(surnameInput, "sign-up-form__name_error");
			setTimeout(() => {
				errorInputText.innerHTML = "";
				removeValidationClass(surnameInput, "sign-up-form__name_error");
			}, 2000);
			surnameInput.focus();
			return;
		}

		if (!validateEmail(email)) {
			errorInputEmail.innerHTML = "Please enter a valid email address.";
			addValidationClass(emailInput, "sign-up-form__name_error");
			setTimeout(() => {
				errorInputEmail.innerHTML = "";
				removeValidationClass(emailInput, "sign-up-form__name_error");
			}, 2000);
			emailInput.focus();
			return;
		}

		const userData = {
			name,
			surname,
			email,
		};
		localStorage.setItem("userData", JSON.stringify(userData));

		const myName = "Irina";
		const currentDate = new Date();
		const currentDay = currentDate.getDate();
		const currentMonth = currentDate.toLocaleString('eng', { month: 'long' });
		const currentYear = currentDate.getFullYear();
		const storedData = JSON.parse(localStorage.getItem("userData"));

		if (storedData && storedData.name === myName) {
			emailInput.insertAdjacentHTML('afterend', `<div class="greeting">
				Congratulations, ${name}!
				<div> Today <span>(${currentDay} of ${currentMonth}, ${currentYear})</span> you have a 20% discount for all orders!</div>
			</div>`);
			setTimeout(() => {
				document.querySelector('.greeting').remove();
			}, 5000);
		}

		signUpForm.reset();
	});
};
