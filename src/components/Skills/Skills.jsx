import React from 'react'
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
   <setion className="skills section" id="skills">
     <section className="about section" id="about">
    <h2 className="section__title">Habilidades</h2>
    <span className="section__subtitle">Mi nivel técnico</span>

    <div className="skills__container container grid">
    <Frontend />
    <Backend />
    </div>
    </section>
    </setion>  
    )
}

export default Skills