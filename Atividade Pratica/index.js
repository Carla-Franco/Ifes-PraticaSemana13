const prompt = require('prompt-sync')();
var array_maquiagens = [];

do {
    console.log("Sistema de Cadastro de Maquiagens");
    console.log("1 - Inserir Maquiagem");
    console.log("2 - Excluir Maquiagem");
    console.log("3 - Listar Maquiagem");
    console.log("0 - Sair");

    var opcao = prompt("Digite sua opção: ");

    if (opcao == 1) {
        console.log("\n\nInserindo Maquiagem...\n");
        let codigo = parseInt(prompt("Digite o código: "));
        let produto = prompt("Digite o produto (batom, sombra, demaquilante): ");
        let tipo = prompt("Digite o tipo (pele, olhos, boca): ");
        let uso = prompt("Digite o uso (festa, noite, dia-a-dia): ");
        let indicacao = prompt("Digite o indicacao (qual tipo de pele é indicado): ");

        const maquiagem = {
            codigo: codigo,
            produto: produto,
            tipo: tipo,
            uso: uso,
            indicacao: indicacao
        }
        inserir_maquiagem(maquiagem);

    } else if (opcao == 2) {
        console.log("\n\nExcluindo Maquiagem...\n");
        let codigo = prompt("Digite o código da Maquiagem: ");
        excluir_maquiagem(codigo);
    } else if (opcao == 3) {
        console.log("\n\nListando Maquiagens...\n");
        listar_maquiagem();
    } else {
        console.log("\n\nSaindo do programa...\n");
    }

    prompt("\nEnter para continuar...")
    console.clear();
}while(opcao != 0) 

function inserir_maquiagem(maquiagem) {
    array_maquiagens.push(maquiagem);
}

function excluir_maquiagem(codigo) {
    array_maquiagens = array_maquiagens.filter(maquiagem => maquiagem.codigo != codigo);
}

function listar_maquiagem() {
    array_maquiagens.forEach(maquiagem => {
        console.log(maquiagem.codigo + ": " + maquiagem.produto + " - " + maquiagem.tipo + " - " + maquiagem.uso + " - " + maquiagem.indicacao); 
    })
}


