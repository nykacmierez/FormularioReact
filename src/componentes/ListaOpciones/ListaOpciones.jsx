import "./ListaOpciones.css"

const ListaOpciones = () => {

  const equipos = [
    "Programacion",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Movil",
    "Innovacion y Gestion"
  ]

    return (
        <div className="lista-opciones">

            <label>Equipos</label>

              <select>

                { equipos.map( (equipo, index) =>  <option key={index}>{ equipo }</option>)}

              </select>

        </div>
    )
}

export default ListaOpciones