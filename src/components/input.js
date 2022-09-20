import './input.css'
function Input({txtLabel, funcao, name, type, placeholder}) {
    return (
        <div className='container'>
            <label htmlFor="name">{txtLabel}</label>
            <input onChange={funcao} type={type} name={name} id="name" placeholder={placeholder}></input>
        </div>
    )
}

export default Input;