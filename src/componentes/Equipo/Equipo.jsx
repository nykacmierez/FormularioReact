import "./equipo.css";
import Colaborador from "../Colaborador/Colaborador";


const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo} = props.datos; //desestructura los valores y crea var con esos valores desde props.datos
    
    const {colaboradores, eliminarColaborador, actualizarColor} = props;
   
    const estiloCard = { backgroundColor: colorSecundario }; //se puede llamar a la var con el valor de la desestructuracion anterior

    const estiloTitulo = { borderColor: colorPrimario };


    return <>
        { colaboradores.length > 0 &&
            <section className="equipo" style={ estiloCard }> 
                <input 
                    type="color"
                    className="input-color"
                    value={ colorSecundario }
                    onChange={(e) => {
                        actualizarColor(e.target.value, titulo)
                    }}
                />
                <h3 style={estiloTitulo}> { titulo } </h3>
            
                <div className="colaboradores"> 
                {
                    colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index} 
                        colorPrimario={ colorPrimario }
                        eliminarColaborador={eliminarColaborador}
                    /> )
                } 
                </div>
            </section>
        } </>
};

export default Equipo;