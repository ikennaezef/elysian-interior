import React from "react";
import { BsArrowRight } from "react-icons/bs";

const data = [
	{
		id: 1,
		title: "Project Plan",
		content:
			"Ever and strange objects passed sister heralds crime his to to, some in made one seraphs, pile youth that now so he not. He holy the run parting apart to.",
	},
	{
		id: 2,
		title: "Interior Work",
		content:
			"Of and through drowsy holy childe. Times passion that what woe mother to but heralds with, things had deemed had his, pile by shrine before a another flatterers formed.",
	},
	{
		id: 3,
		title: "Realization",
		content:
			"Pilgrimage ere to so pillared seemed grief nor would, but time had lay it not, oh high fall would lyres domestic mood, knew in would hope venerable. Are my her.",
	},
];

const CardSection = () => {
	return (
		<section className="py-16">
			<div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
				{data.map((item) => (
					<div
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
					</div>
				))}
			</div>
		</section>
	);
};

export default CardSection;
