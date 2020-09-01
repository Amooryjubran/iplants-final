import React from "react";
import styled from "styled-components";

function AboutUs() {
  return (
    <About>
      <div className="about">
        <h1>- About Us -</h1>
        <hr />
        <p>
          iPlants was founded in 1988 by Francis Seyrès , a Canadian French
          teacher, who was really inspired by his mom to have different types of
          plants. Francis grew up seeing his mother decorating their home with
          plants. His mother, Dona, has always wanted her own little garden
          where she can bring all types of plants. Francis decided to establish
          the iPlants company to provide people who are intresed in plants
        </p>
        <img
          class="random-person"
          src="https://randomuser.me/api/portraits/men/34.jpg"
          alt=""
        ></img>
      </div>
    </About>
  );
}

export default AboutUs;

const About = styled.div`
  text-align: center;
  margin-top: 30px;
  line-height: 30px;

  h1 {
    font-weight: 400;
  }

  hr {
    width: 180px;
  }
  img {
    border-radius: 50%;
    margin-top: 30px;
  }
  p {
    margin-top: 30px;
  }
`;
