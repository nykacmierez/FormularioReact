import { useState } from 'react';
import Formulario from './componentes/Formulario/Formulario';
import Header from './componentes/Header/header';
import MiOrg from './componentes/MiOrg/MiOrg';

import './App.css';



function App() {
  
  const [mostrarForm, setMostrarForm] = useState(true);
  
  const cambiarMostrar = () => {
    setMostrarForm(!mostrarForm)
  }

  return (
    
    <>
      <Header />

      { mostrarForm && <Formulario /> } 

      <MiOrg cambiarMostrar={ cambiarMostrar }/> {/*se le asigna a MiOrg la funcion como props*/}
    </>
  );
}

export default App;
