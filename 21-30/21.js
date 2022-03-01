function planoDeSaude(idade){
    if(idade < 10){
        return `O valor a ser pago de uma pessoa com a idade de ${idade} é igual a ${100+80}`
    }   
    else if( idade <30){
        return `O valor a ser pago de uma pessoa com a idade de ${idade} é igual a ${100+50}`
    }   

    else if( idade <60){
        return `O valor a ser pago de uma pessoa com a idade de ${idade} é igual a ${100+95}`
    }

    return `O valor a ser pago de uma pessoa com a idade de ${idade} é igual a ${100+130}`

}


console.log(planoDeSaude(5))
console.log(planoDeSaude(15))
console.log(planoDeSaude(35))
console.log(planoDeSaude(65))
console.log(planoDeSaude(85))