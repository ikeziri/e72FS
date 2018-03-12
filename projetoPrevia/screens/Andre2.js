
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import { setDrawerOff } from '../functions/app-functions';
import { cadastro, cartao } from '../objects/app-objects';

export default class Andre extends Component {
  constructor(props) {
    super(props);
    this.teste ='teste';
    setDrawerOff(this);
  }
  render() {
    let dadosCartao = (
      <Text>
        Nome do cartão: {cartao.nome}
      </Text>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          sem drawer
        </Text>
        {cartao.nome &&
          dadosCartao
        }
      </View>
    );
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