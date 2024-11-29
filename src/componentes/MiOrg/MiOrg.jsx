import {useState} from "react";
import "./miOrg.css";


const MiOrg = (props) => { //como parametro debe tener las props para poder ejecutar la funcion 

    const [mostrar, setMostrar] = useState(true);

    return <section className="orgSection">

        <h3 className="title">Mi organizacion</h3>
        
        <img src="/img/Boton-add-01.png" alt="add" onClick={ props.cambiarMostrar }/> {/*la props viene de App.jsx y ejecuta la funcion cambiarMostrar*/}

    </section>
}

export default MiOrg;