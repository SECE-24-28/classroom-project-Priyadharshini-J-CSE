import Re
import {Link} from "react-router-dom";
const homepageComponent=()=>{
    return(
        <div>
            <h1>hello from home page</h1>
            <Link to="/props" >Go to props page</Link>
        </div>
    );
} ;
export default homepageComponent;