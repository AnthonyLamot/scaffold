# Description

Mobile client (React Native) + backend (Node) scaffold to quickly set up new apps.


# How to use

To run backend on machine:
- Run docker-compose up -d db or install MongoDB & `$ mongod` from terminal
- `$ cd scaffold-backend && yarn dev` to boot the server
- Recommended to get MongoDB Compass to easily check records in the database
- Recommended to get Postman if you would like to test the server API

To run mobile client on machine:
- Install Expo and run `scaffold-mobile`
- Install Redux Devtools and point to port 19001 (just open a new tab within Redux Devtools and confirm the port)
- Run the app from Expo on the iOS Simulator or an Android Emulator (Genymotion recommended)


# Contents

Includes:
- Modular folder structure. More boilerplate but makes the app more scalable.
- Express / NodeJS to run backend, Mongoose to connect to MongoDB
- React Native app created as Expo project
- Redux to manage UI state on client, with Redux Thunk for asynchronous calls
- React Navigation to navigate the mobile client, integrated into Redux
- Some helper functions. `import { navigate, resetAndNavigate } from './../helpers/navigationHelpers`. Use `navigate(navigation, <nameOfYourScreen>` to navigate to screen which will rest on top of the nagivation stack, use `resetAndNavigate(navigation, <nameOfScreen1>, <nameOfScreen2>,...)` to define explicitely which navigation stack to go to.
- User registration (using bcrypt for password hashing) and login
- Simple "events" functionality: Users can create and see events

To add:
- Use login history on server
- Add user sessions and add security so only logged in users can use events API
- Email services (for user registration etc)
- Web client (React)
