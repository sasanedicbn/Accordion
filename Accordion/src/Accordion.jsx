
import React, { useState } from "react";
import "./App.css"; 

const Accordion = ({ question }) => {
  const [active, setActive] = useState(false);

  function showDescription() {
    setActive((active) => !active);
  }

  return (
    <section className="accordion-section">
      <div className="accordion-item">
        <h2 className="accordion-title">{question.title}</h2>
        <button
          className={`accordion-toggle ${active ? "active" : ""}`}
          onClick={showDescription}
        >
          {active ? "-" : "+"}
        </button>
      </div>
      {active && (
        <p className="accordion-info">{question.info}</p>
      )}
    </section>
  );
};

export default Accordion;

