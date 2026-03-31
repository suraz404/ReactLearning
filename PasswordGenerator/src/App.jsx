import React, { useCallback, useState } from "react";

const App = () => {
  const [length, _setLength] = useState(8);
  const [numberAllowed, _setNumberAllowed] = useState(false);
  const [charAllowed, _setCharAllowed] = useState(false);
  const [password, setPasword] = useState("");

  //useCallback use garnu parxa for method calling repeatedly

  const _passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*(){}[]";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPasword(pass);
  }, [length, numberAllowed, charAllowed, setPasword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 bg-gray-500">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            placeholder="password"
            readOnly
            className="outline-none w-full py-2 px-3 text-black bg-white"
            value={password}
          />
          <button className="bg-blue-500 py-2 px-3 text-white ">Copy</button>
        </div>
        <input type="range" value={length} min={8} max={12} />
        {length}
      </div>
    </>
  );
};

export default App;
