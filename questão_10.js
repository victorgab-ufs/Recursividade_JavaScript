// Q10. Escreva uma função recursiva chamada tamanho que retorne o comprimento de uma string.

const tamanho = (string) => {

    if (string.length == 0) return 0
    else{

        const resto = string.slice(1)
        return 1 + tamanho(resto)

    }
}

const resultado = tamanho('ter')

console.log(resultado)