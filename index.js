const prompt = require("prompt");
prompt.start();

var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      sobrenome: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      email: {
        pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      cpf: {
        pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
    }
  };


prompt.get(schema, function (_, result) {
    console.log("Nome: " + result.name);
    console.log("Sobrenome: " + result.sobrenome);
    console.log("Email: " + result.email);
    console.log("CPF: " + result.cpf);
});