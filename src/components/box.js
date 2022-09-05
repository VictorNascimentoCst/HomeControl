import { BiEditAlt } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import { IconContext } from "react-icons";
import './box.css'

function Box({nome, custo}) {

    
    return (
  
        <div className='box'>
                    <h2>{nome}</h2>
                    <p>{custo}</p>
                    <div className='icons'>
                        <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
                            <>
                                <BiEditAlt />
                                <AiOutlineDelete />
                            </>
                        </IconContext.Provider>
                    </div>
        </div>
    )
}

export default Box;