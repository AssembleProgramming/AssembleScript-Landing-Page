import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Dropdown } from 'react-bootstrap';
import 'prismjs/themes/prism-okaidia.css';
import './CodeSnippet.scss';

const PracticeOneCodeSnippet = () => {
    const languages = ['C', 'CPP', 'JavaScript', 'TypeScript', 'Python'];
    const [selectedLanguage, setSelectedLanguage] = useState('C');

    const codeSnippets = {
        C: '#include <stdio.h>\n\nint main() {\n  printf("Hello, World!\\n");\n  return 0;\n}',
        CPP: '#include <iostream>\n\nint main() {\n  std::cout << "Hello, World!\\n";\n  return 0;\n}',
        JavaScript: 'console.log("Hello, World!");',
        TypeScript: 'console.log("Hello, World!");',
        Python: 'print("Hello, World!")'
    };

    const handleLanguageChange = (selected) => {
        setSelectedLanguage(selected);
    };

    return (
        <div className="code-snippet-container">
            <h1><i style={{color: "#1990ff"}} class="fa-solid fa-file-lines"></i> Code Snippet</h1>
            <div className="language-dropdown">
                <p>Select the Language: </p>
                <Dropdown onSelect={handleLanguageChange}>
                    <Dropdown.Toggle  variant="secondary" id="dropdown-basic">
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
                <SyntaxHighlighter language={selectedLanguage.toLowerCase()} style={oneDark} showLineNumbers>
                    {codeSnippets[selectedLanguage]}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default PracticeOneCodeSnippet;
