import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./component/PlayersList.js";
import Navbar from "./component/Navbar.js";
function App() {
  return (
    <div>
      <Navbar/>
      <PlayersList/>
    </div>
  );
}

export default App;
