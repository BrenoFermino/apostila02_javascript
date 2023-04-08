let pessoa = {
    nome: "João",
    idade: 17,   
}
console.log(`meu nome é ${pessoa.nome}`)

let pessoaComEndereco = {
    nome: "Maria",
    idade: 21,
    endereco: {
        logradouro: "Rua B",
        numero: 121,
    },
};
console.log(
    `Sou ${pessoaComEndereco.nome},
    tenho ${pessoaComEndereco.idade} anos
    e moro na rua ${pessoaComEndereco.endereco["logradouro"]}
    e moro na rua ${pessoaComEndereco["endereco"]["numero"]}`
);