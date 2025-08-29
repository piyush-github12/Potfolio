import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { LuExternalLink } from "react-icons/lu";
import { FaTimes } from "react-icons/fa";
import './Projectboxmodal.css'

const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!project) return null;

  const isVideo = project.video;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] bg-black bg-opacity-70 flex justify-center items-center  p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={modalRef}
            style={{
    msOverflowStyle: "none", // for IE
  }}
          className="custom-scroll bg-[#1e1e1e] text-white rounded-xl max-h-[85vh]  max-w-4xl p-5 shadow-lg relative  gap-5 overflow-hidden overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="absolute top-1 right-1 text-white text-2xl hover:scale-125 transition-transform z-10"
            onClick={onClose}
          >
            <FaTimes />
          </button>

          <div className="w-full  overflow-hidden rounded-lg flex items-center justify-center">
            {isVideo ? (
              <video
                controls
                muted
                poster={project.image}
                className="w-full max-w-[800px] h-auto rounded-lg"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={project.image}
                alt={project.proName}
                className="w-full  md:w-[600px] h-auto rounded-lg object-cover"
              />
            )}
          </div>

          <div className="w-full mt-5 flex flex-wrap justify-between ">
            <h2 className="text-3xl font-bold mb-2 font-Caveat">
              {project.proName}
            </h2>

            <div className="flex gap-4 mb-4 font-Caveat font-extrabold">
              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tooltip-container text-white hover:scale-125 transition-transform"
                  data-tooltip="Source Code"
                >
                  <VscGithub className="h-6 w-6" />
                </a>
              )}
              {project.linkedinLink && (
                <a
                  href={project.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tooltip-container text-white hover:scale-125 transition-transform"
                   data-tooltip="LinkedIn"
                >
                  <CiLinkedin className="h-6 w-6" />
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tooltip-container text-white hover:scale-125 transition-transform"
                   data-tooltip="Live "
                >
                  <LuExternalLink className="h-6 w-6" />
                </a>
              )}
            </div>

          </div>
            <div
              className="text-gray-300 text-base leading-relaxed overflow-y-auto pr-2"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
