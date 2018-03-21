
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Picker,
  Button,
  TextInput,
  ScrollView,
  View
} from 'react-native';

import metrics from '../styles/metrics';
import fonts   from '../styles/fonts';
import colors  from '../styles/colors';
import ButtonPrimary from '../components/ButtonPrimary';

export default class Lorran1 extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '' ,
      email: '' ,
      cpf: '' ,
      password: '' ,
      telefone: '' ,
      msg: [] ,
      isLoading: false ,
      operadora: ''
    
    };
  }
  render() {
    return (
      <View style={styles.container}>

          <View style={styles.containerFields}>
            <Text>Nome Completo:  </Text>
            <TextInput placeholder="Ex: André Ikeziri" />
            <Text>E-mail: </Text>
            <TextInput placeholder="Ex: paulo@vinnyvinny.com.br" />
            <Text>CPF: </Text>
            <TextInput />
            <Text>Senha: </Text>
            <TextInput />
            <Text>Confirme sua senha: </Text>
            <TextInput />
            <Text>Telefone: </Text>
            <TextInput />
            <Text> Operadora: </Text>
            <Picker
              selectedValue={this.state.operadora}
              onValueChange={(operadoraSelecionada) => this.setState({ operadora: operadoraSelecionada })} >
              <Picker.Item label='Tim' value='tim' />
              <Picker.Item label='Claro' value='claro' />
              <Picker.Item label='Oi' value='oi' />
              <Picker.Item label='Vivo' value='vivo' />
            </Picker>

            <ButtonPrimary onPress={ this.onPressRecuperarSenha }> Gravar </ButtonPrimary>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  link: {
    paddingTop: 15,
    marginLeft: metrics.marginLeft,
    marginRight: metrics.marginRight,
  },
  labelSenha: {
    marginTop: 15,
  }
});