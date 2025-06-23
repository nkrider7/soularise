"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Expand() {
  const [expanded, setExpanded] = useState("strategy");

  const sections = [
    {
      id: "strategy",
      title: "Strategy",
      content:
        "We're your strategic partner, deeply understanding your brand's essence with a dedicated product owner for each project, crafting personalized, data-informed strategies that put you ahead of the competition.",
    },
    {
      id: "creative",
      title: "Creative",
      content:
        "From wireframe to post-launch optimization, our designers are there every step of the way. We strive for a perfect balance between conversion and brand experience, all while prioritizing mobile-first design.",
    },
    {
      id: "technology",
      title: "Technology",
      content:
        "As Europe's leading Shopify Plus partner, we excel in scalable commerce solutions. Our expertise encompasses everything from custom themes using our Ask Phill starter, to advanced headless development and efficient no-code theme implementations.",
    },
  ];

  return (
    <div className="w-full p-6 bg-zinc-200">
      <div className="max-w-6xl mx-auto space-y-4">
        {sections.map((section) => {
          const isOpen = expanded === section.id;
          return (
            <motion.div
              key={section.id}
              layout
              transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
              onClick={() => setExpanded(section.id)}
              className={`cursor-pointer overflow-hidden rounded-xl shadow-[4px_4px_0px_#000] transition-colors duration-300 ${
                isOpen ? "bg-white text-black" : "bg-zinc-900 text-white"
              }`}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center p-6 md:p-8">
                <h2 className="font-feather text-3xl md:text-4xl">{section.title}</h2>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: '100%' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 md:px-8 md:pb-8"
                  >
                    <p className="font-inter font-semibold text-lg md:w-[80%]">
                      {section.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
