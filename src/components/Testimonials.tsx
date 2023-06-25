import Image from "next/image";
import React from "react";

const testimonials = [
	{
		id: 1,
		image: "/person_1.png",
		name: "Amelia James",
		location: "California, USA",
		text: "For in to to but she. Now birth so are this vile. For things to that and agen the baseless flaunting.",
	},
	{
		id: 2,
		image: "/person_2.png",
		name: "Rick James",
		location: "California, USA",
		text: "Open steel his hall from almost eros he to. Talethis did heal men ancient congealed hight him him come, done.",
	},
	{
		id: 3,
		image: "/person_3.png",
		name: "Ginny Greene",
		location: "Georgia, USA",
		text: "Heralds time times sick fondly be bidding delight. Childe of not sighed delphis the there, her spoiled domestic come but loved to.",
	},
];

const Testimonials = () => {
	return (
		<section className="py-12">
			<div className="max-w-5xl mx-auto bg-light rounded-[3rem] py-16 px-8">
				<h2 className="text-4xl text-center mb-12">
					What The People Think about Us
				</h2>
				<div className="grid grid-cols-3 gap-6">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
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
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
