import React from 'react'
import "./Cover.css";
import coverVideo from "../../assets/fondo-casa.mp4";
import About from '../about/About';

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className="cover-video" src={coverVideo} autoPlay loop></video>

        <h1>Bienvenido</h1>
        <p>Si no puedes llegar al restaurante, has que la comida llegue hacia ti.<br/>
        Porque alegrar corazones por intermedio de nuestra comida es nuestro propósito de vida.</p>

        <a href='#about-container' onClick={About}>
          <button className='cover-button'>Explorar</button>
        </a>

    </div>
  )
}

export default Cover