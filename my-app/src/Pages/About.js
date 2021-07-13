import React from "react";
import image2 from '../assets/1992A.jpg'
import image from '../assets/1992.jpg'
import image3 from '../assets/tennis.jpeg'
function About() {
  return (
    <div>
      <header>
        <section className="about">
          <p>
          Tienda fundada en 1992 en la ciudad de New York por Harvey Simmons
          </p>
          <img src={image} alt="1992"></img>
          <img src={image2} alt="tienda"></img>
          <img src={image3} alt="tennis"></img>
        </section>
      </header>
    </div>
  );
}

export default About;
