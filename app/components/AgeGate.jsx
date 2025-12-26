// "use client";

// import { useEffect, useState } from "react";
// import AgeVerificationModal from "./AgeVerificationModal";

// export default function AgeGate({ children }) {
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const verified = localStorage.getItem("age_verified_ipayonplus");
//     if (!verified) {
//       setShowModal(true);
//     }
//   }, []);

//   // 🔒 Lock / unlock background scroll
//   useEffect(() => {
//     if (showModal) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     // cleanup on unmount
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [showModal]);

//   const handleConfirm = () => {
//     localStorage.setItem("age_verified_ipayonplus", "true");
//     setShowModal(false);
//   };

//   return (
//     <>
//       {showModal && <AgeVerificationModal onConfirm={handleConfirm} />}
//       {children}
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AgeVerificationModal from "./AgeVerificationModal";
import DisclaimerModal from "./DisclaimerModal";

export default function AgeGate({ children }) {
  const [step, setStep] = useState(null); // "age" | "disclaimer" | null

  useEffect(() => {
    const verified = localStorage.getItem("site_verified");
    if (!verified) {
      setStep("age");
    }
  }, []);

  // 🔒 Lock background scroll
  useEffect(() => {
    if (step) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [step]);

  return (
    <>
      <AnimatePresence mode="wait">
        {step === "age" && (
          <AgeVerificationModal
            key="age"
            onConfirm={() => setStep("disclaimer")}
          />
        )}

        {step === "disclaimer" && (
          <DisclaimerModal
            key="disclaimer"
            onConfirm={() => {
              localStorage.setItem("site_verified", "true");
              setStep(null);
            }}
          />
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
