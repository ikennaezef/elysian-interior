"use client";
import React from "react";
import { JoinUsSectiion } from "@/components/JoinUsSectiion";
import Loader from "@/components/Loader";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { staggerChild, staggerContainer } from "@/utils/motionVariants";

const services = [
	{
		id: 1,
		title: "Project Planning",
	},
	{
		id: 2,
		title: "Design Work",
	},
	{
		id: 3,
		title: "Decoration Work",
	},
	{
		id: 4,
		title: "Interior Design",
	},
	{
		id: 5,
		title: "2D/3D Art Work",
	},
	{
		id: 6,
		title: "Retail Design",
	},
];

const ServicesPage = () => {
	return (
		<div>
			<Loader />
			<header className="relative">
				<img
					src="/kitchen_3.jpg"
					alt="Elysia Interior Decoration"
					className="w-full h-[18rem] object-cover"
				/>
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 bg-white rounded-t-xl w-[20rem] py-8 px-5">
					<h2 className="text-3xl text-center mb-2">Our Services</h2>
					<p className="text-secondary text-sm text-center">
						Magna clita no et aliquyam stet ipsum. Est dolores ipsum.
					</p>
				</div>
			</header>
			<section className="py-16">
				<motion.div
					initial="initial"
					whileInView="animate"
					variants={staggerContainer}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-2">
					{services.map((service) => (
						<motion.div
							variants={staggerChild}
							key={service.id}
							className="flex flex-col items-center group rounded-lg border border-gray-200 hover:bg-light py-6 p-3">
							<h4 className="text-lg text-center mb-4">{service.title}</h4>
							<p className="text-secondary text-center mb-6">
								Kasd duo et clita ea et erat eirmod sit. Lorem ea ipsum
								gubergren kasd eirmod et, justo elitr dolor dolores ut. Et et
								duo at et takimata, amet sed ea.
							</p>
							<button className="inline-flex items-center space-x-3">
								<span className="text-gray-600">Read More</span>
								<BsArrowRight className="text-accentDark group-hover:translate-x-2 transition-transform" />
							</button>
						</motion.div>
					))}
				</motion.div>
			</section>
			<section className="py-8 px-2">
				<div className="bg-light rounded-3xl max-w-5xl mx-auto py-12 px-2">
					<h2 className="text-3xl md:text-4xl text-center mb-2">How We Work</h2>
					<p className="text-secondary text-sm text-center w-full md:w-1/2 mx-auto">
						Est dolore dolor sea aliquyam lorem, amet consetetur kasd et et
						dolore, amet sit nonumy kasd at dolores. Labore aliquyam justo.
					</p>
					<div className="mt-16">
						<div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 px-2 md:px-12 mb-12">
							<div className="overflow-hidden rounded-tr-[4rem] rounded-bl-[9rem] max-w-[20rem] mx-auto h-[20rem]">
								<img
									src="/details.jpg"
									alt="Elysian"
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<div className="flex items-center justify-between mb-8">
									<img
										src="/icon_1.svg"
										alt="Elysia icon"
										className="w-[50px] object-cover"
									/>
									<h3 className="text-white text-6xl md:text-8xl">01</h3>
								</div>
								<h4 className="text-2xl mb-2">Concept & Details</h4>
								<p className="text-secondary">
									Ipsum at amet gubergren labore sit rebum takimata dolore diam
									et, dolor stet labore justo eirmod lorem amet et amet.
								</p>
							</div>
						</div>
						<div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-8 px-2 md:px-12 mb-12">
							<div>
								<div className="flex items-center justify-between mb-8">
									<img
										src="/icon_2.svg"
										alt="Elysia icon"
										className="w-[50px] object-cover"
									/>
									<h3 className="text-white text-6xl md:text-8xl">02</h3>
								</div>
								<h4 className="text-2xl mb-2">Idea For Work</h4>
								<p className="text-secondary">
									Ipsum at amet gubergren labore sit rebum takimata dolore diam
									et, dolor stet labore justo eirmod lorem amet et amet.
								</p>
							</div>
							<div className="overflow-hidden rounded-tr-[4rem] rounded-bl-[9rem] max-w-[20rem] mx-auto h-[20rem]">
								<img
									src="/team.jpg"
									alt="Elysian"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
						<div className="flex flex-col md:grid md:grid-cols-2 items-center gap-8 px-2 md:px-12 mb-12">
							<div className="overflow-hidden rounded-tr-[4rem] rounded-bl-[9rem] max-w-[20rem] mx-auto h-[20rem]">
								<img
									src="/kitchen_2.jpg"
									alt="Elysian"
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<div className="flex items-center justify-between mb-8">
									<img
										src="/icon_3.svg"
										alt="Elysia icon"
										className="w-[50px] object-cover"
									/>
									<h3 className="text-white text-6xl md:text-8xl">03</h3>
								</div>
								<h4 className="text-2xl mb-2">Design</h4>
								<p className="text-secondary">
									Ipsum at amet gubergren labore sit rebum takimata dolore diam
									et, dolor stet labore justo eirmod lorem amet et amet.
								</p>
							</div>
						</div>
						<div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-8 px-2 md:px-12 mb-12">
							<div>
								<div className="flex items-center justify-between mb-8">
									<img
										src="/icon_4.svg"
										alt="Elysia icon"
										className="w-[50px] object-cover"
									/>
									<h3 className="text-white text-6xl md:text-8xl">04</h3>
								</div>
								<h4 className="text-2xl mb-2">Perfection</h4>
								<p className="text-secondary">
									Ipsum at amet gubergren labore sit rebum takimata dolore diam
									et, dolor stet labore justo eirmod lorem amet et amet.
								</p>
							</div>
							<div className="overflow-hidden rounded-tr-[4rem] rounded-bl-[9rem] max-w-[20rem] mx-auto h-[20rem]">
								<img
									src="/living.jpg"
									alt="Elysian"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<JoinUsSectiion />
		</div>
	);
};

export default ServicesPage;
