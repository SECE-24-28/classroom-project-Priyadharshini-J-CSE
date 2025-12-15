import styled from "styled-components";
export const ExploreStyle = styled.div`


.below{
display:flex;

}
.below .img1{
height: 250px;
width: 350px;
}
.below img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
    .below .box{
        margin: 20px;
        height: 250px;
        width: 350px;
        border-radius: 10px;
        background-color: #f5f5f5;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .below .des{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
    .below .des .circle{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
   
   
`;