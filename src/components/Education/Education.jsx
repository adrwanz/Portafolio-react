import React, { useState } from 'react'
import tituloColegio from "../../assets/tituloColegio.jpg"
import  taller from "../../assets/taller.jpg"
import "./education.css";

const Education = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
   <section className="education section" id="education">
    <h2 className="section__title">Educacion</h2>

    <div className="education__container container grid">
        <div className="education__content">
            <div>
            <i class='bx bxs-graduation education__icon'></i>
                <h3 className="education_title">Tecnico <br /> Electromecanico</h3>
            </div>

            <span className="education__button" onClick={() => toggleTab(1)}>Ver más
            <i className="uil uil-arrow-right education__button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "education__modal active-modal" : "education__modal"}>
                <div className="education__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times education__modal-close"></i>
                    <div className="education__modal-titulo">
                        <img src={tituloColegio} alt="" className='education__img'/>
                    </div>
                </div>
            </div>
        </div>

        <div className="education__content">
            <div>
            <i class='bx bxs-graduation education__icon'></i>
                <h3 className="education_title">Tegnología <br /> Electrónica</h3>
            </div>

            <span onClick={() => toggleTab(2)} className="education__button">Ver más
            <i className="uil uil-arrow-right education__button-icon"></i>
            </span>

            <div className={toggleState === 2 ? "education__modal active-modal" : "education__modal"}>
                <div className="education__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times education__modal-close"></i>
                    <div className="education__img-taller">
                        <img src={taller} alt="" className='education__img' />
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Education