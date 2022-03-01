function venda(desejo){
    switch(desejo){
        case 'maçã':
            return 'Não vendemos essa fruta aqui'
        break;

        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        break;

        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        break;

        default:
            return 'Não vendemos isso!'
        break;
    }
}

console.log(venda("maçã"))
console.log(venda('kiwi'))
console.log(venda('melancia'))