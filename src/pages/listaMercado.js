import InputMercado from '../components/inputMercado';
import style from '../pages/ListaMercado.module.css'
import './ListaMercado.module.css'


function ListaMercado() {
    return (
        <div className={style.ListaMercado}>
            <h1>Lista Mercado</h1>
            <InputMercado/>
        </div>
    )
}
export default ListaMercado;