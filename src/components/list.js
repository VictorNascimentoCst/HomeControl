import './list.css'
import { AiOutlineDelete } from 'react-icons/ai'

function List({task}) {
    return (  
            <div className='container_row'>
                <div className='status'>
                    <input type={'checkbox'} />
                </div>
                <div className='tarefas'>
                    <p>{task}</p>
                    <AiOutlineDelete  className='icon'/>
                </div>
            </div>

    )
}

export default List;