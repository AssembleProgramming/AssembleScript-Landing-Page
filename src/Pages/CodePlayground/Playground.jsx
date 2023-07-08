import React, { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import Parser from "../../Compiler/FrontEnd/Parser.ts";
import { setupGlobalScope } from "../../Compiler/BackEnd/Scope/globalScope.ts";
import { evaluate } from "../../Compiler/BackEnd/Interpreter/interpreter.ts";
import Button from 'react-bootstrap/Button';
import './Playground.scss'
import AssembleNav from '../../Components/Navbar/Navbar.jsx';
function Playground() {
  let offset = `calc(100vh - ${200}px)`;
  console.log(window.innerWidth);
  if (window.innerWidth < 780) {
    offset = `calc(100vh - ${240}px)`;
  }

  let DEFAULTcode = `vision("Hello Avenger!!!");`;
  const [output, setOutput] = useState('');
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
    const Load = document.querySelector('.lds-ring');
    const Back = document.querySelector('.run-btn');
    const Run = document.getElementById('run');
    Load.style.display = "flex";
    Run.style.display = "none";
    Back.style.borderRadius = "10px";
    const inputText = getEditorData();

    const parser = new Parser();
    const env = setupGlobalScope();

    const program = parser.produceAST(inputText);

    // Redirect console.log to capture the output
    const originalConsoleLog = console.log;
    const capturedOutput = [];
    console.log = (...args) => capturedOutput.push(args.join(' '));

    try {
      evaluate(program, env);
    } catch (error) {
      window.alert(error);
    } finally {
      // Restore console.log
      console.log = originalConsoleLog;
    }
    setTimeout(() => {
      setOutput(capturedOutput.join('\n'));
      Load.style.display = "none";
      Run.style.display = "block";
    }, 1000);
  }

  return (
    <>
      <AssembleNav />
      <div className='pg-main-container'>
        <div className='left'>
          <div>
            <div className="intro-editor">
              <div className="main-avenger">
                main.avenger
              </div>
              <div className="padding">
                <Button className='run-btn' variant="primary" onClick={runEditorCode} >
                  <div id="run">
                    <i className="fa-solid fa-play"></i>
                    <span> Run</span>
                  </div>

                  <div id="loading">
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
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
                <Button variant="primary" onClick={syncFileCode}><i class="fa-solid fa-rotate"></i></Button>
              </div>
            </div>
          </div>
        </div>

        <div className='right'>
          <div>
            <p className="codeOp">
              Output
            </p>
          </div>
          <pre className='terminal'><span className="outputIntro">~$Avenger:<br /></span>{output}</pre>
        </div>
      </div>
    </>
  );
}

export default Playground;