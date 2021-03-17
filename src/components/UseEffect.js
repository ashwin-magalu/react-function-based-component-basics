import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    console.log("useEffect ran");
    document.title = `Clicked ${count} times`;

    window.addEventListener("mousemove", logMouseMove);
    return () => {
      console.log("unmounting logMouseMove");
      window.removeEventListener("mousemove", logMouseMove);
    };
  }, [count]);

  const logMouseMove = (e) => {
    console.log("Mouse moved");
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div>
      {display && (
        <h2>
          X: {x}, Y: {y}
        </h2>
      )}
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
};

export default UseEffect;
