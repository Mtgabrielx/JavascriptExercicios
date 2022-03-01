function crescimentoDeCrianca(altura01,crescimento01,altura02,crescimento02){
    let menor = 0
    if(altura01 > altura02){
        if(crescimento01 > crescimento02){
            return 'A menor não supera a maior'
        }
        let anos=0
        while(altura02 < altura01){
            altura01 += crescimento01
            altura02 += crescimento02
            anos++
        }
        return `A criança menor supera a maior em ${anos} ano(s)`
    }
    else{
        if(crescimento01 > crescimento02){
            let anos=0
            while(altura01 < altura02){
                altura01 += crescimento01
                altura02 += crescimento02
                anos++
            }
            return `A criança menor supera a maior em ${anos} ano(s)`
        }
        return 'A menor não supera a maior'
    }
}

console.log(crescimentoDeCrianca(160,5,170,6))
console.log(crescimentoDeCrianca(160,5,170,4))
console.log(crescimentoDeCrianca(172,5,170,6))
console.log(crescimentoDeCrianca(160,1,170,2))
