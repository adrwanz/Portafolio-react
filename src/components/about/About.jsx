import React from 'react'
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from "./Info";

const About = () => {
  return (
   <section className="about section" id="about">
    <h2 className="section__title">Sobre mi</h2>
    <span className="section__subtitle">Introduccion</span>

<div className="about__container container grid">
    <img src={AboutImg} alt="" className="about__img" />
    <div className="about__data">
        <Info />

        <p className="about__description"> Desarrollador web Full-Stack en busca de nuevos desafíos. </p>

       
    </div>
</div>
   </section>
  )
}

export default About