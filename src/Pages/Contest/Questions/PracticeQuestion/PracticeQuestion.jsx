import React, { useRef, useState } from "react";
import "./ContestQuestion.scss";
import Editor from "@monaco-editor/react";
import Parser from "../../../../Compiler/FrontEnd/Parser";
import { setupGlobalScope } from "../../../../Compiler/BackEnd/Scope/globalScope";
import { evaluate } from "../../../../Compiler/BackEnd/Interpreter/interpreter";
import PracticeQuest from "./Practice_QUEST.js";
import PracticeOneCodeSnippet from "./PracticeOneCodeSnippet.jsx";
import PracticeTest from "./Practice_TEST_CASES.js";
import file from "../../../../assets/PracticeSolution.txt";

const PracticeQuestion = () => {
  let DEFAULTcode = PracticeQuest;

  const [leftWidth, setLeftWidth] = useState("50%");
  const [output, setOutput] = useState("");
  const [submissionAccepted, setSubmissionAccepted] = useState(-1);

  const handleMouseDownHorizontal = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMoveHorizontal);
    document.addEventListener("mouseup", handleMouseUpHorizontal);
  };

  const handleMouseMoveHorizontal = (e) => {
    const newLeftWidth = `${100 * (e.clientX / window.innerWidth)}%`;
    setLeftWidth(newLeftWidth);
  };

  const handleMouseUpHorizontal = () => {
    document.removeEventListener("mousemove", handleMouseMoveHorizontal);
    document.removeEventListener("mouseup", handleMouseUpHorizontal);
  };

  const editorRef = useRef(null);
  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;
  };
  const getEditorData = () => {
    return editorRef.current.getValue();
  };

  const handleCodeSubmit = () => {
    let inputText = getEditorData();

    inputText += PracticeTest;

    const parser = new Parser();
    const env = setupGlobalScope();

    const capturedOutput = [];
    console.log = (...args) => capturedOutput.push(args.join(" "));

    try {
      const program = parser.produceAST(inputText);
      evaluate(program, env);
      setOutput(capturedOutput.join("\n\n"));
      return 1;
    } catch (error) {
      setOutput(error);
    }

    return 0;
  };

  return (
    <>
      <div className="practice-question">
        <div className="left-code-snippet" style={{ width: leftWidth }}>
          <div className="code-snippet-wrapper-container">
            <PracticeOneCodeSnippet />
          </div>

          <div className="submission-status">
            <div className="submission-result-container">
              <h1>
                {" "}
                <i
                  style={{ color: "#2ac245" }}
                  class="fa-solid fa-terminal"
                ></i>{" "}
                Test Result
              </h1>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                {submissionAccepted === -1 ? (
                  <p
                    style={{
                      color: "#ffffff4f",
                      margin: 0,
                      fontWeight: 600,
                    }}
                  >
                    No submission yet
                  </p>
                ) : submissionAccepted === 0 ? (
                  <p
                    style={{
                      color: "white",
                      margin: 0,
                      fontWeight: 600,
                      fontSize: 14,
                      width: "100%",
                      height: "100%",
                      border: "2px solid red",
                      background: "#ff00000f",
                      padding: "8px 12px",
                    }}
                  >
                    {output}
                  </p>
                ) : submissionAccepted === 1 ? (
                  <p
                    style={{
                      color: "white",
                      padding: 10,
                      margin: 0,
                      fontWeight: 600,
                      fontSize: 14,
                      width: "100%",
                      height: "100%",
                      border: "2px solid #2ac245",
                      background: "#2ac2451f",
                      paddingTop: 50,
                      textAlign: "center",
                    }}
                  >
                    {output}
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className="resize-handle-horizontal"
          onMouseDown={handleMouseDownHorizontal}
        ></div>

        <div className="right-code-main-container">
          <div className="editor-code-container">
            <h1>
              {" "}
              <i style={{ color: "#2ac245" }} class="fa-solid fa-code"></i> Code
            </h1>
            <Editor
              className="editor"
              height="88%"
              width="100%"
              onMount={handleEditorMount}
              theme="vs-dark"
              defaultLanguage="python"
              defaultValue={DEFAULTcode}
              options={{
                wordWrap: true,
                formatOnType: true,
                contextmenu: true,
                diagnostics: false,
                quickSuggestions: {
                  other: false,
                  comments: false,
                  strings: false,
                },
                parameterHints: {
                  enabled: false,
                },
                minimap: { enabled: false },
                suggestOnTriggerCharacters: false,
                acceptSuggestionOnEnter: "off",
                tabCompletion: "off",
                wordBasedSuggestions: false,
                scrollBeyondLastLine: false,
                fontSize: "14px",
              }}
            />
            <div className="submit-code-div">
              <a href={file} download>
                <button className="contest-solution-download-btn">
                  <i className="fa-solid fa-download"></i> Solution
                </button>
              </a>
              <button
                onClick={() => {
                  if (handleCodeSubmit() === 1) {
                    setSubmissionAccepted(1);
                  } else {
                    setSubmissionAccepted(0);
                  }
                }}
                className="contest-code-submit-btn"
              >
                <i className="fa-solid fa-play"></i> Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticeQuestion;
