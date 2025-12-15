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
                    <div className="below1">
                        <h1>Oxford Leatherette Sofa</h1>
                        <p>Minimalist Scandinavian frame paired with breathable..</p>
                    </div>
                    <div className="below2">
                        <h1>₹18,999</h1>
                        <p>₹25,000</p>
                            
                    </div>
                    <button></button>

                </div>


            </div>
        </div>
        </TrendingStyle>
    );
};
export default TrendingComponent;