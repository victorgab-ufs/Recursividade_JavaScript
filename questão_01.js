// Q1. N-ésimo termo da sequência {3,6,12,24,48,...}

// caso base -> termo(1) = 3

// passo indutivo -> termo(n) = termo(n-1)*2

const termo = (numero) => {

    if (numero == 1) return 3
    else return termo(numero-1)*2

}

const resultado = termo(5) 

console.log(resultado)