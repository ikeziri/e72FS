
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TextInput,
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import metrics       from '../styles/metrics';
import fonts         from '../styles/fonts';
import colors        from '../styles/colors';
import ButtonSquare from '../components/ButtonSquare';
import { CreditCardInput } from "react-native-credit-card-input";
import { ApiDescomplica } from '../services/app-services';
import {cartao} from '../objects/app-objects';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class CadastroBasico extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '' ,
      sobreNome: '' ,
      number: '' ,
      cvv: '' ,
      mesVencimento: '' ,
      anoVencimento: '' ,
      msg: [] ,
      isLoading: false ,
    };
  }
  
  _onChange = (form) => {
    let mes='', ano='';
    try {
      let validade = form.values.expiry.split("/");
      mes = validade[0];
      ano = validade[1];
    }catch(error){

    }
    this.setState({
      number: form.values.number.replace(/ /g,''), 
      cvv: form.values.cvc, 
      mesVencimento: mes, 
      anoVencimento: ano, 
    });
  }

  onPressSalvar = async() => {
    try {
      this.setState({ msg: [] });
      this.setState({isLoading: true,});
      cartao.first_name = this.state.nome;
      cartao.last_name = this.state.sobreNome;
      cartao.number = this.state.number;
      cartao.verification_value = this.state.cvv;
      cartao.month = this.state.mesVencimento;
      cartao.year = this.state.anoVencimento;
      console.log(cartao.toString());
      await ApiDescomplica.cadastrarFormaPagamento(cartao);
    } catch (msg) {
      this.setState({ msg: msg });
      console.log(msg);
      this.setState({isLoading: false,});
      msg.forEach(element => {
        console.log('texto toast: ' + element.texto);
        this.refs.toast.show(element.texto); 
      });
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
        <ScrollView>
            {/* https://github.com/crazycodeboy/react-native-easy-toast */}
          <Toast
                    ref="toast"
                    style={{backgroundColor:'white'}}
                    position='top'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'red'}}
          />
            <CreditCardInput onChange={this._onChange}
                             labels={{ number: "Número do Cartão", expiry: "Validade", cvc: "CCV" }}
                             placeholders={{ number: "1234 5678 1234 5678", expiry: "MM/AA", cvc: "CVC" }}
                             labelStyle={styles.labelCard}
             />
            <View style={styles.containerFields}>
              <Text>Nome:  </Text>
              <TextInput style={styles.inputText} placeholder="Conforme consta no cartão" 
                value={this.state.nome}
                onChangeText={ (nome) => this.setState({ nome }) }/>
            </View>
            <View style={styles.containerFields}>
              <Text>Sobrenome:  </Text>
              <TextInput style={styles.inputText} placeholder="Conforme consta no cartão" 
                value={this.state.sobreNome}
                onChangeText={ (sobreNome) => this.setState({ sobreNome }) }/>
            </View>
          </ScrollView>

          <View style={styles.containerBtnSalvar}>
            <ButtonSquare onPress={ this.onPressSalvar} name="check"  />
          </View>
      </View>
    );
  } 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column',
  },
  containerFields: {
    marginLeft: metrics.marginLeft,
    marginRight: metrics.marginRight,
    marginTop: 20,
  },
  containerDadosCartao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerValidadeCvv: {
    flexDirection: 'column',
    flex: 1,
  },
  containerBtnSalvar: {
    marginRight: metrics.marginRight,
    marginBottom: metrics.marginBottom,
    alignSelf: 'flex-end',
  },
  inputText:{
    fontSize: fonts.input,
  },
  labelCard:{
    fontWeight: 'normal',
  }
});