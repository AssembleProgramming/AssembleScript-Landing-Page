import React, { useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import Parser from "../../Compiler/FrontEnd/Parser.ts";
import { setupGlobalScope } from "../../Compiler/BackEnd/Scope/globalScope.ts";
import { evaluate } from "../../Compiler/BackEnd/Interpreter/interpreter.ts";

import './Playground.scss'
import AssembleNav from '../../Components/Navbar/Navbar.jsx';
function Playground() {
  let DEFAULTcode = `vision("Hello Avenger!!!");`;
  const [output, setOutput] = useState('');
  const editorRef = useRef(null);
  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;
  }
  const getEditorData = () => {
    return editorRef.current.getValue();
  }
  const updateEditor = ()=>{
    editorRef.current.setValue(DEFAULTcode);
  }
  async function runCode() {
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

    const parser = new Parser();
    const env = setupGlobalScope();

    const input = await inputFile.text();
    DEFAULTcode = input;
    updateEditor();
    const program = parser.produceAST(input);

    // Redirect console.log to capture the output
    const originalConsoleLog = console.log;
    const capturedOutput = [];
    console.log = (...args) => capturedOutput.push(args.join(' '));

    try {
      await evaluate(program, env);
    } catch (error) {
      window.alert(error);
    } finally {
      // Restore console.log
      console.log = originalConsoleLog;
    }

    setOutput(capturedOutput.join('\n'));
  }

  function runEditorCode() {
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

    setOutput(capturedOutput.join('\n'));
  }

  const mystyle = {
    display: "flex"
  };
  const outputStyle = {
    overflowY: "scroll",
    height: "650px",
    width: "250px",
    padding: "10px"
  }
  return (
    <>
    <AssembleNav/>
    <div style={mystyle}>
      <div>
        <input type="file" id="fileInput" accept=".avenger" />
        <button onClick={runCode}>Run</button>
        <div>
          <h3>Code Editor:</h3>
          <div>
            <Editor
              height="650px"
              width="80vw"
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
                fontSize: "18px",
              }}
            />
            <button style={{ marginTop: "20px" }} onClick={runEditorCode} >Run</button>
          </div>
        </div>
      </div>
      <div>
        <h3>Output:</h3>
        <pre style ={outputStyle}>{output}</pre>
      </div>
    </div>
    </>
  );
}

export default Playground;