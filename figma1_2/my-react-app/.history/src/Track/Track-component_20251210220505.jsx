import React from "react";
import {TrackStyle} from "./Track-style";
const TrackComponent=()=>{
    return(
        <TrackStyle>
        <div>
           <div className="track">

            <div className="box">
                <i class="fa-regular fa-truck-fast"></i>
            </div>

             <div className="box">
               <i class="fa-regular fa-money-bill-transfer"></i>
            </div>

             <div className="box">
                <i class="fa-regular fa-lock"></i>
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