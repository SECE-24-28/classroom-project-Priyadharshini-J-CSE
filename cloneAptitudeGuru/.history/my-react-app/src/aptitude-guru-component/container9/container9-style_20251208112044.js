import styled from 'styled-components';

export const Container9Style = styled.div`
  .container9 {
    text-align: center;
    margin: 100px 0;
  }

  .container9-h1 {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 50px;
  }

  .container9-h1 span {
    color: red;
  }

  .full-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 50px;
  }

  .semi-box {
    display: flex;
    justify-content: center;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    border-radius: 15px;
    width: 100%;
    max-width: 400px;
  }

  .box div h2 {
    font-size: 18px;
    color: grey;
  }

  .box div h1 {
    font-size: 40px;
    font-weight: bold;
  }

  .box img {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 768px) {
    .full-box {
      grid-template-columns: 1fr;
    }
  }
`;
