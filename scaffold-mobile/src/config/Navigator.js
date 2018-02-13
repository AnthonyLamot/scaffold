import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';

import {
  Loading,
} from '../components';

import Routes from './Routes';
import { addListener } from './ReduxStore';
import { setLoading } from '../actions/loadingActions';

// Create a React component that connects the navigation to Redux
class Navigator extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    nav: PropTypes.object,
    loading: PropTypes.bool,
  }

  componentDidMount() {
    // Make sure Android back button works
    // https://reactnavigation.org/docs/custom-android-back-button-handling.html
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);

    // We set a timeout just to show the loading actually works
    // In a real app, replace this with e.g. a data fetch you want to wait for
    setTimeout(
      () => this.props.dispatch(setLoading(false)),
      1000,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;

    // If the app is still loading, we render the Loading component
    if (this.props.loading) {
      return <Loading />;
    }

    return (
      <Routes
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

// Map the Redux store's state to this component
const mapStateToProps = ({
  nav,
  loading,
}) => ({
  nav,
  loading,
});

// Map dispatch (for navigation) and other actions to this component
const mapDispatchToProps = dispatch => ({
  setLoading,
  dispatch,
});

// Connect the component to Redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigator);
