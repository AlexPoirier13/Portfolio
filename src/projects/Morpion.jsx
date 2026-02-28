import "../styles/display_project.css"
import { use, useEffect, useState } from "react";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function Morpion(){

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
            <h1 className="title"><span>Projet Perso - Tic-Tac-Toe</span></h1>
            
            <div className="link">
                <a href="https://github.com/AlexPoirier13/Tic-Tac-Toe" target="_blank">➜ Voir le projet</a>
            </div>
            

            <div className="projects_details">
                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/morpion/main_menu.png"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Menu principal</h2>
                        <p>Premier menu qui s'affiche au lancement du jeu. Création d'un objet Button nommé "Play" qui permet de lancer une partie.</p>
                    </div>
                </div>

                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/morpion/grid.png"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Grille du jeu</h2>
                        <p>Développement d'une fonction qui dessine la grille du morpion.</p>
                    </div>
                </div>

                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/morpion/grid_symboles.png"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Placement des symboles "X" ou "O"</h2>
                        <p>Création d'une fonction permettant d'afficher un symbole  "O" ou "X" dans la case sélectionnée par le joueur.</p>
                    </div>
                </div>

                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/morpion/etat.png"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Détermination de l'état de la partie</h2>
                        <p>Implémentation d'une fonction qui à partir de la représentation binaire de la grille détermine l'état de la partie.</p>
                    </div>
                </div>

                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src="/src/assets/projets/morpion/end_menu.png"></img>
                    </div>

                    <div className="project_desc">
                        <h2>Ecran Game Over</h2>
                        <p>Ecran de fin de partie affichant le résultat en haut de l'écran, 
                            accompagné de 2 boutons interactifs qui permettent soit de rejouer une partie "Play again" 
                            soit de fermer l'application "Quit".</p>
                    </div>
                </div>
                
            </div>    



        </div>
    )


}


function useBackground(){

    useEffect(() => {
        document.title = "Portfolio - Projet Perso Tic-Tac-Toe"
    })

}

export default Morpion


