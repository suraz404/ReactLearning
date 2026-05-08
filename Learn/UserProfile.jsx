import { useContext } from "react";
import { UserContext } from "./useContextData";

const UserProfile = () => {
  const { name } = useContext(UserContext);
  return <div>{name.name}</div>;
};

export default UserProfile;
