// ...existing code...
import styled from 'styled-components';

export const AptitudeGuruStyle = styled.div`
  
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container1 {
  margin-top:100px;
    text-align: center;
    width:1500px;
    height:900px;
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
}
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
    height:600px;

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
            color:	#20a7db;
        }
        .container3-sub2 .sub2-right p {
        color:grey;
        font-size:23px;
        line-height:2;
         
}
        .container3 .line1{
        padding:2px;
        background-color:lightgrey;
        margin:25px;
        }
        .container4{
        margin-top:1px;
       background-color: #ff3d3dff;
  color: white;
  padding: 15px 25px;
  width: 1550px;
  border-radius: 70px;
  text-align: center;         
  display: flex;             
  align-items: center;        
  justify-content: center;     
  flex-direction: column;      
    
        }
  .container4 h1, .container5 h1{
  font-size:40px;
 margin-bottom:1px;
  }
    .container4 p{
    margin-top:4px;
    font-size:25px;
}
   .container5{
   margin-top:100px;
   text-align: center;             
  align-items: center;        
  justify-content: center;  
  width: 1150px;   
  
   }
  .container5 p{
  font-size:25px;
  font-weight:bold;
  }

  .container6{
    display: flex;
    gap:30px;
    }

    .container6 .box{
    padding:10px;
    border:1px solid lightgrey;
    border-radius:10px;
}
    .container6 .box-up img{
    border:1px solid lightgrey;
    
}
    .container6 .box-bottom{
    margin:0 10px 0 10px;
}
    .container6 .box-bottom h3{
    font-size:27px;

}
    .container6 .box-bottom p{
    font-size:22px;
    margin:5px 0;
    
}
    .container6 .box-button .b1{
    padding:15px 35px;
    font-size:25px;
    font-weight:bold;
    color:white;
    background-color:red;
    border:none;
    margin-right:15px;
}
    .container6 .box-button .b2{
    padding:15px 35px;
    font-size:25px;
    font-weight:bold;
    color:black;
    background-color:lightgrey;
    border:none;


}

.container6-viewmore{
margin-top:50px;
color:#3d85c6;
}
// .container7 .fullbox{
// display:flex;
// }
// .container7 .fullbox .box{
// }


.container8{
background-color:#fe5757;
color:white;
display:flex;

}

.container8 .left{
padding:50px;
flex:30%;
margin-left:50px;

}
.container8 .right{
flex:70%;
padding:50px;
display:flex;
overflow: hidden;

}

.container8 h1{
font-size:65px;
margin-bottom:5px;
font-weight:bold;
}
.container8 p{
font-size:20px;
margin-top:1px;
margin-bottom:1px;
}

.container8 button{
margin-top:50px;
padding: 10px 25px;
font-size:25px;
border:none;
border-radius:10px;

}
.container8 img{
   
   height:350px;
   width:350px;
   border-radius:50%;
    position:relative;
  
 
   }  

.container8 .circle1{
background-color:#d55757;
border-radius:50%;
height:350px;
width:350px;
position:relative;
left:580px;
top:-120px;

}
 
.container8 .circle2{
background-color:#d55757;
border-radius:50%;
height:350px;
width:350px;
position:relative;
left:450px;
top:-100px;
}
  .container9{
  margin-top:100px;
  text-align: center;
  }    
  .container9 .container9-h1{
    font-size:50px;
    font-weight:bold;
  }
    .container9-h1 span{
    color:red;
}

.container9 .full-box{
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
}
    .full-box .semi-box{
    display:flex;
    
    text-align: left;
    
}
    .semi-box .box{ 
   background-color:lightgrey;
    padding:0px 10px 0px 25px;
    margin:20px;
    border-radius:50px;
    display:flex;
   align-items: center;
   width:450px;
}
   .semi-box .box h2{
color :#525252;
font-size:28px;
   }
    
   .semi-box .box img{
    height:180px;
    width:180px;
    margin-left:200px;
    position:relative;
    top:40px;
}

.container10{
margin-left:80px;
margin-right:80px;
margin-top:100px;
}

    .container10 .heading{
    text-align: center;
    font-size:50px;
    }

    .container10 .para{
    color:grey;
    font-size:23px;
    text-align: center;
    margin-top:10px;
    margin-bottom:50px;
    }

    .container10 .bigbox{
    display:flex;
    justify-content: center;
    gap:50px;
    margin-top:30px;
    flex-wrap:wrap;
}
    .container10 .smallbox{
    border-top:5px solid;
    padding:20px;
    max-width:400px;
}
    .container10 .smallbox h1{
    color:#515252;
}

    .container10 .smallbox p{
    font-size:21px;
    line-height:1.5;
    color:#686B6B;
}

.container11{
display:flex;
align-items: center;
justify-content: center;
}
.container11 img{
height:480px;
width:550px;
}
.container11 .text{
width:600px;
margin-left:50px;
letter-spacing:0.5px;
}

.container11 .text h1{
font-size:45px;
font-weight:bold;
margin-bottom:20px;
}

.container11 .text p{ 
font-size:22px;
color:grey;
}



.container12h1{
text-align: center;
font-size:50px;
font-weight:bold;
margin-top:50px;
}
.container12{
display:flex;
align-items: center;
justify-content: center;
}

.container12 .box11 .box1{

box-shadow:2px 2px 5px 0px rgba(0, 0, 0, 0.3);
padding:20px 45px 20px 45px;
margin-right:20px;
text-align: center;
}

.container12 .box11 .box1 h1{
font-size:40px;
color:grey; 
font-weight:bold; 
}

.container12 .box11 .box1 p{
font-size:20px;
color:grey;
font-we
}

`;
// ...existing code...