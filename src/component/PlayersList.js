import React from "react";
import Player from "./Player";
import player from "./player.json";
import "../App.css";
const Playerlist = () => {
  
  return (
    <>
      <div className="cardplayer">
        {player.map((play) => (
          // avec spread operator (...)
          <Player {...play} />
          // sans spread operator
          // <Player 
          //   nom = {play.nom}
          //   nationalité={play.nationalité}
          //   age={play.age}
          //   numerodemaillot={play.numerodemaillot}
          //   image={play.image}
          //   equipe={play.equipe}
          // />
        ))
        }
      </div>
    </>
  );
};
export default Playerlist;
