import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import Routes from './Routes';
import { addListener } from './ReduxStore';

// Create a React component that connects the navigation to Redux
/* eslint-disable react/prefer-stateless-function */
class Navigator extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    nav: PropTypes.object,
  }

  render() {
    const { dispatch, nav } = this.props;

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

const mapStateToProps = ({ nav }) => ({ nav });

const mapDispatchToProps = dispatch => ({
  // ...actions,
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigator);
