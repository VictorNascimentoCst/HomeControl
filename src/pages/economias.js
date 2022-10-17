import FormEconomia from '../components/economiaComponents/formEconomia';
import ListEconomia from '../components/economiaComponents/listEconomia';
import style from '../pages/Economias.module.css'
import { useState } from 'react'


function Economias() {

    const [saldoTotal, setSaldoTotal] = useState(0)
    const [economias, setEconomias] = useState([])
    
    console.log(economias)

    const addEconomias = (economia) => {
        setSaldoTotal(Number(saldoTotal + Number(economia.saldo)))
        setEconomias([...economias, {...economia, saldoTot: Number(saldoTotal) + Number(economia.saldo)}])
    }
 

    return (
        <div className={style.economias_containerPrincipal}>
            <div className={style.economias_container}>
                <h1>Economias</h1>
                <FormEconomia addEconomias={addEconomias} />
                <ListEconomia economias={economias} texto1={'MÊS'} texto2={'SALDO'} texto3={'SALDO TOTAL'} />
            </div>
        </div>
    )
}
export default Economias;