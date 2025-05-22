import React from "react";
import BackButton from "../components/BackButton";

const Hobbies: React.FC = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <BackButton />
      </header>

      <main className="page-content">
        <h1>My Hobbies</h1>
        <p>Here are some Hobbies...</p>
      </main>
    </div>
  );
};

export default Hobbies;
