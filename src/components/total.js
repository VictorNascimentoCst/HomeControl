

import './total.css'

function Total({valor=0}) {
    
    var numeros = []    
    let length = valor.length
  
    for (var i = 0; i < length; i++) {
        numeros.push(parseInt(valor[i])) // DEPOIS DESCOBRIR COMO ADICIONAR VALOR NUMERICO AO USESTATE!
    }
    var total = 0

    for (var i=0; i < length; i++) {
        total += numeros[i]     //  COM O AJUSTE DE CIMA, FAZER ESTE METODO USANDO O USESTATE COM O ARRAY DE NUMEROS
    }

    return (
        <>
        <h2 className='totalGasto'>TOTAL : {total}</h2>
        </>
    )
}

export default Total;