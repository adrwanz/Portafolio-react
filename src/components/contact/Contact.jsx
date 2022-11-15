import React from 'react'
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Contactos</h2>
        <span className="section__subtitle">Ponerse en contacto</span>

        <div className="contact__container">
            <div className="contact__content">
                <div className="contact__info container grid">
                    <div className="contact__card">
                        <i class='bx bxs-envelope'>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">adrwanz01@gmail.com</span>
                        </i>
                    </div>

                    <div className="contact__card">
                        <i class='bx bxl-whatsapp-square'>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">3755-637401</span>
                        </i>
                    </div>

                    <div className="contact__card">
                        <i class='bx bxl-telegram' >

                            <h3 className="contact__card-title">Telegram</h3>
                            <span className="contact__card-data">3755-637401</span>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact