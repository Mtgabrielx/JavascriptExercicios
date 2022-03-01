function calculadora(num01, operacao, num02){
    switch(operacao){
        case '+':
            return `O valor de ${num01} ${operacao} ${num02} é igual a ${num01+num02}`
        break;
        
        case '-':
            return `O valor de ${num01} ${operacao} ${num02} é igual a ${num01-num02}`
        break;
        
        case '*':
            return `O valor de ${num01} ${operacao} ${num02} é igual a ${num01*num02}`
        break;
        
        case '/':
            if(num02 == 0 ){
                return 'operção invalida'
            }
            return `O valor de ${num01} ${operacao} ${num02} é igual a ${num01/num02}`
        break;
        
        default:
            return 'operção invalida'
        break;
    }
}

console.log(calculadora(1,'+',2))
console.log(calculadora(1,'-',2))
console.log(calculadora(1,'*',2))
console.log(calculadora(1,'/',2))
console.log(calculadora(1,'/',0))
console.log(calculadora(1,'s',0))