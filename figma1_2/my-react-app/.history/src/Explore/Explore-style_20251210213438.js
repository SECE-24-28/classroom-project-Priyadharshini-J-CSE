import styled from "styled-components";
export const ExploreStyle = styled.div`

.explore{
display:flex;
flex-direction: column;
}

.above{
margin-left:150px;
}
.below{
display:flex;
justify-content: center;
}

.below .box{
margin-left: 20px;
    }
.below .img1{
height: 250px;
width: 350px;
// border-radius: 50px;
}
.below img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}

.below .des{
display: flex;
justify-content: space-between;
align-items: center;
background-color: #f2f2f2;
height: 20px;
padding: 15px;
border-radius: 20px;
position: relative;
margin-top: -20px;
}

.below .circle{
}
   
   
`;