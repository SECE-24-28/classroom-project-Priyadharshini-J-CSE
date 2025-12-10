import React from "react";
import { Container10Style } from "./container10-style";

const Container10 = ({ heading, description, promises = [] }) => {
  return (
    <Container10Style>
      <div className="container10">
        <h1 className="heading">{heading}</h1>
        <p className="para">{description}</p>

        <div className="bigbox">
          {promises.slice(0, 3).map((promise, index) => (
            <div
              key={index}
              className="smallbox"
              style={{ borderColor: promise.color }}
            >
              <h1>
                <span style={{ color: promise.color }}>
                  <i className={promise.icon}></i>
                </span>{" "}
                {promise.title}
              </h1>
              <p>{promise.description}</p>
            </div>
          ))}
        </div>

        <div className="bigbox">
          {promises.slice(3, 6).map((promise, index) => (
            <div
              key={index + 3}
              className="smallbox"
              style={{ borderColor: promise.color }}
            >
              <h1>
                <span style={{ color: promise.color }}>
                  <i className={promise.icon}></i>
                </span>{" "}
                {promise.title}
              </h1>
              <p>{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container10Style>
  );
};

export default Container10;
