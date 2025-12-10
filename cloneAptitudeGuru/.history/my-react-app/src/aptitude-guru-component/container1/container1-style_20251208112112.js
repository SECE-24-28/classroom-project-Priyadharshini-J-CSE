import styled from 'styled-components';

export const Container1Style = styled.div`
  .container1 {
    margin-top: 100px;
    text-align: center;
    width: 1500px;
    height: 900px;
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
    margin-bottom: 0;
    font-weight: superbold;
  }

  .container1-italic {
    font-size: 40px;
    color: red;
    font-weight: bold;
  }

  .sub-container1 p {
    font-size: 25px;
    line-height: 1.5;
    margin-top: 80px;
    color: grey;
  }

  .button-group-container1 .button1 {
    padding: 15px 30px;
    font-size: 25px;
    border: none;
    font-weight: bold;
    border-radius: 5px;
    margin-right: 25px;
  }

  .button-group-container1 .button2 {
    padding: 15px 30px;
    font-size: 25px;
    border: none;
    background-color: red;
    color: white;
    font-weight: bold;
    border-radius: 5px;
  }
`;
