import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


import metrics from '../styles/metrics';
import fonts   from '../styles/fonts';
import colors  from '../styles/colors';

export default class ButtonPrimary extends Component {
constructor(props){
    super(props)
}    
  render() {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={this.props.onPress} >
                <Text style={styles.textButton}> { this.props.children } </Text>
            </TouchableOpacity>             
        </View>
    )
  }
};

// define your styles
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: colors.dark,
        marginLeft: metrics.marginLeft,
        marginRight: metrics.marginRight,
        borderRadius: 15,
        padding: 12,
      },
      textButton: {
        fontSize: fonts.big,
        color: colors.white,
      },
});