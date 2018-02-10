import { NavigationActions } from 'react-navigation';


const navigate = (navigation, screen) => {
  const navigateToLogin = NavigationActions.navigate({
    routeName: screen,
  });
  navigation.dispatch(navigateToLogin);
};

const resetAndNavigate = (navigation, ...screens) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: screens[0],
        params: {},
      }),
    ],
  });
  navigation.dispatch(resetAction);

  for (let i = 1; i < screens.length; i += 1) {
    const navigateAction = NavigationActions.navigate({
      routeName: screens[i],
    });
    navigation.dispatch(navigateAction);
  }
};

export {
  navigate,
  resetAndNavigate,
};
