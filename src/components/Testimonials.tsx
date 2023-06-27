"use client";
import React from "react";
import { testimonials } from "@/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerChild, staggerContainer } from "@/utils/motionVariants";

const Testimonials = () => {
	return (
		<section className="py-12 px-2">
			<div className="max-w-5xl mx-auto bg-light rounded-[3rem] py-16 px-8">
				<h2 className="text-3xl md:text-4xl text-center mb-12">
					What The People Think about Us
				</h2>
				<motion.div
					initial="initial"
					whileInView="animate"
					variants={staggerContainer}
					className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{testimonials.map((testimonial) => (
						<motion.div
							key={testimonial.id}
							variants={staggerChild}
							className="rounded-2xl border border-gray-200 bg-white py-10 px-4">
							<div className="flex items-center space-x-3 mb-4">
								<Image
									src={testimonial.image}
									alt="Elysian"
									width={60}
									height={60}
									className="rounded-full cover"
								/>
								<div>
									<h5 className="text-lg">{testimonial.name}</h5>
									<p>{testimonial.location}</p>
								</div>
							</div>
							<p className="text-secondary text-sm">{testimonial.text}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Testimonials;
