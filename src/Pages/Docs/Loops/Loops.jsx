import React, { useEffect, useRef, useState } from "react";
import AssembleNav from "../../../Components/Navbar/Navbar";
import "prismjs/themes/prism-okaidia.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Loops.scss";
import Sidebar from "../../../Components/SideBar/Sidebar";
import Footer from "../../../Components/Footer/Footer";

const Loops = () => {
  const sectionRefs = [useRef(null), useRef(null)]; // Refs for each section
  const [activeSection, setActiveSection] = useState(0); // Index of the active section
  const Loops_1 = `wakandaFor iterator in start to end {
    // Code to be executed
}`;
  const Loops_2 = `wakandaFor i in 1 to 5 {
    vision(i);
}`;
  const Loops_3 = `wakandaFor i in start to end step stepValue {
    // Code to be executed
}`;
  const Loops_4 = `wakandaFor i in 0 to 10 step 2 {
    vision(i);
}`;
  const Loops_5 = `fightUntil condition {
    // Code to be executed
}`;
  const Loops_6 = `newAvenger health = 100;

  fightUntil(health > 0) {
      vision("Still fighting! Health: " + health);
      health = health - 10;
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
                <h1 className="sectionHead">Loops</h1>
                <p>
                  Loops in AssembleScript allow you to iterate over a block of
                  code multiple times. AssembleScript supports two types of
                  loops: the wakandaFor loop (for loop) and the fightUntil loop
                  (while loop). These loops provide you with the ability to
                  repeat code execution based on certain conditions.
                </p>

                <div ref={sectionRefs[0]}>
                  <h1 className="sub-sectionHead">
                    wakandaFor loop (For Loop)
                  </h1>
                  <p>
                    The wakandaFor loop in AssembleScript is similar to the
                    traditional for loop in other programming languages. It
                    allows you to execute a block of code for a specific number
                    of iterations.
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Loops_1}
                  </SyntaxHighlighter>
                  <p>
                    In the above syntax, iterator is a new variable that
                    represents the current iteration value. start and end are
                    the initial and final values for the iterator, respectively.
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Loops_2}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the loop will iterate from 1 to 5, and
                    the values of i will be displayed.
                  </p>
                  <p>
                    The wakandaFor loop also allows you to specify a step value
                    to control the increment or decrement of the iterator.
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Loops_3}
                  </SyntaxHighlighter>
                  <p>
                    In the above syntax, stepValue determines the amount by
                    which the iterator will be incremented or decremented.
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Loops_4}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the loop will iterate from 0 to 10
                    with a step of 2, and only even numbers will be displayed.
                  </p>
                </div>
                <div ref={sectionRefs[1]}>
                  <h1 className="sub-sectionHead">
                    fightUntil loop (While Loop)
                  </h1>
                  <p>
                    The fightUntil loop in AssembleScript is similar to the
                    traditional while loop in other programming languages. It
                    allows you to execute a block of code repeatedly as long as
                    a certain condition remains true.
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Loops_5}
                  </SyntaxHighlighter>
                  <p>
                    In the above syntax, condition is the condition that is
                    evaluated before each iteration. If the condition is true,
                    the code inside the loop will execute; otherwise, the loop
                    will terminate.
                  </p>
                  <SyntaxHighlighter language="javascript" style={oneDark}>
                    {Loops_6}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the block of code inside the
                    fightUntil loop will continue to execute as long as the
                    health variable is greater than 0. The health value will be
                    displayed, and its value will decrement by 10 in each
                    iteration.
                  </p>
                  <p>
                    The fightUntil loop provides flexibility for executing a
                    block of code repeatedly until a specific condition is no
                    longer met.
                  </p>
                  <p>
                    Loops are powerful constructs that allow you to repeat code
                    execution, iterate over collections, and solve problems that
                    require repetitive actions. Use wakandaFor loops for a known
                    number of iterations and fightUntil loops for executing code
                    until a condition is met.
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
                      <i className="fa-solid fa-l"></i> wakandaFor loop (For
                      Loop)
                    </li>
                    <li
                      style={{
                        color: activeSection === 1 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 1 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> fightUntil loop (While
                      Loop)
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

export default Loops;
