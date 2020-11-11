# React E-Commerce Application
The applications shows an E-Commerce application written in React.js

## WEBSITE URL
https://e-commerce-9961f.web.app/

## Create React Application
- Make sure that you have the latest version of Node.js
- Run the command ```npx create-react-app e-commerce```

## Firebase Setup
- Create Firebase project
- Visit </> link (located top left)
- Name your App
- Once completed, visit Settings (Click Gear Icon in the left side menu next to the Project Overview)
- Under Your Apps section, click Config to copy the configuration settings
- Create /src/firebase.js file and paste the config settings in there. They should be similar to /src/firebase.example.js
- Run the command: ```npm install -g firebase-tools```
- Login with the command: ```firebase login```
- Run the command: ```firebase init```
  - Are you ready to proceed? (Y/n): ```Y```
  - Select (with Spacebar): ```Hosting: Configure and deploy Firebase Hosting sites```
  - Select (with Spacebar): ```Use an existing Project```
  - Select your firebase project that you setup
  - What do you want to use as your public directory (public): ```build```
  - Configure as a single-page app (rewrite all urls to /index.html)? (y/N): ```y```
  - Set up automatic builds and deploys with GitHub? (y/N): ```N```

## Cloud Functions
  - Run the command ```firebase init```
  - Are you ready to proceed ```Y```
  - Select (with Spacebar): ```Functions: Configure and deploy Cloud Functions```
  - What language would you like to use to write Clound Functions (Use arrow keys): ```JavaScript```
  - Do you wnat to use ESLint to catch probable bugs and enforce style? (y/N): ```y```
  - Do you want to install dependencies with npm now? (Y/n): ```Y```
  - Inside of your functions folder, run the following commands
    - ```npm install express```
    - ```npm install cors```
    - ```npm install stripe```

## Materia UI
- Visit materia-ui.com
- To install, run ```npm install @material-ui/core```
- Run the command ```npm install @material-ui/icons```

## react-router-dom
- Run the command ```npm install react-router-dom```

## react-currency-format
- Run the command ```npm install react-currency-format```

## Deployment
- After the Firebase configuration has been setup, run the command: ```npm run build```
  - This creates an optimized production build
- Run the command: ```firebase deploy```
- Every time that you make a change, you will have to rerun the commands:
  - ```npm run build```
  - ```firebase deploy```

## Stripe (CC Processing)
- If you haven't already, upgrade Firebase to Blaze account
- Run the command ```npm install @stripe/stripe-js```
- Run the command ```npm install @stripe/react-stripe-js```
- Create Stripe Account

## Axios
- Run the command ```npm install axios```