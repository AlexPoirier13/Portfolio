import "../styles/display_project.css"
import { use, useEffect, useState } from "react";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function Automate(){

    useBackground()

    return(
        <>
        <Header />
        <Display_project />
        
        </>
    )

}


function Display_project(){

    return(
        <div className="display_projet">
            <h1 className="title"><span>Mini Projet - Automate Analyseur</span></h1>
            
            <div className="link">
                <a href="https://github.com/AlexPoirier13/Automate_Analyseur" target="_blank">➜ Voir le projet</a>
            </div>
            

            <div className="projects_details">
            
                
            </div>    



        </div>
    )


}


function useBackground(){

    useEffect(() => {
        document.title = "Portfolio - Projet Automate Analyseur"
    })

}

export default Automate


