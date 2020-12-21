import React from 'react';

const Hero = () => {

    const getUpdate = () => {
     
    }
    return (
        <div className="top-container">
            <div className="nav">
                <img src="./logo.svg" width="4.5%" alt=""/>
                <span className="nav-font-pt1 nav-style">nib.</span><span className="nav-font-pt2 nav-style">l</span><span className="nav-font-pt1 nav-style">k</span>
                <h3 onClick={getUpdate}>Update</h3>
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