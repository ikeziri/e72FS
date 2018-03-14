
import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  Button,
  TextInput,
  StyleSheet,
  AppRegistry,
  AsyncStorage,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { setDrawerOn } from '../functions/app-functions';

export default class FirstTabScreen extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: '#0A263C', //Fundo principal da tela
    navBarTextColor: '#fff',
  };
  render() {
    var listItems = this.state.cart.map(function (item) {
      return (
        <Text>
          {item}
        </Text>
      );
    });
    

    return (
      <View style={styles.container}>
        <Image style={styles.fundoTela}
               source={require('../images/fundo-tela-inicial.png')}
        />
      </View>
    );
  }
  constructor(props) {
    super(props);
    setDrawerOn(this);
    this.state = {
      cart: [],
      texto: '',
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadIcon = async () => {
    try {
      Icon.getImageSource('md-menu', 30).then((source) => {
        this.props.navigator.setButtons({
          leftButtons: [
            {
              title: 'Menu',
              id: 'menu',
              // icon: source
              icon: iconsMap['ios-person--active']
            }
          ],
        });
      });
    } catch (error) {
      Alert.alert('deu merda ' + error.message);
    } 
  }

  _loadInitialState = async () => {
    try {
      var value = await AsyncStorage.getItem('Cart');
      if (value !== null) {
        Alert.alert(value);
        let getCart = JSON.parse(value);
        this.setState({ cart: getCart });
      } else {
      }
    } catch (error) {
      Alert.alert('AsyncStorage error: ' + error.message);
    }
    this.setState({
      isLoading: false,
    });
    
  };

  adicionar() {
    let newCart;
    try {
      newCart = this.state.cart;
    } catch (error) {
      newCart = [];
    }
    Alert.alert(JSON.stringify(newCart));
    newCart.push(this.state.texto);
    this.setState({ cart: newCart });
  }

  salvar = async () => {
    try {
      let setCart = JSON.stringify(this.state.cart);
      Alert.alert(setCart);
      await AsyncStorage.setItem('Cart', setCart);
      this._loadInitialState().done();
    } catch (error) {
      // Error saving data
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fundoTela: {
    flex: 1, 
    justifyContent: 'flex-end',
    width: 'auto',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});