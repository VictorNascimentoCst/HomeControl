import FormEconomia from '../components/formEconomia';
import ListEconomia from '../components/listEconomia';
import style from '../pages/Economias.module.css'
import { useState} from 'react'



function Economias() {

    const [economias, setEconomias] = useState([])
    const [saldoTotal, setSaldoTotal] = useState([0])


    const addEconomias = (economia) => {
        setEconomias([...economias, economia])
        setSaldoTotal([... saldoTotal, Number(economia.saldo)])
        console.log(saldoTotal)
    }
    return (
    <div className={style.economias_containerPrincipal}>
    <div className={style.economias_container}>
        <h1>Economias</h1>
        <FormEconomia addEconomias={addEconomias}/>
        <ListEconomia saldoTotal={saldoTotal} economias={economias} texto1={'MÊS'} texto2={'SALDO'} texto3={'SALDO TOTAL'}/>
    </div>
    </div> 
    )
}
export default Economias;