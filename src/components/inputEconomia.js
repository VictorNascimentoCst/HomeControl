import './inputEconomia.css'
import Tabela from './tabela'
import { AiOutlineDelete } from 'react-icons/ai'



function InputEconomia() {

    const teste = [
        {
            mes: 'teste',
            saldo: 10
        },
        {
            mes: 'teste2',
            saldo: 15
        },
        {
            mes: 'teste3',
            saldo: 14
        },
        {
            mes: 'teste4',
            saldo: 17
        }
    ]

    function addTR() {
        const limparInput = () => {
            document.getElementById('balance').value = ''
        }


       teste.map((element) =>{
        var tabela = document.getElementById('tbody_table')
        var linha = document.createElement('tr')
        tabela.append(linha)

        var bloco1 = document.createElement('td')
        var bloco2 = document.createElement('td')
        bloco1.innerText = element.mes
        bloco2.innerText = element.saldo

        linha.append(bloco1)
        linha.append(bloco2)

       })

        limparInput()


    }
    return (

        <div className="main_container">

            <div className="container_inputs">
                <div>
                    <label for="meses">Mês: </label>
                    <select id="meses" name="meses">
                        <option value="JANEIRO">JANEIRO</option>
                        <option value="FEVEREIRO">FEVEREIRO</option>
                        <option value="MARÇO">MARÇO</option>
                        <option value="ABRIL">ABRIL</option>
                        <option value="MAIO">MAIO</option>
                        <option value="JUNHO">JUNHO</option>
                        <option value="JULHO">JULHO</option>
                        <option value="AGOSTO">AGOSTO</option>
                        <option value="SETEMBRO">SETEMBRO</option>
                        <option value="OUTUBRO">OUTUBRO</option>
                        <option value="NOVEMBRO">NOVEMBRO</option>
                        <option value="DEZEMBRO">DEZEMBRO</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="balance">Saldo: </label>
                    <input type='number' name="balance" id="balance" placeholder="Custo do gasto aqui !"></input>
                </div>
                <button onClick={addTR} className="button_inputs">Adicionar</button>
            </div>

            <Tabela nome='ASA' />

        </div>

    )
}
export default InputEconomia;