import React from 'react';
import '../App.css'
import { ButtonToOurStory, ButtonToSignUp } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="videos/coffee-video-bg-2.mp4" autoPlay loop muted /> 
            <h2>Welcome to</h2>
            <div className="title">
            <h1>
                Kaffe
                <i class="fas fa-fill-drip"></i>               
            </h1>
            
            </div>
            <p>Specialty Coffee</p>
            <div className="hero-btns">
                <ButtonToOurStory className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Who are we?
                </ButtonToOurStory>
                <ButtonToSignUp to="/signup" className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Sign In <i class="fas fa-arrow-circle-right"></i>
                </ButtonToSignUp>
            </div>
        </div>
    )
}

export default HeroSection;
