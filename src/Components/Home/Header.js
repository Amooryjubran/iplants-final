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
          <h1>
            <span>iPlants</span>
          </h1>

          <h2>
            <span className="span__topic">
              There's a reason iPlants fills every home on Montreal with plants:
              They add life to any room, purify your air, and boost your mood.
              Updating your house with greenery is also easier than ever thanks
              to new online plant delivery services.
            </span>
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
  background-position-x: 40%;
  background-position-y: -10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: -100px;
  height: 100vh;

  .home__inner {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
  }
  .home__inner img {
    height: 300px;
  }

  .home__right {
    text-align: center;
    font-weight: 100px;
  }
  .home__right h1 span {
    background: rgba(0, 0, 0, 0.75);
    color: whitesmoke;
    padding: 0 20px;
  }
  .home__right h2 {
    background: rgba(0, 0, 0, 0.75);
    color: whitesmoke;
    padding: 10px;
    line-height: 30px;
    font-size: 18px;
  }
  .home__right h1,
  h2 {
    width: 500px;
    word-wrap: break-word;
    line-height: 30px;
  }
  .home__right h1 {
  }
`;
