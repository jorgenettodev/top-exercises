/*
//  Programa: Faça um programa que peça 2 numeros ao usuario, os some e mostre
// na tela.


//  Inputs: Pedir pro usuário escrever dois numeros.
//   Escreva('Digite o primeiro numero')
//   Grave este numero na variavel1
     EscrevaL("Digite o primeiro número")
     Leia(variavel1)
//
//  Escreva('Digite o segundo numero')
//   Grave este numero na variavel2
     EscrevaL("Digite o segundo número")
     Leia(variavel2)
//   Grave este numero na variavel1
//

   
//

        */ 
// DECLARAR VARIÁVEIS
let v1;
let v2;
let vr;

//  Inputs: Pedir pro usuário escrever dois numeros.
//   Escreva('Digite o primeiro numero')
//   Grave este numero na variavel1
//EscrevaL("Digite o primeiro número")
//Leia(variavel1)
v1 = parseInt(prompt("Digite o primeiro número: "))


//  Escreva('Digite o segundo numero')
//   Grave este numero na variavel2
//
//Leia(variavel2)
v2 = parseInt(prompt("Digite o segundo número: "));






// Processamento: transformar os inputs no output.
// resultado = " a soma de variavei1 + variavel2 é:" varResultado
// varResultado <- variavel1 + variavel2

vr = v1 + v2;

// Output ideal =  A soma de 5 mais 7 é igual a 12
// EscrevaL("A soma de ", variavel1, " mais ", variavel2, " é igual a ", varResultado)
console.log("A soma de " + v1 + " mais " + v2 + " é igual a ", vr);