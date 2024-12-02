import { useState } from 'react';
import Formulario from './componentes/Formulario/Formulario';
import Header from './componentes/Header/header';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';

import './App.css';



function App() {
  
  const [mostrarForm, setMostrarForm] = useState(false);
  const [colaboradores, setColaboradores] = useState([{
     nombre: "Lucas Mierez",
     puesto: "developer",
     foto: "https://github.com/nykacmierez.png",
     equipo: "Programacion"
  }]);
 
  const [equipos, actualizarEquipos] = useState([
    //un arreglo de obj para cada equipo con sus caracteristicas
    {
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo:  "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm)
  }

  const registrarColaborador = (colaborador) => {
    setColaboradores( [...colaboradores, colaborador] )
  }

  const eliminarColaborador = () => {
    console.log("Eliminar colaborador")
  }

  const actualizarColor = (color, titulo) => {
    console.log("Actualizar:", color, titulo)
  }


  

  return (
    
    <>
      <Header />

     {
        mostrarForm && <Formulario 
          equipos={ equipos.map((equipo) => equipo.titulo )}
          registrarColaborador={ registrarColaborador } //envia como props la funcion
        /> 
     } 

      <MiOrg cambiarMostrar={ cambiarMostrar }/> {/*se le asigna a MiOrg la funcion como props*/}

      { 
        equipos.map( (equipo) => <Equipo 
            datos={ equipo } 
            key={ equipo.titulo }
            colaboradores={ colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo) }
            eliminarColaborador={ eliminarColaborador }
            actualizarColor={ actualizarColor }
          /> 
        )
      }

      <Footer />

    </>
  );
}

export default App;
