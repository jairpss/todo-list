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

  console.log(tareas);

  return (
    <div className='contenedor'>
      <Header />
      <Form tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas={tareas}/>
    </div>
  );
}

export default App;
