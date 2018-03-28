
import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  StyleSheet,
  AppRegistry,
  AsyncStorage,
  TouchableOpacity,
  ScrollView ,
} from 'react-native';

import colors        from '../styles/colors';
import fonts         from '../styles/fonts';
import ButtonPrimary from '../components/ButtonPrimary';
import CurrentDate   from '../components/CurrentDate';
import Icon          from 'react-native-vector-icons/FontAwesome';

export default class Drawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    } 

  }

  navegar(event) {
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true,
      to: 'close',
    });
    switch (event) {
      case 1:
        this.props.navigator.showModal({
          screen: 'example.FirstTabScreen',
          title: 'Modal',
        });
        break;
      case 2:
        this.props.navigator.push({
          screen: 'example.FirstTabScreen',
        });
        break;
      case 3:
        this.props.navigator.resetTo({
          screen: 'example.SecondTabScreen',
          title: 'segunda',
        });
        break;
      case 4:
        this.deslogar().done();
        break;
      case 5:
        this.props.navigator.push({
          screen: 'example.Andre',
          title: 'exemplo com Drawer'
        });
        break;
      case 6:
        this.props.navigator.push({
          screen: 'example.PA',
          title: 'PA'
        });
        break;
      case 7:
        this.props.navigator.push({
          screen: 'example.Lorran1',
          title: 'Lorran1'
        });
        break;
      case 8:
        this.props.navigator.push({
          screen: 'example.Lorran2',
          title: 'Lorran2'
        });
        break;
      case 9:
        this.props.navigator.push({
          screen: 'example.Andre2',
          title: 'exemplo sem Drawer'
        });
        break;
      case 10:
        this.props.navigator.push({
          screen: 'example.Camera',
          title: 'camera'
        });
        break;
      case 11:
        this.props.navigator.push({
          screen: 'example.LeitorQrCode',
          title: 'QrCode'
        });
        break;
      case 12:
        this.props.navigator.push({
          screen: 'example.Andre3',
          title: 'teste 3'
        });
        break;
    }
  }

  deslogar = async () => {
    try {
      await AsyncStorage.removeItem('Login');
      this.props.navigator.resetTo({
        screen: 'example.Login',
        title: 'Login'
      });
    } catch (error) {
      Alert.alert(error.toString());
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <View style={styles.textosHeader}>
            <Text style={styles.mensagemInicial}>Nome do usuário</Text>
            <CurrentDate style={styles.mensagemData} />
          </View>
          <Image style={styles.avatarInicio}
            source={require('../images/avatar.png')} />
        </View>

        <ScrollView  style={styles.contentMenu}>
          <Text style={styles.itemMenu} onPress={() => this.navegar(1)}>Item 1</Text>
          <Text style={styles.itemMenu} onPress={() => this.navegar(2)}>Item 2</Text>
          <Text style={styles.itemMenu} onPress={() => this.navegar(3)}>Item 3</Text>
          <Text style={styles.itemMenu} onPress={() => this.navegar(5)}>Andre</Text>
          <Text style={styles.itemMenu} onPress={() => this.navegar(9)}>Andre2</Text>
          <Text style={styles.itemMenu} onPress={() => this.navegar(12)}>Andre3</Text>
          <Text style={styles.itemMenu} onPress={() => this.navegar(10)}>Camera</Text>
          <Text style={styles.itemMenu} onPress={() => this.navegar(11)}>LeitorQrCode</Text>
          <Text style={styles.itemMenu} onPress={() => this.navegar(6)}>PA</Text>
          <Text style={styles.itemMenu} onPress={() => this.navegar(7)}>Lorran1</Text>
          <Text style={styles.itemMenu} onPress={() => this.navegar(8)}>Lorran1</Text>
        </ScrollView >


        <View style={styles.containerFooter}>
          <Icon name="power-off"
                style={styles.iconLogout}
                size={33}
                backgroundColor={colors.darkest} />
            <Text style={styles.logout} onPress={() => this.navegar(4)}>Sair</Text>
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
  containerHeader: {
    backgroundColor: colors.darker,
    flexDirection: 'row',
    paddingTop: 30,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    justifyContent: 'space-between',
    height: 140,
  },
  containerFooter: {
    height: 90,
    borderTopColor: colors.darker,
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  textosHeader: {
    flexDirection: 'column',
  },
  contentMenu: {
    flexDirection: 'column',
    height: 100,
  },
  itemMenu: {
    color: colors.darker,
    fontSize: fonts.regular,
    padding: 8,
  },
  avatarInicio: {
    width: 90,
    height: 90,
    padding: 20,
  },
  mensagemInicial: {
    color: colors.white,
    fontSize: fonts.big,
    paddingBottom: 10,
  },
  logout:{
    color: colors.dark,
    fontSize: fonts.regular,
    padding: 5,
    marginTop: 5,
  },
  iconLogout:{
    padding:5,
    color: colors.dark,
  },
});