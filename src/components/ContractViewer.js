import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ContractViewer({ contractFile }) {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch(`/contracts/${contractFile}`)
      .then((res) => res.text())
      .then(setCode);
  }, [contractFile]);

  return (
    <div className="my-6 rounded-xl overflow-hidden shadow-lg">
      <SyntaxHighlighter
        language="solidity"
        style={oneDark}
        customStyle={{
          padding: "2rem",
          fontSize: "1rem",
          background: "#282c34",
        }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}