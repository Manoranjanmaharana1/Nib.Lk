import React, { useState } from 'react';
const axios = require('axios').default;
const url = "http://127.0.0.1:8080/update";

const Modal = () => {
    const [shortURL, setShortURL] = useState("");
    const [passcode, setPassCode] = useState("");
    const [longURL, setLongURL] = useState("");
    const submitForm = async() => {
        if(shortURL === "" || longURL === "" || passcode === "" ){
            alert("😲 Please don't leave any of these field as blank");
            return;
        }
        document.getElementById("sbt-txt").classList.add("hide");
        document.querySelector(".loader").classList.remove("hide");
        document.querySelector(".submit").style.pointerEvents = "none";
        const payload = {
            longURL: longURL,
            shortURL: shortURL,
            password: passcode
        }
        try {
            const response = await axios.post(url, payload);
            if (response.data !== "False") {
                alert("👍🏻 Successfully Updated your url!!");
            } else {
                alert("🙄 Credentials look confusing! Kindly recheck before proceeding.");
            }
        } catch (error) {
            console.error(error);
        } finally {
            document.getElementById("sbt-txt").classList.remove("hide");
            document.querySelector(".loader").classList.add("hide");
            document.querySelector(".submit").style.pointerEvents = "all";
        }
    }
    return (
        <div id="formModal" className="modal">
            <div className="modal-content" id="modal-form">
                <div className="modal-body">
                    <input type="text" autoComplete="off" id="textbox1" name="shorturl" placeholder="ShortURL" onChange={(e) => { setShortURL(e.target.value) }} />
                    <input type="password" autoComplete="off" id="textbox2" name="password" placeholder="Enter the passcode..." onChange={(e) => { setPassCode(e.target.value) }} />
                    <input type="text" autoComplete="off" id="textbox3" name="longurl" placeholder="Your new LongURL" onChange={(e) => { setLongURL(e.target.value) }} />
                    <br />
                    <br />
                    <div className="submit" onClick={submitForm}>
                        <p id="sbt-txt">Submit</p>
                        <div className="loader hide">
                        </div>
                        </div>
                    <div className="close" onClick={() => {
                        const modal = document.getElementById("formModal");
                        modal.style.display = "none";
                        document.querySelector("body").style.overflow = "auto";
                        document.getElementById("textbox1").value = document.getElementById("textbox2").value = document.getElementById("textbox3").value = "";
                    }}>Close</div>
                    
                </div>

            </div>
        </div>
    )
}


const Hero = () => {

    const getUpdate = () => {
        const modal = document.getElementById("formModal");
        modal.style.display = "block";
        document.querySelector("body").style.overflow = "hidden";
    }
    return (
        <div className="top-container">
            <div className="nav">
                <img src="./images/logo.svg" width="4.5%" alt="" />
                <span className="nav-font-pt1 nav-style">nib.</span><span className="nav-font-pt2 nav-style">l</span><span className="nav-font-pt1 nav-style">k</span>
                <h3 onClick={getUpdate}>Update</h3>
                <div className="btn">
                    <img src="./images/like.svg" width="20px" heigth="20px" alt="" />
                    <h1>Donate</h1>
                </div>
            </div>
            <div className="hero-component">
                <div className="left-component">
                    <h1>Shortify Hyperlinks, Amplify your reach</h1>
                    <br />
                    <p>
                    An hassle-free way to handle large links to quickly reach your public. </p>
                </div>
                <div className="right-component">
                    <img src="./images/hero.png" alt="" width="65%" />
                </div>
            </div>
            <Modal />
        </div>
    )
}
export default Hero;