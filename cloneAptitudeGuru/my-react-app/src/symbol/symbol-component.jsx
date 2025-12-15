import React from "react";
import { SymbolStyle } from "./symbol-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity, faChalkboardTeacher, faBook, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faDiamondTurnRight } from "@fortawesome/free-solid-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";

export default function Symbol() {
    return(
        <SymbolStyle>
            <div className="main-container">
       <div className="container1">
       <h1 className="container1-header1">Aptitude Guru Hem</h1>
       <h1 className="container1-header2">At AGH, we shape futures and build skills that matter.</h1>
       <i className="container1-italic">strive for your excellence.</i>
       <div className="sub-container1">
        <p>Where Success Meets Opportunity! Are you ready to embark on a transformative journey towards success? At Aptitude Guru Hem, we are committed to providing you with the essential skills and knowledge to excel in your professional endeavors. Our expert training in aptitude and coding equips you to conquer every challenge, from company interview assessments to prestigious coding platforms like LeetCode, GeeksForGeeks, HackerRank , and more.</p>
        <div className="button-group-container1">
        <button className="button1">Start your learning</button>
        <button className="button2">Join Live Demo</button>
        </div>
       </div>
       </div>
       <div className="container2">
       <img src="/image.png" alt="image" />

       </div>
       </div>

            <div className="symbol">
               <h1 class='heading'>A Symbol of Excellence in Placement Training</h1>
               <p className="para1">Aptitude Guru Hem was born from the aspiration to create a learning environment that inspires greatness. Our founder, driven by personal experiences and a desire to make a difference, established the company with a mission to empower students with the right skills and mindset for success.</p>
               <div className="vission-mission">
                    <div className="vission">
                        <h1 className="vission-1">Our Vission</h1>
                        <p className="para2">Our vision is to empower individuals from diverse backgrounds to become accomplished professionals. At Aptitude Guru Hem, we believe that knowledge has the power to transcend boundaries.</p>
                    </div>
                    <div className="divider"></div>
                    <div className="mission">
                        <h1 className="mission-1">Our Mission</h1>
                        <p className="para3">Our mission is to revolutionize education by providing comprehensive training in aptitude, coding, and web/mobile development. We foster a culture of inclusivity and personal growth..</p>
                    </div>
               </div>
            </div>
            <div className="pill-box">
        <h1>Learners Today, Leaders Tomorrow</h1>
        <p className="pill-para">
          With our continuous research and development, we provide<br></br> you with an
          excellent Aptitude training.
        </p>
      </div>
      <div className="impact-title">
        <h1>Impact at a <span>Glance</span></h1>
      </div>
      <div className="container-full">

        <div className="upper-container">
          <div className="container-item1">
            <div>
              <h2>Colleges</h2>
              <p>100+</p>
            </div>
            <img src="https://aptitudeguruhem.com/static/media/school.534dd7db3daaf4c66eff.png" alt="college" className="icon" />
          </div>

          <div className="container-item2">
            <div>
              <h2>Study Materials</h2>
              <p>1000+</p>
            </div>
            <img src="https://aptitudeguruhem.com/static/media/books.d290f0589bd8ed867b77.png" alt="books" className="icon" />
          </div>

        </div>

        <div className="lower-container">
          <div className="container-item3">
            <div>
              <h2>Students</h2>
              <p>1,00,000+</p>
            </div>
            <img src="https://aptitudeguruhem.com/static/media/bag.52185bac9246c85ed48f.png" alt="students" className="icon" />
          </div>

          <div className="container-item4">
            <div>
              <h2>Professional Trainers</h2>
              <p>150+</p>
            </div>
            <img src="https://aptitudeguruhem.com/static/media/people.0b6f76ebbf0b209884e7.png" alt="trainers" className="icon" />
          </div>

        </div>

      </div>
      
<h1 className="title">Trusted By</h1>
        <div className="parent">

        {/* CARD 1 */}
        <div className="child cyan">
          <div className="icon-badge cyan">
            <FontAwesomeIcon icon={faUniversity} />
          </div>
          <span className="numbers">100+</span>
          <span className="details">COLLEGES</span>
          <div className="bottom-bar cyan"></div>
        </div>

        {/* CARD 2 */}
        <div className="child blue">
          <div className="icon-badge blue">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
          </div>
          <span className="numbers">150</span>
          <span className="details">PROFESSIONAL<br />TRAINERS</span>
          <div className="bottom-bar blue"></div>
        </div>

        {/* CARD 3 */}
        <div className="child orange">
          <div className="icon-badge orange">
            <FontAwesomeIcon icon={faBook} />
          </div>
          <span className="numbers">1000+</span>
          <span className="details">STUDY MATERIALS<br />AGH LMS</span>
          <div className="bottom-bar orange"></div>
        </div>

        {/* CARD 4 */}
        <div className="child red">
          <div className="icon-badge red">
            <FontAwesomeIcon icon={faUserGraduate} />
          </div>
          <span className="numbers">1,00,000</span>
          <span className="details">STUDENTS<br />B2B Placement Training</span>
          <div className="bottom-bar red"></div>
        </div>

      </div>

      <div className="container">
            <h1 className="title">OUR PROMISE</h1>
            <p className="para">As part of our high quality service, we'd like to offer something extra too.</p>
            <div className="box1">
                <div className="box1-1">
                    <div className="icon">
                    <FontAwesomeIcon icon={faLaptopCode} style={{ color: "rgb(68, 178, 179)", fontSize: "40px"}}/>
                    <h3 className="title1">Top Code Quality</h3>
                    </div>
                    <p className="para1">We are committed to providing high-quality education that meets the needs of our students and prepares them for success in their careers.</p>
                </div>
                <div className="box1-2">
                    <div className="icon">
                    <FontAwesomeIcon icon={faMobile} style={{ color: "rgb(239, 175, 75)", fontSize: "40px"}}/>
                    <h3 className="title2">Responsive</h3>
                    </div>
                    <p className="para2">We understand the value of a positive attitude, timely responsiveness, and adaptability. We're dedicated to attentively listening and leveraging our utmost capabilities to serve you.</p>
                </div>
                <div className="box1-3">
                    <div className="icon">
                    <FontAwesomeIcon icon={faPeopleGroup} style={{ color:  "rgb(0, 189, 235)" , fontSize: "40px"}} />
                    <h3 className="title3">Rockstar Team</h3>
                    </div>
                    <p className="para3">Our expertise is our unique selling proposition. You'll have access to an all-star team of experienced professionals fully dedicated to serving you, armed with coding skills that are truly exceptional.</p>
                </div>
                  <div className="box2-1">
                    <div className="icon">
                    <FontAwesomeIcon icon={faDiamondTurnRight} style={{ color: "rgb(134, 74, 249)", fontSize: "40px"}}/>
                    <h3 className="title4">Fast Turn-arounds</h3>
                    </div>
                    <p className="para4">The importance of speed is on par with quality for us. We are swift, nimble, and capable of providing high-quality code within a timeframe that suits your preferences.</p>
                </div>
            </div>
           
            <div className="box2">
                
                <div className="box2-2">
                    <div className="icon">
                    <FontAwesomeIcon icon={faLifeRing} style={{ color: "rgb(252, 41, 71)", fontSize: "40px"}}/>
                    <h3 className="title5">Life-time support</h3>
                    </div>
                    <p className="para5">Our commitment to code quality is exemplified by our enduring support. If any bugs happen to emerge in the future, feel free to reach out to us for assistance.</p>
                </div>
                <div className="box2-3">
                    <div className="icon">  
                    <FontAwesomeIcon icon={faShield} style={{ color: "rgb(50, 199, 102)", fontSize: "40px"}}/>
                    <h3 className="title6">Secured Agreement</h3>
                    </div>
                    <p className="para6">The creative work you receive is entirely your own, and we unequivocally respect that. We assure you of our commitment and readiness to formalize this with a Non-Disclosure Agreement (NDA).</p>
                </div>
            </div>
        </div>


                  <div className="getintouch-outer-container">
                <div className="getintouch-inner-container">

                    {/* LEFT TEXT SECTION */}
                    <div className="getintouch-left-container">
                        <h1>GET IN TOUCH</h1>
                        <p>
                            Have questions or feedback? We're here to help.<br />
                            Send us a message and we'll respond soon.
                        </p>
                        <button>Contact Us</button>
                    </div>

                    {/* RIGHT IMAGE + CIRCLES */}
                    <div className="getintouch-right-container">
                        <div className="circle-big"></div>
                        <div className="circle-small"></div>

                        <img
                            src="https://aptitudeguruhem.com/static/media/get-in-touch.8c521c235d4bd711343c.jpg"
                            alt="getintouch"
                            className="getintouch-image"
                        />
                    </div>

                </div>
            </div>
        </SymbolStyle>
)
}
