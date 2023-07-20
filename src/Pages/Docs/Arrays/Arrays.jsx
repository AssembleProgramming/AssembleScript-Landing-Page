import React, { useEffect, useRef, useState } from "react";
import "prismjs/themes/prism-okaidia.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Arrays.scss";
import Sidebar from "../../../Components/SideBar/Sidebar";
import Footer from "../../../Components/Footer/Footer";
import AssembleNav from "../../../Components/Navbar/Navbar";

const Arrays = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]; // Refs for each section
  const [activeSection, setActiveSection] = useState(0); // Index of the active section
  const Array_1 = `team avengers(4) = {'Captain America', 'Iron Man', 'Thor', 'Hulk'};`;
  const Array_2 = `team avengers(4) = {"Captain America", "Iron Man", "Thor", "Hulk"};

newAvenger firstAvenger = avengers[0];
newAvenger secondAvenger = avengers[1];
  
vision(firstAvenger);     $ Output: 'Captain America' $
vision(secondAvenger);    $ Output: 'Iron Man' $`;
  const Array_3 = `team avengers(4) = {"Captain America", "Iron Man", "Thor", "Hulk"};

vision(avengers[2]);    $ Output: Thor $
vision(avengers[3]);    $ Output: Hulk $

avengers[2] = "Spider-Man";
avengers[3] = "Black Widow";
  
vision(avengers[2]);    $ Output: Spider-Man $
vision(avengers[3]);    $ Output: Black Widow $`;

  const Array_4 = `team avengers(4) = {"Captain America", "Iron Man", "Thor", "Hulk"};

wakandaFor i in 0 to len(avengers) {
    vision(avengers[i]);
}`;
  const Array_5 = `team avengers(4) = {"Captain America", "Iron Man", "Thor", "Hulk"};

newAvenger i = 0;
fightUntil (i < len(avengers)) {
    vision(avengers[i]);
    i = i + 1;
}`;

  const Array_6 = `team matrix(3) = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

newAvenger element = matrix[1][2];
  
vision(element);    $ Output: 6 $`;

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
                <h1 className="sectionHead">Arrays</h1>
                <p>
                  Arrays in{" "}
                  <span style={{ color: "#4b32c3" }}>AssembleScript</span> allow
                  you to store multiple values of the same data type in a single
                  variable. You can perform various operations on arrays, such
                  as accessing individual elements, modifying values, and
                  iterating over the elements.
                </p>

                <div ref={sectionRefs[0]}>
                  <h1 className="sub-sectionHead">Array Declaration</h1>
                  <p>
                    To declare an array in AssembleScript, use the{" "}
                    <span style={{ color: "#4b32c3" }}>team</span> keyword
                    followed by the array name and the size of the array in
                    parentheses. Initialize the array with values enclosed in
                    curly braces.
                  </p>
                  <p>
                    Here's an example:
                    <SyntaxHighlighter language="css" style={oneDark}>
                      {Array_1}
                    </SyntaxHighlighter>
                  </p>
                  <p>
                    In the above example, an array named{" "}
                    <span style={{ color: "#4b32c3" }}>avengers</span> is
                    declared with a size of 4. It is initialized with four
                    values: 'Captain America', 'Iron Man', 'Thor', and 'Hulk'.
                  </p>
                </div>

                <div ref={sectionRefs[1]}>
                  <h1 className="sub-sectionHead">Accessing Array Elements</h1>
                  <p>
                    You can access individual elements of an array using square
                    brackets <span style={{ color: "#4b32c3" }}>'[]'</span> with
                    the index position. Remember that array indices start from
                    0.
                  </p>
                  <p>
                    Here's an example:
                    <SyntaxHighlighter language="css" style={oneDark}>
                      {Array_2}
                    </SyntaxHighlighter>
                  </p>
                  <p>
                    In the above example, the first element of the{" "}
                    <span style={{ color: "#4b32c3" }}>avengers</span> array is
                    accessed using 'avengers[0]', and the second element is
                    accessed using 'avengers[1]'. The values are assigned to the
                    variables 'firstAvenger' and 'secondAvenger' respectively.
                  </p>
                </div>
                <div ref={sectionRefs[2]}>
                  <h1 className="sub-sectionHead">Modifying Array Elements</h1>
                  <p>
                    You can modify the values of array elements by assigning new
                    values to specific indices.
                  </p>
                  <p>
                    Here's an example:
                    <SyntaxHighlighter language="css" style={oneDark}>
                      {Array_3}
                    </SyntaxHighlighter>
                  </p>
                  <p>
                    In the above example, the third element of the{" "}
                    <span style={{ color: "#4b32c3" }}>avengers</span> array is
                    modified to "Spider-Man" by assigning a new value using
                    'avengers[2] = "Spider-Man"'. Similarly, the fourth element
                    is modified to "Black Widow". The updated array element is
                    then printed using the{" "}
                    <span style={{ color: "#4b32c3" }}>vision</span> keyword.
                  </p>
                </div>
                <div ref={sectionRefs[3]}>
                  <h1 className="sub-sectionHead">
                    Iterating Over Array Elements
                  </h1>
                  <p>
                    You can use loops to iterate over the elements of an array
                    and perform operations on each element. AssembleScript
                    supports both wakandaFor and fightUntil loops for this
                    purpose
                  </p>
                  <p>
                    Here are examples of iterating over an array using both
                    types of loops:
                    <ul>
                      <li>
                        Using{" "}
                        <span style={{ color: "#4b32c3" }}>wakandaFor</span>{" "}
                        loop:
                      </li>
                      <SyntaxHighlighter language="css" style={oneDark}>
                        {Array_4}
                      </SyntaxHighlighter>
                      <p>
                        In the above example, the{" "}
                        <span style={{ color: "#4b32c3" }}>wakandaFor</span>{" "}
                        loop iterates over the indices of the avengers array
                        from 0 to the length of the array. The i variable
                        represents the current index, and avengers[i] accesses
                        the element at that index. The element is then printed
                        using the{" "}
                        <span style={{ color: "#4b32c3" }}>vision</span>
                        keyword.
                      </p>
                      <li>
                        Using{" "}
                        <span style={{ color: "#4b32c3" }}>fightUntil</span>{" "}
                        loop:
                      </li>
                      <SyntaxHighlighter language="css" style={oneDark}>
                        {Array_5}
                      </SyntaxHighlighter>
                      <p>
                        In the above example, the{" "}
                        <span style={{ color: "#4b32c3" }}>fightUntil</span>{" "}
                        loop continues executing the block of code until the
                        condition i less than len(avengers) is no longer true.
                        The i variable is incremented in each iteration, and the
                        corresponding element of the avengers array is printed
                        using the
                        <span style={{ color: "#4b32c3" }}>vision</span>{" "}
                        keyword.
                      </p>
                    </ul>
                  </p>
                  <p></p>
                </div>
                <div ref={sectionRefs[4]}>
                  <h1 className="sub-sectionHead">2D Arrays</h1>
                  <p>
                    In <span style={{ color: "#4b32c3" }}>AssembleScript</span>,
                    you can create multidimensional arrays by nesting arrays
                    within the main array. This allows you to represent a table
                    or matrix-like structure.
                  </p>
                  <p>
                    Here's an example of a 2D array:
                    <SyntaxHighlighter language="css" style={oneDark}>
                      {Array_6}
                    </SyntaxHighlighter>
                  </p>
                  <p>
                    In the above example, the matrix array is a 2D array with
                    three rows and three columns. The element at the second row
                    and third column (index 1, 2) is accessed using
                    matrix[1][2]. The value 6 is assigned to the element
                    variable and then printed using the vision keyword.
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
                      <i className="fa-solid fa-l"></i> Array Declaration
                    </li>
                    <li
                      style={{
                        color: activeSection === 1 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 1 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Accessing Array Elements
                    </li>
                    <li
                      style={{
                        color: activeSection === 2 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 2 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Modifying Array Elements
                    </li>
                    <li
                      style={{
                        color: activeSection === 3 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 3 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> Iterating Over Array
                      Elements
                    </li>
                    <li
                      style={{
                        color: activeSection === 4 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 4 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> 2D Arrays
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

export default Arrays;
