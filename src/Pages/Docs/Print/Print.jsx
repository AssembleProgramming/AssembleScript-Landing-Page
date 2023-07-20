import React, { useEffect, useRef, useState } from "react";
import "prismjs/themes/prism-okaidia.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Print.scss";
import Sidebar from "../../../Components/SideBar/Sidebar";
import Footer from "../../../Components/Footer/Footer";
import AssembleNav from "../../../Components/Navbar/Navbar";

const Print = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)]; // Refs for each section
  const [activeSection, setActiveSection] = useState(0); // Index of the active section

  const Print_1 = `vision(expression);`;
  const Print_2 = `vision("Hello, Avengers!");`;
  const Print_3 = `newAvenger name = "Iron Man";
vision(name);`;
  const Print_4 = `newAvenger a = 5;
newAvenger b = 10;
vision("The sum of a and b is: " + (a + b));`;
  const Print_5 = `npm install -g deno`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setActiveSection(0);
        return;
      }
      let currentSection = 0;

      sectionRefs.forEach((ref, index) => {
        const { top, bottom } = ref.current.getBoundingClientRect();

        if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
          currentSection = index;
        }
      });
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AssembleNav/>
      <div className="docs-page">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 documentation">
              <div className="section-container">
                <h1 className="sectionHead">Print Statement</h1>
                <p>
                  The print statement in AssembleScript allows you to display
                  output to the console or standard output. It is used to
                  visualize and communicate information during program
                  execution. The print statement is represented by the keyword
                  vision in AssembleScript, inspired by the enhanced vision and
                  perception of the Marvel superhero Vision.
                </p>
                <div ref={sectionRefs[0]}>
                  <h1 className="sub-sectionHead">Syntax</h1>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Print_1}
                  </SyntaxHighlighter>
                  <p>
                    In the above syntax, expression represents the value or
                    message to be displayed. It can be a string, a variable, or
                    an expression that evaluates to a printable value.
                  </p>
                </div>
                <div ref={sectionRefs[1]}>
                  <h1 className="sub-sectionHead">Examples</h1>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Print_2}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the message "Hello, Avengers!" will be
                    displayed in the console.
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Print_3}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the value stored in the variable name
                    ("Iron Man") will be displayed.
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Print_4}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the sum of variables a and b will be
                    calculated and displayed as part of the message.
                  </p>
                </div>
                <div ref={sectionRefs[2]}>
                  <h1 className="sub-sectionHead">Special Considerations</h1>
                  <ul>
                    <li>
                      In AssembleScript, the print statement is referred to as
                      vision. It is inspired by the enhanced vision and
                      perception of the Marvel superhero Vision.
                    </li>
                    <li>
                      The print statement can be used to display any printable
                      value, including strings, numbers, and the results of
                      expressions.
                    </li>
                    <li>
                      It is important to ensure that the values or expressions
                      passed to the print statement are compatible with each
                      other to avoid unexpected results.
                    </li>
                  </ul>
                </div>
                <p>
                  Utilizing the print statement effectively will enable you to
                  visualize and communicate important information during the
                  execution of your AssembleScript programs.
                </p>
              </div>
              <div className="currentSection">
                <div
                  className="currentSection-index"
                  style={{ background: "#FFF" }}
                >
                  <p className="toc">Table of Contents</p>
                  <ul className="current-section-list">
                    <li
                      style={{
                        color: activeSection === 0 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 0 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Syntax
                    </li>
                    <li
                      style={{
                        color: activeSection === 1 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 1 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Examples
                    </li>
                    <li
                      style={{
                        color: activeSection === 2 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 2 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Special Considerations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Print;
