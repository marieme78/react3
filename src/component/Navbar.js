import React from "react";
import "../App.css"
import { Button } from "react-bootstrap";
import { within } from "@testing-library/react";
import Player from "./Player";

const Navbar=()=>{
    const deleteAll=()=>{
        //pour demander a l'utilisateur de confirmer la suppression de tout les element de son panier(de joueurs)
        const userconfirm = window.confirm("Voulez vous supprimer votre panier?")
        //si l'utilisateur confirme on supprimera tout les joueurs selectionner 
        if(userconfirm){
            var allElements=document.querySelectorAll(".item");
            allElements.forEach((element) => {
                element.remove();
              });
        }
    }
    return(
        <>
        <nav>
            <ul>
                <Button variant="danger" onClick={deleteAll}><b>Delete All</b></Button>
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