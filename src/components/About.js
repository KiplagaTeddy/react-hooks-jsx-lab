import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>;
    <p>I was born in nairobi,Kenyatta Hospital,in the year 2006,January 3rd.Most of my life so far I've lived in the capital city but I spent a fraction of it upcountry.That really equips someone with a number of values and skills like humility,which in today's job market plays a key role.My education begins in private school found in lavington,Rudan Junior Academy I did my primary education entirely at Rudan and was blessed to be able to join Sacho High School where I completed my secondary education.Currently I am taking a short course at one of the finest institutions as far as software development is concerned and since I have a passion for all things tech why not keep busy before joining university?I could use the skills!
       I am a very highly motivated and results-oriented individual.I have the proven ability to read and understand new content faster than most people.The only experience as much as software would be my technical subject (Computer Studies)in highschool.I am,however,looking to gain more skills and experience at Moringa School.My career goals would be to maximise my content in software development and become the best in my department.</p>
    <img src={image} alt="I made this" />
  </div>;
}

export default About;
