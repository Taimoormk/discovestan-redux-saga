// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// ########## Import Screens Here ##########
import WalkThrough from './src/screens/WalkThrough';

// ########## Import Components Here ##########
import { Drawer } from './src/config/router';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    let { isLoggedIn } = this.props
    return (
      (isLoggedIn) ? <Drawer /> : <WalkThrough />
    );
  }
}

function mapStateToProps({launchAppReducer}) {
  return {
    isLoggedIn: launchAppReducer.isLoggedIn
  }
}

export default connect(mapStateToProps, {})(App);