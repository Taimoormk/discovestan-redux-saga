// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
  Dimensions,
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  ListView,
  StatusBar,
  FlatList
} from 'react-native';
import {
  Container,
  Card,
  CardItem,
  Content,
  Left,
  Right
} from 'native-base';
import RNFetchBlob from 'react-native-fetch-blob';
import HTML from 'react-native-render-html';
import Share, { ShareSheet } from 'react-native-share';
import * as Animatable from 'react-native-animatable';
import { CachedImage, CustomCachedImage } from "react-native-img-cache";
import FitImage from 'react-native-fit-image';
import { connect } from 'react-redux';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import { contentText, contentURL, reduceStringLength } from '../helpers/helpers';
import Emojis from '../components/Emojis';
import * as actions from '../actions';

const { height, width } = Dimensions.get('window');

const myData = [
  {
    title: "my title",
    attachments: [
      {
        url: "https://stackoverflow.com/questions/32617066/wrap-element-to-new-line-row-using-flexbox"
      }
    ],
    excerpt: "this is an excerpt",
  },
  {
    title: "my title",
    attachments: [
      {
        url: "https://stackoverflow.com/questions/32617066/wrap-element-to-new-line-row-using-flexbox"
      }
    ],
    excerpt: "this is an excerpt",
  }
]

// const dataSource = new ListView.DataSource({
//   rowHasChanged: (r1, r2) => r1 !== r2
// });

class Mobile extends Component {

  constructor(props) {
    super(props);
    let { readPostsAction } = this.props;
    readPostsAction();
  }

  // componentWillMount() {
  //   let { readMobilePostsAction } = this.props;
  //   readMobilePostsAction();
  // }

  render() {
    let { data } = this.props;
    // console.log('mobile screen', ata);
    // let ds = dataSource.cloneWithRows(data);
    // console.log('mobile screen ds', ds)
    return (
      <View>
        <View>
          <StatusBar
            barStyle="dark-content"
          />
        </View>
        <FlatList
          // refreshControl={
          // 	<RefreshControl
          // 		refreshing={this.state.isRefreshing}

          // 	/>
          // }
          data={data}
          extraData={data}
          renderItem={
            ({ item }) => (
              <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetails', { item })}>
                  <Card>
                    <CardItem header>
                      <Text style={styles.titleHeading}>{item.title}</Text>
                    </CardItem>
                    <CardItem cardBody>
                      <Content style={styles.cardContainer}>
                        <CustomCachedImage
                          component={FitImage}
                          source={{ uri: contentURL(item.attachments[0].url) }}
                          style={{ width: width, height: 200 }}
                        />
                        <HTML tagsStyles={bodyText} html={reduceStringLength(contentText(item.excerpt))} />
                      </Content>
                    </CardItem>
                    <CardItem style={styles.borderLine}>
                      <Left>
                        <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
                          <TouchableOpacity onPress={() => {
                            Share.open({
                              title: `${item.title.rendered}`,
                              message: `Hello there! look what an interesting read  "${item.title.rendered}" I have found for you, check it out it's awesome!`,
                              url: `vinthub://home/${item.slug}`,
                              subject: 'What an awesome read'
                            })
                          }}>
                            <Text style={styles.shareButton}>Share</Text>
                          </TouchableOpacity>
                        </Animatable.View>
                      </Left>
                      <Right>
                        <Emojis />
                      </Right>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              </View>
            )
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // card: {
  //   backgroundColor: '#006600',
  // },
  titleHeading: {
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    // fontFamily: 'Quicksand-Bold'
  },
  cardContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  time: {
    color: '#ffe400',
    alignSelf: 'stretch',
    marginLeft: 15,
    textAlign: 'right',
  },
  borderLine: {
    borderTopColor: '#000000',
    borderTopWidth: 0.5,
    marginTop: 10,
    paddingBottom: 10,
    width: width - 30,
    alignSelf: 'center'
  },
  shareButton: {
    // fontFamily: 'Titillium-Regular',
    justifyContent: 'flex-start',
    color: '#3f3f3f',
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
    marginTop: 10,
    // fontFamily: 'Titillium-Regular'
  },
};

// const dataSource = new ListView.DataSource({
//   rowHasChanged: (r1, r2) => r1 !== r2
// });

function mapStateToProps({ launchAppReducer }) {
  return {
    isLoading: launchAppReducer.isLoading,
    // data: dataSource.cloneWithRows(launchAppReducer.data)
    data: launchAppReducer.data
  }
}

export default connect(mapStateToProps, { readPostsAction: actions.readPostsAction })(Mobile);