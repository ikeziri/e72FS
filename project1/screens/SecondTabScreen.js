
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  DrawerLayoutAndroid
} from 'react-native';

export default class SecondTabScreen extends Component {
  static navigatorStyle = {
    tabBarHidden: true
  };
  static navigatorButtons = {
    leftButtons: [
      {
        title: 'menu',
        id: 'menu',
        icon: require('../teste.png'),
      }
    ],
    rightButtons: [
      {
        title: 'Edit', // for a textual button, provide the button title (label)
        id: 'edit', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
        testID: 'e2e_rules', // optional, used to locate this view in end-to-end tests
        disabled: true, // optional, used to disable the button (appears faded and doesn't interact)
        disableIconTint: true, // optional, by default the image colors are overridden and tinted to navBarButtonColor, set to true to keep the original image colors
        showAsAction: 'ifRoom', // optional, Android only. Control how the button is displayed in the Toolbar. Accepted valued: 'ifRoom' (default) - Show this item as a button in an Action Bar if the system decides there is room for it. 'always' - Always show this item as a button in an Action Bar. 'withText' - When this item is in the action bar, always show it with a text label even if it also has an icon specified. 'never' - Never show this item as a button in an Action Bar.
        buttonColor: 'blue', // Optional, iOS only. Set color for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
        buttonFontWeight: '600', // Set font weight for the button (can also be used in setButtons function to set different button style programatically)
      },
      {
        title: 'add', // for a textual button, provide the button title (label)
        id: 'add' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
      }
    ]
  };

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      open: false
    }

  }
  openDrawer() {
    // Alert.alert(this.state.open.toString());
    if (this.state.open) {
      this.drawer.closeDrawer();
    } else {
      this.drawer.openDrawer();
    }
  }
  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'edit') { // this is the same id field from the static navigatorButtons definition
        Alert.alert('NavBar', 'Edit button pressed');
      }
      if (event.id == 'add') {
        Alert.alert('NavBar', 'Add button pressed');
      }
      if (event.id == 'menu') {
        this.openDrawer();
      }
    }
  }
  navegar(event) {
    switch (event) {
      case 1:
        this.props.navigator.push({
          screen: 'example.PushedScreen',
          title: 'Pushed Screen'
        });
        break;
      case 2:
        this.props.navigator.push({
          screen: 'example.FirstTabScreen',
          title: 'primeira'
        });
        break;
      case 3:
        this.props.navigator.push({
          screen: 'example.FirstTabScreen',
          title: 'segunda'
        });
        break;
    }
    this.openDrawer();
  }

  render() {
    var navigationView = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(1)}>Item 1</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(2)}>Item 2</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }} onPress={() => this.navegar(3)}>Item 3</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        ref={(_drawer) => this.drawer = _drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        onDrawerOpen={() => this.setState({ open: true })}
        onDrawerClose={() => this.setState({ open: false })}
        renderNavigationView={() => navigationView}>

        <View style={styles.container}>
          <Text style={styles.welcome}>
            second
          </Text>
        </View>
      </DrawerLayoutAndroid >

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