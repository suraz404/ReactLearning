import { useEffect, useState } from "react";

const LocalStorage = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  const handleClear = () => {
    setName("");
  };
  return (
    <div>
      <h1>Your Name : {name}</h1>
      <input type="text" name="name" value={name} onChange={handleOnChange} />
      <button onClick={handleClear}> Clear</button>
    </div>
  );
};

export default LocalStorage;
