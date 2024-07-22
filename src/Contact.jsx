import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaRegAddressCard,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "68696b3d-1fb1-4f87-a37b-c7a9e4ebd86e");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        console.log("Success", result);
      } else {
        console.log("Failed", result);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="border-b py-24 border-neutral-900">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="text-center text-3xl lg:text-5xl"
      >
        <h2>
          Contact <span className="text-neutral-500">Me</span>
        </h2>
      </motion.div>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start">
        <motion.div
          className="flex flex-col w-full lg:w-1/2 px-4 lg:px-8 py-4 lg:py-0 lg:border-r border-neutral-900"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <div className="mt-10 flex justify-center items-center">
            <span className="border-2 rounded-lg bg-neutral-900 px-6 py-4 text-lg lg:text-xl tracking-wider font-extrabold text-white">
              Contact Information
            </span>
          </div>
          <div className="flex flex-col items-center gap-6 mt-9">
            <div className="flex items-center mb-4 border-2 border-transparent p-2 rounded-lg hover:border-purple-600 transition-all duration-300">
              <IoCall className="text-xl lg:text-2xl mr-2 lg:mr-4 hover:text-blue-500" />
              <h1 className="text-sm lg:text-xl tracking-widest">
                +923090936176
              </h1>
            </div>
            <div className="flex items-center mb-4 border-2 border-transparent p-2 rounded-lg hover:border-purple-600 transition-all duration-300">
              <MdOutlineMail className="text-xl lg:text-2xl mr-2 lg:mr-4 hover:text-red-500" />
              <h1 className="text-sm lg:text-xl tracking-widest">
                haseebrajpoot36176@gmail.com
              </h1>
            </div>
            <div className="flex items-center border-2 border-transparent p-2 rounded-lg hover:border-purple-600 transition-all duration-300">
              <FaRegAddressCard className="text-xl lg:text-2xl mr-2 lg:mr-4 hover:text-green-500" />
              <h1 className="text-sm lg:text-xl tracking-widest">Pakistan</h1>
            </div>
          </div>
          <motion.div
            className="flex items-center justify-center lg:justify-center mt-28  space-x-4"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl lg:text-3xl hover:text-neutral-500 hover:scale-105 transition-transform">
              <a
                href="https://github.com/HSBrajpoot"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <FaGithub />
              </a>
            </div>
            <div className="text-2xl lg:text-3xl hover:text-blue-700 hover:scale-105 transition-transform">
              <a
                href="https://www.linkedin.com/in/abdul-haseeb007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="text-2xl lg:text-3xl hover:text-blue-400 hover:scale-105 transition-transform">
              <a
                href="https://twitter.com/your-twitter-username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitterSquare />
              </a>
            </div>
            <div className="text-2xl lg:text-3xl hover:text-pink-500 hover:scale-105 transition-transform">
              <a
                href="https://instagram.com/your-instagram-username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagramSquare />
              </a>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col w-full lg:w-1/2 px-4 lg:px-8 py-4 lg:py-0"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <div className="mt-10 flex justify-center">
            <span className="border-2 rounded-lg bg-neutral-900 px-6 py-4 text-lg lg:text-xl tracking-wider font-extrabold text-white">
              Message Me
            </span>
          </div>
          <form
            className="mt-8 px-4 lg:px-8 w-full max-w-lg mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-400 text-lg lg:text-xl font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border-2 border-neutral-900 rounded w-full py-3 px-3 text-white font-bold bg-transparent placeholder-gray-500 focus:bg-white focus:text-black focus:border-purple-600  hover:border-purple-600 hover:scale-105 transition-all duration-300"
                id="name"
                type="text"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-400 text-lg lg:text-xl font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border-2 border-neutral-900 rounded w-full py-3 px-3 text-white font-bold bg-transparent placeholder-gray-500 focus:bg-white focus:text-black focus:border-purple-600  hover:border-purple-600 hover:scale-105 transition-all duration-300"
                id="email"
                type="email"
                placeholder="Your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-400 text-lg lg:text-xl font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border-2 border-neutral-900 rounded w-full py-3 px-3 text-white font-bold bg-transparent placeholder-gray-500 focus:bg-white focus:text-black focus:border-purple-600 hover:border-purple-600 hover:scale-105 transition-all duration-300"
                id="message"
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-center lg:justify-between">
              <button
                className="bg-gradient-to-r from-purple-500 via-slate-300 to-pink-600 tracking-tighter bg-clip-text text-transparent font-bold py-3 px-4 border-2 border-neutral-900 rounded-md focus:outline-none focus:shadow-outline hover:scale-105 transition-transform duration-500 hover:bg-gradient-to-r hover:from-purple-600 hover:via-slate-400 hover:to-pink-700"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
