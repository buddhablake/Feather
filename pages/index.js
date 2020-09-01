import { useState } from "react";
import { HeadingOne } from "../components/Modules";

//This is the EDITOR

const index = () => {
  const [body, setBody] = useState([]);
  const formatSelection = (params) => {
    const selection = window.getSelection().toString();
    if (!selection.length) {
      return;
    }
    const heading = <h1>{selection}</h1>;
    setBody((body) => [...body, heading]);
  };

  return (
    <>
      <div contentEditable></div>
      <div>
        {body.map((node) => {
          return node;
        })}
      </div>
      <button onClick={formatSelection}>Get Selection</button>
    </>
  );
};

export default index;
