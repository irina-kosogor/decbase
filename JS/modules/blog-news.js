export const blogNews = () => {
	const latestNewsSection = document.querySelector("#blog");
	const latestNewContainer = document.querySelector(".blog-news__items");
	const count = 4;
	const keyWord = "interior design + modern interior + architecture";
	const apiKey = "4e50d70223c24aeb8dc778b18d4683d1";
	const newsApi = `https://newsapi.org/v2/everything?pageSize=${count}&q=${keyWord}&apiKey=${apiKey}`;

	async function getNews() {
		try {
			const response = await fetch(newsApi);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function createNewsCards() {
		const news = await getNews();
		news?.articles.forEach((article) => {
			const { urlToImage, title, description } = article;
			const newsCard = document.createElement("div");
			newsCard.classList.add("blog-news__item-wrapper");
			newsCard.innerHTML = `
				<div class="blog-news__item">
				<div class="blog-news__item-img">
					<img src="${urlToImage}" alt="blog-news-img">
				</div>
				<h3 class="blog-news__item-title">${title}</h3>
				<div class="blog-news__item-description">${description}</div>
				<button class="blog-news__item-btn">CONTINUE READING....</button>
				</div>
				`;
			latestNewContainer.append(newsCard);
		});
	}

	function createCardsOnScroll() {
		const rect = latestNewsSection.getBoundingClientRect();
		if (rect.top < window.innerHeight) {
			createNewsCards();
			window.removeEventListener("scroll", createCardsOnScroll);
		}
	}

	window.addEventListener("scroll", createCardsOnScroll);

	// latestNewContainer.addEventListener("mouseover", (event) => {
	// 	if (event.target.classList.contains("blog-news__item") || event.target.parentNode()) {
	// 		// Scale up the image
	// 		const image = event.target.querySelector(".blog-news__item-img img");
	// 		image.style.transform = "scale(1.2)";
	
	// 		// Extend the description
	// 		const description = event.target.querySelector(
	// 			".blog-news__item-description"
	// 		);
	// 		description.classList.add("blog-news__item-description_extended");
	// 	}
	// });
	
	// // Add an event listener for mouseleave events on the parent element
	// latestNewContainer.addEventListener("mouseout", (event) => {
	// 	// Check if the event target is a card element
	// 	const isCard = event.target.classList.contains("blog-news__item");
	// 	if (isCard) {
	// 		event.target.style.boxShadow = "";
	
	// 		const image = event.target.querySelector(".blog-news__item-img");
	// 		image.style.transform = "scale(0.8)";;
	
	// 		const description = event.target.querySelector(
	// 			".blog-news__item-description"
	// 		);
	// 		description.classList.remove("blog-news__item-description_extended");
	// 	}
	// });
};
