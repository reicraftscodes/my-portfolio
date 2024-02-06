import React, { useEffect, useRef } from "react";

const useModalInteraction = (onClose) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return modalRef;
};

const ProjectModal = ({ project, onClose }) => {

  const modalRef = useModalInteraction(onClose);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div ref={modalRef} className="bg-white dark:bg-slate-800 rounded-lg p-8 max-w-2xl mx-auto relative dark:text-white ring-1 ring-slate-900/5 shadow-xl">
        <h2 className="text-lg font-bold mb-4 ">{project.title}</h2>
        <div className="border-b dark:border-gray-600"> </div>
        {/* Apply vertical scrolling to the modal content */}
        <div className="max-h-80 overflow-y-auto">
          {/* Render fullDesc as HTML with line breaks and bullet points */}
          <div dangerouslySetInnerHTML={{ __html: project.fullDesc }}></div>
        </div>
        <div className="border-t dark:border-gray-600"> </div>
        {/* Close button */}
        <button
          className="mt-4 px-4 py-2 bg-gray-500 hover:bg-gray-700  text-white rounded-md cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;