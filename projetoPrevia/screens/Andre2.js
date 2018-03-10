
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import { setDrawerOff } from '../functions/app-functions';

export default class Andre extends Component {
  constructor(props) {
    super(props);
    setDrawerOff(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
            sem drawer
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