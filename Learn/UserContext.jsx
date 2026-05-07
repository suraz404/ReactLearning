import { createContext } from "react";

export const dataContext = createContext();

const name = "SURAz";

const UserContext = ({ children }) => {
  return <dataContext.Provider value={name}>{children}</dataContext.Provider>;
};

export default UserContext;
