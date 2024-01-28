import React from "react";


const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 max-w-2xl mx-auto relative">
        <button className="absolute top-4 right-4 text-gray-500" onClick={onClose}>
          <span className="sr-only">Close</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <div className="max-h-80 overflow-y-auto">
          {/* Render fullDesc as HTML with line breaks and bullet points */}
          <div dangerouslySetInnerHTML={{ __html: project.fullDesc }}></div>
        </div>
      </div>
    </div>
  );
};
export default ProjectModal;