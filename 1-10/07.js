function bhaskara(a,b,c){
    let delta = (Math.pow(b,2) - 4*(a)*(c))
    if(delta < 0){
        return 'Delta é negativo'
    }
    let result01 = ((-b+Math.sqrt(delta))/(-2*a)).toFixed(2)
    let result02 = ((-b+Math.sqrt(delta))/(-2*a)).toFixed(2)
    return [result01,result02]
}

console.log(bhaskara(1,1,4))
console.log(bhaskara(1,4,4))