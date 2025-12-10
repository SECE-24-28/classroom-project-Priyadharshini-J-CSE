import styled from 'styled-components';

export const Container8Style = styled.div`
  .container8 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 100px 0;
    gap: 50px;
  }

  .container8 .left h1 {
    font-size: 40px;
    font-weight: bold;
  }

  .container8 .left p {
    font-size: 18px;
    color: grey;
    margin: 10px 0;
  }

  .container8 .left button {
    padding: 15px 30px;
    font-size: 18px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .container8 .right {
    position: relative;
    flex: 1;
  }

  .container8 .right img {
    max-width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
  }

  .container8 .circle1 {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 0, 0, 0.1);
    border-radius: 50%;
    top: -50px;
    right: -50px;
    z-index: 0;
  }

  .container8 .circle2 {
    position: absolute;
    width: 150px;
    height: 150px;
    background-color: rgba(255, 0, 0, 0.05);
    border-radius: 50%;
    bottom: -50px;
    left: -50px;
    z-index: 0;
  }
`;
