import React, { useState } from "react";
import axios from "axios";

const FetchApiComponent = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  const fun1 = async () => {
    try {
      const response1 = await axios.get("https://jsonplaceholder.typicode.com/users");
      const response2 = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const response3 = await axios.get("https://jsonplaceholder.typicode.com/comments");

      setData1(response1.data); 
      setData2(response2.data); 
      setData3(response3.data); 
    } catch (error) {
      console.log("API Error:", error);
    }
  };

  return (
    <div>
      <h1>API Fetch</h1>

      {data1.length === 0 && data2.length === 0 && data3.length === 0 ? (
        <button onClick={fun1}>Fetch Data</button>
      ) : (
        <div>

          {/* USERS DATA */}
          <h2>Users:</h2>
          {data1.map((user) => (
            <div key={user.id} style={{ marginBottom: "20px" }}>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          ))}

          {/* POSTS DATA */}
          <h2>Posts:</h2>
          {data2.slice(0, 5).map((post) => (
            <div key={post.id} style={{ marginBottom: "20px" }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}

          {/* COMMENTS DATA */}
          <h2>Comments:</h2>
          {data3.slice(0, 5).map((comment) => (
            <div key={comment.id} style={{ marginBottom: "20px" }}>
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default FetchApiComponent;
