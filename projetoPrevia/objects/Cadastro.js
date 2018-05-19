/**
 * Classe de cadastro de usuario
 */
export class Cadastro {
  /**
   * 
   * @param {string} nome 
   * @param {string} email 
   * @param {string} cpf 
   * @param {string} telefone 
   * @param {string} senha 

   */
  constructor(nome, email, cpf, telefone,  senha) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.senha = senha;
  }
  toString() {
    return 'Cadastro (' +
        'nome: ' + this.nome + ', ' +
        'email: ' + this.email + ', ' +
        'cpf: ' + this.cpf + ', ' +
        'telefone: ' + this.telefone + ', ' +
        'senha: ' + this.senha +')';
  }
}