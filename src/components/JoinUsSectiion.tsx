"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

export const JoinUsSectiion = () => {
	return (
		<section className="py-16 px-4">
			<motion.div
				initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
				whileInView={{
					clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
				}}
				viewport={{ once: true }}
				transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
				className="max-w-4xl mx-auto bg-primary text-light rounded-3xl py-24 px-8">
				<div className="flex flex-col items-center">
					<h3 className="text-3xl md:text-4xl mb-4">Wanna Join Us?</h3>
					<p className="w-3/4 text-sm md:text-base text-center mb-6">
						Lorem amet kasd labore labore dolore et et. No at ipsum et dolore
						erat sed sadipscing.
					</p>
					<button className="inline-flex group items-center space-x-2 bg-accent rounded-lg w-fit py-3 px-6">
						<span className="text-white text-sm tracking-wider">
							Contact Us
						</span>
						<BsArrowRight className="text-primary group-hover:translate-x-1 transition-transform" />
					</button>
				</div>
			</motion.div>
		</section>
	);
};
