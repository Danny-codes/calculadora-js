function calcular(tipo, valor){
    if(tipo === 'valor'){
        document.getElementById('resultado').value += valor
    }else{
        if(valor === 'c'){
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/'){
            document.getElementById('resultado').value += valor
        }

        if(valor === '='){
         var resultado = eval(document.getElementById('resultado').value)
         document.getElementById('resultado').value = resultado
        }

        
    }
}