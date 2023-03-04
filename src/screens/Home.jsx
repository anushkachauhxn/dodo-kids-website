import React from "react";
import Navbar from "../components/Navbar";
import { RectCard, RoundCard } from "../components/HomeCard";
import "./Home.scss";
import image1 from "../assets/dora.jpeg";
import image2 from "../assets/trainscene.jpg";
import image3 from "../assets/tangled.jpg";
import image4 from "../assets/peppapig.png";
import image5 from "../assets/muppet.png";
import image from "../assets/kidpointing.jpg";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <section className="main">
        <RectCard image={image1} label="Oscar's Junk My Jacket" type="game" />
        <RectCard image={image2} label="Monsta Music" type="game" />
        <RectCard image={image3} label="Make Your Own Art" type="video" />
        <RoundCard image={image4} type="video" />
        <RoundCard image={image5} type="video" />
      </section>

      <section className="content">
        <div className="text">
          <h2>How it works</h2>
          <p>
            This is a platform for small kids to interact with themselves and
            their surroundings using gestures. Several studies have proven that
            gestures are tremendously helpful in child development. They can
            help counteract communication problems in kids from the very
            beginning.
          </p>
          <p>
            We bring to you <span>dodo</span> - an AI/ML based learning tool for
            kids that gamifies the process of learning and using gestures in
            daily life.
          </p>
          <button>Learn More</button>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
