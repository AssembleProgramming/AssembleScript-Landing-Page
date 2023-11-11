import React, { useEffect, useRef, useState } from 'react';
import '../ContestQuestion.scss';
import QuestionOneCodeSnippets from './QuestionOneCodeSnippets';
import Editor from '@monaco-editor/react';
import Parser from '../../../../Compiler/FrontEnd/Parser';
import { setupGlobalScope } from '../../../../Compiler/BackEnd/Scope/globalScope';
import { evaluate } from '../../../../Compiler/BackEnd/Interpreter/interpreter';
import SERVER_LINK from '../../../../API';
import { ToastContainer, toast } from 'react-toastify';

const ContestQuestionOne = ({ user }) => {

  const isDisabledBtn = user[0].QUESTION_ONE_STATUS;
  const teamMail = user[0].TEAM_MAIL;

  let DEFAULTcode = `assemble factorial_loop(n) {
ifWorthy(n == 0 || n == 1){
  snap 1;
}
newAvenger result = 1;
wakandaForEach(i in 1 to n) {
  result = result * i;
}
snap result;
}`;


  const [leftWidth, setLeftWidth] = useState('50%');
  const [output, setOutput] = useState('');
  const [submissionAccepted, setSubmissionAccepted] = useState(-1);

  const handleMouseDownHorizontal = (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMoveHorizontal);
    document.addEventListener('mouseup', handleMouseUpHorizontal);
  };

  const handleMouseMoveHorizontal = (e) => {
    const newLeftWidth = `${100 * (e.clientX / window.innerWidth)}%`;
    setLeftWidth(newLeftWidth);
  };

  const handleMouseUpHorizontal = () => {
    document.removeEventListener('mousemove', handleMouseMoveHorizontal);
    document.removeEventListener('mouseup', handleMouseUpHorizontal);
  };


  const editorRef = useRef(null);
  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;
  }
  const getEditorData = () => {
    return editorRef.current.getValue();
  }

  const handleCodeSubmit = () => {
    let inputText = getEditorData();

    inputText += `assemble test_factorial_loop() {
      vision("Testing factorial_loop...");
      assertEqual(factorial_loop(0), 1);
      assertEqual(factorial_loop(1), 1);
      assertEqual(factorial_loop(5), 120);
      assertEqual(factorial_loop(10), 3628800);
    }
    test_factorial_loop();
    `
    const parser = new Parser();
    const env = setupGlobalScope();

    const capturedOutput = [];
    console.log = (...args) => capturedOutput.push(args.join(' '));

    try {
      const program = parser.produceAST(inputText);
      evaluate(program, env);
      setOutput(capturedOutput.join('\n'));
      return 1;
    } catch (error) {
      setOutput(error);
    }

    return 0;
  }

  const handleCorrectSubmission = async () => {
    try {
      console.log(teamMail);
      const response = await fetch(`${SERVER_LINK}/submit-question-one`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          TEAM_MAIL: teamMail,
        }),
      });

      if (response.ok) {
        window.location.reload();
      } else {
        const error = await response.json();
        toast.error(`${error.message}`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error('A network error occurred. Please try again later.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  return (
    <>
      <div className='question'>
        <div
          className="left-code-snippet"
          style={{ width: leftWidth }}
        >
          <div className='code-snippet-wrapper-container'>
            <QuestionOneCodeSnippets />
          </div>

          <div className="submission-status">
            <div className="submission-result-container">
              <h1> <i style={{ color: "#2ac245" }} class="fa-solid fa-terminal"></i> Test Result</h1>
              <div style={{
                width: "100%",
                height: "100%",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10
              }}>
                {
                  user[0].QUESTION_ONE_STATUS === false
                    ?
                    submissionAccepted === -1
                      ?
                      (
                        <p style={{
                          color: "#ffffff4f",
                          margin: 0,
                          fontWeight: 600
                        }}>No submission yet</p>
                      )
                      :
                      submissionAccepted === 0
                        ?
                        (
                          <p style={{
                            color: "white",
                            margin: 0,
                            fontWeight: 600,
                            fontSize: 14,
                            width: "100%",
                            height: "100%",
                            border: '2px solid red',
                            background: '#ff00000f',
                            padding: "8px 12px"
                          }}>{output}</p>
                        )
                        :
                        submissionAccepted === 1
                          ?
                          (
                            <p style={{
                              color: "white",
                              padding: 10,
                              margin: 0,
                              fontWeight: 600,
                              fontSize: 14,
                              width: "100%",
                              height: "100%",
                              border: '2px solid #ffc107',
                              background: '#ffc1071f',
                              paddingTop: 50,
                              textAlign: 'center'
                            }}>Judging...</p>
                          )
                          :
                          <></>
                    :
                    (
                      <p
                        style={{
                          color: "white",
                          padding: 50,
                          margin: 0,
                          fontWeight: 600,
                          fontSize: 18,
                          textAlign: 'center',
                          width: "100%",
                          height: "100%",
                          border: '2px solid #2ac245',
                          background: '#2ac24536'
                        }}>Accepted</p>
                    )
                }
              </div>
            </div>
          </div>
        </div>

        <div
          className="resize-handle-horizontal"
          onMouseDown={handleMouseDownHorizontal}
        >
        </div>

        <div className="right-code-main-container">
          <div className="editor-code-container">
            <h1> <i style={{ color: "#2ac245" }} class="fa-solid fa-code"></i> Code</h1>
            <Editor
              className='editor'
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
                  strings: false
                },
                parameterHints: {
                  enabled: false
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
              <button
                disabled={isDisabledBtn}
                onClick={() => {
                  if (handleCodeSubmit() === 1) {
                    setSubmissionAccepted(1);
                    handleCorrectSubmission(); // Call additional function here
                  } else {
                    setSubmissionAccepted(0);
                  }
                }}
                className='contest-code-submit-btn'
              >
                <i className="fa-solid fa-play"></i> Submit
              </button>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          theme="light"
        />
      </div>
    </>
  );
};

export default ContestQuestionOne;