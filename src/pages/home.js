import style from '../pages/home.module.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className={style.home_containerPrincipal}>

            <div className={style.home_about}>
                <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            </div>
            <div className={style.home_boxes}>

                <div className={style.home_box}>
                    <a><Link to='/gastosfixos'>Gastos Fixos</Link></a>
                </div>
                <div  className={style.home_box}>
                    <a><Link to='/listamercado'>Lista Mercado</Link></a>
                </div>
                <div  className={style.home_box}>
                    <a><Link to='/economias'> Economias</Link></a>
                </div>
            </div>


        </div>
    )
}
export default Home;