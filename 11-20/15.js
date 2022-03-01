function venda(carro){
    switch(carro){
        case 'hatch':
            return 'Compra efetuada com sucesso'
        break;

        case 'sedan':
        case 'motocicleta':
        case 'caminhonte':
            return 'Tem certeza que não deseja outro modelo'
        break;
        
        default:
            return 'Não vendemos esse modelo'
        break;
    }
}


console.log(venda('hatch'))
console.log(venda('sedan'))
console.log(venda('motocicleta'))
console.log(venda('caminhonte'))
console.log(venda('outros'))