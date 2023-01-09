import React, { memo } from "react";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";

function Main()
{   
  return (
    <main className="main">
        <AboutMe />
        <Portfolio />
    </main>
  );
}
  
export default memo(Main);