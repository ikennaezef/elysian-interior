"use client";
import React from "react";
import { motion } from "framer-motion";
import { BiChevronRight } from "react-icons/bi";
import { staggerChild, staggerContainer } from "@/utils/motionVariants";

const ProjectsSection = () => {
	return (
		<section className="py-8">
			<div className="max-w-5xl mx-auto px-2">
				<motion.h3
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
					className="text-3xl md:text-4xl text-center mb-4">
					Follow Our Projects
				</motion.h3>
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
					className="text-center text-sm max-w-xl mx-auto text-secondary mb-16">
					Et dolor sit eirmod duo ipsum no voluptua. Clita sit diam tempor
					nonumy tempor duo, magna at takimata labore kasd duo diam sit dolor
					erat.
				</motion.p>
				<motion.div
					initial="initial"
					whileInView="animate"
					variants={staggerContainer}
					className="grid grid-cols-1 md:grid-cols-2 gap-16">
					<motion.div variants={staggerChild}>
						<div className="rounded-tr-[3rem] max-h-[30rem] overflow-hidden">
							<img
								src="/kitchen.jpg"
								alt="Elysia Project"
								className="object-cover h-[18rem] md:h-full w-full"
							/>
						</div>
						<div className="flex items-center justify-between py-4 pr-3">
							<div>
								<h5 className="text-xl mb-1">Kitchen Redesign</h5>
								<p className="text-secondary">Decor/Architecture</p>
							</div>
							<button className="bg-light rounded-full p-2">
								<BiChevronRight className="text-primary" size={20} />
							</button>
						</div>
					</motion.div>
					<motion.div variants={staggerChild}>
						<div className="rounded-tl-[3rem] max-h-[30rem] overflow-hidden">
							<img
								src="/sitting.jpg"
								alt="Elysia Project"
								className="object-cover h-[18rem] md:h-full w-full"
							/>
						</div>
						<div className="flex items-center justify-between py-4 pr-3">
							<div>
								<h5 className="text-xl mb-1">Classic Sitting Room</h5>
								<p className="text-secondary">Decor/Architecture</p>
							</div>
							<button className="bg-light rounded-full p-2">
								<BiChevronRight className="text-primary" size={20} />
							</button>
						</div>
					</motion.div>
					<motion.div variants={staggerChild}>
						<div className="rounded-br-[3rem] max-h-[30rem] overflow-hidden">
							<img
								src="/living.jpg"
								alt="Elysia Project"
								className="object-cover h-[18rem] md:h-full w-full"
							/>
						</div>
						<div className="flex items-center justify-between py-4 pr-3">
							<div>
								<h5 className="text-xl mb-1">Living Room Decor</h5>
								<p className="text-secondary">Decor/Architecture</p>
							</div>
							<button className="bg-light rounded-full p-2">
								<BiChevronRight className="text-primary" size={20} />
							</button>
						</div>
					</motion.div>
					<motion.div variants={staggerChild}>
						<div className="rounded-bl-[3rem] max-h-[30rem] overflow-hidden">
							<img
								src="/room.jpg"
								alt="Elysia Project"
								className="object-cover h-[18rem] md:h-full w-full"
							/>
						</div>
						<div className="flex items-center justify-between py-4 pr-3">
							<div>
								<h5 className="text-xl mb-1">Simple Bedroom</h5>
								<p className="text-secondary">Decor/Architecture</p>
							</div>
							<button className="bg-light rounded-full p-2">
								<BiChevronRight className="text-primary" size={20} />
							</button>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectsSection;
