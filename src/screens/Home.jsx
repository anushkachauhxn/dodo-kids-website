import React from "react";
import Navbar from "../components/Navbar";
import HomeCard from "../components/HomeCard";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="main">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </section>
    </div>
  );
};

export default Home;
