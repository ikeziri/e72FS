import {Cartao} from  './Cartao'
/**
 * Classe de cadastro de usuario
 */
export class Cadastro {
  /**
   * 
   * @param {string} name 
   * @param {string} email 
   * @param {string} cpf - mascara 999.999.999-99
   * @param {string} password 
   * @param {string} telefone 
   * @param {string} [endereco]
   * @param {string} [cep]
   * @param {string} [cartao] 
   */
  constructor(name, email, cpf, password, telefone,  endereco, cep, cartao) {
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.password = password;
    this.telefone = telefone;
    this.endereco = endereco;
    this.cep = cep;
    this.cartao = new Cartao();
  }

}