import React from "react";
import hsb1 from "./img/hsb1.png";
import { motion } from "framer-motion";

const container = (delay = 0) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:-scroll-mb-3.5">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-6xl -tracking-wide whitespace-break-spaces font-thin lg:mt-20 lg:text-8xl"
            >
              Abdul Haseeb
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-purple-500 via-slate-300 to-pink-600 tracking-tighter bg-clip-text text-transparent text-5xl"
            >
              Full Stack Developer
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-5 max-w-lg py-6 text-[18px] tracking-wide"
            >
              I am an enthusiastic web developer, keen on mastering the art of
              full-stack development. Currently, I have honed my skills in HTML,
              CSS, JavaScript, React.js, and Next.js. I am now working on Python
              as a backend, specifically with Flask and Django. My passion lies
              in building dynamic and user-friendly web applications, and I am
              eager to leverage my growing expertise to create impactful digital
              solutions.
            </motion.p>
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center lg:justify-start mt-6"
            >
              <a 
                className="bg-gradient-to-r from-purple-500 via-slate-300 to-pink-600 text-2xl tracking-tighter bg-clip-text text-transparent font-bold py-4 px-6 border-2 border-purple-900 rounded-md focus:outline-none focus:shadow-outline hover:scale-105 transition-transform duration-500 hover:bg-gradient-to-r hover:from-purple-600 hover:via-slate-400 hover:to-pink-700" 
                href="/cv.pdf" 
                download="Abdul_Haseeb_CV.pdf"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:py-11">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            src={hsb1} alt="Abdul Haseeb" className="h-96 w-96 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
