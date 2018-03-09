
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  Button,
  AsyncStorage,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class FirstTabScreen extends Component {

  static navigatorButtons = {
    leftButtons: [
      {
        title: 'menu',
        id: 'menu',
        icon: require('../assets/teste.png'),
      }
    ],
  };

  render() {
    var listItems = this.state.cart.map(function (item) {
      return (
        <Text>
          {item}
        </Text>
      );
    });

    return (
      <View style={styles.container}>
        <Icon name="md-menu" size={30} color="#4F8EF7" />
        <Text style={styles.welcome}>
          Lista:
        </Text>
        {listItems}
        <Text style={styles.welcome}>
          Fim  Lista:
        </Text>

        <TextInput
          style={{ height: 40, width: 120 }}
          placeholder="Type here to translate!"
          value={this.state.texto}
          onChangeText={(texto) => this.setState({ texto })}
        />
        <Button
          onPress={this.adicionar.bind(this)}
          title="adicionar"
          color="#841584"
          accessibilityLabel="adicion"
        />
        <Button
          onPress={this.salvar.bind(this)}
          title="salvar"
          color="#841584"
          accessibilityLabel="save"
        />
      </View>
    );
  }
  constructor(props) {
    super(props);
    this.props.navigator.setDrawerEnabled({
      side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
      enabled: true // should the drawer be enabled or disabled (locked closed)
    });
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      cart: [],
      texto: '',
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadIcon = async () => {
    try{
    Icon.getImageSource('md-arrow-back', 30).then((source) => this.setState({ backIcon: source }));
  }catch(error){
    Alert.alert('deu merda ' + error.message);
  }
  }

  _loadInitialState = async () => {
    try {
      var value = await AsyncStorage.getItem('Cart');
      if (value !== null) {
        Alert.alert(value);
        let getCart = JSON.parse(value);
        this.setState({ cart: getCart });
      } else {
      }
    } catch (error) {
      Alert.alert('AsyncStorage error: ' + error.message);
    }
    this.setState({
      isLoading: false,
    });
  };

  adicionar() {
    let newCart;
    try {
      newCart = this.state.cart;
    } catch (error) {
      newCart = [];
    }
    Alert.alert(JSON.stringify(newCart));
    newCart.push(this.state.texto);
    this.setState({ cart: newCart });
  }

  salvar = async () => {
    try {
      let setCart = JSON.stringify(this.state.cart);
      Alert.alert(setCart);
      await AsyncStorage.setItem('Cart', setCart);
      this._loadInitialState().done();
    } catch (error) {
      // Error saving data
    }
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'menu') { // this is the same id field from the static navigatorButtons definition
        this.props.navigator.toggleDrawer({
          side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
          animated: true, // does the toggle have transition animation or does it happen immediately (optional)
          to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
        });
      }
    }
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