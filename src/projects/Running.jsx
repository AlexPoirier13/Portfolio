import "../styles/display_project.css"
import { use, useEffect, useState } from "react";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function Running(){

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
            <h1 className="title"><span>Semi Marathon Stats</span></h1>
            
            <div className="link">
                <a href="https://docs.google.com/spreadsheets/d/1t2hCkY7UOB4mYpxJaDoNFrtkuZUPxT2HaNPdl-JaEQQ/edit?gid=0#gid=0" target="_blank">➜ Voir stats</a>
            </div>
            

            <div className="projects_details">
            
                
            </div>    



        </div>
    )


}


function useBackground(){

    useEffect(() => {
        document.title = "Portfolio - Semi Marathon Stats"
    })

}

export default Running


