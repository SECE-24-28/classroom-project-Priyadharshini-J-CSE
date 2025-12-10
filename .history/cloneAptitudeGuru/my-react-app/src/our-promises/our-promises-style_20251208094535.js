import styled from 'styled-components';

export const OurPromiseStyle = styled.div`
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
    flex-wrap: wrap; /* Allows the boxes to wrap to the next line */
  }

  .smallbox {
    border-top: 5px solid; /* The border color is set via inline style in the component */
    padding: 20px;
    max-width: 400px;
    flex-basis: 30%; /* Suggests a starting width for 3 boxes per row on large screens */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
  }

  .smallbox h1 {
    color: #515252;
  }

  .smallbox p {
    font-size: 21px;
    line-height: 1.5;
    color: #686B6B;
  }

  /* Responsive adjustments */
  @media (max-width: 1300px) {
    .smallbox {
      flex-basis: 45%; /* 2 boxes per row on medium screens */
    }
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    
    .smallbox {
      flex-basis: 100%; /* 1 box per row on small screens */
    }
    
    .heading {
        font-size: 40px;
    }
    
    .para {
        font-size: 18px;
    }
  }
`;