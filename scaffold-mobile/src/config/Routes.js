import { StackNavigator } from 'react-navigation';

import Home from './../screens/Home';
import Login from './../screens/Login';
import Register from './../screens/Register';


// Define which routes a user can navigate to
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
});

export default Routes;
