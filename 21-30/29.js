function intervaloDezVinte(num){
    for( let i=0; i< num.length; i++){
        if(num[i] >= 10 && num[i] <= 20){
            console.log(`O número ${num[i]} está no intervalo de 10~20`)
        }
        else{
            console.log(`O número ${num[i]} não está no intervalo de 10~20`)
        }
    }
}

intervaloDezVinte([10,50,80,20,15,18,27])
