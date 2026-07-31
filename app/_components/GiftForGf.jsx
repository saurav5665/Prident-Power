"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Zap,
  Gift,
  Star,
  PartyPopper,
  ChevronRight,
  Smile,
  UserCheck,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const birthdayMessages = [
  "Wishing you a fantastic birthday filled with happiness and success ✨",
  "May this next year bring you new adventures, joy, and peace 🌟",
  "Another great year! Celebrating the wonderful person you are 🎉",
  "Hoping all your goals and aspirations come true this year 🚀",
];

const appreciationPoints = [
  "Your resilience and strength are truly inspiring to everyone ☀️",
  "You have a great sense of humor that makes any situation better 😂",
  "Thank you for being such an authentic and thoughtful friend 🤝",
  "You always have the best energy and light up the room 💡",
];

const BirthdayCard = () => {
  const [showGift, setShowGift] = useState(false);
  const [currentAppreciation, setCurrentAppreciation] = useState(0);
  const [confidenceBoosted, setConfidenceBoosted] = useState(false);

  const nextAppreciation = () => {
    setCurrentAppreciation((prev) => (prev + 1) % appreciationPoints.length);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cyan-100 via-sky-50 to-emerald-100">
      {/* Background Blur Orbs */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />

      {/* Floating Decorative Icons */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-500/80"
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
            duration: 7 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        >
          {index % 3 === 0 ? (
            <Sparkles size={16 + Math.random() * 12} />
          ) : index % 3 === 1 ? (
            <Star size={16 + Math.random() * 12} />
          ) : (
            <PartyPopper size={16 + Math.random() * 12} />
          )}
        </motion.div>
      ))}

      <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center">
        {/* Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-md"
          >
            <Zap className="text-cyan-600" />
            <span className="font-semibold text-cyan-900">
              Birthday Wishes for Sarah 🎉
            </span>
          </motion.div>

          <h1 className="bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Happy Birthday, Sarah! 🚀
          </h1>

          <p className="mt-6 text-lg font-medium leading-relaxed text-slate-700 md:text-2xl">
            Celebrating the amazing person you are today. Have an incredible time! ✨
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setConfidenceBoosted(!confidenceBoosted)}
                className={`rounded-full px-8 py-6 text-lg font-bold shadow-2xl transition-all duration-300 ${
                  confidenceBoosted
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "bg-cyan-600 hover:bg-cyan-700"
                }`}
              >
                <Zap className="mr-2" />
                {confidenceBoosted ? "Energy Boosted! ⚡️" : "Confidence Boost ⚡️"}
              </Button>
            </motion.div>

            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={() => setShowGift(!showGift)}
                className="rounded-full border-cyan-300 bg-white/70 px-8 py-6 text-lg font-semibold text-cyan-900 backdrop-blur-md"
              >
                <Gift className="mr-2 text-cyan-600" />
                {showGift ? "Hide Message" : "Open Birthday Wishes 🎁"}
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Surprise Wish Message */}
        <AnimatePresence>
          {showGift && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="mt-10 max-w-2xl"
            >
              <Card className="rounded-[2.5rem] border border-cyan-100 bg-white/70 shadow-[0_30px_70px_rgba(34,197,94,0.2)] backdrop-blur-xl">
                <CardContent className="p-10">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mb-5 flex justify-center text-emerald-500"
                  >
                    <Star size={64} fill="currentColor" />
                  </motion.div>

                  <h2 className="mb-4 text-3xl font-bold text-cyan-900">
                    Wishing You the Best Today! 🎈
                  </h2>

                  <p className="text-lg leading-relaxed text-slate-700">
                    Sarah, thank you for being a wonderful and authentic presence.
                    <br />
                    I hope your birthday is everything you want it to be—fun, relaxing, and memorable!
                    <br />
                    Here’s to another great year of health and happiness. 🎂
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wishes Cards */}
        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-2">
          {birthdayMessages.map((wish, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
            >
              <Card className="rounded-3xl border border-white/60 bg-white/50 shadow-xl backdrop-blur-xl hover:border-emerald-100">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center text-cyan-500">
                    <UserCheck size={36} />
                  </div>

                  <p className="text-lg font-medium leading-relaxed text-slate-800">
                    {wish}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Appreciation Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 max-w-3xl"
        >
          <Card className="overflow-hidden rounded-[2rem] border-0 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 shadow-[0_25px_80px_rgba(34,197,94,0.3)]">
            <CardContent className="p-10 text-white">
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6 flex justify-center text-teal-100"
              >
                <Smile size={60} />
              </motion.div>

              <h2 className="mb-6 text-4xl font-black">
                Things I Appreciate About You ✨
              </h2>

              <AnimatePresence mode="wait">
                <motion.p
                  key={currentAppreciation}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl font-medium leading-relaxed text-cyan-50"
                >
                  {appreciationPoints[currentAppreciation]}
                </motion.p>
              </AnimatePresence>

              <motion.div whileTap={{ scale: 0.95 }} className="mt-8">
                <Button
                  onClick={nextAppreciation}
                  className="rounded-full bg-white px-8 py-6 text-lg font-bold text-teal-700 shadow-md hover:bg-cyan-50"
                >
                  Next Point
                  <ChevronRight className="ml-2" />
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-20 flex items-center gap-2 text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <PartyPopper className="text-emerald-500" size={18} />
          <p className="text-sm md:text-base">
            Crafted for Sarah’s Birthday 🥳 🤝
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BirthdayCard;