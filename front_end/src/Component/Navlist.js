import React from "react";
import {Link} from 'react-router-dom'
function Navlist({LinkName,LinkUrl}){
    return(
        <div>
            <li className="nav-item">
                <Link className="nav-link" to= {LinkUrl}>
                     {LinkName}
                </Link>
            </li>
        </div>
    );
};

export default Navlist;