//Q2. N-ésimo termo da sequência {0,1,1,2,3,5,8,13,21,34,55,...}

// caso base 1 -> fib(0) = 0
// caso base 2 -> fib(1) = 1

// passo indutivo -> fib(n) = fib(n-1)+fib(n-2)

const fib = (numero) => {

    if (numero == 0) return 0
    else if (numero == 1) return 1
    else return fib(numero-1)+fib(numero-2)

} 

resultado = fib(10)

console.log(resultado)

// Resposta: 55