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
  TouchableOpacity,
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

  vincularMesa() {
    this.props.navigator.push({
      screen: 'example.LeitorQrCode',
      title: 'QrCode'
    });
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.iconMenu}>
            <Icon.Button name="ios-menu"
              color={colors.darkest}
              size={60}
              backgroundColor={colors.white}
              onPress={this.openDrawer.bind(this)} />
          </View>

          <View style={styles.containerBemVindo}>
            <Text style={styles.textoBemVindo}>Bem vindo ao Restaurante</Text>
            <Image
             style={styles.logoRestaurante}
             source={{uri: 'https://brasilia.deboa.com/wp-content/uploads/2016/10/WhatsApp-Image-2016-10-20-at-15.39.20.jpeg'}} />            
            <Text style={styles.textoVinuladoMesa}>Você ainda não está vinculado a uma mesa.</Text>
          </View>

          <View style={styles.containerBtnVincularAgora}>
            <TouchableOpacity>
              <Text style={styles.link} onPress={() => this.vincularMesa()} > Vincular Agora! </Text>
            </TouchableOpacity>
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
    this.props.navigator.toggleDrawer({
      side: 'left', 
      animated: true,
      to: 'closed',
    });
  }

  openDrawer(){
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true,
      to: 'open',
    });
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column',
  },
  iconMenu:{
    flexDirection: 'row',
  },
  containerBemVindo: {
    alignItems: 'center',
  },
  containerBtnVincularAgora:{
    alignItems: 'center',
  },
  textoBemVindo:{
    fontSize: fonts.bigger,
  },
  textoVinuladoMesa: {
    fontSize: fonts.normal,
  },
  logoRestaurante: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  link: {
    marginLeft: metrics.marginLeft,
    marginRight: metrics.marginRight,
    fontSize: fonts.big,
    marginTop: 25,
  },
});