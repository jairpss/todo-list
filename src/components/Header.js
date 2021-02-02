import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = ({mostrarCompletadas, cambiarMostrarCompletadas}) => {
    const toggleCompletada = () => {
        cambiarMostrarCompletadas(!mostrarCompletadas);
    }

    return ( 
        <header className='header'>
            <h1 className='header__title'>Lista de Tareas</h1>
            {mostrarCompletadas ?
                <button 
                    className='header__button'
                    onClick={() => toggleCompletada()}
                >
                    No mostrar completadas
                    <FontAwesomeIcon icon={faEyeSlash} className='header__icon-button' />
                </button>
            : 
                <button 
                    className='header__button'
                    onClick={() => toggleCompletada()}
                >
                    Mostrar completadas
                    <FontAwesomeIcon icon={faEye} className='header__icon-button' />
                </button>
            }
            
        </header>
     );
}
 
export default Header;