import {Cartao} from  './Cartao'
import {Cadastro} from  './Cadastro'
import {QrCode} from  './QrCode'
import {MensagemTela, TipoMensagem} from  './MensagemTela'





var cartao = new Cartao();
var cadastro = new Cadastro();
var qrCode = new QrCode();

export {
  //Objetos
  cadastro,
  cartao,
  qrCode,
  //Classes
  Cadastro,
  Cartao,
  QrCode,
  MensagemTela, TipoMensagem,
};