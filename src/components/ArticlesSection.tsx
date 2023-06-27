"use client";
import React from "react";
import { articles } from "@/utils/data";
import { motion } from "framer-motion";
import { BiChevronRight } from "react-icons/bi";
import { staggerChild, staggerContainer } from "@/utils/motionVariants";

const ArticlesSection = () => {
	return (
		<section className="py-16 md:py-36">
			<div className="max-w-5xl mx-auto px-2">
				<h3 className="text-3xl md:text-4xl text-center mb-4">
					Articles & News
				</h3>
				<p className="text-center text-sm max-w-xl mx-auto text-secondary mb-16">
					Flash disporting not parting basked bliss a passed superstition
					whilome. As yet for steel at the. The but from not.
				</p>
				<motion.div
					initial="initial"
					whileInView="animate"
					variants={staggerContainer}
					className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{articles.map((article) => (
						<motion.div
							key={article.id}
							variants={staggerChild}
							className="border border-gray-200 bg-gray-50 hover:bg-light hover:scale-[1.01] transition-transform ease-in duration-150 rounded-2xl p-2">
							<div className="relative">
								<img
									src={article.image}
									alt="Elysian Article"
									className="rounded-t-2xl w-full h-[15rem] object-cover"
								/>
								<span className="inline-block absolute bottom-2 left-2 z-10 bg-light text-secondary text-sm rounded p-2">
									{article.tag}
								</span>
							</div>
							<div className="py-3">
								<h4 className="text-lg mb-4">{article.title}</h4>
								<div className="flex items-center justify-between">
									<p className="text-secondary text-sm">{article.date}</p>
									<button className="bg-light rounded-full p-2">
										<BiChevronRight className="text-primary" size={20} />
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default ArticlesSection;
