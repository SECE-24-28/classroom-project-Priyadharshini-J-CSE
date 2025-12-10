import React from "react";
import { Container12Style } from "./container12-style";

const Container12 = ({ heading, stats = [] }) => {
  return (
    <Container12Style>
      <h1 className="container12h1">{heading}</h1>
      <div className="container12">
        {stats.map((stat, index) => (
          <div key={index} className={`box${index % 2 === 0 ? '11' : '12'}`}>
            <div className="box2" style={{ backgroundColor: stat.color }}></div>
            <div className="box1">
              <h1>{stat.value}</h1>
              <p>{stat.label}</p>
            </div>
            <div className="circle1" style={{ backgroundColor: stat.color }}></div>
            <div className="circle2"></div>
            <h1 className="font" style={{ color: stat.color }}>
              <i className={stat.icon}></i>
            </h1>
          </div>
        ))}
      </div>
    </Container12Style>
  );
};

export default Container12;
