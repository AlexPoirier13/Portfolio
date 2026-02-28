import "../styles/display_project.css"
import { use, useEffect, useState } from "react";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function Dicefull(){

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
            <h1 className="title"><span>Projet - Site de vente de jeux de société</span></h1>
            
            <div className="link">
                <a href="https://gitlab.univ-nantes.fr/pub/but/but2/sae/groupe4/eq_4_03_cochard-bastian_grillet-nolan_monnin-damien_poirier-alex" target="_blank">➜ Voir le projet</a>
            </div>
            

            <div className="projects_details">
                
                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/dicefull/diagrammeClasseConception.png"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Diagramme de classe UML</h2>
                        <p>Avant de développer le site, nous avions effectué la partie Conception du projet. 
                            Cette partie consitait à l'analyse des spécifications et la création d'un diagramme de classe UML. 
                            Nous avions également intégré des design patterns notamment Memento, Strategy et Factory</p>
                    </div>
                </div>
                
                
                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/dicefull/home.png"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Page d'accueil</h2>
                        <p>Page d'accueil du site, sur cette page l'utilisateur peut accéder à toutes les 
                            fonctionnalités en cliquant sur les boutons du site (catalogue, authentification, favoris, panier).</p>
                    </div>
                </div>

                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/dicefull/login.png"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Page d'authentification</h2>
                        <p>L'utilisateur peut s'inscrire sur le site, et il sera enregistrer dans la base de données. 
                            Ensuite, l'utilisateur a accès au reste des fonctionnalités telles que le panier ou les favoris.</p>
                    </div>
                </div>

                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/dicefull/gestion_compte.png"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Page Gestion Compte</h2>
                        <p>Un administrateur est un type d'utilisateur qui a accès à une page permettant de 
                            gérer les comptes des utilisateurs. Il peut par exemple, gérer les commandes ce ceux-ci mais également les supprimer. 
                            Il peut aussi créer un autre compte Administrateur.</p>
                    </div>
                </div>

                
                
            </div>    



        </div>
    )


}


function useBackground(){

    useEffect(() => {
        document.title = "Portfolio - Projet Site de vente de jeux de société"
    })

}

export default Dicefull


