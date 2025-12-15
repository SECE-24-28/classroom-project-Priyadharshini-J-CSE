import styled from 'styled-components';

export const HomeStyle = styled.div`

  font-family: 'Inter', sans-serif;

nav{
display:flex;
background-color:white; 
margin:10px;
justify-content:space-between;
}
 nav img{
 height: 60px;
 width: 150px;
 }
 nav h1{
 color:  #000000cc;
 font-size: 20px;
 font-weight: 600;
 background-color:white;
 padding: 10px 20px;
 margin-right: 300px;


 }
  nav a{
    text-decoration: none;
    color: #000000b8;
    font-size: 15px;
    font-weight: 500;
    margin: 0 20px;
  }
    nav .b1{
    background-color:white;
    color: black;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
   
    cursor: pointer;
  }
    nav .b2{
    background-color:#000000b8;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    margin: 0 20px;
    cursor: pointer;
  }
    }
`;
