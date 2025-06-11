import { useNavigate } from "react-router-dom";
import PixelTransition from "./PixelTransition";

import botaoAbout from "../assets/botaoAbout.png";
import botaoProject from "../assets/botaoProjects.png";
import botaoHobbies from "../assets/botaoHobbies.png";
import botaoContact from "../assets/botaoContact.png";
import arrow from "../assets/arrow.png"; // sua seta pixel art

import { useState } from "react";

export default function Menu() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // controla hover
  const buttons = [
    { src: botaoAbout, alt: "About Me", route: "/about" },
    { src: botaoProject, alt: "My Projects", route: "/projects" },
    { src: botaoHobbies, alt: "My Hobbies", route: "/hobbies" },
    { src: botaoContact, alt: "Contact me", route: "/contact" },
  ];

  const handleNavigate = (route: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(route);
    }, 1000);
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">LUCAS WORLD</h1>
      {isTransitioning && <PixelTransition />}
      {buttons.map((btn, i) => (
        <div
          key={i}
          className="menu-button-wrapper"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleNavigate(btn.route)}
          style={{
            position: "relative",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {hoveredIndex === i && (
            <img
              src={arrow}
              alt="Seta"
              className="menu-arrow"
              style={{ width: "40px", height: "40px" }}
            />
          )}
          <img src={btn.src} alt={btn.alt} className="menu-button-image" />
        </div>
      ))}
    </div>
  );
}
