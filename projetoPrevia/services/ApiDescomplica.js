import { MensagemTela, TipoMensagem } from '../objects/app-objects';
export class ApiDescomplica {
    /**
     * @author Ikeziri
     * @param {Cadastro}
     * @see Cadastro
     */
    static cadastrarUsuario = async (cadastro) => {
        console.log('cadastrar usuario');
        try {
            var response = await fetch(
                'https://descomplica-restaurante.gladiumti.net.br/api/user',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'token-api': 'h8SYAKVXqI0jOgJ7iJTnQhByyQJijmuE',
                    },
                    body: JSON.stringify(cadastro),
                }
            );
        } catch (error) {
            console.error('Erro ao cadastrar usuario: ' + error);
        }
        if (response.ok) {
            let responseJson = await response.json();
            if (responseJson.message === "Validation Failed") {
                let mensagens = [];
                let objeto = responseJson.errors;
                for (propriedade in objeto) {
                    mensagens.push(new MensagemTela(propriedade, objeto[propriedade][0], TipoMensagem.ERRO));
                };
                throw (mensagens);
            }
            return responseJson.id;
        }
        console.log('??');
        console.log(JSON.stringify(response));

    }
    /**
     * @author Ikeziri
     * @param {Cadastro}
     * @see Cadastro
     */
    static atualizarSenha = async (cadastro) => {
        console.log('atualizar senha');
        try {
            var response = await fetch(
                'https://descomplica-restaurante.gladiumti.net.br/api/updatePassword',
                {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'token-api': 'h8SYAKVXqI0jOgJ7iJTnQhByyQJijmuE',
                    },
                    body: JSON.stringify(cadastro),
                }
            );
        } catch (error) {
            console.error('Erro ao cadastrar usuario: ' + error);
        }
        if (response.ok) {
            let responseJson = await response.json();
            if (responseJson.message === "Validation Failed") {
                let mensagens = [];
                let objeto = responseJson.errors;
                for (propriedade in objeto) {
                    mensagens.push(new MensagemTela(propriedade, objeto[propriedade][0], TipoMensagem.ERRO));
                };
                throw (mensagens);
            }
            // console.log(JSON.stringify(responseJson));
            let mensagens = [];
            mensagens.push(new MensagemTela( '1', responseJson.message, TipoMensagem.INFO));
            return mensagens;
        }
        console.log('??');
        console.log(JSON.stringify(response));
    }
    /**
     * @author Ikeziri
     * @param {Cadastro}
     * @see Cadastro
     */
    static atualizarUsuario = async (cadastro) => {
        console.log('atualizar usuario');
        try {
            var response = await fetch(
                'https://descomplica-restaurante.gladiumti.net.br/api/user/' + cadastro.id,
                {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'token-api': 'h8SYAKVXqI0jOgJ7iJTnQhByyQJijmuE',
                    },
                    body: JSON.stringify(cadastro),
                }
            );
        } catch (error) {
            console.error('Erro ao cadastrar usuario: ' + error);
        }
        if (response.ok) {
            let responseJson = await response.json();
            if (responseJson.message === "Validation Failed") {
                let mensagens = [];
                let objeto = responseJson.errors;
                for (propriedade in objeto) {
                    mensagens.push(new MensagemTela(propriedade, objeto[propriedade][0], TipoMensagem.ERRO));
                };
                throw (mensagens);
            }
            let mensagens = [];
            mensagens.push(new MensagemTela( '1', 'usuario atualizado com sucesso', TipoMensagem.INFO));
            return mensagens;
        }
        console.log('??');
        console.log(JSON.stringify(response));
    }
}