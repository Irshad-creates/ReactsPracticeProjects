import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function Increase(){
    setNum(num+1)
   }
  function Decrease(){
    setNum(num-1)
   }
  function IncreaseJump(){
    setNum(num+5)
   }
  function DecreaseJump(){
    setNum(num-5)
   }
  function ResetNum(){
    setNum(0)
  }

  return (
    <div className="p-5 ">
      <h1 className="text-9xl w-50 h-50 bg-gray-400 flex items-center justify-center m-10">{num}</h1>
      <div className=" flex gap-5 mb-10">
        <button onClick={Increase} className="px-5 py-3 bg-gray-400 rounded-lg ">
          Increase
        </button>
        <button onClick={Decrease} className="px-5 py-3 bg-gray-400 rounded-lg ">
          Decrease
        </button>
      </div>
      <div className=" flex gap-5 mb-10">
        <button onClick={IncreaseJump} className="px-5 py-3 bg-gray-400 rounded-lg ">
          Increase by 5
        </button>
        <button onClick={DecreaseJump} className="px-5 py-3 bg-gray-400 rounded-lg ">
          Decrease by 5
        </button>
      </div>
      <button onClick={ResetNum} className="px-5 py-3 bg-gray-400 rounded-lg ">Reset</button>
    </div>
  );
};

export default App;
