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
			className='h-[80vh] bg-black  flex flex-col bg-no-repeat bg-contain  justify-between items-center'>


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
					
					<h1 className=' hidden  text-6xl mt-2 md:text-9xl font-guzan md:flex  items-center text-accent'>Br
						<Image src='/infinity.png' className='mr-1' width={180} height={180} alt='infi' />
						Code</h1>
					<Image src='/logo.svg' className='md:hidden flex mx-auto' width={290} height={290} alt='logo' />
					<h1 className='text-white text-center font-guzan text-2xl md:text-4xl'>We Are Digital Agency</h1>
				</div>
			{/* </AnimatedContent> */}
			{/* <Astro /> */}

			<div>
				
			</div>
			<div className='absolute w-full h-[80vh] z-0'>
				<Silk
					speed={5}
					scale={1}
					color="#121212"
					noiseIntensity={1.5}
					rotation={0}
				/>
			</div>
		</div>
	)
}

