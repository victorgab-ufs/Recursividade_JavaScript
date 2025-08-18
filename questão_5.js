//Q5. Potência natural do número 2: 2^n. Naturalmente, você não deve utilizar o operador de expoente da linguagem.

// caso base -> pot(0) = 1

// paso indutivo -> pot(n) = 2*pot(n-1)

const pot = (numero) => {

    if (numero == 0) return 1
    else return 2 * pot(numero-1)

}

const resultado = pot(10)

console.log(resultado)

// Resultado = 1024