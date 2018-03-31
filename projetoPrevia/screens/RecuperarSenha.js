
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Picker,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  AppRegistry,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';

import metrics from '../styles/metrics';
import fonts   from '../styles/fonts';
import colors  from '../styles/colors';

import ButtonSquare from '../components/ButtonSquare';

export default class RecuperarSenha extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
    };
  }

  onPressRecuperarSenha(){
    if(this.state.email == ''){
      ToastAndroid.show('Digite algo!!', ToastAndroid.SHORT);
    }else{
      ToastAndroid.show(this.state.email, ToastAndroid.SHORT);
    }
  }


  render() {
    return (
      <View style={styles.container}>

         <View style={styles.containerFields}>
          <Text>Digite seu Email: </Text>
            <TextInput
              ref={(input) => { this.email = input; }}
              style={styles.inputText}
              autoFocus = {true}
              keyboardType='email-address'
              maxLength={30}
              underlineColorAndroid={colors.dark}
              clearButtonMode='always'
              onChangeText={(texto) => this.setState({ email: texto })} />
         </View>

          <View style={styles.containerBtnSalvar}>
            <ButtonSquare onPress={ this.onPressRecuperarSenha.bind(this) } name="check"  />
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
    flex: 1,
    marginLeft: metrics.marginLeft,
    marginRight: metrics.marginRight,
    marginTop: 20,
  },
  containerBtnSenha: {
    marginTop: 40,
  },
  containerBtnSalvar: {
    marginRight: metrics.marginRight,
    marginBottom: metrics.marginBottom,
    alignSelf: 'flex-end',
  },
});