const sliderContainer = document.querySelector(".shop__slider");
const btnPrevious = document.querySelector(".shop__btn_previous");
const btnNext = document.querySelector(".shop__btn_next");

const count = 5;
const collection = 9475907;
const apiKey = "9X9s_kjLwTgBifHuKGDg1bUXJHkcGi4MFOfBCG2GZMY";
const apiUrl = `https://api.unsplash.com/photos/random?collections=${collection}&count=${count}&client_id=${apiKey}`;

async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		return data.map((photo) => photo.urls.regular);
	} catch (error) {
		console.log(error);
	}
}

export async function createSlider() {
	const photos = await getPhotos();
	const slides = [];
	photos.forEach((photo, index) => {
		const img = document.createElement("img");
		img.src = photo;
		if (index === 0) {
			img.classList.add("active");
		}
		slides.push(img);
		sliderContainer.append(img);
	});
	btnPrevious.addEventListener("click", () => {
		prevSlide(slides);
	});
	btnNext.addEventListener("click", () => {
		nextSlide(slides);
	});
	return slides;
}

function prevSlide(slides) {
	const current = document.querySelector(".active");
	const index = slides.indexOf(current);
	current.classList.remove("active");
	if (index === 0) {
		slides[slides.length - 1].classList.add("active");
	} else {
		slides[index - 1].classList.add("active");
	}
}

function nextSlide(slides) {
	const current = document.querySelector(".active");
	const index = slides.indexOf(current);
	current.classList.remove("active");
	if (index === slides.length - 1) {
		slides[0].classList.add("active");
	} else {
		slides[index + 1].classList.add("active");
	}
}

