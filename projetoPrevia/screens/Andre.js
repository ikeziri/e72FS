
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';


import { setDrawerOn } from '../functions/app-functions';
import { cadastro, cartao, qrCode } from '../objects/app-objects';

export default class Andre extends Component {
  constructor(props) {
    super(props);
    setDrawerOn(this);
    this.state = {
      nome: cartao.nome,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          com Drawer
        </Text>
        <TextInput
          style={{ height: 40, width: 300 }}
          placeholder="Type here to translate!"
          value={this.state.nome}
          onChangeText={(texto) => this.setState({ nome: texto })}
        />
        <Button
          onPress={this.adicionar.bind(this)}
          title="adicionar"
          color="#841584"
          accessibilityLabel="adicion"
        />
      </View>
    );
  }

  adicionar() {
    cartao.setNome(this.state.nome);
    console.log(cartao.toString());
  }

  onAppear() {
    this.setState({ nome: qrCode.data });
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