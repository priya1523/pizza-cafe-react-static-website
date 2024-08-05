//libraries
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//css
import "./App.css"
//components
import Footer from "./components/footer";
import Navbar from "./components/navbar";
//pages
import Home from "./pages/Home";
import Menu from "./pages/menu";
import About from "./pages/about";
import Contact from "./pages/contact";


function App(){
    return <main className="app-c">
        <Router>
            <Navbar />
            {/* Switch is replace by the Routes by version 6  */}
            <Routes> 
                <Route path="/" exact Component={Home} />
                <Route path="/menu" exact Component={Menu} />
                <Route path="/about" exact Component={About} />
                <Route path="/contact" exact Component={Contact} />
            </Routes>
            <Footer/>
        </Router>
        
    </main>
}

export default App