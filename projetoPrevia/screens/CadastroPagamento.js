
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TextInput,
  ScrollView,
  View
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import metrics       from '../styles/metrics';
import fonts         from '../styles/fonts';
import colors        from '../styles/colors';
import ButtonSquare from '../components/ButtonSquare';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

export default class CadastroBasico extends Component {
  constructor(props){
    super(props);
    _onChange => form => console.log(form);
    this.state = {
      name: '' ,
      email: '' ,
      cpf: '' ,
      msg: [] ,
      isLoading: false ,
    };
  }

  onPressSalvar = () => {
    this.props.navigator.push({
      screen: 'example.CadastroPagamento',
      title: 'Dados de Pagamento',
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

            <CreditCardInput onChange={this._onChange}
                             style={styles.containerFields}
                             labels={{ number: "NÚMERO DO CARTÃO", expiry: "VALIDADE", cvc: "CCV" }}
                             placeholders={{ number: "1234 5678 1234 5678", expiry: "MM/AA", cvc: "CVC" }}
             />
            
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
});