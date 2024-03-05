import React from 'react'
import "./Profile.css"
import DeviceLinksPreview from '../Components/DeviceLinksPreview';

const Profile = (props) => {
  return (
    <div className="linksContainer">
      <DeviceLinksPreview linkArray={props.createLinkObjects} />
      <div className="editPanel">
        <div className="linkPageHeadingBar">
          <h1 className="linkHeading">Profile Details</h1>
          <p className="headingP">Add your details to create a personal touch to your profile.</p>
        </div>
        <div className="editPanelBody">
          
        </div>
        <hr />
        <div className="profileSavePanel">
          <button className="profileSaveButton">Save</button>
        </div>
      </div>
    </div>
  )
}

export default Profile