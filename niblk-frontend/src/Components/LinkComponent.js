import React, { useState } from 'react';
const axios = require('axios').default;
const url = "http://127.0.0.1:8080/add";


const Modal = ({ props }) => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">


                <div className="modal-body">

                    <p className="modal-text" onClick={() => {
                        
                        navigator.clipboard.writeText(props);

                    }}> <img src="./copy.svg" alt="" width="2%" id="copy" />{props}</p>
                    <br />
                    <br />
                    <div className="close" onClick={() => {
                        const modal = document.getElementById("myModal");
                        modal.style.display = "none";
                        document.querySelector("body").style.overflow = "visible";
                    }}>Close</div>

                </div>

            </div>
        </div>
    )
}

const LinkComponent = () => {
    const [shortURL, setShortURL] = useState("");

    async function onFormSubmit(e) {
        e.preventDefault();
        const longURL = e.target.longurl.value;
        const payload = {
            longURL: longURL,
            shortURL: shortURL
        }
        try {
            const response = await axios.post(url, payload);
            const modal = document.getElementById("myModal");
            modal.style.display = "block";
            document.querySelector("body").style.overflow = "hidden";
            console.log(response.data);
            setShortURL(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    const addCode = (e) => {
        setShortURL(e.target.value);
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
                    <input type="text" autoComplete="off" id="longtextbox" name="longurl" placeholder="LongURL" />
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
                <input type="text" autoComplete="off" id="shorttextbox" name="shorturl" placeholder="ShortURL" className="display" onChange={addCode} />
            </div>
            <Modal props={shortURL} />
        </footer>
    )
}
export default LinkComponent;