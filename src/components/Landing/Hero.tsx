// "use client"
// import { motion, useMotionValue, useTransform } from 'framer-motion';
// import React from 'react'
// import { Lightbulb } from 'lucide-react';
// // import Astro from '../svg/Astro';
// import Image from 'next/image';
// import Link from 'next/link';

// import Silk from './SlikBg';
// import { WaitlistSignup } from '../WaitlistSignup';


// export default function Hero() {
// 	console.log("hero from server")

// 	return (
// 		<div
// 			style={{
// 				// background: "url('/space.webp')",
// 				backgroundPosition: "center",
// 				backgroundSize: "cover",
// 				backgroundRepeat: "no-repeat",
// 				backgroundAttachment: 'scroll'
// 			}}
// 			className='h-[80vh] bg-[#0C0924]  flex flex-col bg-no-repeat bg-contain  justify-between items-center'>


// 			<div className='w-full flex justify-end max-w-5xl pr-4'>
				
// 				<div className='mt-10 flex z-30'>
					
// 					<button className='text-xs p-2 px-3  border-2 border-accentColor  bg- text-accentColor flex  gap-x-2 items-center rounded-full '>  <span className='font-feather '>App Coming Soon! </span><Lightbulb size={18} strokeWidth={3} /></button>
// 				</div>
// 			</div>


			
// 				<div className='z-30'>
					
// 					{/* <h1 style={{
// 						WebkitTextStroke: "6px white",
// 						WebkitTextStrokeWidth: "1px",
						
// 					}} className=' hidden  text-6xl mt-2  leading-none md:text-9xl font-feather md:flex   items-center text-accent'>S
// 						<Image src='https://media.tenor.com/7hmeeTqdS0IAAAAM/purple-fire.gif' className='mr-1 object-cover object-bottom' width={180} height={180} alt='infi' />
// 						UL </h1>
// 						<h1 style={{
// 						WebkitTextStroke: "6px white",
// 						WebkitTextStrokeWidth: "1px",
// 						lineHeight: "0.7",
// 						letterSpacing: "-4px",
						
// 					}} className=' hidden  text-6xl leading-none md:text-9xl font-feather md:flex   items-center text-accent'>ARISE</h1> */}
// 					{/* <Image src='/logo.png' className=' flex mx-auto h-96 w-96' width={1200} height={1200} alt='logo' /> */}

// 					<TiltImage />
// 					{/* <h1 className='text-white text-center font-guzan text-2xl md:text-4xl'>We Are Digital Agency</h1> */}

// 					 <WaitlistSignup />

// 				</div>
// 			{/* </AnimatedContent> */}
// 			{/* <Astro /> */}

// 			<div>
				
// 			</div>
// 			<div className='absolute w-full h-[80vh] z-0'>
// 				<Silk
// 					speed={5}
// 					scale={1}
// 					color="#0C0924"
// 					noiseIntensity={1.5}
// 					rotation={0}
// 				/>
// 			</div>
// 		</div>
// 	)
// }






// const TiltImage = () => {
//   const rotateX = useMotionValue(0);
//   const rotateY = useMotionValue(0);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - left;
//     const y = e.clientY - top;

//     const rotateMax = 15;

//     const yRotation = ((x / width) - 0.5) * 2 * rotateMax;
//     const xRotation = ((y / height) - 0.5) * -2 * rotateMax;

//     rotateX.set(xRotation);
//     rotateY.set(yRotation);
//   };

//   const handleMouseLeave = () => {
//     rotateX.set(0);
//     rotateY.set(0);
//   };

//   return (
//     <motion.div
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         rotateX,
//         rotateY,
//         perspective: 1000,
//       }}
//       className="w-96 h-96 mx-auto flex items-center justify-center"
//     >
//       <Image
//         src="/logo.png"
//         alt="logo"
//         width={1200}
//         height={1200}
//         className="w-full h-full object-contain"
//       />
//     </motion.div>
//   );
// };




