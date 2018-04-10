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
  StatusBar,
  ListView,
  RefreshControl
} from 'react-native';
import { 
  Container,
  Card,
  CardItem,
  Content,
  Left,
  Right
} from 'native-base';
import HTML from 'react-native-render-html';
import RNFetchBlob from 'react-native-fetch-blob';
import Share, { ShareSheet } from 'react-native-share';
import * as Animatable from 'react-native-animatable';
import { CachedImage, CustomCachedImage } from "react-native-img-cache";
import FitImage from 'react-native-fit-image';
import { connect } from 'react-redux';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import { fetchPostsAction } from '../actions';
import { contentText, contentURL, reduceStringLength } from '../helpers/helpers';
import Emojis from '../components/Emojis';

const { height, width } = Dimensions.get('window');

class Home extends Component {

  constructor(props){
    super(props);
    let { fetchPostsAction } = this.props;
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      isLoading: true,
      dataSource: dataSource.cloneWithRows([])
    }
    fetchPostsAction();
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      console.log('reading cache');
      let fileUri = '/Users/taimoorkhan/Library/Developer/CoreSimulator/Devices/2149B687-A347-4C12-82FB-B83CA14B59D8/data/Containers/Data/Application/573F1E1B-76B9-4192-BD16-8776CD14D45A/Library/Caches/Discovestan';
      let arr = fileUri.split('/');
      const dirs = RNFetchBlob.fs.dirs;
      filePath = `${dirs.CacheDir}/${arr[arr.length - 1]}`;
    } else {
      filePath = '/data/user/0/com.discovestan/cache/Discovestan';
    }
    RNFetchBlob.fs
      .readFile(filePath, 'utf8')
      .then((res) => {
        jsonData = JSON.parse(res);
        console.log('data', jsonData);
        return jsonData;
      })
      .then((jsonData) => {
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows(jsonData.posts),
        })
      });
  }

  render() {
    return(
      <Container>
				<View>
					<StatusBar
						barStyle="dark-content"
					/>
				</View>
				<ListView
					// refreshControl={
					// 	<RefreshControl
					// 		refreshing={this.state.isRefreshing}
							
					// 	/>
					// }
					dataSource={this.state.dataSource}
					renderRow={
						(rowData) =>
							<View>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetails', { rowData })}>
								<Card>
									<CardItem header>
										<Text style={styles.titleHeading}>{rowData.title}</Text>
									</CardItem>
									<CardItem cardBody>
										<Content style={styles.cardContainer}>
											<CustomCachedImage
												component={FitImage}
												source={{ uri: contentURL(rowData.attachments[0].url) }}
												style={{ width: width, height: 200 }}
											/>
											<HTML tagsStyles={bodyText} html={reduceStringLength(contentText(rowData.excerpt))} />
										</Content>
									</CardItem>
									<CardItem style={styles.borderLine}>
										<Left>
											<Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
												<TouchableOpacity onPress={() => {Share.open({
														title: `${rowData.title.rendered}`,
														message: `Hello there! look what an interesting read  "${rowData.title.rendered}" I have found for you, check it out it's awesome!`,
														url: `vinthub://home/${rowData.slug}`,
														subject: 'What an awesome read'
												})}}>
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
					}
				/>
			</Container>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
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

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, { fetchPostsAction })(Home);