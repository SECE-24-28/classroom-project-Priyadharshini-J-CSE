import React from "react";
import {TrackStyle} from "./Track-style";
const TrackComponent=()=>{
    return(
        <TrackStyle>
        <div>
           <div className="track">

            <div className="box">
                <h1><i class="fa-regular fa-truck-fast"></i></h1>
            </div>

             <div className="box">
               <h1><i class="fa-regular fa-money-bill-transfer"></i></h1>
            </div>

             <div className="box">
               <h1> <i class="fa-regular fa-lock"></i></h1>
            </div>

             <div className="box">
                <i class="fa-solid fa-phone"></i>
            </div>

           </div>

        </div>
        </TrackStyle>
    );
};
export default TrackComponent;