import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import ListaTareas from './components/ListaTareas';

const App = () => {

  //Se obtienen las tareas guardadas de LocalStorage
  const tareasGuardadas =
  localStorage.getItem('tareas') ?
  JSON.parse(localStorage.getItem('tareas')) : [];

  //Estamos estableciendo el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  //Guardando el estado dentro de LocalStorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  //Accedemos a localstorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  //Estado de mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas]);
  

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
