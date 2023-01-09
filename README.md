# The Formula 1 Quiz

<image src="assets/readme-files/f1quiz-readme-image.png" width="700px">

The Formula 1 Quiz is a novelty quiz created for F1 fans around the globe. The quiz has two levels of diffculty based on quiz type. '2022 Wrapped' is an easy level testing the user knowledge of the latest F1 season. 'Driver Trivia' is the hard level quiz which tests the users knowledge of F1 drivers outside of the race track. 

The quiz uses F1 terminology in a playful way to mimic the race track environment, it uses term 'time penalty' in place of incorrect answers and the term 'lap time' to record how quick the user completes the quiz. For a wrong question answered, the user receives a 10 second time penalty which is added onto their laptime.  

This quiz was built as my Portfolio 2 project following completion of the Code Institute Javascript module. The quiz uses CSS, HTML and Javascript. 

The completed project can be viewed here: https://orlagh-sweeney.github.io/f1-quiz/


## Table of Contents
1. [User Experience](#user-experience-ux)
    - [Project Goals](#project-goals)
    - [User Stories](#user-stories)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Wireframes](#wireframes)
2. [Features](#features)
    - [General](#general)
    - [Introduction Area](#introduction-area)
    - [Quiz Area](#quiz-area)
    - [Results Area](#results-area)
    - [Future Features](#future-features)
3. [Technololgies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks, Libraries and Programmes](#frameworks-libraries-and-programmes)
4. [Testing](#testing)
    - [Testing User Stories](#testing-user-stories)
    - [Code Validation](#code-validation)
    - [Accessibility](#accessibility)
    - [Tools Testing](#tools-testing)
    - [Device Testing](#device-testing)
    - [Browser Testing](#browser-testing)
    - [Feature Testing](#feature-testing)
    - [Bugs](#bugs)
5. [Finished Product](#finished-product)
6. [Deployment](#deployment)
7. [Credit](#credit)
    - [Content](#content)
    - [Media](#media)
    - [Code](#code)
8. [Acknowledgements](#acknowledgements)

## User Experience (UX)

### Project Goals
- To buld a fun quiz for Formula 1 fans incorporating the F1 theme and terminology. 
- To clearly outline how the quiz works for the user.
- To provide a score tracking system for the user.
- To create a quiz with two levels of difficultly with a series of multiple choice questions. 

### User Stories
- As a user, I want to be able to understand how to play the game.
- As a user, I want to be able to choose a level of difficulty.
- As a user, I want to be able to keep track of my progress during the quiz.
- As a user, I want to be able to quit the game.
- As a user, I want to be able to play again.

### Colour Scheme
- The colour scheme closely follows the colours of the Formula 1 brand including red, white, dark grey and a green yellow colour.<br>
<image src="assets/readme-files/f1quiz-palette.png" width="600px">

### Typography 
- Teko was used for the logo and headings with sans-serif as the fallback font.
- Ubuntu was used for body/paragraph text with sans-serif as the fallback font.

### Wireframes
- [Balsamiq](https://balsamiq) was used to develop wireframes for mobile and desktop in the planning stage of the website. 
    - Introduction Area: <br> <image src="assets/readme-files/wireframe-intro-desktop.png" height="500px"></image> <image src="assets/readme-files/wireframe-intro-mobile.png" height="500px"></image>
    - Quiz Area: <br> <image src="assets/readme-files/wireframe-quiz-desktop.png" height="500px"></image> <image src="assets/readme-files/wireframe-quiz-mobile.png" height="500px"></image>
    - Results Area: <br> <image src="assets/readme-files/wireframe-results-desktop.png" height="500px"></image> <image src="assets/readme-files/wireframe-results-mobile.png" height="500px"></image>

## Features
### General
- The website incorporates a responsive design so it can be used across multiple device sizes. 
- The website uses a consistent colour scheme across the site. 
- The website has a background image of a F1 racing car inline with the theme. 
- All buttons on the website have a hover effect to give feedback to the user on their purpose. 
- Each page has a repsonsive footer with social media links. Social media links open in a new browser window.<br>
<image src="assets/readme-files/f1quiz-footer.png" width="700px"></image>

### Introduction Area
- This area contains two parts, a 'How to play' area and a 'Choose your quiz' area.
- The 'How to play' area details the rules of the quiz for the user including how to select and submit an answer, and how to move onto the next question.
- It also informs the user of the time penalty function in relation to their laptime.
- The 'Choose your quiz' area lets the user know which quiz game is easy and which quiz game is hard.
- By clicking on the buttons the appropriate quiz will load for the user.<br>
<image src="assets/readme-files/f1quiz-intro.png" width="700px"></image>

### Quiz Area
- The quiz area in the main game section of the website.
- This div loads the quiz name, questions and answers based on the button the user clicked in the introduction area. 
- The timer starts when the quiz loads.
- When the user hovers over an answer the text colour changes to red, when they leave an answer it goes back to grey. 
- When the user clicks an answer the text colour changes permanently to red so the user knows it has been selected. 
- When the user clicks 'submit' the answer will be assessed and either 'Score' or 'Time Penalties' will be incremented. 
- If the wrong answer was submitted, 10 seconds will be automatically added onto the 'Lap Time'.
- When the user clicks 'next' the next question will be loaded. 
- This area also contains a 'quit' button if the user wants to end the game. This button will bring the user back to the start of the website.<br>
<image src="assets/readme-files/f1quiz-quiz.png" width="700px"></image>

### Results Area
- This area contains the final result of the quiz.
- It displays Score, Time Penalties and Laptime. 
- This section also invites the user the play again and has buttons to select which quiz.
- This section contains a quit button which brings the user back to the start of the website.<br>
<image src="assets/readme-files/f1quiz-results.png" width="700px"></image>

### Future Features
- A leaderboard section where the user can save their score and compare their score to other players.
- Other quiz types can be added such as a Formula 1 history theme to add another level of difficulty. 

## Technologies Used

### Languages
- HTML
- CSS
- Javascript

### Frameworks, Libraries and Programmes
- [Balsamiq](https://balsamiq.com/): this was used to create wireframes in the planning stage of the project. 
- [Favicon](https://favicon.io/): this was used to generate a favicon for the website. 
- [Fontpair](https://www.fontpair.co/): this was used to find fonts that compliment each other. 
- [Google Fonts](https://fonts.google.com/): this was used to import fonts into the style.css file.
- [Coolers](https://coolors.co/): this was used to create a colour pallete for the website. 
- [Pixabay](https://pixabay.com/): this was used to find the background image for the project. 
- [Gitpod](https://www.gitpod.io/): this was used to write, commit and to push the code to Github. 
- [Github](https://github.com/): this was used to host and deploy the finished project. 
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/): this was used throughout the project to check responsiveness and debug. 
- [W3C Markup Validator](https://validator.w3.org/): this was used throughout the project to validate HTML code. 
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): this was used throughout the project to validate CSS code. 
- [JSHint](https://jshint.com/): this was used throughout the project to validate Javascript code. 
- [Responsive Design Checker](https://www.responsivedesignchecker.com/): this was used to check responsiveness on various device sizes. 
- [Am I Respsonsive?](https://ui.dev/amiresponsive): this was used to create an image to show how the site looks on different device sizes for this README file. 

## Testing

### Testing User Stories
- As a user, I want to be able to understand how to play the game.
    - The first area of the quiz explains how to answer and submit questions and also explains the scoring system. 
- As a user, I want to be able to choose a level of difficulty.
    - The quiz allows me to choose from two levels of difficulty.
- As a user, I want to be able to keep track of my progress during the quiz.
    - The quiz has a live score section so I can keep track of my answer success and time. 
- As a user, I want to be able to quit the game.
     - The quiz has a quit button so I can end the game.
- As a user, I want to be able to play again.
    - On the results page the quiz has options to play the quiz again or try the alternative quiz. 

### Code Validation
The following validators were used to test the code:
- [W3C Markup Validator](https://validator.w3.org/): No errors were reported when passing the final HTML code through the validator. 
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): No errors were reported when passing the final CSS code through the validator. <br>
- [JSHint](https://jshint.com/): No errors were reported when passing the final javascript code through the validator. <br>
The validators were used throughout the development stage of the website as part of ongoing testing of HTML, CSS and Javascript, and at the end of the project to complete a final code check. Examples of errors and warnings can be found below which were all resolved:
- Example 1: HTML Validator gave errors and warnings for dupliacte id names and missing space between atributes. <br> <image src="assets/readme-files/validator-html.png" width="600px"></image>
- Example 2: JSHint gave warnings for missing semicolons. <br> <image src="assets/readme-files/validator-jshint-1.png" width="600px"></image>
- Example 3: JSHint gave a syntax warning for an if else statement. <br> <image src="assets/readme-files/validator-jshint-1.png" width="600px"></image>

### Accessibility
The following tool was used to check accessibility of the website:
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/): was used to check the accessibility of the site and to see if there were issues. 
- Lighthouse Report:<br>
<image src="assets/readme-files/f1quiz-lighthouse-report.png" width="700px"></image>

### Tools Testing
The following tools were used to test the website:
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/): This was used throughout the project to test responsiveness, to de-bug any issues, and to test changes to HTML and CSS before implementing them in Gitpod. 
- [Responsive Design Checker](https://www.responsivedesignchecker.com/): This was used to check the responsiveness of each page of the site on different device sizes including mobile, tablet, laptop and desktop. 

### Device Testing
The website was manually tested on the following devices with no issues:
- Samsung Galaxy S10+
- MacBook Pro 13"
- Samsung 27" Desktop Monitor (s27a600uuu)

### Browser Testing
The website was tested on the following browsers with no issues:
- Google Chrome
- Safari
- Mozilla Firefox
- Microsoft Edge

### Feature Testing
The following features were manually tested:

TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
2022 Wrapped Button | When clicked, the quiz loads quiz A questions and answers for the user | PASS 
Driver Trivia Button | When clicked, the quiz loads quiz B questions and answers for the user | PASS 
Quit Button | When clicked, the user will be brought back to the initial quiz page and the quiz will reset  | PASS 
Lap Time feature | The clock starts when the quiz loads | PASS 
Option Hover Effect | When a user hovers over an answer it changes to red, when they move the mouse away, it goes back to grey | PASS 
Option Click Effect | When an answer option is clicked the text changes to red. If another answer is clicked, the first answer goes back to grey and the new answer is highlighted in red. | PASS 
Submit Button | When clicked the answer is checked. If the answer is correct the 'Score' is increased, if the answer is incorrect the 'Time Penalty' is increased. | PASS 
No Answer Selected | If the user clicks submit without selecting an answer they are thrown a warning | PASS
Time Penalty Feature | If the user selects the wrong answer, 10 seconds are automatically added onto the 'Lap Time'. | PASS 
Next Button | When the 'next' button is clicked the next question of the quiz loads. | PASS
Last Question Feature | When the last question of the quiz is answered the user is brought to the results page. | PASS
End of Quiz Reset | Once the last question is answered, all scoring parameters are reset should the user wish to try the quiz again. | PASS 
Footer Links | When a social media icon in the footer is clicked the website opens in a new browser tab | PASS
Responsiveness | Responsive Design Checker was used to check responsiveness across mobile, tablet, desktop and laptop | PASS
Accessibility | Accessibility was tested using Lighthouse in Chrome Developer Tools | PASS 

### Bugs
- The submit button was able to be clicked more than once, this meant that if the user double clicked the button their score would increment by two. To fix this issue, I used the disable property on the submit button. Now, when the user clicks 'submit' the submit button is disabled, then when the user clicks on 'next' the submit button is enabled once again for the next question. 
- The Lap Time timer had a glitch when the seconds were increasing from 09 to 10. A zero was appearing infront of the number 10 (Ex: 010) causing the score area to momentarily shift to the left which would have been noticeable for the user. I fixed this issue by updating the returnData function from > 10 to > 9. This fixed the bug and improved user experience. 
- There was a significant gap at the bottom of the div that holds the quiz on both mobile and tablet devices. To fix this I changed the height of the container div to 'fit-content' so that the design was responsive for these devices.
- The favicon icon was not working on the deployed site. I changed the file path structure in the head to fix this. 
- A user was able to click submit without selecting an answer which automatically logged an incorrect answer. To fix this, I used the classList property with the add() and remove() methods to check for the 'not-clicked' class. Now the user will receive an alert if they have not selected an answer before clicking the submit button. 

## Finished Product
- The live link to the completed product can be found here: https://orlagh-sweeney.github.io/f1-quiz/

## Deployment
The website was developed in Gitpod. It was then commited and pushed to GitHub. 
The finished site was then deployed to GitHub pages using the following steps: 
1. Open GitHub and click on the f1-quiz repository. 
2. Once inside the repository, locate and click on the Settings tab. 
3. On the left handside, under the 'Code and automation' section, click on Pages. 
4. In the Branch section, locate the dropdown menu and change it from None to Main. 
5. Click save. The page will refresh with a link to the website.

## Credit
### Content
All content was written by the developer. 
Answers to question were fact checked using the following websites:
- [Formula 1](https://www.formula1.com/en/results.html/2022/team.html)
- [statsf1](https://www.statsf1.com/en/2022.aspx)
- [racingnews365](https://racingnews365.com/f1-2022-drivers-ages-and-dates-of-birth)

### Media
- The backround image was taken from [Pixabay](https://pixabay.com/):
    - The background image is [car-racing-1404041_1920](https://pixabay.com/photos/car-racing-barcelona-formula-1-1404041/) by schuger.
- The favicon icon was created using [Favicon](https://favicon.io/).

### Code
- [Stackoverflow](https://stackoverflow.com/) and [W3Schools](https://www.w3schools.com/) were used throughout the development to educate myself and to seek help and clarification features. 
- In particular I used the following resources in my project: 
    - I used W3Schools to create a fixed footer. I used the solution on the [Fixed Footer](https://www.w3schools.com/howto/howto_css_fixed_footer.asp) page. 
    - I used code from CodeExpainedRepo to create the functions to call Quiz A or Quiz B questions: [CodeExplainedRepo](https://github.com/CodeExplainedRepo/Multiple-Choice-Quiz-JavaScript/blob/master/quiz.js).   
    - I used code from an article by Walter Nacimento on [dev.to](https://dev.to/) to create the quiz timer: [Creating a timer with javascript](https://dev.to/walternascimentobarroso/creating-a-timer-with-javascript-8b7).
    - I used a solution by Max Lemieux on Stackoverflow to add the 10 second time penalty for wrong aswers: [Max Lemieux answer](https://stackoverflow.com/a/60370583).

## Acknowledgements
- Thank you to my mentor Marcel for his feedback and suggestions at each stage of the project.
- Thank you to Code Institute for providing me with the tools and skills to complete this project. 
