import React, { useEffect, useState } from "react";
const UseEffectPracticeTwo = () => {
  const [second, setSecond] = useState(0);
  const [data, setData] = useState([]);
   const fun1 = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    setData(response.data);
    // console.log("The data from api:", data);
  };
  useEffect(() => {
    fun1();
 
  }, [data]);
  return (
    <div>
      <h1>data</h1>
    </div>
  );
};
export default UseEffectPracticeTwo;
