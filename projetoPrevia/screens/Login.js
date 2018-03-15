
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

var {height, width} = Dimensions.get('window');

export default class Login extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      text: ' ',
      value: 0,
      placeHolderEmail: 'Endereço de email',
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
        <Image style={styles.logoEntrada}
                 source={require('../images/logo-descomplica.png')} />
        </View>

        <View style={styles.linha}>
          <View style={styles.hrComTexto} />
          <Text style={styles.textoHr}>Entrar com email</Text>
          <View style={styles.hrComTexto} />
        </View>

         <View style={styles.containerFields}>
          <TextInput style={styles.campoTextoSuperior}
            value={this.state.placeHolderEmail}
            onChangeText={(placeHolderEmail) => this.setState({placeHolderEmail})} />
          <TextInput style={styles.campoTextoInferior}
            secureTextEntry={true}
            value="abc"  />
         </View>


        <Text style={styles.linkLembrarSenha}>Esqueci a senha</Text>

        <View style={styles.linha}>
          <View style={styles.hr} />
        </View>

        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.buttonLogin} >
            <Text style={styles.textButton} onPress={this._onPressButton} > Login </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonInscrevaSe} >
            <Text style={styles.textButton} onPress={this._onPressButton} > Inscreva-se </Text>
          </TouchableOpacity>      
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A263C' //Fundo principal da tela
  },
  containerButtons:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFields:{
    justifyContent: 'center',
  },
  containerLogo:{
    alignItems: 'center',
  },
  buttonLogin: {
    alignItems: 'center',
    backgroundColor: '#12477e',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    padding: 10,
  },
  buttonInscrevaSe: {
    alignItems: 'center',
    backgroundColor: '#12455e',
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
  },
  textButton: {
    fontSize: 20,
    color: '#fff',
  },
  linha:{
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoHr:{
    fontSize: 13,
    color: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  logoEntrada: {
    width: 130,
    height: 70,
    marginTop: (Platform.OS === 'ios' ? 40 : 20 ),
    justifyContent: 'center',
    alignItems: 'center'
  },
  hr:{
    borderBottomColor: '#12466e',
    borderBottomWidth: 1,
    width: width - 40,
  },
  hrComTexto:{
    borderBottomColor: '#12466e',
    borderBottomWidth: 1,
    width: width - 290,
  },
  campoTextoSuperior: {
    height: 60,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    fontSize: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  campoTextoInferior: {
    height: 60,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    fontSize: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  inscrevaSe:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  linkLembrarSenha: {
    color: '#fff',
    paddingTop: 10,
    paddingBottom: 30,
    marginLeft: 15,
  },
  normal:{
    color: '#fff',
  }
});