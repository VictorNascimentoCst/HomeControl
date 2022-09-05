import "./input.css"

function Input() {

    const cadastrar = () => {

    }


    return (

        <div className="main_container">

            <div className="container_inputs">
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type='text' name="name" id="name" placeholder="Nome do gasto aqui !"></input>
                </div>

                <div>
                    <label htmlFor="cost">Custo: </label>
                    <input type='number' name="cost" id="cost" placeholder="Custo do gasto aqui !"></input>
                </div>
                <button onClick={cadastrar} className="button_inputs">Cadastrar</button>
            </div>

        </div>


    )
}

export default Input;