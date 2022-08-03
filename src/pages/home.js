import Navbar from "../layout/navbar";
import style from '../pages/home.module.css'

import Backhome from '../img/backhome.jpg'


function Home() {
    return (
    <>
    <div className={style.home_container}>
       <img className={style.img_backgound} src={Backhome} />
    </div>
    </> 
    )
}
export default Home;