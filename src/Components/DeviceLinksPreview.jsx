import React from 'react'

const DeviceLinksPreview = (props) => {


  return (
    <div className="previewContainer">
      <div className="deviceOutline">
        <div className="outerOutline">
          <div className="innerOutline">
            <div className="outlineContent">
              <div className="profileContent">
                <svg className="profilePhotoAlternative" xmlns="http://www.w3.org/2000/svg" width="97" height="96" viewBox="0 0 97 96" fill="none">
                  <circle cx="48.5" cy="48" r="48" fill="#EEEEEE" />
                </svg>
                <div className="nameAndDescription">
                  <div className="nameAlternative">
                  </div>
                  <div className="descriptionAlternative"></div>
                </div>
              </div>
              <div className="linksListBox">
                {
                  props.linkArray.length === 0 ?
                    <>
                      <div className="linkBoxAlternative"></div>
                      <div className="linkBoxAlternative"></div>
                      <div className="linkBoxAlternative"></div>
                      <div className="linkBoxAlternative"></div>
                      <div className="linkBoxAlternative"></div>
                    </>
                    : () => {
                      for (let i; i <= props.linkArray.length; i++) {
                        return (
                          <div className="linkBoxAlternative">
                            <p>{props.linkArray[i].linkText}</p>
                            <p>{props.linkArray[i].platformOption}</p>
                          </div>)
                      }

                    }
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeviceLinksPreview