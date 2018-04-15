// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { 
  Image, 
  TouchableOpacity, 
  Dimensions, 
  View, 
  Text, 
  Button, 
  StyleSheet 
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

// ########## Import Screens Here ##########
import Home from '../screens/Home';
import HomeDetails from '../screens/HomeDetails';
import Web from '../screens/Web';
import WebDetails from '../screens/WebDetails';
import Mobile from '../screens/Mobile';
import MobileDetails from '../screens/MobileDetails';
import Lifestyle from '../screens/Lifestyle';
import LifestyleDetails from '../screens/LifestyleDetails';
import Category from '../screens/Category';
import CategoryDetails from '../screens/CategoryDetails';
import WriteForUs from '../screens/WriteForUs';

// ########## Import Components Here ##########
import DrawerComponent from '../components/DrawerComponent';
import menuItems from '../components/menuItems';

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Home',
      headerRight: (
        <TouchableOpacity onPress={() => {navigation.navigate('DrawerToggle')} }>
        <Icon
          name="bars"
          type="font-awesome"
          size={25}
          color={'#006600'}
          margin={10}
        />
        </TouchableOpacity>
      )
    })
  },
  HomeDetails: {
    screen: HomeDetails,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Home Read more'
    })
  }
})

const WebStack = StackNavigator({
  Web: {
    screen: Web,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Web',
      headerRight: (
        <TouchableOpacity onPress={() => {navigation.navigate('DrawerToggle')} }>
        <Icon 
          name="bars" 
          type="font-awesome" 
          size={25} 
          color={'#006600'}
          margin={10} 
        />
        </TouchableOpacity>
      )
    })
  },
  WebDetails: {
    screen: WebDetails,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Web Read more'
    })
  }
})

const MobileStack = StackNavigator({
  Mobile: {
    screen: Mobile,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Mobile',
      headerRight: (
        <TouchableOpacity onPress={() => {navigation.navigate('DrawerToggle')} }>
        <Icon 
          name="bars" 
          type="font-awesome" 
          size={25} 
          color={'#006600'}
          margin={10} 
        />
        </TouchableOpacity>
      )
    })
  },
  MobileDetails: {
    screen: MobileDetails,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Mobile Read more'
    })
  }
})

const LifestyleStack = StackNavigator({
  Lifestyle: {
    screen: Lifestyle,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Lifestyle',
      headerRight: (
        <TouchableOpacity onPress={() => {navigation.navigate('DrawerToggle')} }>
        <Icon 
          name="bars" 
          type="font-awesome" 
          size={25} 
          color={'#006600'}
          margin={10} 
        />
        </TouchableOpacity>
      )
    })
  },
  LifestyleDetails: {
    screen: LifestyleDetails,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Lifestyle Read more'
    })
  }
})

const CategoryStack = StackNavigator({
  Category: {
    screen: Category,
    navigationOptions: ({navigation, menuItems}) => ({
      headerTitle: 'Category',
      headerRight: (
        <TouchableOpacity onPress={() => {navigation.navigate('DrawerToggle')} }>
        <Icon 
          name="bars" 
          type="font-awesome" 
          size={25} 
          color={'#006600'}
          margin={10} 
        />
        </TouchableOpacity>
      )
    })
  },
  CategoryDetails: {
    screen: CategoryDetails,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'Category Read more'
    })
  }
})

const ChatStack = StackNavigator({
  WriteForUs: {
    screen: WriteForUs,
    navigationOptions: ({navigation}) => ({
      headerTitle: 'WriteForUs'
    })
  }
})

export const Drawer = DrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: ({navigation}) => ({
      drawerLabel: 'Home',
      drawerIcon: <Icon name="home" />
    })
  },
  Web: {
    screen: WebStack,
    navigationOptions: ({navigation}) => ({
      drawerLabel: 'Web',
      drawerIcon: <Icon name="home" />
    })
  },
  Mobile: {
    screen: MobileStack,
    navigationOptions: ({navigation}) => ({
      drawerLabel: 'Web',
      drawerIcon: <Icon name="home" />
    })
  },
  Category: {
    screen: CategoryStack,
    navigationOptions: ({navigation}) => ({
      drawerLabel: 'Category',
      drawerIcon: <Icon name="home" />
    })
  },
  Lifestyle: {
    screen: LifestyleStack,
    navigationOptions: ({navigation}) => ({
      drawerLabel: 'Lifestyle',
      drawerIcon: <Icon name="home" />
    })
  },
  WriteForUs: {
    screen: WriteForUs,
    navigationOptions: ({navigation}) => ({
      drawerLabel: 'WriteForUs',
      drawerIcon: <Icon name="home" />
    })
  }
},
{
  drawerPosition: 'left',
  initialRouteName: 'Home',
  paths: 'DrawerComponent',
  contentComponent: ({navigation, menuItems}) => <DrawerComponent menuItems={menuItems} navigation={navigation} />,
})