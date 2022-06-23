import React, { useState } from "react";

//import components
import Header from "./Header";
import Player from "./Player";

const App = () => {
  const [players,setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }
  ]);

  const handleScoreChange = (index, delta) => {
    setPlayers(prevPlayers => {
      const updatedPlayers = [ ...prevPlayers];
      const updatedPlayer = { ...updatedPlayers[index] };
      updatedPlayer.score += delta;
      updatedPlayers[index] = updatedPlayer;
      return updatedPlayers;
    });
  }
  
  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter( p => p.id !== id ));
  }

  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayers={players.length} 
      />

      {/* Players list */}
      {players.map( (player, index ) =>
        <Player 
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()} 
          index={index}
          removePlayer={handleRemovePlayer} 
          changeScore={handleScoreChange}          
        />
      )}
    </div>
  ); 
}

export default App;
