let palavra = "abigail"
let palavra2 = 'abigail '

function localizar(letra, string){
    for( let i=0; i<= string.length; i++){
        if(letra == string[i])
            return true
    }
    return false
}

function partir(maior,menor){
    for( i=0; i<maior.length; i++){
        if(!localizar(maior[i],menor)){
            return false
        }
    }
    return true
}

function determiando(string01, string02){
    if(string01.length > string02.length){
        return partir(string01.toLowerCase(), string02.toLowerCase())
    }
    return partir(string02.toLowerCase(),string01.toLowerCase())
}

console.log(determiando('gabrieL','gabriel'))