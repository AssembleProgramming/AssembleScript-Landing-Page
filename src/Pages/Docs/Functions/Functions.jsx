import React, { useEffect, useRef, useState } from "react";
import "prismjs/themes/prism-okaidia.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Functions.scss";
import Sidebar from "../../../Components/SideBar/Sidebar";
import Footer from "../../../Components/Footer/Footer";
import AssembleNav from "../../../Components/Navbar/Navbar";

const Functions = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]; // Refs for each section
  const [activeSection, setActiveSection] = useState(0); // Index of the active section

  const Variable_1 = `assemble myFunction(param1, param2, ...){
# Function Body
}`;
  const Variable_2 = `assemble myFunction(param1, param2){
# Function Body
}`;
  const Variable_3 = `assemble myFunction(){
# Function Body
snap result;
}`;
  const Variable_4 = `assemble square(number){
snap number * number;
}`;
  const Variable_5 = `newAvenger result = square(5);
vision(result);
#Output: 25`;
  const Variable_6 = `assemble fact(number){
ifWorthy(number==1) {
    snap 1;
}
snap number * fact(number-1);
}`;
  const Variable_7 = `newAvenger result = fact(5);
vision(result);
#Output: 120`;

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
                <h1 className="sectionHead">Functions</h1>
                <p>
                  In <span style={{ color: "#4b32c3" }}>AssembleScript</span>,
                  functions empower you to encapsulate code, enhance modularity,
                  and promote code reuse. This documentation provides a
                  comprehensive guide on creating and utilizing user-defined
                  functions.
                </p>
                <div ref={sectionRefs[0]}>
                  <h1 className="sub-sectionHead">Defining Functions</h1>
                  <p>
                    To declare a function, use the{" "}
                    <span style={{ color: "#4b32c3" }}>`assemble`</span> keyword
                    followed by the function name and parameters, much like
                    'def' in other languages. The function body encapsulates the
                    heroic actions you want the function to perform.
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Variable_1}
                  </SyntaxHighlighter>
                </div>
                <div ref={sectionRefs[1]}>
                  <h1 className="sub-sectionHead">Params</h1>
                  <p>
                    Functions can take parameters to receive values from the
                    calling code. Parameters are listed within the parentheses,
                    and their types are implicitly inferred.
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Variable_2}
                  </SyntaxHighlighter>
                </div>
                <div ref={sectionRefs[2]}>
                  <h1 className="sub-sectionHead">Return Statement</h1>
                  <p>
                    The snap keyword serves as the return statement in
                    AssembleScript. It ends the function execution and can carry
                    a value back to the calling code.
                  </p>

                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Variable_3}
                  </SyntaxHighlighter>
                </div>
                <div ref={sectionRefs[3]}>
                  <h1 className="sub-sectionHead">Examples</h1>
                  <ul>
                    <li>
                      <p>
                        Here's an example of a simple function that calculates
                        the square of a number:
                      </p>
                      <SyntaxHighlighter language="javascript" style={oneDark}>
                        {Variable_4}
                      </SyntaxHighlighter>

                      <p>To use this function:</p>

                      <SyntaxHighlighter language="javascript" style={oneDark}>
                        {Variable_5}
                      </SyntaxHighlighter>
                    </li>
                    <li>
                      <p>
                        Here's an example of a recursive function that
                        calculates the factorial of a number:
                      </p>
                      <SyntaxHighlighter language="javascript" style={oneDark}>
                        {Variable_6}
                      </SyntaxHighlighter>

                      <p>To use this function:</p>

                      <SyntaxHighlighter language="javascript" style={oneDark}>
                        {Variable_7}
                      </SyntaxHighlighter>
                    </li>
                  </ul>
                </div>
                <div ref={sectionRefs[4]}>
                  <h1 className="sub-sectionHead">Best Practices</h1>
                  <ul>
                    <li>
                      Keep it Modular: Functions should focus on a specific task
                      to encourage code modularity.
                    </li>
                    <li>
                      Parameter Naming: Use clear and concise names for
                      parameters, enhancing code readability.
                    </li>
                    <li>
                      Return Meaningful Values: When using snap, return values
                      that convey meaning and facilitate understanding.
                    </li>
                    <li>
                      Documentation: Add comments within the function to explain
                      complex logic and usage.
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
                      <i className="fa-solid fa-l"></i> Defining Functions
                    </li>
                    <li
                      style={{
                        color: activeSection === 1 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 1 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Params
                    </li>
                    <li
                      style={{
                        color: activeSection === 2 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 2 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Return Statement
                    </li>
                    <li
                      style={{
                        color: activeSection === 3 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 3 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Examples
                    </li>
                    <li
                      style={{
                        color: activeSection === 4 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 4 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Best Practices
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

export default Functions;
