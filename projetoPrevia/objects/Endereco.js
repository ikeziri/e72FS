/**
 * Classe de endereco do usuario 
 */
export class Endereco {
  /**
   * 
   * @param {integer} cep
   * @param {string} logradouro 
   * @param {integer} numero 
   * @param {string} complemento 
   * @param {string} bairro 
   * @param {string} uf 
   * @param {integer} idMunicipio 
   * @param {string} municipio 
   */
  constructor(cep, logradouro, numero, complemento, bairro, uf, idMunicipio, municipio) {
    this.cep = new Number();
    this.logradouro = new String();
    this.numero = new Number();
    this.complemento = new String();
    this.bairro = new String();
    this.uf = new String();
    this.idMunicipio = new Number();
    this.municipio = new String();
  }
  preencher(jsonEnderecoApiDescomplica) {
    this.cep = jsonEnderecoApiDescomplica.cep;
    this.logradouro = jsonEnderecoApiDescomplica.logradouro;
    this.numero = new Number();
    this.complemento = jsonEnderecoApiDescomplica.complemento;
    this.bairro = jsonEnderecoApiDescomplica.bairro;
    this.uf = jsonEnderecoApiDescomplica.uf;
    this.idMunicipio = jsonEnderecoApiDescomplica.idMunicipio;
    this.municipio = jsonEnderecoApiDescomplica.localidade;
  }
  reset() {
    this.cep = new Number();
    this.logradouro = new String();
    this.numero = new Number();
    this.complemento = new String();
    this.bairro = new String();
    this.uf = new String();
    this.idMunicipio = new Number();
    this.municipio = new String();
  }
  toString() {
    return 'Endereco (' +
        'cep: ' + this.cep + ', ' +
        'logradouro: ' + this.logradouro + ', ' +
        'numero: ' + this.numero + ', ' +
        'complemento: ' + this.complemento + ', ' +
        'bairro: ' + this.bairro + ', ' +
        'uf: ' + this.uf + ', ' +
        'idMunicipio: ' + this.idMunicipio + ', ' +
        'municipio: ' + this.municipio +')';
  }
}