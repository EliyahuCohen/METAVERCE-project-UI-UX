"use client";

import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer whileInView={{ opacity: [0, 1] }} transition={{ delay: 1 }}>
    <div className="flex cursor-pointer flex-col lg:flex-row items-center row justify-between max-w-[1100px] m-auto pb-10">
      <h1 className="font-semibold text-white md:text-[40px] text-[30px] ">
        Enter the Metaverce{" "}
      </h1>
      <div className="flex justify-center items-center text-white bg-[#25618B] p-4 rounded-full mt-0 sm:mt-5">
        <img
          src="/headset.svg"
          alt="headset"
          className="h-[15px] w-[15px] object-contain mr-2"
        />
        <p>ENTER METAVERCE</p>
      </div>
    </div>
    <div
      style={{ color: "rgba(255, 255, 255, 0.4)" }}
      className="max-w-[1100px] m-auto mt-5 pb-5 flex lg:flex-row sm:flex-col items-center justify-between"
    >
      <h3>MERTAVURSE</h3>
      <p>Copyright 2022 Eliyahu Cohen | All rights reserved.</p>
      <div className="flex">
        <img
          src="/twitter.svg"
          alt="twitter icon"
          className="p-2 cursor-pointer"
        />
        <img
          src="/linkedin.svg"
          alt="linkedin icon"
          className="p-2 cursor-pointer"
        />
        <img
          src="/instagram.svg"
          alt="instagram icon"
          className="p-2 cursor-pointer"
        />
        <img
          src="/facebook.svg"
          alt="facebook icon"
          className="p-2 cursor-pointer"
        />
      </div>
    </div>
  </motion.footer>
);

export default Footer;
