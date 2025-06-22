// "use client";

// import { motion } from "framer-motion";
// import { House, Newspaper } from "lucide-react";
// import Link from "next/link";
// import { Dispatch, SetStateAction, useState } from "react";

// const TOGGLE_CLASSES =
//   "text-sm font-semibold flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

// type ToggleOptionsType = "home" | "dark";

// const FloatBar = () => {
//   const [selected, setSelected] = useState<ToggleOptionsType>("light");
//   const [hovered, setHovered] = useState<ToggleOptionsType | null>(null);

//   return (
//     <div className="bottom-10 fixed z-50 bg-slate-100 rounded-full p-1 shadow-lg">
//       <SliderToggle
//         selected={selected}
//         setSelected={setSelected}
//         setHovered={setHovered}
//         hovered={hovered}
//       />
//     </div>
//   );
// };

// const SliderToggle = ({
//   selected,
//   setSelected,
//   setHovered,
//   hovered
// }: {
//   selected: ToggleOptionsType;
//   setSelected: Dispatch<SetStateAction<ToggleOptionsType>>;
//   setHovered: Dispatch<SetStateAction<ToggleOptionsType | null>>;
// }) => {
//   return (
//     <div className="relative flex w-fit items-center rounded-full  gap-x-2 bg-gray-200 dark:bg-gray-700 shadow-md">
//       {/* House Button (Default) */}
//       <Link
//         href="/"
//         className={`${TOGGLE_CLASSES} `}
//         onMouseEnter={() => setHovered("light")}
//         onMouseLeave={() => setHovered(null)}
//         onClick={() => setSelected("light")}
//       >
//         <span className="relative z-10">
//           <House size={18} />
//         </span>
//       </Link>

//       {/* Newspaper Button */}
//       <Link
//         href={'/blogs'}
//         className={`${TOGGLE_CLASSES} `}
//         onMouseEnter={() => setHovered("dark")}
//         onMouseLeave={() => setHovered(null)}
//         onClick={() => setSelected("dark")}
//       >
//         <span className="relative z-10">
//           <Newspaper size={18} />
//         </span>
//       </Link>

//       {/* Background Slider Effect */}
//       <div
//         className={`absolute inset-0 z-0 flex ${(hovered ?? selected) === "dark" ? "justify-end" : "justify-start"
//           }`}
//       >
//         <motion.span
//           layout
//           transition={{ type: "spring", damping: 15, stiffness: 250 }}
//           whileHover={{ scale: 1.05 }} // Background slightly grows on hover
//           whileTap={{ scale: 0.9 }} // Click effect
//           className="h-full w-1/2 rounded-full bg-yellow-400 shadow-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default FloatBar;
