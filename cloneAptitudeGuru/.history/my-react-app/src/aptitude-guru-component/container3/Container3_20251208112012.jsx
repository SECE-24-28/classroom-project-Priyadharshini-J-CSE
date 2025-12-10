import React from "react";
import { Container3Style } from "./container3-style";

const Container3 = ({ mainHeading, mainDescription, visionTitle, visionText, missionTitle, missionText }) => {
  return (
    <Container3Style>
      <div className="container3">
        <div className="container3-sub1">
          <h1>{mainHeading}</h1>
          <p>{mainDescription}</p>
        </div>
        <div className="container3-sub2">
          <div className="sub2-left">
            <h1>{visionTitle}</h1>
            <p>{visionText}</p>
          </div>
          <div className="line1"></div>
          <div className="sub2-right">
            <h1>{missionTitle}</h1>
            <p>{missionText}</p>
          </div>
        </div>
      </div>
    </Container3Style>
  );
};

export default Container3;
