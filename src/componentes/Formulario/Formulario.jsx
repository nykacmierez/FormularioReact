import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo/Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";


const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        const datosEnviados = { //toma el valor correspondiente de cada input y manda
            nombre,
            puesto,
            foto,
            equipo
        }
        props.registrarColaborador(datosEnviados) //la props viene desde el main y llama a la funcion   
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo( {titulo, colorPrimario: color} )
    }

    return (
        
        <section className="formulario">
            <form onSubmit={ manejarEnvio }>

                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo 
                    titulo="Nombre" 
                    placeholder="Ingresar nombre" 
                    required 
                    valor={ nombre } 
                    setValor={ setNombre }
                />

                <Campo 
                    titulo="Puesto" 
                    placeholder="Ingresar puesto" 
                    required 
                    valor={ puesto } 
                    setValor={ setPuesto }
                />

                <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={ foto } 
                setValor={ setFoto }
                />

                <ListaOpciones 
                    valor={ equipo }
                    setEquipo={ setEquipo }
                    equipos={ props.equipos }
                />

                <Boton>
                    Crear
                </Boton>
                
            </form>

            <form onSubmit={ manejarNuevoEquipo }>

                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo 
                    titulo="Titulo" 
                    placeholder="Ingresar titulo" 
                    required 
                    valor={ titulo } 
                    setValor={ setTitulo }
                />

                <Campo 
                    titulo="Color" 
                    placeholder="Ingresar el color" 
                    required 
                    valor={ color } 
                    setValor={ setColor }
                    type="color"
                />
                <Boton>
                    Registrar equipo
                </Boton>
            </form>    
        </section>
    );    
}

export default Formulario;

