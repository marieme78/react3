// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import "../App.css";
// // import player from "./player.json";

// const Player = ({ nom, image, equipe, nationalité, age, numerodemaillot }) => {
//   const deleteItemWithConfirmation = () => {
//     const isConfirmed = window.confirm(
//       `Voulez-vous vraiment supprimer ${nom} ?`
//     );
//     if (isConfirmed) {
//       // on recupére l'id l'element en cours de selection
//       console.log("item");
//       document.getElementById(`${nom}`).remove();
//       let items = document.getElementsByClassName("item");
//       // div a retourner s'il n'ya aucun joueur selectionner
//       if (items.length === 0) {
//         // items.length  = 0 ? <h1>Vous n'avez aucun joueur pour l'instant</h1> : null
//         console.log(items);
//         return (
//           <>
//             <div>
//               <h1>Vous n'avez aucun joueur pour l'instant</h1>
//             </div>
//           </>
//         );
//       }
//       // console.log(items);
//     }
//   };
//   // const Empty = (player) => {
//   //   var allElement = player.length;
//   //   if (allElement == 0) {
//   //     return (
//   //       <>
//   //         <div>
//   //           <h1>Vous n'avez aucun joueur pour l'instant</h1>
//   //         </div>
//   //       </>
//   //     );
//   //   }
//   // };
//   return (
//     <>
//     {}
//       {/* on donne comme valeur à l'id le nom du joueur sélectionné( chaque élément
//         parcouru a comme id le nom du joueur)  */}
//       <div className="item" id={nom}>
//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={image} />
//           <Card.Body>
//             <Card.Title>{nom}</Card.Title>
//             <Card.Text>
//               Il a {age} ans, Son numero de maillot est le {numerodemaillot}, il
//               est dans l'equipe de {equipe} et est de nationalité {nationalité}.
//             </Card.Text>
//             <div className="bouton">
//               <Button variant="primary">Découvrir plus</Button>
//               <Button
//                 variant="danger"
//                 className="deletebtn"
//                 onClick={deleteItemWithConfirmation}
//               >
//                 Delete
//               </Button>{" "}
//             </div>
//           </Card.Body>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default Player;

// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import "../App.css";
// // import player from "./player.json";

// const Player = ({
//   nom,
//   image,
//   equipe,
//   nationalité,
//   age,
//   numerodemaillot,
//   items,
// }) => {
//   const deleteItemWithConfirmation = () => {
//     const isConfirmed = window.confirm(
//       `Voulez-vous vraiment supprimer ${nom} ?`
//     );

//     if (isConfirmed) {
//       const playerElement = document.getElementById(`${nom}`);
//       if (playerElement) {
//         playerElement.remove();
//       }

//       let items = document.getElementsByClassName("item");

//       if (items.length === 0) {
//         // Si aucun joueur n'est présent, vous pouvez mettre à jour l'état ici
//         // ou effectuer toute autre action nécessaire.
//         <>
//           <h1>Vous n'avez aucon joueur</h1>
//         </>;
//         console.log("Aucun joueur");
//       }
//     }
//   };

//   return (
//     <div className="item" id={nom}>
//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src={image} />
//         <Card.Body>
//           <Card.Title>{nom}</Card.Title>
//           <Card.Text>
//             Il a {age} ans, Son numero de maillot est le {numerodemaillot}, il
//             est dans l'equipe de {equipe} et est de nationalité {nationalité}.
//           </Card.Text>
//           <div className="bouton">
//             <Button variant="primary">Découvrir plus</Button>
//             <Button
//               variant="danger"
//               className="deletebtn"
//               onClick={deleteItemWithConfirmation}
//             >
//               Delete
//             </Button>{" "}
//           </div>
//         </Card.Body>
//       </Card>
//       {items && items.length === 0 && (
//         <h1>Vous n'avez aucun joueur pour l'instant</h1>
//       )}
//     </div>
//   );
// };

// export default Player;

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
// import player from "./player.json";

const Player = ({ nom, image, equipe, nationalité, age, numerodemaillot, items }) => {
  const deleteItemWithConfirmation = () => {
    const isConfirmed = window.confirm(
      `Voulez-vous vraiment supprimer ${nom} ?`
    );

    if (isConfirmed) {
      const playerElement = document.getElementById(`${nom}`);
      if (playerElement) {
        playerElement.remove();
      }
    }
  };

  return (
    <div className="item" id={nom}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{nom}</Card.Title>
          <Card.Text>
            Il a {age} ans, Son numero de maillot est le {numerodemaillot}, il
            est dans l'equipe de {equipe} et est de nationalité {nationalité}.
          </Card.Text>
          <div className="bouton">
            <Button variant="primary">Découvrir plus</Button>
            <Button
              variant="danger"
              className="deletebtn"
              onClick={deleteItemWithConfirmation}
            >
              Delete
            </Button>{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
