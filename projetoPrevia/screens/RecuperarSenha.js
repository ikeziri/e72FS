
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

import ButtonPrimary from '../components/ButtonPrimary';

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

         <View style={styles.containerBtnSenha}>
            <ButtonPrimary onPress={ this.onPressRecuperarSenha }> Recuperar </ButtonPrimary>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  containerFields: {
    marginLeft: metrics.marginLeft,
    marginRight: metrics.marginRight,
    marginTop: 20,
  },
  containerBtnSenha: {
    marginTop: 40,
  },
  containerLogo:{
    alignItems: 'center',
    padding: metrics.marginTop,
  },
  logo: {
    width: 100,
    height: 70,
  },
});