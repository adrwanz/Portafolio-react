import React from 'react';
import { useState } from 'react';
import "./header.css";

const Header = () => {
    /*====== Toggle Menu ======*/
    const [Toggle, showMenu] = useState(false);

    return (
     <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Drewanz</a>

            <div className={Toggle ? "nav__menu show-menu" : 
            "nav__menu"} >
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className="uil uil-home nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user-circle nav__icon"></i>Sobre mi
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i>Habilidades
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#education" className="nav__link">
                            <i className="uil uil-moneybag nav__icon"></i>Educacion
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href= "#portafolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i>Portafolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i>Contactos
                        </a>
                    </li>
                </ul>

                <i class="uil uil-times nav__close" onClick={() => showMenu (!Toggle)}></i>
            
            </div>
            <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
                <i class="uil uil-apps"></i>  
            </div>
        </nav>
     </header>
    )
  }
  
  export default Header