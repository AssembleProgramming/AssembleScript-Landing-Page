import React, { useEffect, useRef, useState } from "react";
import "prismjs/themes/prism-okaidia.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Operators.scss";
import Sidebar from "../../../Components/SideBar/Sidebar";
import Footer from "../../../Components/Footer/Footer";
import AssembleNav from "../../../Components/Navbar/Navbar";

const Operators = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]; // Refs for each section
  const [activeSection, setActiveSection] = useState(0); // Index of the active section

  const Operator_1 = `newAvenger result = 5 + 3;   $ result = 8 $`;
  const Operator_2 = `newAvenger result = 10 - 3;   $ result = 7 $`;
  const Operator_3 = `newAvenger result = 4 * 2;   $ result = 8 $  `;
  const Operator_4 = `newAvenger result = 10 / 2;   $ result = 5 $  `;
  const Operator_5 = `newAvenger result = 10 % 3;   $ result = 1 $  `;
  const Operator_6 = `newAvenger result = 2 ^ 3;   $ result = 8 $`;
  const Operator_7 = `newAvenger power = "Super Strength";`;
  const Operator_8 = `newAvenger health = 100;
health += 50;   $ health = 150 $`;
  const Operator_9 = `newAvenger score = 100;
  score -= 20;   $ score = 80 $`;
  const Operator_10 = `newAvenger price = 10;
price *= 2;   $ price = 20 $`;
  const Operator_11 = `newAvenger quantity = 10;
quantity /= 2;   $ quantity = 5 $`;
  const Operator_12 = `newAvenger result = 5 == 5;   $ result = true $`;
  const Operator_13 = `newAvenger result = 5 != 3;   $ result = true $`;
  const Operator_14 = `newAvenger result = 5 > 3;   $ result = true $`;
  const Operator_15 = `newAvenger result = 5 < 3;   $ result = false $`;
  const Operator_16 = `newAvenger result = 5 >= 3;   $ result = true $`;
  const Operator_17 = `newAvenger result = 5 <= 3;   $ result = false $`;
  const Operator_18 = `newAvenger result = SHIELD && HYDRA;   $ result = false $`;
  const Operator_19 = `newAvenger result = SHIELD || HYDRA;   $ result = true $`;
  const Operator_20 = `newAvenger result = !SHIELD;   $ result = false $`;
  const Operator_21 = `newAvenger name = "Iron";
newAvenger fullName = name + " Man";   $ fullName = "Iron Man" $`;
  const Operator_22 = `team avengers[4] = {"Iron Man", "Captain America", "Thor"};
newAvenger firstAvenger = avengers[0];   $ firstAvenger = "Iron Man" $`;

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
                <h1 className="sectionHead">Operators</h1>
                <p>
                  Operators in AssembleScript allow you to perform various
                  operations on data, such as arithmetic calculations, logical
                  comparisons, and more. Understanding and utilizing these
                  operators is essential for manipulating and processing values
                  effectively. AssembleScript supports a wide range of
                  operators, including arithmetic, assignment, comparison,
                  logical, and more.
                </p>
                <div ref={sectionRefs[0]}>
                  <h1 className="sub-sectionHead">Arithmetic Operators</h1>
                  <p>
                    Arithmetic operators are used to perform mathematical
                    calculations on numeric values. AssembleScript supports the
                    following arithmetic operators:
                  </p>
                  <ul>
                    <li>Addition (+): Adds two values together.</li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_1}
                    </SyntaxHighlighter>
                    <li>Subtraction (-): Subtracts one value from another.</li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_2}
                    </SyntaxHighlighter>
                    <li>Multiplication (*): Multiplies two values.</li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_3}
                    </SyntaxHighlighter>
                    <li>Division (/): Divides one value by another.</li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_4}
                    </SyntaxHighlighter>
                    <li>Modulo (%): Returns the remainder after division.</li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_5}
                    </SyntaxHighlighter>
                    <li>Exponentiation (^): Raises a value to a power.</li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_6}
                    </SyntaxHighlighter>
                  </ul>
                </div>
                <div ref={sectionRefs[1]}>
                  <h1 className="sub-sectionHead">Assignment Operators</h1>
                  <p>
                    Assignment operators are used to assign values to variables.
                    AssembleScript supports the following assignment operators:
                  </p>
                  <ul>
                    <li>Assignment (=): Assigns a value to a variable.</li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_7}
                    </SyntaxHighlighter>

                    {/* <div>
                      <li>
                        Addition Assignment (+=): Adds a value to an existing
                        variable and assigns the result back to the variable.
                      </li>
                      <SyntaxHighlighter language="javascript" style={oneDark}>
                        {Operator_8}
                      </SyntaxHighlighter>
                      <li>
                        Subtraction Assignment (-=): Subtracts a value from an
                        existing variable and assigns the result back to the
                        variable.
                      </li>
                      <SyntaxHighlighter language="javascript" style={oneDark}>
                        {Operator_9}
                      </SyntaxHighlighter>
                      <li>
                        Multiplication Assignment (*=): Multiplies an existing
                        variable by a value and assigns the result back to the
                        variable.
                      </li>
                      <SyntaxHighlighter language="javascript" style={oneDark}>
                        {Operator_10}
                      </SyntaxHighlighter>
                      <li>
                        Division Assignment (/=): Divides an existing variable
                        by a value and assigns the result back to the variable.
                      </li>
                      <SyntaxHighlighter language="javascript" style={oneDark}>
                        {Operator_11}
                      </SyntaxHighlighter>
                    </div> */}
                  </ul>
                </div>
                <div ref={sectionRefs[2]}>
                  <h1 className="sub-sectionHead">Comparison Operators</h1>
                  <p>
                    Comparison operators are used to compare values and return a
                    boolean result (true or false). AssembleScript supports the
                    following comparison operators:
                  </p>
                  <ul>
                    <li>Equal to (==): Checks if two values are equal.</li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_12}
                    </SyntaxHighlighter>
                    <li>
                      Not equal to (!=): Checks if two values are not equal.
                    </li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_13}
                    </SyntaxHighlighter>
                    <li>
                      Greater than ({">"}): Checks if the left value is greater
                      than the right value.
                    </li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_14}
                    </SyntaxHighlighter>
                    <li>
                      Less than ({"<"}): Checks if the left value is less than
                      the right value.
                    </li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_15}
                    </SyntaxHighlighter>
                    <li>
                      Greater than or equal to ({">="}): Checks if the left
                      value is greater than or equal to the right value.
                    </li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_16}
                    </SyntaxHighlighter>
                    <li>
                      Less than or equal to ({"<="}): Checks if the left value
                      is less than or equal to the right value.
                    </li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_17}
                    </SyntaxHighlighter>
                  </ul>
                </div>
                <div ref={sectionRefs[3]}>
                  <h1 className="sub-sectionHead">Logical Operators</h1>
                  <p>
                    Logical operators are used to perform logical operations on
                    boolean values. AssembleScript supports the following
                    logical operators:
                  </p>
                  <ul>
                    <li>
                      Logical AND (&& or and): Returns true if both operands are
                      true.
                    </li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_18}
                    </SyntaxHighlighter>
                    <li>
                      Logical OR (|| or or): Returns true if at least one of the
                      operands is true.
                    </li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_19}
                    </SyntaxHighlighter>
                    <li>Logical NOT (!): Negates a boolean value.</li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_20}
                    </SyntaxHighlighter>
                  </ul>
                </div>
                <div ref={sectionRefs[4]}>
                  <h1 className="sub-sectionHead">Other Operators</h1>
                  <p>
                    AssembleScript also supports other operators that serve
                    specific purposes:
                  </p>
                  <ul>
                    <li>
                      String Concatenation (+): Concatenates two strings
                      together.
                    </li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_21}
                    </SyntaxHighlighter>
                    <li>
                      Array Indexing ([]): Accesses an element at a specific
                      index in an array.
                    </li>
                    <SyntaxHighlighter language="javascript" style={oneDark}>
                      {Operator_22}
                    </SyntaxHighlighter>
                  </ul>
                  <p>
                    Understanding and utilizing these operators will enable you
                    to perform various operations on values, make comparisons,
                    and manipulate data effectively in AssembleScript.
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
                      <i className="fa-solid fa-l"></i> Arithmetic Operators
                    </li>
                    <li
                      style={{
                        color: activeSection === 1 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 1 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Assignment Operators
                    </li>
                    <li
                      style={{
                        color: activeSection === 2 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 2 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Comparison Operators
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
                      <i className="fa-solid fa-l"></i> Other Operators
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

export default Operators;
