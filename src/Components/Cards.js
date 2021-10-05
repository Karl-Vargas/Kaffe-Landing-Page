import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>
                Single Origin & Blends
                <i class="fas fa-fill-drip"></i>               
            </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                        <CardItem
                            src="images/bg-ourstory.jpg"
                            label="Dark/Medium/Light"
                            text="Columbia"
                            path='/specialtycoffee'
                        />
                        <CardItem
                            src="images/bg-ourstory.jpg"
                            label="Dark/Medium/Light"
                            text="Costa-Rica"
                            path='/specialtycoffee'
                        />
                        <CardItem
                            src="images/bg-ourstory.jpg"
                            label="Dark/Medium/Light"
                            text="Blends"
                            path='/specialtycoffee'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
