import './to-do-list.css'
import Input from '../input'
import Button from '../button'
import { GrAdd } from 'react-icons/gr'
import { useState } from "react"


function ToDoList({addList}) {
    
    const [task, setTask] = useState([])
    
    

    const takeTask = (e) => {
        setTask({...task, [e.target.name] : e.target.value})
       
    }

    const addTask = (e) => {
        e.preventDefault()
        addList(task)
    }

    return (
        <form onSubmit={addTask} className='container_todolist'>
            <h2>Todo List</h2>
            <div className='input_todolist'>
                <Input funcao={takeTask} name={'toDoList'} placeholder={'Coisas a fazer...'} />
                <Button text={<GrAdd />} />
            </div>

        </form>
    )
}

export default ToDoList;