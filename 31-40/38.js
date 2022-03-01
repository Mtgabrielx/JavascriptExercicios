function passandoOSValores(num01,num02){
    if(num01 > num02){
        return impares(num02,num01)
    }
    return impares(num01,num02)
}

function impares(inicio,fim){
    let numeros = [], indice = 0
    for(let i = inicio; i<=fim; i++){
        if(i%2 !== 0){
            numeros[indice] = i
            indice++ 
        }
    }
    return `Os valores impares entre ${inicio} e ${fim} são: ${numeros}`
}

console.log(passandoOSValores(100,50))
