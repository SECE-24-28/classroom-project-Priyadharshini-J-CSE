import React, { useState } from "react";
import axios from "axios";
const FetchApiComponent = () => {
  const [data, setData] = useState([]);
  const fun1 = async () => {
    const response1 = await axios("https://jsonplaceholder.typicode.com/users");
    const response2 = await axios("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    const response3 = await axios("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    setData(response1.data);
    // console.log("The data from api:", data);
  };
  return (
    <div>
      <h1>API Fetch</h1>
      {
        data.length === 0 ? (
        //   <button onClick={fun1}>Fetch Data</button>
        <h1>No data is existing</h1>
        ) : (
            data.map((item)=>{
                return(
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <h2>{item.email}</h2>
                        <h3>{item.phone}</h3>
                    </div>
                )
                
            })
        )
      }
    </div>
  );
};
export default FetchApiComponent;
