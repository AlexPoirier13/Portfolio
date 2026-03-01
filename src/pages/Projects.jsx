import '../styles/Projects.css'
import { Link } from "react-router-dom";
import RunningChart from '../components/RunningChart';

import quadtree_img from '../assets/projets/quadtree/quadtree_project.png'
import quiestce_img from '../assets/projets/quiestce/quiestce.png'
import dicefull_img from '../assets/projets/dicefull/home.png'
import sudoku_img from '../assets/projets/SAT/sudoku.png'
import automate_img from '../assets/projets/automate/automate.png'
import morpion_img from "../assets/projets/morpion/title_screen.png"
import randomizer_img from '../assets/projets/randomizer/home.png'

function Projects(){

    return(
        <>
        <section id="projects">

            <div className="projects_block">

                <h1 className="title"><span>Projects</span></h1>
                <div className="projects_grid">

                    <Link to="/projects/quadtree" className="project">

                        <h2>Projet - Quadtree</h2>
                        <div className="img-container">
                            <img src={quadtree_img} alt="quadtree_projet"></img>
                        </div>
                        
                        <p>
                            Projet d'un jeu 2D utilisant la bibliothèque Ebiten et exploitant les quadtrees, 
                            une structure de données en forme d'arbre où chaque noeud qui n'est pas une feuille possède 4 noeuds enfants.
                        </p>
                        <div className="tags">
                            <span>Golang</span>
                            
                            
                        </div>

                    </Link>

                    <Link to="/projects/quiestce" className="project">

                        <h2>Projet - Qui Est-Ce ?</h2>
                        <div className="img-container">
                            <img src={quiestce_img} alt="quiestcelogo"></img>
                        </div>
                        
                        <p>
                            Développement d'une application cliente du jeu "Qui Est-Ce ? en Kotlin avec JavaFX. 
                            Le projet avait pour objectif de créer une application qui respectait le patron architectural 
                            MVC (Modèle-Vue-Controleur)
                        </p>
                        <div className="tags">
                            <span>Kotlin</span>
                            <span>JavaFX</span>
                            <span>MVC</span>
                        </div>

                    </Link>

                    <Link to="/projects/dicefull" className="project">

                        <h2>Projet - Site de vente de jeux de société</h2>
                        <div className="img-container">
                            <img src={dicefull_img}></img>
                        </div>
                        
                        <p>
                            Développement d'un site web dynamique de vente de jeux de société. 
                            Le site devait répondre à des besoins clients tels que l'authentification, 
                            la gestion du catalogue ou encore la gestion du panier. Par ailleurs, nous devions créer un SGBD 
                            relationnel avec SQLite. Enfin, notre projet devait implémenter des Design Patterns.
                        </p>
                        <div className="tags">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>PHP</span>
                            <span>CodeIgniter</span>
                            
                        </div>

                    </Link>

                    <Link to="/projects/sat" className="project">

                        <h2>Projet - Solveur SAT</h2>
                        <div className="img-container">
                            <img src={sudoku_img}></img>
                        </div>
                        
                        <p>Projet où on devait implémenter des algorithmes de backtracking utilisés pour résoudre des 
                            grilles de Sudoku + Analyse de la satisfiabilité des formules en Forme Normale Conjonctive</p>
                        <div className="tags">
                            <span>Python</span>
                        </div>

                    </Link>


                    <Link to="/projects/automate" className="project">

                        <h2>Mini Projet - Automate Analyseur</h2>
                        <div className="img-container">
                            <img src={automate_img}></img>
                        </div>
                        
                        <p>Développement d'un automate analyseur capable de reconnaître des mots donnés en entrée 
                            par un utilisateur</p>
                        <div className="tags">
                            <span>Kotlin</span>
                        </div>

                    </Link>

                    <Link to="/projects/morpion" className="project">

                        <h2>Projet Perso - Tic-Tac-Toe</h2>
                        <div className="img-container">
                            <img src={morpion_img}></img>
                        </div>
                        
                        <p>Développement d'un jeu "Morpion" avec la bibliothèque Pygame</p>
                        <div className="tags">
                            <span>Python</span>
                            <span>Pygame</span>
                        </div>

                    </Link>


                    <Link to="/projects/randomizer" className="project">

                        <h2>Projet Perso - Mario Kart 8 Deluxe Randomizer</h2>
                        <div className="img-container">
                            <img src={randomizer_img}></img>
                        </div>
                        
                        <p>Application web développée en React, permet de générer une combinaison, 
                            une liste d'objets et une liste de circuits aléatoirement</p>
                        <div className="tags">
                            <span>React</span>
                            <span>Vite</span>
                        </div>

                    </Link>


                    <Link to="/projects/running" className="project">

                        <h2>Semi-Marathon</h2>
                        <div className="img-container">
                            <RunningChart />
                        </div>
                        
                        <p>J'ai pour passion la course à pied c'est pourquoi j'ai pour objectif d'aller courir le semi-marathon de Nantes en 2026.</p>
                        <div className="tags">
                            <span>Stats</span>
                            
                        </div>

                    </Link>

                </div>


            </div>

        </section>
        </>
    )

}


export default Projects