import React from "react";
import { data } from "./data";

const MappingComponent = () => {
    return (
        <div>
            {data.map((item) => (
                <div key={item.name}>
                    <p>{item.value}</p>
                </div>
            ))}
        </div>
    );
};

export default MappingComponent;