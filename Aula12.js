function calcular_IMC(peso,altura) {
    let IMC 
    IMC = peso / (altura * altura);
    return IMC;
}

function verificar_situacao(IMC) {
    let codigo;
    if (IMC < 18.5) {
        codigo = 1;
    } else if (IMC <= 24.9) {
        codigo = 2;
    } else if (IMC <= 29.9) {
        codigo = 3;
    } else {
        codigo = 4;
    }
    return codigo;
}

function exibir_descricao(codigo) {
    if (codigo == 1) {
        console.log("Você está abaixo do peso ideal!");
    } else if (codigo == 2) {
        console.log("Parabéns! Você está em seu peso normal");
    } else if (codigo == 3) {
        console.log("Você está acima de seu peso (sobrepeso)!");
    } else {
        console.log("Obesidade!");
    }
}

const prompt = require("prompt-sync")();

for (let i = 1; i <= 5; i++) {
    console.log("Pessoa " + i);
    var nome = prompt("Digite seu nome: ");
    var peso = parseFloat(prompt("Digite seu peso (Kg): "));
    var altura = parseFloat(prompt("Digite sua altura (Metros): "));

    let IMC = calcular_IMC(peso, altura);
    let codigo = verificar_situacao(IMC);
    exibir_descricao(codigo);
}