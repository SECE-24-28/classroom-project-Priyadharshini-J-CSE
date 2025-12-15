import styled from "styled-components";

export const SymbolStyle = styled.div`

  /* GLOBAL FIX — Prevent horizontal scrolling */
  * {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    max-width: 100%;
  }

  width: 100%;
  font-family: "Poppins", sans-serif;
  background: #fff;

  /* ---------------------------------------------------------
      HERO SECTION
  ---------------------------------------------------------- */

  .main-container {
    width: 100%;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;      /* STACK text + image */
    align-items: center;
    text-align: center;
    gap: 30px;
  }

  .container1 {
    max-width: 900px;
    width: 100%;
  }

  .container1-header1 {
    font-size: clamp(32px, 6vw, 70px);
    font-weight: 900;
    color: red;
    padding-bottom: 30px;
  }

  .container1-header2 {
    color: black;
    font-size: clamp(18px, 3vw, 32px);
    font-weight: 700;
    padding-bottom: 15px;
  }

  .container1-italic {
    font-size: clamp(14px, 2vw, 26px);
    font-weight: bold;
    color: red;
    margin-top: 10px;
  }

  .sub-container1 p {
    margin-top: 30px;
    font-size: clamp(15px, 1.5vw, 20px);
    line-height: 1.6;
    color: #555;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .button-group-container1 {
    margin-top: 20px;
  }

  .button1,
  .button2 {
    padding: clamp(10px, 2vw, 15px) clamp(18px, 3vw, 30px);
    border-radius: 6px;
    border: none;
    font-size: clamp(14px, 1.4vw, 20px);
    font-weight: 700;
    cursor: pointer;
    margin: 10px;
  }

  .button2 {
    background: red;
    color: #fff;
  }

  .container2 {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .container2 img {
    width: 100%;
    max-width: 900px;
    height: auto;
    display: block;
  }

  /* ---------------------------------------------------------
      SYMBOL SECTION
  ---------------------------------------------------------- */

 width: 100%;
  background: #fff;
  padding: 50px 0;
  font-family: "Poppins", sans-serif;

  .symbol {
    width: 80%;
    margin: auto;
    text-align: center;
  }

  .heading {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #000;
  }

  .para1 {
    width: 70%;
    margin: auto;
    font-size: 18px;
    line-height: 1.7;
    color: #5f6f82;
  }

  .vission-mission {
    width: 90%;
    margin: 60px auto 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  /* Vision & Mission containers */
  .vission,
  .mission {
    width: 45%;
    text-align: left;
  }
  .vission-1 h1{
  color:#00a9d6;
  }
  .mission-1 h1{
  color:#f4a835;
  }
  /* Title container with color bar */
  .vission-1,
  .mission-1 {
    color: #000;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
 
.vission-1{
    color: rgb(243, 176, 79);
    border-left: 4px solid rgb(243, 176, 79);
    padding-left: 0.5rem;
    }

    .mission-1{
    color: rgb(0, 189, 235);
    border-left: 4px solid rgb(0, 189, 235);
    padding-left: 0.5rem;
    }

  .para2,
  .para3 {
    font-size: 17px;
    color: #5f6f82;
    line-height: 1.7;
  }

  /* Vertical divider */
  .divider {
    width: 1px;
    background: #ccc;
    height: 150px;
    margin: auto 20px;
  }

  @media (max-width: 768px) {
    .vission-mission {
      flex-direction: column;
      gap: 40px;
    }

    .divider {
      display: none;
    }

    .vission,
    .mission {
      width: 100%;
    }

    .para1 {
      width: 90%;
    }
  }

  /* ---------------------------------------------------------
      PILL BOX
  ---------------------------------------------------------- */

.pill-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1400px;

  margin: 60px auto;
  padding: 2.5rem 3rem;

  background: #fc2947;
  border: 2px solid red;
  border-radius: 200px;

  text-align: center;
}

/* --- Title --- */
.pill-box h1 {
  font-size: 35px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
  font-family: "Work Sans", sans-serif;
}

/* --- Paragraph --- */
.pill-box p {
  font-size: 20px;
  line-height: 1.5;
  color: #fff;
  max-width: 1000px;
  margin: 0 auto;
  font-family: "Work Sans", sans-serif;
}

/* --- Responsive Adjustments --- */
@media (max-width: 900px) {
  .pill-box {
    padding: 1.8rem;
    border-radius: 80px;
    max-width: 90%;
    margin-top: 30px;
  }

  .pill-box h1 {
    font-size: 26px;
  }

  .pill-box p {
    font-size: 16px;
  }
}

@media (max-width: 500px) {
  .pill-box {
    padding: 1.4rem;
    border-radius: 50px;
  }

  .pill-box h1 {
    font-size: 22px;
  }

  .pill-box p {
    font-size: 14px;
  }
}
@media (max-width: 920px) {
    .impact-title {
        font-size: 24px;
        font-weight: 600;
    }
}

.impact-title {
    margin-top: 50px;
    font-size: px;
    font-weight: 600;
    text-align: center;
    font-family: Inter, sans-serif;
    color:black;
    justify-content:center;
    padding-bottom:50px;
}

.impact-title span {
    color: #f52424ff;
}

.container-full {
    
    width: 450px;
    display: flex;
    border-radius: 12px;
    font-family: Inter, sans-serif;
    margin-left:65px;
    color: black;
    gap: 50px;
}

.upper-container {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    align-items: center;
    justify-content: center;
    margin-left: 10rem;      /* ← Pushes left on medium screens */
}

.lower-container {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
}

.container-item1,
.container-item2,
.container-item3,
.container-item4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    height: 120px;
    padding: 15px;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.container-item1 { background: #ffdfe4; }
.container-item2 { background: #deffec; }
.container-item3 { background: #e2f0fa; }
.container-item4 { background: #ffe6e7; }

.container-item1 h2,
.container-item2 h2,
.container-item3 h2,
.container-item4 h2 {
    font-size: 18px;
    margin: 0;
    color: #444;
}

.container-item1 p,
.container-item2 p,
.container-item3 p,
.container-item4 p {
    font-size: 32px;
    font-weight: 700;
    color: #000;
}

.icon {
    width: 110px;
    height:auto;
    margin-left: 20px;
    position: relative;
    top:25px;
    left:8px;
}

/* ----------------------------------------
   FIX FOR 855px – CENTER THE UPPER ROW
----------------------------------------- */
@media (max-width: 1100px) {
    .upper-container {
        margin-left: 0 !important;
    }
}

@media (max-width: 768px) {
    .container-full {
        width: 100%;
        flex-direction: column;
        gap: 20px;
        padding: 0;
        margin: 0 auto;
        align-items: center;
    }

    .upper-container,
    .lower-container {
        margin-left: 0;
        width: 100%;
        justify-content: center;
    }

    .container-item1,
    .container-item2,
    .container-item3,
    .container-item4 {
        width: 90%;
        height: auto;
        padding: 20px;
    }

    .icon {
        width: 80px;
        top: 10px;
        left: 0;
    }
}
padding: 40px 0;
  width: 100%;
 
  .title {
  margin-top:70px;
  color: black;
    text-align: center;
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 70px;
  }

  .parent {
    display: flex;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
    padding: 20px;
  }

  .child {
    position: relative;
    width: 260px;
    height: 230px;

    background: #fff;
    border-radius: 12px;
    text-align: center;

    padding-top: 60px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  /* Colored Top Borders */
  .cyan { border-top: 10px solid #00c4b4; }
  .blue { border-top: 10px solid #00a9e0; }
  .orange { border-top: 10px solid #f2a33c; }
  .red { border-top: 10px solid #ff4c4c; }

  /* Circular Badge */
  .icon-badge {
    position: absolute;
    top: -40px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: white;
    border: 8px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    color: inherit; 
    box-shadow: 0px 3px 6px rgba(0,0,0,0.15);
  }

  .cyan.icon-badge { border-color: #00c4b4; color: #00c4b4; }
  .blue.icon-badge { border-color: #00a9e0; color: #00a9e0; }
  .orange.icon-badge { border-color: #f2a33c; color: #f2a33c; }
  .red.icon-badge { border-color: #ff4c4c; color: #ff4c4c; }

  /* Numbers & text */
  .numbers {
    font-size: 40px;
    font-weight: 700;
    color: #555;
    margin-top: 10px;
  }

  .details {
    margin-top: 6px;
    font-size: 18px;
    font-weight: 500;
    color: #777;
    line-height: 1.3;
  }

  /* Bottom Highlight Bar */
  .bottom-bar {
    position: absolute;
    bottom: 0;
    width: 85%;
    height: 15px;
    border-radius: 0 0 10px 10px;
  }

  .cyan.bottom-bar { background: #00c4b4; }
  .blue.bottom-bar { background: #00a9e0; }
  .orange.bottom-bar { background: #f2a33c; }
  .red.bottom-bar { background: #ff4c4c; }

  /* Responsive */
  @media (max-width: 800px) {
    .parent {
      gap: 40px;
    }

    .child {
      width: 240px;
      height: 220px;
    }
  }

 .getintouch-outer-container {
    margin-top: 3rem;
    background-color: rgba(252, 41, 71, 0.875);
    width: 100%;
    display: flex;
    justify-content: center;
}

.getintouch-inner-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    width: 95%;
    max-width: 1400px;
    padding: 3rem 1rem;
    gap: 40px;
    color: white;
}


.getintouch-left-container {
    width: 100%;
    max-width: 600px;
}

.getintouch-left-container h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.getintouch-left-container p {
    font-size: 1.6rem;
    line-height: 1.5;
    margin-bottom: 2rem;
}

.getintouch-left-container button {
    background: white;
    color: black;
    font-size: 1.4rem;
    padding: 0.7rem 1.5rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;
}

.getintouch-left-container button:hover {
    background: #f0f0f0;
}


.getintouch-right-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}


.getintouch-outer-container {
    margin-top: 3rem;
    background-color: rgba(252, 41, 71, 0.875);
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;      /* IMPORTANT: prevents circles from going outside */
}


.circle-big {
    position: absolute;
    width: 400px;
    height: 410px;
    background: #D63A52;
    border-radius: 50%;
    right: 10px;     /* pushes circle to the right like image */
    bottom:90px;        /* moves it slightly upward */
    z-index: 0;
}

.circle-small {
    position: relative;
    width: 400px;
    height: 400px;
    background:#D63A52;
    border-radius: 50%;
    left: 130px;    
    bottom:150px;       
    z-index: 0;
}


.getintouch-image {
    right: 150px;
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
}



@media (min-width: 768px) {
    .getintouch-image {
        width: 340px;
        height: 340px;
    }
}

@media (min-width: 1024px) {
    .getintouch-inner-container {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }

    .getintouch-left-container {
        max-width: 600px;
    }

    .getintouch-image {
        width: 380px;
        height: 380px;
    }
}

@media (min-width: 1200px) {
    .getintouch-image {
        width: 420px;
        height: 420px;
    }
}   

.title{
    text-align:center;
    font-size:40px;
    margin-top:50px;
    color:black;
}

.para{
    text-align:center;
    font-size:20px;
    margin-top:20px;
    color:grey;
}

.title1,.title2,.title3,.title4,.title5,.title6{
    margin-top:10px;
    margin-bottom:10px;
    font-weight:bold;
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: 24 px;
    color: rgb(119, 119, 119);
}

.box{
    color:black;
    margin-left:60px;
    margin-right:60px;
    padding:10px;
    
}
.para1, .para2, .para3, .para4, .para5, .para6{
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: rgb(86, 102, 131);}
.box1{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    gap:20px;
    margin-top:50px;
    margin-bottom:50px;
}

.box2{
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:45px;
}
.box1-1,.box1-2,.box1-3,.box2-1,.box2-2,.box2-3{
    // width:25%;
    // border-radius:10px;
    // box-shadow:0 4px 8px rgba(0,0,0,0.1);   
    // padding:20px;
    // border-top :10px solid lightgrey;
        border-top: 4px solid;
    display: flex;
    max-width: 380px;
    gap: 20px;
    flex-direction: column;
    border-radius: 0px 0px 10px 10px;
    padding: 1.5rem;
    background-color: rgb(255, 255, 255);
    position: relative;
    
}
.box1-1{
    border-color: rgb(68, 178, 179);
}
.box1-2{
    border-color: rgb(239, 175, 75);
}
.box1-3{
    border-color: rgb(0, 189, 235);
}
.box2-1{
    border-color: rgb(134, 74, 249);
}
.box2-2{
    border-color: rgb(252, 41, 71);
}
.box2-3{
    border-color: rgb(50, 199, 102);
}

.icon{
display:flex;
gap:15px;
}


`;
