'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import gojo from '@/assets/Image/gojo.png'
import jinwoo from '@/assets/Image/jinwoos.png'
import girl from "@/assets/Image/girl.png"
import girlshild from "@/assets/Image/girlsheld.png"
import Magicien from "@/assets/Image/magice.png"
import HUnter from "@/assets/Image/magicien.png"
import { Link, Element } from 'react-scroll';


import { CheckCircle2, Flame } from 'lucide-react'

export default function HeroNeu() {

	const [email, setEmail] = useState('')
	const [submitted, setSubmitted] = useState(false)
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
	const [message, setMessage] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!email || !email.includes('@')) {
			setMessage('Please enter a valid email address.');
			setStatus('error');
			return;
		}

		setStatus('loading');
		setMessage('');

		try {
			const response = await fetch('/api/waitlist', {
				method: 'POST',
				body: JSON.stringify({ email }),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await response.json();

			if (response.ok) {
				setStatus('success');
				setMessage('✅ You’re on the waitlist! Check your inbox.');
				setSubmitted(true)
				setEmail('');
			} else {
				setStatus('error');
				setMessage(data.message || 'Something went wrong.');
			}
		} catch {
			setStatus('error');
			setMessage('Failed to connect. Try again later.');
		}
	};




	return (
		<>
			<section className="h-screen bg-[#f4f4f4] flex items-center justify-center relative px-6">
				<div className=" md:block  absolute left-10 top-32 md:top-1/2 transform -translate-y-1/2">
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }} className=" hover:bg-gradient-to-r hover:bg-myPink border-[5px] border-black shadow-[8px_8px_0px_#000] rounded-md">
						<Image src={gojo} alt="Gojo" width={150} height={150} className='md:w-40 w-28' />
					</motion.div>
				</div>
				<div className="   absolute md:left-[12rem] left-[15rem] md:top-[6rem]   top-20  -translate-y-1/2">


					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }} className=" bg-[#f4f4f4] border-[5px] border-black shadow-[8px_8px_0px_#000]  rounded-md">
						<Image src={girlshild} alt="Gojo" width={1000} height={1000} className='md:w-40 w-32 ' />
					</motion.div>

				</div>

				<div className="text-center z-40 scale-75 md:scale-100 max-w-2xl">
					<motion.h1
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="text-[10rem] leading-none font-feather  flex items-center justify-center text-black"
						style={{ WebkitTextStroke: '12px black' }}
					>
						S<div className="h-full w-28 p-2 bg-black rounded-full flex items-center justify-center">
							<motion.span
								animate={{
									y: [0, -12, 0], // bounce
									scale: [1, 1.1, 1],
								}}
								transition={{
									repeat: Infinity,
									duration: 1.2,
									ease: 'easeInOut',
								}}
								className="inline-block"
							>
								<Flame
									size={100}
									fill="#FF006E"
									color="#FF006E"
									style={{
										transform: 'scaleX(-1)',
									}}
								/>
							</motion.span>
						</div>UL
					</motion.h1>
					<motion.h1
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="text-[10rem] leading-tight font-feather border-b-8 border-black border-dashed  relative -top-10 flex items-center justify-center text-black"
						style={{ WebkitTextStroke: '12px black' }}
					>
						ARISE
					</motion.h1>

					<Link to="section1" smooth={true} duration={500}>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => console.log("Click")}
							className="mt-6 px-6 py-3 z-50 bg-[#FF006E] text-white font-Bold text-2xl rounded-full border-2 border-black shadow-[4px_4px_0px_#000]"
						>
							Start Your Journey
						</motion.button>
					</Link>






				</div>

				<div className=" absolute right-4 md:top-1/2 -bottom-10 transform -translate-y-1/2">
					<motion.div
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						className="hover:bg-gradient-to-r hover:transition-all from-blue-600 to-blue-800  border-4 border-black shadow-[6px_6px_0px_#000] hover:scale-105 transition-all"
					>
						<Image src={jinwoo} alt="Jinwoo" width={150} height={150} />
					</motion.div>
				</div>
				<div className=" absolute z-10 right-64 md:top-90 bottom-[-2rem] transform -translate-y-1/2">
					<motion.div
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						className="bg-white  border-4 border-black shadow-[6px_6px_0px_#000] hover:scale-105 transition-all"
					>
						<Image src={girl} alt="Jinwoo" width={1000} height={1000} className='md:w-40 w-28' />
					</motion.div>
				</div>
			</section>
			<Element name="section1">
				<section className="h-screen bg-[#f4f4f4] flex items-center flex-col justify-center relative px-6">
					<AnimatePresence>
						{submitted && (
							<motion.div
								initial={{ scale: 0, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0, opacity: 0 }}
								className="mt-8 flex justify-center items-center font-Bold   gap-2 text-green-600 font-bold text-xl"
							>
								<CheckCircle2 className="w-8 h-8 text-green-700" />
								<span>You are on the list! 🚀</span>
							</motion.div>
						)}
					</AnimatePresence>
					<motion.h1
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="text-[3rem] md:text-[6rem] leading-tight font-feather   relative  flex items-center justify-center text-black"
						style={{ WebkitTextStroke: '2px black' }}
					>
						waitlist
					</motion.h1>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="mt-4 flex flex-col items-center justify-center gap-4 w-full"
					>
						<form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full">
							<input
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								aria-label="Email Address"
								disabled={status === 'loading'}
								className="px-4 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] bg-white text-black placeholder:font-Bold font-Bold text-2xl font-semibold w-[90%] max-w-[350px]"
							/>

							<motion.button
								type="submit"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								disabled={status === 'loading'}
								className={`px-5 py-3 bg-[#3A0CA3] text-white font-Bold text-2xl rounded-full border-2 border-black shadow-[4px_4px_0px_#000] font-bold ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
									}`}
							>
								{status === 'loading' ? 'Submitting...' : 'Submit'}
							</motion.button>

							{message && (
								<p
									className={`text-lg font-semibold ${status === 'error' ? 'text-red-600' : 'text-green-600'
										}`}
								>
									{message}
								</p>
							)}
						</form>
					</motion.div>



					<Image src={Magicien} alt="Magicien" width={1000} height={1000} className='w-40 md:w-80 md:top-[11%] bottom-[2rem] absolute  z-0 md:left-[8rem] ' />
					<Image src={HUnter} style={{
						transform: 'scaleX(-1)',
					}} alt="Magicien" width={1000} height={1000} className='w-40 hidden md:block md:w-96 md:top-[-7%] bottom-[4rem] absolute  z-0 md:right-[5rem] ' />
					{/* Animation on Submit */}
				</section>
			</Element>
		</>
	)
}
