import styled from 'styled-components';

export const ContenedorPrincipal = styled.div`
    position:relative;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10;
    overflow: hidden;


`

export const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;


`
export const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: 0.3s ease all;
    z-index: 10;
    max-height: 500px;
    position: relative;

    img{
        width: 100%;
        height:.5%
        vertical-align: top;
    }

`
export const TextSlide = styled.div`
    background: rgba(0, 0, 0, 0.5);
    color: white;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 960px){
        position: relative;
        background: black;
        bottom: 0;
        top: 30px;
        z-index: 20;
    }

`
export const Titulo = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0;

`

export const Controls = styled.div`
    width: 100%;
    padding: 10px 60px;
    position: absolute;
    z-index: 20;
    top: 0;
    bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const Boton = styled.div`
    background: transparent;
    border: none;
    cursor: pointer;
    transition: 0.3s ease all;

`