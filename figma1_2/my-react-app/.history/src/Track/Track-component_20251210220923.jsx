import React from "react";
import {TrackStyle} from "./Track-style";
const TrackComponent=()=>{
    return(
        <TrackStyle>
        <div>
           <div className="track">

            <div className="box">
                <h1><i class="fa-solid fa-truck-fast"></i></h1>
                <h3>Free Shipping</h3>
                <p>Order above $200</p>
            </div>

             <div className="box">
               <h1><i class="fa-solid fa-money-bill-transfer"></i></h1>
            </div>

             <div className="box">
               <h1> <i class="fa-solid fa-lock"></i></h1>
            </div>

             <div className="box">
               <h1> <i class="fa-solid fa-phone"></i></h1>
            </div>

           </div>

        </div>
        </TrackStyle>
    );
};
export default TrackComponent;