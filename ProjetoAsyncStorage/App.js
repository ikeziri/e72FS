/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Alert,
  TextInput,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          value={this.state.text}
          onChangeText={(text) => this.setState({ text })}
        />
        <Button
          onPress={this.onPressBtn}
          title="salvar"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>

        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
  onPressBtn= async () => {   
    try {
      await AsyncStorage.setItem('@MySuperStore:key', this.state.text);
      Alert.alert('salvei: ' + this.state.text);
    } catch (error) {
      // Error saving data
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      text: ' ',
      value: 0
    }

  }

  componentDidMount() {
   this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    try {
      var value = await AsyncStorage.getItem('@MySuperStore:key');
      if (value !== null){
        this.setState({text: value});
        Alert.alert("recuperou: " + value);
      } else {
        Alert.alert('Initialized with no selection on disk.');
      }
    } catch (error) {
      Alert.alert('AsyncStorage error: ' + error.message);
    }
  };

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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
