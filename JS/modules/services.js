export const services = async () => {
	const allBtn = document.querySelector("#allBtn");
	const interiorBtn = document.querySelector("#interiorBtn");
	const architectureBtn = document.querySelector("#architectureBtn");
	const planningBtn = document.querySelector("#planningBtn");
	const cardContainer = document.querySelector(".our-services-cards");

    const design = await fetch("JS/json/design.json")
		.then((response) => response.json())
		.then((data) => {
            return data.projects.sort((a, b) => new Date(b.created_at).getTime() -  new Date(a.created_at).getTime());
		})
		.catch((error) => {
			console.error(error);
		});

	const architecture = await fetch("JS/json/architecture.json")
		.then((response) => response.json())
		.then((data) => {
            return data.projects.sort((a, b) => new Date(b.created_at).getTime() -  new Date(a.created_at).getTime());
		})
		.catch((error) => {
			console.error(error);
		});

	const planning = await fetch("JS/json/planning.json")
		.then((response) => response.json())
		.then((data) => {
			return data.projects.sort((a, b) => new Date(b.created_at).getTime() -  new Date(a.created_at).getTime());
		})
		.catch((error) => {
			console.error(error);
		});

    const projects = [...design, ...architecture, ...planning];

    handleFilterClick("all");

	function displayProjects(projects, n) {
		cardContainer.innerHTML = "";
		for (let i = 0; i < n; i++) {
			const project = projects[i];
			const card = document.createElement("div");
			card.classList.add("our-services-card");
            if (project.category === "architecture") {
                card.classList.add("our-services-card_architecture"); 
            }
            if (project.category === "planning") {
                card.classList.add("our-services-card_planning"); 
            }
			card.innerHTML = `
                <div class="our-services-card__title">${project.title}</div>
                <div class="our-services-card__description">${project.description}</div>
    `;
			cardContainer.appendChild(card);
		}
	}

    function handleFilterClick(category) {
        let filteredProjects;
        if (category === "all") {
            filteredProjects = [design[0], architecture[0], planning[0]];
            displayProjects(filteredProjects, 3);
        } else {
            filteredProjects = projects.filter(
                (project) => project.category === category
            );
            displayProjects(filteredProjects, 5);
        }
	}

    function removeActiveClass() {
        allBtn.classList.remove("active");
		interiorBtn.classList.remove("active");
		architectureBtn.classList.remove("active");
		planningBtn.classList.remove("active");
    }

    allBtn.addEventListener("click", () => {
        removeActiveClass()
		allBtn.classList.add("active");
		handleFilterClick("all");
	});

	interiorBtn.addEventListener("click", () => {
        removeActiveClass()
		interiorBtn.classList.toggle("active");
		handleFilterClick("interior-design");
	});
    
	architectureBtn.addEventListener("click", () => {
        removeActiveClass()
		architectureBtn.classList.toggle("active");
		handleFilterClick("architecture");
	});
    
	planningBtn.addEventListener("click", () => {
        removeActiveClass()
		planningBtn.classList.toggle("active");
		handleFilterClick("planning");
	});
};
