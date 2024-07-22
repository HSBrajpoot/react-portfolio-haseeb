import React from "react";
import about from "./img/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className="my-20 text-center text-5xl">
        <h1>
          About <span className="text-neutral-500">Me</span>
        </h1>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              src={about}
              alt="About Image"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="my-9 py-6 max-w-xl text-[18px]"
            >
              Hello! I'm Abdul Haseeb, an enthusiastic web developer with a
              passion for mastering the art of full-stack development. Over the
              years, I have honed my skills in HTML, CSS, JavaScript, React.js,
              and Next.js. Recently, I have expanded my expertise to include
              Python as a backend technology, specifically working with Flask
              and Django. My journey in web development is driven by a deep
              desire to build dynamic and user-friendly web applications. I am
              committed to leveraging my growing skill set to create impactful
              digital solutions that enhance user experiences and solve
              real-world problems. I am continuously learning and evolving in
              this ever-changing field, and I am excited about the endless
              possibilities that web development offers. Join me on my journey
              as I strive to make a difference through innovative and efficient
              web solutions.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
