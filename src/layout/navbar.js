import homeControl_Icon from '../img/homeControl_Icon.png';
import { Link } from 'react-router-dom';
import style from '../layout/navbar.module.css';

function Navbar() {
    return (
       <div className={style.navbar_container}>
            <div className={style.navbar_img_container}>
                <Link to='/'><img src={homeControl_Icon}/></Link>
                
            </div>
           
            
            <div>
                <a><Link to='/gastosfixos'>Gastos Fixos</Link></a>
                <a><Link to='/listamercado'>Lista Mercado</Link></a>
                <a><Link to='/economias'> Economias</Link></a>
            </div>            
       </div>
    )
}

export default Navbar;