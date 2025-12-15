import React, { useState } from "react";
const UseStateComponent = () => {
  //   let count = 0;
  const [count, setCount] = useState(0);
  let sum = 0;
  // const fun1 = (count) => {
  //   sum = sum + count;
  //   console.log("HEllo EShwar", sum);
  // };

  const add=()=>{
     count=count+1;
     console.log(count);
  }

  const sub()=>{
    c
  }
  return (
    <div>
      <h1>Counter</h1>
      {/* <button onClick={fun1}>Increase</button> */}
      {/* <button onClick={() => fun1(1000)}>Increase</button> */}
      <h2>{count}</h2>
      <button onClick={()=>add()}>Increase</button>
      <button onClick={()=>sub()}>Decrease</button>

    </div>
  );
};
export default UseStateComponent;
