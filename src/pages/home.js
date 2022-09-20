import style from '../pages/home.module.css'
import About from '../components/about';
import ToDoList from '../components/to-do-list';
import List from '../components/list';



function Home() {

    return (
        <div className={style.home_containerPrincipal}> 
            <About/>
            <div className={style.home_boxes}>

                <ToDoList/>
                <List/>
            </div>
        

        </div>
    )
}
export default Home;