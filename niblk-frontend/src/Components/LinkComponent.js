/* eslint-disable */
import React, { useState } from 'react';
const axios = require('axios').default;
const url = "http://127.0.0.1:8080/add";


const BottomModal = ({ props }) => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="modal-body">
                    <p className="modal-text" onClick={() => {
                        navigator.clipboard.writeText("nib.lk/" + props);
                        alert("👍Copied!!")
                    }}> <img src="./copy.svg" alt="" width="2%" id="copy" />{"nib.lk/" + props}</p>
                    <br />
                    <br />
                    <div className="close" onClick={() => {
                        const modal = document.getElementById("myModal");
                        modal.style.display = "none";
                        document.querySelector("body").style.overflow = "auto";
                    }}>Close</div>

                </div>

            </div>
        </div>
    )
}

const LinkComponent = () => {
    const [shortURL, setShortURL] = useState("");
    const [passcode, setPassword] = useState("");

    async function onFormSubmit(e) {
        e.preventDefault();
        // if(passcode === ""){
        //     alert("😱Password field is empty!! It is essential while updating the shortURL😀.")
        //     return;
        // }
        const longURL = e.target.longurl.value;
        const payload = {
            longURL: longURL,
            shortURL: shortURL,
            password: passcode
        }
        try {
            const response = await axios.post(url, payload);
            if(response.data !== "exist"){
            const modal = document.getElementById("myModal");
            modal.style.display = "block";
            document.querySelector("body").style.overflow = "hidden";
            // console.log(response.data);
            // console.log(payload)

            setShortURL(response.data);
            }else {
                alert(payload.shortURL + " already exist! 🤷🏻‍♂️ Please try other combination or let the system decide. 😄")
            }
        } catch (error) {
            console.error(error);
        }
    }
    const addCode = (e) => {
        setShortURL(e.target.value);
    }
    const addPass = (e) => {
        setPassword(e.target.value);
    }
    const isDone = e => {
        if (e.target.checked) {
            document.getElementById("shorttextbox").classList.remove("display");
        } else {
            document.getElementById("shorttextbox").classList.add("display");
            document.getElementById("shorttextbox").value = "";
            setShortURL("")
        }
    }

    return (
        <footer className="lower">
            <div className="longURL-box">
                <form onSubmit={onFormSubmit}>
                    <input type="text" required="required" autoComplete="off" id="longtextbox" name="longurl" placeholder="LongURL" />
                    <input type="password" required="required" autoComplete="off" id="passtextbox" name="password" placeholder="Use this passcode for updating your url..." onChange={addPass} />
                    <input type="submit" className="submit-btn" value="Go" />
                </form>
            </div>
            <div className="shortURL-box">
                <div className="label">

                    <div className="button r" id="button-1">
                        <input type="checkbox" className="checkbox" id="custom" name="isCustom" onChange={isDone} />
                        <div className="knobs"></div>
                        <div className="layer"></div>
                    </div>
                    <label id="customLabel">Custom URL</label></div>
                    
                <input type="text" autoComplete="off" id="shorttextbox" name="shorturl" placeholder="ShortURL(e.g. NewURL or GoogleHashCode)" className="display" onChange={addCode} />
                
            </div>
            <BottomModal props={shortURL} />
        </footer>
    )
}
export default LinkComponent;