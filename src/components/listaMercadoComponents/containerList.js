import './containerList.css'
import Row from './row'

function ContainerList({ texto1, texto2, texto3, ListaMercado }) {


    return (
  
            <div className='container_list'>
                <div className='titles'>
                    <h3>{texto1}</h3>
                    <h3>{texto2}</h3>
                    <h3>{texto3}</h3>
                </div>
                {Array.from(ListaMercado).map((e) => {
                    
                    return <Row produto={e.produto} quantidade={e.quantidade} />
                })}
            </div>



    )

}
export default ContainerList;