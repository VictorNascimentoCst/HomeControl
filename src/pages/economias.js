import FormEconomia from '../components/formEconomia';
import ListEconomia from '../components/listEconomia';
import style from '../pages/Economias.module.css'
import { useState} from 'react'

//setEconomias({... economia, [economia.saldoTot]: Number(economia.saldo)})

function Economias() {

    const [economias, setEconomias] = useState([])


    const addEconomias = (economia) => {
        setEconomias([...economias, economia])
        console.log(economias)
    }
    return (
    <div className={style.economias_containerPrincipal}>
    <div className={style.economias_container}>
        <h1>Economias</h1>
        <FormEconomia addEconomias={addEconomias}/>
        <ListEconomia economias={economias} texto1={'MÊS'} texto2={'SALDO'} texto3={'SALDO TOTAL'}/>
    </div>
    </div> 
    )
}
export default Economias;