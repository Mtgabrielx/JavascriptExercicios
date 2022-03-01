let vetorPilha = [1,2,3,4,5]
let vetorAdicionar = [6,7,8,9,10]

function adicionar(vetor01, vetor02){
    vetor02.forEach(e => {
        vetor01.push(e)
    });
    return vetor01
}

console.log(adicionar(vetorPilha,vetorAdicionar))