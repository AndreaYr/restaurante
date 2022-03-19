import React, {useState} from 'react';
import { IconLogo, IconLogoMobile, Menu, MenuItem, MenuItemLink, NavbarContainer } from './NavbarElements';
import { Navbarwrapper } from './NavbarElements';
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import  ShoppingCart  from '../card/ShoppingCart';

/*      const Navbar = ({isScrolling}) => {
    //funcion al realizar onclick en el logo lleve arriba de la pagina
    const toTheTop = () => {
      window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }

       <div className={`navbar-menu ${isScrolling > 20 ? "scrollingTwo" : null}`}>
       <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
       
       <div className='navbar-logo' onClick={toTheTop}>
          
       </div>
       </nav>
        </div> */

const Navbar = () => {
  //funcion al realizar onclick en el menu amburguesa se activa o desactiva menu
  const [click, setClick] = useState(false);

  const ChangeClick = () =>{
    setClick(!click);
  }

  // funcion al realizar onclick en el logo direcciona a la pagina principal
  const toTheTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }

  return (
    <NavbarContainer onClick={toTheTop}>
      <Navbarwrapper>

      <IconLogo >
        </IconLogo>
      
        <Menu click= {click}>
          <MenuItem onClick={() => ChangeClick()}>
              <MenuItemLink>
                Inicio
              </MenuItemLink>
          </MenuItem>
        
          <MenuItem onClick={() => ChangeClick()}>
              <MenuItemLink>
                Productos
              </MenuItemLink>
          </MenuItem>
        
          <MenuItem onClick={() => ChangeClick()}>
              <MenuItemLink>
                Nosotros
              </MenuItemLink>
          </MenuItem>
        </Menu>
          
        <IconLogo onClick={() => ChangeClick()}>
          <FaShoppingCart size={"2.5em"}/>
          {
            click ? <ShoppingCart /> : <IconLogo />

          }
          
          
        </IconLogo>
    
        <IconLogoMobile onClick={() => ChangeClick()}>
          {
            click ? <FaTimes /> : <FaBars />

          }
        </IconLogoMobile>

      </Navbarwrapper>
    </NavbarContainer>
  )
}

export default Navbar;