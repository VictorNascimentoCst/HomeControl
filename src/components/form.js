import { useState } from 'react'
import "./form.css"
import Button from "./button";
import Input from "./input";


function Form({addGastos}) {
    
    const [gasto, setGasto] = useState({})

    const pegarValue = (e) => {
        setGasto({...gasto, [e.target.name]: e.target.value})
    }
    const falar = (e) => {
        e.preventDefault()
        addGastos(gasto)
    }


    return (

        <div className="main_container">

            <form onSubmit={falar} className="container_inputs">
                <div>
                    <Input funcao={pegarValue} txtLabel={'Nome: '} name={'name'} />
                    <Input funcao={pegarValue} txtLabel={'Custo: '} name={'cost'} />
                </div>

                <Button text={'Cadastrar'}></Button>
            </form>

        </div>


    )
}

export default Form;