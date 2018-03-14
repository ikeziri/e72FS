
import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  StyleSheet,
  AppRegistry,
  AsyncStorage,
} from 'react-native';

export default class Drawer extends Component {
  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.state = {
      open: false
    }

  }
  navegar(event) {
    this.props.navigator.toggleDrawer({
      side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
      animated: true, // does the toggle have transition animation or does it happen immediately (optional)
      to: 'close' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
    });
    switch (event) {
      case 1:
        this.props.navigator.showModal({
          screen: 'example.FirstTabScreen',
          title: `Modal`
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
          title: 'segunda'
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
                <Text style={styles.mensagemInicial}>Você está logado</Text>
                <Text style={styles.mensagemData}>13 de março de 2018</Text>
              </View>
              <Image style={styles.avatarInicio}
                    source={require('../images/avatar.png')} />
        </View>
      </View>

/*      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(1)}>Item 1</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(2)}>Item 2</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(3)}>Item 3</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(5)}>Andre</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(9)}>Andre2</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(10)}>Camera</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(11)}>LeitorQrCode</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(6)}>PA</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(7)}>Lorran1</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(8)}>Lorran1</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(4)}>Deslogar</Text>
      </View>*/
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A263C',
  },
  containerHeader: {
    backgroundColor: '#263445',
    flexDirection: 'row',
    paddingTop: 30,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  textosHeader:{
    flexDirection: 'column',
  },
  avatarInicio: {
    width: 90,
    height: 90,
    padding: 10,
  },
  mensagemInicial: {
    color: '#fff',
    fontSize: 20,
    paddingBottom: 10,
  },
  mensagemData: {
    color: '#fff',
    fontSize: 15,
  },
});