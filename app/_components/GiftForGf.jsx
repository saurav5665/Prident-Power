"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Sparkles,
  Stars,
  Gift,
  Flower2,
  Music4,
  ChevronRight,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const quotes = [
  "You are my favorite notification every day 💌",
  "In a world full of temporary things, you are my forever 🌸",
  "Every love story is beautiful, but ours is my favorite ✨",
  "You make ordinary moments feel magical 💖",
];

const memories = [
  "The way you smile makes my whole day brighter ☀️",
  "Every conversation with you feels special 💕",
  "You are the peace my heart was searching for 🌸",
  "Loving you is the easiest thing I’ve ever done ❤️",
];

const GiftForGf = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [liked, setLiked] = useState(false);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % memories.length);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl" />

      {/* Floating Hearts */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-pink-400"
          initial={{
            y: "100vh",
            x: Math.random() * 1200,
            opacity: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <Heart
            size={20 + Math.random() * 18}
            fill="currentColor"
          />
        </motion.div>
      ))}

      <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <motion.div
            animate={{ rotate: [0, 4, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-3 shadow-xl backdrop-blur-md"
          >
            <Sparkles className="text-pink-500" />
            <span className="font-medium text-gray-700">
              A Special Surprise For Sarah 💖
            </span>
          </motion.div>

          <h1 className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Dear Sarah ✨
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-700 md:text-2xl">
            You are the most beautiful chapter of my life 💕
          </p>

          {/* Interactive Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {/* Love Button */}
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                onClick={() => setLiked(!liked)}
                className={`rounded-full px-8 py-6 text-lg shadow-2xl transition-all duration-300 ${
                  liked
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-pink-500 hover:bg-pink-600"
                }`}
              >
                <Heart
                  className="mr-2"
                  fill="white"
                />
                {liked ? "I Love You ❤️" : "Click My Heart"}
              </Button>
            </motion.div>

            {/* Surprise Button */}
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                onClick={() => setShowMessage(!showMessage)}
                className="rounded-full border-pink-300 bg-white/70 px-8 py-6 text-lg backdrop-blur-md"
              >
                <Gift className="mr-2 text-pink-500" />
                Open Surprise
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Surprise Message */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.5 }}
              className="mt-10 max-w-2xl"
            >
              <Card className="rounded-[2rem] border-0 bg-white/70 shadow-[0_20px_60px_rgba(236,72,153,0.3)] backdrop-blur-xl">
                <CardContent className="p-10">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="mb-5 flex justify-center"
                  >
                    <Flower2
                      className="text-pink-500"
                      size={60}
                    />
                  </motion.div>

                  <h2 className="mb-4 text-3xl font-bold text-pink-600">
                    You Mean Everything To Me 💖
                  </h2>

                  <p className="text-lg leading-relaxed text-gray-700">
                    Sarah, thank you for being part of my life.
                    <br />
                    Every smile of yours feels like magic ✨
                    <br />
                    I just want to make you happy forever ❤️
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quote Cards */}
        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-2">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? 1 : -1,
              }}
            >
              <Card className="rounded-3xl border-white/40 bg-white/60 shadow-2xl backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    <Stars
                      className="text-pink-500"
                      size={34}
                    />
                  </div>

                  <p className="text-lg font-medium leading-relaxed text-gray-700">
                    {quote}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Memory Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 max-w-3xl"
        >
          <Card className="overflow-hidden rounded-[2rem] border-0 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 shadow-[0_20px_80px_rgba(236,72,153,0.4)]">
            <CardContent className="p-10 text-white">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6 flex justify-center"
              >
                <Music4 size={60} />
              </motion.div>

              <h2 className="mb-6 text-4xl font-bold">
                Little Things I Love About You ✨
              </h2>

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentQuote}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl leading-relaxed text-pink-50"
                >
                  {memories[currentQuote]}
                </motion.p>
              </AnimatePresence>

              <motion.div
                whileTap={{ scale: 0.9 }}
                className="mt-8"
              >
                <Button
                  onClick={nextQuote}
                  className="rounded-full bg-white px-8 py-6 text-lg font-semibold text-pink-600 hover:bg-pink-100"
                >
                  Next Memory
                  <ChevronRight className="ml-2" />
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-20 flex items-center gap-2 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <Heart
            className="text-pink-500"
            fill="currentColor"
            size={18}
          />
          <p className="text-sm md:text-base">
            Crafted with love only for Sarah 💕
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GiftForGf;