import { Platform } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

let dirs = RNFetchBlob.fs.dirs;

export function dataFetch() {
  RNFetchBlob
    .config({
      path: dirs.CacheDir + '/Discovestan',
      fileCache: true,
      appendExt: 'txt'
    })
    .fetch('GET', 'https://discovestan.azurewebsites.net/api/get_posts', {})
}

export function mobilePostsRead() {
  if (Platform.OS === 'ios') {
    let fileUri = '/Users/taimoorkhan/Library/Developer/CoreSimulator/Devices/748493BF-3269-46C7-98C2-502FE8F8F05A/data/Containers/Data/Application/F1204CC6-FE0A-48C4-9222-EB342B284663/Library/Caches/Discovestan';
    let arr = fileUri.split('/');
    const dirs = RNFetchBlob.fs.dirs;
    filePath = `${dirs.CacheDir}/${arr[arr.length - 1]}`;
  } else {
    filePath = '/data/user/0/com.discovestan/cache/Discovestan';
  }
  var mobileData = [];
  RNFetchBlob.fs
    .readFile(filePath, 'utf8')
    .then((res) => {
      jsonData = JSON.parse(res);
      return jsonData;
    })
    .then((jsonData) => {
      let iterateData = jsonData.posts;
      for (var i = 0; i < iterateData.length; i++) {
        let indexData = iterateData[i];
        let categoryCheck = indexData.categories[0].slug;
        if (categoryCheck === 'mobile') {
          mobileData.push(indexData);
        }
      }
    });
    return mobileData;
}