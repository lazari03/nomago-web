import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-all">
      <div className="relative w-full max-w-md mx-4 sm:mx-0 bg-transparent p-0 animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-700 text-3xl font-bold transition-colors z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="py-2">{children}</div>
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </div>
  );
};

export default Modal;
