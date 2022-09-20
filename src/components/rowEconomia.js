import './rowEconomia.css'

function RowEconomia({ mes, saldo, saldoTotal=0}) {
// AJUSTAR O SALD OTOTAL
    var numeros = []    
    let length = saldoTotal.length
  
    for (var i = 0; i < length; i++) {
        numeros.push(parseInt(saldoTotal[i])) // DEPOIS DESCOBRIR COMO ADICIONAR VALOR NUMERICO AO USESTATE!
    }
    var total = 0

    for (var i=0; i < length; i++) {
        total += numeros[i]     //  COM O AJUSTE DE CIMA, FAZER ESTE METODO USANDO O USESTATE COM O ARRAY DE NUMEROS
    }


    return (
        <div>
                <div className="row_economia">
                    <p>{mes}</p>
                    <p>{saldo}</p>
                    <p>{total}</p>
                </div>
        </div>

    )
}

export default RowEconomia;