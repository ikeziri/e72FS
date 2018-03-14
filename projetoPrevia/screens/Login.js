
import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  Button,
  StyleSheet,
  AppRegistry,
  AsyncStorage,
  TouchableOpacity,
  ActivityIndicator,
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
      var value = await AsyncStorage.getItem('Login');
      if (value !== null) {
        this.setState({ text: value });
        this.props.navigator.resetTo({
          screen: 'example.FirstTabScreen',
          title: 'first'
        });
      } else {
        this.setState({isLoading: false});
      }
    } catch (error) {
      Alert.alert('AsyncStorage error: ' + error.message);
    }
  };

  onPressBtn= async () => {   
    try {
      await AsyncStorage.setItem('Login', 'logado');
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
      <View style={styles.container}>
        <Image style={styles.fundoTela}
        source={require('../images/logo-descomplica.png')}
         />
        <TouchableOpacity style={styles.button} >
          <Text style={styles.textButton} onPress={this.onPressBtn} > Entrar </Text>
        </TouchableOpacity>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A263C' //Fundo principal da tela
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0A263C',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  textButton: {
    fontSize: 30,
    color: '#fff',
  },
});