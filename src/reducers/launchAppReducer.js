// ########## Import Dependencies Here ##########
import { ListView } from 'react-native';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import * as types from '../constants';

const initial = {
  isLoggedIn: false,
  isLoading: true,
  data: [],
  error: null
};

export default function (state = initial, action) {
  switch (action.type) {
    case types.SHOW_APP:
      return { ...state, isLoggedIn: action.payload };
    case types.FETCH_POSTS_CACHE_ATTEMPT:
      return { ...state, isLoading: true };
    case types.FETCH_POSTS_CACHE_SUCCESS:
      return { ...state, isLoading: true };
    case types.FETCH_POSTS_CACHE_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    case types.READ_MOBILE_POSTS_CACHE_ATTEMPT:
      return { ...state, isLoading: true };
    case types.READ_MOBILE_POSTS_CACHE_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.READ_MOBILE_POSTS_CACHE_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    case types.READ_WEB_API_CACHE_ATTEMPT:
      return { ...state, isLoading: true };
    case types.READ_WEB_API_CACHE_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case types.READ_WEB_API_CACHE_FAIL:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}