function media(nota1,nota2,nota3){
    let notas = [nota1,nota2,nota3]
    let max = Math.max(nota1,nota2,nota3)
    let media = 0
    for( let i in notas){
        if(notas[i] != max){
            media += notas[i] * 3
        }   
        else{
            media += notas[i] * 4
        }
    }
    media = media/10
    if(media>=5){
        return 'Aprovado'
    }
    else{
        return 'Reprovado'
    }
}

console.log(media(5,6,1))