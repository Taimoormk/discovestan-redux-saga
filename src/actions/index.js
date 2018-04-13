// ########## Import Dependencies Here ##########
import { Platform } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import * as types from '../constants';

export function handleIsLoggedInAction(state) {
  return {
    type: types.SHOW_APP,
    payload: true
  }
}

export function fetchPostsAction() {
  return {
    type: types.FETCH_POSTS_DATA
  }
}

export function fetchPostsCacheAttempt() {
  return {
    type: types.FETCH_POSTS_CACHE_ATTEMPT
  }
}

export function fetchPostsCacheSuccess() {
  return {
    type: types.FETCH_POSTS_CACHE_SUCCESS
  }
}

export function fetchPostsCacheFail(error) {
  return {
    type: types.FETCH_POSTS_CACHE_FAIL,
    payload: error
  }
}

export function readPostsAction() {
  return {
    type: types.READ_POSTS_DATA
  }
}

export function readMobilePostsCacheAttempt() {
  return {
    type: types.READ_MOBILE_POSTS_CACHE_ATTEMPT
  }
}

export function readMobilePostsCacheSuccess(response) {
  return {
    type: types.READ_MOBILE_POSTS_CACHE_SUCCESS,
    payload: response
  }
}

export function readMobilePostsCacheFail(error) {
  return {
    type: types.READ_MOBILE_POSTS_CACHE_FAIL,
    payload: error
  }
}

// export function readMobilePostsAction() {
//   return function (dispatch) {
//     try {
//       var mobileData = [];
//       dispatch({ type: types.READ_MOBILE_API_CACHE_ATTEMPT });
//       if (Platform.OS === 'ios') {
//         let fileUri = '/Users/taimoorkhan/Library/Developer/CoreSimulator/Devices/2149B687-A347-4C12-82FB-B83CA14B59D8/data/Containers/Data/Application/573F1E1B-76B9-4192-BD16-8776CD14D45A/Library/Caches/Discovestan';
//         let arr = fileUri.split('/');
//         const dirs = RNFetchBlob.fs.dirs;
//         filePath = `${dirs.CacheDir}/${arr[arr.length - 1]}`;
//       } else {
//         filePath = '/data/user/0/com.discovestan/cache/Discovestan';
//       }
//       var mobileData = [];
//       RNFetchBlob.fs
//         .readFile(filePath, 'utf8')
//         .then((res) => {
//           jsonData = JSON.parse(res);
//           return jsonData;
//         })
//         .then((jsonData) => {
//           let iterateData = jsonData.posts;
          
//           for(var i=0; i<iterateData.length; i++) {
//             let indexData = iterateData[i];
//             let categoryCheck = indexData.categories[0].slug;
//             if(categoryCheck === 'mobile') {
//               mobileData.push(indexData);
//             }
//           }
//           dispatch({ type: types.READ_MOBILE_API_CACHE_SUCCESS, payload: mobileData})
//         });
//     } catch (err) {
//       dispatch({ type: types.READ_MOBILE_API_CACHE_FAIL, payload: err });
//     }
//   }
// }

export function readWebPostsAction() {
  return function (dispatch) {
    try {
      var mobileData = [];
      dispatch({ type: types.READ_WEB_API_CACHE_ATTEMPT });
      if (Platform.OS === 'ios') {
        let fileUri = '/Users/taimoorkhan/Library/Developer/CoreSimulator/Devices/2149B687-A347-4C12-82FB-B83CA14B59D8/data/Containers/Data/Application/573F1E1B-76B9-4192-BD16-8776CD14D45A/Library/Caches/Discovestan';
        let arr = fileUri.split('/');
        const dirs = RNFetchBlob.fs.dirs;
        filePath = `${dirs.CacheDir}/${arr[arr.length - 1]}`;
      } else {
        filePath = '/data/user/0/com.discovestan/cache/Discovestan';
      }
      var webData = [];
      RNFetchBlob.fs
        .readFile(filePath, 'utf8')
        .then((res) => {
          jsonData = JSON.parse(res);
          return jsonData;
        })
        .then((jsonData) => {
          let iterateData = jsonData.posts;
          
          for(var i=0; i<iterateData.length; i++) {
            let indexData = iterateData[i];
            let categoryCheck = indexData.categories[0].slug;
            if(categoryCheck === 'web') {
              mobileData.push(indexData);
            }
          }
          dispatch({ type: types.READ_WEB_API_CACHE_SUCCESS, payload: mobileData})
        });
    } catch (err) {
      dispatch({ type: types.READ_WEB_API_CACHE_FAIL, payload: err });
    }
  }
}