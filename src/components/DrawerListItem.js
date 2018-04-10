// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class DrawerListItem extends Component {

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    let { item, index} = this.props;
    return (
      <View style={styles.drawerListItemContainer}>
        <TouchableOpacity
          style={styles.drawerListItemButton}
          onPress={this.navigateToScreen(item.screenName)}
        >
          <Icon
            style={styles.drawerListItemIcon}
            name={item.icon} 
            size={20} 
            type='material' 
            color='#ffffff' 
            margin={20} 
          />
          <Text
            style={styles.drawerListItem}
            key={index}
          >
            {item.categoryName}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerListItemContainer: {
    backgroundColor: '#3e3e3e',
    height: 35,
    justifyContent: 'center',
  },
  drawerListItemButton: {
    flex: 1,
    flexDirection: 'row',
  },
  drawerListItemIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerListItem: {
    color: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 35,
  }
})