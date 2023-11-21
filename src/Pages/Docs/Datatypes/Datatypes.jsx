import React, { useEffect, useRef, useState } from "react";
import "prismjs/themes/prism-okaidia.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Datatypes.scss";
import Sidebar from "../../../Components/SideBar/Sidebar";
import Footer from "../../../Components/Footer/Footer";
import AssembleNav from "../../../Components/Navbar/Navbar";

const Datatypes = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]; // Refs for each section
  const [activeSection, setActiveSection] = useState(0); // Index of the active section
  const datatypes_1 = `newAvenger age = 30;              $ Integer number $
newAvenger temperature = 25.5;    $ Floating-point number $`;
  const datatypes_2 = `newAvenger name = "Iron Man";`;
  const datatypes_3 = `newAvenger isAvenger = SHIELD;
newAvenger isEvil = HYDRA;`;
  const datatypes_4 = `newAvenger power = null;`;
  const datatypes_5 = `team avengers[4] = {'Captain America', 'Iron Man', 'Thor', 'Hulk'};`;
  const datatypes_6 = `newAvenger age = 30;

vision(typeOf(age));   $ Output: 'number' $`;

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
                <h1 className="sectionHead">Data Types</h1>
                <p>
                  AssembleScript supports several data types that allow you to
                  store and manipulate different kinds of values. Understanding
                  these data types is crucial for writing effective and
                  efficient code.
                </p>

                <div ref={sectionRefs[0]}>
                  <h1 className="sub-sectionHead">Number</h1>
                  <p>
                    The number data type represents numeric values, including
                    integers and floating-point numbers. In AssembleScript, you
                    can perform various mathematical operations on numbers, such
                    as addition, subtraction, multiplication, and division.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {datatypes_1}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, age represents an integer value, while
                    temperature represents a floating-point number.
                  </p>
                </div>

                <div ref={sectionRefs[1]}>
                  <h1 className="sub-sectionHead">String</h1>
                  <p>
                    The string data type represents a sequence of characters.
                    You can use strings to store and manipulate text-based data.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {datatypes_2}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, name represents a string value with
                    the text "Iron Man".
                  </p>
                </div>

                <div ref={sectionRefs[2]}>
                  <h1 className="sub-sectionHead">Boolean</h1>
                  <p>
                    The boolean data type represents a logical value that can be
                    either true or false. Booleans are commonly used in
                    conditional statements and logical operations.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {datatypes_3}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, isAvenger is set to true, indicating
                    that the avenger is part of the team, while isEvil is set to
                    false, indicating that the avenger is not evil.
                  </p>
                </div>
                <div ref={sectionRefs[3]}>
                  <h1 className="sub-sectionHead">Null</h1>
                  <p>
                    The null data type represents the absence of a value. It is
                    often used to indicate the absence of an object or the
                    intentional assignment of no value to a variable.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {datatypes_4}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, power is set to null, indicating that
                    there is no assigned value for the avenger's power.
                  </p>
                </div>
                <div ref={sectionRefs[4]}>
                  <h1 className="sub-sectionHead">Array</h1>
                  <p>
                    The array data type allows you to store multiple values in a
                    single variable. Arrays in AssembleScript are ordered
                    collections of values, where each value is assigned an index
                    starting from 0.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {datatypes_5}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, avengers represents an array of size
                    4, storing the names of four avengers.
                  </p>
                </div>
                <div ref={sectionRefs[5]}>
                  <h1 className="sub-sectionHead">Understanding Data Types</h1>
                  <p>
                    You can use the typeOf(varName) method to determine the data
                    type of a variable at runtime.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {datatypes_6}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the typeOf(age) method returns the
                    data type of the age variable, which is number.
                  </p>
                </div>
                <p>
                  Understanding and utilizing the different data types available
                  in AssembleScript will enable you to handle various types of
                  data effectively in your programs.
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
                      <i className="fa-solid fa-l"></i> Number
                    </li>
                    <li
                      style={{
                        color: activeSection === 1 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 1 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> String
                    </li>
                    <li
                      style={{
                        color: activeSection === 2 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 2 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Boolean
                    </li>
                    <li
                      style={{
                        color: activeSection === 3 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 3 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Null
                    </li>
                    <li
                      style={{
                        color: activeSection === 4 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 4 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Array
                    </li>
                    <li
                      style={{
                        color: activeSection === 5 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 5 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Understanding Data Types
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

export default Datatypes;
