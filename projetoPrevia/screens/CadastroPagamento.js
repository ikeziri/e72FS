
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
import ButtonPrimary from '../components/ButtonPrimary';

export default class CadastroBasico extends Component {
  constructor(props){
    super(props);

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
          <View style={styles.containerFields}>
            <Text>Cartão de crédito:  </Text>
            <TextInputMask
              ref={'campoCreditCard'}
              style={styles.inputText}
              type={'credit-card'} />
            
            <View style={styles.containerDadosCartao}>
              <TextInputMask
                ref={'campoMesAnoCreditCard'}
                style={styles.inputText}
                type={'datetime'}
                options={{
                  format: 'MM/YY'
                }} />

              <TextInputMask
                ref={'campoMesAnoCreditCard'}
                style={styles.inputText}
                type={'only-numbers'}
                options={{
                  format: '999'
                }} />                              
            </View>

            <Text>Celular: </Text>
            <TextInputMask
              ref={'campoCelular'}
              style={styles.inputText}
              type={'cel-phone'} /> 
        </View>


            <View style={styles.containerBtnSalvar}>
                <ButtonPrimary onPress={ this.onPressSalvar }> Gravar </ButtonPrimary>
            </View>
            
      </View>
    );
  } 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerFields: {
    marginLeft: metrics.marginLeft,
    marginRight: metrics.marginRight,
    marginTop: 20,
  },
  containerDadosCartao: {
    flexDirection: 'row',
  },
  containerBtnSalvar: {
    marginTop: 15,
  },
  inputText:{
    fontSize: fonts.input,
  },
});