
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  AsyncStorage,
  ActivityIndicator,
  Button,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      text: ' ',
      value: 0
    }
    this.props.navigator.setDrawerEnabled({
      side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
      enabled: false // should the drawer be enabled or disabled (locked closed)
    });
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    try {
      var value = await AsyncStorage.getItem('@MySuperStore:key');
      if (value !== null) {
        this.setState({ text: value });
        Alert.alert('if');
        this.props.navigator.resetTo({
          screen: 'example.FirstTabScreen',
          title: 'first'
        });
      } else {
        Alert.alert('else');
      }
    } catch (error) {
      Alert.alert('AsyncStorage error: ' + error.message);
    }
    this.setState({
      isLoading: false,
    });
  };

  onPressBtn= async () => {   
    try {
      await AsyncStorage.setItem('@MySuperStore:key', 'logado');
      this._loadInitialState().done();
    } catch (error) {
      // Error saving data
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View >
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View >
        <Text >
          Tela Login
        </Text>
        <Button
          onPress={this.onPressBtn}
          title="Logar"
          color="#841584"
          accessibilityLabel="Logar"
        />
      </View>
    );
  };
};