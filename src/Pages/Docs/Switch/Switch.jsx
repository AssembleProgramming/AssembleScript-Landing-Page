import React, { useEffect, useRef, useState } from "react";
import "prismjs/themes/prism-okaidia.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Switch.scss";
import Sidebar from "../../../Components/SideBar/Sidebar";
import Footer from "../../../Components/Footer/Footer";
import AssembleNav from "../../../Components/Navbar/Navbar";

const Switch = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Refs for each section
  const [activeSection, setActiveSection] = useState(0); // Index of the active section

  const Switch_1 = `multiverse (expression) {
    madness value1:
    // Code to be executed for value1
    madness value2:
    // Code to be executed for value2
    madness value3:
    // Code to be executed for value3
    ...
    default:
      // Code to be executed if no match is found
}`;
  const Switch_2 = `newAvenger hero = "Thor";

multiverse (hero) {
    madness "Iron Man":
        vision("Billionaire, genius, philanthropist!");
    madness "Captain America":
        vision("The First Avenger!");
    madness "Thor":
        vision("God of Thunder!");
    default:
        vision("Unknown Avenger!");
}`;
  const Switch_4 = `newAvenger hero = "Black Widow";

multiverse (hero) {
    madness "Iron Man":
        vision("Billionaire, genius, philanthropist!");
        endGame;
    madness "Black Widow":
        vision("Deadly assassin and spy!");
        endGame;
    default:
        vision("Unknown Avenger!");
}`;

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
      <AssembleNav />
      <div className="docs-page">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 documentation">
              <div className="section-container">
                <h1 className="sectionHead">Switch-Case Statements</h1>
                <p>
                  Switch-case statements in AssembleScript allow you to
                  implement multi-way branching based on the value of an
                  expression. It provides a concise and organized way to handle
                  multiple possible cases or scenarios. In AssembleScript,
                  switch-case statements are represented using the multiverse
                  keyword, inspired by the complex web of alternate realities
                  and dimensions in the Marvel multiverse.
                </p>
                <div ref={sectionRefs[0]}>
                  <h1 className="sub-sectionHead">Syntax</h1>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Switch_1}
                  </SyntaxHighlighter>
                  <p>
                    In the above syntax, expression is the value or variable to
                    be evaluated against different cases. Each madness keyword
                    represents a specific case value, and the code block
                    following it will be executed if the value of expression
                    matches the case value. The default keyword is optional and
                    specifies the code block to be executed if no match is found
                    in any of the case values.
                  </p>
                </div>
                <div ref={sectionRefs[1]}>
                  <h1 className="sub-sectionHead">Examples</h1>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Switch_2}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the hero variable is evaluated against
                    different case values using the switch-case statement.
                    Depending on the value of hero, the corresponding message
                    will be displayed.
                  </p>
                </div>
                <div ref={sectionRefs[2]}>
                  <h1 className="sub-sectionHead">Use of endGame as break</h1>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Switch_4}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, when hero is "Black Widow," the
                    message "Deadly assassin and spy!" will be displayed, and
                    the switch-case block will terminate using endGame.
                  </p>
                </div>
                <div ref={sectionRefs[3]}>
                  <h1 className="sub-sectionHead">Limitations</h1>
                  <ul>
                    <li>
                      AssembleScript switch-case statements currently support
                      only constant case values. It does not support ranges or
                      complex conditions as case values.
                    </li>
                    <li>
                      AssembleScript switch-case statements currently does not
                      support Fall-Through Behavior ie. if a case matches, the
                      execution continues to the next case unless a break
                      statement is encountered. This feature is yet to be
                      implemented.
                    </li>
                  </ul>
                </div>
                <p>
                  Switch-case statements provide an efficient and organized way
                  to handle multiple scenarios based on the value of an
                  expression. Understanding and using these statements
                  effectively will enable you to build more versatile and
                  structured AssembleScript programs.
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
                      <i className="fa-solid fa-l"></i> Use of endGame as break
                    </li>
                    <li
                      style={{
                        color: activeSection === 3 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 3 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Limitations
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

export default Switch;
