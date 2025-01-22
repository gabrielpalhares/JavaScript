function tabuada(){
    var num = document.getElementById('txtn')
    var tabuada = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    }else{
        
        let n = Number(num.value)
        let c = 0
        tabuada.innerHTML=''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
            
        }
    }
    


}