"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { heroChildVariant, heroVariant } from "@/utils/motionVariants";

const hiddenMask = `repeating-linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to top, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const HomeHero = () => {
	return (
		<motion.section
			initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
			animate={{ WebkitMaskImage: visibleMask, maskImage: visibleMask }}
			transition={{ duration: 1, delay: 0.5 }}
			className="relative min-h-[80vh] overflow-hidden rounded-bl-[8rem] pt-4 md:pt-8 pb-16 px-6 md:px-12">
			<img
				src="/hero_img.webp"
				alt="Elysian"
				className="absolute top-0 left-0 w-full h-full object-cover object-left"
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
				<div className="block md:hidden absolute top-0 left-0 w-full h-full bg-white/20 z-10" />
				<motion.div
					initial="initial"
					animate="animate"
					variants={heroVariant}
					className="relative z-10 flex flex-col space-y-3 pt-16 md:pt-[6rem]">
					<motion.h2
						variants={heroChildVariant}
						className="text-4xl md:text-6xl">
						Let Your Home Be Unique
					</motion.h2>
					<motion.p
						variants={heroChildVariant}
						className="text-primary md:text-secondary tracking-wide">
						There wheeled angels ease fancy smiling ebony radiant nothing
						faintly lining. That was chamber he the that.
					</motion.p>
					<motion.button
						variants={heroChildVariant}
						className="inline-flex group items-center space-x-2 bg-primary rounded-lg w-max md:w-fit py-3 px-6">
						<span className="text-white text-sm tracking-wider">
							Get Started
						</span>
						<BsArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
					</motion.button>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default HomeHero;
