import { BiEditAlt } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import { IconContext } from "react-icons";
import './box.css'

function Box({nome, custo}) {

    
    return (
  
        <div className='box'>
                    <h2>{nome}</h2>
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