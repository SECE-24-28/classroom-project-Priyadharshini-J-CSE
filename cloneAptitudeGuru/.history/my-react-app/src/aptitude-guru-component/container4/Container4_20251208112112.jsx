import React from "react";
import { Container4Style } from "./container4-style";

const Container4 = ({ heading, description }) => {
  return (
    <Container4Style>
      <div className="container4">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </Container4Style>
  );
};

export default Container4;
