
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
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
    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(1)}>Item 1</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(2)}>Item 2</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(3)}>Item 3</Text>
      </View>
    );
  }
}
