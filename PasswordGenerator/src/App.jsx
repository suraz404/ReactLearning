import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const passwordRef = useRef(null);

  // Memoize the generator to prevent unnecessary re-creations
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Handle Clipboard with visual feedback
  const copyToClipboard = useCallback(() => {
    // Professional touch: Select the text visually
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);

    window.navigator.clipboard.writeText(password);
    setIsCopied(true);

    // Reset the button after 2 seconds
    setTimeout(() => setIsCopied(false), 2000);
  }, [password]);

  // Auto-generate on dependency change
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-[0_20px_50px_rgba(29,57,143,0.1)] rounded-[2.5rem] p-8 border border-slate-100">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-[#1d398f] italic tracking-tighter">
            Password<span className="text-[#e8000c]">Secure</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mt-1">
            Password Generator
          </p>
        </div>

        {/* Output Display */}
        <div className="flex bg-slate-50 rounded-2xl overflow-hidden mb-6 border border-slate-100 p-1">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 bg-transparent text-[#1d398f] font-mono font-bold"
            placeholder="Generating..."
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipboard}
            className={`px-6 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${
              isCopied
                ? "bg-[#1d398f] text-white"
                : "bg-[#e8000c] text-white hover:bg-[#1d398f] shadow-lg shadow-red-500/20"
            }`}
          >
            {isCopied ? "Done" : "Copy"}
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          {/* Length Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-[11px] font-black uppercase text-slate-500 tracking-wider">
              <label>Strength Length</label>
              <span className="text-[#e8000c] bg-red-50 px-2 py-0.5 rounded-md">
                {length}
              </span>
            </div>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#e8000c]"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          {/* Checkboxes */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <input
                type="checkbox"
                id="nums"
                className="w-4 h-4 accent-[#1d398f]"
                defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label
                htmlFor="nums"
                className="text-xs font-bold text-slate-600 cursor-pointer"
              >
                Numbers
              </label>
            </div>

            <div className="flex items-center gap-2 group cursor-pointer">
              <input
                type="checkbox"
                id="chars"
                className="w-4 h-4 accent-[#1d398f]"
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label
                htmlFor="chars"
                className="text-xs font-bold text-slate-600 cursor-pointer"
              >
                Symbols
              </label>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-8 pt-6 border-t border-slate-50 text-center">
          <p className="text-[9px] font-medium text-slate-400 uppercase tracking-widest">
            Generated locally • No data stored
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
