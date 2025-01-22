function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formularioSexo = document.getElementsByName('radsex')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(formularioSexo[0].checked){
            genero = 'homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebem.png')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src', 'imagens/jovemm.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultom.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosom.png')
            }
                
        }else if(formularioSexo[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/bebeff.png')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src', 'imagens/jovemf.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultof.png')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}