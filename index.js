const prompt = require("prompt-sync")();

var nub

{console.log("Calculadora basica\n")
console.log("1-adição")
console.log("2-Subtração")
console.log("3-Multiplicação")
console.log("4-Divisão")
nub =parseFloat(prompt())


if (nub == 1){
    console.log("Digite um numero para somar\n")
    numero = parseFloat(prompt())
    console.log("Diget mais um numero para somar\n")
    numero1 = parseFloat(prompt())
    console.log("Resultado:",(numero+numero1));

};

 if (nub == 2){
    console.log("Digite um numero para Subitrair\n")
    numero = parseFloat(prompt())
    console.log("Digete o subitrainte\n")
    numero1 = parseFloat(prompt())
    console.log("Resultado:",(numero-numero1));

};
  if (nub == 3){
    console.log("Digite um numero para Multiplicar\n")
    numero = parseFloat(prompt())
    console.log("Multiplicado por ?:\n")
    numero1 = parseFloat(prompt())
    console.log("Resultado:",(numero*numero1));

};

  if (nub == 4){
    console.log("Digite um numero para Dividir\n")
    numero = parseFloat(prompt())
    console.log("Dividido por ?\n")
    numero1 = parseFloat(prompt())
    console.log("Resultado:",(numero/numero1).toFixed(2));

 }
} 