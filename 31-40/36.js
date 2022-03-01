function UmPeloOutro(array, num){
    let multi = []
    array.forEach((e,indice) =>{
        multi[indice] = (e*num).toFixed(2)
    });
    return `O valor do array(${array}), multiplicado por ${num} é igual a ${multi}`
}

function UmMaiorCinco(array, num){
    let multi = []
    if(num > 5){
        array.forEach((e,indice) => {
            multi[indice] = (e*num).toFixed(2)
        });
    }
    else{
        return `O valor informado, ${num}, é menor que o 5 `
    }
    return `O valor do array(${array}), multiplicado por ${num} é igual a ${multi}`
}


console.log(UmPeloOutro([1,2.2,13,5,] , 2))
console.log(UmMaiorCinco([1,2.2,13,5,] , 10))
