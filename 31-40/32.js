function calculandoMedia(array){
    let media = 0
    array.forEach(e =>{
        media += e
    })
    media = media/array.length
    return `A media do array é de ${(media).toFixed(2)}`
}

console.log(calculandoMedia([1,1,2,1,1,]))

