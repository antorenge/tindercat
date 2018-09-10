/**
 * Profile component.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  Dimensions,
  View,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
var { height, width } = Dimensions.get('window');
import Nav from './global-widgets/nav';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.countProperties = this.countProperties.bind(this);
  }

  countProperties(obj) {
    return Object.keys(obj).length;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Nav type="profile" onPress={() => this.props.navigator.replace({ id: 'home' })} />
        <ScrollView style={styles.container}>
          <Image source={require('../images/profile.jpg')} resizeMode="stretch" style={{ height: 350, width: width }} />
          <View style={[styles.row, { marginTop: 15 }]}>
            <Text style={{ fontSize: 19, fontWeight: '400' }}>Kitty, </Text><Text style={{ fontSize: 21, fontWeight: '300', marginBottom: -2 }}>2</Text>
          </View>
          <View style={styles.row}>
            <Text style={{ color: '#444', fontSize: 15 }}>Happy kitten!</Text>
          </View>
          <View style={styles.row}>
            <Text style={{ color: '#777', fontSize: 11 }}>less than a mile away</Text>
          </View>
          <View style={styles.description}>
            <Text style={{ color: '#555' }}>Lets have fun!</Text>
          </View>
          <View style={styles.commons}>
            <Text style={styles.title}>
              {this.countProperties(this.props.likes)} Likes / {this.countProperties(this.props.dislikes)} Dislikes
       </Text>
            <Text style={{ marginTop: 10, fontSize: 14, color: '#666', fontWeight: "400" }}>We compare your Facebook friends with those of your matches to display any common connections</Text>
          </View>
          <View style={styles.commons}>
            <Text style={styles.title}>
              Instagram Photos
       </Text>
            <ScrollView
              horizontal={true}
            >
              <View style={{}}>
                <Image source={require('../images/profile.jpg')} resizeMode="stretch" style={{ height: 100, width: 100, margin: 5 }} />
                <Image source={require('../images/profile.jpg')} resizeMode="stretch" style={{ height: 100, width: 100, margin: 5 }} />
              </View>
              <View style={{}}>
                <Image source={require('../images/profile.jpg')} resizeMode="stretch" style={{ height: 100, width: 100, margin: 5 }} />
                <Image source={require('../images/profile.jpg')} resizeMode="stretch" style={{ height: 100, width: 100, margin: 5 }} />
              </View>
              <View style={{}}>
                <Image source={require('../images/profile.jpg')} resizeMode="stretch" style={{ height: 100, width: 100, margin: 5 }} />
                <Image source={require('../images/profile.jpg')} resizeMode="stretch" style={{ height: 100, width: 100, margin: 5 }} />
              </View>
              <View style={{}}>
                <Image source={require('../images/profile.jpg')} resizeMode="stretch" style={{ height: 100, width: 100, margin: 5 }} />
                <Image source={require('../images/profile.jpg')} resizeMode="stretch" style={{ height: 100, width: 100, margin: 5 }} />
              </View>
              <View style={{}}>
                <Image source={require('../images/profile.jpg')} resizeMode="stretch" style={{ height: 100, width: 100, margin: 5 }} />
                <Image source={require('../images/profile.jpg')} resizeMode="stretch" style={{ height: 100, width: 100, margin: 5 }} />
              </View>
              <View style={{}}>
                <Image source={require('../images/profile.jpg')} resizeMode="stretch" style={{ height: 100, width: 100, margin: 5 }} />
                <Image source={require('../images/profile.jpg')} resizeMode="stretch" style={{ height: 100, width: 100, margin: 5 }} />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  row: {
    flexDirection: 'row',
    margin: 15,
    marginBottom: 0,
    marginTop: 5,
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333'
  },
  commons: {
    padding: 15
  },
  buttons: {
    width: 80,
    height: 80,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  description: {
    padding: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    marginTop: 10,
    marginBottom: 10
  },
  buttonSmall: {
    width: 50,
    height: 50,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  card: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e3e3e3',
    width: 350,
    height: 420,
  }

});

const mapStateToProps = (state) => ({
  likes: state.tinder.likes,
  dislikes: state.tinder.dislikes
});

export default connect(mapStateToProps, null)(Profile);