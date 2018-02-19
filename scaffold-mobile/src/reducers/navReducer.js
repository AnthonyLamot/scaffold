import Routes from '../config/Routes';

// Don't decale initialState for navigation if you have a stacknavigator as a screen
const initialState = Routes.router
  .getStateForAction(Routes.router.getActionForPathAndParams('HomeStack'));

export default (state = initialState, action) => {
  const nextState = Routes.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
