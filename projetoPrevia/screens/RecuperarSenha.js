
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
    ToastAndroid.show('Recuperar senha', ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={styles.container}>

         <View style={styles.containerFields}>
          <Text>Digite seu Email: </Text>
            <TextInput
              style={styles.inputText}
              keyboardType='email-address'
              maxLength={30}
              underlineColorAndroid={colors.dark}
              clearButtonMode='always'
              value={this.state.email}/>
         </View>

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