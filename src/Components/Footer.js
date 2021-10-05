import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <h1 className="footer-subscription-heading">
                    Let's talk
                    <i class="fas fa-phone"></i>
                </h1>
                <p className="footer-subscription-text">
                    Espresso on us
                    <i class="fas fa-fill-drip"></i>
                </p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input" type="text" placeholder="Full Name" name="Email" />
                        <input className="footer-input" type="email" placeholder="Enter your E-mail" name="Email" />
                        <br />
                        <textarea className="footer-input" type="text-area" placeholder="Say what you need to say - John Mayer" rows="3" cols="50" />
                        <br />
                        <button className="btn btn-secondary">
                            Send
                        </button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Join us</h2>
                        <Link to="/signup">
                            Sign up
                        </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Specialty Coffee</h2>
                        <Link to="/specialtycoffee">
                            Columbia & <br /> Costa-Rica
                        </Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Our story</h2>
                        <Link to="/ourstory">
                            Story of Kaffe
                        </Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Branches</h2>
                        <ul>
                            <li>Branch 1</li>
                            <li>Branch 1</li>
                            <li>Roastry Shop</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Hours</h2>
                        <ul>
                            <li>Sunday-Monday: 07:30-18:00</li>
                            <li>Friday: 07:30-16:00</li>
                            <li>Saturday: 10:00-16:00</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Kaffe <i className="fas fa-fill-drip"></i>
                        </Link>
                    </div>
                    <small className="website-rights">
                        &copy;Karl Vargas
                    </small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link youtube"
                            to="/"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                            to="/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer;
