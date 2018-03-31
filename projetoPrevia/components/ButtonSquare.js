import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import metrics from '../styles/metrics';
import fonts   from '../styles/fonts';
import colors  from '../styles/colors';

export default class ButtonSquare extends Component {
    constructor(props) {
        super(props);
    }  
  render() {
    return (
        <View>
            <TouchableOpacity style={styles.buttonSquare} onPress={this.props.onPress} >
                <Icon style={styles.icon}
                        name={this.props.name}
                        size={30} />
            </TouchableOpacity>             
        </View>
    )
  }
};

// define your styles
const styles = StyleSheet.create({
    buttonSquare: {
        backgroundColor: colors.dark,
        borderRadius: 30,
        padding: 12,
        width: 55,
        height: 55,
        marginRight: metrics.marginRight,
      },
      icon: {
          color: colors.white,
      }
});