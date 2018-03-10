
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  Button,
  AsyncStorage,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { setDrawerOn } from '../functions/app-functions';

export default class FirstTabScreen extends Component {
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
        <Text style={styles.welcome}>
          Lista:
        </Text>
        {listItems}
        <Text style={styles.welcome}>
          Fim  Lista:
        </Text>

        <TextInput
          style={{ height: 40, width: 120 }}
          placeholder="Type here to translate!"
          value={this.state.texto}
          onChangeText={(texto) => this.setState({ texto })}
        />
        <Button
          onPress={this.adicionar.bind(this)}
          title="adicionar"
          color="#841584"
          accessibilityLabel="adicion"
        />
        <Button
          onPress={this.salvar.bind(this)}
          title="salvar"
          color="#841584"
          accessibilityLabel="save"
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
              title: 'menu',
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