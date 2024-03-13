import React from "react";
import Header from "./Header";
import Foot from "./foot/Foot";
import { Outlet } from "react-router-dom";

function Share(){
    return(
        <div>
<Header/>
<Outlet/>
<Foot/>
        </div>
    );
};

export default Share;