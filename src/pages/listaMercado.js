import FormMercado from '../components/listaMercadoComponents/formMercado';
import { useState } from 'react';
import style from '../pages/ListaMercado.module.css'
import './ListaMercado.module.css'
import ContainerList from '../components/listaMercadoComponents/containerList'


function ListaMercado() {
 
    const [ListaMercado, setListaMercado] = useState([])

    const addListaMercado = (lista) => {
        setListaMercado([...ListaMercado, lista])
    }

    return (
        <div className={style.ListaMercado}>
            <h1>Lista Mercado</h1>
            <FormMercado addListaMercado={addListaMercado}/>
            
            <ContainerList ListaMercado={ListaMercado} texto1={'STATUS'} texto2={'PRODUTO'} texto3={'QUANTIDADE'}/>
            
        </div>
    )
}
export default ListaMercado;