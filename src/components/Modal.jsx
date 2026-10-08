import { useEffect } from "react";

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    >
      <div className="max-h-[90vh] w-full max-w-xl overflow-auto rounded-2xl border border-zinc-100 bg-zinc-100 shadow-2xl">
        {children}
      </div>
    </div>
  );
};

export default Modal;