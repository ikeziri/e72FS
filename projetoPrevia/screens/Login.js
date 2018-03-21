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

  _onPressTeste = async () => {   
    try {
      this.props.navigator.push({
        screen: 'example.Lorran1',
        title: 'Lorran1'
      });
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

        <View style={styles.containerLogo}>
          <Image source={require('../images/logo-descomplica.png')} />
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

        <TouchableOpacity style={styles.buttonLogin} >
          <Text style={styles.textButton} onPress={this._onPressButton} > Entrar </Text>
        </TouchableOpacity>

        <View style={styles.containerLinks}>
        <TouchableOpacity style={styles.linkLembrarSenha}>
          <Text onPress={this._onPressTeste} > Esqueci a senha </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkLembrarSenha}>
          <Text onPress={this._onPressTeste} > Esqueci a senha </Text>
        </TouchableOpacity>        
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerLogo:{
    alignItems: 'center',
    padding: metrics.marginTop,
  },
  containerFields: {
    marginLeft: metrics.marginLeft,
    marginRight: metrics.marginRight,
  },
  containerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonLogin: {
    alignItems: 'center',
    backgroundColor: colors.dark,
    marginLeft: metrics.marginLeft,
    marginRight: metrics.marginRight,
    borderRadius: 5,
    padding: 15,
    marginTop: 35,
  },
  textButton: {
    fontSize: fonts.big,
    color: colors.white,
  },
  inputText:{
    fontSize: fonts.input,
  },
  linkLembrarSenha: {
    paddingTop: 15,
    marginLeft: metrics.marginLeft,
    marginRight: metrics.marginRight,
  },
  labelSenha: {
    marginTop: 15,
  }
});