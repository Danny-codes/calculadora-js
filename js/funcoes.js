function calcular(tipo, valor){
    if(document.getElementById('resultado').value === ''){
        if(tipo === 'valor'){
            document.getElementById('resultado').value += valor
        }else{
            document.getElementById('resultado').value = ''
        }
               
    } else{
        if(tipo === 'valor'){
            document.getElementById('resultado').value += valor
        }else{
            if(valor === 'c'){
                document.getElementById('resultado').value = ''
            }

            if(valor === '+' || valor === '-' || valor === '*' || valor === '/'){
               if(document.getElementById('resultado').value.endsWith('+') || document.getElementById('resultado').value.endsWith('-') ||
                  document.getElementById('resultado').value.endsWith('*') || document.getElementById('resultado').value.endsWith('/') ||
                  document.getElementById('resultado').value.endsWith('.')){
                   document.getElementById('resultado').value = document.getElementById('resultado').value
               }else{
                document.getElementById('resultado').value += valor
               }
            }

            if(valor === '='){
            var resultado = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = resultado
            }
        }
    }
}