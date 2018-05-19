import { MensagemTela, TipoMensagem, usuario, endereco, Endereco} from '../objects/app-objects';
export class ApiDescomplica {
    /**
     * @author Ikeziri
     * @param {email, senha}
     * @see Cadastro
     * @tested 18-05-18
     */
    static autenticarUsuario = async (email, senha) => {
        // console.log('autenticar usuario');
        // console.log('email: ' + usuario.email);
        // console.log('senha: ' + usuario.senha);
        // console.log('crypt: ' + usuario.getSenhaCriptografada());
        usuario.id = 0;
        usuario.email = email;
        usuario.senha = senha;
        // console.log('email: ' + usuario.email);
        // console.log('senha: ' + usuario.senha);
        // console.log('crypt: ' + usuario.getSenhaCriptografada());
        try {
            var response = await fetch(
                'https://descomplica-restaurante.gladiumti.net.br/api/auth',
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'usuLogin':  usuario.email,
                        'senhamd5':  usuario.getSenhaCriptografada(),
                    },
                }
            );
        } catch (error) {
            console.error('Erro ao autenticar usuario: ' + error);
            usuario.email = '';
            usuario.senha = '';
        }
        let mensagens = [];
        if (response.ok) {
            let responseJson = await response.json();
            if (responseJson.message === "Validation Failed") {
                let objeto = responseJson.errors;
                for (propriedade in objeto) {
                    mensagens.push(new MensagemTela(propriedade, objeto[propriedade][0], TipoMensagem.ERRO));
                };
                usuario.email = '';
                usuario.senha = '';
                throw (mensagens);
            }
            if(responseJson.success){
                usuario.id = responseJson.usuario[0].idUsuario;
            }
            // console.log(usuario.id);
            return  usuario.id;
        }
        usuario.email = '';
        usuario.senha = '';
        mensagens.push(new MensagemTela('login', 'texto de falha autenticacao', TipoMensagem.ERRO));
        throw (mensagens);
    }
    /**
     * @author Ikeziri
     * @param {cep}
     * @see Cadastro
     * @tested 18-05-18
     */
    static consultarCep = async (cep) => {
        console.log('cep: ' + cep);
        endereco.reset();
        try {
            var response = await fetch(
                'https://descomplica-restaurante.gladiumti.net.br/api/endereco/'+cep,
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                    },
                }
            );
        } catch (error) {
            console.error('Erro ao consultar CEP: ' + error);
        }
        let mensagens = [];
        if (response.ok) {
            let responseJson = await response.json();
            console.log(responseJson);
            if(responseJson.cep !== ""){
                endereco.preencher(responseJson);
                console.log(endereco.toString());
                return  true;
            }
        }
        mensagens.push(new MensagemTela('cep', 'texto de falha consultar cep', TipoMensagem.ERRO));
        throw (mensagens);
    }
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
        let mensagens = [];
        if (response.ok) {
            let responseJson = await response.json();
            if (responseJson.message === "Validation Failed") {
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
        mensagens.push(new MensagemTela('login', 'texto de cadastar usuario com falha', TipoMensagem.ERRO));
        throw (mensagens);
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