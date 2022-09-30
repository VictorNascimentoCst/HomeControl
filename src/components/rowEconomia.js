
import './rowEconomia.css'


function RowEconomia({mes, saldo, saldoTotal, economias}) {



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