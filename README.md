# Project Title

Decbase

## Description
- This is a project made as a homework assigment for Sigma Software.
- Each functionality is organized in its own module, which is described in greater detail below.
- The final script is bundled using Webpack.

#### 1. Loading Animation  
This module of the project implements a "loading" animation before the main content of the page is shown. The animation has 7 moving characters of the word "LOADING" in the main colors of website, and it lasts for 5 seconds before the main content of the page is shown. 

#### 2. Close window modal
If the user is idle on the website for 1 minute without any activity (scrolling, clicking, pressing keyboard buttons), the modal is shown to confirm whether one is still present. If no response is received, the page is automatically closed after 30 seconds.
The functionality is implemented, however due to the security restrictions the window is not closing after pressing "No" button in some browsers.

#### 3. Header
The header of the page is "sticky": it stays in one place on the top of the page whenever user scrolls the page. "Header" element includes a navbar that consists of the links to appropriate sections of the page. When user clicks on them, page is automatically scrolled to appropriate section. For mobile version of the page "Header" changes it's view to "mobile" one: includes only brand icon and clickable "hamburger" menu button. Clicking on "hamburger" user triggers appearance of initially hidden menu that includes navbar links shown on desktop view.
Also, header contains a green line progress bar that is added underneath the "navbar" section to indicate which stage of the page the user is currently viewing.

#### 4. Services
Contains a list of services presented as dynamically created cards. Data for these cards coming from three appropriate JSON files placed in `/JS/json` folder. The cards for each category are created dinamicaly and are sorted by the date of creation. "Services" section contains 4 buttons that filter data for cards according to the category they are responsible for. By default, "All" button is selected and the first card of each category is shown.

#### 5. Testimonials
Contains a carousel of testimonial cards with photo, name, position, and quote. The cards are generated using the "Faker" library, which creates corresponding data for each card. Additionally, a single card view for smaller screens has been implemented using JavaScript.

#### 6. Blog news
To enhance user experience, the "Blog news" section features a smooth fade-in animation for each block as the user scrolls to or navigates to it. This animation is triggered once the user accesses the section through scrolling or via the header. 
Once user hovers over each card on desktop screens - it gets padding, shadow and image changes its size, and description is extended.
To populate the section, data is fetched using the public API from [gnews.io](https://gnews.io/), and each card with the blog news is generated dynamically. To minimize the number of requests to the API, the data received from the initial request is stored in localStorage.
It is important to note that an API key is required to access the [gnews.io](https://gnews.io/) public API, and the key has been provided in the script. Please do not share it or use without my knowledge, as it is prohibited by the API's policy.

#### 7. Shop
Section contains a carousel of images. Image's urls come from [Unsplash](https://unsplash.com/developers) public API.
The images fetched from the API (by default 10 pics) are filtered using additional param in url with the key words related to the website's topic (interior design and architecture). The images are added to the slider dynamically. 
API key is provided in the script, please do not share it or use without my knowledge, as it is prohibited by the API's policy.
To reduce the number of API requests, the data obtained from the API request is stored in localStorage.

####  8. Form validation
The sign-in form on the website is implemented with validation rules to ensure the correctness of the data entered by the user. The validation rules are as follows:
- The name and surname fields accept only Latin letters, with the first letter capitalized. The presence of digits or spaces is not allowed.
- The email field follows the general validation rules for email addresses.

After the user fills in the form correctly, the data is stored in the local storage of the user's browser.
If the user submits the form with incorrect data, the form fields with errors are highlighted, and the user is provided with information on where the error occurred with the corresponding message.
If the name **"Irina"** is entered in the name field, a welcoming animation for five seconds notifies the user that there is a 20% (as 120% seems incredible) discount on orders. The system date is used to determine the current date.

#### 9. Footer 
The current year is displayed in the copyright field with the current year gotten from the system's date object by updating the corresponding HTML element's content.

#### 10. Hamburger
This module adds functionality to the website by allowing the user to access the mobile menu on small screens.
The mobile menu is shown when the user clicks on the hamburger button. This makes it easier for the user to navigate the website on their mobile device, as they can access all the navigation links without having to scroll through the entire page. 
The mobile menu is styled to match the overall design of the website, with clear and easy-to-read text and icons.
When the user clicks on a menu item, one is taken to the corresponding section of the website. The mobile menu disappears once the user has made one's selection or clicks on the "close" button.

## Authors

Irina Kosogor

Figma layout is porvided by Sigma University

## Version History

-   1.0
    -   Initial Release
