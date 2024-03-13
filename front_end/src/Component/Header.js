import React from 'react'
import logo from './images/icon/logo.png'
import search from './images/icon/search-icon.png'
import cart from './images/icon/cart.png';

import Navlist from './Navlist';


function Header(){
   return (
   <div>
<header className="header-wrapper">
                <div className="internal-wrapper">
                    <div className="header-links-wrapper">
                        <ul>
                            <li className="logo"><a href="#"><img src={logo} alt="" /></a></li>
                            <Navlist LinkUrl="/store/" LinkName="store"/>
                            <Navlist LinkUrl="/Mac/" LinkName="Mac"/>
                            <Navlist LinkUrl="/ipad/" LinkName="ipad"/>
                            <Navlist LinkUrl="/iphon/" LinkName="iphon"/>
                            <Navlist LinkUrl="/watch/" LinkName="watch"/>
                            <Navlist LinkUrl="/vision/" LinkName="vision"/>
                            <Navlist LinkUrl="/airpods/" LinkName="Airpods"/>
                            <Navlist LinkUrl="/Tv/" LinkName="Tv"/>
                            <Navlist LinkUrl="/Entertainment/" LinkName="Entertainment"/>
                            <Navlist LinkUrl="/Accessories/" LinkName="Accessories"/>
                            <Navlist LinkUrl="/Suport/" LinkName="Suport"/>
                            
                            <li className="search"><a href="#"><img src={search} alt="" /></a></li>
                            <li className="cart"><a href="#"><img src={cart} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </header>
   </div> 
   )
}

export default Header;