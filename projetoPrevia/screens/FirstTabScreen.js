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
import metrics from '../styles/metrics';
import fonts   from '../styles/fonts';
import colors  from '../styles/colors';

import { setDrawerOn } from '../functions/app-functions';

export default class FirstTabScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.iconMenu}>
            <Icon.Button name="ios-menu"
              color={colors.darkest}
              size={60}
              backgroundColor={colors.white}
              onPress={this.openDrawer} />
          </View>

          <View style={styles.containerBemVindo}>
            <Text style={styles.textoBemVindo}>Bem vindo ao Restaurante</Text>
            <Image
             style={styles.logoRestaurante}
             source={{uri: 'https://brasilia.deboa.com/wp-content/uploads/2016/10/WhatsApp-Image-2016-10-20-at-15.39.20.jpeg'}} />            
          </View>
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
    backgroundColor: colors.white,
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconMenu:{

  },
  containerBemVindo: {

  },
  textoBemVindo:{
    fontSize: fonts.big,
  },
  logoRestaurante: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});