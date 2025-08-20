// Q11. Dado um número, devolva a soma total desse número multiplicado por cada número entre 1 e 10. Nome da função deve ser multiSoma.

const multiSoma = (numero, multiplicador=10) => (multiplicador*numero) + multiSomaAux(numero, multiplicador)

const multiSomaAux = (numero, multiplicador) => {

    if (multiplicador == 0) return 0
    else {

        return multiSoma(numero, multiplicador - 1)
    }
}

const resultado = multiSoma(2)

console.log(resultado)