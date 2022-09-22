import style from '../pages/home.module.css'
import About from '../components/about';
import ToDoList from '../components/to-do-list';
import List from '../components/list';
import { useState } from "react"



function Home() {

    const [list, setList] = useState([])

    const addList = (task) => {
        setList([...list, task])
    }

    return (
        <div className={style.home_containerPrincipal}>
            <About />
            <div className={style.home_boxes}>


                <ToDoList addList={addList} />

                <div className='containerList'>
                    
                        {list.map((e) => {
                            return <List task={e.toDoList} />
                        })}

                    

                </div>

            </div>


        </div>
    )
}
export default Home;