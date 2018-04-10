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

export default class DrawerComponent extends Component {
  render() {
    console.log('DrawerComponent props', this.props)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Avatar
              large
              rounded
              source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
              activeOpacity={0.8}
            />
          </View>
          <View style={styles.userDetails}>
            <Text>
              Firstname Lastname
            </Text>
            <Text>
              xyz@abc.com
            </Text>
          </View>
        </View>
        <View style={styles.body}>
        <SectionList
          renderItem={({item, index}) => <DrawerListItem item={item} index={index} navigation={this.props.navigation} />}
          renderSectionHeader={({section, index}) => <DrawerHeader section={section} index={index} />}
          sections={
            menuItems
          }
        />
        </View>
        <View style={styles.footer}>
          <Text style={styles.button}>
            Sign Out
        </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 3,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userDetails: {
    flex: 2.5,
  },
  body: {
    flex: 6,
    alignSelf: 'stretch'
  },
  sectionStyle: {
    height: 30,
    backgroundColor: '#006600',
  },
  sectionHeading: {
    textAlign: 'center',
    lineHeight: 30,
    color: '#ffffff'
  },
  navStyle: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#3f3f3f',
  },
  navIconStyle: {
  },
  navItemStyle: {
    lineHeight: 40,
    color: '#ffffff',
    marginLeft: 20,
  },
  footer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'yellow'
  },
  button: {
    padding: 25,
    borderColor: 'black',
    backgroundColor: '#4286f4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'white'
  }
});