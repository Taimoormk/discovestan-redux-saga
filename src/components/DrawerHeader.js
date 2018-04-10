// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class DrawerHeader extends Component {
  render() {
    let { index, section } = this.props;
    return (
      <View style={styles.drawerHeaderContainer}>
        <Text 
          style={styles.drawerHeader}
          key={index}
        >
          {section.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerHeaderContainer: {
    backgroundColor: '#006600',
    height: 50,
    justifyContent: 'center'
  },
  drawerHeader: {
    textAlign: 'center',
    color: '#ffffff',
  }
})