import styled from 'styled-components';

export const OurPromisesStyle = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 100px;

  .heading {
    text-align: center;
    font-size: 50px;
  }

  .para {
    color: grey;
    font-size: 23px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 50px;
  }

  .bigbox {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
    flex-wrap: wrap;
  }

  .smallbox {
    border-top: 5px solid;
    padding: 20px;
    max-width: 400px;
  }

  .smallbox h1 {
    color: #515252;
  }

  .smallbox p {
    font-size: 21px;
    line-height: 1.5;
    color: #686B6B;
  }
`;