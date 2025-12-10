import styled from 'styled-components';

export const Container12Style = styled.div`
  .container12h1 {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    margin: 50px 0;
  }

  .container12 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin: 50px 0;
  }

  .box11,
  .box12 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    border-radius: 15px;
  }

  .box2 {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    opacity: 0.2;
    left: 0;
    top: 0;
  }

  .box1 {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-right: 40px;
  }

  .box1 h1 {
    font-size: 40px;
    font-weight: bold;
  }

  .box1 p {
    font-size: 18px;
    color: grey;
  }

  .circle1 {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    opacity: 0.1;
    right: 20px;
    bottom: 20px;
  }

  .circle2 {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: rgba(200, 200, 200, 0.3);
    border-radius: 50%;
    right: 10px;
    top: 10px;
  }

  .font {
    position: absolute;
    right: 30px;
    font-size: 60px;
    z-index: 1;
  }

  @media (max-width: 768px) {
    .container12 {
      grid-template-columns: 1fr;
    }
  }
`;
