import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar() {
    return (
        <Nav>
            <div className="logo">
                <h1 className="logo__text">iPlants</h1>
            </div>
            <NavbarLinks>
                <li><StyledLink to="/">iHome</StyledLink></li>
                <li><StyledLink to='/blogs'>iBlogs</StyledLink></li>
                <li><StyledLink to="/inspiration">inspiration</StyledLink></li>
                <li><StyledLink to='/contact'>iContact</StyledLink></li>
            </NavbarLinks>
        </Nav>
    )
}

const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    .logo__text{
        background-color: lightgreen;
        color: white;
        padding: 2px 30px;
        font-weight: 100;
    }

`;

const NavbarLinks = styled.nav`
    list-style: none;
    display: flex;
    
    
    
    li{
        margin: 30px 20px;
        color: black;
        &:hover{
            opacity: 0.2;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;





