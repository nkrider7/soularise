import React from 'react'
import { Lightbulb } from 'lucide-react';
// import Astro from '../svg/Astro';
import Image from 'next/image';
import Link from 'next/link';

import Silk from './SlikBg';


export default function Hero() {
	console.log("hero from server")

	return (
		<div
			style={{
				// background: "url('/space.webp')",
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundAttachment: 'scroll'
			}}
			className='h-[80vh] bg-[#0C0924]  flex flex-col bg-no-repeat bg-contain  justify-between items-center'>


			<div className='w-full flex justify-evenly'>
				<div></div>
				<div className='mt-10 flex z-30'>
					<Link href={'/blogs'} className='text-xs p-2 px-3 font-semibold font-inter   bg-myblack text-white flex  gap-x-2 hover:text-accentColor items-center rounded-full '> Blogs</Link>
					<button className='text-xs p-2 px-3 font-semibold font-inter border-2 border-accentColor  bg-myblack text-accentColor flex  gap-x-2 items-center rounded-full '>  Get in Touch <Lightbulb size={18} /></button>
				</div>
			</div>


			{/* <AnimatedContent
				distance={150}
				direction="horizontal"
				reverse={false}
				duration={2000}
				ease="bounce.out"
				initialOpacity={0.2}
				animateOpacity
				scale={1.1}
				threshold={0.2}
				delay={0.3}
			> */}
				<div className='z-30'>
					
					{/* <h1 style={{
						WebkitTextStroke: "6px white",
						WebkitTextStrokeWidth: "1px",
						
					}} className=' hidden  text-6xl mt-2  leading-none md:text-9xl font-feather md:flex   items-center text-accent'>S
						<Image src='https://media.tenor.com/7hmeeTqdS0IAAAAM/purple-fire.gif' className='mr-1 object-cover object-bottom' width={180} height={180} alt='infi' />
						UL </h1>
						<h1 style={{
						WebkitTextStroke: "6px white",
						WebkitTextStrokeWidth: "1px",
						lineHeight: "0.7",
						letterSpacing: "-4px",
						
					}} className=' hidden  text-6xl leading-none md:text-9xl font-feather md:flex   items-center text-accent'>ARISE</h1> */}
					<Image src='/lv3.png' className=' flex mx-auto h-96 w-96' width={500} height={500} alt='logo' />
					{/* <h1 className='text-white text-center font-guzan text-2xl md:text-4xl'>We Are Digital Agency</h1> */}
				</div>
			{/* </AnimatedContent> */}
			{/* <Astro /> */}

			<div>
				
			</div>
			<div className='absolute w-full h-[80vh] z-0'>
				{/* <Silk
					speed={5}
					scale={1}
					color="#ffffff"
					noiseIntensity={1.5}
					rotation={0}
				/> */}
			</div>
		</div>
	)
}

