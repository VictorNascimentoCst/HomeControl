import { useState } from 'react';
import './row.css'

function Row({ produto, quantidade}) {

    const [status, setStatus] = useState(false)
    const [text, setText] = useState('Não comprado !')

    const comprado = (e) => {
        e.preventDefault();
        if(status == false){
            e.target.setAttribute('class', 'status')
            setText('Comprado!')
            setStatus(true)
        }
        else {
            e.target.removeAttribute('class')
            setText(' Não comprado!')
            setStatus(false)
        }

    }
  

    return (
        <div>
                <div className="row">
                    <p className='status_p' onClick={comprado}>{text}</p>
                    <p>{produto}</p>
                    <p>{quantidade}</p>
                </div>
        </div>

    )
}

export default Row;