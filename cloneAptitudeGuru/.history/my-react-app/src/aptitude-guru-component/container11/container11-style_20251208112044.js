import styled from 'styled-components';

export const Container11Style = styled.div`
  .container11 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    margin: 100px 0;
  }

  .container11 img {
    max-width: 100%;
    height: auto;
    flex: 1;
  }

  .container11 .text {
    flex: 1;
  }

  .container11 .text h1 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.4;
  }

  .container11 .text p {
    font-size: 18px;
    color: grey;
    margin-bottom: 15px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .container11 {
      flex-direction: column;
    }
  }
`;
