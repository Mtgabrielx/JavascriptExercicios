// considerando que o ano 0 seja bissexto

function bissexto(ano){
    if(ano%400 == 0){
        return `O ano ${ano} é bissexto`
    }
    else if(ano%100 == 0){
        return `O ano ${ano} não é bissexto`
    }
    else if(ano%4 == 0){
        return `O ano ${ano} é bissexto`
    }
    return `O ano ${ano} não é bissexto`
}

console.log(bissexto(2021))
console.log(bissexto(2012))
console.log(bissexto(2016))