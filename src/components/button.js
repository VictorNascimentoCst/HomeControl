import { Link } from 'react-router-dom';
import BoxesGastos from './boxesGastos';

import './button.css'

function Button({text, addTR}) {

    return (
        <button className='button'>{text}</button>
    )
}
export default Button;
