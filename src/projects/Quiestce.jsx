import "../styles/display_project.css"
import { use, useEffect, useState } from "react";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function Quiestce(){

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
            <h1 className="title"><span>Projet Qui Est-Ce ?</span></h1>
            
            <div className="link">
                <a href="https://gitlab.univ-nantes.fr/iut.info1.dev.objets/2025-2026/sae201.2025/projets-etudiants/2025.sae201.31" target="_blank">➜ Voir le projet</a>
            </div>
            

            <div className="projects_details">
                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/quiestce/maquette_page-0001.jpg"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Création de la maquette</h2>
                        <p>Création d'une maquette illustrant les différentes vues de l'application.</p>
                    </div>
                </div>

                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/quiestce/modelesUML_page-0002.jpg"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Conception du diagramme UML</h2>
                        <p>Conception d'un diagramme de classes UML pour modéliser les interactions 
                            entre les différentes composantes de l'application selon l'architecture MVC.</p>
                    </div>
                </div>

                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/quiestce/test.png"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Tests d'une librairie</h2>
                        <p>Conception et implémentation de cas de tests par approche fonctionnelle de la 
                            librairie fournie qui permet d'interagir avec le serveur de jeu.</p>
                    </div>
                </div>

                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/quiestce/vue_base.png"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Développement de l'application MVC</h2>
                        <p>Développement de l'application selon le modèle MVC : <br></br>
                           - Vue : Interface graphique utilisateur réalisée avec JavaFX <br></br>
                           - Modèle : Gestion des données et communication avec le serveur <br></br>
                           - Controleur : Traitement des actions utilisateurs et mise à jour de la vue</p>
                    </div>
                </div>
                
            </div>    



        </div>
    )


}


function useBackground(){

    useEffect(() => {
        document.title = "Portfolio - Projet Qui Est-Ce ?"
    })

}

export default Quiestce


