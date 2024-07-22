import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCES } from "./constant/index";

// Animation variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const headingVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const itemVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const dateVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="border-b mt-20 border-neutral-900 pb-4" ref={ref}>
      <motion.h2
        className="text-5xl text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={headingVariant}
      >
        Projects
      </motion.h2>
      <motion.div
        className="mt-8 space-y-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariant}
      >
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            className="p-4 border-gray-300 rounded-lg shadow-sm"
            variants={itemVariant}
          >
            <motion.h3
              className="text-xl font-semibold"
              variants={dateVariant}
            >
              {exp.company}
            </motion.h3>
            <motion.p
              className="text-sm text-gray-400"
              variants={dateVariant}
            >
              {exp.year}
            </motion.p>
            <motion.p
              className="mt-2 text-gray-300"
              variants={itemVariant}
            >
              {exp.description}
            </motion.p>
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-purple-400 text-black font-semibold hover:text-yellow-200 py-1 px-2 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
