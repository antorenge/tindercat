
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Main from './src/containers';
import { store, persistor } from './store';

export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <Main />
          </PersistGate>
        </Provider>
      </View>);
  }
}
