import styled from "styled-components";

export const RectangleBoxStyle = styled.div`
  background: #ffffffff;            
  padding: 50px 0;             
  min-height: 100vh;           

  .pill-box {
    background: #ff2347;
    padding: 60px 80px;
    border-radius: 120px;
    max-width: 1300px;
    margin: 60px auto;
    color: white;
    text-align: center;
  }

  .pill-box h1 {
    font-size: 38px;
    font-weight: 800;
    margin-bottom: 15px;
  }

  .pill-box p {
    font-size: 20px;
    line-height: 1.5;
    max-width: 900px;
    margin: 0 auto;
  }

  @media (max-width: 900px) {
    .pill-box {
      padding: 30px 20px;
      border-radius: 60px;
      max-width: 95%;
    }

    .pill-box h1 {
      font-size: 24px;
    }

    .pill-box p {
      font-size: 15px;
    }
  }
`;
