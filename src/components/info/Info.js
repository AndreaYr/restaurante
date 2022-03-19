import React from 'react';
import './Info.css';
import Personaje from '../../media/personaje1.png';

const Info = () => {
  return (
    <div className='info-container'>

      <h1 className='info-title'>Nosotros</h1>
      <div className='info'>
          
        <p className='info-parrafo'>Casa Grande es un restaurante que se especializa en la comida criolla de
        excelente calidad,también ofrece una amplia carta que sobresale por su calidad, 
        sabor y nutrición, lograndosatisfacer las necesidades gastronómicas de nuestros 
        clientes. No ofrecemos platosde una nacionalidad especíca, o limitados a las
        carnes o a la sazón regional, diariamentepresentamos un plato creativo del chef,
        el cual deleita al cliente en su sabor, variedad y precio.</p>

        <div className='info-img'>
          <img clasName='img-Personaje' src={Personaje} alt='about'></img>

        </div>
        
      </div>

    </div>
  )
}

export default Info