import styled from "styled-components";
export const TrendingStyle = styled.div`
  
  .container{
  display: flex;
  justify-content: center;
  }
  .above{
  margin-left:150px;}

  .box{
    width: 550px;
    height: 600px;
    margin: 20px;
  }

  .box img{
    width: 100%;
    height: 300px;
  }

  .box h1{
  font-size: 20px;
  }

  .box .below2{
  display: flex;    
  gap: 20px;
  .smallbox{
  display: flex;
  gap: 8px;
    background-color: #f0f0f0;
    padding: 5px;
    border-radius: 7px;
    font-size: 12px;
    height: 20px;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 10px;
  }
`;