import "../styles/Running.css"

import semi_2026 from '../assets/runs/semi_nantes2026.png'
import urban_2026 from '../assets/runs/urban_vannes2026.png'
import foulees_bleues from '../assets/runs/foulees_bleues_10k.png'
import kastell_rose_2026 from "../assets/runs/kastell_rose_2026.png"
import { Link } from "react-router-dom";
import MonthlyDistanceChart from "../components/MonthlyDistanceChart";

function Running(){

    return(
        <>
            <section id="running">
            <div className="running_block">
                <h1 className="title"><span>Running</span></h1>
                <div className="section-divider">
                    <span>General Stats</span>
                </div>
                <div className="stats_grid">
                    <div className="stat_card">
                        <span className="card_title">Number of Runs</span>
                        <span className="card_value">77</span>
                    </div>
                    <div className="stat_card">
                        <span className="card_title">Distance run (km)</span>
                        <span className="card_value">770</span>
                    </div>
                    <div className="stat_card">
                        <span className="card_title">Longest run (km)</span>
                        <span className="card_value">21,34</span>
                    </div>
                </div>
                <div className="section-divider">
                    <span>Records 🎖️</span>
                </div>
                <div className="stats_grid">
                    <div className="stat_card">
                        <span className="card_title">1 km</span>
                        <span className="card_value">4:22</span>
                    </div>
                    <div className="stat_card">
                        <span className="card_title">5 km</span>
                        <span className="card_value">25:03</span>
                    </div>
                    <div className="stat_card">
                        <span className="card_title">10 km</span>
                        <span className="card_value">50:22</span>
                    </div>
                    <div className="stat_card">
                        <span className="card_title">half-marathon</span>
                        <span className="card_value">2:07:46</span>
                    </div>
                </div>
                <div className="section-divider">
                    <span>Recent Races 🏁</span>
                </div>
                <div className="races_grid">

                    <div className="race_container">
                        <div className="strava_img">
                            <img src={kastell_rose_2026}></img>
                        </div>
                        <div className="results_container">
                            <span className="result_title">Kastell Rose (10 km) - Châteaubriant 2026</span>
                            <span className="result_date">4 Octobre 2026</span>
                            <span className="result_time">50:22</span>
                        </div>
                    </div>

                    <Link to="/runs/semi_nantes_2026" className="race_container">
                        <div className="strava_img">
                            <img src={semi_2026}></img>
                        </div>
                        <div className="results_container">
                            <span className="result_title">Semi-marathon de Nantes 2026</span>
                            <span className="result_date">26 Avril 2026</span>
                            <span className="result_time">2:07:46</span>
                        </div>
                    </Link>
                    
                    <div className="race_container">
                        <div className="strava_img">
                            <img src={urban_2026}></img>
                        </div>
                        <div className="results_container">
                            <span className="result_title">Urban Trail de Vannes 2026</span>
                            <span className="result_date">5 Avril 2026</span>
                            <span className="result_time">1:14:47</span>
                        </div>
                    </div>

                    <div className="race_container">
                        <div className="strava_img">
                            <img src={foulees_bleues}></img>
                        </div>
                        <div className="results_container">
                            <span className="result_title">Les Foulées Bleues (10km) - Châteaubriant 2026</span>
                            <span className="result_date">29 Mars 2026</span>
                            <span className="result_time">0:53:47</span>
                        </div>
                    </div>

                </div>

                <div className="section-divider">
                    <span>Distance Chart</span>
                </div>
                <MonthlyDistanceChart />

            </div>
            </section>
        </>
    )


}

export default Running