import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100%; 
    height: 88px;
    position: fixed;
    top: 0;
    z-index: 99;
    background: rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 960px){
        background-color: #C7180C;
    }
` 

export const Navbarwrapper =  styled.div`
    margin: auto;
    width: 100%;
    width: 80%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`
export const IconLogo =  styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    font-family: "Roboto";
    color: white;
   
`
export const Menu =  styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px){
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 88px;
        left: ${({click}) => click ? 0 : "-100%"};
        flex-direction: column;
        transition: 0.5s all ease;
        background-color: #C7180C;
    }
`
export const MenuItem =  styled.li`
    height: 100%;
    display: flex;
    padding: 2.5rem;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-family: "Roboto";
    text-weight: 400;
    cursor: pointer;

    &:hover{
        color: white;
        transition: 0.2s ease;
        border-bottom: 0.3rem solid white;
    }

    @media screen and (max-width: 960px){
        width: 100%;
        height: 80px;

        &:hover{
            background-color: white;
            transition: 0.2s ease;
            border-bottom: 0.3rem solid black;
        }
        
    }
`
export const MenuItemLink =  styled.a`
    text-decoration: none;
    color: white;
`

export const IconLogoMobile = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: flex;
        color: white;
        font-size: 2rem;
    }
`