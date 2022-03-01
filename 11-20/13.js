function qualDiaEh(data){
    dia = data%7 
    switch (dia) {
        case 1:
            return `Hoje dia ${data}, um Domingo`
        break;

        case 2:
            return `Hoje dia ${data}, uma segunda`
        break;

        case 3:
            return `Hoje dia ${data}, uma terça`
        break;

        case 4:
            return `Hoje dia ${data}, uma quarta`
        break;
        
        case 5:
            return `Hoje dia ${data}, uma quinta`
        break;

        case 6:
            return `Hoje dia ${data}, uma sexta`
        break;

        default:
            return `Hoje dia ${data}, um sábado`
        break;
    }
}

console.log(qualDiaEh(1))
console.log(qualDiaEh(2))
console.log(qualDiaEh(3))
console.log(qualDiaEh(4))
console.log(qualDiaEh(5))
console.log(qualDiaEh(6))
console.log(qualDiaEh(7))