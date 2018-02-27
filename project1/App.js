/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ActivityIndicator, ListView, Text, View, TextInput, Button, Alert, AppRegistry, DrawerLayoutAndroid,
  ActionBar, StyleSheet, TouchableHighlight, Image,
} from 'react-native';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
// https://wix.github.io/react-native-navigation/#/styling-the-navigator
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One T',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('./assets/first.png'),
      // selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Screen One',
      navigatorStyle: { navBarHidden: true },
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('./assets/second.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Screen Two'
    },
    {
      label: '3',
      screen: 'example.ThirdTabScreen',
      icon: require('./assets/second.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Screen 3'
    },
    // {
    //   label: 'Qr',
    //   screen: 'example.QrCode',
    //   icon: require('./second.png'),
    //   // selectedIcon: require('../img/two_selected.png'), // iOS only
    //   title: 'QR CODE'
    // }
  ],
});

const TopNavigation = () => (
  <View style={{ padding: 10, flexDirection: 'row', backgroundColor: 'pink' }}>
    <View style={{ flex: 1 }}><Text>My App</Text></View>
    <Menu onSelect={(value) => alert(this)}>
      <MenuTrigger>
        <Text style={{ fontSize: 20 }}>&#8942;</Text>
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1}>
          <Text>One</Text>
        </MenuOption>
        <MenuOption value={2}>
          <Text>Two</Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
  </View>
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.state = {
      isLoading: false,
      text: ' ',
      value: 0
    }
  }



  componentDidMount() {
    return fetch('http://invest-182620.appspot.com/rest/investimentoResource/listarAcoesConsolidada')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function () {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  openDrawer() {
    this.drawer.openDrawer();
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    var navigationView = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        ref={(_drawer) => this.drawer = _drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Button
            onPress={this.openDrawer}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <TouchableHighlight onPress={this.openDrawer}>
            <Image
              source={require('./teste.png')}
            />
          </TouchableHighlight>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
        </View>
      </DrawerLayoutAndroid >
      // You need to place a MenuContext somewhere in your application, usually at the root.//   
      // Menus will open within the context, and only one menu can open at a time per context.
      // <MenuContext style={{ flex: 1 }}>
      //   <TopNavigation />
      //   <Text>
      //     {/* nao consegui mudar valor do estado */}
      //     {this.state.value}
      //   </Text>
      //   <View style={{ flex: 2, paddingTop: 20 }}>
      //     <Text>
      //       pagina 1
      //   </Text>
      //     <ListView
      //       dataSource={this.state.dataSource}
      //       renderRow={(rowData) => <Text>{rowData.nome}, {rowData.valor}</Text>}
      //     />
      //     <Text>
      //       pagina 2
      //   </Text>

      //     <TextInput
      //       style={{ height: 40 }}
      //       placeholder="Type here to translate!"
      //       onChangeText={(text) => this.setState({ text })}
      //     />
      //     <Text style={{ padding: 10, fontSize: 42 }}>
      //       {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
      //     </Text>
      //     <Button
      //       onPress={() => {
      //         Alert.alert('You tapped the button!');
      //       }}
      //       title="Press Me"
      //     />
      //   </View>
      // </MenuContext>
    );
  }
};
