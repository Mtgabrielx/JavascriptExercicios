function anuidade(valor, mes){
    return (valor*Math.pow((1+0.05),mes-1))
}

console.log(anuidade(1000,1))
console.log(anuidade(1000,2))