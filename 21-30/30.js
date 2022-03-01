function menorMaiorNoVetor(array){
    let max=0, min=Infinity
    array.forEach(num => {
        if( num > max){
            max = num
        }    
        if( num < min){
            min = num
        }
    });

    return `O mínimo valor dentro do array é ${min} e o maximo é ${max}`
}

console.log(menorMaiorNoVetor([10,20,30,40,0,80,-1]))