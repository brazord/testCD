console.log("Hello, GitHub Actions");

//Alunos
/*
Avalone Cabrera
Christian Martins
Gustavo Gutierrez
João Henrique de Oliveira
João Victor Ferrari
*/

function DivisaoJoao(num, divisor){
    if (divisor === 0) {
        throw new Error("Divisão Não permitida");
    }
    return num / divisor;
}

module.exports.division = DivisaoJoao;