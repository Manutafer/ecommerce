
var pessoa ={
    nome:"Manu",
    idade:16,
    CPF:"104.221.189-23",
    email: "manutafer@gmail.com",

    saudacao: function(){
        return "Oi! eu sou " + this.nome + "."
    }
}

console.log(pessoa.saudacao())
console.log(pessoa.idade);