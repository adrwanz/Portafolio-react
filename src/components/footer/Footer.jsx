import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Drewanz</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#education" className="footer__link">Educación</a>
                </li>

            </ul>

            <div className="footer__social">
                <a href="https://www.intagram.com/" className="footer__social-link">
                 <i class="uil uil-instagram-alt"></i>
                </a>

                <a href="https://web.whatsapp.com/" className="footer__social-link">
                 <i class="uil uil-whatsapp-alt"></i>
                </a>

                <a href="https://github.com/" className="footer__social-link">
                 <i class="uil uil-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Drewanz Adrian. Todos los derechos reservados.</span>
        </div>
    </footer>
  )
}

export default Footer