import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class CurrentDate extends Component {
    constructor(props){
        super(props)

        this.state = {
            dataHora: this.ShowCurrentDate(),
        } 
    }

    ShowCurrentDate=()=>{
        var date = new Date().getDate();
        var month = this.returnMonth();
        var year = new Date().getFullYear();

        return date + ' de ' + month + ' de ' + year;
    }

  returnMonth=()=>{
    switch (new Date().getMonth()) {
      case 0:
          mon = "Janeiro";
          break;
      case 1:
          mon = "Fevereiro";
          break;
      case 2:
          mon = "Março";
          break; 
      case 3:
          mon = "Abril";
          break;
      case 4:
          mon = "Maio";
          break;
      case 5:
          mon = "Junho";
          break;
      case 6:
          mon = "Julho";
          break; 
      case 7:
          mon = "Agosto";
          break;
      case 8:
          mon = "Setembro";
          break;
      case 9:
          mon = "Outubro";
          break;
      case 10:
          mon = "Novembro";
          break;
      case 11:
          mon = "Dezembro";
          break;              
  }

    return mon;
  }


  render() {
    return (
        <View>
           <Text>{this.state.dataHora}</Text>  
        </View>
    )
  }
};