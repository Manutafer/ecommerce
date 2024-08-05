var dados = {
    celular: "92641879",
    nome: "João",
    temApartamento: true,
    moveis: ["cama", "ropeiro", "cadeira"],
    endereco: {
      rua: "aldemir ds anjos",
      cep: "8869834",
    },
    varrer: function () {
      return "o morador " + this.nome + " mora";
    },
    fiador: null,
  };
  console.log(dados.nome);
  console.log(dados.fiador);
  console.log(dados.varrer());
  console.log(dados.endereco.rua);
