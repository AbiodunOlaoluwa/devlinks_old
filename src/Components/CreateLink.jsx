import React, { useState } from 'react'
import "./CreateLink.css"

const CreateLink = (props) => {

    const[platform, setPlatform] = useState("Github")
    const[link, setLink] = useState("");

    function handlePlatformChange(event) {
        props.setAppPlatform(event.target.value);
        setPlatform(event.target.value);
    }

    function handleLinkChange(event) {
        props.setAppLink(event.target.value);
        setLink(event.target.platform);
    }

    return (
        <div className="createLinkContainer">
            <div className="container">
                <div className="createLinkHeader">
                    <p>= <span>Link #{props.index + 1}</span></p>
                    <p onClick={() => {
                        props.delete(props.id)
                    }} className="createLinkRemoveButton">Remove</p>
                </div>
                <div className="inputBox">
                    <div className="platform">
                        <label htmlFor="platform">Platform</label>
                        <br />
                        <div className="selectContainer">
                            <select name="platform" id="platform" onChange={handlePlatformChange} value={platform}>
                                <option value="GitHub">GitHub</option>
                                <hr />
                                <option value="Frontend Mentor">Frontend Mentor</option>
                                <hr />
                                <option value="Twitter">Twitter</option>
                                <hr />
                                <option value="LinkedIn">LinkedIn</option>
                                <hr />
                                <option value="YouTube">YouTube</option>
                                <hr />
                                <option value="Facebook">Facebook</option>
                                <hr />
                                <option value="Twitch">Twitch</option>
                                <hr />
                                <option value="Dev.to">Dev.to</option>
                                <hr />
                                <option value="Codewars">Codewars</option>
                                <hr />
                                <option value="Codepen">Codepen</option>
                                <hr />
                                <option value="freeCodeCamp">freeCodeCamp</option>
                                <hr />
                                <option value="GitLab">GitLab</option>
                                <hr />
                                <option value="Hashnode">Hashnode</option>
                                <hr />
                                <option value="Stack Overflow">Stack Overflow</option>

                            </select>
                        </div>
                    </div>
                    <div className="link">
                        <label htmlFor="link">Link</label>
                        <br />
                        <div className="linkInputContainer">
                            <svg className="link-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#737373" d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z" /></svg>
                            <input type="text" className="linkTextInput" onChange={handleLinkChange} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateLink