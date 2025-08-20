// Q12. Escreva uma função recursiva que inverte uma string. Nome deve ser inverte.

const inverte = (string) => {

    if (string.length < 2) return string
    else {

        const primeiro = string.slice(0, 1) 
        const ultimo = string.slice(-1)
        const meio = string.slice(1,-1)
        return `${ultimo}${inverte(meio)}${primeiro}`

    }
}

const resultado = inverte('nexo')

console.log(resultado)