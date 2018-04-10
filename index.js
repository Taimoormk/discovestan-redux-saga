// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import App from './App';
import { rootReducer } from './src/reducers';
import rootSaga from './src/sagas';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(
    sagaMiddleware, 
    reduxLogger
  )
);

sagaMiddleware.run(rootSaga);

class Discovestan extends Component {
  render() {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('discovestan', () => Discovestan);
