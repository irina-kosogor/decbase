import { faker } from "@faker-js/faker";

const testimonials = document.querySelector(".testimonials__cards");
export const shownCards = window.innerWidth < 1199.98 ? 1 : 2;
let currentCard = 0;
let cardsNumber = 10;

for (let i = 0; i < cardsNumber; i++) {
	const name = faker.name.fullName();
	const position = faker.name.jobTitle();
	const quote = faker.lorem.sentence();
	const avatar = faker.image.avatar();

	const card = document.createElement("div");
	card.classList.add("testimonials__card-wrapper");
	card.innerHTML = `
			<div class="testimonials__card">
				<div class="testimonials__card-img">
					<img src="${avatar}" alt="testimonials-img">
				</div>
				<div class="testimonials__card-title">
					<span class="testimonials__card-title_name">${name}</span>
					<span class="testimonials__card-title_position"> /${position}</span>
				</div>
				<div class="testimonials__card-description">
					${quote}
				</div>
			</div>
		`;

	testimonials.append(card);
}

const updatedCards = testimonials.querySelectorAll(".testimonials__card-wrapper");
const updatedTotalCards = updatedCards.length;

showCards();

const btnLeft = document.querySelector(".testimonials__btn_left");
btnLeft.addEventListener("click", () => {
	currentCard = currentCard === 0 ? updatedTotalCards - 1 : currentCard - 1;
	showCards();
});

const btnRight = document.querySelector(".testimonials__btn_right");
btnRight.addEventListener("click", () => {
	currentCard = currentCard === updatedTotalCards - 1 ? 0 : currentCard + 1;
	showCards();
});

export function showCards() {
	updatedCards.forEach((card) => {
		card.style.display = "none";
	});

	for (let i = 0; i < shownCards; i++) {
		const index = (currentCard + i) % updatedTotalCards;
		const card = updatedCards[index];
		card.style.display = "block";
		card.style.opacity = 0;
		fadeIn(card);
	}
}

function fadeIn(element) {
	let opacity = 0;
	const interval = setInterval(() => {
		opacity += 0.05;
		element.style.opacity = opacity;
		if (opacity >= 1) {
			clearInterval(interval);
		}
	}, 20);
}

