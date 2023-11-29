import { useState } from "react"


function App() {
  const [color, setColor] = useState("#fef2f2")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className=" text-center text-blck-400 text-4xl font-bold"> 
          Please Click Button to Change Background Color
        </div>
      <div className="fixed flex flex-wrap justify-center items-center inset-x-0 inset-y-0">
  <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-full">
    
    <button
      onClick={() => setColor("red")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: "red" }}
    >
      Red
    </button>
    <button
      onClick={() => setColor("green")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: "green" }}
    >
      Green
    </button>
    <button
      onClick={() => setColor("blue")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: "blue" }}
    >
      Blue
    </button>
    <button
      onClick={() => setColor("lime")}
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{ backgroundColor: "lime" }}
    >
      Lime
    </button>
    <button
      onClick={() => setColor("indigo")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: "indigo" }}
    >
      Indigo
    </button>
    <button
      onClick={() => setColor("Fuchsia")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: "Fuchsia" }}
    >
      Fuchsia
    </button>
    <button
      onClick={() => setColor("orange")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: "orange" }}
    >
      Orange
    </button>
    <button
      onClick={() => setColor("cyan")}
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{ backgroundColor: "cyan" }}
    >
      Cyan
    </button>
    <button
      onClick={() => setColor("gray")}
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{ backgroundColor: "gray" }}
    >
      Gray
    </button>
    <button
      onClick={() => setColor("white")}
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{ backgroundColor: "white" }}
    >
      White
    </button>
    
    <button
      onClick={() => setColor("yellow")}
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{ backgroundColor: "yellow" }}
    >
      Yellow
    </button>
    <button
      onClick={() => setColor("pink")}
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{ backgroundColor: "pink" }}
    >
      Pink
    </button>
    <button
      onClick={() => setColor("purple")}
      className="outline-none px-4 py-1 rounded-full text-pink shadow-lg"
      style={{ backgroundColor: "purple" }}
    >
      Purple
    </button>
    <button
      onClick={() => setColor("black")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: "black" }}
    >
      Black
    </button>
  </div>
</div>
    </div>
  )
}

export default App