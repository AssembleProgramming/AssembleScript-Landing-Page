import React, { useEffect, useRef, useState } from "react";
import AssembleNav from "../../../Components/Navbar/Navbar";
import "prismjs/themes/prism-okaidia.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Sidebar from "../../../Components/SideBar/Sidebar";
import Footer from "../../../Components/Footer/Footer";
import "./Comments.scss";

const Comments = () => {
  const sectionRefs = [useRef(null)]; // Refs for each section
  const [activeSection, setActiveSection] = useState(0); // Index of the active section
  const comment_1 = `$ This is a single-line comment $`;
  const comment_3 = `# This variable stores the hero's strength
  newAvenger power = 100;`;
  const comment_2 = `$
This is a multi-line comment.
It can span across multiple lines.
$`;

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
                <div ref={sectionRefs[0]}>
                  <h1 className="sectionHead">Comments</h1>
                  <p>
                    In AssembleScript, you can add comments to your code to
                    provide explanations, document your intentions, or leave
                    notes for yourself or other developers. Comments are ignored
                    by the compiler and do not affect the execution of the
                    program. They are purely for informational purposes.
                  </p>
                  <p>
                    AssembleScript supports both single-line and multi-line
                    comments.
                  </p>
                  <h1
                    className="sub-sectionHead"
                    style={{ marginBottom: "27px" }}
                  >
                    Single-Line Comments
                  </h1>
                  <p>
                    Single-line comments start with a dollar sign ($) and
                    continue until the end of the line. They are used to add
                    comments on a single line.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {comment_1}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the text "This is a single-line
                    comment" is a comment and will be ignored by the compiler.
                  </p>
                  <p>
                    Single-line comments can also start with the # symbol and
                    extend until the end of the line. They are used to document
                    a single line of code or provide brief explanations.
                  </p>

                  <SyntaxHighlighter language="css" style={oneDark}>
                    {comment_3}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the comment provides information about
                    the purpose of the power variable.
                  </p>

                  <h1
                    className="sub-sectionHead"
                    style={{ marginBottom: "27px" }}
                  >
                    Multi-Line Comments
                  </h1>
                  <p>
                    Multi-line comments allow you to add comments that span
                    multiple lines. They start with $ and end with $. Anything
                    between these markers is treated as a comment and will not
                    be executed.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {comment_2}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the text between $ and $ is a
                    multi-line comment. It can contain multiple lines of
                    comments and will be ignored by the compiler.
                  </p>

                  <h1
                    className="sub-sectionHead"
                    style={{ marginBottom: "27px" }}
                  >
                    Commenting Best Practices
                  </h1>
                  <p>
                    When writing comments, it's important to follow these best
                    practices:
                  </p>
                  <ul>
                    <li>
                      Use comments to explain complex code or provide additional
                      context.
                    </li>
                    <li>
                      Write clear and concise comments that are easy to
                      understand.
                    </li>
                    <li>
                      Avoid excessive or unnecessary comments that add no value.
                    </li>
                    <li>
                      Update comments when you modify the code to ensure they
                      remain accurate and helpful.
                    </li>
                    <li>
                      Use comments to document any assumptions, limitations, or
                      important considerations.
                    </li>
                    <li>
                      Consider adding comments in your code to explain the
                      purpose of functions, logic, or algorithms.s
                    </li>
                  </ul>
                  <p>
                    By following these best practices, you can make your code
                    more understandable and maintainable for yourself and other
                    developers.
                  </p>
                  <p>
                    Use comments in AssembleScript to improve the readability
                    and maintainability of your code, and to communicate
                    important information to yourself and others working on the
                    project.
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
                      <i className="fa-solid fa-l"></i> Comments
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

export default Comments;
