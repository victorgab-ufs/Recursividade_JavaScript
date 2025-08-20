//Q6. Resto da divisão entre dois números inteiros positivos fornecidos, n e m. Naturalmente, você não deve utilizar operadores de divisão da linguagem.

// divisão de n por m

// caso base -> resto (n, m) para todo n < m, resto é n

// passo indutivo -> resto(n,m) = resto(n-m, m), para todo n >= m

const resto = (n, m) => {

    if (n < m) return n
    else return resto(n-m, m)

}

const resultado = resto (10, 5)

console.log(resultado)