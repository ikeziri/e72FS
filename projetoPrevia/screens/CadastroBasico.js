
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
        <ScrollView>
          <View style={styles.containerFields}>
            <Text>Nome Completo:  </Text>
            <TextInput style={styles.inputText} placeholder="Ex: André Ikeziri" />
            <Text>E-mail: </Text>
            <TextInput style={styles.inputText} placeholder="Ex: paulo@vinnyvinny.com.br" />
            <Text>CPF: </Text>
            <TextInputMask
              ref={'campoCpf'}
              style={styles.inputText}
              type={'cpf'}
              options={{
                format: '999.999.999-99'
              }} />
          </View>

            <View style={styles.containerBtnSalvar}>
                <ButtonPrimary onPress={ this.onPressSalvar }> Gravar </ButtonPrimary>
            </View>
            
        </ScrollView>
      </View>
    );
  } 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  containerFields: {
    marginLeft: metrics.marginLeft,
    marginRight: metrics.marginRight,
    marginTop: 20,
  },
  containerBtnSalvar: {
    marginTop: 15,
  },
  inputText:{
    fontSize: fonts.input,
  },
});