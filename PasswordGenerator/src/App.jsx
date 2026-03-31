import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useCallback use garnu parxa for method calling repeatedly

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*(){}[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  const passwordRef = useRef(null);
  const handleClick = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    alert("copied");
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

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
            ref={passwordRef}
          />
          <button
            className="bg-blue-500 py-2 px-3 text-white cursor-pointer"
            onClick={handleClick}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberChecked"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberChecked">Numbers</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charChecked"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charChecked">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
