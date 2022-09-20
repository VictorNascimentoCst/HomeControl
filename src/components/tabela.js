import './tabela.css'


function Tabela({texto1, texto2, texto3, bloco1, bloco2}) {

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
                <tr>
                    <td>{bloco1}</td>
                    <td>{bloco2}</td>
                </tr>
               
            </tbody>
        </table>
    </div>

    )
}
export default Tabela;