import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Dropdown } from "react-bootstrap";
import "prismjs/themes/prism-okaidia.css";
import "./CodeSnippet.scss";
import C_snippet from "./CodeSnippets/C";
import Cpp_snippet from "./CodeSnippets/Cpp";
import JS_snippet from "./CodeSnippets/JS";
import TS_snippet from "./CodeSnippets/TS";
import PY_snippet from "./CodeSnippets/py";

const PracticeOneCodeSnippet = () => {
  const languages = ["C", "CPP", "JavaScript", "TypeScript", "Python"];
  const [selectedLanguage, setSelectedLanguage] = useState("C");

  const codeSnippets = {
    C: C_snippet,
    CPP: Cpp_snippet,
    JavaScript: JS_snippet,
    TypeScript: TS_snippet,
    Python: PY_snippet,
  };

  const handleLanguageChange = (selected) => {
    setSelectedLanguage(selected);
  };

  return (
    <div className="code-snippet-container">
      <h1>
        <i style={{ color: "#1990ff" }} class="fa-solid fa-file-lines"></i> Code
        Snippet
      </h1>
      <div className="language-dropdown">
        <p>Select the Language: </p>
        <Dropdown onSelect={handleLanguageChange}>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {selectedLanguage}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {languages.map((language) => (
              <Dropdown.Item key={language} eventKey={language}>
                {language}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="code-container">
        <SyntaxHighlighter
          language={selectedLanguage.toLowerCase()}
          style={oneDark}
          showLineNumbers
        >
          {codeSnippets[selectedLanguage]}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default PracticeOneCodeSnippet;
