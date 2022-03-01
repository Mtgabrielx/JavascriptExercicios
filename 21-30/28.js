function vetorNumerico(numeros){
    numeros.forEach(num => {
        if(num%2 == 0){
            console.log(`O número ${num} é par`)
        }
        else{
            console.log(`O número ${num} é impar`)
        }
    });
}

vetorNumerico([1,2,3,4,5,6,9,8,7,5,0])