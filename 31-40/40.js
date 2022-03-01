function notas(notas){
    notas.forEach((e,indice) =>{
        if(e < 5){
            console.log(`O valor da nota ${e} se encaixa no conceito D`)
        }
        else if(e < 7){
            console.log(`O valor da nota ${e} se encaixa no conceito C`)
        }
        else if(e < 9){
            console.log(`O valor da nota ${e} se encaixa no conceito B`)
        }
        else if(e<=10){
            console.log(`O valor da nota ${e} se encaixa no conceito A`)
        }
        else{
            console.log(`A nota ${e} é invalida!`)
        }
    })
    return
}

notas([10,11,9,5.9,4.9,2.4,7.8,8.8])
