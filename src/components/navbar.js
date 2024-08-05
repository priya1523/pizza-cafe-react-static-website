//libraries
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//assests
import logo from "../assets/pizzaLogo.png"
//icons
import ReorderIcon from '@mui/icons-material/Reorder';
//css
import "../styels/navbar.css";

function Navbar(){

    const [openLinks,setOpenLinks] = useState(false);
    
    const toggleNavbar = () =>{
        setOpenLinks(!openLinks);
    }

    useEffect(()=>{
        const handleResize = () =>{
            if (window.innerWidth > 600){
                setOpenLinks(false);
            }
        };
        window.addEventListener("resize",handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    },[]);

    return <div className="navbar-c">
        <div className="nav-left" id={openLinks ? "open" : "close"}>
            <img src={logo} />
            <div className="hidden-links">
                <Link to="/" >Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
        <div className="nav-right">
            <Link to="/" >Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon/>
            </button>
        </div>
    </div>
}

export default Navbar