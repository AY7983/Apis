import { useState } from "react";

export default function FindAndReplace() {
  const [text, setText] = useState(
    "I love coding because coding is fun and coding helps in problem-solving."
  );
  const [targetWord, setTargetWord] = useState("");
  const [replacementWord, setReplacementWord] = useState("");
  const [highlightedText, setHighlightedText] = useState(text);
  const [isWordFound, setIsWordFound] = useState(false);

  // Find and highlight the word
  const handleFind = () => {
    if (targetWord.trim() === "") return;

    const regex = new RegExp(`\\b${targetWord}\\b`, "gi");
    if (text.match(regex)) {
      setHighlightedText(
        text.replace(regex, `<mark>${targetWord}</mark>`)
      );
      setIsWordFound(true);
    } else {
      setHighlightedText(text);
      setIsWordFound(false);
      alert("Word not found!");
    }
  };

  // Replace the found word
  const handleReplace = () => {
    if (!isWordFound || replacementWord.trim() === "") return;

    const regex = new RegExp(`\\b${targetWord}\\b`, "gi");
    setText(text.replace(regex, replacementWord));
    setHighlightedText(text.replace(regex, replacementWord));

    setTargetWord("");
    setReplacementWord("");
    setIsWordFound(false);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Find and Replace</h2>

      {/* Textarea for paragraph */}
      <textarea
        className="w-full p-2 border rounded mb-3"
        rows="4"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setHighlightedText(e.target.value);
          setIsWordFound(false);
        }}
        placeholder="Enter your paragraph"
      />

      {/* Input for finding the word */}
      <input
        type="text"
        className="w-full p-2 border rounded mb-3"
        value={targetWord}
        onChange={(e) => setTargetWord(e.target.value)}
        placeholder="Enter word to find"
      />

      <button
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-3"
        onClick={handleFind}
      >
        Find Word
      </button>

      {/* Show replacement input only if word is found */}
      {isWordFound && (
        <>
          <input
            type="text"
            className="w-full p-2 border rounded mb-3"
            value={replacementWord}
            onChange={(e) => setReplacementWord(e.target.value)}
            placeholder="Enter replacement word"
          />
          <button
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            onClick={handleReplace}
          >
            Replace Word
          </button>
        </>
      )}

      <h3 className="text-lg font-semibold mt-4">Updated Text:</h3>
      <p
        className="p-2 border rounded bg-gray-100"
        dangerouslySetInnerHTML={{ __html: highlightedText }}
      ></p>
    </div>
  );
}
