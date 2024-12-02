import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Formulario from './componentes/Formulario/Formulario';
import Header from './componentes/Header/header';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';

import './App.css';
import { TbRuler } from 'react-icons/tb';



function App() {
  
  const [mostrarForm, setMostrarForm] = useState(TbRuler);
  
  const [colaboradores, setColaboradores] = useState([{
    
    id: uuid(),
    nombre: "Lucas Mierez",
    puesto: "developer",
    foto: "https://github.com/nykacmierez.png",
    equipo: "Programacion"

  }]);
 
  const [equipos, actualizarEquipos] = useState([
    //un arreglo de obj para cada equipo con sus caracteristicas
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo:  "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
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

  const eliminarColaborador = ( id ) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores)
  }

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map( (equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid }])
  }

  return (
    
    <>
      <Header />

     {
        mostrarForm && <Formulario 
          equipos={ equipos.map((equipo) => equipo.titulo )}
          registrarColaborador={ registrarColaborador } //envia como props la funcion
          crearEquipo={crearEquipo}
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
