function partindo(palavras, a){
    return palavras.split(a)
}

function dividindo(palavra,a){
    return palavra.slice(a)
}

function numeros(palavra){
    let recorde=0,pior=Infinity, indice=2,PIndice = 0
    palavra = partindo(palavra, ' ')
    // console.log(palavra)
    anterior = palavra[0]
    // console.log(anterior)
    palavra = dividindo(palavra, 1)
    // console.log(palavra)
    palavra = palavra.forEach(numero => {
        numero = parseInt(numero)
        if(anterior < numero){
            recorde++
            // console.log(numero,anterior)
        }
        if(pior > numero){
            pior = numero
            PIndice = indice
            // console.log(numero)
            // console.log(numero)
        }
        anterior = numero
        indice++
    });
    let resultado = [recorde, PIndice]
    console.log(resultado)
}

numeros("10 20 20 8 25 3 0 30 1")