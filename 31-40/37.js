function progressaoAritmetica(n,a1,r){
    return `O valor de uma PA para os dados n = ${n}, a1 = ${a1} e r = ${r} é igual a ${(a1+(n-1)*r)}`
}

function progressaoGeometrica(n,a1,r){
    return `O valor de um PG para os dados n = ${n}, a1 = ${a1} e r = ${r} é igual a ${(a1* Math.pow(r, n-1)).toFixed(2)}`
}

console.log(progressaoAritmetica(3,1,2))
console.log(progressaoGeometrica(3,1,3))