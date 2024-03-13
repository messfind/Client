import React from "react";
import mac from './images/home/macbook-pro.jpg'
function Section1(){
    return(
        <div>
               <section className="main-highlyte-wrapper">
            <div className="internal-wrapper">
                <div className="model">
                    16-inch model
                </div>
                <div className="product-title">
                    MacBook-pro
                </div>
                <div className="brief-discriptio">
                    The best for the brightest
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#">Learn more</a></li>
                        <li><a href="#">Buy</a></li>
                    </ul>
                </div>
                <div className="home"><a href="#"><img src={mac} alt="" /></a></div>
            </div>
        </section>
        <section className="main-highlyte-2">
            <div className="internal-wrapper">
                <div className="model">
                    iphon 11
                </div>
                <div className="product-title">
                    Pro camera. Pro disply. Pro performance.
                </div>
                <div className="brief-discriptio">
                    from $24/mo. or $550 with trade-in.
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#">Learn more</a></li>
                        <li><a href="#">Buy</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="main-highlyte-3">
            <div className="internal-wrapper">
                <div className="model3">
                    iphon 11
                </div>
                <div className="product-title3">
                    Just the right amount of everything
                </div>
                <div className="brief-discriptio">
                    from $16.62/mo. or $339 with trade-in.
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#">Learn more</a></li>
                        <li><a href="#">Buy</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="main">
            <div className="watch">
                <div className="model3">
                    Watch
                </div>
                <div className="product-title3">
                    Just the right amount of everything
                </div>
                <div className="brief-discriptio">
                    from $16.62/mo. or $339 with trade-in.
                </div>
                <div className="links">
                    <ul>
                        <li><a href="">Learn more</a></li>
                        <li><a href="">Buy</a></li>
                    </ul>
                </div>
            </div>
            <div className="phone">
                <div className="model3">
                    Card is here
                </div>
                <div className="product-title3">
                    Just the right amount of everything
                </div>
                <div className="brief-discriptio">
                    from $16.62/mo. or $339 with trade-in.
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#">Learn more</a></li>
                        <li><a href="#">Buy</a></li>
                    </ul>
                </div>
            </div>
        </section>
        
        </div>
    )
}

export default Section1;