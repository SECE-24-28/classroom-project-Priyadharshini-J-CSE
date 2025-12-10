import React from "react";
import 
const MappingComponent=()=>{
    return(
<div>
data.map((item)=>(
    <div key={item.name}>
        <p>{item.description}</p>
    </div>
));
 </div>
    );
};
export default MappingComponent;