import { BiEditAlt } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import { IconContext } from "react-icons";
import './box.css'

function Box({gasto, custo}) {


    return (
  
        <div className='box'>
                    <h2>{gasto}</h2>
                    <p>R$: {custo}</p>
                    <div className='icons'>
                        <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
                            <>
                                <BiEditAlt className='icon'/>
                                <AiOutlineDelete  className='icon'/>
                            </>
                        </IconContext.Provider>
                    </div>
        </div>
    )
}

export default Box;