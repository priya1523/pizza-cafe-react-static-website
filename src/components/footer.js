//libraries
import React from "react";
//icons
import {Instagram,Twitter,Facebook,LinkedIn } from "@mui/icons-material";
//css
import "../styels/footer.css";

function Footer(){
    return <div className="footer-c">
        <div className="social-media">
            <Instagram/> <Twitter/> <Facebook/> <LinkedIn/>
        </div>
        <p>&copy; 2024 pedrotechpizza.com</p>
    </div>
}

export default Footer