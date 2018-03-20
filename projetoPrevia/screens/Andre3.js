
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';


import { setDrawerOff } from '../functions/app-functions';
import { cadastro, cartao, qrCode } from '../objects/app-objects';
import { ApiDescomplica } from '../services/app-services';


export default class Andre extends Component {
  constructor(props) {
    super(props);
    setDrawerOff(this);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      password: '',
      telefone: '',
      msg: [],
      isLoading: false,
    }
  }
  render() {
    let cadastrado = (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          id: {this.state.id}
        </Text>
        <Button
          onPress={this.atualizarSenha.bind(this)}
          title="atualizar senha"
          color="#841584"
          accessibilityLabel="adicion"
        />
      </View>
    );
    if (this.state.isLoading) {
      return (
        <View >
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {this.state.msg.length > 0 &&
          <FlatList
            data={this.state.msg}
            renderItem={({ item }) => <Text>{item.mensagem}</Text>}
          />
        }
        {this.state.id &&
          cadastrado
        }
        <Text style={styles.welcome}>
          cpf: {this.state.cpf}
        </Text>
        <Text style={styles.welcome}>
          Aciona um backEnd de cadastro
        </Text>
        <Button
          onPress={this.cadastrarUsuario.bind(this)}
          title="Cadastrar"
          color="#841584"
          accessibilityLabel="adicion"
        />
        <Button
          onPress={this.gerarNovoCpf.bind(this)}
          title="Gerar novo cpf"
          color="#841584"
          accessibilityLabel="adicion"
        />
      </View>
    );
  }
  onAppear() {
    this.gerarNovoCpf();
  }

  gerarNovoCpf() {
    this.setState({
      name: 'Andre',
      email: this.gerarCPF() + 'andre@andre.com',
      cpf: this.gerarCPF(),
      password: '123',
      telefone: '(61) 99999-9999',
    });
  }

  cadastrarUsuario = async () => {
    cadastro.name = this.state.name;
    cadastro.email = this.state.email;
    cadastro.cpf = this.state.cpf;
    cadastro.password = this.state.password;
    cadastro.telefone = this.state.telefone;
    try {
      this.setState({isLoading: true,});
      let id = await ApiDescomplica.cadastrarUsuario(cadastro);
      this.setState({ id: id });
    } catch (msg) {
      this.setState({ msg: msg });
    };
    this.setState({isLoading: false,});
  }
  
  atualizarSenha = async () => {
    cadastro.name = this.state.name;
    cadastro.email = this.state.email;
    cadastro.cpf = this.state.cpf;
    cadastro.password = 123456;
    cadastro.telefone = this.state.telefone;
    try {
      this.setState({isLoading: true,});
      let id = await ApiDescomplica.atualizarSenha(cadastro);
      console.log('atualizado');
    } catch (msg) {
      this.setState({ msg: msg });
    };
    this.setState({isLoading: false,});
  }

  randomiza(n) {
    var ranNum = Math.round(Math.random() * n);
    return ranNum;
  }

  mod(dividendo, divisor) {
    return Math.round(dividendo - (Math.floor(dividendo / divisor) * divisor));
  }

  gerarCPF() {
    comPontos = true; // TRUE para ativar e FALSE para desativar a pontuação.
    var n = 9;
    var n1 = this.randomiza(n);
    var n2 = this.randomiza(n);
    var n3 = this.randomiza(n);
    var n4 = this.randomiza(n);
    var n5 = this.randomiza(n);
    var n6 = this.randomiza(n);
    var n7 = this.randomiza(n);
    var n8 = this.randomiza(n);
    var n9 = this.randomiza(n);
    var d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
    d1 = 11 - (this.mod(d1, 11));
    if (d1 >= 10) d1 = 0;
    var d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
    d2 = 11 - (this.mod(d2, 11));
    if (d2 >= 10) d2 = 0;
    retorno = '';
    if (comPontos) cpf = '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + d1 + d2;
    else cpf = '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
    return cpf;
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

