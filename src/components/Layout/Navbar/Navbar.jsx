import React from 'react';
import ValtechLogo from '../../../assets/img/Valtech-logo.png';
import SvgWorld from '../../../assets/svg/world-svgrepo-com.svg';
import SvgSearch from '../../../assets/svg/search-svgrepo-com.svg';

const Navbar = () => {
  return (
    <nav className='navBar'>
      <div className='navBar-items'>
        <a href='https://www.valtech.com/es-ar/acerca-de/' target='blank'><img src={ValtechLogo} alt='logo' style={{width: 110}}/></a>
        <p>nuestro trabajo</p>
        <p>empleo</p>
        <p>insights</p>
        <p>nosotros</p>
      </div>
      <div className='aside'>
        <div>
          <div>ES</div>
          <div><img src={SvgWorld} alt="world-icon" width={27}/></div>
          <div><img src={SvgSearch} alt="search-icon" width={27}/></div>
        </div>
        <div>contáctanos</div>
      </div>
    </nav>
  );
}

export default Navbar;