
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
      isLoading: false ,
      operadora: ''
    
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
          <Text>
            Operadora:
          </Text>
          <Picker
            selectedValue={this.state.operadora}
            onValueChange={(operadoraSelecionada) => this.setState({ operadora: operadoraSelecionada })}
          >
            <Picker.Item label='Tim' value='tim' />
            <Picker.Item label='Claro' value='claro' />
            <Picker.Item label='Oi' value='oi' />
            <Picker.Item label='Vivo' value='vivo' />
          </Picker>

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