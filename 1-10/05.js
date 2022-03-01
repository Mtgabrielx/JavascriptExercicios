function arredondando(numero){
    numero =  numero.toFixed(2)
    return numero.toString().replace(".", ",")
}

console.log(arredondando(0.30000000000000004))
