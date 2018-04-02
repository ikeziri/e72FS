import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from 'react-native';

import metrics       from '../styles/metrics';
import fonts         from '../styles/fonts';
import colors        from '../styles/colors';
import ItemProduto   from '../components/ItemProduto';


export default class Cardapio extends Component {
  state = {
    itensCardapio: [
      {
        id: 1,
        thumbnail: 'https://www.mundoboaforma.com.br/wp-content/uploads/2013/10/prato-comida-620x330.jpg',
        title: 'COMIDA NO PESO',
      },
      {
        id: 2,
        thumbnail: 'https://img-anuncio.listamais.com.br/internas/62778.jpg',
        title: 'BEBIDAS',
      },
      {
        id: 3,
        thumbnail: 'https://1344552651.rsc.cdn77.org/prod/imagens/receita/18055/pudim-de-leite-sem-furinhos-21520.jpg',
        title: 'SOBREMESAS',
      }                          
    ]
  };

listarProdutos(){
      ToastAndroid.show("Cliquei no produto.", ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.itemList}>
          {this.state.itensCardapio.map( item =>
            <ItemProduto onPress={this.listarProdutos.bind(this)} key={item.id} data={item} />
          )}
        </ScrollView>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  itemList: {
    padding: 10,
  },
});