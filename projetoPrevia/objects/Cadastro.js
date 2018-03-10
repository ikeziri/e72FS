import {Cartao} from  './Cartao'
export class Cadastro {
  constructor(nome, endereco, cep, cartao) {
    this.nome = nome;
    this.endereco = endereco;
    this.cep = cep;
    this.cartao = new Cartao();
  }
  setNome(nome) {
    this.nome = nome;
  }
  setEndereco(endereco) {
    this.endereco = endereco;
  }
  setCep(cep) {
    this.cep = cep;
  }
  setCartao(cartao) {
    this.cartao = cartao;
  }
  toString() {
    return 'Cadastro (' +
      'endereco: ' + this.endereco + ', ' +
      'cep: ' + this.cep + ', ' +
      'cartao: ' + this.cartao + ')';
  }
}