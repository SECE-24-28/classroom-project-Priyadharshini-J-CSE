import React from "react";
import { CourseCardStyle } from "./course-card-style";

const CourseCard = ({ image, rating, title, recommended, duration, price, onBuyNow, onKnowMore }) => {
  return (
    <CourseCardStyle>
      <div className="box">
        <div className="box-up">
          <img src={image} alt={title} />
        </div>
        <div className="box-bottom">
          <h2>{rating}</h2>
          <h3>{title}</h3>
          <p>Recommended: {recommended}</p>
          <p>Duration: {duration}</p>
          <h1>{price}</h1>
          <div className="box-button">
            <button className="b1" onClick={onBuyNow}>Buy Now</button>
            <button className="b2" onClick={onKnowMore}>Know More</button>
          </div>
        </div>
      </div>
    </CourseCardStyle>
  );
};

export default CourseCard;
