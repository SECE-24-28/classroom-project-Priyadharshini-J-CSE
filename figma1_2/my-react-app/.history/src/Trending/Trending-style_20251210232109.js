import styled from "styled-components";
export const TrendingStyle = styled.div`
  
  .container{
  display: flex;
  }

  .box{
    width: 450px;
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
  gap: 5px;
    background-color: #f0f0f0;
    padding: 5px;
    border-radius: 5px;
    font-size: 12px;
  }
`;