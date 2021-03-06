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
  StatusBar
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

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import { contentText, contentURL, reduceStringLength } from '../helpers/helpers';
import Emojis from '../components/Emojis';
import menuItems from '../components/menuItems';

const { height, width } = Dimensions.get('window');

export default class Category extends Component {

  constructor(){
    super();
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      isLoading: true,
      dataSource: dataSource.cloneWithRows([])
    }
  }

  // componentDidMount() {
  //   if (Platform.OS === 'ios') {
  //     console.log('reading cache');
  //     let fileUri = '/Users/taimoorkhan/Library/Developer/CoreSimulator/Devices/2149B687-A347-4C12-82FB-B83CA14B59D8/data/Containers/Data/Application/573F1E1B-76B9-4192-BD16-8776CD14D45A/Library/Caches/Discovestan';
  //     let arr = fileUri.split('/');
  //     const dirs = RNFetchBlob.fs.dirs;
  //     filePath = `${dirs.CacheDir}/${arr[arr.length - 1]}`;
  //   } else {
  //     filePath = '/data/user/0/com.discovestan/cache/Discovestan';
  //   }
  //   RNFetchBlob.fs
  //     .readFile(filePath, 'utf8')
  //     .then((res) => {
  //       jsonData = JSON.parse(res);
  //       console.log('data', jsonData);
  //       return jsonData;
  //     })
  //     .then((jsonData) => {
  //       let iterateData = jsonData.posts;
  //       console.log('from cache', iterateData);
  //       catergoryData = [];
  //       for(var i=0; i<iterateData.length; i++) {
  //         let indexData = iterateData[i];
  //         let categoryCheck = indexData.categories[0].slug;
  //         if(categoryCheck === 'category') {
  //           mobileData.push(indexData);
  //           console.log('mobile from cache', categoryData)
  //         }
  //       }
  //       this.setState({
  //         isLoading: false,
  //         dataSource: this.state.dataSource.cloneWithRows(categoryData),
  //       })
  //     });
  // }

  render() {
    console.log('category state', this.state);
    console.log('category props', this.props);
    let { navigation } = this.props;
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
							<TouchableOpacity onPress={() => navigation.navigate('HomeDetails', { rowData })}>
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