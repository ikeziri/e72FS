export class Api {
    /**
     * @author Ikeziri
     * @param {Cadastro}
     * @see Cadastro
     */
    static cadastrarUsuario = async (cadastro) => {
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
                        mensagem = {
                            mensagem: objeto[propriedade][0],
                            key: propriedade,
                        };
                        mensagens.push(mensagem);
                    };
                    throw (mensagens);
                }
                return responseJson.id;
            }
        
    }
}