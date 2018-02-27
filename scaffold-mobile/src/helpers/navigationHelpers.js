import { NavigationActions } from 'react-navigation';


// Define helpers to make navigation a litlte easier

const navigate = (navigation, screen) => {
  const navigateAction = NavigationActions.navigate({
    routeName: screen,
  });
  navigation.dispatch(navigateAction);
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
    key: null,
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
