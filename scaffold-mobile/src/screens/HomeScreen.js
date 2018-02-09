import React, { Component } from 'react';

import {
  Loading,
  Placeholder,
} from './../components';


export default class HomeScreen extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => this.everythingLoaded(), 1000);
  }

  everythingLoaded() {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return <Placeholder />;
  }
}
