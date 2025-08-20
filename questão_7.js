// Q7. Quociente da divisão entre dois números inteiros positivos fornecidos, n e m. 

// n / m

// caso base -> quo (n, m) = (n < m) => 0

// passo indutivo -> quo(n, m) = 

const quociente = (n, m) => {

    if  (n < m) return 0
    else return 1 + quociente(n-m, m)
}

const resultado = quociente(7, 2)

console.log(resultado)

