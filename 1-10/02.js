function triangulos(a,b,c){
    if(a === b && b === c){
        return 'Equilátero'
    }
    else if(a === b || b === c || c === a){
        return 'isóceles'
    }
    return 'escaleno'
}

console.log(triangulos(1,2,3)) 
console.log(triangulos(1,2,2)) 
console.log(triangulos(2,1,2)) 
console.log(triangulos(2,2,1))
console.log(triangulos(2,2,2))