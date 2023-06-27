"use client";
import React from "react";
import { BsTelephone, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const CreateSection = () => {
	return (
		<section className="py-8">
			<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-5xl mx-auto px-2">
				<div>
					<motion.h2
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
						className="text-3xl md:text-5xl mb-12 w-4/5 leading-tight">
						We Create The Art Of Stylish Living Stylishly
					</motion.h2>
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
						className="text-secondary mb-16">
						Feud as and lineage other deem. Of these mothernot tear native made
						to upon. In if was scorching drop carnal did kiss, to some befell
						blast had hall had wrong.
					</motion.p>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
						className="flex items-center space-x-4 mb-8">
						<BsTelephone className="text-accent" size={26} />
						<div className="flex flex-col">
							<strong>08137563892</strong>
							<p className="text-secondary">Call Us Anytime</p>
						</div>
					</motion.div>
					<motion.button
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
						className="inline-flex group items-center space-x-2 bg-primary rounded-lg w-fit py-3 px-6">
						<span className="text-white text-sm tracking-wider">
							Get Free Estimate
						</span>
						<BsArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
					</motion.button>
				</div>
				<div className="rounded-bl-[8rem] rounded-tr-[8rem] overflow-hidden max-h-[36rem]">
					<motion.img
						initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
						whileInView={{
							clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
						}}
						transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
						viewport={{ once: true }}
						src="/int_1.jpg"
						alt="Elysian"
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default CreateSection;
