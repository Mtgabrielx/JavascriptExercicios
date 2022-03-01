function jurosSimples(capitalInicial,TaxaDeJuros,Tempo){
    return `O valor do capital ${capitalInicial} aplicado a um juros de ${TaxaDeJuros} a um tempo de ${Tempo} é igual a :
    ${(1400+(capitalInicial*TaxaDeJuros*Tempo)).toFixed(2)}`    
}
function jurosCompostos(capitalInicial,TaxaDeJuros,Tempo){
    return `O valor do capital ${capitalInicial} aplicado a um juros de ${TaxaDeJuros} a um tempo de ${Tempo} é igual a :
    ${(capitalInicial*Math.pow((1+TaxaDeJuros),Tempo)).toFixed(2)}`    
}

console.log(jurosSimples(1400,0.07,2))
console.log(jurosCompostos(1400,0.07,2))
