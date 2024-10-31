"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

export default function CodeHighlighter({ language = "javascript", code }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}
