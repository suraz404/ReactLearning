import { useContext, useState } from "react";
import { UserContext } from "./useContextData";

const UpdateUser = () => {
  const { updateName } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateName({ name: newName });
    setNewName(" hello");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button type="submit">Change Name</button>
      </form>
    </div>
  );
};

export default UpdateUser;
