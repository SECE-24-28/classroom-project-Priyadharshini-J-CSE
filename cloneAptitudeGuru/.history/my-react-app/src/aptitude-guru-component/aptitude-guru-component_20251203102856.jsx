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
       <img src="/image.png" alt="" />

       </div>
       </div>
     </AptitudeGuruStyle>  
      );

      }
  export default AptitudeGuruComponent;