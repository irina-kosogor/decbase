# Project Title

Decbase

## Description
- This is a project made as a homework assigment for Sigma Software.
- Each functionality is organized in its own module, which is described in greater detail below.
- The final script is bundled using Webpack.

#### 1. Loading Animation  
This module of the project involves implementing a loading animation before the main page is loaded. The animation has 7 moving elements in the main colors of website, and it lasts for 5 seconds before the main page is loaded. 
Before the page is loaded, the scroll is disabled on the page.

#### 2. Close window modal
If the user is idle on the website for 1 minute without any activity, the modal is shown to confirm whether they are still present. If no response is received, the page is closed.
The functionality is implemented, however due to the security restrictions the window is not closing after pressing "No" button.

#### 3. Shop
An interaction with the Unsplash public API is implemented in the section "Shop". It creates slider with the images filtered by the key words related to the website theme. 
API key is provided in the script, please do not share it or use without my knowledge, as it is prohibited by the API's policy.
To reduce the number of API requests, the data obtained from the API request is stored in localStorage.

#### 4. Header
A progress bar is added underneath the "navbar" section to indicate which stage of the page the user is currently viewing. 

#### 5. Services
Three JSON files are created with the corresponding data for each category. The cards for each category are created dinamicaly and are sorted by the date of creation. By default, the first card of each category is shown and "All" button has an active class and has corresponding styles.

#### 6. Testimonials
The cards on the webpage are generated using the "Faker" library, which creates corresponding data for each card. Additionally, a single card view for smaller screens has been implemented using JavaScript.

#### 7. Blog news
To enhance user experience, the "Blog news" section features a smooth fade-in animation for each block as the user scrolls to or navigates to it. This animation is triggered every time the user accesses the section through scrolling or via the header.
To populate the section, data is fetched using the public API from gnews.io, and each card with the blog news is generated dynamically. To minimize the number of requests to the API, the data received from the initial request is stored in localStorage.
It is important to note that an API key is required to access the gnews.io public API, and the key has been provided in the script. Please do not share it or use without my knowledge, as it is prohibited by the API's policy.

####  8. Form validation
The sign-in form on the website is implemented with validation rules to ensure the correctness of the data entered by the user. The validation rules are as follows:
- The name and surname fields accept only Latin letters, with the first letter capitalized. The presence of digits or spaces is not allowed.
- The email field follows the general validation rules for email addresses.

After the user fills in the form correctly, the data is stored in the local storage of the user's browser.
If the user submits the form with incorrect data, the form fields with errors are highlighted, and the user is provided with information on where the error occurred with the corresponding message.
If the name "Irina" is entered in the name field, a welcoming animation for five seconds notifies the user that there is a 20% (as 120% seems incredible) discount on orders. The system date is used to determine the current date.

#### 9. Footer 
The current year is displayed in the copyright field with the current year gotten from the system's date object by updating the corresponding HTML element's content.

#### 10. Hamburger
This module adds functionality to the website by allowing the user to access the mobile menu on small screens.
The mobile menu is shown when the user clicks on the hamburger button. This makes it easier for the user to navigate the website on their mobile device, as they can access all the navigation links without having to scroll through the entire page. 
The mobile menu is styled to match the overall design of the website, with clear and easy-to-read text and icons.
When the user clicks on a menu item, they are taken to the corresponding section of the website. The mobile menu disappears once the user has made their selection or clicks on the "close" button.

This project 

## Authors

Irina Kosogor

Figma layout is porvided by Sigma University

## Version History

-   1.0
    -   Initial Release
