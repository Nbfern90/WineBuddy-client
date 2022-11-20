# WineBuddy-Frontend

![WINEBUDDY](/src/img/WineBuddy-Dash.png)

## Background

The purpose of this App was to show CRUD functionality using the MERN stack. WineBuddy Gives users the ability to showcase wines they've enjoyed while learning about wine that other users enjoyed.

BACKEND - https://github.com/Nbfern90/WineBuddy-server

## Features

- Registration
  ![Registration](/src/img/WineBuddy-Reg.png)
- Login
  ![Login](/src/img/WineBuddy-login.png)
- User's Wines
  ![Wines](/src/img/WineBuddy-Wines.png)
- Single Wine
  ![One Wine](/src/img/WineBuddy-oneWine.png)
- Edit Page
  ![Edit Page](/src/img/WineBuddy-Edit.png)

## Technologies

- React
- Redux
- CSS and Bootstap
- npm-
  **Dependencies**
  - axios: ^1.1.2
  - bootstrap: ^5.2.2
  - react: ^18.2.0
  - react-dom: ^18.2.0
  - react-icons: ^4.4.0
  - react-modal: ^3.16.1
  - react-redux: ^8.0.4
  - react-router-dom: ^6.4.2
  - react-scripts: ^5.0.1
  - react-toastify: ^9.0.8
  - web-vitals: ^2.1.4

## Functionality

When the user reaches the home page, they see a list of all currently registerd users and have access to viewing the wines those users have added.In the top right hand side of the Header, the user is given the option to login to an existing account or to register a new one.

Once registered or logged in, the Links in the Header now direct to "My Wines", which showcases the users added wines and Logout, which logs the user out and clears their data from localstorage. The user is now able to add wines of their own from the dashboard or by navigating to their wine page via the "My Wines" link now in the header.

After adding a wine of their choosing, the user is able to view said wine as well as well as gain the ability to edit said wine. On the edit page, the user is also given the option to delete the wine.
If the user chooses to do so they are presented with a prompt asking them if they are sure they wish to delete or cancel their choice. Upon deleteing they are redirected back to their wine page.

# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
