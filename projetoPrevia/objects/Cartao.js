export class Cartao {
    constructor(nome, numero, vencimentoCartao, cvv) {
        this.nome = nome;
        this.numero = numero;
        this.vencimentoCartao = vencimentoCartao;
        this.cvv = cvv;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    setVencimentoCartao(vencimentoCartao) {
        this.vencimentoCartao = vencimentoCartao;
    }
    setCvv(cvv) {
        this.cvv = cvv;
    }
    toString() {
        return 'Cartao (' +
            'nome: ' + this.nome + ', ' +
            'numero: ' + this.numero + ', ' +
            'vencimentoCartao: ' + this.vencimentoCartao + ', ' +
            'cvv: ' + this.cvv + ')';

    }
}