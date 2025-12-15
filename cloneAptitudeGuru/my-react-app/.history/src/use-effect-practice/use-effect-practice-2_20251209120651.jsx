import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectPracticeTwo = () => {
  const [second, setSecond] = useState(0);
  const [data, setData] = useState([]);

  const fun1 = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  useEffect(() => {
    fun1(); // runs only once
  }, [data]); // very important – prevents infinite loop

  return (
    <div>
      <h1>Data:</h1>

      {data.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        data.map((item) => (
          <div key={item.id} style={{ marginBottom: "20px" }}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.phone}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default UseEffectPracticeTwo;
