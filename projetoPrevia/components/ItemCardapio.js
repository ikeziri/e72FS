import React,  { Component } from 'react';

import { View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    } from 'react-native';

import metrics       from '../styles/metrics';
import fonts         from '../styles/fonts';
import colors        from '../styles/colors';

export default class ItemCardapio extends Component {
    render() {
        return(
            <View>
                <TouchableOpacity style={styles.item} onPress={this.props.onPress} >
                    <Image style={styles.itemImage} source={{uri: this.props.data.thumbnail}} />
                    <View style={styles.itemInfo}>
                        <Text style={styles.itemTitle}>{this.props.data.title}</Text>
                    </View>
                </TouchableOpacity>            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        backgroundColor: colors.dark,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
      },

      itemImage:{
        width: 60,
        height: 60,
        borderRadius: 30,
      },

      itemInfo: {
        marginLeft: 10,
      },

      itemTitle: {
          fontWeight: 'bold',
          color: colors.white,
          fontSize: fonts.biggest,
          marginTop: 9,
      },
});