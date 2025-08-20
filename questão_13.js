// Q13. Criar uma função que calcula a soma dos quadrados diferentes até um número n. Nome deve ser somaQuadrados.

const somaQuadrados = (n) => {

    if (n == 0) return 0
    else return (n*n)+somaQuadrados(n-1)
}

const resultado = somaQuadrados(4)

console.log(resultado)