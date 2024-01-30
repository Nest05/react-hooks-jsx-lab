import React from "react";
import { image } from "../data/data";

function About() {
  return (<div id="about">
    <h2>About Me</h2>
    <p>If it's easy, do it easy.If it's hard, do it hard</p>
    <img src={image} alt="I made this"/>
    </div>)
}

export default About;
