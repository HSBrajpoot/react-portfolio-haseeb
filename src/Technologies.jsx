import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandDjango } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

// Function to generate random wave animations
const generateRandomWave = (delay) => ({
  y: [0, Math.random() * 40 - 20, 0], // Randomize the max height of the wave
  transition: {
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop",
    delay: delay // Apply delay to create a staggered effect
  }
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 p-18 pb-36 mb-20">
      <div className="my-20 text-center text-5xl">
        <h2>
          My <span className="text-neutral-500">Skills</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 text-8xl p-4"
          animate={generateRandomWave(0)}
        >
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 text-8xl p-4"
          animate={generateRandomWave(0.2)} // Staggered delay
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 text-8xl p-4"
          animate={generateRandomWave(0.4)} // Staggered delay
        >
          <TbBrandDjango className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 text-8xl p-4"
          animate={generateRandomWave(0.6)} // Staggered delay
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 text-8xl p-4"
          animate={generateRandomWave(0.8)} // Staggered delay
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
