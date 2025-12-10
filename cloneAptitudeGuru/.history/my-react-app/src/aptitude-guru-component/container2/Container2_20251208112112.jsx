import React from "react";
import { Container2Style } from "./container2-style";

const Container2 = ({ imageUrl, altText }) => {
  return (
    <Container2Style>
      <div className="container2">
        <img src={imageUrl} alt={altText} />
      </div>
    </Container2Style>
  );
};

export default Container2;
