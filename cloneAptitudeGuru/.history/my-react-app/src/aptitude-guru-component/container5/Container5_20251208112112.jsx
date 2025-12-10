import React from "react";
import { Container5Style } from "./container5-style";

const Container5 = ({ heading, description }) => {
  return (
    <Container5Style>
      <div className="container5">
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </Container5Style>
  );
};

export default Container5;
