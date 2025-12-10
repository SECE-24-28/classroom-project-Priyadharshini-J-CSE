import styled from 'styled-components';

export const Container10Style = styled.div`
  .container10 {
    margin: 100px 0;
  }

  .heading {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  .para {
    font-size: 18px;
    color: grey;
    text-align: center;
    margin-bottom: 50px;
  }

  .bigbox {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 30px;
  }

  .smallbox {
    border-left: 5px solid;
    padding: 20px;
    border-radius: 5px;
  }

  .smallbox h1 {
    font-size: 25px;
    margin-bottom: 15px;
  }

  .smallbox span {
    margin-right: 10px;
  }

  .smallbox p {
    font-size: 16px;
    color: grey;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .bigbox {
      grid-template-columns: 1fr;
    }
  }
`;
