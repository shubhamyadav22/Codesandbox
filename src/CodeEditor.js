import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodeEditor.css";

const CodeEditor = () => {
  const [code, setCode] = useState("");

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor-container">
      <textarea
        className="code-input"
        value={code}
        onChange={handleCodeChange}
        placeholder="Type your code here..."
      />
      <SyntaxHighlighter
        language="javascript"
        style={duotoneLight}
        className="code-output"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeEditor;
