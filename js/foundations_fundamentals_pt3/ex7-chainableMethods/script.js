// step 1: Definir uma função construtora. Isto serve para criar novas instâncias de um objeto.
function Calculadora() {
    this.resultado = 0;
}

// step 2: Adicione métodos ao protótipo do objeto. 

// Cada método adicionado faz um cálculo usando a propriedade "resultado" que tá dentro do objeto Calculadora.
// + Após fazer o cálculo, ele retorna o próprio objeto, ou seja, quando chamar um novo método, ele vai continuar usando o "resultado".
Calculadora.prototype.somar = function(num) {
    this.resultado += num;
    return this;
}

Calculadora.prototype.subtrair = function(num) {
    this.resultado -= num;
    return this;
}

Calculadora.prototype.multiplicar = function(num) {
    this.resultado *= num;
    return this;
}

Calculadora.prototype.dividir = function(num) {
    this.resultado /= num;
    return this;
}

let calc = new Calculadora();
let result = calc.somar(5)
                    .multiplicar(3)
                    .subtrair(2)
                    .dividir(4)
                    .resultado;
console.log(result);