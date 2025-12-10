import React from "react";
import { Container9Style } from "./container9-style";

const Container9 = ({ heading, subHeading, stats = [] }) => {
  return (
    <Container9Style>
      <div className="container9">
        <h1 className="container9-h1">
          {heading} <span>{subHeading}</span>
        </h1>
        <div className="full-box">
          {stats.map((stat, index) => (
            <div key={index} className="semi-box">
              <div className="box" style={{ backgroundColor: stat.bgColor }}>
                <div>
                  <h2>{stat.label}</h2>
                  <h1>{stat.value}</h1>
                </div>
                <img src={stat.image} alt={stat.label} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container9Style>
  );
};

export default Container9;
