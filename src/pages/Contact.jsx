import "../styles/Contact.css"

import cvImg from '../assets/contacts/cv_icon.png'
import mailImg from '../assets/contacts/communication.png'
import ghImg from '../assets/contacts/github.png'
import linkedinImg from '../assets/contacts/linkedin.png'
import rootmeImg from '../assets/contacts/rootme.png'

function Contact(){


    return(
        <>
        <section id="contacts">
            <div className="contact_block">

                <h1 className="title"><span>Contacts</span></h1>

                <div className="contact_grid">

                    
                    <a href="/src/assets/CV_Poirier_Alex.pdf" target="_blank" className="contact_card">
                        <div className="img-contact-container">
                            <img src={cvImg}></img>
                        </div>
                        <div className="text-container">
                            <h3>Voir mon CV</h3>
                        </div>
                        
                    </a>


                    <a href="mailto:poirier.alex2005@gmail.com" target="_blank" className="contact_card">
                        <div className="img-contact-container">
                            <img src={mailImg}></img>
                        </div>
                        <div className="text-container">
                            <h3>Email</h3>
                        </div>
                        
                    </a>


                    <a href="https://github.com/AlexPoirier13" target="_blank" className="contact_card">
                        <div className="img-contact-container">
                            <img src={ghImg}></img>
                        </div>
                        <div className="text-container">
                            <h3>GitHub</h3>
                        </div>
                        
                    </a>


                    <a href="https://www.linkedin.com/in/alex-poirier13/" target="_blank" className="contact_card">
                        <div className="img-contact-container">
                            <img src={linkedinImg}></img>
                        </div>
                        <div className="text-container">
                            <h3>LinkedIn</h3>
                        </div>
                        
                    </a>


                    <a href="https://www.root-me.org/Noctyx?inc=info&lang=fr" target="_blank" className="contact_card">
                        <div className="img-contact-container">
                            <img src={rootmeImg}></img>
                        </div>
                        <div className="text-container">
                            <h3>Profil Root-Me</h3>
                        </div>
                        
                    </a>

                </div>


            </div>
        </section>

        </>
    )


}

export default Contact