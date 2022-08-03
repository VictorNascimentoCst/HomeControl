import homeControl_Icon from '../img/homeControl_Icon.png'
import { Link } from 'react-router-dom';
import style from '../layout/navbar.module.css'

function Navbar() {
    return (
       <div className={style.navbar_container}>
            <div className={style.navbar_img_container}>
                <img src={homeControl_Icon}/>
            </div>
           
            
            <div>
                <a>Gastos Fixos</a>
                <a>Lista Mercado</a>
                <a>Economias</a>
            </div>            
       </div>
    )
}

export default Navbar;