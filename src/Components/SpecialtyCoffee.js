import React from 'react';
import './SpecialtyCoffee.css';
import CardItem from './CardItem';
import './Cards.css'


function SpecialtyCoffee() {
    return (
        <div className="specialty-coffee-container">
            <video src="videos/specialty-coffee-bg.mp4" autoPlay loop muted />
            <h1>
                Specialty Coffee
            </h1>
            <h2>
                Single Origin &
                Blends <i class="fas fa-fill-drip"></i>
            </h2>
            <div className="cards__wrapper">
                <ul className="cards__item">
                    <CardItem
                        src="images/bg-ourstory.jpg"
                        text="Huila"
                        label="Columbia"
                        path='/specialtycoffee'
                    />
                    <CardItem
                        src="images/bg-ourstory.jpg"
                        text="Tolima"
                        label="Columbia"
                        path='/specialtycoffee'
                    />
                    <CardItem
                        src="images/bg-ourstory.jpg"
                        text="Narino"
                        label="Columbia"
                        path='/specialtycoffee'
                    />
                    <CardItem
                        src="images/bg-ourstory.jpg"
                        text="Turkish Coffee"
                        label="Blend Med"
                        path='/specialtycoffee'
                    />
                </ul>
                <ul className="cards__item">
                    <CardItem
                        src="images/bg-ourstory.jpg"
                        text="Tres-Rios"
                        label="Costa-Rica"
                        path='/specialtycoffee'
                    />
                    <CardItem
                        src="images/bg-ourstory.jpg"
                        text="Narnajo"
                        label="Costa-Rica"
                        path='/specialtycoffee'
                    />
                    <CardItem
                        src="images/bg-ourstory.jpg"
                        text="Turrialba"
                        label="Costa-Rica"
                        path='/specialtycoffee'
                    />
                    <CardItem
                        src="images/bg-ourstory.jpg"
                        text="Turkish Coffee"
                        label="Blend Dark"
                        path='/specialtycoffee'
                    />
                </ul>
            </div>
        </div>

    );
}

export default SpecialtyCoffee;