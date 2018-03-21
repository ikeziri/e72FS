
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
    ToastAndroid.show('Recuperar email', ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={require('../images/logo-descomplica-simple.png')} />
        </View>

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

         <ButtonPrimary onPress={ this.onPressRecuperarSenha }> Recuperar </ButtonPrimary>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerFields: {
    marginTop: 20,
    marginLeft: metrics.marginLeft,
    marginRight: metrics.marginRight,
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