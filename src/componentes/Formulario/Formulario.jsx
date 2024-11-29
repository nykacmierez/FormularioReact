import { useState } from "react";
import "./Formulario.css"
import CampoTexto from "../CamposTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";


const Formulario = () => {

    const [nombre, setNombre] = useState();
    const [puesto, setPuesto] = useState();
    const [foto, setFoto] = useState();


    const manejarEnvio = (e) => {
        
        e.preventDefault();
    }


    return (
        
        <section className="formulario">
            <form onSubmit={ manejarEnvio }>

                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto 
                    titulo="Nombre" 
                    placeholder="Ingresar nombre" 
                    required 
                    valor={ nombre } 
                    setValor={ setNombre }
                />

                <CampoTexto 
                    titulo="Puesto" 
                    placeholder="Ingresar puesto" 
                    required 
                    valor={ puesto } 
                    setValor={ setPuesto }
                />

                <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={ foto } 
                setValor={ setFoto }
                />

                <ListaOpciones />

                <Boton>
                    Crear
                </Boton>
                
            </form>
        </section>
    );    
}

export default Formulario;

