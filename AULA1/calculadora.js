console.log("Calculadora Simples");



const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

switch (operacao) {
    case "soma" :
        console.log(`O resultado da soma é: ${num1 + num2}`);
        break;
    case "subtracao" :
        console.log(`O resultado da subtração é: ${num1 - num2}`);
        break;
    case "multiplicacao":
        console.log(`O resultado da multiplicação é: ${num1 * num2}`);
        break;
    case "divisao":
        if (num2 === 0) {
            console.log("Erro: Divisão por zero não é permitida.");
        } else {
            console.log(`O resultado da divisão é: ${num1 / num2}`);
        }     break;    

    default:
        break;
}

