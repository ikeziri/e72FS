//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');
// create a component
const LineHr = () => {
    return (
        <View style={styles.linha}>
            <View style={styles.hr} />
        </View>
    );
};


const styles = StyleSheet.create({
    hr:{
      borderBottomColor: '#12466e',
      borderBottomWidth: 1,
      width: width - 40,
    },
    linha:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
  });

//make this component available to the app
export default LineHr;
