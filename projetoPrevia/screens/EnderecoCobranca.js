
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
  ActivityIndicator,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/MaterialIcons';

import metrics       from '../styles/metrics';
import fonts         from '../styles/fonts';
import colors        from '../styles/colors';
import ButtonSquare from '../components/ButtonSquare';
import Toast, {DURATION} from 'react-native-easy-toast'
import { ApiDescomplica } from '../services/app-services';
import {cadastro, endereco } from '../objects/app-objects';

export default class EnderecoCobranca extends Component {
  constructor(props){
    super(props);
   
    this.state = {
      cep: '',
      logradouro: '' ,
      numero: '' ,
      complemento: '' ,
      bairro: '' ,
      cidade: '' ,
      uf: '',
      msg: [] ,
      isLoading: false ,
    };

    
  }

  onPressSalvar = async () => {
    try{
      this.setState({ msg: [] });
      this.setState({isLoading: true,});
      endereco.logradouro = this.state.logradouro;
      endereco.numero = this.state.numero;
      endereco.complemento = this.state.complemento;
      await ApiDescomplica.cadastrarUsuario(cadastro , endereco);
      await ApiDescomplica.autenticarUsuario(cadastro.email, cadastro.senha);
      this.props.navigator.push({
        screen: 'example.CadastroPagamento',
        title: 'Dados de Pagamento',
      }); 
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

  onPressConsultarCep = async () => {   
    try {
      this.setState({ msg: [] });
      this.setState({isLoading: true,});
      await ApiDescomplica.consultarCep(this.state.cep);
      this.setState({logradouro:endereco.logradouro});
      this.setState({complemento:endereco.complemento});
      this.setState({bairro:endereco.bairro});
      this.setState({cidade:endereco.municipio});
      this.setState({uf:endereco.uf});
      this.setState({isLoading: false});
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
          <View style={styles.containerFields}>

            <View style={styles.containerFieldsHoriz}>
              <View style={styles.tamanhoFlex3}>
              <Text>CEP:  </Text>
              <TextInputMask
                ref={'campoCep'}
                style={styles.inputText}
                type={'zip-code'}
                value={this.state.cep}
                onChangeText={ (cep) => this.setState({ cep }) } 
                options={{
                  format: '99999-999'
                }} />
              </View>
              <View style={styles.tamanhoFlex1}>

              <TouchableOpacity onPress={this.onPressConsultarCep} >
                <Icon name='search' size={30} />
              </TouchableOpacity>
              </View>
            </View>              

            <View style={styles.containerFieldsHoriz}>
              <View style={styles.tamanhoFlex3}>
                <Text>Logradouro: </Text>
                <TextInput 
                  value={this.state.logradouro}
                  onChangeText={ (logradouro) => this.setState({ logradouro }) } 
                />
              </View>
              <View style={styles.tamanhoFlex1}>
                <Text>Nº: </Text>
                <TextInputMask
                  value={this.state.numero}
                  onChangeText={ (numero) => this.setState({ numero }) } 
                  ref={'campoCep'}    
                  type={'only-numbers'} />
              </View>
            </View>

            <Text>Complemento: </Text>
            <TextInput style={styles.inputText}
             value={this.state.complemento}
             onChangeText={ (complemento) => this.setState({ complemento }) }  />
            <Text>Bairro: </Text>
            <TextInput style={styles.inputText} 
             value={this.state.bairro}
             onChangeText={ (bairro) => this.setState({ bairro }) } />

            <View style={styles.containerFieldsHoriz}>
              <View style={styles.tamanhoFlex3}>
                <Text>Cidade: </Text>
                <TextInput
                 value={this.state.cidade}
                 onChangeText={ (cidade) => this.setState({ cidade }) }  />
              </View>
              <View style={styles.tamanhoFlex1}>
                <Text>UF: </Text>
                <TextInput 
                 value={this.state.uf}
                 onChangeText={ (uf) => this.setState({ uf }) } />
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