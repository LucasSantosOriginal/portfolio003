import React from "react";
import BackButton from "../components/BackButton";

const About: React.FC = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <BackButton />
      </header>

      <main className="page-content">
        <h1>Sobre Mim</h1>
        <p>Essa é a página About com mais informações...</p>
      </main>
    </div>
  );
};

export default About;
