
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
        <ScrollView>
            <View style={styles.containerFields}>
              <Text>Cartão de crédito:  </Text>
              <TextInputMask
                ref={'campoCreditCard'}
                style={styles.inputText}
                type={'credit-card'} />
              
              <View style={styles.containerDadosCartao}>
              
                <View style={styles.containerValidadeCvv}>
                  <Text>Validade:</Text>
                  <TextInputMask
                  ref={'campoMesAnoCreditCard'}
                  style={styles.inputText}
                  type={'datetime'}
                  options={{
                  format: 'MM/YY'
                  }} />
                </View>
                <View style={styles.containerValidadeCvv}>
                  <Text>CVV:</Text>
                  <TextInputMask
                    ref={'campoMesAnoCreditCard'}
                    style={styles.inputText}
                    type={'datetime'}
                    options={{
                    format: '999'
                    }} /> 
                </View>                             
              </View>

              <Text>Celular: </Text>
              <TextInputMask
                ref={'campoCelular'}
                style={styles.inputText}
                type={'cel-phone'} /> 
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
});