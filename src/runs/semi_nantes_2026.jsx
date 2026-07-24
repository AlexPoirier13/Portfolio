import "../styles/display_project.css"
import { use, useEffect, useState } from "react";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import RunningChart from "../components/RunningChart.jsx";


function Semi_nantes(){
    useBackground()

    return(
        <>
        <Header />
        <Display_stats />
        <Footer />
        </>
    )

}


function Display_stats(){
    
    const test = ["6:08", "5:25", "5:24", "5:29", "5:30", "5:40", "5:28", "5:38", "5:38", "5:58", "5:58", "5:42", "6:03", "6:01", "6:12", "5:39", "6:22", "6:41", "7:25", "6:22", "6:15"]
    const paces = [6.08, 5.25, 5.24, 5.29, 5.30, 5.40, 5.28, 5.38, 5.38, 5.58, 5.58, 5.42, 6.03, 6.01, 6.12, 5.39, 6.22, 6.41, 7.25, 6.22, 6.15]
    const km = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    
    return(
            <div className="display_projet">
                <h1 className="title"><span>Semi-marathon de Nantes 2026 - Stats</span></h1>
                <div className="run_stat">
                    <RunningChart label={km} donnes={paces}/>
                </div>
                

            </div>
        )
}


function useBackground(){

    useEffect(() => {
        document.title = "Portfolio - Semi de Nantes - Stats"
    })

}

export default Semi_nantes