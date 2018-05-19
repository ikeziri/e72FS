
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
      screen: 'example.EnderecoCobranca',
      title: 'Endereço de Cobrança',
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
            <TextInput style={styles.inputText} placeholder="Ex: alexandre@grupogladium.com.br" />
            <Text>CPF: </Text>
            <TextInputMask
              ref={'campoCpf'}
              style={styles.inputText}
              type={'cpf'}
              placeholder="123.456.789-00"
              options={{
                format: '999.999.999-99'
              }} />
            <Text>Celular: </Text>
              <TextInputMask
                ref={'campoCelular'}
                style={styles.inputText}
                type={'cel-phone'}
                placeholder="(61) 99999-9999" />
            <Text>Senha:  </Text>
            <TextInput style={styles.inputText} />                                      
          </View>

        </ScrollView>
        <View style={styles.containerBtnSalvar}>
          <ButtonSquare onPress={ this.onPressSalvar} name="navigate-next"  />
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
  containerBtnSalvar: {
    marginRight: metrics.marginRight,
    marginBottom: metrics.marginBottom,
    alignSelf: 'flex-end',
  },
  inputText:{
    fontSize: fonts.input,
  },
});