//libraries
import React from "react";
//assets
import PizzaLeft from "../assets/pizzaLeft.jpg";
//css
import "../styels/contact.css";

function Contact(){
    return <div className="contact-p">
        <div className="contact-left" style={{backgroundImage: `url(${PizzaLeft})`}}></div>
        <div className="contact-right">
            
            <h1>Contact Us</h1>

            <form id="contact-form" method="POST">

                <label htmlFor="name">Full Name : </label>
                <input tyep="text" name="name" placeholder="Enter full name..." />

                <label htmlFor="email">Email  : </label>
                <input type="email" name="email" placeholder="Enter Email..." />

                <label htmlFor="message">Message : </label>
                <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>

                <button type="submit"> Send Message </button>

            </form>
        </div>
    </div>
}

export default Contact