import React from "react";
import { data } from "./data";

const MappingComponent = () => {
    return (
        <div>
            {data.map((item) => (
                
                <h1>{item.name}</h1>
                    <p>{item.value}</p>
                </div>
            ))}
        </div>
    );
};

export default MappingComponent;