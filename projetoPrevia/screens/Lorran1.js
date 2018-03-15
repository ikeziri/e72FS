
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Picker,
  Button,
  TextInput,
  View
} from 'react-native';

export default class Lorran1 extends Component {
  constructor(props){
    super(props);

    this.state = {bandeira: ''};
  }
  render() {
    return (
      <View>
       <Text> 
            Nome Completo:
       </Text>
       <TextInput placeholder="Ex: André Ikeziri" />
       <Text> 
            Endereço:
       </Text>
       <TextInput placeholder="Ex: Varjão..."/>
       <Text> 
            Telefone:
       </Text>
       <TextInput />
       <Text> 
            Cartão de Crédito:
       </Text>
       <TextInput />
       <Text> 
            Bandeira:
       </Text>
       <Picker 
        selectedValue={this.state.bandeira}
        onValueChange={(bandeiraSelecionada) => this.setState({bandeira: bandeiraSelecionada})}
       >
         <Picker.Item label='MasterCard' value='master' />
         <Picker.Item label='Visa' value='visa' />
         <Picker.Item label='Elo' value='elo' />
       </Picker>

       <Button title="Cadastrar" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});