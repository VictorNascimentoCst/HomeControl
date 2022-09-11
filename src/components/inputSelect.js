
function InputSelect() {
    return (
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
    )
}

export default InputSelect;