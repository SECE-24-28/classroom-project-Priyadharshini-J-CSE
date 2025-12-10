import React from "react";
import { Container11Style } from "./container11-style";

const Container11 = ({ imageUrl, altText, heading, description, points = [] }) => {
  return (
    <Container11Style>
      <div className="container11">
        <div>
          <img src={imageUrl} alt={altText} />
        </div>
        <div className="text">
          <h1>{heading}</h1>
          <p>{description}</p>
          {points.map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </div>
      </div>
    </Container11Style>
  );
};

export default Container11;
