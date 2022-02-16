import React from "react";
import { useState, useEffect } from "react";

const App1 = () => {
  const [resource, setResourcetype] = useState();

  useEffect(() => {
    // console.log("render");

    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
  .then(response => response.json())
  .then(json => console.log(json))
  }, [resource]);

  console.log("outside the useEffect");

  return (
    <div>
      <button onClick={() => {setResourcetype("posts")}}>POST</button>
      <button
        onClick={() => {
          setResourcetype("users");
        }}
      >
        user 
      </button>
      <button
        onClick={() => {
          setResourcetype("comments");
        }}
      >
        {" "}
        comment{" "}
      </button>
      <h1> {resource} </h1>{" "}
    </div>
  );
};

export default App1;
