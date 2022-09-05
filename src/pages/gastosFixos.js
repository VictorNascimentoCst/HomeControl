import Input from '../components/input';
import style from '../pages/gastosFixos.module.css'
import BoxesGastos from '../components/boxesGastos';


function GastosFixos() {
    return(
      <div className={style.container_gastosFixos}>
        <h1>Gastos Fixos</h1>
       
        <Input />
        <BoxesGastos/>
        
      </div>
    )
}

export default GastosFixos;