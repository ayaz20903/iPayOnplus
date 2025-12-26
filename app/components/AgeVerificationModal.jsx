// "use client";

// import React from "react";

// export default function AgeVerificationModal({ onConfirm }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
//       <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
//         <h2 className="text-xl text-[#0d3832] font-semibold mb-3">
//           Age Verification
//         </h2>

//         <p className="text-gray-600 mb-6">
//           You must be 18 years or older to enter this website.
//         </p>

//         <div className="flex justify-center gap-4">
//           <button
//             onClick={onConfirm}
//             className="px-4 py-2 cursor-pointer text-white rounded-md bg-[#0d3832]"
//           >
//             I am 18+
//           </button>

//           <button
//             onClick={() =>
//               (window.location.href =
//                 "https://www.youtube.com/watch?v=heE_lieGsZ8")
//             }
//             className="px-4 py-2 cursor-pointer bg-black text-white rounded-md"
//           >
//             Exit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function AgeVerificationModal({ onConfirm }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg p-6 max-w-sm w-full text-center"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <h2 className="text-xl text-[#0d3832] font-semibold mb-3">
          Age Verification
        </h2>

        <p className="text-gray-600 mb-6">
          You must be 18 years or older to enter this website.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="px-4 py-2 cursor-pointer text-white rounded-md bg-[#0d3832]"
          >
            I am 18+
          </button>

          <button
            onClick={() => (window.location.href = "https://google.com")}
            className="px-4 py-2 cursor-pointer bg-black text-white border rounded-md"
          >
            Exit
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
