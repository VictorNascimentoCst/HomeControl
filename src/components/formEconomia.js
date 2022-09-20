import Button from './button'
import './formEconomia.css'
import Input from './input'
import InputSelect from './inputSelect'
import { useState} from 'react'

function FormEconomia({addEconomias}) {

    const [economia, setEconomia] = useState([])
    

    const pegarValue = (e) => {
        setEconomia({...economia, [e.target.name]: e.target.value})
    }

    const mandarEconomia = (e) => {
        e.preventDefault()
        addEconomias(economia)
    }

    return (

        <div className="main_container">

            <form onSubmit={mandarEconomia} className="container_inputs">
                <InputSelect name={'mes'} funcao={pegarValue}/>
                <Input type={'number'} placeholder={'Saldo do mês'} name={'saldo'} funcao={pegarValue} txtLabel={'Saldo: '}/>
                <Button text={'Adicionar'}/>
            </form>
        </div>

    )
}
export default FormEconomia;