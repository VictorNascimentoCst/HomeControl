import InputEconomia from "./inputEconomia";


function Tabela() {

    return (
        <div className="container_list">
        <table>
            <thead>
                <tr>
                    <td className="list_title">Mês</td>
                    <td className="list_title">Saldo</td>
                    <td className="list_title">Saldo Total</td>

                </tr>
            </thead>

            <tbody id="tbody_table">
               
            </tbody>
        </table>
    </div>

    )
}
export default Tabela;