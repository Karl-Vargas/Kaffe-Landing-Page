import React from 'react'
import './OurStory.css';

function OurStory() {
    return (
        <div className="our-story-container">
            <video src="videos/our-story-bg.mp4" autoPlay loop muted />
            <h1>
                How it began?
            </h1>
            <h2>
                Kaffe Story<i class="fas fa-fill-drip"></i> 
            </h2>
        </div>
    )
}

export default OurStory;
