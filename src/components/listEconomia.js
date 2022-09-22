import RowEconomia from '../components/rowEconomia'
import './listEconomia.css'
import { useEffect } from 'react'

function ListEconomia({ texto1, texto2, texto3, economias, saldoTotal }) {


    return (

        <div className='container_listEconomia'>
            <div className='titles_economia'>
                <h3>{texto1}</h3>
                <h3>{texto2}</h3>
                <h3>{texto3}</h3>
            </div>


            {Array.from(economias).map((e, index) => {
                return <RowEconomia key={index} saldoTotal={e.saldoTot} 


                    mes={e.mes} saldo={e.saldo} />
            })}
        </div>



    )

}
export default ListEconomia;