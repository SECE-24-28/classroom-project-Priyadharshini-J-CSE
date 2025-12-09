import React from "react";
import { AptitudeGuruStyle } from "./aptitude-guru-style";
import Container1 from "./container1/Container1";
import Container2 from "./container2/Container2";
import Container3 from "./container3/Container3";
import Container4 from "./container4/Container4";
import Container5 from "./container5/Container5";
import Container6 from "./container6/Container6";
import Container8 from "./container8/Container8";
import Container9 from "./container9/Container9";
import Container10 from "./container10/Container10";
import Container11 from "./container11/Container11";
import Container12 from "./container12/Container12";

const AptitudeGuruComponent = () => {
  const courses = [
    {
      id: 1,
      image: "/image1.png",
      rating: "⭐⭐⭐⭐⭐ 5",
      title: "Aptitude Complete Preparation",
      recommended: "Final year students",
      duration: "1 year",
      price: "₹12,000",
      onBuyNow: () => alert("Buy Now clicked for course 1"),
      onKnowMore: () => alert("Know More clicked for course 1")
    },
    {
      id: 2,
      image: "/image2.png",
      rating: "⭐⭐⭐⭐ 4",
      title: "Technical Complete Preparation",
      recommended: "Final year students",
      duration: "1 year",
      price: "₹12,000",
      onBuyNow: () => alert("Buy Now clicked for course 2"),
      onKnowMore: () => alert("Know More clicked for course 2")
    },
    {
      id: 3,
      image: "/image3.png",
      rating: "⭐⭐⭐ 3",
      title: "Web Development Complete",
      recommended: "Final year students",
      duration: "1 year",
      price: "₹29,999",
      onBuyNow: () => alert("Buy Now clicked for course 3"),
      onKnowMore: () => alert("Know More clicked for course 3")
    }
  ];

  const promises = [
    {
      color: "#39C4C4",
      icon: "fa-solid fa-laptop-code",
      title: "Top Code Quality",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita beatae eaque fuga doloremque nam dolore dolores a."
    },
    {
      color: "#F5E50A",
      icon: "fa-solid fa-tablet-screen-button",
      title: "Responsive Design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita beatae eaque fuga doloremque nam dolore dolores a."
    },
    {
      color: "#0ABEF5",
      icon: "fa-solid fa-people-group",
      title: "Team Support",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita beatae eaque fuga doloremque nam dolore dolores a."
    },
    {
      color: "#780AF5",
      icon: "fa-solid fa-diamond-turn-right",
      title: "Premium Features",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita beatae eaque fuga doloremque nam dolore dolores a."
    },
    {
      color: "#F50A8F",
      icon: "fa-solid fa-life-ring",
      title: "24/7 Support",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita beatae eaque fuga doloremque nam dolore dolores a."
    },
    {
      color: "#1DE262",
      icon: "fa-solid fa-shield-halved",
      title: "Secure",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita beatae eaque fuga doloremque nam dolore dolores a."
    }
  ];

  const stats = [
    {
      label: "Colleges",
      value: "100+",
      bgColor: "rgb(255, 223, 228)",
      image: "/image5.png"
    },
    {
      label: "Students",
      value: "1,00,000",
      bgColor: "rgb(226, 240, 250)",
      image: "/image6.png"
    },
    {
      label: "Study Materials",
      value: "1000+",
      bgColor: "rgb(222, 255, 236)",
      image: "/image7.png"
    },
    {
      label: "Professional Trainer",
      value: "100+",
      bgColor: "rgb(255, 230, 199)",
      image: "/image8.png"
    }
  ];

  const trustedStats = [
    {
      value: "100+",
      label: "COLLEGES",
      color: "rgb(0, 197, 190)",
      icon: "fa-solid fa-building-columns"
    },
    {
      value: "150+",
      label: "Professional Trainers",
      color: "rgb(0, 189, 235)",
      icon: "fa-solid fa-person-chalkboard"
    },
    {
      value: "1000+",
      label: "Study Materials",
      color: "rgb(243, 176, 79)",
      icon: "fa-solid fa-book"
    },
    {
      value: "1,00,000",
      label: "Students",
      color: "rgb(250, 63, 70)",
      icon: "fa-solid fa-graduation-cap"
    }
  ];
  return (
    <AptitudeGuruStyle>
      <Container1
        heading1="Aptitude Guru Hem"
        heading2="At AGH, we shape futures and build skills that matter."
        italic="strive for your excellence."
        description="Where Success Meets Opportunity! Are you ready to embark on a transformative journey towards success? At Aptitude Guru Hem, we are committed to providing you with the essential skills and knowledge to excel in your professional endeavors. Our expert training in aptitude and coding equips you to conquer every challenge, from company interview assessments to prestigious coding platforms like LeetCode, GeeksForGeeks, HackerRank, and more."
        button1Text="Start your learning"
        button2Text="Join Live Demo"
        onButton1Click={() => alert("Start learning clicked")}
        onButton2Click={() => alert("Join live demo clicked")}
      />

      <Container2 imageUrl="/image.png" altText="Hero Image" />

      <Container3
        mainHeading="A Symbol of Excellence in Placement Training"
        mainDescription="Aptitude Guru Hem was born from the aspiration to create a learning environment that inspires greatness. Our founder, driven by personal experiences and a desire to make a difference, established the company with a mission to empower students with the right skills and mindset for success."
        visionTitle="| Our Vision"
        visionText="Our vision is to empower individuals from diverse backgrounds to become accomplished professionals. At Aptitude Guru Hem, we believe that knowledge has the power to transcend boundaries."
        missionTitle="| Our Mission"
        missionText="Our mission is to revolutionize education by providing comprehensive training in aptitude, coding, and web/mobile development. We foster a culture of inclusivity and personal growth."
      />

      <Container4
        heading="Learners Today, Leaders Tomorrow"
        description="With our continuous research and development, we provide you with an excellent Aptitude training."
      />

      <Container5 heading="Our Courses" description="Explore a wide range of curated courses for every learner. Structured to enhance knowledge, skills, and career growth." />

      <Container6 courses={courses} />

      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <h1 style={{ fontSize: "35px", fontWeight: "bold" }}>View More →</h1>
      </div>

      <Container8
        heading="GET IN TOUCH"
        description={["Have questions or want to learn more? Reach out to us!", "Send us a message and we will respond soon"]}
        buttonText="Contact us"
        onContactClick={() => alert("Contact us clicked")}
        imageUrl="/image4.jpg"
        altText="Contact Image"
      />

      <Container9 heading="Impact at as" subHeading="Glance" stats={stats} />

      <Container10 heading="Our Promise" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. riosam magnam excepturi id nulla error corrupti ullam alias odio!" promises={promises} />

      <Container11
        imageUrl="/image9.png"
        altText="LMS Image"
        heading="Empower Your Learning Journey with Personalized Courses and Expert Support"
        description="AGH LMS is dedicated to providing exceptional learning experiences tailored to your individual needs."
        points={["Our platform offers personalized learning paths, expert support, and a vast library of courses to help you achieve your goals."]}
      />

      <Container12 heading="Trusted By" stats={trustedStats} />
    </AptitudeGuruStyle>
  );

}

export default AptitudeGuruComponent;