import React, { useEffect, useRef, useState } from "react";
import AssembleNav from "../../../Components/Navbar/Navbar";
import "prismjs/themes/prism-okaidia.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Builtinmethods.scss";
import Sidebar from "../../../Components/SideBar/Sidebar";
import Footer from "../../../Components/Footer/Footer";
import Table from "react-bootstrap/Table";

const Builtinmethods = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)]; // Refs for each section
  const [activeSection, setActiveSection] = useState(0); // Index of the active section

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
                <h1 className="sectionHead">Built-In Methods</h1>
                <p>
                  AssembleScript provides a set of built-in methods that you can
                  use to perform various operations. These methods are
                  categorized based on their functionality.
                </p>
                <p>
                  Here's an overview of the available categories and the methods
                  within each category:
                </p>
                <div ref={sectionRefs[0]}>
                  <h1 className="sub-sectionHead">General Methods</h1>

                  <Table bordered variant="dark">
                    <thead>
                      <tr>
                        <th>Method</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>
                            typeOf(varName)
                          </span>
                        </td>
                        <td>Returns the type of the specified variable.</td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>vision(args)</span>
                        </td>
                        <td>
                          Displays the specified arguments on the console.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div ref={sectionRefs[1]}>
                  <h1 className="sub-sectionHead">Number Methods</h1>

                  <Table bordered>
                    <thead>
                      <tr>
                        <th>Method</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>time()</span>
                        </td>
                        <td>Retrieves the current time in AssembleScript.</td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>random()</span>
                        </td>
                        <td>
                          Generates a random number between 0 and 1 (exclusive).
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>abs(number)</span>
                        </td>
                        <td>Returns the absolute value of a number.</td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>
                            floor(number)
                          </span>
                        </td>
                        <td>Rounds a number up to the nearest integer.</td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>sin(angle)</span>
                        </td>
                        <td>Calculates the sine of an angle (in radians).</td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>cos(angle)</span>
                        </td>
                        <td>Calculates the cosine of an angle (in radians).</td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>tan(angle)</span>
                        </td>
                        <td>
                          {" "}
                          Calculates the tangent of an angle (in radians).
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>iSin(number)</span>
                        </td>
                        <td>
                          Calculates the inverse sine of a number (in radians).
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>iCos(number)</span>
                        </td>
                        <td>
                          Calculates the inverse cosine of a number (in
                          radians).
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>iTan(number)</span>
                        </td>
                        <td>
                          Calculates the inverse tangent of a number (in
                          radians).
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>sqrt(number)</span>
                        </td>
                        <td>Calculates the square root of a number.</td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>pow(a, b)</span>
                        </td>
                        <td>
                          Calculates the value of a raised to the power of b.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>
                            min(num1, num2)
                          </span>
                        </td>
                        <td>
                          Returns the smaller of the two specified numbers.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>
                            max(num1, num2)
                          </span>
                        </td>
                        <td>
                          Returns the larger of the two specified numbers.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>

                <div ref={sectionRefs[2]}>
                  <h1 className="sub-sectionHead">String Methods</h1>

                  <Table bordered>
                    <thead>
                      <tr>
                        <th>Method</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>len(string)</span>
                        </td>
                        <td>Returns the length of a string.</td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>
                            charAt(string, index)
                          </span>
                        </td>
                        <td>
                          Returns the character at the specified index in a
                          string.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>
                            concat(string1, string2)
                          </span>
                        </td>
                        <td>
                          Concatenates two strings and returns the result.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>
                            toLowerCase(string)
                          </span>
                        </td>
                        <td>Converts a string to lowercase.</td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>
                            toUpperCase(string)
                          </span>
                        </td>
                        <td>Converts a string to uppercase.</td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>
                            indexOf(string, char)
                          </span>
                        </td>
                        <td>
                          Returns the index of the specified character in a
                          string.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>
                            subStr(string, startIdx, endIdx)
                          </span>
                        </td>
                        <td>
                          Returns a substring of a string based on the start and
                          end indices.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style={{ color: "#4b32c3" }}>trim(string)</span>
                        </td>
                        <td>
                          Removes leading and trailing whitespace from a string.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
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
                      <i className="fa-solid fa-l"></i> General Methods
                    </li>
                    <li
                      style={{
                        color: activeSection === 1 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 1 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Number Methods
                    </li>
                    <li
                      style={{
                        color: activeSection === 2 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 2 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> String Methods
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

export default Builtinmethods;
