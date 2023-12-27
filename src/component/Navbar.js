import React from "react";
import "../App.css"

const Navbar=()=>{
    return(
        <>
        <nav>
            <ul>
                <li><b><a href="#">Accueil</a></b></li>
                <li><b><a href="#">Jeux</a></b></li>
                <li><b><a href="#">Communauté <img src="https://www.docplanner.com/icons/icon-patients.svg"></img></a></b></li>
                <li><b><a href="#">Actualités</a></b></li>
            </ul>
        </nav>
        <div className="sousnav">
            <div>
                <h1 className="momo">Misez sur vos joueurs!</h1>
            </div>

        </div>
        </>
    )
}
export default Navbar;