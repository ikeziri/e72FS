import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  Button,
  Platform,
  TextInput,
  Dimensions,
  StyleSheet,
  AppRegistry,
  AsyncStorage,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import PasswordInputText from 'react-native-hide-show-password-input';
import metrics from '../styles/metrics';
import fonts   from '../styles/fonts';
import colors  from '../styles/colors';
import ButtonPrimary from '../components/ButtonPrimary';

export default class Login extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      value: 0,
      password: '',
    }
    this.props.navigator.setDrawerEnabled({
      side: 'left',
      enabled: false,
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
          title: 'Menu',
        });
      } else {
        this.setState({
          isLoading: false,
        });
      }
    } catch (error) {
      Alert.alert('AsyncStorage error: ' + error.message);
    }
  };

  _onPressButton = async () => {   
    try {
      await AsyncStorage.setItem('Login', 'logado');
      this._loadInitialState().done();
    } catch (error) {
      // Error saving data
    }
  }

  onPressNovoCadastro(){
    this.props.navigator.push({
      screen: 'example.NovoCadastro',
      title: 'Novo cadastro',
    });
  }

  onPressRecuperarSenha(){
    this.props.navigator.push({
      screen: 'example.RecuperarSenha',
      title: 'Recuperar senha',
    });
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

        <View style={styles.containerLogo}>
          <Image style={styles.logoImg} source={require('../images/logo-descomplica.png')} />
        </View>

         <View style={styles.containerFields}>
          <Text>Email: </Text>
            <TextInput
              style={styles.inputText}
              keyboardType='email-address'
              maxLength={30}
              underlineColorAndroid={colors.dark}
              clearButtonMode='always' />

            <Text style={styles.labelSenha}>Senha: </Text>
              <PasswordInputText
                style={styles.campoSenha}
                value={this.state.password}
                maxLength={20}
                underlineColorAndroid={colors.dark}
                onChangeText={ (password) => this.setState({ password }) } />
         </View>

        <View style={styles.containerButton}>
          <ButtonPrimary onPress={ this._onPressButton }> Entrar </ButtonPrimary>
        </View>

        <View style={styles.containerLinks}>
          <TouchableOpacity style={styles.link}>
            <Text onPress={this.onPressRecuperarSenha.bind(this)} > Esqueci a senha </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text onPress={this.onPressNovoCadastro.bind(this)} > Novo Cadastro </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  containerLogo:{
    alignItems: 'center',
    padding: metrics.marginTop,
  },
  containerFields: {
    marginLeft: metrics.marginLeft,
    marginRight: metrics.marginRight,
  },
  containerButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 30,
    minWidth: 100,
  },
  logoImg:{
    width: 200,
    height: 106,
  },
  containerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputText:{
    fontSize: fonts.input,
  },
  link: {
    paddingTop: 15,
    marginLeft: metrics.marginLeft,
    marginRight: metrics.marginRight,
  },
  labelSenha: {
    marginTop: 15,
  }
});