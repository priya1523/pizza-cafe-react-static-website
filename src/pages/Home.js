//libraries
import React from "react";
import { Link } from "react-router-dom";
//assests
import banner from "../assets/pizza.jpeg";
//css
import "../styels/home.css";

function Home(){
    return <div className="home-p" style={{backgroundImage : `url(${banner})`}}>
        <div className="header-container">
            <h1>Pedro's Pizzeria</h1>
            <p>PIZZA TO FIT ANY TASTE</p>
            <Link to="/menu">
                <button> ORDER NOW </button>
            </Link>
        </div>
    </div>
}

export default Home