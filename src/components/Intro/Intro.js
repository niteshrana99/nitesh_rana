import React from 'react'
import profilePhoto from '../../../src/assets/images/profile.jpeg'

const Intro = () => {

    const gotoAboutMeSection = () => {
        console.log(window.location.hash)
        window.location.hash = "#section-about";
    }
    

    return (
        <div className="intro">
            <div className="intro_text">
                <h1 className="intro_heading">Hey, I'm Nitesh.</h1>
                <p className="intro_info">I am a MERN stack Web developer from Banaglore in India. I create bespoke websites to help people go further online.</p>
                <button className="round_btn" onClick={gotoAboutMeSection}>About Me</button>
            </div>
            <div className="intro_photo_container">
                <img src={profilePhoto} className="intro_photo" data-aos="flip-up" />
            </div>
        </div>
    )
}

export default Intro
