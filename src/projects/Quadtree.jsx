import "../styles/display_project.css"
import { use, useEffect, useState } from "react";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function Quadtree(){

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
            <h1 className="title"><span>Projet Quadtree</span></h1>
            
            <div className="link">
                <a href="https://gitlab.univ-nantes.fr/old/2024-2025/r1.01/r1.01.sae/r1.01.sae.groupe2.eq10.poirier-alex_salgueiro-fremont-angelo" target="_blank">➜ Voir le projet</a>
            </div>
            

            <div className="projects_details">
            
                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/quadtree/quadtree_particles.png"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Extension "Particules"</h2>
                        <p>Implémentation d'une extension particule où quand le personnage se déplace, des particules de pas 
                            apparaissent ainsi que de la poussière. Il s'agit d'un système de particules où la particule est une 
                            structure de données qui contient une durée de vie, une image et une coordonnée.</p>
                    </div>
                </div>


                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/quadtree/quadtree_TP.png"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Extension "Téléporteurs"</h2>
                        <p>Implémentation d'une extension de téléportation où le personnage peut placer des téléporteurs aux 
                            coordonnées où il se situe et peut se téléporter à travers ces téléporteurs.</p>
                    </div>
                </div>

            </div>    



        </div>
    )


}


function useBackground(){

    useEffect(() => {
        document.title = "Portfolio - Projet Quadtree"
    })

}

export default Quadtree


