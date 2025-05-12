"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Introducingcompaniesimages } from "@/context/Introducingcompaniesimages";

function Introducingcompanies() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src={Introducingcompaniesimages[1]}
          alt="Main Company"
          width={1000}
          height={400}
          className="rounded-2xl shadow-xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100, y: -100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 z-10"
      >
        <Image
          src={Introducingcompaniesimages[2]}
          alt="Top Right"
          width={300}
          height={200}
          className="rounded-xl "
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100, y: 100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute top-90 left-0 z-10"
      >
        <Image
          src={Introducingcompaniesimages[0]}
          alt="Bottom Left"
          width={400}
          height={200}
          className="rounded-xl "
        />
      </motion.div>
    </section>
  );
}

export default Introducingcompanies;
