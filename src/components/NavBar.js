import React from "react";
import Links from "./Links";

function NavBar() {
const links = ["home", "about", "projects"];
  

const content = links.map((links) => 
<Links
key={links.links}/>
);


  return (
    /* display an <a> tag for each link here */
    <div key={links.links}>
    <a href="#home" >Home</a>
    <a href="#about" >About</a>
    <a href="#projects">Projects</a>
    </div>
  )
  }


export default NavBar;
