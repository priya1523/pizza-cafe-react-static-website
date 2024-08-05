//libraries
import React from "react";
//helpers
import { MenuList } from "../helpers/menuList";
//components
import  MenuItem  from "../components/menuItem";
//css
import "../styels/menu.css";

function Menu(){
    return <div className="menu-p">
        <h1 className="menu-title">Our Menu</h1>
        <div className="menu-list">
            {
                MenuList.map((menuItem,key)=>{
                    return <MenuItem key={key} name={menuItem.name} image={menuItem.image} price={menuItem.price} />
                })
            }
        </div>
    </div>
}

export default Menu