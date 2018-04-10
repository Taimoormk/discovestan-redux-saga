// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########

export default class Emojis extends Component {
  render() {
    return(
      <View style={styles.emojisContainer}>
        <Animatable.Image style={styles.emojis} source={require('../image/emoji_1.png')} animation="flash" easing="ease-out" iterationCount="infinite" delay={2000} duration={2000}/>
        <Animatable.Image style={styles.emojis} source={require('../image/emoji_2.png')} animation="jello" easing="ease-out" iterationCount="infinite" delay={2000} duration={2000}/>
        <Animatable.Image style={styles.emojis} source={require('../image/emoji_3.png')} animation="bounce" easing="ease-out" iterationCount="infinite" delay={2000} duration={2000}/>
        <Animatable.Image style={styles.emojis} source={require('../image/emoji_4.png')} animation="pulse" easing="ease-out" iterationCount="infinite" delay={2000} duration={2000}/>
        <Animatable.Image style={styles.emojis} source={require('../image/emoji_5.png')} animation="rotate" easing="ease-out" iterationCount="infinite" delay={2000} duration={2000}/>
        <Animatable.Image style={styles.emojis} source={require('../image/emoji_6.png')} animation="rubberBand" easing="ease-out" iterationCount="infinite" delay={2000} duration={2000}/>
        <Animatable.Image style={styles.emojis} source={require('../image/emoji_7.png')} animation="shake" easing="ease-out" iterationCount="infinite" delay={2000} duration={2000}/>
        <Animatable.Image style={styles.emojis} source={require('../image/emoji_8.png')} animation="swing" easing="ease-out" iterationCount="infinite" delay={2000} duration={2000}/>
        <Animatable.Image style={styles.emojis} source={require('../image/emoji_9.png')} animation="tada" easing="ease-out" iterationCount="infinite" delay={2000} duration={2000}/>
        <Animatable.Image style={styles.emojis} source={require('../image/emoji_10.png')} animation="wobble" easing="ease-out" iterationCount="infinite" delay={2000} duration={2000}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emojisContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  emojis: {
    width: 18,
    height: 18,
    marginLeft: 5,
  }
})