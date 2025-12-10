import React from "react";
import 
const MappingComponent=()=>{
    return(
<div>
data.map((item)=>(
    <div key={item.id}>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
    </div>
));
 </div>
    );
};
export default MappingComponent;