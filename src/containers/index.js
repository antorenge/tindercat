/**
 * Main container that provide navigation to other components.
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Home from '../components/home';
import Profile from '../components/profile';


export default class Main extends Component {

  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    var routeId = route.id;

    if (routeId === 'home') {
      return (
        <Home
          {...this.props}
          userData={route.userData}
          navigator={navigator} />
      );
    }

    if (routeId === 'profile') {
      return (
        <Profile
          {...this.props}
          userData={route.userData}
          navigator={navigator} />
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator
          style={{ flex: 1 }}
          ref={'NAV'}
          initialRoute={{ id: 'home', name: 'home' }}
          renderScene={this.renderScene.bind(this)} />
      </View>
    )
  }
}

