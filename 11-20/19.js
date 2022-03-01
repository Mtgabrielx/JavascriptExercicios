function cardapio(codigo,quantidade,valor){
    if( valor < 0 || quantidade < 0){
        return 'Valores invalidos'
    }
    
    switch(codigo){
        case 100:
            return(`Foram pedidos ${quantidade} cachorros quentes a um preço de ${valor}, sendo o total de ${(valor*quantidade).toFixed(2)}`)
        break;

        case 200:
            return(`Foram pedidos ${quantidade} Hambúger Simples a um preço de ${valor}, sendo o total de ${(valor*quantidade).toFixed(2)}`)
        break;

        case 300:
            return(`Foram pedidos ${quantidade} Cheeseburguer a um preço de ${valor}, sendo o total de ${(valor*quantidade).toFixed(2)}`)
        break;

        case 400:
            return(`Foram pedidos ${quantidade} Bauru a um preço de ${valor}, sendo o total de ${(valor*quantidade).toFixed(2)}`)
        break;

        case 500:
            return(`Foram pedidos ${quantidade} Refrigerante a um preço de ${valor}, sendo o total de ${(valor*quantidade).toFixed(2)}`)
        break;

        case 600:
            return(`Foram pedidos ${quantidade} Suco a um preço de ${valor}, sendo o total de ${(valor*quantidade).toFixed(2)}`)
        break;

        default:
            return 'Valores invalidos'
        break;
    }
}


console.log(cardapio(100,10,3.00))
console.log(cardapio(200,10,4.00))
console.log(cardapio(300,10,5.50))
console.log(cardapio(400,10,7.50))
console.log(cardapio(500,10,3.50))
console.log(cardapio(600,10,2.80))
console.log(cardapio(700,10,3.00))
console.log(cardapio(500,-10,3.00))
console.log(cardapio(600,10,-3.00))