import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image, StatusBar } from 'react-native';

import defaultStyles from '../styles/index';


class Splash extends Component {
    static navigatorStyle = {
        navBarHidden: true,
      };
      
    render() {
        return (
            <View style={localStyles.container}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#4F6D7A"
                    />
                <Image source={require('../images/logo-descomplica.png')} />
            </View>
        );
    }
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF",
    },
});

export default Splash;