"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  PartyPopper,
  Gift,
  Cake,
  Star,
  ChevronRight,
  Smile,
  Music,
  Camera,
  Coffee,
  Book,
  Plane,
  Palette,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const birthdayWishes = [
  "May your day be filled with endless smiles, sweet treats, and magic ✨",
  "Wishing the happiest of birthdays to someone truly special 🎂",
  "Another year older, wiser, and even more wonderful 💫",
  "May all your dreams and wishes come true this year 🌟",
];

const favoriteMemories = [
  "From endless conversations to non-stop laughs, good times are always guaranteed 😂",
  "It's always great looking back at all the fun milestones we've hit 🚀",
  "Appreciate the good vibes and energy you bring into every room 💡",
  "Wishing you the absolute best birthday—hope it's a great one! 🥳",
];

const interests = [
  { icon: Music, label: "Music", color: "from-blue-400 to-cyan-500" },
  { icon: Camera, label: "Photography", color: "from-purple-400 to-pink-500" },
  { icon: Coffee, label: "Coffee", color: "from-amber-400 to-orange-500" },
  { icon: Book, label: "Reading", color: "from-green-400 to-emerald-500" },
  { icon: Plane, label: "Travel", color: "from-indigo-400 to-blue-500" },
  { icon: Palette, label: "Art", color: "from-rose-400 to-red-500" },
];

const BirthdayWishForSarah = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [currentMemory, setCurrentMemory] = useState(0);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const nextMemory = () => {
    setCurrentMemory((prev) => (prev + 1) % favoriteMemories.length);
  };

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Stars Background */}
      {Array.from({ length: 50 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-yellow-200"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0, 1, 0.5, 1, 0],
            scale: [0, 1, 0.8, 1.2, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <Star size={8 + Math.random() * 12} fill="currentColor" />
        </motion.div>
      ))}

      {/* Floating Birthday Elements */}
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-purple-300"
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
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 8,
          }}
        >
          {index % 4 === 0 ? (
            <PartyPopper size={24 + Math.random() * 16} />
          ) : index % 4 === 1 ? (
            <Cake size={24 + Math.random() * 16} />
          ) : index % 4 === 2 ? (
            <Gift size={24 + Math.random() * 16} />
          ) : (
            <Sparkles size={24 + Math.random() * 16} />
          )}
        </motion.div>
      ))}

      {/* Confetti Explosion */}
      <AnimatePresence>
        {confetti && (
          <>
            {Array.from({ length: 100 }).map((_, index) => (
              <motion.div
                key={`confetti-${index}`}
                className="absolute"
                initial={{
                  x: "50vw",
                  y: "50vh",
                  opacity: 1,
                  scale: 0,
                }}
                animate={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  opacity: 0,
                  scale: 1,
                  rotate: Math.random() * 360,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  width: 10,
                  height: 10,
                  borderRadius: Math.random() > 0.5 ? "50%" : "2px",
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <motion.div
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 shadow-xl backdrop-blur-md border border-white/20"
          >
            <Sparkles className="text-yellow-300" />
            <span className="font-medium text-gray-200">
              Happy Birthday, Sarah! 🎂🎉
            </span>
          </motion.div>

          <h1 className="bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-300 bg-clip-text text-5xl font-black text-transparent md:text-7xl drop-shadow-lg">
            Happy Birthday, Sarah! ✨
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-2xl">
            Today is all about celebrating someone truly amazing 💫
          </p>

          {/* Interactive Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {/* Candle/Blow Wishes Button */}
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                onClick={handleBlowCandles}
                className={`rounded-full px-8 py-6 text-lg shadow-2xl transition-all duration-300 ${
                  candlesBlown
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                }`}
              >
                <Cake className="mr-2" />
                {candlesBlown ? "Wish Granted! ✨🎊" : "Make a Wish & Blow Candles 🕯️"}
              </Button>
            </motion.div>

            {/* Birthday Surprise Button */}
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                onClick={() => setShowSurprise(!showSurprise)}
                className="rounded-full border-purple-300 bg-white/10 px-8 py-6 text-lg backdrop-blur-md text-white hover:bg-white/20"
              >
                <Gift className="mr-2 text-pink-400" />
                {showSurprise ? "Hide Surprise" : "Unwrap Birthday Gift 🎁"}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Surprise Gift Message */}
        <AnimatePresence>
          {showSurprise && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.5 }}
              className="mt-10 max-w-2xl"
            >
              <Card className="rounded-[2rem] border border-white/20 bg-white/10 shadow-[0_20px_60px_rgba(168,85,247,0.4)] backdrop-blur-xl">
                <CardContent className="p-10">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="mb-5 flex justify-center text-pink-400"
                  >
                    <Cake size={60} />
                  </motion.div>

                  <h2 className="mb-4 text-3xl font-bold text-purple-300">
                    Happy Birthday, Sarah! 🎈
                  </h2>

                  <p className="text-lg leading-relaxed text-gray-200">
                    Thank you for making every day feel like a celebration.
                    <br />
                    I hope your birthday brings you as much joy as you bring to everyone around you!
                    <br />
                    Here's to another incredible year ahead 🎂✨
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 max-w-5xl w-full"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Your Amazing Interests 🌟</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className={`rounded-2xl border-0 bg-gradient-to-br ${interest.color} shadow-xl`}>
                  <CardContent className="p-6 flex flex-col items-center justify-center text-white">
                    <interest.icon size={40} className="mb-3" />
                    <span className="font-semibold text-lg">{interest.label}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Wishes Grid */}
        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-2">
          {birthdayWishes.map((wish, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
            >
              <Card className="rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center text-yellow-300">
                    <Star size={34} fill="currentColor" />
                  </div>

                  <p className="text-lg font-medium leading-relaxed text-gray-200">
                    {wish}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Memories Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 max-w-3xl"
        >
          <Card className="overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 shadow-[0_20px_80px_rgba(168,85,247,0.5)] backdrop-blur-xl">
            <CardContent className="p-10 text-white">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6 flex justify-center"
              >
                <Smile size={60} />
              </motion.div>

              <h2 className="mb-6 text-4xl font-bold">
                Special Birthday Memories ✨
              </h2>

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentMemory}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl leading-relaxed text-purple-100"
                >
                  {favoriteMemories[currentMemory]}
                </motion.p>
              </AnimatePresence>

              <motion.div
                whileTap={{ scale: 0.9 }}
                className="mt-8"
              >
                <Button
                  onClick={nextMemory}
                  className="rounded-full bg-white px-8 py-6 text-lg font-semibold text-purple-600 hover:bg-purple-100"
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
          className="mt-20 flex items-center gap-2 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <PartyPopper
            className="text-purple-400"
            size={18}
          />
          <p className="text-sm md:text-base">
            Made with care for Sarah's Special Day 🥳 💜
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BirthdayWishForSarah;