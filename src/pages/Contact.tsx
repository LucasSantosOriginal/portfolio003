import React from "react";
import BackButton from "../components/BackButton";

const Contact: React.FC = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <BackButton />
      </header>

      <main className="page-content">
        <h1>Contact me</h1>
        <p>...</p>
      </main>
    </div>
  );
};

export default Contact;
