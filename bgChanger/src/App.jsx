import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  return (
    <>
      <div
        className="w-full relative h-screen flex items-center"
        style={{ backgroundColor: color }}
      >
        <div className="w-[80%] bg-white   absolute bottom-32 left-40 rounded-4xl py-2 flex justify-around cursor-pointer">
          <div
            onClick={() => setColor("red")}
            className="bg-red-500 w-14 rounded-full px-3 py-2 mx-2"
          >
            Red
          </div>
          <div
            onClick={() => setColor("gray")}
            className="bg-gray-500 w-14 rounded-full px-3 py-2 mx-2"
          >
            Grey
          </div>
          <div
            onClick={() => setColor("yellow")}
            className="bg-yellow-300 w-14 rounded-full px-1 py-2 mx-2"
          >
            Yellow
          </div>
          <div
            onClick={() => setColor("black")}
            className="bg-black w-14 text-white rounded-full px-2 py-2 mx-2"
          >
            Black
          </div>
          <div
            onClick={() => setColor("green")}
            className="bg-green-600 w-14 rounded-full px-1 py-2 mx-2"
          >
            Green
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
