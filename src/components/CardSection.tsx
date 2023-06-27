"use client";
import React from "react";
import { cardsData } from "@/utils/data";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { staggerChild, staggerContainer } from "@/utils/motionVariants";

const CardSection = () => {
	return (
		<section className="py-16">
			<motion.div
				initial="initial"
				animate="animate"
				variants={staggerContainer}
				className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
				{cardsData.map((item) => (
					<motion.div
						variants={staggerChild}
						key={item.id}
						className="border border-gray-200 rounded flex flex-col items-center py-5 p-3">
						<h3 className="text-2xl">{item.title}</h3>
						<p className="text-center text-secondary mb-12 mt-3">
							{item.content}
						</p>
						<button className="inline-flex items-center space-x-3">
							<span className="text-gray-600">Read More</span>
							<BsArrowRight className="text-accent" />
						</button>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default CardSection;
