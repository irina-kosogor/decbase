export const blogNews = async () => {
	const latestNewsSection = document.querySelector("#blog");
	const latestNewContainer = document.querySelector(".blog-news__items");
	const count = 4;
	const keyWords = "interior design homes";
	const apiKey = "533370f06f8d1a8afb6e96be34bc179a";
	const apiUrl = `https://gnews.io/api/v4/search?q=${keyWords}&sortby=publishedAt&lang=en&max=${count}&apikey=${apiKey}`;

	async function getNews() {
		try {
			const response = await fetch(apiUrl);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	async function createNewsCards() {
		const news = await getNews();
		news?.articles.forEach((article) => {
			const { image, title, description } = article;
			const newsCard = document.createElement("div");
			newsCard.classList.add("blog-news__item-wrapper");
			newsCard.innerHTML = `
				<div class="blog-news__item">
				<div class="blog-news__item-img">
					<img src="${image}" alt="blog-news-img">
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
};
