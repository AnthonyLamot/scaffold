import { StackNavigator } from 'react-navigation';

import Home from './../screens/Home';
import Login from './../screens/Login';


// Define which routes a user can navigate to
const Routes = new StackNavigator({
  Home: {
    screen: Home,
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
});

export default Routes;
