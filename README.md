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

## Motivation
* to change the world!
* Wanted to get better aquainted with REACT...  what better way than modeling a successful social media app with many complex components.  Additionally I wanted to better understand relationships within REACT and Node.js.  As you can see by the ERD, social media components have no shortage of relationships.

## ERD model
![erd-model](/erd/erd.png)

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

## Author
* [Paul Mourraille](https://github.com/pmourraille)


## Wireframes
![signin](/wireframes/signin.png)

![signup](/wireframes/signup.png)

![feed](/wireframes/feed.png)

![new-post-modal](/wireframes/new-post-modal.png)

![profile](/wireframes/profile.png)

![edit-profile](/src/wireframes/edit-profile.png)

![profile-modal](/wireframes/profile-img-modal.png)


## Future additions
* Incorporating filters into post uploads.
* adding logic to likes to allow to only select once per user.
* Integrating redux to handle state. for answering all my questions.
* created following and follower relationships but need to finish connecting.
* incorporate image dropzone.





