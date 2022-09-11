import { useState} from 'react'
import Form from '../components/form';
import style from '../pages/gastosFixos.module.css'
import BoxesGastos from '../components/boxesGastos';


function GastosFixos() {

  const [gastos, setGastos] = useState([])

  const addGastos = (gasto) => {
    setGastos([...gastos, gasto])
    console.log(gastos)
  }



  return (
    <div className={style.container_gastosFixos}>
      <h1>Gastos Fixos</h1>

      <Form addGastos={addGastos} />

      <BoxesGastos gastos={gastos}/>


    </div>
  )
}

export default GastosFixos;