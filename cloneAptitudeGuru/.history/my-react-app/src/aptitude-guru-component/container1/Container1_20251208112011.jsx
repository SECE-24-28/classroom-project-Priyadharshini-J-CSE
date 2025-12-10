import React from "react";
import { Container1Style } from "./container1-style";

const Container1 = ({ heading1, heading2, italic, description, button1Text, button2Text, onButton1Click, onButton2Click }) => {
  return (
    <Container1Style>
      <div className="container1">
        <h1 className="container1-header1">{heading1}</h1>
        <h1 className="container1-header2">{heading2}</h1>
        <i className="container1-italic">{italic}</i>
        <div className="sub-container1">
          <p>{description}</p>
          <div className="button-group-container1">
            <button className="button1" onClick={onButton1Click}>{button1Text}</button>
            <button className="button2" onClick={onButton2Click}>{button2Text}</button>
          </div>
        </div>
      </div>
    </Container1Style>
  );
};

export default Container1;
