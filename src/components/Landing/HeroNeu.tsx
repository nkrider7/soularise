'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import gojo from '@/assets/Image/gojo.png'
import jinwoo from '@/assets/Image/jinwoos.png'
import girl from "@/assets/Image/girl.png"
import girlshild from "@/assets/Image/girlsheld.png"


import { Flame } from 'lucide-react'

export default function HeroNeu() {
	return (
		<section className="h-screen bg-[#f4f4f4] flex items-center justify-center relative px-6">
			<div className=" md:block  absolute left-10 top-20 md:top-1/2 transform -translate-y-1/2">


				<motion.div
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }} className=" bg-[#f4f4f4] border-[5px] border-black shadow-[8px_8px_0px_#000] rounded-md">
					<Image src={gojo} alt="Gojo" width={150} height={150} />
				</motion.div>

			</div>

			<div className=" md:block  absolute left-80 top-28 md:top-20 transform -translate-y-1/2">


				<motion.div
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }} className=" bg-[#f4f4f4] border-[5px] border-black shadow-[8px_8px_0px_#000]  rounded-md">
					<Image src={girlshild} alt="Gojo" width={1000} height={1000} className='w-40 ' />
				</motion.div>

			</div>

			<div className="text-center scale-75 md:scale-100 max-w-2xl">
				<motion.h1
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="text-[10rem] leading-none font-feather  flex items-center justify-center text-black"
					style={{ WebkitTextStroke: '12px black' }}
				>
					S<motion.span
						animate={{
							y: [0, -15, 0], // bounce up and down
							scale: [1, 1.1, 1],
						}}
						transition={{
							repeat: Infinity,
							duration: 1.2,
							ease: 'easeInOut',
						}}
					>
						<Flame
							size={130}
							fill="#FF006E"
							color="#FF006E"
							style={{
								transform: 'scaleX(-1)',
								filter: 'drop-shadow(-2px 6px 0px black)',
							}}
						/>
					</motion.span>UL
				</motion.h1>
				<motion.h1
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="text-[10rem] leading-tight font-feather  relative -top-10 flex items-center justify-center text-black"
					style={{ WebkitTextStroke: '12px black' }}
				>
					ARISE
				</motion.h1>

				{/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-lg font-medium text-[#333] bg-white p-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000]"
        >
          Awaken your potential with <span className="font-bold text-[#3A0CA3]">Soul Arise</span> – a self-growth app inspired by anime and powered by science. Build powerful habits, track your journey, and level up your life, one quest at a time.
        </motion.p> */}

				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					className="mt-8 px-6 py-3 bg-[#FF006E] text-white font-bold rounded-full border-2 border-black shadow-[4px_4px_0px_#000]"
				>
					Start Your Journey
				</motion.button>
			</div>

			<div className=" absolute right-4 md:top-1/2 bottom-4 transform -translate-y-1/2">
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="bg-white  border-4 border-black shadow-[6px_6px_0px_#000] hover:scale-105 transition-all"
				>
					<Image src={jinwoo} alt="Jinwoo" width={150} height={150} />
				</motion.div>
			</div>
			<div className=" absolute right-40 md:top-90 bottom-20 transform -translate-y-1/2">
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="bg-white  border-4 border-black shadow-[6px_6px_0px_#000] hover:scale-105 transition-all"
				>
					<Image src={girl} alt="Jinwoo" width={1000} height={1000} className='h-40 w-40' />
				</motion.div>
			</div>
		</section>
	)
}
