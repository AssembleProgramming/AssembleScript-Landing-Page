import React, { useEffect, useRef, useState } from "react";
import AssembleNav from "../../../Components/Navbar/Navbar";
import "prismjs/themes/prism-okaidia.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Keywords.scss";
import Sidebar from "../../../Components/SideBar/Sidebar";
import Footer from "../../../Components/Footer/Footer";

const Keywords = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]; // Refs for each section
  const [activeSection, setActiveSection] = useState(0); // Index of the active section
  const Keywords_1 = `newAvenger power = "Super Strength";`;
  const Keywords_2 = `newEternal PI = 3.14159;";`;
  const Keywords_3 = `vision("Hello, Avengers!");`;
  const Keywords_4 = `newAvenger dimension = "Earth-616";
  
  multiverse(dimension) {
    madness "Earth-616":
    vision("Welcome to the main Marvel universe!");
    madness "Earth-199999":
    vision("Welcome to the Marvel Cinematic Universe!");
    default:
      vision("Unknown dimension!");
    }`;
  const Keywords_5 = `newAvenger isWorthy = true;

ifWorthy(isWorthy) {
    vision("You are worthy!");
} otherwise {
    vision("You are not worthy!");
}`;
  const Keywords_6 = `wakandaFor i in 0 to 10 {
  ifWorthy(i == 5) {
      endGame;
  }
  vision(i);
}`;
  const Keywords_7 = `newAvenger isMember = SHIELD;

ifWorthy(isMember) {
    vision("You are a member of SHIELD!");
}`;
  const Keywords_8 = `newAvenger isEnemy = HYDRA;

ifWorthy(isEnemy) {
    vision("You are an enemy of the Avengers!");
} otherwise {
    vision("You are not an enemy.");
}`;
  const Keywords_9 = `wakandaFor i in 1 to 5 {
    vision(i);
}`;
  const Keywords_10 = `newAvenger health = 100;

fightUntil(health > 0) {
    vision("Still fighting! Health: " + health);
    health = health - 10;
}`;
  const Keywords_11 = `newAvenger power = null;`;
  const Keywords_12 = `team avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];`;

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
                <h1 className="sectionHead">Keywords</h1>
                <p>
                  AssembleScript provides several keywords that have significant
                  references to the Marvel Cinematic Universe. These keywords
                  serve specific purposes and help in writing expressive and
                  powerful code.
                </p>
                <p>
                  Let's explore each keyword and its associated meaning in
                  AssembleScript:
                </p>
                <div ref={sectionRefs[0]}>
                  <span style={{ color: "#4b32c3" }}>
                    {" "}
                    <h1 className="sub-sectionHead">newAvenger (let)</h1>
                  </span>
                  <p>
                    In the Marvel universe, new heroes emerge to join forces and
                    fight against evil. Similar to the let keyword in other
                    programming languages, in AssembleScript, newAvenger
                    represents the creation of a new variable, symbolizing the
                    arrival of a new Avenger.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Keywords_1}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, power is a variable of type newAvenger
                    that holds the value "Super Strength".
                  </p>
                </div>
                <div ref={sectionRefs[1]}>
                  <span style={{ color: "#4b32c3" }}>
                    {" "}
                    <h1 className="sub-sectionHead">newEternal (const)</h1>
                  </span>
                  <p>
                    The Eternals, a powerful group of immortal beings in the
                    Marvel universe, possess steadfastness and unchanging
                    qualities. Similar to the const keyword in other programming
                    languages, newEternal in AssembleScript signifies the
                    declaration of a constant value that remains immutable
                    throughout the program.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Keywords_2}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, PI is a constant of type newEternal
                    that holds the value 3.14159.
                  </p>
                </div>
                <div ref={sectionRefs[2]}>
                  <span style={{ color: "#4b32c3" }}>
                    {" "}
                    <h1 className="sub-sectionHead">vision (print)</h1>
                  </span>
                  <p>
                    Vision, a synthetic being possessing superhuman abilities,
                    has enhanced vision and perception. In AssembleScript, the
                    vision keyword is referred to as print, allowing you to
                    visualize and display output to the console.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Keywords_3}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, power is a variable of type newAvenger
                    that holds the value "Super Strength".
                  </p>
                </div>
                <div ref={sectionRefs[3]}>
                  <span style={{ color: "#4b32c3" }}>
                    {" "}
                    <h1 className="sub-sectionHead">newAvenger (let)</h1>
                  </span>
                  <p>
                    In the Marvel universe, new heroes emerge to join forces and
                    fight against evil. Similar to the let keyword in other
                    programming languages, in AssembleScript, newAvenger
                    represents the creation of a new variable, symbolizing the
                    arrival of a new Avenger.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Keywords_4}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the message "Hello, Avengers!" will be
                    printed to the console.
                  </p>
                </div>
                <div ref={sectionRefs[4]}>
                  <h1 className="sub-sectionHead">
                    <span style={{ color: "#4b32c3" }}>
                      {" "}
                      multiverse - madness (switch - case)
                    </span>{" "}
                  </h1>
                  <p>
                    The Marvel multiverse is a complex web of alternate
                    realities and dimensions. The multiverse - madness statement
                    in AssembleScript represents the ability to navigate through
                    different scenarios, just like traversing the multiverse.
                    The madness keyword within switch - case signifies the chaos
                    and unpredictability encountered in different dimensions.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Keywords_5}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, based on the value of dimension, the
                    code will execute the corresponding madness block or the
                    default block.
                  </p>
                </div>
                <div ref={sectionRefs[5]}>
                  <h1 className="sub-sectionHead">
                    <span style={{ color: "#4b32c3" }}>
                      {" "}
                      ifWorthy - otherwise (if - else)
                    </span>{" "}
                  </h1>
                  <p>
                    AssembleScript embraces the notion of worthiness, a concept
                    frequently explored in the Marvel universe. The ifWorthy -
                    otherwise construct in AssembleScript is similar to the if -
                    else construct in other programming languages. ifWorthy
                    represents a condition that must be met to proceed, while
                    otherwise offers an alternative path if the condition is not
                    fulfilled.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Keywords_6}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, based on the value of isWorthy, either
                    "You are worthy!" or "You are not worthy!" will be
                    displayed.
                  </p>
                </div>
                <div ref={sectionRefs[6]}>
                  <span style={{ color: "#4b32c3" }}>
                    {" "}
                    <h1 className="sub-sectionHead">endGame (Break)</h1>
                  </span>
                  <p>
                    The Avengers: Endgame movie signifies the culmination of an
                    epic saga and the end of an era. In AssembleScript, the
                    break statement is symbolically referred to as endGame,
                    signifying the end or termination of a loop.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Keywords_7}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the loop will iterate from 0 to 10.
                    However, when i equals 5, the endGame statement will break
                    the loop and terminate its execution.
                  </p>
                </div>
                <div ref={sectionRefs[7]}>
                  <span style={{ color: "#4b32c3" }}>
                    <h1 className="sub-sectionHead">SHIELD (True))</h1>
                  </span>

                  <p>
                    In the Marvel universe, SHIELD (Strategic Homeland
                    Intervention, Enforcement, and Logistics Division)
                    represents an organization dedicated to protecting the world
                    from various threats. In AssembleScript, the boolean value
                    true is denoted by SHIELD, indicating a state of truth or
                    validation.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Keywords_8}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, if isMember is true (SHIELD), the
                    message "You are a member of SHIELD!" will be displayed.
                  </p>
                </div>
                <div ref={sectionRefs[8]}>
                  <span style={{ color: "#4b32c3" }}>
                    <h1 className="sub-sectionHead">HYDRA (False)</h1>
                  </span>

                  <p>
                    HYDRA, a secret organization seeking to subvert and
                    manipulate events from within, poses a constant threat in
                    the Marvel universe. In AssembleScript, the boolean value
                    false is symbolized by HYDRA, representing falsehood or
                    negation.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Keywords_9}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, if isEnemy is false (HYDRA), the
                    message "You are not an enemy." will be displayed.
                  </p>
                </div>
                <div ref={sectionRefs[9]}>
                  <h1 className="sub-sectionHead">
                    <span style={{ color: "#4b32c3" }}>
                      wakandaFor loop (For Loop)
                    </span>{" "}
                  </h1>
                  <p>
                    Wakanda, a technologically advanced nation in the Marvel
                    universe, embraces progress and innovation. The wakandaFor
                    loop in AssembleScript is similar to the traditional for
                    loop in other programming languages. It signifies an
                    iteration and advancement.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Keywords_10}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the loop will iterate from 1 to 5, and
                    the values of i will be displayed.
                  </p>
                </div>
                <div ref={sectionRefs[10]}>
                  <h1 className="sub-sectionHead">
                    <span style={{ color: "#4b32c3" }}>
                      fightUntil loop (While Loop)
                    </span>{" "}
                  </h1>
                  <p>
                    Marvel superheroes engage in relentless battles, fighting
                    until they overcome their adversaries. Similarly, the
                    fightUntil loop in AssembleScript is referred to as a while
                    loop. It embodies the determination to continue executing a
                    block of code until a condition is met.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Keywords_11}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, the block of code inside the
                    fightUntil loop will continue to execute as long as health
                    is greater than 0.
                  </p>
                </div>
                <div ref={sectionRefs[11]}>
                  <h1 className="sub-sectionHead">
                    <span style={{ color: "#4b32c3" }}>null</span>{" "}
                  </h1>
                  <p>
                    In the Marvel universe, the concept of nullifying or
                    negating powers or threats is prevalent. In AssembleScript,
                    null represents the absence of a value or the state of
                    nothingness. It can be assigned to variables or used as a
                    placeholder when no value is present.
                  </p>
                  <SyntaxHighlighter language="css" style={oneDark}>
                    {Keywords_12}
                  </SyntaxHighlighter>
                  <p>
                    In the above example, power is assigned the value null,
                    indicating the absence of a specific power.
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
                      <i className="fa-solid fa-l"></i> newAvenger (let)
                    </li>
                    <li
                      style={{
                        color: activeSection === 1 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 1 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> newEternal (const)
                    </li>
                    <li
                      style={{
                        color: activeSection === 2 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 2 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> vision (print)
                    </li>
                    <li
                      style={{
                        color: activeSection === 3 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 3 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> multiverse - madness
                      (switch - case)
                    </li>
                    <li
                      style={{
                        color: activeSection === 4 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 4 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> ifWorthy - otherwise (if
                      - else)
                    </li>
                    <li
                      style={{
                        color: activeSection === 5 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 5 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> endGame (Break)
                    </li>
                    <li
                      style={{
                        color: activeSection === 6 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 6 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> SHIELD (True)
                    </li>
                    <li
                      style={{
                        color: activeSection === 7 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 7 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> HYDRA (False)
                    </li>
                    <li
                      style={{
                        color: activeSection === 8 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 8 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> wakandaFor loop (For
                      Loop)
                    </li>
                    <li
                      style={{
                        color: activeSection === 9 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 9 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> fightUntil loop (While
                      Loop)
                    </li>
                    <li
                      style={{
                        color: activeSection === 10 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 10 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> null
                    </li>
                    <li
                      style={{
                        color: activeSection === 11 ? "#4b32c3" : "black",
                        fontWeight: activeSection === 11 ? "600" : "400",
                      }}
                    >
                      <i className="fa-solid fa-l"></i> team (Array)
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

export default Keywords;
