import React from "react";
import { ExploreStyle } from "./Explore-style";
const ExploreComponent=()=>{
    return(
        <ExploreStyle>
        <div>
            <div className="above">
                <h1>Explore Our Categories</h1>
            <p>Start building the home you’ve always imagined</p>
            </div>

            <div className="below">
                <div className="box">
                <div className="img1"><img src="/explore" alt="" /></div>
                <div className="des"><h1>Dining Sets</h1> <div className="circle"><h1>→</h1></div></div></div>

                <div className="box">
                <div className="img1"><img src="" alt="" /></div>
                <div className="des"><h1>Dining Sets</h1> <div className="circle"><h1>→</h1></div></div></div>

                <div className="box">
                <div className="img1"><img src="" alt="" /></div>
                <div className="des"><h1>Dining Sets</h1> <div className="circle"><h1>→</h1></div></div></div>


            </div>
        </div>
        </ExploreStyle>
    );
} ;
export default ExploreComponent;