// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { connect } from 'react-redux';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import { slides } from '../components/WalkThroughSlides';
import { handleIsLoggedInAction } from '../actions';

class Walkthrough extends Component {
  render() {
    let { handleIsLoggedInAction } = this.props;
    console.log('walkthrough', this.props);
    return (
      <AppIntroSlider
        slides={slides}
        onDone={handleIsLoggedInAction}
      />
    );
  }
}

function mapStateToProps({launchAppReducer}) {
  return {
  }
}

export default connect(mapStateToProps,{ handleIsLoggedInAction })(Walkthrough);