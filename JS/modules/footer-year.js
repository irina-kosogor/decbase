const yearContainer = document.querySelector("#footer-year");
const yearCurrent = new Date().getFullYear();

export const setCurrentYear = () => {
    yearContainer.innerHTML = yearCurrent;
}