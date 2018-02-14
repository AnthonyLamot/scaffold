# scaffold
Mobile client (React Native) + backend (Node) scaffold to quickly set up new apps.

To run backend on machine:
`$ cd scaffold-backend && yarn dev`

To run mobile client on machine:
Open with Expo and run on iOS simulator (or an Android emulator like Genymotion).

Includes:
- Modular folder structure. More boilerplate but makes the app more scalable.
- Express / NodeJS to run backend, Mongoose to connect to MongoDB
- React Native app created as Expo project
- Redux to manage UI state on client
- React Navigation to navigate the mobile client, integrated into Redux
- Some helper functions. `import { navigate, resetAndNavigate } from './../helpers/navigationHelpers`. Use `navigate(navigation, <nameOfYourScreen>` to navigate to screen which will rest on top of the nagivation stack, use `resetAndNavigate(navigation, <nameOfScreen1>, <nameOfScreen2>,...)` to define explicitely which navigation stack to go to.
- User registration form using Redux Form

To add:
- Password encryption
- User log in
- A module to create some kind of records (other than user data)
- Email services (for user registration etc)
- Web client (React)
