import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg"
        >
          <div className="flex items-center space-x-2">
            <span>{message}</span>
            <button onClick={onClose} className="text-white">
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
