import React, { useState } from 'react';
const axios = require('axios').default;
const url = "http://127.0.0.1:8080/add?q=";


const LinkComponent = () => {
    const [shortURL, setShortURL] = useState("");
    const [isChecked, setChecked] = useState(false);
    async function onFormSubmit(e) {
        e.preventDefault();
        const longURL = '\"' + e.target.longurl.value + '\"';
        
        if(isChecked) {
            setShortURL(document.getElementById("shorttextbox").value);
        }
        try {
            const response = await axios.get(url + longURL);
            console.log(response);
          } catch (error) {
            console.error(error);
          }
    }
    const getCode = () => {
        
    }
    const isDone = e => {
        if(e.target.checked){
            document.getElementById("shorttextbox").classList.remove("display");
        }else {
            
            document.getElementById("shorttextbox").classList.add("display");
            document.getElementById("shorttextbox").value = "";
        }
        setChecked(e.target.checked);
    }

    return (
        <footer className="lower">
            <div className="longURL-box">
                <form onSubmit={onFormSubmit}>
                    <input type="text" autoComplete="off" id="longtextbox" name="longurl" placeholder="LongURL"/>
                    <input type="submit" className="submit-btn" value="Go"/>
                </form>
            </div>
            <div className="shortURL-box">
                <div className="label">
                <input type="checkbox"  id="custom" name="isCustom" onChange={isDone}/> <label id="customLabel">Custom URL</label></div>
                <input type="text" autoComplete="off" id="shorttextbox" name="shorturl" placeholder="ShortURL" className="display"/>
                <div className="result-url">
                    <h1>{shortURL}</h1>
                    <img src="./copy.svg" alt="" id="copy" width="40px" onClick={getCode}/>
                </div>
            </div>

        </footer>
    )
}
export default LinkComponent;