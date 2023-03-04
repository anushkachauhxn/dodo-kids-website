import React from "react";
import "./Navbar.scss";
import AboutIcon from "../assets/about.png";
import ResearchIcon from "../assets/research.png";
import GameIcon from "../assets/game.png";
import VideoIcon from "../assets/video.png";
import RocketIcon from "../assets/rocket.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <a href="">
          <h1 className="logo">dodo</h1>
        </a>
        <ul className="links">
          <li>
            <img src={AboutIcon} alt="" /> About
          </li>
          <li>
            <img src={ResearchIcon} alt="" /> Research
          </li>
          <li>
            <img src={GameIcon} alt="" /> Games
          </li>
          <li>
            <img src={VideoIcon} alt="" /> Videos
          </li>
        </ul>
      </div>
      <div className="get-started">
        <img src={RocketIcon} alt="" /> GET STARTED
      </div>
    </div>
  );
};

export default Navbar;
