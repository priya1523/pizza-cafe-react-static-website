//libraries
import React from "react";
//assets
import MultiplePizza from "../assets/multiplePizzas.jpeg";
//css
import "../styels/about.css";

function About(){
    return <div className="about-p">
        <div className="about-top" style={{backgroundImage: `url(${MultiplePizza})`}}></div>
        <div className="about-bottom">
            <h1>ABOUT US</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor modi reprehenderit ipsam sequi 
                incidunt, voluptatibus quam voluptates, expedita, accusantium adipisci iste repellat nihil nemo 
                ad illum reiciendis repellendus facere ea? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolor modi reprehenderit ipsam sequi incidunt, voluptatibus quam voluptates,expedita, accusantium
                adipisci iste repellat nihil nemo ad illum reiciendis repellendus facere ea?
            </p>
        </div>
    </div>
}

export default About