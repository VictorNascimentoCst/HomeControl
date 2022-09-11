
function Input({txtLabel, funcao, name}) {
    return (
        <div>
            <label htmlFor="name">{txtLabel}</label>
            <input onChange={funcao} type='text' name={name} id="name" placeholder="Nome do gasto aqui !"></input>
        </div>
    )
}

export default Input;