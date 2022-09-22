import './rowEconomia.css'

function RowEconomia({mes, saldo, saldoTotal=0}) {

    return (
        <div>
                <div className="row_economia">
                    <p>{mes}</p>
                    <p>{saldo}</p>
                    <p>{saldoTotal}</p>
                </div>
        </div>

    )
}

export default RowEconomia;