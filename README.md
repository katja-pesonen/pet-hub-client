# Pet Hub

## Description

Pet Hub is a fun website where you can view profiles of peoples pets, and upload your own pets too! Sign up & log in to add your furry friends to the site!

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start saving my pets
-  **Login:** As a user I can login to the platform so that I can see my pets
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Pets** As a user I can add my pet so that I can share it with the community
-  **List Pets** As a user I want to see a list of pets so that I view their profiles
-  **Create a Comment** As a user I can create a comment on a pets profile


## Backlog

User profile:
- user avatar/picture
- see other users profile 

Pet profile:
- likes on a pet
- search function
  
# Client

## Routes

- / - Homepage
- /auth/signup - Signup form
- /auth/login - Login form
- /api/pets/ - all pets page
- /api/pets/:id - one pets profile page
- /api/pets/create - create pet
- /api/user/profile - users profile page
- 404 - error page

## Pages

- Home Page (public)
- Sign in Page (anon only)
- Log in Page (anon only)
- All pets page (user only)
- My Profile Page (user only)
- 404 Page (public)

## Components

- Layout component
- Search component
- Update pet details modal
- Button component




## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.getUser() // synchronous
- Pet Service
  - Pet.list()
  - Pet.create(data)
  - Pet.detail(id)
  

# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
```

Pet model

```
owner - ObjectID<User> // required
name - String // required
type - String
age - String
description - String
comments - [String]
```

Comments model

```
author - ObjectID<User> // required
comment - String // required
```


## API Endpoints/Backend Routes

- GET /auth/
- POST /auth/signup
  - body:
    - username
    - email
    - password
- POST /auth/login
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- POST /user/me/favorite
  - body:
    - restaurantId
- DELETE /user/me/favorite/:restaurantId
  - body: (empty)
- GET /restaurant
- POST /restaurant
  - body:
    - name
    - phone
    - address
- GET /restaurant/:id

  

## Links

### Trello/Figma

[Link to your figma board](https://www.figma.com/file/bTnYu1tS0YwLHoOkEOQ1rW/Pet-App?node-id=0%3A1)

[Link to your trello board](https://trello.com/b/hbYrvlFX/pet-hub-trello-board) 

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/katja-pesonen/pet-hub-client)

[Server repository Link](https://github.com/katja-pesonen/pet-hub-server)


[Deploy Link](https://pet-hub-app.netlify.app/)

[Backend Link](https://pet-hub-app.herokuapp.com)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1I72dnqW-gwcKugh6XmmJCPE2X9Yim8WNXiAAqIYrbtU/edit?usp=sharing)
