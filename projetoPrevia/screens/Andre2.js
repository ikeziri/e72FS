
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';


import { setDrawerOff } from '../functions/app-functions';
import { cadastro, cartao, qrCode } from '../objects/app-objects';

export default class Andre extends Component {
  constructor(props) {
    super(props);
    setDrawerOff(this);
    this.state ={
      nome : cartao.nome,
    }
  }
  render() {
    let dadosCartao = (
      <Text>
        Nome do cartão: {this.state.nome}
      </Text>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          sem drawer
        </Text>
        {this.state.nome &&
          dadosCartao
        }
      <Button
        onPress={this.lerQrCode.bind(this)}
        title="Ler QrCode"
        color="#841584"
        accessibilityLabel="adicion"
      />
      </View>
    );
  }
  onAppear() {
    this.setState({ nome: qrCode.data });
  }

  lerQrCode(){
    this.props.navigator.push({
      screen: 'example.LeitorQrCode',
      title: 'QrCode'
    });
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