import './tabela.css'


function Tabela({texto1, texto2, texto3}) {

    return (
        <div className="container_list">
        <table>
            <thead>
                <tr>
                    <td className="list_title">{texto1}</td>
                    <td className="list_title">{texto2}</td>
                    <td className="list_title">{texto3}</td>

                </tr>
            </thead>

            <tbody id="tbody_table">
               
            </tbody>
        </table>
    </div>

    )
}
export default Tabela;