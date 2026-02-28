//import { Link } from "react-router-dom";
import { use, useEffect, useState } from "react";
import '../styles/Home.css'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

function Home(){

    useBackground()

    return (
        <>
        
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        </>
    )


}






function useBackground(){

    useEffect(() => {
        document.title = "Portfolio - Home"
    })

}

export default Home