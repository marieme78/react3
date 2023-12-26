import React from "react";
import Player from "./Player";
import player from "./player.json";
import "../App.css";
const Playerlist = () => {
  return (
    <>
      <div className="cardplayer">
        {player.map((play) => (
          <Player {...play} />
        ))}
      </div>
    </>
  );
};
export default Playerlist;
