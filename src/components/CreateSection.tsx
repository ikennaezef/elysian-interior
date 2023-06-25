import React from "react";
import { BsTelephone, BsArrowRight } from "react-icons/bs";

const CreateSection = () => {
	return (
		<section className="py-8">
			<div className="grid grid-cols-2 items-center gap-8 max-w-5xl mx-auto px-2">
				<div>
					<h2 className="text-5xl mb-12 w-4/5 leading-tight">
						We Create The Art Of Stylish Living Stylishly
					</h2>
					<p className="text-secondary mb-16">
						Feud as and lineage other deem. Of these mothernot tear native made
						to upon. In if was scorching drop carnal did kiss, to some befell
						blast had hall had wrong.
					</p>
					<div className="flex items-center space-x-4 mb-8">
						<BsTelephone className="text-accent" size={26} />
						<div className="flex flex-col">
							<strong>08137563892</strong>
							<p className="text-secondary">Call Us Anytime</p>
						</div>
					</div>
					<button className="inline-flex group items-center space-x-2 bg-primary rounded-lg w-fit py-3 px-6">
						<span className="text-white text-sm tracking-wider">
							Get Free Estimate
						</span>
						<BsArrowRight className="text-accent group-hover:translate-x-1 transition-transform" />
					</button>
				</div>
				<div className="rounded-bl-[8rem] rounded-tr-[8rem] overflow-hidden max-h-[36rem]">
					<img src="/int_1.jpg" alt="Elysian" className="object-cover" />
				</div>
			</div>
		</section>
	);
};

export default CreateSection;
