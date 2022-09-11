import Button from "./button"
import "./formMercado.css"
import Input from './input'


function FormMercado() {

    function addTR() {
        const limparInput = () => {
            console.log('oi')
            document.getElementById('name').value = ''
            document.getElementById('quantidade').value = ''
        }

        var tbody = document.getElementById('tbody_table')
        var tr = document.createElement('tr')
        tbody.append(tr)
        var radioButton = document.createElement("input")
        radioButton.setAttribute("type", 'checkbox')
        tr.append(radioButton)
        var bloco1 = document.createElement('td')
        bloco1.textContent = document.getElementById('name').value
        var bloco2 = document.createElement('td')
        bloco2.textContent = document.getElementById('quantidade').value
        tr.append(bloco1)
        tr.append(bloco2)
        limparInput()


    }

    return (

        <div className="main_container">

            <div className="container_inputs">
            <Input txtLabel={'Produto: '}/>
            <Input txtLabel={'Quantidade: '}/>
                <Button addTR={addTR} text={'Cadastrar'} />

            </div>

        

        </div>


    )
}

export default FormMercado;