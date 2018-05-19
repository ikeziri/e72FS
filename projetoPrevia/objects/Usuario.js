import EventEmitter from "react-native-md5";
import md5 from "react-native-md5";
/**
 * Classe de usuario autenticado
 */
export class Usuario {
  /**
   * 
   * @param {string} id
   * @param {string} nome 
   * @param {string} email 
   * @param {string} senha 
   */
  constructor(id, nome, email, senha) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  getSenhaCriptografada(){
    try{
      return md5.hex_md5(this.senha);
    }catch (error){
      return '';
    }
  }

  toString() {
    return 'Usuario (' +
        'id: ' + this.id + ', ' +
        'nome: ' + this.nome + ', ' +
        'email: ' + this.email + ', ' +
        'senha: ' + this.senha + ', ' +
        'senhaCriptografada: ' + this.getSenhaCriptografada() +')';
  }
}