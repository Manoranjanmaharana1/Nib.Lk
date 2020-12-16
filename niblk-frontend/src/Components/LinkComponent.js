import React from 'react';

const LinkComponent = () => {
    return (
        <footer className="lower">
            <div className="longURL-box">
                <form >
                    <input type="text" autocomplete="off" id="longtextbox" name="longurl" placeholder="LongURL"/>
                    <input type="submit" className="submit-btn" value="Go"/>
                </form>
            </div>
            <div className="shortURL-box">
                <div className="label">
                <input type="radio"  id="custom" name="isCustom" /> <label id="customLabel">Custom URL</label></div>
                <input type="text" autocomplete="off" id="shorttextbox" name="shorturl" placeholder="ShortURL" className="display"/>
                <div className="result-url display">
                    <h1>nib.lk/QWe23rth</h1>
                    <img src="./copy.svg" alt="" id="copy" width="40px"/>
                </div>
            </div>

        </footer>
    )
}
export default LinkComponent;