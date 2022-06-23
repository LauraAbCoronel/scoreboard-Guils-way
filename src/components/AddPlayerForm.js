import React, {useState} from "react";

const AddPlayerForm = (props) => {
  const [value, setValue] = useState('');
  const [prevPlayerId, updatePrevPlayerId] = useState(4);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlayer = {
      name: value,
      score: 0,
      id: prevPlayerId + 1
    };
    updatePrevPlayerId(prev => prev +1);
    props.addPlayer(prevPlayers => [...prevPlayers, newPlayer]);
    setValue('');
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Enter a player's name"
      />
      <input
        type="submit"
        value="Add Player"
      />
    </form>
  );
}

export default AddPlayerForm;