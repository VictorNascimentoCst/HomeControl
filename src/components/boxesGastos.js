import './boxesGastos.css'
import Box from './box';
import React from 'react';
import Total from './total';



function BoxesGastos({gastos}) {
 
    return (
        <div className='Maincontainer_boxes'>

            <div id='teste' className='container_boxes'>
           
            {Array.from(gastos).map((element) => {
                return <Box key={element.name} nome={element.name} custo={element.cost}/>
            })}
        
            
            </div>
            <Total/>

        </div>
    )
}


export default BoxesGastos;