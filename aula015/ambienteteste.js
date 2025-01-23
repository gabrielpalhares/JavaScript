let num = [5,8,2,9,3]
/*num.push(1)
num.sort()*/
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`o primeirto valor do vetor é ${num[0]}`)


let pos = num.indexOf(2)

if(pos == -1){
    console.log ('valor não encontrado')
}else{
    console.log(`o valor 8 esta na posição ${pos}`)
}


