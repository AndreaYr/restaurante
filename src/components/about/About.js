import React from 'react';
import "./About.css";
import Desayuno from '../../media/desayunito.png';
import Almuerzo from '../../media/almuerzo.png'

const About = () => {
  return (
    <div className='about-container'>

      <h2 className='about-title'>Especialidades</h2>

      <div className='breakfeast'>
        <div className='about-desc'>
          <h3>Desayunos</h3>
          <p>Casa Grande es un restaurante que se especializa en la comida criolla de
          excelente calidad,también ofrece una amplia carta que sobresale por su calidad, 
          sabor y nutrición, lograndosatisfacer las necesidades gastronómicas de nuestros 
          clientes. No ofrecemos platosde una nacionalidad especíca, o limitados a las
          carnes o a la sazón regional, diariamentepresentamos un plato creativo del chef,
          el cual deleita al cliente en su sabor, variedad y precio.</p>

        </div>

        <div className='about-img'>
          <img className="img" src={Desayuno} alt='about'></img>

        </div>
      </div>

      <div className='lunch'>
        <div className='about-img-almuerzo'>
            <img className="img-almuerzo" src={Almuerzo} alt='about'></img>

        </div>
        <div className='about-desc'>
            <h3>Platos a la Carta</h3>
            <p>Casa Grande es un restaurante que se especializa en la comida criolla de
            excelente calidad,también ofrece una amplia carta que sobresale por su calidad, 
            sabor y nutrición, lograndosatisfacer las necesidades gastronómicas de nuestros 
            clientes. No ofrecemos platosde una nacionalidad especíca, o limitados a las
            carnes o a la sazón regional, diariamentepresentamos un plato creativo del chef,
            el cual deleita al cliente en su sabor, variedad y precio.</p>

        </div>
      </div>
    </div>
  )
}

export default About