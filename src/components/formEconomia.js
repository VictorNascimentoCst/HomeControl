import Button from './button'
import './formEconomia.css'
import Input from './input'
import InputSelect from './inputSelect'

function FormEconomia() {

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
                <InputSelect/>
                <Input txtLabel={'Saldo: '}/>
                <Button addTR={addTR} text={'Adicionar'}/>
            </div>
        </div>

    )
}
export default FormEconomia;