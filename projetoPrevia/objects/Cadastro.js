import {Cartao} from  './Cartao'
/**
 * Classe de cadastro de usuario
 */
export class Cadastro {
  /**
   * 
   * @param {string} id
   * @param {string} name 
   * @param {string} email 
   * @param {string} cpf - mascara 999.999.999-99
   * @param {string} password 
   * @param {string} telefone 
   * @param {string} [endereco]
   * @param {string} [cep]
   * @param {string} [cartao] 
   */
  constructor(id, name, email, cpf, password, telefone,  endereco, cep, cartao) {
    this.id = id;
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