function aumentoDeSalario(salario, tipo){
    switch(tipo){
        case 10 :
            return `O salario tem o plano ${tipo} e vai aumentar de ${salario} para ${(salario*1.1).toFixed(2)}`
        break;

        case 15 :
            return `O salario tem o plano ${tipo} e vai aumentar de ${salario} para ${(salario*1.15).toFixed(2)}`
        break;

        case 20 :
            return `O salario tem o plano ${tipo} e vai aumentar de ${salario} para ${(salario*1.2).toFixed(2)}`
        break;

        default:
            return 'Tipo de plano inválido!'
        break;
    }
}

console.log(aumentoDeSalario(100,10))
console.log(aumentoDeSalario(100,15))
console.log(aumentoDeSalario(100,20))
console.log(aumentoDeSalario(100,11))
