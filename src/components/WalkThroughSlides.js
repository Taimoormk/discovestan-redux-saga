// ########## Import Dependencies Here ##########
import { StyleSheet } from 'react-native';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  }
});

export const slides = [
  {
    key: 'slide1',
    title: 'Discovestan',
    text: 'Discover Pakistan \n with us - We shall explore it together!',
    image: require('../image/1.png'),
    imageStyle: styles.image,
    backgroundColor: '#006600',
  },
  {
    key: 'slide2',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../image/2.png'),
    imageStyle: styles.image,
    backgroundColor: '#006600',
  },
  {
    key: 'slide3',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../image/2.png'),
    imageStyle: styles.image,
    backgroundColor: '#006600',
  }
];