function avaliacao(nota){
    if(nota < 38){
        return 'Aluno reprovado'
    }
    else{
        if(nota%5>=3){
            nota = ( Math.floor(nota/5) + 1) *5
            return `A nota do aluno é ${nota}`
        }
    }
}

console.log(avaliacao(38))
console.log(avaliacao(84))
console.log(avaliacao(29))
