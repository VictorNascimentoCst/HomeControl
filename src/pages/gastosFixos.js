import { useState} from 'react';
import Form from '../components/gastosFixosComponents/form';
import style from '../pages/gastosFixos.module.css'


import BoxesGastos from '../components/gastosFixosComponents/boxesGastos';


function GastosFixos() {

  const [gastos, setGastos] = useState([])
  const [valor, setValor] = useState([0])

  const addGastos = (gasto) => {
    
    setGastos([...gastos, gasto ])
    setValor([...valor, gasto.cost])

  }


  return (
    <div className={style.container_gastosFixos}>
      <h1>Gastos Fixos</h1>
      <Form addGastos={addGastos}  />

      <BoxesGastos gastos={gastos} valor={valor}  />



    </div>
  )
}

export default GastosFixos;