"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isSquareVisible, setIsSquareVisible] = useState(false);

  const handleSquare = () => {
    setIsSquareVisible(!isSquareVisible);
  };

  return (
    <>
      <main className={`min-h-screen flex-col items-start justify-start p-24`}>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${
            isSquareVisible ? "border-[0px]" : "border-[1px]"
          } border-black w-96 h-96 p-2 flex justify-end flex-col`}
          onClick={handleSquare}
        >
          <div className="flex flex-row justify-between">
            <motion.div
              className="border-2 border-black w-24 h-8 my-2 justify-center flex"
              initial={{ y: 0 }}
              animate={{
                y: isSquareVisible ? -200 : 0,
                x: isSquareVisible ? 580 : 0,
              }}
              transition={{ duration: 0.6 }}
            >
              <h1>Block 1</h1>
            </motion.div>
            <motion.div
              className="border-2 border-black w-24 h-8 my-2 flex justify-center"
              initial={{ y: 0 }}
              animate={{
                y: isSquareVisible ? -200 : 0,
                x: isSquareVisible ? 180 : 0,
              }}
              transition={{ duration: 0.6 }}
            >
              <h1>Block 2</h1>
            </motion.div>
          </div>
          <motion.div
            className="border-2 border-black w-full h-12 my-2 flex justify-center items-center"
            initial={{ y: 0 }}
            animate={{
              y: isSquareVisible ? -200 : 0,
              x: isSquareVisible ? 450 : 0,
              width: isSquareVisible ? "40rem" : "auto",
              height: isSquareVisible ? "3rem" : "3rem",
            }}
            transition={{ duration: 0.6 }}
          >
            <h2>Block 3</h2>
          </motion.div>
        </motion.div>
      </main>
      <main
        className={`min-h-screen flex-col items-end justify-end p-24 ${
          !isSquareVisible ? "hidden" : ""
        }`}
        onClick={handleSquare}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{
            opacity: isSquareVisible ? 1 : 0,
            y: isSquareVisible ? 0 : 20,
            scale: isSquareVisible ? 1 : 0.5,
          }}
          transition={{ duration: 0.5 }}
          className="border-[1px] border-black w-[44rem] h-48 p-2 flex justify-end flex-col"
          style={{
            position: "fixed",
            top: 90,
            right: 38,
            display: isSquareVisible ? "flex" : "none",
          }}
        ></motion.div>
      </main>
    </>
  );
}
