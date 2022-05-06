# Playwright_letcode.in_Automation
Automation https://letcode.in/ using playwright,POM pattern
-----------------------------------------------------------
## Technology: <br>
* Automation Framework: Playwright <br>
* Build tool: npm <br>
* Bundled Tools: Mocha, Chai
* Language: Javascript,Typescript <br>
* Report: Allure,html-report <br>
* Dependency/Packages:{
   "@playwright/test": "^1.20.2",
   "@types/adm-zip": "^0.4.34",
    "adm-zip": "^0.5.9",
    "allure-playwright": "^2.0.0-beta.15",
    "clipboardy": "^3.0.0",
    "cross-env": "^7.0.3"
} <br>
* IDE: Visual Studio Code <br>

----------------------------------------------------------

## Requirement:<br>
1. Automate https://letcode.in/test UI
2. Automate Simple Book API

----------------------------------------------------------

## Prerequisite:
The following software are required:

1. nodejs : Download and Install Node JS from<br>
    https://nodejs.org/en/download/<br>
2. Install Java 8 or above, Allure Reports require Java 8 or higher.<br>
3. allure commandline : Install allure command line for generating Allure Reports using<br>
    npm install -g allure-commandline<br>
    
----------------------------------------------------------

## Installation:
1. Clone the repo using below URL<br>
  https://github.com/acharjeeauntor/Playwright_letcode.in_Automation.git<br>
2. Navigate to folder and install npm packages using:<br>
  npm install<br>

----------------------------------------------------------

## Usage:
1. For Browser Configuration, change required parameters in "playwright.config.ts".<br>
2. For execution entire test suite of functional test on all available browsers simultaneously execute below command where "ENV" can be "functional" or "api",Test Cases are present in "tests" folder:<br>
    npx cross-env ENV=functional npm run test:functional<br>
3. For executing single test case on Chrome browser execute the below command, you can change the browser for execution e.g. if you want to run test cases on Firefox, you can change --project=Firefox against test:single in package.json, just make sure the browser name given matches the name given in playwright.config.ts.<br>
    npx cross-env ENV=functional npm run test:single<br>
4. For executing API test cases, please provide "ENV" value as "api":<br>
    npx cross-env ENV=api npm run test:api<br>
5. For Allure Report generation execute :<br>
    npm run allureReport<br>

----------------------------------------------------------
## Allure Report view for functional test:
![Screenshot from 2022-04-03 23-40-01](https://user-images.githubusercontent.com/38497405/161562400-63dfb320-1ff2-4bf4-9c94-50a41d0414fe.png)
![Screenshot from 2022-04-03 23-40-19](https://user-images.githubusercontent.com/38497405/161562405-947fc7bc-919a-4199-95dd-e0b5ed7894d3.png)
![Screenshot from 2022-04-03 23-40-31](https://user-images.githubusercontent.com/38497405/161562419-9406e82c-8244-4de2-91a4-f576eadf8c60.png)
![Screenshot from 2022-04-03 23-40-45](https://user-images.githubusercontent.com/38497405/161562436-ff4df267-99d5-417c-9f98-1dfd8a568752.png)

## Allure Report view for API test:
![Screenshot from 2022-04-03 23-43-19](https://user-images.githubusercontent.com/38497405/161562622-5ec9cff5-3511-4b14-a7cc-2ef7fb4dcdd1.png)
![Screenshot from 2022-04-03 23-43-32](https://user-images.githubusercontent.com/38497405/161562636-ac449b50-5c0a-4d0f-8714-2366cf7b185c.png)
![Screenshot from 2022-04-03 23-43-44](https://user-images.githubusercontent.com/38497405/161562648-17ac23bc-3a24-48a8-9c73-edb998f92361.png)
![Screenshot from 2022-04-03 23-43-57](https://user-images.githubusercontent.com/38497405/161562660-bb69a041-46ae-40b6-8d47-fc3d89e58522.png)

## To See the Demo Video click [here](https://youtu.be/7CtRJizJ4HE)



