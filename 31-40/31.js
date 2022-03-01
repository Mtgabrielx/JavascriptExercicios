function contandoNegativos(array){
    let negativos = 0 
    array.forEach(e => {
        if(e < 0){
            negativos++
        }
    });
    console.log(`O número de negativos dentro do array é ${negativos}`)
}

contandoNegativos([1,23,4,5,-1,-45,-1,-7])