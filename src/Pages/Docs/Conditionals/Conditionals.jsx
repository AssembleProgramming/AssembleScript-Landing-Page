import React, { useEffect, useRef, useState } from "react";
import "prismjs/themes/prism-okaidia.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Conditionals.scss";
import Sidebar from "../../../Components/SideBar/Sidebar";
import Footer from "../../../Components/Footer/Footer";
import AssembleNav from "../../../Components/Navbar/Navbar";

const Conditionals = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]; // Refs for each section
  const [activeSection, setActiveSection] = useState(0); // Index of the active section
  const Conditional_1 = `newAvenger condition = SHIELD;

ifWorthy(condition) {
    vision("Condition is true!");
} otherwise {
    vision("Condition is false!");
}`;
  const Conditional_2 = `newAvenger age = 25;
newAvenger isAvenger = SHIELD;

ifWorthy(age >= 18) {
    ifWorthy(isAvenger) {
        vision("You are an Avenger!");
    } otherwise {
        vision("You are not an Avenger.");
    }
} otherwise {
    vision("You are not old enough.");
}`;
  const Conditional_3 = `newAvenger a = 10;
newAvenger b = 20;

ifWorthy(a < b) {
    vision("a is less than b");
} otherwise {
    vision("a is not less than b");
}`;
  const Conditional_4 = `newAvenger age = 25;
newAvenger isAvenger = SHIELD;

ifWorthy(age >= 18 && isAvenger) {
    vision("You are an adult Avenger!");
} otherwise {
    vision("You are not an adult Avenger.");
}`;
  const Conditional_5 = `newAvenger isGood = SHIELD;
newAvenger isEvil = HYDRA;

ifWorthy(isGood) {
    vision("This is good!");
} otherwise {
    vision("This is evil!");
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
      <AssembleNav/>
      <div className="docs-page">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 documentation">
              <div className="section-container">
                <h1 className="sectionHead">Conditional Statements</h1>
                <p>
                  Conditional statements allow you to control the flow of
                  execution in your AssembleScript programs based on certain
                  conditions. AssembleScript supports the ifWorthy - otherwise
                  construct for conditional branching.
                </p>
                <div ref={sectionRefs[0]}>
                  <h1 className="sub-sectionHead">ifWorthy - otherwise</h1>
                  <p>
                    The ifWorthy - otherwise statement in AssembleScript is used
                    for making decisions based on a condition. It allows you to
                    execute a block of code if the condition is true (ifWorthy)
                    and an alternative block of code if the condition is false
                    (otherwise).
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Conditional_1}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the ifWorthy statement checks if the
                    condition variable is true. If it is true, the code block
                    inside the curly braces following ifWorthy will be executed
                    and the message "Condition is true!" will be displayed. If
                    the condition is false, the code block inside the curly
                    braces following otherwise will be executed and the message
                    "Condition is false!" will be displayed.
                  </p>
                </div>

                <div ref={sectionRefs[1]}>
                  <h1 className="sub-sectionHead">
                    Nested ifWorthy - otherwise
                  </h1>
                  <p>
                    You can also nest ifWorthy - otherwise statements within
                    each other to create more complex conditional logic. Here's
                    an example:
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Conditional_2}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the outer ifWorthy statement checks if
                    the age variable is greater than or equal to 18. If it is
                    true, the inner ifWorthy statement checks if the isAvenger
                    variable is true. Depending on the conditions, different
                    messages will be displayed.
                  </p>
                </div>

                <div ref={sectionRefs[2]}>
                  <h1 className="sub-sectionHead">
                    Using Comparison Operators
                  </h1>
                  <p>
                    In conditional statements, you can use comparison operators
                    to compare values and make decisions based on the comparison
                    result. AssembleScript supports the following comparison
                    operators:
                  </p>

                  <ul>
                    <li> {"==: Equal to"}</li>
                    <li> {"!=: Not equal to"}</li>
                    <li> {"<: Less than"} </li>
                    <li> {">: Greater than"}</li>
                    <li>{"<=: Less than or equal to"}</li>
                    <li>{">=: Greater than or equal to"}</li>
                  </ul>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Conditional_3}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the ifWorthy statement compares the
                    values of variables a and b using the {"<"} operator. If a
                    is less than b, the message "a is less than b" is displayed;
                    otherwise, the message "a is not less than b" is displayed.
                  </p>
                </div>
                <div ref={sectionRefs[3]}>
                  <h1 className="sub-sectionHead">Logical Operators</h1>
                  <p>
                    You can use logical operators (&&, and, ||, or) to combine
                    multiple conditions in a conditional statement. These
                    operators allow you to create more complex conditions by
                    combining simple conditions.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Conditional_4}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the ifWorthy statement checks if both
                    the conditions (age {">="} 18 and isAvenger) are true. If
                    both conditions are true, the message "You are an adult
                    Avenger!" is displayed; otherwise, the message "You are not
                    an adult Avenger." is displayed.
                  </p>
                </div>
                <div ref={sectionRefs[4]}>
                  <h1 className="sub-sectionHead">
                    The SHIELD (True) and HYDRA (False) Keywords
                  </h1>
                  <p>
                    In AssembleScript, the SHIELD keyword is used to represent
                    the boolean value true, while the HYDRA keyword is used to
                    represent the boolean value false. These keywords can be
                    used in conditional statements for clearer and more
                    expressive code.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Conditional_5}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the ifWorthy statement checks if the
                    isGood variable is true. If it is true (SHIELD), the message
                    "This is good!" is displayed; otherwise, the message "This
                    is evil!" is displayed.
                  </p>
                  <p>
                    Conditional statements allow you to control the flow of your
                    AssembleScript programs based on different conditions. Use
                    them to make decisions and execute specific blocks of code
                    based on the evaluation of conditions.
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
                      <i className="fa-solid fa-l"></i> ifWorthy - otherwise
                    </li>
                    <li
                      style={{
                        color: activeSection === 1 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 1 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Nested ifWorthy -
                      otherwise
                    </li>
                    <li
                      style={{
                        color: activeSection === 2 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 2 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Using Comparison
                      Operators
                    </li>
                    <li
                      style={{
                        color: activeSection === 3 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 3 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Logical Operators
                    </li>
                    <li
                      style={{
                        color: activeSection === 4 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 4 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> The SHIELD (True) and
                      HYDRA (False) Keywords
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

export default Conditionals;
