import React, {useRef, useEffect} from 'react';
import './Slideshow.css';
import img1 from '../../media/comida1.jpg';
import img2 from '../../media/comida2.jpg';
import img3 from '../../media/comida3.jpg';
import {FaAngleLeft} from "react-icons/fa";
import {FaAngleRight} from "react-icons/fa";
import {ContenedorPrincipal,
        ContenedorSlideshow, 
        Slide,
        TextSlide,
        Controls,
        Boton} from './Slides';


const Slideshow = () => {
    const slideshow = useRef(null);

    const siguiente = () => {
        //comprobamos que el slideshow tenga elementos
        if(slideshow.current.children.length > 0){

            //obtenemos el primer elemento del slider
            const primerElemento = slideshow.current.children[0];

            //se establece la transicion del slider
            slideshow.current.style.transition = `3s ease all`;

            //se establece el tamaño del slider
            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            //Movemos el slider
            slideshow.current.style.transform = `traslateX(-${tamañoSlide}px)`;
        
            const transition = () =>{
                //reiniciamos la posicion del slider
                slideshow.current.style.transition = `none`;
                slideshow.current.style.transform = `traslateX(0)`;

                //tomamos el primer elemento y lo mandamos al final
                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transition);
            }
            
            //evenlistener cuando termina la transicion
            slideshow.current.addEventListener('transitionend', transition);

        }
    }
   
    const anterior = () => {

        if(slideshow.current.children.length > 0){
            //obtenemos el primer elemento del slider
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
        
            slideshow.current.style.transition = `none`;

            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `traslateX(-${tamañoSlide}px)`;

            setTimeout(() =>{
                slideshow.current.style.transition = `300ms ease-out all`;
                slideshow.current.style.transform = `traslateX(0)`;

            }, 30);
        }
    }

    useEffect(() =>{
        const intervalo = setInterval(() => {
            siguiente();
        }, 5000);

        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervalo);
        });
    }, []);

  return (
   
    <ContenedorPrincipal >
        <ContenedorSlideshow ref={slideshow}>
            <Slide>
                <img className='img-carousel' src={img1} alt=""/>
                <TextSlide>
                <p className='text-carousel'>15% de descuento en desayunos</p>
                </TextSlide>
            </Slide>
            <Slide>
                <img className='img-carousel' src={img2} alt=""/>
                <TextSlide>
                <p className='text-carousel'>15% de descuento en desayunos</p>
                </TextSlide>
            </Slide>
            <Slide>
                <img className='img-carousel' src={img3} alt=""/>
                <TextSlide>
                <p className='text-carousel'>15% de descuento en desayunos</p>
                </TextSlide>
            </Slide>
        </ContenedorSlideshow>
        
    
        <Controls onClick={siguiente}>
            <Boton >
                <FaAngleLeft size={"2.5em"} color={"black"} />
            </Boton>
            <Boton onClick={anterior}>
                <FaAngleRight size={"2.5em"} color={"black"} />
            </Boton>
        </Controls>

    </ContenedorPrincipal>

  )
}



export default Slideshow