import React from "react";
import styled from "styled-components";
import logo from "../Assests/home-logo.png";

function Header() {
  return (
    <Home className="home____">
      <div className="home__inner">
        <div className="home__left">
          <img src={logo} alt="" />
        </div>
        <div className="home__right">
          <h1>iPlants</h1>
          <h2>
            There's a reason iPlants fills every home on Montreal with plants:
            They add life to any room, purify your air, and boost your mood.
            Updating your house with greenery is also easier than ever thanks to
            new online plant delivery services.
          </h2>
        </div>
      </div>
    </Home>
  );
}

export default Header;

const Home = styled.div`
  background-image: url("https://images.pexels.com/photos/1903973/pexels-photo-1903973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  max-width: 100%;
  margin-top: -100px;
  height: 100vh;

  .home__inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home__inner img {
    height: 300px;
  }
  .home__right {
    text-align: center;
    width: 400px;
    word-wrap: break-word;
    background-color: rgba(211, 211, 211, 0.504);
  }
`;
