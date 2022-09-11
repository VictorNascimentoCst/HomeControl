import FormMercado from '../components/formMercado';
import style from '../pages/ListaMercado.module.css'
import './ListaMercado.module.css'
import Tabela from '../components/tabela';
import Total from '../components/total';


function ListaMercado() {
    return (
        <div className={style.ListaMercado}>
            <h1>Lista Mercado</h1>
            <FormMercado />
            <Tabela texto1={'Status'} texto2={'Produto'} texto3={'Quantidadee'} />
            <Total />
        </div>
    )
}
export default ListaMercado;