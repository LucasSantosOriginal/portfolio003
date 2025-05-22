import React from "react";
import BackButton from "../components/BackButton";

const Projects: React.FC = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <BackButton />
      </header>

      <main className="page-content">
        <h1>My Projects</h1>
        <p>Here are some projects that are being developed...</p>
      </main>
    </div>
  );
};

export default Projects;
