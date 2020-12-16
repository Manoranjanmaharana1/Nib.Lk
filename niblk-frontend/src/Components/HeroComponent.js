import React from 'react';

const Hero = () => {

    return (
        <div>
            <div className="nav">
                <span className="nav-font-pt1 nav-style">nib.</span><span className="nav-font-pt2 nav-style">l</span><span className="nav-font-pt1 nav-style">k</span>
                <div className="btn">
                    <img src="./like.svg" width="20px" heigth="20px" alt="" />
                    <h1>Donate</h1>
                </div>
            </div>
            <div className="hero-component">
                <div className="left-component">
                    <h1>Shortify Hyperlinks, Amplify your reach</h1>
                    <br/>
                    <p>
                        An hassle-free way to handle large links to quickly reach your public. </p>
                </div>
                <div className="right-component">
                    <img src="./clumsy.svg" alt="" width="85%"/>
                </div>
            </div>
        </div>
    )
}
export default Hero;