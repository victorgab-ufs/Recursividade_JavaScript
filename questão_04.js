//Q4. Fatorial de um número qualquer

// caso base -> fat(0) = 1

// passo indutivo -> fat(n) = n*fat(n-1)

const fat = (numero) => {

    if (numero == 0) return 1
    else return numero * fat(numero-1)

}

const resultado = fat(5)

console.log(resultado)

// Resultado = 120