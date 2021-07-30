import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button.js';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='/videos/beach.mp4' 
                autoPlay loop muted />
            <h1>WOOD SHARK OUTFITTERS</h1>
            {/* <img src='images/sm-shark.png' alt='sm-shark' /> */}
            <img src='/images/sticker-sm.png' alt='sticker-flag' /> 
            {/* <p>mico, tx  * est. 2020</p> */}
            <div className="hero-btns">
                <Button 
                    className="btns" 
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    GET STARTED
                </Button>
                
                {/* <Button 
                    className="btns" 
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    WATCH <i className='far fa-play-circle' />
                </Button> */}
            </div>
        </div>
    );
}

export default HeroSection;
