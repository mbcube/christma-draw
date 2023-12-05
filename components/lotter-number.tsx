import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// const LotteryNumber = ({ number }: any) => {
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Define the initial, animate, and exit states for the animation
//   const variants = {
//     initial: {
//       scale: 0,
//       rotate: 0,
//       opacity: 0,
//     },
//     animate: {
//       scale: 1,
//       rotate: 360,
//       opacity: 1,
//       transition: {
//         duration: 1,
//         ease: "easeInOut",
//       },
//     },
//     exit: {
//       scale: 0,
//       rotate: -360,
//       opacity: 0,
//       transition: {
//         duration: 1,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const startAnimation = () => {
//     setIsAnimating(true);
//     setTimeout(() => setIsAnimating(false), 1000); // Reset animation after 1 second
//   };

//   return (
//     <div>
//       <button onClick={startAnimation}>Draw Number</button>
//       <AnimatePresence mode="wait">
//         {isAnimating && (
//           <motion.div
//             key={number}
//             variants={variants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             className="lottery-number"
//           >
//             {number}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

export default function LotteryNumber({ digit }: any) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentNumber(Math.floor(Math.random() * 100));
    }, 100);

    setTimeout(() => {
      clearInterval(intervalId);
      setDone(true);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {!done && (
        <motion.span
          animate={{ rotateX: 360 }}
          transition={{ repeat: Infinity, duration: 0.1 }}
          style={{ perspective: 200 }}
        >
          {currentNumber}
        </motion.span>
      )}
      {done && <span>{digit}</span>}
    </>
  );
}
