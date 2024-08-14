function Maioridade(idade) {
    if (idade < 18) {
        throw new Error("Menor de idade");
    }

    return true;
}

module.exports.Maioridade = Maioridade;
