import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from 'hex-to-rgba';

import "./equipo.css";


const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo, id} = props.datos; //desestructura los valores y crea var con esos valores desde props.datos
    
    const {colaboradores, eliminarColaborador, actualizarColor} = props;
   
    const estiloCard = { backgroundColor: hexToRgba(colorPrimario, 0.6)};

    const estiloTitulo = { borderColor: colorPrimario };


    return <>
        { colaboradores.length > 0 &&
            <section className="equipo" style={ estiloCard }> 
                <input 
                    type="color"
                    className="input-color"
                    value={ colorPrimario }
                    onChange={(e) => {
                        actualizarColor(e.target.value, id)
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