
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import { setDrawerOn } from '../functions/app-functions';

export default class Andre extends Component {
  constructor(props) {
    super(props);
    setDrawerOn(this);
    this.state = {
      cart: [],
      texto: '',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            second
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});