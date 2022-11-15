import React from 'react'
import "./portafolio.css";
import drewanzMotors from "../../assets/drewanzMotors.jpg";
import cqc from "../../assets/cqc.jpg";


const Portafolio = () => {
  return (
    <section className="portafolio__section" id='portafolio'>
        <h2 className="section__title">Portafolio</h2>
        <span className="section__subtitle">Trabajos realizados</span>

        <div className="portafolio__container container grid">
            <div className="portafolio__container-total">
                <div className="portafolio__content-img">
                    <img className='portafolio__img' src={drewanzMotors} alt="" />
                </div>
                <div className="portafolio__content-text">
                    <h2 className="portafolio__title">Drewanz Motors</h2>
                    <p className="portafolio__description">Proyecto realizado en el curso de Desarrollador Frontend.</p>
                 </div>
            </div>

            <div className="portafolio__container-total">
                <div className="portafolio__content-img">
                  <img className='portafolio__img' src={cqc} alt=""  />
                </div>
                <div className="portafolio__content-text">
                    <h2 className="portafolio__title">CQC</h2>
                    <p className="portafolio__description">Proyecto realizado en el curso de Desarrollador Frontend.</p>
                </div>
            </div>

        </div>

        
    </section>
  )
}
export default Portafolio