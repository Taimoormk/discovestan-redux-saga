// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ListView, Platform, SectionList } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import RNFetchBlob from 'react-native-fetch-blob';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import { menuItems } from '../components/menuItems';
import DrawerHeader from '../components/DrawerHeader';
import DrawerListItem from '../components/DrawerListItem';

export default class HomeDetails extends Component {
  render() {
    return(
      <View>
        <Text>
          Home Details
        </Text>
      </View>
    );
  }
}