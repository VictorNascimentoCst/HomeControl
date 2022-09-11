import FormEconomia from '../components/formEconomia';
import style from '../pages/Economias.module.css'
import Tabela from '../components/tabela';

function Economias() {
    return (
    <div className={style.economias_containerPrincipal}>
    <div className={style.economias_container}>
        <h1>Economias</h1>
        <FormEconomia/>
        <Tabela texto1={'Mês'} texto2={'Saldo'} texto3={'Saldo Total'}/>
    </div>
    </div> 
    )
}
export default Economias;