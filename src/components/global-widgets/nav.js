/**
 * Navigation component.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Nav extends Component {

  home() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.toProfile}>
          <Icon name="user" color="#888" size={25} style={{ margin: 10 }} />
        </TouchableOpacity>
        <Image source={require('../../images/logo.png')} resizeMode="contain" style={{ width: 100, height: 30 }} />
        <TouchableOpacity></TouchableOpacity>
      </View>
    );
  }

  profile() {
    return (
      <View style={styles.container}>
        <View style={{ width: 25, height: 25, margin: 10 }} />
        <Image source={require('../../images/logo.png')} resizeMode="contain" style={{ width: 100, height: 30 }} />
        <TouchableOpacity onPress={this.props.onPress}>
          <Image source={require('../../images/tinder.png')} style={{ width: 25, height: 25, margin: 10 }} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    if (this.props.type == "profile") {
      return (
        <View>{this.profile()}</View>
      );
    }
    else {
      return (
        <View>{this.home()}</View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  },
});
