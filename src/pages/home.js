import style from '../pages/home.module.css'
import { Link } from 'react-router-dom';
import Total from '../components/total';
import Button from '../components/button'
import About from '../components/about';



function Home() {

    return (
        <div className={style.home_containerPrincipal}>

            <About/>
            <div className={style.home_boxes}>

                <div className={style.home_box}>
                    <h3>  Gastos Fixos</h3>
                    <Total/>
                    <Link to="/gastosFixos"><Button text={'Conferir'}></Button></Link>
                </div>
                <div className={style.home_box}>
                    <h3>  Lista Mercado</h3>
                    <Total/>
                    <Link to="/listaMercado"><Button text={'Conferir'}></Button></Link>
                </div>
                <div className={style.home_box}>
                    <h3>  Economias</h3>
                    <Total/>
                    <Link to="/economias"><Button text={'Conferir'}></Button></Link>
                </div>
               
            </div>
        

        </div>
    )
}
export default Home;