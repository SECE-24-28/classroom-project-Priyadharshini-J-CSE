// ...existing code...
import styled from 'styled-components';

export const AptitudeGuruStyle = styled.div`
  .main-container {
    display: flex;
    flex-direction: column; /* or row if needed */
    align-items: center;
    justify-content: center;
    min-height: 100vh; /* centers vertically relative to the viewport */
    width: 100%;
     font-family: "Anta", sans-serif;
  }

  .container1 {
  margin-top:100px;
    text-align: center;
    width:1350px;
    height:900px;
  }


  .container1-header1 {
    font-size: 90px;
    color: red;
  }

  .container1-header2 {
    font-size: 35px;
    margin-bottom:0;
    font-weight:superbold;
  }
.container1-italic{
font-size:40px;
color:red;
font-weight:bold;

}




.sub-container1 p{
  font-size:25px;
  line-height:1.5;
  margin-top:80px;
  color:grey;
 
}
 
.button-group-container1 .button1
{
padding:15px 30px;
font-size:25px;
border:none;
font-weight:bold;
border-radius:5px;
margin-right:25px;
}
.button-group-container1 .button2{
padding:15px 30px;
font-size:25px;
border:none;
background-color:red;
color:white;
font-weight:bold;
border-radius:5px;
}
.container3{
 text-align: center;
    width:1500px;
    height:900px;

}
    .container3-sub1 h1{
      font-size:60px;
      font-weight:bold;
}
      .container3-sub1 p{
      line-height:1.8;
      color:grey;
      font-size:25px;
      font-weight:semi-bold;
}
      .container3-sub2 {
        display: flex;
        text-align: left;   
}
        .container3-sub2 .sub2-left h1 {
            font-size:40px;
            color:orange;
        }
        .container3-sub2 .sub2-left p {
        color:grey;
        font-size:23px;
        line-height:2;
}
         .container3-sub2 .sub2-right h1 {
            font-size:40px;
            color:orange;
        }
        .container3-sub2 .sub2-right p {
        color:grey;
        font-size:23px;
        line-height:2;
         
}
        .container3 .line1{
        padding:2
        }
         
}
`;
// ...existing code...