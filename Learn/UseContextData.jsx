import { dataContext } from "./UserContext";
import { useContext } from "react";

const useContextData = () => {
  const data = useContext(dataContext);
  return <div>{data}</div>;
};

export default useContextData;
