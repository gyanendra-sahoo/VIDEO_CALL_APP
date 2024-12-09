import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Landing = () => {
  return (
    <div className="landingPageContainer">
      <header>
        <nav>
          <div className="navHeader">
            <h1>Connectify</h1>
          </div>
          <ul className="navList">
            <li><Link to="/guest">Join as Guest</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>

      <main className="landingMainContainer">
        <section className="textContainer">
          <h2>
            <span className="coloredText">Connect</span> Instantly, Anywhere, Anytime.
          </h2>
          <p>Cover the long distance with Connectify</p>
          <div role="button" className="ctaButton">
            <Link to="/home">Get Started</Link>
          </div>
        </section>

        <figure className="imageContainer">
          <img src="mobile.png" alt="Mobile video call preview" />
        </figure>
      </main>
    </div>
  );
};

export default Landing;
