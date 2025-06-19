import { useState, useEffect, useRef } from "react";
import { saveAs } from "file-saver";

const GeneratedPlot = ({ plot }) => {
  const [copied, setCopied] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typingInterval = useRef(null);

  useEffect(() => {
    if (plot) {
      let i = 0;
      setDisplayText(plot[0]);
      setIsTyping(true);

      typingInterval.current = setInterval(() => {
        if (i+1 < plot.length) {
          setDisplayText((prev) => prev + plot[i]);
          i++;
        } else {
          clearInterval(typingInterval.current);
          setIsTyping(false);
        }
      }, 50);

      return () => clearInterval(typingInterval.current);
    }
  }, [plot]);

  const stopTyping = () => {
    if (typingInterval.current) {
      clearInterval(typingInterval.current);
      setIsTyping(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(displayText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadText = () => {
    const blob = new Blob([displayText], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "generated_story.txt");
  };

  return (
    <div className="mt-4 p-6 bg-gray-800 rounded-lg w-full max-w-md text-center shadow-lg">
      <h2 className="text-lg font-bold text-white">Generated Story:</h2>
      <p className="text-gray-300 mt-3 font-mono min-h-[80px]">{displayText}</p>

      {/* ✅ Fix spacing between buttons */}
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {isTyping && (
          <button
            onClick={stopTyping}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all"
          >
            Stop
          </button>
        )}
        <button
          onClick={copyToClipboard}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <button
          onClick={downloadText}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default GeneratedPlot;




  