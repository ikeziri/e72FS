
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
      isLoading: false 
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentMenu}>
          <Text>
            Nome Completo:
          </Text>
          <TextInput placeholder="Ex: André Ikeziri" />
          <Text>
            E-mail:
          </Text>
          <TextInput placeholder="Ex: paulo@vinnyvinny.com.br" />
          <Text>
            CPF:
          </Text>
          <TextInput />
          <Text>
            Senha:
          </Text>
          <TextInput />
          <Text>
            Confirme sua senha:
          </Text>
          <TextInput />
          <Text>
            Telefone:
          </Text>
          <TextInput />
          <Button title="Cadastrar" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF' //Fundo principal da tela
  },
  contentMenu: {
    flexDirection: 'column',
  },
});