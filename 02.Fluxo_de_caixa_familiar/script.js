/*
        Crie um objeto que pussuira 2 propriedades,ambas do tipo array:
        
            *receitas []
            *despesas []
        Agora, crie uma função que ira calcular  o total de receitas e despesas e ira mostrar a mensagem se a familia esta com saldo positivo ou negativos,seguido do valor do saldo 
*/

let saldoFamiliar = {
    receita: [1700, 5600, 2200],
    despesa: [800, 550, 1200, 510, 110, 23, 100, 64],
};
let teste = [0, 1, 2];
let numero = 2;
let cadeiaDeCaracteres = "teste";

isLiteralObject = function (a) {
    return (!!a) && (a.constructor === Object);
};

function calculoSaldofamiliar(financaFamiliar) {
    let saldoReceita = 0;
    let saldoDespesa = 0;
    let saldoTotal;

    //verificando se é um objeto
    if (!(isLiteralObject(financaFamiliar))) {
        throw new Error("Formato de informação incorreto");
    } else {
        //usando "for..in" para acessar as propriedades do objeto
        for (let propriedades in financaFamiliar) {

            //Se propriedade for igual a receita realizo a soma das receitas
            if (propriedades == "receita") {

                //usando o "for..of" para acesar o valores do array
                for (let receita of financaFamiliar[propriedades]) {
                    if (receita < 0) {
                        throw "valor de receita não pode ser negativo";
                    }
                    saldoReceita += receita;

                }
            } else if( propriedades == "despesa"){

                //usando o "for..of" para acesar o valores do array
                for (let despesa of financaFamiliar[propriedades]) {
                    if (despesa < 0) {
                        throw "valor de despesa não pode ser negativo";
                    }
                    saldoDespesa += despesa;
                }
            }
        }
        saldoTotal = saldoReceita - saldoDespesa;
        if (saldoTotal > 0) {
            return console.log(`Parabens o saldo familiar esta positivo,valor do saldo final R$:${saldoTotal.toFixed(2).replace(".",",")}`);
        } else {
            return console.log(`Infelizmente o saldo familiar esta negativo,valor do saldo final R$:${saldoTotal.toFixed(2).replace(".",",")}`);
        }
    }

}

try {
    calculoSaldofamiliar(saldoFamiliar);
} catch (rrore) {
    console.log(error.message);
};
try {
    calculoSaldofamiliar(teste);
} catch (error) {
    console.log(error.message);
};
try {
    calculoSaldofamiliar(numero);
} catch (error) {
    console.log(error.message);
};
try {
    calculoSaldofamiliar(cadeiaDeCaracteres);
} catch (error) {
    console.log(error.message);
};