import { useState } from "react";
import { UserContext } from "./useContextData";

const UserProvider = ({ children }) => {
  const [name, setName] = useState({ name: "Suraz Agrahari" });

  const updateName = (newName) => {
    setName(newName);
  };

  return (
    <>
      <UserContext.Provider value={{ name, updateName }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
export default UserProvider;
