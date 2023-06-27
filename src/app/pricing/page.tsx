import Loader from "@/components/Loader";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const PricingPage = () => {
	return (
		<div>
			<Loader />
			<header className="relative">
				<img
					src="/living_4.jpg"
					alt="Elysia Interior Decoration"
					className="w-full h-[18rem] object-cover"
				/>
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 bg-white rounded-t-xl w-full md:w-[20rem] py-8 px-5">
					<h2 className="text-3xl text-center mb-2">Pricing & Plans</h2>
					<p className="text-secondary text-sm text-center">
						Magna clita no et aliquyam stet ipsum. Est dolores ipsum.
					</p>
				</div>
			</header>
			<section className="py-12 px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto px-2">
					<div className="rounded-xl bg-light py-12">
						<div className="text-center px-2">
							<h4 className="text-lg text-center mb-6">Design Advice</h4>
							<div className="flex items-end justify-center space-x-1">
								<h5>$</h5>
								<h3 className="text-5xl">45</h3>
							</div>
							<h4 className="text-lg">/month</h4>
						</div>
						<span className="inline-block w-full h-[1px] bg-accent" />
						<div className="flex flex-col items-center space-y-4 py-4">
							<p className="text-center text-secondary">
								General living space advices
							</p>
							<p className="text-center text-secondary">Renovation advices</p>
							<p className="text-center text-secondary">
								Interior design advices
							</p>
							<p className="text-center text-secondary">
								Furniture reorganisation
							</p>
							<p className="text-center text-secondary">
								Up to 3 hours meeting
							</p>
							<button className="inline-flex group items-center space-x-2 bg-accent rounded-lg w-fit py-3 px-6">
								<span className="text-white text-sm tracking-wider">
									Get Started
								</span>
								<BsArrowRight className="text-primary group-hover:translate-x-1 transition-transform" />
							</button>
						</div>
					</div>
					<div className="rounded-xl bg-light py-12">
						<div className="text-center px-2">
							<h4 className="text-lg text-center mb-6">Complete Interior</h4>
							<div className="flex items-end justify-center space-x-1">
								<h5>$</h5>
								<h3 className="text-5xl text-accentDark">80</h3>
							</div>
							<h4 className="text-lg">/month</h4>
						</div>
						<div className="flex items-center justify-stretch">
							<span className="inline-block w-full h-[1px] bg-primary" />
							<span className="inline-block w-full text-white text-sm bg-primary rounded-3xl py-2 px-4">
								Most Popular
							</span>
							<span className="inline-block w-full h-[1px] bg-primary" />
						</div>
						<div className="flex flex-col items-center space-y-4 py-4">
							<p className="text-center text-secondary">
								Complete home redesign
							</p>
							<p className="text-center text-secondary">
								Modular interior planning
							</p>
							<p className="text-center text-secondary">Interior works</p>
							<p className="text-center text-secondary">Garage organisation</p>
							<p className="text-center text-secondary">Kitchen redesign</p>
							<button className="inline-flex group items-center space-x-2 bg-primary rounded-lg w-fit py-3 px-6">
								<span className="text-white text-sm tracking-wider">
									Get Started
								</span>
								<BsArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
							</button>
						</div>
					</div>
					<div className="rounded-xl bg-light py-12">
						<div className="text-center px-2">
							<h4 className="text-lg text-center mb-6">Furniture Design</h4>
							<div className="flex items-end justify-center space-x-1">
								<h5>$</h5>
								<h3 className="text-5xl">150</h3>
							</div>
							<h4 className="text-lg">/month</h4>
						</div>
						<span className="inline-block w-full h-[1px] bg-accent" />
						<div className="flex flex-col items-center space-y-4 py-4">
							<p className="text-center text-secondary">
								Furniture for living room
							</p>
							<p className="text-center text-secondary">
								Furniture refurbishment
							</p>
							<p className="text-center text-secondary">Sofas & armchairs</p>
							<p className="text-center text-secondary">Tables and chairs</p>
							<p className="text-center text-secondary">Kitchen</p>
							<button className="inline-flex group items-center space-x-2 bg-accent rounded-lg w-fit py-3 px-6">
								<span className="text-white text-sm tracking-wider">
									Get Started
								</span>
								<BsArrowRight className="text-primary group-hover:translate-x-1 transition-transform" />
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PricingPage;
