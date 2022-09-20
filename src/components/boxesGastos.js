
import './boxesGastos.css'
import Box from './box';
import React from 'react';
import Total from './total';



function BoxesGastos({gastos, valor}) {
    
    return (
        <div className='Maincontainer_boxes'>

            <div id='teste' className='container_boxes'>
       
          
            {Array.from(gastos).map((e, index)=> {
                
               return <Box gasto={e.name} custo={e.cost} key={index} />
            })}
          
        
            </div>
           
            <Total valor={valor} />

        </div>
    )
}


export default BoxesGastos;