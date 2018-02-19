import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from './../screens/Home';
import Login from './../screens/Login';
import Register from './../screens/Register';
import MyProfile from './../screens/MyProfile';
import Events from './../screens/Events';
import CreateEvent from './../screens/CreateEvent';

import Colors from '../config/Colors';


const SCREEN_WIDTH = Dimensions.get('window').width;

// Define which routes a user can navigate to

// Screens used in the drawer get their own stack so we can specify more options
const HomeStack = new StackNavigator({
  Home: {
    screen: Home,
  },
});

const LoginStack = new StackNavigator({
  Login: {
    screen: Login,
  },
});

const RegisterStack = new StackNavigator({
  Register: {
    screen: Register,
  },
});

// These are routes for the Events module
const EventsStack = new StackNavigator({
  Events: {
    screen: Events,
  },
  CreateEvent: {
    screen: CreateEvent,
  },
});

const MyProfileStack = new StackNavigator({
  MyProfile: {
    screen: MyProfile,
  },
});

// These are routes for logged-in users and will be passed to Routes
const UserDrawer = new DrawerNavigator({
  Events: {
    screen: EventsStack,
  },
  'My Profile': {
    screen: MyProfileStack,
  },
}, {
  drawerWidth: SCREEN_WIDTH * 0.6,
  contentOptions: {
    activeTintColor: Colors.$white,
    inactiveTintColor: Colors.$white,
    activeBackgroundColor: Colors.$blue,
  },
  drawerBackgroundColor: Colors.$green,
});

// These are the hightest level of routes
const Routes = new StackNavigator({
  HomeStack: {
    screen: HomeStack,
  },
  LoginStack: {
    screen: LoginStack,
  },
  RegisterStack: {
    screen: RegisterStack,
  },
  UserRoutes: {
    screen: UserDrawer,
  },
}, {
  headerMode: 'none',
});

export default Routes;
