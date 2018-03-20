export class MensagemTela {
    constructor(key, texto, tipoMensagem) {
        this.key = key;
        this.texto = texto;
        this.tipoMensagem = tipoMensagem;
    }
}
export const TipoMensagem = {
    ALERTA: { icon: 'alerta' ,
              cor: 'amarelo',
              valor: 'W',
            },
    INFO: { icon: 'info' ,
              cor: 'azul',
              valor: 'I',
            },
    ERRO: { icon: 'erro' ,
              cor: 'vermelho',
              valor: 'E',
            },
}