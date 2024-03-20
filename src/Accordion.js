import { useState } from "react";

export default function Accordion() {
  const [activeSection, setActiveSection] = useState("");
  const handleClick = (section) => {
    if (section === activeSection) {
      setActiveSection("");
    } else {
      setActiveSection(section);
    }
  };
  return (
    <div>
      <div>
        <div onClick={() => handleClick("html")}>
          HTML <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div
          className={
            activeSection === "html" ? "accordion active" : "accordion"
          }
        >
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </div>
      </div>
      <div>
        <div onClick={() => handleClick("css")}>
          CSS <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div
          className={activeSection === "css" ? "accordion active" : "accordion"}
        >
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </div>
      </div>
      <div>
        <div onClick={() => handleClick("javascript")}>
          JavaScript <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div
          className={
            activeSection === "javascript" ? "accordion active" : "accordion"
          }
        >
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </div>
      </div>
    </div>
  );
}
