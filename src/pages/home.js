import style from '../pages/home.module.css'
import { Link } from 'react-router-dom';



function Home() {

    return (
        <div className={style.home_containerPrincipal}>

            <div className={style.home_about}>
                <p> Sobre o HomeControl</p>
            </div>
            <div className={style.home_boxes}>

                <div className={style.home_box}>
                    <h3>  Gastos Fixos</h3>
                    <p>R$: 3 000,00</p>
                    <button> <Link to="/gastosfixos">Confirir</Link></button>
                </div>
                <div className={style.home_box}>
                    <h3>  Lista Mercado</h3>
                    <p>R$: 3 000,00</p>
                    <button> <Link to="/listamercado">Confirir</Link></button>
                </div>
                <div className={style.home_box}>
                    <h3>  Economias</h3>
                    <p>R$: 3 000,00</p>
                    <button> <Link to="/economias">Confirir</Link></button>

                </div>
               
            </div>
        

        </div>
    )
}
export default Home;