import React from "react";
import { Container8Style } from "./container8-style";

const Container8 = ({ heading, description, buttonText, onContactClick, imageUrl, altText }) => {
  return (
    <Container8Style>
      <div className="container8">
        <div className="left">
          <h1>{heading}</h1>
          <p>{description[0]}</p>
          <p>{description[1]}</p>
          <button onClick={onContactClick}>{buttonText}</button>
        </div>
        <div className="right">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <img src={imageUrl} alt={altText} />
        </div>
      </div>
    </Container8Style>
  );
};

export default Container8;
