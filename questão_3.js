//Q3. soma dos n primeiros números naturais

// caso base -> soma(0) = 0 

// passo indutivo -> soma(n) = n + soma(n-1)

const soma = (numero) => {

    if (numero == 0) return 0
    else return numero + soma(numero-1)

}

const resultado = soma(6)

console.log(resultado)