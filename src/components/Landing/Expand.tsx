"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Expand() {
  const [expanded, setExpanded] = useState("strategy");

  // Data for sections
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
	<div className="w-full p-10 bg-zinc-200"> 
    <div style={{ maxWidth: "1200px", margin: "auto" }} >
      {sections.map((section) => (
        <motion.div
          key={section.id}
          initial={{ height: "60px" }}
          animate={{
            height: expanded === section.id ? "auto" : "60px",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            overflow: "hidden",
            background: expanded === section.id ? "white" : "#111",
            color: expanded === section.id ? "black" : "white",
            borderRadius: "8px",
            marginBottom: "10px",
            padding: expanded === section.id ? "20px" : "60px",
            cursor: "pointer",
          }}
          onClick={() => setExpanded(section.id)}
		  className="flex flex-col md:flex-row justify-between items-center "
        >
          <h2 className="font-guzan text-4xl  " style={{ margin: 0 }}>{section.title}</h2>
          {expanded === section.id && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ marginTop: "10px" }}
			  className="md:w-[50%] font-inter font-semibold text-lg"
            >
              {section.content}
            </motion.p>
          )}
        </motion.div>
      ))}
    </div>
	</div>
  );
}
