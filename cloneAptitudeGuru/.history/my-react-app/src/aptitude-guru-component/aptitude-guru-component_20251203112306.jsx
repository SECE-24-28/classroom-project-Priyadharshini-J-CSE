import React from "react";
import { AptitudeGuruStyle } from "./aptitude-guru-style";

const AptitudeGuruComponent = () => {
  return (
    <AptitudeGuruStyle>  
      <div className="main-container">
      <div className="container1">
       <h1 className="container1-header1">Aptitude Guru Hem</h1>
       <h1 className="container1-header2">At AGH, we shape futures and build skills that matter.</h1>
       <i className="container1-italic">strive for your excellence.</i>
       <div className="sub-container1">
        <p>Where Success Meets Opportunity! Are you ready to embark on a transformative journey towards success? At Aptitude Guru Hem, we are committed to providing you with the essential skills and knowledge to excel in your professional endeavors. Our expert training in aptitude and coding equips you to conquer every challenge, from company interview assessments to prestigious coding platforms like LeetCode, GeeksForGeeks, HackerRank , and more.
</p>.
<div className="button-group-container1">
<button className="button1">Start your learning</button>
<button className="button2">Join Live Demo</button>
</div>
       </div>
       </div>
       <div className="container2">
       <img src="/image.png" alt="image" />

       </div>
       <div className="container3">
        <div className="container3-sub1">
        <h1>A Symbol of Excellence in Placement Training</h1>
        <p>Aptitude Guru Hem was born from the aspiration to create a learning environment that inspires greatness. Our founder, driven by personal experiences and a desire to make a difference, established the company with a mission to empower students with the right skills and mindset for success.</p>
        </div>
         <div className="container3-sub2">
          <div className="sub2-left">
            <h1>| Our Vision</h1>
            <p>Our vision is to empower individuals from diverse backgrounds to become accomplished professionals. At Aptitude Guru Hem, we believe that knowledge has the power to transcend boundaries.</p>
          </div>
          <div className="line1"></div>
          <div className="sub2-right">
            <h1>| Our Mission</h1>
            <p>Our mission is to revolutionize education by providing comprehensive training in aptitude, coding, and web/mobile development. We foster a culture of inclusivity and personal growth.</p>
          </div>
        </div>
       </div>
       <div className="container4">
        <h1></h1>
       </div>
       </div>
     </AptitudeGuruStyle>  
      );

      }
  export default AptitudeGuruComponent;