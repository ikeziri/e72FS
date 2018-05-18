import {Cartao} from  './Cartao'
import {Cadastro} from  './Cadastro'
import {Usuario} from  './Usuario'
import {QrCode} from  './QrCode'
import {MensagemTela, TipoMensagem} from  './MensagemTela'





var cartao = new Cartao();
var cadastro = new Cadastro();
var qrCode = new QrCode();
var usuario = new Usuario();

export {
  //Objetos
  cadastro,
  cartao,
  qrCode,
  usuario,
  //Classes
  Cadastro,
  Cartao,
  QrCode,
  Usuario,
  MensagemTela, 
  TipoMensagem,
};