import "../styles/display_project.css"
import { use, useEffect, useState } from "react";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

import dpllImg from '../assets/projets/SAT/sudoku_dpll.png'
import initImg from '../assets/projets/SAT/sudoku_init.jpg'
import constrainsImg from '../assets/projets/SAT/sudoku_constraints.png'

function SAT(){

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
            <h1 className="title"><span>Projet Solveur SAT</span></h1>
            
            <div className="link">
                <a href="https://github.com/AlexPoirier13/SAT_Solver" target="_blank">➜ Voir le projet</a>
            </div>
            

            <div className="projects_details">
                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src={dpllImg}></img>
                    </div>

                    <div className="project_desc">
                        <h2>Algorithme DPLL</h2>
                        <p>Implémentation de l’algorithme DPLL (Davis–Putnam–Logemann–Loveland) 
                            pour vérifier la satisfiabilité de formules en forme normale conjonctive (CNF)</p>
                    </div>
                </div>

                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src={initImg}></img>
                    </div>

                    <div className="project_desc">
                        <h2>Initialisation de grille de Sudoku</h2>
                        <p>Génération d’une grille de Sudoku à partir d’une liste de listes, 
                            où chaque sous-liste contient les coordonnées et la valeur associée. 
                            La grille finale est représentée sous forme de liste unidimensionnelle</p>
                    </div>
                </div>

                <div className="project_tile">
                    <div className="img-detail-container">
                        <img src={constrainsImg}></img>
                    </div>

                    <div className="project_desc">
                        <h2>Contraintes de la grille</h2>
                        <p>Définition des contraintes de la grille (lignes, colonnes et régions) 
                            via une fonction, avec une représentation sous forme de liste de listes</p>
                    </div>
                </div>
                
            </div>    



        </div>
    )


}


function useBackground(){

    useEffect(() => {
        document.title = "Portfolio - Projet Solveur SAT"
    })

}

export default SAT


