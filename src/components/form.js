import { useState } from 'react'
import "./form.css"
import Button from "./button";
import Input from "./input";


function Form({addGastos}) {

    const [gasto, setGasto] = useState({})

    const pegarValue = (e) => {
        setGasto({...gasto, [e.target.name]: e.target.value})
    }
    const sendGastos = (e) => {
        e.preventDefault()
        addGastos(gasto)      
    }


    return (

        <div className="main_container">

            <form onSubmit={sendGastos} className="container_inputs">
                <div>
                    <Input placeholder={'Nome do gasto'} funcao={pegarValue} type={'text'} txtLabel={'Nome: '} name={'name'} />
                    <Input placeholder={'Valor do gasto'} funcao={pegarValue} type={'number'} txtLabel={'Custo: '} name={'cost'} />
                </div>

                <Button text={'Cadastrar'}></Button>
            </form>

        </div>


    )
}

export default Form;