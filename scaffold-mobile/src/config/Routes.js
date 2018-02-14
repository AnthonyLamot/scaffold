import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from './../screens/Home';
import Login from './../screens/Login';
import Register from './../screens/Register';
import MyProfile from './../screens/MyProfile';

// Define which routes a user can navigate to

// These are routes for logged-in users and will be passed to Routes
const UserRoutes = new DrawerNavigator({
  MyProfile: {
    screen: MyProfile,
  },
});

// These are the hightest level of routes
const Routes = new StackNavigator({
  Home: {
    screen: Home,
  },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  UserRoutes: {
    screen: UserRoutes,
  },
});

export default Routes;
