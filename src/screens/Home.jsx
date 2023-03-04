import React from "react";
import Navbar from "../components/Navbar";
import { RectCard, RoundCard } from "../components/HomeCard";
import "./Home.scss";
import image1 from "../assets/dora.jpeg";
import image2 from "../assets/trainscene.jpg";
import image3 from "../assets/tangled.jpg";
import image4 from "../assets/peppapig.png";
import image5 from "../assets/muppet.png";

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
    </div>
  );
};

export default Home;
