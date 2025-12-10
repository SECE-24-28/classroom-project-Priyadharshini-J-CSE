import React from "react";
import { Container6Style } from "./container6-style";
import CourseCard from "../course-card/CourseCard";

const Container6 = ({ courses = [] }) => {
  return (
    <Container6Style>
      <div className="container6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </Container6Style>
  );
};

export default Container6;
