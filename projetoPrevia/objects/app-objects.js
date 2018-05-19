import {Cartao} from  './Cartao'
import {Cadastro} from  './Cadastro'
import {Endereco} from  './Endereco'
import {Usuario} from  './Usuario'
import {QrCode} from  './QrCode'
import {MensagemTela, TipoMensagem} from  './MensagemTela'





var cartao = new Cartao();
var cadastro = new Cadastro();
var endereco = new Endereco();
var qrCode = new QrCode();
var usuario = new Usuario();

export {
  //Objetos
  cartao,
  cadastro,
  endereco,
  qrCode,
  usuario,
  //Classes
  Cartao,
  Cadastro,
  Endereco,
  QrCode,
  Usuario,
  MensagemTela, 
  TipoMensagem,
};