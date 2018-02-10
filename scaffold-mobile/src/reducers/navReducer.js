import Routes from '../config/Routes';

const initialState = Routes.router.getStateForAction(Routes.router.getActionForPathAndParams('Home'));

export default (state = initialState, action) => {
  const nextState = Routes.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
