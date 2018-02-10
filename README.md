# scaffold
Mobile client (React Native) + backend (Node) scaffold to quickly set up new apps.

To run backend on machine:
`$ cd scaffold-backend && yarn dev`

To run mobile client on machine: Open with Expo and run on iOS simulator (or Android emulator).

Includes:
- Modular folder structure. More boilerplate but makes the app more scalable.
- Express / NodeJS to run backend, Mongoose to connect to MongoDB
- React Native app created as Expo project
- Redux to manage UI state on client
- React Navigation to navigate the mobile client, integrated into Redux
- Some helper functions. `import { navigate, resetAndNavigate } from './../helpers;`. Use `navigate(navigation, <nameOfYourScreen>` for a simple navigate to the screen, use `resetAndNavigate(navigation, <nameOfScreen1>, <nameOfScreen2>,...)` to navigate to a screen which rests on top a stack of other screens.

To add:
- Connecting client and backend
- User registration & log in
- Email services (for user registration etc)
- Web client (React)
