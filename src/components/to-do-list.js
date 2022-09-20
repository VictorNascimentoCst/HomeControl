import './to-do-list.css'
import Input from '../components/input'
import Button from '../components/button'
import { GrAdd } from 'react-icons/gr'


function ToDoList() {

    //criar a funcao do submit do form e enviar dados para  list crias as tarefas
    return (
        <form className='container_todolist'>
            <h2>Todo List</h2>
            <Input placeholder={'Coisas a fazer'}/>
            <Button text={<GrAdd/>}/>
        </form>
    )
}

export default ToDoList;