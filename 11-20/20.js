function minimoTroco(valor=0){
    let notasUsadas = [0,0,0,0,0]
    let Tnotas = [100,50,10,5,1]
    // console.log(notasUsadas)
    if(valor / 100 != 0){
        notasUsadas[0] = Math.floor(valor / 100)
        valor = valor % 100
    } 
    else{
        notasUsadas[0] = 0
    }

    if(valor / 50 != 0){
        notasUsadas[1] =  Math.floor(valor / 50)
        valor = valor % 50
    } 
    else{
        notasUsadas[1] = 0
    }

    if(valor / 10 != 0){
        notasUsadas[2] =  Math.floor(valor / 10)
        valor = valor % 10
    } 
    else{
        notasUsadas[2] = 0
    }

    if(valor / 5 != 0){
        notasUsadas[3] =  Math.floor(valor / 5)
        valor = valor % 5
    } 
    else{
        notasUsadas[3] = 0
    }

    if(valor / 1 != 0){
        notasUsadas[4] =  Math.floor(valor / 1)
        valor = valor % 1
    } 
    else{
        notasUsadas[4] = 0
    }
    
    notasUsadas.forEach((nota,indice) => {
        if(nota != 0 ){
            console.log(`foram usadas ${nota} de ${Tnotas[indice]}`)
        }
    });

}

// minimoTroco(100)
// minimoTroco(150)
// minimoTroco(180)
// minimoTroco(18)
minimoTroco(167)