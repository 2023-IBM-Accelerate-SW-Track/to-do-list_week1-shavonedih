import React, { Component } from 'react';
import "./About.css";
import LinkedIn_ProfilePic from "../assets/LinkedIn_ProfilePic.JPG";
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src = {LinkedIn_ProfilePic}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Shavon Edih</div>
        <div className="brief_description">
          I'm from Norcross, GA, and I attend Georgia Institute of Technology. My interests include going on hikes, skateboarding, playing tennis, and making jewelry.
        </div>
      </div>
    </div>
  </div> 
      </div>
    )
  }
}