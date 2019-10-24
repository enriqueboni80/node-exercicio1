function VerificaCPF(strCpf) {
    cpf = strCpf.replace(/[\.-]/g, "")
    var Soma, Resto
    Soma = 0;
    for (i = 1; i <= 9; i++) {
        Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }
    if (Resto != parseInt(cpf.substring(9, 10))) {
        return false;
    }
    Soma = 0;
    for (i = 1; i <= 10; i++) {
        Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) {
        Resto = 0;
    }
    if (Resto != parseInt(cpf.substring(10, 11))) {
        return false;
    }
    return true;
}

const prompt = require("prompt");
prompt.start();

var schema = {
    properties: {
        name: {
            description: 'Nome',
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'Esse campo não pode ser vazio',
            required: true
        },
        sobrenome: {
            description: 'Sobrenome',
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'Esse campo não pode ser vazio',
            required: true
        },
        email: {
            description: 'e-mail',
            pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi,
            message: 'email inválido',
            required: true
        },
        cpf: {
            description: 'CPF',
            pattern: /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/,
            message: 'CPF fora do padrao ou invalido',
            require: true,
            conform: function(cpf) {
                return VerificaCPF(cpf)
            }
        },
    }
};

prompt.get(schema, function(_, result) {
    console.log("Nome: " + result.name);
    console.log("Sobrenome: " + result.sobrenome);
    console.log("Email: " + result.email);
    console.log("CPF: " + result.cpf);
});