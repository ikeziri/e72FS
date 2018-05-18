
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

export default class EnderecoCobranca extends Component {
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
            <Text>CEP:  </Text>
            <TextInputMask
              ref={'campoCep'}
              style={styles.inputText}
              type={'zip-code'}
              options={{
                format: '99999-999'
              }} />

            <View style={styles.containerFieldsHoriz}>
              <View>
                <Text>Logradouro: </Text>
                <TextInput style={styles.inputText300} />
              </View>
              <View>
                <Text>Nº: </Text>
                <TextInputMask
                ref={'campoCep'}
                style={styles.inputText100}
                type={'only-numbers'} />
              </View>
            </View>

            <Text>Complemento: </Text>
            <TextInput style={styles.inputText} />
            <Text>Bairro: </Text>
            <TextInput style={styles.inputText} />

            <View style={styles.containerFieldsHoriz}>
              <View>
                <Text>Cidade: </Text>
                <TextInput style={styles.inputText300} />
              </View>
              <View>
                <Text>UF: </Text>
                <TextInput style={styles.inputText100} />
              </View>

            </View>
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
  inputText300:{
    width: 300
  },
  inputText100:{
    width: 100
  },
  containerFieldsHoriz:{
    flex: 1,
    flexDirection: 'row'
  }
});