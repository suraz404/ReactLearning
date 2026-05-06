import { useState } from "react";
import PopupCopy from "./PopupCopy";

const CopyInput = () => {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyBtn = () => {
    if (!input.trim()) return;

    navigator.clipboard.writeText(input).then(() => {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCopyBtn}>Copy</button>

      {copied && <PopupCopy />}
    </div>
  );
};

export default CopyInput;
