import "../styles/display_project.css"
import { use, useEffect, useState } from "react";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

import homeRandomizerImg from '../assets/projets/randomizer/home.png'
import itemRandomizerImg from '../assets/projets/randomizer/item.png'
import comboRandomizerImg from '../assets/projets/randomizer/combo.png'


function Randomizer(){

    useBackground()

    return(
        <>
        <Header />
        <Display_project />
        <Footer />
        </>
    )

}


function Display_project(){

    return(
        <div className="display_projet">
            <h1 className="title"><span>Projet Perso MK8DX Randomizer</span></h1>
            
            <div className="link">
                <a href="https://github.com/NoctyxMK/mk8dx-randomizer" target="_blank">➜ Voir le projet</a>
            </div>
            

            <div className="projects_details">
                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src={homeRandomizerImg}></img>
                    </div>

                    <div className="project_desc">
                        <h2>Page d'accueil</h2>
                        <p>Page principale du site, l'utilisateur peut accéder aux fonctionnalités du site en cliquant sur les boutons de la navigation.</p>
                    </div>
                </div>

                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src={itemRandomizerImg}></img>
                    </div>

                    <div className="project_desc">
                        <h2>Page Item Randomizer</h2>
                        <p>"Randomizer" d'objets, l'utilisateur peut écrire le nombre d'objets qu'il souhaite, l'application selectionnera le nombre choisi parmi tous les objets disponibles. </p>
                    </div>
                </div>

                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src={comboRandomizerImg}></img>
                    </div>

                    <div className="project_desc">
                        <h2>Page Combo Randomizer</h2>
                        <p>"Randomizer" de "combo", en cliquant sur le bouton "Randomize" l'application génère aléatoirement une combinaison de personnage, véhicule, roues et deltaplane.</p>
                    </div>
                </div>

                
                
            </div>    



        </div>
    )


}


function useBackground(){

    useEffect(() => {
        document.title = "Portfolio - Projet Perso MK8DX-Randomizer"
    })

}

export default Randomizer


