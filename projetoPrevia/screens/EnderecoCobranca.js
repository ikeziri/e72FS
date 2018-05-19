
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
  TouchableOpacity,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

            <View style={styles.containerFieldsHoriz}>
              <View style={styles.tamanhoFlex3}>
              <Text>CEP:  </Text>
              <TextInputMask
                ref={'campoCep'}
                style={styles.inputText}
                type={'zip-code'}
                options={{
                  format: '99999-999'
                }} />
              </View>
              <View style={styles.tamanhoFlex1}>

              <TouchableOpacity onPress={this.props.onPress} >
                <Icon name='search' size={30} />
              </TouchableOpacity>
              </View>
            </View>              

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
                <TextInput />
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