import React, { useEffect, useRef, useState } from "react";
import AssembleNav from "../../../Components/Navbar/Navbar";
import "prismjs/themes/prism-okaidia.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Docs.scss";
import Sidebar from "../../../Components/SideBar/Sidebar";
import Footer from "../../../Components/Footer/Footer";

const Docs = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)]; // Refs for each section
  const [activeSection, setActiveSection] = useState(0); // Index of the active section
  const DenoMacOS = `sudo npm install -g deno`;
  const DenoLinuxOS = `sudo snap install deno`;
  const DenoWindOS = `npm install -g deno`;

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
      console.log(currentSection);
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
                <h1 className="sectionHead">Welcome to AssembleScript!</h1>
                <div ref={sectionRefs[0]}>
                  <h1 className="sub-sectionHead">Getting Started</h1>
                  <p>
                    AssembleScript is a programming language specifically
                    created for avengers to write scripts and tackle challenges
                    in their heroic endeavors. It is designed to be intuitive
                    and powerful, incorporating Marvel-inspired keywords and
                    concepts to make coding a superpowered experience. With
                    AssembleScript, avengers can harness the power of
                    programming to overcome obstacles and fight against evil
                    forces.
                  </p>
                  <p>
                    AssembleScript uses the{" "}
                    <span style={{ color: "#4b32c3" }}>.avenger </span>file
                    extension for code files written in the language. When
                    creating a new script, use the .avenger extension for your
                    AssembleScript files.
                  </p>
                </div>

                <div ref={sectionRefs[1]}>
                  <h1 className="sub-sectionHead">Prerequisites</h1>
                  <p>
                    Before getting started with AssembleScript, you'll need to
                    have the following prerequisites:
                  </p>

                  <ul>
                    <li>
                      Node.js: AssembleScript relies on Node.js, which includes
                      the npm package manager. Node.js allows you to execute
                      JavaScript code outside of a browser environment and
                      provides the necessary tools for working with
                      AssembleScript.
                    </li>
                    <br />
                    <li>
                      Deno: AssembleScript is built on top of Deno, a secure
                      runtime for JavaScript and TypeScript. Deno provides a
                      secure sandboxed environment for running JavaScript and
                      TypeScript code. You can install Deno globally using npm,
                      the Node.js package manager. To install Deno, open your
                      terminal or command prompt and execute the appropriate
                      command based on your operating system:
                      <br />
                      <span style={{ color: "#4b32c3" }}>macOS:</span>
                      <SyntaxHighlighter language="bash" style={oneDark}>
                        {DenoMacOS}
                      </SyntaxHighlighter>
                      <br />
                      <span style={{ color: "#4b32c3" }}>
                        Linux (using snap):
                      </span>
                      <SyntaxHighlighter language="bash" style={oneDark}>
                        {DenoLinuxOS}
                      </SyntaxHighlighter>
                      <br />
                      <span style={{ color: "#4b32c3" }}>Windows:</span>
                      <SyntaxHighlighter language="bash" style={oneDark}>
                        {DenoWindOS}
                      </SyntaxHighlighter>
                    </li>
                    <br />
                    <li>
                      TypeScript Compiler: AssembleScript is a superset of
                      TypeScript, which means it extends the capabilities of
                      TypeScript. To compile AssembleScript code, you'll need
                      the TypeScript compiler (tsc). You can install it globally
                      using npm with the following command:
                      <SyntaxHighlighter language="bash" style={oneDark}>
                        npm install -g typescript
                      </SyntaxHighlighter>
                    </li>
                  </ul>
                </div>

                <div ref={sectionRefs[2]}>
                  <h1 className="sub-sectionHead">Quick Start</h1>
                  <p>
                    To quickly start using AssembleScript, follow these steps:
                  </p>

                  <ul>
                    <li>
                      Clone the AssembleScript repository: Begin by cloning the
                      AssembleScript repository using the following command in
                      your terminal:
                    </li>
                    <SyntaxHighlighter language="bash" style={oneDark}>
                      git clone
                      https://github.com/AssembleProgramming/AssembleScript.git
                    </SyntaxHighlighter>
                    <br />

                    <li>
                      Run the AssembleScript project: Use the following command
                      to run the AssembleScript project:
                      <SyntaxHighlighter language="bash" style={oneDark}>
                        deno run -A main.ts
                      </SyntaxHighlighter>
                    </li>
                    <br />
                    <li>
                      Formatting your code: AssembleScript provides a code
                      formatter to maintain consistent code style. You can
                      format your entire codebase using the following command:
                      <SyntaxHighlighter language="bash" style={oneDark}>
                        deno fmt
                      </SyntaxHighlighter>
                      <br />
                    </li>
                    <li>
                      Start writing your code: You can now begin writing your
                      AssembleScript code in the designated files. Add your test
                      code to the{" "}
                      <span style={{ color: "#4b32c3" }}>test.avenger</span>{" "}
                      file, which is provided in the cloned repository.
                      <br />
                    </li>
                  </ul>
                </div>
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
                      <i className="fa-solid fa-l"></i> Getting Started
                    </li>
                    <li
                      style={{
                        color: activeSection === 1 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 1 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Prerequisites
                    </li>
                    <li
                      style={{
                        color: activeSection === 2 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 2 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Quick Start
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

export default Docs;
