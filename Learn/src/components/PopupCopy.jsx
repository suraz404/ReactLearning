import { createPortal } from "react-dom";

const PopupCopy = () => {
  return createPortal(
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#333",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        zIndex: 1000,
      }}
    >
      Copied ✓
    </div>,
    document.body,
  );
};

export default PopupCopy;
