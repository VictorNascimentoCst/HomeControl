import { createElement } from "react"
import "./inputMercado.css"

function InputMercado() {

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
        bloco1.textContent= document.getElementById('name').value
        var bloco2 = document.createElement('td')
        bloco2.textContent= document.getElementById('quantidade').value
        tr.append(bloco1)
        tr.append(bloco2)
        limparInput()
        
    
    }

    return (

        <div className="main_container">

            <div className="container_inputs">
                <div>
                    <label htmlFor="name">Produto: </label>
                    <input type='text' name="name" id="name" placeholder="Nome do gasto aqui !"></input>
                </div>
                <div>
                    <label htmlFor="name">Quantidade: </label>
                    <input type='number' name="quantidade" id="quantidade" placeholder="Quantidade do produto!"></input>
                </div>
                <button onClick={addTR} className="button_inputs">Cadastrar</button>
            </div>

            <div className="container_list">
                <table>
                    <thead>
                        <tr>
                            <td className="list_title">Status</td>
                            <td className="list_title">Produto</td>
                            <td  className="list_title">Quantidade</td>
                        </tr>
                    </thead>

                    <tbody id="tbody_table">
                        <tr >
                            
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>


    )
}

export default InputMercado;