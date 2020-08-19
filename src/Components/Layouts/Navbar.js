import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import styled from "styled-components";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export default function Navbar() {
  const [state, setState] = useState(false);

  const handleClose = () => {
    if (state === true) {
      setState(!state);
    }
  };

  return (
    <div className="Navbar">
      <Nav>
        <div className="logo" onClick={handleClose}>
          <h1 className="logo__text">iPlants</h1>
        </div>
        <div className="arrow" onClick={() => setState(!state)}>
          <ArrowDropDownIcon style={{ marginTop: "30px" }} />
        </div>
      </Nav>

      <NavbarLinks
        onClick={handleClose}
        className={state ? "newLinks links" : "links"}
      >
        <li>
          <StyledLink to="/">iHome</StyledLink>
        </li>
        <li>
          <StyledLink to="/blogs">iBlogs</StyledLink>
        </li>
        <li>
          <StyledLink to="/inspiration">inspiration</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">iContact</StyledLink>
        </li>
        <li>
          <StyledLink to="/Basket">
            {" "}
            <ShoppingBasketIcon />
          </StyledLink>
        </li>
      </NavbarLinks>
    </div>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  .logo__text {
    background-color: lightgreen;
    color: white;
    padding: 2px 30px;
    font-weight: 100;
  }
`;

const NavbarLinks = styled.nav`
  list-style: none;

  li {
    margin: 30px 20px;
    color: black;
    &:hover {
      opacity: 0.2;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
