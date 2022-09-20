import './list.css'

function List() {
    return(
        <div className='containerList'>
            <div className='status'>
                <input type={'checkbox'}/>
            </div>
            <div className='tarefas'>
                <p>Limpar a casa</p>
            </div>
        </div>
    )
}

export default List;