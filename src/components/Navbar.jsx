import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <a href="">
          <h1 className="logo">dodo</h1>
        </a>
        <ul className="links">
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4202/4202843.png"
              alt=""
            />
            About
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1930/1930256.png"
              alt=""
            />
            Research
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/9267/9267883.png"
              alt=""
            />{" "}
            Games
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3074/3074767.png"
              alt=""
            />
            Videos
          </li>
        </ul>
      </div>
      <div className="get-started">
        <img
          src="https://cdn-icons-png.flaticon.com/512/407/407016.png"
          alt=""
        />
        GET STARTED
      </div>
    </div>
  );
};

export default Navbar;
