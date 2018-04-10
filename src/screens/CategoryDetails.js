// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { 
  Text, 
  Image, 
  View, 
  ScrollView, 
  Dimensions, 
  StyleSheet 
} from 'react-native';
import FitImage from 'react-native-fit-image';
import HTML from 'react-native-render-html';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import { contentText, contentURL } from '../helpers/helpers';

const {height, width} = Dimensions.get('window');

export default class ReadMore extends Component {
  render() {
    const { rowData } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.bodyText}>
            <CustomCachedImage
              component={FitImage}
              source={{ uri: contentURL(rowData.attachments[0].url) }}
              style={{ width: width, height: 200 }}
            />
            <Text style={styles.titleHeading}> {rowData.title} </Text>
            <HTML tagsStyles={bodyText} html={contentText(rowData.content)} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  titleHeading: {
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    padding: 10,
    // fontFamily: 'Titillium-Bold'
  },
  bannerAd: {
		width: width,
	}
});

const bodyText = {
  p: {
    fontSize: 15,
    fontWeight: '300',
    color: '#000000',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    // fontFamily: 'Titillium-Regular'
  },
  h3: {
    // fontFamily: 'Titillium-SemiboldItalic'
  },
  img: {
    width: 800,
    padding: 10
  },
  strong: {
    fontWeight: '700'
  }
};