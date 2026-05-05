import { useState } from "react";

const UseState = () => {
  const [friends, setFriends] = useState(["Suraz", "Avishek", "Adarsh"]);
  const addOneFriend = () => {
    setFriends([...friends, "Nirmal"]);
  };
  const deleteName = () => {
    setFriends(friends.filter((f) => f !== "Avishek"));
  };
  const updateName = () => {
    setFriends(friends.map((f) => (f === "Suraz" ? "Suraz Agrahari" : f)));
  };

  return (
    <div>
      <ul>
        {friends.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <button onClick={addOneFriend}>Add</button>
      <br />
      <button onClick={deleteName}>Delete </button>
      <br />
      <button onClick={updateName}>Update</button>
    </div>
  );
};

export default UseState;
