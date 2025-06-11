import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import Night from "../assets/night_3.png";
import Smoking from "../assets/smoking-gif-2.gif";
import MariaAtelie from "../assets/maria-atelie-gif-01.gif";
import AfroJedi from "../assets/afro-jedit-2.png";
import SkyLandscape from "../assets/sky-landscape-01.png";

const Projects: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector(".page-container");
    container?.classList.add("projects-background");

    return () => {
      container?.classList.remove("projects-background");
    };
  }, []);

  return (
    <div className="page-container">
      <header className="page-header">
        <BackButton />
      </header>

      <main className="page-content">
        <h1>My Projects</h1>
        <p>Here are some projects that are being developed...</p>
        <div className="pixel-art">
          <h3>Pixel Art</h3>

          <figure>
            <img src={Night} className="pixel-art" />
            <figcaption>Purple Night</figcaption>
          </figure>

          <figure>
            <img src={Smoking} className="pixel-art smoking-img" />
            <figcaption>Smoking</figcaption>
          </figure>

          <figure>
            <img src={MariaAtelie} className="pixel-art Maria-img" />
            <figcaption>Maria</figcaption>
          </figure>

          <figure>
            <img src={AfroJedi} className="pixel-art afrojedi-img" />
            <figcaption>Afro Jedi</figcaption>
          </figure>
          <figure>
            <img src={SkyLandscape} className="pixel-art sky-img" />
            <figcaption>Sky LandScape</figcaption>
          </figure>
        </div>
      </main>
    </div>
  );
};

export default Projects;
