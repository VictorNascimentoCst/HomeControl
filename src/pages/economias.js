import InputEconomia from '../components/inputEconomia';
import style from '../pages/Economias.module.css'

function Economias() {
    return (
    <div className={style.economias_containerPrincipal}>
    <div className={style.economias_container}>
        <h1>Economias</h1>
        <InputEconomia/>
    </div>
    </div> 
    )
}
export default Economias;