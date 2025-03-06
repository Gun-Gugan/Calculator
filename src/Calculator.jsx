import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  function handleClick(value) {
    setInput(input + value);
  }

  function clearInput() {
    setInput("");
  }

  function calculateResult() {
    try {
      setInput(eval(input)); // Be careful with eval in real projects
    } catch {
      setInput("Error");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-4 rounded-lg shadow-md w-64">
        <div className="mb-3 p-2 bg-gray-700 text-white text-right text-xl rounded">
          {input || "0"}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map(
            (char) => (
              <button
                key={char}
                className="p-3 bg-gray-600 text-white rounded text-lg hover:bg-gray-500"
                onClick={() => (char === "=" ? calculateResult() : handleClick(char))}
              >
                {char}
              </button>
            )
          )}
          <button
            className="col-span-4 p-3 bg-red-600 text-white rounded text-lg hover:bg-red-500"
            onClick={clearInput}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
