
import React, { Component } from 'react';
import {
  View,
  Text,
  Picker,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  AppRegistry,
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
      uf: 'DF',
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
              <View style={styles.tamanhoFlex3}>
                <Text>Logradouro: </Text>
                <TextInput  />
              </View>
              <View style={styles.tamanhoFlex1}>
                <Text>Nº: </Text>
                <TextInputMask
                ref={'campoCep'}
                type={'only-numbers'} />
              </View>
            </View>

            <Text>Complemento: </Text>
            <TextInput style={styles.inputText} />
            <Text>Bairro: </Text>
            <TextInput style={styles.inputText} />

            <View style={styles.containerFieldsHoriz}>
              <View style={styles.tamanhoFlex3}>
                <Text>Cidade: </Text>
                <TextInput />
              </View>
              <View style={styles.tamanhoFlex1}>
                <Text>UF: </Text>
                <Picker
                  selectedValue={this.state.language}
                  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                  <Picker.Item label="AC" value="AC" />
                  <Picker.Item label="AL" value="AL" />
                  <Picker.Item label="AP" value="AP" />
                  <Picker.Item label="AM" value="AM" />
                  <Picker.Item label="BA" value="BA" />
                  <Picker.Item label="CE" value="CE" />
                  <Picker.Item label="DF" value="DF" selectedValue />
                  <Picker.Item label="ES" value="ES" />
                  <Picker.Item label="GO" value="GO" />
                  <Picker.Item label="MA" value="MA" />
                  <Picker.Item label="MT" value="MT" />
                  <Picker.Item label="MS" value="MS" />
                  <Picker.Item label="MG" value="MG" />
                  <Picker.Item label="PA" value="PA" />
                  <Picker.Item label="PB" value="PB" />
                  <Picker.Item label="PR" value="PR" />
                  <Picker.Item label="PE" value="PE" />
                  <Picker.Item label="PI" value="PI" />
                  <Picker.Item label="RJ" value="RJ" />
                  <Picker.Item label="RN" value="RN" />
                  <Picker.Item label="RS" value="RS" />
                  <Picker.Item label="RO" value="RO" />
                  <Picker.Item label="RR" value="RR" />
                  <Picker.Item label="SC" value="SC" />
                  <Picker.Item label="SP" value="SP" />
                  <Picker.Item label="SE" value="SE" />
                  <Picker.Item label="TO" value="TO" />
                </Picker>
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
  containerFieldsHoriz:{
    flexDirection: 'row'
  },
  tamanhoFlex1:{
    flex:1
  },
  tamanhoFlex3:{
    flex: 3
  },
});