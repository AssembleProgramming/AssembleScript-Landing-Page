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
  ]; // Refs for each section
  const [activeSection, setActiveSection] = useState(0); // Index of the active section

  const Variable_1 = `assemble myFunction(param1, param2, ...){
// Function Body
}`;
  const Variable_2 = `newAvenger name = "Iron Man";`;
  const Variable_3 = `newAvenger age = 35;`;
  const Variable_4 = `newAvenger power = "Super Strength";
power = "Flight";`;
  const Variable_5 = `newAvenger globalVariable = "Global Variable";

  function exampleFunction() {
      newAvenger localVariable = "Local Variable";
      vision(globalVariable);   $ Output: "Global Variable" $
      vision(localVariable);    $ Output: "Local Variable" $
  }
  
  vision(globalVariable);   $ Output: "Global Variable" $
  vision(localVariable);    $ Output: Error: 'localVariable' is not defined`;
  const Variable_6 = `newEternal PI = 3.14159;`;

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
                <h1 className="sectionHead">Functions</h1>
                <p>
                In AssembleScript, functions empower you to encapsulate code, 
                enhance modularity, and promote code reuse. This documentation provides 
                a comprehensive guide on creating and utilizing user-defined functions.
                </p>
                <div ref={sectionRefs[0]}>
                  <h1 className="sub-sectionHead">
                  Defining Functions
                  </h1>
                  <p>
                  To declare a function, use the `assemble` keyword followed by the function name 
                  and parameters, much like 'def' in other languages. 
                  The function body encapsulates the heroic actions you want the function to perform.
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Variable_1}
                  </SyntaxHighlighter>
                  
                </div>
                <div ref={sectionRefs[1]}>
                  <h1 className="sub-sectionHead">Params</h1>
                  <p>
                  Functions can take parameters to receive values from the calling code. 
                  Parameters are listed within the parentheses, and their types are implicitly inferred.
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Variable_2}
                  </SyntaxHighlighter>

                </div>
                <div ref={sectionRefs[2]}>
                  <h1 className="sub-sectionHead">Return Statement</h1>
                  <p>
                  The snap keyword serves as the return statement in AssembleScript. 
                  It ends the function execution and can carry a value back to the calling code.
                  </p>

                  
                </div>
                <div ref={sectionRefs[3]}>
                  <h1 className="sub-sectionHead">Example</h1>
                  <p>
                  Here's an example of a simple function that calculates the square of a number:
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Variable_4}
                  </SyntaxHighlighter>



                  
                  <p>
                    To use this function:
                  </p>

                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Variable_5}
                  </SyntaxHighlighter>

                </div>
                <div ref={sectionRefs[4]}>
                  <h1 className="sub-sectionHead">Reassigning Variables</h1>
                  <p>
                    Variables in AssembleScript can be reassigned new values
                    after their initial declaration. This allows you to update
                    and modify the data stored in the variable as needed.
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Variable_4}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the variable power is initially
                    assigned the value "Super Strength." However, it is later
                    reassigned the value "Flight," reflecting a change in the
                    superhero's abilities.
                  </p>
                </div>
                <div ref={sectionRefs[5]}>
                  <h1 className="sub-sectionHead">Scope</h1>
                  <p>
                    Variables in AssembleScript have different scopes, which
                    define where the variable is accessible and can be used
                    within the code. The scope of a variable is determined by
                    where it is declared.
                  </p>
                  <ul>
                    <li>
                      Global Scope: Variables declared outside of any block have
                      global scope, meaning they can be accessed from anywhere
                      in the program.
                    </li>
                    <li>
                      Local Scope: Variables declared inside a block have local
                      scope, meaning they are only accessible within that
                      specific function or block.
                    </li>
                  </ul>
                </div>
                <div ref={sectionRefs[6]}>
                  <h1 className="sub-sectionHead">Constants</h1>
                  <p>
                    In AssembleScript, you can declare constants using the
                    newEternal keyword. Constants are similar to variables, but
                    their values cannot be changed after their initial
                    assignment.
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Variable_4}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, PI is declared as a constant and is
                    assigned the value 3.14159. Attempts to reassign PI to a
                    different value will result in an error.
                  </p>
                </div>
                <div ref={sectionRefs[7]}>
                  <h1 className="sub-sectionHead">Best Practices</h1>
                  <ul>
                    <li>
                      Choose meaningful and descriptive names for your variables
                      to make your code more readable and maintainable.
                    </li>
                    <li>
                      Initialize variables with an appropriate value to avoid
                      unexpected behavior.
                    </li>
                    <li>
                      Minimize the use of global variables to prevent unintended
                      side effects and maintain code modularity.
                    </li>
                    <li>
                      Use constants for values that should not change during the
                      program's execution.
                    </li>
                  </ul>
                  <p>
                    Understanding how to declare, assign, and work with
                    variables in AssembleScript is fundamental for building
                    powerful and flexible programs. Properly utilizing variables
                    will allow you to store and manipulate data effectively in
                    your scripts, just like assembling a team of superheroes to
                    combat evil forces in the Marvel universe.
                  </p>
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
                      <i className="fa-solid fa-l"></i> Declaration and
                      Assignment
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
                      <i className="fa-solid fa-l"></i> Data Types
                    </li>
                    <li
                      style={{
                        color: activeSection === 3 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 3 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Variable Naming Rules
                    </li>
                    <li
                      style={{
                        color: activeSection === 4 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 4 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Reassigning Variables
                    </li>
                    <li
                      style={{
                        color: activeSection === 5 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 5 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Scope
                    </li>
                    <li
                      style={{
                        color: activeSection === 6 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 6 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Constants
                    </li>
                    <li
                      style={{
                        color: activeSection === 7 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 7 ? "600" : "400",
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
