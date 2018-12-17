import React from "react";
import Webcam from "react-webcam";
 
class WebcamReact extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  }
  capture = () => {
   
    const imageSrc = this.webcam.getScreenshot();
    return imageSrc
  }
  render() {
    return<>
        <Webcam 
        audio={true} 
        ref={this.setRef}
        screenshotFormat="image/jpeg"
        />
        {/* {() => this.capture} */}
        {/* <button onClick={this.capture}>Capture photo</button> */}
        
    </>
  }
}
export default WebcamReact