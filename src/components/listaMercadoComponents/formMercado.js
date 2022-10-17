import { useState } from "react"
import Button from "../button"
import "./formMercado.css"
import Input from '../input'


function FormMercado({addListaMercado}) {

    const [lista, setLista] = useState([])

    const pegarValue= (e) => {
        setLista({...lista, [e.target.name] : e.target.value})
    }

    const mandarLista = (e) => {
        e.preventDefault()
        addListaMercado(lista)
    }

    return (

        <div className="main_container">

            <form onSubmit={mandarLista} className="container_inputs">
                <Input funcao={pegarValue} type={'text'} name={'produto'} placeholder={'Nome do produto'} txtLabel={'Produto: '} />
                <Input funcao={pegarValue} type={'number'} name={'quantidade'} placeholder={'Quantidade'} txtLabel={'Quantidade: '} />
                <Button text={'Cadastrar'} />

            </form >



        </div>


    )
}

export default FormMercado;