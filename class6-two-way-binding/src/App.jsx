import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (elem) => {
    elem.preventDefault();
    console.log("submitted");

    setTitle('')
  };

  return (
    <div>
      <form
        onSubmit={(e) => {submitHandler(e);}}>
        <input
          value={title}
          onChange={(val) => {setTitle(val.target.value);}}
          type="text"
          placeholder="Enter here"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
