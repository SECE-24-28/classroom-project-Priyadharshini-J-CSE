// import React from "react";
import {Link} from "react-router-dom";
import PropsComponent from "../props/props-component";
const homepageComponent=()=>{
    return(
        <div>
            <h1>hello from home page</h1>
            <Link to="/props" element={<PropsComponent/>}}">Go to props page</Link>
        </div>
    );
} ;
export default homepageComponent;