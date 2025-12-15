import React from "react";
import { TrendingStyle } from "./Trending-style";
const TrendingComponent=()=>{
    return(
        <TrendingStyle>
        <div className="trending">

            <h1>Trending Products</h1>
            <p>Tried, trusted, and loved</p>

            <div className="container">
                <div className="box">
                    <div><img src="" alt="" /></div>
                    <div className="below"></div>

                </div>


            </div>
        </div>
        </TrendingStyle>
    );
};
export default TrendingComponent;