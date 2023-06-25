"use client";
import { motion } from "framer-motion";
import React from "react";

const containerVariant = {
	initial: {
		x: "100%",
		width: "100%",
		originX: 1,
		transition: { duration: 0.2, ease: "easeInOut" },
		delayChildren: 0.2,
	},
	animate: {
		x: "0%",
		width: "0%",
		originX: 0,
		transition: {
			delay: 1.8,
			duration: 0.5,
			ease: "easeInOut",
		},
	},
	exit: {
		x: ["0%", "100%"],
		width: ["0%", "100%"],
		transition: {
			duration: 0.8,
			delay: 0.5,
			ease: "easeInOut",
		},
	},
};

const textVariant = {
	initial: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
	animate: {
		opacity: [1, 0, 1, 0, 0],
		transition: {
			duration: 1.8,
			ease: "circOut",
			times: [0, 0.2, 0.4, 0.6, 0.8],
		},
	},
	exit: {
		opacity: 0,
		y: 20,
	},
};

const Loader = () => {
	return (
		<motion.div
			className="flex items-center justify-center fixed top-0 bottom-0 right-full w-full h-screen z-50 bg-accentDark"
			variants={containerVariant}
			initial="initial"
			animate="animate"
			exit="exit">
			<motion.h1
				className="text-4xl text-white tracking-wide"
				variants={textVariant}>
				Elysian
			</motion.h1>
		</motion.div>
	);
};

export default Loader;
