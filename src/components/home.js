/**
 * Home component.
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Nav from './global-widgets/nav';
import SwipeCards from 'react-native-swipe-cards';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchCats, addLike, addDislike } from '../actions/catActions';


class Home extends Component {

  constructor(props) {
    super(props);
    this.handleYup = this.handleYup.bind(this);
    this.handleNope = this.handleNope.bind(this);
  }

  componentWillMount() {
    this.props.fetchCats();
  }

  Card(cat) {
    return (
      <View style={styles.card}>
        <Image source={{ uri: cat.url }} resizeMode="contain" style={{ width: 350, height: 350 }} />
      </View>
    )
  }

  handleYup(card) {
    this.props.addLike(card);
  }

  handleNope(card) {
    this.props.addDislike(card);
  }

  noMore() {
    return (
      <View style={styles.card} >
        <Text>No More Cards</Text>
      </View>
    )
  }

  yup() {
    this.props.addLike(this.refs['swiper'].getCurrentCard());
    this.refs['swiper']._goToNextCard();
  }

  nope() {
    this.props.addDislike(this.refs['swiper'].getCurrentCard());
    this.refs['swiper']._goToNextCard();
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav chat={() => this.props.navigator.replace({ id: "messages" })} toProfile={() => this.props.navigator.replace({ id: 'profile' })} />
        <SwipeCards
          ref={'swiper'}
          cards={this.props.cats}
          containerStyle={{ backgroundColor: '#f7f7f7', alignItems: 'center', margin: 20 }}
          renderCard={(cardData) => this.Card(cardData)}
          renderNoMoreCards={() => this.noMore()}
          handleYup={this.handleYup}
          handleNope={this.handleNope} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.buttons} onPress={() => this.nope()}>
            <Icon name='times' size={45} color="#888" style={{}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall}>
            <Icon name='info' size={25} color="#888" style={{}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={() => this.yup()}>
            <Icon name='heart' size={36} color="#888" style={{ marginTop: 5 }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
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

Home.propTypes = {
  fetchCats: PropTypes.func.isRequired,
  cats: PropTypes.array.isRequired,
  addLike: PropTypes.func.isRequired,
  addDislike: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cats: state.tinder.cats
});

const mapDispatchToProps = (dispatch) => ({
  fetchCats: () => dispatch(fetchCats()),
  addLike: (card) => dispatch(addLike(card)),
  addDislike: (card) => dispatch(addDislike(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

