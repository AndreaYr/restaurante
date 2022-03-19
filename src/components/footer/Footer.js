import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Restaurante Casa Grande</h1>
            <p>calle 50 N° 25-33 junto al Inter de la 50 <br />
                Armenia - Quindío
            </p>
        </div>
        <div className='footer-contact'>
            <h3>Contáctanos</h3>
            <p>321 248 1649 <br/>
               305 442 1094</p>
        </div>
        <div className='footer-sns'>
            <p className='desing-by'>Síguenos en Redes</p>
        </div>

        <div className='sns-links'>
            <a href='https://www.facebook.com/R.CasaGrande/' target="_blank" rel='noreferrer'>
                <i className='fab fa-facebook facebook'></i>
            </a>
            <a href='https://api.whatsapp.com/send?phone=573133919601' target="_blank">
                <i className='fab fa-whatsapp whatsapp'></i>
            </a>
        </div>
    </footer>
  )
}

export default Footer