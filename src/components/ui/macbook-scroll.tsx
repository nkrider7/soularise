// "use client";
// import React, { useEffect,  useRef, useState } from "react";
// import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Image from "next/image";

// export const MacbookScroll = ({
//   src,
//   showGradient,
//   title,
//   badge,
// }: {
//   src?: string;
//   showGradient?: boolean;
//   title?: string | React.ReactNode;
//   badge?: React.ReactNode;
// }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (window && window.innerWidth < 768) {
//       setIsMobile(true);
//     }
//   }, []);

//   const scaleX = useTransform(
//     scrollYProgress,
//     [0, 0.3],
//     [1.2, isMobile ? 1 : 1.5]
//   );
//   const scaleY = useTransform(
//     scrollYProgress,
//     [0, 0.3],
//     [0.6, isMobile ? 1 : 1.5]
//   );
//   const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
//   const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
//   const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
//   const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

//   return (
//     <div
//       ref={ref}
//       className="min-h-[100vh]  flex flex-col items-center py-0 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100  scale-[0.45] sm:scale-75"
//     >
      
//       {/* Lid */}
//       <Lid
//         src={src}
//         scaleX={scaleX}
//         scaleY={scaleY}
//         rotate={rotate}
//         translate={translate}
//       />
//       <h1 className="font-guzan text-6xl mt-[10rem]">Hello 🙋‍♂️,</h1>
//       <h1 className="font-guzan text-8xl mt-[4rem]">We Are</h1>
//       <h1 className="font-guzan text-8xl mt-[4rem]">Digital 🔥 Agency </h1>
//       <h1 className="font-guzan text-8xl mt-[4rem]">We Provide 💖</h1>
//       <h1 className="font-guzan text-8xl mt-[4rem]">Ads Performances</h1>
//       <h1 className="font-guzan text-8xl mt-[4rem]">Website Development</h1>
//       <h1 className="font-guzan text-8xl mt-[4rem]">App Development</h1>
      
//     </div>
//   );
// };

// export const Lid = ({
//   scaleX,
//   scaleY,
//   rotate,
//   translate,
//   src,
// }: {
//   scaleX: MotionValue<number>;
//   scaleY: MotionValue<number>;
//   rotate: MotionValue<number>;
//   translate: MotionValue<number>;
//   src?: string;
// }) => {
//   return (
//     <div className="relative [perspective:800px]">
//       <div
//         style={{
//           transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
//           transformOrigin: "bottom",
//           transformStyle: "preserve-3d",
//         }}
//         className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
//       >
//         <div
//           style={{
//             boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
//           }}
//           className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
//         >
//           <span className="text-white font-guzan text-2xl">
//             Coming Soon..
//           </span>
//         </div>
//       </div>
//       <motion.div
//         style={{
//           scaleX: scaleX,
//           scaleY: scaleY,
//           rotateX: rotate,
//           translateY: translate,
//           transformStyle: "preserve-3d",
//           transformOrigin: "top",
//         }}
//         className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
//       >
//         <div className="absolute inset-0 bg-[#272729] rounded-lg" />
//         <Image
//           src={src as string}
//           alt="LOG"
//           fill
//           className="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
//         />
//       </motion.div>
//     </div>
//   );
// };








// const AceternityLogo = () => {
//   return (
//     <svg
//       width="66"
//       height="65"
//       viewBox="0 0 66 65"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-3 w-3 text-white"
//     >
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="15"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// };
