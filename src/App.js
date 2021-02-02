import './App.css';
import React, { useState } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import ListaTareas from './components/ListaTareas';

const App = () => {
  const [tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'Lavar ropa',
        completada: false
      }
    ]
  );
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(true);
  

  return (
    <div className='contenedor'>
      <Header 
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <Form tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
}

export default App;
