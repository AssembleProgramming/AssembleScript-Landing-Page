import React, { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import Parser from "../../Compiler/FrontEnd/Parser.ts";
import { setupGlobalScope } from "../../Compiler/BackEnd/Scope/globalScope.ts";
import { evaluate } from "../../Compiler/BackEnd/Interpreter/interpreter.ts";
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip'; // Import Tooltip
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'; // Import OverlayTrigger
import './Playground.scss'
import AssembleNav from '../../Components/Navbar/Navbar.jsx';

function Playground() {
  let isMobile = false;
  let offset = `calc(100vh - ${200}px)`;

  if (window.innerWidth < 780) {
    offset = `calc(100vh - ${240}px)`;
    isMobile = true;
  }

  let DEFAULTcode = `vision("Hello Avenger!!!");`;
  const [output, setOutput] = useState('');
  const [executionTime, setExecutionTime] = useState("");  // State variable to hold execution time

  const editorRef = useRef(null);
  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;
  }
  const getEditorData = () => {
    return editorRef.current.getValue();
  }
  const updateEditor = () => {
    editorRef.current.setValue(DEFAULTcode);
  }
  const clearOutput = () => {
    setOutput("");
    setExecutionTime("");
  };
  async function syncFileCode() {
    const inputFile = document.getElementById('fileInput').files[0];
    if (!inputFile) {
      alert('Please select a file');
      return;
    }

    const fileName = inputFile.name;
    const fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
    if (fileExtension !== 'avenger') {
      alert('Please select a file with the .avenger extension');
      return;
    }

    const input = await inputFile.text();
    DEFAULTcode = input;
    updateEditor();
  }


  function runEditorCode() {
    const Back = document.querySelector('.run-btn');
    Back.style.borderRadius = '10px';
    const inputText = getEditorData();

    const parser = new Parser();
    const env = setupGlobalScope();

    // Redirect console.log to capture the output
    const originalConsoleLog = console.log;
    const capturedOutput = [];
    console.log = (...args) => capturedOutput.push(args.join(' '));

    try {
      const startTime = performance.now();

      const program = parser.produceAST(inputText);
      evaluate(program, env);

      // Calculate and set the execution time
      const endTime = performance.now();
      const timeTaken = endTime - startTime;

      setTimeout(() => {
        setOutput(capturedOutput.join('\n'));
        if (isMobile) {
          let outputWindow = document.querySelector('.right');
          let codeWindow = document.querySelector('.left');
          outputWindow.style.display = 'flex';
          codeWindow.style.display = 'none';
        }
      }, 300);

      setExecutionTime(' Finished in ' + timeTaken.toFixed(2).toString() + ' ms'); // Round to 2 decimal places
    } catch (error) {
      // If there's an error during evaluation (interpreter error)
      setOutput(error || 'Error occurred during execution');
      setExecutionTime(''); // Clear execution time in case of an error
      return 1;
    } finally {
      console.log = originalConsoleLog;
    }

    return 0; // Return success flag
  }


  const showCode = () => {
    let codeWindow = document.querySelector('.left');
    codeWindow.style.display = "block";
  }

  const showOp = () => {
    let outputWindow = document.querySelector('.right');
    let codeWindow = document.querySelector('.left');
    outputWindow.style.display = "flex";
    codeWindow.style.display = "none";
  }
  return (
    <>
      <AssembleNav />
      <div className='pg-main-container'>
        <div className='left'>
          <div>
            <div className="intro-editor">
              <div className="tab-switch">
                <div className="main-avenger">
                  main.avenger
                </div>
                <div onClick={showOp} className="mobile-op-button">
                  Output
                </div>
              </div>
              <div className="padding">
                <Button className='run-btn' variant="primary" onClick={runEditorCode} >
                  <div id="run">
                    <i className="fa-solid fa-play"></i>
                    <span> Run</span>
                  </div>
                </Button>
              </div>
            </div>

            <div>
              <Editor
                height={offset}
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
              <div className="file-upload">
                <input type="file" id="fileInput" accept=".avenger" required />
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="clear-tooltip">Sync The File Code With Editor</Tooltip>}
                >
                  <Button variant="primary" onClick={syncFileCode}><i className="fa-solid fa-rotate"></i></Button>
                </OverlayTrigger>
              </div>
            </div>
          </div>
        </div>

        <div className='right'>
          <div style={{
            display: "flex",
            justifyContent: "space-between"
          }} className='top-bar'>
            <div style={{
              display: "flex",
              justifyContent: "space-evenly"
            }}>
              <p className="codeWindow-mobile" onClick={showCode}>
                main.avenger
              </p>
              <p className="codeOp">
                Output
              </p>
            </div>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="clear-tooltip">Clear Output</Tooltip>}
            >
              <Button variant="danger" onClick={clearOutput}>
                <i className="fa-solid fa-eraser"></i>
              </Button>
            </OverlayTrigger>
          </div>
          <pre className='terminal'><span className="outputIntro">~$Avenger:<span>{executionTime}</span> <br /></span>{output}</pre>
        </div>
      </div >
    </>
  );
}

export default Playground;