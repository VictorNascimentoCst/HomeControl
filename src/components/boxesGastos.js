import './boxesGastos.css'
import Box from './box';
import React from 'react';



function BoxesGastos() {
    const gastos = [{
        nome: ' NETFLIX',
        custo: 30.00
    }, {
        nome: ' NETFLIX',
        custo: 30.00
    }, {
        nome: ' NETFLIX',
        custo: 30.00
    }]
 

    return (
        <div className='Maincontainer_boxes'>

            <div id='teste' className='container_boxes'>
              
                {gastos.map((element) => {
                   return <Box nome={element.nome} custo={`R$: ${element.custo}`}/>
  
                })}
            
            </div>

            <h2 className='totalGasto'>TOTAL:</h2>

        </div>
    )
}


export default BoxesGastos;