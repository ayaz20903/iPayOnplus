"use client";

import { motion } from "framer-motion";

export default function DisclaimerModal({ onConfirm }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg p-6 max-w-md w-full text-center"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <h2 className="text-xl text-[#0d3832] font-semibold mb-3">
          Disclaimer
        </h2>

        <p className="text-gray-600 text-sm mb-6">
          iPayOn+ is powered by ZYNTRIX, which is powered by token.io, iPayOn+
          does not provide or refer any banking or financial services. It
          supports only closed loop transactions for existing approved services
          and products by Token.io via ZYNTRIX.
        </p>
        <p className="text-gray-600 text-sm mb-6">
          For payment terminals, our ISO is signed and currently in process and
          pending FCA approval. Launching largest payment acquiring business
          soon.
        </p>

        <button
          onClick={onConfirm}
          className="px-5 py-2 text-white rounded-md bg-[#0d3832]"
        >
          I Understand
        </button>
      </motion.div>
    </motion.div>
  );
}
