# Exchangeagram -- now your pictures can live on-the-line!!!
[Exchangagram clip](https://www.youtube.com/watch?v=JfhV_ezOxgA)

## Introduction
> I created a image-forward social media app, recreating the functionality of instagram. This is a full stack web application using a react front-end and node.js back-end.

## Tech Stack:
* React
* Node.js
* Express
* MongoDB
* Mongoose
* json web tokens
* bcrypt
* multer

## Features
* User account creation/storage with password hashing.
* User authentication via json web tokens on sign in or sign up.
* in-line alerts for any form errors.
* Default user profile images with the option to upload and store new ones.
* Scrollable post feed that users can post to/comment on existing posts.
* Abilitiy to like and unlike posts.
* Follower and following relationships with other users.
* Users can view and edit their own profile page.
* Users can view other users profile pages but display changes to show a "follow" button.
* New post modal when adding posts.
* Update profile modal when updating profile.
* Axios calls used virtually everywhere.

## Wireframes
![signin Wireframe](/wireframes/signin.png)

![alt text](/wireframes/signup.png)

![alt text](/wireframes/feed.png)

![alt text](/wireframes/new-post-modal.png)

![alt text](/wireframes/profile.png)

<img src="wireframes/edit-profile.png">
![alt text](/src/wireframes/edit-profile.png)

![alt text](/wireframes/profile-img-modal.png)


## Author
* [Paul Mourraille](https://github.com/pmourraille)

## Acknowledgments
> [Kenny Bushman](https://github.com/kbbushman) and [Brock Whitbread-Cole](https://github.com/brockwc) and * [Gabriel Ng](https://github.com/gabe-ng) for countless hours of problem solving.



## Future additions
* Incorporating filters into post uploads.
* adding logic to likes to allow to only select once per user.
* Integrating redux to handle state. for answering all my questions.





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

