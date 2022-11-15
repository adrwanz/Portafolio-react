import React from 'react'

const Info = () => {
  return (
   <div className="about__info grid">
    <div className="about__box">
    <i class='bx bxs-award about__icon'></i>

        <h3 className="about__title">Experiencia</h3>
        <span className="about__subtitle">1 Año</span>
    </div>

    <div className="about__box">
    <i class='bx bxs-briefcase about__icon'></i>

        <h3 className="about__title">Realizado</h3>
        <span className="about__subtitle">2 Proyectos</span>
    </div>

    <div className="about__box">
    <i class='bx bx-support about__icon' ></i>

        <h3 className="about__title">Soporte</h3>
        <span className="about__subtitle">Online 24/7</span>
    </div>
   </div>
  )
}

export default Info